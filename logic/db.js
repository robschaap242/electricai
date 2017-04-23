var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('travel.db');
var Promise = require('bluebird');

function get_customers(){
    return new Promise(function(resolve, reject){
        db.all("SELECT * FROM customers", function(err, data) {
            return (err ? reject(err) : resolve(data));
        })
    })
}

function get_tracking(){
    return new Promise
}
module.exports.get_customers = get_customers()

