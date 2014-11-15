/*!
 * cache-base <https://github.com/jonschlinkert/cache-base>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var should = require('should');
var Cache = require('..');
var app;


describe('app.functions()', function () {
  beforeEach(function() {
    app = new Cache();
  });

  describe('.functions()', function() {
    it('should be object.', function() {
      app.functions(app).should.be.an.object;
    });

    it('should return the functions on an object.', function() {
      app.functions(app).should.have.property('set');
      app.functions(app).should.have.property('get');
    });
  });
});