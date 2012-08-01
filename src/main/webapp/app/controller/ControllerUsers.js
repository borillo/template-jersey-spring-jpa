Ext.define('TEST.controller.ControllerUsers',
{
    extend : 'Ext.app.Controller',

    stores : [ 'StoreUsers' ],
    views : [ 'users.GridUsers' ],

    init : function()
    {
        this.control(
        {
            'gridUsers button[action=add]' :
            {
                click : this.addUser
            },

            'gridUsers button[action=remove]' :
            {
                click : this.removeUser
            }
        });
    },

    addUser : function(button, event, opts)
    {
        button.up('gridUsers').addEmptyRowAndEdit();
    },

    removeUser : function(button, event, opts)
    {
        button.up('gridUsers').removeSelectedRow();
    }
});