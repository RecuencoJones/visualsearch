module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.config.set('clean', {
    options: {
      force: true
    },
    tmp: ['<%= source.tmp %>'],
    dist: ['<%= source.dist %>']/*,
    doc: ['<%= source.doc %>']*/
  });
};
