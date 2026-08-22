export type MenuItem = {
  /** Dish name */
  n: string;
  /** Price in euros, as displayed (may be a list like "4 / 5.5 / 5.5"). Empty = not priced yet. */
  p: string;
  /** true = vegetarian */
  veg: boolean;
  /** Image path under /public */
  img: string;
  /** Short description */
  d: string;
};

export type MenuGroup = {
  cat: string;
  note?: string;
  items: MenuItem[];
};

const IMG = {
  soup: "/images/menu-soup.jpg",
  samosa: "/images/menu-samosa.jpg",
  paneer: "/images/menu-paneer.jpg",
  curry: "/images/menu-curry.jpg",
  butter: "/images/menu-butter.jpg",
  dosa: "/images/menu-dosa.jpg",
  idli: "/images/menu-idli.jpg",
  tandoori: "/images/menu-tandoori.jpg",
  thali: "/images/menu-thali.jpg",
  rice: "/images/menu-rice.jpg",
  naan: "/images/menu-naan.jpg",
  biryani: "/images/menu-biryani.jpg",
  seafood: "/images/menu-seafood.jpg",
} as const;

export const MENU: MenuGroup[] = [
  {
    cat: "Soups",
    items: [
      { n: "Tomato Rasam Soup", p: "5", veg: true, img: IMG.soup, d: "Peppery South Indian tamarind broth, tempered with cumin and curry leaves." },
      { n: "Sweet Corn Veg Soup", p: "5", veg: true, img: IMG.soup, d: "Silky sweet corn and garden vegetables in a light broth." },
      { n: "Murgh & Dhaniya Shorba", p: "6.5", veg: false, img: IMG.soup, d: "Chicken and coriander shorba, gently spiced and fragrant." },
      { n: "Chicken Corn Soup", p: "6.5", veg: false, img: IMG.soup, d: "Comforting chicken and sweet corn classic." },
      { n: "Day Special Non-veg Soup", p: "7", veg: false, img: IMG.soup, d: "The day’s slow-simmered special — most often our mutton soup." },
    ],
  },
  {
    cat: "Small Plates",
    items: [
      { n: "Veg Samosa", p: "6", veg: true, img: IMG.samosa, d: "Crisp pastry, spiced potato-pea filling, mint chutney." },
      { n: "Kurkuri Bhindi", p: "8", veg: true, img: IMG.samosa, d: "Shredded okra fried to a shattering crisp, dusted with chaat spice." },
      { n: "Onion Bajji", p: "7", veg: true, img: IMG.samosa, d: "Golden onion fritters with mint chutney." },
      { n: "South Indian Potato Bajji", p: "7", veg: true, img: IMG.samosa, d: "Batter-fried potato slices with coconut chutney." },
      { n: "Gobi Manchurian", p: "13.5", veg: true, img: IMG.paneer, d: "Crispy cauliflower tossed in a tangy Indo-Chinese glaze." },
      { n: "Gunpowder Mini Idly", p: "11", veg: true, img: IMG.idli, d: "Button idlis rolled in podi and ghee, coconut chutney." },
      { n: "Idly with Sambar", p: "8", veg: true, img: IMG.idli, d: "Steamed rice cakes, sambar and coconut chutney." },
      { n: "Mini Medhu Vada Shooters (4 pcs)", p: "10", veg: true, img: IMG.idli, d: "Crisp lentil doughnuts served small, with coconut chutney." },
      { n: "Paneer 65", p: "14", veg: true, img: IMG.paneer, d: "Fiery, crisp-fried cottage cheese — the vegetarian 65." },
      { n: "Zaffrani Paneer Tikka", p: "15", veg: true, img: IMG.paneer, d: "Saffron-marinated paneer, charred in the tandoor." },
      { n: "Masala Papad", p: "4", veg: true, img: IMG.samosa, d: "Roasted papad topped with onion-tomato masala, mint chutney." },
      { n: "Ambur Kitchen Special Salsa Papad", p: "6", veg: true, img: IMG.samosa, d: "Our house salsa piled onto crackling papad." },
      { n: "Veg Sampler Platter", p: "20", veg: true, img: IMG.thali, d: "Veg samosa, Paneer 65, onion bajji, medhu vada and potato bajji." },
      { n: "Lamb Samosa", p: "7.5", veg: false, img: IMG.samosa, d: "Flaky pastry with spiced minced lamb." },
      { n: "Mutton Ghee Roast Fry", p: "20", veg: false, img: IMG.tandoori, d: "Tender mutton roasted dark in ghee and ground spices." },
      { n: "Spicy Chicken Wings", p: "16", veg: false, img: IMG.tandoori, d: "Wings tossed in our house chilli masala." },
      { n: "Chicken 65", p: "16", veg: false, img: IMG.tandoori, d: "The cult South Indian fried chicken — hot, red, addictive." },
      { n: "Peri Peri Tandoori Chicken (2 pcs)", p: "16", veg: false, img: IMG.tandoori, d: "Half a chicken, char-grilled in the tandoor with a peri peri kick." },
      { n: "Classic Chicken Tikka", p: "17", veg: false, img: IMG.tandoori, d: "Smoky yoghurt-marinated chicken from the tandoor." },
      { n: "Pitchu Potta Chicken Varuval", p: "16", veg: false, img: IMG.tandoori, d: "Hand-shredded chicken varuval, dry-fried with pepper and curry leaf." },
      { n: "Creamy Cashew Chicken", p: "18", veg: false, img: IMG.butter, d: "Chicken in a mellow, nutty cashew cream." },
      { n: "Protein Special Lamb Omelette", p: "12", veg: false, img: IMG.samosa, d: "Loaded lamb omelette, built for appetite." },
      { n: "Spicy Keema Chicken Omelette", p: "11", veg: false, img: IMG.samosa, d: "Minced chicken folded through a fiery omelette." },
      { n: "Egg Bonda", p: "11", veg: false, img: IMG.samosa, d: "Boiled eggs in spiced gram-flour batter, fried golden." },
      { n: "Egg Kalaki", p: "7.5", veg: false, img: IMG.samosa, d: "Silky street-style scrambled egg, Tamil Nadu highway classic." },
      { n: "Pomfret Fish Polichadhu", p: "19", veg: false, img: IMG.seafood, d: "Whole pomfret wrapped and pan-roasted in masala, Kerala style." },
      { n: "Tempura Crunchy Fish Fry", p: "15", veg: false, img: IMG.seafood, d: "Light tempura batter, crisp-fried fish." },
      { n: "King Prawn Pepper Fry", p: "20", veg: false, img: IMG.seafood, d: "Jumbo prawns seared with cracked black pepper." },
      { n: "Ambur Kitchen Special Gun Powder Prawns", p: "20", veg: false, img: IMG.seafood, d: "Prawns tumbled in our roasted gunpowder podi." },
      { n: "Non-veg Sampler Platter", p: "28", veg: false, img: IMG.thali, d: "Lamb samosa, Chicken 65, fish finger, egg bonda and spicy chicken wings." },
    ],
  },
  {
    cat: "Street Tawa Rolls",
    items: [
      { n: "Chicken Tikka Roll", p: "10", veg: false, img: IMG.naan, d: "Tandoori chicken tikka rolled hot off the tawa." },
      { n: "Minced Mutton Egg Roll", p: "12", veg: false, img: IMG.naan, d: "Spiced mutton keema and egg, wrapped street-style." },
      { n: "Channa Masala Roll", p: "9.5", veg: true, img: IMG.naan, d: "Chickpea masala tucked into a griddled wrap." },
      { n: "Spicy Paneer Roll", p: "10", veg: true, img: IMG.naan, d: "Chilli paneer rolled with onions and chutney." },
    ],
  },
  {
    cat: "Ambur Special Platters",
    items: [
      { n: "Kerala Kadala Curry Platter", p: "15", veg: true, img: IMG.curry, d: "Black chickpea curry with appam or Malabar parotta." },
      { n: "South Indian Tarkari Kurma Platter", p: "14", veg: true, img: IMG.curry, d: "Coconut-rich vegetable kurma with mini idly, chapathi or Malabar parotta." },
      { n: "Railway Mutton Curry Platter", p: "22", veg: false, img: IMG.curry, d: "Railway-canteen mutton curry with appam, idiyappam or Malabar parotta." },
      { n: "Ambur Mutton Paya", p: "22", veg: false, img: IMG.curry, d: "Slow-cooked trotters broth with appam, Malabar parotta or idiyappam." },
      { n: "Arcot Chicken Curry Platter", p: "20", veg: false, img: IMG.curry, d: "Heritage Arcot-style chicken curry with Malabar parotta, chapathi, idiyappam or idly." },
      { n: "Ghee Rice with Chicken Kuruma", p: "19", veg: false, img: IMG.rice, d: "Ambur special ghee rice paired with chicken kuruma." },
      { n: "Malabar Parotta (2) with Chicken Salna", p: "15", veg: false, img: IMG.curry, d: "Flaky parottas drowned in spicy street-style salna." },
      { n: "Vegetarian Meals", p: "19", veg: true, img: IMG.thali, d: "A full South Indian vegetarian spread, served the traditional way." },
      { n: "Non-veg Meals", p: "29", veg: false, img: IMG.thali, d: "Chicken 65 (3 pcs), fish finger (3 pcs), mutton masala, porial, sambar, rasam, chapati, rice, papad, pickle, buttermilk and sweet of the day." },
    ],
  },
  {
    cat: "Biryani, Rice & Noodles",
    items: [
      { n: "Ambur Special Seeraga Samba Chicken Biryani", p: "19", veg: false, img: IMG.biryani, d: "Our signature, on fragrant seeraga samba rice, with aubergine curry and raita." },
      { n: "Ambur Special Seeraga Samba Mutton Biryani", p: "", veg: false, img: IMG.biryani, d: "Seeraga samba mutton biryani with aubergine curry and raita." },
      { n: "Hyderabad Basmati Mutton Biryani", p: "21", veg: false, img: IMG.biryani, d: "Dum-cooked Hyderabadi mutton biryani on long-grain basmati." },
      { n: "Hyderabad Chicken Biryani", p: "19", veg: false, img: IMG.biryani, d: "Layered Hyderabadi chicken biryani, sealed and slow-steamed." },
      { n: "Classic Veg Fried Rice / Noodles", p: "14", veg: true, img: IMG.rice, d: "Wok-tossed with crunchy vegetables." },
      { n: "Classic Chicken Fried Rice / Noodles", p: "15.5", veg: false, img: IMG.rice, d: "Smoky wok-fried rice or noodles with chicken." },
      { n: "Curd Rice with Pickle", p: "9", veg: true, img: IMG.rice, d: "Cooling yoghurt rice, tempered, with pickle." },
      { n: "Ghee Rice", p: "8", veg: true, img: IMG.rice, d: "Fragrant rice glossed with pure ghee." },
      { n: "Flavored Basmati Rice", p: "4.5", veg: true, img: IMG.rice, d: "Lightly spiced basmati." },
      { n: "Plain Boiled Rice", p: "4.5", veg: true, img: IMG.rice, d: "Steamed white rice." },
    ],
  },
  {
    cat: "Ambur Special Curries",
    note: "Served with complimentary rice — best paired with breads, ordered separately.",
    items: [
      { n: "Railway Boneless Mutton Curry", p: "20", veg: false, img: IMG.curry, d: "Rich, dark mutton curry in the railway-canteen style." },
      { n: "Ambur Special Chicken Masala", p: "19", veg: false, img: IMG.curry, d: "Our house chicken masala, ground-spice deep." },
      { n: "Mutton Kheema Gojju", p: "20", veg: false, img: IMG.curry, d: "Minced mutton simmered into a robust, tangy gojju." },
      { n: "Chicken Kuruma", p: "19", veg: false, img: IMG.curry, d: "Gentle coconut-cashew chicken curry." },
      { n: "Malabar Fish Curry", p: "21", veg: false, img: IMG.seafood, d: "Fish in a tangy coconut-kokum gravy." },
      { n: "Kadai Prawn Curry", p: "21", veg: false, img: IMG.seafood, d: "Prawns tossed in a kadai masala of peppers and crushed spice." },
      { n: "Chicken Tikka Masala", p: "19", veg: false, img: IMG.butter, d: "Char-grilled tikka folded into creamy tomato masala." },
      { n: "Ambur Special Butter Chicken Masala", p: "19", veg: false, img: IMG.butter, d: "Velvety tomato-butter gravy, mildly sweet." },
      { n: "Palak Chicken", p: "19", veg: false, img: IMG.curry, d: "Chicken braised in silky spinach gravy." },
      { n: "Channa Masala", p: "16", veg: true, img: IMG.curry, d: "Chickpeas in a punchy onion-tomato masala." },
      { n: "Dal Butter Fry", p: "15", veg: true, img: IMG.curry, d: "Yellow lentils tempered in butter and cumin." },
      { n: "Dal Makhani", p: "16", veg: true, img: IMG.curry, d: "Black lentils slow-cooked overnight with butter and cream." },
      { n: "Paneer Butter Masala", p: "17", veg: true, img: IMG.butter, d: "Cottage cheese in rich tomato-butter gravy." },
      { n: "Vegetable Kuruma", p: "16", veg: true, img: IMG.curry, d: "Vegetables in fragrant coconut kuruma." },
      { n: "Kerala Kadala Curry", p: "17", veg: true, img: IMG.curry, d: "Black chickpeas in roasted coconut gravy." },
      { n: "Palak Paneer", p: "19", veg: true, img: IMG.curry, d: "Paneer in smooth, spiced spinach." },
    ],
  },
  {
    cat: "Dosa Specials",
    items: [
      { n: "Masala Dosa", p: "10", veg: true, img: IMG.dosa, d: "Golden crepe with spiced potato masala, sambar and chutney." },
      { n: "Ghee Podi Masala Dosa", p: "12", veg: true, img: IMG.dosa, d: "Ghee-roasted dosa dusted with gunpowder podi." },
      { n: "Benne Masala Dosa with Butter", p: "14", veg: true, img: IMG.dosa, d: "Griddled in white butter, crisp at the edges." },
      { n: "Plain Dosa", p: "9.5", veg: true, img: IMG.dosa, d: "Classic crisp rice-lentil crepe." },
      { n: "Chicken Keema Dosa with Chicken Salna", p: "15.5", veg: false, img: IMG.dosa, d: "Dosa stuffed with masala chicken keema, salna on the side." },
      { n: "Special Masala Egg Dosa with Salna", p: "14", veg: false, img: IMG.dosa, d: "Egg-coated masala dosa served with salna." },
      { n: "Special Mutton Keema Dosa with Chicken Salna", p: "16.5", veg: false, img: IMG.dosa, d: "Dosa layered with spiced mutton keema, served with salna." },
    ],
  },
  {
    cat: "Breads & Sides",
    items: [
      { n: "Malabar Parotta (1 pc)", p: "4", veg: true, img: IMG.naan, d: "Hand-laminated, flaky layered flatbread." },
      { n: "Tandoori Naan (Plain / Cheese / Butter)", p: "4 / 5.5 / 5.5", veg: true, img: IMG.naan, d: "Pillowy naan from the tandoor." },
      { n: "Tandoori Cheese Garlic Naan", p: "6", veg: true, img: IMG.naan, d: "Naan stuffed with cheese and garlic, tandoor-blistered." },
      { n: "Tandoori Roti (Plain / Butter)", p: "3.5 / 4", veg: true, img: IMG.naan, d: "Whole-wheat tandoor roti." },
      { n: "Appam (1 pc)", p: "5", veg: true, img: IMG.naan, d: "Lacy fermented rice hopper, soft-centred." },
      { n: "Egg Appam (1 pc)", p: "7", veg: false, img: IMG.naan, d: "Appam set around a soft-cooked egg." },
      { n: "Idiyappam (2 pcs)", p: "5", veg: true, img: IMG.naan, d: "Delicate steamed string hoppers." },
      { n: "Idly (1 pc)", p: "4", veg: true, img: IMG.idli, d: "Soft steamed rice cake." },
      { n: "Chapathi (1 pc)", p: "4", veg: true, img: IMG.naan, d: "Soft griddled wheat flatbread." },
    ],
  },
  {
    cat: "Desserts",
    items: [
      { n: "Gulab Jamun (2 pcs)", p: "", veg: true, img: IMG.idli, d: "Warm milk dumplings soaked in rose-cardamom syrup." },
      { n: "Rava Kesari", p: "", veg: true, img: IMG.idli, d: "Saffron semolina pudding, rich with ghee." },
      { n: "Moong Dal Kheer", p: "", veg: true, img: IMG.idli, d: "Slow-cooked lentil and jaggery kheer." },
      { n: "Kulfi", p: "", veg: true, img: IMG.idli, d: "Dense, slow-churned Indian ice cream." },
      { n: "Ice Cream", p: "", veg: true, img: IMG.idli, d: "Vanilla, strawberry, chocolate or pistache." },
    ],
  },
];

export const TOTAL_DISHES = MENU.reduce((sum, g) => sum + g.items.length, 0);
