const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors());

const categories = require('./Data/categories.json');
const courses = require('./Data/courses.json');


app.get('/', (req, res) => {
    res.send('Ast-10!');
});

// All Categories
app.get('/categories', (req, res) => {
    // console.log(categories);
    res.send(categories);
});

// Filter Courses by category
app.get('/categories/:name', (req, res) => {
    const category = (req.params.name);

    // console.log(category);
    const allCategory = courses.filter(item => item.category === category) || {};
    // console.log(allCategory);
    res.send(allCategory);
});

// All Courses
app.get('/courses', (req, res) => {
    // console.log(courses);
    res.send(courses);
});

// Find Single Course by ID
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;

    const singleCourses = courses.find(item => item.id === id) || {};
    console.log(singleCourses);
    res.send(singleCourses);
});


app.listen(port, () => {
    console.log(`Ast-10 server app listening / running on port ${port}`);
});

