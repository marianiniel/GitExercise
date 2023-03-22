sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	'sap/ui/model/Sorter',
	'sap/m/MessageBox'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,Filter,FilterOperator,Sorter,MessageBox) {
        "use strict";

        return Controller.extend("sapips.training.employeeapp.controller.EmployeeList", {
            onInit: function () {

            },
            onSearch: function (oEvent) {
                var oTableSearchState = [],
                    sQuery = oEvent.getParameter("query");
    
                if (sQuery && sQuery.length > 0) {
                    oTableSearchState = [new Filter("EmployeeID", FilterOperator.Contains, sQuery),];
                    //oTableSearchState = [new Filter("FirstName", FilterOperator.Contains, sQuery)];
                }
    
                this.getView().byId("idEmployee").getBinding("items").filter(oTableSearchState, "Application");
            }

        });
    });
