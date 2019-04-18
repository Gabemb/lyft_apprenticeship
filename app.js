const http = require('http');
const onlyEveryThird = require('./onlyEveryThird');

const portNumber = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/test' && req.method === 'POST') {
    const result = {};

    req.on('data', (chunk) => {
      const body = chunk.toString();
      const { string_to_cut } = JSON.parse(body);

      if (typeof string_to_cut !== 'string') {
        result.error =  new TypeError(
          `${string_to_cut} is not a string.`
        );
      } else {
        result.return_string = onlyEveryThird(string_to_cut);
      }

    });

    req.on('end', () => {
      if (result.error) {
        console.log(result.error);
        res.end(result.error.message);
      } else {
        res.end(JSON.stringify(result));
      }
    });
  }
});

server.listen(portNumber, () => {
  console.log(`Server listening at port ${portNumber}....`);
});
