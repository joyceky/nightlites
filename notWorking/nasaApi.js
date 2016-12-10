function getPredictTheSkies() {
    var request = $.ajax({
        url: "http://api.predictthesky.org",
        dataType: "jsonp"
    });

    request.done(function(data) {
      console.log(data);
        quote.text(data.quoteText);
        author.text(data.quoteAuthor);
    });

    request.fail(function(jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });
}
