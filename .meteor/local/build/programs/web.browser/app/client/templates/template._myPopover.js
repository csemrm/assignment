(function(){
Template.__checkName("_myPopover");
Template["_myPopover"] = new Template("Template._myPopover", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return {
      customTemplate: Spacebars.call(true)
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("ionModal"), function() {
      return [ "\n    ", HTML.DIV({
        "class": "content"
      }, "\n        ", HTML.UL({
        "class": "list"
      }, "\n            ", HTML.LI({
        "class": "item item-icon-right",
        value: "asc",
        id: "name.first_1"
      }, "\n                First Name ASC \n            "), "\n            ", HTML.LI({
        "class": "item item-icon-right",
        value: "desc",
        id: "name.first_-1"
      }, "\n                First Name DESC \n            "), "\n            ", HTML.LI({
        "class": "item item-icon-right",
        value: "asc",
        id: "name.last_1"
      }, "\n                Last Name ASC \n            "), "\n            ", HTML.LI({
        "class": "item item-icon-right",
        value: "desc",
        id: "name.last_-1"
      }, "\n                Last Name DESC \n            "), "\n        "), "\n    "), "\n    " ];
    });
  });
}));

}).call(this);
