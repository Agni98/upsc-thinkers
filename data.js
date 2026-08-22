/* =====================================================================
   UPSC THINKERS — DATA LAYER
   ---------------------------------------------------------------------
   Every thinker is one object. To add your own, copy any block below.

   id     : unique slug (no spaces)
   name   : display name
   years  : lifespan
   place  : region / nationality
   cat    : category id (must match a CATEGORIES entry below)
   wiki   : English Wikipedia page title — used to auto-fetch the portrait
   img    : (optional) direct image URL, overrides the Wikipedia fetch
   school : school of thought, shown as a chip
   tag    : ["Essay"] / ["Ethics"] / ["Essay","Ethics"]
   gist   : one-line essence — the "if you remember nothing else" line
   ideas  : ["Heading — explanation", ...]   (4–6 works best)
   quotes : ["quotation", ...]               (2–4 works best)
   essay  : essay topics where this thinker fits
   ethics : GS-IV syllabus hooks
   ===================================================================== */

const CATEGORIES = [
  { id:"classical", name:"Classical Western Foundations", icon:"🏛", blurb:"Greece and Rome — where virtue, justice and the good life were first argued out." },
  { id:"eastern", name:"Eastern Wisdom Traditions", icon:"☯", blurb:"Buddha, Confucius, Lao Tzu, Mahavira — ethics as inner discipline and harmony." },
  { id:"indian-class", name:"Indian Classical & Bhakti", icon:"🕉", blurb:"Kautilya to Kabir — statecraft, dharma and the egalitarian devotional voice." },
  { id:"west-political", name:"Modern Western Political Thought", icon:"⚖", blurb:"Machiavelli to Nietzsche — sovereignty, liberty, rights, utility and duty." },
  { id:"contemporary", name:"Contemporary & 20th Century", icon:"🌐", blurb:"Rawls, Sen, Arendt, Foucault — justice, capability, power and freedom today." },
  { id:"indian-modern", name:"Indian Renaissance & Freedom Movement", icon:"🇮🇳", blurb:"Roy to Kalam — the moral architecture of modern India." },
  { id:"reform", name:"Social Justice & Reform", icon:"✊", blurb:"Phule, Periyar, Narayana Guru, Ramabai — caste, gender and dignity." },
  { id:"ethics-psych", name:"Moral Psychology & Human Values", icon:"🧠", blurb:"Kohlberg, Gilligan, Goleman, Maslow — how moral character actually forms." },
  { id:"admin", name:"Administration & Governance", icon:"🏢", blurb:"Weber, Simon, Barnard, Appleby, Drucker — the ethics of public organisation." },
  { id:"humanist", name:"Global Humanist Voices", icon:"🕊", blurb:"Tolstoy, King, Mandela, Einstein — the quotable conscience of the essay paper." }
];

const THINKERS = [

/* ================== CLASSICAL WESTERN FOUNDATIONS ================== */
{
  id:"socrates", name:"Socrates", years:"470–399 BCE", place:"Athens, Greece",
  cat:"classical", wiki:"Socrates", school:"Virtue Ethics · Socratic Method",
  tag:["Essay","Ethics"],
  gist:"The examined life is the beginning of ethical life — question assumptions before claiming certainty.",
  ideas:[
    "Socratic Method (Elenchus) — Truth is reached by relentless questioning, not by lecture. The teacher is a midwife who delivers ideas already latent in the learner.",
    "Virtue is Knowledge — Wrongdoing is a failure of understanding. If a person truly grasped what was good, they would do it. Ignorance, not malice, is the root of vice.",
    "The Examined Life — An unreflective existence is not worth living. Self-scrutiny is the first duty of a moral agent.",
    "Conscience over Law — At his trial he refused to stop philosophising and accepted death rather than betray conviction. The birth of principled civil disobedience.",
    "Socratic Ignorance — 'I know that I know nothing.' Intellectual humility is the precondition of wisdom."
  ],
  quotes:[
    "The unexamined life is not worth living.",
    "I know that I know nothing.",
    "No one does wrong willingly.",
    "I will obey God rather than you."
  ],
  essay:[
    "Values are caught, not taught",
    "Courage of conviction",
    "Education is drawing out, not pouring in",
    "Dissent is the safety valve of democracy"
  ],
  ethics:[
    "Ethics & Human Interface — foundation of conscience as moral guide",
    "Role of conscience vs. law in a civil servant's dilemma",
    "Moral reasoning as an inquiry-based, not rule-based, exercise"
  ]
},
{
  id:"plato", name:"Plato", years:"427–347 BCE", place:"Athens, Greece",
  cat:"classical", wiki:"Plato", school:"Idealism · Theory of Forms",
  tag:["Essay","Ethics"],
  gist:"Justice is harmony — in the soul, in the city and in the rule of those trained to know the good.",
  ideas:[
    "Theory of Forms — Behind imperfect worldly things lie perfect, eternal Ideas. The Form of the Good is the highest object of knowledge.",
    "Allegory of the Cave — Most people mistake shadows for reality; the philosopher who escapes has a duty to return and free the others. A metaphor for education and enlightened leadership.",
    "Philosopher King — Power should rest with those who love wisdom, not those who love power. Rulers must be trained, not merely elected.",
    "Tripartite Soul & State — Reason/Guardians, Spirit/Auxiliaries, Appetite/Producers. Justice is harmony among the three; injustice is one part usurping another.",
    "Justice as Functional Harmony — Not a contract or a reward, but a well-ordered condition of the soul."
  ],
  quotes:[
    "The measure of a man is what he does with power.",
    "Justice means minding one's own business and not meddling with other men's concerns.",
    "Until philosophers rule as kings ... cities will have no rest from evils.",
    "The beginning is the most important part of the work."
  ],
  essay:[
    "Philosophy of governance and the ideal ruler",
    "Education as liberation from ignorance",
    "Justice: fairness of outcome or of order?",
    "Merit vs. popularity in leadership"
  ],
  ethics:[
    "Foundational values — wisdom as a prerequisite for authority",
    "Justice as a public service value",
    "Why aptitude and integrity must be cultivated, not assumed"
  ]
},
{
  id:"aristotle", name:"Aristotle", years:"384–322 BCE", place:"Stagira / Athens, Greece",
  cat:"classical", wiki:"Aristotle", school:"Virtue Ethics · Teleology",
  tag:["Essay","Ethics"],
  gist:"A good life is built, not merely known — virtue becomes character through habituation and practical judgement.",
  ideas:[
    "Eudaimonia — The purpose of life is human flourishing, not pleasure or wealth. A good life is an activity of the soul in accordance with virtue.",
    "Golden Mean — Virtue lies between excess and deficiency, but the mean is not a mathematical midpoint; practical wisdom identifies what is appropriate in context.",
    "Virtue as Habit — Character is formed through repeated choice and practice; we become just by doing just acts.",
    "Practical Wisdom (Phronesis) — The ability to discern what a particular situation requires. Ethical action needs judgement, not mechanical rule-following.",
    "Man is a Political Animal — Human beings realise their nature only within a community; the state exists for the good life, not merely for life.",
    "Distributive Justice — Equals should be treated equally, unequals unequally in proportion to relevant difference. The classical basis of affirmative action debates."
  ],
  quotes:[
    "The good for man is an activity of the soul in accordance with virtue.",
    "We become just by doing just acts.",
    "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
    "Man is by nature a political animal."
  ],
  essay:[
    "Character is destiny",
    "Moderation in all things",
    "Habits make the man",
    "Purpose of education is to build character"
  ],
  ethics:[
    "Ethics & Human Interface — virtue ethics as a core moral framework",
    "Aptitude & foundational values: integrity as habit",
    "Practical wisdom in case-study decision-making",
    "Distributive justice and reservation policy"
  ]
},
{
  id:"epicurus", name:"Epicurus", years:"341–270 BCE", place:"Samos / Athens, Greece",
  cat:"classical", wiki:"Epicurus", school:"Hedonism · Ataraxia",
  tag:["Essay"],
  gist:"Happiness grows when desire becomes disciplined — tranquillity, friendship and freedom from fear matter more than luxury.",
  ideas:[
    "Ataraxia — The goal is freedom from disturbance: a calm mind and a body free of pain. Simple living, not luxury, delivers it.",
    "Classification of Desires — Natural and necessary (food, shelter, friendship); natural but unnecessary (luxury food); vain and empty (fame, power). Happiness lies in limiting the last two.",
    "Friendship as the Highest Good — Of all things wisdom provides for a blessed life, friendship is the greatest.",
    "Freedom from Fear — Fear of death and of the gods is the source of most human misery; reason dissolves both."
  ],
  quotes:[
    "Not what we have but what we enjoy constitutes our abundance.",
    "He who is not satisfied with a little is satisfied with nothing.",
    "Of all the means which wisdom acquires for the blessedness of the whole life, by far the greatest is the possession of friendship.",
    "Death is nothing to us."
  ],
  essay:[
    "Simple living, high thinking",
    "Consumerism and the crisis of contentment",
    "Happiness index vs. GDP",
    "Minimalism and sustainability"
  ],
  ethics:[
    "Human values — contentment as a check on corruption and greed"
  ]
},
{
  id:"marcus-aurelius", name:"Marcus Aurelius", years:"121–180 CE", place:"Rome",
  cat:"classical", wiki:"Marcus Aurelius", school:"Stoicism",
  tag:["Essay","Ethics"],
  gist:"Power must begin with self-command — govern the self, accept what is beyond control, and serve the common good.",
  ideas:[
    "Dichotomy of Control — Distinguish what is up to us (our will, judgement, response) from what is not (events, reputation, others' actions). Peace lies in mastering the first.",
    "Duty to the Common Good — 'What is not good for the beehive cannot be good for the bee.' Public office is service, not privilege.",
    "Amor Fati — Accept events as they come; obstacles are material for virtue. 'The impediment to action advances action.'",
    "Self-Examination — His Meditations were private notes to himself, the discipline of a ruler auditing his own conduct daily."
  ],
  quotes:[
    "You have power over your mind — not outside events. Realise this, and you will find strength.",
    "Waste no more time arguing what a good man should be. Be one.",
    "The impediment to action advances action. What stands in the way becomes the way.",
    "What is not good for the swarm is not good for the bee."
  ],
  essay:[
    "Leadership is service, not power",
    "Resilience in adversity",
    "Self-discipline as the root of public integrity"
  ],
  ethics:[
    "Emotional intelligence — self-regulation and equanimity under pressure",
    "Public service values: duty, restraint and objectivity",
    "Stress and moral fatigue in administration"
  ]
},
{
  id:"epictetus", name:"Epictetus", years:"50–135 CE", place:"Hierapolis / Rome",
  cat:"classical", wiki:"Epictetus", school:"Stoicism",
  tag:["Essay"],
  gist:"Freedom begins in the mind — mastery of judgement matters more than mastery of circumstances.",
  ideas:[
    "Freedom is Internal — He was born a slave yet insisted the only real chains are mental. No tyrant can compel your assent.",
    "It Is Not Events but Opinions — 'Men are disturbed not by things, but by the views they take of them.' The origin of modern cognitive therapy.",
    "Role Ethics — Life assigns you a part; your job is to play it well, not to choose it.",
    "Practice over Theory — Philosophy is worthless unless it changes conduct. 'Don't explain your philosophy. Embody it.'"
  ],
  quotes:[
    "Men are disturbed not by things, but by the views which they take of them.",
    "Some things are in our control and others not.",
    "Don't explain your philosophy. Embody it.",
    "No man is free who is not master of himself."
  ],
  essay:[
    "Adversity is the best teacher",
    "Attitude determines altitude",
    "Real freedom is freedom of the mind"
  ],
  ethics:[
    "Attitude — its structure, function and influence on behaviour",
    "Emotional intelligence and self-mastery"
  ]
},

/* ==================== EASTERN WISDOM TRADITIONS ==================== */
{
  id:"buddha", name:"Gautama Buddha", years:"c. 563–483 BCE", place:"Lumbini / Magadha, India",
  cat:"eastern", wiki:"Gautama Buddha", school:"Buddhism · Middle Path",
  tag:["Essay","Ethics"],
  gist:"Suffering has causes, and causes can be changed — ethical life is a disciplined path from craving to compassion.",
  ideas:[
    "Four Noble Truths — There is suffering (dukkha); it has a cause (craving/tanha); it can cease; and there is a path to that cessation.",
    "Eightfold Path — Right view, intention, speech, action, livelihood, effort, mindfulness and concentration. Note that Right Livelihood makes one's profession a moral question.",
    "Middle Path — Rejection of both self-indulgence and self-mortification; the ethic of balance and moderation.",
    "Karuna & Ahimsa — Compassion for all sentient beings and non-violence in thought, word and deed; the direct ancestor of Gandhi's ahimsa.",
    "Anatta & Impermanence — No permanent self, nothing lasts. Attachment to ego and position is the source of misery — a powerful check on official arrogance.",
    "Appa Deepo Bhava — 'Be a lamp unto yourself.' Accept nothing on authority; test it against your own reason and experience."
  ],
  quotes:[
    "Hatred is never appeased by hatred; by non-hatred alone is hatred appeased.",
    "All conditioned things are impermanent.",
    "Be a lamp unto yourselves; be your own reliance.",
    "The mind is everything. What you think you become."
  ],
  essay:[
    "Non-violence in a violent age",
    "Desire, consumption and the ecological crisis",
    "The middle path in policy-making",
    "Compassion as the basis of governance"
  ],
  ethics:[
    "Moral thinkers from India — compassion (karuna) and non-violence",
    "Ethics in human actions: intention (cetana) as the determinant of moral worth",
    "Right livelihood and professional ethics",
    "Empathy and tolerance as civil service values"
  ]
},
{
  id:"mahavira", name:"Mahavira", years:"599–527 BCE", place:"Vaishali, India",
  cat:"eastern", wiki:"Mahavira", school:"Jainism",
  tag:["Ethics"],
  gist:"Ahimsa extends beyond non-violence to restraint in thought, speech and possession — and humility in truth-claims.",
  ideas:[
    "Ahimsa Paramo Dharma — Non-violence is the supreme duty, extended to thought and speech, not just action.",
    "Anekantavada — Reality is many-sided; no single viewpoint holds the whole truth. The philosophical basis of tolerance, pluralism and consultative decision-making.",
    "Syadvada — Conditional predication: every statement should be prefaced with 'in some respect'. An antidote to dogmatism.",
    "Aparigraha — Non-possession. Limiting one's wants is both a spiritual and an ecological discipline; it inspired Gandhi's trusteeship.",
    "Five Vows — Ahimsa, Satya (truth), Asteya (non-stealing), Brahmacharya (chastity) and Aparigraha."
  ],
  quotes:[
    "Ahimsa is the highest religion.",
    "All beings long to live and none wishes to die.",
    "One should treat all creatures as one would oneself."
  ],
  essay:[
    "Tolerance and pluralism in a diverse society",
    "Sustainable living and the ethic of restraint",
    "Truth has many faces"
  ],
  ethics:[
    "Moral thinkers of India — anekantavada as the ethic of tolerance",
    "Aparigraha and probity: limiting wants limits corruption",
    "Handling conflicting viewpoints in administration"
  ]
},
{
  id:"confucius", name:"Confucius", years:"551–479 BCE", place:"Lu, China",
  cat:"eastern", wiki:"Confucius", school:"Confucianism · Role Ethics",
  tag:["Essay","Ethics"],
  gist:"Character is the foundation of governance — moral example, disciplined roles and humane conduct create social order.",
  ideas:[
    "Ren (Humaneness) — The supreme virtue: benevolence towards others, the inner quality that makes a person truly human.",
    "Li (Propriety) — Ritual, etiquette and correct conduct in each relationship. Ethics is learned through form and practice.",
    "The Silver Rule — 'Do not impose on others what you do not wish for yourself' — the negative, and arguably more practical, form of the Golden Rule.",
    "Rule by Virtue — 'Govern by virtue and the people will be drawn to you as the stars to the pole star.' Moral authority outperforms coercive authority.",
    "Rectification of Names — Let the ruler be a ruler, the officer an officer. Titles carry duties; when words lose meaning, governance collapses."
  ],
  quotes:[
    "Do not impose on others what you yourself do not desire.",
    "To see what is right and not do it is the want of courage.",
    "The superior man is modest in his speech, but exceeds in his actions.",
    "He who governs by virtue is like the North Star, which stays in place while the other stars orbit it."
  ],
  essay:[
    "Ethical leadership and moral example",
    "The family as the first school of values",
    "Duty before rights"
  ],
  ethics:[
    "Public service values — leading by example",
    "Foundational values: propriety and role-based duty",
    "Codes of conduct vs. codes of ethics"
  ]
},
{
  id:"laozi", name:"Lao Tzu", years:"6th century BCE", place:"China",
  cat:"eastern", wiki:"Laozi", school:"Taoism",
  tag:["Essay"],
  gist:"Govern lightly — the best leader is the one whose people say, 'we did it ourselves'.",
  ideas:[
    "Tao — The natural way of things. Wisdom lies in aligning with it rather than forcing outcomes.",
    "Wu Wei (Effortless Action) — Non-interference; the art of minimum necessary intervention. A striking argument for light-touch regulation and decentralisation.",
    "Leadership by Self-Effacement — 'When the best leader's work is done, the people say: we did it ourselves.' Facilitative, not heroic, leadership.",
    "Strength in Softness — Water is the softest thing yet wears away rock. Patience and flexibility defeat rigidity."
  ],
  quotes:[
    "A journey of a thousand miles begins with a single step.",
    "When the best leader's work is done the people say, 'We did it ourselves.'",
    "Nature does not hurry, yet everything is accomplished.",
    "Knowing others is wisdom, knowing yourself is enlightenment."
  ],
  essay:[
    "Minimum government, maximum governance",
    "Small steps make big change",
    "Humility in leadership",
    "Working with nature, not against it"
  ],
  ethics:[
    "Leadership styles — facilitative and participative administration"
  ]
},

/* ==================== INDIAN CLASSICAL & BHAKTI ==================== */
{
  id:"kautilya", name:"Kautilya (Chanakya)", years:"c. 350–275 BCE", place:"Takshashila / Magadha, India",
  cat:"indian-class", wiki:"Chanakya", school:"Arthashastra · Realist Statecraft",
  tag:["Essay","Ethics"],
  gist:"Realist statecraft with a welfare obligation — power must be strong, but the ruler remains answerable for the people’s welfare.",
  ideas:[
    "Yogakshema — The state's duty is the welfare and security of its people. 'In the happiness of his subjects lies the king's happiness.' India's oldest articulation of a welfare state.",
    "Saptanga Theory — Seven organs of the state: Swami (ruler), Amatya (ministers), Janapada (territory/people), Durga (fort), Kosha (treasury), Danda (army), Mitra (ally).",
    "Forty Ways of Embezzlement — He catalogued how officials steal and prescribed audit, rotation of posts, surprise inspection and informers. Ancient India's anti-corruption manual.",
    "Fish in Water — 'Just as it is impossible not to taste honey placed on the tongue, so it is impossible for a government servant not to eat up a bit of the king's revenue.' Hence systems, not trust, must prevent corruption.",
    "Sama, Dana, Danda, Bheda — Four instruments of policy: conciliation, gift, punishment, division. Statecraft as a graduated toolkit.",
    "Ethics of Consequence — Ends of state security may justify hard means; a realist counterpoint to Gandhi within the Indian tradition."
  ],
  quotes:[
    "In the happiness of his subjects lies the king's happiness; in their welfare, his welfare.",
    "A king shall consider as good, not what pleases himself, but what pleases his subjects.",
    "Just as it is impossible not to taste honey or poison placed on the tip of the tongue, so it is impossible for a government servant not to eat up at least a little bit of the king's revenue.",
    "The wise man should restrain his senses like the crane and accomplish his purpose."
  ],
  essay:[
    "Ends versus means in governance",
    "Welfare state: an ancient Indian idea",
    "Corruption: a systems failure, not a moral one",
    "Realism and idealism in statecraft"
  ],
  ethics:[
    "Probity in governance — institutional checks on corruption",
    "Indian moral thinkers — public welfare as the ruler's dharma",
    "Ethical dilemmas: national security vs. individual rights",
    "Accountability and audit mechanisms"
  ]
},
{
  id:"thiruvalluvar", name:"Thiruvalluvar", years:"c. 4th–5th century CE", place:"Tamil Nadu, India",
  cat:"indian-class", wiki:"Thiruvalluvar", school:"Thirukkural · Secular Ethics",
  tag:["Essay","Ethics"],
  gist:"A universal ethical code in 1,330 couplets — belonging to no religion and to all.",
  ideas:[
    "Thirukkural's Three Sections — Aram (virtue), Porul (wealth/polity) and Inbam (love). A complete guide to private and public life.",
    "Secular and Universal — It invokes no sect or deity as authority; its ethics rest on reason and human welfare, which is why it is quoted across faiths.",
    "Ahimsa and Vegetarianism — 'How can he be possessed of kindness who eats flesh to fatten his own flesh?'",
    "Ethics of Rulers — Just sceptre, impartial justice, avoidance of harshness in taxation: 'The ruler who does not protect his people will be destroyed by them.'",
    "Value of Work and Self-Reliance — Dignity of labour and the moral weight of earning honestly."
  ],
  quotes:[
    "Learn well what should be learnt, and then live your learning.",
    "It is compassion, the most gracious of virtues, which moves the world.",
    "Even in dire poverty, a man of noble birth will never do a base deed."
  ],
  essay:[
    "Ethics without religion",
    "Ancient Indian wisdom for modern governance",
    "Dignity of labour"
  ],
  ethics:[
    "Indian moral thinkers — secular ethical codes",
    "Foundational values of public service in Indian tradition"
  ]
},
{
  id:"shankara", name:"Adi Shankaracharya", years:"c. 788–820 CE", place:"Kalady, Kerala, India",
  cat:"indian-class", wiki:"Adi Shankara", school:"Advaita Vedanta",
  tag:["Essay","Ethics"],
  gist:"Non-dualism: because all is one reality, harming another is harming oneself.",
  ideas:[
    "Advaita (Non-Dualism) — Brahman alone is real; the perceived multiplicity of the world is maya. The self (Atman) and the absolute (Brahman) are identical.",
    "Ethical Consequence of Oneness — If the other is not truly separate from me, compassion and non-violence follow logically, not merely sentimentally.",
    "Jnana Yoga — Liberation through knowledge and discrimination (viveka) between the eternal and the transient.",
    "National Integration — By establishing four mathas at the country's corners he gave India a cultural-geographical unity long before political unity."
  ],
  quotes:[
    "Brahman is real, the world is an illusion, the individual self is nothing but Brahman.",
    "Knowledge alone destroys ignorance; action cannot.",
    "The knowledge of the Self is the only path to liberation."
  ],
  essay:[
    "Unity in diversity: philosophical roots",
    "Cultural nationalism and Indian identity",
    "Knowledge as liberation"
  ],
  ethics:[
    "Indian moral thinkers — oneness as the metaphysical basis of empathy"
  ]
},
{
  id:"kabir", name:"Kabir", years:"1440–1518", place:"Varanasi, India",
  cat:"indian-class", wiki:"Kabir", school:"Bhakti · Nirguna Tradition",
  tag:["Essay","Ethics"],
  gist:"The weaver-saint who mocked ritual in both temple and mosque, and located God in conduct.",
  ideas:[
    "Rejection of Ritualism — Sharp, witty attacks on empty ceremony, pilgrimage and priestly authority in both Hinduism and Islam.",
    "Syncretism — His couplets (dohas) drew Hindus and Muslims alike; his verses appear in the Guru Granth Sahib.",
    "Equality — Caste and birth are irrelevant to spiritual worth; the divine is accessible to the weaver as much as to the brahmin.",
    "Inner Search — 'I was looking for God and lost myself; I looked within and found Him.' Self-examination over external observance.",
    "Dignity of Labour — He remained a working weaver, refusing patronage; work itself is worship."
  ],
  quotes:[
    "If God be within the mosque, to whom does this world belong?",
    "Wherever you are is the entry point.",
    "It is hard to find a man who has both knowledge and humility.",
    "Speak such words that you lose your ego and the listener finds peace."
  ],
  essay:[
    "Religion vs. spirituality",
    "Social reform through literature",
    "Communal harmony: an Indian tradition",
    "Simplicity and the dignity of labour"
  ],
  ethics:[
    "Indian moral thinkers — sincerity over ritual",
    "Tolerance, secularism and empathy as values"
  ]
},
{
  id:"guru-nanak", name:"Guru Nanak", years:"1469–1539", place:"Talwandi, Punjab",
  cat:"indian-class", wiki:"Guru Nanak", school:"Sikhism",
  tag:["Essay","Ethics"],
  gist:"Honest work, sharing with others, remembering the divine — and no high or low among humans.",
  ideas:[
    "Kirat Karo, Naam Japo, Vand Chhako — Earn by honest labour, remember the divine, share with others. A complete ethic in three phrases.",
    "Ek Onkar — One universal creator; 'There is no Hindu, no Muslim' — a direct challenge to sectarian division.",
    "Langar & Sangat — Institutionalised equality: everyone eats together, seated on the same floor, regardless of caste, gender or wealth.",
    "Gender Equality — 'Why call her inferior, from whom kings are born?' — an early, explicit defence of women's dignity.",
    "Rejection of Asceticism — Spirituality is to be practised as a householder, within social responsibility, not by withdrawal."
  ],
  quotes:[
    "There is no Hindu, there is no Muslim.",
    "Why call her inferior, from whom kings are born?",
    "Speak only that which will bring you honour.",
    "He who has no faith in himself can never have faith in God."
  ],
  essay:[
    "Equality and social justice in Indian tradition",
    "Dignity of labour",
    "Women's empowerment: indigenous roots",
    "Service as worship"
  ],
  ethics:[
    "Indian moral thinkers — honest earning as an ethical principle",
    "Compassion and service to the weaker sections",
    "Gender equality as a foundational value"
  ]
},
{
  id:"basavanna", name:"Basavanna", years:"1131–1167", place:"Karnataka, India",
  cat:"indian-class", wiki:"Basava", school:"Lingayat · Vachana Movement",
  tag:["Ethics"],
  gist:"Work is worship — a 12th-century experiment in caste-free democracy and gender equality.",
  ideas:[
    "Kayaka Ve Kailasa — 'Work is heaven.' Every honest occupation is sacred; there is no hierarchy of labour.",
    "Dasoha — Sharing the surplus of one's labour with society; an early theory of social redistribution.",
    "Anubhava Mantapa — A public assembly where men and women of all castes debated philosophy — arguably the world's first participatory parliament of ideas.",
    "Vachanas — Free-verse poetry in the people's language (Kannada), rejecting Sanskrit's monopoly over knowledge."
  ],
  quotes:[
    "Work is worship.",
    "What sort of religion can it be without compassion?",
    "The rich will make temples for Shiva. What shall I, a poor man, do? My legs are pillars, the body the shrine."
  ],
  essay:[
    "Dignity of labour",
    "Social democracy before political democracy",
    "Language and access to knowledge"
  ],
  ethics:[
    "Indian moral thinkers — labour ethics and social equality",
    "Participatory decision-making"
  ]
},

/* ================= MODERN WESTERN POLITICAL THOUGHT ================= */
{
  id:"machiavelli", name:"Niccolò Machiavelli", years:"1469–1527", place:"Florence, Italy",
  cat:"west-political", wiki:"Niccolò Machiavelli", school:"Political Realism",
  tag:["Essay","Ethics"],
  gist:"Politics cannot be understood by pretending power does not exist — prudence, adaptability and consequences matter.",
  ideas:[
    "Separation of Ethics and Politics — The first thinker to treat statecraft as an autonomous science, freed from theology and private morality.",
    "Virtù and Fortuna — The ruler's skill and decisiveness (virtù) must master the caprice of circumstance (fortuna).",
    "Feared or Loved — 'It is safer to be feared than loved, if one cannot be both' — but never hated, for hatred destroys authority.",
    "Ends and Means — Political necessity can force choices that ordinary morality condemns; Machiavelli exposes the enduring problem of “dirty hands” in public leadership.",
    "Dirty Hands Problem — The leader who refuses ever to do wrong may fail those who depend on them; a permanent dilemma of public office."
  ],
  quotes:[
    "It is much safer to be feared than loved, if one of the two has to be wanting.",
    "Everyone sees what you appear to be, few feel what you are.",
    "A prudent prince ought not to keep his word when by doing so it would be against his interest.",
    "The lion cannot protect himself from traps, and the fox cannot defend himself from wolves."
  ],
  essay:[
    "Ends do not justify means — or do they?",
    "Morality in politics",
    "Realpolitik in international relations",
    "Perception management in public life"
  ],
  ethics:[
    "Ethics in international relations and funding",
    "Dilemma of means vs. ends in administrative decisions",
    "Contrast with Gandhian ethics — a classic comparative answer"
  ]
},
{
  id:"hobbes", name:"Thomas Hobbes", years:"1588–1679", place:"England",
  cat:"west-political", wiki:"Thomas Hobbes", school:"Social Contract · Absolutism",
  tag:["Essay"],
  gist:"Order is the precondition of secure freedom — political authority arises because uncontrolled insecurity makes liberty fragile.",
  ideas:[
    "State of Nature — A war of every man against every man, where life is 'nasty, brutish and short'. Human nature is self-interested and fearful.",
    "Social Contract — Individuals surrender their rights to a sovereign (Leviathan) in exchange for security. The contract is among subjects, not with the ruler.",
    "Absolute Sovereignty — The sovereign is indivisible and unaccountable; rebellion is never justified, since it returns society to chaos.",
    "Right to Self-Preservation — The one right never surrendered: a subject may resist an order to kill himself. The seed of inalienable rights."
  ],
  quotes:[
    "During the time men live without a common Power to keep them all in awe, they are in that condition which is called war.",
    "The life of man, solitary, poor, nasty, brutish, and short.",
    "Covenants, without the sword, are but words."
  ],
  essay:[
    "Security vs. liberty",
    "Why do we need the state?",
    "Order as the first condition of freedom",
    "Anarchy in international relations"
  ],
  ethics:[
    "Ethics of the state's monopoly on force",
    "Balancing individual rights against public order"
  ]
},
{
  id:"locke", name:"John Locke", years:"1632–1704", place:"England",
  cat:"west-political", wiki:"John Locke", school:"Liberalism · Natural Rights",
  tag:["Essay","Ethics"],
  gist:"Government is a trust, not a grant of unlimited power — rights exist before the state and consent legitimises authority.",
  ideas:[
    "Natural Rights — Life, liberty and property belong to individuals prior to the state; government exists to protect, not to grant, them.",
    "Government by Consent — Political authority is legitimate only with the governed's consent; a trust that can be revoked.",
    "Right of Revolution — When a government violates the trust, the people may replace it. This directly shaped the American Declaration of Independence.",
    "Tabula Rasa — The mind at birth is a blank slate written on by experience; therefore education and environment, not birth, form character.",
    "Religious Toleration — The state has no competence over the soul; separation of civil and religious authority."
  ],
  quotes:[
    "Wherever law ends, tyranny begins.",
    "The end of law is not to abolish or restrain, but to preserve and enlarge freedom.",
    "Every man has a property in his own person.",
    "Parents wonder why the streams are bitter, when they themselves have poisoned the fountain."
  ],
  essay:[
    "Rights and duties of the citizen",
    "Consent and legitimacy in democracy",
    "Nature vs. nurture in shaping character",
    "Right to property: a contested right"
  ],
  ethics:[
    "Foundational values — liberty and consent",
    "Ethical basis of the citizen–state relationship",
    "Nurture argument for values education"
  ]
},
{
  id:"rousseau", name:"Jean-Jacques Rousseau", years:"1712–1778", place:"Geneva / France",
  cat:"west-political", wiki:"Jean-Jacques Rousseau", school:"Social Contract · Popular Sovereignty",
  tag:["Essay","Ethics"],
  gist:"Political freedom means giving law to oneself — legitimate authority must express the common good, not private domination.",
  ideas:[
    "Man is Born Free — Civilisation and private property corrupted a naturally good humanity; inequality is a social product, not a natural fact.",
    "General Will (Volonté Générale) — The collective interest of the community, distinct from the mere sum of private wills. Sovereignty is inalienable and rests with the people.",
    "Direct Democracy — Representation dilutes sovereignty; the English 'are free only during the election of members of parliament'.",
    "Education (Émile) — Learning should follow the child's nature and curiosity rather than force adult knowledge on them; a foundation of child-centred pedagogy.",
    "Civil Religion — A minimal set of shared civic beliefs to bind citizens together."
  ],
  quotes:[
    "Man is born free, and everywhere he is in chains.",
    "The strongest is never strong enough to be always the master, unless he transforms strength into right.",
    "The people of England regards itself as free; it is greatly mistaken.",
    "To renounce liberty is to renounce being a man."
  ],
  essay:[
    "Democracy: participation beyond voting",
    "Inequality is man-made",
    "Child-centred education",
    "Is civilisation a blessing or a curse?"
  ],
  ethics:[
    "Foundational values — popular sovereignty and public interest",
    "Distinguishing public interest from majority opinion",
    "Ethics of participatory governance"
  ]
},
{
  id:"montesquieu", name:"Montesquieu", years:"1689–1755", place:"France",
  cat:"west-political", wiki:"Montesquieu", school:"Constitutionalism",
  tag:["Essay"],
  gist:"Power must be checked by power — the doctrine of separation of powers.",
  ideas:[
    "Separation of Powers — Legislative, executive and judicial functions must lie in different hands, or liberty perishes. The architecture of every modern constitution, including India's.",
    "Checks and Balances — 'Power should be a check to power.' Institutional design, not virtue alone, safeguards freedom.",
    "Theory of Climate & Spirit of Laws — Laws must suit the geography, history and temper of a people; no single model fits all societies.",
    "Constitutional Monarchy — Moderate government as the safeguard against despotism."
  ],
  quotes:[
    "Power should be a check to power.",
    "There is no greater tyranny than that which is perpetrated under the shield of the law.",
    "Useless laws weaken the necessary laws."
  ],
  essay:[
    "Separation of powers and Indian democracy",
    "Judicial activism vs. judicial overreach",
    "Institutions matter more than individuals"
  ],
  ethics:[
    "Accountability structures in governance",
    "Institutional integrity and checks on discretion"
  ]
},
{
  id:"burke", name:"Edmund Burke", years:"1729–1797", place:"Ireland / Britain",
  cat:"west-political", wiki:"Edmund Burke", school:"Conservatism",
  tag:["Essay","Ethics"],
  gist:"Society is a partnership between the living, the dead and the yet unborn — reform, don't rupture.",
  ideas:[
    "Organic Society — A nation is a living inheritance, not a machine to be redesigned. Change should be gradual and rooted in tradition.",
    "Prejudice and Prescription — Inherited custom carries the accumulated wisdom of generations; abstract theory alone is a poor guide to politics.",
    "Trusteeship of the Representative — 'Your representative owes you his judgement, and betrays instead of serving you if he sacrifices it to your opinion.' The classic defence against pure delegate theory and the anti-defection debate.",
    "Intergenerational Contract — Partnership between the living, the dead and those yet to be born — the philosophical root of sustainable development.",
    "The Fourth Estate — He is credited with naming the press a fourth pillar of governance."
  ],
  quotes:[
    "The only thing necessary for the triumph of evil is for good men to do nothing.",
    "Your representative owes you not his industry only, but his judgement; and he betrays you if he sacrifices it to your opinion.",
    "Society is a partnership between those who are living, those who are dead, and those who are to be born.",
    "A state without the means of some change is without the means of its conservation."
  ],
  essay:[
    "Tradition and modernity",
    "Reform vs. revolution",
    "Intergenerational equity and sustainable development",
    "Role of media as the fourth pillar"
  ],
  ethics:[
    "Conscience of the representative vs. constituency pressure",
    "Sustainable development as an ethical obligation to the future",
    "Silence of the good as complicity"
  ]
},
{
  id:"wollstonecraft", name:"Mary Wollstonecraft", years:"1759–1797", place:"England",
  cat:"west-political", wiki:"Mary Wollstonecraft", school:"Liberal Feminism",
  tag:["Essay","Ethics"],
  gist:"Women appear inferior only because they are denied education — the first great feminist argument.",
  ideas:[
    "A Vindication of the Rights of Woman (1792) — The founding text of modern feminism: women are not naturally inferior, they merely lack education.",
    "Rationality is Genderless — If reason is the basis of rights, and women reason, then rights cannot be denied to them.",
    "Education as Emancipation — Co-education and rigorous schooling for girls, not accomplishments designed to please men.",
    "Companionate Marriage — Marriage should be a partnership of equals; economic dependence corrupts the relationship.",
    "Critique of Sentimentality — Training women to be decorative and emotional is a deliberate mechanism of subordination."
  ],
  quotes:[
    "I do not wish women to have power over men; but over themselves.",
    "Virtue can only flourish among equals.",
    "The mind will ever be unstable that has only prejudices to rest on.",
    "It is justice, not charity, that is wanting in the world."
  ],
  essay:[
    "Women's education and national development",
    "Empowerment is not charity but justice",
    "Gender equality: from rights to reality"
  ],
  ethics:[
    "Gender justice as a foundational value",
    "Equality and non-discrimination in public service",
    "Justice vs. charity in welfare administration"
  ]
},
{
  id:"kant", name:"Immanuel Kant", years:"1724–1804", place:"Königsberg, Prussia",
  cat:"west-political", wiki:"Immanuel Kant", school:"Deontology · Duty Ethics",
  tag:["Essay","Ethics"],
  gist:"Moral worth lies in acting from duty — persons must never be reduced to instruments for an external purpose.",
  ideas:[
    "Categorical Imperative (1st formulation) — 'Act only according to that maxim by which you can at the same time will that it should become a universal law.' The universalisability test for any decision.",
    "Humanity Formula (2nd formulation) — 'Treat humanity, whether in yourself or another, always as an end and never merely as a means.' The philosophical core of human dignity.",
    "Good Will — Only a good will is good without qualification. The moral worth of an act lies in the intention and the sense of duty, not the consequences.",
    "Duty over Inclination — An act done because it is right, not because it feels good or pays, is the truly moral act.",
    "Autonomy — A moral agent legislates the moral law for themselves through reason; morality imposed from outside is not morality.",
    "Perpetual Peace — A federation of republican states, precursor to the UN idea."
  ],
  quotes:[
    "Act only according to that maxim whereby you can at the same time will that it should become a universal law.",
    "Treat humanity, whether in your own person or in the person of any other, always at the same time as an end, never merely as a means.",
    "Two things fill the mind with ever new and increasing admiration: the starry heavens above me and the moral law within me.",
    "Science is organised knowledge. Wisdom is organised life."
  ],
  essay:[
    "Duty is its own reward",
    "Human dignity: the non-negotiable value",
    "Means and ends in public life",
    "Universal values in a plural world"
  ],
  ethics:[
    "Ethics & human interface — deontology as a core framework",
    "Determinants of ethics in human action: intention",
    "Dignity as the basis of human rights and welfare policy",
    "The universalisability test in case studies",
    "Contrast with utilitarianism — the standard comparative question"
  ]
},
{
  id:"bentham", name:"Jeremy Bentham", years:"1748–1832", place:"England",
  cat:"west-political", wiki:"Jeremy Bentham", school:"Utilitarianism",
  tag:["Essay","Ethics"],
  gist:"The greatest happiness of the greatest number is the measure of right and wrong.",
  ideas:[
    "Principle of Utility — Actions are right in proportion as they promote happiness and wrong as they produce the reverse.",
    "Felicific Calculus — Pleasure can be measured by intensity, duration, certainty, propinquity, fecundity, purity and extent. Ethics made quantitative — the ancestor of cost-benefit analysis.",
    "Quantitative Hedonism — 'Pushpin is as good as poetry': pleasures differ in amount, not in kind.",
    "Legal Reform — Rights are 'nonsense upon stilts' unless created by law; he pushed prison reform, codification and animal welfare ('the question is not, can they reason? but, can they suffer?').",
    "Panopticon — A prison design of total visibility; later used by Foucault as the metaphor for modern surveillance."
  ],
  quotes:[
    "It is the greatest happiness of the greatest number that is the measure of right and wrong.",
    "The question is not, Can they reason? nor, Can they talk? but, Can they suffer?",
    "Natural rights is simple nonsense: rhetorical nonsense, nonsense upon stilts."
  ],
  essay:[
    "Greatest good of the greatest number",
    "Cost-benefit analysis in public policy",
    "Can happiness be measured?",
    "Animal rights and moral circle expansion"
  ],
  ethics:[
    "Consequentialism as a moral framework",
    "Utilitarian logic in resource allocation and disaster triage",
    "Limits of utilitarianism: minority rights",
    "Cost-benefit reasoning in case studies"
  ]
},
{
  id:"mill", name:"John Stuart Mill", years:"1806–1873", place:"England",
  cat:"west-political", wiki:"John Stuart Mill", school:"Liberalism · Qualitative Utilitarianism",
  tag:["Essay","Ethics"],
  gist:"Liberty is not mere permission — individuality, free discussion and diversity of ways of living are essential to human progress.",
  ideas:[
    "Qualitative Utilitarianism — Pleasures differ in quality, not just quantity. Intellectual and moral pleasures rank higher than bodily ones.",
    "Harm Principle — 'The only purpose for which power can rightfully be exercised over any member of a civilised community, against his will, is to prevent harm to others.' The limit of state and social coercion.",
    "Liberty of Thought and Expression — Even a single dissenting voice must be heard: if the opinion is right we gain truth, if wrong we gain a clearer perception of truth.",
    "Tyranny of the Majority — Social conformity can oppress more thoroughly than any government. Democracy needs protection from itself.",
    "The Subjection of Women — An early and forceful male argument for full legal and political equality of women.",
    "Individuality — Human beings are not machines to be built to a model but trees requiring room to grow."
  ],
  quotes:[
    "He who knows only his own side of the case knows little of that.",
    "The worth of a State, in the long run, is the worth of the individuals composing it.",
    "Over himself, over his own body and mind, the individual is sovereign.",
    "A person may cause evil to others not only by his actions but by his inaction."
  ],
  essay:[
    "Freedom of speech and its limits",
    "Tyranny of the majority",
    "Individual liberty vs. social good",
    "Dissent strengthens democracy",
    "Quality of life vs. standard of living"
  ],
  ethics:[
    "Consequentialism refined — quality of consequences",
    "Freedom of expression as a public value",
    "Balancing individual liberty against collective welfare",
    "Sins of omission — inaction as an ethical failure"
  ]
},
{
  id:"hegel", name:"G. W. F. Hegel", years:"1770–1831", place:"Germany",
  cat:"west-political", wiki:"Georg Wilhelm Friedrich Hegel", school:"German Idealism · Dialectics",
  tag:["Essay"],
  gist:"History develops through contradictions that drive social and political transformation — freedom is realised through an evolving historical process.",
  ideas:[
    "Dialectic — Progress occurs through conflict: an idea (thesis) provokes its opposite (antithesis) and both are resolved in a higher synthesis. Marx inverted this into materialism.",
    "Freedom as the End of History — 'World history is the progress of the consciousness of freedom.'",
    "The State as Ethical Life — The state is not a necessary evil but the arena where individual and universal interests are reconciled.",
    "Master–Slave Dialectic — Recognition by another is essential to self-consciousness; the root of later theories of identity, dignity and struggle for recognition."
  ],
  quotes:[
    "World history is the progress of the consciousness of freedom.",
    "We learn from history that we do not learn from history.",
    "Nothing great in the world has been accomplished without passion."
  ],
  essay:[
    "Conflict as an engine of progress",
    "Does history repeat itself?",
    "Idea of freedom through the ages"
  ],
  ethics:[
    "Recognition and dignity as ethical demands"
  ]
},
{
  id:"marx", name:"Karl Marx", years:"1818–1883", place:"Germany / England",
  cat:"west-political", wiki:"Karl Marx", school:"Historical Materialism · Socialism",
  tag:["Essay","Ethics"],
  gist:"The history of all hitherto existing society is the history of class struggle.",
  ideas:[
    "Historical Materialism — Material and economic conditions (the base) determine law, politics, religion and culture (the superstructure).",
    "Class Struggle — History moves through conflict between owners of the means of production and those who sell their labour.",
    "Alienation — Under industrial capitalism the worker is estranged from the product, the process, fellow workers and their own human essence — a powerful lens on modern workplace burnout.",
    "Surplus Value & Exploitation — Profit arises from unpaid labour time; inequality is structural, not accidental.",
    "'From each according to his ability, to each according to his needs' — The distributive principle of a communist society.",
    "Religion as Opium — Not merely a dismissal: it is 'the sigh of the oppressed creature, the heart of a heartless world'."
  ],
  quotes:[
    "The philosophers have only interpreted the world in various ways; the point, however, is to change it.",
    "From each according to his ability, to each according to his needs.",
    "The history of all hitherto existing society is the history of class struggles.",
    "Workers of the world, unite! You have nothing to lose but your chains."
  ],
  essay:[
    "Inequality: the defining challenge of our time",
    "Capitalism and its discontents",
    "Labour, dignity and the gig economy",
    "Ideology and the shaping of public opinion"
  ],
  ethics:[
    "Ethical critique of structural inequality",
    "Distributive justice and welfare economics",
    "Alienation, work culture and administrative morale"
  ]
},
{
  id:"nietzsche", name:"Friedrich Nietzsche", years:"1844–1900", place:"Germany",
  cat:"west-political", wiki:"Friedrich Nietzsche", school:"Existentialism · Perspectivism",
  tag:["Essay"],
  gist:"Create your own values — he who has a why to live can bear almost any how.",
  ideas:[
    "Will to Power — The fundamental drive is not survival or pleasure but self-overcoming and creative expansion.",
    "Übermensch (Overman) — The individual who creates their own values instead of inheriting them; self-legislation as the highest human achievement.",
    "Master and Slave Morality — 'Good vs. bad' (noble, self-affirming) against 'good vs. evil' (resentful, reactive). A provocative critique of conventional morality.",
    "Death of God — With the decline of religious authority, humanity must construct meaning itself or fall into nihilism.",
    "Amor Fati & Eternal Recurrence — Live so that you would gladly live this same life again, infinitely."
  ],
  quotes:[
    "He who has a why to live can bear almost any how.",
    "That which does not kill us makes us stronger.",
    "He who fights with monsters should look to it that he himself does not become a monster.",
    "You must have chaos within you to give birth to a dancing star."
  ],
  essay:[
    "Crisis of values in modern society",
    "Resilience: what does not kill us",
    "Individuality vs. conformity",
    "Meaning in a secular age"
  ],
  ethics:[
    "Sources of ethics — internal vs. external",
    "Moral courage and self-created value systems"
  ]
},
{
  id:"tocqueville", name:"Alexis de Tocqueville", years:"1805–1859", place:"France",
  cat:"west-political", wiki:"Alexis de Tocqueville", school:"Liberal Political Sociology",
  tag:["Essay"],
  gist:"Democracy survives on associations, local self-government and habits of the heart.",
  ideas:[
    "Democracy in America — Democracy's health depends less on its constitution than on its civil society: voluntary associations, local government and civic habits.",
    "Tyranny of the Majority — He coined the phrase: democratic conformity can smother independent thought more effectively than despotism.",
    "Soft Despotism — A paternal state that keeps citizens comfortable, passive and permanently childlike; a warning about welfare dependency without participation.",
    "Equality of Conditions — The irreversible march towards social equality is the master fact of modern history."
  ],
  quotes:[
    "The health of a democratic society may be measured by the quality of functions performed by private citizens.",
    "In a democracy, the people get the government they deserve.",
    "The most dangerous moment for a bad government is when it begins to reform."
  ],
  essay:[
    "Civil society and democracy",
    "Participation is the soul of democracy",
    "Local self-government: school of citizenship",
    "Welfare state and dependency"
  ],
  ethics:[
    "Civic virtue and citizen responsibility",
    "Public participation in governance"
  ]
},

/* =================== CONTEMPORARY & 20TH CENTURY =================== */
{
  id:"rawls", name:"John Rawls", years:"1921–2002", place:"United States",
  cat:"contemporary", wiki:"John Rawls", school:"Justice as Fairness",
  tag:["Essay","Ethics"],
  gist:"Justice should be designed from an impartial position — rules are fair only when they are fair to whoever one might become.",
  ideas:[
    "Veil of Ignorance — Choose the principles of justice without knowing your caste, gender, wealth, talent or religion. What you would then accept is genuinely fair. The single most useful device for any UPSC ethics answer on fairness.",
    "First Principle: Equal Liberty — Each person has an equal right to the most extensive basic liberties compatible with the same for others. Liberty has lexical priority.",
    "Second Principle (a): Fair Equality of Opportunity — Positions must be open to all under conditions of genuine, not merely formal, equality.",
    "Second Principle (b): Difference Principle — Inequalities are justified only if they work to the greatest benefit of the least advantaged. The philosophical charter of affirmative action and targeted welfare.",
    "Justice as Fairness — Justice is the first virtue of social institutions, as truth is of systems of thought.",
    "Overlapping Consensus — In a plural society, people of different faiths and doctrines can converge on shared political principles."
  ],
  quotes:[
    "Justice is the first virtue of social institutions.",
    "Each person is to have an equal right to the most extensive basic liberty compatible with a similar liberty for others.",
    "The principles of justice are chosen behind a veil of ignorance."
  ],
  essay:[
    "Social justice and affirmative action",
    "Equality of opportunity vs. equality of outcome",
    "Inclusive growth: leaving no one behind",
    "Fairness as the test of good policy"
  ],
  ethics:[
    "Justice as a foundational value of public service",
    "Reservation, subsidy and targeted welfare — ethical justification",
    "Impartiality and non-partisanship: the veil of ignorance in decision-making",
    "Case studies on resource allocation"
  ]
},
{
  id:"nozick", name:"Robert Nozick", years:"1938–2002", place:"United States",
  cat:"contemporary", wiki:"Robert Nozick", school:"Libertarianism",
  tag:["Essay"],
  gist:"The minimal state only — redistributive taxation is on a par with forced labour.",
  ideas:[
    "Entitlement Theory — A distribution is just if holdings were justly acquired and justly transferred, regardless of the resulting pattern. Justice is historical, not patterned.",
    "Minimal State — The state may do no more than protect against force, theft and fraud and enforce contracts; anything more violates rights.",
    "Critique of Rawls — Redistribution takes from the deserving to give to others; 'taxation of earnings from labour is on a par with forced labour.'",
    "Self-Ownership — Individuals own themselves and hence the fruits of their labour, which sets a hard limit on state claims.",
    "Experience Machine — A thought experiment showing we value authentic living, not just pleasurable states — a rebuttal to hedonism."
  ],
  quotes:[
    "Individuals have rights, and there are things no person or group may do to them without violating those rights.",
    "Taxation of earnings from labour is on a par with forced labour.",
    "The minimal state is the most extensive state that can be justified."
  ],
  essay:[
    "Role of the state in the economy",
    "Welfare vs. freedom",
    "Minimum government, maximum governance",
    "Individual rights vs. collective good"
  ],
  ethics:[
    "Libertarian critique of welfare — the counterweight to Rawls in comparative answers"
  ]
},
{
  id:"amartya-sen", name:"Amartya Sen", years:"b. 1933", place:"India",
  cat:"contemporary", wiki:"Amartya Sen", school:"Capability Approach · Welfare Economics",
  tag:["Essay","Ethics"],
  gist:"Development is the expansion of substantive freedom — judge progress by what people are actually able to be and do.",
  ideas:[
    "Capability Approach — Well-being is not income or utility but 'capabilities': the real freedoms people have to lead lives they value. Basis of the Human Development Index.",
    "Development as Freedom — Freedom is both the primary end and the principal means of development. Political liberty, economic facilities, social opportunity, transparency guarantees and protective security are its five instrumental freedoms.",
    "Famines and Democracy — 'No famine has ever taken place in a functioning democracy with a free press.' Entitlement failure, not food shortage, causes famine.",
    "Missing Women — His statistical work exposed over 100 million 'missing women' from sex-selective neglect, putting gender injustice on the economics agenda.",
    "Niti and Nyaya — Distinguishing perfect institutional arrangement (niti) from the actual realisation of justice in people's lives (nyaya). Comparative, not transcendental, justice.",
    "The Argumentative Indian — India's long heritage of public reasoning, dissent and heterodoxy is itself a democratic resource."
  ],
  quotes:[
    "Development can be seen ... as a process of expanding the real freedoms that people enjoy.",
    "Poverty must be seen as the deprivation of basic capabilities rather than merely as lowness of incomes.",
    "No substantial famine has ever occurred in any independent and democratic country with a relatively free press.",
    "The success of a society is to be evaluated primarily by the substantive freedoms that its members enjoy."
  ],
  essay:[
    "Development as freedom",
    "Growth without human development is meaningless",
    "Hunger amid plenty",
    "Democracy, dissent and public reasoning",
    "Gender inequality in India"
  ],
  ethics:[
    "Justice — nyaya vs. niti in administrative decisions",
    "Human development and welfare as ethical goals",
    "Ethics of public policy: capabilities, not handouts",
    "Transparency guarantees and probity"
  ]
},
{
  id:"arendt", name:"Hannah Arendt", years:"1906–1975", place:"Germany / United States",
  cat:"contemporary", wiki:"Hannah Arendt", school:"Political Theory · Phenomenology",
  tag:["Essay","Ethics"],
  gist:"Evil can become ordinary — the danger is not only hatred, but thoughtlessness, obedience and the collapse of personal judgement.",
  ideas:[
    "Banality of Evil — Watching Eichmann's trial, she argued the greatest crimes are committed not by fanatics but by ordinary officials who never stop to think about what they are doing. Indispensable for any discussion of bureaucratic complicity.",
    "Thoughtlessness as the Root of Evil — The failure to exercise independent judgement, not innate wickedness, enables atrocity.",
    "Vita Activa — Labour (biological necessity), Work (making durable things) and Action (speech and deed among equals, the truly political life).",
    "Totalitarianism — Built on loneliness, propaganda and the destruction of the space between people where politics happens.",
    "Right to Have Rights — Statelessness reveals that human rights are meaningless without membership in a political community. Crucial for refugee and citizenship debates."
  ],
  quotes:[
    "The sad truth is that most evil is done by people who never make up their minds to be either good or evil.",
    "The most radical revolutionary will become a conservative the day after the revolution.",
    "No one has the right to obey.",
    "Power corresponds to the human ability not just to act but to act in concert."
  ],
  essay:[
    "Obedience and moral responsibility",
    "Bureaucracy and the erosion of conscience",
    "Refugees and the right to have rights",
    "Silence of the majority"
  ],
  ethics:[
    "Ethics & human interface — accountability of the individual within a system",
    "'I was only following orders' — the limits of obedience",
    "Moral courage and whistleblowing",
    "Bureaucratic apathy as an ethical failure"
  ]
},
{
  id:"berlin", name:"Isaiah Berlin", years:"1909–1997", place:"Latvia / Britain",
  cat:"contemporary", wiki:"Isaiah Berlin", school:"Value Pluralism · Liberalism",
  tag:["Essay","Ethics"],
  gist:"Freedom has more than one meaning — a free society must balance competing values rather than pretend they perfectly harmonise.",
  ideas:[
    "Negative Liberty — Freedom from external interference: the area within which a person can act unobstructed. The classic liberal conception.",
    "Positive Liberty — Freedom to be one's own master, to realise one's potential. Berlin warned it can be twisted into 'forcing people to be free' by those who claim to know their real interests.",
    "Value Pluralism — Genuine human values (liberty, equality, justice, mercy) are plural and sometimes irreconcilable. Tragic choice, not a single right answer, is the human condition.",
    "Against Monism — The belief that all good things are compatible has justified the worst tyrannies of history.",
    "Hedgehog and the Fox — 'The fox knows many things, but the hedgehog knows one big thing' — a metaphor for styles of thought."
  ],
  quotes:[
    "Freedom for the wolves has often meant death to the sheep.",
    "If liberty and equality are both among the primary objectives of human beings, and equality and liberty are both compatible, ... there must be some choices.",
    "There is no social world without loss."
  ],
  essay:[
    "Freedom: from what and for what?",
    "Liberty vs. equality: an eternal tension",
    "Pluralism and tolerance",
    "No single formula for human happiness"
  ],
  ethics:[
    "Conflict between competing values in ethical dilemmas",
    "Liberty and paternalism in welfare policy",
    "Why case studies rarely have one right answer"
  ]
},
{
  id:"foucault", name:"Michel Foucault", years:"1926–1984", place:"France",
  cat:"contemporary", wiki:"Michel Foucault", school:"Post-structuralism",
  tag:["Essay"],
  gist:"Power is everywhere, and it works by producing knowledge, norms and self-policing subjects.",
  ideas:[
    "Power/Knowledge — Knowledge is not neutral; it is produced by and reinforces power. Who defines 'madness', 'criminality' or 'development' exercises power.",
    "Panopticism — Bentham's prison becomes a metaphor for modern society: because we may always be watched, we discipline ourselves. Prophetic for surveillance, data and privacy debates.",
    "Disciplinary Society — Modern power works not by spectacular punishment but through schools, hospitals, barracks and offices that normalise behaviour.",
    "Biopower — The state's management of populations: health, birth rates, sanitation, statistics — governance of life itself.",
    "Governmentality — The 'conduct of conduct': how citizens are shaped to govern themselves in line with state objectives."
  ],
  quotes:[
    "Where there is power, there is resistance.",
    "Knowledge is not for knowing: knowledge is for cutting.",
    "Visibility is a trap."
  ],
  essay:[
    "Surveillance state and the right to privacy",
    "Data is the new power",
    "Who defines normal?",
    "Technology and freedom"
  ],
  ethics:[
    "Ethical issues in surveillance, Aadhaar and data governance",
    "Power asymmetry between citizen and state"
  ]
},
{
  id:"habermas", name:"Jürgen Habermas", years:"b. 1929", place:"Germany",
  cat:"contemporary", wiki:"Jürgen Habermas", school:"Critical Theory · Discourse Ethics",
  tag:["Essay","Ethics"],
  gist:"Legitimate norms are those that all affected could accept in a free, undistorted conversation.",
  ideas:[
    "Public Sphere — The space between state and market where citizens debate common concerns. Its capture by commerce and spin is a crisis for democracy.",
    "Discourse Ethics — A norm is valid only if all affected persons could agree to it in a rational, coercion-free discussion. Consultation is not a courtesy but a condition of legitimacy.",
    "Ideal Speech Situation — Debate free of power, deception and manipulation, where only the force of the better argument prevails.",
    "Colonisation of the Lifeworld — Money and bureaucratic power invade the everyday world of meaning and relationships, hollowing out community.",
    "Deliberative Democracy — Democracy is not merely aggregating preferences by voting but forming them through public reason."
  ],
  quotes:[
    "The public sphere is a network for communicating information and points of view.",
    "In discourse, only the force of the better argument prevails.",
    "Democracy requires the institutionalisation of public discourse."
  ],
  essay:[
    "Deliberative democracy and public consultation",
    "Media, misinformation and the public sphere",
    "Social media: connecting or fragmenting?",
    "Consultation in policymaking"
  ],
  ethics:[
    "Ethics of public consultation and pre-legislative scrutiny",
    "Transparency and the citizen's right to reasons",
    "Communication ethics in administration"
  ]
},
{
  id:"ostrom", name:"Elinor Ostrom", years:"1933–2012", place:"United States",
  cat:"contemporary", wiki:"Elinor Ostrom", school:"Institutional Economics · Commons",
  tag:["Essay","Ethics"],
  gist:"Communities can govern shared resources themselves — the tragedy of the commons is not inevitable.",
  ideas:[
    "Governing the Commons — Empirical demolition of Hardin's 'tragedy of the commons': communities from Rajasthan to the Swiss Alps have managed forests, pastures and water sustainably for centuries.",
    "Eight Design Principles — Clear boundaries, rules fitted to local conditions, participation in rule-making, monitoring, graduated sanctions, cheap conflict resolution, recognised right to organise, nested enterprises.",
    "Polycentric Governance — Multiple overlapping centres of decision-making outperform a single central authority for complex problems like climate change.",
    "Beyond Market vs. State — A third way: neither privatisation nor nationalisation but community self-governance. Directly relevant to JFM, water user associations and panchayats."
  ],
  quotes:[
    "There is no reason to believe that bureaucrats and politicians are any better at solving problems than the people on the spot.",
    "What we have ignored is what citizens can do.",
    "A resource arrangement that works in practice can work in theory."
  ],
  essay:[
    "Tragedy of the commons revisited",
    "Community participation in resource management",
    "Decentralisation and local self-government",
    "Climate action begins locally"
  ],
  ethics:[
    "Trust and social capital in governance",
    "Community participation as an ethical and practical necessity",
    "Ethics of natural resource management"
  ]
},
{
  id:"nussbaum", name:"Martha Nussbaum", years:"b. 1947", place:"United States",
  cat:"contemporary", wiki:"Martha Nussbaum", school:"Capability Approach · Feminist Philosophy",
  tag:["Essay","Ethics"],
  gist:"A just society must secure human capabilities — dignity requires real opportunities, not formal rights alone.",
  ideas:[
    "Ten Central Capabilities — Life; bodily health; bodily integrity; senses, imagination and thought; emotions; practical reason; affiliation; other species; play; control over one's environment. She gave Sen's framework a concrete, actionable list.",
    "Dignity Threshold — Below a minimum level of each capability, a life is not worthy of human dignity. Government's job is to raise everyone above the threshold.",
    "Emotions and Reason — Compassion, grief and love are cognitive judgements about what matters, not irrational disturbances.",
    "Not for Profit — Cutting humanities from education produces technically able citizens incapable of critical thought and empathy; a warning for skill-only education policy.",
    "Political Emotions — A decent society must actively cultivate compassion and civic love, not just enforce rules."
  ],
  quotes:[
    "A life that is not worthy of being lived is not a human life.",
    "Capabilities are not just abilities residing inside a person but also freedoms or opportunities created by a combination of personal abilities and the political, social and economic environment.",
    "Anger is a poison to democratic politics."
  ],
  essay:[
    "Humanities education in a technological age",
    "Dignity as the goal of development",
    "Emotions in public life",
    "Women's capabilities and empowerment"
  ],
  ethics:[
    "Human values and the role of education in inculcating them",
    "Emotional intelligence — emotions as cognitive judgements",
    "Dignity as the threshold of welfare policy"
  ]
},
{
  id:"sartre", name:"Jean-Paul Sartre", years:"1905–1980", place:"France",
  cat:"contemporary", wiki:"Jean-Paul Sartre", school:"Existentialism",
  tag:["Essay"],
  gist:"Existence precedes essence — we are condemned to be free, and wholly responsible for what we make of ourselves.",
  ideas:[
    "Existence Precedes Essence — There is no fixed human nature or predetermined purpose; we exist first and define ourselves through choices.",
    "Radical Freedom & Responsibility — 'Man is condemned to be free': we cannot escape choosing, and we are responsible for the values our choices affirm.",
    "Bad Faith (Mauvaise Foi) — Self-deception, pretending one had no choice, hiding behind a role or an order. A precise name for the excuse-making official.",
    "Anguish and Authenticity — The weight of choosing without external guarantees; authenticity means owning it rather than fleeing into convention."
  ],
  quotes:[
    "Man is condemned to be free.",
    "We are our choices.",
    "Everything has been figured out, except how to live.",
    "Freedom is what you do with what's been done to you."
  ],
  essay:[
    "Freedom brings responsibility",
    "We are what we choose to be",
    "Meaning in a meaningless world"
  ],
  ethics:[
    "Moral responsibility for one's decisions — no hiding behind rules",
    "Bad faith and the excuse of 'orders from above'"
  ]
},
{
  id:"camus", name:"Albert Camus", years:"1913–1960", place:"Algeria / France",
  cat:"contemporary", wiki:"Albert Camus", school:"Absurdism",
  tag:["Essay"],
  gist:"Life is absurd — and the answer is revolt, not resignation. One must imagine Sisyphus happy.",
  ideas:[
    "The Absurd — The clash between our hunger for meaning and the universe's silence. Neither suicide nor false hope is the answer; lucid revolt is.",
    "Myth of Sisyphus — Condemned to roll a boulder forever, Sisyphus finds dignity in the struggle itself. 'One must imagine Sisyphus happy.'",
    "Revolt — 'I rebel, therefore we exist.' Rebellion against injustice affirms a shared human value and creates solidarity.",
    "Rejection of Ideological Murder — In The Rebel he refused revolutionary violence that sacrifices present persons to future utopias."
  ],
  quotes:[
    "One must imagine Sisyphus happy.",
    "In the depth of winter, I finally learned that within me there lay an invincible summer.",
    "I rebel, therefore we exist.",
    "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion."
  ],
  essay:[
    "Struggle gives life meaning",
    "Hope in the face of adversity",
    "Rebellion and social change",
    "Ends and means in revolutionary movements"
  ],
  ethics:[
    "Moral courage in the face of futility",
    "Rejecting violence as a means to a good end"
  ]
},
{
  id:"beauvoir", name:"Simone de Beauvoir", years:"1908–1986", place:"France",
  cat:"contemporary", wiki:"Simone de Beauvoir", school:"Existential Feminism",
  tag:["Essay","Ethics"],
  gist:"One is not born, but rather becomes, a woman — gender is made by society, not nature.",
  ideas:[
    "The Second Sex (1949) — The founding text of second-wave feminism: woman has been constructed as 'the Other' against man as the norm.",
    "Sex vs. Gender — 'One is not born, but rather becomes, a woman.' Femininity is a social construction, not a biological destiny. The origin of the entire sex/gender distinction.",
    "Immanence and Transcendence — Women have been confined to repetitive maintenance (immanence) while men were granted projects and achievement (transcendence).",
    "Economic Independence — Real emancipation requires work, income and reproductive autonomy, not merely legal equality.",
    "Ethics of Ambiguity — Freedom is only meaningful when we will the freedom of others too."
  ],
  quotes:[
    "One is not born, but rather becomes, a woman.",
    "I am too intelligent, too demanding, and too resourceful for anyone to be able to take charge of me entirely.",
    "To will oneself free is also to will others free.",
    "Change your life today. Don't gamble on the future, act now, without delay."
  ],
  essay:[
    "Gender is a social construct",
    "Women's economic independence and empowerment",
    "Patriarchy and the second sex",
    "Beyond legal equality: real emancipation"
  ],
  ethics:[
    "Gender justice as a foundational value",
    "Attitude formation — how social conditioning creates bias",
    "Unconscious bias in administration"
  ]
},
{
  id:"fanon", name:"Frantz Fanon", years:"1925–1961", place:"Martinique / Algeria",
  cat:"contemporary", wiki:"Frantz Fanon", school:"Post-colonial Theory",
  tag:["Essay"],
  gist:"Colonialism colonises the mind first — decolonisation must be psychological as well as political.",
  ideas:[
    "Psychology of Colonialism — Colonial rule implants inferiority in the colonised; political independence without mental decolonisation is incomplete.",
    "Black Skin, White Masks — The colonised internalise the coloniser's values, imitating language, dress and standards of beauty.",
    "The Wretched of the Earth — Analysis of the anti-colonial struggle and a warning that a new native elite may simply replace the old rulers.",
    "National Consciousness vs. Nationalism — Warns of a post-independence bourgeoisie that inherits privilege without transforming society."
  ],
  quotes:[
    "Each generation must, out of relative obscurity, discover its mission, fulfil it or betray it.",
    "To speak a language is to take on a world, a culture.",
    "Imperialism leaves behind germs of rot which we must clinically detect and remove."
  ],
  essay:[
    "Decolonising the mind",
    "Language, culture and identity",
    "Has independence reached everyone?",
    "Elite capture of development"
  ],
  ethics:[
    "Ethics of representation and cultural dignity",
    "Elite capture and inclusive governance"
  ]
},
{
  id:"freire", name:"Paulo Freire", years:"1921–1997", place:"Brazil",
  cat:"contemporary", wiki:"Paulo Freire", school:"Critical Pedagogy",
  tag:["Essay","Ethics"],
  gist:"Education is either domesticating or liberating — never neutral.",
  ideas:[
    "Banking Model of Education — Teachers 'deposit' information into passive students. It produces obedience, not thought, and mirrors oppression.",
    "Problem-Posing Education — Dialogue between teacher and learner, both learning together; the basis of participatory and adult education.",
    "Conscientisation (Conscientização) — Developing critical awareness of one's social reality and the capacity to act on it. Literacy campaigns become empowerment.",
    "Praxis — Reflection and action upon the world in order to transform it; theory without action is verbalism, action without theory is activism."
  ],
  quotes:[
    "Education either functions as an instrument to bring about conformity or freedom.",
    "Washing one's hands of the conflict between the powerful and the powerless means to side with the powerful, not to be neutral.",
    "No one is born fully-formed: it is through self-experience in the world that we become what we are."
  ],
  essay:[
    "Education for liberation, not employment alone",
    "Literacy and empowerment",
    "Role of teachers in nation-building",
    "Neutrality is a choice"
  ],
  ethics:[
    "Role of educational institutions in inculcating values",
    "Ethical duty not to be neutral in the face of injustice"
  ]
},
{
  id:"schumacher", name:"E. F. Schumacher", years:"1911–1977", place:"Germany / Britain",
  cat:"contemporary", wiki:"E. F. Schumacher", school:"Buddhist Economics · Appropriate Technology",
  tag:["Essay","Ethics"],
  gist:"Small is beautiful — economics as if people mattered.",
  ideas:[
    "Small is Beautiful (1973) — Gigantism in technology and organisation dehumanises; human-scale institutions serve people better.",
    "Buddhist Economics — The aim of work is not maximum output but the development of character, the overcoming of ego, and the production of necessary goods. Maximum well-being with minimum consumption.",
    "Intermediate/Appropriate Technology — Technology suited to local resources and skills, labour-intensive and repairable. Deeply influenced by Gandhi's khadi and village industries.",
    "Permanence — An economy dependent on non-renewable capital treated as income is not viable; the root idea of sustainability."
  ],
  quotes:[
    "Small is beautiful.",
    "Any intelligent fool can make things bigger and more complex. It takes a touch of genius to move in the opposite direction.",
    "Man is small, and therefore small is beautiful.",
    "An attitude to life which seeks fulfilment in the single-minded pursuit of wealth does not fit into this world."
  ],
  essay:[
    "Sustainable development",
    "Appropriate technology for rural India",
    "Economic growth vs. human well-being",
    "Gandhi's economics in the 21st century"
  ],
  ethics:[
    "Ethics of consumption and sustainability",
    "Work as a source of dignity, not just income"
  ]
},

/* ============== INDIAN RENAISSANCE & FREEDOM MOVEMENT ============== */
{
  id:"ram-mohan-roy", name:"Raja Ram Mohan Roy", years:"1772–1833", place:"Bengal, India",
  cat:"indian-modern", wiki:"Ram Mohan Roy", school:"Brahmo Samaj · Indian Renaissance",
  tag:["Essay","Ethics"],
  gist:"The Father of the Indian Renaissance — reason and scripture together against social evil.",
  ideas:[
    "Abolition of Sati — Campaigned relentlessly until Regulation XVII of 1829 outlawed it; the first great victory of Indian social reform.",
    "Reform from Within — He argued against social evils using Hindu scripture itself, showing that reform need not mean rejection of tradition.",
    "Rationalism & Monotheism — Founded the Brahmo Samaj (1828) preaching one formless God, opposing idolatry, polytheism and priestly authority.",
    "Modern Education — Pressed for English, science and mathematics over exclusively Sanskrit learning, seeing knowledge as the engine of regeneration.",
    "Press Freedom — Petitioned against press restrictions in 1823, an early Indian defence of the freedom of expression.",
    "Women's Rights — Advocated women's property rights and opposed polygamy and child marriage."
  ],
  quotes:[
    "The present system of religion adhered to by the Hindus is not well calculated to promote their political interest.",
    "Just as the eyes need light in order to see, so does the mind need reason.",
    "I have never ceased to contemplate with the strongest imaginable horror the customs of my countrymen."
  ],
  essay:[
    "Social reform and modernity",
    "Tradition need not be the enemy of reform",
    "Freedom of the press",
    "Education and social change"
  ],
  ethics:[
    "Indian moral thinkers — reason as an instrument of reform",
    "Moral courage in challenging social custom",
    "Empathy for the vulnerable — women's dignity"
  ]
},
{
  id:"vivekananda", name:"Swami Vivekananda", years:"1863–1902", place:"Bengal, India",
  cat:"indian-modern", wiki:"Swami Vivekananda", school:"Practical Vedanta · Neo-Hinduism",
  tag:["Essay","Ethics"],
  gist:"Strength is a moral resource — education should awaken confidence, character and service rather than dependence.",
  ideas:[
    "Daridra Narayana / Practical Vedanta — God resides in the poor; serving the hungry is higher worship than temple ritual. 'Religion is not for empty bellies.'",
    "Man-Making Education — 'Education is the manifestation of the perfection already in man.' Its purpose is character, strength and self-reliance, not clerkship.",
    "Strength and Fearlessness — 'Weakness is death.' He held that timidity, not sin, was India's real malady.",
    "Universal Religion & Tolerance — At Chicago (1893) he spoke for a faith that teaches 'both tolerance and universal acceptance'.",
    "Faith in Oneself — 'Have faith in yourselves… He is an atheist who does not believe in himself.'",
    "Youth as Nation-Builders — 'Give me a hundred energetic young men and I shall transform India.'"
  ],
  quotes:[
    "They alone live who live for others.",
    "Arise, awake, and stop not till the goal is reached.",
    "Education is the manifestation of the perfection already in man.",
    "Strength, strength it is that we want so much in this life."
  ],
  essay:[
    "Youth and nation-building",
    "Education for character",
    "Service to humanity is service to God",
    "Spirituality in a material age",
    "Tolerance: India's gift to the world"
  ],
  ethics:[
    "Indian moral thinkers — service (seva) as the highest ethic",
    "Human values and role of education",
    "Compassion and empathy towards the weaker sections",
    "Self-confidence and moral strength in public servants"
  ]
},
{
  id:"tagore", name:"Rabindranath Tagore", years:"1861–1941", place:"Bengal, India",
  cat:"indian-modern", wiki:"Rabindranath Tagore", school:"Universal Humanism",
  tag:["Essay","Ethics"],
  gist:"Freedom of mind is the basis of a humane civilisation — education should cultivate creativity, openness and universal fellowship.",
  ideas:[
    "Universal Humanism — He distrusted aggressive nationalism as 'organised selfishness' and placed humanity above the nation-state.",
    "Freedom of Mind — 'Where the mind is without fear and the head is held high…' The famous prayer for a nation of open, fearless minds.",
    "Education at Santiniketan — Learning in nature, through art, dialogue and freedom, not rote and confinement. 'A mind all logic is like a knife all blade.'",
    "Rural Reconstruction at Sriniketan — Self-reliant village development through cooperatives, crafts, health and education.",
    "Renunciation of Knighthood (1919) — Returned his knighthood after Jallianwala Bagh — a defining act of moral protest.",
    "Debate with Gandhi — He questioned the burning of foreign cloth and non-cooperation's negativity, defending reason and international exchange."
  ],
  quotes:[
    "Where the mind is without fear and the head is held high; where knowledge is free.",
    "The highest education is that which does not merely give us information but makes our life in harmony with all existence.",
    "Patriotism cannot be our final spiritual shelter; my refuge is humanity.",
    "You can't cross the sea merely by standing and staring at the water."
  ],
  essay:[
    "Nationalism vs. internationalism",
    "Education: freedom or factory?",
    "Freedom of thought and expression",
    "Culture as the soul of a nation",
    "Man and nature"
  ],
  ethics:[
    "Indian moral thinkers — humanism above narrow identity",
    "Role of education in inculcating values",
    "Moral courage: the renunciation of knighthood as a case study"
  ]
},
{
  id:"gandhi", name:"Mahatma Gandhi", years:"1869–1948", place:"Gujarat, India",
  cat:"indian-modern", wiki:"Mahatma Gandhi", school:"Satyagraha · Sarvodaya",
  tag:["Essay","Ethics"],
  gist:"The means shape the end — truth, non-violence and self-restraint turn politics into a form of moral action.",
  ideas:[
    "Satyagraha — 'Truth-force' or 'soul-force': resistance to injustice by voluntary self-suffering rather than by injuring the opponent, aiming to convert rather than coerce.",
    "Ahimsa — Non-violence in thought, word and deed. Not the weapon of the weak but 'the mightiest force at the disposal of mankind'.",
    "Purity of Means — 'The means may be likened to a seed, the end to a tree.' The single sharpest contrast with Machiavelli and Kautilya, and a favourite UPSC comparison.",
    "Trusteeship — The wealthy should hold their surplus as trustees for society. A moral middle path between capitalism and forced expropriation.",
    "Sarvodaya & Antyodaya — The welfare of all, beginning with the last person. His Talisman: 'Recall the face of the poorest and weakest man you have seen and ask if the step you contemplate will be of any use to him.'",
    "Seven Social Sins — Wealth without work; pleasure without conscience; knowledge without character; commerce without morality; science without humanity; worship without sacrifice; politics without principle. The most cited framework in GS-IV.",
    "Swaraj — Not merely political independence but self-rule: control over one's own mind and desires, and village-level self-government (Gram Swaraj).",
    "Bread Labour & Dignity of Work — Everyone must do physical labour; cleaning one's own toilet as a lesson in equality."
  ],
  quotes:[
    "An ounce of practice is worth more than tons of preaching.",
    "My life is my message.",
    "The means may be likened to a seed, the end to a tree; and there is just the same inviolable connection between the means and the end.",
    "The best way to find yourself is to lose yourself in the service of others.",
    "Recall the face of the poorest and the weakest man whom you may have seen, and ask yourself if the step you contemplate is going to be of any use to him."
  ],
  essay:[
    "Purity of means and ends",
    "Non-violence in the 21st century",
    "Antyodaya: development from the last person up",
    "Trusteeship and corporate social responsibility",
    "Gandhi's seven social sins",
    "Village republics and decentralisation"
  ],
  ethics:[
    "Indian moral thinkers — the central figure of GS-IV",
    "Seven Social Sins as an ethical framework for case studies",
    "Gandhi's Talisman as a decision-making test for civil servants",
    "Ends vs. means dilemma",
    "Probity: politics without principle, commerce without morality",
    "Citizen's charter and the customer as master"
  ]
},
{
  id:"ambedkar", name:"Dr. B. R. Ambedkar", years:"1891–1956", place:"Maharashtra, India",
  cat:"indian-modern", wiki:"B. R. Ambedkar", school:"Constitutionalism · Social Democracy",
  tag:["Essay","Ethics"],
  gist:"Political democracy needs social democracy — liberty, equality and fraternity must exist together in everyday life.",
  ideas:[
    "Social Democracy — 'Political democracy cannot last unless there lies at the base of it social democracy' — liberty, equality and fraternity not as separate items but as a union.",
    "Annihilation of Caste — Caste cannot be reformed, only abolished; it is not merely a division of labour but a division of labourers, sustained by graded inequality.",
    "Constitutional Morality — Constitutional government depends not only on text but on habits of restraint, respect for institutions and acceptance of lawful limits.",
    "Educate, Agitate, Organise — The programme for the oppressed: education first, then organised, lawful agitation.",
    "Grammar of Anarchy — He warned against methods of civil disobedience once constitutional remedies exist, and against hero-worship: 'bhakti in politics is a sure road to degradation and eventual dictatorship.'",
    "Fraternity — He considered fraternity the hardest to achieve and the most essential; without it liberty and equality become mere paint.",
    "Economic Thought — State socialism in key industries, land reform, and his 1918 work on small holdings; also the intellectual architect of the RBI's design."
  ],
  quotes:[
    "Political democracy cannot last unless there lies at the base of it social democracy.",
    "Caste is not merely a division of labour. It is also a division of labourers.",
    "Cultivation of mind should be the ultimate aim of human existence.",
    "Bhakti in religion may be a road to the salvation of the soul. But in politics, bhakti ... is a sure road to degradation and to eventual dictatorship.",
    "Cultivation of mind should be the ultimate aim of human existence."
  ],
  essay:[
    "Social democracy: the unfinished agenda",
    "Caste and the idea of India",
    "Constitutional morality",
    "Women's progress as the measure of a nation",
    "Fraternity: the forgotten principle",
    "Rule of law vs. rule by law"
  ],
  ethics:[
    "Indian moral thinkers — constitutional morality as a civil service value",
    "Justice, equality and fraternity as foundational values",
    "Ethics of affirmative action",
    "Impartiality and non-discrimination in administration",
    "Hero-worship and the danger of personality cults"
  ]
},
{
  id:"nehru", name:"Jawaharlal Nehru", years:"1889–1964", place:"Uttar Pradesh, India",
  cat:"indian-modern", wiki:"Jawaharlal Nehru", school:"Democratic Socialism · Scientific Temper",
  tag:["Essay","Ethics"],
  gist:"Modern India requires scientific temper, democratic institutions and pluralism — modernisation without surrendering diversity.",
  ideas:[
    "Scientific Temper — He coined the term: a spirit of inquiry, evidence and willingness to revise belief. Now a Fundamental Duty under Article 51A(h).",
    "Secularism — Not irreligion but equal respect and state neutrality among faiths (sarva dharma sambhava in practice).",
    "Democratic Socialism & Planning — A mixed economy with a leading public sector; the Planning Commission, five-year plans, and 'temples of modern India' — dams, steel plants, IITs.",
    "Non-Alignment & Panchsheel — Strategic autonomy for newly independent nations; the five principles of peaceful coexistence.",
    "Institution-Building — Deliberate nurturing of Parliament, an independent judiciary, the Election Commission, the CAG and a free press.",
    "Unity in Diversity — The Discovery of India presents the nation as a palimpsest, layered rather than singular."
  ],
  quotes:[
    "The scientific temper is a way of life — an individual and social process of thinking and acting.",
    "A moment comes, which comes but rarely in history, when we step out from the old to the new.",
    "Culture is the widening of the mind and of the spirit.",
    "Democracy is good. I say this because other systems are worse."
  ],
  essay:[
    "Scientific temper in the age of misinformation",
    "Secularism: Indian model",
    "Institutions and democracy",
    "Planning and the development state",
    "Unity in diversity"
  ],
  ethics:[
    "Foundational values — objectivity and scientific temper",
    "Secularism and impartiality as civil service values",
    "Institutional integrity"
  ]
},
{
  id:"patel", name:"Sardar Vallabhbhai Patel", years:"1875–1950", place:"Gujarat, India",
  cat:"indian-modern", wiki:"Vallabhbhai Patel", school:"Administrative Statesmanship",
  tag:["Essay","Ethics"],
  gist:"Nation-building requires firmness with reconciliation — authority is strongest when it creates trust and common institutional purpose.",
  ideas:[
    "Integration of Princely States — 565 states merged with a mix of persuasion and firmness; the greatest administrative achievement of modern India.",
    "Steel Frame of India — He defended the all-India services in the Constituent Assembly: 'You will not have a united India if you have not a good all-India service.'",
    "Fearless and Impartial Advice — He insisted the civil servant must have the freedom to give frank advice without fear: 'Let him give his frank opinion.' A core text for civil service neutrality.",
    "Bardoli Satyagraha (1928) — Disciplined, non-violent mass mobilisation of peasants against a revenue hike, which earned him the title 'Sardar'.",
    "Unity Above Sentiment — Pragmatic, decisive statecraft balanced with Gandhian loyalty."
  ],
  quotes:[
    "The employees are the backbone of the country’s administration.",
    "A united India is the dream of all of us.",
    "Take to the path of duty; it leads to the highest form of service.",
    "Take to the path of dharma — the path of truth and justice."
  ],
  essay:[
    "National integration",
    "Administrative leadership and decisiveness",
    "Unity in diversity",
    "Neutrality of the civil services"
  ],
  ethics:[
    "Public service values — political neutrality and fearless advice",
    "Civil servant's right and duty to give frank opinion",
    "Leadership and decision-making under pressure"
  ]
},
{
  id:"aurobindo", name:"Sri Aurobindo", years:"1872–1950", place:"Bengal / Puducherry, India",
  cat:"indian-modern", wiki:"Sri Aurobindo", school:"Integral Yoga · Spiritual Nationalism",
  tag:["Essay"],
  gist:"From revolutionary nationalism to integral yoga — the evolution of human consciousness itself.",
  ideas:[
    "Integral Yoga — A synthesis of the paths of knowledge, devotion and work aimed at transforming life on earth, not escaping it.",
    "Spiritual Evolution — Humanity is a transitional being; the next step is a supramental consciousness. Evolution continues in the sphere of mind and spirit.",
    "Spiritual Nationalism — 'Nationalism is not a mere political programme; nationalism is a religion that has come from God.' India's freedom had a civilisational purpose.",
    "Human Unity — The Ideal of Human Unity anticipated world federation while insisting diversity must be preserved.",
    "Auroville — A township founded on his vision as an experiment in human unity without money or nationality."
  ],
  quotes:[
    "All life is yoga.",
    "The hidden harmony is stronger than the visible.",
    "Nationalism is immortal; it cannot die."
  ],
  essay:[
    "Spirituality and nationalism",
    "Human evolution beyond the material",
    "Idea of India: a civilisational view"
  ],
  ethics:[
    "Sources of ethics — inner spiritual transformation"
  ]
},
{
  id:"tilak", name:"Bal Gangadhar Tilak", years:"1856–1920", place:"Maharashtra, India",
  cat:"indian-modern", wiki:"Bal Gangadhar Tilak", school:"Extremist Nationalism · Karma Yoga",
  tag:["Essay"],
  gist:"Political freedom is inseparable from civic duty — action, not passive acceptance, is the ethic of the Gita and public life.",
  ideas:[
    "Swaraj as Birthright — 'Swaraj is my birthright and I shall have it' shifted nationalism from petition to assertion.",
    "Gita Rahasya — Written in Mandalay prison, it reinterpreted the Bhagavad Gita as a gospel of action (karma yoga) and selfless duty rather than renunciation.",
    "Mass Mobilisation — Ganesh and Shivaji festivals turned religion and history into instruments of mass political awakening.",
    "Kesari and Maratha — Journalism as a nationalist weapon; twice imprisoned for sedition.",
    "Swadeshi and National Education — Boycott of foreign goods paired with the building of indigenous institutions."
  ],
  quotes:[
    "Swaraj is my birthright and I shall have it.",
    "The Gita teaches us to perform our duty without attachment to the fruits of action.",
    "Freedom is the very life of an individual."
  ],
  essay:[
    "Rights come with struggle",
    "Role of the press in freedom movements",
    "Action over renunciation",
    "Culture as a mobilising force"
  ],
  ethics:[
    "Nishkama karma — selfless, duty-bound action as a public service value"
  ]
},
{
  id:"gokhale", name:"Gopal Krishna Gokhale", years:"1866–1915", place:"Maharashtra, India",
  cat:"indian-modern", wiki:"Gopal Krishna Gokhale", school:"Moderate Liberalism",
  tag:["Essay","Ethics"],
  gist:"Public service is disciplined constitutional work — reform requires patience, integrity and moral preparation.",
  ideas:[
    "Servants of India Society (1905) — Trained a cadre of full-time public workers pledged to a life of service on a subsistence allowance; a model of professional public service ethics.",
    "Spiritualisation of Politics — Politics must be conducted with a spirit of service and moral restraint, not for gain or ambition.",
    "Constitutional Methods — Persuasion, petition and reasoned argument; his budget speeches in the Imperial Legislative Council were masterpieces of evidence-based critique.",
    "Elementary Education Bill (1911) — Pioneered the demand for free and compulsory primary education, a century before the RTE Act.",
    "Mentor to Gandhi — Gandhi called him his political guru and toured India for a year on his advice before entering politics."
  ],
  quotes:[
    "What we require is not an accession of political power, but the education of the people.",
    "The true test of civilisation is not the census of the population, nor the size of the cities, but the kind of man and woman that it turns out.",
    "We must recognise that we are trustees for the poorest of our countrymen."
  ],
  essay:[
    "Politics as public service",
    "Constitutional methods vs. agitation",
    "Right to education",
    "Mentorship and nation-building"
  ],
  ethics:[
    "Public service values — service above self",
    "Ethics of political conduct and restraint",
    "Institution-building for value inculcation"
  ]
},
{
  id:"bose", name:"Subhas Chandra Bose", years:"1897–1945", place:"Bengal, India",
  cat:"indian-modern", wiki:"Subhas Chandra Bose", school:"Revolutionary Nationalism",
  tag:["Essay"],
  gist:"Leadership can demand sacrifice — freedom becomes real when individuals accept personal cost for a larger collective purpose.",
  ideas:[
    "Azad Hind Fauj — Built a disciplined army across caste, religion and region, with the Rani of Jhansi Regiment for women — remarkable social integration in the 1940s.",
    "Total Independence — Rejected dominion status and gradualism; complete freedom by whatever means available.",
    "Inclusive Nationalism — 'Jai Hind' and a deliberately composite army; he attacked communalism and untouchability.",
    "Leadership by Example — He asked for sacrifice only after offering his own comfort, career (he resigned from the ICS) and safety.",
    "Planned Economy — As Congress President he set up the National Planning Committee in 1938 under Nehru — the origin of Indian planning."
  ],
  quotes:[
    "Give me blood, and I promise you freedom.",
    "One individual may die for an idea, but that idea will, after his death, incarnate itself in a thousand lives.",
    "Freedom is not given, it is taken.",
    "No real change in history has ever been achieved by discussions."
  ],
  essay:[
    "Leadership by example",
    "Sacrifice and nation-building",
    "Unity across religion and region",
    "Ends and means in the freedom struggle"
  ],
  ethics:[
    "Leadership — commanding by sacrifice and shared hardship",
    "Resigning from service on a point of principle: a case study"
  ]
},
{
  id:"azad", name:"Maulana Abul Kalam Azad", years:"1888–1958", place:"India",
  cat:"indian-modern", wiki:"Abul Kalam Azad", school:"Composite Nationalism",
  tag:["Essay","Ethics"],
  gist:"India's composite culture is not a compromise but an achievement — and education is its guarantee.",
  ideas:[
    "Composite Nationalism — Opposed the two-nation theory on theological as well as political grounds; Hindus and Muslims form one indivisible Indian nation.",
    "Education Policy — As independent India's first Education Minister he founded the UGC, IITs, Sahitya/Lalit Kala/Sangeet Natak Akademis and pushed free universal primary education.",
    "Al-Hilal — His journal used Islamic scholarship to argue for anti-colonial unity, refusing to let religion become a wall.",
    "Cultural Pluralism — 'I am a Muslim and profoundly conscious of the fact… In addition, I am proud of being an Indian.'"
  ],
  quotes:[
    "Education imparted by heart can bring revolution in the society.",
    "We must not for a moment forget, it is a birthright of every individual to receive free and proper education.",
    "I am proud of being an Indian. I am part of the indivisible unity that is Indian nationality."
  ],
  essay:[
    "Composite culture and Indian secularism",
    "Education as nation-building",
    "Identity: plural, not exclusive"
  ],
  ethics:[
    "Secularism and religious tolerance as public values",
    "Role of education in inculcating values"
  ]
},
{
  id:"mn-roy", name:"M. N. Roy", years:"1887–1954", place:"Bengal, India",
  cat:"indian-modern", wiki:"M. N. Roy", school:"Radical Humanism",
  tag:["Essay"],
  gist:"Freedom cannot be secured by replacing one orthodoxy with another — Radical Humanism puts the autonomous individual at the centre.",
  ideas:[
    "Radical Humanism — Man is the measure and the end; no collective (nation, class, party) may be an end in itself.",
    "Party-less Democracy — Political parties corrupt democracy; he proposed organised local people's committees and direct participation.",
    "Rejection of Communism — Having co-founded communist parties in Mexico and India, he broke with Marxism over its subordination of the individual.",
    "Rationalism and Freedom — Freedom is the progressive removal of all restrictions on the unfolding of human potentiality; morality derives from reason, not revelation."
  ],
  quotes:[
    "Revolution is not a matter of political change alone; it is a change in the mentality of man.",
    "Freedom is the supreme value of human life.",
    "The purpose of all social endeavour should be the freedom of the individual."
  ],
  essay:[
    "Individual freedom vs. collective ideology",
    "Democracy beyond political parties",
    "Humanism as a value system"
  ],
  ethics:[
    "Sources of ethics — reason-based secular morality"
  ]
},
{
  id:"vinoba", name:"Acharya Vinoba Bhave", years:"1895–1982", place:"Maharashtra, India",
  cat:"indian-modern", wiki:"Vinoba Bhave", school:"Sarvodaya · Bhoodan",
  tag:["Essay","Ethics"],
  gist:"Social transformation need not rely only on coercion — persuasion, trusteeship and voluntary sharing can become instruments of justice.",
  ideas:[
    "Bhoodan Movement (1951) — Walked over 58,000 km asking landowners to donate a share of their land; roughly 4 million acres were pledged. Voluntary redistribution as an alternative to coercion or revolution.",
    "Gramdan — The next step: entire villages placing land in community ownership. A living experiment in Gandhian decentralisation.",
    "Sarvodaya — Welfare of all; he was named the first individual Satyagrahi by Gandhi in 1940.",
    "Power of Moral Persuasion — Proof that voluntary change can achieve what legislation struggled to: a compelling case for behavioural and persuasive approaches to policy."
  ],
  quotes:[
    "The real revolution is the revolution of the spirit.",
    "The land belongs to the one who tills it.",
    "The whole world is my home, and all people are my family."
  ],
  essay:[
    "Voluntary action vs. state coercion",
    "Land reform and social justice",
    "Moral persuasion as an instrument of change",
    "Behavioural change in public policy"
  ],
  ethics:[
    "Persuasion over compulsion in administration",
    "Compassion and trusteeship in practice"
  ]
},
{
  id:"jp-narayan", name:"Jayaprakash Narayan", years:"1902–1979", place:"Bihar, India",
  cat:"indian-modern", wiki:"Jayaprakash Narayan", school:"Total Revolution · Sarvodaya",
  tag:["Essay","Ethics"],
  gist:"Democracy is more than elections — political freedom requires active citizens, decentralisation and continuous vigilance against concentrated power.",
  ideas:[
    "Sampoorna Kranti (Total Revolution) — Transformation across seven spheres: social, economic, political, cultural, ideological, educational and spiritual. Political change alone is insufficient.",
    "Right to Recall & Participatory Democracy — Advocated citizens' power over representatives between elections and party-less village democracy.",
    "Resistance to the Emergency — His call to the police and army not to obey illegal orders, and his imprisonment, made him the moral centre of the anti-Emergency movement.",
    "From Marxism to Sarvodaya — Moved from socialist politics to Gandhian constructive work, renouncing office and power entirely.",
    "Loknayak — He refused every position of power he could have taken, giving his critique moral authority."
  ],
  quotes:[
    "Restoration of democracy is not enough; we must establish a new democracy.",
    "Total Revolution is a combination of seven revolutions: social, economic, political, cultural, ideological, educational and spiritual.",
    "The most important thing is the awakening of the people."
  ],
  essay:[
    "Democracy needs vigilant citizens",
    "Emergency and the resilience of Indian democracy",
    "Total revolution: changing systems and minds",
    "Power vs. moral authority"
  ],
  ethics:[
    "Moral courage in resisting unlawful authority",
    "Ethics of obedience: unlawful orders and the public servant",
    "Accountability of representatives to citizens"
  ]
},
{
  id:"lohia", name:"Ram Manohar Lohia", years:"1910–1967", place:"Uttar Pradesh, India",
  cat:"indian-modern", wiki:"Ram Manohar Lohia", school:"Democratic Socialism",
  tag:["Essay"],
  gist:"Caste and class are twin evils — socialism must be Indian, and equality must be immediate.",
  ideas:[
    "Sapta Kranti (Seven Revolutions) — Against inequality of man and woman, caste, colonial rule, economic inequality, private capital in weapons, unjust interference in private life, and for non-violence.",
    "Caste and Class Together — Indian socialism must attack caste, not just economic class; his 'backward castes' politics reshaped North Indian democracy.",
    "Special Opportunity — Early and forceful advocacy of preferential opportunity for backward castes and women, foreshadowing Mandal.",
    "Chauka-Chulha / Language Politics — Championed Indian languages against English elitism as a matter of democratic access.",
    "Immediacy of Equality — Rejected the argument that equality must wait for growth."
  ],
  quotes:[
    "Civil disobedience is the ultimate weapon of a citizen.",
    "Those who wait for the barricades to fall wait forever.",
    "Caste restricts opportunity. Restricted opportunity constricts ability."
  ],
  essay:[
    "Social justice and caste",
    "Language, elite and access",
    "Equality cannot wait for growth"
  ],
  ethics:[
    "Justice and equality of opportunity as foundational values"
  ]
},
{
  id:"deendayal", name:"Pandit Deendayal Upadhyaya", years:"1916–1968", place:"Uttar Pradesh, India",
  cat:"indian-modern", wiki:"Deendayal Upadhyaya", school:"Integral Humanism",
  tag:["Essay","Ethics"],
  gist:"Integral Humanism — develop the whole human being: body, mind, intellect and soul.",
  ideas:[
    "Integral Humanism (1965) — Rejects both capitalism and communism as materialist half-truths; the individual must be developed integrally across body (sharir), mind (man), intellect (buddhi) and soul (atma).",
    "Antyodaya — 'Rise of the last person.' Policy must be judged by its effect on the poorest; the name behind several Indian welfare schemes.",
    "Dharma Rajya — The state is subordinate to dharma (moral order), not sovereign over it; power constrained by ethics.",
    "Chiti and Virat — Every nation has an innate essence (chiti); development must be culturally rooted, not imitative.",
    "Decentralised Swadeshi Economy — Small-scale, employment-oriented production suited to Indian conditions."
  ],
  quotes:[
    "Each one of us should be a Karyakarta, working for the last man in the queue.",
    "Man, the highest creation of God, is losing his own identity. We must re-evaluate the progress.",
    "Our aim is not just to capture power but to transform society."
  ],
  essay:[
    "Development of the whole person",
    "Antyodaya: welfare from the bottom up",
    "Culture-rooted development models",
    "Beyond capitalism and communism"
  ],
  ethics:[
    "Indian moral thinkers — integral humanism as a values framework",
    "Antyodaya as an ethical test for policy"
  ]
},
{
  id:"kalam", name:"Dr. A. P. J. Abdul Kalam", years:"1931–2015", place:"Tamil Nadu, India",
  cat:"indian-modern", wiki:"A. P. J. Abdul Kalam", school:"Scientific Humanism",
  tag:["Essay","Ethics"],
  gist:"Vision must become collective action — education, integrity and aspiration can convert development from policy into a public mission.",
  ideas:[
    "Vision 2020 — A roadmap for India as a developed nation through agriculture, education, health, ICT and self-reliance in critical technologies.",
    "PURA — Providing Urban Amenities in Rural Areas: physical, electronic, knowledge and economic connectivity to stop distress migration.",
    "Ignited Minds — The youth are the nation's greatest resource; dreams that keep you awake are the engine of achievement.",
    "Integrity and Simplicity — Famous for personal austerity in high office; he emphasised that the child's character is built at home by parents and in class by teachers.",
    "Science with Humanity — Technology must serve the poor: his work on affordable prosthetics (the Kalam-Raju stent and the floor-reaction orthosis) is the standing example."
  ],
  quotes:[
    "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.",
    "Excellence is a continuous process and not an accident.",
    "A leader must have a vision, he must have passion, and he must have the courage to take risks.",
    "Excellence is a continuous process and not an accident."
  ],
  essay:[
    "Youth, dreams and nation-building",
    "Science and technology for inclusive growth",
    "Rural–urban divide and PURA",
    "Simplicity in high office",
    "Role of teachers in nation-building"
  ],
  ethics:[
    "Public service values — integrity, simplicity and dedication",
    "Role of family and teachers in inculcating values",
    "Work culture and excellence in administration"
  ]
},

/* ===================== SOCIAL JUSTICE & REFORM ===================== */
{
  id:"jyotirao-phule", name:"Jyotirao Phule", years:"1827–1890", place:"Maharashtra, India",
  cat:"reform", wiki:"Jyotirao Phule", school:"Satyashodhak Samaj",
  tag:["Essay","Ethics"],
  gist:"Education is liberation — social hierarchy survives by controlling knowledge, so emancipation begins with access to learning.",
  ideas:[
    "Education as the Root Cure — 'Vidye vina mati geli' — without education wisdom was lost, without wisdom morals, without morals development, without development wealth, without wealth the shudras perished. A chain of causation still quoted in policy debates.",
    "First Girls' School (1848) — Opened with his wife Savitribai in Pune, at enormous social cost to the family.",
    "Satyashodhak Samaj (1873) — 'Truth-seekers' society: marriages without brahmin priests, rejection of ritual hierarchy, dignity for the shudra and ati-shudra.",
    "Gulamgiri (Slavery, 1873) — Compared caste oppression to American slavery and dedicated the book to the American abolitionists.",
    "Support for Widows and Farmers — A home for pregnant widows and an orphanage; Shetkaryacha Asud analysed the exploitation of the peasant."
  ],
  quotes:[
    "Ignorance is the mother of all woes.",
    "Without education wisdom was lost; without wisdom morality was lost; without morality development was lost; without development wealth was lost; without wealth the Shudras were ruined — all through lack of education.",
    "God is one and everyone is his child."
  ],
  essay:[
    "Education as the engine of social justice",
    "Caste and equality of opportunity",
    "Women's education and social transformation",
    "Reform from below"
  ],
  ethics:[
    "Indian moral thinkers — education as a moral duty",
    "Justice, equality and the dignity of the marginalised",
    "Moral courage against social ostracism"
  ]
},
{
  id:"savitribai-phule", name:"Savitribai Phule", years:"1831–1897", place:"Maharashtra, India",
  cat:"reform", wiki:"Savitribai Phule", school:"Women's Education Pioneer",
  tag:["Essay","Ethics"],
  gist:"Education can be an act of resistance — dignity begins when the excluded acquire knowledge, voice and self-reliance.",
  ideas:[
    "India's First Woman Teacher — She taught in the face of daily abuse, carrying a second sari to change into after being pelted with dung and stones on the way.",
    "Girls' Education — Ran seventeen schools; her poetry (Kavya Phule) urged women to 'go, get education' as the path out of subjugation.",
    "Balhatya Pratibandhak Griha — A shelter for pregnant widows and victims of assault to prevent infanticide, at a time when the subject was unspeakable.",
    "Anti-Caste Practice — Opened her household well to Dalits; conducted widow remarriages.",
    "Death in Service — She died of plague contracted while carrying an infected Dalit child to hospital during the 1897 epidemic."
  ],
  quotes:[
    "Go, get education. Be self-reliant, be industrious. Work — gather wisdom and riches.",
    "Awake, arise and educate; smash traditions, liberate.",
    "Self-reliance is the wealth that no one can steal."
  ],
  essay:[
    "Women's education and empowerment",
    "Courage of conviction",
    "Service beyond the call of duty",
    "Beti Bachao Beti Padhao: a historical lineage"
  ],
  ethics:[
    "Moral courage and perseverance against hostility",
    "Compassion and service — dying in the line of service",
    "Role of women in social transformation"
  ]
},
{
  id:"periyar", name:"Periyar E. V. Ramasamy", years:"1879–1973", place:"Tamil Nadu, India",
  cat:"reform", wiki:"Periyar E. V. Ramasamy", school:"Self-Respect Movement · Rationalism",
  tag:["Essay","Ethics"],
  gist:"Dignity requires the freedom to question inherited authority — rationalism becomes a weapon against caste and patriarchy.",
  ideas:[
    "Self-Respect Movement (1925) — Dignity, not charity: self-respect marriages without priests or ritual, and the assertion of equal worth for non-brahmin communities.",
    "Rationalism — 'He who created god was a fool, he who propagates god is a scoundrel.' Uncompromising demand that belief withstand reason.",
    "Women's Liberation — Argued for women's right to divorce, property, contraception and education; opposed the very idea that chastity applies only to women.",
    "Reservation and Representation — Instrumental in the communal G.O. and the constitutional First Amendment enabling reservation.",
    "Social Reform Before Political Reform — Independence without social equality would only change the rulers."
  ],
  quotes:[
    "Self-respect is more important than self-rule.",
    "There is no god, there is no god, there is no god at all.",
    "We must eradicate ignorance, superstition and blind faith from society."
  ],
  essay:[
    "Self-respect and dignity",
    "Rationalism vs. superstition",
    "Social justice and reservation",
    "Women's rights in Indian reform"
  ],
  ethics:[
    "Scientific temper and rational inquiry as values",
    "Dignity and self-respect as ethical goals",
    "Gender justice"
  ]
},
{
  id:"narayana-guru", name:"Sree Narayana Guru", years:"1856–1928", place:"Kerala, India",
  cat:"reform", wiki:"Narayana Guru", school:"Advaita-based Social Reform",
  tag:["Essay","Ethics"],
  gist:"Human dignity can be universalised before institutions are changed — equality begins by rejecting inherited hierarchy.",
  ideas:[
    "One Caste, One Religion, One God — His central slogan, dismantling caste from within the spiritual tradition rather than against it.",
    "Aruvippuram Consecration (1888) — As an 'untouchable' Ezhava he consecrated a Shiva idol, declaring it 'the Shiva of the Ezhavas' — a quiet revolution in temple entry.",
    "Education and Enterprise — 'Enlighten through education, strengthen through organisation.' He urged industry and schooling over ritual expenditure.",
    "SNDP Yogam — An organisation that transformed the social and economic position of a whole community.",
    "Temple Entry and Vaikom — His moral authority underpinned the Vaikom Satyagraha and Kerala's later social transformation."
  ],
  quotes:[
    "One caste, one religion, one God for man.",
    "Whatever be the religion of a man, it is enough if he becomes virtuous.",
    "Enlighten through education, strengthen through organisation."
  ],
  essay:[
    "Social reform through spirituality",
    "Education and organisation as tools of change",
    "Kerala model: social roots of development"
  ],
  ethics:[
    "Indian moral thinkers — equality grounded in spiritual philosophy",
    "Reform without confrontation"
  ]
},
{
  id:"pandita-ramabai", name:"Pandita Ramabai", years:"1858–1922", place:"Maharashtra, India",
  cat:"reform", wiki:"Pandita Ramabai", school:"Women's Rights Pioneer",
  tag:["Essay","Ethics"],
  gist:"Women’s emancipation requires knowledge, economic independence and institutional refuge — sympathy alone is insufficient.",
  ideas:[
    "Sharada Sadan & Mukti Mission — Homes and vocational training for child widows, famine victims and abandoned women; thousands were sheltered and taught trades.",
    "The High Caste Hindu Woman — Exposed the condition of widows to an international audience and raised funds for their education.",
    "Scholarship as Authority — Her mastery of Sanskrit earned her the titles 'Pandita' and 'Saraswati' and denied opponents the argument of ignorance.",
    "Testimony to the Hunter Commission — She argued for women teachers and women doctors, influencing the creation of medical training for Indian women."
  ],
  quotes:[
    "A nation's progress is measured by the condition of its women.",
    "The chief object of education is to enable women to think for themselves.",
    "Self-reliance is the first step towards freedom."
  ],
  essay:[
    "Women's education and rehabilitation",
    "Reform through institution-building",
    "Voices of women in the Indian Renaissance"
  ],
  ethics:[
    "Compassion and rehabilitation of the vulnerable",
    "Gender justice and dignity"
  ]
},
{
  id:"vidyasagar", name:"Ishwar Chandra Vidyasagar", years:"1820–1891", place:"Bengal, India",
  cat:"reform", wiki:"Ishwar Chandra Vidyasagar", school:"Bengal Renaissance",
  tag:["Essay","Ethics"],
  gist:"Reform needs both moral conviction and administrative execution — compassion becomes durable when translated into institutions and law.",
  ideas:[
    "Widow Remarriage Act (1856) — He marshalled scriptural evidence and petitions until the law was passed, then arranged and personally funded remarriages.",
    "Girls' Education — Established and supervised dozens of girls' schools in Bengal, often at his own expense.",
    "Opposition to Polygamy and Child Marriage — Sustained campaigns against Kulin polygamy.",
    "Barnaparichay — He restructured the Bengali alphabet and wrote primers that democratised literacy for generations.",
    "Practical Compassion — Known as 'Dayar Sagar' (ocean of kindness); his private charity was as significant as his public campaigns."
  ],
  quotes:[
    "The advancement of a society can be judged by the treatment accorded to its women.",
    "Have compassion for the weak; that is the essence of religion."
  ],
  essay:[
    "From petition to legislation: how reform happens",
    "Women's rights and social legislation",
    "Literacy and language reform"
  ],
  ethics:[
    "Compassion in action",
    "Moral courage against orthodoxy",
    "Using law as an instrument of social ethics"
  ]
},

/* ================= MORAL PSYCHOLOGY & HUMAN VALUES ================= */
{
  id:"kohlberg", name:"Lawrence Kohlberg", years:"1927–1987", place:"United States",
  cat:"ethics-psych", wiki:"Lawrence Kohlberg", school:"Stages of Moral Development",
  tag:["Ethics"],
  gist:"Moral maturity is a movement from obedience to principle — ethical development involves increasingly reasoned judgement.",
  ideas:[
    "Level 1 — Pre-conventional: (1) Obedience and punishment — right is what avoids punishment. (2) Individualism and exchange — right is what serves my interest.",
    "Level 2 — Conventional: (3) Good boy/nice girl — right is what earns approval. (4) Law and order — right is obeying rules and maintaining social order.",
    "Level 3 — Post-conventional: (5) Social contract — laws are agreements that can be changed for the general good. (6) Universal ethical principles — conscience follows self-chosen universal principles even against the law.",
    "Heinz Dilemma — Should a man steal a drug to save his dying wife? The reasoning behind the answer, not the answer itself, reveals the stage.",
    "Application to Public Service — A civil servant at Stage 4 follows the rulebook; at Stage 5–6 they act on constitutional morality and public interest. UPSC case studies reward the higher stages.",
    "Critique — Culture- and gender-bound; it privileges abstract justice reasoning, as Gilligan argued."
  ],
  quotes:[
    "Moral development is the progressive comprehension of justice.",
    "The right is defined by decisions of conscience in accord with self-chosen ethical principles."
  ],
  essay:[
    "How moral character is formed",
    "Rules vs. conscience",
    "Values education in schools"
  ],
  ethics:[
    "Ethics & human interface — the central developmental framework",
    "Determinants of ethics: the reasoning behind an action",
    "Analysing case studies by level of moral reasoning",
    "Contrast with Gilligan — a standard comparative question"
  ]
},
{
  id:"gilligan", name:"Carol Gilligan", years:"b. 1936", place:"United States",
  cat:"ethics-psych", wiki:"Carol Gilligan", school:"Ethics of Care",
  tag:["Ethics"],
  gist:"Moral judgement can be relational as well as rule-based — care highlights responsibility, vulnerability and human connection.",
  ideas:[
    "In a Different Voice (1982) — A direct challenge to Kohlberg: his scale rated women lower only because it measured one style of moral reasoning.",
    "Ethics of Care vs. Ethics of Justice — Justice reasoning asks 'what are the rules and rights?'; care reasoning asks 'who will be hurt and how do I preserve the relationship?'",
    "Three Stages of Care — From caring for self (survival), to caring for others (self-sacrifice), to a balanced care for self and others (non-violence and truth).",
    "Relevance to Administration — Welfare, child protection, disaster relief and grievance redressal need care reasoning; rulebook-only responses often fail the vulnerable.",
    "Complement, Not Substitute — The mature answer in a case study weaves justice and care together."
  ],
  quotes:[
    "The ethic of care rests on the premise of non-violence — that no one should be hurt.",
    "Care is a relational ethic, grounded in listening.",
    "Care is a relational ethic, grounded in listening."
  ],
  essay:[
    "Compassion in governance",
    "Different voices, equal worth",
    "Gender and moral perspectives"
  ],
  ethics:[
    "Ethics of care as a moral framework — the standard counterpoint to Kohlberg",
    "Empathy and compassion in service delivery",
    "Gender perspectives in moral reasoning",
    "Case studies involving vulnerable groups"
  ]
},
{
  id:"goleman", name:"Daniel Goleman", years:"b. 1946", place:"United States",
  cat:"ethics-psych", wiki:"Daniel Goleman", school:"Emotional Intelligence",
  tag:["Ethics"],
  gist:"Effective leadership is not only cognitive — self-awareness, self-regulation, empathy and social skill shape judgement and conduct.",
  ideas:[
    "Five Components of EI — Self-awareness (knowing your emotions), self-regulation (managing them), motivation (internal drive), empathy (reading others' emotions), and social skill (managing relationships).",
    "Amygdala Hijack — Under threat the emotional brain overrides the rational; recognising and pausing at that moment is the core administrative skill under crisis.",
    "EI Outweighs IQ — In leadership roles emotional competence accounts for the majority of the difference between star and average performers.",
    "EI is Learnable — Unlike IQ, it can be developed through training and reflective practice — the justification for values training in civil services academies.",
    "Application — Handling an angry crowd, a demoralised team, a grieving family, or one's own anger before an important decision."
  ],
  quotes:[
    "In a very real sense we have two minds, one that thinks and one that feels.",
    "If your emotional abilities aren't in hand, if you don't have self-awareness, you're not going to get very far.",
    "If your emotional abilities aren't in hand, if you don't have self-awareness, you're not going to get very far."
  ],
  essay:[
    "EQ vs. IQ in leadership",
    "Empathy in administration",
    "Managing emotions in public life"
  ],
  ethics:[
    "Emotional intelligence — concepts and their utility in administration and governance (a named syllabus topic)",
    "Self-awareness and self-regulation in case studies",
    "Empathy and tolerance towards the weaker sections",
    "Attitude and behaviour management"
  ]
},
{
  id:"maslow", name:"Abraham Maslow", years:"1908–1970", place:"United States",
  cat:"ethics-psych", wiki:"Abraham Maslow", school:"Humanistic Psychology",
  tag:["Ethics"],
  gist:"Human motivation is layered — institutions perform better when they address not only survival but belonging, esteem and meaningful potential.",
  ideas:[
    "Hierarchy of Needs — Physiological → Safety → Love/Belonging → Esteem → Self-actualisation. Later he added cognitive, aesthetic and self-transcendence needs.",
    "Prepotency — Higher needs surface only when lower ones are reasonably met, which is why welfare (food, security) must precede exhortations to civic virtue.",
    "Self-Actualisation — Becoming everything one is capable of becoming; the motivation behind excellence in public service beyond salary.",
    "Policy Relevance — Explains why MGNREGA or PDS matters before participation; and why recognition, not just pay, drives administrative morale.",
    "Critique — The strict sequence is questioned; people pursue dignity and belonging even in deprivation."
  ],
  quotes:[
    "What a man can be, he must be.",
    "If the only tool you have is a hammer, you tend to see every problem as a nail.",
    "In any given moment we have two options: to step forward into growth or back into safety."
  ],
  essay:[
    "Beyond bread: what people really want",
    "Motivation and human development",
    "Welfare as a foundation for citizenship"
  ],
  ethics:[
    "Aptitude and foundational values — motivation theory",
    "Work culture and motivation in public organisations",
    "Understanding citizens' needs in service delivery"
  ]
},
{
  id:"allport", name:"Gordon Allport", years:"1897–1967", place:"United States",
  cat:"ethics-psych", wiki:"Gordon Allport", school:"Personality & Attitude Theory",
  tag:["Ethics"],
  gist:"Attitude is a mental state of readiness that shapes how we respond — and contact can reduce prejudice.",
  ideas:[
    "Definition of Attitude — 'A mental and neural state of readiness, organised through experience, exerting a directive influence upon the individual's response.' The standard definition for GS-IV.",
    "Contact Hypothesis — Prejudice reduces when groups meet under four conditions: equal status, common goals, cooperation, and support of authority/law. The theoretical basis for integrated schooling and mixed housing.",
    "The Nature of Prejudice (1954) — Stages of prejudice from antilocution (hate speech) → avoidance → discrimination → physical attack → extermination. A ladder still used to analyse communal violence.",
    "Functions of Attitude — Attitudes serve adjustment, ego-defence, value-expression and knowledge functions.",
    "Trait Theory — Cardinal, central and secondary traits as the structure of personality."
  ],
  quotes:[
    "Prejudice is being down on something you are not up on.",
    "The same fire that melts the butter hardens the egg.",
    "Attitudes determine for each individual what he will see and hear, what he will think and what he will do."
  ],
  essay:[
    "Roots of prejudice and how to dissolve them",
    "Diversity and contact in a plural society"
  ],
  ethics:[
    "Attitude — content, structure, function; its influence on thought and behaviour (a named syllabus topic)",
    "Moral and political attitudes",
    "Social influence and persuasion",
    "Prejudice reduction in administration"
  ]
},
{
  id:"festinger", name:"Leon Festinger", years:"1919–1989", place:"United States",
  cat:"ethics-psych", wiki:"Leon Festinger", school:"Cognitive Dissonance Theory",
  tag:["Ethics"],
  gist:"When belief and behaviour clash, we change the belief — the psychology of rationalised corruption.",
  ideas:[
    "Cognitive Dissonance — Holding two inconsistent beliefs, or acting against one's belief, creates discomfort that we resolve by changing the belief rather than the behaviour.",
    "Rationalisation of Wrongdoing — 'Everyone does it', 'the system forced me', 'it harms no one' — the mechanism by which decent officials normalise small corruptions.",
    "Attitude Change through Behaviour — Because behaviour can drive attitude, enforced practice (queueing, seat belts, Swachh Bharat) can eventually shift attitudes. Key for behavioural policy and nudge.",
    "Social Comparison Theory — We evaluate our opinions and abilities by comparing ourselves to others, which explains conformity in organisations."
  ],
  quotes:[
    "Dissonance produces discomfort and there will arise pressures to reduce or eliminate it.",
    "People are not rational beings; they are rationalising beings."
  ],
  essay:[
    "Why good people do bad things",
    "Changing behaviour to change attitudes",
    "Nudge and behavioural public policy"
  ],
  ethics:[
    "Attitude change and persuasion",
    "Corruption's psychology — rationalisation and the slippery slope",
    "Behavioural interventions in governance"
  ]
},

/* =================== ADMINISTRATION & GOVERNANCE =================== */
{
  id:"weber", name:"Max Weber", years:"1864–1920", place:"Germany",
  cat:"admin", wiki:"Max Weber", school:"Bureaucracy · Sociology",
  tag:["Essay","Ethics"],
  gist:"Bureaucracy rests on rational-legal authority, clear offices and rules — public officials also carry responsibility for the consequences of action.",
  ideas:[
    "Three Types of Authority — Traditional (custom), Charismatic (personal magnetism) and Rational-Legal (rules and office). Modern states rest on the third.",
    "Ideal-Type Bureaucracy — Hierarchy, written rules, division of labour, impersonality, merit-based recruitment, career tenure and documented files. Technically the most efficient form of organisation.",
    "Ethic of Responsibility vs. Ethic of Conviction — In Politics as a Vocation: the conviction ethic acts on principle regardless of outcome; the responsibility ethic answers for the foreseeable consequences. A mature public servant needs both. This distinction is gold in GS-IV answers.",
    "Iron Cage & Depersonalisation — The same rationality that makes bureaucracy efficient traps people in rules without meaning — the source of red tape and 'sine ira et studio' coldness.",
    "Protestant Ethic — Religious values (calling, thrift, discipline) shaped the spirit of capitalism; culture influences economics, not only the reverse.",
    "Politics as a Vocation — Passion, a sense of responsibility and a sense of proportion are the three qualities decisive for the politician."
  ],
  quotes:[
    "Bureaucracy is the means of transforming social action into rationally organised action.",
    "Politics is a strong and slow boring of hard boards.",
    "The decisive means for politics is violence.",
    "Man is an animal suspended in webs of significance he himself has spun."
  ],
  essay:[
    "Bureaucracy: efficiency vs. humanity",
    "Red tape and reform",
    "Conviction and responsibility in public life",
    "Culture and economic development"
  ],
  ethics:[
    "Public/civil service values — impersonality, neutrality and merit",
    "Ethic of responsibility vs. ethic of conviction in case studies",
    "Work culture and the limits of rule-bound behaviour",
    "Status and problems of ethics in public administration"
  ]
},
{
  id:"barnard", name:"Chester Barnard", years:"1886–1961", place:"United States",
  cat:"admin", wiki:"Chester Barnard", school:"Organisation Theory",
  tag:["Ethics"],
  gist:"Authority flows upward — an order is authoritative only if the subordinate accepts it.",
  ideas:[
    "Acceptance Theory of Authority — Authority rests not in the person giving the order but in the willingness of the recipient to comply. Orders outside the 'zone of indifference' will be resisted.",
    "Zone of Indifference — The range of orders a subordinate will accept without question. Effective leaders widen it through trust and legitimacy.",
    "Executive Functions — Maintaining communication, securing essential services from members, and formulating purpose. The manager's first job is communication.",
    "Informal Organisation — The unofficial network of relationships is indispensable to the formal structure; it transmits information and creates cohesion.",
    "Moral Responsibility of Executives — In The Functions of the Executive he argues the leader's highest task is creating a moral code for the organisation and resolving conflicts between competing codes."
  ],
  quotes:[
    "The most important single contribution required of the executive is loyalty, domination by the organisation personality.",
    "Authority lies with the subordinate, for an order must be accepted to be authoritative.",
    "The executive's function is to create a moral code for the organisation."
  ],
  essay:[
    "Leadership and legitimacy",
    "Formal and informal power in organisations"
  ],
  ethics:[
    "Public service values — accountability and legitimate authority",
    "Ethics of obeying and refusing orders",
    "Corporate/organisational governance and moral leadership",
    "Ethical codes within organisations"
  ]
},
{
  id:"simon", name:"Herbert Simon", years:"1916–2001", place:"United States",
  cat:"admin", wiki:"Herbert A. Simon", school:"Decision-Making · Bounded Rationality",
  tag:["Ethics"],
  gist:"Administrators satisfice rather than optimise — rationality is bounded by information, time and mind.",
  ideas:[
    "Bounded Rationality — Real decision-makers have limited information, limited time and limited cognitive capacity; the ideal of full rational choice is a myth.",
    "Satisficing — We choose the first alternative that is 'good enough' rather than searching for the optimum. Realistic and often correct in administration.",
    "Fact–Value Dichotomy — Administrative decisions mix factual premises (verifiable) and value premises (chosen). A key tool for separating what is technically true from what is politically or ethically chosen.",
    "Critique of Proverbs of Administration — He demolished POSDCORB-style principles as contradictory maxims ('span of control' vs. 'fewer levels of hierarchy'), demanding an empirical science of administration.",
    "Programmed vs. Non-programmed Decisions — Routine decisions can be systematised; novel ethical dilemmas cannot."
  ],
  quotes:[
    "A wealth of information creates a poverty of attention.",
    "Administration is decision-making.",
    "The capacity of the human mind for formulating and solving complex problems is very small compared with the size of the problems."
  ],
  essay:[
    "Decision-making under uncertainty",
    "Information overload in the digital age",
    "Perfect is the enemy of good"
  ],
  ethics:[
    "Ethical decision-making with incomplete information — every case study",
    "Fact vs. value premises in administrative choices",
    "Accountability for decisions made under constraint"
  ]
},
{
  id:"appleby", name:"Paul H. Appleby", years:"1891–1963", place:"United States",
  cat:"admin", wiki:"Paul H. Appleby", school:"Public Administration",
  tag:["Ethics"],
  gist:"Public administration differs from business because it operates under democratic accountability, legal constraints and the requirement to serve the public interest.",
  ideas:[
    "Government is Different — Public administration is distinguished by its breadth of scope, public accountability and political character. Business methods cannot simply be imported.",
    "Politics–Administration Continuum — He rejected the strict Wilsonian dichotomy: policy and administration are inseparably intertwined.",
    "Reports on Indian Administration (1953, 1956) — Commissioned by the Government of India; led to the creation of the Indian Institute of Public Administration and the O&M division.",
    "Criticism of Indian Administration — He found excessive centralisation, distrust of subordinates, obsession with hierarchy and an audit-driven fear of decision-making.",
    "Public Responsibility — 'Public administration is the eighth of the seven wonders of the world' — a wry reminder of its complexity."
  ],
  quotes:[
    "Government is different because government is politics.",
    "Public administration is policy-making.",
    "Administration in a democracy is responsible to the people."
  ],
  essay:[
    "Should government be run like a business?",
    "Accountability in public administration",
    "Decentralisation and trust in officials"
  ],
  ethics:[
    "Status and problems of ethics in public administration",
    "Accountability and responsibility of public servants",
    "Why public service ethics differ from private-sector ethics"
  ]
},
{
  id:"woodrow-wilson", name:"Woodrow Wilson", years:"1856–1924", place:"United States",
  cat:"admin", wiki:"Woodrow Wilson", school:"Politics–Administration Dichotomy",
  tag:["Ethics"],
  gist:"Politics and administration are analytically distinct, but modern public administration recognises their practical interdependence.",
  ideas:[
    "The Study of Administration (1887) — The founding essay of the discipline: 'It is getting to be harder to run a constitution than to frame one.'",
    "Politics–Administration Dichotomy — Politics sets the tasks; administration executes them efficiently and should be shielded from political interference. The origin of the neutrality doctrine.",
    "Business-like Efficiency — Administration should be run on principles of efficiency and economy, learning from business without becoming it.",
    "Merit over Spoils — A professional, permanent, merit-recruited civil service instead of political patronage.",
    "Later Critique — Appleby, Simon and others showed the dichotomy is untenable in practice, but it remains the ideal behind civil service neutrality rules."
  ],
  quotes:[
    "It is getting to be harder to run a constitution than to frame one.",
    "Administration lies outside the proper sphere of politics.",
    "The field of administration is a field of business."
  ],
  essay:[
    "Political neutrality of the civil services",
    "Committed bureaucracy: a contradiction?"
  ],
  ethics:[
    "Public service values — political neutrality and anonymity",
    "Relationship between political executive and permanent executive"
  ]
},
{
  id:"drucker", name:"Peter Drucker", years:"1909–2005", place:"Austria / United States",
  cat:"admin", wiki:"Peter Drucker", school:"Management Thought",
  tag:["Essay","Ethics"],
  gist:"Management is doing things right; leadership is doing the right things.",
  ideas:[
    "Management by Objectives (MBO) — Managers and subordinates jointly set measurable objectives and are assessed against them. The ancestor of India's RFD and outcome-budgeting.",
    "Effectiveness vs. Efficiency — 'Efficiency is doing things right; effectiveness is doing the right things.' A one-line test for any government scheme.",
    "Knowledge Worker — He coined the term and predicted that productivity of knowledge work would be the central management challenge.",
    "Decentralisation and Empowerment — Push decisions to the level where the knowledge is.",
    "Ethics of Responsibility — 'Above all, do no harm' as management's Hippocratic principle; and 'Rank does not confer privilege or give power. It imposes responsibility.'"
  ],
  quotes:[
    "Management is doing things right; leadership is doing the right things.",
    "What gets measured gets managed.",
    "Rank does not confer privilege or give power. It imposes responsibility.",
    "The best way to predict the future is to create it."
  ],
  essay:[
    "Outcomes vs. outlays in governance",
    "Leadership vs. management",
    "Measuring what matters"
  ],
  ethics:[
    "Public service values — responsibility that comes with authority",
    "Work culture, delegation and accountability",
    "Corporate governance ethics"
  ]
},
{
  id:"mcgregor", name:"Douglas McGregor", years:"1906–1964", place:"United States",
  cat:"admin", wiki:"Douglas McGregor", school:"Theory X and Theory Y",
  tag:["Ethics"],
  gist:"How you assume people are determines how they behave — Theory X breeds what it fears.",
  ideas:[
    "Theory X — Assumes people dislike work, avoid responsibility and must be coerced and closely supervised. Produces control-heavy, low-trust administration.",
    "Theory Y — Assumes work is natural, people seek responsibility and exercise self-direction when committed to objectives. Produces participative, delegating administration.",
    "Self-Fulfilling Prophecy — Theory X supervision creates the passivity it assumes; the diagnosis becomes the disease.",
    "Relevance to Indian Administration — Appleby's criticism of distrust of subordinates is a Theory X problem; empowerment reforms are Theory Y remedies."
  ],
  quotes:[
    "The ingenuity of the average worker is sufficient to outwit any system of controls.",
    "Man is a wanting animal — as soon as one of his needs is satisfied, another appears."
  ],
  essay:[
    "Trust and productivity in organisations",
    "Control vs. empowerment in administration"
  ],
  ethics:[
    "Work culture in public organisations",
    "Motivation, delegation and supervisory ethics"
  ]
},

/* ====================== GLOBAL HUMANIST VOICES ====================== */
{
  id:"thoreau", name:"Henry David Thoreau", years:"1817–1862", place:"United States",
  cat:"humanist", wiki:"Henry David Thoreau", school:"Transcendentalism · Civil Disobedience",
  tag:["Essay","Ethics"],
  gist:"Civil disobedience: a citizen must not lend himself to the wrong he condemns.",
  ideas:[
    "Civil Disobedience (1849) — He refused to pay a tax funding slavery and the Mexican war, and went to jail. The essay directly influenced Gandhi and Martin Luther King Jr.",
    "Conscience Above Law — 'It is not desirable to cultivate a respect for the law, so much as for the right.' Unjust law creates a duty to disobey.",
    "Walden and Simple Living — Two years in a cabin to 'live deliberately'; voluntary simplicity as a critique of acquisitive society.",
    "Individual Against the Majority — 'Any man more right than his neighbours constitutes a majority of one.'"
  ],
  quotes:[
    "Any man more right than his neighbours constitutes a majority of one.",
    "Under a government which imprisons any unjustly, the true place for a just man is also a prison.",
    "I went to the woods because I wished to live deliberately.",
    "Rather than love, than money, than fame, give me truth."
  ],
  essay:[
    "Civil disobedience in a democracy",
    "Conscience vs. law",
    "Simple living, high thinking",
    "Dissent and the individual"
  ],
  ethics:[
    "Conscience as a source of ethical guidance",
    "Lawful protest and the limits of obedience",
    "Ethical basis of civil disobedience"
  ]
},
{
  id:"tolstoy", name:"Leo Tolstoy", years:"1828–1910", place:"Russia",
  cat:"humanist", wiki:"Leo Tolstoy", school:"Christian Anarchism · Non-violence",
  tag:["Essay","Ethics"],
  gist:"The kingdom of God is within you — non-resistance to evil by violence, and moral self-perfection first.",
  ideas:[
    "The Kingdom of God Is Within You — The book that transformed Gandhi's thinking; non-resistance to evil by force as the core of true religion.",
    "Correspondence with Gandhi — 'A Letter to a Hindu' argued Indians were held by their own cooperation with British rule; Gandhi named Tolstoy Farm after him.",
    "Moral Self-Perfection — Change begins with the self: 'Everyone thinks of changing the world, but no one thinks of changing himself.'",
    "Critique of Institutional Power — He rejected state violence, organised church and private property as forms of coercion.",
    "Dignity of Labour — He worked the fields, made his own boots, and championed the peasant's moral superiority over the idle nobility."
  ],
  quotes:[
    "Everyone thinks of changing the world, but no one thinks of changing himself.",
    "All happy families are alike; each unhappy family is unhappy in its own way.",
    "The two most powerful warriors are patience and time.",
    "Wrong does not cease to be wrong because the majority share in it."
  ],
  essay:[
    "Change begins with the self",
    "Non-violence and moral force",
    "Literature as a mirror of society",
    "Majority is not morality"
  ],
  ethics:[
    "Sources of ethics — inner moral transformation",
    "Influence on Gandhian ethics",
    "Moral courage against majority opinion"
  ]
},
{
  id:"mlk", name:"Martin Luther King Jr.", years:"1929–1968", place:"United States",
  cat:"humanist", wiki:"Martin Luther King Jr.", school:"Non-violent Civil Rights",
  tag:["Essay","Ethics"],
  gist:"Injustice anywhere is a threat to justice everywhere — Gandhi's method carried to America.",
  ideas:[
    "Non-violent Direct Action — He explicitly adopted Gandhian satyagraha; the Montgomery boycott, sit-ins and marches were disciplined moral confrontation.",
    "Letter from Birmingham Jail — The classic defence of civil disobedience: 'One has a moral responsibility to disobey unjust laws.' He also indicted the 'white moderate' who prefers order to justice.",
    "Just vs. Unjust Law — A just law uplifts human personality and applies equally; an unjust law degrades and is inflicted by a majority on a minority that had no part in making it.",
    "Beloved Community — The goal is reconciliation and redemption, not the defeat of the opponent.",
    "Economic Justice — His later Poor People's Campaign broadened civil rights into a demand for economic equality."
  ],
  quotes:[
    "Injustice anywhere is a threat to justice everywhere.",
    "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
    "The ultimate measure of a man is not where he stands in moments of comfort, but where he stands at times of challenge and controversy.",
    "Our lives begin to end the day we become silent about things that matter."
  ],
  essay:[
    "Justice delayed is justice denied",
    "Non-violence as a universal method",
    "Silence in the face of injustice",
    "Dream and reality in democracy"
  ],
  ethics:[
    "Just vs. unjust law — a core framework for case studies",
    "Moral courage and civil disobedience",
    "Empathy across identity lines"
  ]
},
{
  id:"mandela", name:"Nelson Mandela", years:"1918–2013", place:"South Africa",
  cat:"humanist", wiki:"Nelson Mandela", school:"Reconciliation · Anti-Apartheid",
  tag:["Essay","Ethics"],
  gist:"27 years in prison, then forgiveness — reconciliation as the highest form of political courage.",
  ideas:[
    "Reconciliation over Revenge — After 27 years' imprisonment he chose the Truth and Reconciliation Commission over retribution, holding a fractured nation together.",
    "Truth and Reconciliation Commission — Amnesty in exchange for full public truth-telling: restorative rather than retributive justice. A model studied worldwide.",
    "Education as the Weapon — 'Education is the most powerful weapon which you can use to change the world.'",
    "Voluntary Relinquishment of Power — He served a single term and stepped down, an act of restraint rare among liberation leaders.",
    "Dignity for All — 'To be free is not merely to cast off one's chains, but to live in a way that respects and enhances the freedom of others.'"
  ],
  quotes:[
    "Education is the most powerful weapon which you can use to change the world.",
    "It always seems impossible until it's done.",
    "Resentment is like drinking poison and then hoping it will kill your enemies.",
    "A good head and a good heart are always a formidable combination."
  ],
  essay:[
    "Forgiveness and nation-building",
    "Restorative vs. retributive justice",
    "Leadership and the renunciation of power",
    "Education changes everything"
  ],
  ethics:[
    "Restorative justice as an ethical model",
    "Forgiveness, empathy and reconciliation",
    "Leadership integrity — relinquishing power voluntarily"
  ]
},
{
  id:"einstein", name:"Albert Einstein", years:"1879–1955", place:"Germany / United States",
  cat:"humanist", wiki:"Albert Einstein", school:"Scientific Humanism · Pacifism",
  tag:["Essay","Ethics"],
  gist:"Science without religion is lame, religion without science is blind — and the world is endangered by those who look on.",
  ideas:[
    "Ethical Responsibility of Science — Having urged the atomic programme, he spent his later years on disarmament; the Russell–Einstein Manifesto (1955) warned humanity to 'remember your humanity'.",
    "Imagination over Knowledge — 'Imagination is more important than knowledge, for knowledge is limited.'",
    "Critique of Rote Education — 'Education is what remains after one has forgotten what one has learned in school.' He valued independent thinking over training.",
    "Moral Responsibility of Bystanders — 'The world is a dangerous place, not because of those who do evil, but because of those who look on and do nothing.'",
    "Admiration for Gandhi — 'Generations to come will scarcely believe that such a one as this ever in flesh and blood walked upon this earth.'"
  ],
  quotes:[
    "The world is a dangerous place, not because of those who do evil, but because of those who look on and do nothing.",
    "Imagination is more important than knowledge.",
    "Try not to become a man of success, but rather try to become a man of value.",
    "Science without religion is lame, religion without science is blind."
  ],
  essay:[
    "Science, ethics and society",
    "Imagination and innovation",
    "Bystander apathy and moral duty",
    "Education beyond the syllabus"
  ],
  ethics:[
    "Ethical issues in science and technology",
    "Corporate and scientific responsibility",
    "Moral duty to act, not merely refrain"
  ]
},
{
  id:"mother-teresa", name:"Mother Teresa", years:"1910–1997", place:"Albania / India",
  cat:"humanist", wiki:"Mother Teresa", school:"Service · Compassion",
  tag:["Essay","Ethics"],
  gist:"Not all of us can do great things, but we can do small things with great love.",
  ideas:[
    "Service to the Destitute — The Missionaries of Charity served the dying, lepers and abandoned children whom institutions ignored.",
    "Dignity in Dying — Nirmal Hriday in Kolkata was founded so that people could die 'within sight of a loving face'.",
    "Small Acts, Great Love — Her ethic locates moral greatness in ordinary daily kindness rather than grand achievement.",
    "Loneliness as Poverty — 'The greatest disease in the West today is not TB or leprosy; it is being unwanted, unloved and uncared for.'"
  ],
  quotes:[
    "Not all of us can do great things. But we can do small things with great love.",
    "If you judge people, you have no time to love them.",
    "Peace begins with a smile.",
    "I alone cannot change the world, but I can cast a stone across the waters to create many ripples."
  ],
  essay:[
    "Compassion in action",
    "Small acts and great change",
    "Loneliness: the modern poverty",
    "Service beyond duty"
  ],
  ethics:[
    "Compassion and empathy towards the weaker sections",
    "Human values from role models",
    "Dignity of the destitute in welfare delivery"
  ]
},
{
  id:"orwell", name:"George Orwell", years:"1903–1950", place:"Britain",
  cat:"humanist", wiki:"George Orwell", school:"Political Literature",
  tag:["Essay"],
  gist:"All animals are equal, but some are more equal than others — the corruption of language and power.",
  ideas:[
    "1984 — Surveillance, doublethink, thoughtcrime and Newspeak: the vocabulary now used for every debate on privacy, propaganda and state power.",
    "Animal Farm — Revolution betrayed: 'All animals are equal, but some animals are more equal than others.' How equality slogans mask new hierarchies.",
    "Politics and the English Language — Vague, euphemistic language corrupts thought and conceals atrocity. A warning against bureaucratic obfuscation.",
    "Truth in an Age of Lies — 'In a time of universal deceit, telling the truth is a revolutionary act.'"
  ],
  quotes:[
    "All animals are equal, but some animals are more equal than others.",
    "In a time of universal deceit, telling the truth is a revolutionary act.",
    "If liberty means anything at all, it means the right to tell people what they do not want to hear.",
    "Who controls the past controls the future."
  ],
  essay:[
    "Surveillance and privacy",
    "Language, propaganda and truth",
    "Fake news and post-truth politics",
    "Power corrupts"
  ],
  ethics:[
    "Transparency vs. state secrecy",
    "Ethics of communication in governance"
  ]
},
{
  id:"malala", name:"Malala Yousafzai", years:"b. 1997", place:"Pakistan / Britain",
  cat:"humanist", wiki:"Malala Yousafzai", school:"Girls' Education Advocacy",
  tag:["Essay","Ethics"],
  gist:"One child, one teacher, one book, one pen can change the world.",
  ideas:[
    "Right to Education for Girls — She blogged for the BBC under a pseudonym at eleven about the Taliban's ban on girls' schooling, and was shot in 2012 for it.",
    "Courage of the Ordinary Citizen — Her global impact came not from office or wealth but from insisting on an ordinary right.",
    "Education as the Answer to Extremism — 'Let us pick up our books and our pens. They are our most powerful weapons.'",
    "Malala Fund — Institutionalising advocacy into funded programmes for girls' secondary education worldwide."
  ],
  quotes:[
    "One child, one teacher, one book, one pen can change the world.",
    "I raise up my voice — not so I can shout, but so that those without a voice can be heard.",
    "Let us remember: one book, one pen, one child and one teacher can change the world.",
    "We realise the importance of our voices only when we are silenced."
  ],
  essay:[
    "Girls' education and development",
    "Youth as agents of change",
    "Courage of conviction",
    "Education against extremism"
  ],
  ethics:[
    "Moral courage in the face of threat",
    "Empathy and advocacy for the voiceless",
    "Right to education as an ethical claim"
  ]
},
{
  id:"gibran", name:"Khalil Gibran", years:"1883–1931", place:"Lebanon / United States",
  cat:"humanist", wiki:"Kahlil Gibran", school:"Mystic Poetry",
  tag:["Essay"],
  gist:"Your children are not your children — the most quoted poet in Indian essay papers.",
  ideas:[
    "On Children — 'Your children are not your children… You may give them your love but not your thoughts.' The classic epigraph for essays on parenting and education.",
    "On Work — 'Work is love made visible.' Labour as an expression of self rather than a burden.",
    "On Giving — 'You give but little when you give of your possessions. It is when you give of yourself that you truly give.'",
    "Unity of Opposites — Joy and sorrow, freedom and duty are inseparable; a poetic version of the middle path."
  ],
  quotes:[
    "Your children are not your children. They are the sons and daughters of Life's longing for itself.",
    "Work is love made visible.",
    "Out of suffering have emerged the strongest souls.",
    "Progress lies not in enhancing what is, but in advancing toward what will be."
  ],
  essay:[
    "Parenting and freedom of the child",
    "Work as worship",
    "Giving of oneself",
    "Joy and sorrow are inseparable"
  ],
  ethics:[
    "Human values through literature and poetry",
    "Role of family in inculcating values"
  ]
}

];
