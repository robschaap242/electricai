var Router  = require('router')
var router  = Router()
var db = require('../logic/db.js')

// routes
router.all('/', function (req, res) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end("OK, you're at the root, now what bub")
})

router.get('/customer/list', function (req, res) {
    res.setHeader('Content-Type', 'application/vnd.api+json; charset=utf-8')
    db.get_customers.then(function(data){
        res.end(JSON.stringify(data))
    })
})

router.get('/csr/list', function (req, res) {
    res.setHeader('Content-Type', 'application/vnd.api+json; charset=utf-8')
    db.get_csr(2).then(function(data){
        res.end(JSON.stringify(data))
    })
})

router.get('/dash/list', function (req, res) {
    res.setHeader('Content-Type', 'application/vnd.api+json; charset=utf-8')
    db.get_tracking_dash.then(function(data){
        res.end(JSON.stringify(data))
    })
})



module.exports = router;