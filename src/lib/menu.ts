export type MenuItem = {
  /** Dish name */
  n: string;
  /** Price as the menu prints it, Dutch decimal comma: "15,00" */
  p: string;
  /** true = vegetarian (vegan dishes are vegetarian too) */
  veg: boolean;
  /** No dairy, egg or honey */
  vegan: boolean;
  /** Chef's special */
  chef: boolean;
  /** 0 = mild … 3 = hot */
  spice: 0 | 1 | 2 | 3;
  /** Set only when the dish is not available every day */
  days?: string;
  /** Declarable allergen numbers, 1-13. See lib/allergens.ts */
  a: number[];
  /** Image path under /public */
  img: string;
  /** Description, English */
  d: string;
  /** Description, Dutch */
  nl: string;
};

export type MenuGroup = {
  cat: string;
  catNl: string;
  note?: string;
  noteNl?: string;
  items: MenuItem[];
};

export const MENU: MenuGroup[] = [
  {
    cat: "Soups",
    catNl: "Soepen",
    items: [
      { n: "Day Special Non-veg Soup", p: "7,00", veg: false, vegan: false, chef: false, spice: 1, a: [], img: "/images/dish/day-special-non-veg-soup.jpg", d: "Today's slow-simmered soup, most often mutton — ask our staff.", nl: "De soep van de dag, meestal van lamsvlees — vraag ernaar." },
      { n: "Chicken & Coriander Shorba (Murgh Dhaniya)", p: "6,50", veg: false, vegan: false, chef: false, spice: 1, a: [7], img: "/images/dish/chicken-and-coriander-shorba-murgh-dhaniya.jpg", d: "Clear murgh shorba finished with fresh coriander.", nl: "Heldere kippenshorba met verse koriander." },
      { n: "Hot & Sour Chicken Soup", p: "7,00", veg: false, vegan: false, chef: false, spice: 2, a: [1, 6, 9], img: "/images/dish/hot-and-sour-chicken-soup.jpg", d: "Tangy, spicy Indo-Chinese soup with shredded chicken.", nl: "Pittige Indo-Chinese soep met kip." },
      { n: "Hot & Sour Veg Soup", p: "6,50", veg: true, vegan: false, chef: false, spice: 2, a: [1, 6, 9], img: "/images/dish/hot-and-sour-veg-soup.jpg", d: "Tangy, spicy Indo-Chinese soup with garden vegetables.", nl: "Pittige Indo-Chinese soep met groenten." },
      { n: "Rasam Soup", p: "5,00", veg: true, vegan: true, chef: false, spice: 2, a: [1, 10], img: "/images/dish/rasam-soup.jpg", d: "South Indian hot-and-sour broth of tamarind, garlic, tomato, black pepper and cumin.", nl: "Zuid-Indiase zoetzure bouillon van tamarinde, knoflook, tomaat, zwarte peper en komijn." },
      { n: "Sweet Corn Veg Soup", p: "5,00", veg: true, vegan: false, chef: false, spice: 0, a: [1, 6, 9], img: "/images/dish/sweet-corn-veg-soup.jpg", d: "Silky sweet-corn soup with garden vegetables.", nl: "Zachte maïssoep met verse groenten." },
    ],
  },
  {
    cat: "Small Plates — Veg",
    catNl: "Kleine gerechten — vegetarisch",
    items: [
      { n: "Veg Samosa", p: "6,00", veg: true, vegan: true, chef: false, spice: 1, a: [1], img: "/images/dish/veg-samosa.jpg", d: "Crisp pastry with spiced potato and green peas.", nl: "Krokant deeg gevuld met gekruide aardappel en doperwten." },
      { n: "Veg Spring Rolls", p: "8,00", veg: true, vegan: false, chef: false, spice: 1, a: [1, 12], img: "/images/dish/veg-spring-rolls.jpg", d: "Crisp loempia filled with mixed vegetables.", nl: "Krokante loempia gevuld met groenten." },
      { n: "Onion Bajji with Mint Chutney", p: "7,00", veg: true, vegan: true, chef: false, spice: 1, a: [], img: "/images/dish/onion-bajji-with-mint-chutney.jpg", d: "Golden onion fritters with a cooling mint chutney.", nl: "Goudbruine uienbeignets met frisse muntchutney." },
      { n: "South Indian Potato Bajji with Coconut Chutney", p: "7,00", veg: true, vegan: true, chef: false, spice: 0, a: [10], img: "/images/dish/south-indian-potato-bajji-with-coconut-chutney.jpg", d: "Soft potato slices in a crisp gram-flour coat.", nl: "Zachte aardappelschijfjes in een krokant kikkererwtenjasje." },
      { n: "Gobi Manchurian", p: "13,50", veg: true, vegan: true, chef: false, spice: 2, a: [1, 6, 12], img: "/images/menu-paneer.jpg", d: "Crisp cauliflower tossed in a tangy Indo-Chinese glaze.", nl: "Krokante bloemkool in een pittig-zoete Indo-Chinese saus." },
      { n: "Gunpowder Mini Idly with Coconut Chutney", p: "11,00", veg: true, vegan: false, chef: true, spice: 2, a: [1, 7, 10, 11], img: "/images/dish/gunpowder-mini-idly-with-coconut-chutney.jpg", d: "Butter-tossed mini idlis dusted with fiery gunpowder podi.", nl: "Mini-idli's in boter, bestoven met pittige podi." },
      { n: "Idly with Sambar & Coconut Chutney", p: "8,00", veg: true, vegan: true, chef: false, spice: 0, a: [1, 10], img: "/images/dish/idly-with-sambar-and-coconut-chutney.jpg", d: "Steamed rice cakes with lentil sambar.", nl: "Gestoomde rijstkoekjes met linzensambar." },
      { n: "Medhu Vada", p: "8,00", veg: true, vegan: true, chef: false, spice: 0, a: [1, 10], img: "/images/dish/medhu-vada.jpg", d: "Cloud-light lentil doughnuts with sambar and chutney.", nl: "Luchtige linzendonuts met sambar en chutney." },
      { n: "Paneer 65", p: "14,00", veg: true, vegan: false, chef: false, spice: 2, a: [1, 7], img: "/images/dish/paneer-65.jpg", d: "Paneer fried in our bold, chilli-red 65 marinade.", nl: "Gefrituurde paneer in onze pittige 65-marinade." },
      { n: "Masala Papad with Mint Chutney", p: "4,00", veg: true, vegan: true, chef: false, spice: 1, a: [1], img: "/images/dish/masala-papad-with-mint-chutney.jpg", d: "Crisp papad topped with onion-tomato masala.", nl: "Krokante papadum met ui-tomaat-masala." },
      { n: "Ambur Kitchen Special Salsa Papad", p: "6,00", veg: true, vegan: true, chef: false, spice: 1, a: [1], img: "/images/dish/ambur-kitchen-special-salsa-papad.jpg", d: "Crisp papad heaped with a bright tomato-onion salsa.", nl: "Krokante papadum met een frisse tomaten-uiensalsa." },
      { n: "Veg Sampler Platter", p: "20,00", veg: true, vegan: false, chef: false, spice: 1, a: [1, 7, 10], img: "/images/dish/veg-sampler-platter.jpg", d: "Veg samosa (1), veg spring rolls (2), onion & potato bajji and medhu vada, with a trio of chutneys.", nl: "Proeverij met samosa (1), groenteloempia (2), uien- en aardappelbajji en medhu vada, met drie chutneys." },
      { n: "Zaffrani Paneer Tikka", p: "15,00", veg: true, vegan: false, chef: true, spice: 1, a: [7, 8, 10], img: "/images/menu-paneer.jpg", d: "Saffron-yoghurt paneer, charred in the tandoor.", nl: "Paneer in saffraanyoghurt, geroosterd in de tandoor." },
    ],
  },
  {
    cat: "Small Plates — Non-veg",
    catNl: "Kleine gerechten — vlees & vis",
    items: [
      { n: "Lamb Samosa", p: "7,50", veg: false, vegan: false, chef: false, spice: 1, a: [1, 10], img: "/images/dish/lamb-samosa.jpg", d: "Flaky pastry filled with spiced minced lamb.", nl: "Bladerdeeg gevuld met gekruid lamsgehakt." },
      { n: "Mutton Ghee Roast Fry", p: "20,00", veg: false, vegan: false, chef: false, spice: 3, a: [7], img: "/images/dish/mutton-ghee-roast-fry.jpg", d: "Tender mutton roasted dark in ghee and ground spices.", nl: "Mals lamsvlees, donker geroosterd in ghee en specerijen." },
      { n: "Spicy Chicken Wings", p: "16,00", veg: false, vegan: false, chef: false, spice: 3, a: [12], img: "/images/dish/spicy-chicken-wings.jpg", d: "Fiery wings glazed with South Indian spices.", nl: "Vurige kippenvleugels met Zuid-Indiase kruiden." },
      { n: "Chicken 65", p: "16,00", veg: false, vegan: false, chef: true, spice: 3, a: [1, 3, 7], img: "/images/dish/chicken-65.jpg", d: "The cult classic — crisp, chilli-red fried chicken.", nl: "De klassieker: krokant gefrituurde kip in chilimarinade." },
      { n: "Peri Peri Tandoori Chicken (½ chicken, 2 pcs)", p: "16,00", veg: false, vegan: false, chef: false, spice: 2, a: [3, 7, 10, 12], img: "/images/dish/peri-peri-tandoori-chicken-chicken-2-pcs.jpg", d: "Char-grilled tandoori chicken with peri-peri heat.", nl: "Tandoorikip van de grill met peri-peri." },
      { n: "Classic Chicken Tikka", p: "17,00", veg: false, vegan: false, chef: false, spice: 1, a: [7], img: "/images/dish/classic-chicken-tikka.jpg", d: "Smoky yoghurt-marinated chicken from the tandoor.", nl: "Rokerige kip uit de tandoor, gemarineerd in yoghurt." },
      { n: "Pomfret Fish Polichadhu", p: "19,00", veg: false, vegan: false, chef: false, spice: 2, a: [4, 10], img: "/images/dish/pomfret-fish-polichadhu.jpg", d: "Whole pomfret in masala, seared in a banana leaf.", nl: "Hele pomfret in masala, gebakken in bananenblad." },
      { n: "Tempura Crunchy Fish Fry", p: "15,00", veg: false, vegan: false, chef: false, spice: 1, a: [1, 3, 4, 10], img: "/images/dish/tempura-crunchy-fish-fry.jpg", d: "Feather-light tempura fish with mint chutney.", nl: "Luchtige tempura-vis met muntchutney." },
      { n: "King Prawn Pepper Fry", p: "20,00", veg: false, vegan: false, chef: false, spice: 2, a: [2, 7, 10], img: "/images/dish/king-prawn-pepper-fry.jpg", d: "King prawns tossed with black pepper and curry leaves.", nl: "Gamba's met zwarte peper en kerrieblaadjes." },
      { n: "Ambur Kitchen Special Gun Powder Prawns", p: "20,00", veg: false, vegan: false, chef: true, spice: 3, a: [1, 2, 7, 10, 11], img: "/images/dish/ambur-kitchen-special-gun-powder-prawns.jpg", d: "Prawns tossed in our house gunpowder podi.", nl: "Gamba's in onze huisgemaakte gunpowder-podi." },
      { n: "Egg Bonda", p: "11,00", veg: false, vegan: false, chef: false, spice: 1, a: [3], img: "/images/dish/egg-bonda.jpg", d: "Boiled eggs in a spiced gram-flour crust.", nl: "Gekookte eieren in een gekruid krokant jasje." },
      { n: "Egg Kalaki", p: "7,50", veg: false, vegan: false, chef: false, spice: 1, a: [3], img: "/images/dish/egg-kalaki.jpg", d: "Street-style soft scrambled eggs with pepper.", nl: "Zacht roerei op straatstijl, met peper." },
      { n: "Chilli Chicken", p: "18,00", veg: false, vegan: false, chef: false, spice: 3, a: [1, 3, 6, 12], img: "/images/dish/chilli-chicken.jpg", d: "Indo-Chinese crisp chicken (10–11 pcs) tossed in a fiery chilli-garlic glaze.", nl: "Krokante kip (10–11 st.) in een pittige Indo-Chinese chili-knoflooksaus." },
      { n: "Chicken Spring Rolls", p: "9,00", veg: false, vegan: false, chef: false, spice: 1, a: [1, 12], img: "/images/dish/chicken-spring-rolls.jpg", d: "Crisp loempia filled with spiced chicken.", nl: "Krokante loempia gevuld met gekruide kip." },
      { n: "Non-veg Sampler Platter", p: "28,00", veg: false, vegan: false, chef: false, spice: 2, a: [1, 3, 4, 7, 10, 12], img: "/images/dish/non-veg-sampler-platter.jpg", d: "Lamb samosa, Chicken 65 (3), fish fingers (3), egg bonda & spicy wings.", nl: "Proeverij met lamssamosa, Chicken 65, vis, ei en pittige wings." },
    ],
  },
  {
    cat: "Combos & Meals",
    catNl: "Speciale schotels van het huis",
    items: [
      { n: "Railway Mutton Curry with Idiyappam / Malabar Parotta", p: "22,00", veg: false, vegan: false, chef: false, spice: 2, a: [1, 10], img: "/images/dish/railway-mutton-curry-with-idiyappam-malabar-paro.jpg", d: "The old railway-canteen mutton curry — peppery, thin-gravied.", nl: "De klassieke lamscurry uit de treinkantine: peperig en dun van jus." },
      { n: "Ambur Mutton Paya with Malabar Parotta / Idiyappam", p: "22,00", veg: false, vegan: false, chef: false, spice: 2, a: [1], img: "/images/dish/ambur-mutton-paya-with-malabar-parotta-idiyappam.jpg", d: "Slow-cooked lamb paya, rich and warming — a weekend ritual.", nl: "Langzaam gegaarde paya van lamsvlees, rijk en verwarmend." },
      { n: "Ambur Spl Jeera Rice with Chicken Kuruma", p: "19,00", veg: false, vegan: false, chef: true, spice: 1, days: "Sat & Sun only", a: [7, 8], img: "/images/dish/ambur-spl-jeera-rice-with-chicken-kuruma.jpg", d: "Fragrant jeera rice with silky chicken kuruma.", nl: "Geurige jeerarijst met romige kipkurma." },
      { n: "Spl Ambur Non-veg Meals", p: "29,00", veg: false, vegan: false, chef: false, spice: 2, a: [1, 3, 4, 7, 8, 10, 12], img: "/images/dish/spl-ambur-non-veg-meals.jpg", d: "Chicken 65 (3 pcs), crunchy fish (3 pcs), mutton masala, porial, sambar, rasam, chapati or poori, rice, papad, pickle, curd and the sweet of the day.", nl: "Rijke thali met kip, vis en lamsvlees, sambar, rasam, chapati of poori, rijst, papad, pickle, yoghurt en het zoetje van de dag." },
      { n: "Malabar Parotta (2) with Chicken Salna", p: "15,00", veg: false, vegan: false, chef: false, spice: 2, a: [1], img: "/images/dish/malabar-parotta-2-with-chicken-salna.jpg", d: "Flaky parottas soaked in a spiced chicken salna.", nl: "Gelaagde parotta's gedrenkt in gekruide kipsalna." },
      { n: "South Indian Tarkari Kurma with Mini Idly / Chapathi / Parotta", p: "14,00", veg: true, vegan: false, chef: false, spice: 1, a: [1], img: "/images/dish/south-indian-tarkari-kurma-with-mini-idly-chapat.jpg", d: "Garden vegetables in a gentle coconut-cashew kurma.", nl: "Groenten in een zachte kurma van kokos en cashew." },
      { n: "Ambur Spl Vegetarian Meals", p: "19,00", veg: true, vegan: false, chef: false, spice: 1, a: [1, 6, 7, 8, 10, 12], img: "/images/dish/ambur-spl-vegetarian-meals.jpg", d: "Sambar, tarkari kurma, porial, kolambu, rasam, chapati or poori, rice, papad, pickle, curd and the sweet of the day.", nl: "Thali met sambar, kurma, porial, kolambu, rasam, chapati of poori, rijst, papad, pickle, yoghurt en het zoetje van de dag." },
    ],
  },
  {
    cat: "Biryani & Rice",
    catNl: "Biryani, rijst & noedels",
    items: [
      { n: "Ambur Spl Seeraga Samba Chicken Biryani with Aubergine Curry & Raita", p: "19,00", veg: false, vegan: false, chef: false, spice: 2, a: [5, 7, 10, 11], img: "/images/dish/ambur-spl-seeraga-samba-chicken-biryani-with-aub.jpg", d: "Chicken biryani on fragrant seeraga samba rice.", nl: "Kip-biryani van geurige seeraga-sambarijst." },
      { n: "Ambur Spl Seeraga Samba Mutton Biryani with Aubergine Curry & Raita", p: "21,50", veg: false, vegan: false, chef: true, spice: 2, a: [5, 7, 10, 11], img: "/images/dish/ambur-spl-seeraga-samba-mutton-biryani-with-aube.jpg", d: "Our signature dum biryani — mutton, sealed and slow-cooked.", nl: "Onze signatuur-biryani: lamsvlees, verzegeld en langzaam gegaard." },
      { n: "Hyderabad Basmati Mutton Biryani", p: "21,00", veg: false, vegan: false, chef: true, spice: 2, days: "Fri, Sat & Sun only", a: [7], img: "/images/dish/hyderabad-basmati-mutton-biryani.jpg", d: "Long-grain basmati layered with spiced mutton.", nl: "Langkorrelige basmati in lagen met gekruid lamsvlees." },
      { n: "Hyderabad Chicken Biryani", p: "19,00", veg: false, vegan: false, chef: false, spice: 2, days: "Fri, Sat & Sun only", a: [7], img: "/images/dish/hyderabad-chicken-biryani.jpg", d: "Deccan-style chicken biryani, sealed and dum-cooked.", nl: "Kip-biryani op Deccan-wijze, verzegeld gegaard." },
      { n: "Classic Chicken Fried Rice / Noodles", p: "15,50", veg: false, vegan: false, chef: false, spice: 0, a: [1, 6, 9, 11], img: "/images/dish/classic-chicken-fried-rice-noodles.jpg", d: "Smoky wok rice or noodles with chicken.", nl: "Rokerige wokrijst of noedels met kip." },
      { n: "Classic Veg Fried Rice / Noodles", p: "14,00", veg: true, vegan: false, chef: false, spice: 0, a: [1, 6, 9, 11], img: "/images/dish/classic-veg-fried-rice-noodles.jpg", d: "Wok-tossed with crisp vegetables and spring onion.", nl: "Uit de wok met knapperige groenten en bosui." },
      { n: "Curd Rice with Pickle", p: "9,00", veg: true, vegan: false, chef: false, spice: 0, a: [1, 7, 10, 12], img: "/images/dish/curd-rice-with-pickle.jpg", d: "Cooling yoghurt rice with tempered spices and pickle.", nl: "Verkoelende yoghurtrijst met pickle." },
      { n: "Jeera Rice", p: "8,00", veg: true, vegan: false, chef: false, spice: 0, a: [7], img: "/images/dish/jeera-rice.jpg", d: "Basmati tempered with toasted cumin.", nl: "Basmati met geroosterde komijn." },
      { n: "Flavored Basmati Rice", p: "4,50", veg: true, vegan: false, chef: false, spice: 0, a: [7], img: "/images/dish/flavored-basmati-rice.jpg", d: "Steamed basmati with whole spices.", nl: "Gestoomde basmati met hele specerijen." },
      { n: "Plain Boiled Rice", p: "4,50", veg: true, vegan: true, chef: false, spice: 0, a: [], img: "/images/dish/plain-boiled-rice.jpg", d: "Simply steamed.", nl: "Eenvoudig gestoomd." },
    ],
  },
  {
    cat: "Curries — Non-veg",
    catNl: "Curry's — vlees & vis",
    note: "Served with complimentary rice — at their best with our breads, ordered separately.",
    noteNl: "Geserveerd met rijst, op z'n best met onze broden, apart te bestellen.",
    items: [
      { n: "Railway Boneless Mutton Curry", p: "20,00", veg: false, vegan: false, chef: true, spice: 2, a: [], img: "/images/dish/railway-boneless-mutton-curry.jpg", d: "Boneless lamb in a peppery, slow-cooked railway masala.", nl: "Lamsvlees zonder bot in een peperige, langzaam gegaarde masala." },
      { n: "Ambur Special Chicken Masala", p: "19,00", veg: false, vegan: false, chef: false, spice: 2, a: [], img: "/images/dish/ambur-special-chicken-masala.jpg", d: "Our house chicken masala, dark with roasted spices.", nl: "Onze huismasala met kip en geroosterde specerijen." },
      { n: "Chicken Kuruma", p: "19,00", veg: false, vegan: false, chef: false, spice: 1, a: [8], img: "/images/dish/chicken-kuruma.jpg", d: "Gentle coconut-cashew chicken curry.", nl: "Milde kipcurry met kokos en cashew." },
      { n: "Malabar Fish Curry", p: "21,00", veg: false, vegan: false, chef: false, spice: 2, a: [4, 10], img: "/images/dish/malabar-fish-curry.jpg", d: "Pomfret in a tangy Malabar coconut gravy.", nl: "Pomfret in een frisse kokossaus uit Malabar." },
      { n: "Kadai Prawn Curry", p: "21,00", veg: false, vegan: false, chef: true, spice: 2, a: [2], img: "/images/dish/kadai-prawn-curry.jpg", d: "King prawns in a kadai masala of peppers and crushed spices.", nl: "Gamba's in kadai-masala met paprika en gebroken specerijen." },
      { n: "Chicken Tikka Masala", p: "19,00", veg: false, vegan: false, chef: false, spice: 1, a: [7, 8], img: "/images/dish/chicken-tikka-masala.jpg", d: "Tandoor chicken in a velvety tomato masala.", nl: "Tandoorkip in een fluweelzachte tomatenmasala." },
      { n: "Ambur Special Butter Chicken Masala", p: "19,00", veg: false, vegan: false, chef: false, spice: 1, a: [7, 8], img: "/images/dish/ambur-special-butter-chicken-masala.jpg", d: "The beloved classic — creamy, buttery, mildly spiced.", nl: "De geliefde klassieker: romig, boterzacht en mild." },
      { n: "Palak Chicken", p: "19,00", veg: false, vegan: false, chef: false, spice: 1, a: [7], img: "/images/dish/palak-chicken.jpg", d: "Chicken folded through silky spinach.", nl: "Kip in zachte spinaziesaus." },
    ],
  },
  {
    cat: "Curries — Veg",
    catNl: "Curry's — vegetarisch",
    note: "Served with complimentary rice — at their best with our breads, ordered separately.",
    noteNl: "Geserveerd met rijst, op z'n best met onze broden, apart te bestellen.",
    items: [
      { n: "Channa Masala", p: "16,00", veg: true, vegan: true, chef: false, spice: 1, a: [1], img: "/images/dish/channa-masala.jpg", d: "Chickpeas in a punchy tomato-onion masala.", nl: "Kikkererwten in een krachtige tomaten-uienmasala." },
      { n: "Dal Butter Fry", p: "15,00", veg: true, vegan: false, chef: false, spice: 1, a: [1, 7], img: "/images/dish/dal-butter-fry.jpg", d: "Yellow lentils tempered with butter, garlic and cumin.", nl: "Gele linzen met boter, knoflook en komijn." },
      { n: "Paneer Butter Masala", p: "17,00", veg: true, vegan: false, chef: false, spice: 1, a: [7, 8], img: "/images/dish/paneer-butter-masala.jpg", d: "Paneer in a rich, creamy tomato gravy.", nl: "Paneer in een rijke, romige tomatensaus." },
      { n: "Vegetable Kuruma", p: "16,00", veg: true, vegan: false, chef: false, spice: 1, a: [8], img: "/images/dish/vegetable-kuruma.jpg", d: "Vegetables in a fragrant coconut kuruma.", nl: "Groenten in geurige kokoskurma." },
      { n: "Palak Paneer", p: "16,00", veg: true, vegan: false, chef: false, spice: 1, a: [7], img: "/images/dish/palak-paneer.jpg", d: "Paneer in silky, gently spiced spinach.", nl: "Paneer in zachte, mild gekruide spinazie." },
      { n: "Dal Makhani", p: "16,00", veg: true, vegan: false, chef: false, spice: 0, a: [7], img: "/images/dish/dal-makhani.jpg", d: "Black lentils simmered overnight with butter and cream.", nl: "Zwarte linzen, een nacht lang gestoofd met boter en room." },
    ],
  },
  {
    cat: "Dosa",
    catNl: "Dosa-specialiteiten",
    items: [
      { n: "Chicken Keema Dosa with Chicken Salna", p: "15,50", veg: false, vegan: false, chef: false, spice: 2, a: [1, 10], img: "/images/dish/chicken-keema-dosa-with-chicken-salna.jpg", d: "Dosa layered with spiced chicken keema and salna.", nl: "Dosa met gekruid kipgehakt en salna." },
      { n: "Spl Masala Egg Dosa with Salna", p: "14,00", veg: false, vegan: false, chef: false, spice: 2, a: [1, 3, 10], img: "/images/dish/spl-masala-egg-dosa-with-salna.jpg", d: "Egg-washed masala dosa with salna.", nl: "Masala-dosa met ei en salna." },
      { n: "Spl Mutton Keema Dosa with Chicken Salna", p: "16,50", veg: false, vegan: false, chef: true, spice: 2, a: [1, 10], img: "/images/dish/spl-mutton-keema-dosa-with-chicken-salna.jpg", d: "Crisp dosa with slow-cooked minced mutton.", nl: "Krokante dosa met langzaam gegaard lamsgehakt." },
      { n: "Masala Dosa", p: "10,00", veg: true, vegan: true, chef: true, spice: 1, a: [1, 10], img: "/images/dish/masala-dosa.jpg", d: "Golden rice crêpe with spiced potato filling.", nl: "Goudbruine rijstcrêpe gevuld met gekruide aardappel." },
      { n: "Ghee Podi Masala Dosa", p: "12,00", veg: true, vegan: false, chef: false, spice: 2, a: [1, 7, 10, 11], img: "/images/dish/ghee-podi-masala-dosa.jpg", d: "Ghee-roasted dosa dusted with gunpowder podi.", nl: "In ghee geroosterde dosa met pittige podi." },
      { n: "Benne Masala Dosa with Butter", p: "14,00", veg: true, vegan: false, chef: false, spice: 1, a: [1, 7, 10], img: "/images/dish/benne-masala-dosa-with-butter.jpg", d: "Bengaluru-style dosa griddled in fresh white butter.", nl: "Dosa op Bengaluru-wijze, gebakken in verse roomboter." },
      { n: "Plain Dosa", p: "9,50", veg: true, vegan: true, chef: false, spice: 0, a: [1, 10], img: "/images/dish/plain-dosa.jpg", d: "Thin, crisp and golden — with sambar and chutney.", nl: "Dun, krokant en goudbruin, met sambar en chutney." },
    ],
  },
  {
    cat: "Rolls",
    catNl: "Indiase straatrolletjes",
    items: [
      { n: "Chicken Tikka Roll", p: "10,00", veg: false, vegan: false, chef: false, spice: 1, a: [1, 3, 7, 10], img: "/images/dish/chicken-tikka-roll.jpg", d: "Tandoori chicken rolled in a tawa-griddled parotta.", nl: "Tandoorikip gerold in een parotta van de plaat." },
      { n: "Minced Mutton Egg Roll", p: "12,00", veg: false, vegan: false, chef: false, spice: 2, a: [1, 3, 7], img: "/images/dish/minced-mutton-egg-roll.jpg", d: "Egg-washed parotta rolled around spiced lamb keema.", nl: "Parotta met ei, gerold om gekruid lamsgehakt." },
      { n: "Channa Masala Roll", p: "9,50", veg: true, vegan: false, chef: false, spice: 1, a: [1, 7], img: "/images/dish/channa-masala-roll.jpg", d: "Chickpea masala in a hot, flaky roll.", nl: "Kikkererwtenmasala in een warme, krokante rol." },
      { n: "Spicy Paneer Roll", p: "10,00", veg: true, vegan: false, chef: false, spice: 2, a: [1, 7], img: "/images/dish/spicy-paneer-roll.jpg", d: "Chilli-tossed paneer with onion and mint.", nl: "Pittige paneer met ui en munt." },
    ],
  },
  {
    cat: "Breads",
    catNl: "Brood & bijgerechten",
    items: [
      { n: "Malabar Parotta (1 pc)", p: "4,00", veg: true, vegan: false, chef: false, spice: 0, a: [1], img: "/images/dish/malabar-parotta-1-pc.jpg", d: "Flaky, layered griddle bread.", nl: "Gelaagd, knapperig plaatbrood." },
      { n: "Tandoori Naan (Plain / Cheese / Butter)", p: "4,00 / 5,50 / 5,50", veg: true, vegan: false, chef: false, spice: 0, a: [1, 7], img: "/images/dish/tandoori-naan-plain-cheese-butter.jpg", d: "Soft naan from the tandoor.", nl: "Zachte naan uit de tandoor." },
      { n: "Tandoori Cheese Garlic Naan", p: "6,00", veg: true, vegan: false, chef: false, spice: 0, a: [1, 7], img: "/images/dish/tandoori-cheese-garlic-naan.jpg", d: "Naan stuffed with cheese and roasted garlic.", nl: "Naan gevuld met kaas en geroosterde knoflook." },
      { n: "Tandoori Cheese Chilli Garlic Naan", p: "7,00", veg: true, vegan: false, chef: false, spice: 1, a: [1, 7], img: "/images/dish/tandoori-cheese-chilli-garlic-naan.jpg", d: "Cheese and garlic naan with a kick of green chilli.", nl: "Naan met kaas, knoflook en groene peper." },
      { n: "Tandoori Roti (Plain / Butter)", p: "3,50 / 4,00", veg: true, vegan: false, chef: false, spice: 0, a: [1, 7], img: "/images/dish/tandoori-roti-plain-butter.jpg", d: "Wholewheat roti from the tandoor.", nl: "Volkoren roti uit de tandoor." },
      { n: "Idiyappam (2 pcs)", p: "5,00", veg: true, vegan: true, chef: false, spice: 0, a: [], img: "/images/dish/idiyappam-2-pcs.jpg", d: "Steamed rice-noodle nests.", nl: "Gestoomde nestjes van rijstnoedels." },
      { n: "Idly (1 pc)", p: "4,00", veg: true, vegan: true, chef: false, spice: 0, a: [], img: "/images/dish/idly-1-pc.jpg", d: "Steamed rice cake, light as air.", nl: "Gestoomd rijstkoekje, luchtig licht." },
      { n: "Chapathi (1 pc)", p: "4,00", veg: true, vegan: false, chef: false, spice: 0, a: [1], img: "/images/dish/chapathi-1-pc.jpg", d: "Soft wholewheat flatbread.", nl: "Zacht volkoren platbrood." },
    ],
  },
  {
    cat: "Kids' Menu",
    catNl: "Voor de kleintjes",
    items: [
      { n: "Kid's Meal", p: "14,00", veg: false, vegan: false, chef: false, spice: 0, a: [1, 3, 10], img: "/images/dish/kid-s-meal.jpg", d: "Six mini idlis with sambar, one boiled egg and an apple juice.", nl: "Zes mini-idli's met sambar, één gekookt ei en een appelsap." },
      { n: "Cheese Dosa", p: "10,00", veg: true, vegan: false, chef: false, spice: 0, a: [1, 7, 10], img: "/images/dish/cheese-dosa.jpg", d: "Crisp dosa folded over melted cheese.", nl: "Krokante dosa met gesmolten kaas." },
      { n: "Cone Dosa", p: "9,00", veg: true, vegan: false, chef: false, spice: 0, a: [1, 10], img: "/images/dish/cone-dosa.jpg", d: "A crisp dosa rolled into a cone, with sambar and coconut chutney.", nl: "Krokante dosa in kegelvorm, met sambar en kokoschutney." },
    ],
  },
  {
    cat: "Desserts",
    catNl: "Nagerechten",
    items: [
      { n: "Gulab Jamun (2 pcs)", p: "6,00", veg: true, vegan: false, chef: false, spice: 0, a: [1, 7], img: "/images/dish/gulab-jamun-2-pcs.jpg", d: "Warm milk dumplings soaked in rose-cardamom syrup.", nl: "Warme melkballetjes in siroop van roos en kardemom." },
      { n: "Spl Sweet of the Day", p: "6,00", veg: true, vegan: false, chef: false, spice: 0, a: [1, 7, 8, 12], img: "/images/dish/spl-sweet-of-the-day.jpg", d: "A small-batch Indian sweet, made fresh today — ask our staff.", nl: "Een vers gemaakte Indiase zoetigheid van vandaag — vraag ernaar." },
      { n: "Rasmalai", p: "7,00", veg: true, vegan: false, chef: false, spice: 0, a: [7, 8], img: "/images/dish/rasmalai.jpg", d: "Soft, spongy cottage-cheese discs in sweetened milk, with saffron and almonds.", nl: "Zachte kaasschijfjes in gezoete melk, met saffraan en amandelen." },
      { n: "Chocolate Brownie", p: "5,00", veg: true, vegan: false, chef: false, spice: 0, a: [1, 3, 6, 7, 8], img: "/images/dish/chocolate-brownie.jpg", d: "The perfect dessert for chocolate lovers.", nl: "Het perfecte dessert voor chocoladeliefhebbers." },
      { n: "Mango Cheesecake", p: "7,00", veg: true, vegan: false, chef: false, spice: 0, a: [1, 3, 6, 7], img: "/images/dish/mango-cheesecake.jpg", d: "Baked cheesecake topped with mango compote.", nl: "Gebakken cheesecake met mangocompote." },
      { n: "Falooda / Kulfi Falooda", p: "8,00 / 9,00", veg: true, vegan: false, chef: false, spice: 0, a: [7, 8], img: "/images/dish/falooda-kulfi-falooda.jpg", d: "Chilled vermicelli and chia in saffron milk, with vanilla ice cream or kulfi.", nl: "Koud dessert met vermicelli en chiazaad in saffraanmelk, met vanille-ijs of kulfi." },
      { n: "Kulfi", p: "6,00", veg: true, vegan: false, chef: false, spice: 0, a: [7, 8], img: "/images/dish/kulfi.jpg", d: "Dense, slow-frozen Indian ice cream.", nl: "Stevig, langzaam bevroren Indiaas roomijs." },
      { n: "Ice Cream — Vanilla / Strawberry / Chocolate / Pistachio", p: "5,00", veg: true, vegan: false, chef: false, spice: 0, a: [3, 6, 7, 8], img: "/images/dish/ice-cream-vanilla-strawberry-chocolate-pistachio.jpg", d: "Scoops from our freezer.", nl: "Bolletjes uit onze vriezer." },
    ],
  },
];

export const TOTAL_DISHES = MENU.reduce((sum, g) => sum + g.items.length, 0);
