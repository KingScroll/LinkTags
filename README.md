# LinkTag
 > The LinkTag Tool is a simple quality of life utility that makes tagging people far easier in html pages
 
 ## Simple Links via Tags
 The idea behind LinkTag is to give anyone and everyone with an HTML page the ability to tag users without having to create an HTML link.
 
 For example, say you want to tag Selena Gomez while writing. If you were on Twitter or Instagram, you could simply tag her by writing __@selenagomez__.
 
 But you can't tag her, or anyone, so easily on a blog. You'd need to type this: 
 
		<a href = "https://linktr.ee/selenagomez/" target = "_blank"> @selenagomez </a>

With LinkTag, you can just write __@selenagomez__ and call it a day.

## Flexible Link Pointing
Say you want to tag Terry Crews' Twitter, not his LinkeTree, how do you do  that?

Easily.

__@terrycrews:twitter__

will output:

	<a href = "https://twitter.com/terrycrews/" target = "_blank"> @terrycrews </a>
	
	
## Customization
If you want to customize LinkTag.js by adding your own social media links, or creating your own parameters, all you have to do is open a code editor and edit the file. 

To create new social media roots, edit the LinkTag file by adding a link and a denoter for the media you desire in the appropriate sections:

	/* Link Section */
	var link_github = "https://github.com/";
	
	/* Denotations Section */
	var denoter_github = "github";
	
and then a switch case for it in the __Switch Case__ section.

	/* Denoter Switch Cases */
	...
	case denoter_github:
		linkbase = link_github;
		break;
		
and you're done!

## Installation

To include LinkTag in your project, all you have to do is download LinkTag.js, or copy its contents into your own file, and include that file in the 'head' of your HTML like so:

	<script defer src = "YourDirectoryHere/LinkTag.js"></script>

## Roadmap
- Clean Up Code & Optimize
- Add ability to associate a specific tag with a specific website without having to make an if statement for every single potential person.

	In other words, if I tag @juanlam, LinkTag will link to https://juanlam.com instead of https://linktr.ee/juanlam/
	
---
# Contributing
The LinkTag tool is entirely free to use and Open Source. If you want to modify it for your needs, you're encouraged to! I've left extensive comments on my code, so everything should be clear. However, I highly encourage everyone who feels like it could be sharpened up a bit to contribute features or increase performance :)

## How to Contribute
You can contribute to the LinkTag project by:
- Reporting issues and bugs, or requesting features [here](https://github.com/KingScroll/LinkTags/issues)
- Creating a pull request to help me (give me a heads up!):
    * If you fix an existing bug, prefix title with `fix: `.
    * If you implement new features, prefix title with `feat: `.
    * Fix grammar errors or improve my documentations, prefix title with `doc: `.
    * Anything else should be formatted with `other: ` 
	


 
 
