function JSSyncLoad(srces) {
  if (srces.length == 0) {
    return;
  }

  var sc = document.createElement('script');
  sc.type = 'text/javascript';
  sc.src = srces.shift();

  if (window.ActiveXObject) {
      sc.onreadystatechange = function() {
          if (sc.readyState == 'complete' || sc.readyState == 'loaded')  {
            JSSyncLoad(srces);
          }
      };
  } else {
      sc.onload = function(){
            JSSyncLoad(srces);
      };
  }
  body = document.getElementsByTagName('body')[0];
  body.appendChild(sc);
}

// 使い方
JSSyncLoad(['js/first.js', 'js/second.js', 'js/third.js', 'js/fourth.js']);

/* 以下だと読み込みの準番が保証されない
var ele2 = document.createElement("script");
ele2.type = "text/javascript";
ele2.src = "js/second.js";
document.body.appendChild(ele2);

var ele3 = document.createElement("script");
ele3.type = "text/javascript";
ele3.src = "js/third.js";
document.body.appendChild(ele3);

var ele4 = document.createElement("script");
ele4.type = "text/javascript";
ele4.src = "js/fourth.js";
document.body.appendChild(ele4);
*/
