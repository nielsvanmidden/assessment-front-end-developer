# Separation of concerns
Performance is really important at Bol.com. Pages should respond quickly and customers should be able to instantly interact with it. But when heavily relying on JavaScript this comes with a cost. Which potentially leads to slower pages and thus unhappy customers.
Therefore we should be smart when building our our client side applications. We should consider separating view logic (React components) from any logic that touches browser API's. Like fetch implementations or any references to `document` or `window`.
This mindset enables us to render our React components from a server. Which leads to huge performance gains.

## Exercise
Use your output from exercise 3 (Enable Redux). Create another action creator (with reducer accordingly) which is able to remove the last item from the array (data input).
This action will be dispatched whenever a user presses the *escape* key.

**Important:** React components must stay clean from browser API's or references to `document` or `window`.

Approximate time to finish: **2 hours.**

## Requirements
* Explain application concept you have in mind (*most important*)
* Toaster renders three alert variants according to data
* Toast alerts are dismissable by clicking
* Toast alerts are dismissable pressing escape (last item in array)
* Runs in React Storybook

## Guidance
To make sure that logs from this exercise in Redux Devtools not interfere with exercise three, you can disable the story for exercise three.