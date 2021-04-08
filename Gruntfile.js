module.exports=function(grunt){
  grunt.initConfig({
    concat:{
      options:{
        separator:';',
      },
  dist:{
    src:['main.js','util.js'],
    dest:'dist/bundle.js',
  },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default',['concat']);
};
