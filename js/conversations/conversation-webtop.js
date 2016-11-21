(function () {

    var tour = new Tour({
        storage: false,
        template: '<div class="popover tour"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div><div class="popover-navigation col-xs-12"><div class="btn-group"><button class="btn btn-sm btn-default go-to">Add widget</button><button class="btn btn-sm btn-default go-to" data-go-to-step="0">Create new webtop</button></div><div class="btn-group pull-right"><button class="btn btn-sm btn-default" data-role="end">Close</button></div></div></div>'
    });

    tour.addSteps([
      {
          //0
          element: ".call-ia",
          placement: "bottom",
          title: "Webtop 5",
          content: "<div class='col-xs-12 padding-top'><div class='media thumbnail'><div class='col-xs-12 pull-right'><img src='img/ia.png' class='pull-left'><ul class='details'><li>Master, I would advise to add my vidget first, so that I coul help you any time.</li><li><ul class='nav nav-pills nav-stacked'><li><a id='myHref'>Ok, add</a></li></ul></li></ul></div></div><div class='media-body'><table class='table playerlist'><tr><td class='col-xs-2'>Ctrl + 1</td><td>General</td></tr><tr><td>Ctrl + 2</td><td>Home</td></tr><tr><td>Ctrl + 3</td><td>Work</td></tr><tr><td>Ctrl + 4</td><td>Bookshelf</td></tr><tr class='active'><td>Ctrl + 5</td><td>Webtop 5</td></tr></table></div>"
      }
    ]);

    // Initialize the tour
    tour.init();

    // Start the tour
    tour.start();
    
    $(document).on("click", "#myHref", function (e) {
        window.location = "introduction-step9.htm";
    });

    $(document).on("click", ".go-to", function (e) {
        var step = parseInt($(this).data("go-to-step"));
        tour.goTo(step);
    });

}());