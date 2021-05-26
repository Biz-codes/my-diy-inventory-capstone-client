# My DIY Inventory 
Are you DIY-Fabulous?!
Of couse you are!
What about DIY-Organized?
...
When you start a project, do you find yourself scrambling to figure out what supplies you have around before you can get started?
Do you ever get home from a supply run, only to realize that you overbought one thing but forgot to buy something else?
Welcome to the virtual filing cabinet you have been needing to keep track of all your DIY supplies, tools and projects!
Whether you are a DIY Builder, Crafter, Artiste, Gardener, Baker, etcetera, a My DIY Inventory account will lessen your stressin' when organizing your projects,
freeing up your creative brain to enjoy
Doin' It Yourself!!!



### 1. Working Prototype (to do now)
(Example) You can access a working prototype of the React app here: https://my-diy-inventory.vercel.app/ and Node app here: https://my-diy-inventory.herokuapp.com/



### 2. User Stories 
This app is for two types of users: a visitor and a logged-in user

###### Landing Page (Importance - High) (Est: 0.5h)
* as a visitor
* I want to land on the main page of this application and click buttons,
* so I can access a demo or go to the sign up page.

###### Landing Page (Importance - High) (Est: 0.5h)
* as a returning user
* I want to land on the main page of this application and use navigation
* So I can get to my login.

###### Sign Up Page (Importance - High) (Est: 3h)
* as a visitor
* I want fill out and submit a form,
* so I can sign up for an account.

###### Login  Page (Importance - High) (Est: 3h)
* as a returning user
* I want to enter my username and password,
* So I can log in to my account.

###### "My DIY Dashboard" Page (Importance - High) (Est: 2h)
* as a logged-in user
* I want to click on icons to visit "My DIY Tools", "My DIY Supplies", or "My DIY Projects",
* so I can access my stored information on those pages.

###### "My DIY Tools" Page (Importance - High) (Est: 2h)
* as a logged-in user
* I want to manage a list of the tools I have saved, in alphabetical order, along with descriptions and quantities,
* so I can manage which tools I have available for my project.

###### "My DIY Supplies" Page (Importance - High) (Est: 2h)
* as a logged-in user
* I want to manage a list of the supplies I have saved, in alphabetical order, along with descriptions and quantities,
* so I can manage what supplies I have available for my project.

###### "My DIY Projects" Page (Importance - Medium) (Est: 2h)
* as a logged-in user
* I want to manage a list of the projects I have saved, in alphabetical order,
* so I can click on them to manage project details.




### 3. Functionality 
The app's functionality (v1.0) includes:
* All users can access a demo account to try the app.
* All users can create an account.
* All users can click on contact information links for the app creator.
* Logged-in users can view their saved supplies, tools and projects. a
* Logged-in users can add, edit and delete inventory items (supplies, tools and projects).
* Logged-in users can navigate between the Landing page and their Dashboard, Supplies, Tools and Projects pages - using top navigation.
* Logged-in users can log out to return to the Landing page.
* All users can use accessibility features such as text-to-speech and navigation via keyboard.



### 4. Technology
* Front-End: HTML5, CSS3, JavaScript ES6, React
* Back-End: Node.js, Express.js, Mocha, Chai, RESTful API Endpoints, Postgres
* Development Environment: Heroku, DBeaver



### 5. Wireframes (to do now)
Landing Page, Sign Up Page, Log In Page, & "My DIY Dashboard" Page
:-------------------------:
![Landing Page, Sign Up Page, Log In Page, & "My DIY Dashboard" Page](/github-images/wireframes/landing-signup-login-dashboard-pages.jpg)
"My DIY Tools" Page, "My DIY Supplies" Page, "My DIY Projects" Page, and Create/Edit Project Page
!["My DIY Tools" Page, "My DIY Supplies" Page, "My DIY Projects" Page, and Create/Edit Project Page](/github-images/wireframes/tools-supplies-projects-create-edit-pages.jpg)
User Flows, page 1
![User Flows, page 1](/github-images/wireframes/user-flows-1.jpg)
User Flows, page 2
![User Flows, page 2](/github-images/wireframes/user-flows-2.jpg)



### 6. Front-end Structure - React Components Map (to do later)
* __index.js__ (stateless)
    * __App.js__ (stateful)
        * __Landing.js__ (stateless) - gets the _"prop name"_ and the _"callback prop name"_ from the __App.js__
            * __LogIn.js__ (stateful)
            * __SignUp.js__ (stateful)
            * __Dashboard.js__ (stateless)
                * __Nav.js__ (stateless)
                * __Supplies.js__  (stateful)
                    * __AddSupply.js__ (stateful)
                    * __EditSupply.js__ (stateful)
                * __Tools.js__ (stateful)
                    * __AddTool.js__ (stateful)
                    * __EditTool.js__ (stateful)
                * __Projects.js__ (stateful)
                    * __AddProject.js__ (stateful))
                    * __EditProject.js__ (stateful)



### 7. Back-end Structure - Business Objects (to do later)
* Users (database table)
    * id (auto-generated)
    * username (email validation)
    * password (at least 8 chars, at least one alpha and a special character validation)
    * name (full name, at least 3 chars)
* Supplies (database table)
    * id (auto-generated)
    * user_id (foreign key to users table)
    * supply_name (varchar255 NOT NULL)
    * details (text)
    * quantity (integer NOT NULL default 0)
* Tools (database table)
    * id (auto-generated)
    * user_id (foreign key to users table)
    * tool_name (varchar255 NOT NULL)
    * details (text)
    * quantity (integer NOT NULL default 0)
* Projects (database table)
    * id (auto-generated)
    * user_id (foreign key to users table)
    * project_name (varchar255 NOT NULL)
    * tools_needed (text)
    * supplies_needed (text)
    * instructions (text)
    * delivery_date ()
    * done (bool, default false)

    



### 8. API Documentation (to do later)
#### API Overview
```text
    /api
    .
    ├── /auth
    │   └── POST
    │       ├── /login
    ├── /users
    │   └── POST
    │       └── /
```

##### POST `/api/auth/login`
```js
    // req.body
    {
        "name": "Demo User",
        "username": "demo-email@gmail.com",
        "password": "Fabulous1"
    }

    // res.body
    {
    "authToken": String,
    "userId": 4
    }
```

##### POST `/api/users/`
```js
    // req.body
    {
        "user_name": "demo@gmail.com",
        "password": "123456"
    }


    // res.body
    {
        "id": 1,
        "user_name": "demo@gmail.com"
    }
```



### 9. Screenshots (to do later)
(Example) Landing Page
:-------------------------:
![Landing Page](/github-images/screenshots/landing-page-screenshot.png)
Register Page
![Register Page](/github-images/screenshots/register-page-screenshot.png)



### 10. Development Roadmap (to do later)
This is v1.0 of the app, but future enhancements are expected to include:
* add functionality to allow users to save their "My DIY Supplies" inventory into a database (v2.0)
* add functionality to allow users to sign up for and log into an account (v2.1)
* add functionality to allow users to create and save a "My DIY Tools" inventory into a database (v2.2)
* add functionality to allow users to create and save a "My DIY Projects" inventory into a database(v2.3)
* improve css styling and add images (v2.4)
* add functionality to allow users to create a shopping list for items they are missing for a project (v3.1)
* add functionality for users to retrieve forgotten log in information
* add functionality for users to upload pictures of their projects
* add icons and/or images for common inventory items
* add databases shared among users to add tools, supplies and projects that other users have added




### 11. How to run it (done)
Use command line to navigate into the project folder and run the following in terminal

##### Local React scripts
* To install the react project ===> npm install
* To run react (on port 3000) ===> npm start
* To run tests ===> npm run test

##### Local Node scripts
* To install the node project ===> npm install
* To migrate the database ===> npm run migrate -- 1
* To run Node server (on port 8000) ===> npm run dev
* To run tests ===> npm run test