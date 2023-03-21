sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("zbtp.day5exercie1f11.controller.Home", {
            onInit: function () {

            },
            onSend: function(oEvent) {
                var oView = this.getView();
                var sName = oView.byId("NameInput").getValue();
                var sSurname = oView.byId("StreetInput").getValue();
                var sAge = oView.byId("AgeInput").getValue();
                var oTech = oView.byId("TechInput").getSelectedKey();
                MessageToast.show("Your name is " + sName + ", your surname is " + sSurname + ", your age is " + sAge);
                debugger;
                
            }
    
        });
    });
