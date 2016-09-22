/**
 * Created by joshua on 2016/9/22.
 */
var buffer1 = new Buffer("TutorialsPoint");
//slicing a buffer 
var buffer2 = buffer1.slice(0,9);
console.log("buffer2 content: " + buffer2.toString());