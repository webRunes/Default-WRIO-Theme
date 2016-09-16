(function () {

    var tour = new Tour({
        storage: false,
        template: '<div class="popover tour"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div><div class="popover-navigation col-xs-12"><div class="btn-group"><button class="btn btn-sm btn-default go-to">My Playlist [4]</button><button class="btn btn-sm btn-default go-to" data-go-to-step="0">Settings</button></div><div class="btn-group pull-right"><button class="btn btn-sm btn-default" data-role="end">Close</button></div></div></div>'
    });

    tour.addSteps([
      {
          //0
          element: ".call-ia",
          placement: "bottom",
          title: "Player",
          content: "<div class='col-xs-12 padding-top'><div class='media thumbnail'><div class='col-xs-12 pull-right'><img src='img/Epic-Soul-Factory-The-path-of-the-silent-flower.png' class='pull-left'><ul class='details'><li>Epic Soul Factory - SIGMA includes sixteen powerful, neo-orchestral tracks; from the most emotional and uplifting melodies to the most massive electronic sounds. You can listen to a story that narrates how we've been created from stardust in the beginning; until the end where a beautiful dream never ends.</li></ul></div></div><div class='media-body'><table class='table playerlist'><tr class='active'><td>1</td><td>Epic Soul Factory — The path of the silent flower</td><td>4:12</td></tr><tr><td>2</td><td>Cosmos Volume II</td><td>1:58:11</td></tr><tr><td>3</td><td>Demo track</td><td>2:25</td></tr><tr><td>4</td><td>Cosmic Frequency 432Hz</td><td>3:46</td></tr></table><div class='btn-group btn-block player-controls' role='group'><button type='button' class='btn btn-default col-xs-3'><span class='glyphicon glyphicon-step-backward'></span></button><button type='button' class='btn btn-default col-xs-3'><span class='glyphicon glyphicon-play'></span></button><button type='button' class='btn btn-default col-xs-3'><span class='glyphicon glyphicon-step-forward'></span></button><button type='button' class='btn btn-default col-xs-3'><span class='glyphicon glyphicon-volume-down'></span></button></div></div>"
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