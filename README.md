# @mnrendra/rollup-plugin-dts
A [rollup-plugin-dts](https://www.npmjs.com/package/rollup-plugin-dts) with dual exports, allowing consumers to `import` or `require` it without needing to access the `.default` export in both **CommonJS** and **ES Module** formats.

*This 🍣 [Rollup](https://rollupjs.org/) plugin is only linked to [rollup-plugin-dts](https://www.npmjs.com/package/rollup-plugin-dts) version [^6.1.1](https://www.npmjs.com/package/rollup-plugin-dts/v/6.1.1), so it doesn’t modify any original code except for how it is exported and packaged.*

*Thank you to [@Swatinem](https://github.com/Swatinem) for creating [rollup-plugin-dts](https://www.npmjs.com/package/rollup-plugin-dts).*

## Install
```bash
npm i -D @mnrendra/rollup-plugin-dts
```

## Usage
For **ES modules** (`rollup.config.mjs`):
```javascript
import dts from '@mnrendra/rollup-plugin-dts'

export default {
  // ... any Rollup options
  plugins: dts({
    // rollup-plugin-dts's options
  })
}
```
For **CommonJS** (`rollup.config.js`):
```javascript
const dts = require('@mnrendra/rollup-plugin-dts')

module.exports = {
  // ... any Rollup options
  plugins: dts({
    // rollup-plugin-dts's options
  })
}
```

## Contribute
Contributions are always welcome! Feel free to start a discussion [here](https://github.com/mnrendra/rollup-plugin-dts/discussions).<br/>
*Or, if you find any issues with this package, please open an issue [here](https://github.com/mnrendra/rollup-plugin-dts/issues).*

## License
[MIT](https://github.com/mnrendra/rollup-plugin-dts/blob/HEAD/LICENSE)

## Author
[@mnrendra](https://github.com/mnrendra)
