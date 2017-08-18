'use strict';

const crypto = require('crypto');
const fs = require('fs');

const ts = require('typescript');
const babelTransform = require('./babelTransform');

const THIS_FILE = fs.readFileSync(__filename);
const tsConfigCompilerOptions = ts.readConfigFile(
  require.resolve('ts-config-react-app'),
  path => ts.sys.readFile(path)
).config.compilerOptions;

module.exports = {
  canInstrument: true,
  getCacheKey(fileData, filename, configString, transformOptions) {
    return crypto
      .createHash('md5')
      .update(THIS_FILE)
      .update('\0', 'utf8')
      .update(fileData)
      .update('\0', 'utf8')
      .update(configString)
      .update('\0', 'utf8')
      .update(JSON.stringify(tsConfigCompilerOptions))
      .update('\0', 'utf8')
      .update(transformOptions.instrument ? 'instrument' : '')
      .digest('hex');
  },
  process(src, filename, config, transformOptions) {
    const isTsFile = filename.endsWith('.ts');
    const isTsxFile = filename.endsWith('.tsx');

    if (isTsFile || isTsxFile) {
      const tsTranspiled = ts.transpileModule(src, {
        compilerOptions: tsConfigCompilerOptions,
        fileName: filename,
      });

      src = tsTranspiled.outputText;
      filename =
        filename.substring(0, filename.lastIndexOf('.')) +
        (isTsFile ? '.js' : '.jsx');
    }

    return babelTransform.process(src, filename, config, transformOptions);
  },
};
