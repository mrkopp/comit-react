const favoriteMovies = prompt('Please enter your 3 favorite movies, separated by a comma: ');

const response = favoriteMovies.split(', ');
console.log(response);

const sentenceToReverse = prompt('Please enter a sentence you would like reversed: ');

function reverseString(str) {

    return [...str].reverse().join('');

}
reverseString(sentenceToReverse);
alert(reverseString(sentenceToReverse));

