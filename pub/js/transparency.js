import Ani from '../../pub/js/ani';
// export default class Transparency {
//     constructor(parse) {
//         console.log(parse)
//         this.parse = parse;
//     }
//     exce(item) {
//         item.classList.add('change2');
//         let addevent = function () {
//             item.classList.remove('change2');
//             item.removeEventListener('animationend', addevent);
//         }
//         item.addEventListener('animationend', addevent);
//     }
// }



// export default class Translate extends Animation{
//     constructor(){
//         super();
//     }
//     exce(){
//         let _this = this;
//         this.addEventListener.classList.add('change');
//         super.emit('animationstary');
//     }
// }


export default class Translste extends Ani{
    constructor(){
        super();
    }
    exce(el){
        el.classList.add('change2');
    }
    static install (){
        return new Translste;
    }
}