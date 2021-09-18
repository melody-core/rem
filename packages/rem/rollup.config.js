import babel from 'rollup-plugin-babel';
import tslint from 'rollup-plugin-tslint';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-auto-external';
import autoprefixer from 'autoprefixer';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import svgr from '@svgr/rollup';
import url from '@rollup/plugin-url';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    tslint({
      throwOnError: true,
      throwOnWarning: true,
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      exclude: ['node_modules/**', '*.js', '*.scss', '*.module.css', '*.css'],
    }),
    typescript(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
    }),
    external({
      includeDependencies: true,
    }),
    resolve(),
    commonjs(),
    postcss({
      plugins: [autoprefixer()],
      sourceMap: true,
      extract: true,
      minimize: true,
    }),
    url(),
    svgr(),
    terser(),
  ],
};
