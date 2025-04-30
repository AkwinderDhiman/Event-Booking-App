
const db = require('../config/db');

exports.getUsers = (req, res) => {
    db.query(
        'SELECT * from users',
        (err, result) => {
            if (err) {
                console.error('Error retrieving users:', err.stack);
                return res.status(500).send('Error retrieving users');
              }
          
              res.status(200).json(result.rows); 
        }
    );
};