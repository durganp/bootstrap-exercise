'use strict';
module.exports = function(grunt) {
	//define the configuration for all the task
	
	//Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);

	//Automativally load required Grunt tasks
	require('jit-grunt')(grunt);

	//Define the confuguration for all the tasks
	grunt.initConfig({
		sass: {
			dist: {
				files: {
					'css/styles.css': 'css/styles.scss'
				}
			}
		},
		watch: {
			files: 'css/*.scss',
			tasks: ['sass']
		},
		browserSync: {
			dev: {
				bsFiles: {
					src: [
						'css/*.css',
						'*.html',
						'js/*.js'
					]
				},
				options: {
					watchTask: true,
					server: {
						baseDir: "./"
					}
				}
			}
		}
	});

	grunt.registerTask('css', ['sass']);
	grunt.registerTask('default', ['browserSync', 'watch'])
	
};