var request = new XMLHttpRequest();

request.open("GET",'./version.js?rd='+(+new Date()),true)

request.onreadystatechange = function(){
     if (request.readyState == 4 && request.status == 200) {
          console.log(request.responseText);
          if( ('window.__version='+window.__version+';')===request.responseText ){
          	alert('版本相同');
          }else {
          	alert('版本不同,relad(true)');
          	window.location.reload(true);
          }
     }
}

request.send(null);

function back(){
	window.location.history.go(-1);
}
function location_href(){
	window.location.href = "./location_href.html";
}
function location_replace(){
	window.location.replace("./location_replace.html");
}