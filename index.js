function writeCards(names, event){
    const messages = [];
    for (let i = 0; i < names.length; i++){
            messages[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    }
    return messages;
}

function countDown(number){
    while (number > -1){
        console.log(number);
        number--;
    }
}