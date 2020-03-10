module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('assets')
    return {
        addPassthroughCopy: true
    }
}