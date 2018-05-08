var jlib = require('jingtum-lib');
var Remote = jlib.Remote;
var remote = new Remote({server: 'ws://101.200.176.238:5020', local_sign:true});
remote.connect(function(err, result) {
    if (err) {
        return console.log('err:',err);
    }
    
    var options = {account: 'jHb9CJAWyB4jr91VRWn96DkukG4bwdtyTh'};
    var req = remote.requestAccountInfo(options);
    req.submit(function(err, result) {
        if(err) {console.log('err:',err);}
        else if(result){ console.log('res:', result);}
    });
});
