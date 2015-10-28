(function(){STATES = [
    'AK', 'AL', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
];

Contacts = new Mongo.Collection('contacts');

Contacts.before.insert(function (userId, doc) {
    var gender = Random.choice(['men', 'women']);
    var num = _.random(0, 50);
    doc.avatarUrl = 'https://randomuser.me/api/portraits/thumb/' + gender + '/' + num + '.jpg';
});

Contacts.attachSchema(new SimpleSchema({
    name: {
        type: Object
    },
    'name.first': {
        type: String,
        label: 'First Name',
        autoform: {
            'label-type': 'floating',
            placeholder: 'First Name'
        },
        max: 200
    },
    'name.last': {
        type: String,
        label: 'Last Name',
        autoform: {
            'label-type': 'floating',
            placeholder: 'Last Name'
        },
        max: 200
    },
    contacts: {
        type: Object
    },
    'contacts.email': {
        type: String,
        label: 'Email Address',
        autoform: {
            'label-type': 'placeholder',
            placeholder: 'Email Address'
        }
    },
    'contacts.phonenumber': {
        type: String,
        label: 'Phone Number',
        autoform: {
            'label-type': 'placeholder',
            placeholder: 'Phone Number'
        }
    },
    gender: {
        type: String,
        autoform: {
            options: [
                {value: 'men', label: 'men'},
                {value: 'women', label: 'women'},
            ],
            type: 'select-radio'
        }
    },
    location: {
        type: Object
    },
    'location.latitude': {
        type: String,
        autoform: {
            'label-type': 'floating',
            placeholder: 'Latitude'
        },
        max: 8
    },
    'location.longitude': {
        type: String,
        autoform: {
            'label-type': 'floating',
            placeholder: 'Longitude'
        },
        max: 8
    },
    avatarUrl: {
        type: String,
        optional: true
    }
}));




Contacts.allow({
    insert: function (userId, contact) {
        // can only create posts where you are the author
        return true;
    },
    update: function (userId, contact) {
        // can only delete your own posts
        return true;
    }, remove: function (userId, contact) {
        // can only delete your own posts
        return true;
    }

});

}).call(this);

//# sourceMappingURL=collections.js.map
