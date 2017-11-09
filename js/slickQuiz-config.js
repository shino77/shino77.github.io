// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Quiz!! How well do you know what's going on in your own backyard!?",
        "main":    "<p>Think you're smart enough? Find out with this Quiz!</p>",
        "results": "<h5>Learn More</h5><p>Check our [website]</p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "<div id='mainpic' ><img src='images/Proto01_01d.gif' ></div><div id='innerpic' style='display:none;'><img src='images/Proto01_01c.gif' ></div></br/>-Two criminals in Montreal get a call from their boss Eric and go to a Hospital where a worker is moving a cart with 15000$ in it, Do they?",
            
            "a": [
                {"option": "Kill him & Rob him",      "correct": false},
                {"option": "Rob him at gun point",     "correct": true},
                {"option": "Walk away",      "correct": false},
                //{"option": "23",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> You smartie!</p>",
            "incorrect": "<p><span>Uhh no.</span> Not even close xD, Correct answer: Rob him at gun point</p>" // no comma here
            
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any  
            "q": "<div id='mainpic1' ><img src='images/Proto01_01c.gif' ></div><div id='innerpic1' style='display:none;'><img src='images/Proto01_01b.gif' ></div></br/>How do you think the criminals escaped?",
            "a": [
                {"option": "Car",               "correct": false},
                {"option": "Bicycles",   "correct": true},
                {"option": "Running",               "correct": false},
                //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>O Wow!</span> Someone is intuitive...</p>",
            "incorrect": "<p><span>Hmmm.</span> You might want to reconsider your options. Correct answer: Bicycles</p>" // no comma here
        },
        
        
        { // Question 5
            "q": "<div id='mainpic2' ><img src='images/Proto01_01b.gif' ></div><div id='innerpic2' style='display:none;'><img src='images/Proto01_01a.gif' ></div></br/>Where do you think Eric is hiding?",
            "a": [
                {"option": "Ontario",    "correct": false},
                {"option": "Quebec",     "correct": false},
                {"option": "The Moon!",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span><img src='Proto01_01a.gif'>WELLLL!</span> He's still totally on the loose! <br/> Thanks for playing, We will post a new Quiz very soon!</p>" // no comma here
        } // no comma here
    ]
};
