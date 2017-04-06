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
	//if you need to add a character such as "", add a backslash  to have it read as that character and not as code
	//Nesting New grammars: make sure they are a defined grammar, but when defining them, they follow the same
	//syntax as the poetry line example below. When referred to in another string, add ## around them
	//to define a grammar, see example of poetryLine below

	"poetryLine":
	[
		"#indigenousPlants#, #indigenousPlants#, #indigenousPlants#, #indigenousPlants#, #indigenousPlants#",
		"#latinIndigenous#, "#latinIndigenous#, #latinIndigenous#, "#latinIndigenous#, #latinIndigenous#",
		"Planty plant #plant# #roots#",
		"#roots# your #plant# of #plant# #roots#"
	],
	"plant":
	[
		"Clamatis and #roots#",
		"#roots# #poetryLine#",
		"Yikes this is a test #roots#"
	
	],
	
	"roots":
	[
		"taproot", "entertwined roots", "roots", "new growth", "deep roots" 
	],
	"nationSymbols":
	[
		"the shamrock", "the lancaster rose", "the thistle", "the fleur-de-lys"
	],
	"indigenousPlants":
	[
		"milkweed", "bergamot", "swamp verbana", "creeping dogwood", "columbine", "sweetgrass", "yarrow", "pearly everlasting", "wild ginger", "snakeroot", "broad-leaved asarabacca", "crowberry", "wild strawberry", "teaberry", "checkerberry", "wintergreen", "boxberry", "Greenland rhododendron", "wild lowbush blueberry", "lingonberry", "anise hyssop", "chive", "grey alder", "mountain alder", "Howell\'s pussytoes \(the Canadian variety\)", "Canadian milkvetch", "grey birch", "Giesecke\'s bellflower", "harlequin corydalis", "fringed sedge", "shallow sedge", "fox-sedge", "hornbeam", "ironwood", "blue-beech", "musclewood", "bittersweet", "fireweed", "willowherb", "green osier", "pagoda dogwood", "tufted hairgrass", "tussock grass", "trick-trefoil", "tickclover", "parasol whitetop", "white aster", "boneset", "grass-leaved goldenrod", ""
		]
			"latinIndigenous":
	[
		"achillea millefolium", "agastache foeniculum", "allium schoenoprasum", "alnus incana rugosa", "alnus viridis crispa", "anaphalis margaritacea", "antennaria howellii canadensis", "asclepias incarnata", "astragalus canadensis", "betula populifolia", "campanula gieseckeana", "capnoides sempervirens", "carex crinita", "carex lurida", "carex vulpinoidea", "carpinus caroliniana", "celastrus scandens", "chamerion angustifolium", "cornus alternifolia", "deschampsia cespitosa", "desmodium canadense", "doellingeria umbellata", "eupatorium perfoliatum", "euthamia graminifolia", ""
	],
}
