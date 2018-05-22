var jlib = require('jingtum-lib');
var Remote = jlib.Remote;
//var remote = new Remote({server: 'ws://192.168.208.185:5060', local_sign:true});
var remote = new Remote({server: 'ws://101.200.176.238:5020', local_sign:true});
remote.connect(function (err, result) {
    if (err) {
        return console.log('err:', err);
    } 

    var options = {
    type: 'Sell',
    account: 'jB7rxgh43ncbTX4WeMoeadiGMfmfqY2xLZ',
    taker_gets: {
    value: '0.01',
    currency: 'CNY',
    issuer: 'jBciDE8Q3uJjf111VeiUNM775AMKHEbBLS'
    },
    taker_pays: {
    value: '1',
    currency: 'SWT',
    issuer: ''
    }
    };

    var tx = remote.buildOfferCreateTx(options);
    tx.setSecret('sn37nYrQ6KPJvTFmaBYokS3FjXUWd');
    tx.submit(function (err, result) {
    if (err) {
        console.log('err:', err);
    }
    else if (result) {console.log('res:', result);}

    remote.disconnect();
    });
});
