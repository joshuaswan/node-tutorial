/**
 * Created by joshua on 2016/9/22.
 */
buf = new Buffer(256);
len = buf.write("Simply Easy Learning Node");

console.log("Octets written : " + len);