// ==UserScript==
// @name        Amazon Video Zoom
// @namespace   amazon.tld
// @version     1
// @description Pressing F2 removes unnecessary black bars by adding the style "object-fit:cover". Especially useful with 21:9 monitors.
// @include     https://www.amazon.tld/*
// @grant       none
// ==/UserScript==


//
// License: CC0 1.0 Universal (Public Domain)
// https://creativecommons.org/publicdomain/zero/1.0/
// 
// Or: http://unlicense.org 
//

var toggleZoom = function () {
    // Matches #videoContainer_xyz > video:nth-child(1)
    var videos = [  document.querySelector('div[id^=videoContainer_] > video:nth-child(1)'),
                    document.querySelector('div[id^=videoContainer_] > video:nth-child(2)')];
    if (this.zoomed) {
        videos.forEach(
            function each(video) {
                video.style.removeProperty('object-fit');
            }
        );
        this.zoomed = false;
    } else {
        videos.forEach(
            function each(video) {
                video.setAttribute('style', ';object-fit:cover;');
            }
        );
        this.zoomed = true;
    }
};

document.onkeydown = function (event) {
    // 113 = F2 Key
    if (event.keyCode == 113) {
        toggleZoom();
    }
};
