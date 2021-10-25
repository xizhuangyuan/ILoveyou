import nanquan1 from './article/南拳1.html';
import nanquan2 from './article/南拳2.html';
import nanquan3 from './article/南拳3.html';
import nanquan4 from './article/南拳4.html';
import nanquan5 from './article/南拳5.html';
function HTMLarticle(str) {
    var span = document.createElement('span');
    span.innerHTML = str;
    return span.querySelector('template').innerHTML;
}
export default[
    {
        id: 1,
        // title: '如何看待知乎上的男拳',
        article: HTMLarticle(nanquan1),
    },
    {
        id: 2,
        // title: '如何看待知乎上的男拳',
        article: HTMLarticle(nanquan2),
    },
    {
        id: 3,
        // title: '如何看待知乎上的男拳',
        article: HTMLarticle(nanquan3),
    },
    {
        id: 4,
        // title: '如何看待知乎上的男拳',
        article: HTMLarticle(nanquan4),
    },
    {
        id: 5,
        // title: '如何看待知乎上的男拳',
        article: HTMLarticle(nanquan5),
    },
]