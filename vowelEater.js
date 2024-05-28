
// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u )
//  in a given string.  Examples "hello"     -->  "hll" "goodbye"   -->  "gdby" "HELLO"     -->
//    "HELLO" don't worry about uppercase vowels

const vowelEater = (str) => {
       return str.split('').filter(a => !a.match(/[aeiou]/))
}