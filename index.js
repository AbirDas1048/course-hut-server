const express = require('express')
var cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(cors());

app.get('/', (req, res) => {
    res.send('Course Hut Server.')
})

app.listen(port, () => {
    console.log(`Course Hut Server listening on port ${port}`)
})