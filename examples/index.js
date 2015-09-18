'use strict';

var readdir = require( './../lib' );

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



