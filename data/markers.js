const DATA_MARKERS = {
    // Aquí se crean los tipos de eventos o puntos del mapa (Fuertes, batallas, hundimientos, puertos...)
    "types": [
        // BOOK STARTING POINT
        {
            "name": "Starting point",
            "icon": "ship.svg",
            "iconSize": [20, 20],
            "iconAnchor": [15, 15],
            "popupAnchor": [-5, -12]
        },
        // BOOK END POINT
        {
            "name": "End point",
            "icon": "End-trip.svg",
            "iconSize": [20, 20],
            "iconAnchor": [15, 15],
            "popupAnchor": [-5, -12]
        },
        // FRENCH FORT
        {
            "name": "French fort",
            "icon": "french-fort.svg",
            "iconSize": [20, 20],
            "iconAnchor": [15, 15],
            "popupAnchor": [-5, -12]
        },
        //SPANISH FORT
        {
            "name": "Spanish fort",
            "icon": "spanish-fort.svg",
            "iconSize": [20, 20],
            "iconAnchor": [15, 15],
            "popupAnchor": [-5, -12]
        },
        // BATTLE
        {
            "name": "Battle",
            "icon": "Fight3.svg",
            "iconSize": [20, 20],
            "iconAnchor": [15, 15],
            "popupAnchor": [-5, -12]
        },
        // SHIP BATTLE
        {
            "name": "Ship Battle",
            "icon": "Ship-battle.svg",
            "iconSize": [20, 20],
            "iconAnchor": [15, 15],
            "popupAnchor": [-5, -12]
        },
        // PORT
        {
            "name": "Port",
            "icon": "port.svg",
            "iconSize": [20, 20],
            "iconAnchor": [15, 15],
            "popupAnchor": [-5, -12]
        },
        // ADMIRALTY
        {
            "name": "Admiralty",
            "icon": "Admiral.svg",
            "iconSize": [20, 20],
            "iconAnchor": [15, 15],
            "popupAnchor": [-5, -12]
        },
        // SINKING
        {
            "name": "Sinking",
            "icon": "Sinking.svg",
            "iconSize": [20, 20],
            "iconAnchor": [15, 15],
            "popupAnchor": [-5, -12]
        },
        // CITY (LONDON)
        {
            "name": "UK",
            "icon": "Uk-flag.svg",
            "iconSize": [20, 20],
            "iconAnchor": [15, 15],
            "popupAnchor": [-5, -12]
        },
        // CITY (MADRID)
        {
            "name": "Spain",
            "icon": "Madrid.svg",
            "iconSize": [20, 20],
            "iconAnchor": [15, 15],
            "popupAnchor": [-5, -12]
        },
        // CITY (PARIS)
        {
            "name": "France",
            "icon": "Paris.svg",
            "iconSize": [20, 20],
            "iconAnchor": [15, 15],
            "popupAnchor": [-5, -12]
        },
        // CITY GENERAL
        // JACK´S HOUSE - ASHGROVE COTTAGE
        {
            "name": "Jack´s live",
            "icon": "Jacks-house.svg",
            "iconSize": [20, 20],
            "iconAnchor": [15, 15],
            "popupAnchor": [-5, -12]
        },
        // WEATHER
        // BLOCKADE
        {
            "name": "Blockade",
            "icon": "Block.svg",
            "iconSize": [20, 20],
            "iconAnchor": [15, 15],
            "popupAnchor": [-5, -12]
        },
        // SHIPYARD
    ],
   "markers": [
        // BOOK STARTING POINT
        /*{
            "title": "Portsmouth",
            "coordinates": [593.43, 675.31],
            "type": "Starting point",
            "image": "rings.webp",
            "books": [
                "The Mauritius Command",
            ],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ligula libero, porttitor ut aliquet sit amet, tincidunt ut leo. Vivamus eget pharetra leo.",
            "quote": '',
            "readMoreUrl": "  ",
            "dataProvidedUrl": "https://www.cannonade.net/index.php",
            "isConfirmed": true
        },*/


        // BOOK END POINT
        {
            "title": "Start",
            "coordinates": [588.5, 663.6875],
            "type": "End point",
            "image": "rings.webp",
            "books": [
                "The Surgeon´s Mate",
            ],
            "description": "",
            "quote": '',
            "readMoreUrl": "  ",
            "dataProvidedUrl": "https://www.cannonade.net/index.php",
            "isConfirmed": true
        },


        // JACK´S LIVE - ASHGROVE COTTAGE - HOUSE
        {
            "title": "Ashgrove Cottage",
            "coordinates": [593.93, 676.87],
            "type": "Jack´s live",
            "image": "Jacks-house.svg",
            "books": [
                "The Mauritius Command",
                "The Surgeon´s Mate",
            ],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ligula libero, porttitor ut aliquet sit amet, tincidunt ut leo. Vivamus eget pharetra leo.",
            "quote": '',
            "readMoreUrl": "  ",
            "dataProvidedUrl": "https://www.cannonade.net/index.php",
            "isConfirmed": true
        },

// UK
        // LONDON CITY 
        /*{
            "title": "Admiralty",
            "coordinates": [597.62, 680.50],
            "type": "Admiralty",
            "image": "rings.webp",
            "books": [
                "The Mauritius Command",
                "The Surgeon´s Mate",
            ],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ligula libero, porttitor ut aliquet sit amet, tincidunt ut leo. Vivamus eget pharetra leo.",
            "quote": '',
            "readMoreUrl": "  ",
            "dataProvidedUrl": "https://www.cannonade.net/index.php",
            "isConfirmed": true
        },*/
        //ADMIRALTY
        {
            "title": "Admiralty",
            "coordinates": [597.62, 680.50],
            "type": "Admiralty",
            "image": "City3-London-min.png",
            "books": [
                "The Mauritius Command",
                "The Surgeon´s Mate",
            ],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ligula libero, porttitor ut aliquet sit amet, tincidunt ut leo. Vivamus eget pharetra leo.",
            "quote": '',
            "readMoreUrl": "  ",
            "dataProvidedUrl": "https://www.cannonade.net/index.php",
            "isConfirmed": true
        },


// SPAIN
        // MADRID
        {
            "title": "Madrid, 18th Century",
            "coordinates": [544.93, 666.25],
            "type": "Spain",
            "image": "City2-Madrid-min.png",
            "books": [
                "Master & Commander",
            ],
            "description": "Spain entered a period of reform and renewal, as well as continued decline. Ideas of the Age of Enlightenment entered Spain and Spanish America during the eighteenth century. The invasion of the Iberian Peninsula by Napoleon Bonaparte in 1807–1808 upended political arrangements of the Spanish Empire and the Portuguese Empire.",
            "quote": '',
            "readMoreUrl": "https://en.wikipedia.org/wiki/History_of_Madrid#Capital_of_the_Empire",
            "isConfirmed": true
        },
        // ALGECIRAS
        {
            "title": "Algeciras",
            "coordinates": [527.93, 659.62],
            "type": "Port",
            "image": "",
            "books": [
                "Master & Commander",
            ],
            "description": "The Algeciras campaign (sometimes known as the Battle or Battles of Algeciras) was an attempt by a French naval squadron from Toulon under Contre-Admiral Charles Linois to join a French and Spanish fleet at Cadiz during June and July 1801 during the French Revolutionary Wars prior to a planned operation against either Egypt or Portugal.",
            "quote": ' "Not yet" ',
            "readMoreUrl": "https://en.wikipedia.org/wiki/Algeciras_campaign",
            "isConfirmed": true
        },
        // SPANISH FORT
        {
            "title": "Torre del Almirante, Algeciras",
            "coordinates": [528.43, 659.62],
            "type": "Spanish fort",
            "image": "Fort1-min.png",
            "books": [
                "Master & Commander",
            ],
            "description": "The tower was put to good use during the Battle of Algeciras in 1801. The tower was then the base for four 24-pounder guns which guarded the northern approach to Algeciras.",
            "quote": ' "all the time the Spanish batteries, from the Torre del Almirante in the north right down to Green Island in the south" ',
            "readMoreUrl": "https://en.wikipedia.org/wiki/Algeciras_campaign",
            "dataProvidedUrl": "https://www.cannonade.net/index.php",
            "isConfirmed": true
        },
        
        
// FRANCE
        // PARIS
        {
            "title": "Paris, 18th Century",
            "coordinates": [585.00, 688.31],
            "type": "France",
            "image": "City1-Paris-min.png",
            "books": [
                "The Surgeon´s Mate",
            ],
            "description": "Paris in the 18th century was the second-largest city in Europe, after London, with a population of about 600,000 people. The century saw the construction of Place Vendôme, the Place de la Concorde, the Champs-Élysées, the church of Les Invalides, and the Panthéon, and the founding of the Louvre Museum.",
            "quote": ' "Not yet" ',
            "readMoreUrl": "https://en.wikipedia.org/wiki/Paris_in_the_18th_century",
            "isConfirmed": true
        },
        // FRENCH FORT
        /*{
            "title": "Númenor's camp",
            "coordinates": [532.9, 910.8],
            "type": "French fort",
            "image": "numenor-camp.webp",
            "books": [
                "The Mauritius Command",
            ],
            "description": "A camp set up by the Númenor army when they arrived in the middle-earth. It will later shelter the refugees from the Southlands.",
            "quote": '',
            "readMoreUrl": "  ",
            "dataProvidedUrl": "https://www.cannonade.net/index.php",
            "isConfirmed": true
        },*/


        // PORTS
        {
            "title": "Portsmouth",
            "coordinates": [593.43, 675.31],
            "type": "Port",
            "image": "Port1-min.png",
            "books": [
                "The Mauritius Command",
                "Desolation Island",
                "The Surgeon´s Mate",
            ],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ligula libero, porttitor ut aliquet sit amet, tincidunt ut leo. Vivamus eget pharetra leo.",
            "quote": '',
            "readMoreUrl": "  ",
            "dataProvidedUrl": "https://www.cannonade.net/index.php",
            "isConfirmed": true
        },
        {
            "title": "Plymouth",
            "coordinates": [590.75, 664.50],
            "type": "Port",
            "image": "Port2-min.png",
            "books": [
                "HMS Surprise",
                "The Mauritius Command",
            ],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ligula libero, porttitor ut aliquet sit amet, tincidunt ut leo. Vivamus eget pharetra leo.",
            "quote": '',
            "readMoreUrl": "  ",
            "dataProvidedUrl": "https://www.cannonade.net/index.php",
            "isConfirmed": true
        },
        {
            "title": "Sheerness",
            "coordinates": [596.56, 685.12],
            "type": "Port",
            "image": "Port3-min.png",
            "books": [
                "The Surgeon´s Mate",
            ],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ligula libero, porttitor ut aliquet sit amet, tincidunt ut leo. Vivamus eget pharetra leo.",
            "quote": '',
            "readMoreUrl": "  ",
            "dataProvidedUrl": "https://www.cannonade.net/index.php",
            "isConfirmed": true
        },
        {
            "title": "Gibraltar",
            "coordinates": [528.18, 660.75],
            "type": "Port",
            "image": "Port4-min.png",
            "books": [
                "Master & Commander",
                "HMS Surprise",
            ],
            "description": "",
            "quote": '',
            "readMoreUrl": "  ",
            "dataProvidedUrl": "https://www.cannonade.net/index.php",
            "isConfirmed": true
        },
        {
            "title": "Mahón",
            "coordinates": [542.06, 699.50],
            "type": "Port",
            "image": "Port5-min.png",
            "books": [
                "Master & Commander",
            ],
            "description": "A newly commisioned Master and Commander, Jack Aubrey takes command of the HMS Sophie in Port Mahón.",
            "quote": ' "Not teniente, cried Jack, crushing the breath out of her plump, supple body. Capitan! Capitano, ha, ha, ha!" ',
            "readMoreUrl": "  ",
            "dataProvidedUrl": "https://www.cannonade.net/index.php",
            "isConfirmed": true
        },
        {
            "title": "Cagliari",
            "coordinates": [541.50, 716.12],
            "type": "Port",
            "image": "Port3-min.png",
            "books": [
                "Master & Commander",
            ],
            "description": " ",
            "quote": ' ',
            "readMoreUrl": "  ",
            "dataProvidedUrl": "https://www.cannonade.net/index.php",
            "isConfirmed": true
        },
        {
            "title": "La Valetta",
            "coordinates": [527.37, 737.68],
            "type": "Port",
            "image": "Port1-min.png",
            "books": [
                "Master & Commander",
            ],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ligula libero, porttitor ut aliquet sit amet, tincidunt ut leo. Vivamus eget pharetra leo.",
            "quote": '',
            "readMoreUrl": "  ",
            "dataProvidedUrl": "https://www.cannonade.net/index.php",
            "isConfirmed": true
        },
        {
            "title": "Madeira",
            "coordinates": [512.87, 618.56],
            "type": "Port",
            "image": "Port5-min.png",
            "books": [
                "HMS Surprise",
            ],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ligula libero, porttitor ut aliquet sit amet, tincidunt ut leo. Vivamus eget pharetra leo.",
            "quote": '',
            "readMoreUrl": "  ",
            "dataProvidedUrl": "https://www.cannonade.net/index.php",
            "isConfirmed": true
        },
        {
            "title": "Cape Town",
            "coordinates": [278.62, 749.87],
            "type": "Port",
            "image": "Port2-min.png",
            "books": [
                "The Mauritius Command",
                "The Fortune of War"
            ],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ligula libero, porttitor ut aliquet sit amet, tincidunt ut leo. Vivamus eget pharetra leo.",
            "quote": '',
            "readMoreUrl": "  ",
            "dataProvidedUrl": "https://www.cannonade.net/index.php",
            "isConfirmed": true
        },
        {
            "title": "Rodriguez Island",
            "coordinates": [334.75, 919.37],
            "type": "Port",
            "image": "Port3-min.png",
            "books": [
                "The Mauritius Command",
            ],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ligula libero, porttitor ut aliquet sit amet, tincidunt ut leo. Vivamus eget pharetra leo.",
            "quote": '',
            "readMoreUrl": "  ",
            "dataProvidedUrl": "https://www.cannonade.net/index.php",
            "isConfirmed": true
        },
        {
            "title": "Praya Port",
            "coordinates": [446.25, 590.31],
            "type": "Port",
            "image": "Port5-min.png",
            "books": [
                "Desolation Island",
            ],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ligula libero, porttitor ut aliquet sit amet, tincidunt ut leo. Vivamus eget pharetra leo.",
            "quote": '',
            "readMoreUrl": "  ",
            "dataProvidedUrl": "https://www.cannonade.net/index.php",
            "isConfirmed": true
        },
        {
            "title": "Recife",
            "coordinates": [371.56, 550.75],
            "type": "Port",
            "image": "Port1-min.png",
            "books": [
                "Desolation Island",
            ],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ligula libero, porttitor ut aliquet sit amet, tincidunt ut leo. Vivamus eget pharetra leo.",
            "quote": '',
            "readMoreUrl": "  ",
            "dataProvidedUrl": "https://www.cannonade.net/index.php",
            "isConfirmed": true
        },
        {
            "title": "San Salvador",
            "coordinates": [357.37, 537.50],
            "type": "Port",
            "image": "Port4-min.png",
            "books": [
                "The Fortune of War",
            ],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ligula libero, porttitor ut aliquet sit amet, tincidunt ut leo. Vivamus eget pharetra leo.",
            "quote": '',
            "readMoreUrl": "  ",
            "dataProvidedUrl": "https://www.cannonade.net/index.php",
            "isConfirmed": true
        },
        {
            "title": "Río de Janeiro",
            "coordinates": [324.12, 523.50],
            "type": "Port",
            "image": "Port2-min.png",
            "books": [
                "HMS Surprise",
            ],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ligula libero, porttitor ut aliquet sit amet, tincidunt ut leo. Vivamus eget pharetra leo.",
            "quote": '',
            "readMoreUrl": "  ",
            "dataProvidedUrl": "https://www.cannonade.net/index.php",
            "isConfirmed": true
        },
        {
            "title": "Bombay",
            "coordinates": [459.43, 953.68],
            "type": "Port",
            "image": "Port2-min.png",
            "books": [
                "HMS Surprise",
            ],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ligula libero, porttitor ut aliquet sit amet, tincidunt ut leo. Vivamus eget pharetra leo.",
            "quote": '',
            "readMoreUrl": "  ",
            "dataProvidedUrl": "https://www.cannonade.net/index.php",
            "isConfirmed": true
        },
        {
            "title": "Calcutta",
            "coordinates": [475.12, 1011.25],
            "type": "Port",
            "image": "Port3-min.png",
            "books": [
                "HMS Surprise",
            ],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ligula libero, porttitor ut aliquet sit amet, tincidunt ut leo. Vivamus eget pharetra leo.",
            "quote": '',
            "readMoreUrl": "  ",
            "dataProvidedUrl": "https://www.cannonade.net/index.php",
            "isConfirmed": true
        },
        {
            "title": "Botany Bay",
            "coordinates": [282.75, 1245.87],
            "type": "Port",
            "image": "Port4-min.png",
            "books": [
                "The Fortune of War",
            ],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ligula libero, porttitor ut aliquet sit amet, tincidunt ut leo. Vivamus eget pharetra leo.",
            "quote": '',
            "readMoreUrl": "  ",
            "dataProvidedUrl": "https://www.cannonade.net/index.php",
            "isConfirmed": true
        },
        {
            "title": "Port Jackson",
            "coordinates": [285.12, 1248.75],
            "type": "Port",
            "image": "Port5-min.png",
            "books": [
                "The Fortune of War",
            ],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ligula libero, porttitor ut aliquet sit amet, tincidunt ut leo. Vivamus eget pharetra leo.",
            "quote": '',
            "readMoreUrl": "  ",
            "dataProvidedUrl": "https://www.cannonade.net/index.php",
            "isConfirmed": true
        },
        {
            "title": "Boston",
            "coordinates": [554.62, 413.87],
            "type": "Port",
            "image": "Port2-min.png",
            "books": [
                "The Fortune of War",
                "The Surgeon´s Mate",
            ],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ligula libero, porttitor ut aliquet sit amet, tincidunt ut leo. Vivamus eget pharetra leo.",
            "quote": '',
            "readMoreUrl": "  ",
            "dataProvidedUrl": "https://www.cannonade.net/index.php",
            "isConfirmed": true
        },
        {
            "title": "Halifax",
            "coordinates": [564.75, 440.37],
            "type": "Port",
            "image": "Port3-min.png",
            "books": [
                "The Surgeon´s Mate",
            ],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ligula libero, porttitor ut aliquet sit amet, tincidunt ut leo. Vivamus eget pharetra leo.",
            "quote": '',
            "readMoreUrl": "  ",
            "dataProvidedUrl": "https://www.cannonade.net/index.php",
            "isConfirmed": true
        },
        {
            "title": "Gothenburg",
            "coordinates": [630.31, 726.43],
            "type": "Port",
            "image": "Port5-min.png",
            "books": [
                "The Surgeon´s Mate",
            ],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ligula libero, porttitor ut aliquet sit amet, tincidunt ut leo. Vivamus eget pharetra leo.",
            "quote": '',
            "readMoreUrl": "  ",
            "dataProvidedUrl": "https://www.cannonade.net/index.php",
            "isConfirmed": true
        },
        {
            "title": "Carlscrona",
            "coordinates": [623.43, 739.56],
            "type": "Port",
            "image": "Port4-min.png",
            "books": [
                "The Surgeon´s Mate",
            ],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ligula libero, porttitor ut aliquet sit amet, tincidunt ut leo. Vivamus eget pharetra leo.",
            "quote": '',
            "readMoreUrl": "  ",
            "dataProvidedUrl": "https://www.cannonade.net/index.php",
            "isConfirmed": true
        },



        // BATTLE
        {
            "title": "Mauritius Island",
            "coordinates": [333.25, 896.50],
            "type": "Battle",
            "image": "hall-of-lore.webp",
            "books": [
                "The Mauritius Command",
            ],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ligula libero, porttitor ut aliquet sit amet, tincidunt ut leo. Vivamus eget pharetra leo.",
            "quote": '',
            "readMoreUrl": "  ",
            "dataProvidedUrl": "https://www.cannonade.net/index.php",
            "isConfirmed": true
        },
        {
            "title": "Reunion Island",
            "coordinates": [330.87, 889.43],
            "type": "Battle",
            "image": "hall-of-lore.webp",
            "books": [
                "The Mauritius Command",
            ],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ligula libero, porttitor ut aliquet sit amet, tincidunt ut leo. Vivamus eget pharetra leo.",
            "quote": '',
            "readMoreUrl": "  ",
            "dataProvidedUrl": "https://www.cannonade.net/index.php",
            "isConfirmed": true
        },
        {
            "title": "HMS Leopard vs. Waakzaamheid",
            "coordinates": [272.81, 635.00],
            "type": "Ship Battle",
            "image": "Fighting10-min.png",
            "books": [
                "Desolation Island",
            ],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ligula libero, porttitor ut aliquet sit amet, tincidunt ut leo. Vivamus eget pharetra leo.",
            "quote": '',
            "readMoreUrl": "  ",
            "dataProvidedUrl": "https://www.cannonade.net/index.php",
            "isConfirmed": true
        },
        {
            "title": "HMS Shannon vs. US Chesapeake",
            "coordinates": [554.93, 419.18],
            "type": "Ship Battle",
            "image": "Fighting4-min.png",
            "books": [
                "The Surgeon´s Mate",
            ],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ligula libero, porttitor ut aliquet sit amet, tincidunt ut leo. Vivamus eget pharetra leo.",
            "quote": '',
            "readMoreUrl": "  ",
            "dataProvidedUrl": "https://www.cannonade.net/index.php",
            "isConfirmed": true
        },


        
        // SINKINGS
        {
            "title": "Sinking in Desolation Island",
            "coordinates": [212.12, 943.62],
            "type": "Sinking",
            "image": "Sinking2-min.png",
            "books": [
                "Desolation Island",
                "The Fortune of War",
            ],
            "description": "",
            "quote": '',
            "readMoreUrl": "",
            "dataProvidedUrl": "https://www.cannonade.net/index.php",
            "isConfirmed": true
        },
        {
            "title": "Sinking by fire",
            "coordinates": [337.25, 615.75],
            "type": "Sinking",
            "image": "Sinking3-min.png",
            "books": [
                "The Fortune of War",
            ],
            "description": ' "It was well north of Capricorn that their fantastic luck with the wind deserted them. The south-east trades had had so little south in them that La Fleche was nearer Brazil than she had intended to be when they died away altogether, leaving her wallowing on a heavy swell under a sun so huge, so very near, and so furious that even at first dawn the metal of the guns was still quite hot." ',
            "quote": '',
            "readMoreUrl": "  ",
            "dataProvidedUrl": "https://www.cannonade.net/index.php",
            "isConfirmed": true
        },


         // BLOCKADES
        {
            "title": "Blockade Tolon",
            "coordinates": [558.62, 704.37],
            "type": "Blockade",
            "image": "Sinking.png",
            "books": [
                "HMS Surprise",
                "The Mauritius Command",
            ],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ligula libero, porttitor ut aliquet sit amet, tincidunt ut leo. Vivamus eget pharetra leo.",
            "quote": '',
            "readMoreUrl": "  ",
            "dataProvidedUrl": "https://www.cannonade.net/index.php",
            "isConfirmed": true
        },
        {
            "title": "Blockade Mauritius Island",
            "coordinates": [325.12, 890.75],
            "type": "Blockade",
            "image": "Sinking.png",
            "books": [
                "The Mauritius Command",
            ],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ligula libero, porttitor ut aliquet sit amet, tincidunt ut leo. Vivamus eget pharetra leo.",
            "quote": '',
            "readMoreUrl": "  ",
            "dataProvidedUrl": "https://www.cannonade.net/index.php",
            "isConfirmed": true
        },
    ]
}