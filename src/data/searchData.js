const searchData = [
  // ==========================
  // STATES
  // ==========================
  {
    title: "Karnataka",
    type: "State",
    state: "Karnataka",
    path: "/karnataka",
    keywords: [
      "karnataka",
      "kar",
      "ka",
      "mysore state",
      "bengaluru state"
    ]
  },
  {
    title: "Kerala",
    type: "State",
    state: "Kerala",
    path: "/kerala",
    keywords: [
      "kerala",
      "ker",
      "gods own country",
      "malayalam state"
    ]
  },
  {
    title: "Tamil Nadu",
    type: "State",
    state: "Tamil Nadu",
    path: "/tamil-nadu",
    keywords: [
      "tamil nadu",
      "tamil",
      "tn",
      "madras state"
    ]
  },
  {
    title: "Telangana",
    type: "State",
    state: "Telangana",
    path: "/telangana",
    keywords: [
      "telangana",
      "ts",
      "hyderabad state"
    ]
  },
  {
    title: "Andhra Pradesh",
    type: "State",
    state: "Andhra Pradesh",
    path: "/andhra-pradesh",
    keywords: [
      "andhra",
      "andhra pradesh",
      "ap"
    ]
  },

  // ==========================
  // CATEGORY PAGES
  // ==========================

  {
    title: "Karnataka Architecture",
    type: "Category",
    state: "Karnataka",
    path: "/karnataka/architecture",
    keywords: [
      "karnataka architecture",
      "architecture",
      "monuments",
      "temples",
      "forts",
      "palaces",
      "heritage"
    ]
  },
  {
    title: "Karnataka Places",
    type: "Category",
    state: "Karnataka",
    path: "/karnataka/places",
    keywords: [
      "karnataka places",
      "tourist places",
      "destinations",
      "travel"
    ]
  },
  {
    title: "Karnataka Culture",
    type: "Category",
    state: "Karnataka",
    path: "/karnataka/culture",
    keywords: [
      "karnataka culture",
      "festival",
      "dance",
      "tradition"
    ]
  },
  {
    title: "Karnataka Cuisine",
    type: "Category",
    state: "Karnataka",
    path: "/karnataka/cuisine",
    keywords: [
      "karnataka cuisine",
      "food",
      "dish",
      "recipe"
    ]
  },
  {
    title: "Karnataka Kingdoms",
    type: "Category",
    state: "Karnataka",
    path: "/karnataka/kingdoms",
    keywords: [
      "karnataka kingdoms",
      "dynasties",
      "empires",
      "history"
    ]
  },
  {
    title: "Karnataka Wildlife",
    type: "Category",
    state: "Karnataka",
    path: "/karnataka/wildlife",
    keywords: [
      "karnataka wildlife",
      "animals",
      "national parks",
      "sanctuaries"
    ]
  },

  {
    title: "Kerala Architecture",
    type: "Category",
    state: "Kerala",
    path: "/kerala/architecture",
    keywords: ["kerala architecture","kerala temples","forts","palaces"]
  },
  {
    title: "Kerala Places",
    type: "Category",
    state: "Kerala",
    path: "/kerala/places",
    keywords: ["kerala places","munnar","alleppey","travel"]
  },
  {
    title: "Kerala Culture",
    type: "Category",
    state: "Kerala",
    path: "/kerala/culture",
    keywords: ["kerala culture","theyyam","kathakali","festival"]
  },
  {
    title: "Kerala Cuisine",
    type: "Category",
    state: "Kerala",
    path: "/kerala/cuisine",
    keywords: ["kerala food","kerala cuisine","appam","puttu"]
  },
  {
    title: "Kerala Kingdoms",
    type: "Category",
    state: "Kerala",
    path: "/kerala/kingdoms",
    keywords: ["kerala kingdoms","chera"]
  },
  {
    title: "Kerala Wildlife",
    type: "Category",
    state: "Kerala",
    path: "/kerala/wildlife",
    keywords: ["kerala wildlife","western ghats","periyar"]
  },

  {
    title: "Tamil Nadu Architecture",
    type: "Category",
    state: "Tamil Nadu",
    path: "/tamil-nadu/architecture",
    keywords: ["tamil nadu architecture","dravidian architecture"]
  },
  {
    title: "Tamil Nadu Places",
    type: "Category",
    state: "Tamil Nadu",
    path: "/tamil-nadu/places",
    keywords: ["tamil nadu places","tourism"]
  },
  {
    title: "Tamil Nadu Culture",
    type: "Category",
    state: "Tamil Nadu",
    path: "/tamil-nadu/culture",
    keywords: ["bharatanatyam","tamil culture"]
  },
  {
    title: "Tamil Nadu Cuisine",
    type: "Category",
    state: "Tamil Nadu",
    path: "/tamil-nadu/cuisine",
    keywords: ["tamil food","chettinad","dosa","idli"]
  },
  {
    title: "Tamil Nadu Kingdoms",
    type: "Category",
    state: "Tamil Nadu",
    path: "/tamil-nadu/kingdoms",
    keywords: ["cholas","pandyas","pallavas"]
  },
  {
    title: "Tamil Nadu Wildlife",
    type: "Category",
    state: "Tamil Nadu",
    path: "/tamil-nadu/wildlife",
    keywords: ["mudumalai","anamalai","nilgiri"]
  },

  {
    title: "Telangana Architecture",
    type: "Category",
    state: "Telangana",
    path: "/telangana/architecture",
    keywords: ["charminar","golconda","ramappa"]
  },
  {
    title: "Telangana Places",
    type: "Category",
    state: "Telangana",
    path: "/telangana/places",
    keywords: ["hyderabad","warangal"]
  },
  {
    title: "Telangana Culture",
    type: "Category",
    state: "Telangana",
    path: "/telangana/culture",
    keywords: ["bonalu","bathukamma"]
  },
  {
    title: "Telangana Cuisine",
    type: "Category",
    state: "Telangana",
    path: "/telangana/cuisine",
    keywords: ["hyderabadi biryani","haleem"]
  },
  {
    title: "Telangana Kingdoms",
    type: "Category",
    state: "Telangana",
    path: "/telangana/kingdoms",
    keywords: ["kakatiya","qutb shahi","nizam"]
  },
  {
    title: "Telangana Wildlife",
    type: "Category",
    state: "Telangana",
    path: "/telangana/wildlife",
    keywords: ["amrabad","kawal"]
  },

  {
    title: "Andhra Pradesh Architecture",
    type: "Category",
    state: "Andhra Pradesh",
    path: "/andhra-pradesh/architecture",
    keywords: ["lepakshi","amaravati"]
  },
  {
    title: "Andhra Pradesh Places",
    type: "Category",
    state: "Andhra Pradesh",
    path: "/andhra-pradesh/places",
    keywords: ["vizag","tirupati","araku"]
  },
  {
    title: "Andhra Pradesh Culture",
    type: "Category",
    state: "Andhra Pradesh",
    path: "/andhra-pradesh/culture",
    keywords: ["kuchipudi","andhra culture"]
  },
  {
    title: "Andhra Pradesh Cuisine",
    type: "Category",
    state: "Andhra Pradesh",
    path: "/andhra-pradesh/cuisine",
    keywords: ["gongura","pulihora","andhra meals"]
  },
  {
    title: "Andhra Pradesh Kingdoms",
    type: "Category",
    state: "Andhra Pradesh",
    path: "/andhra-pradesh/kingdoms",
    keywords: ["satavahana","vijayanagara"]
  },
  {
    title: "Andhra Pradesh Wildlife",
    type: "Category",
    state: "Andhra Pradesh",
    path: "/andhra-pradesh/wildlife",
    keywords: ["srisailam","papikonda"]
  },

  // ==========================
  // KARNATAKA PLACES
  // ==========================

  {
    title: "Hampi",
    type: "Place",
    state: "Karnataka",
    path: "/karnataka/places",
    keywords: [
      "hampi",
      "vijayanagara",
      "vijayanagar",
      "stone chariot",
      "virupaksha temple",
      "vitthala temple",
      "unesco"
    ]
  },
  {
    title: "Coorg",
    type: "Place",
    state: "Karnataka",
    path: "/karnataka/places",
    keywords: ["coorg","kodagu","coffee","madikeri"]
  },
  {
    title: "Gokarna",
    type: "Place",
    state: "Karnataka",
    path: "/karnataka/places",
    keywords: ["gokarna","om beach","kudle beach"]
  },
  {
    title: "Jog Falls",
    type: "Place",
    state: "Karnataka",
    path: "/karnataka/places",
    keywords: ["jog falls","gersoppa falls"]
  },
  {
    title: "Badami",
    type: "Place",
    state: "Karnataka",
    path: "/karnataka/places",
    keywords: ["badami","vatapi","cave temples"]
  },
  {
    title: "Aihole",
    type: "Place",
    state: "Karnataka",
    path: "/karnataka/places",
    keywords: ["aihole","cradle of temple architecture"]
  },
  {
    title: "Pattadakal",
    type: "Place",
    state: "Karnataka",
    path: "/karnataka/places",
    keywords: ["pattadakal","unesco","temple complex"]
  },

  // ==========================
  // KARNATAKA ARCHITECTURE
  // ==========================

  {
    title: "Mysore Palace",
    type: "Architecture",
    state: "Karnataka",
    path: "/karnataka/architecture",
    keywords: [
      "mysore palace",
      "mysuru palace",
      "amba vilas palace",
      "mysore",
      "mysuru"
    ]
  },
  {
    title: "Belur Temple",
    type: "Architecture",
    state: "Karnataka",
    path: "/karnataka/architecture",
    keywords: [
      "belur",
      "chennakesava",
      "chennakeshava",
      "hoysala temple"
    ]
  },
  {
    title: "Halebidu",
    type: "Architecture",
    state: "Karnataka",
    path: "/karnataka/architecture",
    keywords: [
      "halebidu",
      "halebid",
      "hoysaleswara",
      "hoysaleshwara"
    ]
  },
  {
    title: "Gol Gumbaz",
    type: "Architecture",
    state: "Karnataka",
    path: "/karnataka/architecture",
    keywords: [
      "gol gumbaz",
      "bijapur",
      "vijayapura"
    ]
  },
  {
    title: "Bangalore Palace",
    type: "Architecture",
    state: "Karnataka",
    path: "/karnataka/architecture",
    keywords: [
      "bangalore palace",
      "bengaluru palace"
    ]
  },

  // ==========================
  // KINGDOMS
  // ==========================

  {
    title: "Hoysalas",
    type: "Kingdom",
    state: "Karnataka",
    path: "/karnataka/kingdoms",
    keywords: ["hoysala","hoysalas"]
  },
  {
    title: "Chalukyas",
    type: "Kingdom",
    state: "Karnataka",
    path: "/karnataka/kingdoms",
    keywords: ["chalukya","badami chalukya","western chalukya"]
  },
  {
    title: "Kadambas",
    type: "Kingdom",
    state: "Karnataka",
    path: "/karnataka/kingdoms",
    keywords: ["kadamba","banavasi"]
  },
  {
    title: "Rashtrakutas",
    type: "Kingdom",
    state: "Karnataka",
    path: "/karnataka/kingdoms",
    keywords: ["rashtrakuta","rashtrakutas"]
  },
  {
    title: "Vijayanagara Empire",
    type: "Kingdom",
    state: "Karnataka",
    path: "/karnataka/kingdoms",
    keywords: ["vijayanagara","vijayanagar empire"]
  },

  // ==========================
  // TELANGANA
  // ==========================

  {
    title: "Golconda Fort",
    type: "Architecture",
    state: "Telangana",
    path: "/telangana/architecture",
    keywords: [
      "golconda",
      "golkonda",
      "golconda fort"
    ]
  },
  {
    title: "Charminar",
    type: "Architecture",
    state: "Telangana",
    path: "/telangana/architecture",
    keywords: [
      "charminar",
      "hyderabad"
    ]
  },
  {
    title: "Ramappa Temple",
    type: "Architecture",
    state: "Telangana",
    path: "/telangana/architecture",
    keywords: [
      "ramappa",
      "ramappa temple",
      "unesco"
    ]
  },

  // ==========================
  // TAMIL NADU
  // ==========================

  {
    title: "Meenakshi Temple",
    type: "Architecture",
    state: "Tamil Nadu",
    path: "/tamil-nadu/architecture",
    keywords: [
      "meenakshi",
      "madurai temple"
    ]
  },
  {
    title: "Brihadeeswara Temple",
    type: "Architecture",
    state: "Tamil Nadu",
    path: "/tamil-nadu/architecture",
    keywords: [
      "brihadeeswara",
      "big temple",
      "thanjavur"
    ]
  },

  // ==========================
  // ANDHRA
  // ==========================

  {
    title: "Lepakshi",
    type: "Architecture",
    state: "Andhra Pradesh",
    path: "/andhra-pradesh/architecture",
    keywords: [
      "lepakshi",
      "veerabhadra temple"
    ]
  },

  // ==========================
  // WILDLIFE
  // ==========================

  {
    title: "Nilgiri Tahr",
    type: "Wildlife",
    state: "Kerala / Tamil Nadu",
    path: "/kerala/wildlife",
    keywords: [
      "nilgiri tahr",
      "tahr",
      "western ghats"
    ]
  },
  {
    title: "Tiger",
    type: "Wildlife",
    state: "Multiple States",
    path: "/karnataka/wildlife",
    keywords: [
      "tiger",
      "royal bengal tiger"
    ]
  },
  {
    title: "Asian Elephant",
    type: "Wildlife",
    state: "Multiple States",
    path: "/karnataka/wildlife",
    keywords: [
      "elephant",
      "asian elephant"
    ]
  },
    // ==========================
  // KARNATAKA PLACES
  // ==========================

  {
    title: "Bandipur National Park",
    type: "Place",
    state: "Karnataka",
    path: "/karnataka/places",
    keywords: ["bandipur", "bandipur national park"]
  },
  {
    title: "Nagarhole National Park",
    type: "Place",
    state: "Karnataka",
    path: "/karnataka/places",
    keywords: ["nagarhole", "rajiv gandhi national park"]
  },
  {
    title: "Dandeli",
    type: "Place",
    state: "Karnataka",
    path: "/karnataka/places",
    keywords: ["dandeli", "rafting", "kali river"]
  },
  {
    title: "Chikmagalur",
    type: "Place",
    state: "Karnataka",
    path: "/karnataka/places",
    keywords: ["chikmagalur", "coffee", "mullayanagiri"]
  },
  {
    title: "Agumbe",
    type: "Place",
    state: "Karnataka",
    path: "/karnataka/places",
    keywords: ["agumbe", "rainforest", "sunset point"]
  },
  {
    title: "Sakleshpur",
    type: "Place",
    state: "Karnataka",
    path: "/karnataka/places",
    keywords: ["sakleshpur", "western ghats"]
  },

  // ==========================
  // KARNATAKA ARCHITECTURE
  // ==========================

  {
    title: "Murudeshwar Temple",
    type: "Architecture",
    state: "Karnataka",
    path: "/karnataka/architecture",
    keywords: ["murudeshwar", "shiva statue"]
  },
  {
    title: "Banavasi",
    type: "Architecture",
    state: "Karnataka",
    path: "/karnataka/architecture",
    keywords: ["banavasi", "madhukeshwara temple"]
  },
  {
    title: "Shravanabelagola",
    type: "Architecture",
    state: "Karnataka",
    path: "/karnataka/architecture",
    keywords: ["shravanabelagola", "gomateshwara", "bahubali"]
  },

  // ==========================
  // KARNATAKA CUISINE
  // ==========================

  {
    title: "Bisi Bele Bath",
    type: "Cuisine",
    state: "Karnataka",
    path: "/karnataka/cuisine",
    keywords: ["bisi bele bath", "bisibelebath"]
  },
  {
    title: "Mysore Pak",
    type: "Cuisine",
    state: "Karnataka",
    path: "/karnataka/cuisine",
    keywords: ["mysore pak", "sweet"]
  },
  {
    title: "Neer Dosa",
    type: "Cuisine",
    state: "Karnataka",
    path: "/karnataka/cuisine",
    keywords: ["neer dosa", "coastal dosa"]
  },
  {
    title: "Ragi Mudde",
    type: "Cuisine",
    state: "Karnataka",
    path: "/karnataka/cuisine",
    keywords: ["ragi mudde", "finger millet"]
  },
  {
    title: "Mangalorean Fish Curry",
    type: "Cuisine",
    state: "Karnataka",
    path: "/karnataka/cuisine",
    keywords: ["mangalorean fish curry", "coastal cuisine"]
  },

  // ==========================
  // KARNATAKA CULTURE
  // ==========================

  {
    title: "Yakshagana",
    type: "Culture",
    state: "Karnataka",
    path: "/karnataka/culture",
    keywords: ["yakshagana", "folk theatre"]
  },
  {
    title: "Kambala",
    type: "Culture",
    state: "Karnataka",
    path: "/karnataka/culture",
    keywords: ["kambala", "buffalo race"]
  },
  {
    title: "Mysore Dasara",
    type: "Culture",
    state: "Karnataka",
    path: "/karnataka/culture",
    keywords: ["mysore dasara", "dasara"]
  },
  {
    title: "Dollu Kunitha",
    type: "Culture",
    state: "Karnataka",
    path: "/karnataka/culture",
    keywords: ["dollu kunitha", "folk dance"]
  },

  // ==========================
  // KERALA
  // ==========================

  {
    title: "Munnar",
    type: "Place",
    state: "Kerala",
    path: "/kerala/places",
    keywords: ["munnar", "tea gardens"]
  },
  {
    title: "Alleppey",
    type: "Place",
    state: "Kerala",
    path: "/kerala/places",
    keywords: ["alleppey", "alappuzha", "houseboats"]
  },
  {
    title: "Athirappilly Falls",
    type: "Place",
    state: "Kerala",
    path: "/kerala/places",
    keywords: ["athirappilly", "athirapally falls"]
  },
  {
    title: "Bekal Fort",
    type: "Architecture",
    state: "Kerala",
    path: "/kerala/architecture",
    keywords: ["bekal fort", "bekal"]
  },
  {
    title: "Padmanabhaswamy Temple",
    type: "Architecture",
    state: "Kerala",
    path: "/kerala/architecture",
    keywords: ["padmanabhaswamy", "trivandrum temple"]
  },
  {
    title: "Kathakali",
    type: "Culture",
    state: "Kerala",
    path: "/kerala/culture",
    keywords: ["kathakali"]
  },
  {
    title: "Theyyam",
    type: "Culture",
    state: "Kerala",
    path: "/kerala/culture",
    keywords: ["theyyam"]
  },
  {
    title: "Mohiniyattam",
    type: "Culture",
    state: "Kerala",
    path: "/kerala/culture",
    keywords: ["mohiniyattam"]
  },
  {
    title: "Appam",
    type: "Cuisine",
    state: "Kerala",
    path: "/kerala/cuisine",
    keywords: ["appam"]
  },
  {
    title: "Puttu",
    type: "Cuisine",
    state: "Kerala",
    path: "/kerala/cuisine",
    keywords: ["puttu"]
  },
  {
    title: "Periyar National Park",
    type: "Wildlife",
    state: "Kerala",
    path: "/kerala/wildlife",
    keywords: ["periyar", "periyar tiger reserve"]
  },

  // ==========================
  // TAMIL NADU
  // ==========================

  {
    title: "Ooty",
    type: "Place",
    state: "Tamil Nadu",
    path: "/tamil-nadu/places",
    keywords: ["ooty", "udhagamandalam"]
  },
  {
    title: "Kodaikanal",
    type: "Place",
    state: "Tamil Nadu",
    path: "/tamil-nadu/places",
    keywords: ["kodaikanal"]
  },
  {
    title: "Shore Temple",
    type: "Architecture",
    state: "Tamil Nadu",
    path: "/tamil-nadu/architecture",
    keywords: ["shore temple", "mahabalipuram"]
  },
  {
    title: "Airavatesvara Temple",
    type: "Architecture",
    state: "Tamil Nadu",
    path: "/tamil-nadu/architecture",
    keywords: ["airavatesvara", "darasuram"]
  },
  {
    title: "Bharatanatyam",
    type: "Culture",
    state: "Tamil Nadu",
    path: "/tamil-nadu/culture",
    keywords: ["bharatanatyam"]
  },
  {
    title: "Chettinad Chicken",
    type: "Cuisine",
    state: "Tamil Nadu",
    path: "/tamil-nadu/cuisine",
    keywords: ["chettinad", "chettinad chicken"]
  },
  {
    title: "Mudumalai National Park",
    type: "Wildlife",
    state: "Tamil Nadu",
    path: "/tamil-nadu/wildlife",
    keywords: ["mudumalai", "mudumalai national park"]
  },

  // ==========================
  // TELANGANA
  // ==========================

  {
    title: "Warangal Fort",
    type: "Architecture",
    state: "Telangana",
    path: "/telangana/architecture",
    keywords: ["warangal fort"]
  },
  {
    title: "Bhongir Fort",
    type: "Architecture",
    state: "Telangana",
    path: "/telangana/architecture",
    keywords: ["bhongir", "bhuvanagiri fort"]
  },
  {
    title: "Bathukamma",
    type: "Culture",
    state: "Telangana",
    path: "/telangana/culture",
    keywords: ["bathukamma"]
  },
  {
    title: "Bonalu",
    type: "Culture",
    state: "Telangana",
    path: "/telangana/culture",
    keywords: ["bonalu"]
  },
  {
    title: "Hyderabadi Biryani",
    type: "Cuisine",
    state: "Telangana",
    path: "/telangana/cuisine",
    keywords: ["hyderabadi biryani", "biryani"]
  },
  {
    title: "Amrabad Tiger Reserve",
    type: "Wildlife",
    state: "Telangana",
    path: "/telangana/wildlife",
    keywords: ["amrabad", "amrabad tiger reserve"]
  },

  // ==========================
  // ANDHRA PRADESH
  // ==========================

  {
    title: "Tirupati",
    type: "Place",
    state: "Andhra Pradesh",
    path: "/andhra-pradesh/places",
    keywords: ["tirupati", "tirumala"]
  },
  {
    title: "Araku Valley",
    type: "Place",
    state: "Andhra Pradesh",
    path: "/andhra-pradesh/places",
    keywords: ["araku", "araku valley"]
  },
  {
    title: "Borra Caves",
    type: "Place",
    state: "Andhra Pradesh",
    path: "/andhra-pradesh/places",
    keywords: ["borra caves"]
  },
  {
    title: "Kuchipudi",
    type: "Culture",
    state: "Andhra Pradesh",
    path: "/andhra-pradesh/culture",
    keywords: ["kuchipudi"]
  },
  {
    title: "Gongura",
    type: "Cuisine",
    state: "Andhra Pradesh",
    path: "/andhra-pradesh/cuisine",
    keywords: ["gongura"]
  },
  {
    title: "Pulihora",
    type: "Cuisine",
    state: "Andhra Pradesh",
    path: "/andhra-pradesh/cuisine",
    keywords: ["pulihora", "tamarind rice"]
  },
  {
    title: "Sri Venkateswara National Park",
    type: "Wildlife",
    state: "Andhra Pradesh",
    path: "/andhra-pradesh/wildlife",
    keywords: ["sri venkateswara national park", "venkateswara park"]
  },
    // ==========================
  // KARNATAKA PLACES
  // ==========================

  {
    title: "Mullayanagiri",
    type: "Place",
    state: "Karnataka",
    path: "/karnataka/places",
    keywords: ["mullayanagiri", "highest peak of karnataka"]
  },
  {
    title: "Kemmanagundi",
    type: "Place",
    state: "Karnataka",
    path: "/karnataka/places",
    keywords: ["kemmanagundi", "hill station"]
  },
  {
    title: "Shivanasamudra Falls",
    type: "Place",
    state: "Karnataka",
    path: "/karnataka/places",
    keywords: ["shivanasamudra", "gaganachukki", "bharachukki"]
  },
  {
    title: "Kabini",
    type: "Place",
    state: "Karnataka",
    path: "/karnataka/places",
    keywords: ["kabini", "kabini river", "kabini safari"]
  },
  {
    title: "Udupi",
    type: "Place",
    state: "Karnataka",
    path: "/karnataka/places",
    keywords: ["udupi", "krishna temple"]
  },

  // ==========================
  // KARNATAKA ARCHITECTURE
  // ==========================

  {
    title: "Bidar Fort",
    type: "Architecture",
    state: "Karnataka",
    path: "/karnataka/architecture",
    keywords: ["bidar fort", "bidar"]
  },
  {
    title: "Jamia Masjid Srirangapatna",
    type: "Architecture",
    state: "Karnataka",
    path: "/karnataka/architecture",
    keywords: ["jamia masjid", "srirangapatna mosque"]
  },
  {
    title: "Ranganathaswamy Temple",
    type: "Architecture",
    state: "Karnataka",
    path: "/karnataka/architecture",
    keywords: ["ranganathaswamy temple", "srirangapatna temple"]
  },

  // ==========================
  // KARNATAKA KINGDOMS
  // ==========================

  {
    title: "Gangas",
    type: "Kingdom",
    state: "Karnataka",
    path: "/karnataka/kingdoms",
    keywords: ["western ganga", "ganga dynasty"]
  },
  {
    title: "Nayakas of Keladi",
    type: "Kingdom",
    state: "Karnataka",
    path: "/karnataka/kingdoms",
    keywords: ["keladi", "keladi nayaka"]
  },

  // ==========================
  // KARNATAKA CULTURE
  // ==========================

  {
    title: "Veeragase",
    type: "Culture",
    state: "Karnataka",
    path: "/karnataka/culture",
    keywords: ["veeragase", "veeragase dance"]
  },
  {
    title: "Suggi Kunitha",
    type: "Culture",
    state: "Karnataka",
    path: "/karnataka/culture",
    keywords: ["suggi kunitha", "harvest dance"]
  },
  {
    title: "Karaga Festival",
    type: "Culture",
    state: "Karnataka",
    path: "/karnataka/culture",
    keywords: ["karaga", "bangalore karaga"]
  },

  // ==========================
  // KARNATAKA CUISINE
  // ==========================

  {
    title: "Akki Roti",
    type: "Cuisine",
    state: "Karnataka",
    path: "/karnataka/cuisine",
    keywords: ["akki roti", "rice roti"]
  },
  {
    title: "Maddur Vada",
    type: "Cuisine",
    state: "Karnataka",
    path: "/karnataka/cuisine",
    keywords: ["maddur vada"]
  },
  {
    title: "Kori Gassi",
    type: "Cuisine",
    state: "Karnataka",
    path: "/karnataka/cuisine",
    keywords: ["kori gassi", "mangalorean chicken curry"]
  },

  // ==========================
  // KERALA
  // ==========================

  {
    title: "Wayanad",
    type: "Place",
    state: "Kerala",
    path: "/kerala/places",
    keywords: ["wayanad"]
  },
  {
    title: "Varkala",
    type: "Place",
    state: "Kerala",
    path: "/kerala/places",
    keywords: ["varkala", "varkala beach"]
  },
  {
    title: "Kumarakom",
    type: "Place",
    state: "Kerala",
    path: "/kerala/places",
    keywords: ["kumarakom"]
  },
  {
    title: "Mattancherry Palace",
    type: "Architecture",
    state: "Kerala",
    path: "/kerala/architecture",
    keywords: ["mattancherry palace", "dutch palace"]
  },
  {
    title: "Thrissur Pooram",
    type: "Culture",
    state: "Kerala",
    path: "/kerala/culture",
    keywords: ["thrissur pooram"]
  },
  {
    title: "Sadya",
    type: "Cuisine",
    state: "Kerala",
    path: "/kerala/cuisine",
    keywords: ["sadya", "sadhya"]
  },

  // ==========================
  // TAMIL NADU
  // ==========================

  {
    title: "Yercaud",
    type: "Place",
    state: "Tamil Nadu",
    path: "/tamil-nadu/places",
    keywords: ["yercaud"]
  },
  {
    title: "Rameswaram",
    type: "Place",
    state: "Tamil Nadu",
    path: "/tamil-nadu/places",
    keywords: ["rameswaram"]
  },
  {
    title: "Nilgiri Mountain Railway",
    type: "Architecture",
    state: "Tamil Nadu",
    path: "/tamil-nadu/architecture",
    keywords: ["nilgiri railway", "toy train", "ooty toy train"]
  },
  {
    title: "Jallikattu",
    type: "Culture",
    state: "Tamil Nadu",
    path: "/tamil-nadu/culture",
    keywords: ["jallikattu"]
  },
  {
    title: "Pongal",
    type: "Cuisine",
    state: "Tamil Nadu",
    path: "/tamil-nadu/cuisine",
    keywords: ["pongal", "ven pongal"]
  },

  // ==========================
  // TELANGANA
  // ==========================

  {
    title: "Thousand Pillar Temple",
    type: "Architecture",
    state: "Telangana",
    path: "/telangana/architecture",
    keywords: ["thousand pillar temple"]
  },
  {
    title: "Medak Cathedral",
    type: "Architecture",
    state: "Telangana",
    path: "/telangana/architecture",
    keywords: ["medak cathedral"]
  },
  {
    title: "Pocharam Wildlife Sanctuary",
    type: "Wildlife",
    state: "Telangana",
    path: "/telangana/wildlife",
    keywords: ["pocharam"]
  },
  {
    title: "Sakinalu",
    type: "Cuisine",
    state: "Telangana",
    path: "/telangana/cuisine",
    keywords: ["sakinalu"]
  },

  // ==========================
  // ANDHRA PRADESH
  // ==========================

  {
    title: "Horsley Hills",
    type: "Place",
    state: "Andhra Pradesh",
    path: "/andhra-pradesh/places",
    keywords: ["horsley hills"]
  },
  {
    title: "Gandikota",
    type: "Place",
    state: "Andhra Pradesh",
    path: "/andhra-pradesh/places",
    keywords: ["gandikota", "grand canyon of india"]
  },
  {
    title: "Undavalli Caves",
    type: "Architecture",
    state: "Andhra Pradesh",
    path: "/andhra-pradesh/architecture",
    keywords: ["undavalli caves"]
  },
  {
    title: "Amaravati Stupa",
    type: "Architecture",
    state: "Andhra Pradesh",
    path: "/andhra-pradesh/architecture",
    keywords: ["amaravati stupa"]
  },
  {
    title: "Bobbatlu",
    type: "Cuisine",
    state: "Andhra Pradesh",
    path: "/andhra-pradesh/cuisine",
    keywords: ["bobbatlu", "puran poli andhra"]
  },
  {
    title: "Papikonda National Park",
    type: "Wildlife",
    state: "Andhra Pradesh",
    path: "/andhra-pradesh/wildlife",
    keywords: ["papikonda", "papikonda national park"]
  },
    // ==========================
  // KARNATAKA PLACES
  // ==========================

  {
    title: "Nandi Hills",
    type: "Place",
    state: "Karnataka",
    path: "/karnataka/places",
    keywords: ["nandi hills", "nandidurga", "sunrise point"]
  },
  {
    title: "Biligiri Rangan Hills",
    type: "Place",
    state: "Karnataka",
    path: "/karnataka/places",
    keywords: ["br hills", "biligiri rangan hills"]
  },
  {
    title: "Kudremukh",
    type: "Place",
    state: "Karnataka",
    path: "/karnataka/places",
    keywords: ["kudremukh", "horse face mountain"]
  },
  {
    title: "Yana Caves",
    type: "Place",
    state: "Karnataka",
    path: "/karnataka/places",
    keywords: ["yana", "yana caves"]
  },
  {
    title: "Mirjan Fort",
    type: "Place",
    state: "Karnataka",
    path: "/karnataka/places",
    keywords: ["mirjan fort", "mirjan"]
  },

  // ==========================
  // KARNATAKA ARCHITECTURE
  // ==========================

  {
    title: "Tipu Sultan Summer Palace",
    type: "Architecture",
    state: "Karnataka",
    path: "/karnataka/architecture",
    keywords: ["tipu palace", "summer palace", "tipu sultan"]
  },
  {
    title: "Devanahalli Fort",
    type: "Architecture",
    state: "Karnataka",
    path: "/karnataka/architecture",
    keywords: ["devanahalli fort"]
  },
  {
    title: "Chitradurga Fort",
    type: "Architecture",
    state: "Karnataka",
    path: "/karnataka/architecture",
    keywords: ["chitradurga fort", "stone fort"]
  },
  {
    title: "Lakkundi",
    type: "Architecture",
    state: "Karnataka",
    path: "/karnataka/architecture",
    keywords: ["lakkundi", "kasivisvesvara temple"]
  },

  // ==========================
  // KARNATAKA CUISINE
  // ==========================

  {
    title: "Khara Bath",
    type: "Cuisine",
    state: "Karnataka",
    path: "/karnataka/cuisine",
    keywords: ["khara bath", "upma"]
  },
  {
    title: "Kesari Bath",
    type: "Cuisine",
    state: "Karnataka",
    path: "/karnataka/cuisine",
    keywords: ["kesari bath", "sheera"]
  },
  {
    title: "Dharwad Peda",
    type: "Cuisine",
    state: "Karnataka",
    path: "/karnataka/cuisine",
    keywords: ["dharwad peda"]
  },
  {
    title: "Obbattu",
    type: "Cuisine",
    state: "Karnataka",
    path: "/karnataka/cuisine",
    keywords: ["obbattu", "holige"]
  },

  // ==========================
  // KARNATAKA CULTURE
  // ==========================

  {
    title: "Bayalata",
    type: "Culture",
    state: "Karnataka",
    path: "/karnataka/culture",
    keywords: ["bayalata", "open theatre"]
  },
  {
    title: "Bhoota Kola",
    type: "Culture",
    state: "Karnataka",
    path: "/karnataka/culture",
    keywords: ["bhoota kola", "daiva kola"]
  },
  {
    title: "Nagamandala",
    type: "Culture",
    state: "Karnataka",
    path: "/karnataka/culture",
    keywords: ["nagamandala"]
  },

  // ==========================
  // KARNATAKA KINGDOMS
  // ==========================

  {
    title: "Alupas",
    type: "Kingdom",
    state: "Karnataka",
    path: "/karnataka/kingdoms",
    keywords: ["alupa", "alupas"]
  },
  {
    title: "Wodeyars",
    type: "Kingdom",
    state: "Karnataka",
    path: "/karnataka/kingdoms",
    keywords: ["wodeyar", "mysore kingdom"]
  },

  // ==========================
  // KERALA
  // ==========================

  {
    title: "Kovalam",
    type: "Place",
    state: "Kerala",
    path: "/kerala/places",
    keywords: ["kovalam", "kovalam beach"]
  },
  {
    title: "Silent Valley National Park",
    type: "Place",
    state: "Kerala",
    path: "/kerala/places",
    keywords: ["silent valley"]
  },
  {
    title: "Fort Kochi",
    type: "Architecture",
    state: "Kerala",
    path: "/kerala/architecture",
    keywords: ["fort kochi", "kochi fort"]
  },
  {
    title: "Cheraman Juma Mosque",
    type: "Architecture",
    state: "Kerala",
    path: "/kerala/architecture",
    keywords: ["cheraman mosque", "cheraman juma masjid"]
  },
  {
    title: "Koodiyattam",
    type: "Culture",
    state: "Kerala",
    path: "/kerala/culture",
    keywords: ["koodiyattam"]
  },
  {
    title: "Nadan Kozhi Curry",
    type: "Cuisine",
    state: "Kerala",
    path: "/kerala/cuisine",
    keywords: ["nadan kozhi", "kerala chicken curry"]
  },

  // ==========================
  // TAMIL NADU
  // ==========================

  {
    title: "Kanyakumari",
    type: "Place",
    state: "Tamil Nadu",
    path: "/tamil-nadu/places",
    keywords: ["kanyakumari", "cape comorin"]
  },
  {
    title: "Dhanushkodi",
    type: "Place",
    state: "Tamil Nadu",
    path: "/tamil-nadu/places",
    keywords: ["dhanushkodi", "ghost town"]
  },
  {
    title: "Rock Fort Temple",
    type: "Architecture",
    state: "Tamil Nadu",
    path: "/tamil-nadu/architecture",
    keywords: ["rock fort", "tiruchirappalli rock fort", "trichy rock fort"]
  },
  {
    title: "Gangaikonda Cholapuram",
    type: "Architecture",
    state: "Tamil Nadu",
    path: "/tamil-nadu/architecture",
    keywords: ["gangaikonda cholapuram"]
  },
  {
    title: "Karagattam",
    type: "Culture",
    state: "Tamil Nadu",
    path: "/tamil-nadu/culture",
    keywords: ["karagattam"]
  },
  {
    title: "Kothu Parotta",
    type: "Cuisine",
    state: "Tamil Nadu",
    path: "/tamil-nadu/cuisine",
    keywords: ["kothu parotta", "kothu paratha"]
  },

  // ==========================
  // TELANGANA
  // ==========================

  {
    title: "Laknavaram Lake",
    type: "Place",
    state: "Telangana",
    path: "/telangana/places",
    keywords: ["laknavaram lake"]
  },
  {
    title: "Nagarjuna Sagar",
    type: "Place",
    state: "Telangana",
    path: "/telangana/places",
    keywords: ["nagarjuna sagar"]
  },
  {
    title: "Qutb Shahi Tombs",
    type: "Architecture",
    state: "Telangana",
    path: "/telangana/architecture",
    keywords: ["qutb shahi tombs"]
  },
  {
    title: "Pesarattu",
    type: "Cuisine",
    state: "Telangana",
    path: "/telangana/cuisine",
    keywords: ["pesarattu"]
  },

  // ==========================
  // ANDHRA PRADESH
  // ==========================

  {
    title: "Srisailam",
    type: "Place",
    state: "Andhra Pradesh",
    path: "/andhra-pradesh/places",
    keywords: ["srisailam"]
  },
  {
    title: "Belum Caves",
    type: "Place",
    state: "Andhra Pradesh",
    path: "/andhra-pradesh/places",
    keywords: ["belum caves"]
  },
  {
    title: "Simhachalam Temple",
    type: "Architecture",
    state: "Andhra Pradesh",
    path: "/andhra-pradesh/architecture",
    keywords: ["simhachalam", "simhachalam temple"]
  },
  {
    title: "Ariselu",
    type: "Cuisine",
    state: "Andhra Pradesh",
    path: "/andhra-pradesh/cuisine",
    keywords: ["ariselu", "adhirasam"]
  },
  {
    title: "Etikoppaka Toys",
    type: "Culture",
    state: "Andhra Pradesh",
    path: "/andhra-pradesh/culture",
    keywords: ["etikoppaka", "wooden toys"]
  },

  // ==========================
  // SHARED WILDLIFE
  // ==========================

  {
    title: "Indian Gaur",
    type: "Wildlife",
    state: "Multiple States",
    path: "/karnataka/wildlife",
    keywords: ["gaur", "indian bison"]
  },
  {
    title: "Sloth Bear",
    type: "Wildlife",
    state: "Multiple States",
    path: "/karnataka/wildlife",
    keywords: ["sloth bear"]
  },
  {
    title: "Leopard",
    type: "Wildlife",
    state: "Multiple States",
    path: "/karnataka/wildlife",
    keywords: ["leopard", "indian leopard"]
  },
  {
    title: "King Cobra",
    type: "Wildlife",
    state: "Multiple States",
    path: "/karnataka/wildlife",
    keywords: ["king cobra"]
  },
    // ==========================
  // KARNATAKA PLACES
  // ==========================

  {
    title: "Srirangapatna",
    type: "Place",
    state: "Karnataka",
    path: "/karnataka/places",
    keywords: ["srirangapatna", "seringapatam"]
  },
  {
    title: "Bhagamandala",
    type: "Place",
    state: "Karnataka",
    path: "/karnataka/places",
    keywords: ["bhagamandala", "triveni sangama"]
  },
  {
    title: "Talakaveri",
    type: "Place",
    state: "Karnataka",
    path: "/karnataka/places",
    keywords: ["talakaveri", "talacauvery", "source of cauvery"]
  },
  {
    title: "Maravanthe Beach",
    type: "Place",
    state: "Karnataka",
    path: "/karnataka/places",
    keywords: ["maravanthe", "maravanthe beach"]
  },
  {
    title: "Malpe Beach",
    type: "Place",
    state: "Karnataka",
    path: "/karnataka/places",
    keywords: ["malpe", "malpe beach"]
  },

  // ==========================
  // KARNATAKA ARCHITECTURE
  // ==========================

  {
    title: "Ibrahim Rauza",
    type: "Architecture",
    state: "Karnataka",
    path: "/karnataka/architecture",
    keywords: ["ibrahim rauza", "ibrahim roza"]
  },
  {
    title: "Keshava Temple Somanathapura",
    type: "Architecture",
    state: "Karnataka",
    path: "/karnataka/architecture",
    keywords: ["somanathapura", "keshava temple"]
  },
  {
    title: "Mahabaleshwar Temple Gokarna",
    type: "Architecture",
    state: "Karnataka",
    path: "/karnataka/architecture",
    keywords: ["mahabaleshwar temple", "gokarna temple"]
  },

  // ==========================
  // KARNATAKA CUISINE
  // ==========================

  {
    title: "Udupi Sambar",
    type: "Cuisine",
    state: "Karnataka",
    path: "/karnataka/cuisine",
    keywords: ["udupi sambar"]
  },
  {
    title: "Kunda",
    type: "Cuisine",
    state: "Karnataka",
    path: "/karnataka/cuisine",
    keywords: ["kunda", "belagavi kunda"]
  },
  {
    title: "Mangalore Buns",
    type: "Cuisine",
    state: "Karnataka",
    path: "/karnataka/cuisine",
    keywords: ["mangalore buns", "banana buns"]
  },

  // ==========================
  // KARNATAKA CULTURE
  // ==========================

  {
    title: "Lavani Karnataka",
    type: "Culture",
    state: "Karnataka",
    path: "/karnataka/culture",
    keywords: ["lavani karnataka"]
  },
  {
    title: "Kodava Culture",
    type: "Culture",
    state: "Karnataka",
    path: "/karnataka/culture",
    keywords: ["kodava", "coorg culture"]
  },

  // ==========================
  // KARNATAKA KINGDOMS
  // ==========================

  {
    title: "Bahmani Sultanate",
    type: "Kingdom",
    state: "Karnataka",
    path: "/karnataka/kingdoms",
    keywords: ["bahmani", "bahmani sultanate"]
  },
  {
    title: "Adil Shahi Dynasty",
    type: "Kingdom",
    state: "Karnataka",
    path: "/karnataka/kingdoms",
    keywords: ["adil shahi", "bijapur sultanate"]
  },

  // ==========================
  // KERALA
  // ==========================

  {
    title: "Ponmudi",
    type: "Place",
    state: "Kerala",
    path: "/kerala/places",
    keywords: ["ponmudi"]
  },
  {
    title: "Marari Beach",
    type: "Place",
    state: "Kerala",
    path: "/kerala/places",
    keywords: ["marari beach", "mararikulam"]
  },
  {
    title: "Edakkal Caves",
    type: "Place",
    state: "Kerala",
    path: "/kerala/places",
    keywords: ["edakkal caves"]
  },
  {
    title: "Hill Palace Museum",
    type: "Architecture",
    state: "Kerala",
    path: "/kerala/architecture",
    keywords: ["hill palace", "hill palace museum"]
  },
  {
    title: "Aranmula Boat Race",
    type: "Culture",
    state: "Kerala",
    path: "/kerala/culture",
    keywords: ["aranmula boat race"]
  },
  {
    title: "Malabar Parotta",
    type: "Cuisine",
    state: "Kerala",
    path: "/kerala/cuisine",
    keywords: ["malabar parotta", "kerala parotta"]
  },

  // ==========================
  // TAMIL NADU
  // ==========================

  {
    title: "Velankanni",
    type: "Place",
    state: "Tamil Nadu",
    path: "/tamil-nadu/places",
    keywords: ["velankanni", "velankanni church"]
  },
  {
    title: "Yelagiri",
    type: "Place",
    state: "Tamil Nadu",
    path: "/tamil-nadu/places",
    keywords: ["yelagiri"]
  },
  {
    title: "Kapaleeshwarar Temple",
    type: "Architecture",
    state: "Tamil Nadu",
    path: "/tamil-nadu/architecture",
    keywords: ["kapaleeshwarar", "kapaleeswarar temple"]
  },
  {
    title: "Nataraja Temple",
    type: "Architecture",
    state: "Tamil Nadu",
    path: "/tamil-nadu/architecture",
    keywords: ["chidambaram temple", "nataraja temple"]
  },
  {
    title: "Silambam",
    type: "Culture",
    state: "Tamil Nadu",
    path: "/tamil-nadu/culture",
    keywords: ["silambam", "martial art"]
  },
  {
    title: "Filter Coffee",
    type: "Cuisine",
    state: "Tamil Nadu",
    path: "/tamil-nadu/cuisine",
    keywords: ["filter coffee", "degree coffee"]
  },

  // ==========================
  // TELANGANA
  // ==========================

  {
    title: "Ananthagiri Hills",
    type: "Place",
    state: "Telangana",
    path: "/telangana/places",
    keywords: ["ananthagiri hills"]
  },
  {
    title: "Kuntala Falls",
    type: "Place",
    state: "Telangana",
    path: "/telangana/places",
    keywords: ["kuntala falls"]
  },
  {
    title: "Yadadri Temple",
    type: "Architecture",
    state: "Telangana",
    path: "/telangana/architecture",
    keywords: ["yadadri", "yadagirigutta"]
  },
  {
    title: "Osmania Biscuits",
    type: "Cuisine",
    state: "Telangana",
    path: "/telangana/cuisine",
    keywords: ["osmania biscuit", "osmania biscuits"]
  },
  {
    title: "Lambadi Dance",
    type: "Culture",
    state: "Telangana",
    path: "/telangana/culture",
    keywords: ["lambadi dance", "banjara dance"]
  },

  // ==========================
  // ANDHRA PRADESH
  // ==========================

  {
    title: "Maredumilli",
    type: "Place",
    state: "Andhra Pradesh",
    path: "/andhra-pradesh/places",
    keywords: ["maredumilli"]
  },
  {
    title: "Lambasingi",
    type: "Place",
    state: "Andhra Pradesh",
    path: "/andhra-pradesh/places",
    keywords: ["lambasingi", "kashmir of andhra"]
  },
  {
    title: "Srikalahasti Temple",
    type: "Architecture",
    state: "Andhra Pradesh",
    path: "/andhra-pradesh/architecture",
    keywords: ["srikalahasti", "srikalahasti temple"]
  },
  {
    title: "Kondapalli Toys",
    type: "Culture",
    state: "Andhra Pradesh",
    path: "/andhra-pradesh/culture",
    keywords: ["kondapalli", "kondapalli toys"]
  },
  {
    title: "Pootharekulu",
    type: "Cuisine",
    state: "Andhra Pradesh",
    path: "/andhra-pradesh/cuisine",
    keywords: ["pootharekulu", "paper sweet"]
  },

  // ==========================
  // WILDLIFE
  // ==========================

  {
    title: "Nilgiri Langur",
    type: "Wildlife",
    state: "Kerala / Tamil Nadu",
    path: "/kerala/wildlife",
    keywords: ["nilgiri langur"]
  },
  {
    title: "Lion-tailed Macaque",
    type: "Wildlife",
    state: "Kerala / Karnataka / Tamil Nadu",
    path: "/kerala/wildlife",
    keywords: ["lion tailed macaque", "lion-tailed macaque"]
  },
  {
    title: "Indian Giant Squirrel",
    type: "Wildlife",
    state: "Multiple States",
    path: "/karnataka/wildlife",
    keywords: ["giant squirrel", "malabar giant squirrel"]
  },
  {
    title: "Blackbuck",
    type: "Wildlife",
    state: "Multiple States",
    path: "/karnataka/wildlife",
    keywords: ["blackbuck"]
  },
  {
    title: "Indian Pangolin",
    type: "Wildlife",
    state: "Multiple States",
    path: "/karnataka/wildlife",
    keywords: ["pangolin", "indian pangolin"]
  },
    // ==========================
  // CITIES & ALIASES
  // ==========================

  {
    title: "Bengaluru",
    type: "Place",
    state: "Karnataka",
    path: "/karnataka/places",
    keywords: ["bengaluru", "bangalore", "blr", "silicon valley of india"]
  },
  {
    title: "Mysuru",
    type: "Place",
    state: "Karnataka",
    path: "/karnataka/places",
    keywords: ["mysuru", "mysore"]
  },
  {
    title: "Mangaluru",
    type: "Place",
    state: "Karnataka",
    path: "/karnataka/places",
    keywords: ["mangaluru", "mangalore"]
  },
  {
    title: "Belagavi",
    type: "Place",
    state: "Karnataka",
    path: "/karnataka/places",
    keywords: ["belagavi", "belgaum"]
  },
  {
    title: "Kalaburagi",
    type: "Place",
    state: "Karnataka",
    path: "/karnataka/places",
    keywords: ["kalaburagi", "gulbarga"]
  },
  {
    title: "Shivamogga",
    type: "Place",
    state: "Karnataka",
    path: "/karnataka/places",
    keywords: ["shivamogga", "shimoga"]
  },

  {
    title: "Kochi",
    type: "Place",
    state: "Kerala",
    path: "/kerala/places",
    keywords: ["kochi", "cochin"]
  },
  {
    title: "Thiruvananthapuram",
    type: "Place",
    state: "Kerala",
    path: "/kerala/places",
    keywords: ["thiruvananthapuram", "trivandrum"]
  },
  {
    title: "Kozhikode",
    type: "Place",
    state: "Kerala",
    path: "/kerala/places",
    keywords: ["kozhikode", "calicut"]
  },

  {
    title: "Chennai",
    type: "Place",
    state: "Tamil Nadu",
    path: "/tamil-nadu/places",
    keywords: ["chennai", "madras"]
  },
  {
    title: "Thoothukudi",
    type: "Place",
    state: "Tamil Nadu",
    path: "/tamil-nadu/places",
    keywords: ["thoothukudi", "tuticorin"]
  },

  {
    title: "Hyderabad",
    type: "Place",
    state: "Telangana",
    path: "/telangana/places",
    keywords: ["hyderabad", "cyberabad"]
  },

  {
    title: "Visakhapatnam",
    type: "Place",
    state: "Andhra Pradesh",
    path: "/andhra-pradesh/places",
    keywords: ["visakhapatnam", "vizag", "vizag city"]
  },

  // ==========================
  // FAMOUS RULERS
  // ==========================

  {
    title: "Krishnadevaraya",
    type: "Kingdom",
    state: "Karnataka",
    path: "/karnataka/kingdoms",
    keywords: [
      "krishnadevaraya",
      "krishna deva raya",
      "vijayanagara king"
    ]
  },
  {
    title: "Pulakeshin II",
    type: "Kingdom",
    state: "Karnataka",
    path: "/karnataka/kingdoms",
    keywords: ["pulakeshin", "pulakeshin ii"]
  },
  {
    title: "Tipu Sultan",
    type: "Kingdom",
    state: "Karnataka",
    path: "/karnataka/kingdoms",
    keywords: ["tipu sultan", "tiger of mysore"]
  },
  {
    title: "Rajaraja Chola I",
    type: "Kingdom",
    state: "Tamil Nadu",
    path: "/tamil-nadu/kingdoms",
    keywords: ["rajaraja chola", "rajaraja i"]
  },
  {
    title: "Rajendra Chola I",
    type: "Kingdom",
    state: "Tamil Nadu",
    path: "/tamil-nadu/kingdoms",
    keywords: ["rajendra chola"]
  },
  {
    title: "Rudrama Devi",
    type: "Kingdom",
    state: "Telangana",
    path: "/telangana/kingdoms",
    keywords: ["rudrama devi", "rudramadevi"]
  },

  // ==========================
  // RIVERS
  // ==========================

  {
    title: "Cauvery River",
    type: "Place",
    state: "Karnataka",
    path: "/karnataka/places",
    keywords: ["cauvery", "kaveri", "cauvery river"]
  },
  {
    title: "Krishna River",
    type: "Place",
    state: "Andhra Pradesh",
    path: "/andhra-pradesh/places",
    keywords: ["krishna river", "krishna"]
  },
  {
    title: "Godavari River",
    type: "Place",
    state: "Telangana",
    path: "/telangana/places",
    keywords: ["godavari", "godavari river"]
  },
  {
    title: "Tungabhadra River",
    type: "Place",
    state: "Karnataka",
    path: "/karnataka/places",
    keywords: ["tungabhadra", "tungabhadra river"]
  },

  // ==========================
  // UNESCO
  // ==========================

  {
    title: "UNESCO Heritage Sites Karnataka",
    type: "Architecture",
    state: "Karnataka",
    path: "/karnataka/architecture",
    keywords: [
      "unesco karnataka",
      "world heritage",
      "heritage site"
    ]
  },
  {
    title: "UNESCO Heritage Sites Tamil Nadu",
    type: "Architecture",
    state: "Tamil Nadu",
    path: "/tamil-nadu/architecture",
    keywords: [
      "great living chola temples",
      "unesco tamil nadu"
    ]
  },

  // ==========================
  // SHARED WILDLIFE
  // ==========================

  {
    title: "Indian Peafowl",
    type: "Wildlife",
    state: "Multiple States",
    path: "/karnataka/wildlife",
    keywords: [
      "peacock",
      "indian peafowl",
      "national bird"
    ]
  },
  {
    title: "Great Hornbill",
    type: "Wildlife",
    state: "Kerala",
    path: "/kerala/wildlife",
    keywords: [
      "great hornbill",
      "hornbill"
    ]
  },
  {
    title: "Nilgiri Marten",
    type: "Wildlife",
    state: "Kerala",
    path: "/kerala/wildlife",
    keywords: [
      "nilgiri marten"
    ]
  },
  {
    title: "Smooth-coated Otter",
    type: "Wildlife",
    state: "Multiple States",
    path: "/karnataka/wildlife",
    keywords: [
      "otter",
      "smooth coated otter"
    ]
  },
  {
    title: "Mugger Crocodile",
    type: "Wildlife",
    state: "Multiple States",
    path: "/karnataka/wildlife",
    keywords: [
      "mugger crocodile",
      "marsh crocodile"
    ]
  },
// ==========================
// CATEGORY SEARCH ITEMS
// ==========================

{
  title: "Karnataka Architecture",
  type: "Architecture",
  state: "Karnataka",
  path: "/karnataka/architecture",
  keywords: [
    "karnataka architecture",
    "architecture karnataka",
    "karnataka temples",
    "karnataka forts",
    "karnataka monuments"
  ]
},
{
  title: "Karnataka Places",
  type: "Place",
  state: "Karnataka",
  path: "/karnataka/places",
  keywords: [
    "karnataka places",
    "places in karnataka",
    "tourist places karnataka"
  ]
},
{
  title: "Karnataka Cuisine",
  type: "Cuisine",
  state: "Karnataka",
  path: "/karnataka/cuisine",
  keywords: [
    "karnataka cuisine",
    "karnataka food",
    "food in karnataka"
  ]
},
{
  title: "Karnataka Culture",
  type: "Culture",
  state: "Karnataka",
  path: "/karnataka/culture",
  keywords: [
    "karnataka culture",
    "culture of karnataka"
  ]
},
{
  title: "Karnataka Kingdoms",
  type: "Kingdom",
  state: "Karnataka",
  path: "/karnataka/kingdoms",
  keywords: [
    "karnataka kingdoms",
    "history of karnataka"
  ]
},
{
  title: "Karnataka Wildlife",
  type: "Wildlife",
  state: "Karnataka",
  path: "/karnataka/wildlife",
  keywords: [
    "karnataka wildlife",
    "wildlife karnataka"
  ]
},

{
  title: "Kerala Architecture",
  type: "Architecture",
  state: "Kerala",
  path: "/kerala/architecture",
  keywords: [
    "kerala architecture",
    "architecture kerala",
    "kerala temples"
  ]
},
{
  title: "Kerala Places",
  type: "Place",
  state: "Kerala",
  path: "/kerala/places",
  keywords: [
    "kerala places",
    "places in kerala",
    "tourist places kerala"
  ]
},
{
  title: "Kerala Cuisine",
  type: "Cuisine",
  state: "Kerala",
  path: "/kerala/cuisine",
  keywords: [
    "kerala cuisine",
    "kerala food",
    "food in kerala"
  ]
},
{
  title: "Kerala Culture",
  type: "Culture",
  state: "Kerala",
  path: "/kerala/culture",
  keywords: [
    "kerala culture",
    "culture of kerala"
  ]
},
{
  title: "Kerala Kingdoms",
  type: "Kingdom",
  state: "Kerala",
  path: "/kerala/kingdoms",
  keywords: [
    "kerala kingdoms",
    "history of kerala"
  ]
},
{
  title: "Kerala Wildlife",
  type: "Wildlife",
  state: "Kerala",
  path: "/kerala/wildlife",
  keywords: [
    "kerala wildlife",
    "wildlife kerala"
  ]
},

{
  title: "Tamil Nadu Architecture",
  type: "Architecture",
  state: "Tamil Nadu",
  path: "/tamil-nadu/architecture",
  keywords: [
    "tamil nadu architecture",
    "tamil architecture"
  ]
},
{
  title: "Tamil Nadu Places",
  type: "Place",
  state: "Tamil Nadu",
  path: "/tamil-nadu/places",
  keywords: [
    "tamil nadu places",
    "tourist places tamil nadu"
  ]
},
{
  title: "Tamil Nadu Cuisine",
  type: "Cuisine",
  state: "Tamil Nadu",
  path: "/tamil-nadu/cuisine",
  keywords: [
    "tamil food",
    "tamil cuisine"
  ]
},
{
  title: "Tamil Nadu Culture",
  type: "Culture",
  state: "Tamil Nadu",
  path: "/tamil-nadu/culture",
  keywords: [
    "tamil culture",
    "culture of tamil nadu"
  ]
},
{
  title: "Tamil Nadu Kingdoms",
  type: "Kingdom",
  state: "Tamil Nadu",
  path: "/tamil-nadu/kingdoms",
  keywords: [
    "tamil kingdoms",
    "history of tamil nadu"
  ]
},
{
  title: "Tamil Nadu Wildlife",
  type: "Wildlife",
  state: "Tamil Nadu",
  path: "/tamil-nadu/wildlife",
  keywords: [
    "tamil nadu wildlife"
  ]
},

{
  title: "Telangana Architecture",
  type: "Architecture",
  state: "Telangana",
  path: "/telangana/architecture",
  keywords: [
    "telangana architecture",
    "architecture telangana"
  ]
},
{
  title: "Telangana Places",
  type: "Place",
  state: "Telangana",
  path: "/telangana/places",
  keywords: [
    "telangana places",
    "tourist places telangana"
  ]
},
{
  title: "Telangana Cuisine",
  type: "Cuisine",
  state: "Telangana",
  path: "/telangana/cuisine",
  keywords: [
    "telangana cuisine",
    "telangana food"
  ]
},
{
  title: "Telangana Culture",
  type: "Culture",
  state: "Telangana",
  path: "/telangana/culture",
  keywords: [
    "telangana culture"
  ]
},
{
  title: "Telangana Kingdoms",
  type: "Kingdom",
  state: "Telangana",
  path: "/telangana/kingdoms",
  keywords: [
    "telangana kingdoms",
    "history of telangana"
  ]
},
{
  title: "Telangana Wildlife",
  type: "Wildlife",
  state: "Telangana",
  path: "/telangana/wildlife",
  keywords: [
    "telangana wildlife"
  ]
},

{
  title: "Andhra Pradesh Architecture",
  type: "Architecture",
  state: "Andhra Pradesh",
  path: "/andhra-pradesh/architecture",
  keywords: [
    "andhra architecture",
    "andhra pradesh architecture"
  ]
},
{
  title: "Andhra Pradesh Places",
  type: "Place",
  state: "Andhra Pradesh",
  path: "/andhra-pradesh/places",
  keywords: [
    "andhra places",
    "tourist places andhra"
  ]
},
{
  title: "Andhra Pradesh Cuisine",
  type: "Cuisine",
  state: "Andhra Pradesh",
  path: "/andhra-pradesh/cuisine",
  keywords: [
    "andhra cuisine",
    "andhra food"
  ]
},
{
  title: "Andhra Pradesh Culture",
  type: "Culture",
  state: "Andhra Pradesh",
  path: "/andhra-pradesh/culture",
  keywords: [
    "andhra culture"
  ]
},
{
  title: "Andhra Pradesh Kingdoms",
  type: "Kingdom",
  state: "Andhra Pradesh",
  path: "/andhra-pradesh/kingdoms",
  keywords: [
    "andhra kingdoms",
    "history of andhra"
  ]
},
{
  title: "Andhra Pradesh Wildlife",
  type: "Wildlife",
  state: "Andhra Pradesh",
  path: "/andhra-pradesh/wildlife",
  keywords: [
    "andhra wildlife"
  ]
},
// ==========================
// HIGH PRIORITY MISSING ITEMS
// ==========================

// ---------- ANDHRA PRADESH ----------

{
  title: "Srisailam Temple",
  type: "Architecture",
  state: "Andhra Pradesh",
  path: "/andhra-pradesh/architecture",
  keywords: [
    "srisailam",
    "mallikarjuna",
    "mallikarjuna temple",
    "jyotirlinga",
    "shakti peetha"
  ]
},

{
  title: "Tirumala",
  type: "Place",
  state: "Andhra Pradesh",
  path: "/andhra-pradesh/places",
  keywords: [
    "tirumala",
    "tirupati hills",
    "seven hills"
  ]
},

{
  title: "Rushikonda Beach",
  type: "Place",
  state: "Andhra Pradesh",
  path: "/andhra-pradesh/places",
  keywords: [
    "rushikonda",
    "rushikonda beach"
  ]
},

{
  title: "Yaganti Temple",
  type: "Architecture",
  state: "Andhra Pradesh",
  path: "/andhra-pradesh/architecture",
  keywords: [
    "yaganti",
    "yaganti temple",
    "basavanna"
  ]
},

{
  title: "Mypadu Beach",
  type: "Place",
  state: "Andhra Pradesh",
  path: "/andhra-pradesh/places",
  keywords: [
    "mypadu",
    "mypadu beach"
  ]
},

{
  title: "Konaseema",
  type: "Place",
  state: "Andhra Pradesh",
  path: "/andhra-pradesh/places",
  keywords: [
    "konaseema",
    "godavari delta"
  ]
},

// ---------- KARNATAKA ----------

{
  title: "Murudeshwar",
  type: "Place",
  state: "Karnataka",
  path: "/karnataka/places",
  keywords: [
    "murudeshwar",
    "murdeshwar"
  ]
},

{
  title: "Dharmasthala",
  type: "Place",
  state: "Karnataka",
  path: "/karnataka/places",
  keywords: [
    "dharmasthala",
    "manjunatha temple"
  ]
},

{
  title: "Mullayanagiri Peak",
  type: "Place",
  state: "Karnataka",
  path: "/karnataka/places",
  keywords: [
    "mullayanagiri peak",
    "highest peak"
  ]
},

{
  title: "Kodachadri",
  type: "Place",
  state: "Karnataka",
  path: "/karnataka/places",
  keywords: [
    "kodachadri",
    "kodachadri hills"
  ]
},

// ---------- KERALA ----------

{
  title: "Periyar Tiger Reserve",
  type: "Wildlife",
  state: "Kerala",
  path: "/kerala/wildlife",
  keywords: [
    "periyar tiger reserve",
    "thekkady wildlife"
  ]
},

{
  title: "Thekkady",
  type: "Place",
  state: "Kerala",
  path: "/kerala/places",
  keywords: [
    "thekkady"
  ]
},

{
  title: "Ashtamudi Lake",
  type: "Place",
  state: "Kerala",
  path: "/kerala/places",
  keywords: [
    "ashtamudi",
    "ashtamudi lake"
  ]
},

{
  title: "Chembra Peak",
  type: "Place",
  state: "Kerala",
  path: "/kerala/places",
  keywords: [
    "chembra",
    "chembra peak",
    "heart lake"
  ]
},

// ---------- TAMIL NADU ----------

{
  title: "Mahabalipuram",
  type: "Place",
  state: "Tamil Nadu",
  path: "/tamil-nadu/places",
  keywords: [
    "mahabalipuram",
    "mamallapuram"
  ]
},

{
  title: "Marina Beach",
  type: "Place",
  state: "Tamil Nadu",
  path: "/tamil-nadu/places",
  keywords: [
    "marina beach",
    "marina"
  ]
},

{
  title: "Nilgiri Hills",
  type: "Place",
  state: "Tamil Nadu",
  path: "/tamil-nadu/places",
  keywords: [
    "nilgiri",
    "nilgiri hills"
  ]
},

{
  title: "Ramanathaswamy Temple",
  type: "Architecture",
  state: "Tamil Nadu",
  path: "/tamil-nadu/architecture",
  keywords: [
    "ramanathaswamy temple",
    "rameswaram temple"
  ]
},

// ---------- TELANGANA ----------

{
  title: "Ramoji Film City",
  type: "Place",
  state: "Telangana",
  path: "/telangana/places",
  keywords: [
    "ramoji",
    "ramoji film city"
  ]
},

{
  title: "Birla Mandir Hyderabad",
  type: "Architecture",
  state: "Telangana",
  path: "/telangana/architecture",
  keywords: [
    "birla mandir",
    "birla temple hyderabad"
  ]
},

{
  title: "Hussain Sagar",
  type: "Place",
  state: "Telangana",
  path: "/telangana/places",
  keywords: [
    "hussain sagar",
    "tank bund"
  ]
},

{
  title: "Statue of Equality",
  type: "Architecture",
  state: "Telangana",
  path: "/telangana/architecture",
  keywords: [
    "statue of equality",
    "ramanujacharya statue"
  ]
},

// ---------- SHARED ----------

{
  title: "Western Ghats",
  type: "Place",
  state: "Multiple States",
  path: "/karnataka/places",
  keywords: [
    "western ghats",
    "sahyadri",
    "sahyadri hills"
  ]
},

{
  title: "Eastern Ghats",
  type: "Place",
  state: "Multiple States",
  path: "/andhra-pradesh/places",
  keywords: [
    "eastern ghats"
  ]
},

{
  title: "Deccan Plateau",
  type: "Place",
  state: "Multiple States",
  path: "/karnataka/places",
  keywords: [
    "deccan plateau",
    "deccan",
    "dakshin plateau"
  ]
}
];

export default searchData;