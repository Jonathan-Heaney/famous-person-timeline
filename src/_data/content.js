const header = 'Famous People Throughout History';
const footer = 'Timeline by Jonathan Heaney';
const entries = [
  {
    id: 'ibnBattuta',
    categories: ['Explorer'],
    color: 'dark-slate-gray',
    faicon: 'ship',
    date: '1304-02-24',
    title: 'Ibn Battuta',
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/2016_Malakka%2C_Stadhuys_%2809%29.jpg/220px-2016_Malakka%2C_Stadhuys_%2809%29.jpg',
      alt: 'Ibn Battuta',
      caption: 'Ibn Battuta',
    },
    body: "Ibn Battuta (1304–1369) was a Moroccan explorer and scholar who is renowned for his extensive travels across the Islamic world and beyond. Born in Tangier, Morocco, Ibn Battuta set out on his first journey in 1325 to perform the Hajj, the pilgrimage to Mecca. This pilgrimage marked the beginning of a 29-year odyssey during which he traveled over 75,000 miles, visiting much of the known Islamic world and parts of Africa, Europe, and Asia. His travels took him to North Africa, the Middle East, Central Asia, India, Southeast Asia, and China, among other regions. He served as a judge in the Delhi Sultanate and even ventured as far as the Maldives and Timbuktu. Throughout his journeys, Ibn Battuta recorded his observations on the diverse cultures, people, and places he encountered, providing valuable insights into the medieval world. Upon returning to Morocco, he documented his experiences in the Rihla (The Journey), which remains a crucial historical source. Ibn Battuta's travels and writings offer a unique perspective on the interconnectedness of the 14th-century world and the spread of Islam. His legacy endures as one of history's greatest travelers and chroniclers.",
  },
  {
    id: 'giovanniBoccaccio',
    categories: ['Writer'],
    color: 'pale-turquoise',
    faicon: 'person',
    date: '1313-06-16',
    title: 'Giovanni Boccaccio',
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Boccaccio_by_Morghen.jpg/220px-Boccaccio_by_Morghen.jpg',
      alt: 'Giovanni Boccaccio',
      caption: 'Giovanni Boccaccio',
    },
    body: "Giovanni Boccaccio (1313–1375) was an Italian writer, poet, and humanist, best known for his masterpiece, 'The Decameron.' Born in Certaldo or Florence, Boccaccio was a contemporary and friend of Petrarch and is considered one of the founders of Renaissance humanism. 'The Decameron,' written between 1348 and 1353, is a collection of 100 tales told by a group of young people seeking refuge from the Black Death in a villa outside Florence. The stories, ranging from the humorous to the tragic, explore themes of love, intelligence, and fortune, reflecting the complexities of human nature. Boccaccio's work had a significant influence on later writers, including Geoffrey Chaucer, and contributed to the development of the Italian literary tradition. In addition to 'The Decameron,' Boccaccio wrote poetry, biographies, and works of classical scholarship. His efforts to revive and study ancient texts helped lay the groundwork for the humanist movement. Boccaccio's contributions to literature and humanism mark him as a key figure in the transition from the medieval to the Renaissance world.",
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/The_Decameron',
        linkText: 'The Decameron (1348-1353)',
      },
      {
        href: 'https://en.wikipedia.org/wiki/De_Mulieribus_Claris',
        linkText: 'On Famous Women (1361-1362)',
      },
    ],
  },
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
    id: 'donatello',
    categories: ['Sculptor'],
    color: 'pale-turquoise',
    faicon: 'person',
    date: '1386-01-01',
    title: 'Donatello',
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Cinq_ma%C3%AEtres_de_la_Renaissance_florentine_Mus%C3%A9e_du_Louvre_Peintures_INV_267_-_Donatello.jpg/640px-Cinq_ma%C3%AEtres_de_la_Renaissance_florentine_Mus%C3%A9e_du_Louvre_Peintures_INV_267_-_Donatello.jpg',
      alt: 'Donatello',
      caption: 'Donatello',
    },
    body: "Donatello (c. 1386–1466) was an Italian sculptor and a key figure of the early Renaissance. Born in Florence, Donatello revolutionized sculpture by reintroducing classical techniques and naturalism. He is renowned for his mastery of perspective, anatomy, and expressive detail. His early work, the marble statue 'David,' demonstrates his skill in creating realistic human forms. Donatello's later bronze 'David' is particularly famous as the first freestanding nude statue since antiquity, highlighting his innovative approach and humanist influences. His other notable works include 'Saint George,' the 'Equestrian Statue of Gattamelata,' and the 'Magdalene Penitent.' Donatello's contributions significantly advanced the art of sculpture, emphasizing the beauty and complexity of the human figure, and his influence is seen in the works of later Renaissance artists like Michelangelo. His ability to convey emotion and movement set a new standard for artistic expression in his time.",
    links: [
      {
        href: 'https://commons.wikimedia.org/wiki/File:Donatello_-_David_-_Floren%C3%A7a.jpg',
        linkText: 'David (1440-43)',
      },
      {
        href: 'https://commons.wikimedia.org/wiki/File:Donatello,_Mary_Magdalene,_c1440-42,_Museo_dell%27Opera_del_Duomo.jpg',
        linkText: 'Magdalene Penitent (1455)',
      },
      {
        href: 'https://commons.wikimedia.org/wiki/File:Saint_George_by_Donatello-Bargello.jpg',
        linkText: 'Saint George (1415-1417)',
      },
    ],
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
    id: 'johannesGutenberg',
    categories: ['Inventor'],
    color: 'dark-blue',
    faicon: 'print',
    date: '1400-01-01',
    title: 'Johannes Gutenberg',
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Gutenberg.jpg/640px-Gutenberg.jpg',
      alt: 'Johannes Gutenberg',
      caption: 'Johannes Gutenberg',
    },
    body: "Johannes Gutenberg (c. 1400–1468) was a German blacksmith, goldsmith, printer, and publisher who introduced printing to Europe. Born in Mainz, Germany, Gutenberg is best known for inventing the movable-type printing press around 1440. This innovation revolutionized the production of books, making them more accessible and affordable, and greatly accelerated the spread of knowledge. Gutenberg's most famous printed work, the Gutenberg Bible (also known as the 42-line Bible), was completed around 1455 and is admired for its high quality and craftsmanship. The printing press facilitated the spread of the Renaissance, Reformation, and Scientific Revolution by enabling the mass production of books, pamphlets, and other printed materials. Gutenberg's invention is often considered one of the most important developments in human history, as it laid the foundation for the modern knowledge-based economy and culture. His legacy endures as a pivotal figure in the democratization of knowledge and the advancement of literacy.",
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
    id: 'mehmedConqueror',
    categories: ['Politician'],
    color: 'blue',
    faicon: 'landmark',
    date: '1432-03-30',
    title: 'Mehmed the Conqueror',
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Bellini%2C_Gentile_-_Sultan_Mehmet_II.jpg',
      alt: 'Mehmed the Conqueror',
      caption: 'Mehmed the Conqueror',
    },
    body: "Mehmed the Conqueror (1432–1481), also known as Mehmed II, was an Ottoman Sultan renowned for his military conquests and significant contributions to the expansion of the Ottoman Empire. Born in Edirne, he ascended to the throne in 1444 and again in 1451. His most famous achievement was the conquest of Constantinople in 1453, marking the end of the Byzantine Empire and establishing Istanbul as the new capital of the Ottoman Empire. This victory earned him the title 'The Conqueror.' Mehmed II's reign was characterized by extensive military campaigns that expanded Ottoman territories in the Balkans and Anatolia. He also focused on administrative and cultural reforms, transforming Istanbul into a vibrant, multicultural center of trade, culture, and learning. Mehmed was a patron of the arts and education, promoting architectural projects and scholarly works. His legacy as a formidable military leader and visionary ruler significantly shaped the history of the Ottoman Empire and the broader region.",
  },
  {
    id: 'sandroBotticelli',
    categories: ['Painter'],
    color: 'dark-turquoise',
    faicon: 'paint-brush',
    date: '1445-01-01',
    title: 'Sandro Botticelli',
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sandro_Botticelli_083.jpg/220px-Sandro_Botticelli_083.jpg',
      alt: 'Sandro Botticelli',
      caption: 'Sandro Botticelli',
    },
    body: "Sandro Botticelli (1445–1510) was an Italian painter of the Early Renaissance, renowned for his distinctive style and contribution to the Florentine art scene. Born Alessandro di Mariano di Vanni Filipepi in Florence, Botticelli was a student of Fra Filippo Lippi and later associated with the Medici family. His works are characterized by their graceful lines, delicate details, and use of mythological themes. Botticelli's most famous paintings include 'The Birth of Venus' and 'Primavera,' both of which depict classical mythology with a blend of idealized beauty and intricate symbolism. These works reflect the humanist interests of the time, merging classical themes with contemporary Florentine culture. Despite a period of decline in his reputation after his death, Botticelli's work was rediscovered in the 19th century and has since been celebrated for its artistic innovation and profound influence on the Renaissance art movement.",
    links: [
      {
        href: 'https://commons.wikimedia.org/wiki/File:Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg',
        linkText: 'The Birth of Venus',
      },
      {
        href: 'https://commons.wikimedia.org/wiki/File:Botticelli-primavera.jpg',
        linkText: 'Primavera',
      },
      {
        href: 'https://commons.wikimedia.org/wiki/File:Sandro_Botticelli_Adoration_of_the_Magi_2.jpg',
        linkText: 'Adoration of the Magi',
      },
    ],
  },
  {
    id: 'lorenzoMedici',
    categories: ['Politician'],
    color: 'blue',
    faicon: 'landmark',
    date: '1449-01-01',
    title: "Lorenzo de' Medici",
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Lorenzo_de_Medici.jpg/640px-Lorenzo_de_Medici.jpg',
      alt: "Lorenzo de' Medici",
      caption: "Lorenzo de' Medici",
    },
    body: "Lorenzo de' Medici (1449–1492), also known as Lorenzo the Magnificent, was a prominent Italian statesman, banker, and patron of the arts during the Renaissance. Born in Florence, he was a member of the powerful Medici family, which dominated Florentine politics and culture. Lorenzo's leadership and diplomatic skills helped maintain peace among the various Italian states, fostering a period of stability and prosperity known as the 'Pax Medicea.' As a patron, he supported numerous artists, writers, and scholars, including Michelangelo, Leonardo da Vinci, Botticelli, and Poliziano, contributing significantly to the flourishing of Renaissance culture. Lorenzo's court became a vibrant center of humanist thought and artistic innovation. Despite his political acumen, his lavish spending and banking ventures eventually strained the family's finances. Lorenzo's death marked the beginning of political instability in Florence, but his legacy as a cultural patron and influential leader endures, symbolizing the heights of Renaissance achievement.",
  },
  {
    id: 'bartolomeuDias',
    categories: ['Explorer'],
    color: 'dark-slate-gray',
    faicon: 'ship',
    date: '1450-01-01',
    title: 'Bartolomeu Dias',
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Bartolomeu_Dias%2C_South_Africa_House_%28cut%29.JPG',
      alt: 'Bartolomeu Dias',
      caption: 'Bartolomeu Dias',
    },
    body: "Bartolomeu Dias (c. 1450–1500) was a Portuguese explorer who played a key role in the Age of Discovery by becoming the first European to sail around the southern tip of Africa. Born in Portugal, Dias embarked on his historic voyage in 1487 under the commission of King John II. In 1488, he successfully navigated the Cape of Good Hope, proving that a sea route to the Indian Ocean from Europe was possible. This discovery opened up the potential for direct maritime trade with Asia, which was pivotal for Portuguese exploration and expansion. Dias's journey demonstrated the feasibility of accessing the wealth of the East, which eventually led to Vasco da Gama's successful voyage to India in 1498. Although Dias did not reach India himself, his pioneering expedition laid the groundwork for the subsequent Portuguese dominance in the Indian Ocean trade. Dias's contributions significantly advanced European navigation and global exploration.",
  },
  {
    id: 'hieronymusBosch',
    categories: ['Painter'],
    color: 'dark-turquoise',
    faicon: 'paint-brush',
    date: '1450-01-01',
    title: 'Hieronymus Bosch',
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Jheronimus_Bosch_%28cropped%29.jpg/220px-Jheronimus_Bosch_%28cropped%29.jpg',
      alt: 'Hieronymus Bosch',
      caption: 'Hieronymus Bosch',
    },
    body: "Hieronymus Bosch (c. 1450–1516) was a Dutch painter known for his fantastical and often surreal depictions of religious themes. Born Jheronimus van Aken in 's-Hertogenbosch, Netherlands, Bosch's work is characterized by its vivid imagination, intricate detail, and moral symbolism. His paintings often explore the themes of sin, morality, and the human condition, blending religious allegory with bizarre and sometimes nightmarish imagery. Bosch's most famous work, 'The Garden of Earthly Delights,' is a triptych that presents a complex, symbolic vision of humanity's fall, earthly temptations, and the consequences of sin. Other notable works include 'The Last Judgment' and 'The Temptation of St. Anthony.' His unique style, filled with strange creatures, fantastical landscapes, and surreal scenes, distinguishes him from his contemporaries and has led to various interpretations of his work, ranging from moral lessons to early examples of surrealism. Bosch's influence extended well beyond his time, impacting later artists like Pieter Bruegel the Elder and even modern surrealists. His ability to blend the real and the imagined, the sacred and the profane, makes him one of the most intriguing and enigmatic figures in art history.",
    links: [
      {
        href: 'https://commons.wikimedia.org/wiki/File:The_Garden_of_Earthly_Delights_by_Bosch_High_Resolution.jpg',
        linkText: 'The Garden of Earthly Delights',
      },
      {
        href: 'https://commons.wikimedia.org/wiki/File:The_Temptation_of_Saint_Anthony,_ca._1495-1515.jpg',
        linkText: 'The Temptation of Saint Anthony',
      },
      {
        href: 'https://commons.wikimedia.org/wiki/File:After_Hieronymus_Bosch_-_The_Last_Judgment_0000134708.jpg',
        linkText: 'The Last Judgment',
      },
    ],
  },
  {
    id: 'amerigoVespucci',
    categories: ['Explorer'],
    color: 'dark-slate-gray',
    faicon: 'ship',
    date: '1451-03-09',
    title: 'Amerigo Vespucci',
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Amerigo_Vespucci_%28with_turban%29_-_cropped.jpg/220px-Amerigo_Vespucci_%28with_turban%29_-_cropped.jpg',
      alt: 'Amerigo Vespucci',
      caption: 'Amerigo Vespucci',
    },
    body: "Amerigo Vespucci (1454–1512) was an Italian explorer, navigator, and cartographer whose name was given to the Americas. Born in Florence, Vespucci worked for the Medici family and later became involved in the age of exploration. Between 1497 and 1504, he participated in several voyages to the New World, exploring the coasts of what is now South America.Vespucci's letters and accounts of his voyages suggested that the lands discovered by Christopher Columbus were part of a new continent, separate from Asia. His detailed descriptions and observations of the geography, native peoples, and natural resources of the New World contributed to the realization that these lands were previously unknown to Europeans. The suggestion that the newly discovered territories were part of a separate continent led the German cartographer Martin Waldseemüller to name the continent 'America' in Vespucci's honor in his 1507 world map. Vespucci's contributions to the understanding of the New World were significant, and his legacy endures in the very name of the continents he helped to identify.",
  },
  {
    id: 'isabellaCastile',
    categories: ['Politician'],
    color: 'blue',
    faicon: 'landmark',
    date: '1451-04-22',
    title: 'Isabella I of Castile',
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/IsabellaofCastile03.jpg/220px-IsabellaofCastile03.jpg',
      alt: 'Isabella I of Castile',
      caption: 'Isabella I of Castile',
    },
    body: "Isabella I of Castile (1451–1504) was a formidable queen whose reign significantly shaped the future of Spain and the wider world. Born in Madrigal de las Altas Torres, she became Queen of Castile in 1474. Her marriage to Ferdinand II of Aragon in 1469 unified the two largest kingdoms in Spain, laying the foundation for the modern Spanish state. Together, they completed the Reconquista in 1492 by capturing Granada, the last Muslim stronghold on the Iberian Peninsula, thus ending centuries of Islamic rule in Spain. Isabella is also known for her role in sponsoring Christopher Columbus's 1492 voyage, which led to the European discovery of the Americas. Her reign saw significant administrative, military, and religious reforms, including the establishment of the Spanish Inquisition in 1478, which aimed to maintain Catholic orthodoxy in her kingdoms. Isabella was a devout Catholic, and her policies significantly influenced the religious landscape of Spain. Her legacy is complex, marked by both the achievements in unifying Spain and the darker aspects of her reign, including the persecution of Jews and Muslims.",
  },
  {
    id: 'christopherColumbus',
    categories: ['Explorer'],
    color: 'dark-slate-gray',
    faicon: 'ship',
    date: '1451-08-25',
    title: 'Christopher Columbus',
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Portrait_of_a_Man%2C_Said_to_be_Christopher_Columbus.jpg',
      alt: 'Christopher Columbus',
      caption: 'Christopher Columbus',
    },
    body: "Christopher Columbus (1451–1506) was an Italian explorer whose voyages across the Atlantic Ocean led to the European discovery of the Americas. Born in Genoa, Columbus sought a westward route to Asia, believing it to be shorter than the overland routes. With support from Spanish monarchs Ferdinand and Isabella, he embarked on his first voyage in 1492, commanding three ships: the Niña, the Pinta, and the Santa María. On October 12, 1492, he landed in the Bahamas, mistakenly believing he had reached the East Indies. Columbus made a total of four voyages to the New World, exploring parts of the Caribbean, Central America, and South America. While he never found the direct route to Asia, his expeditions opened up the Americas for European exploration and colonization. Columbus's voyages had profound and lasting impacts, leading to widespread exchange between the Old and New Worlds. However, his expeditions also initiated the era of European colonization that brought significant suffering to indigenous populations. Columbus remains a controversial figure, celebrated for his role in history but criticized for the consequences of his journeys.",
  },
  {
    id: 'leonardoDaVinci',
    categories: ['Painter'],
    color: 'dark-turquoise',
    faicon: 'paint-brush',
    date: '1452-04-15',
    title: 'Leonardo da Vinci',
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Portrait_of_Leonardo_da_Vinci_%28from_Characaturas_by_Leonardo_da_Vinci%2C_from_Drawings_by_Wincelslaus_Hollar%2C_out_of_the_Portland_Museum%29_MET_DP824104.jpg/640px-Portrait_of_Leonardo_da_Vinci_%28from_Characaturas_by_Leonardo_da_Vinci%2C_from_Drawings_by_Wincelslaus_Hollar%2C_out_of_the_Portland_Museum%29_MET_DP824104.jpg',
      alt: 'Leonardo da Vinci',
      caption: 'Leonardo da Vinci',
    },
    body: "Leonardo da Vinci (1452–1519) was an Italian polymath whose contributions to art, science, and engineering make him one of the most influential figures of the Renaissance. Born in Vinci, near Florence, Leonardo was a painter, sculptor, architect, inventor, and scientist, embodying the Renaissance ideal of the 'universal man.' His most famous paintings, 'The Last Supper' and 'Mona Lisa,' are celebrated for their innovative composition, mastery of light and shadow, and profound psychological depth. Beyond his artistic achievements, Leonardo's notebooks reveal his insatiable curiosity and inventive genius. He made detailed studies of anatomy, optics, botany, and engineering, and sketched designs for machines far ahead of his time, including flying machines, tanks, and hydraulic systems. Though many of his inventions were never built, his ideas anticipated future technological advancements. Leonardo's work in anatomy, particularly his dissections of the human body, contributed significantly to the understanding of human physiology. His meticulous observations and sketches have left a lasting legacy in both the arts and sciences. Leonardo da Vinci's extraordinary range of talents and his relentless pursuit of knowledge make him a symbol of the Renaissance and one of history's greatest creative minds.",
    links: [
      {
        href: 'https://commons.wikimedia.org/wiki/File:Leonardo_da_Vinci_(1452-1519)_-_The_Last_Supper_(1495-1498).jpg',
        linkText: 'The Last Supper',
      },
      {
        href: 'https://commons.wikimedia.org/wiki/File:Leonardo_da_Vinci,_Salvator_Mundi,_c.1500,_oil_on_walnut,_45.4_%C3%97_65.6_cm.jpg',
        linkText: 'Salvator Mundi',
      },
      {
        href: 'https://commons.wikimedia.org/wiki/File:Da_Vinci_Vitruve_Luc_Viatour.jpg',
        linkText: 'Vitruvian Man',
      },
    ],
  },
  {
    id: 'richardIIIEngland',
    categories: ['Politician'],
    color: 'blue',
    faicon: 'landmark',
    date: '1452-10-02',
    title: 'Richard III of England',
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Richard_III_earliest_surviving_portrait.jpg/220px-Richard_III_earliest_surviving_portrait.jpg',
      alt: 'Richard III of England',
      caption: 'Richard III of England',
    },
    body: "Richard III of England (1452–1485) was the last Plantagenet king and the final ruler of the House of York. Born in Fotheringhay Castle, he was the younger brother of King Edward IV. Richard was a skilled military leader, playing a key role in the Wars of the Roses, a series of dynastic conflicts between the houses of York and Lancaster. In 1483, Richard was appointed Lord Protector of the realm after the death of Edward IV, with his young nephew Edward V as the new king. However, Richard seized the throne, declaring his nephews illegitimate, and was crowned king. His brief reign was marked by controversy, particularly regarding the mysterious disappearance of the Princes in the Tower, who were Edward V and his brother Richard, Duke of York. The boys were never seen again, and Richard has long been suspected of their murder, although the evidence remains inconclusive. Richard III's reign ended in 1485 at the Battle of Bosworth Field, where he was defeated and killed by the forces of Henry Tudor, who became Henry VII. Richard's death marked the end of the Wars of the Roses and the beginning of the Tudor dynasty. His legacy has been shaped by William Shakespeare's portrayal of him as a villainous, deformed usurper, though modern historians have reevaluated his character, recognizing the complexities of his reign.",
  },
  {
    id: 'vascoDaGama',
    categories: ['Explorer'],
    color: 'dark-slate-gray',
    faicon: 'ship',
    date: '1460-01-01',
    title: 'Vasco da Gama',
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ignoto_portoghese%2C_ritratto_di_un_cavaliere_dell%27ordine_di_cristo%2C_1525-50_ca._02.jpg/220px-Ignoto_portoghese%2C_ritratto_di_un_cavaliere_dell%27ordine_di_cristo%2C_1525-50_ca._02.jpg',
      alt: 'Vasco da Gama',
      caption: 'Vasco da Gama',
    },
    body: "Vasco da Gama (c. 1460–1524) was a Portuguese explorer whose voyages established a direct sea route from Europe to India, marking a significant milestone in the Age of Discovery. Born in Sines, Portugal, da Gama was appointed by King Manuel I to lead an expedition to India. In 1497, he set sail from Lisbon with four ships, rounding the Cape of Good Hope and reaching the Indian port of Calicut (modern-day Kozhikode) in 1498. This historic voyage opened up the first all-water trade route between Europe and Asia, allowing Portugal to establish a powerful and lucrative spice trade. Da Gama's successful navigation of the Indian Ocean and his dealings with local rulers established Portugal as a dominant trading power in the region. He made two more voyages to India, securing Portuguese interests and expanding their colonial and commercial influence. His achievements had a profound impact on global trade and ushered in an era of European colonialism in Asia. Vasco da Gama is celebrated for his navigational prowess and his pivotal role in connecting the East and West by sea.",
  },
  {
    id: 'ferdinandMagellan',
    categories: ['Explorer'],
    color: 'dark-slate-gray',
    faicon: 'ship',
    date: '1480-01-01',
    title: 'Ferdinand Magellan',
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Ferdinand_Magellan.jpg/220px-Ferdinand_Magellan.jpg',
      alt: 'Ferdinand Magellan',
      caption: 'Ferdinand Magellan',
    },
    body: "Ferdinand Magellan (c. 1480–1521) was a Portuguese explorer known for leading the first expedition to circumnavigate the globe. Born in Sabrosa, Portugal, Magellan initially served under King Manuel I but later sailed for Spain under King Charles I. In 1519, he set out with a fleet of five ships to find a westward route to the Spice Islands (the Moluccas). Magellan's expedition traversed the Atlantic Ocean and discovered the strait at the southern tip of South America, now named the Strait of Magellan. In 1521, he reached the Philippines, where he was killed in a conflict on the island of Mactan. Despite his death, the expedition continued under the command of Juan Sebastián Elcano. In 1522, the sole remaining ship, the Victoria, returned to Spain, completing the first known circumnavigation of the Earth. Magellan's journey proved the vastness of the Pacific Ocean and provided crucial information about global geography. His voyage significantly contributed to European knowledge of the world and established the importance of westward maritime exploration. Magellan's legacy is remembered as one of the greatest achievements in the history of exploration.",
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
