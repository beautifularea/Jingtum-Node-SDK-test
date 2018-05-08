var jlib = require('jingtum-lib');
var Remote = jlib.Remote;
var remote = new Remote({server: 'ws://101.200.176.238:5020', local_sign:true});
remote.connect(function(err, result) {
    if (err) {
        return console.log('err:',err);
    }
    
    var options = {account: 'jB7rxgh43ncbTX4WeMoeadiGMfmfqY2xLZ',type:'trust'};
    var req = remote.requestAccountRelations(options);
    
    req.submit(function(err, result) {
        if(err) {console.log('err:',err);}
        else if(result){ console.log('res:', result); }
    });

    remote.disconnect();
});
