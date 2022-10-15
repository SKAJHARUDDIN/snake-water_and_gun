// code for game

let myFunction = (() => {
    let selectedValue = document.querySelector('.input-select').value;
    // console.log(selectedValue);
    // return selectedValue;

    let user = selectedValue;
    console.log(user);
    let cpuI = Math.floor(Math.random() * 3);
    // console.log(cpuI);
    let cpu = ['snake', 'water', 'gun'][cpuI];
    // console.log(`random pick : ${cpu}`);

    let match = ((user, cpu) => {
        if (user === cpu) {
            return `Nobody, Match is tied`;
        } else if (user == 'snake' && cpu == 'water') {
            return 'user';
        } else if (user == 'snake' && cpu == 'gun') {
            return 'cpu';
        } else if (user == 'water' && cpu == 'snake') {
            return 'cpu';
        } else if (user == 'water' && cpu == 'gun') {
            return 'user';
        } else if (user == 'gun' && cpu == 'water') {
            return 'cpu';
        } else if (user == 'gun' && cpu == 'snake') {
            return 'user';
        }
    });

    let result = match(user, cpu);
    
    let finalResult = ((user, cpu) = {
        if(user){
            return 'Hurrah! You have won the match.';
        } else {
            return 'CPU side won the match';
        }
    });

    let res = finalResult();

    
    
    document.querySelector('#result').innerText = `You have chosen : ${res.toUpperCase()} \nCPU side : ${res.toUpperCase()} \nThe winner is : ${result.toUpperCase()}.`;
});

