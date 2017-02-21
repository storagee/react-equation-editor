require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"react-equation-editor":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var React = require('react');

var ReactEquationEditor = React.createClass({
	displayName: 'ReactEquationEditor',

	render: function render() {
		return React.createElement(
			'div',
			null,
			'react-equation-editor'
		);
	}
});

exports['default'] = ReactEquationEditor;
module.exports = exports['default'];

},{"react":undefined}]},{},[]);
