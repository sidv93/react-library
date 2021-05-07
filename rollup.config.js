import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import filesize from 'rollup-plugin-filesize';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import scss from 'rollup-plugin-scss'

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs',
        },
        {
            file: 'dist/index.es.js',
            format: 'es',
            exports: 'named',
        }
    ],
    external: [
        'react',
        'react-dom'
    ],
    plugins: [
        scss(),
        resolve({
            extensions: ['.js', '.jsx']
        }),
        babel({
            presets: ['@babel/preset-react'],
            exclude: 'node_modules/**',
        }),
        external(),
        filesize(),
        commonjs({
            include: ['node_modules/**']
          }),
        terser()
    ]
};