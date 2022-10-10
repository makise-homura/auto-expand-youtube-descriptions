// ==UserScript==
// @name     Auto-Expand Youtube Descriptions
// @version  2
// @grant    none
// @author   makise-homura
// @include  https://youtu.be/*
// @include  https://www.youtube.com/*
// ==/UserScript==

document.addEventListener('dom-change', function()
{
 document.getElementById("expand").click(); // Expand descriptions
 // Array.from(document.getElementsByClassName("more-button")).forEach(b => b.click()); // Expand comments
 // Array.from(document.querySelectorAll("button.yt-spec-button-shape-next--text.yt-spec-button-shape-next--icon-leading")).forEach(b => b.click()); // Expand comment subtrees
}, false);
