// ==UserScript==
// @name     Auto-Expand Youtube Descriptions
// @version  1
// @grant    none
// @author   makise-homura
// @include  https://youtu.be/*
// @include  https://www.youtube.com/*
// ==/UserScript==

document.addEventListener('dom-change', function()
{
    for (a of document.getElementsByClassName("ytd-expander"))
    {
        a.classList.remove("ytd-expander")
    }
    document.getElementById("more").hidden = true
    document.getElementById("less").hidden = true
}, false);
