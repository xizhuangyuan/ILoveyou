import Ani from '../../pub/js/ani';
export default class Translste extends Ani{
    constructor(){
        super();
    }
    exce(el){
        el.classList.add('change');
    }
    static install (){
        return new Translste;
    }
}

