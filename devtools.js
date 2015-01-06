// Can use
// chrome.devtools.*
// chrome.extension.*

// Create a tab in the devtools area
chrome.devtools.panels.create("MyDemoPanel", 
	null,				// No Icon Path
	"panel.html", 
	function(panel) {}
	);