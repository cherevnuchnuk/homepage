$(".toggle-button").on("click", function () {
    var $this = $(this);
    var content = $this.prev("ul.timeline");
    var buttonText = $this.text().toLowerCase();

    if (buttonText === "show more") {
        buttonText = "Show less";

    } else {
        buttonText = "Show more";

    }
    content.toggleClass("hidden");
    $this.text(buttonText);
});
