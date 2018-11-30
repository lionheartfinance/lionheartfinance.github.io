var theURL3 = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IXIC&apikey=T6R13H9I07XJ42F7";

$(document).ready(function() {
  $("#stock").show();
  doAjax(theURL3);

  $('.ajaxtrigger').click(function() {
    $("#stockIndicator").show();
    doAjax(theURL3);
    return false;
  });

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
  }

  function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
    }

  function doAjax(url) {
    $.ajax({
      url: url,
      dataType: 'json',
      contentType: "application/json",
      success: function(data) {

        var stockPrice3 = data['Global Quote']['05. price']
        var stockPercent3 = data['Global Quote']['10. change percent']
        var stockChange3 = data['Global Quote']['08. previous close']

        $('#stockPrice3').html(parseFloat(Math.round(stockPrice3 * 100) / 100).toFixed(2));
        $('#stockPercent3').html(stockPercent3);

        if(stockChange3 > stockPrice3){
            $('#stockPercent3').addClass('badge-soft-danger');
          } else if (stockPrice3 > stockChange3) {
            $('#stockPercent3').addClass('badge-soft-success');
          }
      }
    });
  }
});