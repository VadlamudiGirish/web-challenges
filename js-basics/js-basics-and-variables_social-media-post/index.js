console.clear();

/*
1. Create the data for a small social media post. Create a constant variable for each data point listed below:
	- a title for the post
	- text content for the post
	- the number of likes the post has received
	- the user who created the post
	- a boolean called `isReported` to indicate whether the post has been reported
*/

// --v-- write your code here --v--

const title = "Javascript Basics!!!";
const text =
  "In this class we are going to learn about the javascript basics and variables.";
let numberOfLikes = 108;
const user = "Girish Vadlamudi";
const isReported = false;

// --^-- write your code here --^--

/*
2. Log all variables to the console. Then increase the number of likes by one and log the updated like count. Modify your code from step 1 if necessary.
*/

// --v-- write your code here --v--
console.log("title:", title);
console.log("text:", text);
console.log("numberOfLikes:", numberOfLikes);
console.log("user:", user);
console.log("isReported:", isReported);
numberOfLikes++;
console.log("numberOfLikesIncreased:", numberOfLikes);

// --^-- write your code here --^--
