module.exports = app => {
  'use strict';
  const express      = require("express");
  const appPath      = __dirname + '/../client';
  const path         = require('path');
  const errors       = require('./errors');


  app.use('/api/car', require('./routes/carRoutes')(app));
  app.use('/api/person', require('./routes/personRoutes')(app));

  app.route('*/:url(api|auth|components|app|bower_components|assets)/*').get(errors[404]);

  /* BUILD */
  app.use(express.static(path.join(appPath, 'dist/client')));
  app.get('/*', (req, res) => res.sendFile(path.join(appPath, 'dist/client', 'index.html')));

  app.route('*').get(errors[404]);
};
