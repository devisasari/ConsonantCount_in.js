/* 
Consonant Count
Have the function ConsonantCount(str) take the str string parameter being passed and return the number of consonants the string contains.
Examples

Input: "Hello World"  
Output: 7 

Input: "How Many Consonants Are There In The Sentence I Wrote"
Output: 30

*/

function ConsonantCount(str) { 

    let stringArray = str.toLowerCase().replace(/\s\g/, '').split('')
    let vowels = ['a', 'e', 'i', 'u', 'o', ' '];
  
    for (let i = 0; i <= stringArray.length - 1; i++) {
      for (let j = 0; j <=vowels.length - 1; j++) {
        if (stringArray[i] === vowels[j]) {
          stringArray.splice(i, 1)
          str = stringArray.length;
        }
      }
    }  
    return str; 
  }
     
console.log(ConsonantCount("Hello World")); //Output 7

console.log(ConsonantCount("How Many Consonants Are There In The Sentence I Wrote")); //Output 30 


// IMPORTANT: Space is also a character. Since the purpose of my aim is to count consonants, I wrote the space as vowels. 