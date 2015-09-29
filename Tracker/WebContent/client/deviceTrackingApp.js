/**
 * 
 */
Ext.Loader.setConfig({enabled:true});
Ext.application({
	name:"DeviceTrackingApp",
	appFolder:"../client/deviceTrackingApp",
	controllers : "DeviceTrackingController",
	launch : function(){
		alert(222);
		
		var deviceTrackingView = Ext.create("DeviceTrackingApp.view.DeviceTrackingView",{
			itemId : 'deviceTrackingParentContainer'
		});
		
		Ext.create("Ext.container.Viewport",{
			renderTo : Ext.getBody(),
			layout : 'fit',
			items : [deviceTrackingView]
		});
		
		alert(444);
	}
});