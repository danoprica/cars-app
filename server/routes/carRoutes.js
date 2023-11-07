module.exports = app => {
    'use strict';
    const express         = require('express');
    const carController = require('../controllers/carController')(app.locals.db);
    const router          = express.Router();

    router.post('/', carController.create);
    router.put('/', carController.update);
    router.get('/', carController.findAll);
    router.get('/:id', carController.find);
    router.delete('/:id', carController.destroy);

    return router;
};
