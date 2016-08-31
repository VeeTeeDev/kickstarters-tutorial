module.exports = function (grunt) {
    grunt.initConfig({
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'assets/css/styles.css',
                        '*.html'
                    ]
                },
                options: {
                    server: './'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.registerTask('sync', ['browserSync']);
};
