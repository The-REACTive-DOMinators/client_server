import http from 'http';
import fs from 'fs';

const PORT = 3000;

const server = http.createServer((req, res) => {
  const fileName = req.url?.slice(1);

  fs.readFile(`./public/${fileName}`, (error, data) => {
    if (!error) {
      res.end(data);
    }

    res.statusCode = 404;
    res.end('404 Not Found');
  });
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
