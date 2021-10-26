
// This a text I want to be censored
const text ="Lorem, ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut dolore ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non dolore , sunt in culpa qui officia deserunt mollit anim id est laborum.";

// I want my text to be censored with this word
const censoredWord = 'dolore';

// this is an array of my censoredWord index(I set this in order to count the number of censored words for challeng 1)
const indexOfCensoredWords = [];

const secret = '!!!'

// // this function gives us a text with censored words
function censoredWordFn(text,censoredWord,indexOfCensoredWords,secret){
    const newArr = text.split(' ');

    const arrayOfWords = newArr.map(word => {
        if(word === censoredWord ){
            const idx = newArr.indexOf(word);
            indexOfCensoredWords.push(idx);
            return newArr[idx] = secret
        }else{
            return word
        }
    })
    // the result
    console.log(arrayOfWords.join(' '));
}

censoredWordFn(text, censoredWord,indexOfCensoredWords, secret);


// challenge1:================================================
const countOfChangedWord = indexOfCensoredWords.length;
console.log(countOfChangedWord);

// challenge2====================================================
const textInput = prompt('Please write your text');
const wordCencorInput = prompt('Write a word you want to be censored');
const replacedWordInput = prompt('What do you want to censor your word with?');


function wordReplacerFn(textInput,wordCencorInput,replacedWordInput){
    textInputArr = textInput.split(' ');

    const arrNew = textInputArr.map(word => {
        if(word === wordCencorInput){
            const idx = textInputArr.indexOf(word);
            return textInputArr[idx] = replacedWordInput;
        }else{
            return word
        }
    });

    // the result
    console.log(arrNew.join(' '));
}

wordReplacerFn(textInput,wordCencorInput,replacedWordInput)
