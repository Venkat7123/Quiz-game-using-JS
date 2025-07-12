let readlinesync = require("readline-sync");
let kuler = require("kuler");

let score = 0;

let userName = readlinesync.question('Enter Your Name: ');
console.log(kuler(`\nHello ${userName}! Welcome to Quizames!`, '#f7ff00'))
const database = {
    data: [
        {
            question: `What will be the output of the following code? "console.log(typeof null);"`,
            options: {
                a: "null",
                b: "object",
                c: "undefined",
                d: "number"
            },
            correctAnswer: 'b'
        },
        {
            question: ' Which of the following will result in true for "0 == false"',
            options: {
                a: 'true',
                b: 'false',
                c: 'error',
                d: 'undefined'
            },
            correctAnswer: 'a'
        },
        {
            question: 'Which statement is true about let keyword in JavaScript?',
            options: {
                a: 'It is function-scoped like var.',
                b: 'It allows re-declaration in the same block.',
                c: 'It is block-scoped and can be updated.',
                d: 'It cannot be used in loops.'
            },
            correctAnswer: 'c'
        }
    ]
}

const leaderboard = {
    data: [
        {
            Name: 'AAA',
            score: 3
        },
        {
            Name: 'BBB',
            score: 1
        },
        {
            Name: 'CCC',
            score: 2
        }
    ]
}

function checkAns(userAns, correctAns) {
    if (userAns === correctAns) {
        score++;
        console.log(kuler('Correct Answer.', '#0cff00'))
    }
    else {
        console.log(kuler('Incorrect Answer.', '#ff0000'));
        console.log(kuler(`Correct Answer is: ${correctAns}`, '#001bff'));
    }
}

function showQuestions(database) {
    for (let i = 0; i < database.data.length; i++) {
        console.log(`\nQ${i + 1} - ${database.data[i].question}\n`);
        for (let key in database.data[i].options) {
            console.log(`${key} : ${database.data[i].options[key]}`);
        }
        let userAns = readlinesync.question('\nEnter your choice (a/b/c/d): ').toLowerCase();
        checkAns(userAns, database.data[i].correctAnswer);
    }
}

function showLeaderboard(leaderboard) {
    leaderboard.data.push({ Name: userName, score: score })
    let sortedScore = leaderboard.data.sort((a, b) => b.score - a.score);
    console.log(kuler('\nLeaderBoard🎉🏆\n', '#ff0080'));
    for (let leader of sortedScore) {
        console.log(kuler(`${leader.Name} - ${leader.score}`, '#ff8b00'));
    }
}
showQuestions(database);
console.log(kuler(`\nYour score: ${score}`, '#921ff8'));
showLeaderboard(leaderboard);