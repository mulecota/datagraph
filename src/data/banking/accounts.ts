// src/data/accounts.ts

const accounts = [
    { accountId: "A1878", customerId: "C0628", type: "checking", balance: 9375, manager: "Miriam Dummigan", branch: 1329, active: true },
    { accountId: "A3040", customerId: "C0628", type: "savings", balance: 4887, manager: "Oran OFihily", branch: 1576, active: true },
    { accountId: "A8938", customerId: "C0628", type: "investment", balance: 8665, manager: "Verena Keddy", branch: 1953, active: true },
    { accountId: "A0708", customerId: "C1514", type: "checking", balance: 6559, manager: "Audrey Casswell", branch: 1627, active: true },
    { accountId: "A0293", customerId: "C1514", type: "savings", balance: 9531, manager: "Inglis Leatherborrow", branch: 1888, active: false },
    { accountId: "A4428", customerId: "C1514", type: "investment", balance: 8280, manager: "Brandie Paramor", branch: 1235, active: false },
    { accountId: "A8721", customerId: "C4314", type: "checking", balance: 3569, manager: "Coral Aslet", branch: 1634, active: false },
    { accountId: "A5732", customerId: "C4314", type: "savings", balance: 3874, manager: "Teresita Joddins", branch: 1348, active: true },
    { accountId: "A9671", customerId: "C4314", type: "investment", balance: 4586, manager: "Verla MacPaden", branch: 1975, active: false },
    { accountId: "A3819", customerId: "C8391", type: "checking", balance: 5951, manager: "Livvy Adamovich", branch: 1010, active: true },
    { accountId: "A1208", customerId: "C8391", type: "savings", balance: 9293, manager: "Faustina Horney", branch: 1605, active: false },
    { accountId: "A0729", customerId: "C8391", type: "investment", balance: 1754, manager: "Tracy Saundercock", branch: 1194, active: false },
    { accountId: "A7953", customerId: "C4613", type: "checking", balance: 8846, manager: "Irwin Trembley", branch: 1207, active: false },
    { accountId: "A6683", customerId: "C4613", type: "savings", balance: 8002, manager: "Lucias Armour", branch: 1615, active: true },
    { accountId: "A6176", customerId: "C4613", type: "investment", balance: 1267, manager: "Petronella Lambersen", branch: 1327, active: false },
    { accountId: "A8093", customerId: "C7353", type: "checking", balance: 9841, manager: "Flory Cahan", branch: 1976, active: false },
    { accountId: "A1762", customerId: "C7353", type: "savings", balance: 4708, manager: "Gary Yerbury", branch: 1244, active: true },
    { accountId: "A2779", customerId: "C7353", type: "investment", balance: 3260, manager: "Otho Klosges", branch: 1953, active: false },
    { accountId: "A6602", customerId: "C8406", type: "checking", balance: 3240, manager: "Jacobo Scamel", branch: 1578, active: false },
    { accountId: "A3721", customerId: "C8406", type: "savings", balance: 1027, manager: "Feodor Aleshkov", branch: 1785, active: true },
    { accountId: "A6803", customerId: "C8406", type: "investment", balance: 6804, manager: "Farlay Cattonnet", branch: 1450, active: false },
    { accountId: "A4597", customerId: "C0412", type: "checking", balance: 7026, manager: "Larissa McDill", branch: 1277, active: false },
    { accountId: "A6449", customerId: "C0412", type: "savings", balance: 1594, manager: "Jedd Denziloe", branch: 1082, active: true },
    { accountId: "A6900", customerId: "C0412", type: "investment", balance: 3107, manager: "Kyrstin Langman", branch: 1885, active: true },
    { accountId: "A8739", customerId: "C4624", type: "checking", balance: 9876, manager: "Florentia Heinle", branch: 1737, active: true },
    { accountId: "A7761", customerId: "C4624", type: "savings", balance: 733, manager: "Demetre Osgodby", branch: 1346, active: false },
    { accountId: "A7042", customerId: "C4624", type: "investment", balance: 6282, manager: "Bucky Godsell", branch: 1456, active: false },
    { accountId: "A2095", customerId: "C7681", type: "checking", balance: 5391, manager: "Dallas Danford", branch: 1879, active: false },
    { accountId: "A8542", customerId: "C7681", type: "savings", balance: 1679, manager: "Dell Garred", branch: 1527, active: false },
    { accountId: "A5112", customerId: "C7681", type: "investment", balance: 5177, manager: "Virginia Jirasek", branch: 1681, active: true },
    { accountId: "A2443", customerId: "C1436", type: "checking", balance: 9352, manager: "Chris Woodger", branch: 1283, active: true },
    { accountId: "A2487", customerId: "C1436", type: "savings", balance: 453, manager: "Jermaine Brandrick", branch: 1633, active: false },
    { accountId: "A7535", customerId: "C1436", type: "investment", balance: 1945, manager: "Richmound Meneely", branch: 1336, active: true },
    { accountId: "A0771", customerId: "C2898", type: "checking", balance: 7381, manager: "Gian Bastable", branch: 1665, active: false },
    { accountId: "A1521", customerId: "C2898", type: "savings", balance: 7103, manager: "Zared Klejna", branch: 1319, active: true },
    { accountId: "A4547", customerId: "C2898", type: "investment", balance: 6975, manager: "Manfred Sarfati", branch: 1191, active: true },
    { accountId: "A5594", customerId: "C0085", type: "checking", balance: 8486, manager: "Francois Jeynes", branch: 1360, active: false },
    { accountId: "A0741", customerId: "C0085", type: "savings", balance: 7612, manager: "Barnard Ivanuschka", branch: 1921, active: true },
    { accountId: "A2765", customerId: "C0085", type: "investment", balance: 8868, manager: "Emylee Argont", branch: 1722, active: false },
    { accountId: "A7966", customerId: "C6594", type: "checking", balance: 3855, manager: "Mersey Magwood", branch: 1766, active: false },
    { accountId: "A8043", customerId: "C6594", type: "savings", balance: 2913, manager: "Judie Howood", branch: 1103, active: true },
    { accountId: "A0985", customerId: "C6594", type: "investment", balance: 4872, manager: "Roseanna Vassman", branch: 1962, active: true },
    { accountId: "A6299", customerId: "C8394", type: "checking", balance: 7931, manager: "Patin Dudhill", branch: 1822, active: false },
    { accountId: "A2734", customerId: "C8394", type: "savings", balance: 4445, manager: "Darleen Greystock", branch: 1808, active: false },
    { accountId: "A9642", customerId: "C8394", type: "investment", balance: 8325, manager: "Elaina Edgell", branch: 1972, active: false },
    { accountId: "A0114", customerId: "C2807", type: "checking", balance: 5350, manager: "Tara Sleight", branch: 1678, active: false },
    { accountId: "A2499", customerId: "C2807", type: "savings", balance: 5938, manager: "Hubey Schwandt", branch: 1851, active: true },
    { accountId: "A3824", customerId: "C2807", type: "investment", balance: 7302, manager: "Demetria Knell", branch: 1689, active: false },
    { accountId: "A0746", customerId: "C7551", type: "checking", balance: 1939, manager: "Shawn Batha", branch: 1904, active: false },
    { accountId: "A5159", customerId: "C7551", type: "savings", balance: 297, manager: "Valaria Macklin", branch: 1608, active: false },
    { accountId: "A4673", customerId: "C7551", type: "investment", balance: 7789, manager: "Nanette Jago", branch: 1304, active: false },
    { accountId: "A8520", customerId: "C1181", type: "checking", balance: 3767, manager: "Siffre Ploughwright", branch: 1725, active: false },
    { accountId: "A9495", customerId: "C1181", type: "savings", balance: 6341, manager: "Cirstoforo Yesichev", branch: 1399, active: true },
    { accountId: "A2976", customerId: "C1181", type: "investment", balance: 5561, manager: "Raymund Blackney", branch: 1342, active: true },
    { accountId: "A9473", customerId: "C1427", type: "checking", balance: 1431, manager: "Bruce Parnall", branch: 1653, active: false },
    { accountId: "A0026", customerId: "C1427", type: "savings", balance: 5805, manager: "Jeanette Bussey", branch: 1255, active: false },
    { accountId: "A7575", customerId: "C1427", type: "investment", balance: 8881, manager: "Jocko Lowry", branch: 1109, active: true },
    { accountId: "A3915", customerId: "C6328", type: "checking", balance: 328, manager: "Jewell Tedridge", branch: 1569, active: true },
    { accountId: "A2584", customerId: "C6328", type: "savings", balance: 4290, manager: "Kendall Chiommienti", branch: 1521, active: true },
    { accountId: "A8165", customerId: "C6328", type: "investment", balance: 8521, manager: "Calv Perryman", branch: 1882, active: true },
    { accountId: "A5325", customerId: "C3943", type: "checking", balance: 914, manager: "Leo Huegett", branch: 1275, active: false },
    { accountId: "A5413", customerId: "C3943", type: "savings", balance: 4469, manager: "Lawton Bedinham", branch: 1107, active: true },
    { accountId: "A3605", customerId: "C3943", type: "investment", balance: 262, manager: "Zorine Dudderidge", branch: 1450, active: false },
    { accountId: "A1040", customerId: "C6710", type: "checking", balance: 9506, manager: "Celisse Corryer", branch: 1826, active: false },
    { accountId: "A1274", customerId: "C6710", type: "savings", balance: 758, manager: "Ephrayim Dalgarno", branch: 1199, active: true },
    { accountId: "A7632", customerId: "C6710", type: "investment", balance: 3992, manager: "Bobby Pauling", branch: 1155, active: true },
    { accountId: "A3578", customerId: "C1203", type: "checking", balance: 3762, manager: "Lara Worms", branch: 1168, active: false },
    { accountId: "A6493", customerId: "C1203", type: "savings", balance: 6981, manager: "Javier Assaf", branch: 1236, active: true },
    { accountId: "A6526", customerId: "C1203", type: "investment", balance: 3352, manager: "Nicky Mougel", branch: 1168, active: false },
    { accountId: "A7724", customerId: "C0988", type: "checking", balance: 5437, manager: "Chevalier Wheelan", branch: 1524, active: true },
    { accountId: "A6831", customerId: "C0988", type: "savings", balance: 2607, manager: "Eleanor Davenell", branch: 1705, active: true },
    { accountId: "A8311", customerId: "C0988", type: "investment", balance: 8049, manager: "Stillmann Spera", branch: 1189, active: true },
    { accountId: "A9513", customerId: "C5756", type: "checking", balance: 9936, manager: "Mill Pratty", branch: 1975, active: false },
    { accountId: "A3521", customerId: "C5756", type: "savings", balance: 3779, manager: "Hermann Tichelaar", branch: 1323, active: true },
    { accountId: "A0309", customerId: "C5756", type: "investment", balance: 9722, manager: "Buck Krzyzanowski", branch: 1665, active: true },
    { accountId: "A6813", customerId: "C6769", type: "checking", balance: 5055, manager: "Elladine Spring", branch: 1115, active: true },
    { accountId: "A3455", customerId: "C6769", type: "savings", balance: 1136, manager: "Deanne Elcoux", branch: 1515, active: true },
    { accountId: "A4354", customerId: "C6769", type: "investment", balance: 6083, manager: "Ugo Litchmore", branch: 1526, active: true },
    { accountId: "A0150", customerId: "C4055", type: "checking", balance: 5206, manager: "Wilma Clausner", branch: 1370, active: true },
    { accountId: "A9111", customerId: "C4055", type: "savings", balance: 9245, manager: "Rafa Joannet", branch: 1654, active: true },
    { accountId: "A1603", customerId: "C4055", type: "investment", balance: 3458, manager: "Heinrick Griffiths", branch: 1131, active: true },
    { accountId: "A6952", customerId: "C4715", type: "checking", balance: 9401, manager: "Cinnamon Stoker", branch: 1292, active: true },
    { accountId: "A2385", customerId: "C4715", type: "savings", balance: 5041, manager: "Margi Nineham", branch: 1127, active: true },
    { accountId: "A6707", customerId: "C4715", type: "investment", balance: 1340, manager: "Leonhard Adlington", branch: 1785, active: false },
    { accountId: "A9846", customerId: "C7826", type: "checking", balance: 7775, manager: "Hilton Eakins", branch: 1183, active: false },
    { accountId: "A0876", customerId: "C7826", type: "savings", balance: 8857, manager: "Chrissy Whettleton", branch: 1515, active: true },
    { accountId: "A9740", customerId: "C7826", type: "investment", balance: 5344, manager: "Stephi Sleaford", branch: 1996, active: false },
    { accountId: "A8109", customerId: "C3428", type: "checking", balance: 168, manager: "Terry Smithers", branch: 1066, active: false },
    { accountId: "A1805", customerId: "C3428", type: "savings", balance: 7626, manager: "Zachariah Manuelli", branch: 1645, active: true },
    { accountId: "A5068", customerId: "C3428", type: "investment", balance: 6874, manager: "Adora Pauley", branch: 1129, active: true },
];

export default accounts;
