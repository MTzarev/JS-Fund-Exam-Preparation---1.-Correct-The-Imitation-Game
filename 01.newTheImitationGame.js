function theImitationGame(input) {
    let word = input.shift();

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split('|');

        if (command[0] === "Decode") {
            break;
        }

        if (command.includes("Move")) {
            let numLetters = Number(command[1]);
            let movedPart = word.substring(0, numLetters);
            word = word.substring(numLetters) + movedPart;
        } else if (command.includes("Insert")) {
            let index = Number(command[1]);
            let value = command[2];
            word = word.substring(0, index) + value + word.substring(index);
        } else if (command.includes("ChangeAll")) {
            let substring = command[1];
            let replacement = command[2];
            word = word.split(substring).join(replacement);
        }
    }

    console.log(`The decrypted message is: ${word}`);
}
// theImitationGame(['zzHe',
//     'ChangeAll|z|l',
//     'Insert|2|o',
//     'Move|3',
//     'Decode']);
theImitationGame(['owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode']);