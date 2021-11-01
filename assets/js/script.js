

let username = document.getElementById("typeName");
let headerName = document.getElementById("headerName");
let enterBtn = document.querySelector(".enterBtn")
let gameBox = document.querySelector ('.gamebox')
const que_text = document.querySelector('.que_text')
let questions =[
    {
        numb: 1,
        question: "Who are the 2010 NBA Champions?",
        answer: "Miami Heat",
        options:[
            "Miami Heat",
            "Golden State Warriors",
            "Cleaveland Cavaliers",
            "Dallas Mavricks"
        ]
    },
    {
        numb: 2,
        question: "Who is the 2015 NBA MVP?",
        answer: "Steph Curry",
        options:[
            "Lebron James",
            "Steph Curry",
            "James Harden",
            "Kawhi Leonard"
        ]
    },
    {
        numb: 3,
        question: "Who Is the 2011 first draft pick?",
        answer: "Kyrie Irving",
        options:[
            "Anthony Davis",
            "Kyrie Irving",
            "John Wall",
            "Andrew Wiggins"
        ]
    },
    {
        numb: 4,
        question: "Who Is the 1996 first draft pick?",
        answer: "Allen Iverson",
        options:[
            "Steve Nash",
            "Ray Allen",
            "Kobe Brayant",
            "Allen IVerson"
        ]
    },
    {
        numb: 5,
        question: "Steph Curry's Draft Class?",
        answer: "2009",
        options:[
            "2009",
            "2008",
            "2010",
            "2011"
        ]
    },
];



function greeting () {
    headerName.innerHTML= ""  
    headerName.innerHTML = "Hello! " + typeName.value + " You can now answer the quiz";
    typeInput.style.display = "none";
    gameBox.style.opacity = "1";
}

let que_count = 0;



