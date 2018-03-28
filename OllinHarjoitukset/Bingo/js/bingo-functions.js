"use strict";

// Elements
const widthInput = document.querySelector('#width');
const heightInput = document.querySelector('#height');
const message = document.querySelector('#message');

const body = document.body;
const pokemonList = [
    "Abomasnow",
    "Abra",
    "Absol",
    "Accelgor",
    "Aegislash",
    "Aerodactyl",
    "Aggron",
    "Aipom",
    "Alakazam",
    "Alomomola",
    "Altaria",
    "Amaura",
    "Ambipom",
    "Amoonguss",
    "Ampharos",
    "Anorith",
    "Araquanid",
    "Arbok",
    "Arcanine",
    "Arceus",
    "Archen",
    "Archeops",
    "Ariados",
    "Armaldo",
    "Aromatisse",
    "Aron",
    "Articuno",
    "Audino",
    "Aurorus",
    "Avalugg",
    "Axew",
    "Azelf",
    "Azumarill",
    "Azurill",
    "Bagon",
    "Baltoy",
    "Banette",
    "Barbaracle",
    "Barboach",
    "Basculin",
    "Bastiodon",
    "Bayleef",
    "Beartic",
    "Beautifly",
    "Beedrill",
    "Beheeyem",
    "Beldum",
    "Bellossom",
    "Bellsprout",
    "Bergmite",
    "Bewear",
    "Bibarel",
    "Bidoof",
    "Binacle",
    "Bisharp",
    "Blacephalon",
    "Blastoise",
    "Blaziken",
    "Blissey",
    "Blitzle",
    "Boldore",
    "Bonsly",
    "Bouffalant",
    "Bounsweet",
    "Braixen",
    "Braviary",
    "Breloom",
    "Brionne",
    "Bronzong",
    "Bronzor",
    "Bruxish",
    "Budew",
    "Buizel",
    "Bulbasaur",
    "Buneary",
    "Bunnelby",
    "Burmy",
    "Butterfree",
    "Buzzwole",
    "Cacnea",
    "Cacturne",
    "Camerupt",
    "Carbink",
    "Carnivine",
    "Carracosta",
    "Carvanha",
    "Cascoon",
    "Castform",
    "Caterpie",
    "Celebi",
    "Celesteela",
    "Chandelure",
    "Chansey",
    "Charizard",
    "Charjabug",
    "Charmander",
    "Charmeleon",
    "Chatot",
    "Cherrim",
    "Cherubi",
    "Chesnaught",
    "Chespin",
    "Chikorita",
    "Chimchar",
    "Chimecho",
    "Chinchou",
    "Chingling",
    "Cinccino",
    "Clamperl",
    "Clauncher",
    "Clawitzer",
    "Claydol",
    "Clefable",
    "Clefairy",
    "Cleffa",
    "Cloyster",
    "Cobalion",
    "Cofagrigus",
    "Combee",
    "Combusken",
    "Comfey",
    "Conkeldurr",
    "Corphish",
    "Corsola",
    "Cosmoem",
    "Cosmog",
    "Cottonee",
    "Crabominable",
    "Crabrawler",
    "Cradily",
    "Cranidos",
    "Crawdaunt",
    "Cresselia",
    "Croagunk",
    "Crobat",
    "Croconaw",
    "Crustle",
    "Cryogonal",
    "Cubchoo",
    "Cubone",
    "Cutiefly",
    "Cyndaquil",
    "Darkrai",
    "Darmanitan",
    "Dartrix",
    "Darumaka",
    "Decidueye",
    "Dedenne",
    "Deerling",
    "Deino",
    "Delcatty",
    "Delibird",
    "Delphox",
    "Deoxys",
    "Dewgong",
    "Dewott",
    "Dewpider",
    "Dhelmise",
    "Dialga",
    "Diancie",
    "Diggersby",
    "Diglett",
    "Ditto",
    "Dodrio",
    "Doduo",
    "Donphan",
    "Doublade",
    "Dragalge",
    "Dragonair",
    "Dragonite",
    "Drampa",
    "Drapion",
    "Dratini",
    "Drifblim",
    "Drifloon",
    "Drilbur",
    "Drowzee",
    "Druddigon",
    "Ducklett",
    "Dugtrio",
    "Dunsparce",
    "Duosion",
    "Durant",
    "Dusclops",
    "Dusknoir",
    "Duskull",
    "Dustox",
    "Dwebble",
    "Eelektrik",
    "Eelektross",
    "Eevee",
    "Ekans",
    "Electabuzz",
    "Electivire",
    "Electrike",
    "Electrode",
    "Elekid",
    "Elgyem",
    "Emboar",
    "Emolga",
    "Empoleon",
    "Entei",
    "Escavalier",
    "Espeon",
    "Espurr",
    "Excadrill",
    "Exeggcute",
    "Exeggutor",
    "Exploud",
    "Farfetch’d",
    "Fearow",
    "Feebas",
    "Fennekin",
    "Feraligatr",
    "Ferroseed",
    "Ferrothorn",
    "Finneon",
    "Flaaffy",
    "Flabébé",
    "Flareon",
    "Fletchinder",
    "Fletchling",
    "Floatzel",
    "Floette",
    "Florges",
    "Flygon",
    "Fomantis",
    "Foongus",
    "Forretress",
    "Fraxure",
    "Frillish",
    "Froakie",
    "Frogadier",
    "Froslass",
    "Furfrou",
    "Furret",
    "Gabite",
    "Gallade",
    "Galvantula",
    "Garbodor",
    "Garchomp",
    "Gardevoir",
    "Gastly",
    "Gastrodon",
    "Genesect",
    "Gengar",
    "Geodude",
    "Gible",
    "Gigalith",
    "Girafarig",
    "Giratina",
    "Glaceon",
    "Glalie",
    "Glameow",
    "Gligar",
    "Gliscor",
    "Gloom",
    "Gogoat",
    "Golbat",
    "Goldeen",
    "Golduck",
    "Golem",
    "Golett",
    "Golisopod",
    "Golurk",
    "Goodra",
    "Goomy",
    "Gorebyss",
    "Gothita",
    "Gothitelle",
    "Gothorita",
    "Gourgeist",
    "Granbull",
    "Graveler",
    "Greninja",
    "Grimer",
    "Grotle",
    "Groudon",
    "Grovyle",
    "Growlithe",
    "Grubbin",
    "Grumpig",
    "Gulpin",
    "Gumshoos",
    "Gurdurr",
    "Guzzlord",
    "Gyarados",
    "Hakamo-o",
    "Happiny",
    "Hariyama",
    "Haunter",
    "Hawlucha",
    "Haxorus",
    "Heatmor",
    "Heatran",
    "Heliolisk",
    "Helioptile",
    "Heracross",
    "Herdier",
    "Hippopotas",
    "Hippowdon",
    "Hitmonchan",
    "Hitmonlee",
    "Hitmontop",
    "Ho-Oh",
    "Honchkrow",
    "Honedge",
    "Hoopa",
    "Hoothoot",
    "Hoppip",
    "Horsea",
    "Houndoom",
    "Houndour",
    "Huntail",
    "Hydreigon",
    "Hypno",
    "Igglybuff",
    "Illumise",
    "Incineroar",
    "Infernape",
    "Inkay",
    "Ivysaur",
    "Jangmo-o",
    "Jellicent",
    "Jigglypuff",
    "Jirachi",
    "Jolteon",
    "Joltik",
    "Jumpluff",
    "Jynx",
    "Kabuto",
    "Kabutops",
    "Kadabra",
    "Kakuna",
    "Kangaskhan",
    "Karrablast",
    "Kartana",
    "Kecleon",
    "Keldeo",
    "Kingdra",
    "Kingler",
    "Kirlia",
    "Klang",
    "Klefki",
    "Klink",
    "Klinklang",
    "Koffing",
    "Komala",
    "Kommo-o",
    "Krabby",
    "Kricketot",
    "Kricketune",
    "Krokorok",
    "Krookodile",
    "Kyogre",
    "Kyurem",
    "Lairon",
    "Lampent",
    "Landorus",
    "Lanturn",
    "Lapras",
    "Larvesta",
    "Larvitar",
    "Latias",
    "Latios",
    "Leafeon",
    "Leavanny",
    "Ledian",
    "Ledyba",
    "Lickilicky",
    "Lickitung",
    "Liepard",
    "Lileep",
    "Lilligant",
    "Lillipup",
    "Linoone",
    "Litleo",
    "Litten",
    "Litwick",
    "Lombre",
    "Lopunny",
    "Lotad",
    "Loudred",
    "Lucario",
    "Ludicolo",
    "Lugia",
    "Lumineon",
    "Lunala",
    "Lunatone",
    "Lurantis",
    "Luvdisc",
    "Luxio",
    "Luxray",
    "Lycanroc",
    "Machamp",
    "Machoke",
    "Machop",
    "Magby",
    "Magcargo",
    "Magearna",
    "Magikarp",
    "Magmar",
    "Magmortar",
    "Magnemite",
    "Magneton",
    "Magnezone",
    "Makuhita",
    "Malamar",
    "Mamoswine",
    "Manaphy",
    "Mandibuzz",
    "Manectric",
    "Mankey",
    "Mantine",
    "Mantyke",
    "Maractus",
    "Mareanie",
    "Mareep",
    "Marill",
    "Marowak",
    "Marshadow",
    "Marshtomp",
    "Masquerain",
    "Mawile",
    "Medicham",
    "Meditite",
    "Meganium",
    "Meloetta",
    "Meowstic",
    "Meowth",
    "Mesprit",
    "Metagross",
    "Metang",
    "Metapod",
    "Mew",
    "Mewtwo",
    "Mienfoo",
    "Mienshao",
    "Mightyena",
    "Milotic",
    "Miltank",
    "Mime Jr.",
    "Mimikyu",
    "Minccino",
    "Minior",
    "Minun",
    "Misdreavus",
    "Mismagius",
    "Moltres",
    "Monferno",
    "Morelull",
    "Mothim",
    "Mr. Mime",
    "Mudbray",
    "Mudkip",
    "Mudsdale",
    "Muk",
    "Munchlax",
    "Munna",
    "Murkrow",
    "Musharna",
    "Naganadel",
    "Natu",
    "Necrozma",
    "Nidoking",
    "Nidoqueen",
    "Nidoran♀",
    "Nidoran♂",
    "Nidorina",
    "Nidorino",
    "Nihilego",
    "Nincada",
    "Ninetales",
    "Ninjask",
    "Noctowl",
    "Noibat",
    "Noivern",
    "Nosepass",
    "Numel",
    "Nuzleaf",
    "Octillery",
    "Oddish",
    "Omanyte",
    "Omastar",
    "Onix",
    "Oranguru",
    "Oricorio",
    "Oshawott",
    "Pachirisu",
    "Palkia",
    "Palossand",
    "Palpitoad",
    "Pancham",
    "Pangoro",
    "Panpour",
    "Pansage",
    "Pansear",
    "Paras",
    "Parasect",
    "Passimian",
    "Patrat",
    "Pawniard",
    "Pelipper",
    "Persian",
    "Petilil",
    "Phanpy",
    "Phantump",
    "Pheromosa",
    "Phione",
    "Pichu",
    "Pidgeot",
    "Pidgeotto",
    "Pidgey",
    "Pidove",
    "Pignite",
    "Pikachu",
    "Pikipek",
    "Piloswine",
    "Pineco",
    "Pinsir",
    "Piplup",
    "Plusle",
    "Poipole",
    "Politoed",
    "Poliwag",
    "Poliwhirl",
    "Poliwrath",
    "Ponyta",
    "Poochyena",
    "Popplio",
    "Porygon",
    "Porygon-Z",
    "Porygon2",
    "Primarina",
    "Primeape",
    "Prinplup",
    "Probopass",
    "Psyduck",
    "Pumpkaboo",
    "Pupitar",
    "Purrloin",
    "Purugly",
    "Pyroar",
    "Pyukumuku",
    "Quagsire",
    "Quilava",
    "Quilladin",
    "Qwilfish",
    "Raichu",
    "Raikou",
    "Ralts",
    "Rampardos",
    "Rapidash",
    "Raticate",
    "Rattata",
    "Rayquaza",
    "Regice",
    "Regigigas",
    "Regirock",
    "Registeel",
    "Relicanth",
    "Remoraid",
    "Reshiram",
    "Reuniclus",
    "Rhydon",
    "Rhyhorn",
    "Rhyperior",
    "Ribombee",
    "Riolu",
    "Rockruff",
    "Roggenrola",
    "Roselia",
    "Roserade",
    "Rotom",
    "Rowlet",
    "Rufflet",
    "Sableye",
    "Salamence",
    "Salandit",
    "Salazzle",
    "Samurott",
    "Sandile",
    "Sandshrew",
    "Sandslash",
    "Sandygast",
    "Sawk",
    "Sawsbuck",
    "Scatterbug",
    "Sceptile",
    "Scizor",
    "Scolipede",
    "Scrafty",
    "Scraggy",
    "Scyther",
    "Seadra",
    "Seaking",
    "Sealeo",
    "Seedot",
    "Seel",
    "Seismitoad",
    "Sentret",
    "Serperior",
    "Servine",
    "Seviper",
    "Sewaddle",
    "Sharpedo",
    "Shaymin",
    "Shedinja",
    "Shelgon",
    "Shellder",
    "Shellos",
    "Shelmet",
    "Shieldon",
    "Shiftry",
    "Shiinotic",
    "Shinx",
    "Shroomish",
    "Shuckle",
    "Shuppet",
    "Sigilyph",
    "Silcoon",
    "Silvally",
    "Simipour",
    "Simisage",
    "Simisear",
    "Skarmory",
    "Skiddo",
    "Skiploom",
    "Skitty",
    "Skorupi",
    "Skrelp",
    "Skuntank",
    "Slaking",
    "Slakoth",
    "Sliggoo",
    "Slowbro",
    "Slowking",
    "Slowpoke",
    "Slugma",
    "Slurpuff",
    "Smeargle",
    "Smoochum",
    "Sneasel",
    "Snivy",
    "Snorlax",
    "Snorunt",
    "Snover",
    "Snubbull",
    "Solgaleo",
    "Solosis",
    "Solrock",
    "Spearow",
    "Spewpa",
    "Spheal",
    "Spinarak",
    "Spinda",
    "Spiritomb",
    "Spoink",
    "Spritzee",
    "Squirtle",
    "Stakataka",
    "Stantler",
    "Staraptor",
    "Staravia",
    "Starly",
    "Starmie",
    "Staryu",
    "Steelix",
    "Steenee",
    "Stoutland",
    "Stufful",
    "Stunfisk",
    "Stunky",
    "Sudowoodo",
    "Suicune",
    "Sunflora",
    "Sunkern",
    "Surskit",
    "Swablu",
    "Swadloon",
    "Swalot",
    "Swampert",
    "Swanna",
    "Swellow",
    "Swinub",
    "Swirlix",
    "Swoobat",
    "Sylveon",
    "Taillow",
    "Talonflame",
    "Tangela",
    "Tangrowth",
    "Tapu Bulu",
    "Tapu Fini",
    "Tapu Koko",
    "Tapu Lele",
    "Tauros",
    "Teddiursa",
    "Tentacool",
    "Tentacruel",
    "Tepig",
    "Terrakion",
    "Throh",
    "Thundurus",
    "Timburr",
    "Tirtouga",
    "Togedemaru",
    "Togekiss",
    "Togepi",
    "Togetic",
    "Torchic",
    "Torkoal",
    "Tornadus",
    "Torracat",
    "Torterra",
    "Totodile",
    "Toucannon",
    "Toxapex",
    "Toxicroak",
    "Tranquill",
    "Trapinch",
    "Treecko",
    "Trevenant",
    "Tropius",
    "Trubbish",
    "Trumbeak",
    "Tsareena",
    "Turtonator",
    "Turtwig",
    "Tympole",
    "Tynamo",
    "Type: Null",
    "Typhlosion",
    "Tyranitar",
    "Tyrantrum",
    "Tyrogue",
    "Tyrunt",
    "Umbreon",
    "Unfezant",
    "Unown",
    "Ursaring",
    "Uxie",
    "Vanillish",
    "Vanillite",
    "Vanilluxe",
    "Vaporeon",
    "Venipede",
    "Venomoth",
    "Venonat",
    "Venusaur",
    "Vespiquen",
    "Vibrava",
    "Victini",
    "Victreebel",
    "Vigoroth",
    "Vikavolt",
    "Vileplume",
    "Virizion",
    "Vivillon",
    "Volbeat",
    "Volcanion",
    "Volcarona",
    "Voltorb",
    "Vullaby",
    "Vulpix",
    "Wailmer",
    "Wailord",
    "Walrein",
    "Wartortle",
    "Watchog",
    "Weavile",
    "Weedle",
    "Weepinbell",
    "Weezing",
    "Whimsicott",
    "Whirlipede",
    "Whiscash",
    "Whismur",
    "Wigglytuff",
    "Wimpod",
    "Wingull",
    "Wishiwashi",
    "Wobbuffet",
    "Woobat",
    "Wooper",
    "Wormadam",
    "Wurmple",
    "Wynaut",
    "Xatu",
    "Xerneas",
    "Xurkitree",
    "Yamask",
    "Yanma",
    "Yanmega",
    "Yungoos",
    "Yveltal",
    "Zangoose",
    "Zapdos",
    "Zebstrika",
    "Zekrom",
    "Zeraora",
    "Zigzagoon",
    "Zoroark",
    "Zorua",
    "Zubat",
    "Zweilous",
    "Zygarde"
];

let numberOutput = [];
let wordOutput = [];

const createBingoCard = (width, height) => {
    // Initializing help index to count how many cells have been created, starting from -1 to help loop start at 0
    let numIndex = -1;

    // Creates the table element
    const table = document.createElement('table');

    // Stylizes the entire table
    table.style.width = '50%';
    table.style.border = '1px solid black';

    // For loop to run through amount of rows wanted (height)
    for (let r = 0; r < height; r++) {
        const rows = table.insertRow();
        // For loop to run through amount of columns wanted for each row (width)
        for (let c = 0; c < width; c++) {
            if (r === height && c === width) {
                break;
            } else {
                // numIndex keeps track of how many cells have been generated so far in total
                numIndex++;
                const tableDesign = rows.insertCell(0);
                // Information is added into each cell using the numberOutput array, and the cell count form numIndex
                tableDesign.appendChild(document.createTextNode(numberOutput[numIndex]));
                tableDesign.style.border = '1px solid black';
            }
        }
    }
    body.appendChild(table);
};

// Function that shuffles numbers generated with generateNumbers()
const shuffleArray = (array) => {
    // Generate a clone of the array to not modify the original content
    let arrayClone = array.slice(0);

    // Shuffle the array with random()
    return arrayClone.sort(function () {
        return Math.random() - 0.5
    })
};

// Function that generates numbers for the table
const generateNumbers = () => {
    // Numbers needed equal to (cells * rows) + 50;
    let n = (widthInput.value * heightInput.value) + 50;

    // Generate an array running numbers one by one through the value of 'n'
    const numbers = [] = Array.from({length: n}, (v, k) => k + 1);

    // Run the array through the shuffleArray() function and assign it to the numberOutput variable
    numberOutput = shuffleArray(numbers);
};

const generateWords = () => {
    // Numbers needed equal to (cells * rows) + 50;
    let n = (widthInput.value * heightInput.value) + 50;

    // Generate an array running numbers one by one through the value of 'n'
    const words = [] = pokemonList;

    // Run the array through the shuffleArray() function and assign it to the numberOutput variable
    wordOutput = shuffleArray(words);
};


const createBullshitBingoCard = (width, height) => {
    // Initializing help index to count how many cells have been created, starting from -1 to help loop start at 0
    let numIndex = -1;

    // Creates the table element
    const table = document.createElement('table');

    // Stylizes the entire table
    table.style.width = '50%';
    table.style.border = '1px solid black';

    // For loop to run through amount of rows wanted (height)
    for (let r = 0; r < height; r++) {
        const rows = table.insertRow();
        // For loop to run through amount of columns wanted for each row (width)
        for (let c = 0; c < width; c++) {
            if (r === height && c === width) {
                break;
            } else {
                // numIndex keeps track of how many cells have been generated so far in total
                numIndex++;
                const tableDesign = rows.insertCell(0);
                // Information is added into each cell using the numberOutput array, and the cell count form numIndex
                tableDesign.appendChild(document.createTextNode(wordOutput[numIndex]));
                tableDesign.style.border = '1px solid black';
            }
        }
    }
    body.appendChild(table);
};

// Simple function for deleting all tables on page
const deleteTables = () => {
    // Index equal to length of list containing all items called 'table'
    let n = document.querySelectorAll('table').length;

    // Simple for loop for going through list and removing each one by one, until none are left
    for (let i = 0; i < n; i++) {
        body.querySelector('table').remove("table");
    }
};


//------> Functions linked to button clicks below <----------
// Tie this to the number table creation button:
const createTable = () => {
    // Check if values have been inserted
    if ((widthInput.value && heightInput.value) && (widthInput.value > 0 && heightInput.value > 0)) {
        generateNumbers();
        createBingoCard(widthInput.value, heightInput.value);
    } else {
        message.innerHTML = '<h4>Please insert values in both fields. (ノಠ ∩ಠ)ノ彡( o°o)</h4>';
    }
};

// Tie this to the word table creation button:
const createBullshitTable = () => {
    // Check if values have been inserted
    if ((widthInput.value && heightInput.value) && (widthInput.value > 0 && heightInput.value > 0)) {
        generateWords();
        createBullshitBingoCard(widthInput.value, heightInput.value);
    } else {
        message.innerHTML = '<h4>Please insert values in both fields. (ノಠ ∩ಠ)ノ彡( o°o)</h4>';
    }
};


// Event Listeners for buttons
document.querySelector('#tableButton').addEventListener('click', createTable);
document.querySelector('#bullshitButton').addEventListener('click', createBullshitTable);
document.querySelector('#removeButton').addEventListener('click', deleteTables);