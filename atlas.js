/* ================= HUMAN THOUGHT ATLAS =================
   Stories, thought experiments, paradoxes and models, each told in the same
   eleven parts. ATLAS is the contents in reading order; ATLAS_ENTRIES holds
   the text of each entry, keyed by the same id. */

const ATLAS_SECTIONS = [{"id": "existence", "t": "Existence, mortality & the good life"}, {"id": "knowledge", "t": "Knowledge, reality & identity"}, {"id": "morality", "t": "Morality & ethical choice"}, {"id": "politics", "t": "Politics, power & society"}, {"id": "economics", "t": "Economics, institutions & incentives"}, {"id": "science", "t": "Science, uncertainty & systems"}, {"id": "psychology", "t": "Psychology, perception & behaviour"}, {"id": "strategy", "t": "Strategy, conflict & coordination"}, {"id": "traditions", "t": "Indian, Asian & comparative traditions"}, {"id": "literature", "t": "Literature, myth & civilization as conceptual laboratories"}];

const ATLAS_THEMES = {"freedom": "Freedom", "death": "Death", "justice": "Justice", "power": "Power", "incentives": "Incentives", "uncertainty": "Uncertainty", "identity": "Identity", "knowledge": "Knowledge", "cooperation": "Cooperation", "unintended": "Unintended consequences"};

const ATLAS_FORMS = {"te": "Thought experiment", "parable": "Parable & fable", "myth": "Myth & allegory", "dialogue": "Dialogue", "paradox": "Paradox & puzzle", "metaphor": "Metaphor & analogy", "model": "Model & principle", "experiment": "Experiment & finding", "anecdote": "Anecdote", "literary": "Literary narrative", "concept": "Concept & framework"};

const ATLAS_TRADITIONS = {"indian": "Indian", "chinese": "Chinese", "greek": "Greek & Roman", "western": "Modern Western", "scripture": "Biblical", "sufi": "Sufi & folk", "science": "Modern science & social science"};

const ATLAS = [
  {"id": "nachiketa", "t": "Nachiketa and Yama", "src": "Katha Upanishad", "form": "Dialogue", "fg": "dialogue", "tr": "indian", "q": "Mortality; desire; knowledge vs pleasure", "sec": "existence", "th": ["death", "knowledge", "freedom"]},
  {"id": "er", "t": "Myth of Er", "src": "Plato, Republic", "form": "Myth", "fg": "myth", "tr": "greek", "q": "Justice; soul; consequences of choice", "sec": "existence", "th": ["justice", "death", "freedom"]},
  {"id": "sisyphus", "t": "Myth of Sisyphus", "src": "Greek myth / Camus", "form": "Myth + philosophical essay", "fg": "myth", "tr": "western", "q": "Absurdity; meaning; repetition", "sec": "existence", "th": ["death", "freedom"]},
  {"id": "ilyich", "t": "The Death of Ivan Ilyich", "src": "Tolstoy", "form": "Literary narrative", "fg": "literary", "tr": "western", "q": "Authenticity; mortality; social conformity", "sec": "existence", "th": ["death", "identity"]},
  {"id": "inquisitor", "t": "The Grand Inquisitor", "src": "Dostoevsky, The Brothers Karamazov", "form": "Parable within novel", "fg": "literary", "tr": "western", "q": "Freedom; security; authority", "sec": "existence", "th": ["freedom", "power"]},
  {"id": "faust", "t": "Faust", "src": "Goethe / Faust tradition", "form": "Legend", "fg": "myth", "tr": "western", "q": "Ambition; knowledge; desire; limits", "sec": "existence", "th": ["knowledge", "freedom", "unintended"]},
  {"id": "ecclesiastes", "t": "Ecclesiastes", "src": "Hebrew Bible", "form": "Wisdom literature", "fg": "literary", "tr": "scripture", "q": "Futility; time; mortality", "sec": "existence", "th": ["death"]},
  {"id": "epicurus", "t": "Epicurus on death", "src": "Epicurean philosophy", "form": "Argument", "fg": "concept", "tr": "greek", "q": "Why fear death?", "sec": "existence", "th": ["death"]},
  {"id": "cave", "t": "Allegory of the Cave", "src": "Plato, Republic", "form": "Allegory", "fg": "myth", "tr": "greek", "q": "Appearance vs reality; education; ideology", "sec": "knowledge", "th": ["knowledge", "power"]},
  {"id": "dream", "t": "Dream Argument", "src": "Descartes, Meditations", "form": "Thought experiment", "fg": "te", "tr": "western", "q": "Can experience establish reality?", "sec": "knowledge", "th": ["knowledge", "uncertainty"]},
  {"id": "demon", "t": "Evil Demon", "src": "Descartes", "form": "Thought experiment", "fg": "te", "tr": "western", "q": "Radical doubt", "sec": "knowledge", "th": ["knowledge", "uncertainty"]},
  {"id": "vat", "t": "Brain in a Vat", "src": "Modern analytic philosophy", "form": "Thought experiment", "fg": "te", "tr": "western", "q": "Knowledge of the external world", "sec": "knowledge", "th": ["knowledge", "identity"]},
  {"id": "theseus", "t": "Ship of Theseus", "src": "Ancient Greek tradition", "form": "Paradox", "fg": "paradox", "tr": "greek", "q": "Identity through change", "sec": "knowledge", "th": ["identity"]},
  {"id": "zeno", "t": "Zeno's Dichotomy", "src": "Zeno of Elea", "form": "Paradox", "fg": "paradox", "tr": "greek", "q": "Infinity; motion", "sec": "knowledge", "th": ["knowledge"]},
  {"id": "meno", "t": "Meno's Slave", "src": "Plato, Meno", "form": "Dialogue / demonstration", "fg": "dialogue", "tr": "greek", "q": "Learning; knowledge", "sec": "knowledge", "th": ["knowledge"]},
  {"id": "gettier", "t": "Gettier Case", "src": "Edmund Gettier", "form": "Thought experiment", "fg": "te", "tr": "western", "q": "Knowledge vs justified true belief", "sec": "knowledge", "th": ["knowledge", "uncertainty"]},
  {"id": "butterflydream", "t": "Zhuangzi's Butterfly Dream", "src": "Zhuangzi", "form": "Parable / dream", "fg": "parable", "tr": "chinese", "q": "Reality; perspective; self", "sec": "knowledge", "th": ["identity", "knowledge"]},
  {"id": "boltzmann", "t": "Boltzmann Brain", "src": "Statistical physics", "form": "Thought experiment", "fg": "te", "tr": "science", "q": "Observation; cosmology; epistemic uncertainty", "sec": "knowledge", "th": ["uncertainty", "knowledge"]},
  {"id": "gyges", "t": "Ring of Gyges", "src": "Plato, Republic", "form": "Thought experiment / myth", "fg": "te", "tr": "greek", "q": "Morality without consequences", "sec": "morality", "th": ["justice", "power"]},
  {"id": "trolley", "t": "Trolley Problem", "src": "Philippa Foot / Judith Jarvis Thomson", "form": "Thought experiment", "fg": "te", "tr": "western", "q": "Consequentialism vs deontology", "sec": "morality", "th": ["justice"]},
  {"id": "experience", "t": "Experience Machine", "src": "Robert Nozick", "form": "Thought experiment", "fg": "te", "tr": "western", "q": "Pleasure vs authentic life", "sec": "morality", "th": ["freedom", "identity"]},
  {"id": "veil", "t": "Veil of Ignorance", "src": "John Rawls", "form": "Thought experiment", "fg": "te", "tr": "western", "q": "Justice under impartiality", "sec": "morality", "th": ["justice"]},
  {"id": "heinz", "t": "Heinz Dilemma", "src": "Lawrence Kohlberg", "form": "Moral scenario", "fg": "te", "tr": "western", "q": "Moral reasoning and development", "sec": "morality", "th": ["justice"]},
  {"id": "arrow", "t": "The Poisoned Arrow", "src": "Buddhist canon", "form": "Parable", "fg": "parable", "tr": "indian", "q": "Practical wisdom vs metaphysical distraction", "sec": "morality", "th": ["knowledge", "uncertainty"]},
  {"id": "kisagotami", "t": "Kisa Gotami and the Mustard Seed", "src": "Buddhist tradition", "form": "Parable", "fg": "parable", "tr": "indian", "q": "Grief; universality of death", "sec": "morality", "th": ["death"]},
  {"id": "omelas", "t": "The Ones Who Walk Away from Omelas", "src": "Ursula K. Le Guin", "form": "Short story", "fg": "literary", "tr": "western", "q": "Collective welfare vs individual suffering", "sec": "morality", "th": ["justice", "cooperation"]},
  {"id": "samaritan", "t": "The Good Samaritan", "src": "Gospel of Luke", "form": "Parable", "fg": "parable", "tr": "scripture", "q": "Moral obligation; otherness", "sec": "morality", "th": ["cooperation", "justice"]},
  {"id": "statenature", "t": "State of Nature", "src": "Hobbes, Locke, Rousseau", "form": "Conceptual model", "fg": "model", "tr": "western", "q": "Political authority and legitimacy", "sec": "politics", "th": ["power", "freedom", "cooperation"]},
  {"id": "noblelie", "t": "Noble Lie", "src": "Plato, Republic", "form": "Political myth", "fg": "myth", "tr": "greek", "q": "Social cohesion; ideology", "sec": "politics", "th": ["power", "knowledge"]},
  {"id": "panopticon", "t": "Panopticon", "src": "Bentham / Foucault", "form": "Architectural metaphor", "fg": "metaphor", "tr": "western", "q": "Surveillance; discipline; power", "sec": "politics", "th": ["power", "freedom"]},
  {"id": "generalwill", "t": "General Will", "src": "Rousseau", "form": "Conceptual model", "fg": "concept", "tr": "western", "q": "Collective sovereignty", "sec": "politics", "th": ["freedom", "power"]},
  {"id": "securitydilemma", "t": "Security Dilemma", "src": "International relations", "form": "Conceptual model", "fg": "model", "tr": "science", "q": "Defensive actions producing insecurity", "sec": "politics", "th": ["cooperation", "unintended", "power"]},
  {"id": "collectiveaction", "t": "Collective Action Problem", "src": "Mancur Olson", "form": "Conceptual model", "fg": "model", "tr": "science", "q": "Why groups fail to pursue common interests", "sec": "politics", "th": ["cooperation", "incentives"]},
  {"id": "freerider", "t": "Free Rider Problem", "src": "Public economics", "form": "Conceptual model", "fg": "model", "tr": "science", "q": "Benefits without contribution", "sec": "politics", "th": ["cooperation", "incentives"]},
  {"id": "commons", "t": "Tragedy of the Commons", "src": "Hardin / commons literature", "form": "Metaphor / model", "fg": "model", "tr": "science", "q": "Individual incentives vs shared resources", "sec": "politics", "th": ["cooperation", "incentives", "justice"]},
  {"id": "dictator", "t": "Dictator's Dilemma", "src": "Political science", "form": "Strategic model", "fg": "model", "tr": "science", "q": "Information and authoritarian stability", "sec": "politics", "th": ["power", "knowledge"]},
  {"id": "tacitus", "t": "The Sword of Damocles", "src": "Cicero, Tusculan Disputations", "form": "Historical anecdote", "fg": "anecdote", "tr": "greek", "q": "Power, fear and political judgment", "sec": "politics", "th": ["power", "uncertainty"]},
  {"id": "gadfly", "t": "Socrates' Gadfly", "src": "Plato, Apology", "form": "Historical anecdote", "fg": "anecdote", "tr": "greek", "q": "Dissent; examination; civic responsibility", "sec": "politics", "th": ["power", "freedom"]},
  {"id": "invisiblehand", "t": "Invisible Hand", "src": "Adam Smith", "form": "Metaphor", "fg": "metaphor", "tr": "western", "q": "Decentralized coordination", "sec": "economics", "th": ["cooperation", "incentives", "unintended"]},
  {"id": "cobra", "t": "Cobra Effect", "src": "Colonial India anecdote", "form": "Institutional anecdote", "fg": "anecdote", "tr": "science", "q": "Perverse incentives", "sec": "economics", "th": ["incentives", "unintended"]},
  {"id": "goodhart", "t": "Goodhart's Law", "src": "Marilyn Strathern / economics", "form": "Principle", "fg": "model", "tr": "science", "q": "Targets distort when used as measures", "sec": "economics", "th": ["incentives", "unintended"]},
  {"id": "campbell", "t": "Campbell's Law", "src": "Donald Campbell", "form": "Principle", "fg": "model", "tr": "science", "q": "High-stakes measurement corruption", "sec": "economics", "th": ["incentives", "unintended"]},
  {"id": "principalagent", "t": "Principal–Agent Problem", "src": "Economics", "form": "Conceptual model", "fg": "model", "tr": "science", "q": "Misaligned incentives and information", "sec": "economics", "th": ["incentives", "power"]},
  {"id": "moralhazard", "t": "Moral Hazard", "src": "Insurance / economics", "form": "Conceptual model", "fg": "model", "tr": "science", "q": "Behaviour changes when protected from consequences", "sec": "economics", "th": ["incentives", "unintended"]},
  {"id": "beauty", "t": "Beauty Contest", "src": "Keynes, General Theory", "form": "Game / metaphor", "fg": "model", "tr": "science", "q": "Strategic anticipation of others", "sec": "economics", "th": ["uncertainty", "cooperation"]},
  {"id": "brokenwindows", "t": "Broken Windows", "src": "Wilson & Kelling", "form": "Metaphor / theory", "fg": "model", "tr": "science", "q": "Signals, disorder and social behaviour", "sec": "economics", "th": ["power", "unintended"]},
  {"id": "maxwell", "t": "Maxwell's Demon", "src": "James Clerk Maxwell", "form": "Thought experiment", "fg": "te", "tr": "science", "q": "Information, entropy and thermodynamics", "sec": "science", "th": ["knowledge", "uncertainty"]},
  {"id": "schrodinger", "t": "Schrödinger's Cat", "src": "Erwin Schrödinger", "form": "Thought experiment", "fg": "te", "tr": "science", "q": "Quantum superposition and measurement", "sec": "science", "th": ["uncertainty", "knowledge"]},
  {"id": "laplace", "t": "Laplace's Demon", "src": "Pierre-Simon Laplace", "form": "Thought experiment", "fg": "te", "tr": "science", "q": "Determinism and predictability", "sec": "science", "th": ["uncertainty", "freedom"]},
  {"id": "twin", "t": "Twin Paradox", "src": "Special relativity", "form": "Thought experiment", "fg": "te", "tr": "science", "q": "Time dilation", "sec": "science", "th": ["knowledge"]},
  {"id": "fermi", "t": "Fermi Paradox", "src": "Enrico Fermi / modern astronomy", "form": "Question / puzzle", "fg": "paradox", "tr": "science", "q": "Why no obvious extraterrestrial civilizations?", "sec": "science", "th": ["uncertainty"]},
  {"id": "drake", "t": "Drake Equation", "src": "Frank Drake", "form": "Model", "fg": "model", "tr": "science", "q": "Estimating communicating civilizations", "sec": "science", "th": ["uncertainty"]},
  {"id": "butterfly", "t": "Butterfly Effect", "src": "Edward Lorenz", "form": "Metaphor / dynamical systems", "fg": "metaphor", "tr": "science", "q": "Sensitivity to initial conditions", "sec": "science", "th": ["uncertainty", "unintended"]},
  {"id": "montyhall", "t": "Monty Hall Problem", "src": "Probability", "form": "Puzzle", "fg": "paradox", "tr": "science", "q": "Conditional probability and intuition", "sec": "science", "th": ["uncertainty"]},
  {"id": "sleepingbeauty", "t": "Sleeping Beauty Problem", "src": "Probability / philosophy", "form": "Thought experiment", "fg": "te", "tr": "western", "q": "Self-location and probability", "sec": "science", "th": ["uncertainty", "identity"]},
  {"id": "gorilla", "t": "Invisible Gorilla", "src": "Simons & Chabris", "form": "Experiment", "fg": "experiment", "tr": "science", "q": "Inattentional blindness", "sec": "psychology", "th": ["knowledge"]},
  {"id": "asch", "t": "Asch Conformity Experiments", "src": "Solomon Asch", "form": "Experiment", "fg": "experiment", "tr": "science", "q": "Social pressure and judgment", "sec": "psychology", "th": ["power", "knowledge"]},
  {"id": "milgram", "t": "Milgram Obedience Study", "src": "Stanley Milgram", "form": "Experiment", "fg": "experiment", "tr": "science", "q": "Authority and obedience", "sec": "psychology", "th": ["power", "freedom"]},
  {"id": "stanfordprison", "t": "Stanford Prison Experiment", "src": "Philip Zimbardo", "form": "Experiment (methodologically contested)", "fg": "experiment", "tr": "science", "q": "Roles, institutions and behaviour", "sec": "psychology", "th": ["power", "identity"]},
  {"id": "marshmallow", "t": "Marshmallow Test", "src": "Walter Mischel", "form": "Experiment", "fg": "experiment", "tr": "science", "q": "Delay of gratification", "sec": "psychology", "th": ["freedom", "incentives"]},
  {"id": "bystander", "t": "Bystander Effect", "src": "Darley & Latané", "form": "Experiment / phenomenon", "fg": "experiment", "tr": "science", "q": "Diffusion of responsibility", "sec": "psychology", "th": ["cooperation"]},
  {"id": "dunningkruger", "t": "Dunning–Kruger Effect", "src": "Dunning & Kruger", "form": "Psychological finding", "fg": "experiment", "tr": "science", "q": "Metacognition and competence", "sec": "psychology", "th": ["knowledge"]},
  {"id": "hedonic", "t": "Hedonic Treadmill", "src": "Positive psychology / adaptation research", "form": "Model", "fg": "model", "tr": "science", "q": "Adaptation to gains and losses", "sec": "psychology", "th": ["identity"]},
  {"id": "skinner", "t": "Skinner Box", "src": "B. F. Skinner", "form": "Experimental setup", "fg": "experiment", "tr": "science", "q": "Reinforcement and behaviour", "sec": "psychology", "th": ["incentives", "freedom"]},
  {"id": "chicken", "t": "Chicken Game", "src": "Game theory", "form": "Strategic model", "fg": "model", "tr": "science", "q": "Brinkmanship and commitment", "sec": "strategy", "th": ["power", "cooperation"]},
  {"id": "battlesexes", "t": "Battle of the Sexes", "src": "Game theory", "form": "Strategic model", "fg": "model", "tr": "science", "q": "Coordination under preference conflict", "sec": "strategy", "th": ["cooperation"]},
  {"id": "focal", "t": "Schelling's Focal Point", "src": "Thomas Schelling", "form": "Concept / example", "fg": "model", "tr": "science", "q": "Coordination without communication", "sec": "strategy", "th": ["cooperation"]},
  {"id": "mad", "t": "Mutually Assured Destruction", "src": "Cold War strategy", "form": "Strategic doctrine", "fg": "model", "tr": "science", "q": "Deterrence and catastrophic equilibrium", "sec": "strategy", "th": ["power", "uncertainty"]},
  {"id": "ooda", "t": "OODA Loop", "src": "John Boyd", "form": "Decision model", "fg": "model", "tr": "western", "q": "Observe–orient–decide–act", "sec": "strategy", "th": ["uncertainty", "power"]},
  {"id": "pd", "t": "Prisoner's Dilemma", "src": "Game theory", "form": "Strategic model", "fg": "model", "tr": "science", "q": "Cooperation vs individual incentives", "sec": "strategy", "th": ["cooperation", "incentives"]},
  {"id": "staghunt", "t": "Assurance Game / Stag Hunt", "src": "Game theory", "form": "Strategic model", "fg": "model", "tr": "science", "q": "Trust and coordination", "sec": "strategy", "th": ["cooperation"]},
  {"id": "maitreyi", "t": "Yajnavalkya and Maitreyi", "src": "Brihadaranyaka Upanishad", "form": "Dialogue", "fg": "dialogue", "tr": "indian", "q": "Self, love, immortality and value", "sec": "traditions", "th": ["identity", "death"]},
  {"id": "gargi", "t": "Gargi and Yajnavalkya", "src": "Brihadaranyaka Upanishad", "form": "Philosophical dialogue", "fg": "dialogue", "tr": "indian", "q": "How far can reason question the structure of reality?", "sec": "traditions", "th": ["knowledge"]},
  {"id": "indra", "t": "Indra and Virochana", "src": "Chandogya Upanishad", "form": "Teaching story", "fg": "parable", "tr": "indian", "q": "Self-knowledge and mistaken identification", "sec": "traditions", "th": ["identity", "knowledge"]},
  {"id": "uddalaka", "t": "Uddalaka and Shvetaketu", "src": "Chandogya Upanishad", "form": "Teaching dialogue", "fg": "dialogue", "tr": "indian", "q": "Unity; identity; reality", "sec": "traditions", "th": ["identity"]},
  {"id": "arjuna", "t": "Arjuna's Crisis", "src": "Bhagavad Gita", "form": "Philosophical dialogue", "fg": "dialogue", "tr": "indian", "q": "Duty; action; moral conflict", "sec": "traditions", "th": ["justice", "freedom", "death"]},
  {"id": "raft", "t": "The Parable of the Raft", "src": "Early Buddhist texts", "form": "Parable", "fg": "parable", "tr": "indian", "q": "Teachings are tools, not possessions", "sec": "traditions", "th": ["knowledge", "freedom"]},
  {"id": "anekanta", "t": "Anekantavada (Many-sidedness)", "src": "Jain philosophy", "form": "Conceptual framework", "fg": "concept", "tr": "indian", "q": "Partial perspectives and intellectual humility", "sec": "traditions", "th": ["knowledge"]},
  {"id": "uselesstree", "t": "Zhuangzi's Useless Tree", "src": "Zhuangzi", "form": "Parable", "fg": "parable", "tr": "chinese", "q": "Usefulness; alternative value systems", "sec": "traditions", "th": ["freedom", "identity"]},
  {"id": "nasreddin", "t": "Nasreddin Hodja: The Lost Ring and the Borrowed Donkey", "src": "Sufi and Turkish folk tradition", "form": "Anecdote", "fg": "anecdote", "tr": "sufi", "q": "Paradox; common sense; perspective", "sec": "traditions", "th": ["knowledge"]},
  {"id": "aesop", "t": "The Goose That Laid the Golden Eggs", "src": "Aesop’s Fables", "form": "Fable", "fg": "parable", "tr": "greek", "q": "Greed, patience and the source of wealth", "sec": "traditions", "th": ["incentives", "unintended"]},
  {"id": "blindmen", "t": "The Blind Men and the Elephant", "src": "Indian and Buddhist narrative traditions", "form": "Parable", "fg": "parable", "tr": "indian", "q": "Partial perspectives mistaken for the whole", "sec": "traditions", "th": ["knowledge"]},
  {"id": "chariot", "t": "The Chariot (Katha Upanishad)", "src": "Katha Upanishad", "form": "Metaphor", "fg": "metaphor", "tr": "indian", "q": "Self, senses, mind and disciplined agency", "sec": "traditions", "th": ["identity", "freedom"]},
  {"id": "ashtavakra", "t": "Ashtavakra and Janaka", "src": "Ashtavakra Gita tradition", "form": "Dialogue", "fg": "dialogue", "tr": "indian", "q": "Self, liberation and detachment", "sec": "traditions", "th": ["freedom", "identity"]},
  {"id": "twobirds", "t": "The Two Birds", "src": "Upanishadic tradition", "form": "Metaphor", "fg": "metaphor", "tr": "indian", "q": "Witnessing consciousness and experience", "sec": "traditions", "th": ["identity", "knowledge"]},
  {"id": "burninghouse", "t": "The Burning House", "src": "Lotus Sutra", "form": "Parable", "fg": "parable", "tr": "indian", "q": "Skilful means; saving those who do not see the danger", "sec": "traditions", "th": ["knowledge", "freedom"]},
  {"id": "syadvada", "t": "Syadvada", "src": "Jain philosophy", "form": "Logical framework", "fg": "concept", "tr": "indian", "q": "Conditional assertion and perspectival qualification", "sec": "traditions", "th": ["knowledge", "uncertainty"]},
  {"id": "angulimala", "t": "Buddha and Angulimala", "src": "Buddhist tradition", "form": "Narrative", "fg": "literary", "tr": "indian", "q": "Transformation, violence and moral agency", "sec": "traditions", "th": ["justice", "identity"]},
  {"id": "aggregates", "t": "The Five Aggregates as a Chariot", "src": "Buddhist analytical tradition", "form": "Analogy", "fg": "metaphor", "tr": "indian", "q": "Personal identity as a constructed bundle", "sec": "traditions", "th": ["identity"]},
  {"id": "threepoisons", "t": "The Three Poisons", "src": "Buddhist tradition", "form": "Conceptual metaphor", "fg": "concept", "tr": "indian", "q": "Desire, aversion and ignorance as roots of suffering", "sec": "traditions", "th": ["freedom", "knowledge"]},
  {"id": "gunas", "t": "The Gunas", "src": "Samkhya / Bhagavad Gita", "form": "Conceptual framework", "fg": "concept", "tr": "indian", "q": "Patterns of nature, action and temperament", "sec": "traditions", "th": ["identity"]},
  {"id": "karma", "t": "Karma as Causation", "src": "Indian philosophical traditions", "form": "Conceptual model", "fg": "concept", "tr": "indian", "q": "Action, consequence and moral causality", "sec": "traditions", "th": ["justice", "freedom", "unintended"]},
  {"id": "dharma", "t": "Dharma and Svadharma", "src": "Indian traditions / Bhagavad Gita", "form": "Conceptual framework", "fg": "concept", "tr": "indian", "q": "Role, duty and the ethics of action", "sec": "traditions", "th": ["justice", "identity"]},
  {"id": "maya", "t": "Maya", "src": "Vedantic traditions", "form": "Metaphor / concept", "fg": "concept", "tr": "indian", "q": "Appearance, cognition and reality", "sec": "traditions", "th": ["knowledge"]},
  {"id": "netineti", "t": "Neti Neti", "src": "Upanishadic tradition", "form": "Method / formula", "fg": "concept", "tr": "indian", "q": "Knowledge through negation; limits of concepts", "sec": "traditions", "th": ["knowledge", "identity"]},
  {"id": "atman", "t": "Atman and Brahman", "src": "Upanishadic / Vedantic traditions", "form": "Philosophical concept", "fg": "concept", "tr": "indian", "q": "Self, reality and metaphysical identity", "sec": "traditions", "th": ["identity"]},
  {"id": "prometheus", "t": "Prometheus", "src": "Greek myth", "form": "Myth", "fg": "myth", "tr": "greek", "q": "Technology, rebellion and punishment", "sec": "literature", "th": ["power", "knowledge", "unintended"]},
  {"id": "icarus", "t": "Icarus", "src": "Greek myth", "form": "Myth", "fg": "myth", "tr": "greek", "q": "Overreach and limits", "sec": "literature", "th": ["freedom", "unintended"]},
  {"id": "midas", "t": "Midas", "src": "Greek myth", "form": "Myth", "fg": "myth", "tr": "greek", "q": "Desire and unintended consequences", "sec": "literature", "th": ["incentives", "unintended"]},
  {"id": "apprentice", "t": "The Sorcerer's Apprentice", "src": "Goethe / folklore", "form": "Poetic tale", "fg": "literary", "tr": "western", "q": "Control without understanding", "sec": "literature", "th": ["unintended", "power"]},
  {"id": "babel", "t": "The Library of Babel", "src": "Jorge Luis Borges", "form": "Short story", "fg": "literary", "tr": "western", "q": "Infinite information; search and meaning", "sec": "literature", "th": ["knowledge", "uncertainty"]},
  {"id": "beforelaw", "t": "Before the Law", "src": "Franz Kafka", "form": "Parable", "fg": "parable", "tr": "western", "q": "Bureaucracy; access; institutional opacity", "sec": "literature", "th": ["power", "justice"]}
];

const ATLAS_ENTRIES = {
  "nachiketa": {
    "source": "Katha Upanishad, Part 1, sections 1 and 2",
    "period": "One of the main Upanishads. Scholars usually date it to the later part of the first millennium BCE.",
    "tradition": "Indian philosophy (Upanishads)",
    "type": "A dialogue inside a story",
    "setup": [
      "A man named Vajashravas performed a sacrifice in which he had to give away everything he owned. But the cows he gave away were very old. They could no longer give milk or have calves. His young son, Nachiketa, saw his father giving away these old cows. He felt that such poor gifts were useless.",
      "Nachiketa asked his father, “To whom will you give me?” He asked this three times. At last his father became angry and said, “I give you to Death.”",
      "So Nachiketa went to the house of Yama, the god of death. Yama was away. Nachiketa waited at the door for three nights without food. When Yama came back, he was sorry that his guest had waited so long. He offered Nachiketa three wishes.",
      "First, Nachiketa asked that his father should be calm and welcome him back. Second, he asked to learn a fire ritual that leads to heaven. Third, he asked, “When a person dies, some say he still exists and some say he does not. What is the truth?”",
      "Yama did not want to answer this question. So he offered Nachiketa many other gifts. He offered him sons and grandsons who would live for a hundred years. He offered him cattle, elephants, gold, horses and land. He also offered him a long life and beautiful women.",
      "Nachiketa refused all these gifts. He said that such things last only for a short time and weaken the senses. He said that no one becomes happy through wealth. Yama was pleased with this answer and began to teach him. He said that every person has two paths: shreyas, which is the good, and preyas, which is the pleasant. The wise person chooses the good. The foolish person chooses the pleasant and misses the real goal."
    ],
    "question": "If you could have everything you desire, what would be worth choosing, knowing that you will die one day?",
    "reveals": "The story compares two kinds of good. The pleasant is real, but it does not last. The good lasts. Yama does not say that pleasure is bad. He says that pleasure cannot answer the real questions about life and death. Nachiketa’s strength is that he does not give in to temptation. Because of this, he is ready to receive knowledge. Yama then teaches him that the true self, the atman, is never born and never dies. A person can know this self only when the mind stops chasing desires.",
    "readings": [
      [
        "Advaita Vedanta (Shankaracharya)",
        "The story is about moksha, or liberation. The true self is the same as Brahman, the ultimate reality. When a person knows this, the cycle of birth and death ends. Nachiketa’s refusal of pleasures is the kind of renunciation that makes this knowledge possible."
      ],
      [
        "Ethical reading",
        "The story is mainly about choices. Every day, a person must choose between what is pleasant and what is good. Our character is built by these choices. The three wishes also move upward: first family, then ritual, then true knowledge."
      ],
      [
        "Swami Vivekananda",
        "Vivekananda often praised Nachiketa’s shraddha. Shraddha means deep faith and fearless conviction. He wanted young Indians to have this quality."
      ]
    ],
    "breaks": [
      "The teaching depends on the belief in a permanent self. Buddhism agrees that the good is better than the pleasant. But Buddhism does not believe in a permanent self.",
      "A government cannot treat money, health and long life as unimportant. For public policy, food, income and housing are part of the good life.",
      "Nachiketa is an exceptional person. The story shows what a strong will looks like. But the story does not explain how ordinary people can build such a will.",
      "The beginning of the story is troubling. A father gives away his own child in anger, and the text does not criticise him."
    ],
    "uses": [
      "Integrity: Yama’s offers work like a bribe. A bribe offers something pleasant so that a person gives up what is right.",
      "Public policy: Governments often have to choose between popular spending today and long-term investment in health, education and climate.",
      "Technology: Many apps are designed to give constant small pleasures so that people keep scrolling.",
      "Exam use: In GS-IV, use it for values, integrity and self-control. In the Essay paper, use it as an opening story for topics on desire, wealth, contentment or death."
    ],
    "related": [
      "chariot",
      "arjuna",
      "experience",
      "maitreyi",
      "sisyphus",
      "ilyich",
      "epicurus"
    ],
    "reading": [
      [
        "Katha Upanishad, translated by Swami Paramananda, in The Upanishads",
        "Free on Project Gutenberg.",
        "https://www.gutenberg.org/ebooks/3283"
      ],
      [
        "Patrick Olivelle, Upanisads (Oxford World’s Classics, 1996)",
        "A reliable modern translation with notes on dating.",
        ""
      ]
    ]
  },
  "er": {
    "source": "Plato, Republic, Book X (614b–621d)",
    "period": "Plato wrote the Republic in Athens around 375 BCE.",
    "tradition": "Greek philosophy",
    "type": "A myth. A myth is a traditional or invented story used to explain something important.",
    "setup": [
      "At the end of the Republic, Socrates tells the story of a soldier named Er, the son of Armenius. Er was killed in battle. Ten days later, his body had still not decayed. On the twelfth day, as his body lay on the funeral pyre, Er came back to life. He described what he had seen after death.",
      "Er said that the souls of the dead came to a place with two openings into the earth and two openings into the sky. Judges sat between them. The just were sent up into the sky, and the unjust were sent down under the earth. After a journey of a thousand years, the souls returned and gathered in a meadow.",
      "Then the souls had to choose their next lives. Each soul drew a lot that decided the order of choosing. Many patterns of lives were laid out: the lives of animals, of rich and poor people, of tyrants and of ordinary citizens. The souls were told that the responsibility lies with the one who chooses, and that God is not to blame.",
      "The soul with the first choice rushed to take the life of a great tyrant. Only later did he see that this life included eating his own children. In his earlier life, he had been good only out of habit, without real understanding. The soul of Odysseus came last. Tired of ambition, Odysseus searched for a long time and chose the quiet life of an ordinary private man. He said that he would have chosen the same life even if he had been first.",
      "Before being reborn, the souls drank from the River of Forgetfulness and forgot everything. Er was not allowed to drink. He woke up on the pyre and told the story."
    ],
    "question": "If you could choose your next life, how would you know which life is truly good?",
    "reveals": "The myth teaches that the most important skill in life is knowing how to choose. The soul that picked the tyrant’s life had been good only by habit. When a big choice came, power and wealth fooled him. Odysseus had learned from suffering, so he chose wisely. Plato’s point is that we must study what makes a life just and happy, so that we can choose well. The myth also places the responsibility on the chooser. We cannot blame the gods, or fate, for the choices we make.",
    "readings": [
      [
        "Moral reading",
        "The myth completes the argument of the Republic. Justice is worth choosing for its own sake. A life ruled by greed and power is a disaster, however attractive it looks from outside."
      ],
      [
        "Reading about habit and understanding",
        "Good behaviour that comes only from habit or custom is fragile. When conditions change, a person without real understanding may choose badly. So education must build judgement, not only obedience."
      ],
      [
        "Influence on later thought",
        "The myth includes the idea of rebirth, which also appears in Indian thought. Later thinkers used the myth to discuss free will, fate and reward after death."
      ]
    ],
    "breaks": [
      "The myth is an imagined story, not an argument. Plato uses it to make his teaching memorable, not to prove what happens after death.",
      "The idea that souls choose their own lives before birth can seem to blame people for their circumstances, such as poverty or illness.",
      "Rewards and punishments after death can make justice look like a way to avoid punishment. This picture conflicts with Plato’s own claim that justice is good in itself."
    ],
    "uses": [
      "Career and life choices: Many people choose jobs or lifestyles for money and status, and they discover the hidden costs later, as the first soul did.",
      "Values education: Schools that only enforce rules may produce people who are good by habit. Moral education must also build understanding and judgement.",
      "Personal responsibility: Officials cannot blame fate for their decisions. The myth’s message, that the responsibility lies with the chooser, applies to every public servant.",
      "Exam use: In GS-IV, use it for values, responsibility and Plato as a moral thinker. In the Essay paper, use it for topics on choices, ambition and the good life."
    ],
    "related": [
      "gyges",
      "cave",
      "nachiketa",
      "karma",
      "sisyphus",
      "faust"
    ],
    "reading": [
      [
        "Plato, The Republic, translated by Benjamin Jowett",
        "The Myth of Er is at the end of Book X. Free on Project Gutenberg.",
        "https://www.gutenberg.org/ebooks/1497"
      ],
      [
        "“Plato’s Myths”, Stanford Encyclopedia of Philosophy",
        "",
        "https://plato.stanford.edu/entries/plato-myths/"
      ]
    ]
  },
  "sisyphus": {
    "source": "Greek myth, told in Homer’s Odyssey, Book 11. Retold by Albert Camus in his essay The Myth of Sisyphus (1942).",
    "period": "Homer: around the eighth century BCE. Camus: 1942.",
    "tradition": "Greek myth and modern French philosophy",
    "type": "A myth, and a philosophical essay about it",
    "setup": [
      "In Greek mythology, Sisyphus was the king of Corinth. He was known for being very clever and for tricking others, even the gods.",
      "Zeus, the king of the gods, had secretly carried away a girl named Aegina. Her father, the river god Asopus, searched everywhere for her. Sisyphus knew where Zeus had taken her, and he told Asopus. Zeus was angry with Sisyphus for giving away his secret. So Zeus sent Thanatos, the spirit of death, to chain Sisyphus in the underworld. But Sisyphus tricked Thanatos and chained him up instead. While Death was in chains, no one on earth could die, and the gods had to set Death free.",
      "In the end, the gods punished Sisyphus forever for his tricks. In the underworld, he had to push a huge stone up a steep hill. Every time the stone came close to the top, it rolled back down. Sisyphus had to walk down and start again, for all time. In Homer’s Odyssey, the hero Odysseus visits the underworld and sees Sisyphus pushing his stone.",
      "In 1942, the French writer Albert Camus wrote an essay about this myth. Camus said that human life is often like the work of Sisyphus. We look for meaning, but the universe gives no answer. Camus called this situation the absurd. He asked whether life is worth living if it has no final meaning. His answer was yes. Sisyphus knows that his task is endless, but he goes on anyway. Camus ended his essay by saying that we must imagine Sisyphus as happy."
    ],
    "question": "Can a life full of repeated effort, with no final result, still be worth living?",
    "reveals": "For the ancient Greeks, the story was a warning. Sisyphus was punished for his pride and his tricks. For Camus, the story shows the human situation. Much of life is repetition, and the universe does not explain why we are here. Camus did not want people to escape into false hope, or to give up. He argued that we should accept the absurd and still live fully. Meaning comes from the struggle itself, not from reaching a final goal.",
    "readings": [
      [
        "Ancient moral reading",
        "Sisyphus is punished for deceiving the gods and trying to escape death. The story warns against pride and dishonesty."
      ],
      [
        "Camus’s reading: revolt and freedom",
        "Sisyphus knows that his task is useless, but he refuses to be defeated. His awareness and his defiance make him free. Camus called this attitude revolt."
      ],
      [
        "A reading about work",
        "The story is also a picture of dull, repeated work, such as factory work or endless paperwork. Camus himself compared Sisyphus to the modern worker who does the same tasks every day of his life."
      ]
    ],
    "breaks": [
      "Camus assumes that the universe has no meaning. Religious traditions and many philosophers disagree. For them, the problem he describes does not arise in the same way.",
      "Imagining Sisyphus as happy can become a comforting idea. People who are trapped in truly harmful work need change, not only a new attitude.",
      "The myth describes a punishment. Using it as a model for all of human life may be too gloomy."
    ],
    "uses": [
      "Repeated effort: Students who prepare for tough exams for several years, and who fail and try again, can find in Camus a way to value the effort itself.",
      "Public service: Problems such as poverty, corruption and pollution never seem to end. Officials must keep working even though the task is never finished.",
      "Meaningful work: Organisations can make repetitive work feel less absurd by showing workers the purpose of what they do.",
      "Exam use: In the Essay paper, use it for topics on the meaning of life, perseverance, work and hope. In GS-IV, use it for attitude and resilience."
    ],
    "related": [
      "ilyich",
      "ecclesiastes",
      "epicurus",
      "nachiketa",
      "experience",
      "prometheus"
    ],
    "reading": [
      [
        "Homer, The Odyssey, translated by Samuel Butler",
        "Sisyphus appears in Book 11. Free on Project Gutenberg.",
        "https://www.gutenberg.org/ebooks/1727"
      ],
      [
        "“Albert Camus”, Stanford Encyclopedia of Philosophy",
        "Explains Camus’s idea of the absurd and The Myth of Sisyphus.",
        "https://plato.stanford.edu/entries/camus/"
      ]
    ]
  },
  "ilyich": {
    "source": "Leo Tolstoy, The Death of Ivan Ilyich (1886)",
    "period": "Russia, 1886",
    "tradition": "Russian literature",
    "type": "A novella. A novella is a story that is longer than a short story but shorter than a novel.",
    "setup": [
      "Ivan Ilyich is a judge in a high court in nineteenth-century Russia. Tolstoy says that his life has been most simple and most ordinary, and therefore most terrible. Ivan has always done what was expected of him. He studied law, rose steadily in his career, married a suitable woman named Praskovya Fyodorovna, and enjoyed playing cards with important people.",
      "One day, while hanging curtains in his new and fashionable home, Ivan falls and hurts his side. At first it seems like nothing. But the pain grows, and he becomes seriously ill. Doctors talk about his kidney and his intestine, but none of them tells him the plain truth. He is dying.",
      "Ivan’s family behaves as if he is only sick and will soon get better. They carry on with their social life. Their pretence makes him lonely and angry. The only person who comforts him is Gerasim, a young peasant servant. Gerasim speaks honestly about death and cares for Ivan without complaint. At night, Gerasim holds Ivan’s legs up on his shoulders, which eases the pain.",
      "As death comes closer, Ivan begins to ask a terrible question. What if his whole life was not what it should have been? He sees that his career, his social life and his careful manners were a way of hiding from what really matters.",
      "In his last days, Ivan screams for three days. Then he feels himself pushed into a black hole, and he sees a light. His hand falls on his son’s head, and he feels pity for his son and his wife. His fear of death disappears. Death is finished, he thinks, and he dies."
    ],
    "question": "What makes a life truly worth living, if we must all die?",
    "reveals": "The story shows how a person can live a respectable life that is empty inside. Ivan followed every social rule, but he never asked what his life was for. Only the nearness of death forces him to face this question. The people around him hide from death with lies and routine, just as Ivan hid from life. Gerasim accepts death as a natural part of life, and he is the only one who shows real compassion. The story suggests that facing our own death honestly can help us live more truthfully.",
    "readings": [
      [
        "Tolstoy’s religious reading",
        "Tolstoy wrote the story after a spiritual crisis in the late 1870s. He came to believe that a life built on status and comfort is false, and that true life means love and service to others."
      ],
      [
        "Existentialist reading",
        "The German philosopher Martin Heidegger pointed to this story as a picture of how people avoid thinking about their own death. For such thinkers, facing death honestly is the beginning of an authentic life."
      ],
      [
        "Medical ethics reading",
        "The story is often read by medical students. Ivan’s suffering is made worse by doctors who hide the truth and by a family that pretends. The story shows why honesty and compassion matter in the care of dying people."
      ]
    ],
    "breaks": [
      "Tolstoy presents upper-class life as almost completely empty. But ordinary work, family and friendship can be meaningful, even when they follow social rules.",
      "The peaceful ending may be too neat. Many people die in pain or fear without such a clear moment of understanding.",
      "Gerasim is shown as simple and good because he is a peasant. This picture can romanticise the poor instead of showing them as full individuals."
    ],
    "uses": [
      "Palliative care: Honest communication about serious illness, together with care that reduces pain and loneliness, respects the dignity of dying patients.",
      "Work and meaning: Civil servants and professionals can ask whether their careers serve a real purpose, or only status and promotion.",
      "End-of-life decisions: In 2018, the Supreme Court of India recognised the right to die with dignity and allowed advance medical directives, often called living wills.",
      "Exam use: In GS-IV, use it for compassion, authenticity and the ethics of care. In the Essay paper, use it for topics on death, success and the meaning of life."
    ],
    "related": [
      "sisyphus",
      "nachiketa",
      "epicurus",
      "ecclesiastes",
      "kisagotami",
      "experience"
    ],
    "reading": [
      [
        "Leo Tolstoy, The Death of Ivan Ilych, Wikisource",
        "The full story in English. Free.",
        "https://en.wikisource.org/wiki/The_Death_of_Ivan_Ilych"
      ],
      [
        "“The Death of Ivan Ilyich”, Wikipedia",
        "Free summary of the story and its reception.",
        "https://en.wikipedia.org/wiki/The_Death_of_Ivan_Ilyich"
      ]
    ]
  },
  "inquisitor": {
    "source": "Fyodor Dostoevsky, The Brothers Karamazov (1880), Book 5, chapter 5",
    "period": "Russia, 1879 to 1880",
    "tradition": "Russian literature",
    "type": "A parable inside a novel. A parable is a simple story that teaches a lesson.",
    "setup": [
      "In the novel, Ivan Karamazov tells his younger brother Alyosha a story that he has imagined. The story is set in Seville, in Spain, in the sixteenth century, during the Inquisition. The Inquisition was a church court that punished people for holding the wrong religious beliefs.",
      "On the day before the story begins, almost a hundred heretics have been burnt alive in the city. Then Christ quietly appears in the streets. The people recognise him at once and follow him. He heals an old man who has been blind from childhood. At the steps of the cathedral, he brings a dead girl back to life.",
      "The Grand Inquisitor, a cardinal who is almost ninety years old, sees these miracles. He orders his guards to arrest Christ and put him in prison. That night, the old man visits Christ in his cell. He speaks for a long time, and Christ stays silent.",
      "The Inquisitor says that Christ made a mistake. When Satan tempted Christ in the desert, Christ refused to turn stones into bread. He refused to prove who he was with a miracle. He refused to rule the kingdoms of the world. Christ wanted people to follow him freely. But the Inquisitor says that most people cannot bear freedom. They want bread, miracles and someone to obey. So the Church has taken away their freedom and given them security instead. The Inquisitor says that he will burn Christ the next day.",
      "Christ does not answer. He only goes up to the old man and kisses him gently on the lips. The Inquisitor opens the door and tells him to go and never come back. The kiss stays warm in the old man’s heart, but he does not change his mind."
    ],
    "question": "Do people really want freedom, or would most of them rather have bread and security?",
    "reveals": "The story sets freedom against security. Freedom is hard. It brings choice, doubt and responsibility. Security is easy, but its price is obedience. The Inquisitor claims to love humanity, and he believes that he is making people happy. His sincere belief that he is doing good is what makes his argument dangerous. Rulers who take away freedom often say that they are doing it for the people’s own good.",
    "readings": [
      [
        "Criticism of the Church",
        "Dostoevsky was an Orthodox Christian. Through the story, he criticised the Roman Catholic Church, which he believed had replaced Christ’s message of freedom with worldly power."
      ],
      [
        "Criticism of dictatorship",
        "Many readers see the Inquisitor as a picture of any system, including socialist and totalitarian states, that promises bread and order in exchange for freedom."
      ],
      [
        "Ivan and the answer of the novel",
        "The story belongs to Ivan, who cannot accept a world full of suffering. The novel does not answer him with an argument. It answers with the kiss, and with the life and teachings of the monk Zosima in the next part of the book."
      ],
      [
        "Psychology of freedom",
        "The psychologist Erich Fromm made a similar point in his book Escape from Freedom (1941). He argued that many people are afraid of the burden of freedom, and so they willingly give it up to strong leaders."
      ]
    ],
    "breaks": [
      "The Inquisitor assumes that most people are weak and cannot handle freedom. This view looks down on ordinary people, and history shows many people fighting and dying for freedom.",
      "Freedom and security are not always opposites. Good institutions can provide both, as well-run democracies try to do.",
      "The story is written as a debate about Christianity. Readers from other traditions may need to translate its religious terms into general ideas."
    ],
    "uses": [
      "Welfare and rights: A government that gives people free goods but takes away their right to speak or protest is making the Inquisitor’s bargain.",
      "Security and surveillance: Many states limit privacy and freedom in the name of safety. The story helps us ask how much freedom should be given up, and to whom.",
      "Paternalism: Officials sometimes decide what is good for citizens without asking them. The story warns against assuming that people cannot choose for themselves.",
      "Exam use: In GS-IV, use it for freedom versus security, paternalism and the ethics of power. In the Essay paper, use it for topics on freedom, authority, democracy and welfare."
    ],
    "related": [
      "cave",
      "noblelie",
      "panopticon",
      "milgram",
      "gadfly",
      "experience"
    ],
    "reading": [
      [
        "Fyodor Dostoevsky, The Brothers Karamazov, translated by Constance Garnett",
        "The Grand Inquisitor is Book 5, chapter 5. Free on Project Gutenberg.",
        "https://www.gutenberg.org/ebooks/28054"
      ],
      [
        "“The Grand Inquisitor”, Wikipedia",
        "Free overview of the story and how it has been read.",
        "https://en.wikipedia.org/wiki/The_Grand_Inquisitor"
      ]
    ]
  },
  "faust": {
    "source": "The German legend of Doctor Faust, first printed in the Historia von D. Johann Fausten (1587); Christopher Marlowe’s play Doctor Faustus (written around 1590); Johann Wolfgang von Goethe’s Faust, Part One (1808) and Part Two (1832)",
    "period": "1587 to 1832",
    "tradition": "German legend and European literature",
    "type": "A legend. A legend is a traditional story that may be based on a real person.",
    "setup": [
      "The legend is based on a real man, Johann Georg Faust, a German magician and alchemist of the early sixteenth century. After his death, stories spread that he had made a deal with the devil. In 1587, a popular book told his story.",
      "In the story, Faust is a brilliant scholar who has studied everything, but he is still not satisfied. He wants unlimited knowledge, power and pleasure. So he calls up a devil named Mephistopheles and makes a pact. For twenty-four years, Mephistopheles will serve Faust and give him whatever he wants. After that, Faust’s soul will belong to the devil.",
      "In Christopher Marlowe’s play, Faustus uses his power for tricks, travel and pleasure. When the twenty-four years end, he is terrified and begs for more time. Devils carry him off to hell.",
      "Goethe changed the ending. His Faust makes a wager instead. If Faust ever feels so satisfied with a moment that he wants it to last forever and stops striving, Mephistopheles may take his soul. Faust’s search for experience leads him to seduce a young woman, Gretchen, and her life ends in tragedy. In Part Two, the old Faust takes land back from the sea in a huge project, and an old couple who stand in his way are killed. At last, blind and close to death, Faust imagines a free people living on the land he has made. He says that he would like that moment to stay, and he dies. But angels carry his soul to heaven, because he never stopped striving."
    ],
    "question": "What happens when a person wants unlimited knowledge, power and pleasure?",
    "reveals": "Faust stands for the restless modern mind that is never satisfied. His ambition is not only evil. The same ambition drives learning, science and progress. But the deal with the devil shows the price of chasing everything without limits. Other people often pay that price, as Gretchen and the old couple do. Marlowe’s Faustus is punished for his pride. Goethe’s Faust is saved because he never stopped striving. Together, the two versions ask whether endless ambition is our greatest strength or our greatest danger.",
    "readings": [
      [
        "Christian moral reading (Marlowe)",
        "Faustus chooses worldly power over his soul. His damnation warns against pride, and against selling one’s deepest values for short-term gain."
      ],
      [
        "Romantic reading (Goethe)",
        "Constant striving is what makes human beings great. In the play, God says that a person makes mistakes for as long as he strives. Faust is saved not because he is good, but because he never settles for comfort."
      ],
      [
        "Modern reading",
        "A Faustian bargain now means any deal in which a person gives up something of lasting value, such as integrity or health, in exchange for power, money or knowledge."
      ]
    ],
    "breaks": [
      "Goethe’s ending can seem unfair. Faust is saved even though innocent people suffered and died because of him.",
      "Ambition is not always a pact with evil. Most scientific and social progress comes from honest striving within ethical limits.",
      "The story can make knowledge itself look dangerous. The real danger lies in how knowledge and power are used."
    ],
    "uses": [
      "Integrity: An official who accepts favours from powerful interests in return for quick success is making a Faustian bargain.",
      "Technology: Powerful technologies, from nuclear energy to artificial intelligence, bring great benefits and serious risks. Societies must decide what limits to set.",
      "Development and displacement: Faust’s land project, which destroys an old couple’s home, is a picture of development that ignores the people it displaces.",
      "Exam use: In GS-IV, use it for integrity, ambition, and ends and means. In the Essay paper, use it for topics on ambition, knowledge, technology and development."
    ],
    "related": [
      "prometheus",
      "icarus",
      "midas",
      "apprentice",
      "er",
      "experience"
    ],
    "reading": [
      [
        "Johann Wolfgang von Goethe, Faust, Part One, translated by Bayard Taylor",
        "Free on Project Gutenberg.",
        "https://www.gutenberg.org/ebooks/14591"
      ],
      [
        "Christopher Marlowe, The Tragical History of Doctor Faustus",
        "Free on Project Gutenberg.",
        "https://www.gutenberg.org/ebooks/779"
      ]
    ]
  },
  "ecclesiastes": {
    "source": "Ecclesiastes, a book of the Hebrew Bible, which Christians call the Old Testament",
    "period": "Scholars usually date the book between about 450 and 180 BCE.",
    "tradition": "Hebrew wisdom literature",
    "type": "Wisdom literature. Wisdom literature is a collection of sayings and reflections about how to live.",
    "setup": [
      "The book presents the words of a teacher called Kohelet, a name often translated as “the Preacher”. He is described as a son of David and a king in Jerusalem. Tradition linked the book to King Solomon, but most scholars think that it was written much later.",
      "Kohelet begins with a bitter observation. Everything is vanity, which means empty and passing, like a breath. Generations come and go, but the earth stays the same. The sun rises and sets. The rivers run into the sea, but the sea is never full. There is nothing new under the sun.",
      "Kohelet says that he tried everything to find meaning. He built houses and gardens, gathered silver and gold, and enjoyed music and pleasure. But when he looked at all his work, he found it empty. The wise man and the fool both die, and both are forgotten.",
      "Kohelet also observes that life is not fair. The race is not always won by the fastest, and the battle is not always won by the strongest. Bread does not always go to the wise, and riches do not always go to the clever. Time and chance happen to them all.",
      "Yet the book is not only gloomy. Kohelet says that there is a right time for everything: a time to be born and a time to die, a time to weep and a time to laugh. He advises people to eat and drink, to enjoy their work, and to take pleasure in the simple gifts of life. The book ends by telling readers to respect God and keep his commandments."
    ],
    "question": "How should we live, when life is short, uncertain and often unfair?",
    "reveals": "Ecclesiastes refuses easy answers. Wealth, wisdom and hard work cannot protect anyone from death or chance. Many things that people chase are empty. But the book does not end in despair. It recommends a humble kind of joy: accepting that we cannot control everything, enjoying ordinary good things, and doing our work well while we can. Knowing that life has seasons helps a person face both good and bad times calmly.",
    "readings": [
      [
        "Religious reading",
        "Human wisdom has limits, and only God understands the whole pattern of life. The right response is humility, reverence and obedience to God."
      ],
      [
        "Philosophical reading",
        "The book is close to later Greek philosophies such as Stoicism and Epicureanism. Accept what you cannot change, avoid endless chasing, and enjoy simple pleasures."
      ],
      [
        "Existential reading",
        "Kohelet faces the absurdity of life, much as Albert Camus did many centuries later. He sees no final reward for effort, yet he still chooses to live and to enjoy life."
      ],
      [
        "Scholarly reading",
        "Many scholars think that the final verses, which tell readers to fear God and keep his commandments, were added by a later writer to make the book fit religious teaching more closely."
      ]
    ],
    "breaks": [
      "The claim that there is nothing new under the sun ignores real progress, such as advances in medicine and in human rights.",
      "Accepting that life is unfair can become an excuse for doing nothing about injustice.",
      "The book’s mood changes often, and its different voices can seem to contradict each other."
    ],
    "uses": [
      "Humility in success: Leaders and officials who succeed should remember the role of chance and circumstances, not only their own merit.",
      "Resilience: The idea that life has seasons helps people cope with failure, loss and change.",
      "Balanced living: The advice to enjoy work and simple pleasures, instead of endlessly chasing wealth, speaks to modern problems of stress and burnout.",
      "Exam use: In the Essay paper, use it for topics on time, chance, success and contentment. In GS-IV, use it for attitude and emotional resilience."
    ],
    "related": [
      "sisyphus",
      "ilyich",
      "epicurus",
      "nachiketa",
      "hedonic",
      "kisagotami"
    ],
    "reading": [
      [
        "The King James Version of the Bible",
        "Ecclesiastes is a short book of twelve chapters. Free on Project Gutenberg.",
        "https://www.gutenberg.org/ebooks/10"
      ],
      [
        "“Ecclesiastes”, Wikipedia",
        "Free overview of the book, its date and its structure.",
        "https://en.wikipedia.org/wiki/Ecclesiastes"
      ]
    ]
  },
  "epicurus": {
    "source": "Epicurus, Letter to Menoeceus, preserved by Diogenes Laertius in Lives of the Eminent Philosophers, Book 10. The Roman poet Lucretius developed the argument in On the Nature of Things, Book 3.",
    "period": "Epicurus lived from 341 to 270 BCE. Lucretius wrote in the first century BCE.",
    "tradition": "Greek and Roman philosophy (Epicureanism)",
    "type": "An argument",
    "setup": [
      "Epicurus was a Greek philosopher who founded a school in Athens called the Garden. He taught that the goal of life is a calm and happy mind, free from pain and fear. He believed that one of the greatest fears that disturbs people is the fear of death.",
      "In a letter to his student Menoeceus, Epicurus gave an argument against this fear. All good and bad things come to us through sensation, that is, through what we feel. Death is the end of all sensation. So death cannot be bad for the person who dies.",
      "Epicurus put the argument simply. While we exist, death is not present. When death is present, we no longer exist. So death is nothing to us. Death does not concern the living, because they are alive, and it does not concern the dead, because they no longer exist.",
      "He added that a person who truly understands this argument can enjoy life more. Such a person no longer longs for endless time, and enjoys the life that he has.",
      "The Roman poet Lucretius added a second argument. Think about all the time before you were born. You did not suffer then, and you do not fear that time now. The time after your death will be just like the time before your birth. So there is no reason to fear it either."
    ],
    "question": "Is death bad for the person who dies?",
    "reveals": "Epicurus separates two things that people often confuse: dying and being dead. The process of dying may be painful. But being dead, he argues, is not an experience at all, so it cannot hurt. Much of our fear comes from imagining ourselves still present to suffer our own absence. If this fear is removed, people can live calmly and value the present life, instead of worrying about what comes after.",
    "readings": [
      [
        "Epicurean reading",
        "Freedom from the fear of death is necessary for a happy life. Later Epicureans summed up the teaching in a fourfold remedy: do not fear the gods, do not fear death, what is good is easy to get, and what is terrible is easy to bear."
      ],
      [
        "Deprivation view (Thomas Nagel)",
        "The philosopher Thomas Nagel replied that death can be bad even if we never experience it. Death is bad because it takes away the good things that we would otherwise have had, such as more years of love, work and joy."
      ],
      [
        "Immortality would be worse (Bernard Williams)",
        "The philosopher Bernard Williams agreed that early death is a misfortune. But he argued that living forever would become boring and meaningless, so it is good that human life ends."
      ]
    ],
    "breaks": [
      "Many people fear death not for themselves, but because of what their death will mean for the people who depend on them.",
      "The argument from the time before birth can be challenged. Death takes away a future that a person has planned and cares about. The time before birth took nothing away.",
      "The argument shows that being dead is not painful. It does not remove the fear of dying, or the grief of losing other people."
    ],
    "uses": [
      "End-of-life care: Helping patients face death calmly, without false hope or panic, is a goal of palliative care.",
      "Courage in dangerous work: Soldiers, doctors in epidemics and disaster workers face danger. Reflection on death can support courage without recklessness.",
      "Living well: Knowing that life is limited can encourage people to focus on what really matters, instead of on endless worry.",
      "Exam use: In the Essay paper, use it for topics on death, fear, happiness and the good life. In GS-IV, use it for emotional resilience and Greek moral thinkers."
    ],
    "related": [
      "nachiketa",
      "ilyich",
      "sisyphus",
      "ecclesiastes",
      "kisagotami",
      "experience"
    ],
    "reading": [
      [
        "Epicurus, Letter to Menoeceus, Wikisource",
        "Free English translation of the letter.",
        "https://en.wikisource.org/wiki/Letter_to_Menoeceus"
      ],
      [
        "“Death”, Stanford Encyclopedia of Philosophy",
        "Explains Epicurus’s argument, Lucretius’s argument and modern replies.",
        "https://plato.stanford.edu/entries/death/"
      ]
    ]
  },
  "cave": {
    "source": "Plato, Republic, Book VII (514a–520a)",
    "period": "Plato wrote the Republic in Athens around 375 BCE.",
    "tradition": "Greek philosophy",
    "type": "An allegory. An allegory is a story in which each part stands for an idea.",
    "setup": [
      "In the Republic, Socrates asks Glaucon to imagine an underground cave. Some people have lived in this cave since childhood. They are chained so that they cannot move their heads. They can only look at the wall in front of them.",
      "Behind the prisoners there is a fire. Between the fire and the prisoners there is a raised path. People walk along this path carrying objects, such as statues of people and animals. The fire throws the shadows of these objects onto the wall. The prisoners have never seen anything except these shadows. So they believe that the shadows are the real things.",
      "One day, one prisoner is set free. He is made to turn around and look at the fire. The light hurts his eyes. Then he is dragged up a steep path and out of the cave into the sunlight. At first he cannot see anything. Slowly his eyes get used to the light. First he sees shadows, then reflections in water, and then the real objects. At last he looks at the sun. He understands that the sun is the source of light and of everything he can see.",
      "The freed man feels sorry for the other prisoners, so he goes back into the cave. But now his eyes are not used to the dark, and he stumbles. The prisoners laugh at him. They say that going outside has ruined his eyes. Socrates says that if this man tried to free the prisoners and lead them outside, they would kill him."
    ],
    "question": "How can we know whether what we believe is real, or only a shadow of the truth? And what do we owe to people who still believe in the shadows?",
    "reveals": "Plato makes three points. First, there are levels of knowledge. At the lowest level, people know only images and opinions. At the highest level, they understand what is truly real. For Plato, this highest reality is the world of Forms, and the sun stands for the highest Form, the Form of the Good. Second, education does not mean putting facts into an empty mind. Education means turning the whole person towards the truth. This turning is slow and painful. Third, a person who has seen the truth must come back and help others. The philosopher must return to the cave and help to govern it, even if he does not want to.",
    "readings": [
      [
        "Theory of knowledge",
        "The cave shows the journey from opinion to true knowledge. It matches another image, called the divided line, which Plato gives just before the cave."
      ],
      [
        "Political reading",
        "The cave supports the idea that people with true knowledge should rule. The philosopher Karl Popper criticised this idea in his book The Open Society and Its Enemies (1945). He said that it could be used to justify rule by a small group who claim to know better than everyone else."
      ],
      [
        "Modern reading",
        "The cave is a picture of propaganda and the media. People can be controlled by what they are shown. They may also become angry with anyone who questions it. Today the same idea is used to describe social media and echo chambers."
      ]
    ],
    "breaks": [
      "The story assumes that there is one single truth outside the cave and that the freed man has found it. In real life, people who feel that they have found the truth are sometimes just as wrong as before.",
      "The prisoners have no way to check what the freed man tells them. In real life, knowledge must be tested openly. A claim should not be accepted only because someone says that he has seen the truth.",
      "The prisoners are shown as chained and helpless. Real people can think, ask questions and free themselves."
    ],
    "uses": [
      "Misinformation: People who believe false information often become angry when someone corrects them, just like the prisoners.",
      "Education: Real learning changes the way a person sees the world. It is more than memorising facts.",
      "Public service: Experts and officials have a duty to explain their decisions to citizens. They should not assume that people cannot understand.",
      "Exam use: In the Essay paper, use it for topics on education, truth, media and democracy. In GS-IV, use it when writing about Plato as a moral thinker."
    ],
    "related": [
      "noblelie",
      "dream",
      "vat",
      "maya",
      "blindmen",
      "gadfly",
      "butterflydream"
    ],
    "reading": [
      [
        "Plato, The Republic, translated by Benjamin Jowett",
        "The cave story is at the start of Book VII. Free on Project Gutenberg.",
        "https://www.gutenberg.org/ebooks/1497"
      ],
      [
        "“Plato’s Middle Period Metaphysics and Epistemology”, Stanford Encyclopedia of Philosophy",
        "Explains the cave together with Plato’s other images, the sun and the divided line.",
        "https://plato.stanford.edu/entries/plato-metaphysics/"
      ]
    ]
  },
  "dream": {
    "source": "René Descartes, Meditations on First Philosophy (1641), First Meditation. Plato raises the same question in the Theaetetus (158b–d).",
    "period": "Descartes wrote in 1641. Plato wrote in the fourth century BCE.",
    "tradition": "Modern Western philosophy",
    "type": "A thought experiment. A thought experiment is an imagined situation used to test an idea.",
    "setup": [
      "In 1641, the French philosopher René Descartes set out to find a belief that could not be doubted. He decided to question everything he believed, one step at a time.",
      "First, he noted that his senses sometimes deceive him. Things seen from far away, for example, can look different from what they are. But surely, he thought, some things are certain. He was sitting by the fire, wearing a winter dressing gown and holding a sheet of paper in his hands. How could he doubt that?",
      "Then Descartes remembered his dreams. Many times he had dreamed that he was sitting by the fire in his dressing gown, when really he was lying undressed in bed. In the dream, everything had seemed completely real. He realised that there are no sure signs by which he can tell being awake from being asleep.",
      "So he could not be certain that the fire, the paper, or even his own hands were real. But Descartes noticed that some things seem true whether he is awake or dreaming. In a dream, two and three still make five, and a square still has four sides. Even dream images are built from simple things such as shape, size and number.",
      "Descartes used the dream argument as one step in his method of doubt. His next step went further, with the idea of an evil demon."
    ],
    "question": "How can you prove that you are not dreaming right now?",
    "reveals": "The dream argument shows that the feeling of being awake cannot by itself prove that what we see is real. Our senses alone cannot guarantee the existence of the world around us. But the argument also shows its own limit. Some truths, such as the truths of mathematics, do not seem to depend on whether we are awake. Descartes used this sharp doubt not to give up on knowledge, but to find a firmer foundation for it.",
    "readings": [
      [
        "Descartes’s aim",
        "Descartes did not really believe that he was dreaming. He used doubt as a method, to clear away weak beliefs and to find what cannot be doubted."
      ],
      [
        "Earlier versions",
        "Plato raised the question in the Theaetetus: how can we tell whether we are awake or dreaming? The Chinese thinker Zhuangzi told his famous story of dreaming that he was a butterfly."
      ],
      [
        "Replies",
        "Thomas Hobbes and John Locke each tried to answer Descartes. They pointed out that waking life is more connected and consistent than dreams. Other philosophers argue that the idea of dreaming depends on the idea of being awake, so everything cannot be a dream."
      ]
    ],
    "breaks": [
      "Dreams are usually confused and broken. Waking life is steady and connected over days and years. This difference gives us good, though not perfect, reasons to trust that we are awake.",
      "The argument demands complete certainty. In daily life and in science, strong evidence is enough to act on.",
      "Even if we were dreaming, we would still have to act and make choices. So the doubt changes little in practice."
    ],
    "uses": [
      "Critical thinking: Feeling certain is not the same as being right. Good decision makers ask what evidence supports their beliefs.",
      "Technology: Virtual reality and deepfakes can create experiences that feel real. The dream argument explains why feeling is not proof.",
      "Scientific method: Science also doubts appearances and checks them through repeated tests.",
      "Exam use: In the Essay paper, use it for topics on reality and illusion, truth and knowledge. In GS-IV, use it for objectivity and the difference between perception and fact."
    ],
    "related": [
      "demon",
      "vat",
      "butterflydream",
      "cave",
      "maya",
      "boltzmann"
    ],
    "reading": [
      [
        "“Descartes’ Epistemology”, Stanford Encyclopedia of Philosophy",
        "Explains the method of doubt, including the dream argument.",
        "https://plato.stanford.edu/entries/descartes-epistemology/"
      ],
      [
        "“René Descartes”, Internet Encyclopedia of Philosophy",
        "",
        "https://iep.utm.edu/descarte/"
      ]
    ]
  },
  "demon": {
    "source": "René Descartes, Meditations on First Philosophy (1641), end of the First Meditation and beginning of the Second",
    "period": "1641",
    "tradition": "Modern Western philosophy",
    "type": "A thought experiment. A thought experiment is an imagined situation used to test an idea.",
    "setup": [
      "After the dream argument, Descartes still had some beliefs left. Even in a dream, he thought, two and three make five, and a square has four sides. So he looked for a stronger reason to doubt even these beliefs.",
      "Descartes first asked whether an all-powerful God might make him go wrong every time he adds two and three, or counts the sides of a square. Then, to keep his doubt firm, he imagined something worse. Suppose a very powerful and cunning evil demon is using all its energy to deceive him. The sky, the earth, colours, shapes and sounds might all be tricks that the demon puts into his mind.",
      "Descartes decided to treat all his old beliefs as false, as long as they could possibly come from such a deceiver. He would not trust his body, his senses or the world around him.",
      "Then he found something that the demon could not take away. Even if he is deceived about everything, he must exist in order to be deceived. However hard the demon tries, it can never make him nothing while he thinks that he is something. So Descartes concluded that the statement “I am, I exist” is true every time he thinks it. In an earlier book, he had put the same idea in its famous form: “I think, therefore I am.”"
    ],
    "question": "Is there anything that you can know for certain, even if someone is trying to deceive you about everything?",
    "reveals": "The evil demon pushes doubt as far as it can go, and in doing so it finds a limit. A deceiver needs someone to deceive. So the existence of the thinking self survives even the most extreme doubt. Descartes used this certainty as the foundation for rebuilding knowledge. The thought experiment also shows how much of what we believe rests on trusting our senses and our reasoning.",
    "readings": [
      [
        "Descartes’s foundation",
        "The certainty of one’s own thinking is the first secure point. From there, Descartes tried to prove that God exists and is not a deceiver, so that the senses can be trusted when they are used carefully."
      ],
      [
        "The charge of arguing in a circle",
        "Critics said that Descartes argued in a circle. He used clear reasoning to prove that God exists, and then used God to prove that clear reasoning can be trusted."
      ],
      [
        "Modern versions",
        "The evil demon returned in modern forms, such as the brain in a vat and the idea of a computer simulation. The question stays the same: could all our experience be produced by something outside us?"
      ]
    ],
    "breaks": [
      "The idea of an all-powerful deceiver cannot be tested. A doubt that no evidence could ever settle may not be a useful doubt.",
      "Knowing that one exists as a thinking thing tells us very little. It does not show what the self is, or that anything else exists.",
      "Some philosophers argue that language and thought depend on a shared world. A person who was deceived about everything could not even form the thought of being deceived."
    ],
    "uses": [
      "Misinformation: Propaganda and deepfakes work like small evil demons. Societies need independent checks, such as a free media and fact-checking, to guard against deception.",
      "Cyber security: Secure systems are designed on the assumption that any message could be fake. Security experts start from doubt, as Descartes did.",
      "Conscience under pressure: Even in great confusion, a person can hold on to his own conscience and judgement.",
      "Exam use: In the Essay paper, use it for topics on truth, doubt, technology and trust. In GS-IV, use it for objectivity and critical thinking."
    ],
    "related": [
      "dream",
      "vat",
      "cave",
      "maya",
      "boltzmann",
      "netineti"
    ],
    "reading": [
      [
        "“Descartes’ Epistemology”, Stanford Encyclopedia of Philosophy",
        "",
        "https://plato.stanford.edu/entries/descartes-epistemology/"
      ],
      [
        "“Evil demon”, Wikipedia",
        "Free overview of the thought experiment and its place in the Meditations.",
        "https://en.wikipedia.org/wiki/Evil_demon"
      ]
    ]
  },
  "vat": {
    "source": "The philosopher Gilbert Harman described the scenario in 1973. Hilary Putnam made it famous in his book Reason, Truth and History (1981), chapter 1.",
    "period": "1973 and 1981",
    "tradition": "Modern Western philosophy",
    "type": "A thought experiment. A thought experiment is an imagined situation used to test an idea.",
    "setup": [
      "Imagine that an evil scientist has removed your brain from your body while you were asleep. The scientist has placed your brain in a vat filled with nutrients that keep it alive.",
      "The nerve endings of your brain are connected to a powerful computer. The computer sends your brain exactly the same electrical signals that your brain would receive from a real body in a real world. So you seem to see trees and people, feel the sun, walk, eat and talk. Everything seems completely normal.",
      "If you try to lift your arm, the computer shows you your arm rising. If you look in a mirror, you see a body. You have no way of noticing that anything is wrong.",
      "The question is simple. How do you know that you are not a brain in a vat right now? Every test you could do would give the same results, because the computer controls all your experiences.",
      "The philosopher Hilary Putnam described this scenario in 1981. He then argued that the sentence “I am a brain in a vat” cannot be true when you say it. The words brain and vat get their meaning from real contact with real brains and vats. A brain in a vat has never had such contact. So when the brain in the vat thinks about a brain in a vat, it is not really thinking about real brains and vats."
    ],
    "question": "If all your experiences could be produced by a machine, how can you know that the world is real?",
    "reveals": "The brain in a vat is a modern version of Descartes’s evil demon. It shows that our experiences alone cannot prove that the outside world exists as we think it does. It also raises questions about meaning. Putnam’s reply suggests that our words and thoughts are tied to the real world that we interact with. If Putnam is right, complete doubt about the world may not even make sense.",
    "readings": [
      [
        "Sceptical reading",
        "We cannot rule out the scenario, so we cannot be certain that we know anything about the outside world."
      ],
      [
        "Putnam’s reply",
        "The meaning of our words depends on our real contact with things. So the thought “I am a brain in a vat” defeats itself. This view of meaning is called semantic externalism."
      ],
      [
        "Popular culture",
        "Films such as The Matrix (1999) use the same idea. In the film, people live inside a computer simulation without knowing it."
      ]
    ],
    "breaks": [
      "Putnam’s reply works only if his theory of meaning is correct, and many philosophers dispute that theory.",
      "The scenario requires technology far beyond anything real. It is a tool for thinking, not a realistic possibility.",
      "Even if we cannot rule the scenario out, it gives us no reason to act differently. Ordinary evidence remains our best guide."
    ],
    "uses": [
      "Virtual reality: As digital experiences become more realistic, questions about what counts as a real experience become practical.",
      "Neurotechnology: Devices that connect brains to computers raise questions about the privacy of thought and the manipulation of experience.",
      "Media and information: People who see only information chosen for them by algorithms can live inside a narrow, controlled picture of the world.",
      "Exam use: In the Essay paper, use it for topics on technology, reality and knowledge. In GS-IV, use it for the ethics of emerging technologies."
    ],
    "related": [
      "demon",
      "dream",
      "cave",
      "experience",
      "boltzmann",
      "maya"
    ],
    "reading": [
      [
        "“Brain in a vat”, Wikipedia",
        "Free overview of the scenario and Putnam’s argument.",
        "https://en.wikipedia.org/wiki/Brain_in_a_vat"
      ],
      [
        "“Skepticism”, Stanford Encyclopedia of Philosophy",
        "",
        "https://plato.stanford.edu/entries/skepticism/"
      ]
    ]
  },
  "theseus": {
    "source": "Plutarch, Life of Theseus, chapter 23. Thomas Hobbes added a second question in De Corpore (1655), Part 2, chapter 11.",
    "period": "Plutarch wrote around 100 CE. Hobbes wrote in 1655.",
    "tradition": "Greek philosophy, later taken up by modern Western philosophers",
    "type": "A paradox. A paradox is a puzzle in which two sensible answers seem to contradict each other.",
    "setup": [
      "Theseus was a hero of Greek legend. He sailed to Crete, killed the Minotaur, and brought a group of young Athenians safely home. The Greek writer Plutarch says that the people of Athens kept the ship he sailed in for a very long time. The ship had thirty oars.",
      "Over the years, the wooden planks of the ship began to rot. Each time a plank decayed, the Athenians took it out and put in a new, strong plank. So the ship slowly changed, piece by piece.",
      "Plutarch says that philosophers used this ship as an example in their debates about change. Some argued that it was still the same ship. Others argued that it was not. The question becomes sharper if we imagine that, after many years, every plank has been replaced. Not one piece of the original wood is left. Is it still the ship of Theseus?",
      "In 1655, the English philosopher Thomas Hobbes made the puzzle harder. Suppose someone collected all the old planks as they were taken out. Later, he used these old planks to build a second ship. Now there are two ships. One has the original shape and history, but all new wood. The other is made entirely of the original wood. Which one is the real ship of Theseus?"
    ],
    "question": "If every part of a thing is replaced, is it still the same thing?",
    "reveals": "The puzzle shows that the word “same” can mean different things. A thing can stay the same in its material, its shape, its purpose or its history. Usually all of these go together, so we never notice the difference. The ship of Theseus pulls them apart. Hobbes’s version shows this most clearly. The rebuilt ship has the same material. The repaired ship has the same continuous history. Our answer depends on which kind of sameness we care about.",
    "readings": [
      [
        "Sameness of material",
        "A thing is the same only if it is made of the same material. On this view, the ship built from the old planks is the real ship."
      ],
      [
        "Sameness of form and history",
        "A thing stays the same if it keeps its shape and has a continuous history, even if its parts change slowly. On this view, the repaired ship in the harbour is the real ship."
      ],
      [
        "It depends on the purpose",
        "Some philosophers say that there is no single correct answer. The answer depends on why we are asking. A museum may care about the original wood. A sailor may care about the ship that is still in use."
      ],
      [
        "Buddhist parallel",
        "An ancient Buddhist text, the Da zhidu lun, tells a similar story about a traveller whose body parts are replaced one by one by two demons. Buddhist thinkers use such examples to argue that there is no fixed, unchanging self."
      ]
    ],
    "breaks": [
      "A ship is an object that people build and name. For such objects, sameness may be a matter of human agreement. So the puzzle may be more about our words than about the world.",
      "Living beings are different from ships. Memory and personality give a person a strong kind of continuity that a ship does not have.",
      "The puzzle suggests that there must be one right answer. In practice, law and custom often decide such questions case by case."
    ],
    "uses": [
      "Institutions: The Constitution of India has been amended more than a hundred times. Yet we still call it the same Constitution, because it has a continuous legal history.",
      "Organisations: A company or a government department may replace all of its staff over the years. The organisation is still treated as the same body.",
      "Personal responsibility: Many cells in the human body are replaced over time, and a person’s views change over a lifetime. Yet we still hold people responsible for what they did years ago.",
      "Heritage conservation: When an old monument is repaired with new stone, people debate whether it is still the original monument.",
      "Exam use: In the Essay paper, use it for topics on change, identity, tradition and reform. In GS-IV, use it when discussing whether institutions keep their values as they change."
    ],
    "related": [
      "butterflydream",
      "aggregates",
      "vat",
      "uddalaka",
      "indra"
    ],
    "reading": [
      [
        "Plutarch’s Lives, Volume 1, translated by Aubrey Stewart and George Long",
        "The ship is described in the Life of Theseus. Free on Project Gutenberg.",
        "https://www.gutenberg.org/ebooks/14033"
      ],
      [
        "“Identity Over Time”, Stanford Encyclopedia of Philosophy",
        "",
        "https://plato.stanford.edu/entries/identity-time/"
      ]
    ]
  },
  "zeno": {
    "source": "Zeno of Elea’s paradoxes are known mainly from Aristotle, Physics, Book 6, chapter 9.",
    "period": "Zeno lived around 490 to 430 BCE. Aristotle wrote in the fourth century BCE.",
    "tradition": "Greek philosophy",
    "type": "A paradox. A paradox is a puzzle in which two sensible answers seem to contradict each other.",
    "setup": [
      "Zeno was a Greek philosopher from Elea, in southern Italy. He was a student of Parmenides, who taught that reality is one and unchanging, and that change and motion are only illusions. Zeno invented paradoxes to show that the ordinary belief in motion leads to absurd results.",
      "The Dichotomy paradox goes like this. Suppose a runner wants to reach the end of a racetrack. Before he can reach the end, he must first reach the halfway point. Before he can reach the halfway point, he must reach the quarter point. Before that, he must reach the one-eighth point, and so on without end.",
      "So the runner must pass through an infinite number of points before reaching the end. Zeno asked how anyone can complete an infinite number of tasks in a limited time. On this reasoning, the runner can never finish. Worse, he can never even start, because every first step has a smaller step before it.",
      "A related paradox tells of the fast hero Achilles racing a slow tortoise that has a head start. When Achilles reaches the place where the tortoise was, the tortoise has moved a little further. When he reaches that new place, the tortoise has moved again. So, Zeno argued, Achilles can never catch the tortoise.",
      "Of course, runners do finish races, and Achilles would overtake the tortoise. Zeno’s challenge was to explain what is wrong with the reasoning."
    ],
    "question": "How can anything move, if every distance can be divided into infinitely many parts?",
    "reveals": "Zeno showed that ideas we take for granted, such as motion and space, hide deep puzzles about infinity. For centuries, thinkers struggled to explain where the argument goes wrong. Aristotle replied that a distance can be divided without end, but it is not actually made of infinitely many parts. Much later, mathematics showed that an infinite series of smaller and smaller amounts can add up to a finite total. One half, plus one quarter, plus one eighth, and so on, adds up to exactly one. So the paradox helped to push forward the mathematics of infinity.",
    "readings": [
      [
        "Aristotle’s reply",
        "A distance can be divided without end in thought, but it is not actually made of infinitely many separate parts. So the runner does not have to complete an actual infinity of tasks."
      ],
      [
        "Mathematical reply",
        "In the nineteenth century, mathematicians made the idea of a limit precise. An infinite series can have a finite sum, and infinitely many shorter and shorter steps can be completed in a finite time."
      ],
      [
        "Continuing debate",
        "Some philosophers say that the mathematics describes the numbers but does not fully explain how a physical runner completes infinitely many steps. They still debate whether such infinite tasks are possible."
      ]
    ],
    "breaks": [
      "The paradox assumes that space and time can be divided without limit. Some modern physics suggests that there may be a smallest meaningful length and time.",
      "Zeno’s aim was to prove that motion is an illusion. Almost no one accepts this conclusion, even when they cannot easily answer his argument.",
      "The paradox works on paper, but it tells us little about solving practical problems of movement or measurement."
    ],
    "uses": [
      "Planning and delay: A person who keeps splitting a task into smaller preparation steps may never start. Sometimes the only way forward is to act.",
      "Policy reform: Reforms that wait until every small condition is met may never begin. Progress often means moving forward while problems are still being solved.",
      "Critical thinking: An argument can seem logical and still reach a false conclusion. Finding the hidden assumption is an important skill.",
      "Exam use: In the Essay paper, use it for topics on action, progress, logic and paradox."
    ],
    "related": [
      "theseus",
      "maxwell",
      "laplace",
      "butterfly",
      "montyhall",
      "meno"
    ],
    "reading": [
      [
        "“Zeno’s Paradoxes”, Stanford Encyclopedia of Philosophy",
        "",
        "https://plato.stanford.edu/entries/paradox-zeno/"
      ],
      [
        "“Zeno’s paradoxes”, Wikipedia",
        "Free overview of all the paradoxes and the replies to them.",
        "https://en.wikipedia.org/wiki/Zeno%27s_paradoxes"
      ]
    ]
  },
  "meno": {
    "source": "Plato, Meno (80d–86c)",
    "period": "Plato wrote the Meno in Athens in the early fourth century BCE.",
    "tradition": "Greek philosophy",
    "type": "A dialogue with a demonstration",
    "setup": [
      "In the dialogue Meno, a young man named Meno asks Socrates whether virtue can be taught. Socrates questions him until Meno becomes confused. Meno says that Socrates is like a torpedo fish, which numbs anyone who touches it.",
      "Then Meno raises a puzzle. How can a person search for something he does not know? If he does not know what it is, he will not know what to look for. And if he finds it, he will not recognise it. So learning seems impossible.",
      "Socrates answers with a theory. The soul is immortal and has learned everything before this life. What we call learning is really remembering. To show this, he calls one of Meno’s young slaves, a boy who has never studied geometry.",
      "Socrates draws a square with sides two feet long. He asks the boy how long the sides must be for a square with double the area, eight square feet. The boy says that the sides must be double, four feet long. Socrates shows him that such a square would be sixteen square feet, not eight. The boy then guesses three feet, which gives nine square feet. Now the boy is confused, and he admits that he does not know.",
      "Socrates says that this confusion is progress, because the boy now wants to find out. Through more questions, without telling him the answer, Socrates leads the boy to see that the square built on the diagonal of the first square has double the area. Socrates claims that the boy has recollected knowledge that was already in his soul."
    ],
    "question": "How can we learn something new, if we must already know what we are looking for?",
    "reveals": "The demonstration shows that good questions can draw out understanding that a person did not know he had. The boy moves from false confidence, to honest confusion, to real insight. Socrates treats confusion as a necessary step in learning, not as failure. Plato explains the boy’s success through the theory that the soul remembers knowledge from before birth. Even readers who reject that theory can see the main lesson: understanding is built by thinking, not simply received from a teacher.",
    "readings": [
      [
        "Plato’s theory of recollection",
        "The soul existed before birth and already knows the truth. Learning is the process of recalling it, and good questioning helps the soul to remember."
      ],
      [
        "Innate ideas",
        "Later philosophers, such as Descartes and Leibniz, argued that some knowledge, especially in mathematics and logic, is built into the human mind. Empiricists such as John Locke disagreed and said that all knowledge comes from experience."
      ],
      [
        "Teaching method",
        "The episode is a model of the Socratic method. The teacher asks questions and lets the learner discover the answer. Critics note that Socrates’s questions are leading, so the boy is guided more than the story admits."
      ]
    ],
    "breaks": [
      "Socrates asks many questions that point towards the answer. So the boy may be learning from Socrates, not remembering on his own.",
      "Geometry is a special case, because its truths can be worked out by reasoning. Facts about history or nature cannot be recalled in this way.",
      "The theory of recollection only moves the puzzle back. It does not explain how the soul learned the truths in the first place."
    ],
    "uses": [
      "Education: Teaching by questioning helps students understand ideas instead of memorising them. India’s National Education Policy 2020 also calls for less rote learning and more critical thinking.",
      "Training in administration: Officers learn more from guided case discussions than from long lectures.",
      "Intellectual humility: Admitting “I do not know” is the first step to finding out.",
      "Exam use: In GS-IV, use it for the spirit of inquiry and Plato as a moral thinker. In the Essay paper, use it for topics on education, learning and knowledge."
    ],
    "related": [
      "gadfly",
      "cave",
      "gettier",
      "zeno",
      "uddalaka",
      "indra"
    ],
    "reading": [
      [
        "Plato, Meno, translated by Benjamin Jowett",
        "The demonstration with the boy is in the middle of the dialogue. Free on Project Gutenberg.",
        "https://www.gutenberg.org/ebooks/1643"
      ],
      [
        "“Meno”, Wikipedia",
        "Free overview of the dialogue, Meno’s paradox and the theory of recollection.",
        "https://en.wikipedia.org/wiki/Meno"
      ]
    ]
  },
  "gettier": {
    "source": "Edmund Gettier, “Is Justified True Belief Knowledge?”, Analysis 23 (1963)",
    "period": "1963",
    "tradition": "Modern Western philosophy",
    "type": "A thought experiment. A thought experiment is an imagined situation used to test an idea.",
    "setup": [
      "For a long time, many philosophers held that knowledge is justified true belief. On this view, three things are needed for you to know something. You must believe it. It must be true. And you must have good reasons for believing it.",
      "In 1963, the American philosopher Edmund Gettier published a three-page paper with a simple story. Smith and Jones have both applied for the same job. Smith has strong evidence that Jones will get the job, because the company president has told him so. Smith has also counted the coins in Jones’s pocket, and there were ten. So Smith believes, with good reason, that the man who will get the job has ten coins in his pocket.",
      "But Smith is wrong about who gets the job. Smith himself is chosen. And without knowing it, Smith also has ten coins in his own pocket. So Smith’s belief, that the man who will get the job has ten coins in his pocket, turns out to be true.",
      "Smith’s belief is true. He believes it. And he had good reasons for it. Yet it seems wrong to say that Smith knew it. His belief was true only by luck.",
      "Similar puzzles are much older. The Indian Buddhist philosopher Dharmottara, in the eighth century CE, gave examples of beliefs that turn out to be true only by luck. Bertrand Russell later described a person who looks at a stopped clock that happens to show the correct time."
    ],
    "question": "If a belief is true and you have good reasons for it, do you really know it?",
    "reveals": "The Gettier case shows that good reasons and truth can come together by accident. Smith’s reasons were about Jones, but his belief was made true by facts about himself. Knowledge seems to need a proper connection between the reasons and the truth, not just both at the same time. Since 1963, philosophers have proposed many extra conditions to repair the definition of knowledge, and none has satisfied everyone.",
    "readings": [
      [
        "A fourth condition",
        "Some philosophers say that knowledge also requires that the reasons do not depend on anything false. Smith’s reasoning depended on the false belief that Jones would get the job."
      ],
      [
        "Reliabilism",
        "Other philosophers say that knowledge must come from a reliable process, such as good eyesight or careful reasoning, which usually produces true beliefs."
      ],
      [
        "Knowledge first",
        "Some philosophers, such as Timothy Williamson, argue that knowledge cannot be broken down into simpler parts at all. For them, knowledge is a basic idea in its own right."
      ]
    ],
    "breaks": [
      "The cases are carefully built and unusual. In ordinary life, lucky true beliefs of this kind are rare.",
      "Some philosophers asked whether the reaction to the case is shared across cultures. Later studies found that people in many different cultures also judge that Smith does not know.",
      "The puzzle is about the definition of knowledge. It does not tell us what to do when we must act on the best evidence available."
    ],
    "uses": [
      "Judicial reasoning: A court may reach the right verdict for the wrong reasons. Justice requires both a correct result and sound reasoning.",
      "Investigations and audits: A conclusion supported by faulty evidence is dangerous, even if it turns out to be true. Good procedures check the reasoning, not only the result.",
      "Evaluation: A student may get the right answer by a lucky guess. Testing understanding, and not only answers, avoids rewarding luck.",
      "Exam use: In GS-IV, use it for objectivity and the difference between being right and being justified. In the Essay paper, use it for topics on knowledge, luck and truth."
    ],
    "related": [
      "meno",
      "dream",
      "cave",
      "blindmen",
      "syadvada",
      "montyhall"
    ],
    "reading": [
      [
        "Edmund Gettier, “Is Justified True Belief Knowledge?”, Analysis 23 (1963)",
        "",
        "https://doi.org/10.1093/analys/23.6.121"
      ],
      [
        "“The Analysis of Knowledge”, Stanford Encyclopedia of Philosophy",
        "",
        "https://plato.stanford.edu/entries/knowledge-analysis/"
      ]
    ]
  },
  "butterflydream": {
    "source": "Zhuangzi, chapter 2 (Qiwulun), the closing story of the chapter",
    "period": "The Zhuangzi was written in China during the Warring States period (476 to 221 BCE).",
    "tradition": "Chinese philosophy (Daoism)",
    "type": "A parable in the form of a dream. A parable is a simple story that teaches a lesson.",
    "setup": [
      "Zhuangzi, also known as Zhuang Zhou, was a Chinese thinker who lived around the fourth century BCE. He is one of the founders of Daoism. The book that carries his name is full of short stories and humour that make readers question their fixed ideas.",
      "In one of its most famous stories, Zhuangzi says that he once dreamed he was a butterfly. In the dream, he flew here and there, happy and free. He was a butterfly in every way. He did not know that he was Zhuangzi.",
      "Suddenly he woke up. He was lying there, himself again, plainly Zhuangzi.",
      "But then he began to wonder. Was he Zhuangzi, who had dreamed that he was a butterfly? Or was he a butterfly, who was now dreaming that it was Zhuangzi? He could not be sure.",
      "The story ends with one more remark. Between Zhuangzi and the butterfly, there must be some difference. Zhuangzi says that this is called the transformation of things."
    ],
    "question": "How can you be sure that your present life is not a dream?",
    "reveals": "While we are dreaming, the dream feels completely real. So feeling sure that we are awake does not prove that we are awake. The story questions the fixed line between dreaming and waking, and between one identity and another. But Zhuangzi does not end in confusion. He says that there is a difference between the man and the butterfly, and he calls the change from one to the other the transformation of things. Life is a flow of changes, and we should not cling too tightly to one form.",
    "readings": [
      [
        "Sceptical reading",
        "We cannot prove that we are awake. The French philosopher René Descartes made a similar argument about dreams, about two thousand years later."
      ],
      [
        "Daoist reading: transformation",
        "Everything is always changing from one form into another. Being a man and being a butterfly are both passing forms. A wise person accepts change, including death, calmly."
      ],
      [
        "Reading about points of view",
        "In the chapter where this story appears, Zhuangzi argues that every point of view sees only part of the truth. No single viewpoint, not even our normal waking human one, is the only correct one."
      ]
    ],
    "breaks": [
      "The story ends by saying that there is a difference between Zhuangzi and the butterfly. So it does not claim that nothing can be known. Reading it as complete doubt goes too far.",
      "In daily life, dreams and waking life are usually easy to tell apart. Waking life is connected and lasting, and dreams are not.",
      "A person who takes the story too literally may start to treat real responsibilities as unreal."
    ],
    "uses": [
      "Roles and identity: People move between many roles, such as student, officer, parent and citizen. The story reminds us not to treat one role as our whole identity.",
      "Technology: Virtual reality and artificial intelligence make it harder to tell real experiences from manufactured ones.",
      "Accepting change: The idea of transformation can help people face retirement, loss or other big changes calmly.",
      "Exam use: In the Essay paper, use it for topics on reality and illusion, identity and change. In GS-IV, use it as a Chinese parallel when writing about detachment or points of view."
    ],
    "related": [
      "dream",
      "vat",
      "maya",
      "theseus",
      "uselesstree",
      "blindmen"
    ],
    "reading": [
      [
        "Chuang Tzu: Mystic, Moralist, and Social Reformer, translated by Herbert A. Giles (1889)",
        "The butterfly dream is at the end of chapter 2. Free on Project Gutenberg.",
        "https://www.gutenberg.org/ebooks/59709"
      ],
      [
        "Zhuangzi, chapter 2, Chinese Text Project",
        "The original Chinese text with James Legge’s English translation.",
        "https://ctext.org/zhuangzi/adjustment-of-controversies"
      ],
      [
        "“Zhuangzi”, Stanford Encyclopedia of Philosophy",
        "",
        "https://plato.stanford.edu/entries/zhuangzi/"
      ]
    ]
  },
  "boltzmann": {
    "source": "Named after the physicist Ludwig Boltzmann, who suggested in 1896 that our ordered universe might be a rare random fluctuation. In modern cosmology, physicists such as Andreas Albrecht and Lorenzo Sorbo (2004) and Sean Carroll (2017) have discussed the problem.",
    "period": "1896, and widely discussed in cosmology since the early 2000s",
    "tradition": "Physics and philosophy of science",
    "type": "A thought experiment. A thought experiment is an imagined situation used to test an idea.",
    "setup": [
      "In physics, entropy is a measure of disorder. The second law of thermodynamics says that the disorder of a closed system tends to increase over time. So why is our universe so orderly, with stars, planets and living beings?",
      "In 1896, the Austrian physicist Ludwig Boltzmann suggested an answer. Perhaps the universe as a whole is disordered, but over enormous stretches of time, random fluctuations sometimes create small patches of order. We might simply live in one of these rare patches.",
      "Later physicists found a problem with this idea. Small fluctuations are far more likely than large ones. A fluctuation that creates a whole universe full of galaxies is extremely unlikely. A fluctuation that creates just a single brain, floating in space for a moment, is much more likely.",
      "A brain formed in this way would have false memories and false experiences, including the experience of living in an orderly universe. If Boltzmann’s idea were right, brains like this, called Boltzmann brains, would vastly outnumber normal observers like us. So on this theory, you would most likely be one of them, and your memories of the past would be false.",
      "Physicists do not believe that we are Boltzmann brains. Instead, they use the argument as a test. If a theory of the universe predicts that most observers are Boltzmann brains, the theory is probably wrong."
    ],
    "question": "If a theory says that your memories are probably false, should you believe that theory?",
    "reveals": "The Boltzmann brain turns a strange possibility into a practical tool. A good theory of the universe must explain why observers like us, with reliable memories of a real past, are typical. A theory that makes our own experience extremely unlikely undermines the very evidence on which the theory was built. The physicist Sean Carroll calls such theories cognitively unstable: if they were true, we would have no reason to believe them.",
    "readings": [
      [
        "A test for theories",
        "Cosmologists use the argument to rule out models of the universe that would produce too many random observers."
      ],
      [
        "A form of scepticism",
        "The idea is a scientific cousin of Descartes’s evil demon and the brain in a vat. It asks whether all our experience could be completely misleading."
      ],
      [
        "A problem of probability",
        "The argument depends on how we count observers and compare infinite numbers. Some physicists argue that these calculations are not reliable."
      ]
    ],
    "breaks": [
      "The calculations involve enormous time scales and infinities, where our physical theories may not apply.",
      "The argument depends on assumptions about how to reason about which kind of observer we are, and these assumptions are disputed.",
      "Even if Boltzmann brains were possible, we could never test whether we are one. So the idea is useful mainly as a check on theories."
    ],
    "uses": [
      "Scientific reasoning: A theory that destroys the reliability of its own evidence should be rejected. The same test applies to conspiracy theories that dismiss all evidence against them.",
      "Checking models: Large models of the economy or the climate must be checked for results that contradict the observations on which they are based.",
      "Probability and risk: Rare events can become likely when there are enormous numbers of chances. Understanding this helps in thinking clearly about risk.",
      "Exam use: In the Essay paper, use it for topics on science, knowledge and uncertainty."
    ],
    "related": [
      "dream",
      "demon",
      "vat",
      "maxwell",
      "sleepingbeauty",
      "fermi"
    ],
    "reading": [
      [
        "Andreas Albrecht and Lorenzo Sorbo, “Can the universe afford inflation?” (2004)",
        "A 2004 paper that discusses the problem. Free on arXiv.",
        "https://arxiv.org/abs/hep-th/0405270"
      ],
      [
        "Sean M. Carroll, “Why Boltzmann Brains Are Bad” (2017)",
        "Free on arXiv.",
        "https://arxiv.org/abs/1702.00850"
      ]
    ]
  },
  "gyges": {
    "source": "Plato, Republic, Book II (359c–360d). An older version, without the ring, is in Herodotus, Histories, Book I (8–13).",
    "period": "Plato wrote the Republic in Athens around 375 BCE. Herodotus wrote around 430 BCE.",
    "tradition": "Greek philosophy",
    "type": "A thought experiment told as a story",
    "setup": [
      "In Book II of the Republic, Glaucon challenges Socrates. Glaucon says that people do not follow justice because they love it. They follow it only because they are afraid of punishment. To prove his point, he tells the story of a shepherd named Gyges.",
      "Gyges worked for the king of Lydia. One day there was a heavy storm and an earthquake. The ground split open where Gyges was grazing his sheep. He went down into the gap. There he found a hollow horse made of bronze, with small doors in it. Inside the horse there was a dead body. The body was larger than a normal man, and it was wearing only a gold ring. Gyges took the ring and climbed out.",
      "Later, Gyges sat with the other shepherds at their monthly meeting. By chance, he turned the top of the ring towards the inside of his hand. At once he became invisible. The other shepherds started talking about him as if he had left. When he turned the ring back, he became visible again. He tried this again and again, and it worked every time.",
      "Gyges then used the ring for his own gain. He arranged to be sent to the palace as a messenger. There he started an affair with the queen. With her help, he killed the king and took over the kingdom.",
      "Glaucon then asks Socrates to imagine two such rings. One is given to a just man and the other to an unjust man. Glaucon says that both men would behave in the same way. Both would take whatever they wanted, because no one could see them. So, according to Glaucon, nobody is just by choice. People are just only when they are forced to be."
    ],
    "question": "Would you still do the right thing if you knew you could never be caught?",
    "reveals": "The story separates two things: being good and only looking good. If people are honest only because they fear punishment, then the ring would end their honesty. Plato does not agree with this. He says that justice is a healthy state of the mind, in which reason controls desire and anger. A person who uses the ring to do wrong is not truly free. He is a slave to his own desires. So the ring does not change what is right. It only shows what kind of person someone already is.",
    "readings": [
      [
        "Plato’s answer",
        "Justice is good in itself, not only for its rewards. A person who uses the ring to do wrong harms his own soul."
      ],
      [
        "Social contract view",
        "Glaucon’s argument is an early form of the social contract idea, which Thomas Hobbes later developed. In this view, people follow rules only because they are afraid of being harmed by others."
      ],
      [
        "Herodotus’s older story",
        "Herodotus tells the story of Gyges without any magic ring. In his version, Gyges is the bodyguard of King Candaules. The king forces Gyges to secretly see the queen without her clothes. The queen finds out. She tells Gyges that he must either kill the king or be killed himself. Plato took this known story and added the ring to make a point about morality."
      ]
    ],
    "breaks": [
      "The ring hides a person from others, but not from his own conscience. Many people feel guilty even when no one knows what they did.",
      "The story treats human nature as fixed. In real life, upbringing, habits and values shape how people act when no one is watching.",
      "Research gives mixed results. Some people cheat more when no one can identify them, but many people stay honest."
    ],
    "uses": [
      "Integrity: Integrity means behaving the same way whether or not someone is watching. The ring of Gyges is the classic test of integrity.",
      "Accountability: Audits, the Right to Information Act, CCTV cameras and digital records make the actions of officials visible. In this way, they take away the ring.",
      "Online behaviour: People who hide behind anonymous accounts often behave worse than they would in person.",
      "Exam use: In GS-IV, use it for integrity, probity and conscience, and when writing about Plato. In the Essay paper, use it for topics on character and integrity."
    ],
    "related": [
      "statenature",
      "pd",
      "panopticon",
      "cave",
      "noblelie",
      "milgram"
    ],
    "reading": [
      [
        "Plato, The Republic, translated by Benjamin Jowett",
        "Book II has Glaucon’s challenge. Free on Project Gutenberg.",
        "https://www.gutenberg.org/ebooks/1497"
      ],
      [
        "Herodotus, Histories, Book I, translated by G. C. Macaulay",
        "The older story without the ring. Free on Project Gutenberg.",
        "https://www.gutenberg.org/ebooks/2707"
      ],
      [
        "“Plato’s Ethics: An Overview”, Stanford Encyclopedia of Philosophy",
        "",
        "https://plato.stanford.edu/entries/plato-ethics/"
      ]
    ]
  },
  "trolley": {
    "source": "Philippa Foot, “The Problem of Abortion and the Doctrine of the Double Effect” (1967). Judith Jarvis Thomson, “Killing, Letting Die, and the Trolley Problem” (1976) and “The Trolley Problem” (1985).",
    "period": "Modern moral philosophy, 1967 to 1985",
    "tradition": "Modern Western philosophy",
    "type": "A thought experiment. A thought experiment is an imagined situation used to test an idea.",
    "setup": [
      "The philosopher Philippa Foot first described this problem in 1967. A tram is out of control. The driver cannot stop it. He can only choose which track it goes down. Five workers are on one track. One worker is on the other track. Most people say that the driver should turn the tram towards the one worker.",
      "Foot compared this with another case. Some rioters want someone to be punished for a crime. If no one is punished, they will attack a whole community. The real criminal is unknown. A judge can stop the violence only by blaming an innocent man and having him executed. Almost everyone says that the judge must not do this. But in both cases, one person dies so that more people can live. So what is the difference?",
      "Later, the philosopher Judith Jarvis Thomson changed the first case. Now you are standing next to a switch. A trolley is heading towards five people. If you pull the switch, the trolley will go onto a side track and kill one person instead. Most people say that it is acceptable to pull the switch.",
      "Thomson then gave a second version. You are standing on a bridge above the track. Next to you is a very heavy man. If you push him off the bridge, his body will stop the trolley. The five people will be saved, but he will die. Most people say that you must not push him. Yet the numbers are the same. One person dies and five people live."
    ],
    "question": "Is it right to kill one person to save five? And does it matter how you do it?",
    "reveals": "The problem shows that people do not judge right and wrong by numbers alone. They also care about how a death happens. Is the death caused directly, or is it a side effect? Is a person being used as a tool to save others? Is someone acting, or only allowing something to happen? The trolley problem is not really about trains. It is a tool for testing moral principles.",
    "readings": [
      [
        "Doctrine of double effect",
        "When you pull the switch, you know that one person will die, but his death is not your aim. It is a side effect. When you push the man, his death is the very thing that saves the five. According to this doctrine, harm that is a side effect can sometimes be allowed. Harm that is used as a means cannot be allowed."
      ],
      [
        "Kant’s ethics",
        "Pushing the man treats him only as a tool for saving others. Kant said that we must never treat a person only as a means. Pulling the switch does not use the one person in this way."
      ],
      [
        "Consequentialism",
        "Only the results matter. In both cases one person dies and five are saved. So both acts are equally right. The discomfort we feel about pushing is only a feeling. It is not a moral reason."
      ],
      [
        "Psychology",
        "In 2001, the psychologist Joshua Greene scanned people’s brains while they thought about these cases. Pushing someone with your own hands caused stronger emotional reactions. Pulling a switch involved more calm reasoning."
      ]
    ],
    "breaks": [
      "In real life, we are rarely certain about what will happen. The trolley problem removes all doubt. But real dilemmas are hard mainly because of doubt.",
      "The trolley problem looks at one person making one choice. In public life, most harm happens through systems, rules and delays, not through one person at a switch.",
      "Some philosophers say that we should not trust our reactions to strange imaginary cases too much. Thomson herself changed her mind in 2008. She argued that the person at the switch is not allowed to pull it either."
    ],
    "uses": [
      "Self-driving cars: The Moral Machine experiment was published in Nature in 2018. It collected millions of people’s choices about whom a self-driving car should save in an accident.",
      "Medical triage: Doctors sometimes have to decide who gets a ventilator or an organ when there are not enough for everyone.",
      "Public policy: Some policies harm a few people to help many people. Examples are land acquisition for a dam and a lockdown during a pandemic.",
      "Exam use: In GS-IV, use it to explain consequentialism and deontology, and to frame dilemmas in case studies. In the Essay paper, use it for topics on means and ends."
    ],
    "related": [
      "veil",
      "gyges",
      "heinz",
      "omelas",
      "experience",
      "arjuna"
    ],
    "reading": [
      [
        "“Doctrine of Double Effect”, Stanford Encyclopedia of Philosophy",
        "Explains the trolley cases and the principle used to explain them.",
        "https://plato.stanford.edu/entries/double-effect/"
      ],
      [
        "Judith Jarvis Thomson, “The Trolley Problem”, Yale Law Journal 94 (1985)",
        "",
        "https://doi.org/10.2307/796133"
      ],
      [
        "Edmond Awad and others, “The Moral Machine experiment”, Nature 563 (2018)",
        "",
        "https://doi.org/10.1038/s41586-018-0637-6"
      ]
    ]
  },
  "experience": {
    "source": "Robert Nozick, Anarchy, State, and Utopia (1974), pages 42 to 45",
    "period": "United States, 1974",
    "tradition": "Modern Western philosophy",
    "type": "A thought experiment. A thought experiment is an imagined situation used to test an idea.",
    "setup": [
      "The philosopher Robert Nozick asked his readers to imagine a machine. Scientists could connect your brain to this machine. The machine would give you any experience you wanted. You could feel that you were writing a great novel, making a friend, or reading an interesting book. The experiences would feel completely real.",
      "But in reality, you would be floating in a tank with electrodes attached to your brain. While you were connected, you would not know that you were in a machine. You could choose all the experiences of your life in advance. You could fill your life with success, love and pleasure. Every two years, you could leave the machine for a short time to choose your next set of experiences.",
      "Nozick then asked a simple question. Would you connect yourself to this machine for the rest of your life? Most people say no, even though the machine promises a life full of pleasure.",
      "Nozick gave three reasons for this answer. First, we want to actually do things, and not only feel that we are doing them. Second, we want to be a certain kind of person, such as brave, kind or wise. A person floating in a tank is not any kind of person. Third, the machine would limit us to a world made by humans. We want contact with a deeper reality."
    ],
    "question": "If a machine could give you a life of perfect pleasure, would you choose it over your real life?",
    "reveals": "If pleasure were the only thing that mattered, everyone should choose the machine. But most people refuse. Their refusal suggests that we value more than good feelings. We value real achievements, real relationships and being in touch with reality. So the thought experiment is a strong argument against hedonism, the view that pleasure is the only thing that is good in itself.",
    "readings": [
      [
        "Nozick’s view",
        "Pleasure is not the only thing that makes a life good. What we do, who we are, and our contact with reality also matter."
      ],
      [
        "Status quo bias",
        "The philosopher Felipe De Brigard turned the question around. He asked people to imagine that they were already inside such a machine, and asked whether they wanted to disconnect. Many did not. When people were told that their real life outside was the life of a prisoner, only 13 percent wanted to disconnect. These results suggest that people mostly prefer to keep whatever life they already have."
      ],
      [
        "Defence of hedonism",
        "Some philosophers say that people refuse the machine because of fear and distrust, not because pleasure is unimportant. If we could fully trust the machine, the choice might be different."
      ]
    ],
    "breaks": [
      "The machine is imaginary, so people may not trust that it would really work. Their answers may show fear, not what they truly value.",
      "Much of real life is also shaped by others, through advertising and social media. So the line between real and manufactured experience is not always sharp.",
      "The thought experiment shows what people prefer. It does not, by itself, prove what is truly good for them."
    ],
    "uses": [
      "Social media and gaming: Many digital products are designed to give pleasant experiences that keep people engaged. The experience machine helps us ask whether this really makes lives better.",
      "Addiction: Drugs and gambling give strong pleasant feelings while they damage a person’s real life.",
      "Measuring progress: Governments that measure only income or happiness scores may miss other parts of a good life, such as freedom, relationships and achievement.",
      "Exam use: In GS-IV, use it for the limits of hedonism and utilitarianism, and for the ethics of technology. In the Essay paper, use it for topics on happiness, technology and the meaning of a good life."
    ],
    "related": [
      "nachiketa",
      "cave",
      "vat",
      "sisyphus",
      "maya",
      "hedonic"
    ],
    "reading": [
      [
        "“Hedonism”, Stanford Encyclopedia of Philosophy",
        "Discusses the experience machine as an objection to hedonism.",
        "https://plato.stanford.edu/entries/hedonism/"
      ],
      [
        "Felipe De Brigard, “If you like it, does it matter if it’s real?”, Philosophical Psychology 23 (2010)",
        "The study that reversed the question.",
        "https://doi.org/10.1080/09515080903532290"
      ]
    ]
  },
  "veil": {
    "source": "John Rawls, A Theory of Justice (1971)",
    "period": "United States, 1971",
    "tradition": "Modern Western political philosophy",
    "type": "A thought experiment. A thought experiment is an imagined situation used to test an idea.",
    "setup": [
      "Imagine that a group of people must choose the basic rules for a new society. These rules will decide how rights, jobs, income and wealth are shared. After the rules are chosen, the people will live in that society for the rest of their lives.",
      "But there is a condition. While they choose the rules, they must stand behind a veil of ignorance. Behind this veil, no one knows who they will be in that society. They do not know whether they will be rich or poor. They do not know their social class or caste, their race or their gender. They do not know their talents or their intelligence. They do not even know what kind of life they will want to live.",
      "Rawls called this imagined situation the original position. He asked what rules people would choose in it. Since no one knows where they will end up, no one can make rules that favour themselves. A person who might be born poor will not choose rules that are harsh on the poor.",
      "Rawls argued that people in this position would choose two principles. First, every person should have the same basic liberties, such as freedom of speech and freedom of conscience. Second, inequalities of income and position are allowed only if two conditions are met. Jobs and positions must be open to everyone under fair equality of opportunity. And the inequalities must bring the greatest benefit to the people who are worst off."
    ],
    "question": "What rules would you choose for society if you did not know who you would be in it?",
    "reveals": "The veil of ignorance is a test of fairness. Most people defend rules that suit their own position. The veil removes this bias, because no one knows their position. Rawls believed that fair rules must protect everyone’s basic freedoms, and must pay special attention to the people who are worst off. In this view, justice is what people would agree to if they could not favour themselves.",
    "readings": [
      [
        "Rawls’s view: justice as fairness",
        "Rules are fair if free and equal people would accept them without knowing their own position. Such people would want to protect themselves against the worst outcome. So they would protect the least advantaged."
      ],
      [
        "Utilitarian view (John Harsanyi)",
        "The economist John Harsanyi used a similar idea before Rawls. But he argued that people behind the veil would choose the rules that give the highest average welfare, not the best outcome for the worst off."
      ],
      [
        "Communitarian criticism (Michael Sandel)",
        "People cannot really separate themselves from their community, religion and values. A person without any of these is not a real person. So choices made behind the veil may not tell us much about real justice."
      ],
      [
        "Amartya Sen",
        "In The Idea of Justice (2009), Sen argued that we do not need to design a perfectly just society first. It is more useful to compare the real options in front of us and remove clear injustices, such as hunger and discrimination."
      ]
    ],
    "breaks": [
      "No real person can forget who they are. The veil is a tool for thinking, not a situation anyone has ever been in.",
      "The veil hides people’s values and beliefs. But a person’s idea of a good life strongly shapes what they think is fair.",
      "The thought experiment designs ideal rules. It does not tell us how to move from today’s unfair society to a fairer one."
    ],
    "uses": [
      "Constitution making: The makers of a constitution try to create rules that protect all groups, not only the groups in power.",
      "Welfare policy: The veil supports policies that protect the poorest people, such as food security, health insurance and minimum wages.",
      "Affirmative action: The idea of fair equality of opportunity is used in debates about reservations and other support for disadvantaged groups.",
      "A test for officials: Before making a rule, an official can ask, “Would I accept this rule if I were the person most affected by it?”",
      "Exam use: In GS-IV, use it for justice, fairness, impartiality and ethics in public policy. In the Essay paper, use it for topics on equality, social justice and inclusive growth."
    ],
    "related": [
      "trolley",
      "omelas",
      "statenature",
      "gyges",
      "generalwill",
      "commons"
    ],
    "reading": [
      [
        "“Original Position”, Stanford Encyclopedia of Philosophy",
        "Explains the veil of ignorance and the main criticisms of it.",
        "https://plato.stanford.edu/entries/original-position/"
      ],
      [
        "“John Rawls”, Stanford Encyclopedia of Philosophy",
        "",
        "https://plato.stanford.edu/entries/rawls/"
      ]
    ]
  },
  "heinz": {
    "source": "The psychologist Lawrence Kohlberg used the dilemma in his research on moral development, beginning with his doctoral dissertation (1958).",
    "period": "United States, from 1958",
    "tradition": "Moral psychology",
    "type": "A moral scenario. A moral scenario is a short story that asks what a person should do.",
    "setup": [
      "Heinz’s wife was dying of a rare kind of cancer. The doctors believed that one drug might save her. A pharmacist in their town had recently discovered this drug, which was made from radium.",
      "Making the drug cost the pharmacist 200 dollars, but he sold a small dose for 2,000 dollars, ten times his cost. Heinz asked everyone he knew for loans, but he could raise only about 1,000 dollars.",
      "Heinz went to the pharmacist. He explained that his wife was dying and asked for a lower price, or for time to pay the rest later. The pharmacist refused. He said that he had discovered the drug and meant to make money from it. In despair, Heinz broke into the pharmacist’s laboratory and stole the drug for his wife.",
      "Kohlberg asked children and adults a simple question. Should Heinz have stolen the drug? Why, or why not?",
      "Kohlberg was not mainly interested in whether people said yes or no. He was interested in their reasons. Based on these reasons, he described six stages of moral development, grouped into three levels. At the first level, people judge right and wrong by punishment and reward. At the second level, they follow social rules and laws. At the third level, they reason from universal principles, such as justice and the value of human life."
    ],
    "question": "Is it right to break the law to save a life?",
    "reveals": "The dilemma sets two values against each other: obeying the law and respecting property, and saving a human life. Kohlberg’s key insight was that the reasons behind a moral answer show how mature a person’s moral thinking is. One person may say that Heinz should not steal because he will go to jail. Another may say that Heinz should steal because life matters more than property. The two answers differ, but the bigger difference lies in the level of reasoning behind them.",
    "readings": [
      [
        "Kohlberg’s stages",
        "Moral reasoning develops from fear of punishment, to respect for rules and social approval, to principles of justice that apply to everyone. Few adults reach the highest stage."
      ],
      [
        "Carol Gilligan’s criticism",
        "In her book In a Different Voice (1982), Carol Gilligan argued that Kohlberg’s scale favoured an ethic of justice and rules. Kohlberg had built his theory mostly from studies of boys. Gilligan described a different ethic of care, which focuses on relationships and responsibilities."
      ],
      [
        "Cultural criticism",
        "Other researchers argued that Kohlberg’s highest stages reflect Western, individualist values. People in more community-based cultures may reason in different but equally mature ways."
      ]
    ],
    "breaks": [
      "The story is artificial. It offers only two choices, stealing or letting the wife die, and it ignores other options such as public appeals, charities or government help.",
      "Moral reasoning is not the same as moral action. A person can reason at a high level and still behave badly.",
      "Kohlberg’s scoring of reasons is complex, and different researchers can score the same answer differently."
    ],
    "uses": [
      "Access to medicines: Governments regulate the prices of essential medicines. Indian patent law also allows compulsory licences, and India granted one in 2012 so that a cancer drug could be sold at a much lower price.",
      "Law and need: Officials sometimes face citizens who break rules out of desperation. The dilemma helps them to think about both justice and compassion.",
      "Ethics training: Moral dilemmas are used in training to develop reasoning, not only to find a single right answer.",
      "Exam use: In GS-IV, use it for moral development, the ethics of care, law versus conscience and case study analysis. In the Essay paper, use it for topics on law and morality."
    ],
    "related": [
      "trolley",
      "veil",
      "dharma",
      "arjuna",
      "samaritan",
      "gyges"
    ],
    "reading": [
      [
        "“Heinz dilemma”, Wikipedia",
        "Free overview, including sample answers for each of Kohlberg’s stages.",
        "https://en.wikipedia.org/wiki/Heinz_dilemma"
      ],
      [
        "“Feminist Ethics”, Stanford Encyclopedia of Philosophy",
        "Explains Carol Gilligan’s ethic of care.",
        "https://plato.stanford.edu/entries/feminism-ethics/"
      ]
    ]
  },
  "arrow": {
    "source": "Cula-Malunkya Sutta (The Shorter Discourse to Malunkyaputta), Majjhima Nikaya 63, in the Pali Canon",
    "period": "An early Buddhist teaching. The Pali Canon was written down in Sri Lanka in the first century BCE.",
    "tradition": "Indian (Buddhist)",
    "type": "A parable. A parable is a simple story that teaches a lesson.",
    "setup": [
      "Malunkyaputta was a monk who followed the Buddha. One day, while he was sitting alone, a thought troubled him. The Buddha had never answered some big questions. Is the world eternal, or not? Is it finite, or infinite? Is the soul the same as the body, or different? Does an enlightened person exist after death, or not?",
      "Malunkyaputta went to the Buddha. He said that if the Buddha did not answer these questions, he would give up the life of a monk.",
      "The Buddha asked him, “Did I ever promise to answer these questions if you became a monk?” Malunkyaputta said no. Then the Buddha told him a story.",
      "Suppose a man is hit by an arrow covered in poison. His friends and family bring a surgeon to treat him. But the man says, “I will not let this arrow be pulled out until I know who shot me. I want to know his social class, his name and his family. I want to know whether he was tall or short, and which village he came from. I want to know what kind of bow he used, what the bowstring was made of, and which bird’s feathers were on the arrow.” That man would die before he learned all these things.",
      "The Buddha said that a person who refuses to follow the path until these questions are answered would also die first. The answers would not help him. Whatever the answers are, there is still birth, old age, death and suffering. The Buddha said that he teaches what is useful: suffering, its cause, its end, and the path that leads to its end."
    ],
    "question": "Should we stop acting until we have answered every big question?",
    "reveals": "Some questions are interesting, but they do not help with the problem in front of us. A person in danger needs treatment, not a complete theory. The Buddha did not say that the questions were meaningless. He said that answering them would not end suffering, so they could wait. Practical wisdom means knowing which questions need an answer now.",
    "readings": [
      [
        "Buddhist reading",
        "The Buddha set aside questions that do not lead to peace, understanding and freedom from suffering. His teaching is a practical path, not a set of theories to be debated."
      ],
      [
        "Practical reading",
        "The story is close to the modern philosophy of pragmatism, which judges ideas by their practical results. We should focus on the questions whose answers make a difference to how we live."
      ],
      [
        "Critical reading",
        "Scholars ask whether the Buddha avoided these questions because they cannot be answered, or because any answer would mislead people. The Pali texts give practical reasons. But later Buddhist philosophers still debated these questions in great detail."
      ]
    ],
    "breaks": [
      "Sometimes theory is urgent. A doctor may need to know which poison was used in order to treat the wound. Knowing the cause can be part of the cure.",
      "The story can be misused to shut down honest questions. People in authority may say “Don’t ask, just act” to avoid being questioned.",
      "Deciding which questions are useful is itself a judgement, and people can disagree about it."
    ],
    "uses": [
      "Disaster response: When people are in danger, the first duty is rescue and relief. Inquiries into who is to blame can come afterwards.",
      "Policy paralysis: Governments sometimes delay urgent action while they wait for more studies. The story warns against this.",
      "Personal life: People sometimes postpone living well while they search for final answers about the meaning of life.",
      "Exam use: In GS-IV, use it for practical wisdom, decision making and setting priorities in case studies. In the Essay paper, use it for topics on thought and action."
    ],
    "related": [
      "raft",
      "blindmen",
      "kisagotami",
      "threepoisons",
      "nachiketa",
      "anekanta"
    ],
    "reading": [
      [
        "Majjhima Nikaya 63, translated by Bhikkhu Sujato, SuttaCentral",
        "Free, with the original Pali text alongside.",
        "https://suttacentral.net/mn63"
      ],
      [
        "“Buddha”, Stanford Encyclopedia of Philosophy",
        "Explains the questions the Buddha set aside.",
        "https://plato.stanford.edu/entries/buddha/"
      ]
    ]
  },
  "kisagotami": {
    "source": "The full story is told in the old commentaries on the Dhammapada (verse 114) and on the Therigatha. Kisa Gotami’s own verses are in the Therigatha, the verses of the early Buddhist nuns (Therigatha 10.1).",
    "period": "The verses are early Buddhist texts. The commentary on the Dhammapada was written down in Sri Lanka around the fifth century CE.",
    "tradition": "Indian (Buddhist)",
    "type": "A parable based on the life of a woman disciple of the Buddha",
    "setup": [
      "Kisa Gotami lived in the city of Savatthi at the time of the Buddha. Her name was Gotami. People called her Kisa Gotami, which means “thin Gotami”, because she was very slim. She married a rich young man, and they had a son.",
      "When the boy was still very small, he died. Kisa Gotami could not accept his death. She carried his body from house to house, asking everyone for a medicine that would bring him back to life. People began to think that she had gone mad.",
      "A wise man told her, “Go to the Buddha. He has the medicine you want.” So she went to the Buddha and begged him to bring her son back to life.",
      "The Buddha said that he could help her. He told her to bring him some mustard seeds. But the seeds had to come from a house where no one had ever died.",
      "Kisa Gotami went from house to house. Everyone was willing to give her mustard seeds. But when she asked whether anyone in the house had died, every family said yes. She could not find a single house where no one had died.",
      "Slowly, she understood. Her family was not the only one that had faced death. There were more dead people than living ones. Her grief changed, and she no longer clung to her son’s body. She returned to the Buddha, and he taught her that death comes to all beings. Kisa Gotami became a nun, and later she reached enlightenment."
    ],
    "question": "How can a person live with grief when death comes to everyone?",
    "reveals": "The Buddha did not argue with Kisa Gotami or lecture her about death. He gave her a task that let her discover the truth for herself. By going from house to house, she learned that her loss was part of every human life. This discovery did not make her son’s death unimportant. But the discovery freed her from the feeling that she alone had been struck. Grief that is shared with others becomes easier to bear.",
    "readings": [
      [
        "Buddhist reading: impermanence",
        "All living beings die. Suffering comes from clinging to what cannot last. When Kisa Gotami saw this clearly, she could let go and find peace."
      ],
      [
        "The Buddha’s way of teaching",
        "The Buddha taught according to the person in front of him. A grieving mother could not listen to a lecture. So he gave her an experience that led her to the answer herself. Later Buddhist traditions call this kind of teaching skilful means."
      ],
      [
        "Psychology of grief",
        "Grief counsellors today also find that people heal better when they feel understood and less alone. Support groups for bereaved families work on the same idea."
      ],
      [
        "A woman’s voice",
        "Kisa Gotami is one of the early Buddhist nuns whose own verses survive in the Therigatha. In those verses, she speaks about the suffering in women’s lives and about the freedom she found."
      ]
    ],
    "breaks": [
      "The story is about accepting death. It does not ask whether a death could have been prevented. Many deaths today, from hunger, accidents or poor health care, can and should be prevented.",
      "Grief does not usually end in a single moment of understanding. For most people, it takes a long time.",
      "The Buddha seems to offer a cure and then gives a task instead. Some readers find this test harsh, even though it leads to wisdom."
    ],
    "uses": [
      "Disaster response: Officials who deal with families after a disaster need patience and compassion, not only rules and procedures.",
      "Health care: Doctors and nurses who care for dying patients can help families to accept death with dignity.",
      "Counselling: Support groups for people who have lost family members follow the same idea, that shared grief is easier to carry.",
      "Exam use: In GS-IV, use it for compassion, empathy, emotional intelligence and the Buddha as a moral teacher. In the Essay paper, use it for topics on loss, suffering, acceptance and compassion."
    ],
    "related": [
      "arrow",
      "raft",
      "nachiketa",
      "epicurus",
      "ilyich",
      "threepoisons"
    ],
    "reading": [
      [
        "Dhammapada verse 114: the story of Kisagotami, Tipitaka Network",
        "The story from the Dhammapada commentary, in English. Free.",
        "https://www.tipitaka.net/tipitaka/dhp/verseload.php?verse=114"
      ],
      [
        "Therigatha 10.1, translated by Bhikkhu Sujato, SuttaCentral",
        "Kisa Gotami’s own verses. Free.",
        "https://suttacentral.net/thig10.1"
      ]
    ]
  },
  "omelas": {
    "source": "Ursula K. Le Guin, “The Ones Who Walk Away from Omelas” (1973). Le Guin credited the idea to the philosopher William James (1891).",
    "period": "United States, 1973",
    "tradition": "Modern American literature (philosophical fiction)",
    "type": "A short story",
    "setup": [
      "The narrator describes a beautiful city called Omelas on the day of its summer festival. There are bells, music, dancing and a horse race. The people are happy, intelligent and kind. They have no king, no soldiers and no slaves. The narrator invites readers to imagine the city in whatever way makes its happiness believable.",
      "Then the narrator reveals one more fact. In a basement under one of the city’s beautiful buildings, there is a small, dark room. A child is locked inside. The child is thin, dirty and frightened. It is given very little food, and nobody ever speaks a kind word to it.",
      "Everyone in Omelas knows that the child is there. They also know that the happiness of the whole city depends on the child’s misery. If the child were brought out into the sunlight, washed and comforted, all the joy and prosperity of Omelas would vanish. This rule is the strict condition of the city’s happiness.",
      "Most young people are shocked when they first see the child. Over time, most of them come to accept the arrangement. They tell themselves that the child could not enjoy freedom now anyway, and that the happiness of so many people is worth the price.",
      "But a few people, after seeing the child, quietly leave the city. Each one walks out alone, past the fields and into the darkness. The narrator cannot say where they go. But they seem to know where they are going."
    ],
    "question": "Would you accept a happy society if its happiness depended on the suffering of one innocent child?",
    "reveals": "The story tests the idea that the greatest happiness of the greatest number is always right. By a simple count, Omelas is a great success: thousands are happy and only one suffers. Yet most readers feel that something is deeply wrong. The story suggests that some things must never be done to a person, whatever the benefits to others. It also asks about the people who look away. Those who stay enjoy the benefits of an injustice that they know about.",
    "readings": [
      [
        "Against utilitarianism",
        "The story challenges the view that an action is right if it produces the most total happiness. Many readers conclude that each person has rights that cannot be traded for other people’s happiness."
      ],
      [
        "William James and Dostoevsky",
        "Le Guin said that she took the idea from William James. In 1891, James asked whether people would accept a world of happiness that depended on one lost soul suffering alone. Dostoevsky’s character Ivan Karamazov asks a similar question about the torture of a single child."
      ],
      [
        "Walking away or staying to fight",
        "Some critics ask whether walking away is enough. The people who leave keep their own hands clean, but the child is still in the basement. Perhaps the right response is to stay and change the system."
      ]
    ],
    "breaks": [
      "The story makes the link between the child’s suffering and the city’s happiness absolute and magical. In real life, such links are less certain, and there are usually other options.",
      "The narrator gives no reason why the arrangement cannot be changed. So the story tests our feelings more than it describes real choices.",
      "Leaving Omelas helps no one except the person who leaves. Some readers see the departure as a private escape, not a moral solution."
    ],
    "uses": [
      "Hidden costs of prosperity: Cheap goods may depend on child labour or unsafe factories somewhere else. Consumers who know this face the choice of Omelas.",
      "Development and displacement: Big projects can benefit millions of people while a small group, such as displaced tribal communities, bears most of the cost.",
      "Scapegoats: Societies sometimes accept injustice to a minority for the comfort of the majority. The story is a warning against this.",
      "Exam use: In GS-IV, use it for utilitarianism and its limits, human dignity and complicity. In the Essay paper, use it for topics on development, justice and the price of progress."
    ],
    "related": [
      "inquisitor",
      "trolley",
      "veil",
      "experience",
      "commons",
      "samaritan"
    ],
    "reading": [
      [
        "“The Ones Who Walk Away from Omelas”, Wikipedia",
        "Free summary and discussion. The story itself is still under copyright.",
        "https://en.wikipedia.org/wiki/The_Ones_Who_Walk_Away_from_Omelas"
      ],
      [
        "“Consequentialism”, Stanford Encyclopedia of Philosophy",
        "Explains the moral theory that the story challenges.",
        "https://plato.stanford.edu/entries/consequentialism/"
      ]
    ]
  },
  "samaritan": {
    "source": "The Gospel of Luke, chapter 10, verses 25 to 37, in the Christian New Testament",
    "period": "The Gospel of Luke is usually dated to the late first century CE.",
    "tradition": "Christian scripture",
    "type": "A parable. A parable is a simple story that teaches a lesson.",
    "setup": [
      "An expert in religious law wanted to test Jesus. He asked, “What must I do to gain eternal life?” Jesus asked him what the law said. The lawyer answered that a person must love God with all his heart, and love his neighbour as himself. Jesus agreed. But the lawyer wanted to justify himself, so he asked, “And who is my neighbour?”",
      "Jesus answered with a story. A man was travelling down the road from Jerusalem to Jericho. Robbers attacked him. They stripped him, beat him and left him half dead by the road.",
      "A priest happened to come down the same road. When he saw the injured man, he passed by on the other side of the road. Then a Levite, a helper in the temple, came to the place. He also looked at the man and passed by on the other side.",
      "Then a Samaritan came along. At that time, Jews and Samaritans generally disliked and distrusted each other. But when the Samaritan saw the injured man, he felt compassion. He treated the man’s wounds with oil and wine and bandaged them. He put the man on his own animal, took him to an inn and looked after him. The next day, he gave the innkeeper two silver coins. He said, “Take care of him. If you spend more, I will repay you when I come back.”",
      "Jesus asked the lawyer, “Which of these three was a neighbour to the man who was attacked?” The lawyer replied, “The one who showed him mercy.” Jesus said, “Go and do the same.”"
    ],
    "question": "Who is my neighbour, and what do I owe to a stranger in need?",
    "reveals": "The lawyer asked who counts as his neighbour, hoping to limit his duty. Jesus turned the question around. The real question is not who deserves our help, but whether we will act as a neighbour to anyone in need. The two religious men, who knew the law well, failed to help. The outsider, from a distrusted group, showed true goodness. So compassion is proved by action, and it crosses the lines of religion and community.",
    "readings": [
      [
        "Christian reading",
        "Love of neighbour has no borders. Every person in need is my neighbour, and love must be practical, costly and generous."
      ],
      [
        "Ethical reading",
        "The parable teaches a duty to rescue. When we can help someone in serious danger at a reasonable cost, we should. The parable also warns against using religious or professional status as an excuse for indifference."
      ],
      [
        "Psychological research",
        "In 1973, the psychologists John Darley and Daniel Batson studied students at a religious seminary. Each student had to walk to another building to give a talk, and some were to speak on the Good Samaritan. On the way, each passed a man slumped in a doorway. Students who were told that they were late were much less likely to stop and help, even when they were about to speak on this parable."
      ]
    ],
    "breaks": [
      "The Samaritan helps one man on one road. The parable does not explain how to respond to the huge numbers of people in need in modern societies, where individual kindness is not enough.",
      "Helping strangers can involve real risks, such as danger or legal trouble. The story does not discuss these risks.",
      "The priest and the Levite may have had religious rules against touching a body that might be dead. The parable criticises them without discussing their reasons."
    ],
    "uses": [
      "Helping accident victims: Many bystanders in India once avoided helping accident victims for fear of police questioning. In 2016, the Supreme Court approved guidelines to protect such helpers, and the Motor Vehicles (Amendment) Act, 2019 gave Good Samaritans legal protection.",
      "Public service beyond duty: Officers who go beyond their formal duties to help citizens in distress act like the Samaritan.",
      "Help without bias: Help should not depend on a person’s religion, caste or community.",
      "Exam use: In GS-IV, use it for compassion, empathy, the duty to help and case studies about bystanders. In the Essay paper, use it for topics on humanity, kindness and social responsibility."
    ],
    "related": [
      "bystander",
      "kisagotami",
      "heinz",
      "omelas",
      "angulimala",
      "karma"
    ],
    "reading": [
      [
        "The King James Version of the Bible",
        "The parable is in Luke 10:25–37. Free on Project Gutenberg.",
        "https://www.gutenberg.org/ebooks/10"
      ],
      [
        "John M. Darley and C. Daniel Batson, “From Jerusalem to Jericho”, Journal of Personality and Social Psychology (1973)",
        "The study of seminary students in a hurry.",
        "https://doi.org/10.1037/h0034449"
      ]
    ]
  },
  "statenature": {
    "source": "Thomas Hobbes, Leviathan (1651), chapter 13; John Locke, Second Treatise of Government (1689), chapter 2; Jean-Jacques Rousseau, Discourse on the Origin of Inequality (1755)",
    "period": "England and France, 1651 to 1755",
    "tradition": "Modern Western political philosophy",
    "type": "A model. A model is a simple picture of how something works.",
    "setup": [
      "Imagine a world with no government, no police, no courts and no laws made by any ruler. Philosophers call this imagined condition the state of nature. They use it to ask why people need government at all, and what makes a government legitimate.",
      "Thomas Hobbes, writing after the English Civil War, painted a dark picture. Without a common power to keep everyone in awe, people live in constant fear. Each person may attack others to protect himself or to take what he wants. The result is a war of every man against every man. There is no farming, no trade, no art and no society. Life is solitary, poor, nasty, brutish and short. So people agree to give up much of their freedom to a strong ruler who can keep the peace.",
      "John Locke saw the state of nature differently. In his account, people are free and equal, but they are not free to do anything they like. A law of nature, known through reason, forbids harming anyone’s life, liberty or property. The problem is that there is no neutral judge to settle disputes. So people form a government to protect their rights, and they may resist a government that violates those rights.",
      "Jean-Jacques Rousseau imagined early humans as peaceful and self-sufficient. For him, conflict and inequality came later, with private property and society. He argued that inequality began when someone first fenced off a piece of land, claimed it as his own, and found other people simple enough to believe him."
    ],
    "question": "What would life be like without government, and why should anyone obey the state?",
    "reveals": "The state of nature tests government by imagining its absence. If life without government would be terrible, as Hobbes thought, then almost any government is better than none. If people already have natural rights, as Locke thought, then government exists to protect those rights and loses its legitimacy when it abuses them. If society itself corrupts people, as Rousseau thought, then the task is to design institutions that restore freedom and equality. Each picture of human nature leads to a different kind of state.",
    "readings": [
      [
        "Hobbes: security first",
        "Fear of violent death drives people to accept an all-powerful ruler. Peace requires a power strong enough to keep everyone in awe."
      ],
      [
        "Locke: rights first",
        "Government is a trust. Government rests on the consent of the governed and must protect life, liberty and property. Locke’s ideas shaped the American Declaration of Independence and modern constitutional democracy."
      ],
      [
        "Rousseau: society as the problem",
        "Human beings are not naturally wicked. Inequality and conflict grow with property and social comparison. Rousseau’s later book, The Social Contract, tried to design a free political community."
      ],
      [
        "Relations between countries",
        "Hobbes noted that independent states have no common power above them. Many scholars of international relations describe the world of states as a kind of state of nature."
      ]
    ],
    "breaks": [
      "The state of nature never existed as a period of history. Humans have always lived in groups with customs and rules.",
      "Each philosopher builds his own assumptions about human nature into the picture, and then draws conclusions from those assumptions.",
      "The models focus on individuals and ignore families, communities and the long history of human cooperation."
    ],
    "uses": [
      "Collapse of order: When governments collapse, as in civil wars, violence and insecurity follow. The suffering in such places shows why basic order matters.",
      "Constitutional rights: Article 21 of the Constitution of India protects life and personal liberty. Locke’s idea that government exists to protect rights stands behind such guarantees.",
      "Disasters: When normal systems break down after a disaster, people often help each other, which challenges Hobbes’s dark picture.",
      "Exam use: In GS-IV, use it for the basis of state authority, rights and duties, and Western political thinkers. In the Essay paper, use it for topics on freedom, order and the role of the state."
    ],
    "related": [
      "generalwill",
      "gyges",
      "pd",
      "staghunt",
      "commons",
      "noblelie"
    ],
    "reading": [
      [
        "Thomas Hobbes, Leviathan",
        "The state of nature is described in chapter 13. Free on Project Gutenberg.",
        "https://www.gutenberg.org/ebooks/3207"
      ],
      [
        "John Locke, Second Treatise of Government",
        "Chapter 2 describes Locke’s state of nature. Free on Project Gutenberg.",
        "https://www.gutenberg.org/ebooks/7370"
      ],
      [
        "“Hobbes’s Moral and Political Philosophy”, Stanford Encyclopedia of Philosophy",
        "",
        "https://plato.stanford.edu/entries/hobbes-moral/"
      ]
    ]
  },
  "noblelie": {
    "source": "Plato, Republic, Book III (414b–415d)",
    "period": "Athens, around 375 BCE",
    "tradition": "Greek philosophy",
    "type": "A political myth. A political myth is a story told to shape how citizens see their society.",
    "setup": [
      "In the Republic, Socrates designs an ideal city. The city has three classes. The rulers govern. The auxiliaries, who are soldiers, defend the city. The farmers and craftsmen produce what the city needs.",
      "Socrates asks how the citizens can be persuaded to accept this order. He proposes one bold story, which he calls a noble lie. If possible, even the rulers should believe it, and so should everyone else.",
      "The story has two parts. First, all citizens are told that their upbringing and education were only a dream. In reality, they were formed and raised deep inside the earth, which is their mother. So all citizens are brothers and sisters, and they must defend their land as they would defend a parent.",
      "Second, citizens are told that the god who made them mixed different metals into their souls. He put gold into those who are fit to rule, silver into the auxiliaries, and bronze and iron into the farmers and craftsmen. Children usually have the same metal as their parents. But a golden parent may have a silver child, or a bronze parent a golden child. Then the child must be moved to the right class. An oracle warns that the city will be destroyed if it is ever guarded by a person of bronze or iron.",
      "Socrates doubts that the first generation will believe the story. But he hopes that later generations, raised with it, will accept it."
    ],
    "question": "Can a government ever be justified in telling citizens a lie for the good of society?",
    "reveals": "The noble lie shows how a political order can be held together by a shared story. The myth makes citizens feel like one family, and it makes the class system seem natural and ordered by the gods. Plato believed that such unity was necessary for a just city. But the idea also reveals a danger. Rulers who decide what citizens should believe may use stories to protect their own power instead of the common good.",
    "readings": [
      [
        "Plato’s defence",
        "A just city needs citizens who accept their roles and feel loyal to one another. A founding myth can achieve this better than argument, especially among people who cannot follow philosophy."
      ],
      [
        "Karl Popper’s criticism",
        "The philosopher Karl Popper saw the noble lie as a tool of totalitarian propaganda. Rulers who control the truth can control the people."
      ],
      [
        "Civic myths",
        "Every society has shared stories, such as stories about its founding, that hold people together. The question is whether such stories respect the truth and treat citizens as equals. The scholar Christina Tarnopolsky argues that Plato meant the myth to make readers suspicious of founding myths."
      ]
    ],
    "breaks": [
      "The myth links a person’s place in society to his nature and birth. A link of this kind can justify rigid hierarchies, such as caste or class systems.",
      "A government that lies to citizens loses their trust when the lie is discovered.",
      "In a democracy, citizens have a right to truthful information. Decisions based on lies cannot rest on real consent."
    ],
    "uses": [
      "Propaganda: Governments that use false stories to create unity or to hide failures follow the logic of the noble lie.",
      "National identity: Shared histories and symbols build unity. But they must be based on truth, not on myths that exclude some citizens.",
      "Transparency: The Right to Information Act, 2005 reflects the opposite principle, that citizens have a right to know what their government does.",
      "Exam use: In GS-IV, use it for honesty in public life, transparency and Plato as a moral thinker. In the Essay paper, use it for topics on truth, propaganda and nationalism."
    ],
    "related": [
      "cave",
      "burninghouse",
      "inquisitor",
      "gyges",
      "panopticon",
      "statenature"
    ],
    "reading": [
      [
        "Plato, The Republic, translated by Benjamin Jowett",
        "The noble lie is near the end of Book III. Free on Project Gutenberg.",
        "https://www.gutenberg.org/ebooks/1497"
      ],
      [
        "“Noble lie”, Wikipedia",
        "Free overview of Plato’s myth and later uses of the idea.",
        "https://en.wikipedia.org/wiki/Noble_lie"
      ]
    ]
  },
  "panopticon": {
    "source": "Jeremy Bentham, Panopticon; or, The Inspection-House (1791). Michel Foucault, Discipline and Punish (1975).",
    "period": "1791 and 1975",
    "tradition": "English social reform and French philosophy",
    "type": "An architectural design that became a metaphor. A metaphor explains one thing by comparing it to another.",
    "setup": [
      "In 1785, the English philosopher Jeremy Bentham travelled to Krichev, a town in the Russian Empire, to visit his brother Samuel. Samuel was working there for Prince Potemkin, a powerful Russian noble. Samuel had the idea of a round building from which a few managers could watch a large number of workers. Jeremy stayed for almost two years and developed his brother’s idea into a design for a new kind of prison. He called it the panopticon, which means “all-seeing”.",
      "The panopticon is a round building. The prisoners’ cells are arranged in a ring around the outside, and each cell has a window that lets in light. In the centre stands a tower for the inspector. From the tower, the inspector can see into every cell. But blinds and careful lighting stop the prisoners from seeing the inspector.",
      "So a prisoner never knows whether he is being watched at a particular moment. He must assume that he might be watched at any time. Bentham believed that prisoners would therefore behave well, and that very few guards would be needed. He described the design as a new way of gaining power of mind over mind. He thought that it could also be used for factories, hospitals and schools.",
      "Bentham spent years trying to persuade the British government to build a panopticon prison, but his plan was never built as he designed it. Some later prisons borrowed his ideas.",
      "In 1975, the French philosopher Michel Foucault made the panopticon famous as a symbol of modern society. He argued that schools, factories, hospitals and armies all work in a similar way. People in them are constantly observed, measured and recorded, and so they learn to control themselves."
    ],
    "question": "How does being watched, or believing that we might be watched, change the way we behave?",
    "reveals": "The panopticon shows that power does not always need force. The mere possibility of being watched makes people control their own behaviour. Self-control of this kind can reduce crime and wrongdoing. But it can also remove privacy and freedom, and make people conform out of fear. Foucault’s reading warns that modern institutions, and now digital technologies, can create societies in which everyone is watched and everyone learns to watch themselves.",
    "readings": [
      [
        "Bentham’s reform view",
        "The panopticon was meant to be a humane and efficient reform. The new prison would replace cruel punishments with supervision and help prisoners to change."
      ],
      [
        "Foucault’s critical view",
        "The panopticon is a model of disciplinary power in modern society. Power works through observation, records and norms, not only through violence."
      ],
      [
        "The digital panopticon",
        "Writers today speak of a digital panopticon. Cameras, data collection and online tracking allow governments and companies to observe people constantly."
      ]
    ],
    "breaks": [
      "Bentham’s prison was never built as designed. Real institutions are less perfect and less controlling than the model.",
      "Modern surveillance often has many watchers watching each other, as on social media, which is different from one central tower.",
      "Observation can also protect people. For example, cameras can record misconduct by the police as well as crimes by citizens."
    ],
    "uses": [
      "Privacy: In 2017, in the Puttaswamy judgment, the Supreme Court of India declared privacy to be a fundamental right. The panopticon helps to explain why constant surveillance threatens freedom.",
      "Workplace monitoring: Software that tracks every keystroke of employees raises the same questions about trust and dignity.",
      "Accountability of officials: Body cameras, CCTV cameras in police stations and public records can make people in power act more carefully. Here, observation serves citizens.",
      "Exam use: In GS-IV, use it for privacy, surveillance, accountability and the ethics of technology. In the Essay paper, use it for topics on freedom, privacy and technology."
    ],
    "related": [
      "gyges",
      "noblelie",
      "inquisitor",
      "beforelaw",
      "milgram",
      "stanfordprison"
    ],
    "reading": [
      [
        "“Jeremy Bentham”, Stanford Encyclopedia of Philosophy",
        "",
        "https://plato.stanford.edu/entries/bentham/"
      ],
      [
        "“Michel Foucault”, Stanford Encyclopedia of Philosophy",
        "Explains Foucault’s ideas about discipline and power.",
        "https://plato.stanford.edu/entries/foucault/"
      ],
      [
        "“Panopticon”, Wikipedia",
        "Free overview of the design and its history.",
        "https://en.wikipedia.org/wiki/Panopticon"
      ]
    ]
  },
  "generalwill": {
    "source": "Jean-Jacques Rousseau, The Social Contract (1762)",
    "period": "1762",
    "tradition": "Modern Western political philosophy",
    "type": "A concept. The general will is the shared will of citizens aimed at the common good.",
    "setup": [
      "Rousseau opens The Social Contract with a famous line: man is born free, and everywhere he is in chains. His question is how people can live together under laws and still remain free.",
      "His answer is the social contract. Each person gives himself and all his rights to the whole community. Because everyone does the same, the conditions are equal for all. No one gains power over anyone else. Together, the citizens form a single body, the sovereign people.",
      "The sovereign people has a general will. The general will aims only at the common good of all citizens. Rousseau carefully separates it from the will of all. The will of all is just the sum of what individuals privately want. The general will is what citizens want when they think as members of the community, about what is good for everyone.",
      "Laws are legitimate only when they express the general will. So in obeying the laws, citizens obey themselves, and they remain free.",
      "Rousseau adds a harsh-sounding consequence. Anyone who refuses to obey the general will may be compelled to obey by the whole community. Rousseau says that this means only that such a person will be forced to be free."
    ],
    "question": "Can a community have a common will, and can obeying it make people free?",
    "reveals": "The general will expresses a powerful democratic ideal. Legitimate laws should serve the common good, not the interests of powerful groups, and citizens should see themselves as the authors of the laws they obey. But the idea also carries a risk. If some rulers claim to know the general will better than the people themselves, they can justify silencing and forcing those who disagree.",
    "readings": [
      [
        "Democratic reading",
        "The general will is the basis of popular sovereignty. The French Declaration of the Rights of Man and of the Citizen (1789) states that the law is the expression of the general will."
      ],
      [
        "The danger of tyranny",
        "Critics such as Isaiah Berlin and Jacob Talmon argued that the idea of being forced to be free can be used by dictators. A dictator can claim to represent the people’s true will while crushing real people."
      ],
      [
        "A defence of Rousseau",
        "Other readers point out that Rousseau meant the general will to protect individuals against the mass, not to sacrifice them to it. Laws must be general and apply equally to all."
      ]
    ],
    "breaks": [
      "In practice, nobody can easily know what the general will is. A majority vote may reflect the interests of a group rather than the common good.",
      "Rousseau thought that the general will works best in small, similar communities. Large and diverse modern states make it much harder to find.",
      "Talk of being forced to be free can hide real coercion behind noble language."
    ],
    "uses": [
      "Constitutional democracy: The Preamble of the Constitution of India begins with “We, the People of India”. The opening words express the idea that authority comes from the people as a whole.",
      "Public interest and lobbying: Policies captured by powerful groups serve the will of a few, not the general will.",
      "Minority rights: Fundamental rights and independent courts protect individuals and minorities, so that no majority can claim to speak for everyone while ignoring them.",
      "Exam use: In GS-IV, use it for public interest, legitimacy and Western political thinkers. In the Essay paper, use it for topics on democracy, freedom and the common good."
    ],
    "related": [
      "statenature",
      "staghunt",
      "noblelie",
      "commons",
      "collectiveaction",
      "veil"
    ],
    "reading": [
      [
        "Jean-Jacques Rousseau, The Social Contract and Discourses, translated by G. D. H. Cole",
        "Free on Project Gutenberg.",
        "https://www.gutenberg.org/ebooks/46333"
      ],
      [
        "“Jean Jacques Rousseau”, Stanford Encyclopedia of Philosophy",
        "",
        "https://plato.stanford.edu/entries/rousseau/"
      ]
    ]
  },
  "securitydilemma": {
    "source": "The political scientist John H. Herz introduced the term in 1950. The historian Herbert Butterfield described the same idea at the same time, and the political scientist Robert Jervis developed it in 1978.",
    "period": "1950 to 1978",
    "tradition": "International relations",
    "type": "A model. A model is a simple picture of how something works.",
    "setup": [
      "Imagine two neighbouring countries. Neither wants war. But there is no world government to protect them, so each must look after its own safety.",
      "Country A decides to build more weapons, only to defend itself. Country B sees A growing stronger. B cannot be sure of A’s intentions. Perhaps A is planning an attack. So B also builds more weapons.",
      "Now A sees B’s new weapons. A feels less safe than before, so it builds even more. B responds again. Each step taken for defence makes the other side more afraid.",
      "In the end, both countries spend huge amounts on weapons, and both feel less secure than when they started. The chance of war may even increase, because each side fears the other and may strike first in a crisis.",
      "In 1950, the political scientist John Herz called this situation the security dilemma. Long before, the ancient Greek historian Thucydides had described something similar. He wrote that the growth of Athenian power, and the fear that it caused in Sparta, made war between them unavoidable."
    ],
    "question": "How can actions taken only for self-defence end up making everyone less safe?",
    "reveals": "The security dilemma shows that conflict does not always come from aggression. Two sides with purely defensive aims can still spiral into rivalry and war, because neither can be sure of the other’s intentions. The deeper problem is uncertainty in a world with no higher authority. The dilemma is worst when offensive and defensive weapons look alike, and when attacking first gives a big advantage.",
    "readings": [
      [
        "Realist reading",
        "In a world of competing states, the security dilemma cannot be escaped. States must always prepare for the worst."
      ],
      [
        "Offence and defence (Robert Jervis)",
        "The dilemma can be softened. When defensive weapons can be clearly told apart from offensive ones, and when defence has the advantage, states can feel safe without threatening others."
      ],
      [
        "Institutional reading",
        "Arms control agreements, hotlines, military transparency and confidence-building measures can reduce uncertainty and break the spiral."
      ]
    ],
    "breaks": [
      "Some states really are aggressive. Treating every rival as a victim of misunderstanding can be dangerous.",
      "The model focuses on weapons and ignores trade, diplomacy and shared interests, all of which can reduce fear.",
      "Leaders’ beliefs, domestic politics and history also shape how threatening a rival seems."
    ],
    "uses": [
      "Nuclear South Asia: India and Pakistan both tested nuclear weapons in 1998. Each side’s growing capabilities increase the other side’s sense of threat.",
      "Border infrastructure: Roads and airfields built near a disputed border for defence can look like preparation for attack to the other side.",
      "Confidence-building measures: Agreements such as advance notice of military exercises and hotlines between military leaders reduce the risk of misunderstanding.",
      "Exam use: In GS-IV, use it for ethics in international relations and for trust. In the Essay paper, use it for topics on war, peace, trust and security."
    ],
    "related": [
      "pd",
      "chicken",
      "mad",
      "statenature",
      "staghunt",
      "dictator"
    ],
    "reading": [
      [
        "“Security dilemma”, Wikipedia",
        "Free overview of the idea, from Herz and Butterfield to Jervis.",
        "https://en.wikipedia.org/wiki/Security_dilemma"
      ]
    ]
  },
  "collectiveaction": {
    "source": "Mancur Olson, The Logic of Collective Action: Public Goods and the Theory of Groups (1965)",
    "period": "United States, 1965",
    "tradition": "Economics and political science",
    "type": "A model. A model is a simple picture of how something works.",
    "setup": [
      "Before 1965, many scholars assumed that people who share a common interest will naturally organise to pursue it. Workers would form unions, consumers would demand fair prices, and farmers would press for better policies.",
      "The economist Mancur Olson challenged this assumption. He pointed out that many goals of a group are public goods. If the group succeeds, every member benefits, whether or not he helped.",
      "Think of a million consumers who would all gain from lower prices. Joining a campaign costs each person time and money. But one person’s effort makes almost no difference to the result. And if the campaign succeeds, he will enjoy lower prices anyway. So each consumer decides that it is sensible to stay at home and let others do the work. When everyone reasons in this way, the campaign never happens.",
      "Olson showed that small groups find it much easier to organise. In a small group, each member’s share of the benefit is large, and others notice who does not help. For this reason, a few large companies in one industry can lobby effectively, while millions of scattered consumers cannot.",
      "Large groups can act together, Olson argued, only when they use selective incentives. Selective incentives are benefits given only to those who join, such as insurance for union members, or penalties for those who do not join."
    ],
    "question": "Why do large groups often fail to act in their shared interest?",
    "reveals": "Common interests are not enough to create common action. Each person in a large group has a reason to let others bear the cost. As a result, small, organised interests can win policies that harm large, unorganised majorities. Olson’s insight explains why some groups have great political power and others have almost none. The theory also explains why organisations depend on special benefits and rules to keep their members involved.",
    "readings": [
      [
        "Olson’s theory",
        "Without selective incentives or pressure, rational individuals in large groups will not work for the group’s common goals. So a well-organised minority can dominate a scattered majority."
      ],
      [
        "Elinor Ostrom’s answer",
        "Ostrom showed that communities can solve collective action problems through trust, communication and rules that they design for themselves."
      ],
      [
        "Social movements",
        "Critics note that people often join movements out of moral commitment, identity and solidarity, not only for private benefits. Movements for independence and civil rights brought millions of people into action."
      ]
    ],
    "breaks": [
      "The model assumes that people act only out of self-interest. Real people are also moved by fairness, duty and belonging.",
      "New technologies, such as social media, can lower the cost of organising large groups quickly.",
      "The theory explains why collective action fails, but it does not easily predict when large movements will suddenly succeed."
    ],
    "uses": [
      "Farmers and consumers: Millions of small farmers or consumers often have less influence on policy than a few organised industries.",
      "Cooperatives: India’s dairy cooperatives, such as Amul, show how members can organise successfully when they receive direct benefits for taking part.",
      "Voting: A single vote rarely decides an election, yet democracy depends on many people voting.",
      "Exam use: In GS-IV, use it for public interest, civic responsibility and lobbying. In the Essay paper, use it for topics on democracy, cooperation and citizenship."
    ],
    "related": [
      "freerider",
      "commons",
      "pd",
      "staghunt",
      "generalwill",
      "principalagent"
    ],
    "reading": [
      [
        "“The Logic of Collective Action”, Wikipedia",
        "Free summary of Olson’s book and the criticism of it.",
        "https://en.wikipedia.org/wiki/The_Logic_of_Collective_Action"
      ],
      [
        "“Public Goods”, Stanford Encyclopedia of Philosophy",
        "",
        "https://plato.stanford.edu/entries/public-goods/"
      ]
    ]
  },
  "freerider": {
    "source": "The economic theory of public goods, set out in Paul Samuelson’s paper “The Pure Theory of Public Expenditure” (1954). David Hume described the problem earlier, in A Treatise of Human Nature (1739).",
    "period": "From the eighteenth century",
    "tradition": "Economics",
    "type": "A model. A model is a simple picture of how something works.",
    "setup": [
      "Some goods can be enjoyed by everyone, whether or not they paid for them. Economists call such goods public goods. Two features make them special. No one can easily be stopped from using them. And one person’s use does not reduce what is left for others.",
      "A lighthouse is a classic example. Once its light shines, every passing ship can use it to avoid the rocks. The owner of the lighthouse cannot stop a ship that has not paid from seeing the light.",
      "Now suppose that the lighthouse must be paid for by voluntary contributions. Each ship owner thinks like this. If the others pay, the light will shine, and I can use it for free. If they do not pay, my small contribution will not be enough. Either way, it is better for me not to pay. When every ship owner thinks in this way, too little money is raised, and the lighthouse is never built. Everyone loses.",
      "A person who enjoys a benefit without paying his share is called a free rider. When many people free ride, public goods such as clean air, national defence, street lighting and public health are not produced at all, or not produced enough.",
      "The Scottish philosopher David Hume noticed this problem long ago. He wrote that two neighbours may easily agree to drain a meadow that they share. But a thousand neighbours will find it very hard, because each hopes to leave the work and the cost to the others."
    ],
    "question": "Why do people fail to pay for things that benefit everyone?",
    "reveals": "The free rider problem explains why markets alone often fail to provide public goods. When people can enjoy a benefit without paying, each person has a reason to wait for others to pay. The free rider problem is one of the main reasons for taxation. Governments use their power to make everyone contribute to goods that everyone uses. Where government cannot help, communities rely on social pressure, trust and shared rules.",
    "readings": [
      [
        "Economic reading",
        "Public goods are a market failure. Governments must provide them and pay for them through compulsory taxes."
      ],
      [
        "Private solutions",
        "The economist Ronald Coase showed that some lighthouses in Britain were actually paid for by fees charged at ports. Clever arrangements can sometimes solve the problem without government."
      ],
      [
        "Moral reading",
        "Free riding is unfair. A person who benefits from the cooperation of others has a duty to do his part."
      ]
    ],
    "breaks": [
      "Many people do contribute voluntarily, for example to charities, open-source software and Wikipedia. Pure self-interest does not explain everything.",
      "Deciding which goods are truly public is often a political question. Governments may overuse the idea to justify their spending.",
      "Making everyone pay through taxes solves free riding, but it raises questions about how fairly the burden is shared."
    ],
    "uses": [
      "Tax compliance: Tax evasion is a form of free riding on public services that honest taxpayers pay for.",
      "Vaccination: When most people are vaccinated, even unvaccinated people are protected. But if too many people free ride, the protection disappears.",
      "Climate change: Each country benefits when other countries cut emissions, so each is tempted to free ride on the efforts of others.",
      "Exam use: In GS-IV, use it for civic duty, fairness and tax ethics. In the Essay paper, use it for topics on citizenship, taxation and global cooperation."
    ],
    "related": [
      "collectiveaction",
      "commons",
      "pd",
      "staghunt",
      "moralhazard",
      "invisiblehand"
    ],
    "reading": [
      [
        "“The Free Rider Problem”, Stanford Encyclopedia of Philosophy",
        "",
        "https://plato.stanford.edu/entries/free-rider/"
      ],
      [
        "“Public Goods”, Stanford Encyclopedia of Philosophy",
        "",
        "https://plato.stanford.edu/entries/public-goods/"
      ]
    ]
  },
  "commons": {
    "source": "Garrett Hardin, “The Tragedy of the Commons”, Science (1968). Hardin took the example from William Forster Lloyd (1833). Elinor Ostrom answered Hardin in her book Governing the Commons (1990).",
    "period": "1833, 1968 and 1990",
    "tradition": "Economics and ecology",
    "type": "A model. A model is a simple picture of how something works.",
    "setup": [
      "Imagine a large field of grass that is open to everyone. Many herders graze their cattle on it. If a herder adds one more cow, he gets all the benefit. He gets the extra milk, and he can sell the cow later. But the cost of that cow is shared by everyone, because there is a little less grass for all the cattle.",
      "So each herder thinks that it is sensible to add another cow, and then another. Every herder thinks in the same way. In the end there are too many cattle. The grass is destroyed, and all the herders are ruined. Hardin wrote, “Freedom in a commons brings ruin to all.”",
      "Hardin took this example from a pamphlet written in 1833 by the economist William Forster Lloyd. Hardin’s main worry was population growth. He argued that the freedom to have as many children as one wants would lead to the same kind of ruin. He said that people must agree to limits that apply to everyone.",
      "About twenty years later, the political economist Elinor Ostrom studied real shared resources. She studied mountain meadows in Switzerland, village forests in Japan, and water systems for farms in Spain and the Philippines. She found that many of these resources had been used for hundreds of years without being destroyed. The users had made their own rules. The rules decided who could use the resource, how much each person could take, who would keep watch, and how cheaters would be punished."
    ],
    "question": "When a resource belongs to everyone, why do sensible choices by each person destroy it? And is the only answer government control or private ownership?",
    "reveals": "Each person can act sensibly and still cause a disaster for the whole group. Such a disaster happens when the benefit goes to one person but the cost is shared by all. Hardin believed that a shared resource must be controlled by the government or divided into private property. Ostrom showed a third way. When users can talk to each other, watch each other and enforce rules, they can manage a shared resource themselves. The real problem is a resource that is open to all and has no rules. Shared ownership itself is not the problem.",
    "readings": [
      [
        "Hardin’s view",
        "The story is a warning about limits. Without enforced rules, shared resources and a growing population will lead to ruin."
      ],
      [
        "Ostrom’s view",
        "The problem is about institutions, not human nature. Shared resources last when the rules suit local conditions and when users help to make the rules. They also last when the people who keep watch answer to the users, when punishments start small, and when disputes are settled cheaply. Ostrom won the Nobel Prize in Economics in 2009. She was the first woman to win it."
      ],
      [
        "Hardin’s later view",
        "In 1994, Hardin accepted that his argument applied only to shared resources that have no management."
      ],
      [
        "Enclosure in England",
        "For centuries, English villages shared their fields and pastures under village rules. Between the sixteenth and nineteenth centuries, much of this common land was enclosed. Enclosure means that the land was fenced and turned into private property. Supporters of enclosure argued that common land was badly used. Some historians reply that village rules had managed the commons well for hundreds of years."
      ]
    ],
    "breaks": [
      "The model assumes that users cannot talk to each other or make rules. In real life, many communities do exactly this.",
      "Hardin’s argument about population led him to support forced limits on having children. Most people today reject this conclusion.",
      "Some shared resources, such as the earth’s atmosphere, have billions of users. Solutions that work in a village are hard to use at that scale."
    ],
    "uses": [
      "Groundwater: When electricity for farm pumps is free or cheap, every farmer pumps more water from the same underground source. As a result, the water level keeps falling.",
      "Forests: Community bodies such as the van panchayats of Uttarakhand and joint forest management committees protect shared forests with local rules.",
      "Climate change: The atmosphere is a shared resource for the whole world. Each country benefits from its own emissions, but the damage is shared by all countries.",
      "Exam use: In the Essay paper, use it for topics on environment, cooperation, and individual versus collective interest. In GS-IV, use it for environmental ethics and for public interest versus private gain."
    ],
    "related": [
      "freerider",
      "collectiveaction",
      "pd",
      "staghunt",
      "invisiblehand",
      "statenature"
    ],
    "reading": [
      [
        "Garrett Hardin, “The Tragedy of the Commons”, Science 162 (1968)",
        "",
        "https://doi.org/10.1126/science.162.3859.1243"
      ],
      [
        "Elinor Ostrom, Nobel Prize lecture (2009)",
        "Free. Ostrom explains her findings in her own words.",
        "https://www.nobelprize.org/prizes/economic-sciences/2009/ostrom/lecture/"
      ],
      [
        "Garrett Hardin, “The tragedy of the unmanaged commons”, Trends in Ecology and Evolution 9 (1994)",
        "",
        "https://doi.org/10.1016/0169-5347(94)90097-3"
      ]
    ]
  },
  "dictator": {
    "source": "The economist Ronald Wintrobe named the dictator’s dilemma in The Political Economy of Dictatorship (1998). The economist Timur Kuran explained the related idea of preference falsification in Private Truths, Public Lies (1995).",
    "period": "1995 and 1998",
    "tradition": "Political science and economics",
    "type": "A strategic model. A strategic model studies how people choose when the result depends on what others do.",
    "setup": [
      "Imagine a dictator who rules through fear. The newspapers are controlled, critics are jailed, and people who complain in public are punished.",
      "At first, this seems to make the dictator safe. No one openly opposes him. Crowds cheer at rallies. Officials report that the people are happy and loyal.",
      "But there is a problem. Because people are afraid, they hide what they really think. They praise the ruler in public and complain only in private, or not at all. So the dictator can no longer tell who truly supports him and who is waiting for a chance to remove him. His own officials also tell him only what he wants to hear.",
      "The more the dictator represses people, the less he knows. Without real information, he cannot tell whether he is safe. So he tends to spend more and more on security forces and on buying the loyalty of important groups, and he may come to fear his own generals most of all.",
      "The economist Ronald Wintrobe called this problem the dictator’s dilemma. The economist Timur Kuran added that when people hide their true views, a government can collapse suddenly. Once a few people speak out, others realise that they are not alone, and hidden opposition bursts into the open. Kuran used this idea to explain why the fall of the communist governments of Eastern Europe in 1989 surprised almost everyone."
    ],
    "question": "Why does ruling through fear leave a ruler less sure of his power?",
    "reveals": "Repression silences critics, but it also destroys the honest information that any government needs. People hide their true preferences, and officials hide bad news. The ruler becomes surrounded by false loyalty and cannot see danger coming. The dilemma shows a hidden strength of free societies. Free speech, a free press and elections tell a government what citizens really think, so that problems can be fixed before they explode.",
    "readings": [
      [
        "Wintrobe’s reading",
        "Dictators face a trade-off between repression and loyalty. The more they rely on fear, the more they must spend to buy real loyalty from important groups."
      ],
      [
        "Kuran’s reading",
        "When people hide their views, public opinion can look stable while private anger grows. Small events can then trigger sudden revolutions."
      ],
      [
        "Information and famine",
        "The economist Amartya Sen argued that no major famine has occurred in a functioning democracy with a free press. One reason is that a free press brings problems into the open early."
      ]
    ],
    "breaks": [
      "Modern authoritarian governments use surveillance and data to learn what people think, which may reduce the dilemma.",
      "Some dictatorships remain stable for decades, so hidden information does not always lead to collapse.",
      "Democracies also face information problems, such as officials who hide bad news from ministers."
    ],
    "uses": [
      "Honest reporting in administration: Officials who punish bad news will soon receive only good news. Good leaders reward honest reporting.",
      "Free press and RTI: Independent media and the Right to Information Act help governments to learn about problems early.",
      "Organisations: Companies with a culture of fear often discover scandals only when it is too late.",
      "Exam use: In GS-IV, use it for integrity, the courage to report bad news and accountability. In the Essay paper, use it for topics on democracy, freedom of speech and power."
    ],
    "related": [
      "gadfly",
      "noblelie",
      "panopticon",
      "tacitus",
      "inquisitor",
      "milgram"
    ],
    "reading": [
      [
        "“Preference falsification”, Wikipedia",
        "Free overview of Timur Kuran’s theory.",
        "https://en.wikipedia.org/wiki/Preference_falsification"
      ],
      [
        "“Dictatorship”, Wikipedia",
        "Free overview, including the dictator’s dilemma.",
        "https://en.wikipedia.org/wiki/Dictatorship"
      ]
    ]
  },
  "tacitus": {
    "source": "Cicero, Tusculan Disputations, Book 5 (sections 61–62). Cicero may have read the story in the work of the Greek historian Diodorus Siculus.",
    "period": "Cicero wrote in 45 BCE. The story is set at the court of Dionysius I of Syracuse, in the fourth century BCE.",
    "tradition": "Greek and Roman history and philosophy",
    "type": "A historical anecdote. An anecdote is a short story about a real person, used to make a point.",
    "setup": [
      "Dionysius was the tyrant of Syracuse, a rich Greek city in Sicily. He had great wealth and power, but he had also made many enemies. He was so afraid of being murdered that he trusted almost no one.",
      "One of his courtiers, Damocles, liked to flatter him. Damocles praised the king’s armies, his wealth, his splendid palaces and his power. He said that no one had ever been happier than Dionysius.",
      "Dionysius asked, “Damocles, since this life pleases you so much, would you like to taste it yourself?” Damocles gladly agreed. So Dionysius had him placed on a golden couch covered with beautiful cloth. The tables were filled with the finest food. Handsome young servants waited on him, perfumes were burned, and garlands of flowers were placed around him. Damocles felt very happy.",
      "Then Dionysius ordered a shining sword to be hung from the ceiling, directly above Damocles’s head. The sword was held up by a single hair from a horse’s tail.",
      "Damocles stopped enjoying anything. He no longer looked at the servants or the silver dishes, and he did not touch the food. At last he begged the tyrant to let him go, because he no longer wanted to be happy in that way. Cicero then asks whether anyone can be happy when some terror always hangs over him."
    ],
    "question": "Is power worth having if it comes with constant fear?",
    "reveals": "From outside, power looks like pure happiness. From inside, it can be a life of constant danger and anxiety. Dionysius showed Damocles that great power, especially power gained and kept by force, brings a fear that spoils every pleasure. Cicero used the story to argue that true happiness depends on virtue and a peaceful mind, not on wealth and power.",
    "readings": [
      [
        "Cicero’s reading",
        "In the Tusculan Disputations, Cicero argues that virtue is enough for a happy life. A tyrant who lives in fear cannot be happy, however rich he is."
      ],
      [
        "Political reading",
        "Rulers who govern by force make enemies and must always watch for danger. Legitimate power, based on consent and justice, is safer for both the ruler and the ruled."
      ],
      [
        "Everyday meaning",
        "The phrase sword of Damocles now means any danger that hangs over a person in a position of privilege or responsibility. In 1961, the American president John F. Kennedy used the image to describe the threat of nuclear war."
      ]
    ],
    "breaks": [
      "Not every person in power lives in fear. Leaders in stable democracies can hold high office without constant danger.",
      "The story shows the price of tyranny, but it does not tell us how to design safer and fairer forms of power.",
      "Anxiety can come with any responsibility, not only with power. The story focuses on rulers and ignores the fears of ordinary people."
    ],
    "uses": [
      "Pressures of public office: Senior officials make decisions that can bring public criticism, court cases or political attacks. Understanding this pressure helps in training and supporting them.",
      "Illegitimate power: Leaders who rule through fear and corruption often live in fear of exposure and revenge.",
      "Nuclear risk: The threat of nuclear war is often described as a sword of Damocles hanging over humanity.",
      "Exam use: In GS-IV, use it for the ethics of power, integrity and emotional intelligence. In the Essay paper, use it for topics on power, happiness and fear."
    ],
    "related": [
      "gyges",
      "dictator",
      "inquisitor",
      "mad",
      "gadfly",
      "ecclesiastes"
    ],
    "reading": [
      [
        "Cicero’s Tusculan Disputations, translated by C. D. Yonge",
        "The story of Damocles is in Book 5. Free on Project Gutenberg.",
        "https://www.gutenberg.org/ebooks/14988"
      ],
      [
        "“Sword of Damocles”, Wikipedia",
        "Free overview of the story and how it has been used.",
        "https://en.wikipedia.org/wiki/Sword_of_Damocles"
      ]
    ]
  },
  "gadfly": {
    "source": "Plato, Apology (30e–31a). The Apology is Plato’s account of the speech that Socrates gave at his trial.",
    "period": "The trial took place in Athens in 399 BCE.",
    "tradition": "Greek philosophy",
    "type": "A historical anecdote. An anecdote is a short story about a real event.",
    "setup": [
      "In 399 BCE, Socrates was put on trial in Athens. He was more than seventy years old. Three citizens, Meletus, Anytus and Lycon, accused him of two crimes. The first was not believing in the gods of the city. The second was corrupting the young people of Athens. A jury of about five hundred citizens heard the case.",
      "Socrates did not beg for mercy. He explained why he spent his life questioning people. He said that the oracle at Delphi had once declared that no one was wiser than Socrates. To test the oracle’s words, he questioned politicians, poets and craftsmen. He found that they believed they knew things that they did not really know. He was wiser only because he knew that he did not know.",
      "Then Socrates compared himself to a gadfly, an insect that bites horses. He said that Athens was like a large, noble horse that had become slow because of its size. God had sent him to sting the city awake. All day long, he followed the citizens, questioning them and urging them to care about their souls. If they killed him, they would not easily find another like him.",
      "The jury found him guilty by a small margin. Socrates said that if thirty votes had gone the other way, he would have been freed. When he was asked to suggest a punishment, he first said that he deserved free meals at the city’s expense, like an Olympic champion. His friends then offered to pay a fine for him. The jury sentenced him to death. He later drank a cup of hemlock poison in prison."
    ],
    "question": "Does a society need people who make it uncomfortable by questioning it?",
    "reveals": "Socrates argues that questioning is a public service, not a crime. A society that silences its critics may feel comfortable, but it stops improving. The gadfly is annoying because it stings. But without the sting, the horse falls asleep. The story also shows the cost of dissent. People who question those in power are often punished, even in a democracy.",
    "readings": [
      [
        "Socrates’ own view",
        "He had a duty from God to examine himself and others. He said that the unexamined life is not worth living. He would rather die than stop questioning."
      ],
      [
        "Obedience to the law",
        "In another dialogue, the Crito, Socrates refuses his friends’ offer to help him escape from prison. He says that he must obey the laws of Athens, even when they are used unjustly against him. So Socrates was a critic, but not a rebel against the law."
      ],
      [
        "Civil disobedience",
        "In his Letter from Birmingham Jail (1963), Martin Luther King Jr. referred to Socrates. He said that nonviolent protesters were like gadflies who create a useful tension in society."
      ],
      [
        "Critical view",
        "The journalist I. F. Stone, in his book The Trial of Socrates (1988), argued that Socrates looked down on democracy. In this view, Athens feared him partly for political reasons."
      ]
    ],
    "breaks": [
      "Not every critic is a gadfly. Some people who attack society are simply wrong or harmful. The story does not tell us how to tell the difference.",
      "Socrates was highly skilled and very sure of his mission. Most people who question authority do not have his wisdom, and they can be mistaken.",
      "Our main account of the trial comes from Plato, who was a loyal student of Socrates. So the story may show Socrates more favourably than the facts would."
    ],
    "uses": [
      "Free press and opposition: A democracy needs journalists, opposition parties and courts that question the government.",
      "Whistleblowers: People who expose wrongdoing inside organisations are often punished, as Socrates was.",
      "Honest advice in government: A good civil servant gives frank advice to ministers, even when the advice is unwelcome.",
      "Exam use: In GS-IV, use it for courage of conviction, dissent, whistleblowing, and Socrates as a moral thinker. In the Essay paper, use it for topics on free speech, dissent and democracy."
    ],
    "related": [
      "cave",
      "gyges",
      "milgram",
      "beforelaw",
      "noblelie",
      "inquisitor"
    ],
    "reading": [
      [
        "Plato, Apology, translated by Benjamin Jowett",
        "The gadfly passage comes near the middle of the speech. Free on Project Gutenberg.",
        "https://www.gutenberg.org/ebooks/1656"
      ],
      [
        "“Socrates”, Stanford Encyclopedia of Philosophy",
        "",
        "https://plato.stanford.edu/entries/socrates/"
      ]
    ]
  },
  "invisiblehand": {
    "source": "Adam Smith, The Theory of Moral Sentiments (1759), Part IV, chapter 1; An Inquiry into the Nature and Causes of the Wealth of Nations (1776), Book IV, chapter 2",
    "period": "Scotland, 1759 and 1776",
    "tradition": "Scottish Enlightenment and classical economics",
    "type": "A metaphor. A metaphor explains one thing by comparing it to another.",
    "setup": [
      "Adam Smith was a Scottish professor of moral philosophy. He wrote two great books. The first, The Theory of Moral Sentiments (1759), was about sympathy and moral judgment. The second, The Wealth of Nations (1776), was about how nations become rich.",
      "In The Wealth of Nations, Smith asked a simple question. How do millions of strangers get the food, clothes and tools they need, when nobody plans the whole system? His answer began with ordinary self-interest. We do not get our dinner because the butcher, the brewer and the baker are kind. We get it because each of them wants to earn a living by selling to us.",
      "Smith used the phrase invisible hand only once in The Wealth of Nations. He was discussing a merchant who decides to invest his money in his own country instead of abroad. The merchant thinks only of his own safety and profit. But his investment also creates work and goods at home. Smith wrote that the merchant is led by an invisible hand to promote an end which was no part of his intention.",
      "Smith had used the same phrase in his first book. There, a rich landlord wants only luxury for himself. But to enjoy his wealth, he must employ many workers and buy the produce of many farmers. So, without meaning to, he shares the necessities of life with the poor.",
      "Smith did not trust businessmen blindly. He warned that when people of the same trade meet, even for fun, their talk often ends in a plot against the public or a plan to raise prices."
    ],
    "question": "Can people who pursue their own interests produce results that are good for everyone, without anyone planning it?",
    "reveals": "The invisible hand describes order without a designer. In a market, prices carry information about what people want and what is scarce. Each buyer and seller responds to prices for private reasons, and the result is a pattern of production that no single mind could plan. Smith’s insight explains why markets can be so productive. But Smith also knew that the invisible hand works well only under certain conditions, such as competition, fair laws and moral restraint.",
    "readings": [
      [
        "Free-market reading",
        "Markets coordinate millions of decisions better than central planners can. The economist Friedrich Hayek later argued that no planner can collect all the knowledge that prices carry. Governments should protect property and contracts and otherwise interfere as little as possible."
      ],
      [
        "Smith as a moral philosopher",
        "Smith’s first book was about sympathy and conscience. Many scholars argue that Smith assumed a society with moral norms, fair laws and real competition. He was not praising greed."
      ],
      [
        "Market failure",
        "Modern economists point to cases where self-interest does not lead to good results, such as pollution, monopolies and public goods. In these cases, the invisible hand fails and public action is needed."
      ]
    ],
    "breaks": [
      "The invisible hand needs competition. When a few firms control a market, they can raise prices and harm consumers.",
      "Markets ignore costs that fall on other people, such as pollution, unless laws make firms pay for them.",
      "Markets respond to money, not to need. People with little money may not get even basic goods, such as food or medicine."
    ],
    "uses": [
      "Economic reforms of 1991: India reduced licences and controls on industry and gave markets a larger role. Supporters argue that the faster growth that followed shows the power of market coordination.",
      "Competition law: The Competition Commission of India acts against cartels and the abuse of market power. Smith himself warned that businesses in the same trade tend to plot against the public.",
      "Limits of markets: Clean air, public health and basic education are not reliably provided by markets alone. The state must act where the invisible hand fails.",
      "Exam use: In GS-IV, use it for ethics in business, self-interest and the public good, and the role of the state. In the Essay paper, use it for topics on markets, growth and inequality."
    ],
    "related": [
      "commons",
      "freerider",
      "cobra",
      "principalagent",
      "beauty",
      "collectiveaction"
    ],
    "reading": [
      [
        "Adam Smith, The Wealth of Nations",
        "The invisible hand appears in Book IV, chapter 2. Free on Project Gutenberg.",
        "https://www.gutenberg.org/ebooks/3300"
      ],
      [
        "“Adam Smith’s Moral and Political Philosophy”, Stanford Encyclopedia of Philosophy",
        "",
        "https://plato.stanford.edu/entries/smith-moral-political/"
      ],
      [
        "“Invisible hand”, Wikipedia",
        "Free overview of how Smith and later writers used the phrase.",
        "https://en.wikipedia.org/wiki/Invisible_hand"
      ]
    ]
  },
  "cobra": {
    "source": "The name comes from the economist Horst Siebert’s book Der Kobra-Effekt (2001). The name is based on a story set in Delhi under British rule.",
    "period": "The story has no date. The name was given in 2001.",
    "tradition": "Economics",
    "type": "An anecdote. An anecdote is a short story used to make a point.",
    "setup": [
      "The British government in Delhi was worried about the large number of poisonous cobras in the city. So it offered money for every dead cobra. At first the plan worked. People killed cobras and collected the reward.",
      "Then some people started breeding cobras. They killed the cobras they had bred and collected more money. When the government found out, it stopped the reward. The breeders now had cobras that were worth nothing, so they set them free. In the end, Delhi had more cobras than before.",
      "In 2001, the economist Horst Siebert used this story to name a common problem in policy. A plan that is meant to make a problem smaller pays people in a way that makes the problem bigger.",
      "The story itself may not be true. No record from that time shows that people bred cobras for money. A review in 2025 by the Friends of Snakes Society traced the story to an old newspaper report that gave no proof.",
      "A similar case did happen in Hanoi, in Vietnam, in 1902. The city was under French rule at the time. To control the rats that spread plague, the government paid people for every rat tail they brought in. People began cutting off the tails and letting the rats go, so that the rats would breed more. There were also reports of people farming rats outside the city."
    ],
    "question": "Why does a reward that is meant to solve a problem sometimes make the problem worse?",
    "reveals": "A reward usually pays for something that can be counted, such as a dead snake or a rat’s tail. It does not pay for the real goal, which is fewer snakes or fewer rats. When it is cheaper to produce the counted thing than to reach the real goal, people produce the counted thing. The failure is not that people are bad. The failure is that the plan rewarded the wrong thing and did not think about how people would react.",
    "readings": [
      [
        "Incentives",
        "People respond to how a scheme actually works, not to what its makers hoped. A good policy must predict how people will behave."
      ],
      [
        "Measurement",
        "The cobra effect is close to Goodhart’s law and Campbell’s law. Once a number is used as a target, it stops being a good measure of what it was meant to show."
      ],
      [
        "Historical caution",
        "The story shows how an attractive story can spread as if it were a fact. Naming a problem after an unproven colonial story also shows Indians as cheats. For this reason, some writers prefer the plain term perverse incentive."
      ]
    ],
    "breaks": [
      "Most rewards do not backfire. The story should not become an excuse for doing nothing.",
      "The problem in the story had a simple solution. The government could have checked where the dead cobras came from.",
      "There is little evidence for the original story. So the story can explain a point, but it cannot prove one."
    ],
    "uses": [
      "Targets in government: Suppose officials are judged by the number of toilets built, and not by the number of toilets used. Then the numbers can improve while real conditions stay the same. The same thing can happen when police stations are judged by low recorded crime.",
      "Mexico City: In 1989, the city stopped cars from being driven on certain days, based on their number plates. A study in 2008 found that many families bought an extra car, often an older one, so that they could still drive every day. The air did not become cleaner.",
      "Exam use: In GS-IV, use it for probity, performance measurement and ethics in policy design. In the Essay paper, use it for topics on unintended consequences."
    ],
    "related": [
      "goodhart",
      "campbell",
      "principalagent",
      "moralhazard",
      "butterfly",
      "midas"
    ],
    "reading": [
      [
        "Michael G. Vann, “Of Rats, Rice, and Race: The Great Hanoi Rat Massacre”, French Colonial History 4 (2003)",
        "The real case from Hanoi.",
        "https://doi.org/10.1353/fch.2003.0027"
      ],
      [
        "Lucas W. Davis, “The Effect of Driving Restrictions on Air Quality in Mexico City”, Journal of Political Economy 116 (2008)",
        "",
        "https://doi.org/10.1086/529398"
      ],
      [
        "“Perverse incentive”, Wikipedia",
        "Free overview. It also explains the doubts about the cobra story.",
        "https://en.wikipedia.org/wiki/Perverse_incentive"
      ]
    ]
  },
  "goodhart": {
    "source": "Charles Goodhart, a paper on monetary policy in the United Kingdom (1975). The popular wording comes from the anthropologist Marilyn Strathern (1997).",
    "period": "United Kingdom, 1975 and 1997",
    "tradition": "Economics and the study of organisations",
    "type": "A principle. A principle is a short general rule drawn from experience.",
    "setup": [
      "In the 1970s, the British government and the Bank of England were trying to control inflation. Economists had noticed that inflation moved closely with the amount of money in the economy. So the authorities began to set targets for particular measures of the money supply.",
      "Charles Goodhart was an economist who advised the Bank of England. In a paper published in 1975, he pointed out a problem. Once the authorities began to target a particular measure, banks and borrowers changed their behaviour. The old link between the measure and the rest of the economy broke down. The measure stopped telling the government what it needed to know.",
      "Later writers saw the same problem in many other fields. In 1997, the anthropologist Marilyn Strathern wrote about the ratings used to judge British universities. She stated the idea in the form that is now famous. When a measure becomes a target, it ceases to be a good measure.",
      "A modern example came during the COVID-19 pandemic. The British government announced a target of 100,000 tests a day. At first, the target counted tests actually carried out. Later, it counted the capacity to carry out tests. When the government announced that it had met the target, the number of useful tests was far lower than the reported figure.",
      "An everyday example is easy to imagine. Suppose a call centre rewards its staff for keeping calls short. Some staff may soon start ending calls before the customer’s problem is solved. The average call gets shorter, but customers get worse service."
    ],
    "question": "What happens to a number when people are rewarded or punished according to it?",
    "reveals": "A measure is useful because it reflects something we care about, such as learning, health or economic stability. But once people are judged by the measure, they start to work on the number itself. They find the cheapest ways to move the number, and these ways often have nothing to do with the real goal. The number improves while the reality stays the same or gets worse. Goodhart’s law warns that no single number can safely stand in for a complex goal.",
    "readings": [
      [
        "Economic reading",
        "Goodhart’s original point was about monetary policy. Statistical links that seem stable can break down when policymakers try to use them for control. The economist Robert Lucas made a related argument, known as the Lucas critique, in 1976."
      ],
      [
        "Management reading",
        "Targets can improve performance, but they also invite gaming. Good managers use several measures together and combine them with judgment."
      ],
      [
        "Criticism of audit culture",
        "Strathern criticised a culture of audit in which institutions spend their energy on meeting indicators instead of doing their real work well."
      ]
    ],
    "breaks": [
      "Without any measures, it is hard to hold anyone accountable. The lesson is to use measures carefully, not to abandon them.",
      "Some measures are hard to game, especially when they track the real outcome closely.",
      "The law describes a common tendency, not a certainty. Honest people and good checking systems can limit gaming."
    ],
    "uses": [
      "Scheme monitoring: Counting toilets built does not show whether people use them. Surveys of actual use give a truer picture of progress.",
      "Police statistics: When police stations are judged by low crime figures, some may avoid registering complaints. A rise in registered cases can then reflect better reporting, not more crime.",
      "Research metrics: When universities and scientists are judged by the number of papers and citations, some publish weak papers in large numbers or cite each other to raise their scores.",
      "Exam use: In GS-IV, use it for accountability, integrity in reporting and the limits of targets in governance. In the Essay paper, use it for topics on measurement, development and good governance."
    ],
    "related": [
      "campbell",
      "cobra",
      "principalagent",
      "moralhazard",
      "panopticon",
      "invisiblehand"
    ],
    "reading": [
      [
        "“Goodhart’s law”, Wikipedia",
        "Free overview, including the history of the wording and modern examples.",
        "https://en.wikipedia.org/wiki/Goodhart%27s_law"
      ],
      [
        "“Campbell’s law”, Wikipedia",
        "A closely related principle from social science.",
        "https://en.wikipedia.org/wiki/Campbell%27s_law"
      ]
    ]
  },
  "campbell": {
    "source": "Donald T. Campbell, “Assessing the Impact of Planned Social Change” (1976). A journal version was published in 1979.",
    "period": "United States, 1976",
    "tradition": "Social science and programme evaluation",
    "type": "A principle. A principle is a short general rule drawn from experience.",
    "setup": [
      "Donald Campbell was an American social scientist. He studied how governments can find out whether their programmes really work. He believed that social policies should be tested carefully, in the way that scientists test ideas.",
      "In a paper written in 1976, Campbell warned about a danger. Governments often judge programmes by numbers, such as crime rates, test scores or the number of people helped. Campbell observed that the more a number is used to make important social decisions, the more pressure there is to corrupt it. The pressure also distorts the very activity that the number was meant to measure.",
      "He gave the example of school tests. Achievement tests can be good indicators of what children have learned under normal teaching. But when test scores become the goal of teaching, the tests lose their value as indicators. Teaching also becomes narrow and distorted.",
      "A clear example later came from the city of Atlanta, in the United States. Schools there were under strong pressure to raise test scores. The head of the city’s schools had been named the national Superintendent of the Year in 2009. In the same year, a local newspaper found that some schools showed statistically unlikely jumps in scores. A state investigation in 2011 found cheating on the 2009 tests in 44 of the 56 schools it examined. The investigation named 178 teachers and principals who had been involved in correcting students’ answers. In 2015, eleven educators were convicted of racketeering, a serious crime of organised wrongdoing."
    ],
    "question": "Why do high-stakes numbers tend to corrupt both the numbers and the work they measure?",
    "reveals": "Campbell’s law goes one step beyond Goodhart’s law. A number used for high-stakes decisions does not only become less accurate. The activity itself also changes. Teachers teach to the test, and police stations may record fewer crimes. When careers, money or reputations depend on a number, some people will change the number instead of improving the reality. Good systems of evaluation must expect such pressure and protect against it.",
    "readings": [
      [
        "Campbell’s own view",
        "Campbell supported measurement and evaluation. His warning was that numbers need protection from pressure, for example through independent checking and the use of several indicators together."
      ],
      [
        "Education reading",
        "Critics of high-stakes testing use Campbell’s law to explain teaching to the test and cheating. Schools may improve scores without improving learning."
      ],
      [
        "Relation to Goodhart’s law",
        "Goodhart’s law came from economics and focuses on the measure. Campbell’s law came from social science and adds that the social process itself becomes corrupted."
      ]
    ],
    "breaks": [
      "Some tests measure skills that cannot easily be faked, so teaching to them is not always harmful.",
      "The law explains the pressure toward corruption, but many people resist that pressure and report honestly.",
      "Abandoning measurement can leave poor performance hidden. The answer is better measurement, not no measurement."
    ],
    "uses": [
      "Examination results: When schools and states compete on pass percentages, there is pressure for lenient marking and copying. Independent surveys of learning, such as the Annual Status of Education Report (ASER), give a separate picture of what children can actually do.",
      "Appraisal of officials: When officers are rated only on the number of files cleared, some may clear files quickly without solving the citizen’s problem. Appraisals that also look at quality and citizen feedback reduce this risk.",
      "Evaluation of schemes: Independent evaluation and social audits reduce the pressure on officials to report inflated achievements.",
      "Exam use: In GS-IV, use it for integrity, honest reporting and the ethics of performance targets. In the Essay paper, use it for topics on education, measurement and governance."
    ],
    "related": [
      "goodhart",
      "cobra",
      "principalagent",
      "panopticon",
      "asch",
      "dictator"
    ],
    "reading": [
      [
        "Donald T. Campbell, “Assessing the Impact of Planned Social Change”, Evaluation and Program Planning (1979)",
        "The published version of the 1976 paper.",
        "https://doi.org/10.1016/0149-7189(79)90048-x"
      ],
      [
        "“Campbell’s law”, Wikipedia",
        "",
        "https://en.wikipedia.org/wiki/Campbell%27s_law"
      ],
      [
        "“Atlanta Public Schools cheating scandal”, Wikipedia",
        "",
        "https://en.wikipedia.org/wiki/Atlanta_Public_Schools_cheating_scandal"
      ]
    ]
  },
  "principalagent": {
    "source": "Economics of organisations. Adam Smith described the problem in The Wealth of Nations (1776). Michael Jensen and William Meckling developed the modern theory in 1976.",
    "period": "From 1776. The modern theory dates from the 1970s.",
    "tradition": "Economics",
    "type": "A model. A model is a simple picture of how something works.",
    "setup": [
      "People often have to rely on someone else to act for them. A shop owner hires a manager. Shareholders own a company, but managers run it. Citizens elect politicians and pay civil servants to serve the public. Economists call the person who hands over the work the principal. They call the person who does the work the agent.",
      "Problems arise for two reasons. First, the agent may want different things from the principal. A manager may want an easy life or a big bonus, while the owner wants long-term profits. Second, the agent usually knows more about the work than the principal does. The owner cannot watch the manager all day. The owner also cannot easily tell whether poor results come from bad luck or from laziness.",
      "Adam Smith saw the problem in 1776. He wrote about the directors of large trading companies. The directors managed other people’s money, not their own. So Smith argued that they could not be expected to watch over the money as carefully as partners in a private business watch over their own. He concluded that carelessness and waste would always be found in such companies.",
      "In 1976, the economists Michael Jensen and William Meckling built a theory of the firm around this problem. They called the costs of the conflict agency costs. Owners must spend money to monitor managers and to design rewards that line up the managers’ interests with their own. Even then, some loss remains."
    ],
    "question": "How can people make sure that those who act on their behalf serve their interests?",
    "reveals": "Whenever power is handed over, interests and information are divided. The agent has both the chance and the motive to serve himself. The principal–agent problem explains why organisations use contracts, bonuses, audits, reports and elections. Each tool tries to line up the agent’s interests with the principal’s, or to reduce the agent’s information advantage. But every tool has costs, and some create new problems, such as bonuses that reward short-term results over long-term health.",
    "readings": [
      [
        "Corporate governance",
        "Shareholders use boards of directors, independent auditors and pay linked to performance to control managers."
      ],
      [
        "Public administration",
        "In a democracy, citizens are the principals, and politicians and officials are their agents. Elections, courts, audits and the right to information are ways of holding the agents to account."
      ],
      [
        "Criticism of incentive pay",
        "Some psychologists argue that rewards tied to narrow targets can weaken people’s own motivation to do good work. Trust and professional ethics also matter."
      ]
    ],
    "breaks": [
      "The model assumes that agents are mainly self-interested. Many professionals act out of duty and pride in their work.",
      "Rewards linked to measurable results can lead agents to game the measures, as Goodhart’s law warns.",
      "Real organisations have long chains of principals and agents, which makes it hard to know who answers to whom."
    ],
    "uses": [
      "Corporate fraud: In January 2009, the chairman of Satyam Computer Services confessed that the company’s accounts had been falsified for years. Shareholders had relied on managers and auditors who failed them.",
      "Civil servants as agents: Officials act on behalf of citizens. Codes of conduct, audits by the Comptroller and Auditor General and the Right to Information Act all reduce the information gap between officials and citizens.",
      "Public contracts: Penalties for delay and payments linked to quality help to line up contractors’ interests with the public interest.",
      "Exam use: In GS-IV, use it for accountability, conflict of interest, corporate governance and the ethics of public service. In the Essay paper, use it for topics on governance, trust and institutions."
    ],
    "related": [
      "moralhazard",
      "goodhart",
      "campbell",
      "dictator",
      "collectiveaction",
      "gyges"
    ],
    "reading": [
      [
        "Michael C. Jensen and William H. Meckling, “Theory of the Firm”, Journal of Financial Economics (1976)",
        "",
        "https://doi.org/10.1016/0304-405x(76)90026-x"
      ],
      [
        "“Principal–agent problem”, Wikipedia",
        "",
        "https://en.wikipedia.org/wiki/Principal%E2%80%93agent_problem"
      ],
      [
        "Adam Smith, The Wealth of Nations",
        "Smith’s comment on company directors is in Book V, chapter 1. Free on Project Gutenberg.",
        "https://www.gutenberg.org/ebooks/3300"
      ]
    ]
  },
  "moralhazard": {
    "source": "Insurance practice from the seventeenth century. The economist Kenneth Arrow studied the problem in 1963.",
    "period": "From the seventeenth century",
    "tradition": "Economics and insurance",
    "type": "A concept. Moral hazard is the tendency to take more risks when someone else bears the cost.",
    "setup": [
      "Imagine two people who own identical cars. One has full insurance against theft. The other has no insurance. Which owner is more likely to leave the car unlocked?",
      "The insured owner has less reason to be careful, because the insurance company will pay if the car is stolen. The insurance does not make the owner a bad person. The insurance simply changes the owner’s incentives. Insurers call this danger moral hazard.",
      "The term moral hazard dates back to the seventeenth century. English insurance companies were using it widely by the late nineteenth century. In the 1960s, economists began to study it closely. One of the first was Kenneth Arrow, who wrote about medical insurance in 1963. For economists, moral hazard does not mean dishonesty. The term means that people behave differently when they are protected from the results of their choices.",
      "Moral hazard became a major public issue during the global financial crisis of 2008. Some very large banks had taken huge risks. Many of them believed that they were too big to fail. They expected the government to rescue them if things went wrong, because their collapse would damage the whole economy. In the United States, the official Financial Crisis Inquiry Commission named moral hazard as one part of the crisis.",
      "Insurers and governments use several tools to limit moral hazard. They make people pay part of any loss, reward careful behaviour and watch for risky actions."
    ],
    "question": "Does protecting people from the costs of their choices make them careless?",
    "reveals": "Protection against risk is valuable. Insurance, bailouts and guarantees prevent ruin and give people security. But protection also shifts the cost of mistakes from the person who decides to someone else. When people no longer bear the full cost of their actions, they may take more risks. The challenge is to design protection that helps people in trouble without rewarding carelessness.",
    "readings": [
      [
        "Economic reading",
        "Moral hazard is a problem of hidden action. The insurer cannot watch everything the insured person does. So insurance contracts make the customer pay a share of each loss and set conditions for payment."
      ],
      [
        "Financial regulation",
        "Governments that rescue banks may encourage more risk-taking in future. Stricter rules on how much capital banks must hold, and plans for closing failed banks in an orderly way, aim to reduce moral hazard."
      ],
      [
        "Welfare debate",
        "Some argue that generous welfare benefits reduce the incentive to work. Others reply that the evidence is mixed, and that security helps people to take useful risks, such as starting a business or searching for a better job."
      ]
    ],
    "breaks": [
      "People care about their safety for reasons beyond money. Few people drive carelessly just because they have insurance.",
      "The idea can be used to oppose any help for people in need. But the cost of not helping, such as poverty or a bank collapse that ruins savers, can be much larger.",
      "Moral hazard is often confused with adverse selection. Adverse selection happens when the people who know they are high risks are the most likely to buy insurance."
    ],
    "uses": [
      "Deposit insurance: In India, bank deposits are insured up to 5 lakh rupees for each depositor. The limit was raised from 1 lakh rupees in February 2020. The insurance protects small savers, but it may also make depositors pay less attention to how safely their bank is run.",
      "Loan waivers: Farm loan waivers give relief to farmers in distress. Critics warn that repeated waivers may lead borrowers to expect future waivers and to delay repayment.",
      "Loss-making enterprises: When loss-making public enterprises expect to be rescued with public money, their managers face less pressure to become efficient.",
      "Exam use: In GS-IV, use it for personal responsibility, fairness and the ethics of welfare and bailouts. In the Essay paper, use it for topics on risk, welfare and responsibility."
    ],
    "related": [
      "principalagent",
      "freerider",
      "commons",
      "cobra",
      "goodhart",
      "samaritan"
    ],
    "reading": [
      [
        "“Moral hazard”, Wikipedia",
        "Free overview of the history, the economics and the 2008 crisis.",
        "https://en.wikipedia.org/wiki/Moral_hazard"
      ],
      [
        "Deposit Insurance and Credit Guarantee Corporation",
        "The official website of the body that insures bank deposits in India.",
        "https://www.dicgc.org.in/"
      ]
    ]
  },
  "beauty": {
    "source": "John Maynard Keynes, The General Theory of Employment, Interest and Money (1936), chapter 12",
    "period": "Britain, 1936",
    "tradition": "Economics",
    "type": "A metaphor based on a game. A metaphor explains one thing by comparing it to another.",
    "setup": [
      "John Maynard Keynes was a British economist who also invested in the stock market. In 1936, he tried to explain why share prices often move far away from the real value of companies.",
      "He compared professional investment to a newspaper competition. The newspaper printed a hundred photographs of faces. Readers had to choose the six prettiest faces. The prize went to the reader whose choices came closest to the most popular choices of all the readers together.",
      "To win, a reader should not choose the faces that he himself finds prettiest. He should choose the faces that he thinks other readers will choose. But the other readers are thinking in the same way. So a clever reader tries to guess what most readers expect most readers to choose. Keynes added that some people go on to a fourth, fifth and even higher level of guessing.",
      "Keynes argued that the stock market often works like the competition. Investors do not only ask what a company is really worth. They ask what other investors will soon be willing to pay for its shares. So prices can rise or fall with changing moods, even when nothing real has changed.",
      "Later, economists turned the idea into a simple game. Each player picks a number from 0 to 100. The winner is the player whose number is closest to two-thirds of the average of all the numbers. In 1995, the economist Rosemarie Nagel used experiments with the game to measure how many levels of reasoning people actually use."
    ],
    "question": "When the result depends on what others think, should you follow your own judgment or guess theirs?",
    "reveals": "The beauty contest shows that in many situations success depends on predicting other people’s beliefs, not on finding the truth. Markets, fashions, elections and social media all have this feature. When everyone tries to guess what everyone else will do, prices and opinions can move far from reality. Bubbles form when people buy something only because they expect others to buy it later at a higher price.",
    "readings": [
      [
        "Keynes’s reading",
        "Speculation, which means buying in order to sell soon at a higher price, can crowd out long-term investment. Then the stock market becomes unstable and can harm the real economy."
      ],
      [
        "Game theory reading",
        "In the number game, perfectly logical players who expect everyone else to be logical would all choose 0. Real people usually stop after one or two levels of reasoning, so the winning number is well above 0."
      ],
      [
        "Behavioural reading",
        "People copy what others seem to believe. Popularity then becomes a reason for more popularity, whether or not something is good."
      ]
    ],
    "breaks": [
      "Over long periods, share prices tend to follow companies’ real earnings. So the contest describes short-term behaviour better than long-term value.",
      "Some investors ignore the crowd and do well by focusing on real value.",
      "The metaphor explains instability, but it cannot predict when a bubble will burst."
    ],
    "uses": [
      "Market bubbles: Shares, land and cryptocurrencies have risen sharply when buyers expected others to pay more later, and then crashed when those expectations changed.",
      "Viral content: Posts often spread because people expect others to share them, not because they are true or valuable. Misinformation can spread in the same way.",
      "Central bank communication: The Reserve Bank of India explains its policy decisions carefully, because markets react to what participants expect other participants to believe.",
      "Exam use: In GS-IV, use it for herd behaviour, independent judgment and the ethics of financial markets. In the Essay paper, use it for topics on markets, media and public opinion."
    ],
    "related": [
      "focal",
      "asch",
      "invisiblehand",
      "staghunt",
      "pd",
      "blindmen"
    ],
    "reading": [
      [
        "“Keynesian beauty contest”, Wikipedia",
        "",
        "https://en.wikipedia.org/wiki/Keynesian_beauty_contest"
      ],
      [
        "“Guess 2/3 of the average”, Wikipedia",
        "Explains the number game and the experiments with it.",
        "https://en.wikipedia.org/wiki/Guess_2/3_of_the_average"
      ]
    ]
  },
  "brokenwindows": {
    "source": "James Q. Wilson and George L. Kelling, “Broken Windows”, The Atlantic Monthly (March 1982)",
    "period": "United States, 1982",
    "tradition": "Criminology and social science",
    "type": "A theory named after a metaphor. A metaphor explains one thing by comparing it to another.",
    "setup": [
      "In March 1982, two American social scientists, James Q. Wilson and George Kelling, published an article called Broken Windows in The Atlantic Monthly magazine. They argued that visible signs of disorder in a neighbourhood can lead to more serious crime.",
      "Their central image was simple. If one broken window in a building is left unrepaired, the rest of the windows will soon be broken too. The unrepaired window sends a signal that nobody cares and nobody is in charge. So breaking more windows seems to cost nothing.",
      "Wilson and Kelling mentioned an experiment from 1969 by the psychologist Philip Zimbardo. He left one abandoned car in the Bronx, a poor area of New York, and another in Palo Alto, a wealthy town in California. In the Bronx, people began taking parts from the car within minutes. The car in Palo Alto stayed untouched for more than a week, until Zimbardo himself smashed it with a sledgehammer. Then other people joined in. Critics later pointed out that Zimbardo’s own students were among the first to join him.",
      "Wilson and Kelling argued that police should care about small signs of disorder, such as graffiti and public drinking, and not only about serious crime. Keeping order would help residents to feel safe and to take control of their own streets.",
      "In the 1990s, William Bratton, who led the New York City police, put the theory into practice. Officers strictly enforced laws against minor offences, such as not paying subway fares. Crime in New York fell sharply over the following decade. Later, the city’s police also stopped and searched very large numbers of people, and that practice was strongly criticised."
    ],
    "question": "Do small signs of disorder invite bigger crimes?",
    "reveals": "The broken windows idea claims that the condition of a place shapes how people behave in it. Neglect signals that rules are not enforced, and people adjust their behaviour to that signal. The idea explains why cleaning graffiti and repairing street lights can matter. But the history of the theory also shows how a social idea can be turned into harsh policies. Policing based on the theory has sometimes targeted poor communities for minor offences.",
    "readings": [
      [
        "Supporters’ reading",
        "Keeping order in public spaces helps communities feel safe and prevents a slide into serious crime. Supporters point to the fall in crime in New York in the 1990s."
      ],
      [
        "Experimental evidence",
        "In 2008, the researchers Kees Keizer, Siegwart Lindenberg and Linda Steg published field experiments from the Netherlands. People were more likely to litter, and even to steal, when they saw signs that others had broken rules, such as graffiti."
      ],
      [
        "Critics’ reading",
        "Crime also fell in many American cities that did not use this style of policing. Critics argue that other factors explain New York’s decline. They also argue that aggressive enforcement against minor offences damages trust between the police and communities."
      ]
    ],
    "breaks": [
      "Nobody has clearly proved that disorder causes crime. Poverty and other conditions may cause both.",
      "The 1982 article spoke about community order. Later zero-tolerance policing was harsher, and Kelling and Bratton themselves said that the two approaches are different.",
      "Decisions about what counts as disorder can reflect prejudice against poor people, homeless people or minorities."
    ],
    "uses": [
      "Clean public spaces: Clean, well-kept public places encourage people to keep them clean. Litter tends to attract more litter, which is one lesson for campaigns such as Swachh Bharat.",
      "Women’s safety: Well-lit and well-maintained streets make public spaces feel safer. Safe city projects in Indian cities include better street lighting.",
      "Small violations in offices: Tolerating small acts of corruption signals that rules do not matter, and bigger violations may follow.",
      "Exam use: In GS-IV, use it for rule of law, organisational culture and the ethics of policing. In the Essay paper, use it for topics on crime, cities and social order."
    ],
    "related": [
      "cobra",
      "asch",
      "bystander",
      "stanfordprison",
      "commons",
      "panopticon"
    ],
    "reading": [
      [
        "James Q. Wilson and George L. Kelling, “Broken Windows”, The Atlantic (March 1982)",
        "The original article.",
        "https://www.theatlantic.com/magazine/archive/1982/03/broken-windows/304465/"
      ],
      [
        "Kees Keizer, Siegwart Lindenberg and Linda Steg, “The Spreading of Disorder”, Science (2008)",
        "",
        "https://doi.org/10.1126/science.1161405"
      ],
      [
        "“Broken windows theory”, Wikipedia",
        "Free overview of the theory, the evidence and the criticism.",
        "https://en.wikipedia.org/wiki/Broken_windows_theory"
      ]
    ]
  },
  "maxwell": {
    "source": "James Clerk Maxwell, letter to Peter Guthrie Tait (11 December 1867), and later his book Theory of Heat",
    "period": "Britain, from 1867",
    "tradition": "Physics",
    "type": "A thought experiment. A thought experiment is an imagined situation used to test an idea.",
    "setup": [
      "A basic law of physics, the second law of thermodynamics, says that heat flows from hot things to cold things, and not the other way. For example, a hot cup of tea slowly cools down in a cold room. It never becomes hotter on its own. In the language of physics, disorder, or entropy, always tends to increase.",
      "In 1867, the Scottish physicist James Clerk Maxwell imagined a way to break this law. Picture a box of gas divided into two parts by a wall. In the wall there is a tiny door. The gas molecules in the box move at different speeds. Some are fast and some are slow.",
      "Now imagine a tiny, intelligent being who can see each molecule. This being guards the door. When a fast molecule comes towards the door from the left, the being opens the door and lets it through to the right. When a slow molecule comes from the right, the being lets it through to the left. At all other times, the door stays closed.",
      "After a while, the fast molecules are on the right and the slow ones are on the left. Fast molecules mean heat. So the right side becomes hot and the left side becomes cold. The being has created a difference in temperature without doing any work. Creating a difference in temperature without any work seems to break the second law. Later, the physicist Lord Kelvin called this being Maxwell’s demon."
    ],
    "question": "Can intelligence and information break a basic law of nature?",
    "reveals": "Maxwell’s own point was that the second law is a law of probability, not an absolute rule. It holds because there are so many molecules that order almost never appears by chance. Later scientists found a deeper answer. The demon must collect and store information about every molecule. In 1982, the physicist Charles Bennett showed that the demon must eventually erase its memory to keep working. Erasing information always produces heat and disorder. So the demon does not break the law. The key lesson is that information is physical, and handling it has a real cost.",
    "readings": [
      [
        "Maxwell’s view",
        "The demon shows that the second law is statistical. It describes what happens with huge numbers of molecules, not with each single molecule."
      ],
      [
        "Szilard and Landauer",
        "In 1929, the physicist Leo Szilard linked the demon’s knowledge to entropy. In 1961, Rolf Landauer showed that erasing information has a minimum energy cost. These ideas helped to create the modern physics of information."
      ],
      [
        "Bennett’s solution",
        "The demon can measure the molecules without much cost, but it must eventually clear its memory. Clearing the memory produces enough entropy to save the second law."
      ]
    ],
    "breaks": [
      "The demon is imaginary. No real device can see and sort single molecules for free. Laboratory versions have been built, but none has broken the second law.",
      "The idea is often used loosely to mean that clever control can beat nature. The scientific lesson is the opposite. Control always has a cost.",
      "The thought experiment is technical. Its use as a metaphor outside physics should not be confused with the physics itself."
    ],
    "uses": [
      "Computing: Landauer’s idea sets a minimum energy cost for erasing information. Real computers use far more energy than this minimum, but the idea shows that processing information can never be completely free.",
      "Order has a cost: Keeping any system in order, whether a city, an office or a filing system, needs constant effort and energy.",
      "Sorting and gatekeeping: The demon is a picture of any gatekeeper who sorts people, such as an admission system. Sorting needs information, and collecting information has a cost.",
      "Exam use: In the Essay paper, use it for topics on information, technology, order and effort."
    ],
    "related": [
      "laplace",
      "schrodinger",
      "butterfly",
      "boltzmann"
    ],
    "reading": [
      [
        "“Information Processing and Thermodynamic Entropy”, Stanford Encyclopedia of Philosophy",
        "Explains the demon and the modern solution.",
        "https://plato.stanford.edu/entries/information-entropy/"
      ],
      [
        "“Maxwell’s demon”, Wikipedia",
        "Free overview of the history of the idea.",
        "https://en.wikipedia.org/wiki/Maxwell%27s_demon"
      ]
    ]
  },
  "schrodinger": {
    "source": "Erwin Schrödinger, “Die gegenwärtige Situation in der Quantenmechanik” (“The Present Situation in Quantum Mechanics”), Naturwissenschaften (1935)",
    "period": "1935",
    "tradition": "Physics",
    "type": "A thought experiment. A thought experiment is an imagined situation used to test an idea.",
    "setup": [
      "In quantum physics, very small particles such as atoms do not behave like everyday objects. According to the theory, an atom can be in a mixture of two states at the same time. This mixture is called a superposition. But when scientists measure the atom, they always find it in just one state.",
      "In 1935, the Austrian physicist Erwin Schrödinger wanted to show how strange this idea becomes when it is applied to everyday things. So he imagined a cat locked inside a steel box.",
      "Inside the box, there is also a tiny amount of radioactive material. In one hour, there is an equal chance that one atom of this material will decay, or that no atom will decay. There is also a Geiger counter, a device that detects radiation. If an atom decays, the counter sets off a hammer. The hammer breaks a small bottle of poison, and the cat dies. If no atom decays, the cat lives.",
      "The box stays closed for one hour. According to the usual explanation of quantum theory at that time, the atom is in a mixture of decayed and not decayed until someone looks. So the cat must also be in a mixture of alive and dead. Schrödinger thought that this was absurd. A cat is either alive or dead. He used the example to show that something was missing in the way physicists explained quantum theory."
    ],
    "question": "When does a possibility become a single, definite fact?",
    "reveals": "The cat shows the measurement problem in quantum physics. The theory describes tiny particles as mixtures of possibilities. But the world we see is always definite. Physicists still debate how and when the mixture turns into one result. Schrödinger did not believe that a cat could be both alive and dead. He wanted to show that the usual explanation of quantum theory was incomplete.",
    "readings": [
      [
        "Copenhagen interpretation",
        "A measurement makes the system take one definite state. Niels Bohr, a leading figure of this view, treated the state before measurement as undecided. Critics ask what exactly counts as a measurement."
      ],
      [
        "Many-worlds interpretation",
        "In 1957, Hugh Everett suggested that both outcomes really happen, in different branches of reality. In one branch the cat is alive, and in another it is dead. The branches cannot affect each other."
      ],
      [
        "Decoherence",
        "A large object such as a cat is always interacting with its surroundings. These interactions make the mixture of states disappear almost at once. So in practice, we never see a cat that is both alive and dead."
      ]
    ],
    "breaks": [
      "The cat is often described as proof that things can really be both alive and dead. Schrödinger meant the opposite. He used the example to show that such a conclusion is absurd.",
      "Decoherence explains why we do not see mixtures in daily life. But it does not fully explain why one particular result happens. So the puzzle is not completely solved.",
      "In everyday talk, the example is used loosely for any situation where we do not yet know the result. This popular use has little to do with the physics."
    ],
    "uses": [
      "Quantum computers: These computers use qubits, which can be in a superposition of 0 and 1. Keeping qubits in this state long enough is one of the hardest engineering problems today.",
      "Science communication: The cat shows how a vivid story can explain a hard idea, and also how it can be misunderstood.",
      "Decision making: Planners often face outcomes that stay unknown until they act. The story is a reminder to separate what we do not yet know from what is truly undecided.",
      "Exam use: In the Essay paper, use it for topics on science, uncertainty and the limits of knowledge."
    ],
    "related": [
      "maxwell",
      "laplace",
      "butterfly",
      "twin",
      "boltzmann",
      "sleepingbeauty"
    ],
    "reading": [
      [
        "“Copenhagen Interpretation of Quantum Mechanics”, Stanford Encyclopedia of Philosophy",
        "",
        "https://plato.stanford.edu/entries/qm-copenhagen/"
      ],
      [
        "“Philosophical Issues in Quantum Theory”, Stanford Encyclopedia of Philosophy",
        "Explains the measurement problem.",
        "https://plato.stanford.edu/entries/qt-issues/"
      ],
      [
        "“Schrödinger’s cat”, Wikipedia",
        "Free overview, including the main interpretations.",
        "https://en.wikipedia.org/wiki/Schr%C3%B6dinger%27s_cat"
      ]
    ]
  },
  "laplace": {
    "source": "Pierre-Simon Laplace, A Philosophical Essay on Probabilities (1814)",
    "period": "France, 1814",
    "tradition": "Modern Western science and philosophy",
    "type": "A thought experiment. A thought experiment is an imagined situation used to test an idea.",
    "setup": [
      "Pierre-Simon Laplace was a French mathematician and astronomer. He used Isaac Newton’s laws of motion and gravity to explain the movements of the planets with great precision. His success led him to a bold idea about the whole universe.",
      "In 1814, near the start of a book on probability, Laplace asked readers to imagine a vast intelligence. At a single moment, this intelligence would know all the forces that act in nature. The intelligence would also know the exact position of every object in the universe, from the largest planet to the lightest atom. And it would be powerful enough to calculate with all this information.",
      "Laplace argued that for such an intelligence, nothing would be uncertain. A mind like that could work out the entire future and the entire past. The future and the past would both be present before its eyes.",
      "Laplace’s point was that the present state of the universe is the effect of its past and the cause of its future. Everything follows from what came before, according to fixed laws. Philosophers call this view determinism. Humans cannot make such calculations, because we lack the knowledge and the power. So we use probability to deal with our ignorance.",
      "Laplace himself never used the word demon. Later writers gave his imagined intelligence the name Laplace’s demon."
    ],
    "question": "If we knew everything about the present, could we predict the whole future?",
    "reveals": "Laplace’s demon is a vivid picture of determinism. If every event follows necessarily from earlier events under fixed laws, then the future is already settled, even if nobody can know it. The picture raises deep questions. If the future is fixed, is there any room for free will, chance or moral responsibility? Laplace also suggests that probability may measure human ignorance rather than real chance in the world.",
    "readings": [
      [
        "Determinism and free will",
        "If a demon could predict every human choice, it seems that nobody could ever have chosen otherwise. Philosophers still debate whether free will can exist in a determined world."
      ],
      [
        "Probability as ignorance",
        "For Laplace, probability measures what we do not know. A coin toss seems random only because we cannot track all the forces acting on the coin."
      ],
      [
        "Modern physics",
        "Quantum mechanics, in its standard interpretation, says that some events are truly random. If so, even a perfect demon could not predict the future exactly."
      ]
    ],
    "breaks": [
      "Chaos theory shows that tiny differences in starting conditions can grow into huge differences. In practice, even very small errors of measurement make long-term prediction impossible, as with the weather.",
      "Many processes described by thermodynamics cannot run backwards, which creates problems for a demon that tries to reconstruct the past.",
      "In 2008, the scientist David Wolpert used a mathematical argument to challenge the idea. He argued that no intelligence inside the universe could predict everything about the universe, including itself."
    ],
    "uses": [
      "Limits of planning: Governments that try to predict and control every economic or social outcome often fail, because complex systems cannot be fully predicted.",
      "Predictive technology: Algorithms claim to predict human behaviour from data, for example in credit scoring or policing. Laplace’s demon reminds us that prediction has limits, and that treating people as fully predictable raises ethical questions.",
      "Responsibility: Criminal law assumes that people can choose. Debates about how far behaviour is shaped by upbringing and circumstances repeat the old debate about determinism.",
      "Exam use: In GS-IV, use it for free will, moral responsibility and the ethics of predictive technology. In the Essay paper, use it for topics on science, certainty and human freedom."
    ],
    "related": [
      "butterfly",
      "maxwell",
      "schrodinger",
      "karma",
      "montyhall",
      "boltzmann"
    ],
    "reading": [
      [
        "Pierre-Simon Laplace, A Philosophical Essay on Probabilities, translated by F. W. Truscott and F. L. Emory",
        "The passage about the vast intelligence is near the start of the book. Free on Project Gutenberg.",
        "https://www.gutenberg.org/ebooks/58881"
      ],
      [
        "“Causal Determinism”, Stanford Encyclopedia of Philosophy",
        "",
        "https://plato.stanford.edu/entries/determinism-causal/"
      ],
      [
        "“Laplace’s demon”, Wikipedia",
        "",
        "https://en.wikipedia.org/wiki/Laplace%27s_demon"
      ]
    ]
  },
  "twin": {
    "source": "Albert Einstein’s special theory of relativity (1905). The physicist Paul Langevin described a round trip of this kind in 1911.",
    "period": "1905 and 1911",
    "tradition": "Modern physics",
    "type": "A thought experiment. A thought experiment is an imagined situation used to test an idea.",
    "setup": [
      "In 1905, Albert Einstein published his special theory of relativity. One of its strange predictions is that time does not pass at the same rate for everyone. A clock that moves very fast compared with an observer runs slower than the observer’s own clock. The effect is tiny at everyday speeds, but it becomes very large close to the speed of light.",
      "Einstein noted that a clock that travels away and comes back will show less time than a clock that stayed in place. In 1911, the French physicist Paul Langevin worked out the same result for a traveller on a round trip.",
      "Imagine twin sisters. One stays on Earth. The other travels in a spaceship to a distant star at nearly the speed of light, and then returns. When the traveller comes home, she finds that her sister is now much older than she is. In one extreme example, the traveller has aged two years while 200 years have passed on Earth.",
      "The story seems to contain a paradox, which means an apparent contradiction. According to relativity, motion is relative. From the traveller’s point of view, Earth moves away and comes back. So why should the twin on Earth not be the younger one?",
      "The answer is that the twins’ journeys are not the same. The twin on Earth keeps one steady motion. The travelling twin must turn around to come home. Her path through space and time is different, and her clock records less time.",
      "The effect has been measured. In 1971, the scientists Joseph Hafele and Richard Keating flew atomic clocks around the world on ordinary passenger planes. When the clocks came back, they differed from clocks that had stayed on the ground, by the tiny amounts that relativity predicted."
    ],
    "question": "If one twin travels through space at nearly the speed of light, why does she return younger than the twin who stayed at home?",
    "reveals": "The twin paradox shows that time is not the same for everyone. How much time passes for a person depends on how that person moves through space. Our everyday sense that one universal clock ticks for the whole universe is wrong. Yet relativity is not a matter of opinion. When the twins meet again, both agree on who is younger, because their journeys were different.",
    "readings": [
      [
        "Physics reading",
        "The paradox disappears once we see that the twins’ journeys are not symmetrical. Only the traveller changes direction, so only her clock falls behind."
      ],
      [
        "Philosophical reading",
        "The paradox challenges the common idea of a single present moment shared by the whole universe. Philosophers debate what relativity means for the nature of time."
      ],
      [
        "Practical reading",
        "Satellite navigation systems depend on very precise clocks. Engineers must allow for the effects of relativity on those clocks, or calculated positions would soon become inaccurate."
      ]
    ],
    "breaks": [
      "Human travel at nearly the speed of light is far beyond current technology, so the dramatic version remains imaginary.",
      "Popular explanations often say that acceleration causes the age difference. Physicists point out that the key is the difference between the two paths, which can be shown even without acceleration.",
      "The twin paradox is about time measured by clocks. The story says nothing about how time feels to a person."
    ],
    "uses": [
      "Satellite navigation: Systems such as GPS and India’s NavIC rely on precise atomic clocks, whose readings must take relativity into account.",
      "Questioning common sense: The twin paradox is a strong example of science correcting everyday intuition. Good judgment requires openness to evidence that contradicts what seems obvious.",
      "Scientific temper: Article 51A(h) of the Constitution of India makes it a fundamental duty to develop the scientific temper and the spirit of inquiry. Surprising results confirmed by experiment show why that spirit matters.",
      "Exam use: In GS-IV, use it sparingly, for open-mindedness and the value of evidence over intuition. In the Essay paper, use it for topics on science, time and the limits of common sense."
    ],
    "related": [
      "zeno",
      "schrodinger",
      "maxwell",
      "laplace",
      "boltzmann",
      "blindmen"
    ],
    "reading": [
      [
        "Albert Einstein, Relativity: The Special and General Theory",
        "Einstein’s own explanation for general readers. Free on Project Gutenberg.",
        "https://www.gutenberg.org/ebooks/5001"
      ],
      [
        "“Twin paradox”, Wikipedia",
        "",
        "https://en.wikipedia.org/wiki/Twin_paradox"
      ],
      [
        "“Hafele–Keating experiment”, Wikipedia",
        "",
        "https://en.wikipedia.org/wiki/Hafele%E2%80%93Keating_experiment"
      ]
    ]
  },
  "fermi": {
    "source": "A lunchtime question asked by the physicist Enrico Fermi at Los Alamos (1950). The astrophysicist Michael Hart examined the problem in detail in 1975.",
    "period": "United States, 1950 and 1975",
    "tradition": "Modern astronomy",
    "type": "A paradox. A paradox is a puzzle in which reasonable ideas seem to lead to a contradiction.",
    "setup": [
      "In 1950, the physicist Enrico Fermi visited the Los Alamos laboratory in New Mexico. Fermi had won the Nobel Prize, and he liked to ask simple questions that were very hard to answer. He had lunch with three colleagues, Emil Konopinski, Edward Teller and Herbert York.",
      "The conversation had moved on to other topics when Fermi suddenly asked a question. Teller remembered it as, “Where is everybody?” Everyone at the table understood at once that Fermi meant intelligent beings from other planets.",
      "The puzzle behind the question is simple. Our galaxy, the Milky Way, contains a huge number of stars, and many of them are billions of years older than the Sun. If even a small share of them have planets with intelligent life, some civilisations should have appeared long ago. Even with slow spaceships, a civilisation could spread across the whole galaxy in a few million years, which is a short time compared with the galaxy’s age. So we should see signs of them. Yet we see no clear evidence of anyone.",
      "In 1975, Michael Hart published a detailed study of the puzzle. He concluded that we may be the first civilisation in our galaxy. Other thinkers have proposed many different answers. Intelligent life may be extremely rare. Civilisations may destroy themselves. They may be too far away, or they may choose not to contact us. The Russian rocket scientist Konstantin Tsiolkovsky suggested an early version of the last answer in the 1930s. He thought that advanced beings might leave humanity alone so that it could develop in its own way."
    ],
    "question": "If the universe is so large and so old, why have we found no sign of other intelligent civilisations?",
    "reveals": "The Fermi paradox shows a gap between what seems likely and what we observe. Either intelligent life is much rarer than it seems, or something stops civilisations from spreading or being seen. Each possible answer carries a lesson about us. If civilisations usually destroy themselves, humanity may face the same danger. If life is extremely rare, human life may be very precious.",
    "readings": [
      [
        "Rare life",
        "The conditions needed for complex life and intelligence may be so rare that humans are alone, or nearly alone, in the galaxy."
      ],
      [
        "Self-destruction",
        "Technological civilisations may tend to destroy themselves through war, environmental collapse or dangerous technologies before they can spread. Some thinkers call such a barrier a great filter."
      ],
      [
        "Silence by choice",
        "Advanced civilisations may choose not to contact us, or they may communicate in ways we cannot detect. The idea that they deliberately leave us alone is called the zoo hypothesis."
      ]
    ],
    "breaks": [
      "The argument rests on estimates about life that are guesses. We know of only one planet with life.",
      "Our search for signals has covered only a small part of the sky and of the possible kinds of signal, so the lack of evidence proves little.",
      "Some scientists object to calling it Fermi’s paradox, because Fermi did not develop the argument himself. Others, such as Tsiolkovsky and Hart, did more of the work."
    ],
    "uses": [
      "Existential risk: The possibility that civilisations destroy themselves supports serious attention to nuclear weapons, climate change and dangerous new technologies.",
      "Humility: The paradox reminds us how little we know about our place in the universe. Confident claims should match the evidence.",
      "Future generations: Asking why civilisations might fail encourages policies that protect the long-term future of humanity.",
      "Exam use: In GS-IV, use it for responsibility toward future generations and humility about knowledge. In the Essay paper, use it for topics on science, technology and the future of humanity."
    ],
    "related": [
      "drake",
      "mad",
      "pd",
      "commons",
      "laplace",
      "sisyphus"
    ],
    "reading": [
      [
        "“Fermi paradox”, Wikipedia",
        "Free overview of the history and the proposed answers.",
        "https://en.wikipedia.org/wiki/Fermi_paradox"
      ]
    ]
  },
  "drake": {
    "source": "The astronomer Frank Drake, at the first scientific meeting on the search for extraterrestrial intelligence, Green Bank, West Virginia (1961)",
    "period": "United States, 1961",
    "tradition": "Modern astronomy",
    "type": "A model. A model is a simple picture of how something works.",
    "setup": [
      "In 1960, the young American astronomer Frank Drake carried out the first modern search for radio signals from other civilisations. He called it Project Ozma. Using a large radio telescope at Green Bank in West Virginia, he listened to two nearby stars similar to the Sun, for six hours a day from April to July. He found no signals from any civilisation.",
      "In 1961, Drake organised a small meeting at Green Bank to discuss the search for intelligent life beyond Earth. Ten people attended, including the young astronomer Carl Sagan. To give the meeting an agenda, Drake wrote down an equation. His aim was to guide the discussion, not to calculate an exact number.",
      "The equation estimates the number of civilisations in our galaxy that are sending out signals we could detect. The estimate comes from multiplying seven factors together. The first factor is the rate at which new stars form. The next two are the share of stars that have planets and the number of planets per star that could support life. Then come the share of those planets where life appears, the share where intelligence develops and the share of intelligent civilisations that send out detectable signals. The last factor is the length of time such civilisations keep sending signals.",
      "Astronomers now know the first few factors fairly well, and they have found that planets around other stars are common. But the later factors, such as the chance that life begins or how long civilisations last, remain guesses. Depending on the guesses, the answer can be less than one civilisation or many millions.",
      "The people at the meeting called themselves the Order of the Dolphin, after one member’s research on communication with dolphins."
    ],
    "question": "How can we estimate something as uncertain as the number of civilisations beyond Earth?",
    "reveals": "The Drake equation does not give a reliable number. The equation’s real value is to break a huge, vague question into smaller questions that science can study one by one. The equation shows what we know, what we do not know, and where research should look. The final factor, the lifetime of a civilisation, also turns the question back on us. How long will our own technological civilisation survive?",
    "readings": [
      [
        "A road map for research",
        "Supporters see the equation as a map of what we need to learn, from how planets form to how life begins."
      ],
      [
        "A tool for thinking",
        "The equation is a model of good estimation. Breaking a problem into parts makes each assumption visible and open to debate."
      ],
      [
        "Criticism",
        "Critics argue that multiplying many unknown numbers produces an answer so uncertain that no firm conclusion can be drawn from it."
      ]
    ],
    "breaks": [
      "Most factors cannot be measured with current knowledge. The result reflects the assumptions of whoever does the calculation.",
      "The equation assumes that civilisations send out signals we would recognise, such as radio waves.",
      "The factors may depend on each other, which a simple multiplication ignores."
    ],
    "uses": [
      "Estimation in policy: Officials often face questions with many unknowns, such as future demand for water or energy. Breaking the problem into parts, as Drake did, makes the assumptions clear.",
      "Honest uncertainty: Presenting a range of results, instead of one confident number, is an honest way to deal with uncertainty.",
      "Survival of civilisation: The factor for how long civilisations last invites reflection on threats such as nuclear war and climate change.",
      "Exam use: In GS-IV, use it for decision-making under uncertainty and transparency about assumptions. In the Essay paper, use it for topics on science, uncertainty and the future."
    ],
    "related": [
      "fermi",
      "laplace",
      "montyhall",
      "mad",
      "boltzmann",
      "sisyphus"
    ],
    "reading": [
      [
        "“Drake Equation”, SETI Institute",
        "An explanation of the equation and its factors.",
        "https://www.seti.org/drake-equation-index"
      ],
      [
        "“Drake equation”, Wikipedia",
        "",
        "https://en.wikipedia.org/wiki/Drake_equation"
      ]
    ]
  },
  "butterfly": {
    "source": "Edward Lorenz, “Deterministic Nonperiodic Flow”, Journal of the Atmospheric Sciences (1963). In 1972 he gave a talk titled “Predictability: Does the Flap of a Butterfly’s Wings in Brazil Set Off a Tornado in Texas?”",
    "period": "MIT, United States, 1961 to 1972",
    "tradition": "Weather science and chaos theory",
    "type": "A metaphor from science. A metaphor explains one thing by comparing it to another.",
    "setup": [
      "In the early 1960s, Edward Lorenz was a weather scientist at MIT in the United States. He used a computer to run a simple model of the weather. One day he wanted to see one of his results again. To save time, he started the run from the middle. He typed in a number from an earlier printout.",
      "The printout showed the number as 0.506. But the computer had stored a more exact number, 0.506127. Lorenz thought that such a tiny difference would not matter. He left the computer running and came back about an hour later. The new result had started out like the old one. But slowly it had moved away from it. After a while, it showed completely different weather.",
      "The model followed fixed rules. The same starting numbers always gave the same result. Yet a difference too small to measure had grown until it changed the whole forecast. Lorenz published this finding in 1963.",
      "At first, people used a seagull to describe this idea. They said that one flap of a seagull’s wings could change the weather forever. In 1972, Lorenz had to give a talk but had not chosen a title. Another weather scientist, Philip Merilees, suggested this title: “Does the flap of a butterfly’s wings in Brazil set off a tornado in Texas?” After that, the butterfly became the famous image."
    ],
    "question": "If the world follows fixed laws, why can we not predict what will happen?",
    "reveals": "Some systems are very sensitive to their starting conditions. In these systems, a tiny error at the start grows very quickly. So knowing the laws is not enough. To predict the future, you would need to know the present with perfect accuracy, and that is impossible. Because tiny errors always grow, weather forecasts become unreliable after about two weeks. The same limit applies to many other systems, even when nothing in them happens by chance.",
    "readings": [
      [
        "Scientific meaning",
        "Scientists call the butterfly effect sensitive dependence on initial conditions. It is a feature of chaotic systems. The idea is about the limits of prediction. It does not say that a small act can be used on purpose to cause a big event."
      ],
      [
        "Popular meaning",
        "Small actions can change history. The popular meaning comes partly from Ray Bradbury’s short story “A Sound of Thunder” (1952). In that story, a time traveller steps on a butterfly in the past, and this changes the future."
      ],
      [
        "Philosophical meaning",
        "A system can follow fixed laws and still be impossible to predict. The scientist Laplace imagined a being who knows the exact position of everything, and who can therefore predict the whole future. The butterfly effect shows why no real observer can do this. Even the smallest error in measurement would grow."
      ]
    ],
    "breaks": [
      "Not every system is chaotic. In many systems, small disturbances fade away instead of growing.",
      "A single butterfly does not cause a tornado. The point is that we cannot know in advance which small differences will matter.",
      "When the idea is used loosely, it can suggest that nothing can be predicted. That suggestion is wrong, because many useful forecasts are possible."
    ],
    "uses": [
      "Weather forecasting: Forecasters run many forecasts from slightly different starting points. Then they give the chance of rain instead of one certain answer.",
      "Crises: A small problem can spread quickly through closely connected systems, such as banks, supply chains or disease networks.",
      "Planning: Governments should make plans that can deal with surprises. They should also change their plans as events change.",
      "Exam use: In the Essay paper, use it for topics on small actions, uncertainty, planning and prediction."
    ],
    "related": [
      "laplace",
      "cobra",
      "schrodinger",
      "fermi",
      "montyhall",
      "apprentice"
    ],
    "reading": [
      [
        "Edward N. Lorenz, “Deterministic Nonperiodic Flow”, Journal of the Atmospheric Sciences 20 (1963)",
        "",
        "https://doi.org/10.1175/1520-0469(1963)020%3C0130:DNF%3E2.0.CO;2"
      ],
      [
        "“Chaos”, Stanford Encyclopedia of Philosophy",
        "",
        "https://plato.stanford.edu/entries/chaos/"
      ],
      [
        "“Butterfly effect”, Wikipedia",
        "Free overview of the history, including the seagull.",
        "https://en.wikipedia.org/wiki/Butterfly_effect"
      ]
    ]
  },
  "montyhall": {
    "source": "A probability puzzle based on the American television game show Let’s Make a Deal. The statistician Steve Selvin posed it in 1975, and the columnist Marilyn vos Savant made it famous in 1990.",
    "period": "United States, 1975 and 1990",
    "tradition": "Probability and mathematics",
    "type": "A puzzle",
    "setup": [
      "Imagine that you are a contestant on a television game show. There are three closed doors. Behind one door is a car. Behind each of the other two doors is a goat. You want the car.",
      "You choose a door, say door number 1. The host knows where the car is. He opens another door, say door number 3, and shows you a goat. He always opens a door that you did not choose, and he always shows a goat. Then he asks, “Do you want to keep door number 1, or switch to door number 2?”",
      "Most people think that switching makes no difference. Two doors are left, so the chance seems to be one in two for each. But that answer is wrong. If you switch, you win the car two times out of three.",
      "Here is the reason. When you first chose, your door had a one-in-three chance of hiding the car. So there was a two-in-three chance that the car was behind one of the other two doors. The host then used his knowledge to open whichever of those two doors had a goat. His action does not change the chance for your door. The whole two-in-three chance now rests on the one door that remains closed.",
      "Steve Selvin described the problem in a letter to a statistics journal in 1975. In 1990, Marilyn vos Savant answered it in her column in Parade magazine and advised contestants to switch. About 10,000 readers wrote to the magazine, nearly 1,000 of them with doctoral degrees, and most said that she was wrong. The famous mathematician Paul Erdős stayed unconvinced until he was shown a computer simulation."
    ],
    "question": "When new information appears, how should we change our estimate of the odds?",
    "reveals": "The Monty Hall problem shows that human intuition about probability is often wrong, even among experts. The key is that the host’s choice is not random. He knows where the car is, and his action gives you information. Good reasoning asks not only what we can see now, but also how that information reached us. Probability depends on the process that produced the evidence.",
    "readings": [
      [
        "Conditional probability",
        "The puzzle teaches how to update probabilities when new information arrives. Mathematicians describe such updating with Bayes’ theorem."
      ],
      [
        "Psychology of error",
        "People tend to treat the two remaining doors as equal, and they feel attached to their first choice. Pigeons that face the problem again and again quickly learn to switch, while humans are slower to learn."
      ],
      [
        "The importance of rules",
        "If the host opened a door at random and happened to show a goat, switching would not help. The answer depends on the rules the host follows."
      ]
    ],
    "breaks": [
      "The standard answer depends on assumptions that the question in Parade did not state clearly, such as the host always opening a door and always offering a switch.",
      "A real host might offer a switch only when the contestant has already picked the car. Then switching would be a mistake.",
      "The puzzle exposes one type of reasoning error. Intuition is not always unreliable."
    ],
    "uses": [
      "Medical tests: Understanding how new information changes probabilities helps doctors and patients to interpret test results correctly.",
      "Evidence in investigations: Investigators must ask how evidence was produced before deciding what it proves. Evidence selected by someone with knowledge carries a different weight from evidence found by chance.",
      "Humility of experts: Thousands of educated readers were confidently wrong. Decision-makers should test their intuitions against careful reasoning and data.",
      "Exam use: In GS-IV, use it for rational decision-making, cognitive bias and openness to correction. In the Essay paper, use it for topics on reason, intuition and uncertainty."
    ],
    "related": [
      "sleepingbeauty",
      "gettier",
      "drake",
      "laplace",
      "dunningkruger",
      "asch"
    ],
    "reading": [
      [
        "“Monty Hall problem”, Wikipedia",
        "Free explanation with tables, variations and history.",
        "https://en.wikipedia.org/wiki/Monty_Hall_problem"
      ]
    ]
  },
  "sleepingbeauty": {
    "source": "Arnold Zuboff described the problem in unpublished work in the mid-1980s. Adam Elga published a version of it in 2000.",
    "period": "From the mid-1980s. Published in 2000.",
    "tradition": "Modern Western philosophy and probability",
    "type": "A thought experiment. A thought experiment is an imagined situation used to test an idea.",
    "setup": [
      "On Sunday, some researchers put Sleeping Beauty to sleep. She knows every detail of their plan in advance.",
      "After she falls asleep, the researchers toss a fair coin. If the coin lands heads, they will wake her once, on Monday. If it lands tails, they will wake her twice, on Monday and on Tuesday. After each waking, they give her a drug that makes her forget that she was woken, and she goes back to sleep. So whenever she wakes, she cannot tell whether it is Monday or Tuesday, or whether she has been woken before.",
      "Each time she wakes, the researchers ask her one question. How strongly should she now believe that the coin landed heads?",
      "One group of philosophers, called halfers, says that the answer is one half. She knew before the experiment that the coin was fair. Waking up gives her no new information, because she knew that she would wake up whatever the result. The philosopher David Lewis defended this answer in a reply to Elga.",
      "Another group, called thirders, says that the answer is one third. Adam Elga argued for this answer. Suppose the experiment were repeated many times. About two out of every three wakings would follow a tails result, because tails produces two wakings and heads produces only one. So when she wakes, she should think that tails is twice as likely as heads.",
      "Philosophers still disagree about which answer is correct."
    ],
    "question": "How should you judge probability when you do not know where you are in time?",
    "reveals": "The Sleeping Beauty problem shows that probability becomes puzzling when people are unsure of their own place in time or in the world. Both answers rest on reasonable principles. The halfer keeps her belief because no new evidence has arrived. The thirder counts all the wakings that she might be living through. The disagreement shows that we lack a settled theory of how to reason about our own position in the world.",
    "readings": [
      [
        "Halfer view",
        "Beliefs should change only when new evidence arrives. Sleeping Beauty learns nothing new when she wakes, so her belief in heads should stay at one half."
      ],
      [
        "Thirder view",
        "Beliefs should match how often situations like hers occur. Two of the three possible wakings follow tails, so her belief in heads should be one third."
      ],
      [
        "Betting view",
        "Some argue that the answer depends on how she will be rewarded. If she places a bet at every waking, betting as a thirder wins more often. The question then becomes what probability really means."
      ]
    ],
    "breaks": [
      "The drugs and the memory loss are unrealistic, so some people doubt that intuitions about the case are reliable.",
      "The two sides may be answering slightly different questions. One question is about the coin, and the other is about the waking.",
      "The puzzle may have little importance for most practical decisions."
    ],
    "uses": [
      "Reasoning about our place in the universe: Similar reasoning appears in debates about Boltzmann brains and about whether our position in the universe is typical.",
      "Sampling bias: When some cases are counted more often than others, as in surveys that reach some people many times, simple counts can mislead.",
      "Clear questions: Many disagreements come from unclear questions. Stating exactly what is being asked is the first step in settling a dispute.",
      "Exam use: In GS-IV, use it rarely, for reasoning under uncertainty and clarity of definitions. In the Essay paper, use it for topics on knowledge, probability and truth."
    ],
    "related": [
      "montyhall",
      "boltzmann",
      "dream",
      "demon",
      "theseus",
      "gettier"
    ],
    "reading": [
      [
        "“Self-Locating Beliefs”, Stanford Encyclopedia of Philosophy",
        "",
        "https://plato.stanford.edu/entries/self-locating-beliefs/"
      ],
      [
        "“Sleeping Beauty problem”, Wikipedia",
        "",
        "https://en.wikipedia.org/wiki/Sleeping_Beauty_problem"
      ]
    ]
  },
  "gorilla": {
    "source": "Daniel Simons and Christopher Chabris, “Gorillas in Our Midst”, Perception (1999)",
    "period": "United States, 1999",
    "tradition": "Cognitive psychology",
    "type": "An experiment",
    "setup": [
      "In 1999, the psychologists Daniel Simons and Christopher Chabris ran a simple experiment. They asked people to watch a short video of two teams passing basketballs. One team wore white shirts, and the other team wore black shirts.",
      "Each viewer had a task. They had to count how many passes the players in white made, and ignore the players in black. Counting correctly needed close attention.",
      "Partway through the video, a person in a full gorilla suit walked into the scene and through the middle of the players. After the video, the researchers asked the viewers whether they had noticed anything unusual. About half of the viewers had not seen the gorilla at all. When they watched the video again without the counting task, they could see the gorilla easily.",
      "In another version, a woman carrying an umbrella walked through the scene instead, with similar results. The study built on earlier experiments by the psychologist Ulric Neisser in the 1970s. Psychologists call this failure inattentional blindness. When our attention is focused on one task, we can miss something unexpected, even when it is in plain sight.",
      "Experts are not protected. In 2013, a study found that most of the radiologists tested, who read medical scans for a living, failed to notice a small picture of a gorilla that researchers had placed inside scans of lungs."
    ],
    "question": "Can we miss something obvious just because we are looking for something else?",
    "reveals": "The invisible gorilla shows that we see much less of the world than we think. Attention works like a spotlight. What falls inside the spotlight is noticed, and much of what falls outside it is not. The bigger surprise is our confidence. Most people are sure that they would notice a gorilla. The study shows that focus is a strength, but focus has a hidden cost.",
    "readings": [
      [
        "Limits of attention",
        "The brain cannot process everything at once. Attention selects what matters for the current task and filters out the rest, including unexpected events."
      ],
      [
        "Illusion of attention",
        "In their book The Invisible Gorilla (2010), Chabris and Simons argue that people believe they notice far more than they really do. Overconfidence of this kind affects drivers, witnesses and experts."
      ],
      [
        "Expertise",
        "Training helps experts to find what they are looking for. But training does not protect them from missing things that they do not expect."
      ]
    ],
    "breaks": [
      "The viewers were busy with a counting task. People who simply watch the video usually see the gorilla.",
      "Once people know about the study, they look out for gorillas, so the effect is hard to repeat with the same people.",
      "Missing an unexpected figure in a video is not the same as missing important events in real life, where there are more clues."
    ],
    "uses": [
      "Road safety: Drivers focused on their phones or on traffic signals can fail to see cyclists and pedestrians. A British public safety advertisement used a similar video to warn drivers about cyclists.",
      "Eyewitness evidence: Investigators and courts should remember that honest witnesses may not have seen events that happened right in front of them.",
      "Audit and inspection: Officials focused on targets and checklists may miss unexpected warning signs. Fresh eyes and open-ended reviews help.",
      "Exam use: In GS-IV, use it for the limits of perception, humility and careful judgment. In the Essay paper, use it for topics on attention, technology and distraction."
    ],
    "related": [
      "blindmen",
      "asch",
      "dunningkruger",
      "cave",
      "maya",
      "goodhart"
    ],
    "reading": [
      [
        "Daniel J. Simons and Christopher F. Chabris, “Gorillas in Our Midst”, Perception (1999)",
        "",
        "https://doi.org/10.1068/p281059"
      ],
      [
        "Trafton Drew, Melissa Võ and Jeremy Wolfe, “The Invisible Gorilla Strikes Again”, Psychological Science (2013)",
        "The study of radiologists.",
        "https://doi.org/10.1177/0956797613479386"
      ],
      [
        "“Inattentional blindness”, Wikipedia",
        "",
        "https://en.wikipedia.org/wiki/Inattentional_blindness"
      ]
    ]
  },
  "asch": {
    "source": "Solomon Asch, experiments on conformity at Swarthmore College (from 1951)",
    "period": "United States, 1951 to 1956",
    "tradition": "Social psychology",
    "type": "An experiment",
    "setup": [
      "In 1951, the psychologist Solomon Asch began a series of experiments at Swarthmore College in the United States. Male students were invited to take part in what they were told was a test of visual judgment.",
      "Each student sat at a table with a group of about seven other young men. The student believed that the others were also volunteers. But all of them were actors working with Asch.",
      "The experimenter showed a card with one line on it. Then he showed a second card with three lines of different lengths, marked A, B and C. One of the three lines was the same length as the line on the first card. The other two were clearly longer or shorter. Each person in turn said aloud which line matched. The real participant answered near the end.",
      "On the first two rounds, everyone gave the correct answer. Then, on 12 rounds, the actors all gave the same wrong answer on purpose. The real participant had to choose between his own eyes and the opinion of the group.",
      "Across those rounds, about one-third of the participants’ answers went along with the group’s wrong answer. About three out of four participants gave at least one wrong answer. When people did the same task alone, they almost never made mistakes.",
      "Asch also found that a single ally made a big difference. When one other person in the group gave the correct answer, the real participants conformed much less."
    ],
    "question": "Will people deny what they can plainly see in order to agree with a group?",
    "reveals": "The Asch experiments show the strength of social pressure. Many people gave answers that were plainly wrong, only to agree with the group. In interviews afterwards, some participants said that they had begun to doubt their own judgment. Others said that they knew the group was wrong but did not want to stand out. The experiments also show the power of independence. Most answers were still correct, about a quarter of the participants never gave in, and one ally made resistance much easier.",
    "readings": [
      [
        "Conformity",
        "People often follow a group to be accepted or to avoid embarrassment. Psychologists call this kind of pressure normative influence."
      ],
      [
        "Independence",
        "Asch himself stressed that most answers were correct. He was troubled that capable young people gave in so often, but he also noted the strength of those who resisted."
      ],
      [
        "Culture and time",
        "Later studies found that conformity differs between cultures and has changed over the decades. People in societies that value the group over the individual tended to conform more."
      ]
    ],
    "breaks": [
      "The task was trivial, and nothing important depended on the answers. Real decisions involve more information and more reasons to disagree.",
      "The participants in the main studies were young American men in the 1950s, a narrow group.",
      "Some participants may have gone along with the group to be polite, without changing their private beliefs."
    ],
    "uses": [
      "Committees and boards: Members may stay silent when everyone else seems to agree. Leaders should invite disagreement and ask junior members to speak first.",
      "Whistleblowing: One honest voice can give others the courage to speak up, just as one ally did in Asch’s experiments.",
      "Online crowds: The appearance of a majority online can push people to accept false claims or to join attacks on others.",
      "Exam use: In GS-IV, use it for conformity, moral courage, groupthink and integrity. In the Essay paper, use it for topics on individuality, peer pressure and democracy."
    ],
    "related": [
      "milgram",
      "stanfordprison",
      "bystander",
      "gadfly",
      "beauty",
      "gorilla"
    ],
    "reading": [
      [
        "“Asch conformity experiments”, Wikipedia",
        "Free overview of the method, the results and later variations.",
        "https://en.wikipedia.org/wiki/Asch_conformity_experiments"
      ]
    ]
  },
  "milgram": {
    "source": "Stanley Milgram, “Behavioral Study of Obedience”, Journal of Abnormal and Social Psychology (1963), and his book Obedience to Authority (1974)",
    "period": "Yale University, United States, 1961 to 1962",
    "tradition": "Social psychology",
    "type": "An experiment",
    "setup": [
      "Stanley Milgram was a psychologist at Yale University. He put an advertisement in a local newspaper. It asked for men to take part in a study on memory and learning. The men would be paid.",
      "When a man arrived at the laboratory, he met another man who seemed to be a second volunteer. But this second man was actually an actor who worked with Milgram. The two men picked slips of paper to decide their roles. The draw was fixed. The real volunteer always became the teacher, and the actor always became the learner.",
      "The learner was taken to the next room. He was strapped into a chair, and an electrode was attached to his wrist. The teacher sat in front of a machine with 30 switches. The switches went from 15 volts up to 450 volts. They were labelled from “Slight Shock” to “Danger: Severe Shock”. The last two switches were marked “XXX”.",
      "The teacher had to ask the learner questions. Each time the learner gave a wrong answer, the teacher had to give him an electric shock. Each shock was stronger than the one before. The machine did not really give any shocks. The learner only pretended to be in pain. At 300 volts, he banged on the wall. At 315 volts, he banged again. After that, he went silent.",
      "Many teachers wanted to stop. When they hesitated, the experimenter told them to continue. He used fixed sentences, such as “Please continue” and “You have no other choice, you must go on.”",
      "Before the study, people expected that almost no one would go to the end. But all 40 men in the first study gave shocks up to at least 300 volts. And 26 of them, or 65 percent, went all the way to 450 volts."
    ],
    "question": "Will ordinary people hurt an innocent person because someone in authority tells them to?",
    "reveals": "People do not need to be cruel to do cruel things. Ordinary, decent people can do something they believe is wrong when they feel that the responsibility belongs to someone else. Milgram’s later versions of the experiment showed that the situation matters a lot. Fewer people obeyed when the experimenter gave orders by telephone. Fewer people obeyed when the teacher had to touch the learner. And fewer people obeyed when other people in the room refused to continue.",
    "readings": [
      [
        "Milgram’s explanation: the agentic state",
        "Milgram said that people enter an agentic state. In this state, they see themselves only as tools that carry out another person’s orders. So they stop feeling responsible for what happens."
      ],
      [
        "Hannah Arendt: the banality of evil",
        "Around the same time, Hannah Arendt wrote about the trial of the Nazi officer Adolf Eichmann. She argued that great evil is often done by ordinary officials who do not think about what they are doing, and not only by monsters. Milgram himself pointed out this link."
      ],
      [
        "Engaged followership",
        "The psychologists Alex Haslam and Stephen Reicher argue that people did not obey blindly. They continued because they believed in the scientist and in the value of the research. Studies of the recordings found that the only direct order, “You have no other choice”, usually made people refuse."
      ]
    ],
    "breaks": [
      "The participants were lied to and were put under great stress. In 1964, the psychologist Diana Baumrind criticised the study for this. Her criticism helped to create stricter rules for research on people.",
      "In 2012, the writer Gina Perry studied Milgram’s records. She found that the experimenter often did not follow the script. She also found that many participants did not believe that the shocks were real.",
      "One hour in a laboratory is not the same as working in a government office or fighting in a war. The results show a tendency. They do not prove that anyone will do anything when ordered to.",
      "In 2009, the psychologist Jerry Burger repeated part of the study. For ethical reasons, he stopped at 150 volts. He still found that most people were willing to continue."
    ],
    "uses": [
      "Unlawful orders: A civil servant must refuse an illegal or unethical order. Saying “I was only following orders” is not an acceptable defence.",
      "Organisations: In police forces, hospitals and companies, people often obey senior staff even when they have doubts.",
      "Better systems: Organisations can give each person clear responsibility, a right to disagree, and protection for whistleblowers.",
      "Exam use: In GS-IV, use it for obedience versus conscience, accountability, courage of conviction and case studies about unlawful orders. In the Essay paper, use it for topics on authority and responsibility."
    ],
    "related": [
      "asch",
      "stanfordprison",
      "bystander",
      "arjuna",
      "inquisitor",
      "beforelaw"
    ],
    "reading": [
      [
        "Stanley Milgram, “Behavioral Study of Obedience” (1963)",
        "",
        "https://doi.org/10.1037/h0040525"
      ],
      [
        "Jerry M. Burger, “Replicating Milgram: Would people still obey today?”, American Psychologist 64 (2009)",
        "",
        "https://doi.org/10.1037/a0010932"
      ],
      [
        "“Milgram experiment”, Wikipedia",
        "Free overview of the different versions of the study and the criticism of it.",
        "https://en.wikipedia.org/wiki/Milgram_experiment"
      ]
    ]
  },
  "stanfordprison": {
    "source": "Philip Zimbardo, Stanford University (August 1971)",
    "period": "United States, 1971",
    "tradition": "Social psychology",
    "type": "An experiment. The experiment’s methods are strongly disputed.",
    "setup": [
      "In August 1971, the psychologist Philip Zimbardo advertised in local newspapers for young men to take part in a study of prison life, for 15 dollars a day. Seventy-five men applied. After psychological tests, 24 were chosen and divided at random into guards and prisoners.",
      "Rooms in the psychology department at Stanford University were turned into a mock prison with small cells. The prisoners were arrested at their homes by real police officers from Palo Alto, California. In the prison, they were called by numbers instead of names. The guards wore uniforms and worked in shifts. Zimbardo acted as the prison superintendent, and a student assistant acted as the warden.",
      "The study was planned to last up to two weeks. Within days, some guards began to abuse the prisoners psychologically. One prisoner, number 8612, appeared to break down after 36 hours and was released. On the sixth day, a psychologist named Christina Maslach visited. She was disturbed by what she saw and challenged Zimbardo, who then ended the study.",
      "Zimbardo concluded that ordinary people can quickly become cruel when a situation gives them power and a role. The study became one of the most famous in psychology.",
      "Later investigations raised serious doubts. Recordings discussed widely in 2017 showed the warden urging a guard to be tougher. In 2018, the French researcher Thibault Le Texier published a book arguing that Zimbardo had asked the guards to behave in certain ways to confirm conclusions that he had largely reached in advance. Interviews with original participants later supported many of Le Texier’s claims."
    ],
    "question": "Do roles and situations turn ordinary people cruel, or do people still choose how to act?",
    "reveals": "The experiment was meant to show that bad situations, not bad people, produce cruelty. The idea still matters. Uniforms, power, anonymity and weak oversight can encourage abuse. But the later criticism reveals another lesson. The guards were guided, and they knew what the researchers expected. So the study shows how leaders can encourage cruelty, and how easily a dramatic story can be accepted as science.",
    "readings": [
      [
        "Zimbardo’s situational reading",
        "Powerful situations can overwhelm individual character. Zimbardo later used the idea to explain the abuse of prisoners by American soldiers at Abu Ghraib prison in Iraq."
      ],
      [
        "Critical reading",
        "Critics argue that the study was poorly controlled and that the guards followed instructions and expectations. On that view, the study shows the influence of leadership, not a natural slide into cruelty."
      ],
      [
        "Social identity reading",
        "In 2002, the psychologists Alex Haslam and Stephen Reicher ran a similar study for BBC television. The guards did not automatically become cruel. Behaviour depended on whether people identified with their group and its leaders."
      ]
    ],
    "breaks": [
      "Only 24 young men took part, and there was no proper comparison group. The results cannot be applied widely with confidence.",
      "The researchers were also the prison authorities, so they shaped what happened.",
      "Not all guards were cruel. Some were fair, which shows that individuals still made choices."
    ],
    "uses": [
      "Custodial violence: Abuse and deaths in police custody show the danger of unchecked power over detained people. Oversight, cameras in police stations and accountability reduce the risk.",
      "Responsibility of leaders: The later criticism shows that leaders who signal that toughness is expected share responsibility for abuse by their subordinates.",
      "Research ethics: The study shows why research on people needs ethical review, informed consent and a real right to withdraw.",
      "Exam use: In GS-IV, use it for abuse of power, role morality, accountability and research ethics, and mention that the study is disputed. In the Essay paper, use it for topics on power, institutions and human nature."
    ],
    "related": [
      "milgram",
      "asch",
      "panopticon",
      "gyges",
      "brokenwindows",
      "bystander"
    ],
    "reading": [
      [
        "“Stanford prison experiment”, Wikipedia",
        "Includes the history of the study and the later criticism.",
        "https://en.wikipedia.org/wiki/Stanford_prison_experiment"
      ],
      [
        "Stanford Prison Experiment website",
        "Zimbardo’s official website about the study.",
        "https://www.prisonexp.org/"
      ]
    ]
  },
  "marshmallow": {
    "source": "Walter Mischel and colleagues, Stanford University (from 1970)",
    "period": "United States, from 1970",
    "tradition": "Developmental psychology",
    "type": "An experiment",
    "setup": [
      "In 1970, the psychologist Walter Mischel and his colleague Ebbe Ebbesen began a series of studies with children at the Bing Nursery School of Stanford University. They wanted to understand how young children manage to wait for a reward.",
      "In the best-known version, a child sat alone in a room with a treat on the table, such as a marshmallow. The researcher explained a choice. The child could eat the treat at any time. But if the child waited until the researcher came back, about 15 minutes later, the child would get a second treat. Then the researcher left the room.",
      "Some children ate the treat almost at once. Others waited. The children who waited often found ways to distract themselves. Some covered their eyes or rested their heads on their arms. One little girl fell asleep.",
      "Years later, Mischel’s team followed up some of the children. In 1988 and 1990, they reported that the children who had waited longer tended to be described as more competent teenagers and had higher scores on the SAT, an American college entrance test. The study became famous as evidence that early self-control predicts success in life.",
      "In 2018, the researchers Tyler Watts, Greg Duncan and Haonan Quan tested the idea with a group of children more than ten times larger and much more varied. The link between waiting and later achievement was only about half as strong as in the original study. Family background, such as income, explained much of the rest."
    ],
    "question": "Does the ability to wait for a reward in childhood shape success later in life?",
    "reveals": "The marshmallow test shows that self-control can be learned and supported. The children who waited used strategies, not pure willpower. The later studies add a crucial lesson. Children’s choices depend on their circumstances. A child who has learned that adults keep promises has good reason to wait. A child who has learned that food and promises disappear has good reason to eat the treat now.",
    "readings": [
      [
        "Self-control reading",
        "The ability to delay a reward helps people to study, save and work toward long-term goals. Strategies such as distraction can be taught."
      ],
      [
        "Trust reading",
        "In a 2012 study at the University of Rochester, children who had just seen an adult keep a promise waited up to four times longer than children who had seen an adult break a promise. Waiting depends on trust."
      ],
      [
        "Poverty reading",
        "For children in poverty, taking a reward while it is available may be a sensible choice. Explaining poor outcomes by weak willpower can hide the effects of poverty."
      ]
    ],
    "breaks": [
      "The original children came from a university nursery school, mostly from educated families, so they did not represent all children.",
      "Studies in 2018 and 2024 found that the test does not reliably predict how people function as adults.",
      "A single short test in early childhood cannot measure something as complex as character."
    ],
    "uses": [
      "Early childhood care: Anganwadi centres and pre-school programmes that provide stable care and nutrition help to build the security and trust in which self-control grows.",
      "Saving for the future: Automatic savings schemes and other commitment devices help people to wait for larger future rewards.",
      "Blaming the poor: Policymakers should not treat poverty as a result of weak willpower. Unstable conditions can make short-term choices sensible.",
      "Exam use: In GS-IV, use it for self-control, character, trust and the influence of environment on behaviour. In the Essay paper, use it for topics on childhood, poverty and discipline."
    ],
    "related": [
      "hedonic",
      "skinner",
      "epicurus",
      "nachiketa",
      "principalagent",
      "dunningkruger"
    ],
    "reading": [
      [
        "Tyler W. Watts, Greg J. Duncan and Haonan Quan, “Revisiting the Marshmallow Test”, Psychological Science (2018)",
        "",
        "https://doi.org/10.1177/0956797618761661"
      ],
      [
        "“Stanford marshmallow experiment”, Wikipedia",
        "",
        "https://en.wikipedia.org/wiki/Stanford_marshmallow_experiment"
      ]
    ]
  },
  "bystander": {
    "source": "John Darley and Bibb Latané, experiments on bystander intervention (1968)",
    "period": "United States, 1964 to 1970",
    "tradition": "Social psychology",
    "type": "An experiment and a pattern of behaviour",
    "setup": [
      "In March 1964, a young woman named Kitty Genovese was murdered outside her apartment building in New York City. Two weeks later, The New York Times published a story claiming that 37 witnesses had seen or heard the attack and that none of them had called the police or helped her. The story shocked the country.",
      "Later investigations found that the story was badly exaggerated. Some witnesses had tried to call the police. In 2016, The New York Times itself called its original reporting flawed.",
      "Even so, the story led to important research. The psychologists John Darley and Bibb Latané wanted to know why people sometimes fail to help when others are present. In one experiment in 1968, students sat in separate rooms and talked over an intercom. Suddenly, one voice seemed to have a seizure and called for help. Students who believed that they were the only listener were much more likely to go for help, and they went faster, than students who believed that several others could hear.",
      "In another experiment, students filled in a questionnaire while smoke began to come into the room through a vent. Students who were alone noticed the smoke within seconds. Students sitting in groups took longer to notice it and were less likely to report it.",
      "Darley and Latané explained the results by diffusion of responsibility. When many people are present, each person feels less responsible and assumes that someone else will act. People also watch others to judge whether something is really an emergency."
    ],
    "question": "Why are people sometimes less likely to help when others are present?",
    "reveals": "The bystander effect shows that helping depends on the situation, not only on character. In a group, responsibility is shared, so each person feels less of it. Uncertainty adds to the problem, because people copy the calm behaviour of others. Knowing about the effect can reduce it. A person who understands diffusion of responsibility can decide to be the one who acts.",
    "readings": [
      [
        "Diffusion of responsibility",
        "Each bystander assumes that someone else will help, or has already called for help."
      ],
      [
        "Social influence",
        "People decide whether an event is an emergency by watching others. When everyone waits for someone else to react, a whole group can misread a real emergency."
      ],
      [
        "Newer evidence",
        "A study published in 2019 examined more than 200 real conflicts recorded by public cameras in the United Kingdom, the Netherlands and South Africa. In over 90 percent of the cases, at least one bystander stepped in to help. More bystanders made help more likely, not less."
      ]
    ],
    "breaks": [
      "The famous news story that started the research was exaggerated, so it cannot serve as proof of the effect.",
      "A review of many studies in 2011 found that the effect is weaker or absent in clearly dangerous emergencies.",
      "A large group contains more possible helpers. Even if each person is less likely to act, someone in the group often does."
    ],
    "uses": [
      "Road accidents: Crowds often gather around accident victims without helping. The legal protection for Good Samaritans under the Motor Vehicles (Amendment) Act, 2019 aims to remove the fear of legal trouble.",
      "Wrongdoing at work: When many employees know about misconduct, each may assume that someone else will report it. Clear duties to report and protection for whistleblowers help.",
      "First aid: Training people in first aid, and teaching them to ask one specific person for help, can overcome diffusion of responsibility.",
      "Exam use: In GS-IV, use it for moral courage, compassion, civic duty and case studies about helping. In the Essay paper, use it for topics on humanity, city life and social responsibility."
    ],
    "related": [
      "samaritan",
      "asch",
      "milgram",
      "collectiveaction",
      "freerider",
      "brokenwindows"
    ],
    "reading": [
      [
        "John M. Darley and Bibb Latané, “Bystander Intervention in Emergencies: Diffusion of Responsibility”, Journal of Personality and Social Psychology (1968)",
        "",
        "https://doi.org/10.1037/h0025589"
      ],
      [
        "“Murder of Kitty Genovese”, Wikipedia",
        "Explains how the original news report was exaggerated.",
        "https://en.wikipedia.org/wiki/Murder_of_Kitty_Genovese"
      ],
      [
        "“Bystander effect”, Wikipedia",
        "",
        "https://en.wikipedia.org/wiki/Bystander_effect"
      ]
    ]
  },
  "dunningkruger": {
    "source": "Justin Kruger and David Dunning, “Unskilled and Unaware of It”, Journal of Personality and Social Psychology (1999)",
    "period": "United States, 1999",
    "tradition": "Social psychology",
    "type": "A psychological finding",
    "setup": [
      "In 1995, two men robbed banks near Pittsburgh, in the United States. They had rubbed lemon juice on their faces, believing that the juice would make them invisible to security cameras. The cameras recorded them, and both men were caught. The case is often told to introduce the Dunning–Kruger effect.",
      "In 1999, the psychologists Justin Kruger and David Dunning published a study about everyday versions of such mistakes. They tested university students on logical reasoning, grammar and humour. After each test, the students estimated how well they had done compared with other students.",
      "The students with the lowest scores greatly overestimated their performance. On average, their scores put them around the 12th percentile, which means that they did better than only about 12 out of 100 students. Yet they believed that they were around the 62nd percentile, above average.",
      "Kruger and Dunning argued that the skills needed to do a task well are often the same skills needed to judge whether the task was done well. So people who lack a skill may also lack the ability to see their own mistakes.",
      "Later researchers have questioned how much of the pattern is real. Part of the pattern may come from statistics. Most people tend to rate themselves as above average, and very low scores tend to look less extreme when measured again. The popular internet graph of confidence, with a high peak for beginners, does not come from the original paper."
    ],
    "question": "Can people be too unskilled to recognise their own lack of skill?",
    "reveals": "The Dunning–Kruger effect suggests that ignorance can hide itself. Knowing what you do not know requires some knowledge. People with little skill in an area may therefore feel confident while making serious mistakes. The debate about the effect adds a second lesson. Everyone, including experts, should be careful before accepting a neat explanation just because it feels right.",
    "readings": [
      [
        "Metacognitive reading",
        "Metacognition means thinking about one’s own thinking. Poor performers lack the knowledge needed to judge their own work, so they overestimate it."
      ],
      [
        "Statistical reading",
        "Critics argue that much of the effect can appear even in random data. The general tendency to feel better than average, together with a statistical pattern called regression toward the mean, may explain most of the findings."
      ],
      [
        "Popular misuse",
        "The effect is often used to call other people stupid. The original finding is about specific skills, and it applies to everyone in areas where they lack expertise."
      ]
    ],
    "breaks": [
      "The original studies used American university students and simple tests, so the results may not apply everywhere.",
      "Statistical problems may explain a large part of the pattern.",
      "The lowest scorers still rated themselves lower than the highest scorers did. They were not completely blind to their weakness."
    ],
    "uses": [
      "Expert advice in policy: Decision-makers should consult experts and evidence, especially in fields where they have no training.",
      "Training and feedback: Regular, honest feedback helps officials and students to see their weaknesses. Training that improves a skill also improves people’s ability to judge that skill.",
      "Confident misinformation: People with little knowledge of a subject sometimes spread confident claims about it online. Media literacy helps citizens to check such claims.",
      "Exam use: In GS-IV, use it for humility, self-awareness, emotional intelligence and openness to feedback. In the Essay paper, use it for topics on knowledge, expertise and confidence."
    ],
    "related": [
      "gorilla",
      "gadfly",
      "blindmen",
      "meno",
      "asch",
      "montyhall"
    ],
    "reading": [
      [
        "Justin Kruger and David Dunning, “Unskilled and Unaware of It”, Journal of Personality and Social Psychology (1999)",
        "",
        "https://doi.org/10.1037/0022-3514.77.6.1121"
      ],
      [
        "“Dunning–Kruger effect”, Wikipedia",
        "Includes the statistical criticism.",
        "https://en.wikipedia.org/wiki/Dunning%E2%80%93Kruger_effect"
      ]
    ]
  },
  "hedonic": {
    "source": "Philip Brickman and Donald Campbell, “Hedonic Relativism and Planning the Good Society” (1971). Philip Brickman, Dan Coates and Ronnie Janoff-Bulman, a study of lottery winners and accident victims (1978).",
    "period": "United States, 1971 and 1978",
    "tradition": "Psychology of well-being",
    "type": "A model. A model is a simple picture of how something works.",
    "setup": [
      "Imagine that you suddenly win a huge lottery prize. Most people expect such luck to make them much happier for the rest of their lives. Now imagine an accident that leaves you unable to walk. Most people expect such a loss to make them unhappy for ever.",
      "In 1971, the psychologists Philip Brickman and Donald Campbell suggested that people adapt to both good and bad events. After a change, happiness rises or falls, but over time it tends to return toward a usual level. They called the pattern the hedonic treadmill. On a treadmill, a person keeps walking but stays in the same place. In the same way, people keep gaining new things but do not become lastingly happier.",
      "In 1978, Brickman and two colleagues, Dan Coates and Ronnie Janoff-Bulman, tested the idea. They interviewed 22 people who had won large lottery prizes and 29 people who had become paralysed after accidents, and compared them with ordinary people. The lottery winners were not much happier than the comparison group. The accident victims were less happy, but they still rated themselves as more happy than unhappy.",
      "Later research changed the picture. In 2006, the psychologists Ed Diener, Richard Lucas and Christie Napa Scollon reviewed the evidence. They concluded that people do not all return to one neutral point. Each person has a different usual level, which is partly inherited. Some people’s usual level also changes after major life events, such as divorce or the death of a husband or wife."
    ],
    "question": "Why don’t gains in wealth or status make people lastingly happier?",
    "reveals": "The hedonic treadmill shows that people get used to their circumstances. New possessions, higher income and even great luck soon feel normal, and people start wanting more. The same ability helps people to recover from misfortune. The idea warns against chasing happiness through endless buying and earning. The idea also suggests that lasting well-being depends more on relationships, meaning and purpose than on possessions.",
    "readings": [
      [
        "Ancient wisdom",
        "Teachers long ago made a similar point. Epicurus and the Buddha both taught that endless desire cannot bring lasting contentment."
      ],
      [
        "Economic reading",
        "In 1974, the economist Richard Easterlin found that richer people are happier than poorer people at any one time, but that a country’s average happiness does not keep rising as the country grows richer. The finding is known as the Easterlin paradox."
      ],
      [
        "Revised view",
        "People do not all return to the same point. Usual levels of happiness differ between people and can change, so personal choices and public policies can still improve well-being."
      ]
    ],
    "breaks": [
      "The 1978 study was small, so its results are not strong proof.",
      "Some events, such as long unemployment or the loss of a spouse, can lower happiness for many years.",
      "Income matters a great deal for people in poverty. Adaptation does not mean that poverty is harmless."
    ],
    "uses": [
      "Measuring progress: Growth in income does not automatically raise well-being. Bhutan’s idea of Gross National Happiness and international happiness surveys look beyond income.",
      "Consumerism and debt: Understanding adaptation can help people to resist buying more and more in the hope of lasting happiness.",
      "Recovery after disaster: People who suffer great losses often recover more than they expect. Rehabilitation, community support and a sense of purpose speed recovery.",
      "Exam use: In GS-IV, use it for happiness, contentment, values and the limits of material success. In the Essay paper, use it for topics on happiness, consumerism and development."
    ],
    "related": [
      "ecclesiastes",
      "epicurus",
      "experience",
      "threepoisons",
      "sisyphus",
      "marshmallow"
    ],
    "reading": [
      [
        "Philip Brickman, Dan Coates and Ronnie Janoff-Bulman, “Lottery Winners and Accident Victims: Is Happiness Relative?”, Journal of Personality and Social Psychology (1978)",
        "",
        "https://doi.org/10.1037/0022-3514.36.8.917"
      ],
      [
        "“Hedonic treadmill”, Wikipedia",
        "",
        "https://en.wikipedia.org/wiki/Hedonic_treadmill"
      ]
    ]
  },
  "skinner": {
    "source": "B. F. Skinner, experiments with the operant conditioning chamber (from the 1930s) and “‘Superstition’ in the Pigeon” (1948)",
    "period": "United States, 1930s to 1970s",
    "tradition": "Behaviourist psychology",
    "type": "An experimental setup. An experimental setup is the equipment and method used to study something.",
    "setup": [
      "In the 1890s, the American psychologist Edward Thorndike put cats inside puzzle boxes. A cat could get out by pulling a cord or pushing a pole. At first, the cats took a long time to escape. Over many trials, useless movements became rarer and the useful movement came more quickly. Thorndike stated a rule called the law of effect. Actions followed by satisfying results tend to be repeated, and actions followed by unpleasant results tend to fade.",
      "As a graduate student at Harvard University, the psychologist B. F. Skinner developed the idea further. He built a box in which an animal could press a lever or peck a key to receive a small piece of food. The box recorded exactly how often the animal responded. Skinner first used rats and later pigeons. Other psychologists called the device the Skinner box, although Skinner disliked the name.",
      "With the box, Skinner studied what he called operant conditioning. Behaviour that is followed by a reward, which he called reinforcement, becomes more frequent. Behaviour that is no longer rewarded gradually stops. Skinner found that the pattern and timing of rewards matter a great deal.",
      "In 1948, Skinner published a famous experiment. He gave hungry pigeons food at regular intervals, whatever the birds were doing. Soon, several pigeons developed strange habits. One bird kept turning around in its cage. Another swung its head from side to side like a pendulum. Each bird seemed to repeat whatever it had been doing when food last arrived, as if its action had brought the food. Skinner called the result superstition in the pigeon."
    ],
    "question": "How far is behaviour shaped by rewards and consequences?",
    "reveals": "The Skinner box shows that behaviour can be shaped, step by step, by its consequences. Rewards strengthen actions, and the pattern of rewards matters as much as their size. The pigeon experiment adds a subtle lesson. Animals link a reward to whatever they happened to be doing, even when there is no real connection. Human superstitions, lucky rituals and some false beliefs about what works may grow in the same way.",
    "readings": [
      [
        "Behaviourist reading",
        "Skinner argued that psychology should study observable behaviour and its causes in the environment, not hidden mental states. Change the environment and its rewards, and behaviour will change."
      ],
      [
        "Debate about freedom",
        "In his novel Walden Two (1948), Skinner imagined a community designed on these principles. In Beyond Freedom and Dignity (1971), he argued that belief in free will stands in the way of designing a better society. Critics replied that his vision threatened human autonomy and dignity."
      ],
      [
        "Cognitive criticism",
        "Later psychologists argued that behaviourism ignored thinking, language and meaning. The linguist Noam Chomsky strongly criticised Skinner’s account of how people learn language."
      ]
    ],
    "breaks": [
      "Human beings reflect on rewards and values. People can refuse rewards and act from principle.",
      "The psychologists John Staddon and Virginia Simmelhag later offered a different explanation of the pigeons’ behaviour.",
      "Experiments with animals in boxes cannot capture the full complexity of human society."
    ],
    "uses": [
      "Behaviour change in public policy: Cash incentives for giving birth in hospitals or for regular school attendance use rewards to change behaviour.",
      "Gambling and apps: Slot machines and social media feeds give rewards unpredictably, which makes the behaviour hard to stop. Designs of this kind raise ethical questions.",
      "Recognition in organisations: Recognising good work quickly and consistently strengthens it more than occasional punishment of mistakes.",
      "Exam use: In GS-IV, use it for attitude formation, behaviour change, incentives and free will. In the Essay paper, use it for topics on technology addiction, education and freedom."
    ],
    "related": [
      "cobra",
      "marshmallow",
      "hedonic",
      "karma",
      "laplace",
      "panopticon"
    ],
    "reading": [
      [
        "B. F. Skinner, “‘Superstition’ in the Pigeon”, Journal of Experimental Psychology (1948)",
        "",
        "https://doi.org/10.1037/h0055873"
      ],
      [
        "“Operant conditioning chamber”, Wikipedia",
        "",
        "https://en.wikipedia.org/wiki/Operant_conditioning_chamber"
      ],
      [
        "“Behaviorism”, Stanford Encyclopedia of Philosophy",
        "",
        "https://plato.stanford.edu/entries/behaviorism/"
      ]
    ]
  },
  "chicken": {
    "source": "Game theory. The name comes from a dangerous driving game of the 1950s. Bertrand Russell compared the game to nuclear brinkmanship in 1959.",
    "period": "From the 1950s",
    "tradition": "Game theory and strategic studies",
    "type": "A strategic model. A strategic model studies how people choose when the result depends on what others do.",
    "setup": [
      "In the 1950s, some young people in the United States played a dangerous game with cars. Two drivers drove straight toward each other at high speed. The first driver to swerve out of the way was called a chicken, which means a coward. If neither driver swerved, the cars crashed, and both drivers might die. In the film Rebel Without a Cause (1955), a young man dies in a version of the game because he cannot get out of his car in time.",
      "Game theorists study the situation as the game of chicken. Each driver has two choices, to swerve or to drive straight. The best result for a driver is to drive straight while the other swerves. If both swerve, neither wins, but both are safe. The worst result, by far, is a crash.",
      "So each driver wants the other to give way. But if both insist on winning, both lose everything. Each driver’s best move depends on what the other driver will do.",
      "In 1959, the philosopher Bertrand Russell compared the game to the nuclear rivalry between the United States and the Soviet Union. The American Secretary of State, John Foster Dulles, had praised brinkmanship, which means pushing a crisis to the edge of war to make the other side back down. Russell argued that both governments were to blame for playing such a dangerous game.",
      "One strange tactic can win the game. Suppose that one driver openly removes his steering wheel before the race. He can no longer swerve, so the other driver must swerve or die. By giving up control, the first driver makes his threat believable."
    ],
    "question": "When two sides both refuse to back down, how can disaster be avoided?",
    "reveals": "The game of chicken shows the logic of brinkmanship. Each side gains by appearing more determined, even more reckless, than the other. So each side has a reason to make threats, remove its own options and refuse to compromise. But if both sides follow that logic, the result is a catastrophe that nobody wanted. Biologists study the same structure as the hawk–dove game, in which animals choose whether to fight over a resource or to back off.",
    "readings": [
      [
        "Commitment",
        "The economist Thomas Schelling showed that a side which can bind itself to a course of action often wins. A believable commitment, not strength alone, decides the outcome."
      ],
      [
        "Nuclear crisis",
        "The Cuban Missile Crisis of 1962 is often described as a game of chicken between the United States and the Soviet Union. Both sides stepped back, partly through a secret compromise."
      ],
      [
        "Hawk–dove in biology",
        "In nature, animals that always fight get injured, and animals that always retreat lose food and territory. Populations often settle into a mix of both behaviours."
      ]
    ],
    "breaks": [
      "Real conflicts rarely have only two choices. Negotiation, delay and compromise offer other paths.",
      "The model assumes that each side knows what the other side wants. In reality, leaders often misjudge how determined their rivals are.",
      "Accidents, false alarms and loss of control can cause disaster even when both sides mean to swerve."
    ],
    "uses": [
      "Military standoffs: Standoffs between nuclear-armed neighbours carry the risk that neither side will back down in time. Hotlines and agreed rules help both sides to step back without losing face.",
      "Strikes and lockouts: Unions and managements sometimes both refuse to give way until a long shutdown harms everyone.",
      "Political deadlock: Parties that refuse to compromise on essential laws or budgets can cause a crisis that hurts citizens.",
      "Exam use: In GS-IV, use it for conflict resolution, compromise and the ethics of brinkmanship. In the Essay paper, use it for topics on war, diplomacy and negotiation."
    ],
    "related": [
      "pd",
      "mad",
      "securitydilemma",
      "staghunt",
      "focal",
      "battlesexes"
    ],
    "reading": [
      [
        "“Chicken (game)”, Wikipedia",
        "",
        "https://en.wikipedia.org/wiki/Chicken_(game)"
      ],
      [
        "“Game Theory”, Stanford Encyclopedia of Philosophy",
        "",
        "https://plato.stanford.edu/entries/game-theory/"
      ]
    ]
  },
  "battlesexes": {
    "source": "R. Duncan Luce and Howard Raiffa, Games and Decisions (1957)",
    "period": "United States, 1957",
    "tradition": "Game theory",
    "type": "A strategic model. A strategic model studies how people choose when the result depends on what others do.",
    "setup": [
      "In 1957, the scholars Duncan Luce and Howard Raiffa published an influential book on game theory called Games and Decisions. In the book, they described a simple story.",
      "A man and a woman hope to spend the evening together. There are two events in town, a prize fight, which is a boxing match, and a ballet. The man would prefer the prize fight. The woman would prefer the ballet. But both of them care most about being together. Each would rather go to the less favoured event together than go alone to the favourite one.",
      "Suppose that they must decide separately, without talking to each other. If both go to the fight, the man is very happy and the woman is fairly happy. If both go to the ballet, the woman is very happy and the man is fairly happy. If they go to different events, neither is satisfied.",
      "The game has two stable outcomes. Both going to the fight is stable, and both going to the ballet is stable, because once they are together, neither wants to leave. The difficulty is that each person prefers a different stable outcome. So they need to coordinate, but they disagree about how to coordinate.",
      "Because the name rests on an old-fashioned picture of men and women, many writers now use neutral names. One common version is called Bach or Stravinsky, after two composers whose concerts the players must choose between."
    ],
    "question": "When people must coordinate but prefer different outcomes, whose preference should win?",
    "reveals": "The battle of the sexes shows a mix of shared interest and conflict. Both players gain from cooperating, so pure opposition makes no sense. But cooperation can happen in two ways, and each way favours one side. So the real question becomes who gives way. The answer often depends on who moves first, who can make a commitment, what custom says, or whether the players can take turns.",
    "readings": [
      [
        "Game theory reading",
        "The game has two stable solutions. There is also a mixed solution, in which each player chooses at random with certain probabilities. In the mixed solution, the players often miss each other, so both do worse."
      ],
      [
        "Power and bargaining",
        "A player who commits first, for example by buying tickets in advance, can steer the result toward his own preference. Coordination problems often turn into contests of bargaining power."
      ],
      [
        "Fairness",
        "Taking turns, such as the fight this week and the ballet next week, or tossing a coin, can make coordination fair over time."
      ]
    ],
    "breaks": [
      "The preferences are fixed in the model. Real people can talk, persuade each other and change their minds.",
      "The original story rests on gender stereotypes, which is why many writers prefer neutral names.",
      "Real relationships involve many repeated decisions, not a single choice."
    ],
    "uses": [
      "Technical standards: Countries and companies all benefit from a common standard, for example for charging devices, but each prefers the standard that suits its own industry.",
      "Coalition governments: Parties in a coalition all want the government to survive, but each wants its own policies adopted. Agreements such as a common minimum programme settle whose preferences win.",
      "Treaty negotiations: Countries may agree that a treaty is needed and still disagree about which rules it should contain.",
      "Exam use: In GS-IV, use it for negotiation, compromise and fairness in cooperation. In the Essay paper, use it for topics on cooperation, diplomacy and relationships."
    ],
    "related": [
      "focal",
      "staghunt",
      "chicken",
      "pd",
      "generalwill",
      "commons"
    ],
    "reading": [
      [
        "“Battle of the sexes (game theory)”, Wikipedia",
        "",
        "https://en.wikipedia.org/wiki/Battle_of_the_sexes_(game_theory)"
      ],
      [
        "“Game Theory”, Stanford Encyclopedia of Philosophy",
        "",
        "https://plato.stanford.edu/entries/game-theory/"
      ]
    ]
  },
  "focal": {
    "source": "Thomas Schelling, The Strategy of Conflict (1960)",
    "period": "United States, 1960",
    "tradition": "Game theory and strategic studies",
    "type": "A concept shown through an example. A focal point is an answer that people tend to choose when they must coordinate without talking.",
    "setup": [
      "Thomas Schelling was an American economist who studied conflict, bargaining and nuclear strategy. In his book The Strategy of Conflict (1960), he asked how people manage to coordinate their actions when they cannot talk to each other.",
      "He gave a group of students a set of puzzles. In one puzzle, you have to meet a stranger in New York City. You have not agreed on a place or a time, and you cannot contact the stranger. The stranger has been given the same instructions. Where and when do you go?",
      "In theory, there are thousands of possible places and times. Yet the most common answer among the students was the same: noon, at the information booth of Grand Central Terminal, the famous railway station.",
      "Nothing makes Grand Central Terminal a better place to meet than a library or a café. The station simply stands out. The station’s long tradition as a meeting place makes it the obvious choice, and each person expects the other to see it as obvious too.",
      "Schelling asked other questions as well. In one, two people must each say heads or tails, and they win only if their answers match. Most people say heads. Schelling called such obvious answers focal points. The economist Judith Mehta and her colleagues later repeated his informal experiments under controlled conditions, with real money as a reward."
    ],
    "question": "How do people coordinate when they cannot communicate?",
    "reveals": "Focal points show that coordination does not depend on logic alone. Many choices are equally good in theory. People succeed by choosing what stands out, based on shared culture, history, custom or simple prominence. Each person asks what the other person expects him to choose. Shared expectations then do the work that talking would normally do. Focal points also explain why traditions, round numbers and clear boundaries are so powerful.",
    "readings": [
      [
        "Coordination",
        "Shared culture creates common expectations. Meeting places, social customs and the side of the road on which people drive all rest on focal points."
      ],
      [
        "Bargaining",
        "Schelling argued that negotiations often settle on obvious points, such as splitting the difference equally or using a river as a border. Both sides can accept such points easily."
      ],
      [
        "Limits in conflict",
        "In war, both sides may respect clear limits, such as not using certain weapons or not crossing a recognised line. The limits work because both sides can see them clearly."
      ]
    ],
    "breaks": [
      "Focal points depend on shared culture. People from different backgrounds may not see the same answer as obvious.",
      "The obvious answer is not always fair or efficient. A focal point may favour one side simply because of tradition.",
      "When people distrust each other, they may avoid the obvious choice in order to gain an advantage."
    ],
    "uses": [
      "Borders and ceasefire lines: Clear, visible lines, such as rivers or agreed lines on a map, are easier to respect than vague boundaries. Unclear lines invite disputes.",
      "Defaults in public policy: Fixed deadlines, default options and standard forms help citizens and officials to coordinate without discussion.",
      "Mediation: Mediators often propose an equal split, or a solution used in an earlier case, because both sides can accept it without appearing weak.",
      "Exam use: In GS-IV, use it for negotiation, conflict resolution and the role of shared norms. In the Essay paper, use it for topics on culture, cooperation and diplomacy."
    ],
    "related": [
      "battlesexes",
      "staghunt",
      "beauty",
      "chicken",
      "mad",
      "pd"
    ],
    "reading": [
      [
        "“Focal point (game theory)”, Wikipedia",
        "",
        "https://en.wikipedia.org/wiki/Focal_point_(game_theory)"
      ],
      [
        "“Game Theory”, Stanford Encyclopedia of Philosophy",
        "",
        "https://plato.stanford.edu/entries/game-theory/"
      ]
    ]
  },
  "mad": {
    "source": "Cold War nuclear strategy. The strategist Donald Brennan coined the name mutually assured destruction in 1962.",
    "period": "From the 1950s. Named in 1962.",
    "tradition": "Strategic studies",
    "type": "A strategic doctrine. A doctrine is a set of principles that guides policy.",
    "setup": [
      "In August 1945, the United States dropped atomic bombs on the Japanese cities of Hiroshima and Nagasaki and became the first nuclear power. The Soviet Union soon built its own nuclear weapons, and the two countries began an arms race that lasted through the Cold War.",
      "At first, American policy threatened a massive nuclear attack on the Soviet Union if it invaded Western Europe, even with ordinary weapons. As both sides built more weapons, a new situation developed. Each side had enough weapons to destroy the other. More importantly, each side could still strike back after being attacked. Missiles in underground shelters, bombers and submarines hidden at sea could survive a first attack. Strategists call this ability a second-strike capability.",
      "The result was a strange kind of safety. If either side launched a full nuclear attack, the other side would respond, and both societies would be destroyed. So no rational leader would start a nuclear war. Peace rested on the certainty of shared destruction.",
      "In 1962, Donald Brennan, a strategist at the Hudson Institute, named the situation mutually assured destruction. He chose the words so that their first letters would spell MAD. He wanted to show that relying on weapons that could destroy society was irrational.",
      "The logic of MAD required each side to stay open to retaliation. Strong defences against missiles might tempt one side to strike first, in the belief that it could survive the response. So in 1972, the United States and the Soviet Union signed the Anti-Ballistic Missile Treaty, which limited such defences."
    ],
    "question": "Can the threat of total destruction keep the peace?",
    "reveals": "MAD shows how deterrence can turn the most dangerous weapons into a source of stability. When both sides know that any attack means their own destruction, neither side has a reason to attack. But the peace depends on rational leaders, reliable systems and the absence of accidents. MAD also carries a deep moral problem. Deterrence works only if leaders are prepared to kill millions of civilians in retaliation.",
    "readings": [
      [
        "Deterrence reading",
        "MAD helped to prevent a direct war between the United States and the Soviet Union during the Cold War, even while they fought smaller wars through other countries."
      ],
      [
        "Moral reading",
        "Many philosophers and religious leaders argue that threatening to destroy whole populations is wrong, even if the threat is never carried out."
      ],
      [
        "Risk reading",
        "Critics point to near-misses, such as the Cuban Missile Crisis of 1962 and false alarms from early-warning systems. They argue that luck, not only logic, prevented disaster."
      ]
    ],
    "breaks": [
      "MAD assumes rational leaders who value their own survival. A reckless leader, or a group that does not fear retaliation, is not deterred.",
      "Accidents, false alarms and misunderstandings can start a war that nobody intended.",
      "The doctrine drove a costly arms race, as each side struggled to keep up with the other."
    ],
    "uses": [
      "India’s nuclear doctrine: After its nuclear tests in 1998, India adopted a policy of no first use and credible minimum deterrence. India will not strike first, but it will respond with punishing retaliation if deterrence fails.",
      "Nuclear risk reduction: Hotlines, agreements not to attack nuclear facilities and advance notice of missile tests reduce the danger of accidental war between neighbours.",
      "Ethics of deterrence: Debates about nuclear disarmament ask whether a peace based on the threat of mass killing can ever be morally acceptable.",
      "Exam use: In GS-IV, use it for ethics in international relations, means and ends, and the morality of deterrence. In the Essay paper, use it for topics on war, peace and nuclear weapons."
    ],
    "related": [
      "chicken",
      "securitydilemma",
      "pd",
      "tacitus",
      "fermi",
      "arjuna"
    ],
    "reading": [
      [
        "“Mutually assured destruction”, Wikipedia",
        "Free overview of the doctrine and its history.",
        "https://en.wikipedia.org/wiki/Mutually_assured_destruction"
      ],
      [
        "“No first use”, Wikipedia",
        "Includes a section on India’s nuclear doctrine.",
        "https://en.wikipedia.org/wiki/No_first_use"
      ]
    ]
  },
  "ooda": {
    "source": "John Boyd, a colonel in the United States Air Force, developed the model in the 1970s.",
    "period": "United States, from the early 1970s",
    "tradition": "Military strategy",
    "type": "A decision model. A decision model is a simple picture of how people make decisions.",
    "setup": [
      "John Boyd was an American fighter pilot. In 1953, he flew 22 missions in F-86 Sabre jets during the last months of the Korean War. He later taught at the Fighter Weapons School of the United States Air Force. Other pilots called him Forty Second Boyd. He had a standing bet that, starting from a position of disadvantage, he could beat any opponent in a practice air fight in less than 40 seconds.",
      "Boyd later worked at the Pentagon, where his ideas influenced the programme that produced the F-16 fighter jet. He also spent years studying why some pilots, armies and commanders win while others lose.",
      "His answer was a cycle of four steps, which he called the OODA loop. The first step is to observe, which means gathering information about what is happening. The second is to orient, which means making sense of the information through experience, culture and knowledge. The third is to decide on a course of action. The fourth is to act. Then the cycle begins again, because every action changes the situation.",
      "Boyd argued that the side which moves through the cycle faster and more accurately gains a great advantage. The faster side acts before the opponent has understood the last change. The opponent’s picture of the situation is always out of date, so the opponent’s decisions no longer fit reality. Boyd described this as getting inside the opponent’s decision cycle.",
      "Boyd believed that orientation was the most important step. How people interpret information depends on their mental models. If those models are wrong, even perfect information leads to bad decisions."
    ],
    "question": "Why do those who adapt faster often defeat those who are stronger?",
    "reveals": "The OODA loop shows that in a changing situation, speed of understanding matters as much as strength. The advantage goes to the side that notices change, makes sense of it and responds before the other side can adjust. The model also shows that decisions depend on how people interpret events. Rigid thinking and old assumptions slow the loop down and lead to failure.",
    "readings": [
      [
        "Military reading",
        "Armies that give local commanders freedom to act can move through the loop faster than armies that wait for orders from the top."
      ],
      [
        "Business reading",
        "Companies that notice changes in markets and respond quickly can defeat larger but slower competitors."
      ],
      [
        "Personal reading",
        "In an emergency, the loop reminds people to observe carefully, update their understanding and act, instead of freezing or rushing blindly."
      ]
    ],
    "breaks": [
      "Speed is not always an advantage. Fast decisions based on a wrong understanding can lead to fast disasters.",
      "The model is simple, while real decisions involve many people, rules and competing goals.",
      "Boyd presented most of his ideas in long briefings rather than in books, so people interpret the loop in many different ways."
    ],
    "uses": [
      "Disaster response: Authorities must observe conditions, assess them, decide and act, and then repeat the cycle as the situation changes. Early warning and quick evacuation during cyclones show the value of a fast loop.",
      "District administration in a crisis: Officers facing floods, riots or epidemics must keep updating their picture of events instead of relying on the first reports.",
      "Cyber security: Defenders must detect and respond to attacks faster than attackers can change their methods.",
      "Exam use: In GS-IV, use it for decision-making in crises, adaptability and leadership. In the Essay paper, use it for topics on leadership, technology and change."
    ],
    "related": [
      "blindmen",
      "chicken",
      "securitydilemma",
      "butterfly",
      "beauty",
      "arjuna"
    ],
    "reading": [
      [
        "“OODA loop”, Wikipedia",
        "",
        "https://en.wikipedia.org/wiki/OODA_loop"
      ],
      [
        "“John Boyd (military strategist)”, Wikipedia",
        "",
        "https://en.wikipedia.org/wiki/John_Boyd_(military_strategist)"
      ]
    ]
  },
  "pd": {
    "source": "Merrill Flood and Melvin Dresher created the game at the RAND Corporation in 1950. Albert W. Tucker added the story about prisoners in the same year. The name first appeared in print in the book Games and Decisions by Luce and Raiffa (1957).",
    "period": "United States, 1950s",
    "tradition": "Game theory",
    "type": "A model from game theory. Game theory studies how people make decisions when the result also depends on what others do.",
    "setup": [
      "The police arrest two people for a crime. They keep them in separate rooms, so they cannot talk to each other. The police have enough proof to convict both of them for a small crime, but not for the big crime.",
      "The police make the same offer to each prisoner. If both stay silent, each will get one year in jail. If one confesses and the other stays silent, the one who confesses will go free and the silent one will get ten years. If both confess, each will get five years.",
      "Now think like one of the prisoners. If my partner stays silent, it is better for me to confess, because I will go free instead of getting one year. If my partner confesses, it is still better for me to confess, because I will get five years instead of ten. So whatever my partner does, confessing is better for me.",
      "The other prisoner thinks in exactly the same way. So both of them confess, and each gets five years. But if both had stayed silent, each would have got only one year.",
      "Merrill Flood and Melvin Dresher designed this game in 1950. Albert Tucker then told it as a story about two prisoners to make it easy to understand."
    ],
    "question": "Why do sensible people fail to cooperate, even when cooperation would be better for everyone?",
    "reveals": "What is best for each person alone can be worse for everyone together. For each prisoner, confessing is always the better choice. So both confess, even though both would prefer to stay silent. In game theory, this kind of stable result is called a Nash equilibrium. The gap between what is good for the individual and what is good for the group explains many problems, from arms races to pollution.",
    "readings": [
      [
        "When the game is played once",
        "If there is no trust and no way to enforce promises, betraying the other person is the sensible choice. Cooperation needs something from outside the game, such as contracts, laws or a strong government. The philosopher Thomas Hobbes gave this answer: people need a strong government to make them keep their promises."
      ],
      [
        "When the game is repeated",
        "When the same players meet again and again, cooperation can pay. Around 1980, Robert Axelrod held computer competitions for this repeated game. The winning strategy was called Tit for Tat, and it was written by Anatol Rapoport. This strategy cooperates in the first round. After that, it copies whatever the other player did in the previous round."
      ],
      [
        "Moral and social reading",
        "Real people cooperate more often than the model predicts. Social rules, reputation, fairness and a sense of belonging all change people’s choices. What the model calls irrational is often what holds societies together."
      ]
    ],
    "breaks": [
      "The fixed jail terms and the ban on talking are artificial. In real life, people can talk, make promises and punish those who break them.",
      "The model assumes that each prisoner cares only about his own sentence. If the prisoners are loyal to each other or feel guilt, the game changes.",
      "Many real situations are not true dilemmas. They are problems of trust, like the Stag Hunt. In these situations, people are willing to cooperate if they can trust others to do the same."
    ],
    "uses": [
      "Arms races: Two countries may both spend heavily on weapons, even though both would be safer and richer if neither did.",
      "Climate change: Each country gains if other countries cut their emissions while it does not.",
      "Business and sport: Price wars between companies and doping in sport follow the same pattern.",
      "Exam use: In GS-IV, use it for public interest versus self-interest and for ethics in international relations. In the Essay paper, use it for topics on individual and collective good."
    ],
    "related": [
      "staghunt",
      "commons",
      "freerider",
      "securitydilemma",
      "statenature",
      "gyges",
      "chicken"
    ],
    "reading": [
      [
        "“Prisoner’s Dilemma”, Stanford Encyclopedia of Philosophy",
        "The history of the game and Axelrod’s competitions.",
        "https://plato.stanford.edu/entries/prisoner-dilemma/"
      ],
      [
        "Robert Axelrod and William D. Hamilton, “The Evolution of Cooperation”, Science 211 (1981)",
        "",
        "https://doi.org/10.1126/science.7466396"
      ]
    ]
  },
  "staghunt": {
    "source": "Jean-Jacques Rousseau, Discourse on the Origin of Inequality (1755). Game theorists later turned his example into a model.",
    "period": "France, 1755",
    "tradition": "Political philosophy and game theory",
    "type": "A strategic model. A strategic model studies how people choose when the result depends on what others do.",
    "setup": [
      "In his Discourse on the Origin of Inequality, Rousseau described how early humans may have started to cooperate. He gave a short example about hunters.",
      "A group of hunters set out together to catch a deer. A deer is a large animal, and only a group can catch it. Every hunter must stay at his post. If all of them do so, they catch the deer, and there is plenty of meat for everyone.",
      "But suppose that a hare runs past one of the hunters. A hare is a small animal that one person can catch alone. Rousseau wrote that the hunter would surely chase the hare without a second thought. Once he had caught it, he would not blame himself for making his companions lose the deer.",
      "Game theorists turned the example into a model called the stag hunt. A stag is a male deer. Each hunter chooses between hunting the stag with the group and hunting a hare alone. The stag gives the best result, but only if everyone else also hunts the stag. A hare gives a small but certain result, whatever the others do.",
      "So each hunter must ask whether he can trust the others. If he trusts them, he should stay at his post. If he doubts them, catching a hare is the safer choice. Both outcomes are stable. If everyone cooperates, nobody wants to leave. If everyone chases hares, nobody wants to be the only one waiting for a stag."
    ],
    "question": "When cooperation gives the best result but depends on others, should you trust them or play safe?",
    "reveals": "The stag hunt shows that cooperation can fail even when everyone would benefit from it. Unlike in the prisoner’s dilemma, nobody gains by betraying a group that cooperates. If everyone hunts the stag, everyone is better off. The real problem is trust. When people doubt others, the small, safe reward seems wiser. So building trust and assurance, not only changing rewards, is the key to cooperation.",
    "readings": [
      [
        "Trust and assurance",
        "Cooperation depends on confidence that others will cooperate too. For this reason, the stag hunt is also called the assurance game."
      ],
      [
        "Social contract",
        "Philosophers use the stag hunt to explain how societies move from isolated individuals to shared projects. The Scottish philosopher David Hume gave similar examples, such as two people rowing a boat and two neighbours draining a shared meadow."
      ],
      [
        "Safety and ambition",
        "One stable outcome is best for everyone, while the other is less risky. Groups can get stuck in the safe but poor outcome."
      ]
    ],
    "breaks": [
      "The model assumes that trust is the only problem. In real life, some people do gain from betraying others, which is closer to the prisoner’s dilemma.",
      "Real groups can talk, make promises and punish those who leave their posts, which changes the game.",
      "People differ in how much risk they accept, so one hunter may trust more easily than another."
    ],
    "uses": [
      "Climate agreements: Each country gains most if all countries cut emissions together, but none wants to act alone if others will not. Trust and checking of promises are central.",
      "Community projects: Village water conservation or cleanliness drives succeed only when enough households take part. Visible early commitment by leaders gives others assurance.",
      "Trust in institutions: Citizens pay taxes honestly and follow rules more readily when they believe that others do the same.",
      "Exam use: In GS-IV, use it for trust, cooperation and social capital. In the Essay paper, use it for topics on cooperation, community and international relations."
    ],
    "related": [
      "pd",
      "commons",
      "statenature",
      "generalwill",
      "focal",
      "collectiveaction"
    ],
    "reading": [
      [
        "Jean-Jacques Rousseau, Discourse on the Origin of Inequality",
        "The example of the hunters is in the second part. Free on Project Gutenberg.",
        "https://www.gutenberg.org/ebooks/11136"
      ],
      [
        "“Stag hunt”, Wikipedia",
        "",
        "https://en.wikipedia.org/wiki/Stag_hunt"
      ]
    ]
  },
  "maitreyi": {
    "source": "Brihadaranyaka Upanishad 2.4. An almost identical version appears again at 4.5.",
    "period": "The Brihadaranyaka is one of the oldest Upanishads. Scholars usually date it to around the seventh or sixth century BCE.",
    "tradition": "Indian philosophy (Upanishads)",
    "type": "A philosophical dialogue between a husband and his wife",
    "setup": [
      "Yajnavalkya was one of the most famous thinkers of the Upanishads. He had two wives, Maitreyi and Katyayani. The text says that Maitreyi liked to discuss questions about Brahman, the ultimate reality. It says that Katyayani knew only what women of that time were usually expected to know.",
      "One day, Yajnavalkya decided to leave his home and live as a wandering monk. So he wanted to divide his property between his two wives.",
      "Maitreyi asked him, “If this whole earth, full of wealth, belonged to me, would that make me immortal?” Yajnavalkya answered, “No. Your life would be like the life of rich people. But there is no hope of immortality through wealth.”",
      "Maitreyi said, “Then what should I do with something that will not make me immortal? Tell me instead what you know.” Yajnavalkya was pleased. He asked her to sit down and listen carefully.",
      "He said, “A husband is not dear for the husband’s own sake. He is dear because of the Self. A wife is not dear for the wife’s own sake. She is dear because of the Self.” He said the same about children, wealth and everything else. So the Self, the atman, is what must be seen, heard, thought about and deeply understood.",
      "Maitreyi found the rest of his teaching confusing. So Yajnavalkya explained further. Where there is duality, one person sees another and knows another. But when everything has become one’s own Self, who could see whom, and by what means? How can anyone know the knower?"
    ],
    "question": "Can wealth give a person what they most deeply want?",
    "reveals": "Maitreyi sees that wealth can make life comfortable, but it cannot answer the deepest human questions. Yajnavalkya’s reply goes further. We love people and things because, in some way, they are connected to the Self. When we understand the Self, we understand what all our love is really pointing to. So the dialogue moves from a question about property to a question about what is truly valuable.",
    "readings": [
      [
        "Advaita reading",
        "The Self in each person is the same universal Self, Brahman. So all love is, at its root, love of the one Self that is present in everyone. When this is known, the gap between the knower and the known disappears."
      ],
      [
        "Ethical reading",
        "Some readers take the words “dear because of the Self” to mean that all love is selfish. Most commentators reject this reading. The Self here is not the small ego. It is the deeper Self shared by all, so the teaching points towards unity, not selfishness."
      ],
      [
        "Maitreyi as a thinker",
        "Maitreyi is remembered as a brahmavadini, a woman who discussed questions about Brahman. She chose knowledge over property. Some scholars suggest that she may have been an independent teacher herself. The text’s description of Katyayani, however, shows the limited view of women in that period."
      ]
    ],
    "breaks": [
      "The story treats wealth as unimportant. But for poor people, wealth means food, health and dignity. It is easier to give up wealth when one is already secure.",
      "The teaching is very abstract. Maitreyi herself finds it confusing, and most readers need a teacher to follow it.",
      "Yajnavalkya leaves his family to seek liberation. The text does not ask what his wives lose when he goes."
    ],
    "uses": [
      "Measuring development: Income alone does not measure a good life. So the Human Development Index measures health and education as well as income.",
      "Consumer culture: Advertising often suggests that buying more will make people happy. Maitreyi’s question challenges this idea.",
      "Women and knowledge: Maitreyi and Gargi show that women took part in philosophical discussion in ancient India. They are often mentioned in discussions about women’s education.",
      "Exam use: In GS-IV, use it for values, materialism and Indian moral thinkers. In the Essay paper, use it for topics on wealth and happiness, love, and women in Indian thought."
    ],
    "related": [
      "gargi",
      "nachiketa",
      "atman",
      "netineti",
      "ashtavakra",
      "uddalaka"
    ],
    "reading": [
      [
        "The Thirteen Principal Upanishads, translated by Robert Ernest Hume (1921)",
        "The Maitreyi dialogue is Brihadaranyaka 2.4 and 4.5. Free on the Internet Archive.",
        "https://archive.org/details/thirteenprincipa00hume"
      ],
      [
        "“Upanisads”, Internet Encyclopedia of Philosophy",
        "",
        "https://iep.utm.edu/upanisad/"
      ]
    ]
  },
  "gargi": {
    "source": "Brihadaranyaka Upanishad 3.6 and 3.8",
    "period": "The Brihadaranyaka is one of the oldest Upanishads. Scholars usually date it to around the seventh or sixth century BCE.",
    "tradition": "Indian philosophy (Upanishads)",
    "type": "A philosophical debate",
    "setup": [
      "At a great sacrifice, King Janaka of Videha offered a prize of a thousand cows, with gold tied to their horns, to the scholar who knew the most about Brahman, the ultimate reality. The sage Yajnavalkya told his student to drive the cows home. The other scholars challenged him. Only one of them, the woman philosopher Gargi Vachaknavi, challenged him twice.",
      "In those days, people used a picture from weaving to describe the world. Just as cloth is woven on long threads, the whole world was believed to be woven on water.",
      "Gargi started from this belief. She asked, “If the world is woven on water, what is water woven on?” Yajnavalkya answered, “On air.” Every time he answered, she asked the same question about his new answer. He named higher and higher bases: the sky, the sun, the moon, the stars, the gods and Prajapati, the creator. At last he said that all of these rest on the worlds of Brahman.",
      "Gargi then asked what the worlds of Brahman are woven on. Yajnavalkya stopped her. He warned, “Gargi, do not ask too much, or your head will fall off.” He added that no further question can be asked about Brahman. Gargi fell silent.",
      "Later in the debate, Gargi rose again. She compared herself to a warrior holding two sharp arrows, and said that she had two questions for Yajnavalkya.",
      "Her first question was, “What is the base of everything above the sky and below the earth, and of the past, the present and the future?” Yajnavalkya answered, “Space.” Her second question was, “Then what is space woven on?”",
      "Yajnavalkya said that space is woven on the Imperishable, the reality that never decays. The Imperishable has no size, shape, colour or taste. By its command, the sun and the moon keep their places, and days, months and years follow their order. No one can see the Imperishable, yet it is what sees through every eye.",
      "Gargi was satisfied. She told the other scholars that none of them would ever defeat Yajnavalkya in a debate about Brahman."
    ],
    "question": "Can we keep asking what everything rests on, or must the questioning stop somewhere?",
    "reveals": "The debate shows how far careful questioning can go. Gargi used one simple question again and again: what does this rest on? Every answer led to a new question, until the chain reached Brahman. Yajnavalkya’s first reply stopped the chain with a warning. His second reply gave a real answer. He pointed to the Imperishable, which is not one more thing in the chain but the reality on which every thing rests. The debate also shows a woman leading the questioning in the most important philosophical contest of her time, and announcing its result.",
    "readings": [
      [
        "Vedanta reading",
        "The chain of questions must end in Brahman, the Imperishable. Everything rests on the Imperishable, but the Imperishable rests on nothing else. So Brahman cannot be reached by asking more questions, only by direct understanding."
      ],
      [
        "Critical reading",
        "The warning that Gargi’s head would fall off can be read as an expert using his authority to silence a hard question. But Gargi did not give up. She came back with sharper questions and received a fuller answer."
      ],
      [
        "Gargi as a thinker",
        "Gargi and Maitreyi are the only two women who take part in philosophical discussion in the Upanishads. Gargi was the only scholar who challenged Yajnavalkya twice, and at the end she was the one who declared the result of the debate."
      ]
    ],
    "breaks": [
      "The warning about Gargi’s head falling off is a threat, not an argument. The warning does not explain why the question cannot be asked.",
      "Saying that the chain ends in the Imperishable does not fully settle the matter. A doubter can still ask why the chain must end there.",
      "The debate was a contest for a prize of cows and gold, so reputation was at stake as well as truth."
    ],
    "uses": [
      "Freedom of inquiry: Universities and research depend on the right to ask difficult questions, even about established ideas.",
      "Scientific thinking: Science also keeps asking what each explanation depends on, from atoms, to particles, to fields.",
      "Accountability: Public officials should welcome hard questions from citizens, the media and legislators, instead of silencing them.",
      "Exam use: In GS-IV, use it for the spirit of inquiry, accountability and Indian moral thinkers. In the Essay paper, use it for topics on questioning, knowledge and the role of women in Indian thought."
    ],
    "related": [
      "maitreyi",
      "netineti",
      "atman",
      "gadfly",
      "cave",
      "uddalaka"
    ],
    "reading": [
      [
        "The Thirteen Principal Upanishads, translated by Robert Ernest Hume (1921)",
        "The debate with Gargi is Brihadaranyaka 3.6 and 3.8. Free on the Internet Archive.",
        "https://archive.org/details/thirteenprincipa00hume"
      ],
      [
        "“Gārgī Vāchaknavī”, Wikipedia",
        "Free overview of Gargi and her debate with Yajnavalkya.",
        "https://en.wikipedia.org/wiki/G%C4%81rg%C4%AB_V%C4%81chaknav%C4%AB"
      ]
    ]
  },
  "indra": {
    "source": "Chandogya Upanishad 8.7 to 8.12",
    "period": "The Chandogya is one of the oldest Upanishads. Scholars usually date it to around the seventh or sixth century BCE.",
    "tradition": "Indian philosophy (Upanishads)",
    "type": "A teaching story",
    "setup": [
      "Prajapati, the creator, announced that there is a Self, called the atman, which never grows old or dies and feels no sorrow, hunger or thirst. He promised that whoever understands this Self gains everything worth having. The gods sent their king, Indra, to learn about this Self, and the demons sent their king, Virochana.",
      "The two kings came to Prajapati carrying firewood in their hands, which was how a student asked a teacher to accept him. They lived with Prajapati as students for thirty-two years.",
      "Then Prajapati told them to look into a pan of water, first as they were and then in fine clothes and jewellery. Each time, they saw their own bodies reflected. Prajapati said, “That is the Self.” Both kings went away satisfied. But as they left, Prajapati said that they had not found the Self.",
      "Virochana told the demons that the body is the Self, so a person should serve and please only his own body. The Upanishad says that for this reason, selfish people who do not give to others and have no faith are called demons. The same people even dress their dead in fine clothes, because they believe that the dressed body will win the next world.",
      "Indra saw a problem on his way home. The reflection is well dressed when the body is well dressed. But the reflection is also blind when the body is blind, and lame when the body is lame. When the body dies, the reflection disappears. So Indra went back, and Prajapati taught him for thirty-two more years.",
      "Next, Prajapati said that the Self is the one who wanders happily in dreams. The dreaming self is not harmed when the body is blind or lame. But Indra saw that in dreams a person can still feel chased or attacked, feel pain and even weep. He returned again for thirty-two more years.",
      "Then Prajapati said that the Self is what remains in deep sleep, when a person is calm and has no dreams. Nothing hurts a person in deep sleep. But Indra saw that in deep sleep a person knows nothing, not even that he exists, and such a state seems close to being destroyed. He returned once more and studied for five more years, making a hundred and one years in all.",
      "At last, Prajapati gave the full teaching. The body is mortal and belongs to death, but the body is only the home of the Self, which has no body and never dies. As long as a person thinks that he is the body, he is caught by pleasure and pain. The eyes, the ears and the mind are only tools. The Self is the one who uses them, the one who knows, “Let me see,” “Let me hear” and “Let me think.”"
    ],
    "question": "Are you your body, or something more?",
    "reveals": "The story tests four answers to the question “What am I?” The first answer is the body. The second is the mind that dreams. The third is deep sleep, where there is peace but no awareness. The final answer is the awareness that uses the body and the mind but is not limited to them. Virochana stopped at the first answer because it suited him. Indra tested each answer against ordinary experience and kept asking until he reached the truth. The story also shows that a person’s belief about the self shapes how he lives. Someone who believes that he is only a body will live for his own comfort and display.",
    "readings": [
      [
        "Vedanta reading",
        "The four lessons follow the three states of human experience: waking, dreaming and deep sleep. The true Self is the awareness that is present in all three states but is not limited to any of them. Later Vedanta teachers developed this idea in detail."
      ],
      [
        "Reading about learning",
        "Prajapati does not give the full answer at once. He lets each student test what he has been told. Indra learns because he notices what is wrong with each answer and comes back with a question. Virochana fails because he accepts the first answer that pleases him."
      ],
      [
        "Moral reading",
        "Virochana’s teaching, that one should serve only one’s own body, describes a selfish way of life. The Upanishad links this teaching to people who do not give and do not share. The gods and the demons can be read as two attitudes found in every person."
      ]
    ],
    "breaks": [
      "The story treats the body as a trap. Modern ethics sees care for the body, through health, food and dignity, as part of a good life.",
      "Calling people who do not give or believe “demons” is harsh. The label can encourage contempt for people with different beliefs.",
      "The final teaching about the knowing Self is hard to put into words. The story shows the journey more clearly than the destination."
    ],
    "uses": [
      "Appearance and social media: The pan of water is like a mirror or a selfie. People can come to believe that their appearance is who they are.",
      "Consumerism: Virochana’s idea that one should live only to please the body matches a culture of endless buying and display.",
      "Learning and inquiry: Good students and good officers question the first easy answer, as Indra did.",
      "Exam use: In GS-IV, use it for self-awareness, attitude, the spirit of inquiry and Indian moral thinkers. In the Essay paper, use it for topics on appearance and reality, consumerism and education."
    ],
    "related": [
      "uddalaka",
      "chariot",
      "atman",
      "maitreyi",
      "cave",
      "experience"
    ],
    "reading": [
      [
        "The Thirteen Principal Upanishads, translated by Robert Ernest Hume (1921)",
        "The story of Indra and Virochana is Chandogya 8.7 to 8.12. Free on the Internet Archive.",
        "https://archive.org/details/thirteenprincipa00hume"
      ],
      [
        "“Upanisads”, Internet Encyclopedia of Philosophy",
        "",
        "https://iep.utm.edu/upanisad/"
      ]
    ]
  },
  "uddalaka": {
    "source": "Chandogya Upanishad, chapter 6",
    "period": "The Chandogya is one of the oldest Upanishads. Scholars usually date it to around the seventh or sixth century BCE.",
    "tradition": "Indian philosophy (Upanishads)",
    "type": "A teaching dialogue between a father and his son",
    "setup": [
      "Uddalaka Aruni sent his son Shvetaketu away to study the Vedas. Shvetaketu left home at the age of twelve. He studied for twelve years and learned all the Vedas. When he came home at twenty-four, he was proud and thought that he was very learned.",
      "His father asked him, “Did you ask your teachers for the teaching by which the unheard becomes heard, the unthought becomes thought, and the unknown becomes known?” Shvetaketu did not know any such teaching. He asked his father to explain it.",
      "Uddalaka said, “By knowing one lump of clay, you know everything that is made of clay. The things made from it differ only in name. The truth is that they are all clay.” He gave similar examples with metal ornaments and iron tools. In the same way, he said, there is one reality behind everything. In the beginning, there was only Being, one without a second.",
      "Then Uddalaka gave more examples. He asked his son to bring a fruit from a banyan tree and break it open. Inside were tiny seeds. He asked him to break one seed. Shvetaketu said, “I see nothing.” His father said, “From this fine essence that you cannot see, this great banyan tree grows.”",
      "Next, he told his son to put some salt in water and leave it overnight. In the morning, the salt could not be seen. But the water tasted salty at the top, in the middle and at the bottom. The salt was present everywhere, though it could not be seen.",
      "After each example, Uddalaka said, “That fine essence is the Self of the whole world. That is the truth. That is the Self. That you are, Shvetaketu.” In Sanskrit, the last words are tat tvam asi. The father repeats them nine times."
    ],
    "question": "What is the one reality behind all the different things we see, and how are you related to it?",
    "reveals": "Uddalaka teaches that the many things of the world are different forms of one reality, just as pots are forms of clay. This reality is subtle, like the essence in a seed or salt in water. It cannot be seen, but it is everywhere. The final teaching is personal. That reality is not somewhere far away. It is your own deepest Self. The story also teaches humility. A proud young man who knew many texts had not yet learned the one thing that explains them all.",
    "readings": [
      [
        "Advaita Vedanta (Shankaracharya)",
        "Tat tvam asi means that the individual self and Brahman are completely identical. It is one of the four great sayings, the mahavakyas, of Vedanta."
      ],
      [
        "Vishishtadvaita (Ramanuja)",
        "The individual self is real and distinct, but it depends on Brahman, just as a body depends on its soul. So tat tvam asi means that Brahman lives within the self and controls it, not that the two are simply the same."
      ],
      [
        "Dvaita (Madhva)",
        "Madhva read the phrase differently, as atat tvam asi, which means “you are not that”. For him, the individual self and God are always distinct."
      ],
      [
        "Ethical reading",
        "If the same Self is in every being, then harming another person is harming oneself. The German philosopher Arthur Schopenhauer praised tat tvam asi as the best statement of the basis of compassion."
      ]
    ],
    "breaks": [
      "The examples of clay, seeds and salt illustrate the idea, but they do not prove it. Salt dissolved in water is still a separate substance.",
      "If everything is one, it is hard to explain the real differences and conflicts between people. The schools of Vedanta disagree sharply on this point.",
      "The idea of oneness can be used to ask people to accept injustice calmly. But oneness does not remove the duty to fight inequality."
    ],
    "uses": [
      "Compassion and service: If the same Self is in all, then serving others is a natural duty. Swami Vivekananda used this idea to call for service to the poor.",
      "Unity in diversity: The idea supports respect for all communities as expressions of one humanity.",
      "Education: Uddalaka teaches principles, not only facts. Good education helps students understand the idea that explains many facts.",
      "Humility: A person with many degrees may still lack real understanding, as Shvetaketu did.",
      "Exam use: In GS-IV, use it for compassion, humility, tolerance and Indian moral thinkers. In the Essay paper, use it for topics on unity in diversity, knowledge and wisdom, and education."
    ],
    "related": [
      "indra",
      "maitreyi",
      "atman",
      "gargi",
      "nachiketa",
      "netineti"
    ],
    "reading": [
      [
        "The Thirteen Principal Upanishads, translated by Robert Ernest Hume (1921)",
        "The teaching of Uddalaka is Chandogya chapter 6. Free on the Internet Archive.",
        "https://archive.org/details/thirteenprincipa00hume"
      ],
      [
        "“Vedanta, Advaita”, Internet Encyclopedia of Philosophy",
        "",
        "https://iep.utm.edu/advaita-vedanta/"
      ]
    ]
  },
  "arjuna": {
    "source": "Bhagavad Gita, chapters 1 and 2. Krishna’s full answer continues until chapter 18. The Gita is part of the Bhishma Parva of the Mahabharata.",
    "period": "Scholars usually date it between the last centuries BCE and the first centuries CE.",
    "tradition": "Indian philosophy (Vedanta, Yoga and Bhakti)",
    "type": "A philosophical dialogue",
    "setup": [
      "Two armies from the same family, the Pandavas and the Kauravas, stood ready for war at Kurukshetra. Arjuna was the greatest archer of the Pandavas. He asked his charioteer, Krishna, to drive the chariot between the two armies. He wanted to see the people he had to fight.",
      "In the enemy army, Arjuna saw his grandfather, his teachers, his uncles, his cousins and his friends. His body started to shake. His mouth went dry. His bow, Gandiva, slipped from his hand.",
      "Arjuna told Krishna that no victory was worth killing his own family and teachers, such as Bhishma and Drona. He said that such killing would destroy families and their traditions, and that society would fall into disorder. He said that he would rather be killed without fighting back. He put down his bow and said, “I will not fight.” Then he became silent.",
      "Krishna answered him over the next sixteen chapters. He told Arjuna that the true self is never born and never dies. It is not killed when the body is killed. He said that Arjuna was a warrior, and that his own duty, or svadharma, was to fight a righteous war. If he ran away, he would lose his honour. Most importantly, Krishna told him to act without being attached to the results. He said that a person has a right to his actions, but never to their results (2.47). A person should stay calm in both success and failure. At the end of the Gita, Arjuna’s confusion was gone, and he picked up his bow again."
    ],
    "question": "Should you do your duty when doing it seems to cause great harm?",
    "reveals": "Arjuna faces a conflict between two real duties. One is his love and loyalty towards his family. The other is his duty as a warrior in a just war. Krishna does not deny Arjuna’s pain. Instead, he asks Arjuna to see the situation in a different way. The most lasting idea of the Gita is nishkama karma. It means doing one’s work fully and well, without being attached to the results. When a person is not attached to results, fear, greed and grief cannot spoil his decisions.",
    "readings": [
      [
        "Bal Gangadhar Tilak",
        "In his book Gita Rahasya (1915), Tilak said that the Gita is a call to action. It asks people to work selflessly in the world, and not to run away from it."
      ],
      [
        "Mahatma Gandhi",
        "Gandhi said that the battlefield stands for the struggle inside every human heart. For him, the main teaching was anasakti, which means non-attachment. Gandhi believed that this teaching leads towards non-violence, not towards war."
      ],
      [
        "B. R. Ambedkar",
        "Ambedkar criticised the Gita. He argued that it defends the caste system, because it says that every person has a fixed duty based on birth."
      ],
      [
        "Amartya Sen",
        "In his book The Idea of Justice (2009), Sen argued that Arjuna’s worry about the results of the war deserves more respect. A just decision must consider what actually happens to people."
      ]
    ],
    "breaks": [
      "The idea of duty based on one’s role can be misused to excuse harm. People who follow harmful orders often say, “My position required it.”",
      "The argument that the true self cannot be killed does not convince people who do not share this belief. It may also seem to make any killing unimportant.",
      "Detachment from results can turn into not caring about results. Public decisions cannot ignore their results.",
      "A duty fixed by birth does not fit with the modern idea that all people are equal before the law."
    ],
    "uses": [
      "Civil servants: An officer may have to carry out a lawful policy that he personally dislikes. He must also know when his conscience should come before his role.",
      "Conflict of interest: When family or friends are involved in a decision, the right step today is to stay out of that decision.",
      "Public service: Nishkama karma is a good ideal for public servants. It means doing good work without looking for credit or reward.",
      "Exam use: In GS-IV, use it for duty versus conscience, ethical dilemmas, Indian moral thinkers and emotional intelligence under pressure. In the Essay paper, use it for topics on duty, action and detachment."
    ],
    "related": [
      "dharma",
      "gunas",
      "trolley",
      "milgram",
      "nachiketa",
      "karma",
      "ashtavakra"
    ],
    "reading": [
      [
        "The Song Celestial (Bhagavad Gita), translated by Edwin Arnold (1885)",
        "A translation in verse. Free on Project Gutenberg.",
        "https://www.gutenberg.org/ebooks/2388"
      ],
      [
        "“Bhagavad Gita”, Internet Encyclopedia of Philosophy",
        "Free overview of the text and the different ways it has been read.",
        "https://iep.utm.edu/bhagavad-gita/"
      ]
    ]
  },
  "raft": {
    "source": "Alagaddupama Sutta (The Simile of the Snake), Majjhima Nikaya 22, in the Pali Canon",
    "period": "An early Buddhist teaching. The Pali Canon was written down in Sri Lanka in the first century BCE.",
    "tradition": "Indian (Buddhist)",
    "type": "A parable. A parable is a simple story that teaches a lesson.",
    "setup": [
      "In this discourse, the Buddha warns monks about holding on to his teachings in the wrong way. First he compares a wrongly grasped teaching to a snake. If a person catches a snake by its tail, the snake will turn and bite him. In the same way, a person who learns the teaching only to criticise others and win debates will be harmed by it. Then the Buddha gives a second example, the simile of the raft.",
      "Suppose a man is travelling on a road. He comes to a wide river. The near shore is dangerous, and the far shore is safe. But there is no boat and no bridge.",
      "So the man collects grass, sticks, branches and leaves, and ties them together to make a raft. He gets on the raft and paddles with his hands and feet. In this way, he crosses safely to the far shore.",
      "Then he thinks, “This raft has been very useful to me. Why don’t I lift it onto my head or my shoulder and carry it with me wherever I go?”",
      "The Buddha asked the monks, “Would that man be doing the right thing with the raft?” The monks said no. The Buddha said that the right thing is to pull the raft onto dry land, or let it float away on the water, and then go on.",
      "The Buddha then explained the example. He said that he had taught the Dhamma like a raft, for crossing over, not for holding on to. A person who understands this will let go even of good teachings once they have done their work. Such a person will let go of bad teachings all the more."
    ],
    "question": "Should we hold on to a method or belief after it has done its job?",
    "reveals": "Teachings, rules and methods are tools. Their value lies in what they help us to do. When people start to treat a tool as something to own and defend, they miss its purpose. Even true and good teachings are meant to be used and then let go. They are not meant to be carried around as a burden or a badge.",
    "readings": [
      [
        "Buddhist reading",
        "The Dhamma is a means to freedom from suffering, not an end in itself. Clinging even to the Buddha’s own teachings is a form of attachment that must finally be given up."
      ],
      [
        "Reading about rules",
        "Rules and procedures exist to serve a purpose. When people follow them blindly after they have stopped serving that purpose, the rules become a burden."
      ],
      [
        "Critical reading",
        "Some readers worry that the simile could let people drop moral rules whenever they feel that they no longer need them. But in the Pali texts, the simile is given to monks who are still training, and the path itself includes strict ethical discipline."
      ]
    ],
    "breaks": [
      "It is not easy to know when we have really reached the far shore. People may drop a useful discipline too early.",
      "Some things are more than tools. Values such as honesty and compassion are not meant to be thrown away.",
      "The simile is about a spiritual goal. Applying it to every rule in society can be misleading."
    ],
    "uses": [
      "Outdated laws: Governments often keep old laws and procedures long after their purpose has ended. In recent years, India has repealed more than a thousand obsolete laws for this reason.",
      "Ideology: Political and economic ideas are tools for solving problems. Holding on to them as fixed identities can stop people from seeing new solutions.",
      "Learning: Short notes and shortcuts help students at one stage. Later, they should give way to real understanding.",
      "Exam use: In GS-IV, use it for attitude, open-mindedness and the purpose behind rules. In the Essay paper, use it for topics on means and ends, and on tradition and reform."
    ],
    "related": [
      "arrow",
      "blindmen",
      "anekanta",
      "kisagotami",
      "threepoisons",
      "netineti"
    ],
    "reading": [
      [
        "Majjhima Nikaya 22, translated by Bhikkhu Sujato, SuttaCentral",
        "The raft simile is in section 13. Free, with the original Pali text alongside.",
        "https://suttacentral.net/mn22"
      ],
      [
        "“Buddha”, Stanford Encyclopedia of Philosophy",
        "",
        "https://plato.stanford.edu/entries/buddha/"
      ]
    ]
  },
  "anekanta": {
    "source": "Jain philosophy. The idea goes back to the teachings of Mahavira. The Jain scholar Siddhasena Divakara gave it the name anekantavada. Later thinkers such as Kundakunda and Samantabhadra developed it further.",
    "period": "From the time of Mahavira, around the sixth to fifth century BCE, and developed over the following centuries",
    "tradition": "Indian (Jain)",
    "type": "A concept. Anekantavada means the doctrine that reality has many sides.",
    "setup": [
      "Anekantavada is a central idea of Jain philosophy. The word means “the doctrine of not being one-sided”. The doctrine says that reality is complex and has many sides. So no single statement can describe the whole truth about anything.",
      "Jains explain this idea with simple examples. A man is a father to his son, a son to his own father, a husband to his wife and a brother to his sister. Each description is true. But each one is true only from one point of view. None of them tells the whole truth about the man.",
      "Mahavira, the great teacher of Jainism, used this way of thinking. For example, he taught that the soul is permanent from one point of view, because its basic substance does not change. From another point of view, it is always changing, because its states keep changing. Both statements are true in their own way.",
      "Jain thinkers built two methods on this idea. The first is nayavada, the theory of points of view. It studies the different standpoints from which a thing can be described. The second is syadvada, the method of conditional statements. It adds the word syat, meaning “in some respect”, to a statement. For example, in some respect the pot exists, and in some respect it does not exist. Syadvada lists seven possible forms of such statements. Jains often explain the whole idea with the story of the blind men and the elephant."
    ],
    "question": "If each of us sees only part of the truth, how should we judge other people’s views?",
    "reveals": "Anekantavada teaches intellectual humility. When two people disagree, both may be describing a real side of the same thing. Before rejecting another view, we should ask from which point of view it could be true. But Jain thinkers insisted that anekantavada is not relativism. The doctrine does not mean that all views are equally true. It means that a full understanding must combine many partial views.",
    "readings": [
      [
        "Jain reading",
        "Reality really has many sides. Only a fully enlightened being, called a kevalin, sees all of them at once. For ordinary people, careful conditional statements are the honest way to speak."
      ],
      [
        "Not relativism",
        "The scholar John Koller describes anekantavada as respect for the views of others. He adds that it does not mean that all arguments and views are equal. The seventeenth-century Jain scholar Yasovijaya also warned against accepting all views as true without judgement."
      ],
      [
        "Criticism by other schools",
        "Philosophers of other schools, including Shankaracharya, criticised the doctrine. They argued that one thing cannot have opposite qualities at the same time, so the Jain method is inconsistent."
      ],
      [
        "Modern reading",
        "Many writers today see anekantavada as a basis for tolerance and dialogue in a society with many religions and cultures."
      ]
    ],
    "breaks": [
      "Some statements are simply false. Saying that every claim is true “in some respect” can hide real mistakes.",
      "The doctrine depends on someone, such as an enlightened being, who sees the whole truth. Without such a person, it is hard to know how the partial views fit together.",
      "In practice, the idea can be used to avoid taking a clear stand on moral questions that need a firm answer."
    ],
    "uses": [
      "Secularism and dialogue: In a country with many religions and languages, anekantavada supports respect for other beliefs without giving up one’s own.",
      "Policy making: A problem like farm distress looks different to farmers, economists, environmentalists and consumers. Good policy combines these views.",
      "Negotiation: Understanding the other side’s point of view is the first step in settling disputes, whether between countries, communities or colleagues.",
      "Exam use: In GS-IV, use it for tolerance, objectivity, empathy and Indian moral thinkers. In the Essay paper, use it for topics on truth, tolerance, diversity and dialogue."
    ],
    "related": [
      "blindmen",
      "syadvada",
      "butterflydream",
      "raft",
      "cave",
      "nasreddin"
    ],
    "reading": [
      [
        "“Jain Philosophy”, Internet Encyclopedia of Philosophy",
        "Explains anekantavada, the seven forms of statement and the criticism of them.",
        "https://iep.utm.edu/jain/"
      ],
      [
        "“Anekantavada”, Wikipedia",
        "Free overview of the doctrine and its history.",
        "https://en.wikipedia.org/wiki/Anekantavada"
      ]
    ]
  },
  "uselesstree": {
    "source": "Zhuangzi, chapter 1 (“Free and Easy Wandering”) and chapter 4 (“In the World of Men”)",
    "period": "China, fourth century BCE",
    "tradition": "Chinese Daoist philosophy",
    "type": "A parable. A parable is a simple story that teaches a lesson.",
    "setup": [
      "Zhuangzi was a Chinese philosopher of the fourth century BCE. He belonged to the Daoist tradition, which teaches people to live in harmony with the natural way of things, called the Dao. His book is full of humorous stories. Two of them are about useless trees.",
      "In the first story, Zhuangzi’s friend Huizi, a clever debater, told him about a huge tree of a worthless kind. The tree’s trunk was so knotty and its branches so twisted that no carpenter would look at it. Then Huizi said that Zhuangzi’s words were like that tree, big and useless.",
      "Zhuangzi replied with an example. A wild cat is quick and good at catching prey, but its skill leads it into traps. A yak is huge and cannot even catch a mouse, but its uselessness keeps it safe. So Zhuangzi told Huizi to plant the tree in an empty place and rest in its shade. Because nobody could use the tree, no axe would ever cut it down.",
      "In the second story, a master carpenter and his apprentice passed a huge sacred oak. Crowds stood admiring it, but the carpenter did not even look. He told his apprentice that the wood was worthless. A boat made from it would sink, a coffin would rot and a pillar would be eaten by worms. The tree had lived so long because its wood was useless.",
      "When the carpenter reached home, he dreamt that the tree spoke to him. The tree reminded him that fruit trees are stripped and broken as soon as their fruit ripens, and they die young because they are useful. The tree said that it had long tried to be useless. Being useless had become its greatest use."
    ],
    "question": "Is something valuable only when it is useful to others?",
    "reveals": "The useless tree turns ordinary values upside down. Society judges things and people by their usefulness, and it uses up whatever is useful. The tree survives because it does not fit the carpenter’s purposes. Zhuangzi suggests that a life can be valued in other ways than by its usefulness to rulers or markets. Freedom may come from refusing to be measured only by what one produces.",
    "readings": [
      [
        "Daoist reading",
        "Being useful exposes a person to exploitation and danger. The wise person avoids being used up by the demands of power and lives freely and long."
      ],
      [
        "Critique of usefulness",
        "The story challenges the habit of judging everything by its immediate use. What looks useless from one point of view, such as shade, beauty or a sacred place, may be precious from another."
      ],
      [
        "Political reading",
        "In Zhuangzi’s time, talented people were drawn into the service of warring rulers and often died for it. The parable can be read as advice to keep a distance from dangerous public office."
      ]
    ],
    "breaks": [
      "Society depends on useful work. If everyone chose to be useless, nobody would grow food or care for others.",
      "The story can be read as an excuse for avoiding responsibility.",
      "The oak survives partly because it became sacred, which is itself a kind of use. The carpenter’s apprentice raises this very point in the story."
    ],
    "uses": [
      "Forests and sacred groves: Old trees and sacred groves may have little value as timber, but they protect water, soil and wildlife. Sacred groves in many parts of India have preserved rich biodiversity.",
      "Education: Subjects without obvious job value, such as philosophy and the arts, shape thinking and character.",
      "Well-being at work: Judging people only by productivity leads to exhaustion. Rest and reflection also have value.",
      "Exam use: In GS-IV, use it for values beyond usefulness, contentment and criticism of purely instrumental thinking. In the Essay paper, use it for topics on development, nature, education and success."
    ],
    "related": [
      "butterflydream",
      "ecclesiastes",
      "epicurus",
      "commons",
      "hedonic",
      "goodhart"
    ],
    "reading": [
      [
        "Chuang Tzŭ: Mystic, Moralist, and Social Reformer, translated by Herbert A. Giles",
        "The two tree stories are in chapters 1 and 4. Free on Project Gutenberg.",
        "https://www.gutenberg.org/ebooks/59709"
      ],
      [
        "“Zhuangzi”, Stanford Encyclopedia of Philosophy",
        "",
        "https://plato.stanford.edu/entries/zhuangzi/"
      ]
    ]
  },
  "nasreddin": {
    "source": "Folk tales about Nasreddin Hodja, told from the Balkans to Central Asia and western China",
    "period": "Tales linked to a figure said to have lived in thirteenth-century Anatolia",
    "tradition": "Turkish, Persian and Sufi folk tradition",
    "type": "Anecdotes. An anecdote is a short, often funny story used to make a point.",
    "setup": [
      "Nasreddin Hodja is the hero of a huge number of short comic stories. Hodja is a title for a teacher or religious scholar. Tradition says that he lived in the thirteenth century in Anatolia, in present-day Turkey, and a tomb in the town of Akşehir is shown as his. In 2022, UNESCO added the tradition of telling Nasreddin tales to its list of the intangible cultural heritage of humanity.",
      "In one story, Nasreddin lost his ring inside his house. He searched the room for a while but could not find the ring. Then he went out into the yard and began to search there. His wife asked why he was looking in the yard when he had lost the ring in the room. Nasreddin explained that the room was too dark to see well, and there was much more light in the yard. In a later version of the joke, a drunk man looks for his lost key under a street lamp for the same reason.",
      "In another story, a neighbour came to Nasreddin’s gate and asked to borrow his donkey to carry goods to the next town. Nasreddin did not want to lend it, so he said that the donkey was not at home. At that moment, the donkey brayed loudly from behind the wall of the yard. The neighbour said that he could hear the donkey. Nasreddin was offended. He asked the neighbour whether he believed the donkey or his Hodja.",
      "Nasreddin often plays the fool, but the joke usually points at a common human habit. Sufi teachers, who follow the mystical tradition of Islam, have long used such stories. The writer Idries Shah noted that many Sufis use the ring story to criticise people who look for enlightenment in exotic places."
    ],
    "question": "Why do people look for answers where it is easy to look, instead of where the answers are?",
    "reveals": "The two tales expose two familiar errors in a comic way. The ring story shows people searching where searching is convenient, not where the answer lies. The donkey story shows a person using his status to deny plain evidence. Nasreddin’s foolishness works like a mirror. Listeners laugh at him, and then they recognise the same habits in themselves and in their leaders.",
    "readings": [
      [
        "Sufi reading",
        "Seekers often look for wisdom in distant and impressive places, while the real search lies close to home."
      ],
      [
        "Scientific reading",
        "Social scientists call the ring story the streetlight effect. Researchers sometimes study what is easy to measure instead of what matters. The linguist Noam Chomsky compared science to the drunk man who searches under the lamp post because that is where the light is."
      ],
      [
        "Political reading",
        "The donkey story mocks people in authority who expect their word to count for more than facts. Humour lets ordinary people criticise authority safely."
      ]
    ],
    "breaks": [
      "Jokes can be read in many ways. The same tale may make different points in different cultures.",
      "Nobody knows how many stories come from a real person. Many were added over centuries, and some come from Juha, an older jester of Arabic folklore.",
      "Humour points out a problem, but it does not explain how to solve it."
    ],
    "uses": [
      "Measuring what matters: Governments sometimes measure what is easy to count, such as money spent, instead of what matters, such as results. The streetlight effect warns against such convenient measurement.",
      "Official denial: Officials who deny obvious problems, such as a crumbling bridge or a disease outbreak, because admitting them is uncomfortable behave like Nasreddin at the gate.",
      "Teaching through humour: Simple, funny stories make ethical points easy to remember for citizens and trainees.",
      "Exam use: In GS-IV, use it for honesty, evidence-based decisions and the misuse of authority. In the Essay paper, use it for topics on wisdom, humour and truth."
    ],
    "related": [
      "blindmen",
      "goodhart",
      "gorilla",
      "gadfly",
      "dunningkruger",
      "raft"
    ],
    "reading": [
      [
        "“Nasreddin”, Wikipedia",
        "Free overview of the character, his history and many tales.",
        "https://en.wikipedia.org/wiki/Nasreddin"
      ],
      [
        "“Streetlight effect”, Wikipedia",
        "Explains the idea behind the ring story.",
        "https://en.wikipedia.org/wiki/Streetlight_effect"
      ]
    ]
  },
  "aesop": {
    "source": "Aesop’s Fables, number 87 in the Perry Index, a standard list of the fables. A related Buddhist story is the Suvannahamsa Jataka.",
    "period": "Fables linked to Aesop, a Greek storyteller said to have lived in the sixth century BCE",
    "tradition": "Greek fable tradition, with a Buddhist parallel",
    "type": "A fable. A fable is a short story, often about animals, that teaches a lesson.",
    "setup": [
      "According to tradition, Aesop was a Greek storyteller who lived in the sixth century BCE. Hundreds of short fables have been linked to his name, and writers have retold them for more than two thousand years.",
      "One fable is about a bird that laid golden eggs. In the version translated by George Fyler Townsend in the nineteenth century, the bird is a hen. A cottager and his wife owned a hen that laid a golden egg every day. They thought that the hen must have a great lump of gold inside it. So they killed the hen to get all the gold at once. Inside, they found that the hen was just like their other hens. By trying to become rich all at once, they lost the gold that they had been sure to receive day by day.",
      "In other versions, the bird is a goose. In the English version printed by William Caxton in the fifteenth century, the owner demanded that the goose lay two eggs a day. When the goose could not, the owner killed it.",
      "A similar story appears among the Buddhist Jataka tales, which tell of the Buddha’s earlier lives. A poor father was reborn as a swan with golden feathers. He visited his former family and let them pluck one feather at a time to sell. But the greedy mother plucked all his feathers at once. The feathers turned into ordinary ones, and when new feathers grew, they were no longer gold.",
      "The fable gave English the phrase killing the goose that lays the golden eggs. The phrase means destroying a valuable source of income out of greed or impatience."
    ],
    "question": "Why do people destroy a lasting source of value in the hope of quick gain?",
    "reveals": "The fable shows how greed and impatience can destroy the very thing that creates wealth. The golden eggs came slowly but reliably. The owners wanted everything at once, and they did not understand where the gold came from. Many real choices have the same shape. People, companies and governments often trade a steady long-term benefit for a large short-term gain, and they end up with neither.",
    "readings": [
      [
        "Moral reading",
        "Contentment and patience protect what we have. Greed ruins it."
      ],
      [
        "Economic reading",
        "A source of income must be protected, not consumed. Overtaxing an economy, overfishing a sea or overworking employees can kill the goose."
      ],
      [
        "Buddhist reading",
        "In the Jataka story, greed also betrays love and gratitude. The mother’s greed destroys both the gift and the bond with the giver."
      ]
    ],
    "breaks": [
      "The fable treats the golden eggs as a fixed gift. In real life, careful investment can sometimes increase the flow of value.",
      "The owners did not know how the hen worked, so the story is about ignorance as well as greed.",
      "Sometimes using up a resource quickly is necessary, for example in an emergency."
    ],
    "uses": [
      "Taxation: Very high tax rates can discourage the economic activity that produces tax revenue. Governments must avoid killing the goose.",
      "Natural resources: Overfishing, illegal sand mining and the overuse of groundwater destroy resources that could have supported people for generations.",
      "Public enterprises: Draining profitable public enterprises for short-term revenue can weaken their ability to invest and earn in future.",
      "Exam use: In GS-IV, use it for greed, patience, long-term thinking and sustainable development. In the Essay paper, use it for topics on sustainability, wealth and short-term thinking."
    ],
    "related": [
      "commons",
      "midas",
      "cobra",
      "threepoisons",
      "goodhart",
      "marshmallow"
    ],
    "reading": [
      [
        "Three Hundred Aesop’s Fables, translated by George Fyler Townsend",
        "The fable appears as “The Hen and the Golden Eggs”. Free on Project Gutenberg.",
        "https://www.gutenberg.org/ebooks/21"
      ],
      [
        "“The Goose that Laid the Golden Eggs”, Wikipedia",
        "Includes the Caxton version and the Jataka story.",
        "https://en.wikipedia.org/wiki/The_Goose_that_Laid_the_Golden_Eggs"
      ]
    ]
  },
  "blindmen": {
    "source": "Udana 6.4, a text in the Pali Canon of Buddhism. The story is also told in Jain and Hindu texts. The Sufi poet Rumi told a version about an elephant in a dark room.",
    "period": "Early Buddhist texts. Later versions spread across South Asia and Persia.",
    "tradition": "Indian (Buddhist, Jain and Hindu) and Sufi",
    "type": "A parable. A parable is a simple story that teaches a lesson.",
    "setup": [
      "Once, many religious teachers were staying in the city of Savatthi. They held different views and argued all the time. Some said that the world lasts forever, and others said that it does not. Each teacher said that only his own view was true and that all the others were foolish. Some monks told the Buddha about this. The Buddha answered with a story.",
      "Long ago, a king of Savatthi asked a servant to gather all the people in the city who had been born blind. Then the king had an elephant brought to them. Each blind person was allowed to touch only one part of the elephant. Some touched the head, some an ear, some a tusk, some a foot, and some the tail.",
      "The king then asked each of them, “What is an elephant like?” The people who had touched the head said, “An elephant is like a pot.” Those who had touched an ear said that it was like a winnowing basket. Those who had touched a tusk said that it was like a ploughshare. Those who had touched a foot said that it was like a pillar. Those who had touched the tip of the tail said that it was like a broom.",
      "Each group insisted that it was right and that the others were wrong. They began to argue, and soon they were hitting each other. The king watched them and was pleased.",
      "The Buddha said that the arguing teachers were like these blind people. Each of them knew only one part of the truth. So they fought and hurt each other with words."
    ],
    "question": "When each of us knows only part of the truth, how should we treat people who know a different part?",
    "reveals": "A person with limited experience can reach a conclusion that is confident but incomplete. The limited experience is not the real problem. The real problem is being sure that one’s own part is the whole truth. The parable warns against treating a true observation as the complete truth. It also warns against using one’s views as weapons against others.",
    "readings": [
      [
        "Buddhist reading",
        "In the Udana, the story is a warning against holding on too tightly to views. The blind people are not partly right in a way that can be put together. They are stuck in arguments that lead nowhere."
      ],
      [
        "Jain reading",
        "Jains use the story to explain anekantavada, the idea that reality has many sides. Each person’s description is true from his own point of view. A fuller understanding comes from putting these points of view together. Jain temples often show this scene."
      ],
      [
        "Modern reading",
        "No one has the complete truth, so people should talk to each other with humility. In the nineteenth century, the American poet John Godfrey Saxe wrote a poem about this story. His poem made this reading popular in English."
      ]
    ],
    "breaks": [
      "In the story, the king can see the whole elephant. So the story depends on someone having a complete view, even though its lesson is that people see only parts.",
      "Some claims are not partly true. They are simply false. Being humble about our own point of view does not mean that every view is equally correct.",
      "The blind people never share what they know with each other. If they had, they might have worked out what an elephant looks like. Good research and good discussion do exactly this."
    ],
    "uses": [
      "Government departments: Health, finance and environment departments often see the same problem in different ways. The story shows why they need to work together on policy.",
      "Dialogue between communities: The story encourages tolerance between religions and communities. But it does not say that all views are equally true.",
      "Committees and expert panels: A group with members from different fields sees more of a problem. But the group also needs a method to combine what its members know.",
      "Exam use: In the Essay paper, use it for topics on truth, tolerance and dialogue. In GS-IV, use it for tolerance and compassion, and when writing about Jain and Buddhist thought."
    ],
    "related": [
      "anekanta",
      "syadvada",
      "cave",
      "butterflydream",
      "arrow",
      "nasreddin"
    ],
    "reading": [
      [
        "Udana 6.4, translated by Bhikkhu Sujato, SuttaCentral",
        "Free, with the original Pali text alongside.",
        "https://suttacentral.net/ud6.4"
      ],
      [
        "“Jain Philosophy”, Internet Encyclopedia of Philosophy",
        "Explains anekantavada and the Jain theory of points of view.",
        "https://iep.utm.edu/jain/"
      ]
    ]
  },
  "chariot": {
    "source": "Katha Upanishad, Part 1, section 3, verses 3 to 11",
    "period": "One of the main Upanishads. Scholars usually date it to the later part of the first millennium BCE.",
    "tradition": "Indian philosophy (Upanishads)",
    "type": "A metaphor. A metaphor explains one thing by comparing it to another.",
    "setup": [
      "The chariot comparison is part of the teaching that Yama, the god of death, gives to the boy Nachiketa in the Katha Upanishad. Yama wants to explain how a person can reach the highest goal. So he compares a human being to a chariot.",
      "Yama says that the true self, the atman, is the owner of the chariot, who sits in it. The body is the chariot. The intellect, the part of us that judges and decides, is the driver. The mind is the reins. The senses, such as sight and hearing, are the horses. And the things that the senses are drawn to are the roads on which the horses run.",
      "Yama then describes two kinds of drivers. If the driver has no understanding and does not hold the reins firmly, the senses run wild, like bad horses that the driver cannot control. But if the driver has understanding and holds the reins firmly, the senses obey, like good horses.",
      "Yama says that a person whose intellect is weak and whose mind is not controlled does not reach the goal. Such a person keeps going round in the cycle of birth and death. But a person who has a wise intellect as the driver and a controlled mind as the reins reaches the end of the journey. Yama calls this the highest place of Vishnu.",
      "Yama also gives an order from lower to higher. Higher than the senses are their objects. Higher than the objects is the mind. Higher than the mind is the intellect. And higher than the intellect is the great self."
    ],
    "question": "Who is really in control of your life: your senses, your mind, or your judgement?",
    "reveals": "The chariot shows that a human being is made of different parts that can pull in different directions. The senses are strong, and they are easily attracted to pleasant things. The mind can either control them or be dragged along by them. What makes the difference is a clear and wise intellect. A good life is not about destroying the senses. It is about guiding them, the way a skilled driver guides strong horses towards a chosen place.",
    "readings": [
      [
        "Vedanta reading",
        "The true self is not the body, the mind or the senses. It is the owner who sits in the chariot. A person reaches liberation when the intellect is wise and the mind is disciplined."
      ],
      [
        "Psychological reading",
        "The comparison describes self-control. Our judgement must guide our attention and our desires. Such self-control is close to what psychologists today call self-regulation, which is one part of emotional intelligence."
      ],
      [
        "Comparison with Plato",
        "In his dialogue Phaedrus, the Greek philosopher Plato also describes the soul as a chariot. A charioteer drives two winged horses. One horse is noble and obeys commands. The other is badly behaved and hard to control. Two traditions that were far apart used the same picture for the struggle of self-control."
      ],
      [
        "Bhagavad Gita",
        "The Gita develops a similar idea. Arjuna says that the mind is restless and as hard to control as the wind. Krishna answers that the mind can be controlled through practice and detachment."
      ]
    ],
    "breaks": [
      "The comparison treats the senses and emotions as horses that must be controlled. Modern psychology shows that emotions also carry useful information, so they should be understood and not only held back.",
      "The comparison places the body and the senses at the bottom of a ladder. Such a ranking can lead to contempt for the body and for ordinary pleasures.",
      "The comparison says that a wise driver is needed, but it does not explain how a person becomes wise. The hardest part, training the intellect, is left out."
    ],
    "uses": [
      "Emotional intelligence: Officers face anger, pressure and temptation. The chariot is a simple picture of managing emotions instead of being driven by them.",
      "Digital distraction: Phones and apps pull the senses in many directions. A person needs clear goals and firm habits to stay in control of his attention.",
      "Integrity: Temptations such as bribes appeal first to desire. Good judgement acts like firm reins.",
      "Exam use: In GS-IV, use it for self-regulation, emotional intelligence, integrity and Indian moral thinkers. In the Essay paper, use it for topics on self-control, discipline and freedom."
    ],
    "related": [
      "nachiketa",
      "arjuna",
      "gunas",
      "threepoisons",
      "aggregates",
      "experience"
    ],
    "reading": [
      [
        "Katha Upanishad, translated by Swami Paramananda, in The Upanishads",
        "The chariot is in Part 1, section 3. Free on Project Gutenberg.",
        "https://www.gutenberg.org/ebooks/3283"
      ],
      [
        "Plato, Phaedrus, translated by Benjamin Jowett",
        "Plato’s picture of the soul as a chariot, for comparison. Free on Project Gutenberg.",
        "https://www.gutenberg.org/ebooks/1636"
      ],
      [
        "“Upanisads”, Internet Encyclopedia of Philosophy",
        "",
        "https://iep.utm.edu/upanisad/"
      ]
    ]
  },
  "ashtavakra": {
    "source": "Ashtavakra Gita, also called Ashtavakra Samhita. The story of Ashtavakra’s birth and his debate at King Janaka’s court is told in the Mahabharata, Vana Parva (Book 3).",
    "period": "The date of the Ashtavakra Gita is uncertain. Some scholars place it before the common era. Others date it to the eighth or the fourteenth century CE.",
    "tradition": "Indian philosophy (Advaita Vedanta)",
    "type": "A dialogue between a teacher and a king",
    "setup": [
      "The Mahabharata tells how Ashtavakra got his name. His father Kahoda was a scholar. One night, while Kahoda was reciting the Vedas, the unborn child in his mother’s womb spoke. He told his father that his recitation was not correct. Kahoda felt insulted in front of his students. In anger, he cursed the child to be born with a body bent in eight places. So the boy was named Ashtavakra, which means “bent in eight places”.",
      "Before the child was born, Kahoda went to the court of King Janaka to earn money. There he lost a debate to a scholar named Vandin, and he was drowned in water as a punishment. When Ashtavakra was twelve years old, he learned what had happened to his father. He went to Janaka’s court to face Vandin. The gatekeeper stopped him and said that only old and learned Brahmins could enter. Ashtavakra replied that a person is old because of his knowledge, not because of his years. He was allowed in. He defeated Vandin in debate, and his father was returned to him.",
      "The Ashtavakra Gita is a separate text. It presents a conversation between Ashtavakra and King Janaka. Janaka asks three questions. How is knowledge gained? How is liberation reached? How is detachment achieved?",
      "Ashtavakra answers that Janaka is not his body. He is pure awareness, the witness of everything. If Janaka rests in this awareness and sees himself as separate from the body, he will become happy, peaceful and free at once. Ashtavakra also says, “If one thinks of oneself as free, one is free, and if one thinks of oneself as bound, one is bound.”"
    ],
    "question": "Is freedom something you must earn, or something you only need to recognise?",
    "reveals": "Ashtavakra teaches that a person is bound mainly by a mistaken idea of who he is. We think that we are our body, our roles and our possessions, so we suffer when these change. The true self is pure awareness, and it is always free. Liberation is not a new state that has to be built slowly. It is seeing clearly what one already is. The birth story adds a second lesson. Wisdom does not depend on age, rank or appearance. A boy with a bent body defeated the most feared scholar at the court.",
    "readings": [
      [
        "Advaita Vedanta reading",
        "The Ashtavakra Gita is one of the most direct statements of non-dualism. There is only one reality, pure consciousness, and the self is that reality. Rituals and practices are less important than direct understanding."
      ],
      [
        "Psychological reading",
        "The verse about thinking oneself free or bound is often read as a teaching about the power of the mind. How a person sees himself shapes how free he feels."
      ],
      [
        "Reading about dignity",
        "Ashtavakra’s story challenges prejudice about age and physical appearance. A person’s worth lies in knowledge and character, not in the shape of the body."
      ],
      [
        "King Janaka as a model",
        "Janaka is remembered as a king who ruled a kingdom while staying free of attachment. The Bhagavad Gita (3.20) says that Janaka reached perfection through action alone. So Janaka shows that detachment does not require leaving the world."
      ]
    ],
    "breaks": [
      "Saying that a person is already free can ignore real chains, such as poverty, caste discrimination or illness. Freedom of the mind does not remove the need for social justice.",
      "The teaching can lead to withdrawal from the world. If nothing except awareness really matters, a person may feel no duty to act.",
      "Popular self-help books often misuse the idea that we become what we think. Used in this way, the idea can suggest that people who suffer are simply thinking in the wrong way."
    ],
    "uses": [
      "Stress and calm: Officers under heavy pressure can use the idea of a calm witness to respond to crises with a steady mind.",
      "Disability and dignity: Ashtavakra’s story supports the idea behind the Rights of Persons with Disabilities Act, 2016, that people must be judged by their abilities, not by their appearance.",
      "Merit over seniority: The gatekeeper’s rule that only old men may enter is a picture of any system that values age or rank more than knowledge.",
      "Detached public service: King Janaka ruled with full authority but without being possessed by power. Officials can use their authority fully while staying free of personal gain.",
      "Exam use: In GS-IV, use it for equanimity, emotional intelligence, dignity and Indian moral thinkers. In the Essay paper, use it for topics on freedom, the mind and merit."
    ],
    "related": [
      "maitreyi",
      "atman",
      "netineti",
      "chariot",
      "arjuna"
    ],
    "reading": [
      [
        "The Ashtavakra Gita, translated by John Richards, Wikisource",
        "A translation placed in the public domain by its translator. Free.",
        "https://en.wikisource.org/wiki/Ashtavakra_Gita"
      ],
      [
        "The Mahabharata, Vana Parva, translated by Kisari Mohan Ganguli",
        "The story of Ashtavakra’s birth and debate. Free on Project Gutenberg.",
        "https://www.gutenberg.org/ebooks/11894"
      ],
      [
        "“Vedanta, Advaita”, Internet Encyclopedia of Philosophy",
        "",
        "https://iep.utm.edu/advaita-vedanta/"
      ]
    ]
  },
  "twobirds": {
    "source": "Mundaka Upanishad 3.1.1–2. The same two verses appear in the Shvetashvatara Upanishad (4.6–7). The image first appears in a hymn of the Rig Veda (1.164.20).",
    "period": "The Rig Veda hymn is much older than the two Upanishads. Scholars date the Mundaka and Shvetashvatara Upanishads to the later centuries BCE.",
    "tradition": "Indian philosophy (Upanishads)",
    "type": "A metaphor. A metaphor explains one thing by comparing it to another.",
    "setup": [
      "The Mundaka Upanishad describes two birds sitting on the same tree. The two birds are close companions and always stay together.",
      "One bird eats the sweet fruit of the tree. The other bird does not eat anything. The second bird only watches.",
      "The Upanishad then explains the picture. A person lives on that same tree. He is sunk in the world and confused. He grieves because he feels helpless. But when he sees the other bird, the Lord, calm and full of greatness, his sorrow ends.",
      "The image is very old. It first appears in a hymn of the Rig Veda. The Shvetashvatara Upanishad later repeats the same two verses.",
      "Later teachers explained each part of the picture. The tree is the body. The fruits are the results of our actions, both pleasant and painful. The eating bird is the individual self, which enjoys and suffers. The watching bird is the higher Self, which sees everything but is not caught up in anything."
    ],
    "question": "Can you live your life and, at the same time, watch it calmly?",
    "reveals": "The two birds show two sides of a human being. One side is busy with experience. That side wants pleasant things and suffers when things go badly. The other side simply sees. The watching side does not grab anything or run away from anything. The Upanishad says that sorrow ends when the busy self notices the calm one. Freedom does not come from leaving the tree. Freedom comes from seeing clearly while still sitting on it.",
    "readings": [
      [
        "Advaita reading",
        "In the end, the two birds are one. The watching bird is the true Self. The eating bird is the same Self, wrongly identified with the body and the mind. When this mistake ends, only the witness remains."
      ],
      [
        "Dualist readings",
        "The two birds are really two. The eating bird is the individual soul, and the watching bird is God. The soul is freed from sorrow by turning to God with devotion, not by becoming God. Teachers of the dualist schools use these verses to argue that the soul and God are always distinct."
      ],
      [
        "Psychological reading",
        "Many modern teachers of mindfulness describe an observing self. A person can notice his own anger or fear without being carried away by it. The watching bird is an early picture of this ability."
      ]
    ],
    "breaks": [
      "The watching bird can seem cold and uninvolved. A good life also needs caring and acting, not only watching.",
      "The verses do not explain how the eating bird learns to see the other bird. The practice needed for this change is left out.",
      "Different schools read the same verses in opposite ways. So the image alone cannot settle whether the self and God are one or two."
    ],
    "uses": [
      "Emotional intelligence: An officer facing an angry crowd can notice his own rising anger before he responds. Calm observation leads to better decisions.",
      "Reflective practice: Good professionals step back after a decision and ask how and why they acted. Doctors, teachers and civil servants all learn in this way.",
      "Objectivity: A judge or an officer must be able to look at a case from outside, even while living in the same society as the people involved.",
      "Exam use: In GS-IV, use it for self-awareness, emotional intelligence and objectivity. In the Essay paper, use it for topics on detachment, the inner life and balance."
    ],
    "related": [
      "chariot",
      "atman",
      "ashtavakra",
      "maya",
      "netineti",
      "arjuna"
    ],
    "reading": [
      [
        "The Thirteen Principal Upanishads, translated by Robert Ernest Hume (1921)",
        "The two birds are in Mundaka 3.1 and Shvetashvatara 4.6–7. Free on the Internet Archive.",
        "https://archive.org/details/thirteenprincipa00hume"
      ],
      [
        "“Upanisads”, Internet Encyclopedia of Philosophy",
        "",
        "https://iep.utm.edu/upanisad/"
      ]
    ]
  },
  "burninghouse": {
    "source": "Lotus Sutra (Saddharma Pundarika Sutra), chapter 3",
    "period": "The Lotus Sutra was composed in India over the centuries around the start of the common era. Kumarajiva translated it into Chinese in 406 CE.",
    "tradition": "Indian (Mahayana Buddhist)",
    "type": "A parable. A parable is a simple story that teaches a lesson.",
    "setup": [
      "In the Lotus Sutra, the Buddha tells his disciple Shariputra a story. A very old and rich man owns a large house. The house is old and falling apart, and it has only one door. Many people live in it.",
      "One day, a fire breaks out on every side of the house. The rich man can get out safely. But his young sons are still inside, busy playing. They do not understand what fire is or what danger they are in. The father shouts to them to come out, but they ignore him and keep playing.",
      "The father thinks of a plan. He knows what his children love. So he calls out, “The carts you have always wanted are outside the door! There are carts pulled by goats, carts pulled by deer and carts pulled by bullocks. Come out quickly and play with them!” As soon as the boys hear this, they rush out of the burning house, pushing each other to be first.",
      "Once the boys are safe, they ask for the carts. The father does not give them goat carts or deer carts. Instead, he gives each child a large and beautiful carriage, decorated with jewels and pulled by white bullocks. The carriage is far better than anything he promised.",
      "The Buddha then asks Shariputra, “Did this father tell a lie?” Shariputra answers, “No. He used a skilful way to save his children’s lives. Even if he had given them nothing, he would not be a liar.”"
    ],
    "question": "Is it right to mislead people in order to save them?",
    "reveals": "The parable teaches skilful means, called upaya. A good teacher speaks to people in a way that they can understand and accept. The children could not understand the danger, so the father spoke to their desires instead. In the Lotus Sutra, the three kinds of carts stand for three Buddhist paths taught to people with different abilities. The single great carriage stands for the one vehicle, the Buddha’s path that leads everyone to full awakening. So the different teachings were all ways of leading people out of suffering.",
    "readings": [
      [
        "Mahayana reading",
        "The Buddha teaches different paths to different people, but all the paths finally lead to the same goal, Buddhahood. The earlier teachings were not false. They were suited to the listeners at that stage."
      ],
      [
        "Ethical reading",
        "The story defends a loving deception when the goal is to save someone from serious harm. The father’s intention, and the result of saving his children, justify his words."
      ],
      [
        "Critical reading",
        "Some readers point out that the story can be used to justify manipulation. Anyone in authority could claim that misleading people is for their own good."
      ]
    ],
    "breaks": [
      "The father knows for certain that the house is on fire. In real life, people in power are often less certain, and they may be wrong about the danger.",
      "The story treats people like children who cannot understand the truth. Adults in a democracy have a right to honest information.",
      "People who learn that they were misled may stop trusting the person who misled them, even if the deception was for their good."
    ],
    "uses": [
      "Public health: Governments sometimes use rewards, such as lotteries or free gifts, to encourage people to get vaccinated. Such rewards appeal to what people want in order to protect them.",
      "Nudges: Policy nudges, such as making pension savings the default choice, guide people towards good outcomes without forcing them. The ethical question is how far such guidance can go before it becomes manipulation.",
      "Disaster evacuation: Officials must find messages that make people leave dangerous areas quickly, especially people who do not believe that the danger is real.",
      "Exam use: In GS-IV, use it for means and ends, honesty, persuasion and the ethics of nudging. In the Essay paper, use it for topics on truth, communication and leadership."
    ],
    "related": [
      "cave",
      "noblelie",
      "raft",
      "arrow",
      "inquisitor",
      "trolley"
    ],
    "reading": [
      [
        "The Lotus Sutra, translated by H. Kern (1884), Wikisource",
        "The parable of the burning house is in chapter 3. Free.",
        "https://en.wikisource.org/wiki/Sacred_Books_of_the_East/Volume_21/Chapter_3"
      ],
      [
        "The Lotus of the Wonderful Law, by W. E. Soothill (1930)",
        "A shorter English version that includes the parable. Free on Project Gutenberg.",
        "https://www.gutenberg.org/ebooks/79267"
      ]
    ]
  },
  "syadvada": {
    "source": "Jain philosophy. The Jain thinker Samantabhadra, in his Aptamimamsa (verse 105), describes syadvada as a light that shows reality, alongside the knowledge of the enlightened. Later Jain logicians developed the method in detail.",
    "period": "Developed by Jain thinkers during the first millennium CE",
    "tradition": "Indian (Jain)",
    "type": "A method of reasoning. Syadvada means the method of saying “in some respect”.",
    "setup": [
      "Jain philosophy teaches that reality has many sides. This teaching is called anekantavada. Syadvada is the method that Jains use to speak about a many-sided reality without making mistakes.",
      "The method adds the word syat to a statement. Syat means “in some respect” or “from one point of view”. Adding syat shows that the statement is true, but only from a certain point of view.",
      "Jains explain the method with the example of a pot. A clay pot exists as a pot, made of clay, in this place and at this time. But the same pot does not exist as a piece of cloth, or as something made of gold, or in another place. So Jains say that in some respect the pot exists, and in some respect the pot does not exist.",
      "From these two basic statements, Jain thinkers build seven forms of statement, called the saptabhangi. In some respect, the pot exists. In some respect, the pot does not exist. In some respect, the pot both exists and does not exist. In some respect, the pot cannot be described, because both answers cannot be spoken at the same moment. The last three forms combine “cannot be described” with the first three.",
      "Jains believe that only a fully enlightened being sees all these aspects at once. Ordinary people should speak with this care, so that they do not mistake one side of the truth for the whole truth."
    ],
    "question": "How can we speak truthfully about something that has many sides?",
    "reveals": "Syadvada turns intellectual humility into a clear method. Every statement is tied to a point of view. When the point of view is stated, two statements that seem to contradict each other can both be true. So two people who seem to disagree may both be right, each from their own side. The method also teaches honesty about the limits of language. Some things cannot be fully captured in a single sentence.",
    "readings": [
      [
        "Jain reading",
        "Syadvada is not doubt. It is an exact way of stating truths that depend on a point of view. Samantabhadra placed syadvada beside the knowledge of the enlightened as a light that shows reality."
      ],
      [
        "Logical reading",
        "Modern logicians have compared syadvada with systems of logic that allow more than two truth values. The scientist J. B. S. Haldane wrote a paper on syadvada in the 1950s, and the logician Graham Priest discussed it in 2008."
      ],
      [
        "Criticism by other schools",
        "Critics, including Shankaracharya, argued that saying a thing both exists and does not exist is simply a contradiction. Jains reply that there is no contradiction, because each statement is made from a different point of view."
      ]
    ],
    "breaks": [
      "Adding “in some respect” to every sentence can make speech vague. In practice, people often need a clear answer.",
      "Some questions have one correct answer from every reasonable point of view. The method can be misused to avoid admitting a mistake.",
      "The seven forms are useful for careful thinking, but they are hard to apply to complicated real-world problems."
    ],
    "uses": [
      "Balanced answers: A good answer about a government scheme often says that the scheme succeeded in some respects and failed in others, and then explains each respect.",
      "Science and statistics: Scientific findings are true under certain conditions and within certain limits. Stating those conditions is a form of syadvada.",
      "Public debate: Headlines that show only one side of a complex issue mislead readers. Stating the point of view reduces conflict.",
      "Exam use: In GS-IV, use it for objectivity, tolerance and Jain thought. In the Essay paper, use it to build balanced arguments on complex topics."
    ],
    "related": [
      "anekanta",
      "blindmen",
      "butterflydream",
      "raft",
      "gargi"
    ],
    "reading": [
      [
        "“Jain Philosophy”, Internet Encyclopedia of Philosophy",
        "Explains the seven forms of statement.",
        "https://iep.utm.edu/jain/"
      ],
      [
        "Graham Priest, “Jaina Logic: A Contemporary Perspective”, History and Philosophy of Logic (2008)",
        "",
        "https://doi.org/10.1080/01445340701690233"
      ]
    ]
  },
  "angulimala": {
    "source": "Angulimala Sutta, Majjhima Nikaya 86, in the Pali Canon. The story of his early life was added later, in the commentaries.",
    "period": "An early Buddhist text. The Pali Canon was written down in Sri Lanka in the first century BCE.",
    "tradition": "Indian (Buddhist)",
    "type": "A narrative. A narrative is a story about events in a person’s life.",
    "setup": [
      "In the kingdom of King Pasenadi of Kosala, there lived a violent bandit named Angulimala. He killed people without mercy and wore their fingers as a necklace. His name means “garland of fingers”.",
      "One morning, the Buddha walked along the road towards the place where Angulimala lived. Cowherds and farmers warned the Buddha to turn back. The Buddha kept walking in silence.",
      "Angulimala saw the Buddha coming alone. He took his sword and followed him. But however fast Angulimala ran, he could not catch up with the Buddha, who was walking at a normal pace. Angulimala shouted, “Stop, monk!” The Buddha replied, “I have stopped, Angulimala. Now you stop.”",
      "Angulimala did not understand. The Buddha explained, “I have stopped harming living beings forever. You have not stopped.” These words reached Angulimala’s heart. He threw away his weapons and asked to become a monk.",
      "Later, King Pasenadi rode out with five hundred horsemen to capture Angulimala. The king found the bandit living peacefully as a monk. The king was amazed that the Buddha had tamed Angulimala without any stick or sword.",
      "Angulimala’s past did not vanish. On his almsround, people threw stones and sticks at him, and he came back bleeding. The Buddha told him to bear it patiently, because he was now facing the results of his own past actions."
    ],
    "question": "Can a person who has done terrible harm truly change?",
    "reveals": "The story shows that no one is beyond change. The Buddha did not fight Angulimala or give him a long sermon. The Buddha showed calm courage and spoke a few words that made Angulimala see himself. The story also shows that change does not erase consequences. Angulimala became a monk, but people still remembered his crimes, and he still suffered for them. Real change includes accepting responsibility for the past.",
    "readings": [
      [
        "Buddhist reading",
        "The story shows the power of the Buddha’s teaching. To stop means to give up violence and harmful action. Anyone who stops can begin a new life, however bad the past has been."
      ],
      [
        "Reading about justice",
        "The king came to punish Angulimala, but the bandit had already stopped. The story asks what punishment is for. If a person has truly changed, is punishment still needed? Scholars use the story in discussions of rehabilitation and justice."
      ],
      [
        "The later commentary",
        "The Pali commentaries add a story about Angulimala’s early life. He was born a gentle boy named Ahimsaka, which means “harmless”. Jealous fellow students turned his teacher against him, and the teacher demanded a thousand human fingers as his fee. The original discourse does not contain this background. The commentators probably added it to explain how a good young man became a killer."
      ],
      [
        "The act of truth",
        "In the discourse, the monk Angulimala meets a woman in a difficult childbirth. He says that since his new birth as a monk, he has not knowingly killed any living being, and he wishes that by this truth she and her child will be safe. His new life becomes a source of healing."
      ]
    ],
    "breaks": [
      "The Buddha’s success depends on his special wisdom. Most offenders will never meet such a teacher, so society cannot rely on sudden conversions.",
      "The story says little about the victims and their families. Real justice must also consider what they need.",
      "The story may seem to let a murderer escape the law by joining a religious order. Modern law cannot accept this."
    ],
    "uses": [
      "Prison reform: In the 1990s, Kiran Bedi introduced Vipassana meditation classes in Tihar Jail as part of her reforms. In the United Kingdom, the Buddhist prison chaplaincy is named Angulimala after this story.",
      "Surrender and rehabilitation: Surrender policies for armed rebels are based on the idea that people who give up violence can return to society.",
      "Second chances: Employers and communities must decide whether to accept people who have served their sentences.",
      "Exam use: In GS-IV, use it for compassion, rehabilitation, moral courage and the Buddha as a moral teacher. In the Essay paper, use it for topics on crime and punishment, forgiveness and the possibility of change."
    ],
    "related": [
      "kisagotami",
      "arrow",
      "karma",
      "threepoisons",
      "milgram",
      "gyges"
    ],
    "reading": [
      [
        "Majjhima Nikaya 86, translated by Bhikkhu Sujato, SuttaCentral",
        "Free, with the original Pali text alongside.",
        "https://suttacentral.net/mn86"
      ],
      [
        "“Angulimala”, Wikipedia",
        "Free overview, including the later commentary and the story’s use in prison chaplaincy.",
        "https://en.wikipedia.org/wiki/A%E1%B9%85gulim%C4%81la"
      ]
    ]
  },
  "aggregates": {
    "source": "Samyutta Nikaya 5.10 (the verses of the nun Vajira) and the Questions of King Milinda (Milindapanha), Book 2, chapter 1. Nagarjuna’s Madhyamaka philosophy develops the idea further.",
    "period": "The Pali verses are early Buddhist texts. The Questions of King Milinda was compiled around the start of the common era. Nagarjuna lived around the second century CE.",
    "tradition": "Indian (Buddhist)",
    "type": "An analogy. An analogy explains an idea by comparing it to something familiar.",
    "setup": [
      "Buddhism teaches that a person is made of five changing groups, called the five aggregates. They are the body, feelings, perceptions, mental formations such as habits and intentions, and consciousness. The Buddha taught that none of these five groups is a permanent self.",
      "In one early text, the nun Vajira was meditating alone in a forest. Mara, the tempter, tried to frighten her with questions. He asked, “Who created this being? Where does the being arise, and where does it end?” Vajira replied, “Why do you believe that there is such a thing as a being? This is only a heap of conditions. When the parts are put together, we use the word chariot. In the same way, when the aggregates are present, we use the word being.”",
      "A later text, the Questions of King Milinda, turns the same idea into a dialogue. The Greek king Milinda asked the monk Nagasena his name. Nagasena said that Nagasena is only a name, and that no permanent person can be found behind it. So Nagasena asked the king how he had come, and the king said, “By chariot.” Nagasena asked, “Is the pole the chariot? Are the wheels the chariot?” Each time, the king said no. Nagasena asked, “Is the chariot something apart from these parts?” Again the king said no. The king agreed that chariot is a name for the parts put together. Nagasena said that, in the same way, Nagasena is a name for the five aggregates put together.",
      "Later, the philosopher Nagarjuna took the idea further. He argued that everything, not only a person, exists in dependence on parts, causes and names. Nothing has a fixed nature of its own. He called this emptiness."
    ],
    "question": "If you are only a collection of changing parts, who are you?",
    "reveals": "The chariot shows that a name can point to something real without pointing to a single, fixed thing. A chariot really carries the king, but there is no extra thing called chariot apart from its parts. In the same way, a person really acts, thinks and feels, but no unchanging self is hidden inside. Buddhists see this understanding as freeing. When we stop clinging to a fixed self, we cling less to pride, fear and possessions.",
    "readings": [
      [
        "Early Buddhist reading",
        "The self is a useful label, not a hidden essence. Seeing the five aggregates as changing and without a permanent self weakens attachment and ends suffering."
      ],
      [
        "Madhyamaka reading (Nagarjuna)",
        "Everything is empty of a fixed nature, because everything exists in dependence on other things. In his main work, Nagarjuna says that dependent arising is emptiness, and that emptiness is the middle way between saying that things exist absolutely and saying that they do not exist at all."
      ],
      [
        "Western parallels",
        "The Scottish philosopher David Hume described the self as a bundle of perceptions. Scholars point out that the modern philosopher Derek Parfit reached a view close to both Hume’s idea and the Buddhist idea of the five aggregates."
      ]
    ],
    "breaks": [
      "If there is no permanent self, it is hard to explain who is responsible for past actions or who is reborn. Buddhist schools have long debated this problem.",
      "A chariot is a lifeless object that people build and name. A living person has memory and consciousness, so the comparison may be too simple.",
      "Some people misread the teaching as saying that persons do not exist at all. The teaching says that persons exist, but not as fixed, unchanging selves."
    ],
    "uses": [
      "Personal change: A person who has made mistakes is not fixed forever. Seeing the self as changing supports rehabilitation and growth.",
      "Ego in public life: Leaders who cling to a fixed image of themselves find it hard to admit mistakes. Seeing the self as changing makes humility easier.",
      "Organisations and law: A company or a government department is also a name for many changing parts. Company law treats such a body as a legal person for practical purposes.",
      "Exam use: In GS-IV, use it for attitude, humility and the Buddha as a moral teacher. In the Essay paper, use it for topics on identity, change and the self."
    ],
    "related": [
      "theseus",
      "chariot",
      "atman",
      "netineti",
      "raft",
      "butterflydream"
    ],
    "reading": [
      [
        "Samyutta Nikaya 5.10, translated by Bhikkhu Sujato, SuttaCentral",
        "The verses of the nun Vajira. Free.",
        "https://suttacentral.net/sn5.10"
      ],
      [
        "“Mind in Indian Buddhist Philosophy”, Stanford Encyclopedia of Philosophy",
        "Explains the chariot example in the Questions of King Milinda.",
        "https://plato.stanford.edu/entries/mind-indian-buddhism/"
      ],
      [
        "“Nagarjuna”, Stanford Encyclopedia of Philosophy",
        "",
        "https://plato.stanford.edu/entries/nagarjuna/"
      ]
    ]
  },
  "threepoisons": {
    "source": "Buddhist teaching found throughout the Pali Canon, for example in the discourse on the unskilful roots (Anguttara Nikaya 3.69) and the Fire Sermon (Samyutta Nikaya 35.28). Mahayana and Tibetan Buddhism call the three roots the three poisons.",
    "period": "Early Buddhist texts, written down in the first century BCE, and later Buddhist traditions",
    "tradition": "Indian (Buddhist)",
    "type": "A concept, taught through the image of fire",
    "setup": [
      "According to the Pali texts, the Buddha once stayed at Gaya Head, a hill near Gaya, with a thousand monks. There he gave a teaching that is now called the Fire Sermon.",
      "The Buddha said, “Monks, everything is burning.” He explained what he meant. The eye is burning. The things we see are burning. The ear, the nose, the tongue, the body and the mind are all burning. Even our feelings, whether pleasant, painful or neutral, are burning.",
      "Then the Buddha asked, “Burning with what?” He answered, “Burning with the fires of greed, hatred and delusion.” He added that everything is also burning with birth, old age, death, sorrow and pain.",
      "In another discourse, the Buddha calls greed, hatred and delusion the three unskilful roots. A person who is greedy, hateful or deluded acts badly through body, speech and mind. Such a person may even make others suffer through imprisonment or punishment, thinking, “I am powerful.”",
      "Later Buddhist traditions call these three roots the three poisons. Tibetan paintings of the wheel of life show them at the centre of the wheel as three animals: a rooster for greed, a snake for hatred and a pig for delusion. Their opposites are generosity, loving-kindness and wisdom."
    ],
    "question": "What are the deep causes of the harm that people do?",
    "reveals": "The teaching says that most wrong actions grow from three roots. Greed makes us grab more than we need. Hatred makes us push away or hurt what we dislike. Delusion makes us see the world wrongly. The image of fire shows how these forces feel from inside: restless, consuming and hard to control. But a fire can be put out. The word nirvana means blowing out, and the Pali texts describe nirvana as the ending of greed, hatred and delusion.",
    "readings": [
      [
        "Buddhist reading",
        "The three roots keep beings trapped in the cycle of rebirth. The Buddha’s path weakens these roots through ethical conduct, meditation and wisdom, until they are completely put out."
      ],
      [
        "Psychological reading",
        "The three roots match patterns that modern psychology also studies: craving and addiction, anger and aggression, and biased or distorted thinking."
      ],
      [
        "Social reading",
        "The three poisons do not stay inside individuals. Greed can shape economies, hatred can shape politics, and delusion can spread through propaganda and false information."
      ]
    ],
    "breaks": [
      "The teaching places the causes of harm inside the mind. But poverty, unjust laws and weak institutions also cause harm, and they need social solutions.",
      "Not every desire is greed, and not every anger is hatred. Anger at injustice can be a healthy moral response.",
      "The three roots are broad categories. Real motives are often mixed and hard to separate."
    ],
    "uses": [
      "Corruption: Greed is the root of bribery and the misuse of public money. Ethics training and transparency try to weaken this root.",
      "Communal violence and hate speech: Hatred spreads quickly through rumours and social media, and it can turn neighbours against each other.",
      "Misinformation: Delusion grows when people accept false information that fits their fears. Fact-checking and education help to reduce it.",
      "Exam use: In GS-IV, use it to explain the roots of unethical behaviour, and for emotional intelligence and the Buddha as a moral teacher. In the Essay paper, use it for topics on greed, anger, conflict and inner peace."
    ],
    "related": [
      "arrow",
      "kisagotami",
      "angulimala",
      "raft",
      "chariot",
      "gunas"
    ],
    "reading": [
      [
        "Anguttara Nikaya 3.69, translated by Bhikkhu Sujato, SuttaCentral",
        "The discourse on the three unskilful roots. Free.",
        "https://suttacentral.net/an3.69"
      ],
      [
        "Samyutta Nikaya 35.28, translated by Bhikkhu Sujato, SuttaCentral",
        "The Fire Sermon. Free.",
        "https://suttacentral.net/sn35.28"
      ]
    ]
  },
  "gunas": {
    "source": "Samkhya philosophy, especially the Samkhya Karika of Ishvarakrishna (around the fourth century CE). The Bhagavad Gita explains the gunas in chapters 14, 17 and 18.",
    "period": "The idea is older than the Samkhya Karika. The Gita is usually dated between the last centuries BCE and the first centuries CE.",
    "tradition": "Indian philosophy (Samkhya and the Bhagavad Gita)",
    "type": "A framework. A framework is a set of ideas used to understand many different things.",
    "setup": [
      "Samkhya, one of the oldest schools of Indian philosophy, teaches that nature, called prakriti, is made of three qualities. These qualities are called the gunas. The word guna originally means a strand, like one of the strands twisted together in a rope.",
      "The first guna is sattva. Sattva is light, clarity, calm and goodness. The second guna is rajas. Rajas is energy, activity, desire and restlessness. The third guna is tamas. Tamas is heaviness, darkness, laziness and confusion. Everything in nature, including every person, is a mixture of all three gunas. In each person and in each situation, one guna is usually stronger than the other two.",
      "In the Bhagavad Gita, Krishna explains to Arjuna how each guna binds a person. Sattva binds a person through attachment to happiness and knowledge. Rajas binds a person through attachment to action. Tamas binds a person through carelessness, laziness and sleep.",
      "Krishna then uses the gunas to describe many things. For example, he describes three kinds of giving. A sattvic gift is given gladly, at the right place and time, to a worthy person who cannot give anything back. A rajasic gift is given in the hope of getting something in return, or given unwillingly. A tamasic gift is given at the wrong time and place, to an unworthy person, with contempt.",
      "Krishna says that the highest state is to rise above all three gunas. A person who reaches this state stays calm in pleasure and pain, in praise and blame, and in honour and dishonour."
    ],
    "question": "What forces shape the way we think, act and live?",
    "reveals": "The gunas give a simple map of human behaviour. Clarity, drive and inertia are present in everyone. The same act can be done in a sattvic, rajasic or tamasic way, and the quality of the act changes with the mind behind it. The framework does not only judge people. The framework also invites each person to notice which quality is ruling him at a given moment, and to strengthen clarity.",
    "readings": [
      [
        "Samkhya reading",
        "The gunas are the basic building blocks of nature. When the three gunas are balanced, nature is still. When the balance is disturbed, the world develops. The true self, called purusha, is separate from the gunas and only watches them."
      ],
      [
        "Gita reading",
        "The gunas explain differences in faith, food, work, giving and character. The goal is to grow in sattva, and finally to go beyond all three gunas through devotion and selfless action."
      ],
      [
        "Psychological reading",
        "Some modern writers compare the gunas to states of mind, such as calm focus, anxious drive and low energy. These comparisons are loose, but they show why the idea is still used."
      ],
      [
        "Social criticism",
        "In chapter 18, the Gita links the gunas to the duties of the four varnas. Critics argue that this link was used to justify the caste hierarchy, by claiming that people are born with fixed natures."
      ]
    ],
    "breaks": [
      "The gunas are not a scientific theory. They cannot be measured, so they should not be used to label people with certainty.",
      "Calling a food, a person or a group tamasic can become a way to look down on others.",
      "Every person is a mixture of all three gunas. The framework becomes less useful when it is used to sort people into fixed boxes."
    ],
    "uses": [
      "Governance: Tamas in administration looks like delay, red tape and indifference. Rajas looks like hurry, ambition and show. Sattva looks like calm, fair and well-informed decisions.",
      "Charity and CSR: The Gita’s three kinds of giving help us to judge the motive behind a donation, not only its size.",
      "Leadership: A leader can ask whether a decision comes from clarity, from ambition or from inertia.",
      "Exam use: In GS-IV, use it for attitude, motivation, public service values and Indian moral thinkers. In the Essay paper, use it for topics on character, work and the quality of action."
    ],
    "related": [
      "dharma",
      "arjuna",
      "chariot",
      "threepoisons",
      "karma",
      "atman"
    ],
    "reading": [
      [
        "The Song Celestial (Bhagavad Gita), translated by Edwin Arnold (1885)",
        "Chapters 14, 17 and 18 explain the gunas. Free on Project Gutenberg.",
        "https://www.gutenberg.org/ebooks/2388"
      ],
      [
        "“Sankhya”, Internet Encyclopedia of Philosophy",
        "",
        "https://iep.utm.edu/sankhya/"
      ]
    ]
  },
  "karma": {
    "source": "Brihadaranyaka Upanishad 3.2.13 and 4.4.5. The Buddha’s teaching on intention is in Anguttara Nikaya 6.63. Jain philosophy gives its own account of karma.",
    "period": "From the early Upanishads, around the seventh or sixth century BCE, and developed in Buddhist and Jain thought",
    "tradition": "Indian (Hindu, Buddhist and Jain)",
    "type": "A concept. The word karma means action.",
    "setup": [
      "At King Janaka’s court, the scholar Artabhaga questioned Yajnavalkya. Artabhaga asked what happens to a person after death, when his speech goes into fire, his breath into the wind and his eye into the sun. What is left of that person then?",
      "Yajnavalkya did not answer in front of the gathering. He said, “Artabhaga, take my hand. This question is only for the two of us, not for a public debate.” The two men went aside and talked privately. The Upanishad says that what they talked about was karma, and what they praised was karma. A person becomes good by good action and bad by bad action.",
      "Later in the same Upanishad, the teaching is stated clearly. As a person acts and behaves, so he becomes. The one who does good becomes good. The one who does evil becomes evil. A person’s desires shape his decisions, his decisions shape his actions, and his actions shape what he becomes.",
      "The Buddha gave the idea a new focus. He said, “It is intention that I call karma.” For the Buddha, what matters most is the intention behind an action, whether the action is done through body, speech or mind.",
      "Jain thinkers explained karma in yet another way. For them, karma is a very fine kind of matter. This matter sticks to the soul whenever a person acts with passion, and it weighs the soul down. The soul becomes free when all the karmic matter is removed."
    ],
    "question": "Do our actions shape who we become and what happens to us?",
    "reveals": "The idea of karma says that actions have consequences, not only in the world but also in the person who acts. Every choice leaves a mark on character. Good actions build a good person, and harmful actions build a harmful one. In its religious form, the idea extends across lifetimes and explains rebirth. In its everyday form, the idea reminds us that we are responsible for what we do, and that habits formed today shape our future.",
    "readings": [
      [
        "Upanishadic reading",
        "Karma links action, desire and rebirth. A person keeps being reborn according to his actions until he knows the Self and becomes free from desire."
      ],
      [
        "Buddhist reading",
        "Karma is about intention. The same outward act can have a different moral weight, depending on the mind behind it. Karma is not fixed fate, because present actions can change what past actions lead to."
      ],
      [
        "Gita reading",
        "The Bhagavad Gita teaches nishkama karma, which means acting without attachment to results. Action done in this spirit does not bind a person."
      ],
      [
        "Social criticism",
        "Social reformers, including B. R. Ambedkar, criticised the use of karma to justify caste inequality and poverty, as if people deserved their suffering because of actions in past lives."
      ]
    ],
    "breaks": [
      "The link between actions in a past life and suffering in this life cannot be tested. It is a matter of faith, not evidence.",
      "Karma can be misused to blame victims. A child born into poverty or with a disability has done nothing to deserve it.",
      "Karma can lead to fatalism, the belief that nothing can be changed. Fatalism discourages action against injustice."
    ],
    "uses": [
      "Personal responsibility: Public servants are accountable for the results of their decisions. They cannot blame fate or the system for their own choices.",
      "Character and habits: Small acts of honesty or dishonesty, repeated over time, become character. Such habit-building is the everyday meaning of karma.",
      "Social justice: Policy must reject any idea that the poor or disadvantaged deserve their condition. Welfare and rights are based on human dignity, not on past deeds.",
      "Exam use: In GS-IV, use it for accountability, intention and consequences, and for Indian moral thinkers. In the Essay paper, use it for topics on action, responsibility and fate."
    ],
    "related": [
      "dharma",
      "arjuna",
      "gunas",
      "angulimala",
      "threepoisons",
      "nachiketa"
    ],
    "reading": [
      [
        "The Thirteen Principal Upanishads, translated by Robert Ernest Hume (1921)",
        "Artabhaga’s question is Brihadaranyaka 3.2.13, and “as one acts, so one becomes” is 4.4.5. Free on the Internet Archive.",
        "https://archive.org/details/thirteenprincipa00hume"
      ],
      [
        "Anguttara Nikaya 6.63, translated by Bhikkhu Sujato, SuttaCentral",
        "The Buddha on intention and karma. Free.",
        "https://suttacentral.net/an6.63"
      ]
    ]
  },
  "dharma": {
    "source": "Mahabharata, Vana Parva (the questions of the Yaksha), and Bhagavad Gita 3.35 and 18.47",
    "period": "The Mahabharata took shape over many centuries, roughly between 400 BCE and 400 CE.",
    "tradition": "Indian philosophy (the epics and the Bhagavad Gita)",
    "type": "A framework. Dharma means what holds life together: duty, law, justice and right conduct.",
    "setup": [
      "Dharma is one of the most important ideas in Indian thought. It has many meanings, including duty, law, justice and the right way to live. Svadharma means one’s own dharma, the duties that belong to a person’s own role and nature.",
      "The Mahabharata tells a famous story about dharma. During their exile, the five Pandava brothers became very thirsty in a forest. One by one, Nakula, Sahadeva, Arjuna and Bhima went to a lake to fetch water. At the lake, a voice from a crane told each of them to answer its questions before drinking. Each brother ignored the voice, drank the water and fell dead.",
      "Then Yudhishthira reached the lake. He agreed to answer the questions. The voice belonged to a Yaksha, who asked him many questions. One question was, “What is the path?” Yudhishthira answered that reasoning is uncertain, scriptures differ, and no sage’s opinion is final. The truth about dharma is hidden deep, as if in a cave. So the path is the one that great people have followed.",
      "The Yaksha was pleased and said that one brother could be brought back to life. Yudhishthira chose Nakula, not the mighty Bhima or Arjuna. He explained that his father had two wives. Kunti’s son, Yudhishthira himself, was alive, so a son of Madri should also live. The Yaksha then revealed that he was Dharma himself, and he brought all four brothers back to life.",
      "The Bhagavad Gita adds the idea of svadharma. Krishna tells Arjuna that it is better to do one’s own duty imperfectly than to do another person’s duty well."
    ],
    "question": "How do we know what is right, when reason, scripture and experts disagree?",
    "reveals": "The Yaksha’s story shows two sides of dharma. First, dharma is hard to know. Rules and arguments do not settle every case, so people must also learn from the example of good people. Second, dharma means fairness beyond self-interest. Yudhishthira could have saved his strongest brother. Instead, he chose to be fair to his stepmother. The Gita’s idea of svadharma adds that each person must do the duties of his own role honestly, instead of copying someone else’s role.",
    "readings": [
      [
        "Dharma as the duty of a role",
        "Each role in society, such as ruler, teacher, parent or soldier, has its own duties. The Mahabharata’s long teaching on rajadharma, the duty of kings, describes how rulers must protect their people and act justly."
      ],
      [
        "Dharma as subtle",
        "The epics often say that dharma is subtle. The right action depends on the situation, and good people can disagree about it. For this reason, the Mahabharata is full of hard cases rather than simple rules."
      ],
      [
        "Svadharma and caste",
        "The Gita links svadharma to the duties of the four varnas. Critics argue that this link made duty depend on birth, and that it was used to keep people in fixed social roles."
      ],
      [
        "Modern reading",
        "Many modern thinkers read svadharma as the duty that comes from a person’s own abilities, commitments and chosen profession, not from birth."
      ]
    ],
    "breaks": [
      "Following the example of great people is useful, but great people also make mistakes. The Mahabharata itself shows its heroes doing wrong.",
      "Svadharma can become an excuse to ignore wider duties, such as speaking up against injustice outside one’s own role.",
      "Duties based on birth conflict with the modern values of equality and free choice of profession."
    ],
    "uses": [
      "Professional ethics: Doctors, judges and civil servants each have duties that come from their role. Codes of conduct turn these duties into clear rules.",
      "Fairness in decisions: Yudhishthira’s choice of Nakula is a model of impartial fairness that places justice above personal advantage.",
      "Hard cases: Officials often face situations where the rules give no clear answer. They must then rely on good judgement and on the example of honest officers.",
      "Exam use: In GS-IV, use it for duty, impartiality, role conflict and Indian moral thinkers. In the Essay paper, use it for topics on duty, justice and right conduct."
    ],
    "related": [
      "arjuna",
      "gunas",
      "karma",
      "trolley",
      "veil",
      "gadfly"
    ],
    "reading": [
      [
        "“Yaksha Prashna”, Wikipedia",
        "Free summary of the Yaksha’s questions and Yudhishthira’s answers.",
        "https://en.wikipedia.org/wiki/Yaksha_Prashna"
      ],
      [
        "The Song Celestial (Bhagavad Gita), translated by Edwin Arnold (1885)",
        "Svadharma is in chapters 3 and 18. Free on Project Gutenberg.",
        "https://www.gutenberg.org/ebooks/2388"
      ]
    ]
  },
  "maya": {
    "source": "Shvetashvatara Upanishad 4.10. The rope and snake example comes from Gaudapada’s Mandukya Karika, and later Advaita teachers used it widely.",
    "period": "The word maya already appears in the Rig Veda. Gaudapada wrote around the sixth century CE.",
    "tradition": "Indian philosophy (Vedanta)",
    "type": "A concept, explained through a metaphor. Maya is often translated as illusion.",
    "setup": [
      "In the oldest Indian texts, the word maya means a special power to create forms. In the Rig Veda, the god Indra uses his maya to take many different shapes.",
      "Later, the Shvetashvatara Upanishad gave the word a deeper meaning. The Upanishad says that nature is maya, and that the great Lord is the one who uses maya. The world is like a magic show, and God is like the magician.",
      "Advaita Vedanta teachers explained maya with a simple example. A man walks along a path in the evening, when the light is fading. He sees a long, coiled shape on the ground and thinks that it is a snake. He is frightened and jumps back.",
      "Then someone brings a lamp. In the light, the man sees that the shape is only a piece of rope. The snake disappears at once, and so does his fear. But the rope was there all along. Nothing had changed except his understanding.",
      "According to Advaita, the world of separate things is like the snake, and Brahman, the one reality, is like the rope. Because of ignorance, people see a world of separate things, and they suffer. When true knowledge comes, they see the one reality that was always there."
    ],
    "question": "Is the world we see the real world, or only the way it appears to us?",
    "reveals": "Maya teaches that appearance and reality can differ. Our fears and desires are often based on how things seem, not on how they are. The snake was not real, but the fear was real, and so was the suffering. Knowledge does not destroy the rope. Knowledge only removes the mistake. In Advaita, maya is neither simply real nor simply unreal. The world is experienced, so it is not nothing. But the world is not the final truth either.",
    "readings": [
      [
        "Advaita reading",
        "Only Brahman is ultimately real. The world of many separate things is an appearance produced by maya and ignorance, and liberation means seeing through this appearance. Scholars disagree, however, about whether Shankaracharya himself treated the world as an illusion, or whether this view developed among later Advaita teachers."
      ],
      [
        "Vishishtadvaita reading (Ramanuja)",
        "Ramanuja rejected the idea that the world is an illusion. He held that the world of living beings and matter is real, and that it forms the body of Brahman."
      ],
      [
        "Swami Vivekananda",
        "Vivekananda said that maya is not a theory to explain the world. He called it a simple statement of facts about our lives, which are full of contradictions: good and evil, pleasure and pain, always mixed together."
      ]
    ],
    "breaks": [
      "If the world is only an appearance, poverty and injustice may also seem unimportant. Critics say that the idea can weaken the will to improve society.",
      "The rope and snake example needs someone who can bring a lamp and see the rope. It does not show how anyone can step outside the world to check what is real.",
      "The word illusion is often misunderstood. Many teachers stress that maya does not mean that the world does not exist, only that the world is not the final reality."
    ],
    "uses": [
      "Misinformation and deepfakes: False images and news can make people afraid of snakes that are really ropes. Checking the facts is like bringing a lamp.",
      "Public perception: People’s fear of a problem, such as crime, can be very different from what the data shows. Good policy needs both the facts and an understanding of people’s fears.",
      "Consumer culture: Advertising creates desire through appearances. Maya is a reminder to look at what a product really is.",
      "Exam use: In GS-IV, use it for perception and reality, and when writing about Shankaracharya and Ramanuja. In the Essay paper, use it for topics on truth and appearance, and on media and illusion."
    ],
    "related": [
      "cave",
      "atman",
      "netineti",
      "butterflydream",
      "twobirds",
      "experience"
    ],
    "reading": [
      [
        "Swami Vivekananda, “Maya and Illusion”, Wikisource",
        "Vivekananda’s lecture on maya. Free.",
        "https://en.wikisource.org/wiki/The_Complete_Works_of_Swami_Vivekananda/Volume_2/Jnana-Yoga/Maya_and_Illusion"
      ],
      [
        "“Ramanuja”, Internet Encyclopedia of Philosophy",
        "Explains why Ramanuja rejected the doctrine of illusion.",
        "https://iep.utm.edu/ramanuja/"
      ]
    ]
  },
  "netineti": {
    "source": "Brihadaranyaka Upanishad 2.3.6, 3.9.26, 4.2.4, 4.4.22 and 4.5.15",
    "period": "The Brihadaranyaka is one of the oldest Upanishads. Scholars usually date it to around the seventh or sixth century BCE.",
    "tradition": "Indian philosophy (Upanishads and Advaita Vedanta)",
    "type": "A method. Neti neti means “not this, not this”.",
    "setup": [
      "At King Janaka’s court, the scholar Vidagdha Shakalya questioned Yajnavalkya. Shakalya asked, “How many gods are there?” Yajnavalkya first gave the number from an old prayer: three thousand three hundred and six.",
      "Shakalya asked again, “But really, how many gods are there?” Yajnavalkya said, “Thirty-three.” Shakalya asked the same question again and again. Each time, Yajnavalkya gave a smaller number: six, then three, then two, then one and a half, and finally one. By removing what was less basic each time, the answer came down to one.",
      "The Upanishad uses a similar method to describe the Self. The Self cannot be pointed to like an object. So the Upanishad describes the Self only by saying what it is not. The Upanishad says, “The Self is not this, not this.” The Self cannot be grasped, because it is beyond grasping. The Self cannot be destroyed, and nothing can cling to it.",
      "Advaita teachers later used neti neti as a method of self-inquiry. The method works like peeling away layers. A person asks, “Am I this body?” The body changes and grows old, so the answer is: not this. The person asks, “Am I my thoughts?” Thoughts come and go, so the answer is again: not this. Whatever can be observed is not the observer. What remains, after everything else is set aside, is the Self."
    ],
    "question": "Can we know something by understanding what it is not?",
    "reveals": "Some things are too deep to be described directly. Every word we use points to an object with limits. But in the Upanishad’s view, the Self has no limits. So the safest way to speak about the Self is to deny every limited description. Neti neti does not deny that anything exists. Neti neti clears away mistaken ideas, so that what is real can be recognised.",
    "readings": [
      [
        "Advaita reading",
        "Shankaracharya used neti neti to remove the wrong ideas that ignorance places on Brahman. His student Sureshvara explained that the purpose of the negation is not emptiness. Its purpose is to reveal identity with Brahman."
      ],
      [
        "Negative theology",
        "Christian mystics such as Pseudo-Dionysius the Areopagite, around the sixth century CE, also described God by saying what God is not. This way of speaking about God is called apophatic theology."
      ],
      [
        "Self-inquiry",
        "The twentieth-century teacher Ramana Maharshi taught a related method. Instead of only denying, he asked seekers to keep asking, “Who am I?”"
      ]
    ],
    "breaks": [
      "Negation alone cannot give positive knowledge. Saying what something is not does not show what it is.",
      "The method can lead some people to feel that nothing matters, since everything is “not this”.",
      "The final experience that neti neti points to cannot be checked by others. It depends on personal realisation."
    ],
    "uses": [
      "Problem solving: Doctors and investigators often find the answer by ruling out what it is not. Diagnosis by elimination is a practical form of neti neti.",
      "Defining hard ideas: Ideas such as justice or development become clearer when we first say what they are not. For example, development is not only growth in income.",
      "Humility: The method reminds officials and experts that their descriptions of complex realities are always partial.",
      "Exam use: In GS-IV, use it for self-awareness and Indian moral thinkers. In the Essay paper, use it for topics on knowledge, truth and the limits of language."
    ],
    "related": [
      "atman",
      "gargi",
      "maitreyi",
      "maya",
      "ashtavakra",
      "twobirds"
    ],
    "reading": [
      [
        "The Thirteen Principal Upanishads, translated by Robert Ernest Hume (1921)",
        "Shakalya’s questions are Brihadaranyaka 3.9. Free on the Internet Archive.",
        "https://archive.org/details/thirteenprincipa00hume"
      ],
      [
        "“Neti neti”, Wikipedia",
        "Free overview, including how Advaita teachers used the method.",
        "https://en.wikipedia.org/wiki/Neti_neti"
      ]
    ]
  },
  "atman": {
    "source": "Taittiriya Upanishad 3.1–6 (the story of Bhrigu and Varuna). Other key statements are in the Chandogya Upanishad 3.14 and the Brihadaranyaka Upanishad 1.4.10.",
    "period": "The principal Upanishads, from around the seventh century BCE to the last centuries BCE",
    "tradition": "Indian philosophy (Upanishads and Vedanta)",
    "type": "A philosophical concept. Atman means the Self, and Brahman means the ultimate reality.",
    "setup": [
      "Bhrigu was the son of Varuna. One day, Bhrigu went to his father and said, “Sir, teach me Brahman.” Varuna did not give a direct answer. He said, “Brahman is that from which all beings are born, by which they live after birth, and into which they return at death. Try to understand that through tapas.” Tapas means austerity and deep concentration.",
      "Bhrigu practised tapas. He decided that food is Brahman, because beings are born from food, live by food and return to food. He went back to his father. Varuna again told him to seek Brahman through tapas.",
      "Bhrigu reflected again. Step by step, he understood that Brahman is breath, then that Brahman is mind, and then that Brahman is understanding. Each time, his father sent him back to reflect more deeply. At last, Bhrigu understood that Brahman is bliss. All beings are born from bliss, live by bliss and return to bliss. With this understanding, his search was complete.",
      "Other Upanishads add that the Self in each person is this same reality. The Chandogya Upanishad says that the Self within the heart is smaller than a grain of rice or a mustard seed, yet greater than the earth, the sky and all the worlds. The Chandogya then declares that this Self within the heart is Brahman. The Brihadaranyaka Upanishad contains the famous saying aham brahmasmi, which means “I am Brahman”."
    ],
    "question": "Is the deepest self within you the same as the ultimate reality of the universe?",
    "reveals": "The Upanishads search for the ground of everything and for the true nature of the self, and they find that the two searches lead to the same place. Bhrigu’s story shows the search moving from the physical to the subtle: from food, to breath, to mind, to understanding, to bliss. The final teaching is that the reality behind the universe is not far away. That reality is the innermost Self of every being. The idea gives every person, and every living being, a share in the same dignity.",
    "readings": [
      [
        "Advaita Vedanta (Shankaracharya)",
        "Atman and Brahman are completely identical. The feeling of being a separate individual comes from ignorance."
      ],
      [
        "Vishishtadvaita (Ramanuja)",
        "The self is real and distinct, but it belongs to Brahman, just as a body belongs to its soul. The self depends on Brahman and exists within Brahman."
      ],
      [
        "Dvaita (Madhva)",
        "The self and Brahman, understood as God, are always different. The self depends completely on God, but it never becomes God."
      ],
      [
        "Buddhist criticism",
        "The Buddha taught anatta, the idea that there is no permanent self. Buddhists argue that belief in an eternal self is itself a cause of attachment."
      ]
    ],
    "breaks": [
      "The identity of Atman and Brahman cannot be proved by observation. It depends on scripture and inner experience.",
      "If everything is one Self, it is hard to explain individual responsibility and the real differences between people.",
      "Some people use the idea to escape from the world instead of improving it."
    ],
    "uses": [
      "Human dignity: If the same reality lives in every person, then every person has equal worth. The idea supports the constitutional value of the dignity of the individual.",
      "Vasudhaiva Kutumbakam: The Maha Upanishad teaches that for the noble-minded, the whole world is one family. The verse is engraved in the entrance hall of India’s Parliament, and India used the idea as the theme of its G20 presidency in 2023.",
      "Environmental ethics: If all life shares the same deep reality, harming nature is not separate from harming ourselves.",
      "Exam use: In GS-IV, use it for human dignity, compassion and Indian moral thinkers. In the Essay paper, use it for topics on unity, the self and the world as one family."
    ],
    "related": [
      "uddalaka",
      "indra",
      "maitreyi",
      "netineti",
      "twobirds",
      "chariot"
    ],
    "reading": [
      [
        "The Thirteen Principal Upanishads, translated by Robert Ernest Hume (1921)",
        "Bhrigu’s story is Taittiriya 3.1–6. Free on the Internet Archive.",
        "https://archive.org/details/thirteenprincipa00hume"
      ],
      [
        "“Vedanta, Advaita”, Internet Encyclopedia of Philosophy",
        "",
        "https://iep.utm.edu/advaita-vedanta/"
      ]
    ]
  },
  "prometheus": {
    "source": "Hesiod, Theogony and Works and Days (around 700 BCE). The tragedy Prometheus Bound, traditionally attributed to Aeschylus (fifth century BCE).",
    "period": "Greece, from around 700 BCE",
    "tradition": "Greek mythology",
    "type": "A myth. A myth is a traditional story about gods or heroes that explains the world.",
    "setup": [
      "Prometheus was a Titan, one of an older race of gods. His name is usually understood to mean forethought. His brother Epimetheus had a name meaning afterthought.",
      "The oldest account comes from the Greek poet Hesiod. At a place called Mecone, gods and humans met to settle how the meat of sacrifices should be shared. Prometheus cut up an ox and made two portions to trick Zeus, the king of the gods. In one portion, he hid the good meat under the ox’s stomach. In the other, he covered the white bones with shining fat. Zeus chose the bones and fat, and he was furious when he saw the trick.",
      "To punish humans, Zeus hid fire from them. Prometheus stole the fire back and carried it to humans in a hollow fennel stalk. Zeus then had the gods make the first woman, Pandora, and sent her to Epimetheus as a gift. Prometheus had warned his brother never to accept a gift from Zeus, but Epimetheus forgot the warning. Pandora opened a jar and released troubles and diseases into the world. Only hope stayed inside the jar.",
      "Zeus punished Prometheus himself by binding him with chains. Every day, an eagle came and ate his liver. Every night, the liver grew back. Long afterwards, the hero Heracles killed the eagle and freed Prometheus, with the agreement of Zeus.",
      "In the tragedy Prometheus Bound, Prometheus is chained to a rock in a remote region called Scythia. He defies Zeus and explains how he taught humans many arts and skills."
    ],
    "question": "Is it right to defy power in order to give people knowledge and technology?",
    "reveals": "Prometheus stands for human progress and the price that comes with it. Fire makes cooking, metalwork and civilisation possible. But the myth links the gift of fire with punishment, suffering and new troubles for humanity. Later writers turned Prometheus into a symbol of rebellion against tyranny, and of the bold inventor whose discoveries can bring both good and harm.",
    "readings": [
      [
        "Hero of humanity",
        "Prometheus is a champion of human beings who suffers for helping them. Romantic poets made him a symbol of resistance to unjust power."
      ],
      [
        "Warning about technology",
        "Mary Shelley gave her novel Frankenstein (1818) the subtitle The Modern Prometheus. In the novel, a scientist creates life and cannot control the result."
      ],
      [
        "Hesiod’s reading",
        "For Hesiod, Prometheus’s cleverness brought trouble. Humans cannot escape the will of Zeus, and every clever trick has a cost."
      ]
    ],
    "breaks": [
      "The myth has many versions, and different writers praise or blame Prometheus.",
      "The story treats knowledge as a gift from above. In reality, humans developed fire and technology slowly, over a very long time.",
      "Hesiod blames the first woman for human troubles. Modern readers reject that picture of women."
    ],
    "uses": [
      "Ethics of technology: Artificial intelligence, gene editing and nuclear power bring great benefits and serious risks. The myth warns that powerful knowledge needs wise use.",
      "Dissent: People who defy authority to share vital information may pay a high personal price, like Prometheus.",
      "Access to knowledge: Public libraries, open-source software and free access to research continue the idea of giving knowledge to everyone.",
      "Exam use: In GS-IV, use it for the ethics of science and technology, moral courage and civil disobedience. In the Essay paper, use it for topics on technology, progress and rebellion."
    ],
    "related": [
      "faust",
      "apprentice",
      "icarus",
      "gadfly",
      "sisyphus",
      "nachiketa"
    ],
    "reading": [
      [
        "Hesiod, the Homeric Hymns, and Homerica, translated by Hugh G. Evelyn-White",
        "Contains the Theogony and Works and Days. Free on Project Gutenberg.",
        "https://www.gutenberg.org/ebooks/348"
      ],
      [
        "“Prometheus”, Theoi Project",
        "A guide to the ancient sources.",
        "https://www.theoi.com/Titan/TitanPrometheus.html"
      ],
      [
        "“Prometheus”, Wikipedia",
        "",
        "https://en.wikipedia.org/wiki/Prometheus"
      ]
    ]
  },
  "icarus": {
    "source": "Ovid, Metamorphoses, Book 8. Ovid wrote around 8 CE, but the myth is older.",
    "period": "Greek myth, retold in Rome around 8 CE",
    "tradition": "Greek and Roman mythology",
    "type": "A myth. A myth is a traditional story about gods or heroes that explains the world.",
    "setup": [
      "Daedalus was a brilliant craftsman from Athens. He built the labyrinth, a huge maze, for King Minos of Crete. Later, Minos kept Daedalus and his young son Icarus on the island and would not let them leave.",
      "Daedalus said that Minos might control the land and the sea, but Minos did not control the sky. So Daedalus decided to escape through the air. He laid feathers in rows, from short to long, tied them with thread and fixed them with wax. Then he bent them into the shape of birds’ wings. While he worked, Icarus played beside him, chasing feathers in the breeze and pressing the soft wax with his thumb.",
      "When the wings were ready, Daedalus fitted a pair to his son. He told Icarus to fly a middle course. If he flew too low, the sea would soak the feathers. If he flew too high, the heat of the sun would burn them. As he gave the warning, the old man’s cheeks were wet with tears, and his hands trembled.",
      "Father and son flew out over the sea. A fisherman, a shepherd and a ploughman looked up and thought that they must be gods. But Icarus began to enjoy the daring flight. He left his father and flew higher and higher. The heat of the sun softened the wax that held the feathers. The wings fell apart, and Icarus fell into the sea, calling his father’s name.",
      "Daedalus saw the feathers floating on the water. He cursed his own skill and buried his son. The sea where Icarus fell was named the Icarian Sea after him."
    ],
    "question": "What happens when ambition ignores limits and good advice?",
    "reveals": "The myth of Icarus is a warning about overreaching. The wings were a great invention, but they worked only within limits. Icarus was carried away by the thrill of flying and ignored his father’s advice. The myth also contains a quieter tragedy. Daedalus’s own genius made the fatal wings, and he could not protect his son from their misuse. The warning covers both extremes, because flying too low was dangerous too.",
    "readings": [
      [
        "Warning against pride",
        "Icarus stands for youthful recklessness and the pride that ignores limits. The saying flying too close to the sun means taking a dangerous risk out of overconfidence."
      ],
      [
        "The middle way",
        "Daedalus advised a middle course between the sea and the sun. The advice is close to the Greek ideal of moderation and the Buddhist middle path."
      ],
      [
        "Indifference of the world",
        "The painting Landscape with the Fall of Icarus, attributed to Pieter Bruegel the Elder, shows a ploughman calmly working while Icarus falls into the sea. The poets W. H. Auden and William Carlos Williams wrote famous poems about the painting."
      ]
    ],
    "breaks": [
      "The myth blames Icarus and says little about the responsibility of the inventor who gave a boy dangerous wings.",
      "Ambition and risk also drive progress. Some readers admire Icarus for daring to fly high.",
      "The science is imaginary. The air grows colder, not hotter, as one climbs higher."
    ],
    "uses": [
      "Financial risk: Companies and investors who borrow heavily in pursuit of rapid growth can collapse when conditions change.",
      "Powerful tools and young users: Tools such as fast vehicles and social media need guidance and limits when they are given to young or untrained users.",
      "Ignoring expert advice: Leaders who ignore expert warnings out of overconfidence can lead organisations into disaster.",
      "Exam use: In GS-IV, use it for prudence, humility, moderation and the responsibility of mentors. In the Essay paper, use it for topics on ambition, risk and limits."
    ],
    "related": [
      "prometheus",
      "midas",
      "apprentice",
      "dunningkruger",
      "faust",
      "ecclesiastes"
    ],
    "reading": [
      [
        "The Metamorphoses of Ovid, Books VIII–XV, translated by Henry T. Riley",
        "The story of Daedalus and Icarus is in Book 8. Free on Project Gutenberg.",
        "https://www.gutenberg.org/ebooks/26073"
      ],
      [
        "“Icarus”, Wikipedia",
        "",
        "https://en.wikipedia.org/wiki/Icarus"
      ]
    ]
  },
  "midas": {
    "source": "Ovid, Metamorphoses, Book 11 (around 8 CE). The scene of the golden daughter was added by Nathaniel Hawthorne in A Wonder-Book for Girls and Boys (1851).",
    "period": "Greek myth, retold in Rome around 8 CE",
    "tradition": "Greek and Roman mythology",
    "type": "A myth. A myth is a traditional story about gods or heroes that explains the world.",
    "setup": [
      "Midas was a king of Phrygia, a kingdom in what is now Turkey. One day, Silenus, the old teacher of the wine god Dionysus, wandered away drunk. Some Phrygian farmers found him and brought him to King Midas.",
      "Midas recognised Silenus and welcomed him with a feast that lasted ten days and ten nights. Then he took Silenus back to Dionysus. The god was glad to have his old teacher back, and he offered Midas any reward he wished.",
      "Midas asked that everything he touched should turn into gold. Dionysus granted the wish, although he was sorry that Midas had not asked for something better.",
      "At first, Midas was delighted. Twigs, stones and ears of corn all turned to gold when he touched them. But when he sat down to eat, the bread became hard gold in his hands, and the wine turned to gold at his lips. Midas was rich, but he could neither eat nor drink. He began to hate the gift that he had wanted so much.",
      "Midas prayed to Dionysus to take the gift away. The god told him to wash in the river Pactolus. When Midas bathed, the golden power passed into the water, and ever since, the river has carried gold in its sands.",
      "In Ovid’s version, Midas does not turn his daughter to gold. The American writer Nathaniel Hawthorne added that famous scene in 1851. In his retelling, Midas reaches out to comfort his daughter, Marygold, and she turns into a golden statue."
    ],
    "question": "What happens when a wish for wealth is granted without limits?",
    "reveals": "The myth of Midas shows the difference between wealth and well-being. Gold has value only because it can be exchanged for real goods, such as food, drink and comfort. When Midas turned everything into gold, he destroyed the things that gold was meant to buy. The story warns that getting exactly what we ask for can be a disaster when the wish is foolish. Hawthorne’s version adds that greed can harm the people we love.",
    "readings": [
      [
        "Moral reading",
        "Greed blinds people to what really matters. The wise person values health, relationships and simple goods above riches."
      ],
      [
        "Economic reading",
        "Money is a means, not an end. The story shows the difference between money and real wealth, such as food and useful goods."
      ],
      [
        "Technology reading",
        "A system that does exactly what it is told can cause harm if the instruction is badly chosen. Some researchers in artificial intelligence call this danger the King Midas problem."
      ]
    ],
    "breaks": [
      "The myth treats wealth as simply harmful, but money can also relieve poverty and support good causes.",
      "The gift is magical and absolute. Real choices about wealth involve trade-offs, not one foolish wish.",
      "In another myth, Apollo gives Midas the ears of a donkey for judging a music contest foolishly. The myths use Midas as a figure of foolishness as much as of greed."
    ],
    "uses": [
      "Growth and well-being: Measuring progress only by income can ignore health, clean air and happiness. Turning forests and rivers into money can destroy what people need to live.",
      "Corruption: Officials who pursue wealth dishonestly may gain money but lose their reputation, family peace and freedom.",
      "Instructions for machines and organisations: Goals given to machines and organisations need limits, or the goals may be reached in harmful ways.",
      "Exam use: In GS-IV, use it for greed, contentment, integrity and the gap between wealth and well-being. In the Essay paper, use it for topics on wealth, development and technology."
    ],
    "related": [
      "aesop",
      "icarus",
      "faust",
      "goodhart",
      "hedonic",
      "nachiketa"
    ],
    "reading": [
      [
        "The Metamorphoses of Ovid, Books VIII–XV, translated by Henry T. Riley",
        "The story of Midas is in Book 11. Free on Project Gutenberg.",
        "https://www.gutenberg.org/ebooks/26073"
      ],
      [
        "“Midas”, Wikipedia",
        "Includes Hawthorne’s version.",
        "https://en.wikipedia.org/wiki/Midas"
      ]
    ]
  },
  "apprentice": {
    "source": "Lucian of Samosata, Lover of Lies (second century CE). Johann Wolfgang von Goethe, “The Sorcerer’s Apprentice” (1797).",
    "period": "Second century CE and 1797",
    "tradition": "Greek satire and German poetry",
    "type": "A tale, first told in prose and later as a poem",
    "setup": [
      "The oldest version appears in Lover of Lies, a comic dialogue by the Greek writer Lucian in the second century CE. A group of old men tell each other stories about magic, while a doubtful visitor mocks them. One of them, Eucrates, claims that the following event happened to him when he was young.",
      "In Egypt, Eucrates travelled with Pancrates, a scribe from the city of Memphis who knew secret magic. At every inn, Pancrates took a broom or a pestle, which is a heavy stick for crushing grain, dressed it in clothes and spoke a spell. The object came to life and worked like a servant. The servant fetched water, bought food and cooked. Another spell turned it back into wood. Pancrates refused to teach the spell to anyone.",
      "One day, Eucrates hid in a dark corner and overheard the spell. When Pancrates went to the market, Eucrates dressed the pestle and told it to carry water. The pestle obeyed. But when Eucrates told it to stop, it paid no attention. The pestle kept bringing water until the house was flooded.",
      "In panic, Eucrates cut the pestle in two with an axe. Each half picked up a pitcher and fetched water, so now there were two water carriers instead of one. Then Pancrates returned. He turned the servants back into wood and left Eucrates for good.",
      "In 1797, the German poet Goethe retold the story as a poem about an apprentice and an enchanted broom. In 1940, Walt Disney’s film Fantasia made the story famous worldwide, with Mickey Mouse as the apprentice and music by the French composer Paul Dukas."
    ],
    "question": "What happens when someone uses a power that they do not understand?",
    "reveals": "The sorcerer’s apprentice shows the danger of starting a process without knowing how to stop it. The apprentice learned the command to begin but not the command to end. His attempt to fix the problem by force made it worse, because the power multiplied. The tale warns that power without understanding is dangerous. Knowing how to control and undo an action matters as much as knowing how to start it.",
    "readings": [
      [
        "Technology reading",
        "The story is often used in discussions of automation, artificial intelligence and genetic engineering. Tools that act on their own can escape the control of their users."
      ],
      [
        "Learning and mastery",
        "Real mastery includes understanding limits and consequences. Shortcuts that skip learning can lead to disaster."
      ],
      [
        "Satire of superstition",
        "Lucian placed the tale inside a satire. His narrator scolds the old men for filling young minds with tales of magic, so the original also mocks people who believe impressive stories."
      ]
    ],
    "breaks": [
      "In Goethe’s poem, the master simply fixes the problem. The story assumes that a wiser authority can always put things right.",
      "The tale can be used to discourage all experiments and learning by doing.",
      "Real systems often fail for complex reasons, not only because one person lacked knowledge."
    ],
    "uses": [
      "Artificial intelligence: Systems that act automatically need reliable ways to be stopped or corrected. Human oversight must be built in from the start.",
      "Policy side effects: A policy launched without understanding can create problems that grow when officials respond with more of the same, like the pestle cut in two.",
      "Invasive plants: Plants brought to India as ornamentals, such as lantana and water hyacinth, spread out of control and became serious problems.",
      "Exam use: In GS-IV, use it for responsibility in using power and technology, humility and prudence. In the Essay paper, use it for topics on technology, automation and unintended consequences."
    ],
    "related": [
      "prometheus",
      "cobra",
      "faust",
      "icarus",
      "midas",
      "butterfly"
    ],
    "reading": [
      [
        "The Works of Lucian of Samosata, volume 3, translated by H. W. Fowler and F. G. Fowler",
        "Contains the dialogue Lover of Lies, which includes the tale. Free on Project Gutenberg.",
        "https://www.gutenberg.org/ebooks/6829"
      ],
      [
        "“The Sorcerer’s Apprentice”, Wikipedia",
        "",
        "https://en.wikipedia.org/wiki/The_Sorcerer%27s_Apprentice"
      ],
      [
        "“Lover of Lies”, Wikipedia",
        "",
        "https://en.wikipedia.org/wiki/Lover_of_Lies"
      ]
    ]
  },
  "babel": {
    "source": "Jorge Luis Borges, “The Library of Babel”, first published in Spanish in the collection The Garden of Forking Paths (1941)",
    "period": "Argentina, 1941",
    "tradition": "Modern Latin American literature",
    "type": "A short story",
    "setup": [
      "Jorge Luis Borges was an Argentine writer who worked as a librarian. He later became director of Argentina’s National Library, by which time he had lost his sight. In 1941, he published a short story in which the whole universe is a library.",
      "The library is made of a vast number of six-sided rooms, called hexagons, connected by stairs and passages. Their walls are lined with bookshelves. Every book has the same format: 410 pages, 40 lines on each page and about 80 letters on each line. The books use only 25 symbols, which are 22 letters, the space, the full stop and the comma.",
      "The narrator is an old librarian. He explains that the books contain every possible arrangement of those symbols. Almost every book is meaningless. But somewhere on the shelves must be every book that could ever be written, including true accounts of the future and countless false ones.",
      "When people first understood this, they were overjoyed, because every answer had to be somewhere in the library. Some searched for books that would justify their own lives. Others believed that a legendary figure, the Man of the Book, had once read a catalogue of the whole library, and they went looking for him. A group called the Purifiers destroyed books that they judged to be nonsense. But the library is so vast that nobody finds the books they seek, and hope turned to despair.",
      "The narrator ends with a quiet hope. He suggests that the library may repeat itself forever in the same disorder, and that such repetition would itself be a kind of order."
    ],
    "question": "If every possible book exists, does all that information help us to find truth?",
    "reveals": "The Library of Babel shows that information is not the same as knowledge. A library that contains every possible text contains every truth, but it also contains every falsehood and endless nonsense. Without a way to find and judge the right book, the truth is useless. The story also shows how people respond to overwhelming information, with hope, fanaticism, destruction and despair.",
    "readings": [
      [
        "Information overload",
        "The internet resembles the library. The internet holds enormous amounts of true and false material, and the hard part is finding and judging what matters."
      ],
      [
        "Mathematical reading",
        "Because the books have a fixed length and a fixed set of symbols, the number of different books is finite, though unimaginably large. The writer Jonathan Basile built a website that imitates the library."
      ],
      [
        "History of the idea",
        "Borges had discussed the idea of a total library in a 1939 essay. The German writer Kurd Lasswitz had imagined a similar universal library in a story of 1901."
      ]
    ],
    "breaks": [
      "The library could never physically exist, because the number of books would be far too large for the known universe.",
      "The story treats meaning as something hidden inside texts. But meaning also depends on readers and languages, and almost any text could mean something in some possible language.",
      "The narrator’s despair is only one possible response. Others might find freedom in not knowing everything."
    ],
    "uses": [
      "Misinformation: More information does not guarantee more truth. Fact-checking, trusted institutions and media literacy help citizens to find reliable knowledge.",
      "Data in governance: Governments collect huge amounts of data. Without good questions and careful analysis, data does not lead to better decisions.",
      "Education: In an age of information, the main aim of education is to teach judgment, not only to supply facts.",
      "Exam use: In GS-IV, use it for the ethics of information, truth and critical thinking. In the Essay paper, use it for topics on knowledge, the internet and the search for meaning."
    ],
    "related": [
      "cave",
      "blindmen",
      "nasreddin",
      "beforelaw",
      "sisyphus",
      "boltzmann"
    ],
    "reading": [
      [
        "“The Library of Babel”, Wikipedia",
        "Free summary and discussion. The story itself is still under copyright.",
        "https://en.wikipedia.org/wiki/The_Library_of_Babel"
      ],
      [
        "The Library of Babel website, by Jonathan Basile",
        "A website that imitates the library in Borges’s story.",
        "https://libraryofbabel.info/"
      ]
    ]
  },
  "beforelaw": {
    "source": "Franz Kafka, “Vor dem Gesetz” (“Before the Law”). It was first published in 1915. It was later included in the collection A Country Doctor (1919). Kafka also placed it in his novel The Trial (1925), in the chapter set in a cathedral.",
    "period": "Prague, 1914 to 1915",
    "tradition": "Modern European literature",
    "type": "A parable. A parable is a simple story that teaches a lesson.",
    "setup": [
      "A doorkeeper stood in front of the door of the Law. A man from the countryside came to him and asked to go in. The doorkeeper said that he could not let him in now. The man asked if he would be allowed in later. The doorkeeper said, “It is possible, but not now.”",
      "The door was open, so the man bent down to look inside. The doorkeeper laughed. He said, “If you want to go in so much, try to go in without my permission. But remember that I am powerful. And I am only the lowest doorkeeper. Inside, every hall has a doorkeeper, and each one is more powerful than the last. Even I cannot bear to look at the third one.”",
      "The man had not expected this. He thought that the Law should be open to everyone at all times. But he decided to wait until he got permission. The doorkeeper gave him a stool, and the man sat down beside the door. He waited there for years. He gave the doorkeeper everything he had, hoping to bribe him. The doorkeeper took everything. But he said, “I am taking this only so that you do not think you left something undone.”",
      "The man grew old. In the end, he even begged the fleas in the doorkeeper’s fur collar to help him. His eyesight became weak. As he was dying, he asked one last question. “Everyone wants to reach the Law. So why has no one except me come here to ask to go in?” The doorkeeper shouted into his ear, “No one else could go in here, because this door was meant only for you. Now I am going to close it.”"
    ],
    "question": "What does it mean to say that justice is open to everyone, if no one can actually reach it?",
    "reveals": "The parable shows a kind of power that does not use force. No one stops the man with violence. The door is even open. He is stopped by the doorkeeper’s authority, by stories of more powerful doorkeepers inside, and by his own decision to wait for permission. In theory, he can go to the Law. In practice, he never gets in.",
    "readings": [
      [
        "Institutional reading",
        "The story shows how ordinary people experience law and bureaucracy. Rules, officials and delays keep people away from their rights, even though no one openly refuses them."
      ],
      [
        "Personal reading",
        "The man’s real failure is that he never acts. The door was meant only for him, but he spent his whole life waiting instead of testing the rule."
      ],
      [
        "Reading inside The Trial",
        "In the novel, a priest tells this story to Josef K. The two men then argue about whether the doorkeeper cheated the man or only did his duty. The novel does not settle the argument. The unsettled argument shows how a legal text can be read in more than one way."
      ],
      [
        "Religious reading",
        "Some readers link the story to Jewish traditions about the Law, and about reaching God through many levels of guardians."
      ]
    ],
    "breaks": [
      "The story shows the trap but does not show a way out. Readers can blame either the system or the man.",
      "Real officials work under rules, supervisors and incentives. The story can make a system seem impossible to reform, when reform is actually possible.",
      "Kafka left the meaning open on purpose. Any single lesson, including the ones given here, makes the story simpler than it is."
    ],
    "uses": [
      "Access to justice: Many people cannot use the courts because of long delays, high legal costs and complicated procedures. Legal aid and Lok Adalats try to open the door for them.",
      "Service delivery: Citizens often have rights on paper but cannot get services at the government office. Citizens’ charters, time limits for services, grievance systems and the RTI Act are ways to open the door.",
      "E-governance: Online services can remove officials who act as gatekeepers. But they can also create new barriers for people who cannot use technology.",
      "Exam use: In GS-IV, use it for probity in governance, citizens’ charters and quality of service delivery. In the Essay paper, use it for topics on delayed justice, bureaucracy and the common citizen."
    ],
    "related": [
      "panopticon",
      "milgram",
      "principalagent",
      "cave",
      "inquisitor",
      "noblelie"
    ],
    "reading": [
      [
        "Franz Kafka, The Trial, translated by David Wyllie",
        "The parable and the argument about it are in the cathedral chapter. Free on Project Gutenberg.",
        "https://www.gutenberg.org/ebooks/7849"
      ],
      [
        "Franz Kafka, “Vor dem Gesetz”, the original German text, Wikisource",
        "",
        "https://de.wikisource.org/wiki/Vor_dem_Gesetz"
      ]
    ]
  }
};
