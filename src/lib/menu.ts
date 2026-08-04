export type MenuItem = {
  /** Dish name */
  n: string;
  /** Price in euros, as displayed (may be a range like "3.5 / 4") */
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
      { n: "Tangy Rasam Soup", p: "5", veg: true, img: IMG.soup, d: "Peppery South Indian tamarind broth, tempered with cumin and curry leaves." },
      { n: "Sweet Corn Veg Soup", p: "5", veg: true, img: IMG.soup, d: "Silky sweet corn and garden vegetables in a light broth." },
      { n: "Chicken Corn Soup", p: "6.5", veg: false, img: IMG.soup, d: "Comforting chicken and sweet corn classic." },
      { n: "Day Special Non-veg Soup", p: "7", veg: false, img: IMG.soup, d: "Ask your server for today’s slow-simmered special." },
    ],
  },
  {
    cat: "Small Plates",
    items: [
      { n: "Veg Samosa", p: "6", veg: true, img: IMG.samosa, d: "Crisp pastry, spiced potato-pea filling, mint chutney." },
      { n: "Onion Bajji", p: "7", veg: true, img: IMG.samosa, d: "Golden onion fritters with mint chutney." },
      { n: "South Indian Potato Bajji", p: "7", veg: true, img: IMG.samosa, d: "Batter-fried potato slices with coconut chutney." },
      { n: "Gobi Manchurian", p: "13.5", veg: true, img: IMG.paneer, d: "Crispy cauliflower tossed in a tangy Indo-Chinese glaze." },
      { n: "Gunpowder Mini Idly", p: "11", veg: true, img: IMG.idli, d: "Button idlis rolled in podi and ghee, coconut chutney." },
      { n: "Idly with Sambar", p: "8", veg: true, img: IMG.idli, d: "Steamed rice cakes, sambar and coconut chutney." },
      { n: "Medhu Vada", p: "8", veg: true, img: IMG.idli, d: "Crisp lentil doughnuts with coconut chutney." },
      { n: "Paneer 65", p: "14", veg: true, img: IMG.paneer, d: "Fiery, crisp-fried cottage cheese — the vegetarian 65." },
      { n: "Masala Papad", p: "4", veg: true, img: IMG.samosa, d: "Roasted papad topped with onion-tomato masala, mint chutney." },
      { n: "Veg Sampler Platter", p: "20", veg: true, img: IMG.thali, d: "Veg samosa, Paneer 65, onion bajji, medhu vada, potato bajji." },
      { n: "Lamb Samosa", p: "7.5", veg: false, img: IMG.samosa, d: "Flaky pastry with spiced minced lamb." },
      { n: "Mutton Ghee Roast Fry", p: "20", veg: false, img: IMG.tandoori, d: "Tender mutton roasted dark in ghee and ground spices." },
      { n: "Spicy Chicken Wings", p: "16", veg: false, img: IMG.tandoori, d: "Wings tossed in our house chilli masala." },
      { n: "Chicken 65", p: "16", veg: false, img: IMG.tandoori, d: "The cult South Indian fried chicken — hot, red, addictive." },
      { n: "Peri Peri Tandoori Chicken", p: "16", veg: false, img: IMG.tandoori, d: "Char-grilled tandoori chicken with a peri peri kick." },
      { n: "Chicken Tikka", p: "17", veg: false, img: IMG.tandoori, d: "Smoky yoghurt-marinated chicken from the tandoor." },
      { n: "Pomfret Fish Polichadhu", p: "19", veg: false, img: IMG.seafood, d: "Whole pomfret wrapped and pan-roasted in masala, Kerala style." },
      { n: "Fish Finger", p: "15", veg: false, img: IMG.seafood, d: "Crisp-fried spiced fish strips." },
      { n: "King Prawn Pepper Fry", p: "20", veg: false, img: IMG.seafood, d: "Jumbo prawns seared with cracked black pepper." },
      { n: "Nandu Omelette", p: "19", veg: false, img: IMG.seafood, d: "Crab-meat omelette, a coastal Tamil delicacy." },
      { n: "Egg Bonda", p: "11", veg: false, img: IMG.samosa, d: "Boiled eggs in spiced gram-flour batter, fried golden." },
      { n: "Egg Kalaki", p: "7", veg: false, img: IMG.samosa, d: "Silky street-style scrambled egg, Tamil Nadu highway classic." },
      { n: "Non-veg Sampler Platter", p: "25", veg: false, img: IMG.thali, d: "Lamb samosa, Chicken 65, fish finger, egg bonda, spicy wings." },
    ],
  },
  {
    cat: "Ambur Special Platters",
    items: [
      { n: "Kerala Kadala Curry Platter", p: "14", veg: true, img: IMG.curry, d: "Black chickpea curry with appam or Malabar parotta." },
      { n: "Ambur Mutton Paya", p: "22", veg: false, img: IMG.curry, d: "Slow-cooked trotters broth with appam, parotta or idiyappam." },
      { n: "Arcot Chicken Curry Platter", p: "20", veg: false, img: IMG.curry, d: "Heritage Arcot-style chicken curry with parotta or idiyappam." },
      { n: "Mixed Vegetable Kuruma Platter", p: "14", veg: true, img: IMG.curry, d: "Coconut-rich vegetable kuruma with parotta, appam or idiyappam." },
      { n: "Ghee Rice with Chicken Kuruma", p: "19", veg: false, img: IMG.rice, d: "Ambur special ghee rice paired with chicken kuruma." },
      { n: "Vegetarian Meals", p: "19", veg: true, img: IMG.thali, d: "A full South Indian vegetarian spread, served the traditional way." },
      { n: "Non-veg Meals", p: "29", veg: false, img: IMG.thali, d: "Sambar, rasam, Chicken 65, chapati, mutton masala, fish finger, porial, appalam, buttermilk, pickle and sweet of the day." },
      { n: "Malabar Parotta Salna", p: "15", veg: false, img: IMG.curry, d: "Flaky parotta drowned in spicy street-style salna." },
    ],
  },
  {
    cat: "Biryani, Rice & Noodles",
    items: [
      { n: "Ambur Mutton Biryani", p: "21", veg: false, img: IMG.biryani, d: "Our signature: basmati mutton biryani with aubergine curry and raita." },
      { n: "Seeraga Samba Chicken Biryani", p: "19", veg: false, img: IMG.biryani, d: "Ambur special chicken biryani on fragrant seeraga samba rice, with aubergine curry and raita." },
      { n: "Veg Fried Rice / Noodles", p: "14", veg: true, img: IMG.rice, d: "Wok-tossed with crunchy vegetables." },
      { n: "Chicken Fried Rice / Noodles", p: "15.5", veg: false, img: IMG.rice, d: "Smoky wok-fried rice or noodles with chicken." },
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
      { n: "Arcot Boneless Mutton Curry", p: "20", veg: false, img: IMG.curry, d: "Rich, dark mutton curry from the Arcot royal kitchens." },
      { n: "Ambur Special Chicken Masala", p: "19", veg: false, img: IMG.curry, d: "Our house chicken masala, ground-spice deep." },
      { n: "Mutton Keema Masala", p: "20", veg: false, img: IMG.curry, d: "Minced mutton simmered in a robust masala." },
      { n: "Chicken Kuruma", p: "19", veg: false, img: IMG.curry, d: "Gentle coconut-cashew chicken curry." },
      { n: "Malabar Pomfret Fish Curry", p: "21", veg: false, img: IMG.seafood, d: "Pomfret in a tangy coconut-kokum gravy." },
      { n: "King Prawn Curry", p: "21", veg: false, img: IMG.seafood, d: "Jumbo prawns in a coastal spiced gravy." },
      { n: "Chicken Tikka Masala", p: "19", veg: false, img: IMG.butter, d: "Char-grilled tikka folded into creamy tomato masala." },
      { n: "Butter Chicken Masala", p: "19", veg: false, img: IMG.butter, d: "Velvety tomato-butter gravy, mildly sweet." },
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
      { n: "Plain Dosa", p: "9.5", veg: true, img: IMG.dosa, d: "Classic crisp rice-lentil crepe." },
      { n: "Chicken Dosa with Salna", p: "15.5", veg: false, img: IMG.dosa, d: "Dosa stuffed with masala chicken, chicken salna on the side." },
      { n: "Mutton Dosa with Salna", p: "16.5", veg: false, img: IMG.dosa, d: "Dosa layered with spiced mutton, served with salna." },
      { n: "Spl Masala Egg Dosa", p: "14.5", veg: false, img: IMG.dosa, d: "Egg-coated masala dosa with salna." },
      { n: "Mutton Keema Dosa", p: "16.5", veg: false, img: IMG.dosa, d: "Special keema-loaded dosa with chicken salna." },
    ],
  },
  {
    cat: "Breads & Sides",
    items: [
      { n: "Malabar Parotta (1 pc)", p: "4", veg: true, img: IMG.naan, d: "Hand-laminated, flaky layered flatbread." },
      { n: "Tandoori Naan (Plain / Butter)", p: "3.5 / 4", veg: true, img: IMG.naan, d: "Pillowy naan from the tandoor." },
      { n: "Tandoori Roti (Plain / Butter)", p: "3.5 / 4", veg: true, img: IMG.naan, d: "Whole-wheat tandoor roti." },
      { n: "Appam (1 pc)", p: "5", veg: true, img: IMG.naan, d: "Lacy fermented rice hopper, soft-centred." },
      { n: "Idiyappam (2 pcs)", p: "5", veg: true, img: IMG.naan, d: "Delicate steamed string hoppers." },
    ],
  },
];

export const TOTAL_DISHES = MENU.reduce((sum, g) => sum + g.items.length, 0);
