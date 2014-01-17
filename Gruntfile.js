module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-develop');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-nodemon');

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
      developServer: {
        file: 'app.js'
      },
      distServer: {
        file: 'app.js',
        env: { NODE_ENV: 'dist', PORT: 3001 }
      }
    },
    exec: {
      makeDist: {
        cmd: 'rm -rf dist && mkdir dist'
      },
      bower: {
        cmd: 'bower install'
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
    },
    nodemon: {
      dev: {
        options: {
          file: 'app.js',
          nodeArgs: ['--debug'],
          ignoredFiles: ['node_modules/**'],
          watchedFolders: ['public','resources','routes','views'],
          env: {
            PORT: '3000'
          }
        }
      }
    }
  });

  /**
   * Install and run tests
   */
  grunt.registerTask('default', [
    'install',
    'dist'
  ]);

  /**
   * Run end to end tests for static compilation
   */
  grunt.registerTask('dist', [
    'develop:distServer',
    'clean',
    'mkdir:dist',
    'karma:e2e',
    'copy:dist'
  ]);

  /**
   * Run nodemon dev to execute app.js development mode and auto-reload node app on file changes
   */
  grunt.registerTask('watch', [
    'nodemon:dev'
  ]);

  /**
   * Run end to end tests
   */
  grunt.registerTask('e2e', [
    'develop:distServer',
    'karma:e2e'
  ]);

  /**
   * Prepare the environment for usage, this gets called after npm install
   */
  grunt.registerTask('install', [
    'exec:bower'
  ]);

};