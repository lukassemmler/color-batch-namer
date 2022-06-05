const diff = require('color-diff');
const util = require('../lib/util');
const ral = require('../data/ral-classic.json');
const example = require('../data/example-palette-2.json');

function compareColors() {
  const rgbByName = new Map();
  for (let color of ral.colors)
    rgbByName.set(color.nameGerman, util.hexToRgb(color.hex));
  const rawColors = Array.from(rgbByName.values());

  for (let color of example.colors) {
    const rgb = util.hexToRgb(color.hex);
    const closest = diff.closest(rgb, rawColors);
    const closestName = util.getKeyByValue(rgbByName, closest);
    const ralColor = ral.colors.find(color => color.nameGerman === closestName);
    console.log(`${color.hex} --> ${ralColor.hex} - ${ralColor.palette} ${ralColor.number} - ${closestName}`);
  }
}

module.exports.compareColors = compareColors;
