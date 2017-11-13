
var total = 0;


$('#entry').submit(enter);

function enter(event) {
  
  var entry, currency;
  
  event.preventDefault();
  
  entry = $('#newEntry').val();
  
  entry = parseFloat(entry);
  
  currency = currencyFormat(entry);
  
  $('#entries').append('<tr><td></td><td>' + currency + '</td></tr>');
  
  total = total + entry;
  
  $('#total').html(currencyFormat(total));
  
  $('#newEntry').val('');
  
}

function currencyFormat(number) {
  
  var currency = parseFloat(number);
  
  currency = currency.toFixed(2);
  
  currency = '$' + currency;
  
  return currency;
  
}