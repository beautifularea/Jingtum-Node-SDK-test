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
        var req = remote.requestTx({hash: '084C7823C318B8921A362E39C67A6FB15ADA5BCCD0C7E9A3B13485B1EF2A4313'});
        req.submit(function (err, result) {
            if(err)
            {
                console.log('err : ', err);
            }
            else if(result)
            {
                console.log('result : ', JSON.stringify(result));

                var fee = result.Fee / 100000;
                console.log('关键信息： [交易费 : ', fee, ']');
            }
        });
    }

    remote.disconnect();
});
