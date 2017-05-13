// ==UserScript==
// @name         Jinteki Scripts
// @namespace    http://tampermonkey.net/
// @version      3.0
// @description  try to take over the world!
// @author       Thomas Blackwell
// @match        https://www.jinteki.net/play
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var size = '20px';
    var logsize = '15px';
    var newBackgroundImage = "http://i.imgur.com/mRA7gER.jpg";
    
    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }
    
    function changeBackground(){
        newBackgroundImage=prompt("Enter the URL of the new background image");
        if (newBackgroundImage)
        {
            addGlobalStyle('.lobby-bg { background-image: url("'+newBackgroundImage+'");}');
            
        }
    }

    function enableVideoMode(){
        size = '20px';
        logsize = '15px';
        videoMode();
    }
    
    function disableVideoMode(){
        size = '12px';
        logsize = '12px';
        videoMode();
    }
    
    function videoMode() {
        var corpChild, runnerChild;
        if ($('#gameboard > div > div.leftpane > div.inner-leftpane > div.left-inner-leftpane > div:nth-child(2) > div.stats.panel.blue-shade').children().size() == 6){
            corpChild = 2;
            runnerChild = 1;
        } else {
            corpChild = 1;
            runnerChild = 2;
        }
        

        //Corp Credits
        $('#gameboard > div > div.leftpane > div.inner-leftpane > div.left-inner-leftpane > div:nth-child(' + corpChild + ') > div.stats.panel.blue-shade > div:nth-child(3)').css('font-size', size);
        //Corp Agenda
        $('#gameboard > div > div.leftpane > div.inner-leftpane > div.left-inner-leftpane > div:nth-child(' + corpChild + ') > div.stats.panel.blue-shade > div:nth-child(4)').css('font-size', size);

        //Runner Credits
        $('#gameboard > div > div.leftpane > div.inner-leftpane > div.left-inner-leftpane > div:nth-child(' + runnerChild + ') > div.panel.blue-shade.stats > div:nth-child(3)').css('font-size', size);
        //Runner Agenda
        $('#gameboard > div > div.leftpane > div.inner-leftpane > div.left-inner-leftpane > div:nth-child(' + runnerChild + ') > div.stats.panel.blue-shade > div:nth-child(6)').css('font-size', size);

        //log size
        $('#gameboard > div > div.rightpane > div.log > div').css('font-size',logsize);
    }

    addGlobalStyle('.lobby-bg { background-image: url("' + newBackgroundImage + '");}');
    $('#left-menu').after($('<button id="changeBackground">Change Background</button>'));
    $('#left-menu').after($('<button id="disableVideoMode">Disable Video Mode</button>'));
    $('#left-menu').after($('<button id="enableVideoMode">Enable Video Mode</button>'));
    
    $('#enableVideoMode').click(enableVideoMode);
    $('#disableVideoMode').click(disableVideoMode);
    $('#changeBackground').click(changeBackground);

})();