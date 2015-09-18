/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	fs = require( 'fs' ),
	readdir = require( './../lib/sync.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'sync', function tests() {

	it( 'should export a function', function test() {
		expect( readdir ).to.be.a( 'function' );
	});

	it( 'should read a directory', function test() {
		var expected,
			actual;

		expected = fs.readdirSync( __dirname );
		actual = readdir( __dirname );

		assert.deepEqual( expected, actual );
	});

	it( 'should return an error', function test() {
		var out = readdir( 'beepboopbapbop' );

		assert.isTrue( out instanceof Error );
	});

});
