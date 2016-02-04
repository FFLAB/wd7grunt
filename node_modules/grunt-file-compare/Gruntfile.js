module.exports = function(grunt) {
  grunt.initConfig({
    file_compare: {
      options: { /* diffBinary: 'diff' (default) */ },
      foobar: ['test/foo.js', 'test/bar.js'],
      foofoo: ['test/foo.js', 'test/foo2.js']
    }
  })

  grunt.loadTasks('tasks')
  grunt.registerTask('default', ['file_compare'])
}
