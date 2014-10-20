// Обязательная обёртка
module.exports = function(grunt) {

    // Конфигурация
    grunt.initConfig({
        // Настройка плагина less
        less: {
            development: {
                files: {
                    'css/main.css': 'less/main.less'
                }
            }
        },
        // Настройка плагина closure-soy
        closureSoys: {
            all: {
                src: 'templates/**/*.soy',
                soyToJsJarPath: 'templates/compiler.jar',
                outputPathFormat: 'js/blocks/{INPUT_FILE_NAME}.js',
                options: {
                    shouldGenerateJsdoc: false,
                    shouldProvideRequireSoyNamespaces: false
                }
            }
        },
        // Настройка плагина watch
        watch: {
            styles: {
                files: 'less/**/*.less',
                tasks: 'less',
                options: {
                    spawn: false
                }
            },
            templates: {
                files: 'templates/**/*.soy',
                tasks: 'closureSoys'
            }
        }
    });

    // Загрузка плагинов, установленных с помощью npm install
    grunt.loadNpmTasks('grunt-closure-soy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Задача по умолчанию
    grunt.registerTask('default', ['watch']);
};