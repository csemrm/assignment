(function(){Session.set('sortKey', 'name.first');


Template.contacts.created = function () {
    this.autorun(function () {
        this.subscription = Meteor.subscribe('contacts');
    }.bind(this));
};

Template.contacts.rendered = function () {
    this.autorun(function () {
        if (!this.subscription.ready()) {
            IonLoading.show();
        } else {
            IonLoading.hide();
        }
    }.bind(this));
};
Template.contacts.events({
    'keyup input': function (event, template) {
        Session.set('searchQuery', event.target.value);
    },
});
Template.contacts.helpers({
    contacts: function () {
        var sortKey = Session.get('sortKey');


        var sortKeyOrder = Session.get('sortKeyOrder') || '1';
        console.log('sortKey  ' + sortKey + ' sortKeyOrder  ' + sortKeyOrder);
        var obj = {};
        if (Session.get('searchQuery')) {

            obj = {'name.first': {$regex: Session.get('searchQuery'), $options: 'i'}, };

        }
        if (sortKey == 'name.first') {
            return Contacts.find(obj, {sort: {'name.first': sortKeyOrder}});
        } else if (sortKey == 'name.last') {
            return Contacts.find(obj, {sort: {'name.last': sortKeyOrder}});
        } else {
            return Contacts.find(obj);
        }
    },
    searchQuery: function () {
        return Session.get('searchQuery');
    }
});
}).call(this);
