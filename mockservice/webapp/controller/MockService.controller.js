sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,formatter) {
        "use strict";

        return Controller.extend("sapips.training.mockservice.controller.MockService", {
            formatter: formatter,
            onInit: function () {

            },

            onCreate: function(oEvent){
                var oModel = this.getOwnerComponent().getModel("ProductsModel")
                var oData = {
                    ProductID: 999,
                    ProductName : "myProduct"
                };
                oModel.create("/Products", 
                oData,{});
            }

        });
    });
