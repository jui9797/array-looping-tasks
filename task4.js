/**
 * Task 4 (Hard)
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:

'person working hard a am I'
 */

const statement = 'I am a hard working person'
const statement2 =statement.split(' ')
console.log(statement2);
const reversed =statement2.reverse();
console.log(reversed);
const statement3 =reversed.join(' ');
console.log(statement3);