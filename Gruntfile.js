module.exports = function (grunt) {

    //Project Configurations
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            dev: {
                options: {
                    mangle: {
                        toplevel: true
                    },
                    compress:{
                        sequences: true,
                        drop_debugger: true
                    }
                },
                files: [{
                    expand: true,
                    src: ['Source/AppJS/App/**/*.js', '!Source/AppJS/App/**/*.min.js'],
                    dest: '',
                    cwd: '.',
                    rename: function (dst, src) {
                        return src.replace('.js', '.min.js');
                    }
                }]
            }
        }
    });

    //Load the plugiin that provides 'uglify' task
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //Default Tasks
    grunt.registerTask('default', ['uglify']);
}