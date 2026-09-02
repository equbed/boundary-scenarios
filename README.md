# boundary-scenarios
View the activity at https://equbed.github.io/boundary-scenarios/

# how it works
The first three questions are always shown in order. Then it looks for things such as:

Did the learner communicate a closed boundary?
Did they communicate an open boundary?
Did they use unclear communication?
Did they use verbal communication?
Did they make a safe choice?

The program then chooses an unanswered question that
provides additional practice.

To increase the initial number of questions, look in the javascript and find:

const ASSESSMENT_COUNT = 3;

# Changing activity length
Changing Activity Length

The current activity allows up to 8 questions.

This setting is in:

script.js

Find:

const MAX_QUESTIONS_PER_ACTIVITY = 8;

# Add new questions
To add a new question, open:

questions.js

Find the bottom of the QUESTIONS list.

The last question currently ends with:

    {
        id: 6,

        ...

    }

];

Change the ending from:

    }

];

to:

    },

    {
        id: 7,

        skillsPracticed: [
            "closed",
            "clear",
            "verbal"
        ],

        question:
            "Your new scenario goes here.",

        answers: [

            {
                text: "Your first answer.",

                score: 2,

                skills: [
                    "closed",
                    "clear",
                    "verbal"
                ],

                feedback:
                    "Your feedback goes here."
            },

            {
                text: "Your second answer.",

                score: 1,

                skills: [
                    "partial"
                ],

                feedback:
                    "Your feedback goes here."
            },

            {
                text: "Your third answer.",

                score: 0,

                skills: [
                    "open"
                ],

                feedback:
                    "Your feedback goes here."
            }

        ]
    }

];
Question ID

Every question needs a unique ID.

For example:

id: 7,

If your next question is Q8:

id: 8,

Do not give two questions the same ID.

skillsPracticed

This tells the activity what skills the question is designed
to practice.

For example:

skillsPracticed: [
    "closed",
    "clear",
    "verbal"
],

Available skills currently include:

closed
open
partial
clear
unclear
verbal
nonverbal
polite
safety

You can use more than one skill.

For example:

skillsPracticed: [
    "closed",
    "clear",
    "verbal"
],
Answer Score

Each answer has a score.

Use:

2 = Strong response
1 = Developing response
0 = Needs more practice

Example:

score: 2,
Answer Skills

The skills field describes what the learner demonstrated
by choosing that answer.

Example:

skills: [
    "closed",
    "clear",
    "verbal"
],

This means the learner demonstrated:

A closed boundary
Clear communication
Verbal communication

You can use multiple skills.

Feedback

Put the feedback for the answer in:

feedback:
    "Your feedback goes here."

If you want a new paragraph, use:

feedback:
    "First paragraph.\n\n" +
    "Second paragraph."

## Complete example new question
{
    id: 7,

    skillsPracticed: [
        "closed",
        "clear",
        "verbal"
    ],

    question:
        "A friend asks to borrow something that belongs to you. You do not want to lend it to them.",

    answers: [

        {
            text: "“No, I don't want to lend it out.”",

            score: 2,

            skills: [
                "closed",
                "clear",
                "verbal"
            ],

            feedback:
                "Great job! You clearly communicated a closed boundary."
        },

        {
            text: "“Maybe another time.”",

            score: 1,

            skills: [
                "partial",
                "verbal"
            ],

            feedback:
                "You communicated that you do not want to share right now, but your answer may make the other person think they can ask again later."
        },

        {
            text: "“Sure, you can borrow it.”",

            score: 0,

            skills: [
                "open",
                "verbal"
            ],

            feedback:
                "You communicated an open boundary. Remember that it is okay to say no when you do not want to lend something."
        }

    ]
},
