// ==UserScript==
// @name     Auto-Expand Youtube Descriptions
// @version  3
// @grant    none
// @author   makise-homura
// @include  https://youtu.be/*
// @include  https://www.youtube.com/*
// ==/UserScript==

document.addEventListener('dom-change', function()
{
  // Expand descriptions
  if (!document.getElementById('expand').hidden) {document.getElementById("expand").click();}

  // Expand comment text
  //document.querySelectorAll("span.more-button.style-scope.ytd-comment-renderer").forEach(x => (function(x) {if (x.offsetParent != null) {x.click();}})(x));

  // Expand first part of comment subtrees
  //document.querySelectorAll("#more-replies.more-button").forEach(x => (function(x) {if (!x.hidden) {x.click();}})(x));

  // Expand other parts of comment subtrees
  //document.querySelectorAll('ytd-button-renderer.style-scope.ytd-continuation-item-renderer').forEach(x => (function(x) {if (x.clientHeight > 0) {x.firstChild.firstChild.click();}})(x));
}, false);
