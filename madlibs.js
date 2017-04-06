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
	//#person.a# a/an
	//#person.s# -- plural
	//.pluralize
	//.ed
	//.ing
	//#[someAction]someSymbol# -- for saving info
	//if you need to add a character such as "", add a backslash  to have it read as that character and not as code
	//Nesting New grammars: make sure they are a defined grammar, but when defining them, they follow the same
	//syntax as the poetry line example below. When referred to in another string, add ## around them
	//to define a grammar, see example of poetryLine below

	"poetryLine":
	[
		"#indigenousPlants#\, #indigenousPlants#\, #indigenousPlants#\, #indigenousPlants#\",
		"#latinIndigenous#\, #latinIndigenous#\, #latinIndigenous#\, #latinIndigenous#\"
		"You have named us to contain yourselves - #latinIndigenous#\, #indigenousPlants#\,#indigenousPlants"
	],
	
	"phraseSnippets":
	[
		"xxxxxxxxxxx",
		"xxxxxxxxxxx",
		"xxxxxxxxxxx"
	
	],

		"plantVerbs":
	[
		"rustle", "entangle", "grow", "wither", "creep", "anchor" 

		"plantAdjectives":
	[
		"green", "growing", "creeping", "bending", "flexible", "propagating", "anchored" 
	
	],

	"coreWords":
	[
		"xylem", "phloem", "cambium", "cortex", "protoderm" 
	],

	"stemWords":
	[
		"stem", "stipule", "vascular bundle", "hypocotyl", "meristem", "vine" 
	],

	"flowerWords":
	[
		"pistil", "pedicel", "receptacle", "sepal", "petal", "ovule", "filament", "anther", "stamen", "pollen", "stigma", "calyx", "carpel", "seed", "bud", "flower" 
	],

	"rootWords":
	[
		"taproot", "seminal root", "roots", "tangled roots", "deep roots" 
	],

		"leafWords":
	[
		"leaf", "lamina", "petiole", "veins" 
	
	],
	"nationSymbols":
	[
		"the shamrock", "the lancaster rose", "the thistle", "the fleur-de-lys"
	],
	"indigenousPlants":
	[
		"milkweed", "bergamot", "swamp verbana", "creeping dogwood", "columbine", "sweetgrass", "yarrow", "pearly everlasting", "wild ginger", "snakeroot", "broad-leaved asarabacca", "crowberry", "wild strawberry", "teaberry", "checkerberry", "wintergreen", "boxberry", "Greenland rhododendron", "wild lowbush blueberry", "lingonberry", "anise hyssop", "chive", "grey alder", "mountain alder", "Howell\'s pussytoes \(the Canadian variety\)", "Canadian milkvetch", "grey birch", "Giesecke\'s bellflower", "harlequin corydalis", "fringed sedge", "shallow sedge", "fox-sedge", "hornbeam", "ironwood", "blue-beech", "musclewood", "bittersweet", "fireweed", "willowherb", "green osier", "pagoda dogwood", "tufted hairgrass", "tussock grass", "trick-trefoil", "tickclover", "parasol whitetop", "white aster", "boneset", "grass-leaved goldenrod", "spotted joe-pyeweed", "sheep fescue", "water avens", "ground-ivy", "gill-over-the-ground", "creeping charlie", "alehoof", "tunhoof", "catsfoot", "run-away-robin", "sneezeweed", "rough oxeye", "smooth oxeye", "false sunflower", "cow parsnip", "azure bluet", "Quaker ladies", "winterberry", "northern blueflag", "harlequin blueflag", "dune wild-rye", "sea-lyme grass", "strand wheat", "creeping jenny", "moneywort", "herb twopence", "twopenny thot", "self-heal", "blackeyed susan", "red elderberry", "woolgrass", "goldmoss stonecrop", "goldmoss sedum", "wallpepper", "white stonecrop", "kamchatka", "weihenstephaner gold", "cliff stonecrop", "moss campion", "cushion pink", "alpine catchfly", "goldenrod", "cordgrass", "broadleaf meadowsweet", "hardhack", "steeplebush", "heart-leaved aster", "hairy Michaelmas daisy", "purple-stem aster", "the king of the meadow", "meadow rue", "thyme", "wild thyme", "creeping thyme", "vervain", "violet", "golden zizia" 
	],
	"latinIndigenous":
	[
		"achillea millefolium", "agastache foeniculum", "allium schoenoprasum", "alnus incana rugosa", "alnus viridis crispa", "anaphalis margaritacea", "antennaria howellii canadensis", "asclepias incarnata", "astragalus canadensis", "betula populifolia", "campanula gieseckeana", "capnoides sempervirens", "carex crinita", "carex lurida", "carex vulpinoidea", "carpinus caroliniana", "celastrus scandens", "chamerion angustifolium", "cornus alternifolia", "deschampsia cespitosa", "desmodium canadense", "doellingeria umbellata", "eupatorium perfoliatum", "euthamia graminifolia", "eutrochium maculatum", "festuca ovina", "geum rivale", "glecoma hederacea", "helenium autumnale", "heliopsis helianthoides", "heracleum maximum", "houstonia caerulea", "ilex verticillata", "iris versicolor", "leymus mollis", "lysimachia nummularia", "prunella vulgaris", "rudbeckia hirta", "sambucus racemosa", "scirpus cyperinus", "sedum acre", "sedum album", "sedum ellacombianum", "sedum floriferum", "sedum glaucophyllum", "silene acaulis", "silene suecica", "solidago nemoralis", "spartina pectinata", "spiraea latifolia", "spiraea tomentosa", "symphyotrichum cordifolium", "symphyotrichum novae-angliae", "Symphyotrichum puniceum", "thalictrum pubescens", "thymus serpyllum", "verbena hastata", "viola canadensis", "zizia aurea"
	],
}
