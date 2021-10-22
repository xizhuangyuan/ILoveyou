class Ani {
    constructor(parse) {
        this.parse = parse.targets;
        this.count = parse.count;
        this.newArr = this.parse.slice();
        // this.index = parse.curindex;
        this.animation(this.newArr);
    }
    animation(arr) {
        if (!arr.length) {
            this.count--;
            if(this.count == this.index){
                this.newArr = this.parse.slice().reverse();
                setTimeout(() => {
                    this.animation(this.newArr);
                }, 0);
                return;
            }
            this.newArr = this.parse.slice();
            if (this.count) {
                setTimeout(() => {
                    this.animation(this.newArr);
                }, 0);
            } else {
                return;
            }
        } else {
            var item = arr.shift();
            var _this = this;
            item.el.classList.add(item.animationClassName);
            const handleEventlister = function () {
                _this.animation(arr);
                item.el.removeEventListener('animationend',handleEventlister);
            }
            item.el.addEventListener('animationend',handleEventlister);
        }
    }
}

var ani = new Ani({
    targets: [
        {
            el: document.getElementsByClassName('main-center-left_div')[0],
            animationClassName: 'change'
        },
        {
            el: document.getElementsByClassName('main-center-left_div')[1],
            animationClassName: 'change'
        },
        {
            el: document.getElementsByClassName('main-center-left_div')[2],
            animationClassName: 'change'
        },
    ],
    count: 1,
})
