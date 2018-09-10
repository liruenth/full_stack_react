const { Pool} = require('pg');
const connectionString = 'postgresql://postgres:synapse1@localhost:5432/postgres'
const pool = new Pool({
	connectionString: connectionString,
});

var QueryFuncs = {
    query: (queryText, queryValues, cb) => {
        pool.connect(function(err, client, release) {
            //connection failure
            //we don't need to release anything
            //because we were never handed a client in this case
            if(err) return cb(err);
            
            client.query(queryText, queryValues, function(err, result) {
                //always release the client
                release();
                
                if(err) return cb(err);
                
                //i like to return the rows directly since 99% of the time
                //I don't care about the other properties on the result object
                return cb(null, result.rows, result);
            });
        });
    }
 };

 module.exports = QueryFuncs;