// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Quiz!! How well do we know the Montreal!?",
        "main":    "<p>Think you're smart enough? Find out with this Quiz!</p>",
        "results": "<h5>Learn More</h5><p>Check our [website]</p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "Stay in school, Try again..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "<img src='images/test.png'></br/>Two criminals in Montreal get a call from their boss Eric and go to a Hospital where a worker is moving a cart with 15000$ in it, Do they?",
            "a": [
                {"option": "Kill him & Rob him",      "correct": false},
                {"option": "Rob him at gun point",     "correct": true},
                {"option": "Walked away!",      "correct": false},
                //{"option": "23",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> You smartie!</p>",
            "incorrect": "<p><span>Uhh no.</span> Not even close xD The correct answer: Rob him at gun point</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "How do you think the criminals escaped?",
            "a": [
                {"option": "Car",               "correct": false},
                {"option": "Bicycles",   "correct": true},
                {"option": "Running",               "correct": false},
                //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],
            "select_any": true,
<<<<<<< HEAD
            "correct": "<p><span>O Wow!!</span> Someone's Intuitive!!</p>",
            "incorrect": "<p><span>Hmmm.</span> You might want to reconsider your options. The correct answer: Bicycles</p>" // no comma here
=======
            "correct": "<p><span>O Wow</span> Someone's Intuitive!!</p>",
            "incorrect": "<p><span>Hmmm.</span> You might want to reconsider your options.</p>" // no comma here
>>>>>>> 6b0526a1db97a6016254bb8f0028820282a36475
        },
        
        
        { // Question 5
            "q": "Where do you think Eric is hiding?",
            "a": [
                {"option": "Ontario",    "correct": false},
                {"option": "Quebec",     "correct": false},
                {"option": "The Moon",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
<<<<<<< HEAD
            "incorrect": "<p><span>WELLLL!</span> We still don't know! He's still totally on the loose! <br/> Thanks for playing, We will post a new Quiz very soon!</p>" // no comma here
=======
            "incorrect": "<p><span>WELLLL!</span> He's still totally on the loose! <br/> Thanks for playing, We will post a new Quiz very soon!</p>" // no comma here
>>>>>>> 6b0526a1db97a6016254bb8f0028820282a36475
        } // no comma here
    ]
};
