(function(){
Template.__checkName("_contactsEdit");
Template["_contactsEdit"] = new Template("Template._contactsEdit", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return {
      customTemplate: Spacebars.call(true)
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("ionModal"), function() {
      return [ "\n    ", Blaze._TemplateWith(function() {
        return {
          collection: Spacebars.call("Contacts"),
          doc: Spacebars.call(view.lookup("contact")),
          id: Spacebars.call("contacts-edit-form"),
          type: Spacebars.call("update")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("autoForm"), function() {
          return [ "\n      ", HTML.DIV({
            "class": "bar bar-header bar-stable"
          }, "\n        ", HTML.BUTTON({
            "data-dismiss": "modal",
            type: "button",
            "class": "button button-clear"
          }, "Cancel"), "\n        ", HTML.H2({
            "class": "title"
          }, "Edit Contact"), "\n        ", HTML.BUTTON({
            type: "submit",
            "class": "button button-positive button-clear"
          }, "Save"), "\n      "), "\n      ", HTML.DIV({
            "class": "content has-header overflow-scroll"
          }, "\n        ", Blaze._TemplateWith(function() {
            return {
              omitFields: Spacebars.call("avatarUrl")
            };
          }, function() {
            return Spacebars.include(view.lookupTemplate("afQuickFields"));
          }), "\n      "), "\n    " ];
        });
      }), "\n  " ];
    });
  });
}));

}).call(this);
