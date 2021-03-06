# demo

### Overview

This project is used for showing using Vue as a front end framework to achieve few things:
1. Dashboard with socket.io live streaming
2. Animation
3. Router solution
4. Mixing Vue component into other framework

I've created separate pages for each above for demonstration.
* `/`: A color picker dashboard, with color selector
* `/404`: A 404 page, with animation and random color background
* `/gallery`: A image gallery, use arrow keys to navigate

For the full features currently supported in each page, see https://github.com/ts-xie/demo/wiki.

Do note that I'm trying to not use ES6 and some Vue features like [single file components](https://vuejs.org/v2/guide/single-file-components.html#Introduction)
because I didn't set up compile process of Vue for demo purpose, but we do have it setted up for production Vue projects.

### Run in local

```javascript
// You need to have `npm` installed first
// Go to project directory.
$ cd demo

// Install dependencies
$ npm install

// start server
$ node server.js
```
Now go to `localhost:3000`
