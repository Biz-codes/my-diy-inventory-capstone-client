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



### 1. Working Prototype
You can access a working prototype of the React app here: https://my-diy-inventory.vercel.app/ and Node app here: https://my-diy-inventory.herokuapp.com/



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



### 5. Wireframes
Landing Page
:-------------------------:
![Landing Page](/github-images/wireframes/landing-page.jpeg)
Sign Up Page
![Sign Up Page](/github-images/wireframes/sign-up-page.jpg)
Log In Page
![Log In Page](/github-images/wireframes/log-in-page.jpeg)
"My DIY Dashboard"
!["My DIY Dashboard"](/github-images/wireframes/dashboard.jpg)
"My DIY Supplies" & "My DIY Tools"
!["My DIY Supplies" & "My DIY Tools"](/github-images/wireframes/supplies-tools.jpeg)
"My DIY Projects" 
!["My DIY Projects"](/github-images/wireframes/projects.jpg)
Add Supply & Add Tool
![Add Supply & Add Tool](/github-images/wireframes/add-supply-tool.jpeg)
Add Project
![Add Project](/github-images/wireframes/add-project.jpg)
Edit Supply & Edit Tool
![Edit Supply & Edit Tool](/github-images/wireframes/edit-supply-tool.jpeg)
Edit Project
![Edit Project](/github-images/wireframes/edit-project.jpg)




### 6. Front-end Structure - React Components Map
* __index.js__ (stateless)
    * __App.js__ (stateful)
        * __Landing.js__ (stateless)
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



### 7. Back-end Structure - Business Objects
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
    * done (varchar255 NOT NULL)

    



### 8. API Documentation
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
    ├── /supplies
    |   └── GET
    |       ├── /:user_id
    |   └── POST
    |       ├── /
    |   └── DELETE
    |       ├── /:supply_id
    |   └── PATCH
    |       └── /:supply_id
    ├── /tools
    |   └── GET
    |       ├── /:user_id
    |   └── POST
    |       ├── /
    |   └── DELETE
    |       ├── /:supply_id
    |   └── PATCH
    |       └── /:supply_id
    ├── projects
    |   └── GET
    |       ├── /:user_id
    |   └── POST
    |       ├── /
    |   └── DELETE
    |       ├── /:supply_id
    |   └── PATCH
    |       └── /:supply_id
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
        "name": "Tin Woodsman",
        "password": "Fabulous1",
        "username": "no-heart@gmail.com"
    }


    // res.body
    {
        "id": 10,
        "name": "Tin Woodsman",
        "username": "no-heart@gmail.com"
    }
```

##### GET `/api/supplies/:user_id`
```js
    // req.query
        id: 2

    // res.body
    [
        {
            "id": 1,
            "user_id": 2,
            "supply_name": "fabric - cotton - jersey knit",
            "details": "blue, yards",
            "quantity": 3
        },
        {
            "id": 4,
            "user_id": 2,
            "supply_name": "thread",
            "details": "green, spools",
            "quantity": 1
        },
        {
            "id": 2,
            "user_id": 2,
            "supply_name": "nails",
            "details": "...",
            "quantity": 50
        }
    ]
```

##### POST `/api/supplies/`
```js
    // req.body
    {
        "user_id": 3,
        "supply_name": "thread",
        "details": "green, spools",
        "quantity": 1
    }


    // res.body
    {
        "id": 20,
        "user_id": 3,
        "supply_name": "thread",
        "details": "green, spools",
        "quantity": 1
    }
```

##### DELETE `/api/supplies/:supply_id`
```js
    // req.query
    id: 3

    // res.body
    
```

##### PATCH `/api/supplies/:supply_id`
```js
    // req.body
    {
        "user_id": 2,
        "supply_id": "dirt",
        "details": "moo mix",
        "quantity": 2
    }
    // res.body

```

##### GET `/api/tools/:user_id`
```js
    // req.query
        id: 2

    // res.body
    [
        {
            "id": 2,
            "user_id": 2,
            "tool_name": "paintbrush",
            "details": "large",
            "quantity": 10
        },
        {
            "id": 3,
            "user_id": 2,
            "tool_name": "sandpaper",
            "details": "fine",
            "quantity": 5
        },
        {
            "id": 1,
            "user_id": 2,
            "tool_name": "hammer",
            "details": "small, blue",
            "quantity": 2
        }
    ]
```

##### POST `/api/tools/`
```js
    // req.body
    {
        "user_id": 3,
        "tool_name": "origami paper",
        "details": "multicolored sheets",
        "quantity": 30
    }


    // res.body
    {
        "id": 14,
        "user_id": 3,
        "tool_name": "origami paper",
        "details": "multicolored sheets",
        "quantity": 30
    }
```

##### DELETE `/api/tools/:tool_id`
```js
    // req.query
    id: 5

    // res.body
    
```

##### PATCH `/api/tools/:tool_id`
```js
    // req.body
    {
        "user_id": 2,
        "tool_name": "hammer",
        "details": "small, blue",
        "quantity": 3
    }
    // res.body

```

##### GET `/api/projects/:user_id`
```js
    // req.query
        id: 2

    // res.body
    [
        {
            "id": 3,
            "user_id": 3,
            "project_name": "Raised Bed Garden",
            "supplies_needed": "wood, screws, chicken wire",
            "tools_needed": "drill, wire cutters",
            "instructions": "1. Cut the boards, 2. Screw them together. 3. put dirt in.",
            "delivery_date": "2021-05-02T00:00:00.000Z",
            "done": "DONE it myself!"
        },
        {
            "id": 5,
            "user_id": 3,
            "project_name": "Stormy Pants",
            "supplies_needed": "blue thread, jersey knit cotton, pattern",
            "tools_needed": "marking pen, pins, scissors, sewing machine, sewing machine needle",
            "instructions": "cut the pattern and sew",
            "delivery_date": "2021-09-30T00:00:00.000Z",
            "done": "to-do myself"
        },
        {
            "id": 1,
            "user_id": 3,
            "project_name": "Beehive shelves",
            "supplies_needed": "wood, screws",
            "tools_needed": "saw, ruler",
            "instructions": "Cut, screw and build",
            "delivery_date": "2021-05-14T00:00:00.000Z",
            "done": "doin' it myself"
        },
        {
            "id": 2,
            "user_id": 3,
            "project_name": "Herb garden",
            "supplies_needed": "seeds, dirt",
            "tools_needed": "shovel, trowel",
            "instructions": "plant",
            "delivery_date": "2021-05-15T00:00:00.000Z",
            "done": "DONE it myself!"
        }
    ]
```

##### POST `/api/projects/`
```js
    // req.body
    {
        "user_id": 4,
        "project_name": "Stormy Pants",
        "supplies_needed": "blue thread, jersey knit cotton, pattern",
        "tools_needed": "marking pen, pins, scissors, sewing machine, sewing machine needle",
        "instructions": "...",
        "delivery_date": "2021-09-30T04:00:00.000Z",
        "done": "to-do myself"
    }


    // res.body
    {
        "id": 10,
        "user_id": 4,
        "project_name": "Stormy Pants",
        "supplies_needed": "blue thread, jersey knit cotton, pattern",
        "tools_needed": "marking pen, pins, scissors, sewing machine, sewing machine needle",
        "instructions": "...",
        "delivery_date": "2021-09-30T04:00:00.000Z",
        "done": "to-do myself"
    }
```

##### DELETE `/api/project/:project_id`
```js
    // req.query
    id: 3

    // res.body
    
```

##### PATCH `/api/projects/:project_id`
```js
    // req.body
    {
        "user_id": 3,
        "project_name": "Herb garden",
        "supplies_needed": "seeds, dirt",
        "tools_needed": "shovel, trowel",
        "instructions": "plant",
        "delivery_date": "2021-06-15T00:00:00.000Z",
        "done": "DONE it myself"
    }
    // res.body

```





### 9. Screenshots
Landing Page
:-------------------------:
![Landing Page](/github-images/screenshots/landing-page.png)
Sign Up Page
![Sign Up Page](/github-images/screenshots/sign-up-page.png)
Log In Page
![Log In Page](/github-images/screenshots/log-in-page.png)
"My DIY Dashboard"
!["My DIY Dashboard"](/github-images/screenshots/dashboard.png)
"My DIY Supplies"
!["My DIY Supplies"](/github-images/screenshots/supplies.png)
Add Supply
![Add Supply](/github-images/screenshots/add-supply.png)
Edit Supply
![Edit Supply](/github-images/screenshots/edit-supply.png)
"My DIY Tools"
!["My DIY Tools"](/github-images/screenshots/tools.png)
Add Tool
![Add Tool](/github-images/screenshots/add-tool.png)
Edit Tool
![Edit Tool](/github-images/screenshots/edit-tool.png)
"My DIY Projects"
!["My DIY Projects"](/github-images/screenshots/projects.png)
Add Project
![Add Project](/github-images/screenshots/add-project.png)
Edit Project
![Edit Project](/github-images/screenshots/edit-project.png)



### 10. Development Roadmap
This is v2.0 of the app, but future enhancements are expected to include:
* add functionality to allow users to create a shopping list for items they are missing for a project
* add functionality for users to retrieve forgotten log in information
* add functionality for users to upload pictures of their projects
* add icons and/or images for common inventory items
* add databases shared among users to add tools, supplies and projects that other users have added




### 11. How to run it
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