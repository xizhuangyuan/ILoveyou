export default class AAA{
    constructor(parse){
        this.parse = parse;
        this.complice1();
    }
    complice1(){
        let {entry,output} = this.parse;
        if(typeof entry == 'object'){
            for(const key in entry){
                var num = Math.floor(Math.random()*899999)+100000;
                console.log(`将${entry[key]}中的代码打包到${output.path}/${key}文件夹中,文件名为${key}.${num}.js`);
            }
        }else{
            console.log(`将${entry}中的代码打包到${output.path}/${output.filename.substring(0,output.filename.indexOf('/'))}/文件夹中,文件名称叫${output.filename.substring(output.filename.indexOf('/')+1,output.filename.length)}`);
        }
    }
}