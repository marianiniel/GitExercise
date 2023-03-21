/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"zbtp/day5exercie1_f11/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
