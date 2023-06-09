sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	'sap/ui/model/Sorter',
	'sap/m/MessageBox',
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,Filter,FilterOperator,Sorter,MessageBox,UIComponent,JSONModel) {
        "use strict";

        return Controller.extend("sapips.training.employeeapp.controller.EmployeeList", {
            onInit: function () {
                this.oRouter = this.getOwnerComponent().getRouter();
            },
            onSearch: function (oEvent) {
                var oTableSearchState = [],
                    sQuery = oEvent.getParameter("query");
    
                if (sQuery && sQuery.length > 0) {
                    oTableSearchState = [new Filter("EmployeeID", FilterOperator.Contains, sQuery),];
                    //oTableSearchState = [new Filter("FirstName", FilterOperator.Contains, sQuery)];
                }
    
                this.getView().byId("idEmployee").getBinding("items").filter(oTableSearchState, "Application");
            },

            onListItemPress: function (oEvent) {
                
                var oPath = oEvent.getSource().getBindingContext().getPath();
                var EmployeeID = oPath.split("/").slice(-1).pop();
                this.oRouter.navTo("Detail", {EmployeeID: EmployeeID});
            },

            onCreate: function () {
                var oView = this.getView(),
                    oResourceBundle = oView.getModel("i18n").getResourceBundle();
                this.oRouter.navTo("Add");


                
            }

        });
    });
