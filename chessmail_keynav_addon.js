// ==UserScript==
// @name        chessmail_keynav_addon
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
// @namespace   chessmail.de
// @include     http://www.chessmail.de/game/*
// @include     https://www.chessmail.de/game/*
// @include     http://www.chessmail.eu/game/*
// @include     https://www.chessmail.eu/game/*
// @exclude     http://www.chessmail.de/game/list/finished.html*
// @exclude     https://www.chessmail.de/game/list/finished.html*
// @exclude     http://www.chessmail.eu/game/list/finished.html*
// @exclude     https://www.chessmail.eu/game/list/finished.html*
// @version     1
// ==/UserScript==

this.$ = this.jQuery = jQuery.noConflict(true);

(function(){
document.addEventListener('keydown', function(e) {
  if (!$("#moveInputForm").find("textarea").first().is(":focus"))
  {
    if (e.keyCode == 37 && !e.shiftKey && !e.ctrlKey && !e.metaKey)
    {
        $("button.btn.btn-link.text-black.back").click();
    }
    if (e.keyCode == 39 && !e.shiftKey && !e.ctrlKey && !e.metaKey)
    {
        $("button.btn.btn-link.text-black.forward").click();
    }
    if (e.keyCode == 40 && !e.shiftKey && !e.ctrlKey && !e.metaKey)
    {
        $("button.btn.btn-link.text-black.first").click();
    }
    if (e.keyCode == 38 && !e.shiftKey && !e.ctrlKey && !e.metaKey)
    {
        $("button.btn.btn-link.text-black.last").click();
    }
  }
}, false);
})();
