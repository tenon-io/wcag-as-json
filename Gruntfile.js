'use strict';

module.exports = function (grunt) {
    // Load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // Show elapsed time at the end
    require('time-grunt')(grunt);

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        datetime: Date.now(),
        
        /* Run JSHint on our JS files */
        jshint: {
            options: {
                reporter: require('jshint-stylish')
            },
            gruntfile: {
                options: {
                    jshintrc: '.jshintrc'
                },
                src: 'Gruntfile.js'
            }
        },

        jsonlint: {
            configFiles: {
                src: ['wcag.json', 'package.json', '.jshintrc']
            }
        },

        /* Run tenon before every commit */
        githooks: {
            all: {
                options: {
                    preventExit: true
                },
                'pre-commit': 'grunt'
            }
        },

        
        
    });

    // Default task.
    grunt.registerTask('default', ['jshint', 'jsonlint']);
};
