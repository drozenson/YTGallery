chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.action == "getSource") {
	 
	 var count=0, i, frames,newDoc="";//="<!DOCTYPE html><html><head></script></head><body style='width:400px;>";
	
	 
	 var d = document.createElement('div');
	 d.innerHTML = request.source;

	 
	
	frames = d.getElementsByTagName("iframe");

	//<iframe class="embed-responsive-item" src="//www.youtube.com/embednng92efL2f8" allowfullscreen=""></iframe>
	for (i = 0; i < frames.length; ++i)
	{
		if (frames[i].src.indexOf("//www.youtube.com/embed/") > -1){
			count = count + 1;
			newDoc = newDoc +"<iframe src='http:"+frames[i].src.substr(frames[i].src.indexOf("//www.youtube.com/embed/"))+"' id='"+count+"' allowfullscreen=''></iframe>";
	   }
	}

	
   
	message.innerHTML =   newDoc;//"<iframe src='http://www.youtube.com/embed/s57FtD2HKLw' allowfullscreen=''></iframe>" ;
	// message.innerText = request.source;
  }
});

function onWindowLoad() {

  var message = document.querySelector('#message');

  chrome.tabs.executeScript(null, {
    file: "getPagesSource.js"
  }, function() {
    // If you try and inject into an extensions page or the webstore/NTP you'll get an error
    if (chrome.runtime.lastError) {
      message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
    }
  });

}

window.onload = onWindowLoad;