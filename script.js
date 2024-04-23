var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");
var settings ={
    "async": true,
    "scrossDomain" : true,
    "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "method":"GET",
    "headers":{}
}
$.ajax(settings).done(function(response){
  btc.innerHTML = response.bitcoin.usd;
  eth.innerHTML = response.ethereum.usd;
  doge.innerHTML = response.dogecoin.usd;   
});

function myfunction1()
{
  window.location="https://www.binance.com/";
}
function myfunction2()
{
  window.location="https://www.coinbase.com/";
}
function myfunction3()
{
  window.location="https://www.kraken.com/";
}
function myfunction4()
{
  window.location="https://www.kucoin.com/";
}
function myfunction5()
{
  window.location="https://www.gemini.com/";
}
function myfunction6()
{
  window.location="https://www.bitstamp.net/";
}