/* =========================================================
   COMMUNICATING YOUR BOUNDARIES
   Branching Scenario Activity

   Q1-Q3 = Initial assessment
   Q4-Q6 = Practice questions

   To add more questions later, add them to the
   QUESTIONS array. You should not need to change
   the rest of the program.
   ========================================================= */


/* =========================================================
   QUESTION DATA
   ========================================================= */

const QUESTIONS = [

    /* -----------------------------------------------------
       Q1
       ----------------------------------------------------- */

    {
        id: 1,

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


    /* -----------------------------------------------------
       Q2
       ----------------------------------------------------- */

    {
        id: 2,

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


    /* -----------------------------------------------------
       Q3
       ----------------------------------------------------- */

    {
        id: 3,

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


    /* -----------------------------------------------------
       Q4
       ----------------------------------------------------- */

    {
        id: 4,

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


    /* -----------------------------------------------------
       Q5
       ----------------------------------------------------- */

    {
        id: 5,

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


    /* -----------------------------------------------------
       Q6
       ----------------------------------------------------- */

    {
        id: 6,

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


/* =========================================================
   ACTIVITY SETTINGS
   ========================================================= */

// Questions 1-3 are the initial assessment.
const ASSESSMENT_QUESTIONS = 3;

// Questions after the assessment.
const PRACTICE_START = 3;


/* =========================================================
   LEARNER DATA
   ========================================================= */

let currentQuestionIndex = 0;

let learner = {
    totalScore: 0,

    skills: {
        closed: 0,
        open: 0,
        partial: 0,
        clear: 0,
        unclear: 0,
        verbal: 0,
        nonverbal: 0,
        polite: 0,
        safety: 0,
        safetyRisk: 0
    }
};


/* =========================================================
   HTML ELEMENTS
   ========================================================= */

const questionScreen =
    document.getElementById("question-screen");

const feedbackScreen =
    document.getElementById("feedback-screen");

const endScreen =
    document.getElementById("end-screen");

const questionText =
    document.getElementById("question-text");

const answerButtons =
    document.getElementById("answer-buttons");

const feedbackText =
    document.getElementById("feedback-text");

const feedbackHeading =
    document.getElementById("feedback-heading");

const continueButton =
    document.getElementById("continue-button");

const restartButton =
    document.getElementById("restart-button");

const progressText =
    document.getElementById("progress-text");

const progressFill =
    document.getElementById("progress-fill");

const endMessage =
    document.getElementById("end-message");


/* =========================================================
   START THE ACTIVITY
   ========================================================= */

showQuestion();


/* =========================================================
   SHOW QUESTION
   ========================================================= */

function showQuestion() {

    const question =
        QUESTIONS[currentQuestionIndex];

    questionScreen.classList.remove("hidden");
    feedbackScreen.classList.add("hidden");
    endScreen.classList.add("hidden");

    questionText.textContent =
        question.question;

    answerButtons.innerHTML = "";

    question.answers.forEach((answer, index) => {

        const button =
            document.createElement("button");

        button.className = "answer-button";

        button.textContent =
            answer.text;

        button.addEventListener("click", function() {

            selectAnswer(answer);

        });

        answerButtons.appendChild(button);

    });

    updateProgress();
}


/* =========================================================
   SELECT ANSWER
   ========================================================= */

function selectAnswer(answer) {

    // Add the answer's score.
    learner.totalScore += answer.score;

    // Add the answer's skills.
    recordSkills(answer.skills);

    // Show feedback.
    showFeedback(answer);

}


/* =========================================================
   RECORD SKILLS
   ========================================================= */

function recordSkills(skills) {

    skills.forEach(skill => {

        if (skill === "safety-risk") {

            learner.skills.safetyRisk++;

        } else if (learner.skills.hasOwnProperty(skill)) {

            learner.skills[skill]++;

        }

    });

}


/* =========================================================
   SHOW FEEDBACK
   ========================================================= */

function showFeedback(answer) {

    questionScreen.classList.add("hidden");
    feedbackScreen.classList.remove("hidden");

    feedbackHeading.textContent =
        getFeedbackHeading(answer.score);

    feedbackText.textContent =
        answer.feedback;

}


/* =========================================================
   FEEDBACK HEADING
   ========================================================= */

function getFeedbackHeading(score) {

    if (score === 2) {

        return "Great job!";

    }

    if (score === 1) {

        return "Good thinking!";

    }

    return "Let's think about this one.";

}


/* =========================================================
   CONTINUE BUTTON
   ========================================================= */

continueButton.addEventListener("click", function() {

    currentQuestionIndex++;

    /*
     * After Q3, determine which branch the learner
     * should receive.
     */
    if (currentQuestionIndex === ASSESSMENT_QUESTIONS) {

        currentQuestionIndex =
            chooseNextQuestion();

    }

    /*
     * If we have run out of questions, end the activity.
     */
    if (currentQuestionIndex >= QUESTIONS.length) {

        showEndScreen();

    } else {

        showQuestion();

    }

});


/* =========================================================
   CHOOSE NEXT QUESTION
   =========================================================

   This is the part that creates the branching.

   Right now we use the learner's Q1-Q3 responses
   to determine which skill needs practice.

   As you add more questions, this function can become
   more sophisticated without changing the question data.
   ========================================================= */

function chooseNextQuestion() {

    const skills =
        learner.skills;


    /*
     * If the learner has difficulty communicating
     * closed boundaries, give them Q4.
     */
    if (skills.closed === 0) {

        return 3;

    }


    /*
     * If the learner relies heavily on unclear or
     * nonverbal communication, give them Q4.
     */
    if (skills.unclear > 0) {

        return 3;

    }


    /*
     * If the learner needs practice with partially
     * closed boundaries, give them Q5.
     */
    if (skills.partial > 0) {

        return 4;

    }


    /*
     * If they need additional safety practice,
     * give them Q6.
     */
    if (skills.safetyRisk > 0) {

        return 5;

    }


    /*
     * If they are doing well across the first
     * three questions, start with Q4.
     */
    return 3;

}


/* =========================================================
   PROGRESS BAR
   ========================================================= */

function updateProgress() {

    const displayQuestion =
        currentQuestionIndex + 1;

    progressText.textContent =
        "Question " + displayQuestion;

    const percentage =
        (displayQuestion / QUESTIONS.length) * 100;

    progressFill.style.width =
        percentage + "%";

}


/* =========================================================
   END SCREEN
   ========================================================= */

function showEndScreen() {

    questionScreen.classList.add("hidden");
    feedbackScreen.classList.add("hidden");
    endScreen.classList.remove("hidden");

    endMessage.textContent =
        "You practiced several ways to communicate your boundaries. " +
        "Remember that it is okay to communicate what you want and need.";

    progressText.textContent =
        "Finished";

    progressFill.style.width =
        "100%";

}


/* =========================================================
   RESTART
   ========================================================= */

restartButton.addEventListener("click", function() {

    currentQuestionIndex = 0;

    learner = {
        totalScore: 0,

        skills: {
            closed: 0,
            open: 0,
            partial: 0,
            clear: 0,
            unclear: 0,
            verbal: 0,
            nonverbal: 0,
            polite: 0,
            safety: 0,
            safetyRisk: 0
        }
    };

    showQuestion();

});
