var Router  = require('router')
var router  = Router()
var db = require('../logic/db.js')


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
    db.get_tracking_dash.then(function(data){
        res.end(JSON.stringify(data))
    })
})

router.post('/dash/track', function (req, res) {
    // var post = qs.parse(body)
    console.log(req.body)
    // res.setHeader('Content-Type', 'application/vnd.api+json; charset=utf-8')
    // db.get_tracking_dash.then(function(data){
    //     res.end(JSON.stringify(data))
    // })
})



module.exports = router;