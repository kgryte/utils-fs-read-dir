/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	readdir = require( './../lib' );


// VARIABLES //

var expect = chai.expect;


// TESTS //

describe( 'utils-fs-read-dir', function tests() {

	it( 'should export a function', function test() {
		expect( readdir ).to.be.a( 'function' );
	});

	it( 'should export a function to read a directory synchronously', function test() {
		expect( readdir.sync ).to.be.a( 'function' );
	});

});
