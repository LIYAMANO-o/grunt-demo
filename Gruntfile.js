module.exports = function (grunt) {
   grunt.initConfig({
     imagemin:{
       dynamic:{
         files:[{
           expand:true,
           src:['image/*.{png,jpg}'],
           dest:'dist/'
         }]
       }
     }
  });

    grunt.loadNpmTasks('grunt-contrib-imagemin');

  
  grunt.registerTask('default', ['imagemin']);
};
