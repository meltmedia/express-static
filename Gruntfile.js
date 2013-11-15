module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-develop');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mkdir');

  grunt.initConfig({
    clean: ["./dist"],
    mkdir: {
      dist: {
        options: {
          create: ['./dist']
        }
      }
    },
    develop: {
      server: {
        file: 'app.js',
        env: { NODE_ENV: 'dist'}      // optional
      }
    },
    exec: {
      makeDist: {
        cmd: 'rm -rf dist && mkdir dist'
      }
    },
    karma: {
      e2e: {
        configFile: 'karma-e2e.conf.js',
        singleRun: true
      },
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      },
      server: {
        configFile: 'karma.conf.js',
        singleRun: false,
        autoWatch: true
      }
    },
    copy: {
      dist: {
        files: [
          {
            expand: true,
            dot: true,
            cwd: 'public',
            dest: 'dist',
            src: [
              './**'
            ]
          }
        ]
      }
    }
  });

  grunt.registerTask('default', [
    'copy:dist'
  ]);


  grunt.registerTask('dist', [
    'develop',
    'clean',
    'mkdir:dist',
    'copy:dist',
    'karma:e2e'
  ]);

  grunt.registerTask('e', [
    'karma:e2e'
  ]);

};