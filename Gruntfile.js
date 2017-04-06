module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            move: {
                files: [{
                    expand: true,
                    cwd: 'src/js/',
                    src: 'rem.js',
                    dest: 'build/js/'
                },{
                    expand: true,
                    cwd: 'src/js/',
                    src: 'rem.js',
                    dest: 'dist/js/'
                },{
                    expand:true,
                    cwd:'src/css/icon/',
                    src:'*.*',
                    dest: 'build/css/icon',
                },{
                    expand:true,
                    cwd:'src/css/icon/',
                    src:'*.*',
                    dest: 'dist/css/icon',
                }]
            }
        },

        less: {
            release: {
                options: {
                    cleancss: false // 压缩css文件
                },
                files: [
                    {
                        expand:true,
                        cwd:'src/css/components/',
                        src:'*.less',
                        dest: 'build/css/components',
                        ext: '.css'
                    },
                    {
                        expand:true,
                        cwd:'src/css/',
                        src:'style.less',
                        dest: 'build/css/',
                        ext: '.css'
                    },
                    {
                        expand:true,
                        cwd:'src/css/',
                        src:'legomini.less',
                        dest: 'build/css/',
                        ext: '.css'
                    }

                ]
            },
        },
        cssmin:{
            target: {
                files: [
                    {
                        expand:true,
                        cwd:'build/css/',
                        src:'legomini.css',
                        dest: 'dist/css/',
                        ext: '.min.css'
                    },
                    {
                        expand:true,
                        cwd:'build/css/components/',
                        src:'*.css',
                        dest: 'dist/css/components/',
                        ext: '.min.css'
                    }
                ]
            }
        },
        watch: {
            start: {
                files: ['src/css/*/*.less','src/css/*/*.css','src/css/style.less',  'src/css/legomini.less','src/js/*.js', 'examples/*.*'],
                tasks: ['less', 'cssmin']
            }
        }

    });

    grunt.event.on('watch', function(action, filepath, target) {
        grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['less:release','cssmin:target','copy:move','watch']);
    // grunt.registerTask('release', ['clean:release', 'copy:release', 'less:release', 'cssmin:release']);
};
