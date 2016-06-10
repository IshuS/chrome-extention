// get Card data.
var card = {
  "serial": , 
  "key": ""
};

// get grid challenge.
var t = document.getElementById("table_Defender_6"),
r = t.getElementsByTagName("tr")[0],
d = r.getElementsByTagName("td")[0];
arr = d.innerHTML.split(" ");
serial = arr[17].split(".")[0]

if(serial == card["serial"]) {
  keyValue = arr[8] +  arr[9] +  arr[10];
  keys = keyValue.replace(/([^a-z0-9]+)/gi, '').toUpperCase().match(/.{2}/g);
  
  for(i=0;i<3;i++) {
    val = card["key"][parseInt(5 * (keys[i][0].charCodeAt(0) - 65)) + parseInt(keys[i][1] - 1)];
    if (val) {
      document.getElementById("password_5").value += val;
    }
  }
}  else {
  alert("Failed: Card serial number didn't match with the script.");
}
