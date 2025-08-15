module.exports = function(eleventyConfig) {
  // Tell Eleventy to copy the "css" folder to the output folder
  eleventyConfig.addPassthroughCopy("css");

  return {
	// Define the input and output directories
	dir: {
	  input: ".",
	  includes: "_includes",
	  output: "_site",
	},
  };
};