# Crunch accounting

## Pre-requisite

You will need to have [node](https://nodejs.org/en/) and `npm` installed on your machine. I usually install it via [nvm](https://github.com/nvm-sh/nvm) (on a UNIX machine). For windows machine use [nvm-windows](https://github.com/coreybutler/nvm-windows)

## Setup

### Installing the dependencies: `npm install`

In the project directory, run `npm install`, this will install all the development dependencies in `node_modules`

### Production build: `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

## Running the project locally

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

## Docker

### Pre-requisite

You will need to have [docker](https://www.docker.com/) installed.

### Starting the app: `docker-compose up -d`

In the project directory run `docker-compose up -d`.
Open [http://localhost](http://localhost) to view it in the browser.

## Developer notes

### Things that are left to do

Due to time constraints there are a few things that I was unable to achieve:
- the image picker
- adding the title select in front of the first name
- making the state a select rather than a textbox
- Unit tests: I was unable to write tests for everything so I only added tests for some files.

### Implementation choices

#### Not using an existing design system such as bootstrap

I decide against using an existing design system such as bootstrap. The main reason is that I wanted to brush up my css skills a bit. In hindsight, to release some code faster I should have just gone with an existing design system.

#### Redux + Redux forms

I decided to go with Redux and Redux Forms because they are tools that suit perfectly the task I was asked to do. This is particularly true when it comes to validation and validation messages. The only problem with using redux-forms is that it is not that straight forward to test, especially because we are using a remote button to submit the form.
I have started the tests on that file but, again, because of time constraints I was not able to finish.

### Styled Components

I like using styled components as it enables the separation between styling and the component implementation. It makes the code more readable.
