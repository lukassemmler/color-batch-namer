const diff = require('color-diff');
const util = require('./lib/util');
const ral = require('./data/ral-palette.json');
const example = require('./data/example-palette.json');

const rgbByName = new Map();
for (let color of ral.palette)
  rgbByName.set(color.name, util.hexToRgb(color.hex));
const rawColors = Array.from(rgbByName.values());

for (let color of example.palette) {
  const rgb = util.hexToRgb(color.hex);
  const closest = diff.closest(rgb, rawColors);
  const closestName = util.getKeyByValue(rgbByName, closest);
  console.log(color.hex + " --> " + closestName + " " + ral.palette.find(color => color.name === closestName).hex);
}
