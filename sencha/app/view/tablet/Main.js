Ext.define("excavator.view.tablet.Main", {
    extend: 'Ext.Panel',
    requires: [
		'excavator.view.Person'
	],
    
    config: {
        layout: 'vbox',
        defaults: {
			layout: 'hbox',
			flex: 1,
			defaults: {
				flex: 1,
				xtype: 'person'
			}
		},

        items: [
            {
				items: [
					{
						
					},
					{
						
					}
				]
            },
            {
				items: [
					{
						
					},
					{
						
					}
				]
            }
        ]
    }
});
