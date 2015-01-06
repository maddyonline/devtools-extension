// Can use
// chrome.devtools.*
// chrome.extension.*

// Listen to all network requests
chrome.devtools.network.onRequestFinished.addListener(
          function(har) {
            chrome.experimental.devtools.console.addMessage(
                chrome.experimental.devtools.console.Severity.Warning,
                har.request.method + ' ' + har.request.url);
      });
// Create a tab in the devtools area
chrome.devtools.panels.create("MyDemoPanel", 
	null,				// No Icon Path
	"panel.html", 
	function(panel) {}
	);