const header = 'Famous People Throughout History';
const footer = 'Timeline by Jonathan Heaney';
const entries = [
  {
    id: 'ibnKhaldun',
    categories: ['Historian'],
    color: 'brick-red',
    faicon: 'book',
    date: '1332-05-27',
    title: 'Ibn Khaldun',
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Bust_of_Ibn_Khaldun_%28Casbah_of_Bejaia%2C_Algeria%29.jpg',
      alt: 'Ibn Khaldun',
      caption: 'Ibn Khaldun',
    },
    body: "Ibn Khaldun (1332–1406) was a prominent Arab scholar, historian, and philosopher, often considered one of the fathers of modern sociology and historiography. Born in Tunis, in present-day Tunisia, he lived during a period of political turmoil and intellectual flourishing in the Islamic world. Ibn Khaldun is best known for his work 'Muqaddimah' (Introduction), written in 1377, which presents a groundbreaking analysis of historical processes and the rise and fall of civilizations. He introduced concepts such as 'asabiyyah' (social cohesion), which he argued was a fundamental force behind the development and decline of societies. His cyclical theory of history and emphasis on empirical evidence and critical thinking were revolutionary for his time. Ibn Khaldun's work covered a wide range of subjects, including economics, education, and political theory, and his insights continue to be influential in various fields of study. His life as a statesman, judge, and scholar reflects the rich intellectual tradition of the Islamic Golden Age.",
  },
  {
    id: 'timur',
    categories: ['Military Personnel'],
    color: 'navy-blue',
    faicon: 'person-military-rifle',
    date: '1336-04-08',
    title: 'Timur',
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Timur_reconstruction03.jpg/220px-Timur_reconstruction03.jpg',
      alt: 'Timur',
      caption: 'Timur',
    },
    body: 'Timur (1336–1405), also known as Tamerlane, was a Turco-Mongol conqueror who founded the Timurid Empire in and around modern-day Iran and Central Asia. Born in Kesh, near Samarkand in present-day Uzbekistan, Timur claimed descent from Genghis Khan through his marriage into the Borjigin family. He was a formidable military strategist and tactician, known for his use of mobility and surprise in warfare. Timur sought to restore the Mongol Empire, and his campaigns extended from India to the Mediterranean, including the sack of Delhi, the defeat of the Ottoman Sultan Bayezid I, and the invasion of the Golden Horde. His conquests were marked by widespread destruction and brutality, with millions of deaths attributed to his campaigns. Despite his ruthlessness, Timur was also a patron of the arts and architecture, contributing to the cultural and artistic revival of Samarkand. His legacy is complex, as he is remembered both as a brutal conqueror and a significant cultural patron.',
  },
  {
    id: 'janHus',
    categories: ['Religious Figure'],
    color: 'orange',
    faicon: 'church',
    date: '1372',
    title: 'Jan Hus',
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Jan_Hus%2C_portrait.jpg',
      alt: 'Jan Hus',
      caption: 'Jan Hus',
    },
    body: "Jan Hus (c. 1372–1415) was a Czech theologian and reformer whose teachings influenced the Protestant Reformation. Born in Husinec, Bohemia, he became a professor and rector at Charles University in Prague. Hus was a strong advocate for church reform, criticizing the moral failings of clergy, the sale of indulgences, and the Church's wealth and power. Influenced by the writings of John Wycliffe, Hus emphasized the authority of the Bible over the Church and called for a return to a more pious and simple Christian life. His sermons and writings gained a significant following but also drew the ire of Church authorities. In 1415, Hus was summoned to the Council of Constance to defend his views. Despite being promised safe conduct, he was arrested, tried for heresy, and burned at the stake. Hus's martyrdom sparked the Hussite Wars and left a lasting legacy, paving the way for future reformers like Martin Luther.",
  },
  {
    id: 'zhengHe',
    categories: ['Explorer'],
    color: 'dark-slate-gray',
    faicon: 'ship',
    date: '1371-01-01',
    title: 'Zheng He',
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/2016_Malakka%2C_Stadhuys_%2809%29.jpg/220px-2016_Malakka%2C_Stadhuys_%2809%29.jpg',
      alt: 'Zheng He',
      caption: 'Zheng He',
    },
    body: "Zheng He (1371–1433), born Ma He, was a Chinese mariner, explorer, and diplomat during the early Ming Dynasty. Born in Yunnan Province, he was captured by Ming forces as a child and castrated, later serving as a trusted eunuch in the court of the Yongle Emperor. Zheng He is best known for leading seven grand maritime expeditions between 1405 and 1433, commanding a vast fleet of ships that sailed across the Indian Ocean, reaching as far as the east coast of Africa, the Arabian Peninsula, and Southeast Asia. These voyages aimed to establish Chinese presence, exert imperial control, and expand tributary trade networks. Zheng He's fleet was renowned for its size, advanced navigation, and impressive treasure ships, which were some of the largest wooden ships ever built. His voyages helped to spread Chinese culture and influence, establish diplomatic relations, and enhance trade. Despite their historical significance, the expeditions were later halted, and China turned inward, ending its era of maritime exploration.",
  },
  {
    id: 'janVanEyck',
    categories: ['Painter'],
    color: 'dark-turquoise',
    faicon: 'paint-brush',
    date: '1390-01-01',
    title: 'Jan van Eyck',
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Portrait_of_a_Man_by_Jan_van_Eyck-small.jpg/640px-Portrait_of_a_Man_by_Jan_van_Eyck-small.jpg',
      alt: 'Jan van Eyck',
      caption: 'Jan van Eyck',
    },
    body: "Jan van Eyck (c. 1390–1441) was a Flemish painter and one of the most significant artists of the Northern Renaissance. Born in Maaseik, near Maastricht, Van Eyck was a master of oil painting, pioneering techniques that allowed for unprecedented detail, realism, and use of light. His most famous works include the 'Ghent Altarpiece' (1432), created with his brother Hubert van Eyck, and 'The Arnolfini Portrait' (1434). Van Eyck's meticulous attention to detail and innovative use of oil paints set new standards in art, influencing generations of painters. His portraits and religious scenes are celebrated for their complex iconography, rich textures, and lifelike representations. Serving as court painter to Philip the Good, Duke of Burgundy, Van Eyck's work also had a significant impact on the court's cultural life. His legacy endures as a foundational figure in the development of Western art, bridging medieval traditions and the burgeoning Renaissance style.",
    links: [
      {
        href: 'https://commons.wikimedia.org/wiki/File:Ghent_Altarpiece_by_Jan_van_Eyck_ALL.jpg',
        linkText: 'Ghent Altarpiece (1432)',
      },
      {
        href: 'https://commons.wikimedia.org/wiki/File:Van_Eyck_-_Arnolfini_PortraitFXD.jpg',
        linkText: 'The Arnolfini Portrait (1434)',
      },
      {
        href: 'https://commons.wikimedia.org/wiki/File:Jan_van_Eyck_The_Annunciation_1434-1436.jpg',
        linkText: 'The Annunciation (1434/36)',
      },
    ],
  },
  {
    id: 'joanOfArc',
    categories: ['Military Personnel'],
    color: 'navy-blue',
    faicon: 'person-military-rifle',
    date: '1412-01-01',
    title: 'Joan of Arc',
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Joan_of_Arc_miniature_graded.jpg/800px-Joan_of_Arc_miniature_graded.jpg',
      alt: 'Joan of Arc',
      caption: 'Joan of Arc',
    },
    body: "Joan of Arc (1412–1431) was a French peasant girl who became a national heroine and a saint of the Roman Catholic Church. Born in Domrémy, France, she claimed to have received visions from saints instructing her to support Charles VII and help drive the English from France during the Hundred Years' War. At age 17, she convinced Charles to allow her to lead a French army to the besieged city of Orléans, where she achieved a momentous victory in 1429. This and subsequent successes boosted French morale and led to Charles VII's coronation. Captured by the Burgundians in 1430, Joan was handed over to the English, tried for heresy, and burned at the stake in 1431. She was posthumously exonerated in 1456 and canonized in 1920. Joan of Arc remains a symbol of French unity and nationalism, and an enduring figure of faith and courage.",
  },
  {
    id: 'vladImpaler',
    categories: ['Politician'],
    color: 'blue',
    faicon: 'landmark',
    date: '1431-11-02',
    title: 'Vlad the Impaler',
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Vlad_Tepes_002.jpg',
      alt: 'Vlad the Impaler',
      caption: 'Vlad the Impaler',
    },
    body: "Vlad the Impaler (1431–1476), also known as Vlad III or Vlad Dracula, was a 15th-century ruler of Wallachia, a historical region in present-day Romania. Born in Sighișoara, Vlad was a member of the House of Drăculești and son of Vlad II Dracul. His moniker 'the Impaler' comes from his notorious method of punishing his enemies by impalement. Vlad ruled Wallachia with a fierce hand, seeking to consolidate power and resist Ottoman expansion into Europe. His brutal tactics and strict rule aimed at stabilizing and defending his territory earned him a reputation for cruelty, but also for effectiveness. Vlad's legacy is complex; while he is considered a national hero in Romania for his defense against the Ottomans, he is also the inspiration for the fictional character Count Dracula, popularized by Bram Stoker's 1897 novel. His life and actions continue to fascinate and horrify people worldwide.",
  },
  {
    id: 'raphael',
    categories: ['Painter'],
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
    links: [
      {
        href: 'https://commons.wikimedia.org/wiki/File:The_School_of_Athens_by_Raffaello_Sanzio_da_Urbino_in_Vatican.jpg',
        linkText: 'School of Athens',
      },
      {
        href: 'https://commons.wikimedia.org/wiki/File:Raffaello_Sanzio_-_La_Fornarina_(ca._1519-1520).jpg',
        linkText: 'La Fornarina',
      },
      {
        href: 'https://commons.wikimedia.org/wiki/File:Raphael_-_The_Sistine_Madonna_-_Google_Art_Project.jpg',
        linkText: 'The Sistine Madonna',
      },
    ],
  },
  {
    id: 'martinLuther',
    categories: ['Religious Figure'],
    color: 'orange',
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
    categories: ['Explorer'],
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
