var theURL = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=DJI&apikey=T6R13H9I07XJ42F7";
var theURL2 = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=INX&apikey=T6R13H9I07XJ42F7";
var theURL3 = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IXIC&apikey=T6R13H9I07XJ42F7";

$(document).ready(function() {
  $("#stock").show();
  doAjax(theURL);

  $('.ajaxtrigger').click(function() {
    $("#stockIndicator").show();
    doAjax(theURL);
    return false;
  });

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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

        $('#stockPrice').html(numberWithCommas(parseFloat(Math.round(stockPrice * 100) / 100).toFixed(2)));
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

$(document).ready(function() {
    $("#stock").show();
    doAjax(theURL2);
  
    $('.ajaxtrigger').click(function() {
      $("#stockIndicator").show();
      doAjax(theURL2);
      return false;
    });
  
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
  
          var stockPrice2 = data['Global Quote']['05. price']
          var stockPercent2 = data['Global Quote']['10. change percent']
          var stockChange2 = data['Global Quote']['08. previous close']
  
          $('#stockPrice2').html(numberWithCommas(parseFloat(Math.round(stockPrice2 * 100) / 100).toFixed(2)));
          $('#stockPercent2').html(stockPercent2);
  
          if(stockChange2 > stockPrice2){
              $('#stockPercent2').addClass('badge-soft-danger');
            } else if (stockPrice2 > stockChange2) {
              $('#stockPercent2').addClass('badge-soft-success');
            }
        }
      });
    }
  });

  $(document).ready(function() {
    $("#stock").show();
    doAjax(theURL3);
  
    $('.ajaxtrigger').click(function() {
      $("#stockIndicator").show();
      doAjax(theURL3);
      return false;
    });
  
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
  
          $('#stockPrice3').html(numberWithCommas(parseFloat(Math.round(stockPrice3 * 100) / 100).toFixed(2)));
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