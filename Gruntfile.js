module.exports = function(grunt) {
	grunt.initConfig({
    clean: ["dist/"], // Clean the build directory
    // Configure the copy task to move files from the development to production folders
    copy: {
      target: {
        files: [
  	  		{'dist/': ['parametric-ui.*', 'components/polymer/polymer.js', 'components/platform/platform.js']},
					{'dist/components.html': 'components-vulcanized.html'}
        ]
      }
    },
    vulcanize: {
    default: {
      options: {
        // Task-specific options go here.
      },
      files: {
        'components-vulcanized.html': 'components.html'
      },
    }
  },
  }); // initConfig end

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-vulcanize');

  // Run tasks
  grunt.registerTask('default', [
  				'clean',
  				'vulcanize',
					'copy']);
};
