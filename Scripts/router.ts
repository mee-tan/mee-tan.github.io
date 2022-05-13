
/** 
 * Name :   Misha Mansoor and Hunter Lovering 
 * Student No :     100743787 
 * Description: this lab is the lab 3 of webd 6201 that deals with single page application 
 * using AJAX, JQuery and JavaScript
 * 
*/
namespace core
{
    export class Router {

        //private data members 
        private m_activeLink: string;
        private m_routingTable: string[];

        // constructors
        constructor() 
        {
            this.m_activeLink = "";
            this.m_routingTable = new Array<string> (); // creates an empty string array or collection 
        }

        // Public Properties (getters and setters)
        public get ActiveLink() : string
        {
            return this.m_activeLink;
        }

        /**
         *
         *
         * @memberof Router
         * @param {string} link
         */
        public set ActiveLink(link) 
        {
            this.m_activeLink = link;
        }

        // Public methods

        /**
         * Adds a new route to the Routing Table
         *
         * @param {string} route
         * @returns {void}
         */
        Add(route: string) : void 
        {
            this.m_routingTable.push(route);
        }

        /**
         * This replaces the current Routing Table with a new one
         * Routes should begin with / character
         *
         * @param {string} routingTable
         * @returns {void}
         */
        AddTable(routingTable: string[]) : void
        {
            this.m_routingTable = routingTable;
        }

        /**
         * This method finds the index of the route in the routing table
         * otherwise it returns -1 if the route is not found
         *
         * @param {string} route
         * @returns {number}
         */
        Find(route: string) : number
        {
            return this.m_routingTable.indexOf(route);
        }

        /**
         * This method removes a route from the Routing Table
         * It returns true if the route was successfully removed,
         * otherwise it returns false
         * 
         * @param {string} route
         * @returns {boolean}
         */
        Remove(route : string) : boolean
        {
            if (this.Find(route) > -1) {
                this.m_routingTable.splice(this.Find(route), 1);
                return true;
            }
            return false;
        }

        /**
         * This method returns the routing table as a comma-separated string 
         *
         * @returns {string}
         */
        ToString() : string
        {
            return this.m_routingTable.toString();
        }
    }
}

let router : core.Router = new core.Router();
router.AddTable(["/", 
                 "/home", 
                 "/about", 
                 "/services", 
                 "/contact", 
                 "/contact-list", 
                 "/projects", 
                 "/register", 
                 "/login", 
                 "/edit",
                 "/task-list"
                ]);
                
let route : string = location.pathname; // alias for location.pathname

if(router.Find(route) > -1)
{
    router.ActiveLink = (route == "/") ? "home" : route.substring(1)
}
else
{
    router.ActiveLink = "404";
}


