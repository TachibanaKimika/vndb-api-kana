import dts from 'rollup-plugin-dts';
import typescript from 'rollup-plugin-typescript2';
import sourceMaps from 'rollup-plugin-sourcemaps';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: './src/index.ts',
    plugins: [
      typescript({
        // exclude: "node_modules/**",
        // eslint-disable-next-line global-require
        typescript: require('typescript'),
      }),
      sourceMaps(),
      terser(),
    ],
    output: [
      {
        format: 'cjs',
        file: 'dist/index.cjs.js',
        sourcemap: true,
      },
      {
        format: 'esm',
        file: 'dist/index.mjs.js',
        sourcemap: true,
      },
    ],
  },
  {
    input: './src/index.ts',
    plugins: [dts()],
    output: [
      {
        format: 'es',
        file: 'dist/index.d.ts',
      },
    ],
  },
];
