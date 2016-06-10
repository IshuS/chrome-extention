/*
 * popup.js
 * issbm1@gmail.com
 * 
 */
 
// Put your card serial number and key here.
// While updating your key value remmember expected order of input is A1 to A5 simillarly follow for B upto J.
// Hence the first value will be for A1 while the last will be J5.
var card = {
  "serial": , 
  "key": ""
};

chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {	
  if(tabs[0].url.indexOf("") != -1) {
    chrome.tabs.executeScript(null, {file: "content.js"});
  }
});

// The load event fires at the end of the document loading process.
window.onload=function() {
  
  // The onKeyUp event handler for input element. It helps keep focus on input.
  document.getElementById("idForm").onkeyup=function() {
  
    // Read the key value for the card.
    var cardKeyValue = card["key"];
	
	// Get the input data.
    var keyValue = document.getElementById("idKey").value;
	
	// Clean up data.
	keys = keyValue.replace(/([^a-z0-9]+)/gi, '').toUpperCase().match(/.{2}/g);
	
	// varify if input data is good enough to proceed.
	if(keys.length == 3) {
	  
	  // Backup previous result. Reset others
	  document.getElementById("idBackup").innerHTML = document.getElementById("idResult").innerHTML;
	  document.getElementById("idResult").innerHTML = "";
	  document.getElementById("idError").innerHTML = "";
	  
	  // Lookup corresponding data in the card.
	  for(i=0;i<3;i++) {
	    
		// Retrieve value from the card.
		val = card["key"][parseInt(5 * (keys[i][0].charCodeAt(0) - 65)) + parseInt(keys[i][1] - 1)]
		
		// Sanity check.
		if (val) {
		  
		  // Update Result.
		  document.getElementById("idResult").innerHTML += val;
		} else {
		  document.getElementById("idResult").innerHTML += "*";
		  document.getElementById("idError").innerHTML = "unrecognised pattern " + keys;
		}
	  }
	} else {
	  
	  // Display error message.
	  document.getElementById("idError").innerHTML = "unrecognised pattern. Eg.  [A4] [F2] [G2] ";
	}
	
    // You must return false to prevent the default form behaviour.
    return false;
  }
  
  
}