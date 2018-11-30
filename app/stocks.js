var theURL = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=DJI&apikey=T6R13H9I07XJ42F7";

$(document).ready(function() {
  $("#stock").show();
  doAjax(theURL);

  $('.ajaxtrigger').click(function() {
    $("#stockIndicator").show();
    doAjax(theURL);
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

        var stockPrice = data['Global Quote']['05. price']
        var stockPercent = data['Global Quote']['10. change percent']
        var stockChange = data['Global Quote']['08. previous close']

        $('#stockPrice').html(parseFloat(Math.round(stockPrice * 100) / 100).toFixed(2));
        $('#stockPercent').html(stockPercent);
        
        if(stockChange > stockPrice){
            $('#stockPercent').addClass('badge-soft-danger');
          } else if (stockPrice > stockChange) {
            $('#stockPercent').addClass('badge-soft-success');
          }
      }
    });
  }
});