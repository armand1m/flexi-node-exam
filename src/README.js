# Implementation of Node exam.

This is a simple and not-tested implementation of the Node exam.

## Running

Download dependencies:

`npm install`

## CLI

Run the CLI using:

`node index.js <tags-argument>`

## Server
Start the server using:

`node server.js`

Then make a request into:

 - http://localhost:3000/count?tags=ipsum,dias,yolo

The requests to the API are cached using `fast-memoize`, and their execution time is logged on console.
