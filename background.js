/**
 * Copyright (c) 2011 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

/**
 * PHASES
 * 1) Load next event from server refresh every 30 minutes or every time
 *   you go to calendar or every time you logout drop in a data object.
 * 2) Display on screen periodically once per minute or on demand.
 */
 
var JSON_VIEW_URL = 'chromeapi_html/api_index.html';
var ICON_URL = 'img/icon-32.png';

function $(id) {
  return document.getElementById(id);
};

/**
 * Called when the user clicks on extension icon and opens calendar page.
 */
function onClickAction() {
	chrome.tabs.create({url: JSON_VIEW_URL});
	/*
	return 0;
  chrome.tabs.getAllInWindow(null, function(tabs) {
	  alert(1);
    for (var i = 0, tab; tab = tabs[i]; i++) {
      if (tab.url && isCalendarUrl(tab.url)) {
        chrome.tabs.update(tab.id, {selected: true});
        return;
      }
    }
    chrome.tabs.create({url: JSON_VIEW_URL});
  });
  */
};

/**
 * Checks whether an instance of Google calendar is already open.
 * @param {String} url Url of the tab visited.
 * @return {boolean} true if the url is a Google calendar relative url, false
 *     otherwise.
 */

/**
 * Initializes everything.
 */
function init() {
	chrome.browserAction.setIcon({path: ICON_URL});
	chrome.browserAction.onClicked.addListener(function(tab) {
    onClickAction();
  });
};

//Adding listener when body is loaded to call init function.
window.addEventListener('load', init, false);
