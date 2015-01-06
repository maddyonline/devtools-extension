// Can use
// chrome.devtools.*
// chrome.extension.*

// Listen to all network requests
chrome.devtools.network.onRequestFinished.addListener(
	function(request) {
		var URL = "https://aa.com/?status=O";
		if(request.request.url != URL)
			return;
		request.getContent(
			function(content, encoding) {
          		chrome.experimental.devtools.console.addMessage(
          			chrome.experimental.devtools.console.Severity.Error,
          			'NinjaTool:' + typeof(JSON.parse(content)));
          	});
	});
// Create a tab in the devtools area
chrome.devtools.panels.create("MyDemoPanel", 
	null,				// No Icon Path
	"panel.html", 
	function(panel) {}
	);