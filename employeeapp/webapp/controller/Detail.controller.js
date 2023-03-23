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

        return Controller.extend("sapips.training.employeeapp.controller.Detail", {
            onInit: function () {
                this.oRouter = this.getOwnerComponent().getRouter();
			    this.oModel = this.getOwnerComponent().getModel();

			this.oRouter.getRoute("Detail").attachPatternMatched(this._onEmployeeMatched, this);
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
                var oView = this.getView(),
                    oResourceBundle = oView.getModel("i18n").getResourceBundle(),
                    oInput1 = oView.byId("idEmployee");
                    var oRouter = UIComponent.getRouterFor(this);
                oRouter.navTo("Detail");
            },
            _onEmployeeMatched: function (oEvent) {
                this._EmployeeID = oEvent.getParameter("arguments").EmployeeID || this._EmployeeID || "0";
                this.getView().bindElement({
                    path: "/" + this._EmployeeID
                });
            }
        });
    });
