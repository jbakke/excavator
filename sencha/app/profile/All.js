Ext.define('excavator.profile.All', {
	extend: 'Ext.app.Profile',
	requires: [
		'excavator.Ballot'
	],
	
	ballot: Ext.create('excavator.Ballot')
})
