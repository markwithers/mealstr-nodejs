var db = require('./db')

module.exports = function(app) {
    app.get('/', function(req, res) {
        db.view('meals/all', function(err, data) {
            res.render('index', { docs: data.rows, title: "index" })
        })
    })

    app.get('/Meals/Create', function(req, res) {
        res.render('create', { title: 'create' })
    })

    app.post('/Meals/Create', function(req, res) {
        db.save(req.body, function(req, data) {
            res.redirect('/')
        })
    })

    app.get('/Meals/Delete/:id', function(req, res) {
        db.get(req.params.id, function(err, data) {
            db.remove(data._id, data._rev, function(err, data) {
                res.redirect('/')
            })
        })
    })
}
