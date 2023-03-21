/*global QUnit*/

sap.ui.define([
	"mockviewtest/controller/MockView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("MockView Controller");

	QUnit.test("I should test the MockView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
