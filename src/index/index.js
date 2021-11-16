// import webpackConfig from '../../config/webpack.config'
// import Webpack from '../../pub/js/webpack';
// let webpack = new Webpack(webpackConfig);
import Ani from '../../pub/js/ani';
import Transparency from '../../pub/js/transparency';
import Translate from '../../pub/js/TransLste';
let animate1 = Ani.create().use(Transparency).mount(document.getElementsByClassName('btn')[0]);
let animate2 = Ani.create().use(Translate).mount(document.getElementsByClassName('title')[0]);
document.querySelector('.btn').onclick = function () {
    window.location.href = 'http://localhost:8080/home.html';
}
let num = 0;
function addclass() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            num = parseInt(Math.random()*5);
            document.querySelector('.stars').children[num].classList.add('shan');
            resolve();
        }, 1000);
    })
}

function removeclass() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.querySelector('.stars').children[num].classList.remove('shan');
            resolve();
        }, 1000);
    })
}

setInterval(() => {
    (async function () {
        await addclass();
        await removeclass();
    })();
}, 1000);