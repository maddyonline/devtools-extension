// Can use
// chrome.devtools.*
// chrome.extension.*

// Listen to all network requests
// Create a tab in the devtools area
chrome.devtools.panels.create("MyDemoPanel", 
	null,				// No Icon Path
	"panel.html", 
	function(panel) {}
	);