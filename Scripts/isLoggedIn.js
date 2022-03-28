
/** 
 * Name :   Misha Mansoor and Hunter Lovering 
 * Student No :     100743787 
 * Description: this lab is the lab 3 of webd 6201 that deals with single page application 
 * using AJAX, JQuery and JavaScript
 * 
*/


"use strict";

(() =>{
    // check if the user is already logged in
    if(sessionStorage.getItem("user"))
    {
    // redirect to the secure area
    location.href = "./index";
    }
})();
