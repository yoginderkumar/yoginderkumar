module.exports = function(eleventyConfig) {
    eleventyConfig.addWatchTarget("./src/assets");
    eleventyConfig.addWatchTarget("./tailwind.config.js");
    
    eleventyConfig.addPassthroughCopy("./src/assets");

    eleventyConfig.addLayoutAlias("base", "base.njk");
    
    return {
      dir: {
        input: 'src',
        output: 'dist',
        includes: '_includes'
      },
      passthroughFileCopy: true,
      templateFormats: ["njk", "md"],
      markdownTemplateEngine: "njk",
    };
  };