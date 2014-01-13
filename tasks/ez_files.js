/*
 * grunt-ez-files
 * https://github.com/RedRabbitDevelopment/grunt-ez-files
 *
 * Copyright (c) 2014 Jay Hendren
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('ez_files', 'The best Grunt plugin ever.', function() {
    var FrontEnd, done, frontend, path,
      _this = this;
    done = this.async();
    grunt.task.run('copy:ez_ctrl');
    FrontEnd = require(this.data.frontend);
    frontend = new FrontEnd;
    path = require('path');
    return frontend.controllerManager.readdir(path.resolve(this.data.routes)).then(function() {
      var fs;
      fs = require('fs');
      return fs.writeFile(_this.data.output, frontend.getFrontEndMethods(), function(err) {
        return done();
      });
    }).fail(function(error) {
      console.log(error);
      return done(false);
    });
  });

};
