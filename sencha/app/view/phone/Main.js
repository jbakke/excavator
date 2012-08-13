Ext.define("excavator.view.phone.Main", {
    extend: 'Ext.Carousel',
    requires: [
		'excavator.view.Person'
	],
    
    config: {
        layout: 'card',
        defaults: {
			xtype: 'person'
		},

        items: [
            {}, {}, {}, {}
        ]
    }
});
