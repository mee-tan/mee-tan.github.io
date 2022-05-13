"use strict";
((function(){

    let protected_rotes = [
        "contact-list"
    ];
    
    if(protected_rotes.indexOf(router.ActiveLink) > -1)
    {
        //check if the user is logged in 
        if(!sessionStorage.getItem("user"))
        {
            //if not logged in then redirect to the login page 
            location.href("/login");
        }
    }
}))