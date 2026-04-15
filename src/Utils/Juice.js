const Juices = [
  {
    id: 1,
    name: "4 X 4",
    flavor: "Smooth tobacco with hints of vanilla and caramel",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 2,
    name: "Exspress",
    flavor: "A creamy vanilla and hazelnut cappuccino",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 3,
    name: "Arabian Gold",
    flavor: "Sweet apple and smoky tobacco combine for a sweet cigar vape",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 4,
    name: "Artic Breeze",
    flavor: "Ice cold menthol vape with a slight touch of sweetness",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 5,
    name: "Aura",
    flavor: "Crisp apple, smoothpeach, and sweet strawberry",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 6,
    name: "B Wave",
    flavor: "Soft Blueberry Candies coated with powdered sugar",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 7,
    name: "Big Squeeze",
    flavor: "A tasty orange mango with juicy pineapples and sweet guava",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 8,
    name: "Big Squeeze Frezze",
    flavor:
      "A tasty orange mango with juicy pineapples and sweet guava with a touch of coolness",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 9,
    name: "Blitz",
    flavor: "Rich banana, buttery vanilla wafers, and whipped cream",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 10,
    name: "Blue Elixir",
    flavor: "Flaky buttery biscuit topped with sweet blueberry jam",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 11,
    name: "BoomBerg",
    flavor: "Cool mixed fruit blend with a touch of menthol and koolada",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 12,
    name: "Boomer Blast",
    flavor:
      "A citrusy blast straight from the sunny beaches of baha california",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 13,
    name: "Boomer Blast Ice",
    flavor:
      "A citrusy blast straight from the sunny beaches of baha california with a touch of coolness",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 14,
    name: "Cactus Jack",
    flavor: "Refreshing cactus, jackfruit, and orange",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 15,
    name: "Classic",
    flavor: "light tabacco",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 16,
    name: "Cloud Burst",
    flavor: "Ripe banana, sweet cream, and fresh honeydew",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 17,
    name: "Cool Blast",
    flavor: "Watermelon, berry and menthol",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 18,
    name: "Crunch Time",
    flavor: "Sweet rice treat with melted marshmallow glaze",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 19,
    name: "Daybreak",
    flavor:
      "Classic vanilla French toast topped with blueberries and powdered sugar",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 20,
    name: "Desert Bloom",
    flavor: "Cactus and white Grapes",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 21,
    name: "Diablo",
    flavor: "Spicy Cinnamon vape, Just like the candies.",
    mg: "0, 3, 6, 12",
  },
  {
    id: 22,
    name: "El Uno",
    flavor: "Strawberry ceral dounut milk",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 23,
    name: "Electric Blue",
    flavor: "Sweet and tart Blue raspberry cotton candy",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 24,
    name: "Fantasy",
    flavor: "Smooth, creamy and sweet strawberry cheesecake",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 25,
    name: "Flavor Free",
    flavor: "UMmm idk what flavor this is",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 26,
    name: "Formula One",
    flavor: "Marshmellow ceral milk",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 27,
    name: "Fusion",
    flavor: "strawberry watermelon kiwi",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 28,
    name: "Fuzzy Blast",
    flavor: "Citrusy Peach soda",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 29,
    name: "Goliath",
    flavor: "Vanilla custard, apple pie, marshmallows, carmel and cream",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 30,
    name: "Green Fuel",
    flavor: "Scary good green energy drink",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 31,
    name: "Grouchy Geezer",
    flavor: "Sweet buterscotch and salted caramel",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 32,
    name: "Gusher",
    flavor: "Smooth and sweet strawberries with tart and tanky lemonade",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 33,
    name: "Gusher Ice",
    flavor: "Smooth and sweet strawberries with tart and tanky lemonade on ice",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 34,
    name: "Icy B",
    flavor: "A banana taffy with kiilada",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 35,
    name: "Island Escape",
    flavor: "Strawberries, rasberries, crisp apples and cream",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 36,
    name: "Jubliee",
    flavor:
      "classic vanilla ice cream, battered and fried, just like at the fair",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 37,
    name: "JuJu",
    flavor: "Sweet, tart, and sour combine to form this gummi snake vape",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 38,
    name: "King Of Rock",
    flavor: "Rich penut butter, ripe banana, and sweet mayple syrup sandwitch",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 39,
    name: "Landslide",
    flavor: "creamy strawberry, banana, and vanillia ice cream milkshake",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 40,
    name: "Los Dos",
    flavor: "Mix of Blueberry flavors that is oh so sweet",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 41,
    name: "Los Dos Ice",
    flavor: "Mix of Blueberry flavors that is oh so sweet with koolada",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 42,
    name: "Magic Postion",
    flavor: "Swet strawberry, juicy watermelon and smooth coconut",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 43,
    name: "Mean Green",
    flavor: "sweet and tart green apple",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 44,
    name: "Mean Green Ice",
    flavor: "sweet and tart green apple with koolada",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 45,
    name: "Mystic",
    flavor: "Vanilla cupcake with honey and cream",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 46,
    name: "Oak Barrel",
    flavor: "Brown suger, bourbon, aged oak, a gentlemanly vape cocktail",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 47,
    name: "Polar Ice",
    flavor:
      "the coldest vape we have! Creamed peppermint and extreme menthol flavor",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 48,
    name: "Punch Line",
    flavor: "Tropical fruits with a citrus punch",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 49,
    name: "Punch Line Ice",
    flavor: "Pink lemonade with koolada",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 50,
    name: "Purple Splash",
    flavor:
      "Mixed Berry slushie with extra grape... a grape twist on our top selling Splash flavor",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 51,
    name: "Rancher",
    flavor: "Classic watermelon hard candy blended for a tart and sweet vape",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 52,
    name: "Rancher Ice",
    flavor:
      "classic hard candy flavors, a tart and sweet vape, with a touch of coolness",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 53,
    name: "Razzle",
    flavor: "Refreshing sweet and tart blueberry, raspberry, and lemon",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 54,
    name: "Razzle Ice",
    flavor:
      "Refreshing sweet and tart blueberry, raspberry, and lemon with koolada",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 55,
    name: "Red Fuel",
    flavor: "Red energy flavor that will make you fly!",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 56,
    name: "Red Splash",
    flavor:
      "Mixed-berry slushie with extra strawberry... a stawberry twist on our Spash flavor",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 57,
    name: "Ring of Glory",
    flavor: "The ultimite glazed donut vape",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 58,
    name: "Ruby Red",
    flavor: "strawberry, Pineapple, and pomegranate ring candy",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 59,
    name: "Skyline",
    flavor:
      "Tropical infusion of strawberries, pineapple, raspberries, and coconut",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 60,
    name: "Splash",
    flavor:
      "Our best seller of all time! A perfectly sweet, balanced and refreshing mixed berry slushie",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 61,
    name: "Splash Ice",
    flavor:
      "the perfect fruit vape, just like sipping a mixed berry slush! OG Spash! witha touch of coolness.",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 62,
    name: "Striker",
    flavor: "Citrus with pineapple, blueberry, and strawberry",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 63,
    name: "Sunflower",
    flavor:
      "sharp citrus,sweet honeysuckle, and smooth cream, a Boomtown legend",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 64,
    name: "Surge",
    flavor: "Refreshing sweet and tart blueberry lemonade",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 65,
    name: "Surge Ice",
    flavor: "Refreshing sweet and tart blueberry lemonade with koolada",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 66,
    name: "Sweet Pog",
    flavor: "Passionfruit, oarnge, and guava. Just like the Hawaiian drink",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 67,
    name: "The Truth",
    flavor: "Cinnamon french toast square cereal with sweet milk",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 68,
    name: "Tiger's Brew",
    flavor:
      "Strawberry, watermelon, coconut, and cream. The popular snow-cone flavor",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 69,
    name: "Titan",
    flavor: "A creamt fruit medley with ectra dragonfruit",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 70,
    name: "Tobacco Menthol",
    flavor: "Cool mennthol tobacco vape",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 71,
    name: "Triple Threat",
    flavor: "Apple, peach, strawberry with koolada",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 72,
    name: "Tropical Blast",
    flavor: "Sweet mango, refreshing orange and a mixture of tropical fruits",
    mg: "0, 3, 6, 12, 36",
  },
  {
    id: 73,
    name: "Turkish Blend",
    flavor: "Strong Turkish tibacci flavor",
    mg: "0, 3, 6, 12, 36",
  },
];

export default Juices;
