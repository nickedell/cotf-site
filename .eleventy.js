const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
	// Tell Eleventy to copy the "css" and "js" folders to the output folder
	eleventyConfig.addPassthroughCopy("css");
	eleventyConfig.addPassthroughCopy("js");

	// Create a new instance of the markdown library
	const md = new markdownIt({
		html: true, // Allow HTML tags in Markdown
	});

	// Add markdownify as a Nunjucks filter
	eleventyConfig.addNunjucksFilter("markdownify", (content) => {
		return md.render(content);
	});


	return {
		// Define the input and output directories
		dir: {
			input: ".",
			includes: "_includes",
			output: "_site",
		},
	};
};