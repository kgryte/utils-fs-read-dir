Read Directory
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Reads the contents of a directory.


## Installation

``` bash
$ npm install utils-fs-read-dir
```


## Usage

``` javascript
var readdir = require( 'utils-fs-read-dir' );
```

#### readdir( path, clbk )

Reads the contents of a directory.

``` javascript
readdir( __dirname, onRead );

function onRead( error, data ) {
	if ( error ) {
		console.error( error );
	} else {
		console.log( data );
	}
}
```


#### readdir.sync( path )

Synchronously reads the contents of a directory.

``` javascript
var out = readdir.sync( __dirname );
if ( out instanceof Error ) {
	throw out;
}
console.log( out );
```


## Notes

*	The difference between this module and [`fs.readdirSync()`](https://nodejs.org/api/fs.html#fs_fs_readdirsync_path) is that [`fs.readdirSync()`](https://nodejs.org/api/fs.html#fs_fs_readdirsync_path) will throw if an `error` is encountered (e.g., if given a non-existent `path`) and this module will return an `error`. Hence, the following anti-pattern

	``` javascript
	var fs = require( 'fs' );

	var dir = '/path/to/dir';

	// Check for existence to prevent an error being thrown...
	if ( fs.existsSync( dir ) ) {
		dir = fs.readdirSync( dir );
	}
	```

	can be replaced by an approach which addresses existence via `error` handling.

	``` javascript
	var readdir = require( 'utils-fs-read-dir' );

	var dir = '/path/to/dir';

	// Explicitly handle the error...
	dir = readdir.sync( dir );
	if ( dir instanceof Error ) {
		// You choose what to do...
		throw dir;
	}
	```


## Examples

``` javascript
var readdir = require( 'utils-fs-read-dir' );

// Sync:
var out = readdir.sync( __dirname );
// returns <array>

console.log( out instanceof Error );
// returns false

out = readdir.sync( 'beepboop' );
// returns <error>

console.log( out instanceof Error );
// returns true


// Async:
readdir( __dirname, onRead );
readdir( 'beepboop', onRead );

function onRead( error, data ) {
	if ( error ) {
		if ( error.code === 'ENOENT' ) {
			console.error( 'Directory does not exist.' );
		} else {
			throw error;
		}
	} else {
		console.log( data );
	}
}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/utils-fs-read-dir.svg
[npm-url]: https://npmjs.org/package/utils-fs-read-dir

[travis-image]: http://img.shields.io/travis/kgryte/utils-fs-read-dir/master.svg
[travis-url]: https://travis-ci.org/kgryte/utils-fs-read-dir

[codecov-image]: https://img.shields.io/codecov/c/github/kgryte/utils-fs-read-dir/master.svg
[codecov-url]: https://codecov.io/github/kgryte/utils-fs-read-dir?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/utils-fs-read-dir.svg
[dependencies-url]: https://david-dm.org/kgryte/utils-fs-read-dir

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/utils-fs-read-dir.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/utils-fs-read-dir

[github-issues-image]: http://img.shields.io/github/issues/kgryte/utils-fs-read-dir.svg
[github-issues-url]: https://github.com/kgryte/utils-fs-read-dir/issues
