/**
 * Created by joshua on 2016/9/22.
 */
var buf = new Buffer('Simply Easy Learning');
var json = buf.toJSON(buf);

console.log(json);