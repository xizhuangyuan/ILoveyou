class Ellipsis {
    constructor(props) {
        this.el = props.el;
        this.showFindAllButton = props.showFindAllButton
        this.textCount = props.textCount;
        this.findAllButtonText = props.findAllButtonText || '收起'
        this.flag = true;
    }
    exec() {
        var str = this.el.textContent;
        this.el.textContent = this.format(str,this.textCount);
        if(this.showFindAllButton){
            this.addButton(str,this.textCount);
        }
    }
    addButton(str,num){
        var _this = this;
        var a = document.createElement('a');
        a.textContent = this.findAllButtonText;
        this.el.appendChild(a);
        a.addEventListener('click',function(){
            _this.flag = !_this.flag;
            this.textcontent = _this.flag ? _this.findAllButtonText : '查看全部';
            _this.el.childNodes[0].textContent = _this.flag ? (_this.format(str,num)+'...') : str ;
        })
    }
    // 多出部分隐藏
    format(str,num){
        return str.length>num ? (str.substring(0,num)+'...') : str;
    }
}

let ellipsis = new Ellipsis({
    el: document.querySelector('.box'),
    textCount: 150,
    findAllButtonText: '查看所有',
    showFindAllButton: true,
})
ellipsis.exec();

