const header = 'Famous People Throughout History';
const footer = 'Timeline by Jonathan Heaney';
const entries = [
  {
    id: 'martinLuther',
    categories: ['Religious Figure', '1400s'],
    color: 'green',
    faicon: 'church',
    date: '1483-11-10',
    title: 'Martin Luther',
    image: {
      link: 'https://commons.wikimedia.org/wiki/File:Lucas_Cranach_d.%C3%84._-_Martin_Luther,_1528_(Veste_Coburg)_(cropped).jpg',
      src: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Lucas_Cranach_d.%C3%84._-_Martin_Luther%2C_1528_%28Veste_Coburg%29_%28cropped%29.jpg',
      alt: 'Martin Luther',
      caption: 'Martin Luther',
    },
    body: "Martin Luther (1483–1546) was a German theologian and monk whose actions sparked the Protestant Reformation. Born in Eisleben, Luther became a monk and later a professor of theology. In 1517, he famously nailed his Ninety-Five Theses to the door of the Wittenberg Castle Church, criticizing the Catholic Church's sale of indulgences and other practices he viewed as corrupt. Luther's teachings emphasized salvation by faith alone, the authority of the Bible over church tradition, and the priesthood of all believers. His refusal to recant at the Diet of Worms in 1521 led to his excommunication. Protected by sympathetic German princes, Luther translated the Bible into German, making it more accessible to ordinary people. His ideas laid the foundation for Protestantism and profoundly influenced Western Christianity, leading to significant religious, cultural, and political changes across Europe. Luther's legacy includes his impact on education, the promotion of individual conscience, and the questioning of institutional authority.",
  },
  {
    id: 'hernanCortes',
    categories: ['Explorer', '1400s'],
    color: 'dark-slate-gray',
    faicon: 'ship',
    date: '1485-12-01',
    title: 'Hernán Cortés',
    image: {
      link: 'https://commons.wikimedia.org/wiki/File:Cortes-Hernan-LOC.jpg',
      src: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Cortes-Hernan-LOC.jpg',
      alt: 'Hernán Cortés',
      caption: 'Hernán Cortés',
    },
    body: 'Hernán Cortés (1485–1547) was a Spanish conquistador known for his role in the conquest of the Aztec Empire. Born in Medellín, Spain, Cortés sailed to the New World in 1504, initially settling in Hispaniola and later participating in the conquest of Cuba. In 1519, he led an expedition to the mainland, landing on the Yucatán Peninsula and moving inland towards the Aztec capital of Tenochtitlán. Cortés formed alliances with indigenous groups who were enemies of the Aztecs, which proved crucial in his campaign. Upon reaching Tenochtitlán, he was initially welcomed by the Aztec emperor Montezuma II, but tensions soon erupted into violence. Cortés and his men were forced to flee the city during the Noche Triste in 1520 but returned with reinforcements and a devastating smallpox epidemic that weakened the Aztecs. In 1521, Tenochtitlán fell to Cortés, marking the end of the Aztec Empire. Cortés established Mexico City on the ruins of Tenochtitlán and became the first governor of New Spain. His actions had profound effects on the indigenous populations and laid the groundwork for Spanish colonization in the Americas.',
  },
  {
    id: 'raphael',
    categories: ['Painter', '1400s'],
    color: 'dark-turquoise',
    faicon: 'paint-brush',
    date: '1483-04-06',
    title: 'Raphael',
    image: {
      link: 'https://commons.wikimedia.org/wiki/File:Raffaello_Sanzio.jpg',
      src: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Raffaello_Sanzio.jpg',
      alt: 'Raphael',
      caption: 'Raphael',
    },
    body: "Raphael (1483–1520), born Raffaello Sanzio, was an Italian painter and architect of the High Renaissance. Renowned for his masterful use of perspective and harmonious compositions, Raphael's works embody the ideals of the Renaissance. He was born in Urbino and trained under Pietro Perugino. In 1508, he was summoned to Rome by Pope Julius II, where he painted the famous 'School of Athens' fresco in the Vatican's Stanza della Segnatura. Raphael's work, characterized by clarity, ease of composition, and visual achievement of the Neoplatonic ideal of human grandeur, includes notable paintings like 'The Sistine Madonna' and numerous portraits. His architectural work includes the design of St. Peter's Basilica. Raphael's untimely death at 37 left a lasting legacy on Western art, influencing generations of artists with his perfection of form and graceful style.",
  },
];

// Page details
const pageTitle = 'Timeline of Famous People'; // The title of the page that shows in the browser tab
const pageDescription = 'A timeline of famous people throughout history'; // The description of the page for search engines
const pageAuthor = 'Jonathan Heaney'; // Your name

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
