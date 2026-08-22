/* =====================================================================
   PORTRAIT URLs — pre-resolved from Wikipedia and verified to load.
   ---------------------------------------------------------------------
   Baking these in means the site needs NO network API call to show
   photos, so it works instantly when you just double-click index.html.

   Keys are the `wiki` field from data.js. Images are served by
   upload.wikimedia.org (public domain / freely licensed).

   To change a photo, edit the URL here — or add img:"..." to that
   thinker in data.js, which overrides this file.
   ===================================================================== */

const PORTRAITS = {
  /* --- Classical West --- */
  "Socrates":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Socrates_Louvre.jpg/500px-Socrates_Louvre.jpg",
  "Plato":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Plato_Silanion_Musei_Capitolini_MC1377.png/500px-Plato_Silanion_Musei_Capitolini_MC1377.png",
  "Aristotle":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Aristotle_Altemps_Inv8575.jpg/500px-Aristotle_Altemps_Inv8575.jpg",
  "Epicurus":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Epikouros_BM_1843.jpg/500px-Epikouros_BM_1843.jpg",
  "Marcus Aurelius":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/MSR-ra-61-b-1-DM.jpg/500px-MSR-ra-61-b-1-DM.jpg",
  "Epictetus":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Epicteti_Enchiridion_Latinis_versibus_adumbratum_%28Oxford_1715%29_frontispiece_%28cropped%29.jpg/500px-Epicteti_Enchiridion_Latinis_versibus_adumbratum_%28Oxford_1715%29_frontispiece_%28cropped%29.jpg",

  /* --- Eastern --- */
  "Gautama Buddha":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Buddha_in_Sarnath_Museum_%28Dhammajak_Mutra%29.jpg/500px-Buddha_in_Sarnath_Museum_%28Dhammajak_Mutra%29.jpg",
  "Mahavira":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Mahavira_sculpture.jpg/500px-Mahavira_sculpture.jpg",
  "Confucius":"https://upload.wikimedia.org/wikipedia/commons/5/54/Confucius_Tang_Dynasty.jpg",
  "Laozi":"https://commons.wikimedia.org/wiki/Special:FilePath/Laozi.jpg?width=500",

  /* --- Indian Classical & Bhakti --- */
  "Chanakya":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Chanakya_artistic_depiction.jpg/500px-Chanakya_artistic_depiction.jpg",
  "Thiruvalluvar":"https://upload.wikimedia.org/wikipedia/commons/4/4e/Stamp_of_India_-_1960_-_Colnect_141769_-_1_-_Thiruvalluvar_Commemoration.jpeg",
  "Adi Shankara":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Raja_Ravi_Varma_-_Sankaracharya.jpg/500px-Raja_Ravi_Varma_-_Sankaracharya.jpg",
  "Kabir":"https://upload.wikimedia.org/wikipedia/commons/c/c8/Kabir004.jpg",
  "Guru Nanak":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Mural_painting_of_Guru_Nanak_from_Gurdwara_Baba_Atal_Rai.jpg/500px-Mural_painting_of_Guru_Nanak_from_Gurdwara_Baba_Atal_Rai.jpg",
  "Basava":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Basava_Gaint_Statue_108_feet%2C_Basava_Kalyana.JPG/500px-Basava_Gaint_Statue_108_feet%2C_Basava_Kalyana.JPG",

  /* --- Modern Western Political --- */
  "Niccolò Machiavelli":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Portrait_of_Niccol%C3%B2_Machiavelli_by_Santi_di_Tito.jpg/500px-Portrait_of_Niccol%C3%B2_Machiavelli_by_Santi_di_Tito.jpg",
  "Thomas Hobbes":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Thomas_Hobbes_by_John_Michael_Wright_%28colour%29_%283x4_cropped%29.jpg/500px-Thomas_Hobbes_by_John_Michael_Wright_%28colour%29_%283x4_cropped%29.jpg",
  "John Locke":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Godfrey_Kneller_-_Portrait_of_John_Locke_%28Hermitage%29.jpg/500px-Godfrey_Kneller_-_Portrait_of_John_Locke_%28Hermitage%29.jpg",
  "Jean-Jacques Rousseau":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Maurice_Quentin_de_La_Tour_-_Portrait_of_Jean-Jacques_Rousseau_-_adjusted.jpg/500px-Maurice_Quentin_de_La_Tour_-_Portrait_of_Jean-Jacques_Rousseau_-_adjusted.jpg",
  "Montesquieu":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Charles_Montesquieu.jpg/500px-Charles_Montesquieu.jpg",
  "Edmund Burke":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Sir_Joshua_Reynolds_-_Edmund_Burke%2C_1729_-_1797._Statesman%2C_orator_and_author_-_PG_2362_-_National_Galleries_of_Scotland.jpg/500px-Sir_Joshua_Reynolds_-_Edmund_Burke%2C_1729_-_1797._Statesman%2C_orator_and_author_-_PG_2362_-_National_Galleries_of_Scotland.jpg",
  "Mary Wollstonecraft":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Mary_Wollstonecraft_Portrait.jpg/500px-Mary_Wollstonecraft_Portrait.jpg",
  "Immanuel Kant":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Immanuel_Kant_-_Gemaelde_1.jpg/500px-Immanuel_Kant_-_Gemaelde_1.jpg",
  "Jeremy Bentham":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Jeremy_Bentham_by_Henry_William_Pickersgill.jpg/500px-Jeremy_Bentham_by_Henry_William_Pickersgill.jpg",
  "John Stuart Mill":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/John_Stuart_Mill_by_London_Stereoscopic_Company%2C_c1870.jpg/500px-John_Stuart_Mill_by_London_Stereoscopic_Company%2C_c1870.jpg",
  "Georg Wilhelm Friedrich Hegel":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Jakob_Schlesinger_-_Hegel_1831.jpg/500px-Jakob_Schlesinger_-_Hegel_1831.jpg",
  "Karl Marx":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Karl_Marx_by_John_Jabez_Edwin_Mayall_1875_-_Restored.png/500px-Karl_Marx_by_John_Jabez_Edwin_Mayall_1875_-_Restored.png",
  "Friedrich Nietzsche":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Nietzsche187a.jpg/500px-Nietzsche187a.jpg",
  "Alexis de Tocqueville":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Portrait_of_Alexis_de_Tocqueville.jpg/500px-Portrait_of_Alexis_de_Tocqueville.jpg",

  /* --- Contemporary --- */
  "John Rawls":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/John_Rawls_%281971_photo_portrait%29.jpg/500px-John_Rawls_%281971_photo_portrait%29.jpg",
  "Robert Nozick":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Robert_Nozick_1977_Libertarian_Review_cover_%284x5_cropped%29.jpg/500px-Robert_Nozick_1977_Libertarian_Review_cover_%284x5_cropped%29.jpg",
  "Amartya Sen":"https://upload.wikimedia.org/wikipedia/commons/3/35/Amartya_Sen_20071128_cologne_cropped.jpg",
  "Hannah Arendt":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Hannah_Arendt_auf_dem_1._Kulturkritikerkongress%2C_Barbara_Niggl_Radloff%2C_FM-2019-1-5-9-16_%28cropped%29.jpg/500px-Hannah_Arendt_auf_dem_1._Kulturkritikerkongress%2C_Barbara_Niggl_Radloff%2C_FM-2019-1-5-9-16_%28cropped%29.jpg",
  "Isaiah Berlin":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/IsaiahBerlin1983.jpg/500px-IsaiahBerlin1983.jpg",
  "Michel Foucault":"https://upload.wikimedia.org/wikipedia/commons/c/ca/Photo_of_Michel_Foucault_on_1970_dustjacket_of_The_Order_of_Things.jpg",
  "Jürgen Habermas":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/JuergenHabermas_crop1.jpg/500px-JuergenHabermas_crop1.jpg",
  "Elinor Ostrom":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Nobel_Prize_2009-Press_Conference_KVA-30.jpg/500px-Nobel_Prize_2009-Press_Conference_KVA-30.jpg",
  "Martha Nussbaum":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Martha_Nussbaum_2010_%28cropped%29.jpg/500px-Martha_Nussbaum_2010_%28cropped%29.jpg",
  "Jean-Paul Sartre":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jean_Paul_Sartre_1965.jpg/500px-Jean_Paul_Sartre_1965.jpg",
  "Albert Camus":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Albert_Camus%2C_gagnant_de_prix_Nobel%2C_portrait_en_buste%2C_pos%C3%A9_au_bureau%2C_faisant_face_%C3%A0_gauche%2C_cigarette_de_tabagisme.jpg/500px-Albert_Camus%2C_gagnant_de_prix_Nobel%2C_portrait_en_buste%2C_pos%C3%A9_au_bureau%2C_faisant_face_%C3%A0_gauche%2C_cigarette_de_tabagisme.jpg",
  "Simone de Beauvoir":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Simone_De_Beauvoir_%28cropped%29.jpg/500px-Simone_De_Beauvoir_%28cropped%29.jpg",
  "Frantz Fanon":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Photograph_of_Frantz_Fanon_from_Black_Skin_White_Masks_%281967%29_dust_jacket.webp/500px-Photograph_of_Frantz_Fanon_from_Black_Skin_White_Masks_%281967%29_dust_jacket.webp.png",
  "Paulo Freire":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Paulo_Freire_1977.jpg/500px-Paulo_Freire_1977.jpg",

  /* --- Indian Renaissance & Freedom Movement --- */
  "Ram Mohan Roy":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Portrait_of_Raja_Ram_Mohun_Roy%2C_1833.jpg/500px-Portrait_of_Raja_Ram_Mohun_Roy%2C_1833.jpg",
  "Swami Vivekananda":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Swami_Vivekananda-1893-09-signed.jpg/500px-Swami_Vivekananda-1893-09-signed.jpg",
  "Rabindranath Tagore":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/1926_Rabindrath_Tagore.jpg/500px-1926_Rabindrath_Tagore.jpg",
  "Mahatma Gandhi":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg/500px-Mahatma-Gandhi%2C_studio%2C_1931.jpg",
  "B. R. Ambedkar":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Dr._Bhimrao_Ambedkar.jpg/500px-Dr._Bhimrao_Ambedkar.jpg",
  "Jawaharlal Nehru":"https://upload.wikimedia.org/wikipedia/commons/9/97/Nehru_in_the_Netherlands%2C_1957.jpg",
  "Vallabhbhai Patel":"https://upload.wikimedia.org/wikipedia/commons/f/f2/Sardar_patel_%28cropped%29.jpg",
  "Sri Aurobindo":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Sri_aurobindo.jpg/500px-Sri_aurobindo.jpg",
  "Bal Gangadhar Tilak":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Bal_Gangadhar_Tilak_%281856-1920%29.webp",
  "Gopal Krishna Gokhale":"https://upload.wikimedia.org/wikipedia/commons/a/a5/GKGokhale.jpg",
  "Subhas Chandra Bose":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Subhas_Chandra_Bose_NRB.jpg/500px-Subhas_Chandra_Bose_NRB.jpg",
  "Abul Kalam Azad":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Maulana_Abul_Kalam_Azad.jpg/500px-Maulana_Abul_Kalam_Azad.jpg",
  "M. N. Roy":"https://upload.wikimedia.org/wikipedia/commons/6/69/Mn_roy2.jpg",
  "Vinoba Bhave":"https://upload.wikimedia.org/wikipedia/commons/5/51/Vinobabhaveji.jpg",
  "Jayaprakash Narayan":"https://upload.wikimedia.org/wikipedia/commons/5/5a/Jawaharlal_Nehru_with_Jayaprakash_Narayan_Crop.jpg",
  "Ram Manohar Lohia":"https://upload.wikimedia.org/wikipedia/commons/5/59/Ram_Manohar_Lohia_1977_stamp_of_India.jpg",
  "Deendayal Upadhyaya":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Deendayal_Upadhyaya_2018_stamp_of_India.jpg/500px-Deendayal_Upadhyaya_2018_stamp_of_India.jpg",
  "A. P. J. Abdul Kalam":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/A._P._J._Abdul_Kalam.jpg/500px-A._P._J._Abdul_Kalam.jpg",

  /* --- Social Justice & Reform --- */
  "Jyotirao Phule":"https://upload.wikimedia.org/wikipedia/commons/d/d5/Mahatma_Jotirao_Phule.jpg",
  "Savitribai Phule":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Savitribai_Phule_statue%2C_Maharashtra_sadan%2C_New_Delhi.jpg/500px-Savitribai_Phule_statue%2C_Maharashtra_sadan%2C_New_Delhi.jpg",
  "Periyar E. V. Ramasamy":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/C._N._Annadurai_and_E._V._Ramasami_%28cropped%29.JPG/500px-C._N._Annadurai_and_E._V._Ramasami_%28cropped%29.JPG",
  "Narayana Guru":"https://upload.wikimedia.org/wikipedia/commons/0/03/Narayana_Guru.jpg",
  "Pandita Ramabai":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Pandita_Ramabai_Sarasvati_1858-1922_front-page-portrait.jpg/500px-Pandita_Ramabai_Sarasvati_1858-1922_front-page-portrait.jpg",
  "Ishwar Chandra Vidyasagar":"https://upload.wikimedia.org/wikipedia/commons/3/31/Ishwarchandra_Vidyasagar.jpg",

  /* --- Moral Psychology --- */
  "Carol Gilligan":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Carol_Gilligan_P1010970_-_cropped.jpg/500px-Carol_Gilligan_P1010970_-_cropped.jpg",
  "Daniel Goleman":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Daniel_Goleman_-_World_Economic_Forum_Annual_Meeting_2011.jpg/500px-Daniel_Goleman_-_World_Economic_Forum_Annual_Meeting_2011.jpg",
  "Abraham Maslow":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Photo_of_Abraham_Harold_Maslow_by_William_Carter_%28cropped%29.jpg/500px-Photo_of_Abraham_Harold_Maslow_by_William_Carter_%28cropped%29.jpg",
  "Gordon Allport":"https://upload.wikimedia.org/wikipedia/commons/9/97/Gordon_Allport.gif",

  /* --- Administration & Governance --- */
  "Max Weber":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Max_Weber%2C_1918.jpg/500px-Max_Weber%2C_1918.jpg",
  "Herbert A. Simon":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Herbert_Simon%2C_RIT_NandE_Vol13Num11_1981_Mar19_Complete.jpg/500px-Herbert_Simon%2C_RIT_NandE_Vol13Num11_1981_Mar19_Complete.jpg",
  "Woodrow Wilson":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/President_Woodrow_Wilson_Harris_%26_Ewing_%283x4_cropped_b%29.jpg/500px-President_Woodrow_Wilson_Harris_%26_Ewing_%283x4_cropped_b%29.jpg",
  "Peter Drucker":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Drucker5789.jpg/500px-Drucker5789.jpg",

  /* --- Global Humanist Voices --- */
  "Henry David Thoreau":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Benjamin_D._Maxham_-_Henry_David_Thoreau_-_Restored.jpg/500px-Benjamin_D._Maxham_-_Henry_David_Thoreau_-_Restored.jpg",
  "Leo Tolstoy":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Leo_Tolstoy_1908_Portrait_%283x4_cropped%29.jpg/500px-Leo_Tolstoy_1908_Portrait_%283x4_cropped%29.jpg",
  "Martin Luther King Jr.":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Martin_Luther_King%2C_Jr..jpg/500px-Martin_Luther_King%2C_Jr..jpg",
  "Nelson Mandela":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Nelson_Mandela_1994.jpg/500px-Nelson_Mandela_1994.jpg",
  "Albert Einstein":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Albert_Einstein_Head_cleaned.jpg/500px-Albert_Einstein_Head_cleaned.jpg",
  "Mother Teresa":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Mother_Teresa_1.jpg/500px-Mother_Teresa_1.jpg",
  "George Orwell":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/George_Orwell_press_photo.jpg/500px-George_Orwell_press_photo.jpg",
  "Malala Yousafzai":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Malala_Yousafzai_2023_portrait_2x3.jpg/500px-Malala_Yousafzai_2023_portrait_2x3.jpg",
  "Kahlil Gibran":"https://upload.wikimedia.org/wikipedia/commons/3/34/Kahlil_Gibran_1913.jpg"
};

/* Wikipedia has no freely-licensed photograph of these five, and Paul Appleby's
   only image is an unlabelled group photo. They show lettered monograms instead.
   Listing them here stops the app making a pointless lookup on every load. */
const PORTRAITS_NONE = [
  "Lawrence Kohlberg", "Leon Festinger", "Chester Barnard",
  "Douglas McGregor", "E. F. Schumacher", "Paul H. Appleby"
];
