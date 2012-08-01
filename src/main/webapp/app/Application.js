Ext.Loader.setConfig(
{
    enabled : true
});

Ext.application(
{
    name : 'TEST',
    appFolder : 'app',
    autoCreateViewport : false,

    views : [ 'usuarios.GridUsers' ],
    controllers : [ 'ControllerUsers' ],

    launch : function()
    {
        Ext.create('Ext.Viewport',
        {
            layout : 'border',
            items : [
            {
                xtype : 'gridUsers',
                region : 'center'
            } ]
        });
    }
});