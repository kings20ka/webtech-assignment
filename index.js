const router = require('express').Router();

const students = [
    {
        name: "Future Opare",
        DOB: "19/12/2000",
        program: "BSC CS",
        level: "400",
        image:"/images/a.png"
    },
    {
        name: "Audust Alsina ",
        DOB: "14/03/2005",
        program: "BSC CS",
        level: "200",
        image:"/images/august.png"
    },
    {
        name: " Dominic Blawo",
        DOB: "7/20/2002",
        program: "BSC IT",
        level: "300",
        image :"/images/Dominic.jpg"
    },
    {
        name: "Max Amoah",
        DOB: "12/12/2001",
        program: "BSC MIS",
        level: "200",
        image:"/images/e.png"
    },
    {
        name: "Naira Marley",
        DOB: "12/11/1999",
        program: "BSC CS",
        level: "100",
        image:"/images/Legend.jpg"
    }
]


router.get('/', (req, res)=>{
    res.render('home', {
        title:'Home',
        students
    })
});

router.get('/student/:id', (req, res)=>{
    const id = req.params.id;
    const student = students[id];
    res.render('student', {
        title: students[id].name,
        student
    })
});

module.exports = router;