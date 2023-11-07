module.exports = app => {
    'use strict';
    const express         = require('express');
    const personController = require('../controllers/personController')(app.locals.db);
    const router          = express.Router();

    router.post('/', personController.create);
    router.put('/', personController.update);
    router.get('/', personController.findAll);
    router.get('/:id', personController.find);
    router.delete('/:id', personController.destroy);

    return router;
};
