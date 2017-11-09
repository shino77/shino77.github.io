// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "How well do you know what’s going on in your city?",
        "main":    "<p>Find out in this quiz!</p>",
        "results": "<h5>Learn More</h5><p>Check our [website]</p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "<div id='mainpic' ><img src='images/Proto01_01d.gif' ></div><div id='innerpic' style='display:none;'><img src='images/Proto01_01c.gif' ></div></br/>Two criminals in Montreal get a call from their boss &Eacute;ric with a job. They are to go to a hospital. There they find a worker pushing a cart with the hospital’s daily cash receipts on it, about $15,000. Do they? ",
            
            "a": [
                {"option": "Kill the worker and rob him",      "correct": false},
                {"option": "Rob the worker at gunpoint",     "correct": true},
                {"option": "Beat the worker",      "correct": false},
                {"option": "Walk away",      "correct": false},
                //{"option": "23",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> You smartie!</p>",
            "incorrect": "<p><span>Uhh no.</span> Not even close. <b>Correct answer:</b> Rob him at gunpoint</p>" // no comma here
            
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any  
            "q": "<div id='mainpic1' ><img src='images/Proto01_01c.gif' ></div><div id='innerpic1' style='display:none;'><img src='images/Proto01_01b.gif' ></div></br/>How do you think the criminals escaped?",
            "a": [
                {"option": "In a car",               "correct": false},
                {"option": "By bicycle",   "correct": true},
                {"option": "On foot",               "correct": false},
                //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>O wow!</span> Someone is intuitive...</p>",
            "incorrect": "<p><span>Hmmm.</span> You might want to reconsider your options. Correct answer: They got away on bikes.</p>" // no comma here
        },
        
        
        { // Question 5
            "q": "<div id='mainpic2' ><img src='images/Proto01_01b.gif' ></div><div id='innerpic2' style='display:none;'><img src='images/Proto01_01a.gif' ></div></br/>Where do you think &Eacute;ric is hiding?",
            "a": [
                {"option": "Rural Ontario",    "correct": false},
                {"option": "Vancouver",     "correct": false},
                {"option": "Ottawa",     "correct": false}, // no comma here
                {"option": "Rural Quebec",     "correct": false},
                {"option": "Toronto",     "correct": false},
                {"option": "Montreal",     "correct": false},
                {"option": "The Moon!",     "correct": false},
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span><img src='Proto01_01a.gif'>WELLLL!</span> He's still on the loose! <br/> Thanks for playing. We’ll post a new quiz very soon!</p>" // no comma here
        } // no comma here
    ]
};
