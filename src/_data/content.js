const header = 'Famous People Throughout History';
const footer = 'A footer goes here.';
const entries = [
  {
    id: 'martinLuther',
    categories: ['Religious Figure', '1400s'],
    color: 'green',
    faicon: 'church',
    datetime: '1483-11-10',
    title: 'Martin Luther',
    image: {
      link: 'https://commons.wikimedia.org/wiki/File:Lucas_Cranach_d.%C3%84._-_Martin_Luther,_1528_(Veste_Coburg)_(cropped).jpg',
      src: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Lucas_Cranach_d.%C3%84._-_Martin_Luther%2C_1528_%28Veste_Coburg%29_%28cropped%29.jpg',
      alt: 'Martin Luther',
      caption: 'Martin Luther',
    },
    body: 'Martin Luther started the Protestant Reformation.',
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Cat',
        linkText: 'Cat',
      },
    ],
  },
  {
    id: 'dog',
    categories: ['dog'],
    color: 'green',
    faicon: 'dog',
    datetime: '2021-05-01 23:55',
    title: 'Puppies are great too',
    image: {
      link: 'http://place-puppy.com',
      src: 'https://place-puppy.com/300x300',
      alt: 'A placeholder puppy',
      caption: 'Puppy!',
    },
    body: 'Doggo ipsum sub woofer smol wow very biscit aqua doggo pupper dat tungg tho big ol pupper, very jealous pupper mlem heckin angery woofer very jealous pupper. Blep waggy wags long doggo, corgo. Tungg wow such tempt mlem very jealous pupper boofers lotsa pats, snoot smol big ol ruff doge super chub, long doggo heckin good boys and girls h*ck heck. Shoober blop many pats borkf, such treat. Big ol what a nice floof long water shoob wrinkler heck sub woofer, pupper porgo wow very biscit.',
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Dog',
        linkText: 'Dog',
      },
    ],
  },
];

// Page details
const pageTitle = 'Static timeline generator'; // The title of the page that shows in the browser tab
const pageDescription = 'A super fancy timeline'; // The description of the page for search engines
const pageAuthor = 'Jane Doe'; // Your name

// DON'T EDIT BELOW THIS LINE! --------------------------------------------------------------------
const getFilters = (entries) => {
  const filters = new Set();
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      for (var j = 0; j < entry.categories.length; j++) {
        filters.add(entry.categories[j]);
      }
    }
  }
  var filtersArray = [...filters];
  filtersArray.sort();
  return filtersArray;
};

const addCategoriesStringsToEntries = (entries) => {
  for (const entry of entries) {
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      entry.categoriesString = entry.categories.join(',');
    }
  }
  return entries;
};

module.exports = {
  header,
  footer,
  entries: addCategoriesStringsToEntries(entries),
  filters: getFilters(entries),
  head: {
    title: pageTitle,
    description: pageDescription,
    author: pageAuthor,
  },
};
