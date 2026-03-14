sap.ui.define([
 "sap/ui/core/mvc/Controller",
 "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
 "use strict";

 return Controller.extend("demo.controller.Main", {

  onInit: function () {

   var data = {
    employees: []
   };

   var oModel = new JSONModel(data);

   this.getView().setModel(oModel);

  },

  onAddEmployee: function () {

   var name = this.byId("nameInput").getValue();
   var role = this.byId("roleInput").getValue();

   var oModel = this.getView().getModel();
   var data = oModel.getData();

   data.employees.push({
    name: name,
    role: role
   });

   oModel.refresh();

  }

 });

});
