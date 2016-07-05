module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.config.set('concat', {
    options: {
      separator: '\n'
    },
    js: {
      src: [
        '<%= source.tmp %>/js/<%= pkg.name %>.js',
        '<%= source.tmp %>/js/views/*.js',
        '<%= source.tmp %>/js/utils/*.js',
        '<%= source.tmp %>/js/models/*.js',
        '<%= source.tmp %>/js/templates.js'
      ],
      dest: '<%= source.dist %>/js/<%= pkg.name %>.js'
    },
    css: {
      src: [
        '<%= source.tmp %>/**/*.css'
      ],
      dest: '<%= source.dist %>/css/<%= pkg.name %>.css'
    }
  });
};
