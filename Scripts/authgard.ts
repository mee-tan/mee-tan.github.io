"use strict";
((function(){

    let protected_routes : string[] = [
        "contact-list"
    ];
    
    if(protected_routes.indexOf(router.ActiveLink) > -1)
    {
        //check if the user is logged in 
        if(!sessionStorage.getItem("user"))
        {
            //if not logged in then redirect to the login page 
            location.href= "/login";
        }
    }
}))