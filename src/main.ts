import dts from 'rollup-plugin-dts'

import { PLUGIN_NAME, PACKAGE_NAME } from './consts'

import { findPlugin } from './utils'

/**
 * A
 * [rollup-plugin-dts](https://www.npmjs.com/package/rollup-plugin-dts)
 * with dual exports, allowing consumers to `import` or `require` it without
 * needing to access the `.default` export in both **CommonJS** and
 * **ES Module** formats.
 *
 * @see https://github.com/mnrendra/rollup-plugin-dts#readme
 */
const main = findPlugin<typeof dts>(dts, PLUGIN_NAME, PACKAGE_NAME)

export default main
