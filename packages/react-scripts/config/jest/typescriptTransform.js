// @remove-on-eject-begin
/**
 * Copyright (c) 2017-present, Christian Tinauer
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// @remove-on-eject-end

'use strict';

const crypto = require('crypto');
const path = require('path');
const fs = require('fs');
const ts = require('typescript');

const THIS_FILE = fs.readFileSync(__filename);

function createTransformer(babelTransformer, tsConfigCompilerOptions) {
  return {
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

      return babelTransformer.process(src, filename, config, transformOptions);
    },
  };
}

function parseTsConfig(fileName, appPath) {
  return ts.parseJsonConfigFileContent(
    ts.readConfigFile(fileName, path => ts.sys.readFile(path)).config,
    ts.sys,
    appPath
  );
}

const appPath = fs.realpathSync(process.cwd());
const ejectedTsConfigPath = path.resolve(appPath, 'tsconfig.json');

module.exports = createTransformer(
  require('babel-jest'),
  parseTsConfig(
    fs.existsSync(ejectedTsConfigPath)
      ? ejectedTsConfigPath
      : require.resolve('ts-config-typed-react-app'),
    appPath
  ).options
);

// @remove-on-eject-begin
module.exports = createTransformer(
  require('./babelTransform'),
  parseTsConfig(require.resolve('ts-config-typed-react-app'), appPath).options
);
// @remove-on-eject-end
