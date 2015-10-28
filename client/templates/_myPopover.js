Template._myPopover.events({
    'click .item': function (event, template) {
        var page = event.target.id;
         var target = page.split('_'); 
        Session.set('sortKey', target[0]);
        Session.set('sortKeyOrder', target[1]);
        IonModal.close(); 
    },
});