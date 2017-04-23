var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('travel.db');
var Promise = require('bluebird');

module.exports.get_customers = function get_customers(id){
    return new Promise(function(resolve, reject){
        db.all("SELECT c.*, t.id as tracking_id, t.mod_date, t.date, s.id as step_id, s.step, p.id as priority, p.description as priority_description, csr.id as csr_id, csr.name as csr_name FROM customers c " +
            "JOIN tracking t on c.id = t.customer_id JOIN steps s on s.id = t.step JOIN csr on csr.id = t.csr JOIN priorities p on p.id = s.priority " +
            "WHERE c.id = ?", id,
                function(err, data) {
                    return (err ? reject(err) : resolve(data));
        })
    })
}

module.exports.get_csr = function get_csr(id){
    return new Promise(function(resolve, reject){
        db.all("SELECT c.*, t.id as tracking_id, t.mod_date, t.date, s.id as step_id, s.step, p.id as priority, p.description as priority_description, csr.id as csr_id, csr.name as csr_name FROM customers c " +
            "JOIN tracking t on c.id = t.customer_id JOIN steps s on s.id = t.step JOIN csr on csr.id = t.csr JOIN priorities p on p.id = s.priority " +
            "WHERE csr.id = ?", id,
            function(err, data) {
                return (err ? reject(err) : resolve(data));
            })
    })
}

module.exports.get_tracking_dash = function get_tracking_dash(){
    return new Promise(function(resolve, reject){
        db.all("SELECT c.id as customer_id, c.email, csr.id as csr_id, csr.name as csr_name, t.id as tracking_id, s.step, p.id as priority, p.description as priority_desc from tracking t " +
            "join customers c on t.customer_id = c.id " +
            "join steps s on t.step = s.id " +
            "join priorities p on s.priority = p.id " +
            "join csr on csr.id = t.csr " +
            "group by customer_id order by priority, date DESC",
            function(err, data) {
                return (err ? reject(err) : resolve(data));
            })
    })
}