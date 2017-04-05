var madlibs =
{
	"poems":
	[
		"#poetryLines#"
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
		"Planty plant #plant#",
		"#clearing.capitalize# your #ineffableAspect# of #unwantedThoughts#, #ritualCommand#.",
		"With #adjective.a# #bodyPart#, #ritualCommand#.",
		"With #positiveAttribute#, #ritualCommand#.",
		"With the #positiveAttribute# of #person.a#, #ritualCommand#."
	],
	"plant":
	[
		"Clamatis and #roots#",
		"#roots# #poetryLine#",
		"Yikes this is a test #roots#",
	
	],
	
	"roots":
	[
		"taproot", "entertwined roots", "roots", "new growth", "deep roots", "pursuant to"
	],
	"plantExperience":
	[
		"#roots# #roots# #roots# and #roots#", "#plant#", "#about# their job"
		]
}
