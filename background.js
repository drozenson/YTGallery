chrome.extension.onMessage.addListener(
	function (request,sender, sendResponse){
		if(request.action=="prefs"){
			var prefsString = localStorage.prefs;
			if  (prefsString== undefined){
				sendResponse(undefined);
			} else{
				sendResponse(JSON.parse(localaStorage.prefs));
			}
		}
	}
);

function click(e){
	chrome.tabs.query({currentWindow:true, action:true}, function(tabs){
		console.log("background.js: click()");
	});
}
chrome.broswerAction.onClicked.addListener(click);