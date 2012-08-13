Ext.define("excavator.view.Person", {
    extend: 'Ext.form.FormPanel',
    xtype: 'person',
    
    config: {
        layout: 'vbox',

        items: [
            {
                xtype: 'textfield',
                label: 'name'
            }
        ]
    }
});

