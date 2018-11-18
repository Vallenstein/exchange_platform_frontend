
 # Installation:
For running the exchange platform you need three components.\
The Backend database: https://github.com/Vallenstein/exchange_platform_database \
GitLab as backend for learning content: https://about.gitlab.com/install/ \
And as frontend this repository here.

For installation you will need the following (from nebular docu): \
  Git - https://git-scm.com \
  Node.js - https://nodejs.org. Please note the version should be >=8 \
  Npm - Node.js package manager, comes with Node.js. Please make sure npm version is >=5 \
  You might also need some specific native packages depending on your operating system like build-essential on Ubuntu

## GitLab installation
Install GitLab and check if its running.
Create two groups in GitLab: iLab_solutions and ilab_labs \
Check on gitlabURL/api/v4/groups 

Create an account for the frontend with rights to view the lab group. *DO NOT* grant permission to the solutions group! \
Create a token at GitLabURL/profile/personal_access_tokens with read access for the frontend account.

Afterwards create an application for GitLab as OAuth provider with the root account.
Do so at GitLabURL/profile/applications \
This token is used in the app-module for the OAuth workflow.


## Database
Follow the instructions in the repository. Also works if Spring API is run for example in Intellij for testing and developing purposes.

The Database already contains Endpoints for connection to the Labsystem.
There is no direct integration given.

## Frontend
Clone this repository. Search for "//Change here" in the folder and change the data according to the steps for GitLab and your Spring API URL (See Database)

If you just want to run the system go to the frontend folder and run with "npm start". This starts a webserver at localhost:4200 \
If you want the system as webserver follow the steps on:
https://akveo.github.io/nebular/docs/guides/server-deployment . This link also includes a link to angular documentation on how to deploy.

The System is now ready to use, or develop further.

# Developments
For further development choose your favourite IDE. I can recommend Visual Studio Code and IntelliJ. \
### Where to start?
First check if the system is running.
If you want to use everything while developing run npm start for the frontend and start your Spring API.

The frontend is divided in modules.
Theme and Core are mostly untouched from ngx-admin.
oauth is for the authentication workflow and pages basically contains most frontend information.\
The folder structure is rather straight forward. For every page we have a folder containing a module for this page.
The tour of heroes tutorial (below) should provide enough information to get you started on angular in general.

Things that need work: Include information from the database (with Spring API) in the frontend. The API already includes endpoints. \
Search function sometimes not properly working. Possibly because of use of "name" instead of "id" in GitLab Api. \
If wanted, rework the theme serice, to listen to theme change and save theme change as cookie and load the according theme on open. Right now it always loads default.

# Components
Parts of this project are build using nebular by akveo, see below.
Additionally used is the ngx-admin template, starter Kit branch \
For further development please refer to their documentation:

## Documentation Nebular
This template is using [Nebular](https://github.com/akveo/nebular) modules set, [here you can find documentation and other useful articles](https://akveo.github.io/nebular/docs/installation/based-on-starter-kit-ngxadmin).

## Angular Demo
Some other parts are build parallel to the angular demo by Google. The demo can be found at:
https://angular.io/tutorial

Both projects are under the MIT license!
