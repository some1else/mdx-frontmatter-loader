const frontmatter = require('front-matter');
const fs = require('fs');

module.exports = function (source) {
  if (this.cacheable) {
    this.cacheable();
  }
  
  const file = fs.readFileSync(this.resource);
  const { attributes } = frontmatter(file.toString());
  const modifiedSource = `
    ${source};\n
    export const attributes = ${JSON.stringify(attributes)};\n
  `;
  return modifiedSource;
}
