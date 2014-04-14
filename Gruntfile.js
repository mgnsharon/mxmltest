
module.exports = function (grunt) {
  grunt.initConfig({
    mxmlc: {
      options: {
        // Task-specific options go here.
      },
      main: {
        files: {
          'dist/main.swf': ['src/main.mxml']
        }
      },
    }
  });

  grunt.loadNpmTasks('grunt-mxmlc');

};