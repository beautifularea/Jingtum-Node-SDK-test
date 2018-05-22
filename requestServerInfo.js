var jlib = require('jingtum-lib');
var Remote = jlib.Remote;
var remote = new Remote({server: 'ws://192.168.208.178:5060', local_sign : 'true'});
remote.connect(function (err, result) {
    if(err) {
        console.log('err : ', err);
    }
    else
    {

    /*
        var req = remote.requestServerInfo();
        req.submit(function(err, result) {
            if(err) {
                console.log('err : ', err);
            }
            else
            {
                console.log('serverInfo : ', result);
            }
        });
        */
    }
  //  remote.disconnect();

    
});
