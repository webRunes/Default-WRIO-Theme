(function () {

    var tour = new Tour({
        storage: false,
        template: '<div class="popover tour"><div class="arrow"></div><h3 class="popover-title"></h3><img src="img/ia.png" class="profile-ia"><div class="popover-content"></div><div class="popover-navigation col-xs-12"><div class="btn-group"><button class="btn btn-sm btn-default go-to" data-go-to-step="0" data-role="prev">Repeat</button><button class="btn btn-sm btn-default go-to" data-go-to-step="0">Settings</button></div><div class="btn-group pull-right"><button class="btn btn-sm btn-default" data-role="end">End conversation</button></div></div></div>'
    });

    tour.addSteps([
      {
          //0
          element: ".call-ia",
          placement: "bottom",
          title: "IA — Individual Assistant",
          content: "Your command, master.<ul class='nav nav-pills nav-stacked'><li><div class='col-lg-12'><div class='input-group'><input class='form-control' placeholder='#help' autofocus type='text'><span class='input-group-btn'><button class='btn btn-default' type='button'><span class='glyphicon glyphicon-ok'></span></button></span></div></div></li></ul>"
      }
    ]);

    // Initialize the tour
    tour.init();

    // Start the tour
    tour.start();

    $(document).on("click", ".go-to", function (e) {
        var step = parseInt($(this).data("go-to-step"));
        tour.goTo(step);
    });

}());