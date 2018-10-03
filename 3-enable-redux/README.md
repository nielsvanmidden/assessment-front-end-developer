# State management with Redux
When a (React) component tree grows it gets harder to manage state. You will probably lose track of components that are responsible for state mutations and definitely in what directions data flows. In larger web applications at Bol.com we therefore use Redux, a predictable state container for JavaScript.

## Exercise
Use your output from exercise 2 in combination with the setup (store) that we have already created for you. In order to help you we've also added Redux Logger. Which will help you during development.
Like the previous exercise a user should be able to dismiss an alert by clicking the close button.

Approximate time to finish: **1.5 hours.**

## Requirements
* Toaster renders three alert variants according to data
* Toast alerts are dismissable
* Runs in React Storybook
* Tests covers at least your reducers
* React components should contain typing (React PropTypes, Flow, Typescript)

## Guidance
* Action types are already created for you
* One action creator has been created for you (setPristine) and is dispatched in [index.stories.js](https://github.com/nielsvanmidden/assessment-front-end-developer/blob/master/stories/index.stories.js)
* If you open up Redux Devtools you will notice the state mutation accordingly