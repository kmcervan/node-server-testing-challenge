require('dotenv').config();

const server = require('./api/server');

const port = process.env.PORT || 5020;
server.listen(port, () => console.log(`\n** Server up on port ${port} **\n`));
