class Markdown {
    constructor(props) {
        this.props = props;
    }
    parseHtml() {
        let res = this.props.el.match(/(#+\s*)|\S+|\n/g).join('').split('\n');       // # hello   ## h2   ### h3   #### h4     ##### h5   ######h6
        //                               #和空格或者非空格或者回车    join  变成字符串   根据回车区分   
        var htmlArr = [];
        for (let i = 0; i < res.length; i++) {
            if (res[i].length) {
                var arr = res[i].split(' ');    // 根据空格匹配
                var el = document.createElement(`h` + arr[0].length);
                el.innerText = arr[1];
                htmlArr.push(el);
            }
        }
        return htmlArr;
    }
}

// let md = new Markdown({
//     el: document.querySelector('.item').innerText
// });
// // 输出hmtl
// let res = md.parseHtml();
// res.forEach(item=>{
//     document.querySelector('.box').appendChild(item);
// })
let md2 = new Markdown({
    el : document.querySelector('.item2').innerText,
})
let res2 = md2.parseHtml();

//作业二：
var deptData = [
    {
        deptName:'某某公司',
        type:2
    },
    {
        deptName:'子公司',
        type:4
    },
    {
        deptName:'子子部门',
        type:5
    }
]
var a = '2->4，5'; 
function format(){
    return a.replace(/\d+/g,function(item){
        return deptData.filter(data=>{
            return data.type == item;
        })[0].deptName;
    })
}
var res1 = format() // 某某公司->子公司，子子部门

//作业三：
var text = '{{ username }}';
// username是一个变量  用正则匹配到 username
// 方法一：
// '{{ username }}'.replace(/\{\{\s*(\S+)\s*\}\}/,'$1')
// 方法二：
// var a = text.match(/(?<=\{\{\s*)\S+(?=\s*\}\})/);
// 方法三：
// var a = /(?<=\{\{\s*)\S+(?=\s*\}\})/.exec(text)[0];


// 断言：   断：判断   言：说； 我判断
//先行断言  
// hello(?=world)   'helloworld' 可以匹配hello，但不包含world;
// hello(?=world)   'helloabc' 什么也匹配不到;
// 我判断，hello后跟的是world 如果不是，那匹配不成功；


//后行断方：
//(?<=hello)world  
// 我判断 world前面是不是hello ，如果是,那我返回world;