/**
 * Name:            Misha Mansoor and Hunter Lovering  
 * Student No:      100743787 , 100785761
 * Date:            2022-06-02
 * Description:     This javascript file is part of webd6201 labs  
 * the purpose of this lab is to utilize javascript and jQuery to add the functionality to the 
 * website using the Document Object Model  
 * 
 */
//User class 
class User
{
  //#region  Getters and Setters 
  get FirstName()
  {
    return this.m_firstname;
  }

  set FirstName(firstName)
  {
    this.m_firstname = firstName;
  }

  get LastName()
  {
    return this.m_last_name;
  }

  set LastName(lastName)
  {
    this.m_last_name = lastName;
  }

  get EmailAddress()
  {
    return this.m_email_address;
  }

  set EmailAddress(emailAddress)
  {
    this.m_email_address = emailAddress;
  }

  get UserName()
  {
    return this.m_username;
  }

  set UserName(userName)
  {
    this.m_username = userName;

  }

  get Password()
  {
    return this.m_password;
  }

  set Password(password)
  {
    this.m_password = password;
  }
  //#endregion

  //constructor 
  constructor(firstName = "" , lastName = "", emailAddress = "", password = "")
  {
    this.FirstName = firstName;
    this.LastName = lastName;
    this.EmailAddress = emailAddress;
    this.Password = password;
  }

  //To string function that displays the user class data members
  toString()
  {
    return `FirstName    : ${this.FirstName}
            \nLastName    : ${this.LastName}
            \nEmailAddres : ${this.EmailAddress}
            \nUsername    : ${this.UserName}
            \nPassword    : ${this.Password}`;
  }
}
//IIfe 
(function()
{
    /*
    *  This function demostrate the funtionality of the home page 
    */function DisplayHomePage()
    {
        //creating button and adding event handler so it redirects the user 
        // to the contact page where user can fill out the form  
        document.getElementById('button').innerHTML = `<a id = "signUp" class = "btn btn-primary shadow btn btn-lg">Contact Us for More</a>`;
        
        //when the button is click the user will be redirected to the contact page 
        // where user will have to fill out the contact form 
        let button  = document.getElementById("signUp");
        button.addEventListener("click", function()
        {
            //redirecting user to the contact page 
            location.href = "contact.html";
        });

        //adding heading to the page using document.get element by id 
        document.getElementById('heading').innerHTML = ` 
            <h1> Welcome to Webd6201 Labs </h1>
            <h2 class = "p-0">
                   with Misha and Hunter 
                <br/> 
            </h2>`;

          
        //changing the link of the products to projects 
        document.getElementById("productsLink").innerHTML = "  Projects";
        //creating a i tag for adding icon 
        let icon = document.createElement("i");
        icon.setAttribute("class" , "fas fa-th");
        //using font-awesome to add a icon 
        document.getElementById("productsLink").prepend(icon);

        //creating a li tag for adding new link to the nav bar which is human resources
        var li = document.createElement('li');
        //setting the attribute of li tag
        li.setAttribute("class", "nav-item");
        //id for the link 
        li.setAttribute('id', 'humanResourceId');
        //appending the link to the li tag 
        document.getElementById('link').appendChild(li);

        //adding the human resource link just before the contact us link 
        document.getElementById("about").before(li);
        
        //creating a hyper link to add the link to the human resource page
        var link = document.createElement('a');
        link.setAttribute("id", "hr");
        link.setAttribute("class", "nav-link");
        link.href = `humanresource.html`;
        link.innerHTML = "Human Resources";
        //appending the human resource link to the parent node of li tag 
        document.getElementById('humanResourceId').appendChild(link);

    }

    
    /*
    * this function is for the projects page functoionality
    */function DisplayProjects(){
      //changing the link of the products to projects 
      document.getElementById("productsLink").innerHTML = "  Projects";
      let icon = document.createElement("i");
      icon.setAttribute("class" , "fas fa-th");
      document.getElementById("productsLink").prepend(icon);

      //creating list tag and adding link tag to it 
      var li = document.createElement('li');
      li.setAttribute("class", "nav-item");
      li.setAttribute('id', 'humanResourceId');
      document.getElementById('link').appendChild(li);

      //adding the human resource link between the about us and the contact us page 
      document.getElementById("about").before(li);

      //creating a tag for the human resources
      var link = document.createElement('a');
      link.setAttribute("id", "hr");
      link.setAttribute("class", "nav-link");
      link.href = `humanresource.html`;
      link.innerHTML = "Human Resources";
      document.getElementById('humanResourceId').appendChild(link);


      //adding heading 
      
        //creating page header and paragraph
        document.getElementById('pageheading').innerHTML = `<h3> Our Projects</h3>`;

        //adding list of projects 
         //add list of skills 
         document.getElementById('lists').innerHTML = 
         `<ul class = "service_list-items">
         <li class = "service_list-items">
           <h3>1. ASP.NET Application</h3>
           <p>Using C#, Asp.Net framework and html created a web application  </p>
         </li>
         <li class = "service_list-items">
           <h3>2. Average Diseases Case  </h3>
           <p> Using C# and windows form application in .Net created a form that records the 
           number of cases of user provided data and give avaerge to the user  </p> 
         </li>
         <li class = "service_list-items">
           <h3>3.Text Editor </h3>
           <p>Created a Text editor using the functionality of windows form appliaction and C# programming 
           skills in Visual Studio Code 
           </p> 
         </li>
       </ul>`;

         //image tag for the project 1 
         let serviceImg = document.createElement("img");
         serviceImg.setAttribute("class" , "img-fluid");
         serviceImg.setAttribute("style", "width: 200px; height: 200px;");
         serviceImg.src= "./images/project1.png";
         document.getElementById("project1").appendChild(serviceImg);

            //image tag for the project 3
            let webImg= document.createElement("img");
            webImg.setAttribute("class" , "img-fluid");
            webImg.setAttribute("style", "width: 200px; height: 250px;");
            webImg.src= "./images/project3.png";
            document.getElementById("project3").appendChild(webImg);
 
 
         //image tag for the project 2
         let umlImg = document.createElement("img");
         umlImg.setAttribute("class" , "img-fluid");
         umlImg.setAttribute("style", "width: 200px; height: 150px;");
         umlImg.src="./images/project2.png";
         document.getElementById("project2").appendChild(umlImg);
   } 




    /*
    *this function is for the services page fuctionality 
    */function DisplayServicesPage(){

       //changing the link of the products to projects 
       document.getElementById("productsLink").innerHTML = "  Projects";
       let icon = document.createElement("i");
       icon.setAttribute("class" , "fas fa-th");
       document.getElementById("productsLink").prepend(icon);

       //image tag for the oop 
        let serviceImg = document.createElement("img");
        serviceImg.setAttribute("class" , "img-fluid");
        serviceImg.setAttribute("style", "width: 200px; height: 150px;");
        serviceImg.src = `./images/oop.jpg`;
        document.getElementById("serviceImages").appendChild(serviceImg);


        //image tag for the uml diagramming 
        let umlImg = document.createElement("img");
        umlImg.setAttribute("class" , "img-fluid");
        umlImg.setAttribute("style", "width: 200px; height: 150px;");
        umlImg.src = `./images/diagram.jpg`;
        document.getElementById("diagram").appendChild(umlImg);

        //image tag for the web programming
        let webImg = document.createElement("img");
        webImg.setAttribute("class" , "img-fluid");
        webImg.setAttribute("style", "width: 200px; height: 150px;");
        webImg.src = `./images/web.jpg`;
        document.getElementById("webImage").appendChild(webImg);


        //creating page header and paragraph
        document.getElementById('header').innerHTML = `<h3> Our Services</h3> `;

        //add list of skills 
        document.getElementById('list').innerHTML = 
        `<ul class = "service_list-items">
        <li class = "service_list-items">
          <h3>1. Web fundamentals</h3>
          <p> Learn fundamentals of web developemnt using HTML5, Css and Php </p>
        </li>
        <li class = "service_list-items">
          <h3>2. Uml Diagrmming </h3>
          <p> Learn about Uml diagramming using our templates </p> 
        </li>
        <li class = "service_list-items">
          <h3>3. Object-Oriented Programming </h3>
          <p>Learn the concepts of object oriented programming languages like 
            Java, C++, C#, Objective C etc
          </p> 
        </li>
      </ul>`;

      //creating a list element and adding link tag to it 
      var li = document.createElement('li');
      li.setAttribute("class", "nav-item");
      li.setAttribute('id', 'humanResourceId');
      document.getElementById('link').appendChild(li);

      //adding link tag to it for the human resources page
      var link = document.createElement('a');
      link.setAttribute("id", "hr");
      link.setAttribute("class", "nav-link");
      link.href = `humanresource.html`;
      link.innerHTML = "Human Resources";
      document.getElementById('humanResourceId').appendChild(link);
      //adding the link tag between the about us and contact us page
      document.getElementById("about").before(li);

    }


    /**
     *this function is for the abous us page functionality
     */
    function DisplayAboutUsPage(){

         //changing the link of the products to projects 
         document.getElementById("productsLink").innerHTML = "  Projects";
         let icon = document.createElement("i");
         icon.setAttribute("class" , "fas fa-th");
         document.getElementById("productsLink").prepend(icon);

         //adding list element and adding the link tag for the human resource page 
         var li = document.createElement('li');
         li.setAttribute('id', 'humanResourceId');
         li.setAttribute("class", "nav-item");
         document.getElementById('link').appendChild(li);
 
         //adding the link tag for the human resource page
         let link = document.createElement('a');
         link.setAttribute("id", "hr");
         link.setAttribute("class", "nav-link", "active");
         link.href = `humanresource.html`;
         link.innerHTML = "Human Resources";
         document.getElementById('humanResourceId').appendChild(link);
         //adding the human resource link between the contact us and the about us page
         document.getElementById("about").before(li);

          //adding heading to the page 
          document.getElementById('heading').innerHTML = 
          `
            <h2 class = "p-0">
            Misha Mansoor
            <br/> 
            </h2>`; 

            //adding the description in the page
          document.getElementById('description').innerHTML= 
          `<p style = "font-size: 18px; text-align: center;">
          "Hey my name is Misha Mansoor, and I am a computer programming student at 
          Durham College, my student id is 100742787"
          </p>`; 

          //image tag for Misha 
          let myImg = document.createElement("img");
          myImg.setAttribute("class" , "img-fluid");
          myImg.setAttribute("style", "width: 200px; height: 200px;");
          myImg.src = `./images/linkedin.jpg`;
          document.getElementById('mishaImg').appendChild(myImg);


          //image tag for hunter
          let Img = document.createElement("img");
          Img.setAttribute("class" , "img-fluid");
          Img.setAttribute("style", "width: 200px; height: 200px;");
          Img.src = `./images/hunter.png`;
          document.getElementById('hImg').appendChild(Img); 

            //adding heading for hunter's bio
            document.getElementById('hdiscription').innerHTML = `
              <h2  class = "p-0">
              Hunter Lovering
              </h2>`; 

              //hunter's bio 
          document.getElementById('hpara').innerHTML = 
          `<p style = "font-size: 18px; text-align: center;">
          "Hey my name is Hunter Lovering, and I am a computer programming student at 
          Durham College, my student id is  100785761 "
          </p>`; 


          //linkedin link to misha's profile
          document.getElementById('linkToLinkedIn').innerHTML = 
          `<a href = "https://www.linkedin.com/in/misha-mansoor-480703207/">
            Misha's Linkedin</a>`; 


          //linkedin link to hunter's profile
          document.getElementById('linkedin').innerHTML = 
          `<a href = "https://www.linkedin.com/in/hunter-lovering-9476a8231/">
          Hunter's Linkedin</a>`

    }


     /**
      *
      *this function is for the human resources page functionality
      */
     function DisplayHumanResourcesPage()
     {

        console.log("human");
         //image tag for hr 
         let Img = document.createElement("img");
         Img.setAttribute("class" , "img-fluid");
         Img.setAttribute("style", "width: 200px; height: 200px;");
         Img.src = `./images/hr.jpg`;
         document.getElementById('hrImg').appendChild(Img);

        //adding human resource link and the link tag 
        var li = document.createElement('li');
        li.setAttribute('id', 'humanResourceId');
        li.setAttribute("class", "nav-item");
        document.getElementById('link').appendChild(li);

        let link = document.createElement('a');
        link.setAttribute("id", "hr");
        link.setAttribute("class", "nav-item", "active");
        link.href = `humanresource.html`;
        link.innerHTML = "Human Resources";
        document.getElementById('humanResourceId').appendChild(link);
        document.getElementById("about").before(li); 
    } 

    function DisplayContactUsPage()
    {
         //changing the link of the products to projects 
         document.getElementById("productsLink").innerHTML = "  Projects";
         let icon = document.createElement("i");
         icon.setAttribute("class" , "fas fa-th");
         document.getElementById("productsLink").prepend(icon);

         //creating li tag and adding link to the human resource page
         var li = document.createElement('li');
         li.setAttribute('id', 'humanResourceId');
         li.setAttribute("class", "nav-item");
         document.getElementById('link').appendChild(li);
 
         var link = document.createElement('a');
         link.setAttribute("id", "hr");
         link.setAttribute("class", "nav-link");
         link.href = `humanresource.html`;
         link.innerHTML = "Human Resources";
         document.getElementById('humanResourceId').appendChild(link);
         //adding the human resource after the about us page and before the contact us page 
         document.getElementById("about").after(li);


         //when the button is clicked send user to the index page 
        let button  = document.getElementById("sendButton");
        button.addEventListener("click", function()
        {

          var fullName = document.getElementById("fullName");
          var contactNumber = document.getElementById("contactNumber");
          var email = document.getElementById("emailAddress");
          var message = document.getElementById("message");
          console.log("FullName: " +  fullName.value +
                      "ContactNumber" + contactNumber.value +
                      "Email Address " + email.value +
                      "message" + message.value);
              setTimeout( location.href = "index.html", 3000);

        });
      
    }

    /*
    * function login page that displays the functionality of the login page 
    *
    */function DisplayLoginPage()
    {
        console.log("Login");

        let submitButton = document.getElementById("submitButton");
        let userName = document.getElementById("contactName");
        submitButton.addEventListener("click", function(event)
        {
          event.preventDefault();

          //if the username textbox is not empty 
          if(userName.value !== "")
          {
            // create a anchor tag with a navlink 
            // to add the username textbox value into the nav bar 
            var a = document.createElement('a');
            a.setAttribute("class", "nav-link");
            //adding the value of username textbox in the navbar 
            a.innerHTML = userName.value;
            //inserting the value of the textbox after the contact page link 
            document.getElementById("about").after(a);
            document.getElementById("login").innerHTML = " Logout";
            let icon = document.createElement("i");
            icon.setAttribute("class" , "fas fa-user");
            document.getElementById("login").prepend(icon);
          }

        });

         //changing the link of the products to projects 
         document.getElementById("productsLink").innerHTML = "  Projects";
         let icon = document.createElement("i");
         icon.setAttribute("class" , "fas fa-th");
         document.getElementById("productsLink").prepend(icon);
    }

    function ValidateField(input_field_ID, regular_expression, error_message)
    {
        let errorMessage = $("#ErrorMessage").hide();
        
        $("#" + input_field_ID).on("blur", function()
        {
            let inputFieldText = $(this).val();

            if(!regular_expression.test(inputFieldText))
            {
                $(this).trigger("focus").trigger("select"); 
                errorMessage.addClass("alert alert-danger").text(error_message).show(); 
            }
            else
            {
              errorMessage.removeAttr("class").hide();
            }
        });
    }

    function ContactFormValidation()
    {
      //firstname validation , lastname, emailAddress and password validation 
        ValidateField("FirstName", /^[a-z0-9]{2,16}$/,"Please enter a valid First Name.");

        ValidateField("lastName", /^[a-z0-9]{2,16}$/,"Please enter a valid last Name.");

        ValidateField("emailAddress", /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/, "Please enter a valid Email Address.");
        
        ValidateField("password", /^[a-z0-9]{6,}$/, "Password must be 6 character long");
      }

    

    function ValidateConfirmPassword()
    {
      //error message div id 
      let messageArea = $("#ErrorMessage");
      //confirm password textbox id
      let confirm_pass = $("#confirmPassword").val();
      //password textbox id
      let password_value = $("#password").val();
      //if the password and confirm password textbox value are not same 
      if (password_value != confirm_pass )
      {
        //doesnt pass the Regex
        $("#confirmPassword").trigger("focus"); //go back to the password textbox 
        $("#confirmPassword").trigger("select"); //select all the text in the textbox 
        messageArea.show(); // shows the message area
        messageArea.addClass("alert alert-danger"); //add the alert to the div 
        messageArea.text("password doesnt match, it should be 6 character long"); // changes the text value
        messageArea.show(); 
        return false;
      }
      else
      {
      //does pass the Regex 
      messageArea.removeAttr("class");
      messageArea.hide();
      }
    }

    function DisplayRegisterPage()
    {
      console.log("Register");

      //firstname, lastname, email and password validation
      ContactFormValidation();
      //password and confirm password equal validation 
      $('#ErrorMessage').hide();
      $('#confirmPassword').on("blur",function(){
      ValidateConfirmPassword();
    });

    
      //using jquery accessing the submit button 
      let submitButton = document.getElementById("submitButton");
      //submit button click event 
      submitButton.addEventListener("click", function(event)
      {
        //preventing the submit button default behavior 
        event.preventDefault();

        //when submit button is clicked create instance of user class and displays 
        //the value of the user data members in the console 
        if(submitButton.addEventListener("click", function()
        {
          let user = new User(FirstName.value, lastName.value, emailAddress.value, password.value)
          console.log(user.toString());
        }));
         
      });

       //changing the link of the products to projects 
       document.getElementById("productsLink").innerHTML = "  Projects";
       let icon = document.createElement("i");
       icon.setAttribute("class" , "fas fa-th");
       document.getElementById("productsLink").prepend(icon);
    }
    // named function option

    /**
     *
     *this function utilizes the switch statemnet that will determine which page is the user in and 
     * will show the fuctionality of that page on the page load 
     */
    function Start()
    {
      console.log("App started");
        switch(document.title)
        {
            case "Home":
                DisplayHomePage();
                break;
            case "Products":
                DisplayProjects();
                break;
            case "Services":
                DisplayServicesPage();
                break;
            case "About":
                DisplayAboutUsPage();
                break;
            case "Contact":
                DisplayContactUsPage();
                break;
            case "Login":
                DisplayLoginPage();
                break;
            case "Register":
                DisplayRegisterPage();
                break;

        }
       
    }

    window.addEventListener("load", Start);

})();