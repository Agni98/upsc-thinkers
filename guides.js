/* =====================================================================
   MODEL PARAGRAPHS AS REVISION GUIDES
   ---------------------------------------------------------------------
   Each model paragraph in answers.js can carry a guide, shown in its place
   in the Essay Theme Map. Keyed by the theme's title; the list follows the
   theme's paragraphs in order, with null where a paragraph has no guide.
   A guide has six parts:
     intro, claim            the opening problem and the central claim
     problem, distinction    1. the moral problem, and one useful distinction
     thinkers, together      2. [name, subtitle, paragraphs, when to use]
     examples                3. [title, paragraphs, what the example tests]
     topics                  4. [past topic id, paragraphs]: each served topic developed
     models                  5. [lead, text]: five short paragraphs for answers
     steps, formula          6. how to build the answer, and a conclusion formula
   Edit this file directly.
   ===================================================================== */
const GUIDES = {
 "Ends, Means and the Ethics of Decision": [
  {
   "thinkers": [
    [
     "Gandhi",
     "the means give shape to the end",
     [
      "Gandhi rejects the idea that a good result can be separated from the path used to reach it. His image of means and ends as seed and tree makes the point memorable: what is planted places limits on what can grow. An unjust method may deliver a short-term victory, but it cannot be assumed to produce a just settlement. The character of the means is already present in the result.",
      "This is why non-violence is a principle for Gandhi rather than a tactic to be abandoned when it becomes inconvenient. Satyagraha seeks to convert the opponent through voluntary self-suffering, not simply to defeat or humiliate them. Its conception of victory keeps open the possibility that the opponent may later remain a fellow citizen. That concern is invisible to a theory that counts only the outcome and not the relationship created by the action."
     ],
     "an answer needs to show how coercive or unjust means can corrupt the promised end, or why preserving the possibility of reconciliation matters."
    ],
    [
     "Machiavelli",
     "responsibility includes the cost of inaction",
     [
      "Machiavelli offers the strongest challenge to easy moral condemnation of political action. Writing in a period marked by instability and foreign invasion, he asks what a ruler must actually do to preserve the state. Political action, in this tradition, is judged by its consequences rather than by the standards of private morality alone.",
      "The point is not simply that cruelty can be useful. The harder question is whether a leader who insists on keeping their own hands clean may be making the public pay for that personal comfort. A public decision-maker has obligations to people exposed to danger; declining to act is itself a choice with consequences. This perspective makes responsibility more demanding, not less: it requires the decision-maker to own both the harm caused by intervention and the harm allowed by refusal."
     ],
     "the case involves public safety, state survival or a serious risk that an apparently pure refusal will shift danger onto others."
    ],
    [
     "Kautilya",
     "order the options before using force",
     [
      "Kautilya gives practical form to restraint. In the Arthashastra, the four approaches to an adversary are conciliation, inducement, division and force. Force comes last. This sequence does not deny that force may sometimes be used; it insists that the decision-maker consider less destructive instruments first.",
      "The sequence also clarifies why subduing an opponent without fighting need not be sentimental or passive. It can be better statecraft: force is costly, and its results are less reliable. A graduated approach gives persuasion and other options a chance to work before violence narrows the possibilities and raises the price of failure."
     ],
     "the question asks how to respond to an adversary, how to calibrate a response, or why restraint can be strategically intelligent."
    ],
    [
     "Kant",
     "people may never be reduced to instruments",
     [
      "Kant supplies a boundary for consequential reasoning: treat humanity always as an end and never merely as a means. A person is not just an obstacle, a statistic or a tool for producing a desirable social outcome. This principle is especially important when the state uses coercive power, imposes burdens on civilians, or asks a vulnerable group to bear the cost of a policy made by others.",
      "Kant’s test does not by itself settle every hard case, but it prevents urgency from turning people into expendable material. It asks whether those affected are treated as persons with dignity, rather than as objects to be managed for someone else’s benefit."
     ],
     "the proposed method risks bypassing consent, proof, due process or the basic dignity of those affected."
    ]
   ],
   "examples": [
    [
     "Deterrence and the threat never carried out",
     [
      "India’s nuclear doctrine, adopted by the Cabinet Committee on Security in January 2003, rests on credible minimum deterrence and no first use. Nuclear weapons would be used only in retaliation against a nuclear attack on Indian territory or on Indian forces, and the retaliation would be massive, designed to inflict unacceptable damage. The doctrine also reserves a nuclear response to a major chemical or biological attack.",
      "The ethical difficulty lies in the gap between use and intention. Deterrence works only if a threat is believed; it is believed only if the state is genuinely prepared to do what would be monstrous to do. The weapon may never be used, but its credibility depends on a sincere intention to use it under specified conditions. A threat nobody would carry out deters nobody."
     ],
     "Can a state ethically rely on a threat of catastrophic force to prevent its use? Consider the lives protected by deterrence alongside the nature of the act that must remain credible."
    ],
    [
     "Surgical strikes and force as a signal",
     [
      "After the Uri attack of 18 September 2016, in which 19 soldiers were killed, Indian special forces struck launch pads across the Line of Control on 29 September. After the Pulwama bombing of 14 February 2019, which killed 40 CRPF personnel, the Air Force struck a camp at Balakot on 26 February. The Foreign Secretary described the second action as a non-military pre-emptive action.",
      "The language of a calibrated response matters because, in both cases, the stated objective was not territory or attrition. Force was used to communicate that a threshold had moved. Yet a signal is not ethically weightless: its meaning depends on how the other side reads it, and its consequences can exceed the sender’s intention. When force is used to signal, proportionality becomes harder to assess and escalation harder to control."
     ],
     "Can limited force communicate resolve without becoming an end in itself? Examine the intended message, the likely interpretation, proportionality and the risk that escalation will escape control."
    ],
    [
     "Sanctions and the burden shifted to civilians",
     [
      "Sanctions promise pressure without bloodshed, but the people who bear the pressure may not be the people who made the policy being punished. The United Nations imposed comprehensive sanctions on Iraq through Resolution 661 in August 1990. Their humanitarian consequences were severe enough that the Security Council set up an oil-for-food programme, which began operating in December 1996, to relieve them. That programme was itself criticised for delays, reparation deductions and politically motivated holds on contracts. The episode helped drive a later shift towards targeted sanctions on named individuals, assets and specific sectors.",
      "The ethical issue is a transfer of harm. A measure presented as an alternative to war may impose war-like costs on civilians while leaving the targeted leadership comparatively untouched. The label “non-military” does not answer the moral question; the distribution of burdens does."
     ],
     "Who is actually pressured, and who pays? A policy should be judged by its real effects on civilians as well as by its stated target and purpose."
    ],
    [
     "Encounter killings, preventive detention and the demand for proof",
     [
      "In PUCL v State of Maharashtra (2014), the Supreme Court examined 99 encounters in which Mumbai police had killed 135 people between 1995 and 1997. It laid down sixteen guidelines for investigating deaths in police encounters. These guidelines carry the force of law under Article 141 and require independent investigation rather than simple acceptance of a claim of self-defence.",
      "Preventive detention raises a parallel concern. Under the National Security Act 1980, a person may be detained for up to twelve months. Detention beyond three months needs the opinion of an Advisory Board of three High Court judges, and the detained person has no right to a lawyer before that Board. In both settings, the state may invoke a lawful end while using a route that limits ordinary proof and process.",
      "The ethical issue is not resolved by invoking security. If coercive power is necessary, independent scrutiny and procedural safeguards become more important, because the person affected may have little power to challenge the state’s account. A lawful purpose cannot make accountability optional."
     ],
     "Does the procedure make it possible to distinguish a genuine necessity from an unsupported assertion? Ask what independent review, proof and remedy are available to the person affected."
    ],
    [
     "Smallpox and the hardest counter-case",
     [
      "The strongest counter-case is one in which the outcome is so grave and irreversible that ordinary objections can appear small. In 1974, Bihar and Uttar Pradesh together accounted for roughly three-quarters of the world’s smallpox cases. The campaign that ended the disease, culminating in Operation Smallpox Zero in 1975, worked by searching out every case and containing it.",
      "The final stages involved intimidation and coercion. Historian Paul Greenough documented people being tracked down and vaccinated against their will. India’s last indigenous case was in May 1975; the disease was declared eradicated worldwide in 1980. The achievement was extraordinary, but the means had a cost: Greenough argues that the resentment created may have damaged trust in later vaccination campaigns.",
      "This case should not be used to wave away coercion, nor should the coercion erase the scale of the public-health success. It forces a harder judgment: when the threatened harm is immense and irreversible, how far may authority go, what limits should remain, and how should the damage to trust be acknowledged and repaired?"
     ],
     "A grave end can weigh heavily without making the means disappear. Recognise the scale of the achievement, name the coercion plainly, and account for its lasting effect on trust."
    ]
   ],
   "topics": [
    [
     "2025A2",
     [
      "To subdue an enemy without fighting is often the highest form of victory because it secures the objective without making destruction the measure of success. Kautilya’s sequence of conciliation, inducement, division and force places coercion at the end of the process. The sequence is practical: force is expensive, its outcome uncertain, and the hostility it creates may outlast the immediate contest. Gandhi takes the idea further by asking what kind of relationship survives the victory. Satyagraha seeks to change the opponent through voluntary self-suffering, leaving open the possibility of future coexistence.",
      "Yet restraint is not automatically virtuous if it simply allows a serious threat to continue. Machiavelli reminds the decision-maker that refusing to act also has consequences, often borne by the public rather than by the person who claims moral purity. The real test is therefore whether non-violent or less destructive means can achieve a legitimate end, and whether the alternative is genuinely safer for those at risk. Even a threat that is never carried out, as in deterrence, depends on an intention that must itself be ethically examined.",
      "The best victory is not merely one in which no battle occurs. It is one in which the objective is secured with the least avoidable harm, without humiliating or instrumentalising people, and without creating a more dangerous conflict in the process. Force may remain a last resort, but its necessity must be shown rather than assumed."
     ]
    ],
    [
     "2022B4",
     [
      "The presence of options can create an illusion of freedom: choose the least bad one and call the decision ethical. But a choice set may be badly framed. If every option requires avoidable harm, the first task is not to rank them quickly; it is to ask whether the range of choices can be widened. Can the parties be heard? Can the timing, sequence or scale of action change? Is there a route that preserves the legitimate objective while reducing the burden on those with the least power?",
      "This does not mean that a decision-maker can wait indefinitely for a perfect option. Machiavelli’s challenge remains: delay and refusal also distribute risk. Kautilya offers a way to widen the response before force is chosen, while Gandhi insists that the route matters to the kind of settlement produced. Kant sets a boundary: even a compelling outcome cannot make it acceptable to treat people merely as instruments.",
      "When no option is wholly right, the responsible course is to test necessity, compare action with inaction, seek less harmful alternatives, protect those most exposed, and explain the moral remainder honestly. A hard choice may still have to be made. But difficulty is not proof that the first available framing is the only one."
     ]
    ]
   ],
   "intro": [
    "Political and administrative decisions rarely offer a clean choice between good and evil. They ask us to pursue security, justice or welfare through means that may themselves impose harm. Refusing to act can also injure people, while acting without restraint can destroy the very values the decision was meant to protect. The ethical task is therefore not to choose between ends and means as if one could be ignored. It is to judge both, and to remain answerable for the cost of the choice."
   ],
   "claim": "A worthy end does not make every method worthy. Means shape the result, the people who bear its costs, and the trust and relationships left behind. But moral restraint must also face the consequences of inaction. A defensible decision seeks the legitimate end through the least harmful means that can actually work, while preserving human dignity and accountability.",
   "problem": [
    "The familiar question, “Can the end justify the means?”, can make ethics sound like a contest between idealism and practicality. That framing is too narrow. A method is not a neutral bridge to a result: it can determine who is harmed, whether consent is respected, whether power is controlled, and what kind of political or social order follows. At the same time, a decision-maker cannot treat inaction as morally invisible. If a serious and preventable harm continues because no one was willing to take responsibility, restraint may have protected the decision-maker more than the people at risk.",
    "A sound judgment therefore asks two questions together: Is the purpose legitimate? And can the method be defended to those who bear its costs? Urgency and scale matter, but they do not erase the personhood of individuals. Nor should concern for procedure become an excuse to ignore the foreseeable harm of doing nothing. The answer is rarely a slogan. It is a reasoned account of purpose, necessity, alternatives, proportionality, safeguards and residual cost."
   ],
   "distinction": [
    "A useful distinction",
    "Effectiveness asks whether a method can achieve the intended result. Ethical justification asks whether it should be used, given its burdens, alternatives and effects on human beings. Neither question can replace the other."
   ],
   "thinkersTitle": "Four thinkers, four tests of judgment",
   "together": [
    "Putting the four together",
    "Gandhi asks what kind of end the means can produce. Machiavelli asks who will suffer if responsible action is refused. Kautilya asks whether force is truly the last available instrument. Kant asks whether people are being treated as ends in themselves. Together, these tests encourage moral seriousness without pretending that difficult choices are simple."
   ],
   "examplesIntro": "The examples below show how the same ethical tension appears in security, diplomacy, public health and law. They are most useful when the answer explains the tension rather than merely naming an event.",
   "models": [
    [
     "Means shape the end.",
     "Gandhi’s seed-and-tree analogy challenges the belief that a good outcome can cleanse any method. Means affect not only whether the result is achieved but also who is harmed and what relationship remains afterwards. Yet refusing to act may also expose others to preventable harm. Ethical judgment must therefore examine the route and the consequences of both action and inaction."
    ],
    [
     "Restraint can be strategic.",
     "Kautilya’s progression from conciliation and inducement to division and only then force gives restraint a practical logic. It preserves less destructive options and recognises that force is costly and uncertain. Victory without fighting is not weakness when it achieves a legitimate objective while keeping future coexistence possible."
    ],
    [
     "Public duty includes difficult consequences.",
     "Machiavelli asks whether a leader who insists on personal moral purity may be making the public bear the cost. Inaction is not neutral when danger continues. But public necessity cannot become a blank cheque: Kant’s principle requires that persons remain ends in themselves, even when collective welfare is at stake."
    ],
    [
     "Deterrence carries an ethical burden.",
     "A threat can prevent conflict only when it is credible, yet credibility may rest on a willingness to carry out an act of immense harm. The fact that the weapon remains unused does not dissolve the moral problem; it shifts the question to what the state intends and asks others to believe."
    ],
    [
     "Outcomes do not erase costs.",
     "The smallpox campaign shows why a grave, irreversible threat can make coercive measures appear compelling. But the achievement does not make intimidation disappear, just as coercion does not erase the scale of eradication. A balanced answer recognises both the result and the cost to trust."
    ]
   ],
   "steps": [
    [
     "Diagnose the conflict.",
     "Name the legitimate end and the moral difficulty in the means; do not begin with a generic list of values."
    ],
    [
     "Identify who is affected.",
     "Include direct targets, civilians, vulnerable groups and people who may bear the consequences of inaction."
    ],
    [
     "Test necessity and proportionality.",
     "Is the harm being addressed serious and urgent? Is the proposed response limited to what the purpose requires?"
    ],
    [
     "Widen the choice set.",
     "Consider persuasion, conciliation, inducement, calibrated or targeted measures, and safeguards before treating force or coercion as inevitable."
    ],
    [
     "Compare action with inaction.",
     "Ask who will face the risk if the decision-maker refuses or delays, and whether delay itself remains defensible."
    ],
    [
     "Protect dignity and process.",
     "Preserve proof, independent scrutiny, review and a meaningful remedy wherever coercive power is used."
    ],
    [
     "Own the residual cost.",
     "State what cannot be made harmless, how that burden will be limited, and what accountability follows."
    ]
   ],
   "stepsIntro": "Use the following sequence to move from a broad ethical theme to a reasoned conclusion. It works for essay questions and for case studies where the decision-maker faces competing duties.",
   "formula": "Pursue the legitimate end; choose the least harmful means capable of achieving it; preserve human dignity and independent accountability; and be candid about the harm that remains. If every option appears wrong, examine whether the choice itself can be widened before accepting the least bad route."
  },
  null,
  null,
  null,
  null
 ]
};
