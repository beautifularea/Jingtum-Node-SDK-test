var jlib = require('jingtum-lib');
var Remote = jlib.Remote;
var remote = new Remote({server: 'ws://101.200.176.238:5020', local_sign:true});
remote.connect(function(err, result) {
    if (err) {
        remote.disconnect();
        return console.log('err:',err);
    }
    var tx = remote.buildPaymentTx({
                    account: 'jPy8pR73VrArFjCskvpehZHx5MevDgVLhn',
                    to: 'jDUjqoDZLhzx4DCf6pvSivjkjgtRESY62c',
                    amount: {
                    "value": 0.01,
                    "currency": "CCA",
                    "issuer": ""
                    }
            });

    tx.setSecret('snoPBjXtMeMyMHUVTgbuqAfg1SUTb');
    tx.addMemo('给jDUjqoDZLhzx4DCf6pvSivjkjgtRESY62c支付0.5swt.');//可选
    
    tx.submit(function(err, result) {
        if(err) {console.log('err:',err);}  
        else if(result){console.log('res:', result);}

        remote.disconnect();
    });
});
