var path = require('path');

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jst');

  grunt.config.set('jst', {
    options: {
      prettify: true,
      processName: function(file) {
        return path.basename(file).split('.')[0];
      }
    },
    all: {
      files: {
        '<%= source.tmp %>/js/templates.js': ['<%= source.app %>/**/*.jst']
      }
    }
  });
};
