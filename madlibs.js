var madlibs =
{
	"poems":
	[
		"#[currentLocation:#locationAdj# #location#]poetryLines#"
	],
	"poetryLines":
	[
		"Listen...\
		<ul>\
		<li>#poetryLine#</li>\
		<li>#poetryLine#</li>\
		<li>#poetryLine#</li>\
		<li>#poetryLine#</li>\
		<li>#poetryLine#</li>\
		<li>#poetryLine#</li>\
		<li>#poetryLine#</li>\
		</ul>"
	],

	//useful commands/tags to keep in mind
	//"#poetryLine.capitalize#.""
	//#person.a#
	//if you need to add a character such as "", add a backslash \ to have it read as that character and not as code
	//Nesting New grammars: make sure they are a defined grammar, but when defining them, they follow the same
	//syntax as the poetry line example below. When referred to in another string, add ## around them
	//to define a grammar, see example of poetryLine below
	// "poetryLine":
	// [
	// 	"#ritualCommand.capitalize#.",
	// 	"#clearing.capitalize# your #ineffableAspect# of #unwantedThoughts#, #ritualCommand#.",
	// 	"With #adjective.a# #bodyPart#, #ritualCommand#.",
	// 	"With #positiveAttribute#, #ritualCommand#.",
	// 	"With the #positiveAttribute# of #person.a#, #ritualCommand#."

	"poetryLine":
	[
		"#ritualCommand.capitalize#.",
		"#clearing.capitalize# your #ineffableAspect# of #unwantedThoughts#, #ritualCommand#.",
		"With #adjective.a# #bodyPart#, #ritualCommand#.",
		"With #positiveAttribute#, #ritualCommand#.",
		"With the #positiveAttribute# of #person.a#, #ritualCommand#."
	],
	"ritualCommand":
	[
		"#speakTo# your partner #aboutSomething#",
		"#adverb# #touch# your partner's #bodyPart#",
		"gaze #adverb# into your partner's #ineffableAspect#",
		"say \"#greetingPhrase#\" to your partner",
		"#touch# your partner's #bodyPart# with your #bodyPart#",
		"#gesture# towards your partner",
		"cheek-kiss your partner #kissNumber# times, starting with the #direction# cheek",
		"anoint yourself with #anointingObject.a#",
		"bless the #currentLocation# you are in with #blessing.a#"
	],
	
	"about":
	[
		"about", "concerning", "in relation to", "on the subject of", "on the topic of", "pursuant to", "regarding", "with regards to"
	],
	"aboutSomething":
	[
		#about# the weather", "#about# their day", "#about# their friends and family", "#about# their job",  "#about# their #wellBeing#", "#about# themself", "#about# your mutual acquaintance, who, by the way, says hi", "#about# yourself", "as \"#regalTitle#\"", "in a silly voice", "in your non-native language", "using only gestures and onomatopoeia", "with your hands"

}
