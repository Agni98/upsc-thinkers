/* =====================================================================
   GS-IV CASE STUDIES — THE ANSWER ARCHITECTURE AND THE MODEL ANSWERS
   ---------------------------------------------------------------------
   CASE_METHOD is the method page under the Case Studies heading of the
   syllabus map: how to turn a case into a structured, defensible answer.
   CASE_ANSWERS holds one model answer for every Section B case in
   gs4pyq.js, keyed by question id, each written in the same five boxes:
     t        short title
     brief    the case in two or three sentences
     conflict ① what is pulling in opposite directions
     stake    ② who gains, who loses, who has a duty
     options  ③ [option, merit, problem or risk]
     criteria ④ paragraphs: how the options are tested
     sequence ⑤ what happens first, second, third
     also     [heading, [paragraphs or bullets]] for parts of the question
              the five boxes do not already answer
     close    the model conclusion
   The themes the answers are sorted under, each with its common
   architecture, are the case patterns in gs4concepts.js.

   This file is generated from the source notes; edit those and rebuild.
   ===================================================================== */
const CASE_METHOD = {
  chain:["The case", "Identify the ethical conflict", "Identify the governing principles",
         "Generate options", "Eliminate defective options", "Construct a defensible course of action"],
  boxes:[
    ["alert",  "Ethical conflict",  "What exactly is pulling in opposite directions?",
     "Open with a diagnosis of the real conflict in three or four lines. Then name the specific conflicts, not generic values."],
    ["users",  "Stakeholders",      "Who gains, who loses, and who has a duty?",
     "Name the people and institutions actually affected. Five to seven are usually enough."],
    ["layers", "Options",           "What can the officer actually do?",
     "Set out the realistic courses of action, each with its merit and its problem. Include the tempting wrong one and say why it fails."],
    ["scale",  "Decision criteria", "Legality, public interest, harm, fairness, integrity, feasibility.",
     "Test the options against these six. Admit the cost of the right choice."],
    ["target", "Action sequence",   "What happens first, second, third and fourth?",
     "Write a sequence, not a slogan: record, communicate, seek orders, escalate, act."]
  ],
  criteria:["Legality", "Public interest", "Harm", "Fairness", "Integrity", "Feasibility"],
  stakeholders:[
    ["Citizens and the public", "safety, rights and access to services"],
    ["The officer", "professional duty, integrity and accountability"],
    ["Superior officers", "administrative authority and responsibility"],
    ["Contractors and private actors", "commercial interests and contractual obligations"],
    ["The institution or government", "legality, efficiency and public trust"],
    ["Future or indirect beneficiaries", "long-term consequences"]
  ],
  specific:{
    weak:"Integrity, honesty, accountability, responsibility.",
    better:"Hierarchical obedience against professional responsibility; public safety against project completion; a short-term financial loss against long-term public harm; individual accountability against institutional pressure."
  },
  sequence:{
    weak:"I will act with courage and integrity.",
    strong:"I would first document the factual and technical position, communicate it formally, seek written instructions where necessary, and escalate through the prescribed channels if the safety concern remains unresolved. I would not certify work that I genuinely believe to be unsafe."
  },
  rules:[
    "Do not treat every case as a choice between courage and cowardice.",
    "Do not list values without connecting them to the facts.",
    "Do not jump straight to the final option.",
    "Use written records, disclosure, recusal, due process and escalation where they solve the institutional problem.",
    "Admit the legitimate costs: delay, career consequences, financial loss, political pressure or personal risk."
  ],
  lessons:[
    ["Pressure from above", "Ask for written instructions."],
    ["A personal relationship", "Disclose it, and step out where it affects impartiality."],
    ["Threats", "Protect the person and the family while keeping the public duty."],
    ["Corruption or influence", "Record the approach and protect the evidence."],
    ["A safety defect", "Record, correct, escalate. Never certify what you believe to be unsafe."],
    ["Courage", "Do not confuse ethical courage with needless personal risk."],
    ["Obedience", "Do not confuse procedural obedience with ethical responsibility."]
  ],
  pattern:"The ethical answer is usually procedural rather than theatrical. The officer protects the public interest by creating a record, clarifying authority, separating conflicts, preserving due process, using the chain of command, and escalating only when necessary.",
  concepts:"A concept note teaches what integrity, impartiality or conflict of interest mean. A case shows what they look like when a promotion, a relationship, money, political pressure or an institution's standing is at stake. Each theme below links to the concept notes it uses, so the concepts become tools for reasoning through cases rather than separate theory.",
  bottom:"The strongest case-study answer shows that the candidate can use ethical values to reach a lawful, proportionate, reasoned and administratively workable decision.",
  sample:"Q167"
};

const CASE_ANSWERS = {
"Q145":{
 "t": "Rajesh: pressure from the reporting officer",
 "brief": "Rajesh is an Administrative Officer in an Oil PSU and is approaching a promotion decision that depends partly on his ACR and performance record. His reporting officer repeatedly wants him to buy extended stationery from a particular vendor. Rajesh at first refuses because the practice does not follow the laid-down procedure; the purchase is then made through the delegated financial powers and proper tendering. The reporting officer's displeasure makes Rajesh fear adverse remarks.",
 "from": "supplied",
 "conflict": [
  "Professional duty and procedural compliance against obedience to a reporting officer.",
  "Integrity and impartial procurement against personal career consequences.",
  "Administrative efficiency against the risk of creating a precedent for preferential procurement.",
  "Fear of adverse ACR remarks against the obligation to exercise delegated authority properly."
 ],
 "stake": [
  "Rajesh",
  "The reporting officer",
  "Other employees involved in procurement",
  "Competing vendors",
  "The PSU",
  "Public funds and institutional trust"
 ],
 "options": [
  [
   "Comply with future informal pressure",
   "Avoids immediate conflict and possible adverse remarks.",
   "May normalise preferential treatment and weaken procurement integrity."
  ],
  [
   "Refuse orally and continue normally",
   "Maintains the substantive position.",
   "Leaves little documentary protection if the dispute becomes an ACR issue."
  ],
  [
   "Record the procurement facts and seek written instructions where an irregular direction is repeated",
   "Protects transparency while keeping the matter within the hierarchy.",
   "May create friction with the reporting officer."
  ],
  [
   "Escalate immediately to a higher authority",
   "Creates independent oversight.",
   "Could be disproportionate before internal documentation and clarification."
  ],
  [
   "Resign or seek a transfer",
   "Avoids direct exposure.",
   "Does not address the institutional problem."
  ]
 ],
 "criteria": [
  "The decisive considerations are legality and procurement procedure, equal treatment of vendors, protection of public resources, proportionality and preservation of the chain of command. The fact that the officer fears an adverse ACR is relevant to the personal cost, but it does not alter the substantive duty."
 ],
 "sequence": [
  "Keep a complete factual record of the procurement, including the applicable delegated powers and tendering process.",
  "If the reporting officer gives a direction that is contrary to procedure, seek clarification and, where necessary, written instructions.",
  "Continue to perform legitimate duties without making the dispute personal.",
  "If an adverse ACR remark appears to be retaliatory, use the prescribed representation or review mechanism rather than bypassing the system.",
  "Do not make an unsupported allegation of corruption merely because the superior preferred a particular vendor; focus the objection on the identifiable procedural issue."
 ],
 "close": "Rajesh should remain procedurally firm without becoming confrontational. His strongest protection is a contemporaneous record showing that his decision was based on the prescribed procurement rules and not on personal hostility toward the reporting officer."
},
"Q115":{
 "t": "Ramesh: a report on infiltration he is told to withdraw",
 "brief": "As Director in the Home Department of a border state, Ramesh catches two families crossing the border with the help of security staff, and finds that their Aadhaar, ration and voter cards were then forged so they could settle. The Additional Home Secretary tells him to withdraw his report, or lose his posting in the capital and his coming promotion. His mother is being treated for cancer in the capital, and his children have just joined school there.",
 "conflict": [
  "National security and the integrity of identity documents against a superior's instruction.",
  "His family's needs (his mother's treatment, his children's schooling) against his official duty.",
  "Loyalty to the hierarchy against exposing collusion within the system.",
  "Truthful reporting against pressure to bury an inconvenient finding."
 ],
 "stake": [
  "Ramesh and his family",
  "The Additional Home Secretary",
  "Border security personnel involved",
  "Officials who issued the forged documents",
  "The migrant families",
  "Citizens whose welfare and votes are diluted by forged documents",
  "The state and central governments"
 ],
 "options": [
  [
   "Withdraw the report",
   "Keeps the posting and the promotion; family life goes on undisturbed.",
   "Makes him party to hiding a security breach and organised forgery."
  ],
  [
   "Refuse orally and leave the report on file",
   "Keeps his integrity.",
   "No record of the pressure; easy to penalise him quietly later."
  ],
  [
   "Ask for the withdrawal order in writing, record the meeting, and stand by the report",
   "Protects the finding and puts responsibility where it belongs.",
   "Invites a transfer and a delayed promotion."
  ],
  [
   "Take the report to the Home Secretary or Chief Secretary, and suggest it go to the central agencies that guard the border",
   "Independent oversight, since the Additional Secretary's role is itself in question.",
   "Should follow the written record; will strain relations."
  ],
  [
   "Leak it to the media",
   "Public pressure.",
   "Breaches the confidentiality of an intelligence matter and could compromise the investigation."
  ]
 ],
 "criteria": [
  "The report is a factual record of a security breach and of forgery. Withdrawing it would not make the facts untrue; it would only hide them. An instruction to suppress evidence is not a lawful order. The personal cost is serious, and Ramesh may ask for his mother's treatment to be considered in any posting, but that cannot be bought by suppressing the report."
 ],
 "sequence": [
  "Write a note of the meeting the same day, with the instruction and the threats.",
  "Ask the Additional Home Secretary for the instruction in writing, with the reasons for withdrawal.",
  "Whether or not it is given, place the report and the note before the Home Secretary and the Chief Secretary.",
  "Suggest that the report be shared with the central border-guarding agency and the police, for action on the connivance and the forgery.",
  "If transferred, go without resentment. Represent through proper channels about his mother's treatment, and use service remedies if the promotion is withheld.",
  "Carry on his work in the Home Department with the same care until relieved."
 ],
 "also": [
  [
   "(d) The ethical dilemmas Ramesh faces",
   [
    [
     "Career and family stability against honesty and national security.",
     "Obedience to a senior against a duty to the public that the senior is asking him to abandon.",
     "Whether to trust the hierarchy with a report the hierarchy wants buried."
    ]
   ]
  ],
  [
   "(e) Policy measures against infiltration",
   [
    [
     "Close the gaps on the border: fencing, technology-based surveillance and joint patrolling.",
     "Rotate border personnel and audit their conduct to break collusion; prosecute those involved.",
     "Verify identity documents when they are issued: field checks, biometric de-duplication, and audits of documents issued in sensitive areas.",
     "Act against forgery networks and the officials who issue false documents.",
     "Decide questions of nationality through the tribunals with due process, and treat detained people humanely.",
     "Work with the neighbouring country on returns and on the causes of migration."
    ]
   ]
  ]
 ],
 "close": "Ramesh should not withdraw a truthful report under threat. By recording the pressure, asking for written orders and taking the report higher, he protects national security and himself, and accepts a personal cost that the service rules allow him to contest."
},
"Q052":{
 "t": "The Vice Principal: two students, a flying squad and a promotion",
 "brief": "The Vice Principal of a degree college learns that a university flying squad caught two students using unfair means, helped by a senior lecturer close to the management. One student is the son of the politician who got the college its affiliation; the other's father is its biggest donor. The management tells him to resolve it with the squad at any cost and hints that his promotion to Principal depends on it. Students are protesting at the gate for strict action.",
 "conflict": [
  "The integrity of the examination against the management's instruction.",
  "His own promotion against fairness to every honest student.",
  "The college's image and funding against accountability for the lecturer and the students.",
  "Loyalty to the college's patrons against the rule of law."
 ],
 "stake": [
  "The Vice Principal",
  "The management",
  "The senior lecturer",
  "The two students and their families",
  "The politician and the donor",
  "The flying squad and the university",
  "The protesting student union",
  "Honest students, whose degrees lose value if cheating is hidden"
 ],
 "options": [
  [
   "Persuade or pressure the flying squad to drop the case",
   "Protects the college's image, the patrons and his promotion.",
   "Obstructs the university's process; corrupt, possibly criminal, and a betrayal of honest students."
  ],
  [
   "Do nothing and leave it to the squad and the management",
   "Keeps him out of trouble.",
   "Abandons his responsibility as the acting head of the college."
  ],
  [
   "Cooperate fully with the squad, report the lecturer's role, and tell the management in writing",
   "Upholds the examination and due process.",
   "Displeases the management and may cost the promotion."
  ],
  [
   "Resign",
   "Keeps his hands clean.",
   "Leaves the college leaderless at a delicate moment."
  ]
 ],
 "criteria": [
  "The case is in the university's hands, and the college has no lawful power to resolve it. Any attempt to do so would be interference in an examination inquiry. The standing of the parents cannot change the rules. The promotion is a real loss, but a principalship obtained by hiding malpractice would begin with a compromise that the management could use again."
 ],
 "sequence": [
  "Tell the management in writing that the matter lies with the university, and that the college will cooperate fully with the flying squad.",
  "Give the squad all the records and access it needs, and do not approach it for leniency.",
  "Relieve the senior lecturer of examination duties pending the inquiry, and start disciplinary proceedings as the rules provide.",
  "Meet the student union, explain that due process is under way, and ask for a peaceful protest; make sure the two students are not harassed.",
  "Brief the governing body on the facts, and propose stricter invigilation and a code of conduct for examinations."
 ],
 "close": "The Vice Principal's duty is to the examination and the students, not to the patrons. Cooperating with the university, acting against the lecturer through due process and keeping the protest peaceful is the only course he could defend as Principal later."
},
"Q208":{
 "t": "The elevated corridor: a crack before an election deadline",
 "brief": "A project manager finds a crack in a pier, probably from poor material, and judges that three piers must be rebuilt at a cost of four to six months. The chief engineer overrules him: the minister wants the Chief Minister to open the corridor before the elections, the contractor is the minister's relative, and the manager's own promotion is under consideration.",
 "conflict": [
  "Public safety against an election-driven deadline.",
  "Professional judgement against the chief engineer's order.",
  "The contractor's link to the minister against impartial quality control.",
  "A personal promotion against the duty not to pass unsafe work."
 ],
 "stake": [
  "Future users of the corridor",
  "Commuters waiting for traffic relief",
  "The project manager and the inspecting team",
  "The chief engineer",
  "The contractor",
  "The minister and the Chief Minister",
  "The state government and taxpayers"
 ],
 "options": [
  [
   "Carry on as ordered",
   "Meets the deadline and pleases superiors; the promotion stays on track.",
   "Leaves a known defect in a structure the public will use, and makes the manager answerable if it fails."
  ],
  [
   "Obey, but record a note of dissent",
   "Protects the manager on paper.",
   "A note does not make the corridor safe, and certifying the work would still be wrong."
  ],
  [
   "Keep work on the affected piers stopped, order independent structural tests, and seek written orders",
   "Settles the question with evidence and keeps it in the hierarchy.",
   "Some delay, and open friction with the chief engineer and the minister."
  ],
  [
   "Escalate to the Engineer-in-Chief or the Secretary with the test results",
   "Brings independent oversight.",
   "Seen as going over the chief engineer's head; should follow the written record."
  ],
  [
   "Go to the media",
   "Creates pressure.",
   "Premature; breaches the conduct rules and may cause public alarm before the facts are tested."
  ],
  [
   "Seek a transfer",
   "Removes the personal risk.",
   "Leaves the defect for someone else."
  ]
 ],
 "criteria": [
  "The decisive fact is that a competent engineer believes the crack threatens the corridor's life, and the inspecting team found it independently. A disagreement between engineers about safety is settled by tests, not by rank. An election date or a contractor's connections cannot justify a risk to future users, who have no say in the decision. The delay is real and should be admitted; it can be reduced by speeding up work on the other spans."
 ],
 "sequence": [
  "Keep work on the affected piers suspended, and let work on unaffected sections continue so the delay is as short as possible.",
  "Commission core and load tests, and an independent review by a structural expert or a technical institution.",
  "Put the inspecting team's findings, the test results and a corrective plan with a revised schedule before the chief engineer, and ask for written orders if he still wants work to continue.",
  "If the written order is to proceed despite the evidence, place the file before the Engineer-in-Chief or the Secretary.",
  "Recover the cost of rework from the contractor under the contract, since poor material is his liability.",
  "Refuse to certify the piers as sound, and keep the promotion hint on record if it is repeated as pressure."
 ],
 "also": [
  [
   "The professional challenges, and how to meet them",
   [
    [
     "Isolation and pressure from above: rely on evidence and a written record, not argument.",
     "The schedule: speed up unaffected work and publish an honest revised date.",
     "The contractor's resistance: enforce the contract's quality and defect clauses.",
     "The career risk: accept it, and use service remedies if penalised."
    ]
   ]
  ],
  [
   "The consequences of overlooking the crack",
   [
    [
     "Early failure or collapse, with loss of life.",
     "Criminal and departmental liability for the engineers who passed the work.",
     "A far higher cost of repair later, and a waste of public money.",
     "Loss of public trust in public works and in the government."
    ]
   ]
  ]
 ],
 "close": "The manager should let evidence, not rank or an election date, settle the question. Independent tests, written orders and correction at the contractor's cost protect the public; certifying a doubtful structure to meet an inauguration would not."
},
"Q174":{
 "t": "The Finance Ministry: a superior asks for a leak",
 "brief": "As a senior officer in the Finance Ministry, you know of policy decisions, about to be announced, that will move the housing and construction market. Your immediate superior asks you to share them in advance with a builder who is close to him and has done good work for the government.",
 "conflict": [
  "Obedience to a superior against the duty to keep official information confidential.",
  "The builder's past good work against fairness to every other builder and investor.",
  "Your career and your relations with the superior against public trust in policy-making.",
  "A private profit made from public information against the integrity of government decisions."
 ],
 "stake": [
  "You",
  "Your superior",
  "The builder",
  "Other builders and investors",
  "House buyers",
  "The Finance Ministry and the government",
  "The public"
 ],
 "options": [
  [
   "Share the information as asked",
   "Pleases the superior.",
   "A leak of price-sensitive policy; a breach of the conduct rules and possibly the Official Secrets Act, and corruption if any benefit flows."
  ],
  [
   "Refuse quietly and say nothing more",
   "Avoids the leak through you.",
   "The superior may leak it through someone else, and there is no record."
  ],
  [
   "Refuse clearly, record the request, and ask for any instruction in writing",
   "Protects the information and puts responsibility on record.",
   "Friction with the superior; possible adverse remarks."
  ],
  [
   "Report the approach to the Secretary or the Chief Vigilance Officer",
   "Stops a leak by another route and protects the process.",
   "A serious step against a superior; needs a clear record."
  ],
  [
   "Ask for a transfer out of the division",
   "Avoids further pressure.",
   "Does not stop the leak."
  ]
 ],
 "criteria": [
  "Advance access to price-sensitive policy gives a few people a large, unearned gain at the public's expense. No superior can lawfully order such a disclosure, and the builder's past work is irrelevant to it. The test is simple: would the disclosure survive being made public? It would not."
 ],
 "sequence": [
  "Decline clearly and politely, citing the confidentiality of the decision.",
  "Make a note of the request, with the date and time.",
  "If the superior insists, ask for the instruction in writing. No such order is likely to be given.",
  "Report the approach to the Secretary or the Chief Vigilance Officer, so that the information is protected from other routes.",
  "Keep strict control of the documents and of access to them until the decision is announced."
 ],
 "close": "A superior's wish cannot turn a leak into a lawful act. Refusing, recording and reporting the request protects the policy, every other player in the market, and the officer."
},
"Q213":{
 "t": "The Executive Engineer: safety against completion",
 "brief": "An Executive Engineer finds serious deviations in a flyover that may affect public safety. Rectification would need demolition and rework, causing losses to the contractor and delaying a project under heavy public pressure. The Chief Engineer says the lapse is not serious and should be ignored.",
 "from": "supplied",
 "conflict": [
  "Public safety against project completion and traffic relief.",
  "Professional engineering judgement against hierarchical pressure.",
  "An immediate financial loss to the contractor against potentially severe future public harm.",
  "The responsibility of the inspecting engineers against the responsibility of the Executive Engineer."
 ],
 "stake": [
  "Road users and the public",
  "The Executive Engineer",
  "The Junior Engineers",
  "The Chief Engineer",
  "The contractor",
  "The Municipal Corporation",
  "Future users who cannot consent to the risk"
 ],
 "options": [
  [
   "Follow the Chief Engineer and proceed",
   "Avoids delay and immediate conflict.",
   "Leaves a known safety issue unresolved and creates serious accountability risk."
  ],
  [
   "Prepare an exhaustive report and seek written orders",
   "Creates a record and keeps the matter within the hierarchy.",
   "May still delay the project and expose the officer to pressure."
  ],
  [
   "Seek explanations from the Junior Engineers and order the necessary correction",
   "Addresses the defect directly.",
   "Requires technical certainty and may cause substantial rework."
  ],
  [
   "Escalate above the Chief Engineer",
   "Creates independent review.",
   "Can strain the hierarchy and should be supported by a clear record."
  ],
  [
   "Seek a transfer or report sick",
   "Protects the individual.",
   "Does not solve the safety problem."
  ]
 ],
 "criteria": [
  "The key issue is the asymmetry of consequences: delay and financial loss are visible and immediate, while structural failure may occur later and affect people who had no part in the decision. Because the officer believes the defect may affect public safety, it cannot be treated as an ordinary scheduling dispute."
 ],
 "sequence": [
  "Prepare a detailed technical report identifying the deviations, their safety implications and the proposed corrective measures.",
  "Place the report formally before the Chief Engineer, and seek written instructions if the direction remains to ignore the defect.",
  "Obtain explanations from the Junior Engineers about their earlier inspection reports.",
  "Direct the contractor to carry out the technically necessary correction within a specified and feasible schedule, subject to the applicable authority.",
  "If the Chief Engineer continues to direct that a genuine safety defect be ignored, escalate the documented issue to the competent higher authority.",
  "Do not certify or approve the work as compliant if there is a genuine technical basis to believe that it is not."
 ],
 "close": "The strongest course is not a dramatic confrontation or immediate resignation. It is a documented technical objection, written instructions, corrective action and proportionate escalation, with public safety treated as the non-negotiable constraint."
},
"Q163":{
 "t": "The bank: a colleague's father saved with money from a dormant account",
 "brief": "A close colleague in a nationalised bank tells you that the branch manager released ₹10 lakh from someone else's dormant account to pay for her father's heart surgery, on a promise of secrecy and early repayment. She has started repaying it.",
 "conflict": [
  "Compassion for a colleague in a medical emergency against the bank's duty of trust to depositors.",
  "Friendship, and a confidence shared with you, against the duty to report the misuse of a depositor's money.",
  "The manager's kindness against his abuse of authority.",
  "Repayment later against the wrong done now."
 ],
 "stake": [
  "The colleague and her father",
  "The branch manager",
  "The owner of the dormant account",
  "Depositors in general",
  "The bank and its reputation",
  "You",
  "The bank's vigilance and audit"
 ],
 "options": [
  [
   "Keep quiet, since the money is being repaid",
   "Protects the colleague and the friendship.",
   "Makes you complicit in the misuse of a depositor's money, and the manager may do it again."
  ],
  [
   "Report both at once to vigilance",
   "Upholds the rules.",
   "Harsh on a colleague who acted in desperation, with no chance for her to come forward."
  ],
  [
   "Urge her to disclose it herself and repay quickly, then report the manager's action through the proper channel",
   "Gives her the chance to come forward, and still ends the misuse.",
   "Strains the friendship; you must still report if she does not."
  ]
 ],
 "criteria": [
  "A dormant account belongs to its owner, and no one may draw on it without authority. Repayment does not undo an unauthorised withdrawal; it is still misappropriation. The manager's motive was kind, but a kind breach of trust is still a breach, and it shows that the controls on dormant accounts can be bypassed. Sympathy should shape how the colleague is treated, not whether the matter is reported."
 ],
 "sequence": [
  "Tell the colleague, with sympathy, that the arrangement is unlawful and puts her at risk.",
  "Advise her to disclose it to the bank's higher management herself, and to repay the balance as fast as she can, through a staff loan if needed.",
  "If it is not disclosed promptly, report the manager's action through the bank's vigilance or protected-disclosure channel, stating only the facts.",
  "Ask that the depositor's account be restored at once and the controls on dormant accounts be checked.",
  "Help her find lawful support: staff welfare funds, loans, health insurance and public health schemes."
 ],
 "also": [
  [
   "(b) The bank manager's conduct",
   [
    [
     "His motive, compassion, is to his credit.",
     "His act was not: he used a depositor's money without authority and asked for secrecy. That is a breach of trust and of banking rules, and a misuse of office.",
     "It exposed the depositor to loss, the colleague to disciplinary and criminal risk, and the bank to a loss of trust.",
     "A lawful path existed: a staff loan, a medical advance, a welfare fund, insurance or a public health scheme."
    ]
   ]
  ]
 ],
 "close": "Kindness cannot be paid for with a stranger's savings. The right response is to help the colleague come forward, make sure the depositor is protected, and report the manager's breach, while supporting her through lawful means."
},
"Q183":{
 "t": "The only eyewitness to the client's accident",
 "brief": "You are negotiating a deal that is critical for your company with the manager of a large buyer. After dinner he drives you to your hotel, drives too fast, and badly injures a motorcyclist. You are the only eyewitness. An honest account will lead to his prosecution and will probably cost your company the deal.",
 "conflict": [
  "Truthfulness to the law against your company's commercial interest.",
  "Gratitude or loyalty to a business contact against justice for the injured motorcyclist.",
  "Your career against your integrity.",
  "The duty to help the injured man now against the wish to protect the driver."
 ],
 "stake": [
  "The injured motorcyclist and his family",
  "The driver, the buyer's manager",
  "You",
  "Your company and its employees",
  "The buyer's company",
  "The police and the courts",
  "Other road users"
 ],
 "options": [
  [
   "Give a false or vague account to protect the driver",
   "May save the deal.",
   "Giving false evidence is an offence; it denies the victim justice, and exposes you and your company if the truth comes out."
  ],
  [
   "Refuse to give a statement",
   "Avoids lying.",
   "Obstructs the investigation, and the victim may lose his claim to compensation."
  ],
  [
   "Give a truthful statement, and tell both companies honestly",
   "Upholds the law and your integrity.",
   "The deal may be lost."
  ]
 ],
 "criteria": [
  "The injured man has the most at stake: his treatment, and his claim to justice and compensation, depend on the truth. A deal won by false evidence would rest on a crime, and would give the other company a hold over you. A business relationship built on honesty is worth more than one deal."
 ],
 "sequence": [
  "First make sure the injured man gets medical help at once, and that an ambulance and the police are called.",
  "Give the police a truthful, factual statement of what you saw, no more and no less.",
  "Tell your own management what happened, and that your statement was truthful.",
  "Keep the deal separate; tell the buyer's management that it should be decided on its merits.",
  "Show humane concern for the driver as a person, without shading the facts."
 ],
 "close": "The deal matters, but not more than the truth or the injured man. Help for the victim, a factual statement to the police, and honest word to both companies is the only course that does not turn a business negotiation into a crime."
},
"Q185":{
 "t": "The kind boss who beats his wife",
 "brief": "A young assistant who admires and depends on a helpful director discovers, on a visit to his house, that he beats his wife, a simple and less educated woman. The case offers three options: ignore it as a private matter, report it to the appropriate authority, or find an approach of your own.",
 "conflict": [
  "Gratitude and loyalty to a mentor against the safety of a woman being abused.",
  "Respect for privacy against a crime committed at home.",
  "Career prospects against the duty to act on knowledge of violence.",
  "Acting on partial information against doing nothing."
 ],
 "stake": [
  "The wife",
  "The boss",
  "You",
  "Any children in the family",
  "The department",
  "The Protection Officer and the police",
  "A society that tolerates domestic violence by calling it private"
 ],
 "options": [
  [
   "(a) Ignore it as their personal matter",
   "Protects the relationship and your career.",
   "Domestic violence is a crime, not a private matter; silence leaves the wife unprotected."
  ],
  [
   "(b) Report it to the Protection Officer or the police",
   "Brings legal protection.",
   "Without the wife's agreement it may put her at greater risk, or be denied; the office relationship will suffer."
  ],
  [
   "(c) Reach the wife first: speak to her privately, tell her of her rights and the help available, support her choice, and report at once if she is in danger",
   "Puts the victim's safety and choice first, and leads to lasting help.",
   "Slower; needs tact, and she may refuse help at first."
  ]
 ],
 "criteria": [
  "The Protection of Women from Domestic Violence Act, 2005 makes domestic violence a matter the state must act on. Any person who has reason to believe it is happening may inform the Protection Officer, and information given in good faith carries no liability. The wife's safety and her own wishes should decide the route. The boss's kindness at work has no bearing on his conduct at home."
 ],
 "sequence": [
  "Keep the office relationship professional, and do not confront the boss in anger.",
  "Find a safe way to speak to the wife, perhaps with a woman colleague or a counsellor, and tell her about the Protection Officer, the women's helpline and legal aid.",
  "If she wants help, help her reach the Protection Officer or a women's organisation.",
  "If there is a risk of serious injury, inform the police or the Protection Officer even without her consent.",
  "Consider a private, respectful word with the boss, if it would not endanger his wife, making clear that the violence must stop."
 ],
 "close": "A mentor's kindness does not buy silence about violence at home. The assistant should put the wife's safety and choice first, help her reach the protection the law provides, and report if she is in danger."
},
"Q161":{
 "t": "Subash: family interest and a government project",
 "brief": "Subash, Secretary in the State PWD, is involved in preparations for a major road project. His son Vikas, a real-estate businessman, wants information about the proposed alignment so that he can buy land before prices rise. The minister in charge also has an unusual interest in the project, because his nephew has business interests in real estate.",
 "from": "supplied",
 "conflict": [
  "Confidential official information against a close family member's private commercial interest.",
  "Public office against conflict of interest.",
  "Ministerial trust against the duty to give objective professional advice.",
  "Fairness in land acquisition and market processes against the possibility of insider advantage."
 ],
 "stake": [
  "Subash",
  "His son",
  "Landowners",
  "Other potential investors",
  "The PWD and the State Government",
  "The minister and his nephew",
  "The public affected by the road project"
 ],
 "options": [
  [
   "Share the alignment privately with his son",
   "Benefits the family and may preserve personal relations.",
   "Uses privileged information for private gain and undermines public trust."
  ],
  [
   "Refuse the request but continue handling the entire project personally",
   "Protects the immediate information.",
   "Leaves the conflict of interest largely unmanaged and may create suspicion."
  ],
  [
   "Disclose the conflict and recuse from decisions where his family's interest could be affected",
   "Protects impartiality and the integrity of the process.",
   "May reduce his direct control over a major project."
  ],
  [
   "Seek formal directions and institutional safeguards",
   "Creates an auditable process.",
   "Requires the issue to be acknowledged rather than kept private."
  ]
 ],
 "criteria": [
  "The critical test is whether the information is available to the public on equal terms, and whether Subash's family could gain from information that comes to him because of his office. Even without an actual bribe or completed transaction, the conflict exists before the benefit is realised."
 ],
 "sequence": [
  "Do not disclose the proposed alignment or other non-public project information to his son or any private party.",
  "Tell his son clearly that official information cannot be used for private investment advantage.",
  "Disclose the family interest through the appropriate official channel and seek a written determination on recusal and role allocation.",
  "Ensure that project information is released through the same formal process to all eligible stakeholders.",
  "Maintain professional independence in dealing with the minister, and record any direction that could compromise the project process.",
  "Where necessary, separate technical project advice from decisions in which a conflict of interest exists."
 ],
 "close": "Subash should protect the integrity of the project by refusing private disclosure, formally disclosing the conflict and using institutional safeguards. Personal loyalty to his son and professional loyalty to the minister cannot override his public role."
},
"Q166":{
 "t": "Sunil: illegal sand mining and threats",
 "brief": "Sunil is posted in a tribal-dominated district where illegal sand mining runs through a nexus of local functionaries, musclemen, and bribed or intimidated tribals. After he starts raids, the mafia threatens him and puts his wife and elderly mother under surveillance. He is warned that a predecessor was killed.",
 "from": "supplied",
 "conflict": [
  "The duty to enforce the law against personal and family safety.",
  "The public interest against the coercive power of an entrenched illegal network.",
  "Integrity against pressure from compromised local functionaries.",
  "Firm enforcement against the need to protect vulnerable tribals who may themselves be under intimidation."
 ],
 "stake": [
  "Sunil and his family",
  "Honest government employees",
  "Illegal miners and transporters",
  "Vulnerable tribals",
  "Local administration and police",
  "Lawful businesses",
  "The environment and public revenue"
 ],
 "options": [
  [
   "Stop or substantially reduce raids",
   "Reduces immediate personal risk.",
   "Allows the illegal activity and the intimidation network to continue."
  ],
  [
   "Continue raids alone with the same operational pattern",
   "Demonstrates resolve.",
   "Creates unnecessary risk and may make enforcement predictable."
  ],
  [
   "Seek police and security protection and continue enforcement through a coordinated operation",
   "Protects life while keeping the legal objective.",
   "Requires institutional cooperation and may expose the scale of the nexus."
  ],
  [
   "Transfer out immediately",
   "Reduces personal exposure.",
   "May leave the illegal network intact and reward intimidation."
  ],
  [
   "Escalate the matter to senior authorities and specialised agencies",
   "Can break the local nexus.",
   "Requires evidence and careful coordination."
  ]
 ],
 "criteria": [
  "The duty to enforce the law does not require reckless exposure of the officer or his family. The ethical response must therefore keep the objective while changing the method: security, intelligence, documentation and coordinated enforcement are preferable to personal heroics."
 ],
 "sequence": [
  "Treat the threats as a security issue and place them on record at once with the competent police and administrative authorities.",
  "Seek protection for himself and his family, and assess how credible and immediate the threat is.",
  "Document the illegal-mining network, including the role of compromised officials and the flow of trucks and material.",
  "Move from isolated raids to coordinated, intelligence-led enforcement with the police and other competent agencies.",
  "Protect witnesses and vulnerable tribals from retaliation where institutional mechanisms permit.",
  "Escalate evidence of official collusion to the appropriate higher authority rather than relying on local personnel who may themselves be compromised."
 ],
 "close": "Sunil should neither surrender to intimidation nor confuse courage with reckless exposure. The right response is protected, coordinated and documented enforcement that keeps the rule of law while reducing avoidable risk to his family."
},
"Q167":{
 "t": "The municipal commissioner: collapse, corruption and pressure",
 "brief": "A mall roof collapses, killing four labourers including two minors and injuring others. The preliminary enquiry finds poor-quality material, an unauthorised extra basement, encroachment on a green belt and a slip road, and failures in municipal inspection. The previous commissioner, who approved the mall, is the officer's friend; colleagues ask the officer to go slow; the builder, a minister's relative, offers a fortune to hush it up and hints at a POSH complaint.",
 "from": "supplied",
 "conflict": [
  "Public safety and accountability against pressure to protect influential people.",
  "An impartial investigation against friendship with the previous commissioner.",
  "The rule of law against political and financial influence.",
  "Due process against the need to act promptly after deaths.",
  "Personal security and reputation against institutional responsibility."
 ],
 "stake": [
  "The victims and their families",
  "The injured workers",
  "The builder",
  "Municipal officials",
  "The previous commissioner",
  "The present commissioner",
  "The government",
  "The public who rely on the city's building regulation"
 ],
 "options": [
  [
   "Slow down the enquiry",
   "Reduces immediate institutional conflict.",
   "Compromises accountability and may let evidence or responsibility be obscured."
  ],
  [
   "Accept the inducement and hush it up",
   "Personal financial benefit, and an end to the immediate dispute.",
   "Corrupt, unlawful and incompatible with public office."
  ],
  [
   "Conduct an objective enquiry with due process",
   "Protects accountability and fairness.",
   "Creates personal and institutional pressure."
  ],
  [
   "Make public allegations at once",
   "Signals transparency.",
   "May prejudice the investigation and due process before findings are established."
  ],
  [
   "Seek an independent or higher-level investigation where conflicts exist",
   "Reduces the local conflict of interest.",
   "Requires careful documentation and formal escalation."
  ]
 ],
 "criteria": [
  "The deaths and safety failures make the public-interest dimension central. At the same time, an ethical investigation must distinguish evidence from suspicion, give the people concerned an opportunity to respond, and avoid turning personal relationships into presumptions of guilt."
 ],
 "sequence": [
  "Preserve building plans, inspection records, approvals, material and test reports, and relevant communications.",
  "Record the preliminary findings and maintain an evidence trail.",
  "Ensure that officials directly involved in the disputed approvals do not control the investigation into their own conduct.",
  "Reject and document the builder's inducement.",
  "Treat any POSH complaint strictly through the prescribed institutional process: neither ignore it nor use it as leverage in the construction enquiry.",
  "Give the builder and the officials concerned due opportunity to explain the anomalies.",
  "Where the municipal hierarchy itself is implicated, refer the matter to the competent higher or independent authority."
 ],
 "close": "The officer should pursue an evidence-based enquiry without slowing it for convenience and without converting suspicion into guilt. Integrity here means both refusing influence and preserving due process."
}
};
