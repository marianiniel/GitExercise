/*global QUnit*/

sap.ui.define([
	"route/controller/routeview.controller"
], function (Controller) {
	"use strict";

	QUnit.module("routeview Controller");

	QUnit.test("I should test the routeview controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
