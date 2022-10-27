const express = require('express')
var cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(cors());

const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('Course Hut Server.')
})

app.get('/courses', (req, res) => {
    res.send(courses);
});
app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.filter(c => c.id === id);
    res.send(course);
});

app.listen(port, () => {
    console.log(`Course Hut Server listening on port ${port}`)
})