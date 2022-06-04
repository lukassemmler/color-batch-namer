/**
 * Return color as RGB object from hex string
 * @author Tim Down
 * @date 2011-04-11
 * @see https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
 * @param {string} hex - Hex code in string format
 * @returns {object} - object with r, g and b property
 */
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result)
    return null;
  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  }
}

function getKeyByValue(map, value) {
  const keys = Array.from(map.keys());
  const match = keys.find(key => JSON.stringify(map.get(key)) === JSON.stringify(value));
  if (!match)
    return null;
  return match;
}

module.exports.hexToRgb = hexToRgb;
module.exports.getKeyByValue = getKeyByValue;
