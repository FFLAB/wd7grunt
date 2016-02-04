/*
 * grunt-file-compare
 * https://github.com/Risto-Stevcev/grunt-file-compare
 *
 * Copyright (c) 2015 Risto Stevcev
 * Licensed under the BSD license
 */

module.exports = function(grunt) {
  grunt.registerMultiTask('file_compare', 'Grunt task to check if a set of files are equal', function() {
    var done = this.async()
    var options = this.options({
      compareBinary: 'diff'
    })
    var fail = function() {
      grunt.fail.fatal('File compare failed.')
    }

    this.files.forEach(function(file, index, files) {
      if (!file || !file.src || !file.src.length) {
        grunt.log.error('File(s) not found: ' + file.orig.src.join(' '))
        fail()
      }

      if (options.compareBinary === 'diff')
        file.src.unshift('-q')  // quiet mode

      grunt.log.debug('Running command: ' + options.compareBinary + ' ' + file.src.join(' '))

      grunt.util.spawn({
        cmd: options.compareBinary,
        args: file.src 
      }, function(error, result, code) {
        if (error) {
          if (result.stderr)
            grunt.log.error(result.stderr)
          else if (result.stdout)
            grunt.log.error(result.stdout)

          fail()
        }

        if (index === files.length - 1)
          done()
      })
    })
  })
}
