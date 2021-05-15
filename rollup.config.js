import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import filesize from 'rollup-plugin-filesize';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import scss from 'rollup-plugin-scss';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy'

const plugins = [
    scss({
        output: "dist/styles.css",
        failOnError: true,
    }),
    postcss({
        minimize: true,
    }),
    resolve({
        extensions: ['.js', '.jsx']
    }),
    babel({
        babelHelpers: 'bundled',
        presets: ['@babel/preset-react'],
        exclude: 'node_modules/**',
    }),
    external(),
    filesize(),
    commonjs({
        include: ['node_modules/**']
    }),
    terser(),
];

const createConfig = (filename) => ({
    input: `src/components/${filename}`,
    output: {
        file: `./dist/${filename}.js`,
        format: 'es',
    },
    plugins,
});

const components = ['Card', 'TextInput', 'Textarea'];
const componentsConfig = components.map((file) => createConfig(file));

export default [
    ...componentsConfig,
    {
        input: `src/index.js`,
        output: [
            {
                file: `./dist/cjs/index.js`,
                format: 'cjs',
                name: 'skydeck',
            },
            {
                file: `./dist/esm/index.esm.js`,
                format: 'es',
            },
        ],
        plugins: [
            ...plugins,
            copy({
                targets: [
                    { src: ['./dist/*', '!**/*.css'], dest: './' }
                ],
                verbose: true,
                hook: 'writeBundle'
            })
        ],
    },
];
