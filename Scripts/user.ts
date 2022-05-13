
/** 
 * Name :   Misha Mansoor and Hunter Lovering 
 * Student No :     100743787 
 * Description: this lab is the lab 3 of webd 6201 that deals with single page application 
 * using AJAX, JQuery and JavaScript
 * 
*/

namespace core 
{
  export class User 
  {
    private m_displayName: string;
    private m_emailAddress : string;
    private m_username: string;
    private m_password: string;
    // getters and setters
    public get DisplayName() : string
    {
      return this.m_displayName;
    }
  
    public set DisplayName(value) 
    {
      this.m_displayName = value;
    }
  
    public get EmailAddress() : string
    {
      return this.m_emailAddress;
    }
  
    public set EmailAddress(value) 
    {
      this.m_emailAddress = value;
    }

    public get Username() : string
    {
      return this.m_username;
    }
  
    public set Username(value) 
    {
      this.m_username = value;
    }

    public get Password() : string
    {
      return this.m_password;
    }
  
    public set Password(value) 
    {
      this.m_password = value;
    }
  
    // constructor

    /**
     * Creates an instance of User.
     * @param {string} [displayName=""]
     * @param {string} [emailAddress=""]
     * @param {string} [username=""]
     * @param {string} [password=""]
     */
    constructor(displayName = "", emailAddress = "", username = "", password="") 
    {
      this.m_displayName = displayName;
      this.m_emailAddress = emailAddress;
      this.m_username = username;
      this.m_password = password;
    }

    // methods

    /**
     * This method overrides the built-in toString method for the User class
     * @override built-in toString method 
     * @returns {string}
     */
    toString() : string
    {
      return `Display Name     : ${this.DisplayName} \nEmail Address : ${this.EmailAddress} \nUsername : ${this.Username}`;
    }

    /**
     * This method returns a JSON object made up of the properties of the User class
     *
     * @returns {Object}
     */
    toJSON()
    {
      return {
        "DisplayName": this.DisplayName,
        "EmailAddress": this.EmailAddress,
        "Username": this.Username
      }
    }

    /**
     * This method takes a JSON data object and assigns the values to the User class properties
     *
     * @param {Object} data
     */
    // TODO: 
    fromJSON(data: any)
    {
      this.DisplayName = data.DisplayName;
      this.EmailAddress = data.EmailAddress;
      this.Username = data.Username;
      this.Password = data.Password;
    }

    /**
     * This method converts the User into a comma-separated value string
     *
     * @returns {string | null}
     */
    serialize() : string | null
    {
      if(this.DisplayName !== "" && this.EmailAddress !== "" && this.Username !== "")
      {
        return `${this.DisplayName},${this.EmailAddress},${this.Username}`;
      }
      else 
      {
        console.error("One or more properties of the User is empty");
        return null;
      }
    }

    /**
     * This method takes a comma-separated data string and assigns the values to the User class properties
     *
     * @param {string} data
     * @return {void}
     */
    deserialize(data: string) : void 
    {
      let propertyArray = data.split(",");
      this.DisplayName = propertyArray[0];
      this.EmailAddress = propertyArray[1];
      this.Username = propertyArray[2];
    }
  }


}