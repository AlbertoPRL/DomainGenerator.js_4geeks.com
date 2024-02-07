
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function start(){
  
    askQuestion();
}

const domainGenerator = () => {
    const pronoun = ['the', 'our', 'one'];
    const adj = ['great', 'big','amazing','thirsty','dizzy',];
    const noun = ['jogger', 'racoon', 'elephant','ant','guy','dog','cat','pub'];
    const domain = ['.com', '.es', '.org', '.us','.net',]

    return `Your new domain name is: "${pronoun[randomIndex(pronoun)]}${adj[randomIndex(adj)]}${noun[randomIndex(noun)]}${domain[randomIndex(domain)]}"`;
}

const randomIndex = (array) => {
    return Math.floor(Math.random() * array.length);
}

const askQuestion = () => {
    rl.question("Type 'yes' to generate a random domain. Type 'no' to terminate: ", (userAnswer) => {
        if (userAnswer.toLowerCase() === "yes") {
            console.log(domainGenerator());
            askQuestion();
        } else {
            rl.close();
        }
    });
};

start();
