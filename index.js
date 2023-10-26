import { fontSplit } from '@konghayao/cn-font-split';
// import { fontSplit } from "@konghayao/cn-font-split/dist/browser/index.js";
// import { fontSplit } from "https://cdn.jsdelivr.net/npm/@konghayao/cn-font-split@4.8.3/dist/browser/index.js";

fontSplit({
    FontPath: './harmonyos-sans-webfont/HarmonyOS_Sans_SC_Bold.ttf', // 部分 otf 文件会报错，最好使用 ttf 版本的字体
    destFold: './harmonyos-sans-webfont/bold', // 输出目录
    testHTML: false, // 输出一份 html 报告文件
    reporter: false, // 输出 json 格式报告
    // previewImage: {}, // 只要填入 这个参数，就会进行图片预览文件生成，文件为 SVG 格式
    threads: {}, // 默认开启多线程，速度飞快
    css: {
        // 覆盖默认的 css 设置，一般不需要进行更改
        // fontFamily: "HarmonyOS Sans SC",
        fontWeight: 700,
    },
    // 自定义分包输出的文件名为 10 位短哈希，或者使用自增索引: '[index][ext]'
    renameOutputFont: '[hash:10][ext]',
    // renameOutputFont: ({ transferred, ext, index }) => {
    //   return index.toString(36) + ext
    // } // 或者也可以像这样传入一个函数返回自定义的文件名
});