// ==UserScript==
// @name        chessmail_nextgame_addon
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

function blurElement(element, size)
{
    var filterVal = 'blur(' + size + 'px)';
    $(element).css({
        'filter':filterVal,
        'webkitFilter':filterVal,
        'mozFilter':filterVal,
        'oFilter':filterVal,
        'msFilter':filterVal,
        'transition':'all 0.5s ease-out',
        '-webkit-transition':'all 0.5s ease-out',
        '-moz-transition':'all 0.5s ease-out',
        '-o-transition':'all 0.5s ease-out'
    });
}

(function(){
    $("ul.list-actions.mb-4").on("DOMNodeInserted", function(event) {
        if ($("li.next-game").length > 0)
        {
            var nextGame = $("li.next-game").children().first();
            nextGame.removeAttr("href");
            blurElement($("#main"), 2);
            setTimeout(function(){
                window.location = "next.html";
            }, 500);
        }
    });
})();
