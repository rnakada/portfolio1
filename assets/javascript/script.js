// // Global Variables

// var firstSymbol = $(".firstColumn");
// var secondSymbol = $(".secondColumn");
// var thirdSymbol = $(".thirdColumn");
// var fourthSymbol = $(".fourthColumn");
// var fifthSymbol = $(".fifthColumn");
// var sixthSymbol = $(".sixthColumn");

// // 1st quote starting from left of DOM

// function firstQuote() {
//   var apiKey = "9fc7c359c0eb6b622501b2c9cafc7f7d";
//   var getQuoteURL = "https://marketdata.websol.barchart.com/getQuote.jsonp";

//   $.ajax({
//     method: "POST",
//     crossDomain: true,
//     dataType: "jsonp",
//     url: getQuoteURL,
//     data: {
//       apikey: apiKey,
//       symbols: "FB"
//     },
//     success: function(data) {
//       var html = "";
//       for (var i in data.results) {
//         console.log(data);
//         html +=
//           "Symbol: " +
//           "<strong>" +
//           data.results[i]["symbol"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "Name: " +
//           "<strong>" +
//           data.results[i]["name"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "Last Price: " +
//           "<strong>" +
//           data.results[i]["lastPrice"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "Net Change: " +
//           "<strong>" +
//           data.results[i]["netChange"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "Percent Change: " +
//           "<strong>" +
//           data.results[i]["percentChange"] +
//           "</strong>" +
//           "%" +
//           "<br />";
//         html +=
//           "Open: " +
//           "<strong>" +
//           data.results[i]["open"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "High: " +
//           "<strong>" +
//           data.results[i]["high"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "Low: " +
//           "<strong>" +
//           data.results[i]["low"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "Close: " +
//           "<strong>" +
//           data.results[i]["close"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "Volume: " +
//           "<strong>" +
//           data.results[i]["volume"] +
//           "</strong>" +
//           "<br />";
//       }
//       $(firstSymbol).html(html);
//     },
//     error: function() {
//       console.log(" Something went wrong!");
//     }
//   });
// }

// $(firstSymbol).html(firstQuote);

// // 2nd quote starting from left of DOM

// function secondQuote() {
//   var apiKey = "9fc7c359c0eb6b622501b2c9cafc7f7d";
//   var getQuoteURL = "https://marketdata.websol.barchart.com/getQuote.jsonp";

//   $.ajax({
//     method: "POST",
//     crossDomain: true,
//     dataType: "jsonp",
//     url: getQuoteURL,
//     data: {
//       apikey: apiKey,
//       symbols: "AAPL"
//     },
//     success: function(data) {
//       var html = "";
//       for (var i in data.results) {
//         html +=
//           "Symbol: " +
//           "<strong>" +
//           data.results[i]["symbol"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "Name: " +
//           "<strong>" +
//           data.results[i]["name"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "Last Price: " +
//           "<strong>" +
//           data.results[i]["lastPrice"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "Net Change: " +
//           "<strong>" +
//           data.results[i]["netChange"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "Percent Change: " +
//           "<strong>" +
//           data.results[i]["percentChange"] +
//           "</strong>" +
//           "%" +
//           "<br />";
//         html +=
//           "Open: " +
//           "<strong>" +
//           data.results[i]["open"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "High: " +
//           "<strong>" +
//           data.results[i]["high"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "Low: " +
//           "<strong>" +
//           data.results[i]["low"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "Close: " +
//           "<strong>" +
//           data.results[i]["close"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "Volume: " +
//           "<strong>" +
//           data.results[i]["volume"] +
//           "</strong>" +
//           "<br />";
//       }
//       $(secondSymbol).html(html);
//     },
//     error: function() {
//       console.log(" Something went wrong!");
//     }
//   });
// }

// $(secondSymbol).html(secondQuote);

// // 3rd quote starting from left of DOM

// function thirdQuote() {
//   var apiKey = "9fc7c359c0eb6b622501b2c9cafc7f7d";
//   var getQuoteURL = "https://marketdata.websol.barchart.com/getQuote.jsonp";

//   $.ajax({
//     method: "POST",
//     crossDomain: true,
//     dataType: "jsonp",
//     url: getQuoteURL,
//     data: {
//       apikey: apiKey,
//       symbols: "AMZN"
//     },
//     success: function(data) {
//       var html = "";
//       for (var i in data.results) {
//         console.log("third: " + data);
//         html +=
//           "Symbol: " +
//           "<strong>" +
//           data.results[i]["symbol"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "Name: " +
//           "<strong>" +
//           data.results[i]["name"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "Last Price: " +
//           "<strong>" +
//           data.results[i]["lastPrice"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "Net Change: " +
//           "<strong>" +
//           data.results[i]["netChange"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "Percent Change: " +
//           "<strong>" +
//           data.results[i]["percentChange"] +
//           "</strong>" +
//           "%" +
//           "<br />";
//         html +=
//           "Open: " +
//           "<strong>" +
//           data.results[i]["open"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "High: " +
//           "<strong>" +
//           data.results[i]["high"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "Low: " +
//           "<strong>" +
//           data.results[i]["low"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "Close: " +
//           "<strong>" +
//           data.results[i]["close"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "Volume: " +
//           "<strong>" +
//           data.results[i]["volume"] +
//           "</strong>" +
//           "<br />";
//       }
//       $(thirdSymbol).html(html);
//     },
//     error: function() {
//       console.log(" Something went wrong!");
//     }
//   });
// }

// $(thirdSymbol).html(thirdQuote);

// // 4th quote starting from left of DOM

// function fourthQuote() {
//   var apiKey = "9fc7c359c0eb6b622501b2c9cafc7f7d";
//   var getQuoteURL = "https://marketdata.websol.barchart.com/getQuote.jsonp";

//   $.ajax({
//     method: "POST",
//     crossDomain: true,
//     dataType: "jsonp",
//     url: getQuoteURL,
//     data: {
//       apikey: apiKey,
//       symbols: "NFLX"
//     },
//     success: function(data) {
//       var html = "";
//       for (var i in data.results) {
//         console.log("fourth: " + data);
//         html +=
//           "Symbol: " +
//           "<strong>" +
//           data.results[i]["symbol"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "Name: " +
//           "<strong>" +
//           data.results[i]["name"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "Last Price: " +
//           "<strong>" +
//           data.results[i]["lastPrice"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "Net Change: " +
//           "<strong>" +
//           data.results[i]["netChange"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "Percent Change: " +
//           "<strong>" +
//           data.results[i]["percentChange"] +
//           "</strong>" +
//           "%" +
//           "<br />";
//         html +=
//           "Open: " +
//           "<strong>" +
//           data.results[i]["open"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "High: " +
//           "<strong>" +
//           data.results[i]["high"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "Low: " +
//           "<strong>" +
//           data.results[i]["low"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "Close: " +
//           "<strong>" +
//           data.results[i]["close"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "Volume: " +
//           "<strong>" +
//           data.results[i]["volume"] +
//           "</strong>" +
//           "<br />";
//       }
//       $(fourthSymbol).html(html);
//     },
//     error: function() {
//       console.log(" Something went wrong!");
//     }
//   });
// }

// $(fourthSymbol).html(fourthQuote);

// // 5th quote starting from left of DOM

// function fifthQuote() {
//   var apiKey = "9fc7c359c0eb6b622501b2c9cafc7f7d";
//   var getQuoteURL = "https://marketdata.websol.barchart.com/getQuote.jsonp";

//   $.ajax({
//     method: "POST",
//     crossDomain: true,
//     dataType: "jsonp",
//     url: getQuoteURL,
//     data: {
//       apikey: apiKey,
//       symbols: "GOOG"
//     },
//     success: function(data) {
//       var html = "";
//       for (var i in data.results) {
//         console.log("fourth: " + data);
//         html +=
//           "Symbol: " +
//           "<strong>" +
//           data.results[i]["symbol"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "Name: " +
//           "<strong>" +
//           data.results[i]["name"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "Last Price: " +
//           "<strong>" +
//           data.results[i]["lastPrice"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "Net Change: " +
//           "<strong>" +
//           data.results[i]["netChange"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "Percent Change: " +
//           "<strong>" +
//           data.results[i]["percentChange"] +
//           "</strong>" +
//           "%" +
//           "<br />";
//         html +=
//           "Open: " +
//           "<strong>" +
//           data.results[i]["open"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "High: " +
//           "<strong>" +
//           data.results[i]["high"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "Low: " +
//           "<strong>" +
//           data.results[i]["low"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "Close: " +
//           "<strong>" +
//           data.results[i]["close"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "Volume: " +
//           "<strong>" +
//           data.results[i]["volume"] +
//           "</strong>" +
//           "<br />";
//       }
//       $(fifthSymbol).html(html);
//     },
//     error: function() {
//       console.log(" Something went wrong!");
//     }
//   });
// }

// $(fifthSymbol).html(fifthQuote);

// // 6th quote starting from left of DOM

// function sixthQuote() {
//   var apiKey = "9fc7c359c0eb6b622501b2c9cafc7f7d";
//   var getQuoteURL = "https://marketdata.websol.barchart.com/getQuote.jsonp";

//   $.ajax({
//     method: "POST",
//     crossDomain: true,
//     dataType: "jsonp",
//     url: getQuoteURL,
//     data: {
//       apikey: apiKey,
//       symbols: "NVDA"
//     },
//     success: function(data) {
//       var html = "";
//       for (var i in data.results) {
//         console.log("fourth: " + data);
//         html +=
//           "Symbol: " +
//           "<strong>" +
//           data.results[i]["symbol"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "Name: " +
//           "<strong>" +
//           data.results[i]["name"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "Last Price: " +
//           "<strong>" +
//           data.results[i]["lastPrice"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "Net Change: " +
//           "<strong>" +
//           data.results[i]["netChange"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "Percent Change: " +
//           "<strong>" +
//           data.results[i]["percentChange"] +
//           "</strong>" +
//           "%" +
//           "<br />";
//         html +=
//           "Open: " +
//           "<strong>" +
//           data.results[i]["open"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "High: " +
//           "<strong>" +
//           data.results[i]["high"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "Low: " +
//           "<strong>" +
//           data.results[i]["low"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "Close: " +
//           "<strong>" +
//           data.results[i]["close"] +
//           "</strong>" +
//           "<br />";
//         html +=
//           "Volume: " +
//           "<strong>" +
//           data.results[i]["volume"] +
//           "</strong>" +
//           "<br />";
//       }
//       $(sixthSymbol).html(html);
//     },
//     error: function() {
//       console.log(" Something went wrong!");
//     }
//   });
// }

// $(sixthSymbol).html(sixthQuote);

// var emptyOne = $(".emptyBoxOne");
// var emptyTwo = $(".emptyBoxTwo");
// var emptyThree = $(".emptyBoxThree");
// var emptyFour = $(".emptyBoxFour");
// var emptyFive = $(".emptyBoxFive");

// var checkedOne = $(".checkedBoxOne");
// var checkedTwo = $(".checkedBoxTwo");
// var checkedThree = $(".checkedBoxThree");
// var checkedFour = $(".checkedBoxFour");
// var checkedFive = $(".checkedBoxFive");