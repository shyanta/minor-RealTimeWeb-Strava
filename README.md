# Minor - Real Time Web - Strava

## Introduction
In this project I'm going to build a real time web application. I'm going to make a
website that visually represents a real-time data source. Nowadays people expect websites
to be real-time. Think about al the social media platforms. When someone posts something, you want
to see it immediately. Just like whatsapp, when someone sends you a message, you want to see it
directly, you don't want to wait around for multiple seconds.

This is why real-time is very popular right now. It's fast and more importantly, it's what people
expect, and as a frontend developer this is what should trigger you.
For this project I'm working with an API, to make a data visualisation based on real-time data.

## Live Link
The live chat can be found on the following link: <br/>
[Strava Data Visualisation](https://minor-realtimeweb-strava.herokuapp.com/)

## What did I make
For this project I'm going to work with an API from Strava. Based on the data from this API,
I want to make a data visualisation. This API works with an oauth authorization flow.
So far I've made the authorization process through the Strava authorization link. The next thing I
have to do is to save the data. And make the visualisation based on that.

Because the API isn't a real-time API, it won't refresh the data by itself. This is something
I have to do myself. So I will put the API request in an interval function. So the data will be update
every 1000 or so miliseconds. The Strava API has an limit of 600 requests per 15 minutes, which means
the interval can't be higher than every 1500 milliseconds.

## How to Install

### Create an app at strava
If you want to run this project on your own computer. You'll have to make a few adjustments to this
project. First, to make a strava api run on your own site, you have to follow the next steps:
-	Create an account at [Strava](https://www.strava.com/)
-	Create an app at your settings. For this, go to your profile icon -> Click settings tab -> Click
the last tab that says 'My API'
-	To create an app, you've got to have a live link on which the Strava API can run.

If you've followed these steps, strava will give you a Client_Id and a Client_Secret.

### Get code and set it up
To fetch the code from this repo run the following line in your terminal
```
git clone https://github.com/shyanta/minor-RealTimeWeb-Strava.git
```

When you have the code, run npm install to install al the npm packages
```
npm start
```

To get the API accessable, you have to create a .env file to set up some variables.
Place the .env file in the root of your app.
Set them op in the following way:
```
CLIENT_ID = yourClientId
CLIENT_SECRET = yourClientSecret

```

## How does it work

## Features
-	Strava API
-	oauth

## Wishes
-	Store the data based on the API with oauth.
-	Make the API real-time with an interval.
-	Think of an idea of a data visualisation for Strava Users
-	Create the datavisualisation.

## Sources
-	[Strava API Documentation](http://strava.github.io/api/)
-	[JSON.stringify data with EJS](http://stackoverflow.com/questions/13788314/express-and-ejs-to-render-a-json)
