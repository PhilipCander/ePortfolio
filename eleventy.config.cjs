module.exports = function (eleventyConfig) {
  eleventyConfig.sutNunjucksEnvironmentOptions({
    throwOnUndefined: true,
    autoescape: false,
  });
  eleventyConfig.setBrowserSyncConfig({
    notify: true,
  });

  // Watch Targets
  eleventyConfig.addWatchTarget("./src/scss");

  // Passthrough
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("js");

  return {
    dir: {
      input: "src",
      output: "dist",
      layouts: "layouts",
    },
  };
};
