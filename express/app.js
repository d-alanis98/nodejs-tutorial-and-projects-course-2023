const express = require('express');

const app = express();

const PORT = process.env.PORT ?? 8000;

app.get('/', (req, res) => {
    res.send(`<h1>Welcome</h1>`);
});


app.listen(PORT, () => console.log(`Server listening on http://localhost:${ PORT }`));