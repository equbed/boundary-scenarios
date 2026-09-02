# boundary-scenarios
View the activity at https://equbed.github.io/boundary-scenarios/

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
