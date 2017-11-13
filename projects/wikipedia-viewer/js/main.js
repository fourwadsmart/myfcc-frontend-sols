  // variable declaration
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&limit=10&profile=normal&format=json&origin=*&search=",
      search = document.getElementById("search"),
      inquery = document.getElementById("query"),
      container = document.getElementById('content'),
      query;


/*****************************************************************************
******************************************************************************
* A preflight Ajax request is made - preflight call or simply a CORS request *
******************************************************************************
******************************************************************************/

function XHRPreFlight(method, uri) {
  var xhr = new XMLHttpRequest();
  // for browsers with XMLHttpRequest
  if("withCredentials" in xhr) {
    xhr.open(method, uri, true);
  }
  // for IE browsers
  else 
    if(typeof XDomainRequest != "undefined") {
      xhr = new XDomainRequest();
      xhr.open(method, uri);
    }
  else {
    console.log("Your browser does not support Ajax request!");
    return xhr = null;
  }
  return xhr;
} // end of preflight call request


/*****************************************************************************
******************************************************************************
*       Next, the actual request is made inside a wikiSearch() function      *
*      Search button triggers the ajax request with onclick event handler    *
******************************************************************************
******************************************************************************/


function wikiSearch() {
  query = document.getElementById("query").value;
  query = encodeURIComponent(query);
  var xhr = XHRPreFlight("GET", url+query, true);
  xhr.onload = function() {
      
    var resp = JSON.parse(xhr.responseText);
    return showResult(resp);
  }
  
  xhr.send();
}


search.onclick = function() {
  return wikiSearch();
}


inquery.onkeypress = function() {
  return wikiSearch();
}






function showResult(r) {
    
  if(container.hasChildNodes()){
    container.innerHTML = "";
  }

  if(r.length){
    container.appendChild(document
                   .createRange()
                   .createContextualFragment(`<span>Search results: ${r[1].length}, for keyword: ${r[0]}</span>`));


    for(i = 0; i < r[1].length; i++) {
      var result = `<a href="${r[3][i]}" target="_blank"><div class="result"><h3>${r[1][i]}</h3><p>${r[2][i]}</p></div></a>`;
      var box = document.createRange().createContextualFragment(result);
      container.appendChild(box);
    }
  }

}