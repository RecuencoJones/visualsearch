module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    source: {
      app: 'lib',
      build: 'builder',
      dist: 'dist',
      doc: 'doc',
      test: 'test',
      tmp: 'tmp',
      grunt: 'Gruntfile.js'
    }
  });

  grunt.loadTasks('builder/tasks');

  grunt.registerTask('default', [
    // 'lint',
    'build'
  ]);
};
