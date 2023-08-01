$("#action-button").click(() => {
  $.ajax({
    url: "http://api.joind.in/v2.1/talks/10889",
    data: {
      format: "json",
    },
    error() {
      $("#info").html("<p>An error has occured</p>");
    },
    dataType: "jsonp",
    success(data) {
      let title = data.talks[0].talk_title;
      console.log(title);
      $("#info").text(`${title} `);
      $(".info").text(`${title} `);
    },
    type: "Get",
  });
});
