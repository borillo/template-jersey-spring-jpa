Ext.define('TEST.model.User',
{
    extend : 'Ext.data.Model',

    fields : [ 'id', 'name' ],

    validations : [
    {
        type : 'length',
        field : 'name',
        min : 1
    } ]
});