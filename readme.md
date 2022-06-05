# Color Similarity Analyzer

* Command line tool (CLI) to help with naming a set of colors, comparing to a provided master palette.
* By default, this is the *RAL CLASSIC* palette, but you can add any arbitrary color palette (like PANTONE).
* The minimum requirement is that you provide a list of color hex codes (`#ffcc00` e.g. is a hex code for a golden color).


## Usage

1. Clone this repository.
2. Run `npm install` to install the dependencies.
3. Change the file `compare-colors.js` to include or adapt `example-palette-2.json` with your own colors.
4. Run `npm run start`, this will give you an output like this:
   ```txt
   #ffffff --> #F1F1EA - RAL CLASSIC 9016 - Verkehrsweiß
   #000000 --> #0E0E10 - RAL CLASSIC 9005 - Tiefschwarz
   #14111f --> #191E28 - RAL CLASSIC 5004 - Schwarzblau
   #CC2844 --> #C63F4A - RAL CLASSIC 3018 - Erdbeerrot
   #e73232 --> #FF2D21 - RAL CLASSIC 3024 - Leuchtrot
   ...
   ```


## Master Palettes

The follow master palettes are already built in:

* RAL CLASSIC
* RAL DESIGN SYSTEM plus
* RAL EFFECT


## Motivation

* During my working life as UX designer, I had to repeatedly find names for arbitrary color values.
* Finding a unique, good name for a color is not so easy, so I wanted to base the name on some color standard.
* I chose RAL because it's color system does have nice names and is a European standard.


## Other projects

* Color namers
  * [robertcoopercode/color-namer](https://github.com/robertcoopercode/color-namer) -- Color naming tool (see [live](https://colornamer.netlify.app/))
  * [colorfuldots.com](https://colorfuldots.com/color/2C3090) -- Color name with color data and component examples
* JavaScript libraries
  * [markusn/color-diff](https://github.com/markusn/color-diff) -- Color comparison library with the CIEDE2000 difference algorithm
  * [gka/chroma.js](https://github.com/gka/chroma.js) -- JavaScript library for all kinds of color manipulations and conversions
  * [meodai/color-names](https://github.com/meodai/color-names) -- Large list of handpicked color names
* Color lists and theory
  * [w3schools.com/colors](https://www.w3schools.com/colors/) -- Color theory, color schemes, color trends and color standards; especially for web
  * [ral-farben.de/alle-ral-farben](https://www.ral-farben.de/alle-ral-farben) -- All RAL colors with preview, German name, English name and usage examples.
  * [ral-farben.de/en/colour-feeling-2022](https://www.ral-farben.de/en/colour-feeling-2022) -- RAL color trend for 2022, *RELATE + SUPPORT* (functional and sensuous-aesthetic design)
  * [ral-farben.de/en/colour-feeling-2021](https://www.ral-farben.de/en/colour-feeling-2021) -- RAL color trend for 2021, *re**Think*** (humane use of color)


## Credits

Lukas Semmler (c) 2022
