# Caesars Cipher
The ROT13 (Rotation by 13 places) algorithm is a simple encryption method used to hide the meaning of a text. It involves replacing each letter of the alphabet with the letter that is 13 positions away, wrapping around the alphabet if the end is reached.
For example, the letter "A" is replaced by the letter "N", the letter "B" by the letter "O", and so on. In this way, the original text is made unreadable without the use of more complex encryption algorithms.
To implement the ROT13 (Rotation by 13 places) algorithm in JavaScript, I created an array called "alph" that contains all the letters of the alphabet. I also created a variable called "key" which indicates the number of positions to shift and an empty string called "newStr" which will contain the encrypted string.

My "rot13" function takes a string as input and iterates over each character in the string using a for loop. For each character, I perform another iteration to compare the character with each letter in the "alph" array.

If the character matches a letter of the alphabet, I perform a check to see if the index of the letter in the "alph" array plus the encryption key is less than 26 (i.e. the length of the "alph" array). If so, I add the letter of the alphabet that corresponds to the index of the letter plus the encryption key to the encrypted string. Otherwise, I add the letter of the alphabet that corresponds to the index of the letter plus the encryption key minus 26 to the encrypted string (to "wrap around" the "alph" array if the end is reached).

If the character does not match a letter of the alphabet, I add it directly to the encrypted string.

Finally, the function returns the encrypted string.
