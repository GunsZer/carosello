import { MenuCategory, MenuItem } from '../types';

export const menuCategories: MenuCategory[] = [
  {
    id: 'chef-suggestions',
    name: 'Suggestione dello Chef',
    items: [
      {
        id: 'vitello-tonnato',
        name: 'Vitello Tonnato',
        description: 'Tranches fines rôti de veau rosé, sauce au thon',
        price: 28,
        isSpecial: true,
        allergens: ['poisson', 'œufs']
      },
      {
        id: 'osso-buco',
        name: 'Osso Buco di Vitello alla Milanese',
        description: 'Osso buco de veau à la milanaise avec purée de pommes de terre maison',
        price: 40,
        isSpecial: true,
        allergens: ['lait']
      },
      {
        id: 'ravioloni',
        name: 'Ravioloni Faciti di Ricotta e Spinaci',
        description: 'Raviolis farcis de ricotta et épinards avec crème de parmesan et tomates séchées',
        price: 25,
        isSpecial: true,
        allergens: ['gluten', 'lait', 'œufs']
      },
      {
        id: 'paccheri',
        name: 'Paccheri con Pomodoro Basilico e Mozzarella di Bufala Cruda',
        description: 'Paccheri avec tomates, basilic et mozzarella de bufflonne crue',
        price: 24,
        isSpecial: true,
        allergens: ['gluten', 'lait']
      },
      {
        id: 'gnocchetti',
        name: 'Gnocchetti di Patate',
        description: 'Gnocchetti de pomme de terre avec tomates, basilic et mozzarella de bufflonne',
        price: 24,
        isSpecial: true,
        allergens: ['gluten', 'lait']
      },
      {
        id: 'cacio-pepe',
        name: 'Spaghetti Cacio e Pepe',
        description: 'Spaghetti avec crème de fromage de brebis et poivre noir concassé',
        price: 22,
        isSpecial: true,
        allergens: ['gluten', 'lait']
      },
      {
        id: 'risotto-porcini',
        name: 'Risottino Cremoso',
        description: 'Risotto crémeux mantecato dans la meule de grana avec sauce aux bolets',
        price: 28,
        isSpecial: true,
        allergens: ['lait']
      },
      {
        id: 'pizza-tonno',
        name: 'Pizza Pomodoro Mozzarella Tonno e Peperoni',
        description: 'Pizza tomates, mozzarella, thon et poivrons',
        price: 22,
        isSpecial: true,
        allergens: ['gluten', 'lait', 'poisson']
      },
      {
        id: 'pizza-tartufo',
        name: 'Pizza Rucola Pomodorini Mozzarella di Bufala e Tartufo Nero',
        description: 'Pizza roquette, tomates cerises, mozzarella de bufflonne et truffe noire',
        price: 32,
        isSpecial: true,
        allergens: ['gluten', 'lait']
      }
    ]
  },
  {
    id: 'starters',
    name: 'Antipasti',
    items: [
      {
        id: 'mozzarella-bufala',
        name: 'Mozzarella di Bufala con Pomodori e Basilico',
        description: 'Mozzarella de bufflonne avec tomates fraîches et basilic',
        price: 21,
        isSpecial: false,
        allergens: ['lait']
      },
      {
        id: 'carpaccio',
        name: 'Carpaccio di Manzo',
        description: 'Viande de bœuf, roquette, oignons, huile d\'olive et copeaux de grana',
        price: 23,
        isSpecial: false,
        allergens: ['lait']
      },
      {
        id: 'parmigiana-small',
        name: 'Parmigiana',
        description: 'Tranches d\'aubergines gratinées, sauce tomate, basilic, grana et mozzarella',
        price: 18,
        isSpecial: false,
        allergens: ['lait']
      },
      {
        id: 'parmigiana-large',
        name: 'Parmigiana (Grande)',
        description: 'Tranches d\'aubergines gratinées, sauce tomate, basilic, grana et mozzarella',
        price: 22,
        isSpecial: false,
        allergens: ['lait']
      }
    ]
  },
  {
    id: 'salads',
    name: 'Le Insalate',
    items: [
      {
        id: 'cesare',
        name: 'Insalata Cesare',
        description: 'Salade, poulet pané, œuf mollet, tomates cerises, copeaux de grana et croûtons',
        price: 21,
        isSpecial: false,
        allergens: ['gluten', 'œufs', 'lait']
      },
      {
        id: 'chef',
        name: 'Insalata dello Chef',
        description: 'Salade, gruyère, tomates fraîches, poulet pané',
        price: 20,
        isSpecial: false,
        allergens: ['gluten', 'lait']
      },
      {
        id: 'fiorentina',
        name: 'Insalata Fiorentina',
        description: 'Salade, tomates fraîches, champignons, avocat, pecorino, noix',
        price: 19,
        isSpecial: false,
        allergens: ['lait', 'fruits à coque']
      },
      {
        id: 'capra',
        name: 'Insalata con Formaggio di Capra Caldo',
        description: 'Salade au chèvre chaud avec miel, abricots séchés et ricotta de brebis affinée et salée',
        price: 21,
        isSpecial: false,
        allergens: ['lait']
      },
      {
        id: 'nonna',
        name: 'Insalata della Nonna',
        description: 'Salade, tomates fraîches, croûtons, lardons grillés et pecorino',
        price: 21,
        isSpecial: false,
        allergens: ['gluten', 'lait']
      },
      {
        id: 'italiana',
        name: 'Insalata all\'Italiana',
        description: 'Salade tomates fraîches, mozzarella, jambon San Daniele',
        price: 24,
        isSpecial: false,
        allergens: ['lait']
      }
    ]
  },
  {
    id: 'pasta',
    name: 'Primi Piatti',
    items: [
      {
        id: 'carbonara',
        name: 'Spaghetti Carbonara',
        description: 'Crème fraîche, œuf, lardons et poivre noir',
        price: 21,
        isSpecial: false,
        allergens: ['gluten', 'œufs', 'lait']
      },
      {
        id: 'aglio-olio',
        name: 'Spaghetti Aglio, Olio e Peperoncino',
        description: 'Ail, tomates fraîches, huile d\'olive et piments',
        price: 20,
        isSpecial: false,
        allergens: ['gluten']
      },
      {
        id: 'vongole',
        name: 'Spaghetti Vongole',
        description: 'Palourdes, tomates fraîches, ail, huile d\'olive et piments',
        price: 25,
        isSpecial: false,
        allergens: ['gluten', 'mollusques']
      },
      {
        id: 'sarde',
        name: 'Spaghetti alle Sarde',
        description: 'Sardines, tomates fraîches, raisins secs, pignons, pecorino au poivre et chapelure grillée',
        price: 23,
        isSpecial: false,
        allergens: ['gluten', 'poisson', 'fruits à coque', 'lait']
      },
      {
        id: 'carosello',
        name: 'Penne Carosello',
        description: 'Sauce au crabe (sauce tomate, chair de crabe, crème fraîche) et crevettes',
        price: 25,
        isSpecial: true,
        allergens: ['gluten', 'crustacés', 'lait']
      },
      {
        id: 'gorgonzola',
        name: 'Penne Gorgonzola',
        description: 'Crème fraîche, gorgonzola',
        price: 21,
        isSpecial: false,
        allergens: ['gluten', 'lait']
      },
      {
        id: 'amatriciana',
        name: 'Penne all\'Amatriciana',
        description: 'Sauce tomate, lardons, oignons, piments et pecorino',
        price: 21,
        isSpecial: false,
        allergens: ['gluten', 'lait']
      },
      {
        id: 'arrabbiata',
        name: 'Penne all\'Arrabbiata',
        description: 'Sauce tomate, ail et piments',
        price: 20,
        isSpecial: false,
        allergens: ['gluten']
      },
      {
        id: 'siciliana',
        name: 'Penne alla Siciliana',
        description: 'Sauce tomate, aubergines, mozzarella gratinée',
        price: 22,
        isSpecial: false,
        allergens: ['gluten', 'lait']
      },
      {
        id: 'melanzane',
        name: 'Penne Melanzane e Ricotta',
        description: 'Sauce tomate, aubergine et ricotta fraîche et ricotta salée',
        price: 22,
        isSpecial: false,
        allergens: ['gluten', 'lait']
      },
      {
        id: 'salmone',
        name: 'Tagliatelle al Salmone',
        description: 'Crème fraîche, saumon fumé',
        price: 24,
        isSpecial: false,
        allergens: ['gluten', 'poisson', 'lait']
      },
      {
        id: 'porcini',
        name: 'Tagliatelle ai Porcini',
        description: 'Sauce aux bolets',
        price: 24,
        isSpecial: false,
        allergens: ['gluten']
      }
    ]
  },
  {
    id: 'meat',
    name: 'Carne',
    items: [
      {
        id: 'milanese',
        name: 'Escalope alla Milanese',
        description: 'Escalope de veau panée servie avec frites et légumes',
        price: 34,
        isSpecial: false,
        allergens: ['gluten']
      },
      {
        id: 'limone',
        name: 'Escalope al Limone',
        description: 'Escalope de veau sauce au citron servie avec frites et légumes',
        price: 34,
        isSpecial: false,
        allergens: []
      }
    ]
  },
  {
    id: 'pizza',
    name: 'Pizza',
    items: [
      {
        id: 'margherita',
        name: 'Margherita',
        description: 'Sauce tomate, mozzarella',
        price: 16,
        isSpecial: false,
        allergens: ['gluten', 'lait']
      },
      {
        id: 'calzone',
        name: 'Calzone',
        description: 'Sauce tomate, mozzarella et jambon',
        price: 20,
        isSpecial: false,
        allergens: ['gluten', 'lait']
      },
      {
        id: 'casereccia',
        name: 'Casereccia',
        description: 'Sauce tomate, mozzarella, oignons, anchois, huile d\'olive',
        price: 19,
        isSpecial: false,
        allergens: ['gluten', 'lait', 'poisson']
      },
      {
        id: 'campagnola',
        name: 'Campagnola',
        description: 'Sauce tomate, mozzarella, jambon, champignons',
        price: 21,
        isSpecial: false,
        allergens: ['gluten', 'lait']
      },
      {
        id: 'capricciosa',
        name: 'Capricciosa',
        description: 'Sauce tomate, mozzarella, jambon, œuf, artichauts, olives',
        price: 21,
        isSpecial: false,
        allergens: ['gluten', 'lait', 'œufs']
      },
      {
        id: 'calabrese',
        name: 'Calabrese',
        description: 'Sauce tomate, mozzarella, salami piquant',
        price: 22,
        isSpecial: false,
        allergens: ['gluten', 'lait']
      },
      {
        id: 'casa',
        name: 'Della Casa',
        description: 'Sauce tomate, mozzarella, tomates fraîches, aubergines, copeaux de grana',
        price: 22,
        isSpecial: false,
        allergens: ['gluten', 'lait']
      },
      {
        id: 'forestiere',
        name: 'Forestière',
        description: 'Sauce tomate, mozzarella, champignons, lardons, oignons',
        price: 21,
        isSpecial: false,
        allergens: ['gluten', 'lait']
      },
      {
        id: 'funghi',
        name: 'Funghi',
        description: 'Sauce tomate, mozzarella, champignons',
        price: 19,
        isSpecial: false,
        allergens: ['gluten', 'lait']
      },
      {
        id: 'napoletana',
        name: 'Napoletana',
        description: 'Sauce tomate, mozzarella, anchois, câpres, olives',
        price: 19,
        isSpecial: false,
        allergens: ['gluten', 'lait', 'poisson']
      },
      {
        id: 'palermo',
        name: 'Palermo',
        description: 'Sauce tomate, mozzarella, salami piquant, olives vertes, oignons',
        price: 23,
        isSpecial: false,
        allergens: ['gluten', 'lait']
      },
      {
        id: 'quattro-stagioni',
        name: 'Quattro Stagioni',
        description: 'Sauce tomate, mozzarella, jambon, poivrons, champignons, câpres',
        price: 21,
        isSpecial: false,
        allergens: ['gluten', 'lait']
      },
      {
        id: 'quattro-formaggi',
        name: 'Quattro Formaggi',
        description: 'Sauce tomate, mozzarella, ricotta, gorgonzola et copeaux de grana',
        price: 21,
        isSpecial: false,
        allergens: ['gluten', 'lait']
      },
      {
        id: 'romana',
        name: 'Romana',
        description: 'Sauce tomate, mozzarella, jambon San Daniele',
        price: 23,
        isSpecial: false,
        allergens: ['gluten', 'lait']
      },
      {
        id: 'trinacria',
        name: 'Trinacria',
        description: 'Sauce tomate, mozzarella, roquette, ricotta fraîche, ricotta salée, pecorino au poivre',
        price: 23,
        isSpecial: false,
        allergens: ['gluten', 'lait']
      },
      {
        id: 'vegetariana',
        name: 'Vegetariana',
        description: 'Sauce tomate, mozzarella, assortiment de légumes',
        price: 21,
        isSpecial: false,
        allergens: ['gluten', 'lait']
      },
      {
        id: 'paestum',
        name: 'Paestum',
        description: 'Sauce tomate, mozzarella de bufflonne, roquette, tomates fraîches et basilic',
        price: 23,
        isSpecial: false,
        allergens: ['gluten', 'lait']
      },
      {
        id: 'pecorino',
        name: 'Pecorino Rucola',
        description: 'Mozzarella, pecorino au poivre, roquette, tomates fraîches',
        price: 22,
        isSpecial: false,
        allergens: ['gluten', 'lait']
      },
      {
        id: 'estate',
        name: 'Estate',
        description: 'Mozzarella, tomates fraîches, roquette et jambon San Daniele',
        price: 25,
        isSpecial: false,
        allergens: ['gluten', 'lait']
      }
    ]
  },
  {
    id: 'focacce',
    name: 'Le Focacce della Casa',
    items: [
      {
        id: 'parma',
        name: 'Parma',
        description: 'Mozzarella, roquette, tomates fraîches, jambon San Daniele et copeaux de grana',
        price: 26,
        isSpecial: false,
        allergens: ['gluten', 'lait']
      },
      {
        id: 'romagnola',
        name: 'Romagnola',
        description: 'Mozzarella, aubergines grillées, jambon San Daniele',
        price: 23,
        isSpecial: false,
        allergens: ['gluten', 'lait']
      }
    ]
  },
  {
    id: 'desserts',
    name: 'Dolci',
    items: [
      {
        id: 'cafe-gourmand',
        name: 'Café Gourmand',
        description: 'Assortiment de mignardises avec café',
        price: 8.50,
        isSpecial: false,
        allergens: ['gluten', 'lait', 'œufs']
      },
      {
        id: 'tiramisu',
        name: 'Tiramisù Maison à l\'Amaretto',
        description: 'Petite verrine',
        price: 5,
        isSpecial: false,
        allergens: ['gluten', 'lait', 'œufs']
      },
      {
        id: 'panna-cotta',
        name: 'Panna Cotta',
        description: 'Avec coulis de framboise (petite verrine)',
        price: 5,
        isSpecial: false,
        allergens: ['lait']
      },
      {
        id: 'tarte-pommes',
        name: 'Tarte Fine aux Pommes',
        description: 'Tarte aux pommes fine et croustillante',
        price: 7,
        isSpecial: false,
        allergens: ['gluten', 'lait', 'œufs']
      },
      {
        id: 'fondant',
        name: 'Fondant au Chocolat',
        description: 'Avec glace alla fior di latte (petite verrine)',
        price: 9,
        isSpecial: false,
        allergens: ['gluten', 'lait', 'œufs']
      },
      {
        id: 'tartufo',
        name: 'Tartufo Gelato al Limoncello',
        description: 'Glace au limoncello façon truffe',
        price: 9,
        isSpecial: false,
        allergens: ['lait', 'œufs']
      }
    ]
  },
  {
    id: 'ice-cream',
    name: 'Gelati',
    items: [
      {
        id: 'orange-prosecco',
        name: 'Sorbet à l\'Orange et Prosecco',
        description: '2 boules "orange" avec prosecco',
        price: 9,
        isSpecial: false,
        allergens: []
      },
      {
        id: 'dame-blanche',
        name: 'Dame Blanche',
        description: '2 boules "fior di latte", sauce chocolat, meringue et chantilly',
        price: 9,
        isSpecial: false,
        allergens: ['lait', 'œufs']
      },
      {
        id: 'colonel',
        name: 'Colonel',
        description: '2 boules "citron" avec vodka',
        price: 9,
        isSpecial: false,
        allergens: []
      },
      {
        id: 'cafe-glace',
        name: 'Café Glacé',
        description: '2 boules "café" avec espresso et chantilly',
        price: 9,
        isSpecial: false,
        allergens: ['lait']
      },
      {
        id: 'coupe-amaretto',
        name: 'Coupe Amaretto',
        description: '2 boules "noisette", liqueur amaretto, amarettini et chantilly',
        price: 9,
        isSpecial: false,
        allergens: ['lait', 'fruits à coque', 'gluten']
      },
      {
        id: 'cassata',
        name: 'Cassata Glacé Sicilienne',
        description: 'Dessert glacé traditionnel sicilien',
        price: 9,
        isSpecial: false,
        allergens: ['lait', 'œufs', 'fruits à coque']
      },
      {
        id: 'cassata-marschino',
        name: 'Cassata al Marschino',
        description: 'Cassata avec liqueur Marschino',
        price: 11,
        isSpecial: false,
        allergens: ['lait', 'œufs', 'fruits à coque']
      },
      {
        id: 'single-scoop',
        name: 'La boule de glace',
        description: 'Parfums : Chocolat, Fior di Latte, Café, Pistache, Noisette',
        price: 3.50,
        isSpecial: false,
        allergens: ['lait']
      }
    ]
  },
  {
    id: 'sorbets',
    name: 'Sorbetti',
    items: [
      {
        id: 'sorbet-scoop',
        name: 'La boule de sorbet',
        description: 'Parfums : Citron, Orange, Fraise',
        price: 3.50,
        isSpecial: false,
        allergens: []
      }
    ]
  }
];

export const chefSuggestions: MenuItem[] = [
  {
    id: 'vitello-tonnato-special',
    name: 'Vitello Tonnato',
    description: 'Tranches fines rôti de veau rosé, sauce au thon',
    price: 28,
    isSpecial: true,
    allergens: ['poisson', 'œufs'],
    image: 'https://images.pexels.com/photos/5639411/pexels-photo-5639411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'osso-buco-special',
    name: 'Osso Buco di Vitello alla Milanese',
    description: 'Osso buco de veau à la milanaise avec purée de pommes de terre maison',
    price: 40,
    isSpecial: true,
    allergens: ['lait'],
    image: 'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'ravioloni-special',
    name: 'Ravioloni Faciti di Ricotta e Spinaci',
    description: 'Raviolis farcis de ricotta et épinards avec crème de parmesan et tomates séchées',
    price: 25,
    isSpecial: true,
    allergens: ['gluten', 'lait', 'œufs'],
    image: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'risotto-special',
    name: 'Risottino Cremoso',
    description: 'Risotto crémeux mantecato dans la meule de grana avec sauce aux bolets',
    price: 28,
    isSpecial: true,
    allergens: ['lait'],
    image: 'https://images.pexels.com/photos/5638268/pexels-photo-5638268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];