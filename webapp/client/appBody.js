Template.appBody.onRendered(function () {
  $(".ui.dropdown").dropdown();

  // make the dropdowns in the menu work on hover
  $(".ui.menu .ui.dropdown").dropdown({ on: "hover" });
});

Template.appBody.events({
  "click .createCase"(event, instance) {
    $(".ui.modal").modal("show");
  },
})