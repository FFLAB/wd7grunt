# grunt-file-compare

[![Build Info][wercker-image]][wercker-url]
[![Dev Dependencies][devDependency-image]][devDependency-url]
[![Coverage Info][coverage-image]][coverage-url]
[![Npm Version][npm-image]][npm-url]
[![Npm Downloads][downloads-image]][npm-url]

Grunt task to check if a set of files are equal.


## Usage

    module.exports = function(grunt) {
      grunt.initConfig({
        file_compare: {
          check_suite1: ['suite1/expected/foo.js', 'suite1/actual/foo.js']  // List of files to compare
        }
      })
    
      grunt.loadNpmTask('grunt-file-compare')
      grunt.registerTask('default', ['file_compare'])
    }
    
    
## Options

**diffBinary**  
Type: `String`, Default: `'diff'`

The binary to execute when comparing files.


## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).


## Release History

* **v1.0.5**   02.25.2015   Better error handling
* **v1.0.3**   02.25.2015   Even more verbose output
* **v1.0.2**   02.25.2015   Added more verbose error output
* **v1.0.0**   02.24.2015   Initial release


## License

Copyright (c) 2015 Risto Stevcev. Licensed under the BSD license.



[wercker-image]: https://img.shields.io/wercker/ci/54ec48a1b05d633123003c67.svg?style=flat
[wercker-url]: https://app.wercker.com/#applications/54ec48a1b05d633123003c67

[coverage-image]: https://img.shields.io/codeclimate/github/Risto-Stevcev/grunt-file-compare.svg?style=flat
[coverage-url]: https://codeclimate.com/github/Risto-Stevcev/grunt-file-compare

[devDependency-image]: https://david-dm.org/Risto-Stevcev/grunt-file-compare/dev-status.svg
[devDependency-url]: https://david-dm.org/Risto-Stevcev/grunt-file-compare#info=devDependencies

[npm-image]: https://img.shields.io/npm/v/grunt-file-compare.svg?style=flat
[downloads-image]: https://img.shields.io/npm/dm/grunt-file-compare.svg?style=flat
[npm-url]: https://npmjs.org/package/grunt-file-compare
