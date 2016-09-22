/**
 * Created by joshua on 2016/9/22.
 */
var buffer1 = new Buffer('TutorialsPoint ');
var buffer2 = new Buffer("Simply Easy Learning");
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log('Buffer3 content: ' + buffer3.toString());