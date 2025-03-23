module.exports = function (eleventyConfig) {
  // Add collections for blog, photography, design
  eleventyConfig.addCollection("blog", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/content/blog/*.md");
  });
  eleventyConfig.addCollection("photography", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/content/photography/*.webp");
  });
  eleventyConfig.addCollection("design", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/content/design/*.webp");
  });

  // Add passthrough copy for images (and other static assets like js)
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/css");

  // Return the configuration object
  return {
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
  };
};
