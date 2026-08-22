/* =====================================================================
   MAJOR WORKS — 3–4 key texts per thinker.
   ---------------------------------------------------------------------
   t : title            y : year (or period)
   n : one-line note on why the work matters
   w : English Wikipedia page title, used to look up a cover image.
       Covers are only shown when Wikipedia holds a freely-licensed
       image; otherwise a printed title card is drawn instead.

   Several ancient figures wrote nothing themselves. Their entries list
   the texts that record or transmit the teaching, and say so.
   ===================================================================== */

const WORKS = {

/* ---------- Classical West ---------- */
"socrates":[
 {t:"Apology",y:"c. 399 BCE",n:"Plato's record of his trial defence; Socrates wrote nothing himself.",w:"Apology (Plato)"},
 {t:"Crito",y:"c. 399 BCE",n:"On why he refused to escape prison — obligation and the law.",w:"Crito"},
 {t:"Phaedo",y:"c. 380 BCE",n:"His final hours and argument on the soul.",w:"Phaedo"},
 {t:"Memorabilia",y:"c. 371 BCE",n:"Xenophon's independent memoir of his conversations.",w:"Memorabilia (Xenophon)"}],
"plato":[
 {t:"The Republic",y:"c. 375 BCE",n:"Justice, the tripartite soul, philosopher kings and the Cave.",w:"Republic (Plato)"},
 {t:"The Laws",y:"c. 348 BCE",n:"His late, more practical constitution for a second-best city.",w:"Laws (dialogue)"},
 {t:"Symposium",y:"c. 385 BCE",n:"On love and the ascent from beauty to the Good.",w:"Symposium (Plato)"},
 {t:"Gorgias",y:"c. 380 BCE",n:"Rhetoric against philosophy; whether it is worse to do or suffer wrong.",w:"Gorgias"}],
"aristotle":[
 {t:"Nicomachean Ethics",y:"c. 340 BCE",n:"Eudaimonia, virtue as habit, the mean and practical wisdom.",w:"Nicomachean Ethics"},
 {t:"Politics",y:"c. 335 BCE",n:"Man as a political animal; constitutions and distributive justice.",w:"Politics (Aristotle)"},
 {t:"Rhetoric",y:"c. 350 BCE",n:"Persuasion through ethos, pathos and logos.",w:"Rhetoric (Aristotle)"},
 {t:"Metaphysics",y:"c. 340 BCE",n:"Substance, causation and the study of being itself.",w:"Metaphysics (Aristotle)"}],
"epicurus":[
 {t:"Letter to Menoeceus",y:"c. 300 BCE",n:"The compact statement of his ethics and view of death.",w:"Letter to Menoeceus"},
 {t:"Principal Doctrines",y:"c. 300 BCE",n:"Forty maxims summarising the whole philosophy.",w:"Principal Doctrines"},
 {t:"Letter to Herodotus",y:"c. 300 BCE",n:"His atomist physics, the ground of his freedom from fear.",w:"Letter to Herodotus"}],
"marcus-aurelius":[
 {t:"Meditations",y:"c. 170–180 CE",n:"Private Stoic notes written on campaign; never meant for publication.",w:"Meditations"}],
"epictetus":[
 {t:"Discourses",y:"c. 108 CE",n:"Lectures recorded by his student Arrian; he wrote nothing himself.",w:"Discourses of Epictetus"},
 {t:"Enchiridion",y:"c. 125 CE",n:"The short handbook carried for centuries by soldiers and prisoners.",w:"Enchiridion of Epictetus"}],

/* ---------- Eastern Wisdom ---------- */
"buddha":[
 {t:"Dhammapada",y:"c. 3rd c. BCE",n:"423 verses of his teaching; the most widely read Buddhist text.",w:"Dhammapada"},
 {t:"Tripitaka (Pali Canon)",y:"c. 1st c. BCE",n:"The three baskets of discourse, discipline and doctrine.",w:"Pāli Canon"},
 {t:"Dhammacakkappavattana Sutta",y:"c. 5th c. BCE",n:"The first sermon at Sarnath, setting out the Four Noble Truths.",w:"Dhammacakkappavattana Sutta"}],
"mahavira":[
 {t:"Jain Agamas",y:"c. 5th c. BCE",n:"Canonical texts recording his teaching, compiled by disciples.",w:"Jain literature"},
 {t:"Acharanga Sutra",y:"c. 4th c. BCE",n:"The oldest Agama, on conduct and the practice of ahimsa.",w:"Acharanga Sutra"},
 {t:"Tattvartha Sutra",y:"c. 2nd c. CE",n:"Umaswati's systematisation, accepted across all Jain sects.",w:"Tattvartha Sutra"}],
"confucius":[
 {t:"The Analects",y:"c. 475–221 BCE",n:"Sayings compiled by disciples; he wrote no treatise himself.",w:"Analects"},
 {t:"Spring and Autumn Annals",y:"c. 5th c. BCE",n:"Chronicle traditionally attributed to his editing.",w:"Spring and Autumn Annals"},
 {t:"Book of Rites",y:"c. 3rd c. BCE",n:"On li — ritual, propriety and the forms of social conduct.",w:"Book of Rites"}],
"laozi":[
 {t:"Tao Te Ching",y:"c. 4th c. BCE",n:"Eighty-one short chapters; the foundation of Taoism.",w:"Tao Te Ching"}],

/* ---------- Indian Classical & Bhakti ---------- */
"kautilya":[
 {t:"Arthashastra",y:"c. 300 BCE",n:"Complete manual of statecraft, taxation, espionage and law; rediscovered 1905.",w:"Arthashastra"},
 {t:"Chanakya Niti",y:"c. 300 BCE",n:"Aphorisms on conduct, prudence and public life.",w:"Chanakya Niti"}],
"thiruvalluvar":[
 {t:"Thirukkural",y:"c. 4th–5th c. CE",n:"1,330 couplets on virtue, wealth and love; a secular ethical code.",w:"Tirukkuṟaḷ"}],
"shankara":[
 {t:"Brahma Sutra Bhashya",y:"c. 800 CE",n:"His central commentary establishing Advaita Vedanta.",w:"Brahma Sutras"},
 {t:"Vivekachudamani",y:"c. 800 CE",n:"The crest-jewel of discrimination between the real and unreal.",w:"Vivekachudamani"},
 {t:"Upadesasahasri",y:"c. 800 CE",n:"A thousand teachings — his only independent prose work.",w:"Upadesasahasri"},
 {t:"Bhaja Govindam",y:"c. 800 CE",n:"Short devotional hymn on the futility of mere learning.",w:"Bhaja Govindam"}],
"kabir":[
 {t:"Bijak",y:"c. 15th c.",n:"The principal collection of his verse, held by the Kabir Panth.",w:"Bijak"},
 {t:"Kabir Granthavali",y:"c. 15th c.",n:"Rajasthani compilation of his dohas and padas.",w:"Kabir"},
 {t:"Verses in the Guru Granth Sahib",y:"1604",n:"Over 500 of his compositions preserved in Sikh scripture.",w:"Guru Granth Sahib"}],
"guru-nanak":[
 {t:"Japji Sahib",y:"c. 1500",n:"The morning prayer opening the Guru Granth Sahib.",w:"Japji Sahib"},
 {t:"Asa di Var",y:"c. 1500",n:"Ballad attacking ritualism, caste and hypocrisy.",w:"Asa di Var"},
 {t:"Guru Granth Sahib",y:"1604",n:"Sikh scripture opening with his compositions.",w:"Guru Granth Sahib"}],
"basavanna":[
 {t:"Vachanas",y:"c. 1160",n:"Free-verse poems in Kannada; work as worship, caste rejected.",w:"Vachana sahitya"}],

/* ---------- Modern Western Political ---------- */
"machiavelli":[
 {t:"The Prince",y:"1532",n:"How a ruler acquires and keeps power; virtù against fortuna.",w:"The Prince"},
 {t:"Discourses on Livy",y:"1531",n:"His republican work, arguably closer to his real convictions.",w:"Discourses on Livy"},
 {t:"The Art of War",y:"1521",n:"On citizen militias against mercenary armies.",w:"The Art of War (Machiavelli)"},
 {t:"History of Florence",y:"1532",n:"Commissioned history of the city that exiled him.",w:"Florentine Histories"}],
"hobbes":[
 {t:"Leviathan",y:"1651",n:"State of nature, social contract and absolute sovereignty.",w:"Leviathan (Hobbes book)"},
 {t:"De Cive",y:"1642",n:"Earlier statement of his political theory.",w:"De Cive"},
 {t:"Behemoth",y:"1681",n:"His history of the English Civil War.",w:"Behemoth (book)"}],
"locke":[
 {t:"Two Treatises of Government",y:"1689",n:"Natural rights, consent and the right of revolution.",w:"Two Treatises of Government"},
 {t:"An Essay Concerning Human Understanding",y:"1689",n:"The mind as a blank slate written on by experience.",w:"An Essay Concerning Human Understanding"},
 {t:"A Letter Concerning Toleration",y:"1689",n:"Early argument for separating church from civil authority.",w:"A Letter Concerning Toleration"},
 {t:"Some Thoughts Concerning Education",y:"1693",n:"Character and habit over rote learning.",w:"Some Thoughts Concerning Education"}],
"rousseau":[
 {t:"The Social Contract",y:"1762",n:"Man born free; the general will and popular sovereignty.",w:"The Social Contract"},
 {t:"Émile, or On Education",y:"1762",n:"Child-centred education following the learner's nature.",w:"Emile, or On Education"},
 {t:"Discourse on Inequality",y:"1755",n:"Inequality as a social product rather than a natural fact.",w:"Discourse on Inequality"},
 {t:"Confessions",y:"1782",n:"The founding work of modern autobiography.",w:"Confessions (Rousseau)"}],
"montesquieu":[
 {t:"The Spirit of the Laws",y:"1748",n:"Separation of powers; laws suited to a people's conditions.",w:"The Spirit of Law"},
 {t:"Persian Letters",y:"1721",n:"Satire on French society seen through foreign eyes.",w:"Persian Letters"},
 {t:"Considerations on the Romans",y:"1734",n:"Why Rome rose and fell — an early sociology of empire.",w:"Considerations on the Causes of the Greatness of the Romans and their Decline"}],
"burke":[
 {t:"Reflections on the Revolution in France",y:"1790",n:"The founding text of modern conservatism.",w:"Reflections on the Revolution in France"},
 {t:"A Philosophical Enquiry into the Sublime and Beautiful",y:"1757",n:"His early work in aesthetics.",w:"A Philosophical Enquiry into the Origin of Our Ideas of the Sublime and Beautiful"},
 {t:"Speech to the Electors of Bristol",y:"1774",n:"A representative owes constituents his judgement, not obedience.",w:"Edmund Burke"},
 {t:"Speeches on the Impeachment of Warren Hastings",y:"1788–95",n:"His long prosecution of misrule in India.",w:"Impeachment of Warren Hastings"}],
"wollstonecraft":[
 {t:"A Vindication of the Rights of Woman",y:"1792",n:"The founding text of modern feminism.",w:"A Vindication of the Rights of Woman"},
 {t:"A Vindication of the Rights of Men",y:"1790",n:"Her reply to Burke, published before the more famous sequel.",w:"A Vindication of the Rights of Men"},
 {t:"Thoughts on the Education of Daughters",y:"1787",n:"Early argument for rigorous schooling for girls.",w:"Mary Wollstonecraft"}],
"kant":[
 {t:"Groundwork of the Metaphysics of Morals",y:"1785",n:"The categorical imperative and the formula of humanity.",w:"Groundwork of the Metaphysic of Morals"},
 {t:"Critique of Pure Reason",y:"1781",n:"The limits of what reason can know.",w:"Critique of Pure Reason"},
 {t:"Critique of Practical Reason",y:"1788",n:"Freedom, duty and the moral law within.",w:"Critique of Practical Reason"},
 {t:"Perpetual Peace",y:"1795",n:"A federation of republics; ancestor of the UN idea.",w:"Perpetual Peace: A Philosophical Sketch"}],
"bentham":[
 {t:"An Introduction to the Principles of Morals and Legislation",y:"1789",n:"The principle of utility and the felicific calculus.",w:"An Introduction to the Principles of Morals and Legislation"},
 {t:"A Fragment on Government",y:"1776",n:"His attack on Blackstone and defence of reform.",w:"A Fragment on Government"},
 {t:"Panopticon",y:"1791",n:"The prison design Foucault later made a metaphor for surveillance.",w:"Panopticon"},
 {t:"Anarchical Fallacies",y:"1796",n:"Natural rights dismissed as nonsense upon stilts.",w:"Anarchical Fallacies"}],
"mill":[
 {t:"On Liberty",y:"1859",n:"The harm principle and the tyranny of the majority.",w:"On Liberty"},
 {t:"Utilitarianism",y:"1863",n:"Higher and lower pleasures; utility refined by quality.",w:"Utilitarianism (book)"},
 {t:"The Subjection of Women",y:"1869",n:"Full legal and political equality for women.",w:"The Subjection of Women"},
 {t:"Considerations on Representative Government",y:"1861",n:"On representation, minorities and the franchise.",w:"Considerations on Representative Government"}],
"hegel":[
 {t:"Phenomenology of Spirit",y:"1807",n:"The dialectic and the master–slave struggle for recognition.",w:"The Phenomenology of Spirit"},
 {t:"Elements of the Philosophy of Right",y:"1820",n:"Ethical life, civil society and the state.",w:"Elements of the Philosophy of Right"},
 {t:"Science of Logic",y:"1812",n:"His systematic account of dialectical categories.",w:"Science of Logic"},
 {t:"Lectures on the Philosophy of History",y:"1837",n:"History as the progress of the consciousness of freedom.",w:"Lectures on the Philosophy of History"}],
"marx":[
 {t:"Das Kapital",y:"1867",n:"Surplus value, exploitation and the dynamics of capital.",w:"Das Kapital"},
 {t:"The Communist Manifesto",y:"1848",n:"Written with Engels; class struggle as the motor of history.",w:"The Communist Manifesto"},
 {t:"Economic and Philosophic Manuscripts",y:"1844",n:"The early work on alienated labour.",w:"Economic and Philosophic Manuscripts of 1844"},
 {t:"The German Ideology",y:"1846",n:"Historical materialism set out; base and superstructure.",w:"The German Ideology"}],
"nietzsche":[
 {t:"Thus Spoke Zarathustra",y:"1883",n:"The Übermensch, eternal recurrence and the death of God.",w:"Thus Spoke Zarathustra"},
 {t:"On the Genealogy of Morality",y:"1887",n:"Master and slave morality traced historically.",w:"On the Genealogy of Morality"},
 {t:"Beyond Good and Evil",y:"1886",n:"His attack on inherited moral categories.",w:"Beyond Good and Evil"},
 {t:"The Gay Science",y:"1882",n:"Where the death of God is first announced.",w:"The Gay Science"}],
"tocqueville":[
 {t:"Democracy in America",y:"1835 & 1840",n:"Associations, local government and the tyranny of the majority.",w:"Democracy in America"},
 {t:"The Old Regime and the Revolution",y:"1856",n:"Why revolution came when conditions were improving.",w:"The Old Regime and the Revolution"},
 {t:"Recollections",y:"1893",n:"His memoir of the 1848 revolution.",w:"Alexis de Tocqueville"}],

/* ---------- Contemporary & 20th Century ---------- */
"rawls":[
 {t:"A Theory of Justice",y:"1971",n:"The veil of ignorance and the difference principle.",w:"A Theory of Justice"},
 {t:"Political Liberalism",y:"1993",n:"Overlapping consensus in a society of deep disagreement.",w:"Political Liberalism"},
 {t:"The Law of Peoples",y:"1999",n:"Extending justice as fairness to international relations.",w:"The Law of Peoples"},
 {t:"Justice as Fairness: A Restatement",y:"2001",n:"His own late clarification of the theory.",w:"John Rawls"}],
"nozick":[
 {t:"Anarchy, State, and Utopia",y:"1974",n:"Entitlement theory, the minimal state and the reply to Rawls.",w:"Anarchy, State, and Utopia"},
 {t:"Philosophical Explanations",y:"1981",n:"Knowledge, free will and the meaning of life.",w:"Philosophical Explanations"},
 {t:"The Examined Life",y:"1989",n:"Accessible essays on love, death and value.",w:"Robert Nozick"}],
"amartya-sen":[
 {t:"Development as Freedom",y:"1999",n:"Freedom as both the end and the means of development.",w:"Development as Freedom"},
 {t:"Poverty and Famines",y:"1981",n:"Famine as entitlement failure rather than food shortage.",w:"Poverty and Famines"},
 {t:"The Idea of Justice",y:"2009",n:"Nyaya against niti; comparative rather than perfect justice.",w:"The Idea of Justice"},
 {t:"The Argumentative Indian",y:"2005",n:"India's long heritage of public reasoning and dissent.",w:"The Argumentative Indian"}],
"arendt":[
 {t:"Eichmann in Jerusalem",y:"1963",n:"The banality of evil, reported from the trial.",w:"Eichmann in Jerusalem"},
 {t:"The Origins of Totalitarianism",y:"1951",n:"Loneliness, propaganda and the right to have rights.",w:"The Origins of Totalitarianism"},
 {t:"The Human Condition",y:"1958",n:"Labour, work and action as three modes of human life.",w:"The Human Condition (Arendt book)"},
 {t:"On Revolution",y:"1963",n:"Comparing the American and French revolutions.",w:"On Revolution"}],
"berlin":[
 {t:"Two Concepts of Liberty",y:"1958",n:"Negative and positive liberty distinguished.",w:"Two Concepts of Liberty"},
 {t:"The Hedgehog and the Fox",y:"1953",n:"Two styles of thought, read through Tolstoy.",w:"The Hedgehog and the Fox"},
 {t:"Four Essays on Liberty",y:"1969",n:"The collection carrying his central political arguments.",w:"Isaiah Berlin"},
 {t:"The Crooked Timber of Humanity",y:"1990",n:"Value pluralism against utopian certainty.",w:"The Crooked Timber of Humanity"}],
"foucault":[
 {t:"Discipline and Punish",y:"1975",n:"Panopticism and the birth of the disciplinary society.",w:"Discipline and Punish"},
 {t:"Madness and Civilization",y:"1961",n:"How societies defined and confined unreason.",w:"Madness and Civilization"},
 {t:"The History of Sexuality",y:"1976",n:"Biopower and the management of populations.",w:"The History of Sexuality"},
 {t:"The Order of Things",y:"1966",n:"How the categories of knowledge are historically produced.",w:"The Order of Things"}],
"habermas":[
 {t:"The Structural Transformation of the Public Sphere",y:"1962",n:"The rise and capture of the space for public debate.",w:"The Structural Transformation of the Public Sphere"},
 {t:"The Theory of Communicative Action",y:"1981",n:"Reason reconstructed through undistorted communication.",w:"The Theory of Communicative Action"},
 {t:"Between Facts and Norms",y:"1992",n:"Deliberative democracy and the legitimacy of law.",w:"Between Facts and Norms"},
 {t:"Moral Consciousness and Communicative Action",y:"1983",n:"His discourse ethics stated directly.",w:"Jürgen Habermas"}],
"ostrom":[
 {t:"Governing the Commons",y:"1990",n:"Eight design principles refuting the tragedy of the commons.",w:"Governing the Commons"},
 {t:"Understanding Institutional Diversity",y:"2005",n:"Her framework for analysing rules in practice.",w:"Elinor Ostrom"},
 {t:"Rules, Games, and Common-Pool Resources",y:"1994",n:"Experimental and field evidence on shared resources.",w:"Elinor Ostrom"}],
"nussbaum":[
 {t:"Creating Capabilities",y:"2011",n:"The ten central capabilities set out for policy use.",w:"Creating Capabilities"},
 {t:"Women and Human Development",y:"2000",n:"The capability approach applied to gender justice in India.",w:"Martha Nussbaum"},
 {t:"Not for Profit",y:"2010",n:"Why cutting the humanities damages democratic citizenship.",w:"Not for Profit"},
 {t:"Upheavals of Thought",y:"2001",n:"Emotions as cognitive judgements about what matters.",w:"Martha Nussbaum"}],
"sartre":[
 {t:"Being and Nothingness",y:"1943",n:"Radical freedom, bad faith and the burden of choice.",w:"Being and Nothingness"},
 {t:"Existentialism Is a Humanism",y:"1946",n:"The accessible lecture: existence precedes essence.",w:"Existentialism Is a Humanism"},
 {t:"Nausea",y:"1938",n:"His novel of contingency and the absurd.",w:"Nausea (novel)"},
 {t:"Critique of Dialectical Reason",y:"1960",n:"His attempt to reconcile existentialism with Marxism.",w:"Critique of Dialectical Reason"}],
"camus":[
 {t:"The Myth of Sisyphus",y:"1942",n:"The absurd, and why one must imagine Sisyphus happy.",w:"The Myth of Sisyphus"},
 {t:"The Rebel",y:"1951",n:"Rebellion against injustice without revolutionary murder.",w:"The Rebel (book)"},
 {t:"The Plague",y:"1947",n:"Solidarity and decency under epidemic and occupation.",w:"The Plague (novel)"},
 {t:"The Stranger",y:"1942",n:"His novel of alienation and indifference.",w:"The Stranger (Camus novel)"}],
"beauvoir":[
 {t:"The Second Sex",y:"1949",n:"One is not born, but rather becomes, a woman.",w:"The Second Sex"},
 {t:"The Ethics of Ambiguity",y:"1947",n:"Freedom is meaningful only in willing the freedom of others.",w:"The Ethics of Ambiguity"},
 {t:"Memoirs of a Dutiful Daughter",y:"1958",n:"Her account of escaping a conventional upbringing.",w:"Memoirs of a Dutiful Daughter"},
 {t:"The Coming of Age",y:"1970",n:"On how societies treat the old.",w:"Simone de Beauvoir"}],
"fanon":[
 {t:"The Wretched of the Earth",y:"1961",n:"Decolonisation and the warning about a new native elite.",w:"The Wretched of the Earth"},
 {t:"Black Skin, White Masks",y:"1952",n:"The psychology of internalised colonial inferiority.",w:"Black Skin, White Masks"},
 {t:"A Dying Colonialism",y:"1959",n:"Social change during the Algerian revolution.",w:"A Dying Colonialism"}],
"freire":[
 {t:"Pedagogy of the Oppressed",y:"1968",n:"The banking model rejected; education as liberation.",w:"Pedagogy of the Oppressed"},
 {t:"Education for Critical Consciousness",y:"1974",n:"Conscientização and the literacy method explained.",w:"Paulo Freire"},
 {t:"Pedagogy of Hope",y:"1992",n:"His reflection on the earlier book after twenty years.",w:"Paulo Freire"}],
"schumacher":[
 {t:"Small Is Beautiful",y:"1973",n:"Economics as if people mattered; appropriate technology.",w:"Small Is Beautiful"},
 {t:"A Guide for the Perplexed",y:"1977",n:"His philosophical case against a purely material science.",w:"A Guide for the Perplexed"},
 {t:"Good Work",y:"1979",n:"Work as a source of meaning rather than only income.",w:"E. F. Schumacher"}],

/* ---------- Indian Renaissance & Freedom Movement ---------- */
"ram-mohan-roy":[
 {t:"Tuhfat-ul-Muwahhidin",y:"1804",n:"A gift to monotheists; his first rationalist critique of religion.",w:"Ram Mohan Roy"},
 {t:"Precepts of Jesus",y:"1820",n:"The moral teaching separated from miracle and dogma.",w:"Ram Mohan Roy"},
 {t:"Translations of the Upanishads",y:"1816–19",n:"Bengali and English versions arguing scriptural monotheism.",w:"Ram Mohan Roy"},
 {t:"Sambad Kaumudi",y:"1821",n:"His Bengali weekly campaigning against sati and for press freedom.",w:"Sambad Kaumudi"}],
"vivekananda":[
 {t:"Raja Yoga",y:"1896",n:"His exposition of meditative discipline for a modern audience.",w:"Raja Yoga (book)"},
 {t:"Karma Yoga",y:"1896",n:"Selfless work as a complete spiritual path.",w:"Swami Vivekananda"},
 {t:"Jnana Yoga",y:"1899",n:"Practical Vedanta: divinity present in every person.",w:"Swami Vivekananda"},
 {t:"Chicago Addresses",y:"1893",n:"The Parliament of Religions speeches on tolerance and acceptance.",w:"Swami Vivekananda"}],
"tagore":[
 {t:"Gitanjali",y:"1910",n:"The verse collection that won the Nobel Prize in 1913.",w:"Gitanjali"},
 {t:"Nationalism",y:"1917",n:"Lectures warning that the nation can become an idol.",w:"Nationalism (book)"},
 {t:"Gora",y:"1910",n:"His novel on identity, caste and belonging.",w:"Gora (novel)"},
 {t:"The Home and the World",y:"1916",n:"Swadeshi politics tested against personal conscience.",w:"The Home and the World"}],
"gandhi":[
 {t:"Hind Swaraj",y:"1909",n:"His foundational critique of modern civilisation and defence of swaraj.",w:"Hind Swaraj or Indian Home Rule"},
 {t:"The Story of My Experiments with Truth",y:"1927",n:"Autobiography treating his own life as a laboratory of truth.",w:"The Story of My Experiments with Truth"},
 {t:"Constructive Programme",y:"1941",n:"The village work that was to accompany resistance.",w:"Mahatma Gandhi"},
 {t:"Young India / Harijan",y:"1919–48",n:"His weekly journals, where most of his thought first appeared.",w:"Young India"}],
"ambedkar":[
 {t:"Annihilation of Caste",y:"1936",n:"The undelivered speech; caste cannot be reformed, only abolished.",w:"Annihilation of Caste"},
 {t:"The Problem of the Rupee",y:"1923",n:"His doctoral work, which shaped the design of the RBI.",w:"B. R. Ambedkar"},
 {t:"The Buddha and His Dhamma",y:"1957",n:"His reconstruction of Buddhism as a social ethic.",w:"The Buddha and His Dhamma"},
 {t:"States and Minorities",y:"1947",n:"His constitutional proposals, including state socialism.",w:"B. R. Ambedkar"}],
"nehru":[
 {t:"The Discovery of India",y:"1946",n:"India as a layered civilisation; written in Ahmednagar Fort prison.",w:"The Discovery of India"},
 {t:"Glimpses of World History",y:"1934",n:"Letters to his daughter narrating world history.",w:"Glimpses of World History"},
 {t:"An Autobiography",y:"1936",n:"Written in prison; the making of a nationalist.",w:"Jawaharlal Nehru"},
 {t:"Tryst with Destiny",y:"1947",n:"The independence address delivered at midnight.",w:"Tryst with Destiny"}],
"patel":[
 {t:"Sardar Patel's Correspondence",y:"1945–50",n:"The record of princely state integration, volume by volume.",w:"Vallabhbhai Patel"},
 {t:"Constituent Assembly Speeches",y:"1947–49",n:"His defence of the all-India services as a steel frame.",w:"Vallabhbhai Patel"},
 {t:"Speeches on National Integration",y:"1947–50",n:"The case for unity above regional and communal identity.",w:"Vallabhbhai Patel"}],
"aurobindo":[
 {t:"The Life Divine",y:"1940",n:"His central philosophical work on conscious evolution.",w:"The Life Divine"},
 {t:"The Synthesis of Yoga",y:"1948",n:"Integral yoga combining knowledge, devotion and works.",w:"The Synthesis of Yoga"},
 {t:"The Ideal of Human Unity",y:"1918",n:"World federation with diversity preserved within it.",w:"Sri Aurobindo"},
 {t:"Savitri",y:"1950",n:"His epic poem, the longest in English.",w:"Savitri (poem)"}],
"tilak":[
 {t:"Gita Rahasya",y:"1915",n:"Written in Mandalay prison; the Gita read as a gospel of action.",w:"Gita Rahasya"},
 {t:"The Arctic Home in the Vedas",y:"1903",n:"His controversial thesis on Vedic origins.",w:"The Arctic Home in the Vedas"},
 {t:"The Orion",y:"1893",n:"Dating the Vedas through astronomical evidence.",w:"Bal Gangadhar Tilak"},
 {t:"Kesari and Maratha",y:"1881–1920",n:"The newspapers that carried his nationalist campaign.",w:"Kesari (newspaper)"}],
"gokhale":[
 {t:"Speeches of Gopal Krishna Gokhale",y:"1908",n:"The budget speeches that set a standard for evidence-based criticism.",w:"Gopal Krishna Gokhale"},
 {t:"Elementary Education Bill",y:"1911",n:"His demand for free and compulsory primary education.",w:"Gopal Krishna Gokhale"},
 {t:"Servants of India Society Constitution",y:"1905",n:"The charter binding members to a life of service.",w:"Servants of India Society"}],
"bose":[
 {t:"The Indian Struggle",y:"1935",n:"His history and critique of the national movement.",w:"The Indian Struggle"},
 {t:"An Indian Pilgrim",y:"1948",n:"Unfinished autobiography of his early years.",w:"Subhas Chandra Bose"},
 {t:"Azad Hind Radio Broadcasts",y:"1942–45",n:"The wartime addresses, including Give me blood.",w:"Azad Hind Radio"}],
"azad":[
 {t:"India Wins Freedom",y:"1959",n:"His account of partition and the negotiations preceding it.",w:"India Wins Freedom"},
 {t:"Ghubar-e-Khatir",y:"1946",n:"Letters written in Ahmednagar Fort; a literary classic in Urdu.",w:"Ghubar-e-Khatir"},
 {t:"Tarjuman-ul-Quran",y:"1931",n:"His commentary on the Quran arguing for religious universality.",w:"Abul Kalam Azad"},
 {t:"Al-Hilal",y:"1912",n:"The journal that made him a national voice at twenty-four.",w:"Al-Hilal (newspaper)"}],
"mn-roy":[
 {t:"Reason, Romanticism and Revolution",y:"1952",n:"His mature statement of radical humanism.",w:"M. N. Roy"},
 {t:"India in Transition",y:"1922",n:"The first Marxist analysis of Indian society.",w:"M. N. Roy"},
 {t:"New Humanism: A Manifesto",y:"1947",n:"Twenty-two theses on party-less democracy and the individual.",w:"Radical humanism"},
 {t:"Memoirs",y:"1964",n:"His account of the Comintern years and the break with it.",w:"M. N. Roy"}],
"vinoba":[
 {t:"Talks on the Gita",y:"1932",n:"Delivered to fellow prisoners in Dhulia jail.",w:"Vinoba Bhave"},
 {t:"Bhoodan Yagna",y:"1953",n:"The land-gift movement explained in his own words.",w:"Bhoodan movement"},
 {t:"Swaraj Shastra",y:"1945",n:"His theory of decentralised, self-governing village democracy.",w:"Vinoba Bhave"}],
"jp-narayan":[
 {t:"Total Revolution",y:"1975",n:"Sampoorna kranti across seven spheres of national life.",w:"Jayaprakash Narayan"},
 {t:"A Plea for Reconstruction of Indian Polity",y:"1959",n:"His case for party-less, participatory democracy.",w:"Jayaprakash Narayan"},
 {t:"Prison Diary",y:"1977",n:"Written during his detention in the Emergency.",w:"Jayaprakash Narayan"},
 {t:"Why Socialism?",y:"1936",n:"The early Marxist phase of his thought.",w:"Jayaprakash Narayan"}],
"lohia":[
 {t:"Marx, Gandhi and Socialism",y:"1963",n:"His argument for an Indian socialism attacking caste.",w:"Ram Manohar Lohia"},
 {t:"The Caste System",y:"1964",n:"Caste as the central obstacle to Indian equality.",w:"Ram Manohar Lohia"},
 {t:"Wheel of History",y:"1955",n:"His alternative theory of historical change.",w:"Ram Manohar Lohia"},
 {t:"Guilty Men of India's Partition",y:"1960",n:"His unsparing assessment of the leadership.",w:"Ram Manohar Lohia"}],
"deendayal":[
 {t:"Integral Humanism",y:"1965",n:"Four lectures proposing development of body, mind, intellect and soul.",w:"Integral humanism (India)"},
 {t:"Political Diary",y:"1968",n:"Collected commentary on Indian politics and policy.",w:"Deendayal Upadhyaya"},
 {t:"Rashtra Jeevan Ki Disha",y:"1971",n:"On the cultural direction of national life.",w:"Deendayal Upadhyaya"},
 {t:"The Two Plans",y:"1958",n:"His critique of Nehruvian planning and a swadeshi alternative.",w:"Deendayal Upadhyaya"}],
"kalam":[
 {t:"Wings of Fire",y:"1999",n:"Autobiography from Rameswaram to the missile programme.",w:"Wings of Fire (autobiography)"},
 {t:"India 2020",y:"1998",n:"A roadmap for developed status through technology and education.",w:"India 2020"},
 {t:"Ignited Minds",y:"2002",n:"His address to the young as the nation's real resource.",w:"Ignited Minds"},
 {t:"The Turning Points",y:"2012",n:"Reflections on his presidency and its dilemmas.",w:"A. P. J. Abdul Kalam"}],

/* ---------- Social Justice & Reform ---------- */
"jyotirao-phule":[
 {t:"Gulamgiri (Slavery)",y:"1873",n:"Caste compared to American slavery; dedicated to the abolitionists.",w:"Gulamgiri"},
 {t:"Shetkaryacha Asud",y:"1881",n:"The cultivator's whipcord — on the exploitation of the peasant.",w:"Jyotirao Phule"},
 {t:"Sarvajanik Satya Dharma Pustak",y:"1891",n:"His universal religion of truth, published posthumously.",w:"Jyotirao Phule"},
 {t:"Tritiya Ratna",y:"1855",n:"A play exposing priestly exploitation of the illiterate.",w:"Jyotirao Phule"}],
"savitribai-phule":[
 {t:"Kavya Phule",y:"1854",n:"Poems urging women to get education and become self-reliant.",w:"Savitribai Phule"},
 {t:"Bavan Kashi Subodh Ratnakar",y:"1892",n:"Verse biography of Jyotirao and the reform movement.",w:"Savitribai Phule"},
 {t:"Letters to Jyotirao",y:"1856–68",n:"Correspondence recording the daily cost of running the schools.",w:"Savitribai Phule"}],
"periyar":[
 {t:"Why Were Women Enslaved?",y:"1942",n:"His case for divorce, property and contraceptive rights.",w:"Periyar E. V. Ramasamy"},
 {t:"The Ramayana: A True Reading",y:"1944",n:"His controversial rationalist rereading of the epic.",w:"Periyar E. V. Ramasamy"},
 {t:"Kudi Arasu",y:"1925",n:"The Tamil weekly that carried the Self-Respect Movement.",w:"Kudi Arasu"},
 {t:"Thoughts of Periyar",y:"1960s",n:"Collected writings on caste, religion and self-respect.",w:"Periyar E. V. Ramasamy"}],
"narayana-guru":[
 {t:"Atmopadesa Satakam",y:"1897",n:"One hundred verses of self-instruction; his central work.",w:"Narayana Guru"},
 {t:"Daiva Dasakam",y:"1914",n:"A ten-verse universal prayer used in schools across Kerala.",w:"Daiva Dasakam"},
 {t:"Jati Mimamsa",y:"1914",n:"A critique of caste: one caste, one religion, one God.",w:"Narayana Guru"},
 {t:"Jati Nirnayam",y:"1914",n:"Humanity as the only real caste.",w:"Narayana Guru"}],
"pandita-ramabai":[
 {t:"The High Caste Hindu Woman",y:"1887",n:"Exposed the condition of widows to an international readership.",w:"Pandita Ramabai"},
 {t:"Stri Dharma Niti",y:"1882",n:"Morals for women — her first book, written to fund her travels.",w:"Pandita Ramabai"},
 {t:"A Testimony",y:"1907",n:"Her account of conversion and the Mukti Mission.",w:"Pandita Ramabai"},
 {t:"Marathi Bible translation",y:"1924",n:"Translated from the original languages over many years.",w:"Pandita Ramabai"}],
"vidyasagar":[
 {t:"Barnaparichay",y:"1855",n:"The primer that reshaped Bengali literacy; still in use.",w:"Barnaparichay"},
 {t:"Marriage of Hindu Widows",y:"1855",n:"The scriptural case that produced the 1856 Act.",w:"Ishwar Chandra Vidyasagar"},
 {t:"Bahubivaha",y:"1871",n:"His campaign against Kulin polygamy.",w:"Ishwar Chandra Vidyasagar"},
 {t:"Betal Panchabinsati",y:"1847",n:"Early Bengali prose that helped standardise the language.",w:"Ishwar Chandra Vidyasagar"}],

/* ---------- Moral Psychology & Human Values ---------- */
"kohlberg":[
 {t:"Essays on Moral Development, Vol. I",y:"1981",n:"The philosophy of moral development and the six stages.",w:"Lawrence Kohlberg"},
 {t:"Essays on Moral Development, Vol. II",y:"1984",n:"The psychology of moral development and its evidence.",w:"Lawrence Kohlberg's stages of moral development"},
 {t:"The Development of Modes of Moral Thinking",y:"1958",n:"His doctoral thesis, where the stage theory begins.",w:"Lawrence Kohlberg"}],
"gilligan":[
 {t:"In a Different Voice",y:"1982",n:"The ethic of care set against Kohlberg's justice scale.",w:"In a Different Voice"},
 {t:"Meeting at the Crossroads",y:"1992",n:"On adolescent girls and the loss of voice.",w:"Carol Gilligan"},
 {t:"The Birth of Pleasure",y:"2002",n:"Love, patriarchy and psychological development.",w:"Carol Gilligan"}],
"goleman":[
 {t:"Emotional Intelligence",y:"1995",n:"The book that carried EI from psychology into management.",w:"Emotional Intelligence (book)"},
 {t:"Working with Emotional Intelligence",y:"1998",n:"The five competencies applied to the workplace.",w:"Daniel Goleman"},
 {t:"Primal Leadership",y:"2002",n:"Resonant leadership and the emotional climate of teams.",w:"Daniel Goleman"},
 {t:"Focus",y:"2013",n:"Attention as the hidden driver of excellence.",w:"Daniel Goleman"}],
"maslow":[
 {t:"Motivation and Personality",y:"1954",n:"The hierarchy of needs set out in full.",w:"Motivation and Personality"},
 {t:"Toward a Psychology of Being",y:"1962",n:"Self-actualisation and peak experience.",w:"Toward a Psychology of Being"},
 {t:"A Theory of Human Motivation",y:"1943",n:"The original paper introducing the hierarchy.",w:"Maslow's hierarchy of needs"}],
"allport":[
 {t:"The Nature of Prejudice",y:"1954",n:"Prejudice as ordinary categorisation misapplied; the contact hypothesis.",w:"The Nature of Prejudice"},
 {t:"Personality: A Psychological Interpretation",y:"1937",n:"The book that founded personality psychology.",w:"Gordon Allport"},
 {t:"Becoming",y:"1955",n:"On personality as continuous formation rather than fixed type.",w:"Gordon Allport"}],
"festinger":[
 {t:"A Theory of Cognitive Dissonance",y:"1957",n:"The theory stated in full.",w:"Cognitive dissonance"},
 {t:"When Prophecy Fails",y:"1956",n:"The doomsday cult study that produced the theory.",w:"When Prophecy Fails"},
 {t:"Social Pressures in Informal Groups",y:"1950",n:"How proximity and interaction shape opinion.",w:"Leon Festinger"}],

/* ---------- Administration & Governance ---------- */
"weber":[
 {t:"Economy and Society",y:"1922",n:"The three types of authority and the model of bureaucracy.",w:"Economy and Society"},
 {t:"The Protestant Ethic and the Spirit of Capitalism",y:"1905",n:"How religious values shaped economic behaviour.",w:"The Protestant Ethic and the Spirit of Capitalism"},
 {t:"Politics as a Vocation",y:"1919",n:"Ethic of conviction against ethic of responsibility.",w:"Politics as a Vocation"},
 {t:"Science as a Vocation",y:"1917",n:"On disenchantment and the limits of scholarship.",w:"Science as a Vocation"}],
"barnard":[
 {t:"The Functions of the Executive",y:"1938",n:"Acceptance theory of authority and the zone of indifference.",w:"The Functions of the Executive"},
 {t:"Organization and Management",y:"1948",n:"Essays extending his theory of cooperative systems.",w:"Chester Barnard"}],
"simon":[
 {t:"Administrative Behavior",y:"1947",n:"Bounded rationality, satisficing and the fact–value distinction.",w:"Administrative Behavior"},
 {t:"The Sciences of the Artificial",y:"1969",n:"Design as a science; foundational for AI and systems thinking.",w:"The Sciences of the Artificial"},
 {t:"Models of Man",y:"1957",n:"The formal account of bounded rationality.",w:"Herbert A. Simon"},
 {t:"The Proverbs of Administration",y:"1946",n:"His demolition of classical administrative principles.",w:"Herbert A. Simon"}],
"appleby":[
 {t:"Big Democracy",y:"1945",n:"His central claim that government is different from business.",w:"Paul H. Appleby"},
 {t:"Policy and Administration",y:"1949",n:"Rejecting the strict politics–administration dichotomy.",w:"Paul H. Appleby"},
 {t:"Public Administration in India: Report of a Survey",y:"1953",n:"The report that led to the founding of the IIPA.",w:"Indian Institute of Public Administration"},
 {t:"Re-examination of India's Administrative System",y:"1956",n:"His second report on centralisation and distrust of subordinates.",w:"Paul H. Appleby"}],
"woodrow-wilson":[
 {t:"The Study of Administration",y:"1887",n:"The essay that founded public administration as a discipline.",w:"The Study of Administration"},
 {t:"Congressional Government",y:"1885",n:"His critique of committee dominance in the US Congress.",w:"Congressional Government"},
 {t:"The State",y:"1889",n:"Comparative study of governments and their institutions.",w:"Woodrow Wilson"},
 {t:"The Fourteen Points",y:"1918",n:"His programme for post-war order and the League of Nations.",w:"Fourteen Points"}],
"drucker":[
 {t:"The Practice of Management",y:"1954",n:"Where management by objectives is introduced.",w:"The Practice of Management"},
 {t:"The Effective Executive",y:"1966",n:"Effectiveness as a learnable discipline.",w:"The Effective Executive"},
 {t:"Concept of the Corporation",y:"1946",n:"The General Motors study that created management as a field.",w:"Concept of the Corporation"},
 {t:"Management: Tasks, Responsibilities, Practices",y:"1973",n:"His comprehensive statement of the discipline.",w:"Peter Drucker"}],
"mcgregor":[
 {t:"The Human Side of Enterprise",y:"1960",n:"Theory X and Theory Y, and the self-fulfilling assumption.",w:"The Human Side of Enterprise"},
 {t:"The Professional Manager",y:"1967",n:"Published posthumously; managerial roles and team development.",w:"Douglas McGregor"}],

/* ---------- Global Humanist Voices ---------- */
"thoreau":[
 {t:"Civil Disobedience",y:"1849",n:"Conscience above law; read by Gandhi and King.",w:"Civil Disobedience (Thoreau)"},
 {t:"Walden",y:"1854",n:"Two years at the pond; the case for deliberate, simple living.",w:"Walden"},
 {t:"Slavery in Massachusetts",y:"1854",n:"His fiercest anti-slavery address.",w:"Slavery in Massachusetts"},
 {t:"A Week on the Concord and Merrimack Rivers",y:"1849",n:"His first book, on nature and reflection.",w:"A Week on the Concord and Merrimack Rivers"}],
"tolstoy":[
 {t:"The Kingdom of God Is Within You",y:"1894",n:"Non-resistance to evil by force; it transformed Gandhi.",w:"The Kingdom of God Is Within You"},
 {t:"War and Peace",y:"1869",n:"His epic on history, freedom and the limits of great men.",w:"War and Peace"},
 {t:"Anna Karenina",y:"1878",n:"Moral choice and consequence in Russian society.",w:"Anna Karenina"},
 {t:"A Letter to a Hindu",y:"1908",n:"Indians hold themselves in subjection by cooperating.",w:"A Letter to a Hindu"}],
"mlk":[
 {t:"Letter from Birmingham Jail",y:"1963",n:"The classic modern defence of civil disobedience.",w:"Letter from Birmingham Jail"},
 {t:"Stride Toward Freedom",y:"1958",n:"The Montgomery boycott and his discovery of Gandhi.",w:"Stride Toward Freedom"},
 {t:"Where Do We Go from Here",y:"1967",n:"His late turn to economic justice.",w:"Where Do We Go from Here: Chaos or Community?"},
 {t:"I Have a Dream",y:"1963",n:"The address at the March on Washington.",w:"I Have a Dream"}],
"mandela":[
 {t:"Long Walk to Freedom",y:"1994",n:"Autobiography from Robben Island to the presidency.",w:"Long Walk to Freedom"},
 {t:"I Am Prepared to Die",y:"1964",n:"The Rivonia Trial statement from the dock.",w:"I Am Prepared to Die"},
 {t:"Conversations with Myself",y:"2010",n:"Notebooks and letters written during imprisonment.",w:"Conversations with Myself"},
 {t:"No Easy Walk to Freedom",y:"1965",n:"Early speeches and articles of the struggle.",w:"Nelson Mandela"}],
"einstein":[
 {t:"Relativity: The Special and General Theory",y:"1916",n:"His own popular exposition for general readers.",w:"Relativity: The Special and the General Theory"},
 {t:"The World As I See It",y:"1934",n:"Essays on pacifism, education and social responsibility.",w:"The World as I See It (book)"},
 {t:"Out of My Later Years",y:"1950",n:"Later reflections on science, ethics and disarmament.",w:"Albert Einstein"},
 {t:"Russell–Einstein Manifesto",y:"1955",n:"Signed days before his death; remember your humanity.",w:"Russell–Einstein Manifesto"}],
"mother-teresa":[
 {t:"A Simple Path",y:"1995",n:"Her method of prayer, service and silence.",w:"Mother Teresa"},
 {t:"No Greater Love",y:"1997",n:"Collected teachings on love, poverty and forgiveness.",w:"Mother Teresa"},
 {t:"Come Be My Light",y:"2007",n:"Private letters revealing decades of spiritual doubt.",w:"Mother Teresa"},
 {t:"Nobel Lecture",y:"1979",n:"The address naming loneliness as the deepest poverty.",w:"Mother Teresa"}],
"orwell":[
 {t:"Nineteen Eighty-Four",y:"1949",n:"Big Brother, doublethink and Newspeak.",w:"Nineteen Eighty-Four"},
 {t:"Animal Farm",y:"1945",n:"Revolution betrayed; some animals are more equal than others.",w:"Animal Farm"},
 {t:"Politics and the English Language",y:"1946",n:"How vague language corrupts thought and conceals atrocity.",w:"Politics and the English Language"},
 {t:"Homage to Catalonia",y:"1938",n:"His account of the Spanish Civil War and its betrayals.",w:"Homage to Catalonia"}],
"malala":[
 {t:"I Am Malala",y:"2013",n:"Her memoir of Swat, the Taliban and the shooting.",w:"I Am Malala"},
 {t:"We Are Displaced",y:"2019",n:"Stories of refugee girls she met around the world.",w:"Malala Yousafzai"},
 {t:"Nobel Lecture",y:"2014",n:"Delivered at seventeen: one child, one teacher, one book, one pen.",w:"Malala Yousafzai"},
 {t:"Gul Makai Diary (BBC Urdu)",y:"2009",n:"The anonymous blog written at eleven under a pen name.",w:"Malala Yousafzai"}],
"gibran":[
 {t:"The Prophet",y:"1923",n:"Counsel on love, work, children and giving; never out of print.",w:"The Prophet (book)"},
 {t:"Broken Wings",y:"1912",n:"His Arabic novel of thwarted love and social constraint.",w:"Broken Wings (novel)"},
 {t:"Sand and Foam",y:"1926",n:"Aphorisms in the same cadence as The Prophet.",w:"Kahlil Gibran"},
 {t:"The Madman",y:"1918",n:"His first English book, of parables and poems.",w:"The Madman (book)"}]

};
