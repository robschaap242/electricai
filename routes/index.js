var Router  = require('router')
var router  = Router()
var bodyParser = require('body-parser')
var db = require('../logic/db.js')
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// customer and default routes

router.all('/', function (req, res) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end("OK, you're at the root, now what bub")
})

router.get('/customer/list/:id', function (req, res) {
    res.setHeader('Content-Type', 'application/vnd.api+json; charset=utf-8')
    var id = req.params.id;
    db.get_customers(id).then(function(data){
        res.end(JSON.stringify(data))
    })
})


// tracking routes

router.get('/csr/list/:id', function (req, res) {
    var id = req.params.id;
    res.setHeader('Content-Type', 'application/vnd.api+json; charset=utf-8')
    db.get_csr(id).then(function(data){
        res.end(JSON.stringify(data))
    })
})

router.get('/dash/list', function (req, res) {
    res.setHeader('Content-Type', 'application/vnd.api+json; charset=utf-8')
    db.get_tracking_dash().then(function(data){
        res.end(JSON.stringify(data))
    })
})

router.post('/dash/track', urlencodedParser, function (req, res) {

    var customer_id = req.body.customer_id
    var step_id = req.body.step_id
    var date = req.body.date
    var csr = req.body.csr_id

    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end("Tracking Information posted")
    db.post_tracking(customer_id, step_id, date, csr)

})



module.exports = router;