'use strict';

const ts = require('typescript');
const babelTransform = require('./babelTransform');

const tsConfigCompilerOptions = ts.readConfigFile(
  require.resolve('ts-config-react-app')
).config.compilerOptions;

module.exports = {
  process(src, path, config, options) {
    if (path.endsWith('.ts') || path.endsWith('.tsx')) {
      let compilerOptions = compilerConfig;
      if (options.instrument) {
        // inline source with source map for remapping coverage
        compilerOptions = Object.assign({}, compilerConfig);
        delete compilerOptions.sourceMap;
        compilerOptions.inlineSourceMap = true;
        compilerOptions.inlineSources = true;
        // fix broken paths in coverage report if `.outDir` is set
        delete compilerOptions.outDir;
      }

      const tsTranspiled = tsc.transpileModule(src, {
        compilerOptions: compilerOptions,
        fileName: path,
      });
      return tsTranspiled.outputText;
    }
    return src;
  },
};
