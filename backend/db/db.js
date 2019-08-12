const { Client } = require('pg');

var connectURL = 'postgres://dtfkrrfcirntvn:35534e3c37676872637d05732294e88132c08448cb3b8f581ebe61982fdc2d9d@ec2-107-20-167-241.compute-1.amazonaws.com:5432/d9h36h73cuh0bt'
;
const client = new Client({
    connectionString: connectURL,
    ssl: true,
});

client.connect();
function querydb( queryString ){
    client.query( queryString , (err, res) => {
        if (err) throw err;
        for (let row of res.rows) {
            console.log(JSON.stringify(row));
        }
        client.end();
    });
}

export default querydb;