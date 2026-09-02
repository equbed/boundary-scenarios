/* =========================================================
   QUESTION CONTENT
   =========================================================

   THIS IS THE FILE YOU WILL EDIT WHEN ADDING QUESTIONS.

   You do NOT need to change script.js when adding a
   normal question.

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
                    "It takes practice. It's okay to communicate your boundaries."
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
                    "If your mouth is full, nodding “yes” is more polite than a shrug."
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
    },


    /* =====================================================
       Q7
       ===================================================== */

    {
        id: 7,

        skillsPracticed: [
            "closed",
            "clear",
            "verbal"
        ],

        question:
            "Someone you know keeps asking you personal questions that you don't want to answer.",

        answers: [

            {
                text: "“I don't want to talk about that.”",

                score: 2,

                skills: [
                    "closed",
                    "clear",
                    "verbal"
                ],

                feedback:
                    "Nice job! You clearly communicated a closed door boundary."
            },

            {
                text: "“Can we talk about something else?”",

                score: 2,

                skills: [
                    "closed",
                    "clear",
                    "verbal",
                    "polite"
                ],

                feedback:
                    "Good job! You communicated that you do not want to talk about the topic. " +
                    "You also gave the person another choice."
            },

            {
                text: "Answer all of their questions even though you feel uncomfortable.",

                score: 0,

                skills: [
                    "open",
                    "verbal",
                    "unclear"
                ],

                feedback:
                    "You did not communicate your boundary. " +
                    "Remember, it is okay to tell someone when you don't want to answer a personal question."
            },

            {
                text: "Walk away without saying anything.",

                score: 1,

                skills: [
                    "closed",
                    "nonverbal",
                    "unclear"
                ],

                feedback:
                    "Walking away can communicate that you are uncomfortable, but using your words can make your boundary clearer."
            }

        ]
    },


    /* =====================================================
       Q8
       ===================================================== */

    {
        id: 8,

        skillsPracticed: [
            "closed",
            "clear",
            "verbal"
        ],

        question:
            "A friend wants to borrow your favorite jacket. You don't want anyone else to wear it.",

        answers: [

            {
                text: "“No, I don't lend out my favorite jacket.”",

                score: 2,

                skills: [
                    "closed",
                    "clear",
                    "verbal",
                    "polite"
                ],

                feedback:
                    "Nice job! You clearly communicated a closed door boundary."
            },

            {
                text: "“I'd rather keep it for myself.”",

                score: 2,

                skills: [
                    "closed",
                    "clear",
                    "verbal"
                ],

                feedback:
                    "Good job! You clearly communicated that you do not want to share your jacket."
            },

            {
                text: "“Sure, you can borrow it.”",

                score: 0,

                skills: [
                    "open",
                    "clear",
                    "verbal"
                ],

                feedback:
                    "You communicated an open door boundary. " +
                    "The question says you don't want anyone else to wear your jacket."
            },

            {
                text: "“Maybe. I'll let you know later.”",

                score: 1,

                skills: [
                    "partial",
                    "verbal"
                ],

                feedback:
                    "You communicated a partially closed boundary. " +
                    "If you already know you don't want to lend your jacket, it is okay to say no."
            }

        ]
    },


    /* =====================================================
       Q9
       ===================================================== */

    {
        id: 9,

        skillsPracticed: [
            "open",
            "clear",
            "verbal",
            "polite"
        ],

        question:
            "Someone asks if they can sit in your chair. You are finished using it and don't mind if they sit there.",

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
                    "Great work! You clearly communicated an open boundary."
            },

            {
                text: "Move your chair away without saying anything.",

                score: 0,

                skills: [
                    "closed",
                    "nonverbal",
                    "unclear"
                ],

                feedback:
                    "You communicated a closed boundary even though you were okay with sharing the chair. " +
                    "Try using your words to clearly communicate an open boundary."
            },

            {
                text: "“Yes.”",

                score: 2,

                skills: [
                    "open",
                    "verbal",
                    "clear"
                ],

                feedback:
                    "Nice job! You communicated an open boundary. " +
                    "Adding more words, like “Sure, you can sit here,” can make your answer even clearer."
            },

            {
                text: "“No, I don't want you to.”",

                score: 0,

                skills: [
                    "closed",
                    "clear",
                    "verbal"
                ],

                feedback:
                    "You communicated a closed boundary, but it does not match the situation. " +
                    "The question says you don't mind sharing the chair."
            }

        ]
    },


    /* =====================================================
       Q10
       ===================================================== */

    {
        id: 10,

        skillsPracticed: [
            "closed",
            "clear",
            "verbal"
        ],

        question:
            "A person keeps touching your belongings without asking. You want them to stop.",

        answers: [

            {
                text: "“Please ask me before touching my things.”",

                score: 2,

                skills: [
                    "closed",
                    "clear",
                    "verbal",
                    "polite"
                ],

                feedback:
                    "Great job! You clearly communicated your boundary and told the person what you need."
            },

            {
                text: "“Don't touch my things without asking.”",

                score: 2,

                skills: [
                    "closed",
                    "clear",
                    "verbal"
                ],

                feedback:
                    "Nice job! You clearly communicated a closed door boundary."
            },

            {
                text: "Say nothing and hope they stop.",

                score: 0,

                skills: [
                    "unclear"
                ],

                feedback:
                    "You did not clearly communicate your boundary. " +
                    "It is okay to tell someone when you want them to stop."
            },

            {
                text: "Move your belongings somewhere else.",

                score: 1,

                skills: [
                    "closed",
                    "nonverbal"
                ],

                feedback:
                    "Moving your belongings can help protect them, but it does not tell the other person what you need. " +
                    "Using your words can make your boundary clearer."
            }

        ]
    },


    /* =====================================================
       Q11
       ===================================================== */

    {
        id: 11,

        skillsPracticed: [
            "partial",
            "closed",
            "clear",
            "verbal"
        ],

        question:
            "A friend wants to talk to you, but you are very tired and need some quiet time.",

        answers: [

            {
                text: "“I need some quiet time. Can we talk tomorrow?”",

                score: 2,

                skills: [
                    "partial",
                    "clear",
                    "verbal",
                    "polite"
                ],

                feedback:
                    "Nice job! You communicated a partially closed boundary. " +
                    "You said no for now and gave another time to talk."
            },

            {
                text: "“I'm tired. I don't want to talk right now.”",

                score: 2,

                skills: [
                    "closed",
                    "clear",
                    "verbal"
                ],

                feedback:
                    "Great job! You clearly communicated a closed door boundary."
            },

            {
                text: "“Okay,” and listen even though you don't want to.",

                score: 0,

                skills: [
                    "open",
                    "verbal"
                ],

                feedback:
                    "You did not clearly communicate what you needed. " +
                    "Remember, it is okay to ask for quiet time."
            },

            {
                text: "Walk away without saying anything.",

                score: 1,

                skills: [
                    "closed",
                    "nonverbal",
                    "unclear"
                ],

                feedback:
                    "Walking away shows that you may not want to talk, but using your words would make your boundary clearer."
            }

        ]
    },


    /* =====================================================
       Q12
       ===================================================== */

    {
        id: 12,

        skillsPracticed: [
            "closed",
            "clear",
            "verbal",
            "safety"
        ],

        question:
            "Someone you don't know asks you to go somewhere with them. You don't know where they want to take you.",

        answers: [

            {
                text: "“No. I'm staying here.”",

                score: 2,

                skills: [
                    "closed",
                    "clear",
                    "verbal",
                    "safety"
                ],

                feedback:
                    "Great job! You clearly communicated a closed door boundary and kept yourself safe."
            },

            {
                text: "“No, thank you.”",

                score: 2,

                skills: [
                    "closed",
                    "clear",
                    "verbal",
                    "polite",
                    "safety"
                ],

                feedback:
                    "Nice job! You clearly said no and did not need to give a long explanation."
            },

            {
                text: "Go with them to see where they are going.",

                score: 0,

                skills: [
                    "open",
                    "safety-risk"
                ],

                feedback:
                    "This could be unsafe. When someone you don't know asks you to go somewhere, " +
                    "it is okay to say no and stay with people you trust."
            },

            {
                text: "Ask them where they are going and then decide.",

                score: 1,

                skills: [
                    "partial",
                    "verbal",
                    "safety"
                ],

                feedback:
                    "Asking questions can sometimes be helpful, but you do not have to go with someone you don't know. " +
                    "When you feel unsure or uncomfortable, it is okay to say no."
            }

        ]
    },


    /* =====================================================
       Q13
       ===================================================== */

    {
        id: 13,

        skillsPracticed: [
            "closed",
            "clear",
            "verbal"
        ],

        question:
            "Someone asks to look through your backpack. You don't want them to.",

        answers: [

            {
                text: "“No, please don't look through my backpack.”",

                score: 2,

                skills: [
                    "closed",
                    "clear",
                    "verbal",
                    "polite"
                ],

                feedback:
                    "Great job! You clearly communicated a closed door boundary."
            },

            {
                text: "“I don't want you to look through my things.”",

                score: 2,

                skills: [
                    "closed",
                    "clear",
                    "verbal"
                ],

                feedback:
                    "Nice job! You clearly communicated what you did not want."
            },

            {
                text: "“Okay, but only for a minute.”",

                score: 1,

                skills: [
                    "partial",
                    "verbal"
                ],

                feedback:
                    "You communicated a partially closed boundary. " +
                    "If you do not want them to look through your backpack, it is okay to say no."
            },

            {
                text: "Hand them your backpack.",

                score: 0,

                skills: [
                    "open",
                    "nonverbal"
                ],

                feedback:
                    "You communicated an open boundary even though you did not want them to look through your backpack."
            }

        ]
    },


    /* =====================================================
       Q14
       ===================================================== */

    {
        id: 14,

        skillsPracticed: [
            "open",
            "partial",
            "clear",
            "verbal"
        ],

        question:
            "Your friend asks if they can use your headphones. You are okay with letting them use them for a few minutes.",

        answers: [

            {
                text: "“Sure, but please give them back in five minutes.”",

                score: 2,

                skills: [
                    "partial",
                    "clear",
                    "verbal",
                    "polite"
                ],

                feedback:
                    "Great job! You communicated a partially open boundary. " +
                    "You said yes, but also explained your limit."
            },

            {
                text: "“Yes, you can use them.”",

                score: 2,

                skills: [
                    "open",
                    "clear",
                    "verbal",
                    "polite"
                ],

                feedback:
                    "Nice job! You clearly communicated an open boundary."
            },

            {
                text: "“No. Don't touch them.”",

                score: 0,

                skills: [
                    "closed",
                    "clear",
                    "verbal"
                ],

                feedback:
                    "You communicated a closed boundary, but the question says you are okay with sharing your headphones for a few minutes."
            },

            {
                text: "Hand them over without saying anything.",

                score: 1,

                skills: [
                    "open",
                    "nonverbal",
                    "unclear"
                ],

                feedback:
                    "You communicated an open boundary with your actions, but using your words can make your limit clearer."
            }

        ]
    },


    /* =====================================================
       Q15
       ===================================================== */

    {
        id: 15,

        skillsPracticed: [
            "closed",
            "clear",
            "verbal",
            "nonverbal",
            "safety"
        ],

        question:
            "Someone keeps standing very close to you after you have asked them to move back.",

        answers: [

            {
                text: "Move to a safer place and tell a trusted person.",

                score: 2,

                skills: [
                    "closed",
                    "clear",
                    "nonverbal",
                    "safety"
                ],

                feedback:
                    "Great job! You communicated your need for space and got help when the person did not respect your boundary."
            },

            {
                text: "“Please give me some space.”",

                score: 2,

                skills: [
                    "closed",
                    "clear",
                    "verbal",
                    "polite"
                ],

                feedback:
                    "Nice job! You clearly communicated a closed door boundary."
            },

            {
                text: "Stay there and say nothing.",

                score: 0,

                skills: [
                    "unclear",
                    "safety-risk"
                ],

                feedback:
                    "You did not clearly communicate your boundary. " +
                    "If someone makes you uncomfortable, it is okay to speak up and get help."
            },

            {
                text: "Push the person away.",

                score: 0,

                skills: [
                    "closed",
                    "safety-risk"
                ],

                feedback:
                    "You may be feeling very uncomfortable, but pushing someone could hurt them or make the situation worse. " +
                    "Try moving away and getting help from a trusted person."
            }

        ]
    },


    /* =====================================================
       Q16
       ===================================================== */

    {
        id: 16,

        skillsPracticed: [
            "closed",
            "clear",
            "verbal",
            "polite"
        ],

        question:
            "You are talking with someone, but they keep interrupting you. You want them to let you finish.",

        answers: [

            {
                text: "“Please let me finish talking.”",

                score: 2,

                skills: [
                    "closed",
                    "clear",
                    "verbal",
                    "polite"
                ],

                feedback:
                    "Great job! You clearly and politely communicated your boundary."
            },

            {
                text: "“Can you wait until I'm finished?”",

                score: 2,

                skills: [
                    "closed",
                    "clear",
                    "verbal",
                    "polite"
                ],

                feedback:
                    "Nice job! You clearly communicated what you need."
            },

            {
                text: "Stop talking and let them take over.",

                score: 0,

                skills: [
                    "unclear",
                    "nonverbal"
                ],

                feedback:
                    "You did not communicate your boundary. " +
                    "It is okay to ask someone to let you finish speaking."
            },

            {
                text: "Yell at them to stop.",

                score: 1,

                skills: [
                    "closed",
                    "clear",
                    "verbal"
                ],

                feedback:
                    "You communicated a closed boundary, but yelling can make the situation worse. " +
                    "Try using a calm, clear voice to tell them what you need."
            }

        ]
    }

];
