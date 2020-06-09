const _ = require("lodash");

function log(date, importance, message) {
    console.log(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
}

const log1 = _.curry(log);
log1(new Date(), "DEBUG", "some debug 1");
log1(new Date())("DEBUG")("some debug 2");

const log2 = _.curry(log);
const logNow1 = log2(new Date());
logNow1("INFO", "message 1");
logNow1("INFO", "message 2");

const log3 = _.curry(log);
const logNow2 = log3(new Date());
const errorNow = logNow2("ERROR");
errorNow("error 1");
errorNow("error 2");