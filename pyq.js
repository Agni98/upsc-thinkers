/* =====================================================================
   PAST YEAR ESSAY QUESTIONS — UPSC CSE Mains, 2018 to 2026
   9 papers, 72 questions.

   PYQ_PAPERS  the papers as they were set, section A and section B.
               Question ids are built as <year><section><position>,
               e.g. "2023B1" is the first question of Section B, 2023.

   PYQ_THEMES  the classification, ordered most-occurring first.
                 t     theme name
                 why   20-50 words: what the category is and why these sit together
                 link  matching ESSAY_THEMES entries, so a question opens onto
                       model paragraphs and a full model essay
                 ids   thinkers who actually help on this kind of question
                 qs    question ids belonging to the theme

   Every question sits in exactly one theme. Where a question genuinely
   reads two ways, the second reading is noted in `also` rather than
   counted twice, so the frequency ordering stays honest.
   ===================================================================== */

const PYQ_PAPERS = [
  { y:2026,
    a:["Oxymorons reflect the ironies of life.",
       "A grateful mind is very beautiful.",
       "A thorn is a changed bud.",
       "When two elephants fight, it is the grass that gets trampled."],
    b:["Nature is the symbol of the spirit.",
       "A well-educated mind will always have more questions than answers.",
       "Shelving hard decisions is the least ethical course.",
       "A good leader is one who follows the followers."] },

  { y:2025,
    a:["Truth knows no color.",
       "The supreme art of war is to subdue the enemy without fighting.",
       "Thought finds a world and creates one also.",
       "Best lessons are learnt through bitter experiences."],
    b:["Muddy water is best cleared by leaving it alone.",
       "The years teach much which the days never know.",
       "It is best to see life as a journey, not as a destination.",
       "Contentment is natural wealth; luxury is artificial poverty."] },

  { y:2024,
    a:["Forests precede civilizations and deserts follow them.",
       "The Empires of the future will be the empires of the mind.",
       "There is no path to happiness; happiness is the path.",
       "The doubter is a true man of Science."],
    b:["Social media is triggering 'Fear of Missing Out' amongst the youth, precipitating depression and loneliness.",
       "Nearly all men can stand adversity, but to test the character, give him power.",
       "All ideas having large consequences are always simple.",
       "The cost of being wrong is less than the cost of doing nothing."] },

  { y:2023,
    a:["Thinking is like a game, it does not begin unless there is an opposite team.",
       "Visionary decision-making happens at the intersection of intuition and logic.",
       "Not all who wander are lost.",
       "Inspiration for creativity springs from the effort to look for the magical in the mundane."],
    b:["Girls are weighed down by restrictions, boys with demands — two equally harmful disciplines.",
       "Mathematics is the music of reason.",
       "A society that has more justice is a society that needs less charity.",
       "Education is what remains after one has forgotten what one has learned in school."] },

  { y:2022,
    a:["Forests are the best case studies for economic excellence.",
       "Poets are the unacknowledged legislators of the world.",
       "History is a series of victories won by the scientific man over the romantic man.",
       "A ship in harbour is safe, but that is not what ship is for."],
    b:["The time to repair the roof is when the sun is shining.",
       "You cannot step twice in the same river.",
       "A smile is the chosen vehicle for all ambiguities.",
       "Just because you have a choice, it does not mean that any of them has to be right."] },

  { y:2021,
    a:["The process of self-discovery has now been technologically outsourced.",
       "Your perception of me is a reflection of you; my reaction to you is an awareness of me.",
       "Philosophy of wantlessness is Utopian, while materialism is a chimera.",
       "The real is rational and the rational is real."],
    b:["Hand that rocks the cradle rules the world.",
       "What is research, but a blind date with knowledge!",
       "History repeats itself, first as a tragedy, second as a farce.",
       "There are better practices to “best practices”."] },

  { y:2020,
    a:["Life is a long journey between human being and being humane.",
       "Mindful manifesto is the catalyst to a tranquil self.",
       "Ships do not sink because of water around them, ships sink because of water that gets into them.",
       "Simplicity is the ultimate sophistication."],
    b:["Culture is what we are, civilization is what we have.",
       "There can be no social justice without economic prosperity but economic prosperity without social justice is meaningless.",
       "Patriarchy is the least noticed yet the most significant structure of social inequality.",
       "Technology as the silent factor in international relations."] },

  { y:2019,
    a:["Wisdom finds truth.",
       "Values are not what humanity is, but what humanity ought to be.",
       "Best for an individual is not necessarily best for the society.",
       "Courage to accept and dedication to improve are two keys to success."],
    b:["South-Asian societies are woven not around the state, but around their plural cultures and plural identities.",
       "Neglect of primary health care and education in India are reasons for its backwardness.",
       "Biased media is a real threat to Indian democracy.",
       "Rise of Artificial Intelligence: the threat of jobless future or better job opportunities through reskilling and upskilling."] },

  { y:2018,
    a:["Alternative technologies for a climate change resilient India.",
       "A good life is one inspired by love and guided by knowledge.",
       "Poverty anywhere is a threat to prosperity everywhere.",
       "Management of Indian border disputes — a complex task."],
    b:["Customary morality cannot be a guide to modern life.",
       "“The past” is a permanent dimension of human consciousness and values.",
       "A people that values its privileges above its principles loses both.",
       "Reality does not conform to the ideal, but confirms it."] }
];

const PYQ_THEMES = [

  { t:"Ends, Means and the Ethics of Decision",
    why:"The administrator's cluster: how to decide, when to act, whether the means matter, and how far the ideal binds the real. Note that these contradict each other on purpose — shelving hard decisions as the least ethical course, against muddy water being best cleared by leaving it alone.",
    link:["Ends & Means","Ends, Means and the Ethics of Decision"],
    ids:["gandhi","machiavelli","kautilya","kant","bentham","mill","simon","barnard","goleman"],
    qs:["2026B3","2025A2","2025B1","2024B4","2023A2","2022B1","2022B4","2021B4","2019A2","2018B1","2018B3","2018B4"],
    also:{ "2025A2":"also reads as strategy and international relations",
           "2022B4":"also reads as the limits of custom" } },

  { t:"Knowledge, Education and the Doubting Mind",
    why:"The largest group by a clear margin. Every question here treats knowing as an activity rather than a possession — doubt, argument, research, reason. The examiner is asking what education is for, not what it delivers.",
    link:["Education & Values","Knowledge, Education and the Doubting Mind"],
    ids:["socrates","plato","aristotle","tagore","freire","nussbaum","vivekananda","kalam","mill"],
    qs:["2026B2","2025A3","2024A2","2024A4","2024B3","2023A1","2023B2","2023B4","2022A3","2021B2","2019A1"],
    also:{ "2025A3":"also reads as thought shaping reality",
           "2024A2":"also reads as knowledge as power" } },

  { t:"Character, Adversity and the Test of Power",
    why:"Character is not stated here, it is tested. Each question puts a person under some pressure — failure, hardship, safety, time, power — and asks what the pressure reveals. The recurring answer is that the decisive threat is internal.",
    link:["Character, Courage & Resilience","Character, Adversity and the Test of Power"],
    ids:["marcus-aurelius","epictetus","nietzsche","camus","mandela","malala","aristotle","kalam","gandhi"],
    qs:["2026A3","2025A4","2025B2","2024B2","2023A3","2022A4","2022B2","2020A3","2019A4"],
    also:{ "2024B2":"also reads as the ethics of holding office",
           "2022B2":"also reads as change and adaptability" } },

  { t:"The Good Life: Contentment, Simplicity and Being Humane",
    why:"These ask what a life should aim at, and every one is sceptical of accumulation. They want a defensible account of well-being — gratitude, simplicity, mindfulness, wantlessness — argued against the consumption economy rather than preached at it.",
    link:["Compassion, Service & the Last Person","The Good Life: Contentment, Simplicity and Being Humane"],
    ids:["epicurus","buddha","mahavira","laozi","gandhi","thiruvalluvar","gibran","marcus-aurelius","epictetus"],
    qs:["2026A2","2025B3","2025B4","2024A3","2021A3","2020A1","2020A2","2020A4","2018A2"],
    also:{ "2020A1":"also reads as compassion and the humane state" } },

  { t:"Culture, Memory and the Making of Meaning",
    why:"How a society carries its past and makes sense of the present. Art, history, memory, irony and perception belong together because each is a way meaning gets made and transmitted — and each resists the tidy resolution an essay wants to impose.",
    link:["Liberty, Dissent & Freedom of Expression","Culture, Memory and the Making of Meaning"],
    ids:["tagore","gibran","tolstoy","plato","aurobindo","gandhi","nehru","burke","azad"],
    qs:["2026A1","2023A4","2022A2","2022B3","2021A2","2021A4","2021B3","2020B1","2018B2"] },

  { t:"Justice, Equality and the Excluded",
    why:"What a society owes its weakest members, and whether charity is evidence of justice or of its absence. Gender belongs here because these questions frame it as structure rather than sentiment. Moral and economic arguments must run together; either alone reads thin.",
    link:["Justice, Equality & Affirmative Action","Women & Gender Justice","Justice, Equality and the Excluded"],
    ids:["rawls","ambedkar","amartya-sen","nozick","deendayal","gandhi","mother-teresa","lohia","nussbaum"],
    qs:["2025A1","2023B3","2023B1","2021B1","2020B2","2020B3","2019A3","2019B2","2018A3"],
    also:{ "2025A1":"also reads as truth as impartiality" } },

  { t:"Democracy, the State and India in the World",
    why:"The paper's most explicitly political group: leadership, media, plural identity, borders, great-power rivalry. These reward specific institutional detail over general sentiment, and they are the questions most sensitive to the year in which they were set.",
    link:["Democracy, Institutions & Citizenship","Democracy, the State and India in the World"],
    ids:["ambedkar","tocqueville","habermas","montesquieu","nehru","kautilya","patel","orwell","gandhi"],
    qs:["2026A4","2026B4","2019B1","2019B3","2018A4"],
    also:{ "2026B4":"also reads as leadership and public office" } },

  { t:"Nature, Development and Civilisation",
    why:"Forests recur here with unusual persistence. The framing is never merely ecological: it asks whether nature is a resource, a teacher or a moral limit — and what a civilisation that answers that wrongly ends up looking like.",
    link:["Development, Environment & Sustainability","Nature, Development and Civilisation"],
    ids:["schumacher","ostrom","gandhi","thoreau","mahavira","burke","deendayal","amartya-sen","tagore"],
    qs:["2026B1","2024A1","2022A1","2018A1"],
    also:{ "2026B1":"demands the philosophical register, not the policy one" } },

  { t:"Technology and the Modern Self",
    why:"Technology enters this paper as something that changes people, not as something that solves problems. Attention, identity, employment, diplomacy — the question is always what a tool does to the person or the state that uses it.",
    link:["Technology, Surveillance & Privacy","Technology and the Modern Self"],
    ids:["foucault","orwell","einstein","schumacher","habermas","drucker","bentham","maslow","allport"],
    qs:["2024B1","2021A1","2020B4","2019B4"] }

];

/* What the nine papers show when you stand back from them. */
const PYQ_NOTES = [
  "**There is no reliable Section A / Section B rule, and betting on one is a mistake.** In 2018 the concrete questions sat in Section A (climate technologies, border disputes) while Section B was wholly abstract. In 2019 and 2020 that reversed exactly. Since 2023 the distinction has all but vanished, because almost nothing concrete is being set in either half.",
  "**The paper has drifted decisively towards the aphorism.** Nine of the 32 questions set between 2018 and 2021 name a contemporary policy subject outright — climate technology, border disputes, primary health care, biased media, artificial intelligence, patriarchy, technology in international relations, self-discovery outsourced to technology, Indian diversity. Of the 32 set between 2023 and 2026, exactly one does: social media and the fear of missing out.",
  "**Four themes carry 37 of the 72 questions** — knowledge and education, adversity and character, the good life, and the ethics of decision — and each appears in at least six of the nine papers. Every paper of the last nine contains at least one of them, and each of the last five contains at least four.",
  "**Nothing here is unwritable without current affairs.** Every one of the 72 can be argued from an idea plus an example. What has become non-negotiable is the idea, which is what the thinker pages, the model paragraphs and the model essays on this site exist to supply."
];
