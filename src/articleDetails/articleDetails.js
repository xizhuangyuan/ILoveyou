import rount from '../article-rount';
import Markdown from '../../pub/js/MarkDown';
class Url{
    constructor(url){
        this.url = url;
        this.json={};
        this.keyArr=[];
        this.exec();
    }

    exec(){
        // if(typeof this.url == 'object')return;
        if(Object.prototype.toString.call(this.url).slice(8,-1) == 'Object'){
            return;
        }
        let str = this.url.substring(1);
        this.keyArr = str.split("&");   // 字符串转换成数组
        this.keyArr.forEach(item=>{
            let tempArr = item.split('=');
            this.json[tempArr[0]] = tempArr[1];
        })
    }

    get(name){
        console.log(this.json[name]);
    }

    parse(){
        //  type=2&id=1&name=xiaoming
        var str  = '';
        for(const key in this.url){
            str+=key + '='+ this.url[key]+'&';
        }
        str = str.substring(0,str.length-1);
        console.log(str);
    }
}
var url1 = new Url(window.location.search);
rount.forEach(item=>{
    if(item.id == url1.json.type){
        let md = new Markdown(item.article);
        document.querySelector('.second-div').querySelector('p').innerHTML = md.parse();
    }
})
url1.get('type');  // 1
url1.get('id');   //2
url1.get('name');   // xiaoming

var params = {
    type:'1',
    id:1,
    name:'xiaoming'
}

var url2 = new Url(params)  
url2.parse() //  type=2&id=1&name=xiaoming