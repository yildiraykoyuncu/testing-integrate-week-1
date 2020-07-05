# Testing: integrate, week 2

This week you will practice storing user input an array and finding saved values.

In this repository there are a few folders, these are the files & folders used in your project:

```txt
.
├── /lib
|   ├── chai.js
|   └── describe-it.js
├── /scripts
│   ├── /script-variables.js
│   └── /actions
│       ├── /display-found.js
│       ├── /find.js
│       ├── /push-to-array.js
├── /index.html
├── /LICENSE
├── /README.md
└── /style.css
```

The rest of the folders are code to study:

- **`/example`**: a small fully-working project that uses an array to save user input

---

## Your Tasks

Most of the code already works, the files you need to work in are listed below. Every other file already works correctly.


### 0. Study [`/example`](./example)

### 1. [`push-to-array.js`](./scripts/actions/push-to-array.js): Fill in the blanks

### 2. [`find.js`](./scripts/actions/find.js): complete the function to pass the tests

### 3. [`display-found.js`](./scripts/actions/display-found.js): Fill in the blank

---

## How to DevTool

- Always have your DevTools open.  The debugger will be overwhelming at first, but very quickly you won't know how to work without it.
- Set your debugger to [__pause on exceptions__](https://developers.google.com/web/updates/2015/05/automatically-pause-on-any-exception)
- Use [breakpoints](https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints/) to step through the tests
- Carefully read all console output, especially error messages. Errors aren't failure they are JavaScript trying to help you!
- Expand errors to practice reading the callstack
- Click on the line numbers to the right of console output to read the source code

## Good Habits

- Test your code __all the time__.  Every time you make any changes read the test results in the console and click the buttons to see if they work
- Make one change at a time. If you make many changes at once it's hard to know which one made a difference.

So a good workflow will be something like this (after the project is open in your browser):

1. Click on the button you are studying
1. Step through the handler in your debugger until you reach an error or something that does not work correctly
1. Go to VSCode and make one small change to try fixing the bug, save your changes!
1. Return to the browser, refresh, and click the same button
1. Step through to the line of code that caused problems last time, is it fixed?
1. repeat!
