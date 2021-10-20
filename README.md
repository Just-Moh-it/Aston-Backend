# 🐼 Aston Animal Sanctury
![Animal Sanctury Logo](/assets/images/project_logo.png)


Aston animal Sanctuary is a MERN stack based adoption management system, with the ability to

- 🦄 Add animals along with their details, and set them up for adoptions
- 👮‍♀️ Have users sign up for the app
- 🐼 Users can raise adoption request
- ✉️ Send out email notifications to users on adoption status change.
- 👀 Discover, search for, or filter animals setup for adoption
- 😃 Approve/Decline queued adoption requests

...And a lot more features to explore. Run your own instance and see it for yourself.

# Tech-Stack 📱

This application uses:
- 🚅 **Express Js** for handling http traffic.
- 🍀 NodeJS as the runtime
- 💿 MongoDB as the database, and 
- 🐑 Mongoose as the ORM
- 📤 Node-mailer as the email notification client

Created with ❤️ and 🐼 in Delhi, India

# Setting up the application 🔌

To run your own instance, follow the given steps:

## Clone the repo

To clone the repo, use
```bash
git clone https://github.com/Just-Moh-it/Aston-Backend

cd Aston-Backend
```

## Setup MongoDB

If you haven't already installed mongodb, get it [here](https://docs.mongodb.com/manual/installation/). Then copy the connection string and paste it according to the next step.

## Adding an environment file

Rename the `.env.example` file to `.env` in the base of the folder and change the values accordingly.

## Starting the server

To run the backend server, type in the terminal
```bash
node app.js
```

## Testing the backend

To test if the backend is correctly working, first run the app. Then a message in the terminal window saying 
```Server started at port <PORT>```
will appear. Note the port number, and type in the browser window:

```
http://localhost:<PORT>/
```
If you get a JSON file presenting:
```
{ "messages": "Congrats! Server started. Use the front end to query..." }
```

# Contributing 😃

There's a lot that could be imroved in this application. If you want to contribute, visit [CONTRIBUTING.md](/CONTRIBUTING.md)

# License 👩‍⚖️

This project is released under the MIT license. For more info, visit [LICENSE.md](/LICENSE.md)

# That's it! 🎉

If You've successfully started the NodeJS server, the next step is to get the frontend up, and configure it to run with the backend. [Visit the frontend here](https://github.com/Just-Moh-it/Aston-Frontend).
