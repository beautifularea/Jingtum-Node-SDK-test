var jlib = require('jingtum-lib');
var Remote = jlib.Remote;
var remote = new Remote({server: 'ws://101.200.176.238:5020', local_sign:true});
remote.connect(function(err, result) {
    if (err) {
        return console.log('err:',err);
    }
    var tx = remote.buildPaymentTx({
                    account: 'jB7rxgh43ncbTX4WeMoeadiGMfmfqY2xLZ',
                    to: 'jDUjqoDZLhzx4DCf6pvSivjkjgtRESY62c',
                    amount: {
                    "value": 0.5,
                    "currency": "SWT",
                    "issuer": ""
                    }
            });

    tx.setSecret('sn37nYrQ6KPJvTFmaBYokS3FjXUWd');
    tx.addMemo('给jDUjqoDZLhzx4DCf6pvSivjkjgtRESY62c支付0.5swt.');//可选
    
    tx.submit(function(err, result) {
        if(err) {console.log('err:',err);}  
        else if(result){console.log('res:', result);}

        remote.disconnect();
    });

});
