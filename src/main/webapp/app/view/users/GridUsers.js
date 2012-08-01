Ext.define('TEST.view.users.GridUsers',
{
    extend : 'Ext.grid.Panel',
    alias : 'widget.gridUsers',
    requires : [ 'Ext.grid.plugin.RowEditing' ],

    title : 'Users',
    store : 'StoreUsers',

    initComponent : function()
    {
        this.columns = [
        {
            header : 'Code',
            dataIndex : 'id',
            flex : 5
        },
        {
            header : 'Name',
            dataIndex : 'name',
            flex : 40,
            field :
            {
                xtype : 'textfield',
                allowBlank : false
            }
        } ];

        this.plugins = [
        {
            ptype : 'rowediting',
            clicksToEdit : 2
        } ];

        this.tbar = [
        {
            xtype : 'button',
            text : 'Add',
            action : 'add'
        },
        {
            xtype : 'button',
            text : 'Remove',
            action : 'remove'
        } ];

        this.callParent(arguments);
    },

    addEmptyRowAndEdit : function()
    {
        var rowEditor = this.getPlugin();
        var record = Ext.create('TEST.model.User');

        rowEditor.cancelEdit();
        this.store.insert(0, record);
        rowEditor.startEdit(0, 0);
    },

    removeSelectedRow : function()
    {
        var rowEditor = this.getPlugin();
        var records = this.getSelectionModel().getSelection();

        rowEditor.cancelEdit();
        this.store.remove(records);
    }
});