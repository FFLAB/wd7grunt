module.exports = function (grunt){
    grunt.initConfig({
        //tutte le varie configurazioni per ogni task:
        autoprefixer: {
            dist: {
                files: {
                //una cartella build dove va il file modificato
                'finalcss/style.css': 'css/style.css'
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
                files: ['style.css', 'js/bootstrap.js','less/style.less'],
                tasks: ['autoprefixer', 'uglify','less']
            }
        },
        less: {
                 development: {
                     options: {
                         paths: ["css"]
                     },
                     files: {"css/style.css": "less/style.less"}
                     
                 }
             },
    file_compare: {
      check_suite1: ['expected/mohole.js', 'actual/mohole.js']  // List of files to compare
  },
        html5compare: {

    // Normal comparison of HTML files - attenzione da finire!
    singleTask: {
      files: [
        {
          'comparison.html': 'original.html' // compare the two files
        }
      ]
    },

    // Reverse the logic so it only passes if files are different
    singleTaskDifferent: {
      options: {
        different: true // passes if they do not match
      },
      files: [
        {
          'comparison.html': 'original.html'
        }
      ]
    },

    // Expanded syntax
    singleTaskDifferent: {
        files: [
            expand: true,
            cwd: 'tests',
            src: 'originals/**/*.html'
            dest: 'comparisons',
            ext: '.html'
        ]
    }
  }

  
        
    });
    
    // caricamento plugins che utilizziamo
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-file-compare');
    grunt.loadNpmTasks('grunt-html5compare');
    
    
    //i tasks che lanciamo con il comando "grunt" da terminale
    grunt.registerTask('default',['autoprefixer','uglify','less','file_compare','html5compare','watch']);
};