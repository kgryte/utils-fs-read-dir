'use strict';

// MODULES //

var fs = require( 'fs' );


// READDIR //

/**
* FUNCTION: readdir( path )
*	Reads the contents of a directory.
*
* @param {String} path - directory path
* @returns {String[]|Error} directory contents or an error
*/
function readdir( path ) {
	try {
		return fs.readdirSync( path );
	} catch ( err ) {
		return err;
	}
} // end FUNCTION readdir()


// EXPORTS //

module.exports = readdir;
