(function(){
Template.__checkName("_contactsNew");
Template["_contactsNew"] = new Template("Template._contactsNew", (function() {
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
          id: Spacebars.call("contacts-new-form"),
          type: Spacebars.call("insert")
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
          }, "Add"), "\n      "), "\n      ", HTML.DIV({
            "class": "content has-header overflow-scroll"
          }, "\n        ", Blaze._TemplateWith(function() {
            return {
              omitFields: Spacebars.call("avatarUrl,details.active")
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
