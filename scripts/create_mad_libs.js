/**
 * /scripts/create_mad_libs.js
 * Chooses a random mad lib and applies it to input from the user to
 * create a very short story.
 * By        : Leomar Duran <https://github.com/lduran2>
 * When      : 2021-10-04t18:12
 * Where     : Community College of Philadelphia
 * For       : CIS 114/JavaScript I
 * Version   : 1.1.1
 *
 * CHANGELOG :
 *     v1.1.1 - 2021-10-04t18:12
 *         refactored function out of templates
 *         set up changelog
 *
 *     v1.1 - 2021-10-04t17:20
 *         ask for a phrase of each type for that mad lib
 *
 *     v1.0 - 2021-10-04t17:12
 *         created and tested template function
 */

/* all of the mad libs */
const MAD_LIBS = [
	{
		'template': '${input[0]}, ${input[1]}, ${input[2]}, ${input[3]}, ${input[4]}, ${input[5]}',
		'types': [ 'a number', 'a noun', 'an adjective', 'a verb', 'a number', 'a noun' ]
	}
];

/* choose a random mad lib */
const I_MAD_LIBS = Math.floor(Math.random() * MAD_LIBS.length);	/* generate random number [0, MADLIBS.length[ */
const RANDOM_MAD_LIB = MAD_LIBS[I_MAD_LIBS];	/* choose corresponding mad lib */

/* create the input array */
const INPUT = [];

/* ask for a phrase of each type in RANDOM_MAD_LIB.types */
for (const TYPE of RANDOM_MAD_LIB.types) {
	INPUT.push(prompt(`Please enter ${TYPE}.`));
} /* for (const TYPE of RANDOM_MAD_LIB.types) */

/* apply the template */
/* since template literals are static runtime constants,
 * they need a function wrapper to be compiled dynamically */
const RESULT = new Function('input', 'return `' + RANDOM_MAD_LIB.template + '`;')(INPUT);
/* print the result */
console.log(RESULT);
