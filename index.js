document.getElementById('not-matched').style.display = 'none';
document.getElementById('matched').style.display = 'none';

let screen = document.getElementById('display');
let counter = document.getElementById('tryCounter').innerText;
let testJar = '';
let pinValue = '0';

// rendom generetor number as pin
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

// pin generetor
document.getElementById('generatorBtn').addEventListener("click", () => {
    pinValue = getRndInteger(5000, 9000);
    document.getElementById('generator').value = pinValue;
});

// keypad
const key = document.getElementsByClassName('key');
for (let i = 0; i < key.length; i++) {
    key[i].addEventListener('click', (e) => {
        let keyValue = e.target.innerText;

        if (keyValue == '<') {
            testJar = screen.value.slice(0, screen.value.length - 1);
            screen.value = testJar;
        }
        else if (keyValue == 'C') {
            testJar = '';
            screen.value = testJar;
        }
        else {
            testJar += keyValue;
            screen.value = testJar;
        }
    });
};

// pin match & try counter
document.getElementById('submit').addEventListener('click', () => {
   
    if(counter == 1){
        document.getElementById('submit').style.display = 'none';
        document.getElementById('tryCounter').innerText = 'No';
    }
    else if(testJar == pinValue) {
        document.getElementById('matched').style.display = 'block';
        document.getElementById('not-matched').style.display = 'none';
    }
    else{
        document.getElementById('not-matched').style.display = 'block';
        document.getElementById('matched').style.display = 'none';
        counter --;
        document.getElementById('tryCounter').innerText = counter;
    }
})


