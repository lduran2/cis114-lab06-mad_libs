/* all of the mad libs */
const MAD_LIBS = [
	{
		'template': function (input) { return `${input[0]}, ${input[1]}, ${input[2]}, ${input[3]}, ${input[4]}, ${input[5]}`; },
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
const RESULT = RANDOM_MAD_LIB.template(INPUT);
/* print the result */
console.log(RESULT);
