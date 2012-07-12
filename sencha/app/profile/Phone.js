Ext.define('excavator.profile.Phone', {
	extend: 'Ext.app.Profile',
	
	config: {
		name: 'Phone',
		views: ['excavator.view.phone.Main']
	},
	
	isActive: function() {
		return Ext.os.is.Phone;
	},
	
	launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();
		Ext.Viewport.add(Ext.create('excavator.view.phone.Main'));
	}
});
