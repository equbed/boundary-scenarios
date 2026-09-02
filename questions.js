/* =========================================================
   QUESTION CONTENT
   =========================================================

   THIS IS THE FILE YOU WILL EDIT WHEN ADDING QUESTIONS.

   You do NOT need to change script.js when adding a
   normal question.

   Each question has:

   id
       A unique number.

   skillsPracticed
       The skills this scenario helps practice.

   question
       The scenario shown to the learner.

   answers
       The possible responses.

   Each answer has:

       text
           What the learner sees.

       score
           0 = needs more practice
           1 = developing
           2 = strong response

       skills
           What the learner demonstrated.

       feedback
           What the learner sees after answering.

   ========================================================= */


const QUESTIONS = [

    /* =====================================================
       Q1
       ===================================================== */

    {
        id: 1,

        skillsPracticed: [
            "closed",
            "clear",
            "verbal"
        ],

        question:
            "Someone tries to hug you, but you don't want a hug.",

        answers: [

            {
                text: "“I'm not a hug person.”",

                score: 2,

                skills: [
                    "closed",
                    "clear",
                    "verbal"
                ],

                feedback:
                    "Nice job! You clearly communicated a closed door boundary. Let's try another one!"
            },

            {
                text: "“I'd rather just say hello.”",

                score: 1,

                skills: [
                    "partial",
                    "clear",
                    "verbal"
                ],

                feedback:
                    "Good job! You communicated a partially open boundary.\n\n" +

                    "If you meant to close the door, try something clearer, like “I do not want a hug.” " +

                    "Remember, communicating your boundaries is a good thing! You are just letting people know what you need."
            },

            {
                text: "Back away and wave instead.",

                score: 0,

                skills: [
                    "closed",
                    "unclear",
                    "nonverbal"
                ],

                feedback:
                    "You are using body language to show your boundary. That can make it confusing for people to know what you want. " +

                    "Next time, try adding words to express your needs. Say something like “I do not want a hug. Can we wave instead?”"
            }

        ]
    },


    /* =====================================================
       Q2
       ===================================================== */

    {
        id: 2,

        skillsPracticed: [
            "closed",
            "clear",
            "verbal"
        ],

        question:
            "A coworker wants to use your phone. You don't really know them, and you don't want to share your phone with them.",

        answers: [

            {
                text: "“Sorry, I don't share my phone.”",

                score: 2,

                skills: [
                    "closed",
                    "clear",
                    "verbal"
                ],

                feedback:
                    "Nice job! You clearly communicated a closed door boundary. Let's try another one!"
            },

            {
                text: "“I'm not comfortable with that.”",

                score: 2,

                skills: [
                    "closed",
                    "clear",
                    "verbal"
                ],

                feedback:
                    "Nice job! You clearly and firmly communicated a closed door boundary. Let's try another one!"
            },

            {
                text: "“Sure, here you go.”",

                score: 0,

                skills: [
                    "open",
                    "clear",
                    "verbal"
                ],

                feedback:
                    "By saying, “Sure, here you go,” you are communicating an open door boundary. " +

                    "In the question, you didn't want to share your phone.\n\n" +

                    "This is a great example of a challenge with communicating your boundaries. " +

                    "Even though you didn't want to share your phone (a closed boundary), you communicated an open boundary.\n\n" +

                    "Try again to select a communication that shows your closed door boundary."
            },

            {
                text: "“I need it right now. Can you wait 10 minutes?”",

                score: 1,

                skills: [
                    "partial",
                    "verbal"
                ],

                feedback:
                    "You communicated a partially closed boundary.\n\n" +

                    "Remember in the question that you don't really want to share your phone, " +

                    "so you should be communicating a closed boundary.\n\n" +

                    "This is a common challenge. Many people try to delay an answer rather than telling someone no. " +

                    "It takes practice. It's okay to communicate your boundaries. Look at the question again and see if you can pick an answer that more clearly communicates your closed boundary."
            }

        ]
    },


    /* =====================================================
       Q3
       ===================================================== */

    {
        id: 3,

        skillsPracticed: [
            "open",
            "clear",
            "verbal",
            "polite"
        ],

        question:
            "A coworker or classmate comes up to you while you are eating lunch. They ask if they can sit with you. You don't care if they do or not.",

        answers: [

            {
                text: "“Sure, you can sit here.”",

                score: 2,

                skills: [
                    "open",
                    "clear",
                    "verbal",
                    "polite"
                ],

                feedback:
                    "Great work! You clearly communicated an open boundary. " +

                    "You were also polite, making the other person feel welcome."
            },

            {
                text: "Shrug and keep eating.",

                score: 1,

                skills: [
                    "open",
                    "unclear",
                    "nonverbal"
                ],

                feedback:
                    "While you did communicate your boundary, it is best to use our words to express ourselves. " +

                    "Answering them verbally (“Sure, you can sit here”) is much clearer. " +

                    "If your mouth is full, nodding “yes” is more polite than a shrug, because a shrug may not make them feel welcome."
            },

            {
                text: "“I don't care.”",

                score: 1,

                skills: [
                    "open",
                    "verbal",
                    "clear"
                ],

                feedback:
                    "You did communicate your boundary. You did use simple language, but pay close attention to your tone. " +

                    "If you are using a flat or negative tone, the other person might not feel welcome and could think you are being rude."
            },

            {
                text: "Ignore them.",

                score: 0,

                skills: [
                    "open",
                    "unclear",
                    "nonverbal"
                ],

                feedback:
                    "Ignoring someone does not clearly communicate what you want. " +

                    "Try using your words or clear body language to let the other person know whether they can sit with you."
            }

        ]
    },


    /* =====================================================
       Q4
       ===================================================== */

    {
        id: 4,

        skillsPracticed: [
            "closed",
            "clear",
            "verbal",
            "nonverbal"
        ],

        question:
            "Someone is standing too close to you and it is making you uncomfortable.",

        answers: [

            {
                text: "Step away from them.",

                score: 1,

                skills: [
                    "closed",
                    "nonverbal",
                    "partial"
                ],

                feedback:
                    "You communicated a boundary by creating more space. " +

                    "Sometimes body language can communicate a boundary, but using words can make your needs clearer."
            },

            {
                text: "Tell them they are too close.",

                score: 2,

                skills: [
                    "closed",
                    "clear",
                    "verbal"
                ],

                feedback:
                    "Nice job! You clearly communicated a closed door boundary and told the person what you needed."
            },

            {
                text: "Walk away from the conversation.",

                score: 1,

                skills: [
                    "closed",
                    "nonverbal",
                    "clear"
                ],

                feedback:
                    "Walking away is a way to create space and communicate a boundary. " +

                    "When it is safe to do so, using words can help people understand what you need."
            }

        ]
    },


    /* =====================================================
       Q5
       ===================================================== */

    {
        id: 5,

        skillsPracticed: [
            "partial",
            "clear",
            "verbal"
        ],

        question:
            "Your friend has called you, but you are having dinner with your family. You can talk to them later, but you are not available now.",

        answers: [

            {
                text: "Text them “Can we talk later?”",

                score: 2,

                skills: [
                    "partial",
                    "clear",
                    "verbal"
                ],

                feedback:
                    "Great job! You clearly communicated that you are not available right now while letting your friend know you can talk later."
            },

            {
                text: "Ignore their call now, and call them back later.",

                score: 1,

                skills: [
                    "partial",
                    "nonverbal"
                ],

                feedback:
                    "You communicated a boundary by not answering the phone. " +

                    "Calling them back later is also a good way to show that you still want to talk."
            },

            {
                text: "Answer your phone and tell them you are busy.",

                score: 2,

                skills: [
                    "partial",
                    "clear",
                    "verbal"
                ],

                feedback:
                    "Nice job! You clearly communicated that you are busy right now while letting your friend know why you cannot talk."
            },

            {
                text: "Answer their call and see what they want.",

                score: 0,

                skills: [
                    "open",
                    "verbal"
                ],

                feedback:
                    "You answered the call even though you were not available to talk. " +

                    "Try communicating that you are busy and can talk later."
            }

        ]
    },


    /* =====================================================
       Q6
       ===================================================== */

    {
        id: 6,

        skillsPracticed: [
            "closed",
            "clear",
            "safety"
        ],

        question:
            "You are in an online chat with someone you do not know in real life. They ask for pictures of you, and that makes you uncomfortable. You know you are not supposed to send pictures to strangers.",

        answers: [

            {
                text: "You end the chat.",

                score: 2,

                skills: [
                    "closed",
                    "clear",
                    "nonverbal",
                    "safety"
                ],

                feedback:
                    "Great job! Ending the chat is a clear way to communicate a closed boundary. " +

                    "You also made a safe choice by not sharing pictures with someone you do not know."
            },

            {
                text: "You say “No, I am not comfortable with that.”",

                score: 2,

                skills: [
                    "closed",
                    "clear",
                    "verbal",
                    "safety"
                ],

                feedback:
                    "Excellent! You clearly communicated a closed door boundary and made a safe choice."
            },

            {
                text: "You answer “That's a great idea,” and send them a picture.",

                score: 0,

                skills: [
                    "open",
                    "verbal",
                    "safety-risk"
                ],

                feedback:
                    "This does not communicate the boundary you wanted. " +

                    "You said that the request made you uncomfortable, and you know you should not send pictures to strangers.\n\n" +

                    "Remember: You can say no, end the chat, or block someone who makes you uncomfortable."
            },

            {
                text: "You block the other person.",

                score: 2,

                skills: [
                    "closed",
                    "clear",
                    "nonverbal",
                    "safety"
                ],

                feedback:
                    "Great job! Blocking someone is a clear way to communicate a closed boundary. " +

                    "You also made a safe choice by stopping contact with someone you do not know."
            }

        ]
    }

];
