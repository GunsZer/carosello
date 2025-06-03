import { DrinkCategory, DrinkItem } from '../types';

export const drinkCategories: DrinkCategory[] = [
  {
    id: 'soft-drinks',
    name: 'Boissons Sans Alcool',
    items: [
      {
        id: 'sirop',
        name: 'Sirop',
        description: '20 cl',
        priceGlass: 2,
        origin: 'Suisse'
      },
      {
        id: 'apple-juice-small',
        name: 'Jus de pommes',
        description: '20 cl',
        priceGlass: 2.90,
        origin: 'Suisse'
      },
      {
        id: 'mineral-water-small',
        name: 'Eau minérale',
        description: '20 cl',
        priceGlass: 2.90,
        origin: 'Suisse'
      },
      {
        id: 'ice-tea-small',
        name: 'Thé froid',
        description: '20 cl',
        priceGlass: 2.90,
        origin: 'Suisse'
      },
      {
        id: 'coca',
        name: 'Coca-Cola',
        description: '30 cl',
        priceGlass: 4.50,
        origin: 'Suisse'
      },
      {
        id: 'coca-zero',
        name: 'Coca-Cola Zéro',
        description: '30 cl',
        priceGlass: 4.50,
        origin: 'Suisse'
      },
      {
        id: 'sinalco',
        name: 'Sinalco',
        description: '30 cl',
        priceGlass: 4.50,
        origin: 'Suisse'
      },
      {
        id: 'san-pellegrino-45',
        name: 'San Pellegrino',
        description: '45 cl',
        priceGlass: 4.50,
        origin: 'Italie'
      },
      {
        id: 'henniez-50',
        name: 'Henniez Bleue',
        description: '50 cl',
        priceGlass: 4.50,
        origin: 'Suisse'
      },
      {
        id: 'san-pellegrino-1l',
        name: 'San Pellegrino',
        description: '1 L',
        priceGlass: 7.50,
        origin: 'Italie'
      },
      {
        id: 'henniez-1l',
        name: 'Henniez Bleue',
        description: '1 L',
        priceGlass: 7.50,
        origin: 'Suisse'
      },
      {
        id: 'fruit-juice',
        name: 'Jus de fruits',
        description: 'Orange, Abricot, Ananas, Pamplemousse - 20 cl',
        priceGlass: 4,
        origin: 'Suisse'
      },
      {
        id: 'tomato-juice',
        name: 'Jus de tomates',
        description: '20 cl',
        priceGlass: 4,
        origin: 'Suisse'
      },
      {
        id: 'apple-juice-large',
        name: 'Jus de pommes',
        description: '30 cl',
        priceGlass: 4.50,
        origin: 'Suisse'
      },
      {
        id: 'schweppes',
        name: 'Schweppes',
        description: '20 cl',
        priceGlass: 4.50,
        origin: 'Suisse'
      },
      {
        id: 'sprite',
        name: 'Sprite',
        description: '30 cl',
        priceGlass: 4.50,
        origin: 'Suisse'
      },
      {
        id: 'ice-tea-large',
        name: 'Thé froid',
        description: 'Citron ou Pêche - 30 cl',
        priceGlass: 4.50,
        origin: 'Suisse'
      },
      {
        id: 'cold-milk',
        name: 'Lait froid',
        description: '20 cl',
        priceGlass: 3,
        origin: 'Suisse'
      }
    ]
  },
  {
    id: 'hot-drinks',
    name: 'Boissons Chaudes',
    items: [
      {
        id: 'coffee',
        name: 'Café',
        description: 'Café expresso',
        priceGlass: 3.50,
        origin: 'Italie'
      },
      {
        id: 'cappuccino',
        name: 'Cappuccino',
        description: 'Café italien avec mousse de lait',
        priceGlass: 4,
        origin: 'Italie'
      },
      {
        id: 'renverse',
        name: 'Renversé',
        description: 'Petit café allongé',
        priceGlass: 4,
        origin: 'Suisse'
      },
      {
        id: 'decaf',
        name: 'Décaféiné',
        description: 'Café sans caféine',
        priceGlass: 3.50,
        origin: 'Italie'
      },
      {
        id: 'hot-chocolate',
        name: 'Choco / Ovo',
        description: 'Pâte à chocolat chaud - 20 cl',
        priceGlass: 4,
        origin: 'Suisse'
      },
      {
        id: 'tea',
        name: 'Thé noir / Infusion',
        description: 'Sélection de thés',
        priceGlass: 3.50,
        origin: 'Divers'
      },
      {
        id: 'hot-milk',
        name: 'Lait chaud',
        description: '20 cl',
        priceGlass: 3,
        origin: 'Suisse'
      }
    ]
  },
  {
    id: 'wines-red',
    name: 'Vins Rouges',
    items: [
      {
        id: 'cinque-autoctoni',
        name: 'Edizione Cinque Autoctoni',
        description: 'Primitivo, Negroamaro, Malvasia, Sangiovese, Montepulciano',
        priceBottle: 75,
        origin: 'Italie'
      },
      {
        id: 'cannonau',
        name: 'Cannonau di Sardegna',
        description: 'Cannonau',
        priceBottle: 48,
        origin: 'Sardaigne'
      },
      {
        id: 'barrua',
        name: 'Barrua (Sassicaia Santadi)',
        description: 'Carignano, Cabernet sauvignon, Merlot',
        priceBottle: 95,
        origin: 'Sardaigne'
      },
      {
        id: 'montepulciano',
        name: 'Montepulciano',
        description: 'Montepulciano',
        priceBottle: 44,
        origin: 'Abruzzes'
      },
      {
        id: 'brunello',
        name: 'Brunello di Montalcino',
        description: 'Sangiovese Grosso',
        priceBottle: 95,
        origin: 'Toscane'
      },
      {
        id: '72-filara',
        name: '72 Filara',
        description: 'Nero d\'Avola, Frappato',
        priceBottle: 46,
        origin: 'Sicile'
      },
      {
        id: 'primitivo',
        name: 'Primitivo',
        description: 'Primitivo',
        priceBottle: 42,
        origin: 'Pouilles'
      },
      {
        id: 'montessu',
        name: 'Montessu',
        description: 'Merlot, Syrah, Cabernet Carignano',
        priceBottle: 55,
        origin: 'Sardaigne'
      },
      {
        id: 'barolo',
        name: 'Barolo',
        description: 'Nebbiolo',
        priceBottle: 75,
        origin: 'Piémont'
      },
      {
        id: 'amarone',
        name: 'Amarone del Valpolicella',
        description: 'Corvina, Rondinella',
        priceBottle: 88,
        origin: 'Vénétie'
      },
      {
        id: 'le-volte',
        name: 'Le Volte',
        description: 'Merlot, Sangiovese, Cabernet Sauvignon',
        priceBottle: 69,
        origin: 'Toscane'
      },
      {
        id: 'barbera',
        name: 'Barbera',
        description: 'Barbera',
        priceBottle: 44,
        origin: 'Piémont'
      },
      {
        id: 'gamaret',
        name: 'Gamaret',
        description: 'Gamaret',
        priceBottle: 49,
        origin: 'Genève'
      },
      {
        id: 'noir-divin',
        name: 'Noir Divin',
        description: 'Gamaret, Merlot, Garanoir',
        priceBottle: 55,
        origin: 'Satigny (GE)'
      },
      {
        id: 'les-romaines',
        name: 'Les Romaines',
        description: 'Pinot Noir, Gamaret, Garanoir',
        priceBottle: 55,
        origin: 'Founex (VD)'
      }
    ]
  },
  {
    id: 'wines-rose',
    name: 'Vins Rosés',
    items: [
      {
        id: 'oeil-perdrix',
        name: 'Œil de Perdrix',
        description: 'Pinot Noir',
        priceBottle: 42,
        origin: 'Suisse'
      },
      {
        id: 'cote-provence',
        name: 'Côte de Provence',
        description: 'Cinsault, Grenache, Syrah, Vermentino',
        priceBottle: 46,
        origin: 'France'
      },
      {
        id: 'cuvee-prestige',
        name: 'Cuvée Prestige',
        description: 'Grenache, Mourvèdre',
        priceBottle: 52,
        origin: 'France'
      },
      {
        id: 'pipoli-rosato',
        name: 'Pipoli Rosato Basilicata',
        description: 'Aglianico',
        priceBottle: 42,
        origin: 'Italie'
      },
      {
        id: 'rosato-toscana',
        name: 'Rosato di Toscana',
        description: 'Assemblage',
        priceGlass: 3,
        priceBottle: 16,
        origin: 'Toscane'
      }
    ]
  },
  {
    id: 'wines-white',
    name: 'Vins Blancs',
    items: [
      {
        id: 'vigna-casali',
        name: 'Vigna Casali',
        description: 'Catarratto',
        priceBottle: 48,
        origin: 'Sicile'
      },
      {
        id: 'vermentino',
        name: 'Vermentino',
        description: 'Vermentino',
        priceBottle: 40,
        origin: 'Sardaigne'
      },
      {
        id: 'grillo',
        name: 'Grillo',
        description: 'Grillo',
        priceBottle: 40,
        origin: 'Sicile'
      }
    ]
  },
  {
    id: 'champagne',
    name: 'Champagne & Prosecco',
    items: [
      {
        id: 'billecart',
        name: 'Champagne Billecart-Salmon',
        description: 'Chardonnay, Pinot Noir, Pinot Meunier',
        priceBottle: 105,
        origin: 'France'
      },
      {
        id: 'prosecco-bottle',
        name: 'Prosecco',
        description: 'Glera',
        priceBottle: 42,
        origin: 'Italie'
      },
      {
        id: 'prosecco-glass',
        name: 'Prosecco (coupe)',
        description: 'Glera',
        priceGlass: 7,
        origin: 'Italie'
      }
    ]
  },
  {
    id: 'wines-glass',
    name: 'Vins au Verre',
    items: [
      {
        id: 'rosato-glass',
        name: 'Rosato di Toscana',
        description: 'Assemblage - 1 dl',
        priceGlass: 3,
        origin: 'Toscane'
      },
      {
        id: 'pipoli-glass',
        name: 'Pipoli Rosato Basilicata',
        description: 'Aglianico - 1 dl',
        priceGlass: 6,
        origin: 'Italie'
      },
      {
        id: 'chasselas-glass',
        name: 'Chasselas',
        description: 'Chasselas - 1 dl',
        priceGlass: 3.50,
        origin: 'Genève'
      },
      {
        id: 'grillo-glass',
        name: 'Grillo di Sicilia',
        description: 'Grillo - 1 dl',
        priceGlass: 6,
        origin: 'Sicile'
      },
      {
        id: 'monica-glass',
        name: 'Isola dei Nuraghi Monica',
        description: 'Assemblage - 1 dl',
        priceGlass: 3.50,
        origin: 'Sardaigne'
      },
      {
        id: 'primitivo-glass',
        name: 'Primitivo della Puglia',
        description: 'Primitivo - 1 dl',
        priceGlass: 6,
        origin: 'Pouilles'
      },
      {
        id: 'nero-davola-glass',
        name: 'Nero d\'Avola',
        description: 'Nero d\'Avola - 1 dl',
        priceGlass: 7,
        origin: 'Sicile'
      },
      {
        id: 'goronbois-glass',
        name: 'Goronbois-Noir',
        description: '1 dl',
        priceGlass: 4,
        origin: 'Martigny (VS)'
      }
    ]
  },
  {
    id: 'beers',
    name: 'Bières',
    items: [
      {
        id: 'calvinus-draft',
        name: 'Calvinus Blonde (pression)',
        description: '25 cl',
        priceGlass: 4,
        origin: 'Suisse'
      },
      {
        id: 'calvinus-can',
        name: 'Calvinus Blonde (canette)',
        description: '50 cl',
        priceGlass: 7,
        origin: 'Suisse'
      },
      {
        id: 'non-alcoholic',
        name: 'Bière sans alcool',
        description: 'Bouteille 33 cl',
        priceGlass: 5,
        origin: 'Suisse'
      },
      {
        id: 'heineken',
        name: 'Heineken',
        description: 'Bouteille 25 cl',
        priceGlass: 5,
        origin: 'Pays-Bas'
      },
      {
        id: 'peroni',
        name: 'Peroni Nastro Azzurro',
        description: 'Bouteille 33 cl',
        priceGlass: 6,
        origin: 'Italie'
      },
      {
        id: 'calvinus-white',
        name: 'Calvinus Blanche',
        description: 'Bouteille 33 cl',
        priceGlass: 6,
        origin: 'Suisse'
      }
    ]
  },
  {
    id: 'aperitifs',
    name: 'Apéritifs',
    items: [
      {
        id: 'aperol',
        name: 'Aperol',
        description: '4 cl - 18%',
        priceGlass: 5,
        origin: 'Italie'
      },
      {
        id: 'campari',
        name: 'Campari',
        description: '4 cl - 23%',
        priceGlass: 5.50,
        origin: 'Italie'
      },
      {
        id: 'cynar',
        name: 'Cynar',
        description: '4 cl - 16.5%',
        priceGlass: 5.50,
        origin: 'Italie'
      },
      {
        id: 'kir',
        name: 'Kir',
        description: '4 cl - 12%',
        priceGlass: 5.50,
        origin: 'France'
      },
      {
        id: 'martini',
        name: 'Martini',
        description: '4 cl - 15%',
        priceGlass: 5,
        origin: 'Italie'
      },
      {
        id: 'porto-white',
        name: 'Porto Blanc',
        description: '4 cl - 19.5%',
        priceGlass: 5,
        origin: 'Portugal'
      },
      {
        id: 'porto-red',
        name: 'Porto Rouge',
        description: '4 cl - 19%',
        priceGlass: 5,
        origin: 'Portugal'
      },
      {
        id: 'suze',
        name: 'Suze',
        description: '4 cl - 20%',
        priceGlass: 5.50,
        origin: 'Suisse'
      },
      {
        id: 'ricard-2',
        name: 'Ricard / Pastis',
        description: '2 cl - 45%',
        priceGlass: 3.50,
        origin: 'France'
      },
      {
        id: 'ricard-4',
        name: 'Ricard / Pastis',
        description: '4 cl - 45%',
        priceGlass: 7,
        origin: 'France'
      }
    ]
  },
  {
    id: 'spirits',
    name: 'Spiritueux',
    items: [
      {
        id: 'abricot',
        name: 'Abricot',
        description: '2 cl - 37.5%',
        priceGlass: 7.50,
        origin: 'Suisse'
      },
      {
        id: 'armagnac',
        name: 'Armagnac',
        description: '2 cl - 40%',
        priceGlass: 8.50,
        origin: 'France'
      },
      {
        id: 'calvados',
        name: 'Calvados',
        description: '2 cl - 40%',
        priceGlass: 8.50,
        origin: 'France'
      },
      {
        id: 'cognac',
        name: 'Cognac',
        description: '2 cl - 40%',
        priceGlass: 8.50,
        origin: 'France'
      },
      {
        id: 'gin',
        name: 'Gin',
        description: '2 cl - 40%',
        priceGlass: 7.50,
        origin: 'Divers'
      },
      {
        id: 'grappa',
        name: 'Grappa',
        description: '2 cl - 40%',
        priceGlass: 7.50,
        origin: 'Italie'
      },
      {
        id: 'grappa-premium',
        name: 'Grappa Premium',
        description: '2 cl - 40%',
        priceGlass: 7.50,
        origin: 'Italie'
      },
      {
        id: 'moscato',
        name: 'Moscato',
        description: '2 cl - 42%',
        priceGlass: 10,
        origin: 'Italie'
      },
      {
        id: 'grappa-high',
        name: 'Grappa Haute Gradation',
        description: '2 cl - 50%',
        priceGlass: 10,
        origin: 'Italie'
      },
      {
        id: 'nardini',
        name: 'Nardini',
        description: '2 cl - 40%',
        priceGlass: 7.50,
        origin: 'Italie'
      },
      {
        id: 'rhum',
        name: 'Rhum',
        description: '2 cl - 40%',
        priceGlass: 7.50,
        origin: 'Divers'
      },
      {
        id: 'vodka',
        name: 'Vodka',
        description: '2 cl - 37.5%',
        priceGlass: 7.50,
        origin: 'Divers'
      },
      {
        id: 'poire',
        name: 'Poire',
        description: '2 cl - 40%',
        priceGlass: 7.50,
        origin: 'Suisse'
      }
    ]
  },
  {
    id: 'liqueurs',
    name: 'Liqueurs',
    items: [
      {
        id: 'amaretto',
        name: 'Amaretto',
        description: '2 cl - 28%',
        priceGlass: 7.50,
        origin: 'Italie'
      },
      {
        id: 'baileys',
        name: 'Baileys',
        description: '2 cl - 17%',
        priceGlass: 7.50,
        origin: 'Irlande'
      },
      {
        id: 'sambuca',
        name: 'Sambuca',
        description: '2 cl - 40%',
        priceGlass: 7.50,
        origin: 'Italie'
      },
      {
        id: 'williamine',
        name: 'Liqueur Williamine',
        description: '2 cl - 35%',
        priceGlass: 7.50,
        origin: 'Suisse'
      },
      {
        id: 'limoncello',
        name: 'Limoncello',
        description: '2 cl - 30%',
        priceGlass: 7.50,
        origin: 'Italie'
      }
    ]
  },
  {
    id: 'amari',
    name: 'Amari',
    items: [
      {
        id: 'averna',
        name: 'Averna Fernet',
        description: '2 cl - 29%',
        priceGlass: 7.50,
        origin: 'Italie'
      },
      {
        id: 'fernet-branca',
        name: 'Fernet Branca',
        description: '2 cl - 39%',
        priceGlass: 7.50,
        origin: 'Italie'
      },
      {
        id: 'ramazzotti',
        name: 'Ramazzotti',
        description: '2 cl - 30%',
        priceGlass: 7.50,
        origin: 'Italie'
      }
    ]
  },
  {
    id: 'bourbon',
    name: 'Bourbon',
    items: [
      {
        id: 'four-roses-2',
        name: 'Four Roses',
        description: '2 cl - 40%',
        priceGlass: 8.50,
        origin: 'États-Unis'
      },
      {
        id: 'four-roses-4',
        name: 'Four Roses',
        description: '4 cl - 40%',
        priceGlass: 12,
        origin: 'États-Unis'
      }
    ]
  },
  {
    id: 'cocktails',
    name: 'Cocktails',
    items: [
      {
        id: 'gin-tonic',
        name: 'Gin Tonic',
        description: '2 cl - 37.5%',
        priceGlass: 10,
        origin: 'International'
      },
      {
        id: 'rum-cola',
        name: 'Rhum Coca',
        description: '2 cl - 40%',
        priceGlass: 10,
        origin: 'International'
      },
      {
        id: 'vodka-orange',
        name: 'Vodka Orange',
        description: '2 cl - 40%',
        priceGlass: 10,
        origin: 'International'
      },
      {
        id: 'whisky-cola',
        name: 'Whisky Coca',
        description: '2 cl - 40%',
        priceGlass: 10,
        origin: 'International'
      },
      {
        id: 'aperol-spritz',
        name: 'Aperol Spritz',
        description: '4 cl - 18%',
        priceGlass: 10,
        origin: 'Italie'
      }
    ]
  },
  {
    id: 'whisky',
    name: 'Whisky',
    items: [
      {
        id: 'ballantines-2',
        name: 'Ballantines',
        description: '2 cl - 40%',
        priceGlass: 7.50,
        origin: 'Écosse'
      },
      {
        id: 'ballantines-4',
        name: 'Ballantines',
        description: '4 cl - 40%',
        priceGlass: 10,
        origin: 'Écosse'
      },
      {
        id: 'chivas-2',
        name: 'Chivas Regal',
        description: '2 cl - 40%',
        priceGlass: 9,
        origin: 'Écosse'
      },
      {
        id: 'chivas-4',
        name: 'Chivas Regal',
        description: '4 cl - 40%',
        priceGlass: 12,
        origin: 'Écosse'
      },
      {
        id: 'jb-2',
        name: 'J.B',
        description: '2 cl - 40%',
        priceGlass: 7.50,
        origin: 'Écosse'
      },
      {
        id: 'jb-4',
        name: 'J.B',
        description: '4 cl - 40%',
        priceGlass: 10,
        origin: 'Écosse'
      }
    ]
  }
];