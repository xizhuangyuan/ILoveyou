// import webpackConfig from '../../config/webpack.config'
// import Webpack from '../../pub/js/webpack';
// let webpack = new Webpack(webpackConfig);
import Ani from '../../pub/js/ani';
import Transparency from '../../pub/js/transparency';
import Translate from '../../pub/js/TransLste';
let animate1 = Ani.create().use(Transparency).mount(document.getElementsByClassName('btn')[0]);
let animate2 = Ani.create().use(Translate).mount(document.getElementsByClassName('title')[0]);