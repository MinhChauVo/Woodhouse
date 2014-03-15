/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    srcDir: 'src',
    deployDir: 'public',

    vendorSrc: 'vendor/js',
    
    jsSrc: '<%= srcDir %>/javascripts',
    jsDeploy: '<%= deployDir %>/javascripts',
    
    scssSrc: '<%= srcDir %>/stylesheets',
    scssDeploy: '<%= deployDir %>/stylesheets',

    imagesSrc: '<%= srcDir %>/images',
    imagesDeploy: '<%= deployDir %>/images',

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    
    // Task configuration.
    concat: {
      options: {
        stripBanners: true,
        separator: ';'
      },
      dist: {
        src: [
          '<%= vendorSrc %>/**/*.js',
          '<%= jsSrc %>/app.js',
          '<%= jsSrc %>/geolocationService.js',
        ],
        dest: '<%= jsDeploy %>/app.js'
      }
    },
    uglify: {
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: '<%= jsDeploy %>/app.min.js'
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true
      },
      gruntfile: {
        src: 'Gruntfile.js'
      }
    },
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          '<%= scssDeploy %>/styles.css': '<%= scssSrc %>/styles.scss'
        }
      }
    },
    watch: {
      gruntfile: {
        files: [
          '<%= jshint.gruntfile.src %>',
          '<%= vendorSrc %>/**/*.js',
        ],
        tasks: ['jshint:gruntfile']
      },
      sass: {
        files: '<%= scssSrc %>**/*.scss',
        tasks: ['sass']
      },
      js: {
        files: '<%= jsSrc %>/*.js',
        tasks: ['jshint', 'concat', 'uglify']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task.
  //grunt.registerTask('default', ['sass', 'jshint', 'concat', 'uglify']);
  grunt.registerTask('default', ['sass', 'jshint', 'concat']);

};
