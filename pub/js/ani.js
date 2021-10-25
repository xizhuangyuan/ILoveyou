// import TransLaste from "./TransLste";
// import Transparency from "./transparency";
export  default class Animate{
    static el;
    constructor(){
        
    }
    static create(){
        return new Animate();
    }
    mount(el){
        this.el = el;
        this.model().exce(el);
    }

    use(Translste){
        try{
            this.model = Translste.install;
        }catch(e){
            Translaste;
        }
        return this;
    }
}
