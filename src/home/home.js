import Ani from '../../pub/js/ani';
import Translate from '../../pub/js/TransLste';
import Transparency from '../../pub/js/transparency';
import rount from '../article-rount';
Ani.create().use(Transparency).mount(document.getElementsByClassName('tit')[0]); // 动画
Ani.create().use(Translate).mount(document.getElementsByClassName('header-center-right_div1_text')[0]); // 动画
var size = 160;        // 多少个字符换行
var odiv = document.querySelector('.main-center-left');     // 父节点
var idiv = odiv.querySelector('.template');    //  克隆子节点
String.prototype.ellipsis = function (size) {
    if (this.length > size) {
        let newstr = this.substr(0, size) + '...';
        return newstr;
    }
    return this;
}
// 动态克隆div并且创建div
function addtext(text) {
    var newdiv = idiv.content.cloneNode(true);
    newdiv.querySelector('.text').innerHTML = text.article.ellipsis(size);
    newdiv.querySelector('.text').querySelector('h2').dataset.id = text.id;
    newdiv.querySelector('.text').querySelector('h2').onclick = function (e) {
        window.location.href = './articleDetails.html?type=' + e.target.dataset.id + '&id=1&name=xiaoming';
    }
    if (text.article.ellipsis(size).length > size) {
        newdiv.querySelector('.btn').querySelector('.details').style.display = 'inline-block';
    }

    newdiv.querySelector('.btn').querySelector('.details').onclick = function (e) {
        e.target.parentNode.parentNode.querySelector('.text').innerHTML = text.article.replace(/\n/g, '<br>');
        e.target.parentNode.querySelector('.away').style.display = 'inline-block'
        e.target.style.display = 'none';
    }

    newdiv.querySelector('.btn').querySelector('.away').onclick = function (e) {
        e.target.parentNode.parentNode.querySelector('.text').innerHTML = text.article.ellipsis(size);
        e.target.parentNode.querySelector('.details').style.display = 'inline-block'
        e.target.style.display = 'none'
    }

    return newdiv
}
var fragment = document.createDocumentFragment();
for (var i = 0; i < 2; i++) {
    if (i < 3) {
        var text = rount.shift();
        fragment.appendChild(addtext(text));
    }
}
odiv.appendChild(fragment);
document.querySelector('.addbtn').onclick = function (e) {
    if (!rount.length) {
        e.target.style.display = 'none';
        return;
    }
    var text = rount.shift();
    odiv.appendChild(addtext(text));
}