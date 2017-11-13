var qt = "\"You can't stop the waves, but you can learn to surf.\"";
var qa = "Jon Kabat-Zinn";

$("#getquote").click(function() {
  $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?").done(getQuote);
});

function getQuote(response) {
  $
  $("#quotetext").text(response.quoteText);
  if(response.quoteAuthor == "") {
     $("#quoteauthor").text("Author Not Found");
  }
  else {
    $("#quoteauthor").text(response.quoteAuthor);
  }
  qt = response.quoteText;
  qa = response.quoteAuthor;
}

var url = "https://twitter.com/intent/tweet?text=";
var param = "width" + '400' + "height" + '300';

$("#sharequote").click(function() {
  window.open(url + qt + "   -" + qa + "\n", "Twitter Share", param).focus();
});