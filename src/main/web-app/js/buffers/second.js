/**
 * Created by joshua on 2016/9/22.
 */
buf = new Buffer(26);
for (var i=0;i<26;i++){
    buf[i] = i+ 97;
}

console.log(buf.toString('ascii'));             //output:abcdefghigklmnopqrstuvwxyz
console.log(buf.toString('ascii',0,5));         //output:abcde
console.log(buf.toString('utf8',0,5));          //output:abcde
console.log(buf.toString(undefined,0,5));       //encoding defaults to 'utf8',outputs abcde