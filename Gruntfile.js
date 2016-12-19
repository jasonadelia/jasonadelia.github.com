
module.exports = function(grunt) {

  var packageJson = grunt.file.readJSON('./package.json');

  grunt.initConfig({
    pkg: grunt.file.readJSON('./package.json')
  });

  grunt.config('less', {
    options: {
      plugins: [
        new (require('less-plugin-autoprefix'))({browsers: ["last 5 versions"]})
      ],
      compress: true,
      livereload: true,
      spawn: false
    },
    default: {
      expand: true,
      flatten: true,
      src: [
        'less/*.less',
        '!less/**/_*.less'
      ],
      dest: 'css',
      ext: '.min.css'
    } // inLess
  }); // less

  // watch to run some of the above automatically on file changes
  grunt.config('watch', {
    less: {
      files: [
        'less/**/*.less'
      ],
      tasks: ['less']
    } // less

  }); // watch

  grunt.config('copy', {
    main: {
      files: [
        //copying all files from _resources except the less folder
        {expand: true, flatten: true, src: ['node_modules/svgxuse/*.js'], dest: 'js/'}
      ]
    }
  });

  //LOAD REQUIRED TASKS
  grunt.loadNpmTasks('grunt-contrib-less');         // https://npmjs.org/package/grunt-contrib-less
  grunt.loadNpmTasks('grunt-contrib-watch');        // https://npmjs.org/package/grunt-contrib-watch
  grunt.loadNpmTasks('grunt-contrib-copy');         // https://npmjs.org/package/grunt-contrib-copy


 // Register Default task(s).
 grunt.registerTask('default', ['copy:main', 'less', 'watch']);


  console.log('\n');
};
