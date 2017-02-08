module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['*.scss'],
          dest: 'css/',
          ext: '.css'
        }]
      }
    },
    postcss: {
      options: {
        map: true, // inline sourcemaps
        processors: [
          require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
          require('cssnano')({zindex: false}) // minify the result
        ]
      },
      dist: {
        src: 'css/*.css'
      }
    },
    inline: {
      dist: {
        src: 'judge-banner.html',
        dest: 'judge-banner.dist.html'
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass', 'postcss', 'inline']
      },
      js: {
        files: '**/*.js',
        tasks: ['inline']
      },
      html: {
        files: 'judge-banner.html',
        tasks: ['inline']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-inline');
  grunt.registerTask('default', ['sass', 'postcss', 'inline', 'watch']);
};
