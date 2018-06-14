// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var surveyArray = [
    {
        "name": "Leslie Nielsen",
        "photo": "https://media.npr.org/assets/img/2010/11/29/ap101128059850_custom-c3b9829b1828124f7f31620b834e8f17015ddc95-s300-c85.jpg",
        "scores": [
            5,
            5,
            4,
            1,
            1,
            1,
            5,
            2,
            1,
            1
        ]
    },
    {
        "name": "John Travolta",
        "photo": "https://pmcdeadline2.files.wordpress.com/2017/05/ap_17009385805053.jpg?w=605",
        "scores": [
            5,
            5,
            1,
            5,
            3,
            5,
            4,
            4,
            5,
            5
        ]
    },
    {
        "name": "A Normal Person",
        "photo": "https://i.imgflip.com/zrjrm.jpg",
        "scores": [
            5,
            4,
            5,
            5,
            4,
            5,
            5,
            3,
            5,
            1
        ]
    },
    {
        "name": "John Goodman",
        "photo": "https://uproxx.files.wordpress.com/2015/05/w-sob-2.jpg?quality=95&w=650",
        "scores": [
            1,
            5,
            5,
            5,
            5,
            1,
            5,
            5,
            5,
            1
        ]
    },
    {
        "name": "Will Ferrell",
        "photo": "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzc3ODM1MDIy/will-ferrell-9542601-1-402.jpg",
        "scores": [
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3
        ]
    }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = surveyArray;



