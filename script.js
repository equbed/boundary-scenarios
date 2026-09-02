/* =========================================================
   COMMUNICATING YOUR BOUNDARIES
   ACTIVITY ENGINE

   IMPORTANT:

   You normally do NOT need to edit this file when adding
   questions.

   Add your questions to questions.js instead.

   ========================================================= */


/* =========================================================
   SETTINGS
   ========================================================= */

// The first three questions are our initial assessment.
const ASSESSMENT_COUNT = 3;


/*
 * Maximum number of questions the learner will see.
 *
 * Change this later if you want a longer or shorter activity.
 */
const MAX_QUESTIONS_PER_ACTIVITY = 10;


/* =========================================================
   LEARNER DATA
   ========================================================= */

let learner = createNewLearner();


function createNewLearner() {

    return {

        totalScore: 0,

        questionsAnswered: [],

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

}


/* =========================================================
   CURRENT QUESTION
   ========================================================= */

let currentQuestion = null;


/* =========================================================
   HTML ELEMENTS
   ========================================================= */

const questionScreen =
    document.getElementById(
        "question-screen"
    );

const feedbackScreen =
    document.getElementById(
        "feedback-screen"
    );

const endScreen =
    document.getElementById(
        "end-screen"
    );

const questionText =
    document.getElementById(
        "question-text"
    );

const answerButtons =
    document.getElementById(
        "answer-buttons"
    );

const feedbackText =
    document.getElementById(
        "feedback-text"
    );

const feedbackHeading =
    document.getElementById(
        "feedback-heading"
    );

const continueButton =
    document.getElementById(
        "continue-button"
    );

const restartButton =
    document.getElementById(
        "restart-button"
    );

const progressText =
    document.getElementById(
        "progress-text"
    );

const progressFill =
    document.getElementById(
        "progress-fill"
    );

const endMessage =
    document.getElementById(
        "end-message"
    );


/* =========================================================
   START ACTIVITY
   ========================================================= */

startActivity();


function startActivity() {

    learner =
        createNewLearner();

    showNextQuestion();

}


/* =========================================================
   SHOW NEXT QUESTION
   ========================================================= */

function showNextQuestion() {

    /*
     * During the first three questions, use Q1, Q2, Q3
     * in order.
     */

    if (
        learner.questionsAnswered.length
        < ASSESSMENT_COUNT
    ) {

        currentQuestion =
            QUESTIONS[
                learner.questionsAnswered.length
            ];

    }

    /*
     * After the first three questions, choose a question
     * based on the learner's skills.
     */

    else {

        currentQuestion =
            chooseAdaptiveQuestion();

    }


    /*
     * If there is no question left, finish.
     */

    if (!currentQuestion) {

        showEndScreen();

        return;

    }


    showQuestion();

}


/* =========================================================
   SHOW QUESTION
   ========================================================= */

function showQuestion() {

    questionScreen.classList.remove(
        "hidden"
    );

    feedbackScreen.classList.add(
        "hidden"
    );

    endScreen.classList.add(
        "hidden"
    );


    questionText.textContent =
        currentQuestion.question;


    answerButtons.innerHTML = "";


    currentQuestion.answers.forEach(
        function(answer) {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "answer-button";


            button.textContent =
                answer.text;


            button.addEventListener(
                "click",
                function() {

                    selectAnswer(answer);

                }
            );


            answerButtons.appendChild(
                button
            );

        }
    );


    updateProgress();

}


/* =========================================================
   SELECT ANSWER
   ========================================================= */

function selectAnswer(answer) {

    /*
     * Add the score.
     */

    learner.totalScore +=
        answer.score;


    /*
     * Record the skills demonstrated.
     */

    recordSkills(
        answer.skills
    );


    /*
     * Remember that this question has
     * already been completed.
     */

    learner.questionsAnswered.push(
        currentQuestion.id
    );


    /*
     * Show feedback.
     */

    showFeedback(answer);

}


/* =========================================================
   RECORD SKILLS
   ========================================================= */

function recordSkills(skills) {

    skills.forEach(
        function(skill) {

            if (
                skill === "safety-risk"
            ) {

                learner.skills.safetyRisk++;

                return;

            }


            if (
                learner.skills.hasOwnProperty(
                    skill
                )
            ) {

                learner.skills[skill]++;

            }

        }
    );

}


/* =========================================================
   SHOW FEEDBACK
   ========================================================= */

function showFeedback(answer) {

    questionScreen.classList.add(
        "hidden"
    );

    feedbackScreen.classList.remove(
        "hidden"
    );


    feedbackHeading.textContent =
        getFeedbackHeading(
            answer.score
        );


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
   ADAPTIVE QUESTION SELECTION
   =========================================================

   This is where the activity decides what the learner
   should practice next.

   The learner's previous questions are excluded.

   ========================================================= */

function chooseAdaptiveQuestion() {

    /*
     * Get questions the learner has NOT answered yet.
     */

    const availableQuestions =
        QUESTIONS.filter(
            function(question) {

                return !learner.questionsAnswered.includes(
                    question.id
                );

            }
        );


    /*
     * If there are no questions left, finish.
     */

    if (
        availableQuestions.length === 0
    ) {

        return null;

    }


    /*
     * If the learner has a safety-risk response,
     * prioritize a safety question.
     */

    if (
        learner.skills.safetyRisk > 0
    ) {

        const safetyQuestion =
            availableQuestions.find(
                function(question) {

                    return question.skillsPracticed.includes(
                        "safety"
                    );

                }
            );


        if (safetyQuestion) {

            return safetyQuestion;

        }

    }


    /*
     * If the learner has used unclear communication,
     * prioritize a question that practices clear
     * communication.
     */

    if (
        learner.skills.unclear > 0
    ) {

        const clarityQuestion =
            availableQuestions.find(
                function(question) {

                    return question.skillsPracticed.includes(
                        "clear"
                    );

                }
            );


        if (clarityQuestion) {

            return clarityQuestion;

        }

    }


    /*
     * If the learner needs closed-boundary practice,
     * prioritize a closed-boundary question.
     */

    if (
        learner.skills.closed === 0
    ) {

        const closedQuestion =
            availableQuestions.find(
                function(question) {

                    return question.skillsPracticed.includes(
                        "closed"
                    );

                }
            );


        if (closedQuestion) {

            return closedQuestion;

        }

    }


    /*
     * If the learner has demonstrated some partial
     * boundaries, give them more practice with that.
     */

    if (
        learner.skills.partial > 0
    ) {

        const partialQuestion =
            availableQuestions.find(
                function(question) {

                    return question.skillsPracticed.includes(
                        "partial"
                    );

                }
            );


        if (partialQuestion) {

            return partialQuestion;

        }

    }


    /*
     * If the learner needs more verbal communication,
     * find a question that practices it.
     */

    if (
        learner.skills.verbal === 0
    ) {

        const verbalQuestion =
            availableQuestions.find(
                function(question) {

                    return question.skillsPracticed.includes(
                        "verbal"
                    );

                }
            );


        if (verbalQuestion) {

            return verbalQuestion;

        }

    }


    /*
     * If none of the special conditions apply,
     * choose the first available question.
     */

    return availableQuestions[0];

}


/* =========================================================
   CONTINUE BUTTON
   ========================================================= */

continueButton.addEventListener(
    "click",
    function() {

        /*
         * Stop if we've reached our maximum activity length.
         */

        if (
            learner.questionsAnswered.length
            >= MAX_QUESTIONS_PER_ACTIVITY
        ) {

            showEndScreen();

            return;

        }


        showNextQuestion();

    }
);


/* =========================================================
   PROGRESS
   ========================================================= */

function updateProgress() {

    const questionNumber =
        learner.questionsAnswered.length + 1;


    progressText.textContent =
        "Question " + questionNumber;


    const percentage =
        (
            learner.questionsAnswered.length
            /
            MAX_QUESTIONS_PER_ACTIVITY
        ) * 100;


    progressFill.style.width =
        percentage + "%";

}


/* =========================================================
   END SCREEN
   ========================================================= */

function showEndScreen() {

    questionScreen.classList.add(
        "hidden"
    );

    feedbackScreen.classList.add(
        "hidden"
    );

    endScreen.classList.remove(
        "hidden"
    );


    progressText.textContent =
        "Finished";


    progressFill.style.width =
        "100%";


    endMessage.textContent =
        "You practiced several ways to communicate your boundaries. " +

        "Remember that it is okay to communicate what you want and need.";

}


/* =========================================================
   RESTART BUTTON
   ========================================================= */

restartButton.addEventListener(
    "click",
    function() {

        startActivity();

    }
);
