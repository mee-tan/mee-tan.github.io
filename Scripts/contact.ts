
/** 
 * Name :   Misha Mansoor and Hunter Lovering 
 * Student No :     100743787 
 * Description: this lab is the lab 3 of webd 6201 that deals with single page application 
 * using AJAX, JQuery and JavaScript
 * 
*/
"use strict";
// Contact Class
namespace core
{
  export class Contact
  {
    //private instant members 
    private m_fullName: string;
    private m_contactNumber: string;
    private m_emailAddress: string;

    // getters and setters
    public get FullName() : string
    {
      return this.m_fullName;
    }
  
    public set FullName(value)
    {
      this.m_fullName = value;
    }
  
    public get ContactNumber() : string
    {
      return this.m_contactNumber;
    }
  
    public set ContactNumber(value) 
    {
      this.m_contactNumber = value;
    }
  
    public get EmailAddress() : string
    {
      return this.m_emailAddress;
    }
  
    public set EmailAddress(value) 
    {
      this.m_emailAddress = value;
    }
  
    /**
     * a default constructor
     * @param {string} fullName 
     * @param {string} contactNumber 
     * @param {string} emailAddress 
     */
    constructor(fullName: string = "", contactNumber: string = "", emailAddress: string = "") 
    {
      this.m_fullName = fullName;
      this.m_contactNumber = contactNumber;
      this.m_emailAddress = emailAddress;
    }


    /**
     * This method overrides the built-in toString method for the Contact class
     * @override ovverrids the built-in toString method 
     * @returns {string}
     */
    toString() : string 
    {
      return `Full Name     : ${this.FullName} \nContact Number: ${this.ContactNumber}\nEmail Address : ${this.EmailAddress}`;
    }

    /**
     * This method converts the Contact into a comma-separated string
     *
     * @returns {string}
     * @returns {null} 
     */
    serialize() : string | null
    {
      if(this.FullName !== "" && this.ContactNumber !== "" && this.EmailAddress !== "")
      {
        return `${this.FullName},${this.ContactNumber},${this.EmailAddress}`;
      }
      else 
      {
        console.error("One or more properties of the Contact is empty");
        return null;
      }
    }

    /**
     * This method takes a comma-separated data string and assigns the values to the Contact class properties
     *
     * @param {string} data
     * @return {void}
     */
    deserialize(data : string) : void // return void and is of type string 
    {
      let propertyArray = data.split(",");
      this.FullName = propertyArray[0];
      this.ContactNumber = propertyArray[1];
      this.EmailAddress = propertyArray[2];
    }
  }

}
