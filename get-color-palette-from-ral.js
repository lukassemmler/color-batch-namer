// Go to https://www.ral-farben.de/alle-ral-farben for all RAL colors and run this script in console to scrape them
// as usable json output.
// Remember to update the palette name and filter accordingly, at the moment RAL offers three different color palettes.

function getColors(paletteName) {
  const colors = [];
  const colorsRaw = document.querySelectorAll(".farbe");
  for (const colorRaw of colorsRaw) {
    const number = colorRaw.querySelector(".number").textContent;
    const link = colorRaw.href;
    const nameRaw = colorRaw.querySelector(".subtext").childNodes;
    const nameGerman = nameRaw[0].textContent;
    const nameEnglish = nameRaw[2].textContent;
    // We don't use colorRaw.style.backgroundColor, because that returns a RGB string.
    const hex = colorRaw.attributes['style'].textContent.match(/#[0-9a-f]{6}/i)[0];
    colors.push({ palette: paletteName, number, hex, nameGerman, nameEnglish, link });
  }
  return colors;
}
getColors("RAL DESIGN SYSTEM plus");
