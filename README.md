
 # Installation:
For running the exchange platform you need three components.\
The Backend database: https://github.com/Vallenstein/exchange_platform_database \
GitLab as backend for learning content: https://about.gitlab.com/install/
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

## Frontend
Clone this repository. Search for "//Change here" in the folder and change the data according to the steps for GitLab and your Spring API URL (See Database)

If you just want to run the system go to the frontend folder and run with "npm start". This starts a webserver at localhost:4200 \
If you want the system as webserver follow the steps on:
https://akveo.github.io/nebular/docs/guides/server-deployment . This link also includes a link to angular documentation on how to deploy.


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