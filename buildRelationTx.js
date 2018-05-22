var jlib = require('jingtum-lib');
var Remote = jlib.Remote;
var remote = new Remote({server: 'ws://192.168.208.185:5060', local_sign:true});
//var remote = new Remote({server: 'ws://101.200.176.238:5020', local_sign:true});
remote.connect(function(err, result) {
    if (err) {
        return console.log('err:',err);
    } 

    var options = {
        account: 'jHb9CJAWyB4jr91VRWn96DkukG4bwdtyTh',
        target: 'jPy8pR73VrArFjCskvpehZHx5MevDgVLhn',
        
        limit:
        {
            currency: 'CCA',
            value: "0.01",
            issuer: 'js7M6x28mYDiZVJJtfJ84ydrv2PthY9W9u'
        },

        type:'authorize'
        };

    var tx = remote.buildRelationTx(options);
    tx.setSecret('snoPBjXtMeMyMHUVTgbuqAfg1SUTb');

    console.log("call submit");

    tx.submit(function(err, result) {
        if(err) {console.log('submit err:',err);}
        else if(result){ console.log('res:', result);}
    });
});
