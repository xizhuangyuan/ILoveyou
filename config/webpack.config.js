// var abc = 
// export default 
//作业： 页面输出：
// 将./src/home/index.js中的代码打包到/docs/home/文件夹中，文件名称叫index.js

// export default {
//     entry : './src/home/index.js',
//     output : {
//         filename : 'home/index.js',
//         path : '/docs',
//     }
// }

export default {
    entry:{
        home:'./src/home/home.js',
        index:'./src/index/index.js',
        hello : 'hello',
    },
    output:{
        filename:'[name].[contenthash].js',
        path:'/docs'
    }
}
