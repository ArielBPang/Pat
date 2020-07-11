
const things = require('../controllers/things');

module.exports = (app) => {
    app.get('/api/things', (req,res) => things.index(req,res))
    app.get('/api/things/:id', (req,res) => things.show(req,res) )
    app.post('/api/things/create', (req,res) => things.create(req,res))
    app.put('/api/things/update/:id', (req,res) => things.update(req,res))
    app.delete('/api/things/destroy/:id', (req,res) => things.destroy(req,res))
}