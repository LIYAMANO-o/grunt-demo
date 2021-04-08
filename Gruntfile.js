module.exports = function (grunt) {
   grunt.initConfig({
   htmlmin:{
    dev:{
      options:{
        removeComments:true,
        collapseWhitespace:true
      },
     files:{
      'dist/index.html':'index.html'
     }
    }
  
    }    
  });

   grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('default', ['htmlmin']);
}
