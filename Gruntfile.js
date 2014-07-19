module.exports = function(grunt) {
	grunt.initConfig({
    clean: ["dist/"], // Clean the build directory
    // Configure the copy task to move files from the development to production folders
    copy: {
      target: {
        files: {
  	  'src/js/gmod.js': '../gcode-modeler/gcode-modeler/build/emscripten/bin/gmod.js',
  	  'dist/': ['src/**']
        }
      }
    }
  }); // initConfig end

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Run tasks
  grunt.registerTask('default', [
  				'clean',
  				'copy']);
};
