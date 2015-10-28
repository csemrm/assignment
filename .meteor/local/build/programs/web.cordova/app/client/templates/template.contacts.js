(function(){
Template.__checkName("contacts");
Template["contacts"] = new Template("Template.contacts", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return "headerButtonLeft";
  }, function() {
    return Spacebars.include(view.lookupTemplate("contentFor"), function() {
      return [ " \n    ", HTML.BUTTON({
        "class": "button button-clear",
        "data-ion-modal": "_myPopover"
      }, "\n        ", Blaze.If(function() {
        return Spacebars.call(view.lookup("isAndroid"));
      }, function() {
        return [ "\n        ", Blaze._TemplateWith(function() {
          return {
            icon: Spacebars.call("android-more-vertical")
          };
        }, function() {
          return Spacebars.include(view.lookupTemplate("ionIcon"));
        }), "\n        " ];
      }, function() {
        return [ "\n        ", Blaze._TemplateWith(function() {
          return {
            icon: Spacebars.call("more")
          };
        }, function() {
          return Spacebars.include(view.lookupTemplate("ionIcon"));
        }), "\n        " ];
      }), "\n    "), "\n    " ];
    });
  }), "\n    ", Blaze._TemplateWith(function() {
    return "headerTitle";
  }, function() {
    return Spacebars.include(view.lookupTemplate("contentFor"), function() {
      return [ "\n    ", HTML.H1({
        "class": "title"
      }, "Contacts"), "\n    " ];
    });
  }), "\n\n    ", Blaze._TemplateWith(function() {
    return "headerButtonRight";
  }, function() {
    return Spacebars.include(view.lookupTemplate("contentFor"), function() {
      return [ "\n    ", HTML.BUTTON({
        "class": "button button-clear",
        "data-ion-modal": "_contactsNew"
      }, Blaze._TemplateWith(function() {
        return {
          icon: Spacebars.call("ios-plus-empty")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("ionIcon"));
      })), "\n    " ];
    });
  }), "\n\n    ", Spacebars.include(view.lookupTemplate("ionView"), function() {
    return [ "\n    ", Spacebars.include(view.lookupTemplate("ionContent"), function() {
      return [ "\n    ", Spacebars.include(view.lookupTemplate("ionList"), function() {
        return [ "\n    ", HTML.DIV({
          "class": "item item-input-inset"
        }, "\n        ", HTML.LABEL({
          "class": "item-input-wrapper"
        }, "\n            ", Blaze._TemplateWith(function() {
          return {
            icon: Spacebars.call("ios-search"),
            "class": Spacebars.call("placeholder-icon")
          };
        }, function() {
          return Spacebars.include(view.lookupTemplate("ionIcon"));
        }), "\n            ", HTML.INPUT({
          type: "text",
          placeholder: "Search",
          value: function() {
            return Spacebars.mustache(view.lookup("searchQuery"));
          }
        }), "\n        "), "\n    "), "\n    ", Blaze.Each(function() {
          return Spacebars.call(view.lookup("contacts"));
        }, function() {
          return [ "\n    ", Blaze._TemplateWith(function() {
            return {
              path: Spacebars.call("contacts.show"),
              buttonRight: Spacebars.call(true),
              avatar: Spacebars.call(true),
              "class": Spacebars.call("item-icon-right")
            };
          }, function() {
            return Spacebars.include(view.lookupTemplate("ionItem"), function() {
              return [ "\n    ", HTML.IMG({
                src: function() {
                  return Spacebars.mustache(view.lookup("avatarUrl"));
                }
              }), "\n    ", Blaze.View("lookup:name.first", function() {
                return Spacebars.mustache(Spacebars.dot(view.lookup("name"), "first"));
              }), " ", Blaze.View("lookup:name.last", function() {
                return Spacebars.mustache(Spacebars.dot(view.lookup("name"), "last"));
              }), "\n    ", Blaze._TemplateWith(function() {
                return {
                  icon: Spacebars.call("ios-arrow-forward"),
                  "class": Spacebars.call("positive")
                };
              }, function() {
                return Spacebars.include(view.lookupTemplate("ionIcon"));
              }), "\n    " ];
            });
          }), "\n    " ];
        }), "\n    " ];
      }), "\n    " ];
    }), "\n    " ];
  }) ];
}));

}).call(this);
