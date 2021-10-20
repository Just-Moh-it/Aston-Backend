# 🐼 Aston Animal Sanctuary

![Animal Sanctuary Logo](/assets/images/project_logo.png)

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

## Setup the Environment

```bash
# Clone and Change Directory
git clone https://github.com/Just-Moh-it/Aston-Backend

cd Aston-Backend

# Install the dependencies
npm install
```

## Setup MongoDB

If you haven't already installed mongodb, get it [here](https://docs.mongodb.com/manual/installation/). Then copy the connection string and paste it according to the next step.

## Adding an environment file

Rename the `.env.example` file to `.env` in the base of the folder and change the values accordingly.

## Starting the server

To run the backend server, type in the terminal

```bash
npm start
```

## Starting the backend

Once all the above steps occur without any error, start the application using

```bash
npm start
```

You should see a browser window pop up with the following url

```txt
https://localhost:3000
```

This indicates the frontend started successfully. Now you need to create an admin user

## Signup the admin account

On the browser instance, click on the `Login | Register` link at the top, then enter the details you want the admin account to have, and press `Register`.

Now, you need to open the mongodb database (using the CLI or MongoDb Compass, or Atlas itself if you're hosting the db on MongDb Atlas), and open the `users` collection. There, you can search for the admin account by the its mail address.

After locating the document in the collection, change the `role` value from `0` to `1` to handle the user as admin.

# Contributing 😃

There's a lot that could be imroved in this application. If you want to contribute, visit [CONTRIBUTING.md](/CONTRIBUTING.md)

# License 👩‍⚖️

This project is released under the MIT license. For more info, visit [LICENSE.md](/LICENSE.md)

# That's it! 🎉

If You've successfully started the NodeJS server, the next step is to get the frontend up, and configure it to run with the backend. [Visit the frontend here](https://github.com/Just-Moh-it/Aston-Frontend).
