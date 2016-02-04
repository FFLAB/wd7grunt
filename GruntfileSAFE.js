module.exports = function (grunt){
    grunt.initConfig({
        //tutte le varie configurazioni per ogni task:
        autoprefixer: {
            dist: {
                files: {
                //una cartella build dove va il file modificato
                'build/style.css': 'style.css'
            }
          }
        },
        uglify:{
            build: {
                src: 'js/bootstrap.js',
                dest: 'js/bootstrap.min.js'
            }
        },
        watch: {
            styles:{
                files: ['style.css', 'js/bootstrap.js'],
                tasks: ['autoprefixer', 'uglify']
            }
        }
        
    });
    
    // caricamento plugins che utilizziamo
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    
    //i tasks che lanciamo con il comando "grunt" da terminale
    grunt.registerTask('default',['autoprefixer','uglify','watch']);
};