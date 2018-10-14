/**
 * @file
 * Grunt tasks for developing for simpleAnchorMenu by Alexander Sharkov.
 *
 * Run `grunt` for to process with dev settings.
 * Run `grunt dev` to start watching with dev settings.
 */

/* global module */
var serverPort = 3088;

module.exports = function (grunt) {
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          port: serverPort,
          base: '.'
        }
      }
    },
    clean: {
      js: [
        'source/js/simpleAnchorMenu.min.js'
      ]
    },
    uglify: {
      prod: {
        options: {
          compress: {
            drop_console: true
          }
        },
        files: {
          'source/js/simpleAnchorMenu.min.js': ['source/js/simpleAnchorMenu.js']
        }
      }
    },
    watch: {
      options: {
        spawn: false,
        livereload: true
      },
      scripts: {
        files: ['source/js/simpleAnchorMenu.js'],
        tasks: ['clean:js', 'uglify:prod']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // By default, run grunt with dev settings for developing.
  grunt.registerTask('default', ['clean:js', 'uglify:prod']);
  // For develop
  grunt.registerTask('dev', ['connect', 'watch']);
};