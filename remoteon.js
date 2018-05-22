var jlib = require('jingtum-lib');
var Remote = jlib.Remote;
var remote = new Remote({server: 'ws://101.200.176.238:5020', local_sign:true});

remote.connect(function (err, result) {
if (err) { return console.log('err:', err); } 

remote.on('transactions', function (msg) {
    console.log('tx: ',msg);
});

remote.on('ledger_closed', function (msg) {
    console.log('ledger: ',msg);
});
});
