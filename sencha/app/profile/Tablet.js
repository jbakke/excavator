Ext.define('excavator.profile.Tablet', {
	extend: 'Ext.app.Profile',
	
	config: {
		name: 'Tablet',
		views: ['excavator.view.tablet.Main']
	},
	
	isActive: function() {
		return (Ext.os.is.Tablet || Ext.os.is.Desktop);
	},
	
	launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();
		Ext.Viewport.add(Ext.create('excavator.view.tablet.Main'));
	}
});
