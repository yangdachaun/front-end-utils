import resolve from 'rollup-plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
// const typescript = require('@rollup/plugin-typescript')
// const commonjs = require('rollup-plugin-commonjs')
// const { nodeResolve } = require('@rollup/plugin-node-resolve');
export default {
    input: './src/index.ts', // 入口文件
    output: [
        {
            format: 'cjs', // 打包为commonjs格式
            file: 'dist/frontEndUtils.cjs.js', // 打包后的文件路径名称
            name: 'frontEndUtils' // 打包后的默认导出文件名称
        },
        {
            format: 'esm', // 打包为esm格式
            file: 'dist/frontEndUtils.esm.js',
            name: 'frontEndUtils'
        },
        {
            format: 'umd', // 打包为umd通用格式
            file: 'dist/frontEndUtils.umd.js',
            name: 'frontEndUtils',
            minifyInternalExports: true
        }
    ],
    plugins: [
        typescript({ tsconfig: './tsconfig.json' }),
        resolve(),
    ]
}