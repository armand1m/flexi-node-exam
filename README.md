# Node.js challenge

Challenge for Node.js candidates, divided into 2 parts. The goal here is to grasp your problem solving skills, code organization and readability, knowledge about Javascript, Node.js core modules and Web standards. Treat your code as if you were working with a team!


## Requirements

### Part I

1. Create a script that allows the user to supply a CLI argument containing a comma-separated list of tags;
2. For each of these tags, find out how many times that tag appears within the objects in `data/*.json` 
3. Final output must be formatted like this (sorted by most popular tag first):

```
pizza     15
spoon     2
umbrella  0
cats      0
```

#### Hints:

+ Use only core modules for the functionality;
+ Use the asynchronous variants of the file IO functions (eg. use `fs.readFile` not `fs.readFileSync`);
+ If any of the data files contain invalid JSON, log the error with `console.error` and continue, ignoring that file;
+ You can use any version of node;
+ Make your code modular, some of it will be needed for the next part;


### Part II

1. Create a Web API with an endpoint `GET /count` which accepts a list of tags via query string (not necessarily comma-separated, your pick);
2. The endpoint must use previous functionality to find out how many times each tag appears within the objects in `data/*.json`;
3. The response payload must be in JSON format:

```
{
  "pizza": 15,
  "spoon": 2,
  "umbrella": 0,
  "cats": 0,
}
```

#### Hints:

+ You can your web framework of choice (e.g. Hapijs, Expressjs, etc.) and other related modules you see fit;
+ You can cache the result so subsequent requests can return the result immediately;
+ Requests to any other route should yield a JSON-formatted response with a 404 status code;
