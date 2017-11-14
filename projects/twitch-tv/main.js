// TwitchTV Client-ID from: https://www.twitch.tv/kraken/oauth2/clients/6en33zr5bmctodt7wxsg6gwdsq7b43
// No streaming thumbnail: https://res.cloudinary.com/mydevassets/image/upload/v1505955100/org_default_nitwpm.jpg

  /********************************************
  *********************************************
  **          - Fist things first -          **
  **  declaring my most important variables  **
  *********************************************
  *********************************************/
let url = "https://api.twitch.tv/kraken/", 
    twchannels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"],
    chlist = "ESL_SC2,OgamingSC2,cretetion,freecodecamp,storbeck,habathcx,RobotCaleb,noobs2ninjas",
    endpoint = "streams?channel=", // endpoint for multiple channels streaming
    def_logo = "https://res.cloudinary.com/mydevassets/image/upload/v1505955100/org_default_nitwpm.jpg",
    active = document.getElementById("active"), 
    usr_container =  document.getElementById("usr-container"),
    streaming = [];
    

  /********************************************
  *********************************************
  **          - preflight request -          **
  **     Making my ajax preflight request    **
  *********************************************
  *********************************************/
function twitchPF(method, uri) {
  var xhrPF = new XMLHttpRequest();
  // for browsers with XMLHttpRequest
  if("withCredentials" in xhrPF) {
    xhrPF.open(method, uri, true);
  }
  // for IE browsers
  else 
    if(typeof XDomainRequest != "undefined") {
      xhrPF = new XDomainRequest();
      xhrPF.open(method, uri);
    }
  else {
    console.log("Your browser does not support Ajax request!");
    return xhrPF = null;
  }
  xhrPF.setRequestHeader("Client-ID", "6en33zr5bmctodt7wxsg6gwdsq7b43");
  return xhrPF;
}


  /********************************************
  *********************************************
  **         - actual XHR request -          **
  **   The making of an actual XHR request   **
  **  Alert: Promise object is used to deal  **
  **     with multiple async operations      **
  *********************************************
  *********************************************/
function twitch(twch, ep) {
  // wrapping my Ajax call in a Promise object instance
  return new Promise(function(resolve, reject) {
    ep = ep || "channels/"; // custom or default api endpoint: ep
    
    twitchXHR = twitchPF("GET", url + ep + twch);
    
    // when request is loaded successfully - resolve
    twitchXHR.onload = function() {
      if(twitchXHR.status == 200){
        let resp = JSON.parse(twitchXHR.responseText);
        resolve(resp);
      }

    }
    // when request return an error - reject
    twitchXHR.onerror = function() {
      let rej = "Error, HTTP Status Code: " + this.statusText;
      reject(rej);
    }
    // send request
    twitchXHR.send();
    
  });
  
}

function twitchStreamers(twclist, endp) {
  twitch(twclist, endp)
    .then(function(resp) {
    let disname = [], // array with all channels live streaming
        status = []; // array of what they are live streaming
    for(str in resp.streams) {
      disname[str] = resp.streams[str].channel.display_name;
      status[str] = resp.streams[str].channel.status;
    }
    streaming = [disname, status];
  })
    .then(function() {
    twitchPromise(twchannels); // call and display the channels
  })
    .catch(function(rej) {
    console.log(rej);
  });
}
twitchStreamers(chlist, endpoint);


  /********************************************
  *********************************************
  **         - display function -            **
  **    THis function is responsible of      **
  **     displaying the data on screen       **
  **    all data will be appended to DOM     **
  *********************************************
  *********************************************/
function displayUser(resp) { // let this one do the heavy-lifting
  let online = streaming[0].indexOf(resp.display_name) != -1 ? "Online": "Offline"; // checking if the display name is in streaming array
  let index = streaming[0].indexOf(resp.display_name);
  usr_container.appendChild(document
                            .createRange()
                            .createContextualFragment(`<li class="${online}"><a href="${resp.url}" target="_blank" class="usr-link"><div class="thumbnail user"><img src="${resp.logo || def_logo}"></div> <div class="channel-id user"><span class="usr-info">${resp.display_name}</span></div>
<div class="state user"><span class="usr-info">${online}</span></div>
<div class="user">
<span class="usr-info streaming">${online == "Online" ? "Streaming: " + streaming[1][index]: ""}</span>
</div>
</a></li>`));
}


  /********************************************
  *********************************************
  **        - Promise consumption -          **
  **      The twitchPromise function         **
  **      calls the twitch promise above     **
  **    recursively with different value     **
  *********************************************
  *********************************************/
function twitchPromise(twch) { 
  // twch: array of channels or single channel, twc: single channel
  var twc = twch.shift();
  if(twc) {
    twitch(twc)
      .then(function(resp) {
      displayUser(resp);
      twitchPromise(twch);
    })
      .catch(function(rej) {
      twitchPromise(twch);
      
    });
  }
} // Let's call it: the promise consumer - this function is used inside of the twitchStreamer function so it can wait when streamers data is available


// a little bit of jQuery for a quick DOM Traversal
$(document).ready(function() {
  $(".hoption").on("click", function() {
    let thiss = $(this);
    $(".hoption").removeAttr("id");
    thiss.attr("id", "active");
    
    if(thiss.hasClass("option1")) {
      $(".Online").css("display", "block");
      $(".Offline").css("display", "block");
    }
    if(thiss.hasClass("option2")) {
      $(".Online").css("display", "block");
      $(".Offline").css("display", "none");
    }
    if(thiss.hasClass("option3")) {
      $(".Offline").css("display", "block");
      $(".Online").css("display", "none");
    }
    
  });
});