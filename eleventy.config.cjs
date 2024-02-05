module.exports = function (eleventyConfig) {
  eleventyConfig.setNunjucksEnvironmentOptions({
    throwOnUndefined: true,
    autoescape: false, // warning: don’t do this!
  });
  eleventyConfig.setBrowserSyncConfig({
    notify: true,
  });

  // Watch Targets
  eleventyConfig.addWatchTarget("./src/scss");

  // Passthrough
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("fontawesome");

  return {
    dir: {
      input: "src",
      output: "dist",
      layouts: "layouts",
    },
  };
};
