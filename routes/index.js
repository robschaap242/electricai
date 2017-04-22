var Router  = require('router')
var router  = Router()
var db = require('../logic/db.js')

// routes
router.all('/', function (req, res) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('the customer endpoint')
})

router.get('/customer', function (req, res) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    db.get_customers.then(function(data){
        res.end(JSON.stringify(data))
    })
})
router.get('/tracking', function (req, res) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('the tracking endpoint')
})


module.exports = router;