<p align="center">
<img src="https://i.imgur.com/JyzS50v.png" width="350px"/>
</p>

<a href="https://playtime-picks.herokuapp.com"> <h1 align=center>Playtime Picks</h1> </a>

Playtime Picks is an app for parents, grandparents, anyone to quickly find an activity to do with their kid!  Easily find fun activities for how you're feeling by using the filter.  If you have any great activities to share with others feel free to sign-up and add it to the list.  You can also leave comments on other activities on this site.  We hope we can help you pick the right playtime activity just for you and your kid!

Click on or copy & paste this link to reach our site:

- [https://playtime-picks.herokuapp.com](https://playtime-picks.herokuapp.com)

___

###Installation

- Heroku is used for online deployment for the app
    - run `heroku config:set` **for each environment variable**
    - database is running from MongoLab.  **Connecting the database requires the Heroku add-on for MongoLab.  The add-on is free, but it requires you to enter credit card information to validate the account.**
- MongoLab is used to host the app's database
  - seed data for seeding a mongo database is in seed.js, run with `node seed.js`
  - run this command to import the data:
  
```
mongoimport -h ds012345.mongolab.com:56789 -d dbname -c collectionname -u dbuser -p dbpassword --file filename.json
```

___

###Technologies Used

Development| Deployment
------------|-------------------
HTML | Heroku
CSS  | MongoLab
Bootstrap |
JavaScript/jQuery |
MongoDB |
Express |
AngularJS|
Node.js |
JWT |
Git |
GitHub |

___

###API Documentation

Method|Parameters|Description|Required Fields|Optional Fields|
-------------|------|-----------|-------|---|
`create`|`/users/new`|a user can create a new account|`name`,  `email`, `password`
`index`|`/activities`|a user can see all activities 
`create`|`/activities/new`|a user can create a new activity|`title`,  `at_home`, `be_active`, `under_two`, `summary`|
`update`|`/activities/:id`|a user can edit their activity
`createComment`|`/activities/:id/comments`|a user can comment on an activity
`favCount`|`/spots/:id/favCount`|a user can like/unlike an activity
`destroy`|`/activities/:id`|a user can delete their spot

#####User Model

Parameters|Value|Description|Example|
----------|-----|-----------|-------|
`name`|String| saved to JWT for authentication
`email`|String| saved to JWT for authentication
`password`|String| saved to JWT for authentication
`activities`|[activitySchema]|*refers to activities model* | see "Activity Model"
`fav_activities`|[activitySchema]|*refers to activities model* | see "Activity Model"


  
#####Activity Model

Parameters|Value|Description|Example|
----------|-----|-----------|-------|
`author`|[userSchema]|name of author(user)
`title`|String|title of activity
`at_home`|Boolean|at home activity
`be_active`|Boolean|active activity
`under_two`|Boolean|age under 2 years old
`summary`|String|description of activity
`activity_date`|Date|date activity was posted
`favorite`|Boolean|activity liked by user
`fav_counter`|Number|counts number of likes
`comments`|[commentSchema]|comments embedded into activity |see "Comment Model"
 
#####Comment Model

Parameters|Value|Description|Example|
----------|-----|-----------|-------|
`body`|String|body of comment
`author`|[userSchema]|name of author(user)

___

[Trello Board](https://trello.com/b/I0xaXb8z/project-4) (Includes data models and link to wireframes)  

___  

###Development Process

Attempted to build a single page app using MEAN stack.  The app allows users to create activities to share with other parents and also filter/search for activities they might be interested in.  Authentication is granted using JWT.

___

###Unsolved Problems/Major Hurdles

- JWT authentication not working 100%
- missing update, destroy, show CRUD features
- unable to pull a random activity for a user
- favorites and favorite counter does not persist to database
