var jlib = require('jingtum-lib');
var Remote = jlib.Remote;
var remote = new Remote({server: 'ws://101.200.176.238:5020', local_sign: 'true'});
remote.connect(function (err, result) {
    if(err)
    {
        console.log('err : ', err);
    }
    else
    {
        var req = remote.requestLedgerClosed();
        req.submit(function (err, result) {
            if(err)
            {
                console.log('err : ', err);
            }
            else
            {
                console.log('ledgerInfo : ', JSON.stringify(result));
            }
        });
    }

    remote.disconnect();
});
