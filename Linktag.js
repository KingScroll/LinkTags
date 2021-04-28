/*V1 Created by Juan Lam
  April 28th, 2021 */


/*Configuration Section*/
    // If you want to add more root links, feel free to do so here:

    var link_default = "https://linktr.ee/"; // The default link is currently linktree, but you can replace this with whatever you want!
    //for example: if you wish to make instagram your default you would do this: var link_default = link_instagram;

    var link_instagram = "https://instagram.com/";
    var link_twitter = "https://twitter.com/";
    var link_subreddit = "https://reddit.com/r/"; // for a subreddit community
    var link_reddit = "https://reddit.com/u/"; // for a reddit user
    var link_facebook = "https://facebook.com/";

    /* linkbase denotations */
    var denoter_instagram = "instagram";
    var denoter_twitter = "twitter";
    var denoter_subreddit = "subreddit";
    var denoter_reddit = "reddit";
    var denoter_facebook = "facebook";

    // When adding root links and linkbase denotations, make sure to add an appropriate switch case!
    // Switch Cases may be found on line 107

/* Functions Section */

/*Step One: Find every paragraph element in the document
Step Two: Loop through every paragraph
Step Three: While in the loop, turn the innertext into a string
Step Four: Check for @ symbols, get position
Step Five: Check if tag has space after. If yes, go to next <p>
Step Six: If no, then grab all characters found up until a space
Step Seven: Replace "@text" with a link in a specific format */

var elems = document.getElementsByTagName("*"); // count of all 
var elemCount = document.getElementsByTagName("*").length; // Count of all elements in the document
var elemCounter;

//Loop Through Every Element in the document
for (elemCounter = 0; elemCounter < elemCount; elemCounter++) {

    var currentElem = elems[elemCounter].innerText;
    var currentElemHTML = elems[elemCounter].innerHTML;
    var numAts = 0;

    //Check if current Element contains @
  if (currentElem.indexOf("@") != -1){

    // Find index of @ within Element
      var i;
      for (i = 0; i < currentElem.length; i++){

          //If the current position of the traversal has an @...
          if (currentElem[i] == "@"){
              var AtStart = i;

              // Check if the @ is a tag or just an @
              if (currentElem[AtStart+1] == ' ' || currentElem[AtStart+1] == ',' || currentElem[AtStart+1] == '.' 
              || currentElem[AtStart+1] == ';' || currentElem[AtStart+1] == '-' || currentElem[AtStart+1] == '!' 
              || currentElem[AtStart+1] == '?' || currentElem[AtStart+1] == '*' || currentElem[AtStart+1] == ')'
              || currentElem[AtStart+1] == ']' || currentElem[AtStart+1] == '/'){
                  console.log("@ found in: " + i + ", but not a tag!");
              }

              //It is a tag!
              else {
                  numAts++;

                  //Traverse forward from AtStart
                    for (var j = AtStart; j < currentElem.length; j++){

                        //Find end of tag (the first one of these characters after the @)
                        if (currentElem[j] == ' ' || currentElem[j] == ',' || currentElem[j] == '.' 
                            || currentElem[j] == ';' || currentElem[j] == '-' || currentElem[j] == '!' 
                            || currentElem[j] == '?' || currentElem[j] == '*' || currentElem[j] == ')'
                            || currentElem[j] == ']' || currentElem[j] == '/' || currentElem[j] == ':'){ 
                            
                            var tagStart = AtStart;
                            var tagEnd = j;
                            var linkbase = link_default;
                            var denoter_pos = tagEnd;

                            //Check for a linkbase denoter
                                if (currentElem[j] == ':'){

                                    //if colon is followed by any of these characters, it's not a denoter
                                    if (currentElem[j+1] == ' ' || currentElem[j+1] == ',' || currentElem[j+1] == '.' 
                                    || currentElem[j+1] == ';' || currentElem[j+1] == '-' || currentElem[j+1] == '!' 
                                    || currentElem[j+1] == '?' || currentElem[j+1] == '*' || currentElem[j+1] == ')'
                                    || currentElem[j+1] == ']' || currentElem[j+1] == '/' ){
                                        console.log("Not a denotation!");
                                    }

                                    else {

                                        denoter_pos = j; // get position of denoter

                                        // Grab the denoter string by looping through characters until special end character is reached
                                        for (var d = j+1; d < currentElem.length; d++){
                                                if (currentElem[d] == ' ' || currentElem[d] == ',' || currentElem[d] == '.' 
                                                    || currentElem[d] == ';' || currentElem[d] == '-' || currentElem[d] == '!' 
                                                    || currentElem[d] == '?' || currentElem[d] == '*' || currentElem[d] == ')'
                                                    || currentElem[d] == ']' || currentElem[d] == '/' || currentElem[d] == ':'){
                                                        var denoterStart = j+1; // denoterStart is first character after :
                                                        var denoterEnd = d; // denoterEnd is the position of a special character
                                                        tagEnd = denoterEnd;
                                                        var denoterLength = denoterEnd - denoterStart; 
                                                        var denoter = currentElem.substr(denoterStart, denoterLength);

                                                        /* Denoter Switch Cases */
                                                        switch(denoter){

                                                            case denoter_instagram:
                                                                linkbase = link_instagram;
                                                                break;

                                                            case denoter_twitter:
                                                                linkbase = link_twitter;
                                                                break;

                                                            case denoter_subreddit:
                                                                linkbase = link_subreddit;
                                                                break;
                                                            
                                                            case denoter_reddit:
                                                                linkbase = link_reddit;
                                                                break;
                                                            
                                                            case denoter_facebook:
                                                                linkbase = link_facebook;
                                                                break;
                                                                
                                                        }

                                                        break;
                                                    }
                                        }

                                    }

                                }

                                var tagLength = tagEnd - tagStart;
                                var tagIDLength = denoter_pos - tagStart;

                                //Grab everything after the @ and up to the next space character
                                var tag = currentElem.substr(tagStart, tagLength); // name + @ symbol
                                var tagID = currentElem.substr(tagStart + 1, tagIDLength - 1); //output link text

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

First of all, sorry for the messy code. I'm a hobbyist, not a pro. Thank you for checking out my project.

- I'm looking to clean up the way that the program checks for particular characters. Having a bunch of if statement conditions
is not very intuitive.

- If there are two @persons within the same paragraph, the program won't replace the second @person (or third, or fourth, presumably).
My solution to this problem is simply to replace the @person text with a link that is just "person", and pre-pend an "@" in front of
of the link  after. It would be cool to fix this, but I'm not sure how

*/