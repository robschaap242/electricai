var Router  = require('router')
var router  = Router()
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('travel.db');

// routes
router.all('/', function (req, res) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('Nothing here jack, try posting to /customer or /tracking routes')

    db.each("SELECT * FROM customers", function(err, row) {
        console.log(row.email);
    });
})

router.get('/customer', function (req, res) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('the customer endpoint')
})

router.get('/tracking', function (req, res) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('the tracking endpoint')
})


module.exports = router;