const hb_currency = require('./sdk/hb_currency');
var hbconfig = require('./job/hbconfig');

var config = hbconfig.hbconfig;


let  run = ()=>{
    hb_currency.get_currency('eosusdt',config).then(console.log);
}
run();