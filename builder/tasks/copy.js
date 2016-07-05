module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.config.set('copy', {
    js: {
      files: [
        {
          expand: true,
          cwd: '<%= source.app %>/',
          src: ['**/*.js'],
          dest: '<%= source.tmp %>/',
          ext: '.js'
        }
      ]
    },
    css: {
      files: [
        {
          expand: true,
          cwd: '<%= source.app %>/',
          src: '**/*.css',
          dest: '<%= source.tmp %>/',
          ext: '.css'
        }
      ]
    },
    assets: {
      files: [
        {
          expand: true,
          cwd: '<%= source.app %>',
          src: '**/*.png',
          dest: '<%= source.dist %>'
        }
      ]
    }
  });
};
