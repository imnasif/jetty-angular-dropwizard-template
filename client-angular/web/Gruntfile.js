module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            dist: {
                files: {
                    'dist/app.min.js': [
                        'app/app.js',
                        'app/**/*.js',
                        'app/vendors/libs/*.js'
                    ]
                },
                options: {
                    banner: '/* built <%= grunt.template.today() %> */',
                    sourceMap: 'dist/sourceMap'
                }
            }
        },
        concat: {
            css: {
                src: ['app/assets/css/custom.css', 'app/vendors/css/*.css'],
                dest: 'dist/all.css'
            }
        },
        cssmin: {
            css: {
                src: 'dist/all.css',
                dest: 'dist/all.min.css'
            }
        },
        watch: {
            files: [
                'app/app.js',
                'app/**/*.js',
                'app/vendors/libs/*.js'
            ],
            tasks: ['uglify:dist']
        }

    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['uglify', 'concat', 'cssmin']);
};