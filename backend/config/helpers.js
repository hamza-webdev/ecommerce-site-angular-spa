const MySqli = require('mysqli');

let conn = new MySqli({
  Host: 'localhost',
  post: 3306,
  user: 'mega_shop',
  passwd: 'mega_shop',
  db: 'mega_shop'
});

let db = conn.emit(false, '');

module.exports = {
  database: db
};

