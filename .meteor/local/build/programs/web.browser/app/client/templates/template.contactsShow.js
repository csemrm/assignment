(function(){
Template.__checkName("contactsShow");
Template["contactsShow"] = new Template("Template.contactsShow", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return "headerButtonLeft";
  }, function() {
    return Spacebars.include(view.lookupTemplate("contentFor"), function() {
      return [ "\n    ", Blaze._TemplateWith(function() {
        return {
          path: Spacebars.call("contacts"),
          text: Spacebars.call("Contacts")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("ionNavBackButton"));
      }), "\n  " ];
    });
  }), "\n\n  ", Blaze._TemplateWith(function() {
    return "headerTitle";
  }, function() {
    return Spacebars.include(view.lookupTemplate("contentFor"), function() {
      return [ "\n    ", HTML.H1({
        "class": "title"
      }, "Details"), "\n  " ];
    });
  }), "\n\n  ", Blaze._TemplateWith(function() {
    return "headerButtonRight";
  }, function() {
    return Spacebars.include(view.lookupTemplate("contentFor"), function() {
      return [ "\n    ", HTML.BUTTON({
        "class": "button button-clear",
        "data-ion-modal": "_contactsEdit",
        "data-id": function() {
          return Spacebars.mustache(Spacebars.dot(view.lookup("contact"), "_id"));
        }
      }, "Edit"), "\n  " ];
    });
  }), "\n\n  ", Spacebars.include(view.lookupTemplate("ionView"), function() {
    return [ "\n    ", Blaze._TemplateWith(function() {
      return {
        "class": Spacebars.call("padding contact-detail")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("ionContent"), function() {
        return [ "\n      ", Spacebars.With(function() {
          return Spacebars.call(view.lookup("contact"));
        }, function() {
          return [ "\n        ", HTML.DIV({
            "class": "list card"
          }, "\n          ", HTML.DIV({
            "class": "item item-avatar"
          }, "\n            ", HTML.IMG({
            src: function() {
              return Spacebars.mustache(view.lookup("avatarUrl"));
            }
          }), "\n            ", HTML.H2(Blaze.View("lookup:name.first", function() {
            return Spacebars.mustache(Spacebars.dot(view.lookup("name"), "first"));
          }), " ", Blaze.View("lookup:name.last", function() {
            return Spacebars.mustache(Spacebars.dot(view.lookup("name"), "last"));
          })), "\n            ", HTML.H3("Gender: ", Blaze.View("lookup:gender", function() {
            return Spacebars.mustache(view.lookup("gender"));
          })), "\n            ", HTML.H2("Contacts"), "\n            ", HTML.P(Blaze.View("lookup:contacts.email", function() {
            return Spacebars.mustache(Spacebars.dot(view.lookup("contacts"), "email"));
          }), ", ", Blaze.View("lookup:contacts.phonenumber", function() {
            return Spacebars.mustache(Spacebars.dot(view.lookup("contacts"), "phonenumber"));
          })), "\n            ", HTML.H2("Location"), "\n            ", HTML.P("Latitude: ", Blaze.View("lookup:location.latitude", function() {
            return Spacebars.mustache(Spacebars.dot(view.lookup("location"), "latitude"));
          }), ", Longitude: ", Blaze.View("lookup:location.longitude", function() {
            return Spacebars.mustache(Spacebars.dot(view.lookup("location"), "longitude"));
          })), "\n          "), "\n        "), "\n      " ];
        }), "\n    " ];
      });
    }), "\n  " ];
  }) ];
}));

}).call(this);
