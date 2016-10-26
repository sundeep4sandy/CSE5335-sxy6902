# cse5335-sxy6902-1

##### - Sandeep Yerramsetti (sxy6902)

### Server Framework:

- The Frameworks which was used on the server side are node.js and express.js. The node.js is a event based framework and all the Ajax calls can be done on the server side it also utilizes the V8 JavaScript engine

### client Framework:

- The Frameworks which was used on the client side are Angular.js and html. It follows the MVC framework and it is east to write.

### Aspects of implementation which were easy 

- Even though I am a newbie to web development, I found Ajax calls and server side implementation to be easy then compared to the client side.

### Aspects of implementation which were hard

- The aspects which were considered to be challenging are the deployment of application in the heroku server and the implementation of google maps using the latitude and logitude values in the json data.

### What components OTHER than your client and server framework did you install,if any, and if so, what is their purpose for your solution?

- I've installed two components other than the framework.
	1. Heroku toolbelt - which is used to for the heroku server so that it can communicate with windows.
	2. git-hub(desktop top) - which is used to update the git repository.


### What Ubuntu commands are required to deploy and run your server

- They are 10 commands which are used for the deployment and running your server:
	1. heroku login							- To login into the serever.
	2. heroku git:clone	-a cse5335-sxy6902	- To clone the source code to your local machine.
	3. cd cse5335-sxy6902					- To change the project directory.
	4. heroku create						- Creates app which is to be deployed.
	5. git status							- To check any changes.
	6. git add .							- To update current content.
	7. git commit -am "Message"				- To record changes in the repository.
	8. git push heroku master				- pushes the code in your directory to heroku repository.
	9. heroku ps:scale web=1				- To create a instance for the application.
	10.heroku open							- To open the application.
	11.heroku logs --tail					- To view the logs of the application
	
