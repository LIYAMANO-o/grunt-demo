module.exports = function (grunt) {
   grunt.initConfig({
     uglify:{
       my_target:{
         files:{
           'dist/jquery.min.js':['jquery.js']
         }
       }
     }
  });

   grunt.loadNpmTasks('grunt-contrib-uglify');

   grunt.registerTask('default', ['uglify']);
};
