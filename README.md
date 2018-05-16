# Technical task for new applicants

## Coding Task Guidelines

There's few better ways to assess someone's programming skills than to have them undertake a reasonably open ended coding task. This task is borrowed heavily from https://github.com/Westpac-Mobile/CodingTest, so thank-you to those people for such a great boilerplate. 

Please do not spend more that 2-3 hours on this task. If it takes you much longer than that, there is something fundamentally wrong with your approach.

## Requirements

The task is to create a basic web application that displays the current temperature using https://darksky.net/ using the geo-location of your browser.

Your Secret Key:
7e014ce08bfd318b089a32fb0289f9aa

https://api.darksky.net/forecast/7e014ce08bfd318b089a32fb0289f9aa/37.8267,-122.4233

### Key business requirements

* Display the current temperature in degrees celsius
* Display the temperature based on the geolocation (note; not the IP!) of your browser
* Display a simple icon and label based on the weather information provided (eg. sunny, cloudy, rainy etc).
* The API request must be proxied via your nodejs server application ie. do not make a request from the client side directly to https://darksky.net/ for the weather information. It must go via your localhost app.

### What we will be looking for in the applicant and the application

We are looking for *engineers* that can lead technology and design decisions without the need for explicit guidance.  This is why we are not providing an exact outline of what we are looking for, so we influence your direction on this task as little as possible. We want to see how you work unencumbered and get to know what really matters to you when developing a web application.

## Getting Started

* Fork this repository.
* Commit your code, and send us a pull request when you are finished.


### Complete each task below:
### Task1
Using this code base create an endpoint to proxy a request to api.darksky.net and return a response with the current temperature for your location based on the geolocation.


