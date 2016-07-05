module.exports = function(grunt) {

  grunt.registerTask('build:js', [
    'copy:js',
    'jst',
    'concat:js'
  ]);

  grunt.registerTask('build:css', [
    'copy:css',
    'copy:assets',
    'concat:css'
  ]);

  grunt.registerTask('build', [
    'clean:tmp',
    'clean:dist',
    'build:js',
    'build:css'
  ]);
};
