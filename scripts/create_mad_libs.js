/**
 * /scripts/create_mad_libs.js
 * Chooses a random mad lib and applies it to input from the user to
 * create a very short story.
 * By        : Leomar Duran <https://github.com/lduran2>
 * When      : 2021-10-11t13:15
 * Where     : Community College of Philadelphia
 * For       : CIS 114/JavaScript I
 * Version   : 2.1.0
 * Canonical : https://github.com/lduran2/cis114-lab06-mad_libs
 *
 * CHANGELOG :
 *     v2.1.0 - 2021-10-11t13:15
 *         added the nouns object for each mad lib
 *
 *     v2.0.0 - 2021-10-11t12:46
 *         added support for multiple rounds
 *
 *     v1.2.0 - 2021-10-04t23:21
 *         added the 3 billy goats mad lib
 *
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
		nouns: {
			formation: 'river',
			measurements: {
				lengthIn: 'meters',
				lengthOut: ['feet', 'inches'],
				weight: 'lbs'
			},
			timeOfDay: 'day',
			being: 'troll'
		},
		rounds: [
			{
				template: 'Once upon a time, there were ${parseInt(input[0], 10) + 2} little ${input[1]}. They protected a ${input[2]} that spans a ${nouns.formation} ${Math.floor((parseInt(input[3], 10) + 3)*3.28)} ${nouns.measurements.lengthOut[0]} ${Math.floor((parseInt(input[3], 10) + 3)*39.37) % 12} ${nouns.measurements.lengthOut[1]} across. One ${nouns.timeOfDay}, a ${nouns.being} wanted to cross the ${input[2]} to ${input[4]}. It was a strong ${nouns.being}, weighing in at ${parseInt(input[5], 10) + 150} ${nouns.measurements.weight}.',
				types: [ 'a number', 'an animal (plural)', 'a landmark', 'a length [in ${nouns.measurements.lengthIn}]', 'a fun activity', 'a weight [in ${nouns.measurements.weight}]' ]
			}
		]
	}
];

/* choose a random mad lib */
const I_MAD_LIBS = Math.floor(Math.random() * MAD_LIBS.length);	/* generate random number [0, MADLIBS.length[ */
const RANDOM_MAD_LIB = MAD_LIBS[I_MAD_LIBS];	/* choose corresponding mad lib */

/* create the input array */
/* this input array will contain all types for every round of this
 * single mad lib */
const INPUT = [];

/* loop through each round of this mad lib */
for (const ROUND of RANDOM_MAD_LIB.rounds) {
	/* ask for a phrase of each type in ROUND.types */
	for (const TYPE of ROUND.types) {
		const PROMPT_MESSAGE = new Function('nouns', 'return `Please enter ' + TYPE + '.`;')(RANDOM_MAD_LIB.nouns);
		INPUT.push(prompt(PROMPT_MESSAGE));
	} /* end for (const TYPE of ROUND.types) */

	/* apply the template */
	/* since template literals are static runtime constants,
	 * they need a function wrapper to be compiled dynamically */
	const RESULT = new Function('input', 'nouns', 'return `' + ROUND.template + '`;')(INPUT, RANDOM_MAD_LIB.nouns);
	/* print the result */
	console.log(RESULT);
} /* end for (const ROUND of RANDOM_MAD_LIB.rounds) */
