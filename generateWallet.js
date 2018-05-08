var jlib = require('jingtum-lib')
var Wallet = jlib.Wallet;
var wallet = Wallet.generate();
console.log(wallet)

var walletFromSecret = Wallet.fromSecret('shn3yDG35fNE6qgCEhZziioCWEsTy')
console.log(walletFromSecret)

var string = JSON.stringify(wallet)
console.log(string)

function getJsonObject(string) {
    for(var item in wallet) {
        console.log(item);
        console.log(wallet[item]);
    }
}

function getSecret(key) {
    var value = eval('wallet.' + key);
    console.log('secret = ' + value);
}

getJsonObject(wallet);
getSecret('secret');

function stringtojson(string)
{
    var json = JSON.parse(string);
    console.log('value = ' + json.secret);
}

stringtojson(string);
