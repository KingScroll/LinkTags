/*Configuration Section*/
    // If you want to add more root links, feel free to do so here:

    var link_default = "https://linktr.ee/"; // The default link is currently linktree, but you can replace this with whatever you want!
    //for example: if you wish to make instagram your default you would do this: var link_default = link_instagram;

    var link_instagram = "https://instagram.com/";
    var link_twitter = "https://twitter.com/";
    var link_subreddit = "https://reddit.com/r/";
    var link_reddit = "https://reddit.com/u/";
    var link_facebook = "https://facebook.com/";


/* Function Section */

/*Step One: Find every paragraph element in the document
Step Two: Loop through every paragraph
Step Three: While in the loop, turn the innertext into a string
Step Four: Check for @ symbols, get position
Step Five: Check if tag has space after. If yes, go to next <p>
Step Six: If no, then grab all characters found up until a space
Step Seven: Replace "@text" with a link in a specific format */

var paragraph = document.getElementsByTagName("P");
var paragraphcount = document.getElementsByTagName("P").length;

var counter;
console.log(paragraphcount + " paragraphs in document");

//Loop Through Every Paragraph in the document
for (counter = 0; counter < paragraphcount; counter++) {
    console.log("Current Paragraph: " + (counter + 1));
    var currentparagraph = paragraph[counter].innerText;
    var currentparagraphHTML = paragraph[counter].innerHTML;
    var numAts = 0;

    //Check if current paragraph contains @
  if (currentparagraph.indexOf("@") != -1){

    // Check for @ within a paragraph
      var i;
      for (i = 0; i < currentparagraph.length; i++){

          //If the current position of the traversal has an @...
          if (currentparagraph[i] == "@"){
              var AtStart = i;

              // Check if the @ is a tag or just an @
              if (currentparagraph[AtStart+1] == ' ' || currentparagraph[AtStart+1] == ',' || currentparagraph[AtStart+1] == '.' 
              || currentparagraph[AtStart+1] == ';' || currentparagraph[AtStart+1] == '-' || currentparagraph[AtStart+1] == '!' 
              || currentparagraph[AtStart+1] == '?' || currentparagraph[AtStart+1] == '*' || currentparagraph[AtStart+1] == ')'
              || currentparagraph[AtStart+1] == ']' || currentparagraph[AtStart+1] == '/'){
                  console.log("@ found in: " + i + ", but not a tag!");
              }
              else {
                  numAts++;

                  console.log("Tag found at: " + AtStart);
                  //Traverse forward from AtStart
                    for (var j = AtStart; j < currentparagraph.length; j++){

                        //Find end of tag (the first space after the @)
                        if (currentparagraph[j] == ' ' || currentparagraph[j] == ',' || currentparagraph[j] == '.' 
                            || currentparagraph[j] == ';' || currentparagraph[j] == '-' || currentparagraph[j] == '!' 
                            || currentparagraph[j] == '?' || currentparagraph[j] == '*' || currentparagraph[j] == ')'
                            || currentparagraph[j] == ']' || currentparagraph[j] == '/' || currentparagraph[j] == ':'){ 
                            var tagStart = AtStart;
                            var tagEnd = j;
                            var tagLength = tagEnd - tagStart;

                            //Grab everything after the @ and up to the next space character
                            var tagID = currentparagraph.substr(tagStart + 1, tagLength - 1); //Just the name
                            var tag = currentparagraph.substr(tagStart, tagLength); // name + @ symbol

                            //Create link!
                            var hyperlink = linkbase + tagID;
                            //Create link HTML
                            var tagLink = '<a href="' + hyperlink + '" target = "_blank">' + tagID + "</a>";
                            //Re-write Document to create new link :D
                            document.body.innerHTML = document.body.innerHTML.replace(tag, '@<style> font-weight: bold; </style>' + tagLink);
                            console.log("Tag Replaced with Link!");
                                    
                            tagStart = 0;
                            tagEnd = 0;
                            break;
                        }
                        
                    }
                }
            }

              
      }
  }
}

/* Some Notes:

First of all, sorry for the messy code. I'm a hobbyist, not a pro. Thank you for checking out my project and bearing with me :)

If there are two @persons within the same paragraph, the program won't replace the second @person (or third, or fourth, presumably).
My solution to this problem is simply to replace the @person text with a link that is just "person", and pre-pend an "@" in front of
of the link. It would be cool to fix this, but I'm not sure how!

*/