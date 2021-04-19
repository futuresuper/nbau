// Declare filters

// JS minification filter
const { minify } = require("terser");

// CSS minification filter
const CleanCSS = require("clean-css");

// Inline SVGs
const svgContents = require("eleventy-plugin-svg-contents");

module.exports = (config) => {
  // Watch for changes in /sass
  config.addWatchTarget("./src/sass/");

  // Take the contents of /the following directories and pass through to /dist
  config.addPassthroughCopy("./src/manifest.json");
  config.addPassthroughCopy("./src/fonts/");
  config.addPassthroughCopy("./src/images/");
  config.addPassthroughCopy("./src/css/");

  // Allow JavaScript to be minified via the jsmin Nunjucks filter
  // https://www.11ty.dev/docs/quicktips/inline-js/
  config.addNunjucksAsyncFilter("jsmin", async function (code, callback) {
    try {
      const minified = await minify(code);
      callback(null, minified.code);
    } catch (err) {
      console.error("Terser error: ", err);
      // Fail gracefully.
      callback(null, code);
    }
  });

  config.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  return {
    // Tell Eleventy to process Markdown, data, and HTML with Nunjucks
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    // Set which directories Eleventy reads from and writes to
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
