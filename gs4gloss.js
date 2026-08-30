/* =====================================================================
   GS-IV GLOSSARY — the vocabulary the question papers actually use
   ---------------------------------------------------------------------
   The concept notes explain an idea at length. A question stem names it
   in two words and moves on. These entries close that gap.

   Two rules keep the list honest. A term earns an entry only where it
   carries a technical sense, so ordinary English that happens to appear
   in a question is left alone. And every entry must actually link
   somewhere in the rendered site — a syllabus line, a concept note or a
   question — which is checked against the corpus; nine terms were
   written and then removed for failing it.

     t   : the term as it should read on the card
     a   : the syllabus area it belongs to
     d   : the definition, short enough for a card
     c   : the concept note on this site that develops it, if there is one
     alt : other spellings that should also link
   ===================================================================== */
const GS4_GLOSS = {

  /* ---- Ethics and human interface ---- */
  "conscience":{t:"Conscience", a:"Ethics & Human Interface", c:"Conscience",
    d:"The inner faculty by which a person judges their own conduct and feels bound to act on that judgement. It works from within, which is why it can move someone to act rightly when nobody is watching and no rule applies."},
  "crisis of conscience":{t:"Crisis of conscience", a:"Ethics & Human Interface", c:"Conscience",
    d:"Being pulled by two moral obligations at once, most often when official duty runs against personal moral conviction. Conscience produces the voice; a sustained conflict between competing moral demands produces the crisis."},
  "ethical dilemma":{t:"Ethical dilemma", a:"Ethics & Human Interface", c:"Resolving an ethical dilemma",
    d:"A situation in which every available option violates some genuine obligation. It is not a choice between right and wrong, which is merely temptation, but between two claims that both have force."},
  "human values":{t:"Human values", a:"Ethics & Human Interface", c:"Ethics, morals, values and law",
    d:"The commitments a person treats as worth holding for their own sake, such as honesty, compassion or fairness. Values dispose a person towards conduct; morals judge the conduct; law compels it."},
  "moral values":{t:"Moral values", a:"Ethics & Human Interface", c:"Ethics, morals, values and law",
    d:"Values bearing directly on right and wrong in dealings with others, as distinct from values about what is merely useful or pleasant. They supply the reasons a person can give for a decision that cost them something."},
  "discrimination":{t:"Discrimination", a:"Ethics & Human Interface", c:"Discrimination and preferential treatment",
    d:"Treating people differently on a ground irrelevant to the matter at hand, such as caste, sex or religion in a decision about employment. The wrong lies in the irrelevance of the ground, not in the difference of treatment."},
  "preferential treatment":{t:"Preferential treatment", a:"Ethics & Human Interface", c:"Discrimination and preferential treatment",
    d:"Deliberately favouring a group in order to correct a disadvantage that earlier discrimination created. It is difference of treatment on a ground held to be relevant, which is the argument that separates it from discrimination."},
  "common good":{t:"Common good", a:"Ethics & Human Interface", c:"The individual good and the common good",
    d:"The conditions that let everyone in a community flourish, which no one can secure alone: clean air, a working court, public health. It is not the sum of private goods, since it can require some private goods to be given up."},
  "public interest":{t:"Public interest", a:"Ethics & Human Interface", c:"The individual good and the common good",
    d:"The standard by which a public decision is justified to people who are not party to it. It is not the same as what the public currently wants, and an officer who confuses the two has stopped exercising judgement."},

  /* ---- Attitude ---- */
  "attitude":{t:"Attitude", a:"Attitude", c:"Attitude: content, structure and function",
    d:"A settled disposition to respond to something favourably or unfavourably. It has three parts: what a person feels about it, what they believe about it, and how they tend to act towards it."},
  "prejudice":{t:"Prejudice", a:"Attitude", c:"Moral and political attitudes, and prejudice",
    d:"A judgement about a person formed from their group membership rather than from anything about them. It survives contrary evidence because it filters what gets noticed in the first place."},
  "social influence":{t:"Social influence", a:"Attitude", c:"Social influence and persuasion",
    d:"Any change in what a person thinks or does that comes from the real or imagined presence of others. It covers conformity to a group, compliance with a request, and obedience to authority."},
  "persuasion":{t:"Persuasion", a:"Attitude", c:"Social influence and persuasion",
    d:"Deliberately changing an attitude by giving reasons rather than by pressure or reward. It is the legitimate instrument of an administrator, because it leaves the other person free to be unconvinced."},

  /* ---- Aptitude and foundational values ---- */
  "integrity":{t:"Integrity", a:"Aptitude & Foundational Values", c:"Integrity",
    d:"Consistency between what a person holds to be right and what they do, sustained when it costs them. It is wider than honesty, which concerns truth-telling; integrity concerns the whole of conduct hanging together."},
  "honesty":{t:"Honesty", a:"Aptitude & Foundational Values", c:"Integrity",
    d:"Truthfulness in what one states, and refusal to deceive by silence or by arrangement. It is one component of integrity rather than a synonym for it."},
  "objectivity":{t:"Objectivity", a:"Aptitude & Foundational Values", c:"Impartiality, non-partisanship and objectivity",
    d:"Deciding on the evidence and the merits rather than on preference, pressure or prior belief. It is a discipline about how a conclusion is reached, not a claim to have no views."},
  "impartiality":{t:"Impartiality", a:"Aptitude & Foundational Values", c:"Impartiality, non-partisanship and objectivity",
    d:"Treating like cases alike, and giving no party an advantage the merits do not support. It bears on the parties before you, where objectivity bears on the evidence."},
  "non-partisanship":{t:"Non-partisanship", a:"Aptitude & Foundational Values", c:"Impartiality, non-partisanship and objectivity",
    d:"Serving the government of the day without becoming the instrument of a party. It permits full loyalty to lawful policy and forbids the use of office to advance a party's position.",
    alt:["non-partisan"]},
  "ethical competence":{t:"Ethical competence", a:"Aptitude & Foundational Values", c:"Aptitude, competence and values",
    d:"The developed ability to recognise an ethical issue, weigh it and act on the judgement. It is a capability rather than a disposition, built by studying real cases and by recording reasons at the time rather than afterwards."},
  "courage of conviction":{t:"Courage of conviction", a:"Aptitude & Foundational Values", c:"Courage of conviction",
    d:"Acting on a judgement one has reason to believe correct, in the face of pressure or personal cost. It is distinguished from obstinacy by the willingness to be shown wrong by argument."},
  "perseverance":{t:"Perseverance", a:"Aptitude & Foundational Values", c:"Trustworthiness, fortitude and perseverance",
    d:"Continuing at something difficult over time without the reward of visible progress. In administration it matters most where results appear long after the officer has been transferred."},
  "fortitude":{t:"Fortitude", a:"Aptitude & Foundational Values", c:"Trustworthiness, fortitude and perseverance",
    d:"Steadiness in the face of fear, hostility or hardship. It is the capacity to hold a position while frightened, not the absence of fear."},
  "spirit of service":{t:"Spirit of service", a:"Aptitude & Foundational Values", c:"Spirit of service and dedication",
    d:"Treating the office as held for other people rather than as a personal possession or a career step. It shows in what an officer does when no record is being kept."},
  "dedication to public service":{t:"Dedication to public service", a:"Aptitude & Foundational Values", c:"Spirit of service and dedication",
    d:"Sustained commitment to the purpose of the office rather than to its perquisites. The test is behaviour where the effort is invisible and the beneficiary cannot reciprocate.",
    alt:["dedication"]},
  "empathy":{t:"Empathy", a:"Aptitude & Foundational Values", c:"Emotional intelligence and its components",
    d:"Understanding what another person's situation is like from where they stand. It is a cognitive capacity as much as a feeling, and it can be present without any inclination to help."},
  "compassion":{t:"Compassion", a:"Aptitude & Foundational Values", c:"Compassion when the claimant is at fault",
    d:"Concern at another's suffering together with the impulse to relieve it. It differs from empathy in adding the motive to act, which is also why it needs a rule to keep it fair between claimants."},
  "tolerance":{t:"Tolerance", a:"Aptitude & Foundational Values",
    d:"Restraint from suppressing what one has both the power to suppress and the inclination to disapprove of. It presupposes disagreement, since approval requires no tolerance."},
  "innovativeness":{t:"Innovativeness", a:"Aptitude & Foundational Values", c:"Aptitude, competence and values",
    d:"The capacity to find an option that was not on the list, which is what most real dilemmas require. Typically a way to protect a genuine claimant without setting a precedent, or to meet the purpose of an instruction whose letter has become impossible."},
  "domain knowledge":{t:"Domain knowledge", a:"Aptitude & Foundational Values", c:"Aptitude, competence and values",
    d:"Command of the technical and procedural content of the work. Necessary and repeatedly insufficient, because dilemmas arise where two rules apply, none does, or the rule produces an outcome it was never meant to."},
  "foundational values":{t:"Foundational values", a:"Aptitude & Foundational Values", c:"Aptitude, competence and values",
    d:"The values the syllabus names for the civil service: integrity, impartiality, non-partisanship, objectivity, dedication to public service, empathy, tolerance and compassion. They divide into those governing the decision, those governing the relationship with the public, and those governing persistence."},
  "role model":{t:"Role model", a:"Aptitude & Foundational Values", c:"Choosing and using a moral exemplar",
    d:"A person whose conduct is taken as a standard to imitate. Useful in an answer only where the specific quality being borrowed is named, and where the difficulty the exemplar actually faced is stated."},

  /* ---- Emotional intelligence ---- */
  "emotional intelligence":{t:"Emotional intelligence", a:"Emotional Intelligence", c:"Emotional intelligence and its components",
    d:"The ability to recognise emotions in oneself and in others, and to use that information to guide thinking and action. Commonly analysed into self-awareness, self-regulation, motivation, empathy and social skill.",
    alt:["emotional quotient"]},
  "self-awareness":{t:"Self-awareness", a:"Emotional Intelligence", c:"Emotional intelligence and its components",
    d:"Recognising one's own emotion as it arises, and knowing what it is doing to one's judgement. It comes first because the other components depend on it."},
  "self-regulation":{t:"Self-regulation", a:"Emotional Intelligence", c:"Anger and the management of negative emotion",
    d:"Holding an emotional impulse long enough to choose the response. It is not suppression, which stores the feeling, but the insertion of a gap between the feeling and the act."},

  /* ---- Public administration and probity ---- */
  "probity":{t:"Probity", a:"Probity in Governance", c:"Probity in public life",
    d:"Uncompromising adherence to correct conduct in the use of a public office. It asks more than the absence of corruption, since it also excludes conduct that is lawful but improper.",
    alt:["probity in governance"]},
  "accountability":{t:"Accountability", a:"Probity in Governance", c:"Accountability in public service",
    d:"Being answerable to a named authority for a decision, with the obligation to give reasons and to bear the consequence. It requires that someone can be identified as responsible, which is why diffused responsibility defeats it."},
  "transparency":{t:"Transparency", a:"Probity in Governance", c:"RTI, transparency and its misuse",
    d:"Conducting official business so that it can be examined by those affected by it. It is the condition that makes accountability possible, since one cannot be called to account for what cannot be seen."},
  "good governance":{t:"Good governance", a:"Probity in Governance", c:"Governance, good governance and ethical governance",
    d:"Governance judged by how it is carried on and not only by what it delivers: participation, rule of law, transparency, responsiveness, equity and accountability. Governance is the activity; good governance is a standard applied to it."},
  "e-governance":{t:"E-governance", a:"Probity in Governance", c:"The digital divide and online delivery",
    d:"Delivering public services and conducting official business through digital systems. It removes the intermediary and creates an audit trail, and it excludes those without a device, a connection, or the literacy to use them."},
  "service delivery":{t:"Service delivery", a:"Probity in Governance", c:"Accountability in public service",
    d:"The actual supply of a public service to the person entitled to it. The ethical test is whether the intended household received the benefit, not whether the system recorded a transaction."},
  "code of conduct":{t:"Code of conduct", a:"Probity in Governance", c:"Code of ethics against code of conduct",
    d:"An enforceable list of specific things a public servant must and must not do, breach of which invites disciplinary action. For central government servants these are the Central Civil Services (Conduct) Rules, 1964."},
  "code of ethics":{t:"Code of ethics", a:"Probity in Governance", c:"Code of ethics against code of conduct",
    d:"A statement of the values and principles an office is to be exercised by, aimed at judgement rather than compliance. It guides the cases a code of conduct did not anticipate, and is generally not enforceable by itself."},
  "citizen's charter":{t:"Citizen's charter", a:"Probity in Governance", c:"Accountability in public service",
    d:"A published statement of the services an office provides, the standards it promises, and the remedy if it fails. In India it is an administrative commitment rather than a legally enforceable right, which is the usual criticism of it.",
    alt:["citizens charter","citizen charter","citizen's charters","citizens charters"]},
  "right to information":{t:"Right to Information", a:"Probity in Governance", c:"RTI, transparency and its misuse",
    d:"The statutory right of any citizen to obtain information held by a public authority, under the Right to Information Act, 2005. It converts transparency from a matter of official goodwill into an enforceable claim."},
  "work culture":{t:"Work culture", a:"Probity in Governance", c:"Accountability in public service",
    d:"The settled expectations inside an office about how work is done: punctuality, candour, how a mistake is reported, and what happens to someone who raises a problem. It shapes conduct more reliably than a written rule does."},
  "public servant":{t:"Public servant", a:"Public / Civil Service Values", c:"What a public servant is",
    d:"A person who exercises a power that belongs to the public and is held by them on trust. The office is not personal property, which is the premise from which most of the specific obligations follow."},
  "constitutional morality":{t:"Constitutional morality", a:"Public / Civil Service Values", c:"Constitutional morality",
    d:"Fidelity to the principles underlying the Constitution and not merely to its text, and not to majority sentiment where the two diverge. Ambedkar warned that it is a disposition to be cultivated rather than a natural one."},
  "discretion":{t:"Discretion", a:"Public / Civil Service Values", c:"Law, rules and ethics in administration",
    d:"The room a rule leaves an official to choose between lawful courses. It exists because rules cannot anticipate every case, and it is the space in which ethics does its work rather than a gap in the law."},
  "rule of law":{t:"Rule of law", a:"Public / Civil Service Values", c:"Law, rules and ethics in administration",
    d:"The principle that power is exercised under known general rules applied equally, and not at the will of the powerful. It binds the government as much as the governed."},

  /* ---- Corruption, whistleblowing, conflict of interest ---- */
  "corruption":{t:"Corruption", a:"Corruption & Conflict of Interest", c:"Causes of corruption",
    d:"Use of a public office for private gain. It covers the omission of a duty owed as much as the commission of a wrong, which is why deliberate delay counts."},
  "bribery":{t:"Bribery", a:"Corruption & Conflict of Interest", c:"Bribery in business, and the third way",
    d:"Giving or taking anything of value to influence the exercise of an official function. Under the Prevention of Corruption Act, 1988, as amended in 2018, both the giving and the taking are offences."},
  "conflict of interest":{t:"Conflict of interest", a:"Corruption & Conflict of Interest", c:"Conflict of interest",
    d:"A situation where a private interest could reasonably be thought to influence the discharge of a public duty. It is a state of affairs and not an act: it exists before anything improper is done, and the remedy is disclosure and recusal."},
  "whistleblowing":{t:"Whistleblowing", a:"Corruption & Conflict of Interest", c:"Whistleblowing",
    d:"Disclosure by an insider of wrongdoing within their own organisation. The Whistle Blowers Protection Act was passed in 2014 but has not been brought into force, so protection in practice rests on internal channels and on the courts.",
    alt:["whistle blowing","whistle-blowing","whistleblower","whistle-blower","whistle blower"]},
  "favouritism":{t:"Favouritism", a:"Corruption & Conflict of Interest", c:"Conflict of interest",
    d:"Giving an advantage on the ground of personal liking or connection rather than merit. It need involve no money, which is why it often escapes an anti-corruption rule while doing the same damage to fairness.",
    alt:["favoritism"]},

  /* ---- Corporate, environmental and social ---- */
  "corporate governance":{t:"Corporate governance", a:"Corporate Governance & Workplace Ethics", c:"Business under pressure: ends and means",
    d:"The system of rules and relationships by which a company is directed and held to account. It is the means by which the interests of shareholders, employees and the public are balanced against the discretion of management."},
  "corporate social responsibility":{t:"Corporate social responsibility", a:"Environmental & Development Ethics", c:"Corporate social responsibility",
    d:"A company's obligation to take account of its effect on society beyond what the law and the market require. In India, section 135 of the Companies Act, 2013 requires qualifying companies to spend at least two per cent of average net profit on it."},
  "environmental ethics":{t:"Environmental ethics", a:"Environmental & Development Ethics", c:"Environmental ethics: what is owed to nature",
    d:"The study of what human beings owe to the natural world and to future generations. Its central division is whether nature matters because people depend on it, or in its own right whatever use people have for it."},
  "sustainable development":{t:"Sustainable development", a:"Environmental & Development Ethics", c:"Development against the environment",
    d:"Development that meets present needs without compromising the ability of future generations to meet theirs, in the formulation of the Brundtland Commission of 1987. The obligation it names is owed to people who cannot bargain with us."},
  "social justice":{t:"Social justice", a:"Social Justice & the Weaker Sections", c:"Growth that does not reach",
    d:"Fairness in how a society distributes advantage, burden and standing among its members. It asks not only whether the total has grown but who received it and who bore the cost."},
  "distributive justice":{t:"Distributive justice", a:"Social Justice & the Weaker Sections", c:"Growth that does not reach",
    d:"The principles by which benefits and burdens are shared out among people with competing claims. The recurring test is whether an arrangement can be justified to the person it leaves worst off."},
  "social capital":{t:"Social capital", a:"Human Values", c:"Social capital and trust",
    d:"The value residing in relationships of trust and reciprocity between people, which lets a community act together without a contract for every transaction. It is built slowly and destroyed quickly."}
};
