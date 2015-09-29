/**
 * 
 */
Ext.define("DeviceTrackingApp.view.DeviceTrackingView",{
	//extend : "Ext.panel.Panel",
	extend : 'Ext.container.Container',
	layout : "anchor",
	style : "background-color:white",
	title : 'Tracker',
	items : [
	        {
	        	 xtype : "container",
	        	 //html : "header",
	        	 //region : "north",
	        	 margin : '5 5 5 10',
	        	 //height : "8%",
	        	 //width : "100%",
				 anchor : "100% 10%",
				 style : 'background-color:blue',
	        	 layout : {
	        		 type : 'hbox'
	        	 },
				 items : [
	        	      {
	        	    	  xtype : 'image',
	        	    	  src : '../client/extjs/build/images/logo.png',
	        	    	  width : '20%', 
	        	    	  height : '100%'	 
	        	      },
					  /* {
						  
						  xtype : 'container',
						  width : '50%',
						  items : [
							{
									xtype : 'toolbar',
									//height : '10%',
									items: [
										{
											text: 'Button'
										},
										{
											xtype: 'splitbutton',
											text : 'Split Button'
										},
										'->',
										{
											xtype    : 'textfield',
											name     : 'field1',
											emptyText: 'enter search term'
										}
									]
	        	
								}
						  ]
					  }, */
	        	      {
	        	    	  xtype : 'container',
	        	    	  width : '80%',
	        	    	  layout : {
	        	    		  type : 'hbox',
	        	    		  pack : 'end'
	        	    	  },
	        	    	  items : [
	        	    	           {
	        	    	        	   xtype : 'label',
	        	    	        	   text : 'My Account',
	        	    	        	   margin : '5 5 5 5'
	        	    	           },
	        	    	           {
	        	    	        	   xtype : 'label',
	        	    	        	   text : 'karsun',
	        	    	        	   margin : '5 5 5 5'
	        	    	        		   
	        	    	           }
	        	    	  ]
	        	      }
	        	 ]
	        	 
	         }, 
			 {
				 xtype : "container",
				 anchor : "92% 5%",
				 layout : {
					 type : 'hbox',
					 pack : 'end'
				 },
				 items :[
					{
							xtype : 'button',
							text : 'History',
							margin : '5 5 5 5',
							itemId : 'history1',
							width : 100
						 },
						 {
							xtype : 'button',
							text : 'Device II',
							margin : '5 5 5 5',
							itemId : 'history2',
							width : 100
							
						
						 },
						 {
							xtype : 'button',
							text : 'Device III',
							margin : '5 5 5 5',
							itemId : 'history3',
							width : 100
						
						 }
				 ]
			 },
			 {
				 xtype : "container",
				anchor : "100% 85%",
				itemId : 'dtMapPanel',
				layout : 'hbox',
				items : [
					{
	        	 xtype : "container",
	        	 //html : "Test this now",
	        	 margin : '20 20 5 10',
	        	 //region : "center",
	        	 width : "92%",
				 height : "100%",
	        	 layout : 'fit',
	        	 style : 'border : 1px solid black',
	        	 items :{   xtype: 'gmappanel',
      				        gmapType: 'map',
							itemId : 'dtMap',
      				        center: {
      				            geoCodeAddr: "Chennai",
      				            marker: {
      				                title: 'Vicky Home'
      				            }
      				        },
      				        mapOptions : {
      				            mapTypeId: google.maps.MapTypeId.ROADMAP
      				        }
	        	          }
	        	 
	         },
	         {
	        	 xtype : "panel",
	        	 //html : "navigator",
	        	 margin : '20 5 5 5',
	        	 //region : "east",
	        		width : "8%",
					height : "100%",
					collapsible : true,
					title : 'Devices',
		        	 width : "8%",
					 layout : {type :'vbox',pack : 'start'},
					 items : [
						 {
							xtype : 'button',
							text : 'Device I',
							margin : '5 5 5 5',
							itemId : 'device1',
							width : 100
						 },
						 {
							xtype : 'button',
							text : 'Device II',
							margin : '5 5 5 5',
							itemId : 'device2',
							width : 100
							
						
						 },
						 {
							xtype : 'button',
							text : 'Device III',
							margin : '5 5 5 5',
							itemId : 'device3',
							width : 100,
							listeners : {
								click : function(btn){
									alert(btn.up('[itemId=dtMapPanel]'));
									var deviceTrackingView = btn.up('[itemId=dtMapPanel]').up('[itemId=deviceTrackingParentContainer]');
									var gmapCtrl = deviceTrackingView.down('[itemId=dtMap]');
									//var mpoint = new google.maps.LatLng(13,80);
									//var marker = gmapCtrl.addMarker(mpoint,{title:'Device1'},false,false, null);
									//gmapCtrl.center=mpoint;
									
									gmapCtrl.center= {
      				            geoCodeAddr: "Madurai",
      				            marker: {
      				                title: 'Vicky Home'
      				            }
      				        };
									
									
									gmapCtrl.center();
									google.maps.event.trigger(gmapCtrl, 'resize');
									alert('Done2');
								}
							}
						
						 },{
							xtype : 'button',
							text : 'Device IV',
							margin : '5 5 5 5',
							itemId : 'device4',
							width : 100
						
						 },
						 {
							xtype : 'button',
							text : 'Device V',
							margin : '5 5 5 5',
							itemId : 'device5',
							width : 100
						
						 }
					 
					 ]
	        		 
	         } 
				
				]
			 
			 } 
	 ]
});