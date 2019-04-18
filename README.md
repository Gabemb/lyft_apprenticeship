# lyft_apprenticeship
Simple API that returns every 3rd letter of a string.

App requires a global installation of Node.js. [Read more here](https://nodejs.org/en/download/) to get Node.js on your device.

To start the app, cd into the project folder and run:
```
$ node app.js
```

Simple Node server that accepts a POST request to the route `/test` which accepts one argument `string_to_cut`. Returns a JSON object with the key `return_string` and a string containing every third letter from the original string. E.g. if you POST `{"string_to_cut": "iamyourlyftdriver"}`, it will return: `{"return_string": "muydv"}`.

I recommend using [Postman](https://www.getpostman.com/) for your requests or running this in your command line:
```
$ curl -X POST http://localhost:3000/test --data '{"string_to_cut": "iamyourlyftdriver"}' -H 'Content-Type: application/json'
```

I chose not to use ExpressJS for this project becuase I felt that would be a little overkill for such a simple app. That said, if I were creating a Node application with scalability in mind, then I would absolutely employ Express in my app. Express is not only more intuitive to use, but good Express code is much easier to understand and consequently easier to maintain.
