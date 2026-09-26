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

   Edit this file directly: each answer is plain JSON under its question id,
   and the order of the answers follows the themes. A case must also be listed
   in its theme's qs in gs4concepts.js for it to appear in the contents.
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
"Q204":{
 "t": "Dr Srinivasan: shortcuts in a drug trial during an outbreak",
 "brief": "Dr Srinivasan leads a team developing a drug against a fast-spreading viral disease. The company wants to reach the market first. Senior colleagues propose shortcuts: dropping negative results, reporting only positive ones, skipping informed consent, and using compounds patented by a rival. He is uneasy, but the targets cannot be met without them.",
 "conflict": [
  "Speed to market and the company's targets against the safety of the patients who will take the drug.",
  "Honest reporting of data against selective reporting that makes the drug look better than it is.",
  "The need for trial participants against their right to informed consent.",
  "A rival's patent rights against a faster route to a product.",
  "The urgency of an outbreak against the discipline of proper trials."
 ],
 "stake": [
  "Trial participants",
  "Future patients",
  "Dr Srinivasan and his team",
  "The company and its shareholders",
  "The rival patent holder",
  "The drug regulator and ethics committees",
  "Doctors who will prescribe the drug"
 ],
 "options": [
  [
   "Take all the shortcuts",
   "Meets the target and may win the first-mover advantage.",
   "Data fraud, trials without consent and patent infringement: illegal, dangerous to patients, and ruinous for the company once found out."
  ],
  [
   "Take only the \"lesser\" shortcut, such as the rival's compound",
   "Faster development.",
   "Still infringement; an injunction would delay the drug further."
  ],
  [
   "Refuse the shortcuts and run the trial properly, while seeking lawful ways to speed it up",
   "Safe, lawful and credible.",
   "May miss the target and the first-mover advantage."
  ],
  [
   "Resign, or report outside at once",
   "Keeps his hands clean.",
   "Leaves the team without a principled leader; premature before raising it inside."
  ]
 ],
 "criteria": [
  "Clinical data exist to protect patients; manipulating them turns a medicine into a hazard. Informed consent is required by the New Drugs and Clinical Trials Rules, 2019 and the ICMR guidelines, and cannot be waived for speed. A patent is a legal right, and using the compound needs a licence. The urgency of an outbreak argues for faster lawful processes, not for skipping safeguards. A drug that fails later damages trust in every medicine and vaccine."
 ],
 "sequence": [
  "Reject the shortcuts clearly in the team meeting, and record the decision and the reasons in the minutes.",
  "Put the matter in writing to senior management, setting out the legal, safety and business risks.",
  "Propose lawful ways to go faster: adaptive trial designs, more trial sites, early talks with the regulator on accelerated or emergency pathways.",
  "Seek a licence for the rival's compound, or develop the company's own.",
  "Keep complete and honest data, and report adverse events to the ethics committee and the regulator.",
  "If management insists on fraud, use the company's ethics channel, and then the regulator."
 ],
 "also": [
  [
   "(c) How data ethics and drug ethics protect everyone",
   [
    [
     "Honest data are the only basis on which doctors and regulators can judge whether a drug helps or harms.",
     "Consent protects the dignity of trial participants, who are often poor and vulnerable.",
     "Trust in medicine is a public good: one fraud can undermine treatment and vaccination for years.",
     "Respect for patents keeps companies investing in research, while licensing keeps medicines within reach."
    ]
   ]
  ]
 ],
 "close": "In an outbreak the pull to cut corners is strongest and most dangerous. Dr Srinivasan should refuse the shortcuts, record his refusal, and put his energy into lawful ways of speeding up the trial."
},
"Q179":{
 "t": "The shoe inspector: signing off a rejected export consignment",
 "brief": "A young MBA in a shoe company's inspection section, with dependent parents and a new marriage, is told to clear for the Indian market a consignment that European buyers rejected for poor quality. Every other member of the team has signed. Top management says he will be dismissed on some pretext if he does not.",
 "conflict": [
  "Job security and family responsibilities against honesty in his professional role.",
  "Loyalty to the employer against the rights of customers at home.",
  "Going along with the team against his own judgement.",
  "The company's short-term loss against its long-term reputation."
 ],
 "stake": [
  "The employee and his family",
  "The other inspectors",
  "The team commander and top management",
  "Customers in India",
  "The company, its workers and shareholders",
  "Consumer authorities"
 ],
 "options": [
  [
   "Sign like the others",
   "Keeps the job.",
   "Certifies defective goods as fit, and makes him answerable for misleading customers."
  ],
  [
   "Refuse to sign and record his dissent in writing",
   "Keeps his integrity and creates a record.",
   "Risks dismissal."
  ],
  [
   "Propose an honest alternative: rework the lot, or sell it as seconds, clearly labelled and cheaper",
   "Reduces the company's loss honestly.",
   "Management may reject it."
  ],
  [
   "Take it to the board, or the ethics or whistleblower channel",
   "Brings higher scrutiny.",
   "May be seen as disloyal."
  ],
  [
   "Report to the consumer authority",
   "Protects consumers.",
   "A last resort, and the company may retaliate."
  ],
  [
   "Resign",
   "Avoids complicity.",
   "He loses his income at a hard time, and the goods still go out."
  ]
 ],
 "criteria": [
  "An inspector's signature is a promise to the public. Signing what he knows to be defective is dishonest, whatever the pressure. The company's loss is real, but there are honest ways to reduce it. The threat of dismissal is serious for a man with dependants, which is why his answer should be firm but practical, and should offer the company a way out it can accept."
 ],
 "sequence": [
  "Decline to sign, and put his observations and reasons in writing to the team commander.",
  "Offer honest alternatives: rework, or sale as seconds with clear labelling at a lower price.",
  "If management persists, take it to the board, or the ethics or grievance channel.",
  "If he is dismissed on a pretext, challenge it under labour law, and report the sale of defective goods to the consumer authority.",
  "Meanwhile, prepare for the financial risk: savings, family support, a job search."
 ],
 "also": [
  [
   "(d) The dilemmas he faces",
   [
    [
     "Duty to his family against duty to customers.",
     "Obedience against conscience.",
     "Being the odd one out against being right."
    ]
   ]
  ],
  [
   "(e) The consequences of overlooking the defects",
   [
    [
     "Customers are misled and may be harmed, and the company breaks consumer law.",
     "The brand loses trust at home just as it tries to build it abroad.",
     "Staff learn that quality checks are for show, and standards fall across the company.",
     "Penalties, recalls and litigation, once it comes out, may cost more than the consignment."
    ]
   ]
  ]
 ],
 "close": "The inspector should not sign what he knows is defective, but he should help the company find an honest way out. A written dissent with practical alternatives protects the customers, the company's name and his own integrity."
},
"Q220":{
 "t": "Ashok: an exposé the channel wants dropped",
 "brief": "An SP enforcing the Supreme Court's ban on mining in the Aravallis is run over and killed by a stone truck, and the police investigation stalls. Journalist Ashok uncovers the nexus of police, officials and politicians behind the mafia, headed by a local MLA close to the Chief Minister. The channel's CMD tells him to drop the story.",
 "conflict": [
  "The journalist's duty to inform the public against obedience to his employer.",
  "Justice for a murdered officer against political and commercial pressure on the channel.",
  "His safety and career against exposing a powerful nexus.",
  "Publishing quickly against checking facts and protecting sources."
 ],
 "stake": [
  "Ashok and his family",
  "The CMD and the channel",
  "The murdered SP's family",
  "The MLA, officials and the mafia",
  "The police investigation",
  "The public, and the Aravallis themselves",
  "The courts"
 ],
 "options": [
  [
   "Drop the story",
   "Keeps his job and avoids danger.",
   "Justice for the SP is denied, and the nexus continues."
  ],
  [
   "Ask the CMD to reconsider, with the evidence and a legal review",
   "Keeps the channel's backing.",
   "The CMD may still refuse."
  ],
  [
   "Give the evidence to the investigating agency, a higher agency or the court",
   "Puts the evidence where it can lead to prosecution.",
   "Depends on the agency's independence."
  ],
  [
   "Publish on his own, online",
   "Gets the truth out quickly.",
   "Breaches his contract, and exposes him legally and physically without an employer's backing."
  ],
  [
   "Resign and publish with another outlet",
   "Keeps his integrity and publishes.",
   "Loses his job and his employer's protection."
  ]
 ],
 "criteria": [
  "The public interest in a murder and an illegal mining nexus is very high. Journalism also has its own duties: accuracy, fairness to the accused, and protection of sources. The aim is for the truth to reach the public and the courts, not for Ashok to become a martyr. The CMD's decision deserves one chance to be reconsidered with a legal review. If the refusal is political, other lawful outlets exist."
 ],
 "sequence": [
  "Verify every fact, keep copies of the evidence secure, and get a legal review of the report.",
  "Put the case for publication to the CMD in writing: the public interest, the evidence and the legal clearance.",
  "Give the evidence to the investigating agency, and if it is compromised, to a higher agency or the court monitoring the mining ban.",
  "Take steps for his own safety and that of his sources.",
  "If the channel still refuses for political reasons, publish through another outlet, with legal advice, accepting the career cost."
 ],
 "also": [
  [
   "(c) The dilemmas Ashok faces",
   [
    [
     "Loyalty to his employer against his duty to the public.",
     "Courage against the safety of himself, his family and his sources.",
     "Speed against accuracy and fairness to the accused."
    ]
   ]
  ],
  [
   "(e) Training for police in districts with illegal mining",
   [
    [
     "Law and procedure: mining and forest laws, court orders, evidence and seizure.",
     "Intelligence and technology: satellite and drone monitoring, vehicle tracking, check posts.",
     "Safe enforcement: planning raids, adequate teams, never stopping a moving truck alone.",
     "Integrity: handling pressure and offers, and reporting collusion.",
     "Coordination with the forest, mining and revenue departments and the courts."
    ]
   ]
  ]
 ],
 "close": "Ashok's duty is to get the truth to the public and the courts, safely and accurately. He should argue for publication, put the evidence in lawful hands, protect his sources and himself, and publish elsewhere only if the channel's refusal is political."
},
"Q169":{
 "t": "Snowden: whistleblowing against the law",
 "brief": "Edward Snowden released classified documents about government surveillance to the press, arguing that he had a moral duty to tell the public what was being done in their name. The US government and many legal experts said he broke the Espionage Act and endangered national security. The question asks whether his actions were ethically justified though legally prohibited.",
 "conflict": [
  "The public's right to know against state secrecy for national security.",
  "Individual conscience against the rule of law.",
  "Privacy against surveillance in the name of security.",
  "The end, a public debate, against the means, an unauthorised mass disclosure."
 ],
 "stake": [
  "Snowden",
  "The US government and its intelligence agencies",
  "Citizens whose privacy was affected",
  "Foreign governments and citizens under surveillance",
  "Intelligence officers and sources who could be exposed",
  "The press, legislators and courts"
 ],
 "options": [
  [
   "Stay silent",
   "Keeps the law and secrecy.",
   "Leaves possibly unlawful mass surveillance unchecked."
  ],
  [
   "Use internal and legal channels: inspectors general, oversight committees",
   "Lawful, and keeps secrets from adversaries.",
   "Snowden argued these offered contractors little protection and had failed others before him."
  ],
  [
   "Disclose selectively to journalists who publish in the public interest",
   "Forced a public debate and led to reform.",
   "Broke the law and risked exposing sources and methods."
  ],
  [
   "Release everything publicly",
   "Maximum transparency.",
   "Reckless; could endanger lives."
  ]
 ],
 "criteria": [
  "A fair judgement weighs the wrong exposed against the harm caused, and asks whether lawful routes were genuinely tried. In his favour: the programmes touched the privacy of millions, a US appeals court later held the bulk collection of phone records to exceed the law, and the USA Freedom Act, 2015 ended it. Against him: he took a very large volume of documents, much of it unrelated to domestic surveillance; he did not fully test the internal channels; and he left the country rather than face trial, which civil disobedience traditionally requires."
 ],
 "sequence": [
  "Establish the wrong: the scale and legality of the surveillance.",
  "Ask whether lawful channels were available and tried.",
  "Ask whether the disclosure was proportionate: only what was needed to expose the wrong.",
  "Ask whether the discloser accepted accountability for breaking the law.",
  "Conclude on each part: exposing unlawful mass surveillance was defensible; the scale and manner of the disclosure were not."
 ],
 "also": [
  [
   "Lessons for India",
   [
    [
     "Strong internal channels and real protection for whistleblowers reduce the pull towards leaks.",
     "Surveillance needs legal limits and independent oversight, as the Supreme Court's recognition of privacy as a fundamental right in the Puttaswamy judgment (2017) requires."
    ]
   ]
  ]
 ],
 "close": "Snowden's cause was largely just and his disclosures served the public, but his method went further than the wrong required. The answer is a qualified yes: justified in exposing unlawful mass surveillance, not in the scale of what he took, and weakened by his refusal to face the law."
},
"Q225":{
 "t": "The engineer who found the toxic discharge",
 "brief": "A young engineer in a chemical company, the only earner for her ailing parents and her siblings, discovers that toxic waste is being secretly discharged into a river, harming villagers downstream. Colleagues warn her that anyone who raises it is dismissed. Her conscience will not let it rest.",
 "conflict": [
  "Her family's livelihood against the health of villagers who drink the river's water.",
  "Loyalty to the employer against the duty to prevent serious harm.",
  "The comfort of following her seniors' silence against her own conscience.",
  "Fear of dismissal against the law, which forbids the discharge."
 ],
 "stake": [
  "The engineer and her family",
  "The villagers downstream",
  "Her colleagues",
  "The company's management and owners",
  "The State Pollution Control Board",
  "The river and its life"
 ],
 "options": [
  [
   "Keep quiet like the others",
   "Keeps her job.",
   "The poisoning continues, and she becomes a knowing party to it."
  ],
  [
   "Raise it inside, in writing, with the plant head and top management",
   "Gives the company a chance to stop it, and creates a record.",
   "May lead to dismissal, as colleagues fear."
  ],
  [
   "Report to the Pollution Control Board, with evidence",
   "The regulator has the power to stop it.",
   "Needs evidence; she may lose her job."
  ],
  [
   "Leak it to the media or an NGO",
   "Quick public pressure.",
   "May breach confidentiality, and she loses the protection of lawful channels."
  ],
  [
   "Resign quietly",
   "Keeps her conscience clear.",
   "The harm continues, and her family suffers."
  ]
 ],
 "criteria": [
  "The harm is serious, ongoing, and falls on people who have no say. The discharge is also illegal under the Water (Prevention and Control of Pollution) Act, 1974. Her fear for her family is real, so the answer should be the most effective step that exposes her least: first inside, in writing, then to the regulator with evidence."
 ],
 "sequence": [
  "Gather what evidence she lawfully can: discharge points, dates, observations, records.",
  "Raise it in writing with the plant head, and if needed with top management or the board, as a legal and reputational risk the company can still fix.",
  "If nothing changes, report to the State Pollution Control Board with the evidence, anonymously if the channel allows.",
  "Seek support from professional bodies, legal aid or NGOs, and look for other work as a safety net for her family.",
  "If she is dismissed, challenge it legally."
 ],
 "also": [
  [
   "(a) Why keeping quiet is not morally right",
   [
    [
     "Consequences: the villagers' health and lives outweigh one job, and silence lets harm continue that she could help stop.",
     "Duty: by Kant's test, she could not will a world in which everyone who knows of poisoning stays silent.",
     "Character: a person of integrity does not become a willing part of a wrong.",
     "Profession: engineers owe a duty to public safety above an employer's convenience.",
     "Law: the discharge is a crime, and silence shields it.",
     "Everyone's excuse: if each person thinks \"why should I stick my neck out\", nobody ever does, and the harm never stops."
    ]
   ]
  ]
 ],
 "close": "Silence is not neutral when people downstream are being poisoned. She should raise it inside first, in writing, and take it to the regulator if the company does not act, while preparing to protect her family."
},
"Q173":{
 "t": "Rameshwar: malpractice all round, and advice to keep quiet",
 "brief": "A new civil servant finds funds being misappropriated, official facilities used for private purposes, and cheating in staff recruitment, all with the connivance of senior officers. His seniors advise him to keep his eyes, ears and mouth shut. Disillusioned, he asks for advice on his options.",
 "conflict": [
  "Integrity and his oath of office against fitting in with a corrupt department.",
  "A young officer's career against exposing his seniors.",
  "Loyalty to colleagues against duty to the public whose funds are being stolen.",
  "Idealism against the practical need for evidence and allies."
 ],
 "stake": [
  "Rameshwar",
  "His seniors and the staff involved",
  "Honest employees",
  "Candidates cheated of a fair recruitment",
  "Beneficiaries of the schemes who lose their funds",
  "Vigilance agencies",
  "The public"
 ],
 "options": [
  [
   "Keep quiet and adjust",
   "Peace in his career.",
   "He becomes part of what he joined to change, and the loss continues."
  ],
  [
   "Resign in disgust",
   "Keeps his hands clean.",
   "Removes an honest officer, and nothing changes."
  ],
  [
   "Act within his own sphere: take no part, keep his own work clean, correct what he controls",
   "Immediate and safe.",
   "Does not touch the wider malpractice."
  ],
  [
   "Collect evidence and report through channels: the head of department, the Chief Vigilance Officer, the vigilance commission",
   "Can end the malpractice and fix responsibility.",
   "Needs evidence, and risks retaliation."
  ],
  [
   "Go to the media",
   "Public pressure.",
   "Breaches the conduct rules, and weakens both his protection and the case."
  ]
 ],
 "criteria": [
  "The test is what he can do effectively and lawfully. His oath obliges him to act, but acting well means evidence, proper channels and protection, not a lonely crusade. He should separate what lies in his own control, where he can act at once, from the wider system, where he needs institutions."
 ],
 "sequence": [
  "Take no part in the malpractice, and keep his own work transparent and on record.",
  "In his own area, fix what he can: proper accounts for scheme funds, rules on the use of official facilities, a clean examination process.",
  "Document what he has seen, with dates and the documents he lawfully has.",
  "Report formally to the head of department, or, if the head is involved, to the Chief Vigilance Officer or the vigilance commission, using the protected-disclosure channel.",
  "Build allies among honest colleagues, and seek guidance from a senior officer he trusts.",
  "Stay in the service. Do not resign."
 ],
 "close": "Rameshwar should neither shut his eyes nor walk out. He should keep his own conduct clean, fix what lies within his power, and take documented evidence to the vigilance machinery through protected channels."
},
"Q113":{
 "t": "Raman: a terror group recruiting unemployed youth online",
 "brief": "As Director General of Police, Raman learns that a new global terrorist group is recruiting unemployed graduates in his state, especially from one community, through social media. Many young people spend six to eight hours a day online, endorse the group's messages and forward secessionist posts.",
 "conflict": [
  "National security against civil liberties: free speech and privacy.",
  "Firm action against recruiters against compassion for vulnerable young people.",
  "Targeting the threat against the risk of profiling a whole community.",
  "Speed against due process."
 ],
 "stake": [
  "The young people at risk, and their families",
  "The community the recruiters target",
  "The recruiters and the group",
  "Police and intelligence agencies",
  "The state government",
  "Social media platforms",
  "The wider public"
 ],
 "options": [
  [
   "Arrest young people who share such posts",
   "Shows strength.",
   "Alienates the community, jails the misled, and feeds the group's propaganda."
  ],
  [
   "Watch only, and take no action",
   "Gathers intelligence.",
   "Recruitment goes on, and some may be drawn into violence."
  ],
  [
   "A graded response: prosecute recruiters and handlers, counsel the misled, block propaganda lawfully, tackle unemployment",
   "Hits the network and wins back the young.",
   "Needs many departments, and patience."
  ],
  [
   "Leave it to central agencies",
   "Uses their expertise.",
   "Loses local knowledge and speed."
  ]
 ],
 "criteria": [
  "The law should fall hardest on the recruiters and handlers who plan violence, using the Unlawful Activities (Prevention) Act and other laws. Young people who forward posts are often vulnerable rather than hardened; early counselling can bring them back, while indiscriminate arrests push them further. Action must never target a community as such, and online monitoring must stay within the law and be proportionate."
 ],
 "sequence": [
  "Identify the handlers, recruiters and money flows with the central agencies, and prosecute them.",
  "Seek lawful blocking of propaganda accounts and content through the platforms and the IT Act.",
  "Set up a counselling and deradicalisation programme with families, community and religious leaders, and psychologists.",
  "Work with the government on jobs, skills and enterprise for unemployed graduates in the affected areas.",
  "Run a counter-narrative campaign online, led by credible local voices.",
  "Train police in cyber investigation, community policing and non-discrimination."
 ],
 "also": [
  [
   "(b) Strengthening the existing set-up",
   [
    [
     "A dedicated counter-radicalisation cell with cyber, legal and counselling capacity.",
     "A joint task force with central agencies, and real-time sharing of information.",
     "Community policing: liaison committees, youth outreach, and a helpline for worried parents.",
     "Legal safeguards, so that every action is targeted and stands up in court."
    ]
   ]
  ],
  [
   "(c) Better intelligence gathering",
   [
    [
     "Cyber patrolling with lawful social media monitoring and analysis.",
     "Human intelligence: trusted contacts in communities, and trained beat officers.",
     "Financial intelligence: tracking suspicious transfers with banks and the Financial Intelligence Unit.",
     "Regular threat assessments shared across districts, informed by the counselling cases."
    ]
   ]
  ]
 ],
 "close": "Raman should break the network and win back the young. Hard action against recruiters, lawful control of propaganda, counselling for the misled and work for the unemployed together deny the group what it most needs: a grievance and a recruit."
},
"Q221":{
 "t": "The pollution board: polluting units, jobs and threats",
 "brief": "As head of compliance at a pollution control board, you find that most small and medium units in the region, which employ many migrant workers, pollute air, water and soil despite holding environmental clearances. Your notices meet hostility from owners, politicians and even workers, who fear closures, and you receive threats. Some colleagues and local NGOs back you.",
 "conflict": [
  "Public health and the environment against jobs and livelihoods.",
  "Strict enforcement against the survival of small businesses.",
  "The rule of law against political and vested pressure.",
  "Personal safety against the duty to act."
 ],
 "stake": [
  "Local residents with persistent ill health",
  "Migrant workers and their families",
  "Owners of the units",
  "Consumers of their products",
  "Local politicians",
  "The pollution control board and its staff",
  "NGOs, and the environment itself"
 ],
 "options": [
  [
   "Close all polluting units at once",
   "Stops the pollution quickly.",
   "Mass unemployment and hardship; likely challenged in court; resistance may block enforcement."
  ],
  [
   "Back off under pressure",
   "Avoids conflict.",
   "The pollution and ill health continue, and the law is flouted."
  ],
  [
   "Graded enforcement: time-bound compliance plans, closure for the worst and repeat offenders, help to upgrade",
   "Ends the pollution while protecting jobs where possible.",
   "Takes time and monitoring; some units will still close."
  ],
  [
   "Leave it to the courts or NGOs",
   "Shifts the responsibility.",
   "The board fails its own statutory duty."
  ]
 ],
 "criteria": [
  "The board's duty under the Water Act, 1974, the Air Act, 1981 and the Environment (Protection) Act, 1986 is clear. The polluter-pays principle means owners, not residents, should bear the cost of compliance. But enforcement can be sequenced: a fair, short chance to comply, help with common treatment plants and finance, and closure for those that refuse or cause serious harm. Workers' livelihoods matter, and should be protected through the process, not by ignoring the law."
 ],
 "sequence": [
  "Classify the units by the severity of their pollution and the scope for correction, using monitoring data.",
  "Issue time-bound directions: immediate closure for the most hazardous and repeat offenders, deadlines for the rest.",
  "Help units comply: common effluent treatment plants, cleaner technology, credit and schemes for small industry.",
  "Talk openly with workers and unions: the aim is cleaner units, not closures, and workers of units that do close will get support.",
  "Report the threats to the police, keep a record, and seek protection.",
  "Monitor continuously, publish compliance data, and involve residents and NGOs in reporting."
 ],
 "also": [
  [
   "(c) A mechanism for lasting compliance",
   [
    [
     "Continuous online monitoring of emissions and effluents, linked to the board, with the data public.",
     "Surprise inspections by rotating teams, and third-party audits.",
     "Penalties that rise with each repeat offence, and environmental compensation on the polluter-pays principle.",
     "A support desk for small units on technology and finance.",
     "Community monitoring committees and a grievance portal."
    ]
   ]
  ],
  [
   "(d) The dilemmas",
   [
    [
     "Health against jobs, law against livelihoods, duty against personal safety, strictness against the survival of small firms."
    ]
   ]
  ]
 ],
 "close": "The board should enforce the law firmly but in sequence: stop the worst at once, give the rest a fair and short road to compliance and help them along it, and protect the workers, and itself, from intimidation."
},
"Q233":{
 "t": "Rampura: minor girls sent to the cotton fields",
 "brief": "In a remote tribal district with tiny landholdings and little industry, labour contractors persuade parents to send minor girls to work on Bt cotton farms in a nearby state, where poor conditions damage their health. Welfare schemes have not reached the people, and NGOs at both ends seem compromised. You are the new District Collector.",
 "conflict": [
  "Children's rights to health, education and childhood against family poverty.",
  "Enforcement against contractors and parents against the family's need for income.",
  "The destination state's farm economy against the source district's children.",
  "Trust in NGOs against evidence that they are compromised."
 ],
 "stake": [
  "The minor girls",
  "Their parents and the tribal community",
  "Labour contractors",
  "Cotton farm owners in the other state",
  "The administrations of both districts",
  "NGOs",
  "Schools, health services, police and child welfare committees"
 ],
 "options": [
  [
   "Enforcement alone: raids and prosecutions",
   "Stops the traffic in the short term.",
   "Families lose income, and the practice goes underground."
  ],
  [
   "Leave it as an economic necessity",
   "Avoids conflict.",
   "Children's health and schooling are sacrificed, and the law is broken."
  ],
  [
   "Rescue, rehabilitate and prosecute, and raise family incomes at the same time",
   "Deals with both the crime and its cause.",
   "Needs coordination across departments and states."
  ]
 ],
 "criteria": [
  "Sending minors away for hazardous farm work breaks the Child and Adolescent Labour (Prohibition and Regulation) Act, 1986 and the Juvenile Justice Act, 2015. Poverty explains it but does not excuse it; the answer is to remove the need, not to allow the harm. The contractors, who profit, are the first target."
 ],
 "sequence": [
  "Identify the girls who have been sent away, with the help of schools, anganwadi workers and gram sabhas.",
  "Work with the destination district to rescue them, and arrange health care, counselling and their return.",
  "Prosecute the labour contractors, and check the role of the compromised NGOs.",
  "Enrol the girls in school, including residential schools for tribal girls, with scholarships and hostels.",
  "Raise family incomes: MGNREGA work, forest produce and its processing, self-help groups, schemes for tribal areas.",
  "Set up village child protection committees, and keep a record of anyone who leaves the village to work."
 ],
 "also": [
  [
   "(b) Improving the district's economy",
   [
    [
     "Irrigation and watershed works under MGNREGA to raise output on small holdings.",
     "Collection, processing and marketing of minor forest produce through cooperatives.",
     "Skill training linked to jobs, and local enterprises run by self-help groups.",
     "Roads, banks and market access, and camps to bring every family its welfare entitlements."
    ]
   ]
  ]
 ],
 "close": "The Collector must end the trafficking of girls and the poverty that feeds it. Rescue, schooling and prosecution of the contractors deal with the harm; work, incomes and services deal with the cause."
},
"Q118":{
 "t": "The woman SP and the drug menace in a frontier district",
 "brief": "In a frontier district, narcotics have brought money laundering, poppy cultivation, arms smuggling and a near halt to education. Unconfirmed reports say local politicians and senior police officers protect the drug mafia. A woman police officer known for handling such situations is posted as SP.",
 "conflict": [
  "Enforcing the law against colleagues and politicians who may be complicit.",
  "Punishment against treatment for addicts.",
  "The livelihoods of poppy farmers against the harm of the drug trade.",
  "Personal safety and career against the duty to act."
 ],
 "stake": [
  "Young people and addicts, and their families",
  "Poppy farmers",
  "The drug mafia and smugglers",
  "Complicit politicians and police",
  "Honest police officers",
  "Schools and the health department",
  "State and central agencies"
 ],
 "options": [
  [
   "Aggressive raids and mass arrests",
   "Visible action.",
   "Catches users and carriers, not the kingpins; the network regroups."
  ],
  [
   "Work quietly around the protectors",
   "Avoids conflict.",
   "The protected network survives."
  ],
  [
   "A coordinated strategy: target the kingpins, the money and the protectors; treat addicts; give farmers alternatives",
   "Attacks supply, demand and protection together.",
   "Needs central support and time, and puts the officer at risk."
  ]
 ],
 "criteria": [
  "The law is clear under the NDPS Act, 1985 and the law against money laundering. The officer's first task is to reach those with power and money in the trade, including colluding officials, and to treat addicts as patients. Success is measured by falling supply and demand and a broken protection network, not by the number of arrests."
 ],
 "sequence": [
  "Map the network through intelligence: kingpins, financiers and routes.",
  "Clean the force: move or act against compromised officers, and build a trusted team.",
  "Work with the Narcotics Control Bureau, the Enforcement Directorate and the border forces, and use preventive detention and forfeiture of property where the law allows.",
  "Destroy illegal poppy with notice, and work with the agriculture department on other crops.",
  "Open de-addiction and rehabilitation centres with the health department, and run campaigns in schools.",
  "Record any evidence of political patronage and send it to the competent authorities."
 ],
 "also": [
  [
   "(a) The dimensions of the crisis",
   [
    [
     "Security: arms smuggling across the border and links to insurgency.",
     "Crime and money: laundering and a parallel economy.",
     "Governance: politicians and police protecting the mafia.",
     "Health: addiction, overdoses and disease.",
     "Society: schools stalled, young people lost, families broken.",
     "Economy: poppy replacing lawful crops."
    ]
   ]
  ]
 ],
 "close": "The SP should strike at the top of the network and at its protectors, not only at addicts and carriers, and pair enforcement with treatment and new livelihoods. That is how a frontier district is brought back to normal."
},
"Q119":{
 "t": "The SP and the illicit liquor of a backward district",
 "brief": "In a state under prohibition, a district is notorious for illicit distillation that kills many people. Raids, arrests and prosecutions have had little effect. The areas where it thrives are backward in every sense, with poor irrigation and frequent clashes between communities, and nobody has tried to improve them.",
 "conflict": [
  "Enforcing prohibition against the livelihoods that depend on distilling.",
  "Punishment against addressing the causes.",
  "The police role against development work that belongs to other departments."
 ],
 "stake": [
  "Families who distil or sell",
  "Drinkers, who risk death",
  "The families of those who died",
  "The liquor mafia",
  "The police and excise department",
  "The district administration",
  "Communities in conflict, and NGOs"
 ],
 "options": [
  [
   "More of the same: raids and arrests",
   "Keeps up the pressure.",
   "Proven to fail; poor distillers are punished and the trade goes on."
  ],
  [
   "Tolerate it quietly",
   "Avoids conflict.",
   "Deaths from spurious liquor continue, and the law is flouted."
  ],
  [
   "A combined approach: target the suppliers, create other livelihoods, involve the community, treat addiction",
   "Deals with supply, demand and causes.",
   "Needs many departments to work together."
  ]
 ],
 "criteria": [
  "The problem is social and economic as much as criminal. Enforcement should stay, but aimed at organisers and the supply of raw materials, while the district tackles the poverty and conflict that make distilling attractive. Preventing deaths from spurious liquor comes first."
 ],
 "sequence": [
  "Map the network, and act firmly against organisers, suppliers of raw material and colluding officials.",
  "Hold meetings with village leaders, women's groups and religious figures; women's groups are often the strongest allies against liquor.",
  "Work with the Collector on irrigation, MGNREGA, skills, credit and self-help groups, especially for families who give up distilling.",
  "Open de-addiction centres, and run campaigns on the dangers of spurious liquor.",
  "Set up peace committees to reduce clashes between communities.",
  "Measure results by deaths, cases and incomes, not by the number of raids."
 ],
 "close": "The SP should move from policing alone to policing with development. Targeting the organisers while giving families a better living, and communities a voice, is what can end illicit distilling."
},
"Q223":{
 "t": "The chemical plant: closed after years of pollution",
 "brief": "A corporate house set up a chemical unit near a city ten years ago, after other states had refused it. Its effluents damaged land, water, crops and the health of people and animals. After mass agitations and police action, the state ordered it shut. Its workers, the workers of ancillary units and dependent industries have all lost out. You are the senior officer handling the issue.",
 "conflict": [
  "Public health and the environment against jobs and industrial supply.",
  "The company's liability against the state's own role in permitting the plant.",
  "Keeping it shut against reopening with safeguards.",
  "Law and order against the right to protest."
 ],
 "stake": [
  "Residents and farmers harmed by the pollution",
  "Workers of the plant and of ancillary units",
  "Industries that depend on its chemicals",
  "The company",
  "The state government and the pollution control board",
  "The police, and the protesters"
 ],
 "options": [
  [
   "Keep the plant shut for good",
   "Ends the pollution.",
   "Thousands of jobs lost; industries lose supplies."
  ],
  [
   "Reopen as before under pressure from industry",
   "Restores jobs.",
   "The harm to health resumes, and public anger returns."
  ],
  [
   "Keep it shut until it meets strict standards, fix liability and clean-up, and support the workers meanwhile",
   "Protects health and keeps a road back to jobs.",
   "Takes time and money, and the company may contest it."
  ]
 ],
 "criteria": [
  "Health and a clean environment are part of the right to life under Article 21. Under the polluter-pays principle the company must pay for clean-up and compensation. Jobs matter, but they cannot be bought with continued poisoning. The state also failed when it permitted and then did not monitor the plant, and it should own that failure."
 ],
 "sequence": [
  "Keep the plant shut while an independent expert body assesses the pollution and what the plant would need to meet standards.",
  "Make the company pay for clean-up and compensate residents and farmers, under the polluter-pays principle.",
  "Allow reopening only after full compliance, with continuous monitoring and public disclosure.",
  "Support workers meanwhile: wages owed, retraining, and placement in other units; give relief to ancillary units.",
  "Help dependent industries find other suppliers.",
  "Review how the plant was permitted, and fix responsibility for the regulatory failure.",
  "Rebuild trust: public hearings, and an inquiry into the police action if force was excessive."
 ],
 "close": "The officer should keep health first, make the polluter pay, and give the plant a clear, monitored road back only if it can run cleanly, while supporting the workers who lost their jobs through no fault of their own."
},
"Q238":{
 "t": "Sivakasi: children in a household fireworks unit",
 "brief": "In the Sivakasi fireworks cluster, some units pass themselves off as household work to escape child labour law. Visiting one, you find 10 to 15 children under 14. The owner says they are all his relatives; the children smirk, and neither side can establish the relationship.",
 "conflict": [
  "Children's rights to health, education and childhood against a local economy that runs on cheap labour.",
  "The letter of the law's household exception against its purpose.",
  "The owner's profit against the children's safety in a hazardous industry.",
  "The district's prosperity against the cost it lays on children."
 ],
 "stake": [
  "The children and their families",
  "The unit owner",
  "Units that follow the law",
  "Adult workers",
  "The labour department and district administration",
  "Consumers, and the Sivakasi economy"
 ],
 "options": [
  [
   "Accept the owner's claim",
   "No conflict.",
   "Children stay in a hazardous trade, and the loophole is rewarded."
  ],
  [
   "Rescue the children and prosecute the owner",
   "Upholds the law and protects these children.",
   "Families may lose income, and units may hide deeper."
  ],
  [
   "Rescue and prosecute, and also rehabilitate the children and step up enforcement across the cluster",
   "Protects these children and changes the practice.",
   "Needs sustained work across departments."
  ]
 ],
 "criteria": [
  "The children's safety comes first: making fireworks is hazardous, and a child's place is in school. The owner's claim fails on the facts. The household exception exists to let children help their own families, outside school hours, in safe work; it cannot shelter the employment of outsiders in a hazardous trade. Since the 2016 amendment the law bars even family help in hazardous occupations."
 ],
 "sequence": [
  "Rescue the children at once with the police and the child welfare committee, and record statements.",
  "Register cases against the owner under child labour law and the Juvenile Justice Act, and check the unit's licence and safety.",
  "Rehabilitate the children: school enrolment, residential schools where needed, and support to their families through schemes.",
  "Launch a drive across the cluster with the labour department to verify household units.",
  "Recommend that the loophole be closed and hazardous work barred up to 18, as ILO standards require; the 2016 amendment has since done much of this.",
  "Work with industry associations for child-free production and adult employment."
 ],
 "also": [
  [
   "(a) The ethical issues",
   [
    [
     "Exploitation of children for profit, and deception to escape the law.",
     "The rights to life, health and education (Articles 21, 21A and 24) against economic gain.",
     "A protective exception in the law turned into a shelter for abuse.",
     "A community's prosperity resting on its most vulnerable members."
    ]
   ]
  ]
 ],
 "close": "Sympathy for a local economy cannot extend to children making explosives. The children must be rescued and schooled, the owner prosecuted, and the cluster made to employ adults."
},
"Q257":{
 "t": "Ajit: one order, two buyers",
 "brief": "Ajit heads weapon sales in the Ministry of Defence Production. Two countries want its long-range artillery and missiles, but production allows only one order. Country A, a developing nation and a planned research partner, needs the weapons to defend itself against a troublesome neighbour and seeks a large purchase on a long-term loan. Country B is allied with a superpower, holds nuclear weapons outside the NPT, supports guerrilla forces abroad and spends heavily on its military, but it offers advance payment and trade advantages.",
 "conflict": [
  "Economic gain and jobs against the risk that the weapons are misused.",
  "Strategic ties and a trade agreement against national policy and international commitments.",
  "The argument that someone else will sell against responsibility for what one sells.",
  "Immediate payment against a long-term partnership."
 ],
 "stake": [
  "The people of both buying countries and their neighbours",
  "The ministry and its workers",
  "The government and its foreign policy",
  "Trade negotiators",
  "International export control regimes and partners",
  "Indian taxpayers"
 ],
 "options": [
  [
   "Sell to Country B",
   "Advance payment, trade benefits and closer ties with its bloc.",
   "High risk that the weapons reach guerrilla forces or are used in aggression, and a risk of breaching missile export commitments. The sale also feeds a military budget that crowds out its people's welfare."
  ],
  [
   "Sell to Country A, with due diligence and conditions on end use",
   "Meets a legitimate defensive need, and builds a research partnership.",
   "Payment comes slowly, through a long-term loan."
  ],
  [
   "Refuse both",
   "Avoids all risk.",
   "Loses the economic and strategic gains, and leaves Country A exposed."
  ]
 ],
 "criteria": [
  "Arms sales are lawful, but the seller shares responsibility for how the weapons are used. **The tests are the buyer's legitimate need, the risk of diversion or misuse, compliance with national policy and international commitments, and the effect on regional peace.** India has been a member of the Missile Technology Control Regime since 2016 and the Wassenaar Arrangement since 2017. Its export licences under the SCOMET list require assurances from the end user. A buyer that supports guerrilla forces abroad fails the diversion test. Economic benefit cannot justify a sale likely to feed violence, and the fact that another supplier may sell does not remove one's own responsibility."
 ],
 "sequence": [
  "Complete due diligence on Country A: an end-user certificate, limits on re-export, and conditions on use.",
  "Offer only systems that comply with MTCR guidelines, which strongly restrict transfers of missiles able to carry 500 kilograms over 300 kilometres or more.",
  "Arrange the loan through established channels, such as a government-backed line of credit, with safeguards.",
  "Build the research collaboration into the agreement.",
  "Decline Country B's order, and explain the decision through diplomatic channels in terms of policy, not judgment of the country.",
  "Keep the trade negotiations separate from the arms decision.",
  "Record the reasons, and brief the ministry and the Ministry of External Affairs."
 ],
 "also": [
  [
   "(a) The options, and the one to choose",
   [
    "Selling to Country A is the defensible choice. Its need is defensive, it is not linked to violence abroad, and the partnership serves India's long-term interest. Country B's advance payment is attractive, but the risk of misuse and of breaching export commitments is too high."
   ]
  ],
  [
   "(b) Balancing economic and strategic interests with ethics",
   [
    "Ethics and interest are not always opposed. **A reputation as a responsible supplier is itself a strategic asset**, and weapons that reach guerrilla forces can harm India's own security and standing. The balance comes from clear criteria applied consistently, due diligence at every stage, and a written record within government of why a sale was made or refused."
   ]
  ]
 ],
 "close": "A country that sells weapons shares responsibility for their use. Ajit should sell to the buyer whose need is defensive and whose record is clean, with full due diligence, and let a clear principle, not the size of an advance, decide."
},
"Q205":{
 "t": "The AI company whose emissions rose by half",
 "brief": "You are CEO and majority shareholder of the world's second-largest technology company, based in the developing world. Driven by the energy needs of AI data centres, its greenhouse gas emissions rose 48% between 2019 and 2023, although it has pledged net zero by 2030. Competition demands rapid AI innovation; meeting the pledge needs heavy investment in renewable energy.",
 "conflict": [
  "Innovation and market position against the climate pledge the company made.",
  "Shareholder value now against the cost of emissions borne by everyone, including future generations.",
  "Honesty about the rise in emissions against the reputational comfort of silence.",
  "A developing-world company's growth against a global duty to cut emissions."
 ],
 "stake": [
  "Shareholders, including you as the majority owner",
  "Employees",
  "Customers who use AI services",
  "Communities near data centres, who share their power and water",
  "Regulators and governments",
  "Environmental activists and the public",
  "Future generations"
 ],
 "options": [
  [
   "Keep expanding AI and quietly drop the 2030 pledge",
   "Protects market position.",
   "Breaks a public promise, and shifts a growing climate cost onto others."
  ],
  [
   "Slow AI expansion sharply to meet the pledge",
   "Keeps the promise.",
   "May cost market share and jobs, while competitors keep emitting."
  ],
  [
   "Grow AI while decoupling it from emissions: renewables, efficiency, honest disclosure, a revised but credible path",
   "Keeps both innovation and responsibility.",
   "Expensive, and needs disciplined execution."
  ],
  [
   "Buy offsets to claim net zero",
   "Quick on paper.",
   "Often weak in substance; risks a charge of greenwashing."
  ]
 ],
 "criteria": [
  "A pledge is a promise to the public, and its cost cannot be quietly shifted to others. The test is whether the company is honest about where it stands and whether its plan cuts real emissions, not just accounting ones. As majority owner, you have both the power and the responsibility to accept a lower short-term return for a credible transition."
 ],
 "sequence": [
  "Disclose the rise in emissions openly, with its causes.",
  "Set interim targets for 2026 to 2030, and tie senior pay to meeting them.",
  "Sign long-term contracts for renewable power, and invest in on-site generation and storage.",
  "Make AI cheaper in energy: efficient chips and cooling, smaller and better-tuned models, and scheduling heavy computing when clean power is available.",
  "Put an internal price on carbon into every investment decision, and cut water use at data centres.",
  "Report progress every year, with independent verification."
 ],
 "also": [
  [
   "(b) The ethical issues",
   [
    [
     "Keeping a public promise against competitive pressure.",
     "Intergenerational justice: today's growth, tomorrow's climate.",
     "Honesty in environmental claims.",
     "Fair shares: a developing-world company's right to grow against its duty to decarbonise."
    ]
   ]
  ],
  [
   "(c) If the company faces penalties",
   [
    [
     "Accept that the rise in emissions is real and the company's responsibility.",
     "Show a credible, verified plan and the investment behind it.",
     "Argue for standards that apply to the whole industry, so that clean firms are not undercut.",
     "Point to AI's own uses in cutting emissions elsewhere, without using them as an excuse."
    ]
   ]
  ],
  [
   "(d) Balancing AI and the environment",
   [
    [
     "Efficiency first: the cleanest energy is the energy not used.",
     "Clean power for every new data centre.",
     "Transparency about energy and water per AI service.",
     "Research into low-energy AI, shared with the industry."
    ]
   ]
  ]
 ],
 "close": "Innovation and responsibility are not a choice between two. The CEO should be honest about the rise, fund a credible transition to clean power and efficient computing, and let the company's growth be judged against its promise."
},
"Q180":{
 "t": "The food company that sold rejected exports at home",
 "brief": "An Indian food company launched a product abroad and then at home, promising almost the same quality. Random tests found the domestic product at variance with its approval; investigation showed that the company was selling products below Indian health standards, and also selling rejected export stock in the domestic market. Its reputation and profits have suffered.",
 "conflict": [
  "Profit against consumer health.",
  "A double standard: one quality for foreign buyers, a lower one for Indian consumers.",
  "Honesty with the regulator against concealment.",
  "Protecting the brand now against owning the fault."
 ],
 "stake": [
  "Consumers who ate the product",
  "The food regulator",
  "The company, its employees and shareholders",
  "Retailers and distributors",
  "Foreign buyers",
  "Competitors who follow the rules"
 ],
 "options": [
  [
   "Deny and contest the findings",
   "May delay penalties.",
   "Deepens the loss of trust, and invites harsher action."
  ],
  [
   "Pay the penalty quietly and carry on",
   "Ends the case.",
   "The practice and the double standard remain."
  ],
  [
   "Recall, disclose, compensate and reform",
   "Protects consumers and starts to rebuild trust.",
   "Costly, and admits the wrong publicly."
  ]
 ],
 "criteria": [
  "Food safety law exists because consumers cannot test what they eat. Selling food below the approved standard, and dumping rejected exports on Indian consumers, is both illegal and a breach of trust. The test for the company is whether it would be comfortable if every customer knew what it did. The only way back is honesty and proof of change."
 ],
 "sequence": [
  "Recall the non-compliant products from the market at once.",
  "Disclose the problem publicly and apologise, without hedging.",
  "Cooperate fully with the regulator and accept the penalties.",
  "Compensate consumers who were harmed, and refund buyers.",
  "Fix responsibility inside the company, including at senior levels.",
  "Put in independent quality audits and a single standard for all markets, and publish the results."
 ],
 "also": [
  [
   "What the competent authority should do",
   [
    [
     "Order a recall, and suspend the licence for the products concerned until compliance is proved.",
     "Impose penalties, and prosecute where food was sub-standard or unsafe under the Food Safety and Standards Act, 2006.",
     "Check every batch and plant of the company, and trace where the rejected exports went.",
     "Publish the findings, so that consumers are warned.",
     "Close the gap that let rejected exports reach the market, for example by tracking rejected consignments."
    ]
   ]
  ],
  [
   "The ethical dilemma",
   [
    [
     "The company faced a choice between writing off the rejected stock and passing the loss to consumers' health. It chose profit over people, and the dilemma now is whether to protect itself or to come clean."
    ]
   ]
  ]
 ],
 "close": "The regulator should act firmly and publicly; the company's only road back to its customers is a full recall, honest disclosure, compensation, and one standard of quality for every market."
},
"Q198":{
 "t": "Bharat Missiles: exporting anti-tank missiles",
 "brief": "The Chairman of Bharat Missiles Ltd, which makes advanced anti-tank guided missiles, is told that the government may lift its ban on arms exports and wants production raised to supply a friendly foreign country. The Defence Minister plans to double weapons exports in five years. The question asks for the ethical issues in the arms trade, and five ethical factors in deciding whether to sell.",
 "conflict": [
  "National interest and self-reliance in defence against the risk of fuelling wars abroad.",
  "Profit and jobs against the lives weapons may take.",
  "Loyalty to a friendly government against the rights of its citizens, if it misuses the arms.",
  "Secrecy in defence deals against transparency and freedom from corruption."
 ],
 "stake": [
  "BML, its workers and suppliers",
  "The Government of India and the armed forces",
  "The buyer country's government, armed forces and citizens",
  "Neighbouring countries and regions",
  "Civilians in any future conflict",
  "International bodies and regimes"
 ],
 "options": [
  [
   "Export to any friendly buyer who pays",
   "Revenue, scale and cheaper weapons for India's own forces.",
   "Risk of misuse against civilians, diversion to third parties, and damage to India's standing."
  ],
  [
   "Refuse all exports",
   "Avoids any complicity.",
   "Loses revenue and scale; the buyer will purchase elsewhere, and India's defence industry stays small."
  ],
  [
   "Export under strict criteria, case by case, with end-use checks",
   "Supports the industry while limiting harm.",
   "Needs rigorous vetting, and some deals will be refused."
  ]
 ],
 "criteria": [
  "The anti-tank missile is a defensive weapon in many settings, and a responsible exporter can strengthen friendly states and India's own industry. But responsibility means asking who will use the weapons, against whom, and under what law. The test is whether India could defend each sale publicly if the weapons were later used."
 ],
 "sequence": [
  "Put domestic needs of the armed forces first.",
  "Adopt a written export policy and screen every deal against it, with the Ministries of Defence and External Affairs.",
  "Require end-user certificates, and verify end use after delivery.",
  "Keep deals transparent and free of agents' commissions; report exports publicly as far as security allows.",
  "Build in the right to suspend supplies if the buyer misuses them."
 ],
 "also": [
  [
   "(a) The ethical issues in the arms trade",
   [
    [
     "Weapons can kill civilians and prolong wars.",
     "Arms can be diverted to terrorists or third countries.",
     "Sales can prop up repressive governments.",
     "Defence deals are prone to corruption.",
     "Profit from arms can shape foreign policy."
    ]
   ]
  ],
  [
   "(b) Five ethical factors in selling arms to a foreign government",
   [
    [
     "The buyer's human rights record, and the risk that the arms are used against its own people.",
     "The risk of diversion or re-export, and the strength of end-use guarantees.",
     "The effect on regional peace: whether the sale fuels an arms race or an ongoing conflict.",
     "International law and commitments: UN arms embargoes and export control regimes such as the Wassenaar Arrangement, which India joined in 2017.",
     "India's own security and strategic interest, and the buyer's record of good faith."
    ]
   ]
  ]
 ],
 "close": "India can be an arms exporter and a responsible one. BML should welcome exports, but only under clear criteria, verified end use and clean contracts, so that India's missiles defend friends and never harm the innocent."
},
"Q222":{
 "t": "Amria Plastic Works: a model for backward areas?",
 "brief": "In underdeveloped Parmal district, industrialist Anil used a ten-year tax holiday to set up Amria Plastic Works in Noora village in 2011. He trained local workers, hired only from the village, and spent a large share of profits on the village: greenery, a temple, buses, a health centre and school buildings, self-help groups and an ambulance. In 2019 a minor fire revealed that the factory drew more electricity than it was authorised to. In the 2020 lockdown he kept paying all workers and employed them in planting trees.",
 "conflict": [
  "Profit and welfare: a business that did well by doing good.",
  "Legal compliance against performance: the unauthorised electricity load.",
  "Development through one benefactor against self-reliant development.",
  "The benefits of plastics production against its environmental cost."
 ],
 "stake": [
  "The workers and people of Noora",
  "Anil and APW's key staff",
  "The state government and the power utility",
  "The local MLA",
  "The wider district",
  "The environment"
 ],
 "options": [
  [
   "Treat APW as a model to copy as it is",
   "Shows how a single firm can transform a village.",
   "Overlooks the compliance lapse and the risks of dependence."
  ],
  [
   "Dismiss it as paternalism",
   "Guards against dependence on one employer.",
   "Ignores real gains in jobs, skills, health and dignity."
  ],
  [
   "Treat it as a model with lessons and correctives",
   "Keeps what worked and fixes what did not.",
   "Asks more of firms and government alike."
  ]
 ],
 "criteria": [
  "APW should be judged by what it did for people, how it behaved when tested, and whether it kept the law. It scores highly on the first two: local hiring, training, sharing of profits, and loyalty to workers in the lockdown. It fell short on the third: using electricity beyond its authorised load was unlawful and risked lives, though it was corrected. A model for backward areas must also be sustainable and not depend on one person's goodwill."
 ],
 "sequence": [
  "Recognise what worked: local hiring and training, fair treatment, CSR aimed at health, schooling and women.",
  "Correct what did not: full legal and safety compliance, audited regularly.",
  "Reduce dependence: diversify local livelihoods through self-help groups and skills, so the village does not rise and fall with one firm.",
  "Manage the environmental footprint of plastics: waste handling and recycling.",
  "Let the state build on the model: better connectivity, industrial policy and public services, rather than leaving them to a benefactor."
 ],
 "also": [
  [
   "Is APW a role model for backward areas?",
   [
    [
     "Largely yes: it shows that industry can bring jobs, skills and shared prosperity to a backward area, and that a firm can treat workers as partners.",
     "With caveats: compliance cannot be selective, the environment must count, and development should build a community's own capacity, not only its dependence on one company."
    ]
   ]
  ]
 ],
 "close": "APW is a good model with one lesson attached: doing good does not excuse breaking the rules. Its local hiring, profit-sharing and loyalty in hard times are worth copying, together with strict compliance and a plan to make the village less dependent on one firm."
},
"Q212":{
 "t": "The veterinary drug that could cure the poor",
 "brief": "A scientist at a major pharmaceutical company finds that its best-selling veterinary drug could cure a liver disease that is common in poor tribal areas and has no cure. Developing a version for humans would cost about ₹50 crore, which the company is unlikely to recover, since the disease hardly occurs anywhere else. You are the CEO.",
 "conflict": [
  "Profit and duty to shareholders against a cure for poor people who cannot pay.",
  "The company's knowledge against its use for public good.",
  "Market logic against the right to health."
 ],
 "stake": [
  "Tribal patients and their families",
  "The scientist and the research team",
  "Shareholders and the board",
  "The government's health and research bodies",
  "NGOs and global health funders",
  "The company's reputation"
 ],
 "options": [
  [
   "Shelve the idea as unprofitable",
   "Protects profits.",
   "A curable disease goes on killing the poor; the company's knowledge is wasted."
  ],
  [
   "Fund the development fully as a charitable project",
   "Brings the cure.",
   "Heavy cost to shareholders, and may not be sustainable."
  ],
  [
   "Partner with government and public research bodies, health foundations and not-for-profit drug developers to share the cost",
   "Brings the cure with shared cost and risk.",
   "Needs negotiation, and slower decisions."
  ],
  [
   "License the knowledge to a public institution or a not-for-profit developer at low or no cost",
   "The cure can proceed without the company carrying the full cost.",
   "Less control and less credit."
  ],
  [
   "Spend part of the company's CSR budget on the research",
   "Uses a legal obligation for real good.",
   "May not cover the full cost."
  ]
 ],
 "criteria": [
  "A company does not have to lose money on every good cause, but it should not let a cure die for lack of a business case. The right answer uses the company's knowledge while sharing the cost fairly: partnership, licensing and CSR funds make the project possible without betraying shareholders. Health research on neglected diseases is also an eligible area for CSR spending."
 ],
 "sequence": [
  "Verify the scientific promise with a small, low-cost study.",
  "Approach public research bodies, health ministries and global health foundations for joint funding.",
  "Offer a licence for the compound to public or not-for-profit developers if a partnership fails.",
  "Commit CSR funds to the early stages of research and trials.",
  "Plan affordable access in advance: a not-for-profit price for the poor, and supply through public health programmes."
 ],
 "also": [
  [
   "(b) Pros and cons of each action",
   [
    [
     "Shelving: protects profits, but abandons a cure and damages the company's name when it becomes known.",
     "Full funding: a humane act and strong reputation, but a large loss that may be hard to justify to shareholders.",
     "Partnership: shares cost and risk and uses public expertise, but takes time and needs trust.",
     "Licensing: cheap and quick for the company, but the company loses control and credit.",
     "CSR funding: lawful and useful, but limited in size."
    ]
   ]
  ]
 ],
 "close": "The CEO should not let a cure die because the patients are poor. Partnership, licensing and CSR money can bring the drug to the people who need it without wrecking the company's finances."
},
"Q146":{
 "t": "The drought district: farmers, industry and the last water",
 "brief": "In a severe summer, the district faces an acute water shortage. The Collector has curbed irrigation from deep borewells and the river reservoir. Farmers protest that big industries near the river still draw large amounts through deep borewells, and accuse the administration of being bribed. The industry cannot simply be shut, as many workers would lose their jobs.",
 "conflict": [
  "Drinking water for people against water for farms and for industry.",
  "Equal treatment against the appearance of favouring the powerful.",
  "The farmers' livelihoods against the workers' jobs.",
  "Firm restrictions now against peace with agitating farmers."
 ],
 "stake": [
  "Residents who need drinking water",
  "Farmers and farm workers",
  "Industries and their workers",
  "Livestock",
  "The district administration and its staff",
  "The river and the aquifer"
 ],
 "options": [
  [
   "Continue curbing farmers while leaving industry alone",
   "Protects jobs.",
   "Unfair; the charge of corruption gains weight, and protests grow."
  ],
  [
   "Shut the industries",
   "Frees water, and satisfies the farmers.",
   "Throws workers out of jobs, and may not be needed."
  ],
  [
   "Apply one rule to all: drinking water first, then rationed and metered use by farms and industry alike, with relief for the hardest hit",
   "Fair and defensible.",
   "Hard to enforce, and every group loses something."
  ]
 ],
 "criteria": [
  "Drinking water comes first; the National Water Policy treats it as the first claim. After that, the same rule must apply to everyone who draws water: farms and industry alike, according to need and the water available. The allegation of corruption must be answered with facts, not dismissed."
 ],
 "sequence": [
  "Declare the priority openly: drinking water and sanitation first.",
  "Audit the industries' groundwater permissions, and meter their drawals; stop any drawal beyond what is permitted.",
  "Require industry to cut use for the crisis period: recycling, treated waste water, and staggered production rather than closure.",
  "Allow farmers limited, scheduled irrigation for standing crops, and advise short-duration, low-water crops.",
  "Give relief: drinking water by tanker, fodder, MGNREGA work, and compensation under drought norms.",
  "Order an inquiry into the allegation of bribery, and publish the water-use data for all to see."
 ],
 "also": [
  [
   "(b) Actions that serve everyone's interests",
   [
    [
     "A district water committee with farmers, industry and officials, which agrees the allocation.",
     "Industry funds recharge structures and supplies treated water to farms.",
     "Long-term: rainwater harvesting, watershed works and restrictions on water-guzzling crops."
    ]
   ]
  ],
  [
   "(c) The dilemmas for the Collector",
   [
    [
     "Competing legitimate claims on too little water.",
     "Firmness against the risk of unrest.",
     "Protecting jobs against the perception of favouring the rich."
    ]
   ]
  ]
 ],
 "close": "The Collector should put drinking water first and apply one open, metered rule to everyone, farms and industry alike, with relief for those hit hardest. Fairness that can be seen is the best answer to the charge of corruption."
},
"Q209":{
 "t": "The hospital administrator in the Covid surge",
 "brief": "At the height of Covid-19, patients pour into a public hospital while beds, oxygen, ambulances and staff are short. As administrator, you must decide how to deploy clinical and non-clinical staff to a highly infectious disease. The question also asks whether your justification would change in a private hospital.",
 "conflict": [
  "The duty to care for patients against the safety of the staff sent to care for them.",
  "Fairness among staff against their different risks and skills.",
  "The hospital's limited resources against unlimited demand.",
  "A private hospital's commercial interest against the same duty of care."
 ],
 "stake": [
  "Patients and their families",
  "Doctors, nurses and paramedics",
  "Non-clinical staff: cleaners, attendants, ambulance drivers",
  "The staff's own families",
  "The hospital and the government",
  "The community"
 ],
 "options": [
  [
   "Deploy everyone equally, regardless of risk",
   "Simple and seems fair.",
   "Exposes vulnerable staff needlessly."
  ],
  [
   "Rely only on volunteers",
   "Respects choice.",
   "May leave gaps where they are most needed."
  ],
  [
   "Deploy by clear criteria of skill and risk, with protection, rotation and support",
   "Fair and sustainable.",
   "Needs careful planning and honest communication."
  ]
 ],
 "criteria": [
  "Staff have a professional duty to care, and the hospital has a duty to protect them while they do it. Deployment should rest on skill for the task and on individual risk, so that the most vulnerable are shielded, and on rotation, so that no one carries the load alone. The rules must apply equally from the top down: senior doctors share the risk."
 ],
 "sequence": [
  "Classify the work by level of exposure, and staff by skills and personal risk: age, pregnancy, serious illness.",
  "Assign high-exposure duties to trained, lower-risk staff first, on rotation, with enough rest.",
  "Give everyone protective equipment, training, testing and vaccination as soon as available.",
  "Shield high-risk staff in lower-exposure roles, such as tele-consultation and administration.",
  "Provide insurance, pay incentives, accommodation to protect families, and counselling.",
  "Explain the criteria openly, and review them as the surge changes."
 ],
 "also": [
  [
   "Would it be different in a private hospital?",
   [
    [
     "The core justification stays the same: the duty of care to patients and the duty to protect staff do not depend on who owns the hospital.",
     "A private hospital is also bound by medical ethics, by the Supreme Court's ruling that emergency care cannot be refused, and by government directions under epidemic and disaster laws.",
     "What may differ is the means: contracts, pay and the power to hire. But profit must not decide who is treated or which staff are exposed."
    ]
   ]
  ]
 ],
 "close": "The administrator should deploy staff by skill and risk, protect them fully, rotate the load and share it from the top, and tell everyone the rules. The same ethics bind a private hospital, whatever its balance sheet."
},
"Q120":{
 "t": "The cloudburst: whom to rescue first",
 "brief": "A cloudburst in a disaster-prone state causes floods and landslides that trap more than a lakh of pilgrims, tourists and residents. In your area are senior citizens, hospital patients, women and children, hikers, tourists, the ruling party's regional president and his family, an Additional Chief Secretary of a neighbouring state, and prisoners in jail. The question asks for your order of rescue and the reasons.",
 "conflict": [
  "Status and pressure against need and urgency.",
  "The most vulnerable against the most numerous.",
  "Care for prisoners, who are in state custody, against the public's resentment.",
  "Fairness against the demands of the powerful."
 ],
 "stake": [
  "All trapped people, and their families",
  "Rescue teams",
  "The state and its administration",
  "Neighbouring states",
  "The public watching how the rescue is run"
 ],
 "options": [
  [
   "Rescue the VIPs first",
   "Avoids pressure from above.",
   "Unjust and indefensible; loses public trust."
  ],
  [
   "First come, first served",
   "Simple.",
   "Leaves the weakest, who cannot reach rescuers, till last."
  ],
  [
   "Rescue by need: medical urgency and vulnerability first, then those in the most danger, with no priority for status",
   "Saves the most lives, and can be defended.",
   "The powerful may complain."
  ]
 ],
 "criteria": [
  "In a disaster, life is equal. The order should rest on how urgently people need help, how vulnerable they are, and how much danger their location is in, not on who they are. Prisoners are the state's responsibility and cannot escape on their own, so they must be moved to safety under guard, not left behind."
 ],
 "sequence": [
  "First, patients in hospitals, especially the critically ill and those on life support, along with injured people anywhere.",
  "Next, senior citizens, children and pregnant women, especially where they are exposed.",
  "Then everyone else in the most dangerous places: pilgrims, tourists and hikers on unstable slopes and roads, and locals whose homes are threatened.",
  "Prisoners: move them to a safe place under guard as soon as their jail is at risk, with the same priority as others in danger.",
  "The party president and the officer: rescued by the same criteria as everyone else. Inform the neighbouring state, and use the officer's experience in coordination if he is willing.",
  "Run operations in parallel where resources allow, and keep a public record of the criteria and the order."
 ],
 "close": "The rescue order should follow need, vulnerability and danger, not rank. Saying so openly, and applying it to everyone, is what makes the order defensible."
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
"Q162":{
 "t": "Sneha: her brother's bid for the hospital's equipment",
 "brief": "Sneha, a senior manager in charge of procurement for a new super-speciality centre of a private hospital chain, finds that her brother, a well-known supplier who is in financial trouble, has sent an expression of interest. The hospital need not choose the lowest bidder, and the management trusts her fully. Choosing him could bring charges of favouritism.",
 "conflict": [
  "Loyalty to her brother against impartiality in procurement.",
  "The management's trust against the duty to deserve it.",
  "Her brother's financial need against the hospital's and patients' interest in the best equipment at a fair price.",
  "Private freedom of choice against professional ethics."
 ],
 "stake": [
  "Sneha",
  "Her brother",
  "Other bidders",
  "The hospital's management and owners",
  "Patients, whose safety depends on the equipment",
  "Doctors and staff who will use it"
 ],
 "options": [
  [
   "Award the contract to her brother",
   "Helps her family.",
   "Favouritism; the hospital may not get the best value, and her credibility is destroyed."
  ],
  [
   "Reject his bid outright",
   "Avoids any suspicion.",
   "Unfair to her brother if his bid is genuinely the best."
  ],
  [
   "Disclose the relationship, recuse herself, and let an independent committee decide on published criteria",
   "Fair to everyone, including her brother.",
   "She loses control of an important decision."
  ]
 ],
 "criteria": [
  "A conflict of interest exists as soon as her brother bids; it does not wait for a wrong to be done. Private ownership does not remove the duty of fairness, and patients' safety depends on equipment chosen on merit. The test is whether the decision would look fair to the other bidders and the management if they knew everything."
 ],
 "sequence": [
  "Disclose the relationship to the management in writing at once.",
  "Step out of the procurement committee for all decisions where her brother is a bidder.",
  "Ask the management to appoint an independent committee, with clear technical and financial criteria published in advance.",
  "Let her brother compete on equal terms; if he wins on merit, the record will show it.",
  "Do not discuss the bid with her brother, and record any approach he makes."
 ],
 "also": [
  [
   "(b) How she would justify it",
   [
    [
     "Her duty is to the hospital and its patients; the only way to protect both them and her brother's fair chance is to step away from the decision."
    ]
   ]
  ],
  [
   "(c) How medical ethics is compromised by vested interest",
   [
    [
     "Equipment chosen for a relative's benefit may be inferior or overpriced, and put patients at risk.",
     "Higher costs are passed on to patients.",
     "It breaks the trust that patients place in a hospital to put their health first."
    ]
   ]
  ]
 ],
 "close": "Sneha should declare the interest, step out of the decision, and let an independent committee choose on published criteria. That protects the patients, the hospital, her own name and even her brother's fair chance."
},
"Q168":{
 "t": "The minister's road, farmhouse and plot",
 "brief": "As a senior officer in the Ministry, you have the drawings for a mega road project designed to use government land, minimise acquisition and save trees. The Minister asks you to realign it near his 20-acre farmhouse, and offers to help buy a big plot in your wife's name at the present nominal price, even with money. The realignment would mean acquiring much farmland, displacing farmers, a heavy cost to government, and felling many trees.",
 "conflict": [
  "Loyalty to the Minister against the public interest.",
  "A private gain, for the Minister and for you, against an impartial decision.",
  "Obedience against honest advice on cost, displacement and the environment.",
  "A \"legal purchase\" against the use of insider information."
 ],
 "stake": [
  "You and your wife",
  "The Minister",
  "Farmers who would be displaced",
  "The government and taxpayers",
  "Road users",
  "The environment and local people"
 ],
 "options": [
  [
   "Realign the road and accept the plot",
   "Pleases the Minister, and you gain.",
   "Corrupt: insider use of information and an inducement; heavy public cost; displacement and deforestation."
  ],
  [
   "Realign the road but refuse the plot",
   "Avoids personal gain.",
   "Still bends a public project for the Minister's private gain."
  ],
  [
   "Refuse both, and put the costs of realignment on file",
   "Protects the public interest and your integrity.",
   "Displeases the Minister; your career may suffer."
  ],
  [
   "Report the offer to the Cabinet Secretary or the vigilance authorities",
   "Protects the process.",
   "Serious step against a Minister; needs a clear record."
  ]
 ],
 "criteria": [
  "The alignment should be decided on technical merit and public cost, not on the Minister's property. Buying land near a project with knowledge that is not yet public is an insider gain, however \"legal\" the sale deed. An offer to finance the purchase is an inducement to a public servant. The test: could the decision be defended if every fact were published?"
 ],
 "sequence": [
  "Decline the plot and the offer of money at once, politely but clearly.",
  "Put a note on file comparing the two alignments: extra acquisition cost, farmers displaced, trees lost.",
  "If the Minister still orders realignment, ask for the order in writing with reasons.",
  "Place the matter before the Secretary and, if needed, the Cabinet Secretary; report the offer to the vigilance authorities.",
  "Keep the drawings and information confidential until the project is announced."
 ],
 "also": [
  [
   "The conflicts of interest",
   [
    [
     "The Minister's farmhouse, whose value would rise with the road.",
     "The plot offered in your wife's name, using information you hold as an official.",
     "The Minister's power over your career, set against your duty to advise honestly."
    ]
   ]
  ],
  [
   "Your responsibilities as a public servant",
   [
    [
     "To advise impartially on the merits, and put that advice on record.",
     "To keep official information confidential and never use it for private gain.",
     "To refuse inducements, and report them.",
     "To protect public money, the farmers' rights and the environment."
    ]
   ]
  ]
 ],
 "close": "The officer should refuse both the realignment and the plot, put the true costs on file, and take the matter up the chain if the Minister insists. A public road cannot be bent towards a Minister's farmhouse or an officer's family."
},
"Q151":{
 "t": "The PIO asked to disclose his own mistake",
 "brief": "A Public Information Officer receives an RTI application about decisions he and colleagues took that turned out to be wrong. Full disclosure could lead to disciplinary action against them all; partial or disguised disclosure would not. He is honest and conscientious, but this decision was wrong. He asks you to evaluate four options, and for your own advice.",
 "conflict": [
  "Truthful disclosure under the law against self-protection.",
  "Loyalty to colleagues who shared the decision against the applicant's right to information.",
  "Accountability for an honest mistake against fear of punishment."
 ],
 "stake": [
  "The PIO",
  "His colleagues who were party to the decisions",
  "The applicant",
  "The department",
  "The Information Commission",
  "The public, whose trust in RTI depends on honest replies"
 ],
 "options": [
  [
   "Refer to the superior and act strictly on his advice, even if he disagrees",
   "Shares the burden.",
   "The PIO holds the statutory duty and cannot hand it over; the advice may be to conceal."
  ],
  [
   "Go on leave, or ask for the application to be handled by another PIO",
   "Avoids a personal decision.",
   "Evasion; it delays the reply beyond the legal time limit, and the problem remains."
  ],
  [
   "Weigh his career and reply with a \"little compromise\" on the contents",
   "Protects him.",
   "Dishonest and unlawful; penalties apply for knowingly giving incorrect or incomplete information, and discovery would be worse."
  ],
  [
   "Consult his colleagues who were party to the decision, and act on their advice",
   "Collegial.",
   "A clear conflict of interest; it becomes collusion to conceal."
  ]
 ],
 "criteria": [
  "The RTI Act gives the applicant a right to the information, and gives the PIO the duty to provide it, fully and in time. Knowingly giving incorrect or incomplete information invites penalties under Section 20. A decision taken in good faith that turned out wrong is not a crime; hiding it would turn a mistake into misconduct."
 ],
 "sequence": [
  "Provide the complete and correct information within the time allowed.",
  "At the same time, write to the superior officer explaining the decisions, the error and the good faith in which they were taken.",
  "Tell his colleagues what he is doing and why, but do not let them influence the reply.",
  "Cooperate with any inquiry, and ask that it distinguish honest error from misconduct.",
  "Suggest changes to the decision process so that the same error does not recur."
 ],
 "close": "My advice would be to disclose fully and truthfully, and to own the mistake. An honest error openly admitted is defensible; information withheld or twisted to escape it is not."
},
"Q255":{
 "t": "Vikas: fingerprints that fail at the ration shop",
 "brief": "Vikas, Collector of a remote hilly district, must run the public distribution system for economically weaker families. Real-time fingerprint authentication, meant to stop leakage, often fails for children, manual labourers and older people, and when the connection is weak. Distributors then use their own discretion. Strict rules protect public money but deny food to eligible people. Unchecked discretion invites misuse.",
 "conflict": [
  "Fiscal probity against the right to food and to life under Article 21.",
  "A uniform rule against the people it fails.",
  "Distributors' discretion against the risk of misuse.",
  "Technology as a safeguard against technology as a barrier."
 ],
 "stake": [
  "Eligible families, especially children, labourers and older people",
  "Ration dealers",
  "The food and civil supplies department",
  "UIDAI and the technology providers",
  "The public exchequer",
  "Gram panchayats and vigilance committees"
 ],
 "options": [
  [
   "Enforce fingerprint authentication strictly",
   "Prevents leakage and protects public money.",
   "Denies food to eligible people through no fault of their own."
  ],
  [
   "Leave failures to the dealer's discretion",
   "Nobody goes hungry in the short term.",
   "Opens the door to fake entries and diversion, with no record."
  ],
  [
   "Keep authentication, but add recorded fall-back methods and checks",
   "Protects both the eligible and the exchequer.",
   "Needs more administrative work and monitoring."
  ]
 ],
 "criteria": [
  "Preventing leakage is a legitimate aim, but denying food to an eligible person is a greater harm than a small risk of leakage. The Supreme Court's Aadhaar judgment of 2018 held that nobody should be denied a benefit because authentication fails, and government instructions say the same. **The test is whether the rule serves its purpose, getting food to the eligible, or defeats it.**"
 ],
 "sequence": [
  "Issue clear instructions that no eligible family may be turned away for a failed authentication.",
  "Provide fall-back methods: an iris scan, a one-time password on a registered phone, a nominee, or manual verification recorded in an exception register.",
  "Allow offline authentication, with later syncing, where the connection is weak.",
  "Audit the exception register regularly, and check a sample of households in person.",
  "Hold camps to update the fingerprints of children, labourers and older people.",
  "Involve gram panchayats and vigilance committees in social audits, and run a helpline.",
  "Report the problems to the state and to UIDAI for technical fixes."
 ],
 "also": [
  [
   "(a) Balancing fiscal probity with empathy",
   [
    "Probity and empathy are not opposites here. **Fiscal probity exists to get benefits to the right people, and turning the right people away defeats it.** Fall-back methods, each recorded and later audited, protect both."
   ]
  ],
  [
   "(b) The ethics of technology as a gatekeeper",
   [
    "Technology can reduce leakage, remove middlemen and leave a record that can be audited. Technology becomes unethical when it is the only gate, when its failures fall on the poor, and when no human can override it. **A gate should open for the eligible when the machine fails, with a record, rather than shut them out.** Technology should serve the welfare scheme, not decide who deserves it."
   ]
  ]
 ],
 "close": "A ration system exists to feed people. Vikas should keep the technology to stop leakage, but never let a failed fingerprint decide that a family goes hungry."
},
"Q232":{
 "t": "Rakesh: compensation for a bus driver who started a fight",
 "brief": "A city bus driver died of injuries after a roadside fight that, the police found, he started. The transport department is inclined to deny him the extra compensation given to drivers who die on duty. His family, a wife and two daughters in school and college, has lost its only earner. The union has been on strike for ten days, demanding full compensation and a job for a family member. Rakesh, the Joint Commissioner, must decide.",
 "conflict": [
  "Compassion for a bereaved family against fairness to drivers who died without fault.",
  "Discipline, and not rewarding violence, against the needs of an innocent family.",
  "Ending the strike quickly against setting a precedent under pressure.",
  "The rules against their humane application."
 ],
 "stake": [
  "The driver's wife and daughters",
  "The union and other drivers",
  "The department's management",
  "Commuters affected by the strike",
  "The man injured in the fight",
  "The public, who fund the service"
 ],
 "options": [
  [
   "Deny any extra compensation",
   "Consistent with the police finding.",
   "Punishes an innocent family, prolongs the strike, and looks heartless."
  ],
  [
   "Grant full compensation and a job, as demanded",
   "Ends the strike quickly.",
   "Treats a death from a fight the driver started like a death in service, and invites future demands under pressure."
  ],
  [
   "Pay all statutory dues at once, give humanitarian help to the family, consider a job under the compassionate appointment rules, and negotiate an end to the strike",
   "Fair to the family and to the rules.",
   "May not satisfy the union entirely."
  ]
 ],
 "criteria": [
  "The family did nothing wrong, and their loss is real. But extra compensation for death on duty exists for drivers who die doing their job, and the rules and legal advice should decide whether this death qualifies. Humanitarian help can be given on its own terms, without calling it the same thing. Whatever is decided should be applied the same way to future cases."
 ],
 "sequence": [
  "Meet the family, express condolence, and release all statutory dues at once: provident fund, gratuity, insurance and pension.",
  "Examine, with legal advice, whether the death counts as a death on duty under the rules and the compensation law.",
  "If it does not, give an ex gratia grant from the welfare fund on humanitarian grounds, and support for the daughters' education.",
  "Consider one family member for a job under the compassionate appointment scheme, if its conditions are met.",
  "Explain the decision to the union openly, and negotiate an end to the strike.",
  "Afterwards, train drivers in handling road disputes and stress, and clarify the compensation rules."
 ],
 "also": [
  [
   "(c) The dilemmas Rakesh faces",
   [
    [
     "Compassion against consistency.",
     "Ending a strike against yielding to pressure.",
     "Discipline against the welfare of a family that did no wrong."
    ]
   ]
  ]
 ],
 "close": "Rakesh should separate the family's need from the driver's fault. Statutory dues, humanitarian help and a lawful job for the family, together with clear rules applied consistently, answer both compassion and fairness, and should end the strike."
},
"Q053":{
 "t": "Rakesh: an old couple just outside the scheme",
 "brief": "Rakesh, a trusted district officer, must identify beneficiaries of a health scheme for senior citizens, which has four criteria: age 60 or more, a reserved community, family income under ₹1 lakh, and a good prognosis. An old couple with no children meet every criterion except the reserved community. The man needs surgery that a surgeon will do free, but the couple must find ₹1 lakh for medicines and hospital costs.",
 "conflict": [
  "Compassion for a couple in real need against the scheme's clear criteria.",
  "The purpose of the scheme, better quality of life for the elderly, against its letter.",
  "Trust placed in Rakesh's honesty against the temptation to bend the rule once."
 ],
 "stake": [
  "The old couple",
  "Other applicants who meet or fail the criteria",
  "The government and the scheme's funds",
  "Rakesh",
  "The surgeon and hospital"
 ],
 "options": [
  [
   "Reject the application and do nothing more",
   "Consistent.",
   "Cold, and misses lawful ways to help."
  ],
  [
   "Approve it anyway",
   "Helps the couple.",
   "Breaks the scheme's rules and Rakesh's trust; unfair to others; possibly misconduct."
  ],
  [
   "Reject it under this scheme, but find them help through other schemes, funds and charities",
   "Helps within the law.",
   "Takes effort, and help may be slower."
  ],
  [
   "Recommend a change to the criteria",
   "Helps many like them in future.",
   "Does not help this couple today."
  ]
 ],
 "criteria": [
  "Rakesh has no power to waive an eligibility criterion that the scheme lays down; doing so would be unfair to every other applicant and a breach of trust. But his duty does not end with the rejection. The couple's need is real, and there are usually other lawful routes that can cover it."
 ],
 "sequence": [
  "Explain honestly to the couple why this scheme cannot cover them.",
  "Check at once their eligibility for other help: the national health insurance scheme, state health schemes, disease-specific aid for poor patients, and old-age pensions.",
  "Approach the Chief Minister's relief fund, the hospital's charity fund, and NGOs and donors for the ₹1 lakh.",
  "Coordinate with the surgeon and hospital so that the operation is not delayed.",
  "Write to the government recommending a review of the community criterion, which excludes poor elderly people in the same need."
 ],
 "close": "Rakesh should apply the scheme honestly and then work just as hard to find another lawful route for the couple, while telling the government that its criteria leave out people in real need."
},
"Q210":{
 "t": "Dr X: tax defaults and a hospital for a neglected region",
 "brief": "You head a regional tax investigation agency. Your officers find substantial tax withheld by Dr X, a leading doctor who plans a charitable super-speciality hospital in a neglected region. He is cooperative and will pay the substantial dues at once. Other defaults are purely technical; pursuing them would consume his time and could hamper the hospital. You must choose between a broader view and pursuing everything strictly.",
 "conflict": [
  "Enforcing the tax law fully against a public benefit, the hospital.",
  "Equal treatment of taxpayers against proportion in enforcement.",
  "Firmness against efficiency: the agency's time and the taxpayer's.",
  "The letter of the law against its purpose, which is collecting revenue."
 ],
 "stake": [
  "Dr X",
  "The future patients of the hospital",
  "The tax agency and its officers",
  "Other taxpayers, who expect equal treatment",
  "The government's revenue"
 ],
 "options": [
  [
   "Take a broader view: ensure the substantial tax is paid, and ignore the technical defaults",
   "Proportionate, and the hospital proceeds.",
   "\"Ignoring\" a default without legal basis is favouritism, and creates a precedent."
  ],
  [
   "Pursue everything strictly",
   "Uniform and firm.",
   "Wastes the agency's effort on trivial issues, and may hurt a public good without gain in revenue."
  ],
  [
   "Recover the substantial tax fully; deal with technical defaults as the law allows, by rectification and use of the discretion over penalties, with reasons recorded",
   "Firm, fair and proportionate.",
   "Needs careful work and clear records."
  ]
 ],
 "criteria": [
  "The agency's duty is to enforce the law, not to decide which taxpayers do good work. The hospital cannot buy leniency on substantive tax, which must be recovered in full with interest. But tax law itself allows proportion: technical lapses can be corrected, and penalties can be waived where there is reasonable cause. Using that discretion, on the record and in the same way as for any other taxpayer, is not favouritism."
 ],
 "sequence": [
  "Recover the substantial tax at once, with interest and penalties as the law requires.",
  "List the technical defaults, and give Dr X a time limit to correct them.",
  "Apply the statutory provisions on penalties and reasonable cause consistently, with reasons recorded for each decision.",
  "Treat Dr X exactly as any other cooperative taxpayer with similar lapses would be treated.",
  "Suggest simpler procedures if such technical defaults are common."
 ],
 "close": "The agency should neither ignore the law nor wield it for its own sake. Full recovery of the real tax, and proportionate, lawful handling of technical lapses, protects both the revenue and the hospital."
},
"Q184":{
 "t": "Compensation for a worker who died drunk on duty",
 "brief": "A worker died in an accident on duty. The company refused compensation because an investigation found that he was drunk at the time. His family demands compensation, and workers have gone on strike. As head of human resources, you must recommend what the company should do, with the merits and demerits of each recommendation.",
 "conflict": [
  "Discipline and personal responsibility against compassion for a bereaved family.",
  "The company's rules against its legal obligations.",
  "Ending the strike against yielding to pressure.",
  "The worker's fault against the company's own failure to stop a drunk worker from working."
 ],
 "stake": [
  "The worker's family",
  "Fellow workers and the union",
  "The company's management and owners",
  "Supervisors who allowed him to work",
  "Future workers, whose safety depends on the lessons learned"
 ],
 "options": [
  [
   "Refuse any compensation",
   "Signals that drinking on duty is unacceptable.",
   "May be unlawful; punishes the family; prolongs the strike."
  ],
  [
   "Pay whatever the union demands",
   "Ends the strike.",
   "Rewards pressure, and ignores the safety failure."
  ],
  [
   "Pay the compensation the law requires, add humanitarian help, and fix the safety lapse",
   "Lawful, humane and constructive.",
   "Costs money, and some may see it as leniency."
  ]
 ],
 "criteria": [
  "The first question is the law. Under the Employees' Compensation Act, 1923, now part of the Code on Social Security, an employer escapes liability because the worker was drunk only for injuries that do not result in death or permanent total disablement. For a death, compensation remains payable. The second question is the company's own role: a drunk worker should not have been allowed near dangerous work."
 ],
 "sequence": [
  "Recommend paying the statutory compensation promptly, with other dues such as provident fund and insurance.",
  "Consider modest humanitarian help for the family, such as support for children's education.",
  "Investigate how a drunk worker was allowed on duty, and fix supervisory responsibility.",
  "Introduce alcohol checks, counselling and an employee assistance programme.",
  "Explain the decision openly to the workers, and ask them to end the strike."
 ],
 "also": [
  [
   "Merits and demerits of each recommendation",
   [
    [
     "Statutory compensation: lawful and fair to the family, though some may feel it ignores the worker's fault.",
     "Humanitarian help: shows care and builds trust, but must be framed so it does not appear to reward drinking.",
     "Inquiry into supervision: prevents future deaths, though it may embarrass managers.",
     "Alcohol checks and counselling: improves safety, though workers may see it as intrusive at first."
    ]
   ]
  ]
 ],
 "close": "The company should pay what the law requires, help the family humanely, and fix the failure that let a drunk worker onto the job. That ends the strike on principle rather than under pressure."
},
"Q235":{
 "t": "The district development officer and the girls kept from school",
 "brief": "In your district, elders believe that educating girls has brought trouble and want them married early; the young want equal chances. After some girls are molested on the way to school, groups clash, and the elders decide that girls will not go to school, and that families who defy them will be boycotted. You are the district development officer.",
 "conflict": [
  "Girls' right to education and safety against the elders' authority and custom.",
  "Law and order now against lasting change in attitudes.",
  "Protecting girls against confining them \"for their safety\".",
  "Enforcing the law against persuading the community."
 ],
 "stake": [
  "The girls and their families",
  "The elders",
  "The younger generation",
  "Boys and young men who fear competition for jobs",
  "Schools and teachers",
  "The police, panchayat and administration"
 ],
 "options": [
  [
   "Accept the elders' decision to keep the peace",
   "Calms tension.",
   "Denies girls their right, rewards the molesters, and is unconstitutional."
  ],
  [
   "Enforce the law alone: prosecute, protect, and override the elders",
   "Upholds rights quickly.",
   "May harden attitudes, and the girls remain at risk once officials leave."
  ],
  [
   "Protect the girls and prosecute the offenders, while working with the community to change attitudes",
   "Keeps girls in school and builds acceptance.",
   "Slow, and needs sustained effort."
  ]
 ],
 "criteria": [
  "Girls have an equal right to education under the Constitution and the Right to Education Act, and a social boycott to enforce the elders' decision is unlawful. Safety must be provided without taking away education. What needs skill is changing attitudes without a backlash."
 ],
 "sequence": [
  "Ensure the molesters are identified and prosecuted swiftly, and publicise the action.",
  "Make the route to school safe: police patrols, women constables, escorted transport or a school bus, and a helpline.",
  "Declare that social boycott is unlawful, and act against those who enforce it.",
  "Meet the elders, listen to their fears, and enlist respected members and religious leaders who support girls' education.",
  "Use role models: successful women from the area, women officers, and girls' achievements.",
  "Create jobs and skill programmes for young men too, to ease fears of competition."
 ],
 "also": [
  [
   "(b) Changing the elders' attitudes, and healing the divide between generations",
   [
    [
     "Joint meetings of elders and young people, with the elders given a respected role in the girls' safety plan.",
     "Mothers' groups and self-help groups as allies inside families.",
     "School events that bring the generations together.",
     "Patience: change is gradual, and early successes should be celebrated."
    ]
   ]
  ]
 ],
 "close": "The officer must keep the girls in school and safe, punish the offenders and stop the boycott, while bringing the elders round through respect, allies and evidence. Rights come first; the method must win the village."
},
"Q236":{
 "t": "The Sarpanch and the Dalit cook",
 "brief": "As Sarpanch, you find that after the headmaster appointed a Dalit cook for the midday meal, about half the upper-caste parents stop their children from eating. School attendance falls sharply, which could lead to the scheme being withdrawn, staff being cut and the school closing.",
 "conflict": [
  "Equality and the abolition of untouchability against caste prejudice.",
  "The children's nutrition and schooling against their parents' beliefs.",
  "The cook's dignity and livelihood against the community's demand.",
  "Harmony in the village against upholding the law."
 ],
 "stake": [
  "The Dalit cook",
  "The children of all castes",
  "Upper-caste and Dalit parents",
  "The headmaster and teachers",
  "The panchayat",
  "The education department and the police"
 ],
 "options": [
  [
   "Replace the cook to restore attendance",
   "Quick return to normal.",
   "Endorses untouchability, breaks the law, and humiliates the cook."
  ],
  [
   "Enforce the law strictly, and prosecute parents",
   "Upholds rights.",
   "May drive children out of school, and deepen hostility."
  ],
  [
   "Keep the cook, act against discrimination, and win parents over through dialogue and example",
   "Protects rights and keeps children in school.",
   "Needs patience and leadership."
  ]
 ],
 "criteria": [
  "Untouchability is abolished by Article 17 and punishable under law. Replacing the cook for her caste is not an option. The children must not lose their meal or their school because of their parents' prejudice. The Sarpanch's task is to hold the principle firmly and bring the community round."
 ],
 "sequence": [
  "Stand publicly by the cook's appointment, and make clear that caste discrimination will not be accepted.",
  "Meet the parents who object, in small groups, with respected elders and religious leaders who support equality.",
  "Eat the midday meal at the school himself, with other panchayat members, teachers and officials, to show by example.",
  "Involve mothers' groups in overseeing the kitchen's hygiene and quality, which answers the objection without conceding the prejudice.",
  "Warn that the law will be enforced if children are kept away, or the cook is harassed, and act if needed.",
  "Keep the scheme running, and inform the education department of the situation and the steps taken."
 ],
 "also": [
  [
   "(b) The responsibilities of each part of society",
   [
    [
     "Parents: send their children to school and eat together, whatever their caste.",
     "Teachers: treat all children equally, and teach the value of equality.",
     "The panchayat and community leaders: lead by example, and resolve the conflict.",
     "The administration and police: enforce the law against discrimination, and support the school.",
     "Civil society and the media: build awareness, and highlight positive examples."
    ]
   ]
  ]
 ],
 "close": "The Sarpanch must keep the cook and keep the children eating. Personal example, dialogue with parents and the quiet backing of the law can end the boycott without giving an inch to untouchability."
},
"Q164":{
 "t": "Vinod: evidence against the Chairman, offered by the Opposition",
 "brief": "Vinod, an upright IAS officer on his sixth transfer in three years, becomes MD of the State Road Transport Corporation. Its Chairman is a powerful politician close to the Chief Minister. An Opposition member of the board gives Vinod documents and a video in which the Chairman appears to demand a bribe for a large tyre order, urges Vinod to expose him, and promises him career growth once his party comes to power.",
 "conflict": [
  "The duty to act on evidence of corruption against being used by one party against another.",
  "Neutrality of the civil service against promises of reward and threats of penalty.",
  "Career security (another transfer) against doing the right thing.",
  "Acting quickly against verifying evidence of unknown authenticity."
 ],
 "stake": [
  "Vinod",
  "The Chairman",
  "The Opposition board member",
  "The corporation, its staff and passengers",
  "The state government",
  "Vigilance and anti-corruption agencies",
  "Taxpayers"
 ],
 "options": [
  [
   "Ignore the evidence",
   "Avoids trouble.",
   "He now knows of possible corruption in his own organisation; ignoring it is a failure of duty."
  ],
  [
   "Expose the Chairman publicly, as the member urges",
   "Public recognition and a political reward later.",
   "Makes him a party tool; breaches the conduct rules; the video is unverified and may be doctored."
  ],
  [
   "Confront the Chairman",
   "Direct.",
   "Alerts him, and evidence may be destroyed."
  ],
  [
   "Verify what he can within the corporation, and send the evidence to the vigilance or anti-corruption agency, informing the Chief Secretary",
   "Acts on the evidence through lawful channels, and stays neutral.",
   "May bring a transfer or hostility from the Chairman."
  ],
  [
   "Seek another transfer",
   "Avoids the conflict.",
   "Leaves the corruption in place."
  ]
 ],
 "criteria": [
  "The source's political motive does not make the evidence false, and it does not make Vinod its agent. His duty is to his office: check the facts that lie within his power, and hand the rest to the agencies that can investigate. The test of neutrality is that he would act the same way whichever party held the evidence."
 ],
 "sequence": [
  "Record the meeting with the board member and the documents received, and decline his offer of future favours.",
  "Examine the corporation's own records: the tyre order, the tendering, and the expedited bills. Order an internal audit and hold disputed payments pending review, as MD's powers allow.",
  "Send the documents and video to the state vigilance or anti-corruption agency, and inform the Chief Secretary in writing.",
  "Keep his conduct strictly official: no public statements, no dealings with either party.",
  "Continue to run the corporation normally; accept a transfer, if it comes, without compromising the process."
 ],
 "also": [
  [
   "(b) The ethical issues when the bureaucracy is politicised",
   [
    [
     "Officers become instruments of parties, and neutrality is lost.",
     "Frequent transfers punish honesty and reward pliancy.",
     "Evidence of wrongdoing is used selectively, as a political weapon.",
     "Officers look to the next government for rewards, and decisions lose integrity.",
     "Public trust in impartial administration declines."
    ]
   ]
  ]
 ],
 "close": "Vinod should act on the evidence, but through the vigilance machinery, not through a party. That is how he fights corruption without becoming a tool, and keeps his neutrality whichever government comes next."
},
"Q147":{
 "t": "Rajesh Kumar: welfare funds diverted to development projects",
 "brief": "Rajesh Kumar, honest Head of the Budget Division in the Finance Ministry, is asked to process a recommendation to move ₹6,000 crore from the National Housing Scheme, a centrally sponsored scheme for weaker sections, to an SEZ and a gas processing plant whose first payment to a foreign company falls due in December. Four states go to the polls this year, and the housing scheme is much publicised. His seniors want it processed at once.",
 "conflict": [
  "Welfare for the poor against development projects of national importance.",
  "Honest financial advice against political urgency.",
  "Parliamentary control of public money against executive convenience.",
  "The officer's conscience against his duty to carry out lawful decisions."
 ],
 "stake": [
  "Beneficiaries of the housing scheme",
  "The SEZ project and the gas grid",
  "The foreign contractor, and India's credibility as a payer",
  "The government and Parliament",
  "Rajesh Kumar and his seniors",
  "Taxpayers and the states going to the polls"
 ],
 "options": [
  [
   "Process it as asked, without comment",
   "Quick, and pleases seniors.",
   "Fails in his duty to advise; the process may be unlawful."
  ],
  [
   "Advise on the file: the legal route, the effect on the housing scheme, and alternatives; then process the decision taken",
   "Frank advice with loyal execution.",
   "May displease seniors under time pressure."
  ],
  [
   "Refuse to process it",
   "Keeps his objection clear.",
   "Justified only if what is asked is illegal."
  ],
  [
   "Resign",
   "A strong protest.",
   "Removes an honest adviser; not warranted for a lawful policy choice."
  ],
  [
   "Leak it to the press or opposition",
   "Pressure.",
   "Breaches his duty and the conduct rules."
  ]
 ],
 "criteria": [
  "Money voted for one purpose cannot be moved to a different ministry's projects by re-appropriation; that needs Parliament's approval through supplementary demands, or an advance from the Contingency Fund pending that approval. The housing scheme has drawn only ₹775 crore of ₹8,300 crore by June, so real savings may arise, but that is a question of fact to be shown, not assumed. The choice between welfare and development is the government's to make, provided it is made lawfully and on honest advice."
 ],
 "sequence": [
  "Examine the proposal and put a note on file setting out the constitutional route: supplementary demands, or an advance from the Contingency Fund.",
  "Assess the effect on the housing scheme's beneficiaries, and whether savings will genuinely arise this year.",
  "Suggest alternatives: phasing the payment to the contractor, re-prioritising within the two ministries' own grants, or releasing only part of the savings.",
  "Discuss the note with his seniors, openly and in writing.",
  "Once the government takes a lawful decision, process it promptly and well.",
  "If he is asked to do something unlawful, decline in writing and escalate."
 ],
 "also": [
  [
   "(a) The ethical issues in moving funds from welfare to development",
   [
    [
     "The poor lose a promised benefit to projects whose gains flow elsewhere.",
     "Parliament's control over spending may be bypassed.",
     "Political timing, before elections, may shape a financial decision.",
     "National credibility in paying a foreign contractor on time."
    ]
   ]
  ],
  [
   "Is resigning a worthy option?",
   [
    [
     "No. A civil servant's duty is to advise frankly and then carry out lawful decisions. Resignation is for orders that are illegal or immoral. Here Rajesh Kumar can serve better by staying and ensuring the decision is lawful and well considered."
    ]
   ]
  ]
 ],
 "close": "Rajesh Kumar should give frank, recorded advice on the legal route, the cost to the poor and the alternatives, and then implement the government's lawful choice. Resignation would take the most honest voice out of the room."
},
"Q117":{
 "t": "The politicisation of the bureaucracy",
 "brief": "The political executive frames policy and the permanent executive carries it out. After independence the two respected each other's domains; over the decades, the political executive has pressed its own agenda on the bureaucracy, respect for upright officers has declined, politicians interfere in transfers and postings, and materialism has eroded the values of both. The question asks for the consequences of this politicisation.",
 "conflict": [
  "Responsiveness to elected governments against political neutrality.",
  "Loyalty to ministers against loyalty to the Constitution and the law.",
  "Officers' careers against their integrity.",
  "Democratic control of administration against its capture by parties."
 ],
 "stake": [
  "Citizens, who need impartial administration",
  "Ministers and political parties",
  "Civil servants, honest and pliant alike",
  "Parliament and the courts",
  "Investors and institutions that depend on predictable rules"
 ],
 "options": [
  [
   "Leave it as it is",
   "No conflict.",
   "The decline continues; honest officers are sidelined."
  ],
  [
   "Insulate the bureaucracy completely from politicians",
   "Protects neutrality.",
   "Undermines democratic accountability; officers answer to no one."
  ],
  [
   "Rebalance: protect neutrality in postings and advice, keep ministers' control over policy",
   "Keeps both democracy and neutrality.",
   "Needs political will to limit one's own power."
  ]
 ],
 "criteria": [
  "In a democracy the elected government decides policy, and the civil service must serve it loyally. But loyalty to the government of the day must not become loyalty to a party. The test is whether an officer would act the same way whichever party were in power, and whether the rules protect officers who advise honestly."
 ],
 "sequence": [
  "Set up Civil Services Boards to decide transfers and postings, with fixed minimum tenures, as the Supreme Court directed in T.S.R. Subramanian v. Union of India (2013).",
  "Require that oral instructions to officers be put in writing, as the same judgment directed.",
  "Assess officers on objective performance, and protect those who take decisions in good faith.",
  "Adopt codes of ethics for both ministers and officers.",
  "Strengthen independent institutions: vigilance bodies, the Lokpal and Lokayuktas, audit.",
  "Build values through training, mentoring and the example of senior officers."
 ],
 "also": [
  [
   "The consequences of politicisation",
   [
    [
     "Loss of neutrality: officers act for a party, not the public.",
     "Frequent transfers: instability and poor delivery, and honesty punished.",
     "Corruption: a nexus of politicians and pliant officers.",
     "Poor policy: frank advice dries up, and decisions suit elections rather than needs.",
     "Loss of morale among honest officers, and of public trust in administration.",
     "Weak rule of law: the law applies differently to friends and opponents."
    ]
   ]
  ]
 ],
 "close": "Politicisation turns a permanent, neutral service into a partisan one. Fixed tenures, independent boards for postings, written orders and codes of ethics can restore the balance between democratic control and impartial administration."
},
"Q165":{
 "t": "Prabhat: a rival's bid documents in return for a job",
 "brief": "Prabhat, VP Marketing at Sterling Electric, is under pressure to win a Defence Ministry tender or see his division closed and lose his job. He is the only earner for a family with heavy school, medical and loan expenses. A capable candidate, whose CV came through the Defence Minister's office, offers copies of a rival's bid documents in return for a job with Sterling.",
 "conflict": [
  "Personal and family survival against integrity.",
  "Winning a crucial contract against fair competition in a public tender.",
  "The company's interest against the law on corruption and theft of confidential documents.",
  "A candidate's apparent competence against his demonstrated dishonesty."
 ],
 "stake": [
  "Prabhat and his family",
  "Subhas Verma",
  "Sterling Electric, its staff and its London headquarters",
  "Unique Electronics, the rival",
  "The Defence Ministry and the integrity of defence procurement",
  "The public"
 ],
 "options": [
  [
   "Accept the documents and hire him",
   "Could win the tender and solve Prabhat's problems.",
   "Illegal and corrupt; could lead to disqualification, blacklisting and prosecution; puts a proven thief in the company."
  ],
  [
   "Hire him on merit, but refuse the documents",
   "Gets a capable marketer.",
   "He has shown he will steal for advantage; his entry through a minister's office raises questions."
  ],
  [
   "Refuse the documents and the job, and report the offer to the company's management, legal team and the Defence Ministry",
   "Protects the tender's integrity and the company.",
   "The rival may still win; Prabhat's job remains at risk."
  ],
  [
   "Refuse, but say nothing",
   "Avoids involvement.",
   "Leaves the offer to be made to another bidder, and the tender compromised."
  ]
 ],
 "criteria": [
  "Using a rival's stolen bid would corrupt a defence tender and expose the company to disqualification and criminal liability. A candidate who steals his own employer's documents cannot be trusted with Sterling's. Prabhat's financial pressure is real, but it cannot justify a crime that could destroy the company and his career far more surely than losing one tender."
 ],
 "sequence": [
  "Decline the offer firmly, and do not hire Subhas Verma.",
  "Inform the Executive Director and the legal department in writing at once.",
  "Report the attempt to the Defence Ministry's procurement and vigilance authorities, so that the tender is protected.",
  "Put the division's full effort into a strong, competitive, lawful bid.",
  "Discuss his personal financial difficulties with the company's HR, and plan for his family's security whatever the outcome."
 ],
 "close": "Prabhat's problems are real, but a stolen bid would turn a business difficulty into a crime. He should refuse, report the offer, and compete honestly."
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
},
"Q186":{
 "t": "The company invaded by a party's mob",
 "brief": "A private company of about 700 employees, known for efficiency, transparency and welfare, has a cooperative spirit and no union by the workers' own choice. One morning about 40 men from a political party force their way in, threaten and abuse staff, and demand jobs, while remaining party workers. The company does not extend favours to the civil administration or the police. You are the CEO.",
 "conflict": [
  "The safety of employees against giving in to intimidation.",
  "Merit-based hiring against jobs demanded under threat.",
  "The company's refusal to do favours against its need for police protection.",
  "Peace now against a precedent that invites more such visits."
 ],
 "stake": [
  "Employees, and their morale",
  "The CEO and management",
  "The owner",
  "The men who forced their way in, and their party",
  "The police and administration",
  "Local job seekers",
  "Customers and the business"
 ],
 "options": [
  [
   "Give some jobs to end the standoff",
   "Quick peace.",
   "Rewards intimidation; hires people who owe loyalty to a party; invites repeat visits."
  ],
  [
   "Remove them by force using private security",
   "Asserts control.",
   "Risk of violence and injury, and legal trouble."
  ],
  [
   "Call the police, keep everyone calm, talk to the leaders without conceding anything under threat",
   "Lawful, and protects staff.",
   "Takes time; police response may be slow."
  ],
  [
   "Shut the factory for the day",
   "Protects staff.",
   "Loses production, and the problem returns."
  ]
 ],
 "criteria": [
  "The first duty is the safety of employees. The second is not to reward intimidation, because jobs given under threat would undo the company's culture of merit. The company is entitled to police protection as of right; not doing favours for officials does not mean giving up the protection of the law."
 ],
 "sequence": [
  "Move staff away from the intruders, secure the premises, and keep calm.",
  "Call the police and inform the district administration; record the events on camera and in writing.",
  "Meet the group's leaders with senior managers, listen, and explain the company's recruitment process; make no promises under duress.",
  "Ask the party's senior leadership to call its members back.",
  "After the incident, file a complaint, and brief all employees on what happened and what the company will do."
 ],
 "also": [
  [
   "(b) A long-term solution",
   [
    [
     "A transparent recruitment policy, with openings published locally and selection on merit.",
     "Skill training for local youth, so that they can compete for jobs, as part of CSR.",
     "Regular engagement with local leaders of all parties and with the community.",
     "Security protocols, and a relationship with police and administration based on law, not favours.",
     "Strong grievance and welfare systems, so that employees stay united."
    ]
   ]
  ],
  [
   "(c) The consequences of each action",
   [
    [
     "Conceding jobs: peace today, but employees feel betrayed, merit suffers, and more demands follow.",
     "Using force: shows strength, but risks injury, cases against the company and bad publicity.",
     "Police and dialogue: slower, but lawful, and it keeps employees' trust.",
     "Local hiring on merit and skill training: costs money, but builds goodwill and removes the grievance."
    ]
   ]
  ]
 ],
 "close": "The CEO should protect his staff, call in the law, and refuse to trade jobs for peace, while opening a fair route for local youth to earn jobs on merit."
},
"Q187":{
 "t": "The strict officer and the retaliatory harassment complaint",
 "brief": "You are an honest officer sent to head a notoriously inefficient department in a remote district. After warnings, you issue show-cause notices to a group of troublemakers. They get a woman employee to complain of sexual harassment against you to the Women's Commission, which seeks your explanation, and the matter is publicised to embarrass you. The case offers options: explain and go soft; ignore the Commission and press on; brief superiors and act on their directions; or others.",
 "conflict": [
  "Discipline in the department against pressure through a complaint.",
  "Your reputation against due process for a complaint of sexual harassment.",
  "Firmness against the appearance of vindictiveness.",
  "Respect for the Commission against your belief that the complaint is false."
 ],
 "stake": [
  "You and your family",
  "The woman employee",
  "The troublemakers",
  "Other employees, who suffer the indiscipline",
  "The Women's Commission and the Internal Committee",
  "Your superiors",
  "The public the department serves"
 ],
 "options": [
  [
   "Explain to the Commission and go soft on discipline",
   "Reduces tension.",
   "Rewards the tactic; the department stays as it was."
  ],
  [
   "Ignore the Commission and press on firmly",
   "Asserts authority.",
   "Disrespects a statutory body, and looks like retaliation against a complainant."
  ],
  [
   "Brief your superiors, seek directions and act accordingly",
   "Keeps the hierarchy informed.",
   "Passes the decision upward."
  ],
  [
   "Respond fully to the Commission, request an inquiry by the Internal Committee, brief superiors in writing, and continue disciplinary action by the rules, under a senior's oversight",
   "Respects due process on both matters and keeps them separate.",
   "Takes time, and your name stays under a cloud until the inquiry ends."
  ]
 ],
 "criteria": [
  "The complaint must be inquired into properly, whatever you believe about it; a woman's complaint of harassment is never to be dismissed on suspicion of motive. At the same time, the disciplinary proceedings were begun before the complaint and on their own merits, and should continue by the rules. Keeping the two processes separate, and transparent, is what protects both the complainant's rights and your own."
 ],
 "sequence": [
  "Reply fully and respectfully to the Commission, with the facts and the sequence of events.",
  "Ask that the complaint be inquired into by the Internal Committee, or the Local Committee, under the POSH Act, and cooperate fully.",
  "Brief your superiors in writing on both matters.",
  "Continue the disciplinary proceedings strictly by the rules; ask a senior officer to oversee them, so that they cannot be called vindictive.",
  "Say nothing about the complainant in public or in the media.",
  "Accept the inquiry's finding; the law provides for action if a complaint is found to be false and malicious, but that is for the Committee to decide."
 ],
 "close": "You should face the complaint through due process and carry on with discipline through due process, keeping the two apart. Going soft would reward the tactic; ignoring the Commission would undermine the law that protects women."
},
"Q172":{
 "t": "The CEO asked for a bribe to win a tender",
 "brief": "As CEO of a company that makes specialised electronic equipment for a government department, you have submitted a bid that is better on both quality and cost. The officer concerned demands a large bribe to approve it. Losing the order would close a production line and could hurt your career. You do not want to pay. The question asks for the arguments on both sides, and for a third way.",
 "conflict": [
  "The company's survival and jobs against integrity.",
  "Winning on merit against a corrupt gatekeeper.",
  "Personal career against the law."
 ],
 "stake": [
  "The company, its workers and shareholders",
  "You",
  "The corrupt officer",
  "The government department and taxpayers",
  "Competitors",
  "Anti-corruption agencies"
 ],
 "options": [
  [
   "Pay the bribe",
   "Wins the order and saves jobs.",
   "A criminal offence for the giver too; feeds the corruption; exposes the company to blackmail and prosecution."
  ],
  [
   "Refuse and accept the loss",
   "Keeps integrity.",
   "Jobs and a production line may be lost."
  ],
  [
   "The third way: refuse, record the demand, and take it to the officer's superiors, the department's vigilance officer and the anti-corruption agency, while pressing the bid on its merits",
   "Keeps integrity and gives the best bid a fair chance.",
   "Takes courage and time; the officer may retaliate."
  ]
 ],
 "criteria": [
  "The arguments for paying are real: jobs, the company's survival, and the fact that the bid is better anyway. But paying a bribe is itself an offence; since 2018 the Prevention of Corruption Act also holds a company liable if anyone acting for it pays one. The bribe would buy one order and sell the company's integrity. The best bid deserves to win on merit, and the system provides ways to fight for that."
 ],
 "sequence": [
  "Decline the demand clearly, and record the details: who, when, what was asked.",
  "Write to the head of the department and its Chief Vigilance Officer, pointing to the bid's merits and the demand.",
  "Complain to the anti-corruption agency, which can set a trap and catch the officer red-handed.",
  "If the tender has an integrity pact or an independent monitor, approach the monitor.",
  "Seek legal remedies if the bid is rejected unfairly, and work through the industry association against such practices.",
  "Tell the workforce the truth, and prepare for the risk of losing the order."
 ],
 "also": [
  [
   "The arguments on each side",
   [
    [
     "For paying: jobs and the company's survival; the bid is better anyway; \"everyone does it\".",
     "Against paying: it is a crime; it feeds the corruption that harms honest firms; it invites repeated demands and blackmail; it destroys the company's integrity."
    ]
   ]
  ]
 ],
 "close": "The CEO should neither pay nor simply walk away. Refusing, recording and reporting the demand, while fighting for the bid on its merits, is the third way that keeps both integrity and a fair chance to win."
},
"Q171":{
 "t": "The technical institute: a relative for a professor's post",
 "brief": "You head a leading technical institute and chair an interview panel for professors. The personal secretary of a senior government functionary calls to seek your help in selecting a close relative of the functionary, and mentions that the institute's long-pending proposal for modernisation funds, awaiting that functionary's approval, would then be cleared.",
 "conflict": [
  "Selection on merit against pressure from a powerful functionary.",
  "The institute's need for funds against the integrity of its appointments.",
  "A quid pro quo against lawful administration."
 ],
 "stake": [
  "The candidates, including the relative",
  "The institute, its students and faculty",
  "You and the panel",
  "The functionary and his personal secretary",
  "The ministry, and the public who fund the institute"
 ],
 "options": [
  [
   "Ensure the relative's selection",
   "Funds cleared; the functionary pleased.",
   "Corrupt; unfair to better candidates; damages the institute for decades."
  ],
  [
   "Refuse quietly and let the panel decide",
   "Selection stays on merit.",
   "The approach goes unrecorded; the funds may be held up."
  ],
  [
   "Refuse, record the call, and tell the panel to decide strictly on merit; report the approach",
   "Protects the selection and the institute.",
   "May delay the funds."
  ],
  [
   "Step down from the panel",
   "Avoids personal involvement.",
   "Not needed; you have no personal conflict, and the institute needs your leadership."
  ]
 ],
 "criteria": [
  "A professor's appointment shapes an institute for decades and must be made on merit. Linking it to the release of funds is a quid pro quo, and a form of corruption, even if nothing is paid to anyone personally. The funds should be pursued on their own merits. The functionary may not even know of the call, and has a right to learn what was done in his name."
 ],
 "sequence": [
  "Tell the personal secretary politely that the selection is made by the panel strictly on merit, and that the funding proposal stands on its own merits.",
  "Make a note of the call, with date and time.",
  "Brief the panel to follow the published criteria, and record the scores and reasons for every candidate.",
  "Let the relative be considered like every other candidate, neither favoured nor penalised.",
  "Report the approach in writing to the functionary himself, or to the ministry's Secretary.",
  "Pursue the funding proposal through the normal channels."
 ],
 "close": "The head of the institute should keep the selection on merit and the funding on its merits, and should record and report the attempt to link the two."
},
"Q256":{
 "t": "Rajan: order between two communities",
 "brief": "Rajapuram, a border district, has seen violent ethnic conflict between the Jhara and Biru communities over land, resources and political representation. Many people have died, the communities live in separate relief camps, and the highway is blocked. The local administration and police are divided along community lines, both communities distrust the government, and a neighbouring country may exploit the unrest. Rajan, the new District Magistrate, must restore authority, reopen the highway and start peace talks.",
 "conflict": [
  "Restoring order quickly against using force that deepens distrust.",
  "The neutrality of the administration against the loyalties of its own officials.",
  "Relief and supplies now against resolving the causes later.",
  "National security against the rights and grievances of both communities."
 ],
 "stake": [
  "Both communities, especially victims and people in relief camps",
  "Local officials and police",
  "Central forces",
  "The state and central governments",
  "Community and religious leaders",
  "Civil society and the media"
 ],
 "options": [
  [
   "Deploy central forces in strength and impose order",
   "Restores control quickly.",
   "Force alone may harden distrust and risks excesses."
  ],
  [
   "Negotiate first and hold back force",
   "Builds goodwill.",
   "Violence may continue, and supplies stay cut off."
  ],
  [
   "A controlled, even-handed approach: secure the highway and camps with neutral forces, move partisan officials, deliver relief equally, and open talks",
   "Restores authority while building trust.",
   "Needs careful coordination and fairness that both sides can see."
  ]
 ],
 "criteria": [
  "The first duty is to protect life. Force should be the minimum needed, used equally for both communities, and within the law. **Neutrality must be seen as well as practised, because each community judges the government by what it sees.** Lasting peace also needs the causes addressed: land claims, the allocation of resources, and representation."
 ],
 "sequence": [
  "Requisition central forces such as the CRPF to secure the highway, the relief camps and flashpoints, with clear orders on minimum force.",
  "Open the highway as a corridor for food and medical supplies, with protection for both communities.",
  "Move officials and police who have taken sides, and use mixed teams for sensitive duties.",
  "Run the relief camps to one standard, and publish what each receives.",
  "Form peace committees with elders, women and young people of both communities, and start talks through trusted mediators.",
  "Counter rumours with regular briefings, and act against incitement from either side.",
  "Register and investigate crimes impartially, and share intelligence with the centre on threats from across the border.",
  "Begin work on the causes: a review of land records, fair allocation of resources, and representation in local bodies."
 ],
 "also": [
  [
   "(a) The ethical issues",
   [
    [
     "Protecting life and restoring order.",
     "Neutrality, and the partisanship of officials.",
     "Equal treatment in relief and policing.",
     "The use of force, and human rights.",
     "Justice for victims of violence.",
     "The risk of exploitation from across the border.",
     "The long-standing grievances behind the conflict."
    ]
   ]
  ],
  [
   "(b) Protecting a non-partisan image",
   [
    "The third option protects Rajan's non-partisan image without compromising ethics. **Neutrality is shown by equal treatment that both communities can see**: the same protection, the same relief, the same standard of investigation, and officials who are not seen to belong to either side. Neutral central forces help, provided they act with restraint."
   ]
  ]
 ],
 "close": "In a divided district, the administration can restore authority only if both communities trust it. Rajan should protect life first, act even-handedly where everyone can see it, and begin work on the causes, so that order becomes peace."
},
"Q197":{
 "t": "Ashok: refugees and armed soldiers at the border at night",
 "brief": "Ashok, Divisional Commissioner of a border district in the North-East, is told at night that 200 to 250 people, mostly women and children, some bleeding badly, are trying to cross from a neighbouring country in civil war after a military takeover. About ten armed soldiers in uniform are with them. The state minister wants an immediate report; bad weather prevents Ashok from reaching the Home Secretary.",
 "conflict": [
  "Humanitarian duty to people fleeing violence against border security and the law on entry.",
  "The need to decide now against the absence of instructions.",
  "Compassion for civilians against the risk posed by armed soldiers.",
  "Immediate medical help against due process."
 ],
 "stake": [
  "The women, children and injured people",
  "The soldiers",
  "Local residents",
  "Border police, central forces and the district administration",
  "The state and central governments",
  "The neighbouring country, and India's foreign relations"
 ],
 "options": [
  [
   "Push them all back",
   "Keeps the border closed.",
   "Sends the injured and children back to violence; inhumane."
  ],
  [
   "Let everyone in freely",
   "Humane.",
   "Uncontrolled entry, including armed men; a security risk."
  ],
  [
   "Give immediate medical aid and temporary shelter to civilians at a secure place near the border; disarm and hold the soldiers separately; report at once",
   "Saves lives while keeping control.",
   "Needs resources, and may later be questioned by those who wanted a tougher line."
  ],
  [
   "Wait for instructions",
   "Avoids personal responsibility.",
   "People may die while he waits."
  ]
 ],
 "criteria": [
  "India is not a party to the 1951 Refugee Convention, and entry is a matter for the central government. But the immediate question is whether bleeding people and children should receive help, and there the duty to preserve life is clear. What can be decided now is limited: emergency care, temporary shelter under control, and security. Whether they stay or return is for the central government to decide later."
 ],
 "sequence": [
  "Allow the injured, women and children across to a secure holding point near the border; send doctors and ambulances at once.",
  "Stop the soldiers at the border; disarm them before they enter, and hold them separately under guard.",
  "Register everyone: names, photographs and biometrics, and screen for any hidden threat.",
  "Provide food, water and shelter, and keep the group from moving into the district.",
  "Send a factual report to the minister, and keep trying to reach the Home Secretary by police wireless or satellite phone; inform the central forces and the Ministry of Home Affairs.",
  "Record every decision and its reasons, and hand over to the competent authority once instructions come."
 ],
 "also": [
  [
   "(b) The ethical and legal dilemmas",
   [
    [
     "Humanitarian duty against the law on entry of foreigners.",
     "Acting without orders against letting people die.",
     "Compassion against security, especially with armed men in the group.",
     "India's relations with the neighbouring government against the plight of its civilians."
    ]
   ]
  ],
  [
   "(d) Extra precautions for the border police with soldiers in uniform",
   [
    [
     "Disarm them at the border, before entry, and store the weapons securely.",
     "Search them and their belongings, and record identities, ranks and units.",
     "Keep them apart from the civilians and from each other if needed, under armed guard.",
     "Treat them humanely, with medical care, and no interrogation beyond what security needs.",
     "Hand them over to the Army or central forces; under international law, a neutral state that admits foreign soldiers must disarm and hold them."
    ]
   ]
  ]
 ],
 "close": "Ashok should save the lives that are in front of him and keep control of the border: aid for the civilians, disarmament and custody for the soldiers, and an immediate, factual report. The larger decision belongs to the central government."
},
"Q114":{
 "t": "Rohit: captured Naxalites and a crowd of women",
 "brief": "SP (Special Operations) Rohit captures about ten hard-core Naxalites with automatic weapons in a village, two of them wanted for a recent ambush on security forces with ₹10 lakh on their heads. More than 500 tribal women surround the village, demanding their release as their \"protectors\", and advance aggressively. Rohit cannot reach his IG because of poor connectivity. If he does not release them, he may have to fire.",
 "conflict": [
  "Holding dangerous criminals against avoiding bloodshed among civilians.",
  "The duty to decide now against the absence of orders.",
  "Firmness against restraint with women protesters.",
  "The success of the operation against the long-term trust of the tribal people."
 ],
 "stake": [
  "The tribal women and their villages",
  "Rohit and his team",
  "The captured Naxalites",
  "Families of the security men killed in the ambush",
  "The police and the state",
  "The wider population in the affected district"
 ],
 "options": [
  [
   "Release the Naxalites",
   "Avoids a clash now.",
   "Frees men who killed security forces, destroys the force's morale and credibility, and invites more such tactics."
  ],
  [
   "Fire on the crowd",
   "Holds the prisoners.",
   "Kills or injures unarmed women; a disaster for the state's legitimacy and a propaganda gift to the Naxalites."
  ],
  [
   "Hold the prisoners, avoid firing, and move them out by the safest route while the crowd is managed with dialogue and minimum force",
   "Keeps both the prisoners and the peace.",
   "Needs quick, calm execution; some risk to the team."
  ],
  [
   "Wait for the IG's instructions",
   "Shares the responsibility.",
   "The situation may spiral while he waits."
  ]
 ],
 "criteria": [
  "Releasing men wanted for killing security forces would be a surrender of the law. Firing on unarmed women would be a far worse wrong, and would lose the people the state is trying to win over. The ethical path keeps the prisoners and avoids bloodshed: move fast, negotiate, and use only the minimum force the law allows, as a last resort."
 ],
 "sequence": [
  "Secure the prisoners and their weapons, and prepare to move them out at once by the safest route, before the crowd arrives.",
  "Use women police officers at the front, and keep male personnel back from the women.",
  "Talk to the crowd: use local leaders, the sarpanch or elders, explain that the men will be dealt with by the courts, and that nobody from the village will be harmed.",
  "Keep trying to reach the IG and call reinforcements by any available means.",
  "Use non-lethal crowd control only if lives are in danger, and firearms only in self-defence as the law strictly allows.",
  "Record everything on video and in writing, and afterwards reach out to the villages to rebuild trust."
 ],
 "also": [
  [
   "(b) The ethical dilemmas Rohit faces",
   [
    [
     "The law and justice for the ambush victims against the lives of the women.",
     "Duty to his team's safety against restraint.",
     "Acting alone against waiting for superiors."
    ]
   ]
  ],
  [
   "(d) Extra precautions with women protesters",
   [
    [
     "Women police to handle women; no physical contact by male personnel.",
     "Minimum force, and no arrest of a woman after sunset and before sunrise except in exceptional cases with a magistrate's permission.",
     "Video recording, and first aid on hand.",
     "Avoid provocation: no abusive language, no display of weapons.",
     "Engage women leaders and self-help groups, before and after."
    ]
   ]
  ]
 ],
 "close": "Rohit should neither release the prisoners nor fire on the women. Moving them out fast, with women officers in front, dialogue and minimum force, keeps the law and keeps faith with the people."
},
"Q206":{
 "t": "The District Magistrate and a transfusion outside the rules",
 "brief": "After a night landslide near Uttarkashi, you, the District Magistrate and an AIIMS-trained doctor, are at the site with doctors, NGOs, police and media. A woman in labour is losing blood and needs a transfusion now. There are a few blood bags and test kits in the ambulance, and team members have volunteered to donate. But blood for transfusion must come from a recognised blood bank. The team is divided; the doctors will help if they are not penalised.",
 "conflict": [
  "Saving a life now against the rule that protects patients from unsafe blood.",
  "A doctor's duty to the patient against legal compliance.",
  "The DM's authority against professional medical judgement.",
  "Protecting the doctors against letting a mother and baby die."
 ],
 "stake": [
  "The woman and her unborn child",
  "Her husband and family",
  "The doctors and the volunteer donors",
  "The DM",
  "Other disaster victims who need the team's attention",
  "The health system and the law"
 ],
 "options": [
  [
   "Refuse the transfusion and wait for evacuation",
   "Follows the rule.",
   "She may bleed to death, and the baby with her."
  ],
  [
   "Evacuate her at once by road or helicopter to a hospital with a blood centre",
   "Safe and lawful if she survives the journey.",
   "May take too long."
  ],
  [
   "Transfuse on the spot, using volunteer blood screened with the kits available, with her consent and under a written order",
   "Can save her life now.",
   "Risk of reaction or infection; breaches the usual rules."
  ],
  [
   "Arrange evacuation at once, and transfuse on the spot only if the doctors judge she will not survive the delay",
   "Takes the lawful route first and the emergency route only if needed.",
   "Needs quick, clear judgement."
  ]
 ],
 "criteria": [
  "The rule on blood banks exists to protect patients from unsafe blood. Here, following it strictly may cause the very death it exists to prevent. The right to life under Article 21, the duty of doctors to give emergency care, and the legal defence of acts done in good faith to save life together support an emergency transfusion as a last resort, with every safeguard possible. The DM should take formal responsibility, so that the doctors can act on medical judgement without fear."
 ],
 "sequence": [
  "Order immediate evacuation by the fastest means available, and alert the nearest hospital with a blood centre.",
  "Ask the doctors to assess whether she can survive the delay.",
  "If she cannot, authorise an emergency transfusion in writing, taking responsibility as DM.",
  "Use the safest blood available: group and cross-match, and screen with the test kits; take informed consent from the woman or her husband.",
  "Record every step, and report the decision to the health authorities afterwards.",
  "Continue the rescue for everyone else, and suggest that disaster teams carry supplies for emergency transfusion in future."
 ],
 "also": [
  [
   "(a) The ethical issues",
   [
    [
     "The right to life against the letter of a safety rule.",
     "The doctors' fear of penalty against their professional duty.",
     "The DM's responsibility for decisions taken in a crisis.",
     "The balance of risk: an unsafe transfusion against certain death."
    ]
   ]
  ]
 ],
 "close": "The DM should take the lawful route first, evacuation, and authorise an emergency transfusion, with every safeguard and in writing, only if the doctors judge that the mother will not survive the wait. The rule protects life; it should not be used to lose one."
},
"Q234":{
 "t": "Migrant workers in the lockdown, and the caring state",
 "brief": "When the Covid lockdown was announced, large numbers of migrant workers set out for their villages. With no transport, fear of hunger and the loss of their jobs, they demanded wages and transport home; some districts failed to arrange food and shelter along the way. You oversaw the District Disaster Relief Force. The question asks about the ethical issues, the idea of a caring state, and what civil society can do.",
 "conflict": [
  "Public health through a lockdown against the livelihoods and dignity of migrant workers.",
  "The state's duty of care against its capacity and preparedness.",
  "The rights of migrants as citizens against the neglect of people who are nobody's voters where they work.",
  "Coordination between states and districts against each looking after its own."
 ],
 "stake": [
  "Migrant workers and their families",
  "Employers in the cities",
  "Source and destination states and districts",
  "Disaster relief forces and the police",
  "Civil society and volunteers",
  "Villages receiving the returning workers"
 ],
 "options": [
  [
   "Stop them from moving, with force if needed",
   "Contains infection.",
   "Leaves them without food or wages, and treats them as a problem, not as citizens."
  ],
  [
   "Let them walk home",
   "Respects their choice.",
   "Exposes them to hunger, heat and accidents on the road."
  ],
  [
   "Provide shelter, food and wages where they are, and organised, safe transport for those who want to go home",
   "Protects health and dignity.",
   "Needs planning, money and coordination."
  ]
 ],
 "criteria": [
  "A lockdown can be justified for public health, but the state that imposes it must also protect those it hurts most. Migrant workers had no savings, no housing security and often no ration card where they worked. The test of a caring state is whether it treats its most vulnerable people as citizens with rights, not as a law-and-order problem."
 ],
 "sequence": [
  "Register migrant workers in the district, with their needs and destinations.",
  "Open shelters with food, water, health checks and sanitation, and keep them humane.",
  "Make sure employers pay wages due, and provide rations regardless of which state issued the ration card.",
  "Arrange free, safe transport home in coordination with source states, with health screening.",
  "Communicate constantly and clearly, in their languages, to reduce fear and rumour.",
  "Prepare for next time: a database of migrant workers, portable benefits and plans for their protection in any emergency."
 ],
 "also": [
  [
   "(a) The ethical issues, and what a caring state means",
   [
    [
     "The issues: dignity of labour, equal citizenship, the right to food and shelter, and the state's accountability for the costs of its own decisions.",
     "A caring state protects the vulnerable before and during a crisis, not only the well-off; it plans for those it cannot see, treats people as ends and not as means, and shares the burden of emergency measures fairly."
    ]
   ]
  ],
  [
   "(b) What civil society can do",
   [
    [
     "Run community kitchens, and distribute food and essentials.",
     "Help with transport, shelters and health camps.",
     "Help migrants register for benefits and reach helplines.",
     "Give legal aid for unpaid wages, and speak for migrants' rights.",
     "Give counselling and emotional support.",
     "Monitor and report gaps, so that the administration can fix them."
    ]
   ]
  ]
 ],
 "close": "The migrant crisis showed that a lockdown without care falls hardest on those with least. A caring state plans for its invisible workers, feeds and shelters them, pays them, and takes them home safely, with civil society helping to fill the gaps."
},
"Q116":{
 "t": "The rescue team attacked by the people it came to help",
 "brief": "You head rescue operations after a severe natural disaster that has left thousands without homes, food or water. Rain and damaged routes have delayed relief. When your team reaches an affected area, angry residents heckle and assault team members, and one is badly injured. Some of the team plead to call off the operation for fear of their lives.",
 "conflict": [
  "The duty to rescue the victims against the safety of your own team.",
  "Understanding the people's anger against protecting the team from violence.",
  "Calling off the operation against continuing it at some risk."
 ],
 "stake": [
  "The disaster victims",
  "Your team, and the injured member",
  "Their families",
  "Local leaders and volunteers",
  "The police and the district administration",
  "The media and the public"
 ],
 "options": [
  [
   "Call off the operation",
   "Protects the team.",
   "Abandons thousands who need help, and deepens their anger."
  ],
  [
   "Carry on as before",
   "Keeps the rescue going.",
   "The team stays exposed, and more violence is possible."
  ],
  [
   "Pause briefly: treat the injured member, secure the team with police support, calm the crowd through local leaders, then resume visibly",
   "Protects the team and continues the rescue.",
   "Needs calm leadership under stress."
  ],
  [
   "Use force against the crowd",
   "Restores control quickly.",
   "Turns victims into enemies, and makes rescue harder."
  ]
 ],
 "criteria": [
  "The anger comes from suffering and delay, not from malice; the victims are still the people the team exists to help. The team's safety matters and must be secured, but withdrawal would punish the many for the acts of a few. The right response keeps the mission and removes the danger."
 ],
 "sequence": [
  "Get immediate medical help for the injured team member, and evacuate him if needed.",
  "Pull the team back briefly to a safe point, and reassure them.",
  "Meet the crowd with local leaders, acknowledge their suffering and anger, and explain the delays honestly.",
  "Bring in police support to protect the team, and involve local volunteers in distribution.",
  "Resume relief with visible priorities: food, water and medical care for the most vulnerable first.",
  "Record the assault and act against the attackers later, through due process."
 ],
 "also": [
  [
   "The qualities a public servant needs here",
   [
    [
     "Courage, to continue under threat.",
     "Empathy and compassion, to see the anger as suffering.",
     "Emotional intelligence and calm, to steady both the team and the crowd.",
     "Leadership, to take responsibility and decide quickly.",
     "Integrity and fairness in distributing relief.",
     "Resilience, and care for the team's welfare."
    ]
   ]
  ]
 ],
 "close": "The leader should neither abandon the victims nor sacrifice the team. Protecting the team, calming the crowd through its own leaders and resuming visible relief is what turns anger back into cooperation."
},
"Q112":{
 "t": "Vijay: a disaster at work and his mother's death at home",
 "brief": "Vijay, Deputy Commissioner of a remote hill district, is running relief after a cloudburst that has killed more than 200 people, injured about 5,000 and cut roads and telephones. His mother in Kerala falls seriously ill and, two days later, dies. His only close relative, an elder sister, lives in the US. Heavy rain resumes and the situation worsens, while messages keep coming from home asking him to come for the last rites.",
 "conflict": [
  "Duty to the district in a disaster against the duty of a son at his mother's death.",
  "His own grief against the calm the crisis demands of him.",
  "Personal presence at the rites against the lives that depend on his decisions."
 ],
 "stake": [
  "The people affected by the disaster",
  "Vijay",
  "His late mother, and his sister and relatives in Kerala",
  "His team and the relief agencies",
  "The state government"
 ],
 "options": [
  [
   "Leave at once for Kerala",
   "Fulfils his duty as a son.",
   "Leaves the district without its head at a critical moment, with rain resuming."
  ],
  [
   "Stay, and let relatives perform the rites",
   "Keeps the district's response steady.",
   "A deep personal loss, and he misses his mother's last rites."
  ],
  [
   "Inform his seniors, ask for a relieving officer, hand over properly, and go as soon as the handover allows, asking the family to wait a day or two",
   "Serves both duties as far as possible.",
   "The family may not be able to wait; the relief may take time."
  ],
  [
   "Take part in the rites by video, and perform the remaining rituals later",
   "Keeps the district covered, and lets him join in some way.",
   "Not the same as being present."
  ]
 ],
 "criteria": [
  "Both duties are real, and no one should expect a son to ignore his mother's death. But a head of district cannot simply leave in the middle of a deepening disaster, because lives depend on the continuity of command. The answer is to secure the public task first, by getting a capable officer in charge, and then go, rather than choosing one duty and abandoning the other."
 ],
 "sequence": [
  "Inform the Divisional Commissioner and the Chief Secretary at once, and request a senior officer to take charge temporarily.",
  "Brief his deputies fully, so that relief continues without a break.",
  "Ask the family and friends in Kerala whether the body can be kept in a mortuary for a day or two, or whether a close relative can begin the rites.",
  "Once the relieving officer is in charge, travel to Kerala for the rites, and return as soon as possible.",
  "If relief cannot be arranged in time, join the rites by video and perform the remaining rituals later, as custom allows.",
  "Accept support from colleagues, and take care of his own grief after the crisis."
 ],
 "also": [
  [
   "(b) The ethical dilemmas",
   [
    [
     "Public duty against filial duty.",
     "Personal grief against professional composure.",
     "The ideal of selfless service against the limits of a human being."
    ]
   ]
  ]
 ],
 "close": "Vijay should neither abandon the district nor deny himself his mother's rites. By securing a proper handover first and going as soon as it is done, he honours both duties as far as a crisis allows."
},
"Q177":{
 "t": "Rashika: a Joint Secretary at 9.30 on a Saturday night",
 "brief": "Rashika, a Joint Secretary, is still at work at 9 pm on Saturday. Her husband travels often; a domestic helper looks after their children, aged 5 and 3. At 9.30 her superior asks for a detailed note for a Ministry meeting, which will take her Sunday. Recently she had to leave her sick child with the nanny. She feels she must draw a line beyond which her personal life comes first.",
 "conflict": [
  "Duty to the job against duty to her children and family.",
  "Dedication and selfless service against reasonable limits to work.",
  "Obedience to a superior's late request against her own well-being.",
  "A culture of long hours against the equal participation of women in senior posts."
 ],
 "stake": [
  "Rashika",
  "Her children and husband",
  "Her superior",
  "Her team",
  "The Ministry and the public it serves",
  "Other women officers, who watch what is expected"
 ],
 "options": [
  [
   "Work on Sunday as asked, again",
   "Meets the demand.",
   "Family and health suffer, and the pattern continues."
  ],
  [
   "Refuse the task",
   "Protects her time.",
   "May leave an important meeting unprepared, and strain relations with her superior."
  ],
  [
   "Clarify the deadline and scope with her superior, delegate parts to her team, and plan so she gives the children part of Sunday",
   "Meets the need and sets a sustainable limit.",
   "Needs a frank conversation and good planning."
  ]
 ],
 "criteria": [
  "Hard work and dedication are real virtues in public service, but they do not require that a person's family and health be sacrificed without limit. The test is whether the task is genuinely urgent, and whether it can be done in a way that respects her other duties. Organisations that expect officers to be always available lose good people, especially women."
 ],
 "sequence": [
  "Ask her superior how detailed the note must be and when it is actually needed.",
  "Delegate the research to her team, and prepare the note herself efficiently.",
  "Arrange childcare for the hours needed, and share the load with her husband where possible.",
  "Protect time with her children, and tell her superior that she will not be reachable after a certain hour except in emergencies.",
  "Over time, plan work so that last-minute demands are fewer, and discuss working norms with her superior."
 ],
 "also": [
  [
   "(a) The ethical issues",
   [
    [
     "Balance between professional duty and family responsibility.",
     "The limits of the work ethic, and the right to rest.",
     "A superior's duty of consideration towards subordinates.",
     "The extra burden that care work places on women in public service."
    ]
   ]
  ],
  [
   "(b) Four laws for a healthy, safe and equal workplace for women",
   [
    [
     "The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013: every workplace with ten or more employees must have an Internal Committee to hear complaints.",
     "The Maternity Benefit Act, 1961, amended in 2017: 26 weeks of paid maternity leave, crèches in establishments with 50 or more employees, and the option to work from home where the work allows.",
     "The Equal Remuneration Act, 1976, now part of the Code on Wages, 2019: equal pay for the same or similar work, and no discrimination in recruitment.",
     "The Factories Act, 1948, now part of the Occupational Safety, Health and Working Conditions Code, 2020: safe conditions, separate facilities and crèches, and night work for women only with their consent and adequate safeguards."
    ]
   ]
  ],
  [
   "(c) Suggestions to ease such working conditions",
   [
    [
     "Better planning of work, and fewer last-minute demands.",
     "Delegation and team capacity, so that no one officer carries everything.",
     "Flexible hours and e-office systems that allow some work from home.",
     "Crèches near offices, and child care leave that officers feel free to use.",
     "A culture where late-night calls are for real emergencies only."
    ]
   ]
  ]
 ],
 "close": "Rashika can meet the Ministry's need without giving up her children's Sunday: by asking what is really needed, delegating and planning. Organisations should make such balance normal, not a private struggle."
},
"Q207":{
 "t": "A bullied son, a viral video and a counter-video",
 "brief": "You hold a responsible post in a ministry. Your 11-year-old son is being bullied in class and on a WhatsApp group. At a sporting event a colleague's son shows you a video caricaturing your son and points out the bullies; you walk past them with your son. The next day a viral video falsely claims that you bullied children on the field. You post a counter-video you took at the event, identifying the likely perpetrators and explaining what happened.",
 "conflict": [
  "Defending your family's name against the restraint expected of a public servant.",
  "Your son's dignity and privacy against publicity for his case.",
  "The truth against identifying other children in public.",
  "Speed on social media against due process through the school and the police."
 ],
 "stake": [
  "Your son",
  "You and your wife",
  "The children who bullied him, and their parents",
  "The school",
  "Your colleagues and department",
  "Social media users who shared the false video"
 ],
 "options": [
  [
   "Stay silent",
   "Avoids escalation.",
   "The false video goes unanswered, and damage to your family's name grows."
  ],
  [
   "Post a counter-video identifying the likely perpetrators",
   "Sets the record straight quickly.",
   "Exposes minors to public shaming, and may break the law on children's privacy; escalates a conflict among children."
  ],
  [
   "Complain to the school and the police's cyber cell, ask the platform to remove the false video, and post a short factual statement without naming any child",
   "Corrects the record through proper channels, and protects every child.",
   "Slower, and less satisfying."
  ]
 ],
 "criteria": [
  "The false video harms your family, and you are entitled to defend your private character; the conduct rules allow that, but require you to report it to your department. But the bullies are children too, and a video identifying them repeats the harm done to your son. The aim should be to protect your son and correct the record, not to win a public fight."
 ],
 "sequence": [
  "Put your son's well-being first: counselling, support at home and a plan with the school.",
  "Report the bullying, and the video, to the school, and ask it to act under its anti-bullying policy.",
  "Complain to the police's cyber cell about the false video, and ask the platform to take it down.",
  "Post, if needed, a brief factual clarification, without naming or showing any child.",
  "Take down the counter-video that identifies the children, and inform your department of the matter."
 ],
 "also": [
  [
   "(a) Ethical issues in the use of social media",
   [
    [
     "Spreading falsehood and defamation at great speed.",
     "Invasion of privacy, especially of children.",
     "Cyberbullying, and the harm it does to mental health.",
     "Mob judgement without facts or due process.",
     "The responsibility of users who share without checking."
    ]
   ]
  ],
  [
   "(b) Pros and cons of using social media to answer the propaganda",
   [
    [
     "Pros: it reaches the same audience quickly, and can correct the record before the false story sets.",
     "Cons: it can escalate the conflict, expose children, and draw a public servant into controversy; it may breach the conduct rules and privacy law."
    ]
   ]
  ]
 ],
 "close": "You were right to want the truth known, but not by exposing other children. Protect your son, correct the record through the school, the police and the platform, and keep any public statement factual and free of names."
},
"Q181":{
 "t": "Pawan: a boss who humiliates him, and a home that suffers",
 "brief": "Pawan, an officer with ten years of service, joins a new office whose head is known as difficult and insensitive. The boss rejects his suggestions, belittles and humiliates him in public, and shouts at him on every pretext, though there are no serious problems with his work. Pawan loses confidence, becomes anxious and angry, and takes it out on his wife and family.",
 "conflict": [
  "Respect for a superior against self-respect and mental health.",
  "Enduring silently against raising the matter.",
  "Pawan's stress at work against his family's peace."
 ],
 "stake": [
  "Pawan",
  "His wife and family",
  "The senior officer",
  "Colleagues in the office",
  "The department"
 ],
 "options": [
  [
   "Endure it silently",
   "Avoids confrontation.",
   "Health and family continue to suffer."
  ],
  [
   "Confront the boss angrily",
   "Releases frustration.",
   "Makes things worse, and may breach the conduct rules."
  ],
  [
   "Speak to the boss privately and calmly, keep a record of incidents, and seek help from a senior officer or grievance channel if it continues",
   "Addresses it directly and fairly.",
   "The boss may not change."
  ],
  [
   "Seek a transfer",
   "Escapes the situation.",
   "May not be possible soon, and leaves the boss's behaviour unchanged for others."
  ],
  [
   "Seek counselling, and work on his own responses",
   "Protects his health and family.",
   "Does not change the boss by itself."
  ]
 ],
 "criteria": [
  "Persistent public humiliation is a form of workplace bullying, and no officer is obliged to accept it. But Pawan's first aim should be to protect his health and family, and to change the situation without making it worse. Emotional intelligence, a clear record, and the proper channels give him the best chance."
 ],
 "sequence": [
  "Recognise the effect on his health and family, and seek counselling or medical help.",
  "Separate work from home: talk honestly with his wife, and take time for exercise, rest and interests.",
  "Request a private meeting with the boss, and calmly say how the public criticism affects his work, asking for feedback in private.",
  "Keep a factual record of incidents.",
  "If it continues, raise it with a higher officer or the grievance mechanism.",
  "Keep his own work of high quality, so that there is no basis for criticism."
 ],
 "also": [
  [
   "Suggestions for both boss and subordinate",
   [
    [
     "For the boss: give feedback in private, recognise good work, manage anger, and seek help for his own stress.",
     "For the subordinate: communicate assertively but respectfully, focus on the work, and use the channels available."
    ]
   ]
  ],
  [
   "Training at various levels in government offices",
   [
    [
     "Emotional intelligence and stress management for all.",
     "Leadership and people management for supervisors.",
     "Anti-bullying policies, and a confidential grievance mechanism.",
     "Mental health awareness and counselling services.",
     "Feedback from subordinates in the appraisal of senior officers."
    ]
   ]
  ]
 ],
 "close": "Pawan should neither suffer in silence nor explode. Protecting his health and family, speaking to the boss calmly, keeping a record, and using the grievance channels if needed is the path to peace at work and at home."
},
"Q178":{
 "t": "Seema: a new architect bullied by a senior near retirement",
 "brief": "You are the new Additional Director General of the Central Public Works Department. The Chief Architect, six months from retirement, sees his legacy in a major project. Seema, a new senior architect trained in the UK, suggests improvements that add value and save time. Feeling threatened, he humiliates her in front of colleagues. She loses confidence, and her peers say she is thinking of resigning.",
 "conflict": [
  "The Chief Architect's experience and legacy against Seema's dignity and contribution.",
  "Completing an important project against an unhealthy working environment.",
  "Respect for seniority against fairness to a newcomer.",
  "Loyalty to a long-serving officer against the duty to stop bullying."
 ],
 "stake": [
  "Seema",
  "The Chief Architect",
  "The project and the public who will use it",
  "Other staff",
  "You, as the head of the division",
  "The department"
 ],
 "options": [
  [
   "Ignore it, since he retires in six months",
   "Avoids conflict.",
   "Seema may resign, the project loses her ideas, and bullying is tolerated."
  ],
  [
   "Move Seema to another project",
   "Removes her from the conflict.",
   "Rewards the bully, and the project loses her contribution."
  ],
  [
   "Talk privately to both, restructure the project so that each contribution is recognised, and warn the Chief Architect that the behaviour must stop",
   "Keeps both on the project and stops the harassment.",
   "Needs tact; he may resent it."
  ],
  [
   "Start formal disciplinary action at once",
   "Signals seriousness.",
   "Heavy-handed as a first step, and may poison the project."
  ]
 ],
 "criteria": [
  "Bullying at work is misconduct, whatever the bully's seniority or achievements. The organisation needs both the Chief Architect's experience and Seema's ideas; the aim is to keep both contributing while stopping the humiliation. Recognition of the senior's legacy can remove the insecurity that drives his behaviour."
 ],
 "sequence": [
  "Meet Seema, assure her of support, and ask her to stay; offer counselling if she wants it.",
  "Meet the Chief Architect privately: acknowledge his contribution and legacy, and make clear that his conduct towards Seema must stop.",
  "Restructure the project: clear roles, and credit recorded for each person's contribution.",
  "Hold joint reviews that you chair, so that discussions are professional.",
  "If the behaviour continues, take formal action under the conduct rules.",
  "After the project, review the culture of the division."
 ],
 "also": [
  [
   "Measures to prevent it happening again",
   [
    [
     "A clear policy against bullying, with a confidential grievance mechanism.",
     "Training for senior officers in leadership and emotional intelligence.",
     "Recognition systems that credit teams and individuals fairly.",
     "Mentoring and support for new joiners."
    ]
   ]
  ]
 ],
 "close": "The ADG should keep both the senior's experience and the newcomer's ideas, by recognising each and stopping the bullying firmly. That completes the project and keeps a talented officer in service."
},
"Q182":{
 "t": "The apparel company that paid a complainant to withdraw",
 "brief": "An apparel company with many women employees hires a marketing executive who quickly raises sales. Unconfirmed reports of sexual harassment follow, and a woman employee files a formal complaint. The company ignores it, so she files an FIR. The company then offers her a large sum to withdraw both, and to state in writing that the executive was not involved.",
 "conflict": [
  "Sales and profit against the safety and dignity of women employees.",
  "The company's reputation against justice for the complainant.",
  "Money against truth and the law.",
  "The complainant's financial need against her right to justice."
 ],
 "stake": [
  "The complainant",
  "The marketing executive",
  "Other women employees",
  "The company's management",
  "The Internal Committee",
  "The police and courts",
  "Customers and the brand"
 ],
 "options": [
  [
   "Accept the money and withdraw",
   "Financial relief and an end to the ordeal.",
   "Justice denied; she would have to sign a false statement; the harasser continues."
  ],
  [
   "Refuse and pursue the FIR",
   "Seeks justice through criminal law.",
   "A long, stressful process."
  ],
  [
   "Complain to the Local Committee, since the company's Internal Committee failed her, and report the company's failure",
   "Uses the POSH Act's remedy, and holds the company to account.",
   "Takes time."
  ],
  [
   "Approach the State Women's Commission, NGOs and legal aid",
   "Brings support and pressure.",
   "Needs follow-up."
  ],
  [
   "Go to the media",
   "Public pressure.",
   "Exposes her privacy, and may affect the case."
  ]
 ],
 "criteria": [
  "Under the POSH Act the company was bound to take her complaint to its Internal Committee. Ignoring it, and then offering money for a withdrawal and a false statement, compounds the wrong; the Act bars a monetary settlement as the basis of conciliation. The complainant is entitled to justice, and a false written statement would harm her and every woman who comes after her."
 ],
 "sequence": [
  "Decline the offer, and keep a record of it.",
  "Continue with the FIR, with a lawyer's help, through legal aid if needed.",
  "Complain to the Local Committee at the district, because the company did not deal with her complaint, and point out the company's failure to comply with the Act.",
  "Seek support from the State Women's Commission and women's organisations.",
  "Ask for protection from retaliation at work while the cases proceed."
 ],
 "also": [
  [
   "(a) The ethical issues",
   [
    [
     "Sexual harassment and the violation of dignity at work.",
     "The company's putting profit above its duty of care.",
     "An attempt to buy silence and a false statement.",
     "Failure to comply with the law on workplace harassment.",
     "The chilling effect on other women employees."
    ]
   ]
  ]
 ],
 "close": "The woman should refuse the money and pursue the complaint through the police and the Local Committee. The company's offer is not a settlement but a second wrong, and the law gives her the means to challenge both."
},
"Q188":{
 "t": "The star performer and the complaint against him",
 "brief": "You are Executive Director of a growing IT company. Mr A, a star who has doubled revenues, is due for promotion, but you hear of his loose comments about women and his indecent messages to the team. One evening Mrs X, a team member, comes to you visibly upset: he has made advances and tried to touch her inappropriately. She hands in her resignation and leaves.",
 "conflict": [
  "A star performer's value against a colleague's dignity and safety.",
  "The company's growth against a safe workplace for women.",
  "Promoting on results against acting on conduct.",
  "A quick resolution against due process."
 ],
 "stake": [
  "Mrs X",
  "Mr A",
  "Other women employees and the team",
  "You and the management",
  "The company's clients and reputation"
 ],
 "options": [
  [
   "Accept the resignation and move on",
   "No disruption to sales.",
   "Illegal inaction; rewards harassment; other women will leave or suffer."
  ],
  [
   "Warn Mr A informally and keep him",
   "Keeps the performer.",
   "Not enough for harassment; the pattern continues."
  ],
  [
   "Dismiss Mr A at once, without inquiry",
   "Decisive.",
   "Unfair without a hearing, and open to legal challenge."
  ],
  [
   "Refer the complaint to the Internal Committee, persuade Mrs X to stay, take interim measures, and put Mr A's promotion on hold pending inquiry",
   "Lawful, fair and protective.",
   "The company may lose a star performer."
  ]
 ],
 "criteria": [
  "Harassment is misconduct whatever the offender's value to the business. The law requires the employer to have an Internal Committee and to act on complaints; the Vishaka guidelines required it even before the POSH Act of 2013. The complainant must be protected, the accused given a fair hearing, and the finding acted on. A promotion for someone facing such a complaint would send the worst possible signal."
 ],
 "sequence": [
  "Do not accept Mrs X's resignation; speak to her, assure her of protection and confidentiality, and ask her to stay.",
  "Refer her complaint to the Internal Committee at once.",
  "Take interim measures: separate reporting lines, or leave for Mr A, as the Committee advises.",
  "Put Mr A's promotion on hold pending the inquiry.",
  "Look into the wider pattern of his messages and comments as a separate matter of conduct.",
  "Act on the Committee's findings, and train all staff on the policy."
 ],
 "close": "The ED should treat the complaint as the law requires, whatever Mr A's sales. Keeping Mrs X, protecting her, and letting the Internal Committee decide is how a growing company keeps both its good name and its good people."
},
"Q254":{
 "t": "Seema: a bribery network behind land-use approvals",
 "brief": "Seema, the new District Collector, finds a large backlog of applications to convert farmland to residential use near a new industrial area. Some applications have been approved out of turn, reportedly for bribes, through touts working with a few subordinate officials. Honest staff are afraid to process files, and the backlog is hurting the local economy. An aggressive investigation risks resistance and a backlash from the unions.",
 "conflict": [
  "Ending corruption against keeping daily administration running.",
  "Speed of action against due process and fairness to the accused.",
  "Stability in the office against the continuing harassment of applicants.",
  "Clearing the backlog quickly against clearing it fairly."
 ],
 "stake": [
  "Farmers and other applicants",
  "Honest employees",
  "The corrupt officials and the touts",
  "Staff unions",
  "Industry and the local economy",
  "The state government and vigilance agencies"
 ],
 "options": [
  [
   "Launch an immediate, aggressive crackdown",
   "Signals zero tolerance.",
   "Risks resistance, a work slowdown, and cases that fail for lack of evidence."
  ],
  [
   "Ignore the network and only push for faster disposal",
   "Avoids conflict.",
   "Rewards the corrupt, leaves applicants harassed, and makes Seema complicit."
  ],
  [
   "Reform the process and build a case quietly, then act",
   "Removes the touts' leverage, clears the backlog fairly, and punishes wrongdoing on evidence.",
   "Takes weeks, and staff must be handled carefully."
  ]
 ],
 "criteria": [
  "The aim is to end the corruption and serve the applicants, not only to punish. **Touts profit from discretion and delay, so a transparent, time-bound process removes their leverage at the source.** Punishment must rest on evidence and due process, or it will fail in court and alienate honest staff. Seema's duty covers both integrity and service delivery."
 ],
 "sequence": [
  "Introduce a first-come, first-served online queue, with the status of every application visible to the public.",
  "Set time limits for each stage, and give written reasons for any rejection.",
  "Hold special camps to clear the backlog in order, with teams of trusted officials.",
  "Rotate the officials on the land-use desks, and keep unauthorised people out of the office.",
  "Gather evidence quietly, and refer it to the Anti-Corruption Bureau for inquiry and traps.",
  "Review the approvals already given out of turn, and act against those found illegal.",
  "Meet staff and union representatives, explain that the target is the network and not honest employees, and protect those who report.",
  "Open a helpline for applicants to report demands for bribes."
 ],
 "also": [
  [
   "(a) The ethical issues",
   [
    [
     "Corruption and abuse of public office.",
     "Unequal treatment of applicants.",
     "Fear among honest staff, and a hostile work culture.",
     "Denial of timely service, and harm to the local economy.",
     "The Collector's duty to act, and the risk of acting unfairly."
    ]
   ]
  ],
  [
   "(b) The recommended option",
   [
    "The third option. The option removes the touts' leverage by changing the system, clears the backlog fairly, and punishes wrongdoers on evidence. **Seema fixes the system, not just the case.**"
   ]
  ]
 ],
 "close": "A bribery network lives on delay and discretion. Seema should take both away with a transparent, time-bound process, and then let evidence, not anger, bring the wrongdoers to account."
},
"Q253":{
 "t": "Ravi: predictive policing and a neighbourhood under watch",
 "brief": "Ravi, Superintendent of Police in a riot-prone district, introduced an AI system that captures biometric data from crowds and predicts crime. The system has flagged an immigrant, low-income neighbourhood. Patrols, preventive detentions and checkpoints focused there have improved public order. Community leaders and rights activists say the system learns from biased historical data, that the surveillance has created fear, and that residents do not know what data is held against their names.",
 "conflict": [
  "Public order and crime prevention against privacy and equal treatment.",
  "The speed of data-driven policing against the bias built into its data.",
  "Secrecy for operational reasons against openness to the people affected.",
  "Results now against lasting trust between the police and the community."
 ],
 "stake": [
  "Residents of the flagged neighbourhood",
  "Victims of crime and the wider public",
  "Police officers on the ground",
  "Community leaders and rights activists",
  "The company that supplied the system",
  "Courts and oversight bodies"
 ],
 "options": [
  [
   "Continue as before",
   "Keeps the visible gains in public order.",
   "Entrenches bias, deepens fear, and risks unlawful detentions and legal challenge."
  ],
  [
   "Switch the system off",
   "Removes the harm at once.",
   "Loses a useful tool, and the gains may be reversed."
  ],
  [
   "Pause the targeting, audit the system, and resume only with safeguards",
   "Keeps what works and corrects what does not.",
   "Takes time and effort, and needs support from above."
  ]
 ],
 "criteria": [
  "Policing must be lawful, fair and accountable. The Puttaswamy judgment of 2017 requires any intrusion on privacy to have a basis in law and to be necessary and proportionate. **Capturing biometric data from crowds without a clear law fails the first test.** A system trained on past arrests learns where police patrolled, not only where crime happened, so it sends police back to the same people. Detentions and checkpoints based on a machine's label, without suspicion of an individual, treat a whole neighbourhood as suspect."
 ],
 "sequence": [
  "Stop preventive detentions and checkpoints based only on the system's output, and require evidence against an individual.",
  "Commission an independent audit of the data and the model for bias, with outside experts and community observers.",
  "Check the legal basis for biometric capture, and limit collection to what the law allows.",
  "Tell residents what data is held, how it is used, and how to correct it or complain.",
  "Keep a named officer answerable for every decision the system informs.",
  "Build community policing: meet residents, appoint local liaison volunteers, and tackle drug trafficking with their help.",
  "Report the findings to superiors, and publish a summary."
 ],
 "also": [
  [
   "(a) Ethical issues, including biases, in AI-driven policing",
   [
    [
     "Historical bias: the data reflects past policing, not only crime.",
     "Feedback loops: more patrols record more crime in the same area, which brings more patrols.",
     "Profiling of immigrants and the poor, against equality before the law under Article 14.",
     "Privacy and consent in capturing biometric data.",
     "Opacity: residents cannot see or contest the data held on them.",
     "Automation bias: officers trusting the output without their own judgment.",
     "Accountability: nobody answers for a wrong label."
    ]
   ]
  ],
  [
   "(b) The action that best complies with ethics",
   [
    "The third option. The option keeps the legitimate aim of preventing crime, removes the unlawful and unfair uses, and rebuilds trust. **Technology should inform police judgment, not replace it.**"
   ]
  ]
 ],
 "close": "Order that rests on suspicion of a whole neighbourhood does not last. Ravi should keep the tool, correct its bias, put the law and a named officer in charge of every decision it informs, and earn the neighbourhood's trust."
},
"Q144":{
 "t": "MGNREGA: a predecessor's mismanaged programme",
 "brief": "As Administrator in charge of a district, you monitor MGNREGA works by gram panchayats and give technical sanction to them. In one panchayat you find that under your predecessor wages did not reach real job-seekers, muster rolls were not kept, payments did not match work, fictitious people were paid, job cards were issued without need, funds were siphoned off, and approved works never existed.",
 "conflict": [
  "The rural poor's legal right to work and wages against a system captured by fraud.",
  "Acting against a predecessor and local interests against leaving the rot alone.",
  "Punishing the guilty against keeping work and wages flowing to genuine workers.",
  "Speed of correction against due process."
 ],
 "stake": [
  "Genuine job-seekers and rural households",
  "The gram panchayat and its functionaries",
  "Your predecessor and the officials involved",
  "Contractors and middlemen",
  "The gram sabha",
  "The state and central governments, and taxpayers"
 ],
 "options": [
  [
   "Leave the past alone and run it properly from now",
   "Avoids conflict.",
   "The siphoned money is never recovered, and the guilty go free."
  ],
  [
   "Suspend the programme in the panchayat until the inquiry ends",
   "Stops the leakage.",
   "Denies genuine workers their legal right to work."
  ],
  [
   "Keep work going for genuine workers, while auditing, recovering, prosecuting and redesigning the process",
   "Protects the poor and ends the fraud.",
   "Needs sustained effort and firm backing."
  ]
 ],
 "criteria": [
  "MGNREGA gives rural households a legal right to work, so the programme cannot simply be stopped. But every rupee siphoned off is taken from the poor. The response must keep work and wages flowing to genuine workers, recover what was stolen, punish the guilty through due process, and change the process so that the same fraud cannot recur."
 ],
 "sequence": [
  "Order a special audit, and a social audit by the gram sabha, of all works and payments.",
  "Physically verify every approved work, and every job card, with the gram sabha; cancel fictitious cards.",
  "Recover siphoned funds, register FIRs where fraud is found, and start disciplinary action against the officials involved.",
  "Keep work open for genuine job-seekers, and pay any wages due to them.",
  "Require muster rolls to be kept at the worksite, attendance recorded digitally, and assets geo-tagged before and after the work.",
  "Pay wages only directly into workers' bank accounts, and give technical sanction only after site inspection.",
  "Display works, wages and payments publicly at the panchayat, and set up a grievance mechanism and an ombudsperson."
 ],
 "also": [
  [
   "Remedies, issue by issue",
   [
    [
     "Money not paid to job-seekers: direct bank transfers, and a check of pending wages.",
     "Muster rolls not kept: worksite muster rolls and digital attendance.",
     "Work and payment not matching: measurement by engineers, and geo-tagged photos.",
     "Payments to fictitious people: verification of job cards and bank accounts.",
     "Job cards issued without need: verification of every card by the gram sabha.",
     "Siphoning of funds: audit, recovery and prosecution.",
     "Works that never existed: physical verification, and geo-tagging before sanction."
    ]
   ]
  ]
 ],
 "close": "The Administrator should keep the right to work alive while clearing out the fraud. Audit, recovery and prosecution deal with the past; direct payment, digital records and social audit make sure it does not come back."
},
"Q148":{
 "t": "Integrity in the civil services, and the honest mistake",
 "brief": "The question has two parts. First, suggest institutional measures to anticipate threats to integrity, strengthen civil servants' ethical competence, and build processes that promote ethical values. Second, honest officers are sometimes prosecuted, even jailed, for decisions taken in good faith that later went wrong: how does this affect the civil service, and how can honest officers be protected?",
 "conflict": [
  "Accountability for public decisions against freedom to take them in good faith.",
  "Punishing corruption against punishing honest error.",
  "Controls against speed and initiative."
 ],
 "stake": [
  "Civil servants, honest and corrupt",
  "Citizens who depend on decisions being taken",
  "Investigating agencies and courts",
  "The government",
  "Investors and institutions that need decisions"
 ],
 "options": [
  [
   "Treat every loss as a possible crime",
   "Strict accountability.",
   "Officers stop deciding; files move upward, and nothing happens."
  ],
  [
   "Grant officers broad immunity",
   "Encourages initiative.",
   "Shields the corrupt."
  ],
  [
   "Separate honest from corrupt decisions through clear processes, recorded reasons and safeguards before prosecution",
   "Protects the honest, and still catches the corrupt.",
   "Needs careful design and discipline."
  ]
 ],
 "criteria": [
  "A civil service that fears prosecution for honest error becomes timid, and timidity costs the public more than the occasional wrong decision. But protection must not become impunity. The test is intent and process: a decision taken in good faith, on the record, following due process, should be protected even if it goes wrong."
 ],
 "sequence": [
  "Anticipate threats: identify high-risk posts and processes, rotate officers, and use data to spot red flags.",
  "Build ethical competence: training in ethical reasoning with case studies, mentoring, and a code of ethics, not only a code of conduct.",
  "Build ethical processes: e-governance, transparent rules, time limits, recorded reasons, and disclosure of conflicts of interest.",
  "Protect honest decisions: prior approval before any inquiry into official decisions, as Section 17A of the Prevention of Corruption Act now requires, and sanction before prosecution.",
  "Make vigilance inquiries time-bound, and give officers legal support when they are sued for official acts.",
  "Protect whistleblowers, and reward integrity in appraisals."
 ],
 "also": [
  [
   "How the trend affects the civil service",
   [
    [
     "Officers avoid decisions, and refer everything upward.",
     "Delays in projects and services, and \"policy paralysis\".",
     "Loss of morale, and honest officers leave or keep their heads down.",
     "Talented people are deterred from joining."
    ]
   ]
  ]
 ],
 "close": "Integrity is built by institutions, not only by individuals. Clear processes, training and transparency guard against corruption; safeguards before prosecution protect the honest mistake, so that officers can decide."
},
"Q054":{
 "t": "Four common arguments against ethical conduct",
 "brief": "An honest civil servant often hears four claims: that ethical conduct brings trouble for oneself and one's family while unfair means advance careers; that a small ethical minority makes no difference when many use unfair means; that ethics gets in the way of development; and that giving and accepting small gifts makes the system more efficient. The question asks for the merits and demerits of each.",
 "conflict": [
  "Personal and family security against integrity.",
  "The pull of the majority against individual conscience.",
  "Speed of development against means that are fair.",
  "Everyday convenience against the rule of law."
 ],
 "stake": [
  "The civil servant and his family",
  "Citizens who depend on honest administration",
  "Honest colleagues",
  "The system and its credibility"
 ],
 "options": [
  [
   "Accept the claims, and adapt",
   "Easier career, less friction.",
   "Corruption spreads, and the officer becomes part of it."
  ],
  [
   "Reject them outright, without acknowledging their force",
   "Principled.",
   "Ignores real costs, and persuades nobody."
  ],
  [
   "Grant each its grain of truth, and show why it fails",
   "Honest and convincing.",
   "Needs careful argument."
  ]
 ],
 "criteria": [
  "Each claim contains something true: honesty can have costs, one person alone cannot change everything, and processes can be slow. But each draws the wrong conclusion. The test is what the world would look like if everyone acted on the claim, and whose interests the claim really serves."
 ],
 "sequence": [
  "Claim (a): ethics brings trouble. Merit: honest officers do face transfers and pressure. Demerit: unfair means bring greater risks, of exposure, prosecution and loss of self-respect; and integrity earns trust that protects an officer over a career.",
  "Claim (b): a minority makes no difference. Merit: one person cannot change a system alone. Demerit: every system that changed began with a few who refused; each honest act protects someone, and sets an example.",
  "Claim (c): ethics hampers development. Merit: some procedures are slow. Demerit: corruption raises costs, lowers quality and diverts resources; development built on unfair means is fragile and unjust.",
  "Claim (d): small gifts make the system efficient. Merit: they may speed up one transaction. Demerit: they create an expectation, penalise those who cannot pay, and grow into large corruption; efficiency should come from better processes.",
  "Conclusion: hold to ethical conduct, while working to fix the slow processes that make the arguments tempting."
 ],
 "close": "The four claims mistake short-term convenience for sense. Integrity has costs, but corruption costs far more, to the officer, to the poor and to the country."
},
"Q149":{
 "t": "The PIO and RTI applications filed for profit or extortion",
 "brief": "As a Public Information Officer, you see that some applicants file RTI applications on behalf of others who want information for their own interests, and some so-called activists file applications routinely to extort money from decision-makers. This harms administration and the genuine applicants who seek justice. What measures would you suggest to separate genuine applications from others, and what are their merits and demerits?",
 "conflict": [
  "The citizen's right to information without giving reasons against misuse for private gain or extortion.",
  "Transparency against the smooth functioning of administration.",
  "Protecting officials from harassment against suspicion of genuine applicants."
 ],
 "stake": [
  "Genuine applicants",
  "Applicants with private motives",
  "Officials targeted by extortion",
  "PIOs and the department",
  "The Information Commissions",
  "The public"
 ],
 "options": [
  [
   "Screen applications by motive",
   "Filters out misuse.",
   "Unlawful: the RTI Act does not require applicants to give reasons, and screening by motive would gut the right."
  ],
  [
   "Refuse repeated or voluminous requests arbitrarily",
   "Reduces burden.",
   "Unlawful, and invites penalties and appeals."
  ],
  [
   "Reduce the value of misuse: disclose more proactively, publish replies, use the Act's own exemptions properly, and treat extortion as a crime",
   "Protects the right and blunts the misuse.",
   "Needs effort and discipline."
  ]
 ],
 "criteria": [
  "The RTI Act deliberately does not ask applicants why they want information; that is its strength, and it cannot be undone by the PIO. The right answer is not to separate \"genuine\" from \"non-genuine\" by motive, but to make misuse pointless and to deal with crime as crime."
 ],
 "sequence": [
  "Disclose proactively under Section 4 everything that is routinely asked for, so that it cannot be used as leverage.",
  "Publish RTI replies online, so that information sought for private advantage becomes public for everyone.",
  "Apply the Act's exemptions correctly, such as those for commercial confidence and personal information, and record reasons.",
  "Where a request would disproportionately divert resources, give the information in another form, as the Act allows.",
  "Treat attempts at extortion as criminal offences, and report them to the police.",
  "Train PIOs, and keep a record of patterns of misuse for the Information Commission's guidance."
 ],
 "also": [
  [
   "Merits and demerits of these measures",
   [
    [
     "Proactive disclosure: cuts repeat requests and misuse, though it needs effort to keep up to date.",
     "Publishing replies: removes the value of secret information, though personal information must be protected.",
     "Proper use of exemptions: lawful and consistent, though it needs trained PIOs.",
     "Treating extortion as crime: protects officials, though it depends on the police acting."
    ]
   ]
  ]
 ],
 "close": "The PIO should protect the right to information as it stands and defeat its misuse by making information public and by treating extortion as the crime it is, not by questioning applicants' motives."
},
"Q211":{
 "t": "The illegal floors and the collapsed building",
 "brief": "A building approved for three floors is being illegally extended to six when it collapses, killing labourers, including women and children, who were migrants from different places. The government announces cash relief and arrests the builder. The question asks why such incidents happen across the country, and how to prevent them.",
 "conflict": [
  "The builder's profit against the safety of workers and future residents.",
  "Speedy construction against enforcement of building rules.",
  "Cash relief after the event against prevention before it.",
  "The vulnerability of migrant workers against their right to a safe workplace."
 ],
 "stake": [
  "The dead and injured labourers, and their families",
  "The builder",
  "Municipal and building officials",
  "Future buyers and residents",
  "Neighbours",
  "The government"
 ],
 "options": [
  [
   "Relief and arrest after each collapse",
   "Visible response.",
   "Does nothing to prevent the next one."
  ],
  [
   "Stricter rules on paper",
   "Looks firm.",
   "Rules are already there; the failure is enforcement."
  ],
  [
   "Fix enforcement, accountability and workers' safety together",
   "Prevents collapses.",
   "Needs sustained effort, and resistance from vested interests."
  ]
 ],
 "criteria": [
  "Collapses like this are rarely accidents. They come from greed, corruption in approvals and inspection, and the invisibility of migrant workers. Prevention means making illegal construction costly and visible before it kills, and making sure every worker on a site is registered and protected."
 ],
 "sequence": [
  "Hold the builder, the officials who allowed the illegal floors and the structural engineer criminally and departmentally liable.",
  "Require independent structural certification at key stages, with geo-tagged inspection records.",
  "Display approved plans at every site, and let citizens report violations through an app.",
  "Register all construction workers with the welfare board under the Building and Other Construction Workers Act, with safety gear and insurance.",
  "Enforce the real estate law and building bye-laws, with regular audits of the enforcement agencies.",
  "Pay compensation to the victims' families promptly, recovered from the builder."
 ],
 "also": [
  [
   "Why such incidents keep happening",
   [
    [
     "Greed: extra floors mean extra profit.",
     "Corruption and collusion in approvals and inspections.",
     "Poor-quality materials and unqualified supervision.",
     "Weak enforcement, and political protection for builders.",
     "Migrant workers who are unregistered, unaware of their rights, and easy to exploit.",
     "A culture of relief after the event instead of prevention."
    ]
   ]
  ]
 ],
 "close": "Relief and arrests after a collapse are not enough. Prevention needs accountable officials, independent certification, visible plans and registered, protected workers, so that illegal floors are stopped before they fall."
},
"Q150":{
 "t": "Saraswati's school and the maze of permissions",
 "brief": "Saraswati returned from a successful IT career in the US to build, with friends and through an NGO, a school giving good modern education to a poor rural community at a nominal cost. She met confusing rules, many agencies, delays, callous officials and constant demands for bribes. Such experiences deter others from social work. Some government control of voluntary work is necessary; how can it be exercised without coercion or corruption?",
 "conflict": [
  "Government oversight against the freedom of voluntary organisations.",
  "Accountability for public safety and funds against red tape.",
  "Honest NGOs against officials who extract bribes.",
  "Protecting children and funds against deterring good work."
 ],
 "stake": [
  "Saraswati and her NGO",
  "The rural children and their families",
  "Regulating departments and officials",
  "Other NGOs, genuine and not",
  "The public, and donors"
 ],
 "options": [
  [
   "Remove most controls",
   "Encourages social work.",
   "Opens the door to fraud and unsafe institutions."
  ],
  [
   "Keep controls as they are",
   "Keeps oversight.",
   "Continues delay and corruption, and deters the honest."
  ],
  [
   "Simplify and digitise controls, with time limits and accountability for officials",
   "Keeps oversight and removes the chance for bribes.",
   "Needs administrative reform and political will."
  ]
 ],
 "criteria": [
  "Control is justified where it protects children, public safety and funds; it is not justified as a source of power or bribes. The test of good regulation is whether an honest applicant can comply quickly and without meeting an official who can demand a bribe."
 ],
 "sequence": [
  "Create a single-window online system for all permissions, with clear checklists and time limits.",
  "Allow self-certification for low-risk matters, with random inspections.",
  "Put the approval of services under a right-to-services law, with penalties for officials who delay without reason.",
  "Register NGOs on a common portal, with their accounts and activities public.",
  "Provide a grievance and anti-corruption channel, and act on complaints of bribe demands.",
  "Recognise and support NGOs with a good record, for example through faster approvals."
 ],
 "close": "The state should regulate NGOs through simple, digital, time-bound rules that honest people can meet easily, and hold its own officials accountable, so that control protects the public without choking good work."
},
"Q170":{
 "t": "The Rampur school plot on a fort",
 "brief": "Your senior officer at state headquarters asks you to check the papers for a school to be built on a plot in Rampur village, and to arrange his site visit with the chief engineer and senior architect. The file, from before your time, shows land bought cheaply from the panchayat, and two of three clearances; the architect's is missing. On the site you find the plot is part of Thakurgarh Fort, far from the village, costly to develop, and a heritage question. The Sarpanch at the time was your predecessor's relative.",
 "conflict": [
  "Arranging the visit as asked against reporting what the file hides.",
  "Loyalty to a predecessor against exposing a possibly corrupt deal.",
  "The children's convenience and safety against a decision already on paper.",
  "Heritage protection against building on the site."
 ],
 "stake": [
  "The village children and their parents",
  "The panchayat",
  "Your predecessor and the former Sarpanch",
  "Your senior officer, the chief engineer and the architect",
  "The heritage of the fort, and the state archaeology department",
  "Taxpayers"
 ],
 "options": [
  [
   "Await the senior's visit and let him decide",
   "Leaves the decision to him.",
   "He arrives unprepared; you have failed to report what you know."
  ],
  [
   "Seek his advice by phone or in writing",
   "Informs him.",
   "A phone call leaves no record; a partial account may mislead."
  ],
  [
   "Consult your predecessor and colleagues first",
   "Gathers background.",
   "The predecessor has a possible interest, and may influence the account."
  ],
  [
   "Find out whether an alternative plot can be obtained in exchange, and send a comprehensive written report",
   "Gives the senior the facts and a solution before the visit.",
   "Takes some time and effort."
  ],
  [
   "Another option: also refer the heritage question to the archaeology department, and recommend an inquiry into the acquisition",
   "Protects the fort and fixes accountability.",
   "May upset the predecessor's supporters."
  ]
 ],
 "criteria": [
  "Your duty is to give your senior officer the full facts before he decides. The school should be where it serves the children, at a reasonable cost, without harming a heritage site. The circumstances of the acquisition suggest a vested interest, which should be examined by due process, not assumed."
 ],
 "sequence": [
  "Record what you found at the site: the fort, the distance from the village, the cost of development, and the missing certification.",
  "Identify possible alternative plots near the village, with the panchayat.",
  "Send a comprehensive written report to your senior officer before his visit, with the facts, the alternatives and a recommendation.",
  "Suggest that the state archaeology department examine the fort's status.",
  "Recommend an inquiry into the original acquisition, stating the facts about the Sarpanch's relationship without accusing anyone.",
  "Arrange the visit so that the senior sees both the fort site and the alternatives."
 ],
 "also": [
  [
   "(a) The likely vested interests",
   [
    [
     "The predecessor, who may have favoured his relative, the Sarpanch.",
     "The former Sarpanch and others who may have gained from the land deal.",
     "Contractors who would gain from high development charges on a difficult site.",
     "People who hold land near the village, which would rise in value if the village area were kept free for housing.",
     "Officials who certified the site without proper examination."
    ]
   ]
  ]
 ],
 "close": "You should not let the senior walk into a flawed decision. A full written report with alternatives, and a referral of the heritage question and the acquisition, puts the children's school in the right place and the facts on record."
},
"Q055":{
 "t": "A friend's case for \"practical\" ethics",
 "brief": "A close friend, also preparing for the civil services, argues: sticking to ethics in an unethical environment harms your career and family, so take the path of least resistance; a small ethical minority makes no difference; fussiness about ethics will slow economic progress; and small favours and gifts increase motivation and efficiency. The question asks you to analyse these views critically and advise your friend.",
 "conflict": [
  "Career and family comfort against integrity.",
  "The pull of the majority against individual conscience.",
  "Economic progress against honest means.",
  "Small conveniences against the rule of law."
 ],
 "stake": [
  "Your friend, and his future family",
  "The citizens he would serve",
  "The civil service",
  "Honest colleagues",
  "You, as the friend giving advice"
 ],
 "options": [
  [
   "Agree with him, as being realistic",
   "Keeps the friendship easy.",
   "Encourages a future officer to accept corruption."
  ],
  [
   "Condemn him",
   "Principled.",
   "Unlikely to persuade him."
  ],
  [
   "Acknowledge his fears, answer each argument, and show him a practical, honest path",
   "Honest and helpful.",
   "Needs patience."
  ]
 ],
 "criteria": [
  "His fears are real and should be taken seriously, but each argument fails on examination. The test is what the civil service, and the country, would look like if every officer followed his advice, and what kind of person he wants to be."
 ],
 "sequence": [
  "On career and family: integrity has costs, but so does corruption, and its costs (exposure, prosecution, loss of self-respect) are worse. Honest officers also earn trust and protection over time.",
  "On the minority: every change starts with a few; each honest decision helps real people, and honest officers support one another.",
  "On economic progress: corruption raises costs, lowers quality and scares off honest investment; clean governance is good economics.",
  "On small favours: they create expectations, penalise the poor, and grow into big corruption; efficiency comes from better systems, not gifts.",
  "My advice: stay ethical, but be wise about it. Choose your battles, keep records, use the proper channels, build allies, and work to fix the slow systems that make shortcuts tempting."
 ],
 "close": "I would tell my friend that integrity is not naivety. It has costs, but it is the only foundation on which a civil servant can serve the public and live with himself."
},
"Q219":{
 "t": "Forest land for housing the homeless",
 "brief": "To fulfil its duty under the Directive Principles to provide shelter, a district administration proposes housing for the homeless and economically weaker sections on forest land. The land is an ecologically sensitive zone with old trees, medicinal plants and rich biodiversity; it regulates climate and rainfall, prevents erosion, and supports tribal and nomadic communities. The administration argues that housing is a priority for human rights, and that clearing the forest will also curb anti-social elements.",
 "conflict": [
  "The right to shelter against the right to a healthy environment.",
  "The needs of the homeless now against ecological damage that may be irreversible.",
  "Housing one vulnerable group against the livelihoods of another: tribal and nomadic forest users.",
  "Quick action against considering alternatives."
 ],
 "stake": [
  "The homeless and economically weaker families",
  "Tribal and nomadic communities who depend on the forest",
  "The wider district, whose climate and water the forest protects",
  "Wildlife and biodiversity",
  "The administration, forest department and courts",
  "Future generations"
 ],
 "options": [
  [
   "Clear the forest and build",
   "Houses the homeless quickly.",
   "Irreversible ecological loss; harms tribal and nomadic users; likely legal challenge."
  ],
  [
   "Drop the housing plan",
   "Saves the forest.",
   "Leaves the homeless without shelter."
  ],
  [
   "Find other land and methods for housing, and protect the forest",
   "Serves both goals.",
   "Takes more effort and possibly more money."
  ]
 ],
 "criteria": [
  "Both shelter and a healthy environment are part of the right to life under Article 21, and the state must protect the environment under Article 48A. Irreversible harm to a sensitive ecosystem needs the strongest justification, and cannot be justified while alternatives exist. The forest's users have rights under the Forest Rights Act that require the gram sabha's consent. \"Curbing anti-social elements\" is a matter for policing, not a reason to clear a forest."
 ],
 "sequence": [
  "Identify alternative land: vacant government land, underused public sites, and brownfield land.",
  "Use land efficiently: multi-storey housing, rental housing, and upgrading of existing settlements.",
  "Use housing schemes and partnerships with builders for affordable units.",
  "If any forest land is truly unavoidable, use only degraded patches, with forest clearance, the gram sabha's consent and compensatory afforestation.",
  "Protect the forest's users: recognise their rights, and involve them in its management.",
  "Deal with anti-social elements through policing and community watch."
 ],
 "also": [
  [
   "(a) Can deforestation be justified for housing?",
   [
    [
     "Not in an ecologically sensitive old-growth forest when other land exists. Shelter is urgent, but the forest's services, and the rights of those who depend on it, cannot be replaced, while housing sites can be found elsewhere."
    ]
   ]
  ],
  [
   "(b) The challenges in reconciling conservation with humane development",
   [
    [
     "Socio-economic: scarcity of urban land, and poverty on both sides of the choice.",
     "Administrative: coordination between departments, and legal clearances.",
     "Ethical: weighing present needs against future generations, and one vulnerable group against another."
    ]
   ]
  ]
 ],
 "close": "Housing the homeless is a duty, but it should not be done by destroying a forest that others depend on and that cannot be replaced. The administration should find other land and better designs, and keep the forest for the district's future."
},
"Q224":{
 "t": "A new plant in quiet Vikaspuri",
 "brief": "ABC Ltd, a large transnational company, plans a new energy-efficient plant in underdeveloped Vikaspuri, in line with government policy and a five-year tax holiday. Residents fear higher living costs, an influx of outsiders and disruption of their social and economic life. Despite the company's promises of CSR, protests begin, and some residents go to court after the government does not respond.",
 "conflict": [
  "Development and jobs against the residents' way of life.",
  "The company's profit and the government's growth goals against local consent.",
  "CSR promises against a genuine voice for residents.",
  "Economic change against social stability."
 ],
 "stake": [
  "Residents of Vikaspuri",
  "ABC Ltd and its shareholders",
  "Workers who will come to the region",
  "The state government",
  "Local businesses",
  "The courts, and civil society"
 ],
 "options": [
  [
   "Push ahead, relying on the government's support",
   "Fast.",
   "Conflict, litigation and lasting resentment."
  ],
  [
   "Abandon the plant",
   "Avoids conflict.",
   "The region loses jobs and investment it may need."
  ],
  [
   "Redesign with residents: consultation, local hiring and skills, shared benefits and safeguards",
   "Development with consent.",
   "Slower, and costs the company more."
  ]
 ],
 "criteria": [
  "Development that the local people do not accept is neither just nor durable. The company's goals are legitimate, but its licence to operate depends on addressing residents' real fears, not only on legal clearances and CSR promises. The government has a duty to listen, not just to attract investment."
 ],
 "sequence": [
  "Hold genuine public consultations, and publish a social and environmental impact assessment.",
  "Commit to local hiring, with skill training for residents before the plant opens.",
  "Plan the town's growth with the government: housing, water, schools and services, so that costs of living do not overwhelm residents.",
  "Design CSR with residents, through a community committee, around their priorities.",
  "Set up a grievance mechanism and independent monitoring.",
  "Share benefits: local procurement, support for local businesses, and community infrastructure."
 ],
 "also": [
  [
   "(a) The issues involved",
   [
    [
     "Lack of consultation and consent.",
     "Rising costs of living, and pressure on services.",
     "Social change from migration.",
     "Tax incentives benefiting the company while locals bear the costs.",
     "The government's failure to respond to the residents' concerns."
    ]
   ]
  ]
 ],
 "close": "The plant can come to Vikaspuri, but only with Vikaspuri. Consultation, local jobs, planned growth and benefits shared with residents turn a disputed project into a shared one."
},
"Q226":{
 "t": "A better compensation and rehabilitation policy for displaced people",
 "brief": "Land for mines, dams and large projects is taken mostly from Adivasis, hill dwellers and rural communities. Cash compensation is often late and cannot sustain families, who lack skills for other work and end up as poorly paid migrants. The benefits go to industry and cities while the costs fall on the poor. You are asked to draft a better compensation and rehabilitation policy.",
 "conflict": [
  "National development against the rights of those displaced.",
  "One-time cash against a lasting livelihood.",
  "Speed of projects against consent and fairness.",
  "Benefits to the many against the costs imposed on the few."
 ],
 "stake": [
  "Displaced families, especially Adivasis, women and the landless",
  "Host communities where people are resettled",
  "Project developers and industry",
  "The state and its agencies",
  "Urban beneficiaries of the projects"
 ],
 "options": [
  [
   "Cash compensation only, as now",
   "Simple and quick.",
   "Families are impoverished, and resentment and resistance grow."
  ],
  [
   "Halt such projects",
   "Protects communities.",
   "Development and national needs suffer."
  ],
  [
   "A rights-based policy: consent, land and livelihood, a share of benefits, and resettlement as communities",
   "Just, and makes projects more acceptable.",
   "Costs more, and takes longer."
  ]
 ],
 "criteria": [
  "Those who give up their land and way of life for the nation's benefit must end up better off, not worse. The Right to Fair Compensation and Transparency in Land Acquisition, Rehabilitation and Resettlement Act, 2013 provides a base: social impact assessment, consent, higher compensation and rehabilitation entitlements. A good policy builds on it."
 ],
 "sequence": [
  "Minimise displacement: choose sites and designs that avoid it, and assess social impact before any decision.",
  "Seek the free and informed consent of affected communities, and of the gram sabha in Scheduled Areas.",
  "Give land for land where possible, and houses in a resettlement site planned with the community.",
  "Replace livelihoods: skill training, jobs in the project, an annuity or a share in its revenue.",
  "Pay compensation fully and before displacement, and cover the landless and those who depend on common land and forests.",
  "Monitor independently, with a grievance mechanism and a time limit for delivery of every entitlement."
 ],
 "also": [
  [
   "The main elements of the policy",
   [
    [
     "Consent and participation at every stage.",
     "Land-for-land and livelihood, not cash alone.",
     "A share in the project's benefits, such as a portion of revenue or royalties for the local community.",
     "Special care for women, the landless and Adivasis, and protection of cultural and religious sites.",
     "Resettlement as whole communities, with schools, health and water.",
     "Independent monitoring and quick redress."
    ]
   ]
  ]
 ],
 "close": "Displacement should not be the price the poor pay for others' development. A policy built on consent, livelihood, shared benefits and resettlement as communities makes those who give up their land partners in the project."
},
"Q227":{
 "t": "Development against the environment: strategies for sustainable development",
 "brief": "Economic development is pursued everywhere, and so is concern about the environmental damage it causes. Development cannot be stopped, and degradation cannot continue, as it threatens survival. The question asks for feasible strategies to remove the conflict and achieve sustainable development.",
 "conflict": [
  "Economic growth against environmental quality.",
  "Present needs against future generations.",
  "Developing countries' need to grow against a global duty to protect the environment.",
  "Business profit against costs borne by the public."
 ],
 "stake": [
  "Citizens, now and in the future",
  "Industry and investors",
  "Governments",
  "Communities that depend directly on natural resources",
  "The ecosystem itself"
 ],
 "options": [
  [
   "Growth first, clean up later",
   "Faster growth now.",
   "Damage that may be irreversible, and higher costs later."
  ],
  [
   "Environment first, growth restricted",
   "Protects nature.",
   "Poverty persists, and support for protection weakens."
  ],
  [
   "Build environmental costs into development decisions, so growth and protection go together",
   "Sustainable.",
   "Needs planning, investment and changes in behaviour."
  ]
 ],
 "criteria": [
  "The conflict is not permanent: most of it comes from not counting environmental costs. Once pollution and resource loss are priced and planned for, many choices that looked like a trade-off turn out to have a better path. Irreversible harm needs the strongest caution."
 ],
 "sequence": [
  "Assess projects and policies for their environmental impact, at the level of the whole plan as well as each project.",
  "Price pollution and resource use, on the principle that the polluter pays.",
  "Invest in clean energy, efficient technology and public transport.",
  "Promote a circular economy: reduce, reuse and recycle materials.",
  "Protect ecologically sensitive areas, and restore degraded land and water.",
  "Involve local communities in managing forests, water and land.",
  "Encourage sustainable lifestyles, as India's Mission LiFE urges."
 ],
 "close": "Development and the environment conflict only when the environment is left off the account. Counting its costs, investing in clean technology and involving communities makes growth and protection partners."
},
"Q237":{
 "t": "Rural migration to towns and cities",
 "brief": "Migration from villages to towns and cities is rising sharply, creating serious problems in both. The question asks for the socio-economic, emotional and attitudinal factors behind it; why educated rural youth move to cities, why the landless poor move to urban slums, and why even some farmers sell their land for petty urban jobs; and for feasible steps to control it.",
 "conflict": [
  "The individual's right to seek a better life against the strain on cities and the decline of villages.",
  "Urban growth against rural development.",
  "Aspiration against the reality of slums and insecure work."
 ],
 "stake": [
  "Rural youth, the landless and farmers",
  "Their families left behind",
  "Cities and their residents",
  "Employers",
  "Rural and urban governments"
 ],
 "options": [
  [
   "Restrict migration",
   "Eases pressure on cities.",
   "Infringes the freedom to move and work, and does not remove the causes."
  ],
  [
   "Leave it to the market",
   "No intervention.",
   "Slums grow, villages decline, and migrants remain insecure."
  ],
  [
   "Make villages worth staying in, and make cities fair to those who come",
   "Addresses causes, and protects migrants.",
   "Long-term and needs investment."
  ]
 ],
 "criteria": [
  "Migration is a right, and often a sensible choice. The problem is distress migration: people leaving because villages offer no future, and arriving in cities that offer them no security. The aim should be to make migration a choice, not a compulsion, and to protect migrants where they go."
 ],
 "sequence": [
  "Create rural jobs: agro-processing, rural industries, and services, with credit and infrastructure.",
  "Make farming viable: irrigation, fair prices, crop insurance and market access.",
  "Bring urban amenities to rural areas: roads, internet, health and good schools.",
  "Train rural youth in skills linked to local and regional jobs.",
  "Guarantee work through MGNREGA, and support the landless with land, housing and credit.",
  "In cities, register migrants, make their benefits portable, and provide affordable housing."
 ],
 "also": [
  [
   "The factors behind migration",
   [
    [
     "Socio-economic: low farm incomes, small holdings, lack of rural jobs and services, and debt.",
     "Emotional and attitudinal: the lure of city life, low status of farming, aspirations raised by education and media, and escape from caste discrimination in villages."
    ]
   ]
  ],
  [
   "Why each group moves",
   [
    [
     "(a) Educated rural youth: no jobs that match their education in villages, and the prestige of urban work.",
     "(b) The landless poor: no land, little work, and hope of daily wages in cities, even in slums.",
     "(c) Farmers selling land: farming no longer pays, rising land prices near cities, and the pull of a steady cash income."
    ]
   ]
  ]
 ],
 "close": "Migration cannot and should not be stopped, but distress migration can be reduced. Rural jobs, viable farming and good services make villages worth staying in; fair treatment in cities makes migration safe for those who choose it."
},
"Q252":{
 "t": "Lata: a hysterectomy without her consent",
 "brief": "Lata consented to a diagnostic laparoscopy for acute abdominal pain. During the procedure, Dr. Mansi found a tumour in her uterus that could be malignant. Instead of taking a biopsy, she removed the uterus on the written consent of Lata's sister-in-law, Sujatha, to spare Lata a second operation. Lata feels betrayed. The police and Sujatha defend the doctor's good intention, and Lata has decided to go to court.",
 "conflict": [
  "The patient's control over her own body against the doctor's judgment of her good.",
  "Sparing a second operation against waiting for the patient's own decision.",
  "A relative's consent against the patient's consent.",
  "Good intention against the rules of informed consent.",
  "Support for the doctor from the police and family against the patient's right to seek redress."
 ],
 "stake": [
  "Lata, and her ability to decide about her own body",
  "Dr. Mansi and her surgical team",
  "Sujatha and Lata's family",
  "The hospital",
  "The police and the court",
  "The medical profession and future patients"
 ],
 "options": [
  [
   "Remove the uterus on the relative's consent, as was done",
   "Spares Lata a second operation if the tumour is malignant.",
   "Removes an organ, and her ability to bear children, without her consent. The operation may prove unnecessary if the tumour is benign."
  ],
  [
   "Take a biopsy, close, and let Lata decide once she is awake",
   "Respects her consent, and the decision rests on a confirmed diagnosis.",
   "She may need a second operation if the tumour is malignant."
  ],
  [
   "Remove the uterus only if waiting would put her life in immediate danger",
   "Acts only in a genuine emergency.",
   "Needs a clear clinical judgment, recorded with reasons."
  ]
 ],
 "criteria": [
  "A competent adult must consent to each major procedure. **Consent to a diagnostic laparoscopy is not consent to a hysterectomy.** The Supreme Court said so in Samira Kohli v Prabha Manchanda in 2008. A relative may decide only when the patient cannot, and when delay would threaten life or cause serious harm. Here there was no emergency, and Lata could have decided the next day. The cost of a second operation was real, but it was Lata's cost to weigh, not the doctor's or Sujatha's."
 ],
 "sequence": [
  "In the theatre: take a biopsy, record the finding, and close.",
  "After recovery: explain the findings, the options and their risks to Lata herself, and give her time to decide.",
  "Before any procedure: discuss findings that could arise, and record what the patient agrees to if they do.",
  "Now: acknowledge the error honestly, apologise, and support Lata's treatment and counselling.",
  "The hospital: review its consent procedures, and train staff on the limits of consent by a relative.",
  "The police: record the complaint and leave the judgment to the court, instead of pressing Lata to drop it."
 ],
 "also": [
  [
   "(a) The ethical issues",
   [
    [
     "Informed consent and the right to decide about one's own body.",
     "Paternalism: the doctor put her judgment in place of the patient's.",
     "Consent by a relative, used when the patient could have decided later.",
     "The loss of the ability to bear children, a harm that cannot be undone.",
     "Gender: a decision about a woman's body taken by others.",
     "The police discouraging a complaint instead of recording it."
    ]
   ]
  ],
  [
   "(b) The doctor's moral conduct",
   [
    "Dr. Mansi meant well. She wanted to spare Lata the risk and pain of another operation. **Good intention does not make the act right.** She acted without a genuine emergency, relied on a relative instead of the patient, and removed an organ on a diagnosis that was not yet confirmed. Her motive was beneficent, but her method was paternalistic, and it failed the duty to respect the patient's choice. Her responsibility now is to own the decision, not to defend it."
   ]
  ]
 ],
 "close": "A doctor's skill gives her the power to decide, but not the right to decide for a patient who can decide for herself. Except in a real emergency, the choice about Lata's body was Lata's."
}
};
