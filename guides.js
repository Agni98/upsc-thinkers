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
  {
   "thinkers": [
    [
     "Mill",
     "harm can be done by doing nothing",
     [
      "Mill is usually quoted for what his harm principle restrains, but he was just as clear about something else. A person can cause harm to others by inaction as well as by action, and can rightly be held accountable for both. Mill’s point removes a comfortable assumption, which is that an official who does nothing has not acted.",
      "A file that is not moved, a licence that is not decided and a warning that is not issued all have consequences. The consequences fall on somebody. The question therefore turns the question from “what did the official do?” to “what did the official allow?”, and the second question often reveals more."
     ],
     "the question treats inaction as neutral, or an official’s silence or delay has foreseeable victims."
    ],
    [
     "Bentham",
     "omission enters the same account as action",
     [
      "Bentham makes the same point through arithmetic. In his felicific calculus, the pleasure and pain produced by an omission are counted in exactly the same way as those produced by an act. A decision not to act is therefore not outside the moral account. The omission simply appears in a different column.",
      "The practical consequence is sobering. Refusing to decide is itself a decision, and its costs fall on someone other than the person refusing. An honest comparison must weigh the harms of waiting on the same scale as the harms of acting, instead of treating the second as risky and the first as safe."
     ],
     "an answer needs to compare the costs of acting and of not acting on the same scale, rather than presuming that waiting costs nothing."
    ],
    [
     "Arendt",
     "thoughtlessness permits harm",
     [
      "Arendt takes the argument to its strongest form. What struck her about Adolf Eichmann at his trial in Jerusalem was not that he was a monster but that he was thoughtless. He processed, complied and never asked what he was actually doing. Evil, on this account, is permitted more often than it is chosen.",
      "For this reason Arendt treated the capacity to think as a moral capacity and not only an intellectual one. An administrator who never pauses to ask what a routine achieves, or whom it harms, has handed judgement over to procedure. The danger is not dramatic wickedness but a steady absence of reflection in which harm accumulates without anyone intending it."
     ],
     "the case involves routine compliance, processing without reflection, or harm that no single person intended but many allowed."
    ],
    [
     "Simon",
     "certainty never arrives",
     [
      "Simon supplies the correction that stops this argument from becoming a demand for constant heroism. Real decision-makers work under bounded rationality. They have incomplete information, limited time and limited capacity to process what they do have, so they satisfice: they accept an option that clears a reasonable threshold rather than waiting for the best possible one.",
      "Simon’s point has an institutional edge. An organisation that punishes every imperfect decision teaches its officers that doing nothing is the only safe option. Delay then becomes rational for the individual and harmful for the public. If waiting for certainty means waiting for ever, the ethical demand is for a timely, reasonable decision, not a perfect one."
     ],
     "an answer must defend a timely but imperfect decision, or explain the institutional causes of avoidance."
    ],
    [
     "Weber",
     "own the foreseeable consequences",
     [
      "Weber names the disposition that should replace both drift and bravado. In his lecture “Politics as a Vocation” in 1919, he contrasted an ethic of conviction, which asks whether the act is right in itself, with an ethic of responsibility, which judges a decision by its foreseeable consequences.",
      "The ethic of responsibility includes the consequences the decision-maker would prefer not to foresee. The ethic of responsibility applies to waiting as much as to acting: a person who delays must answer for what the delay predictably produces. Weber does not make the decision easier. He makes it impossible to escape by pretending that nothing was decided."
     ],
     "the decision-maker must own the consequences, including unwelcome ones, of both acting and waiting."
    ]
   ],
   "examples": [
    [
     "Pendency in courts and tribunals",
     [
      "Justice can be denied not only through a wrong decision but also through the failure to decide in time. As of December 2025, over 4.84 crore cases were pending in District and Subordinate Courts, more than 63 lakh in High Courts and around 90,900 in the Supreme Court. Many concern compensation, property, employment, pensions and other basic rights. The sharpest form of the cost falls on undertrial prisoners, who make up about three-quarters of India’s prison population according to the National Crime Records Bureau.",
      "The ethical issue is that delay is not the absence of action. A person may eventually receive a favourable judgment, but after waiting for years the relief may have lost much of its value. The burden of the system’s limits is carried by those with the least ability to wait."
     ],
     "Is a delayed decision a neutral pause or a transfer of cost? Ask who waits, what the wait costs them, and who is answerable for it."
    ],
    [
     "Regulatory forbearance in banking",
     [
      "During India’s banking stress, regulatory forbearance allowed banks to postpone recognising some restructured loans as non-performing assets. The Economic Survey noted that this encouraged banks to restructure even unviable loans and in effect to hide stress in their balance sheets. By the time forbearance ended in 2015, restructuring had increased sevenfold and NPAs had nearly doubled compared with the levels before forbearance. The Reserve Bank’s Asset Quality Review was meant to bring the hidden stress into the open, and the clean-up that followed required large recapitalisation of public sector banks from public funds.",
      "The ethical issue is the difference between patience and concealment. Postponing an unpleasant decision provided temporary relief, but it allowed the underlying problem to grow, and the eventual cost fell on taxpayers who had no part in the postponement."
     ],
     "When does patience become concealment? Separate a delay that buys time to fix a problem from one that only hides it while it grows."
    ],
    [
     "The precautionary principle and waiting as protection",
     [
      "Delay is not always a failure of decision-making. In Vellore Citizens’ Welfare Forum v Union of India (1996), the Supreme Court adopted the precautionary principle. Where there is a threat of serious or irreversible environmental damage, lack of scientific certainty should not be used as a reason to postpone preventive measures. The Court also placed the burden of proof on the developer to show that an activity is environmentally benign.",
      "The ethical point runs in the opposite direction from the previous examples. A project with uncertain but potentially permanent consequences may need closer assessment before approval, and here the responsible decision can be to wait. What distinguishes this waiting from drift is that it is deliberate, reasoned and aimed at preventing harm rather than avoiding responsibility."
     ],
     "Is the delay protecting people from irreversible harm, or protecting the decision-maker from criticism? Look at the reversibility of the harm and the reasons recorded for waiting."
    ],
    [
     "Honest decisions and the fear of investigation",
     [
      "Too much fear of being wrong can itself produce paralysis. Officials may hesitate to take bona fide decisions if a decision made today could later become the basis of a corruption case. The 2018 amendment to the Prevention of Corruption Act inserted Section 17A. The section requires prior approval before any inquiry or investigation into a public servant’s recommendation or decision taken in the discharge of official functions, subject to specified exceptions.",
      "The ethical tension is between two protections. The provision shields genuine decision-making from harassment, but a shield can also become a screen. The larger lesson is institutional: when every imperfect decision appears personally risky, officials will prefer to postpone decisions altogether, and the public pays for their caution."
     ],
     "Does the system make honest decisions safe and dishonest ones answerable? Ask whether protection for officials is paired with scrutiny of outcomes."
    ],
    [
     "Climate policy and the cost that arrives later",
     [
      "Climate change shows a distinctive structure: the cost of action is immediate and visible, while the cost of inaction is delayed and diffuse. The World Bank notes that the cost of climate impacts is rising and that early resilience-building is more cost-effective than waiting for worse impacts to arrive. India’s updated commitments of 2022 aim to reduce the emissions intensity of GDP by 45 percent from 2005 levels and to reach about half of installed power capacity from non-fossil sources by 2030, with net zero by 2070.",
      "The ethical issue is intergenerational. The people who will bear the largest cost of delay are not yet voters, and some are not yet born. A decision not to act today quietly increases the cost of action tomorrow, and shifts it onto people who cannot object."
     ],
     "When the cost of acting is visible now and the cost of waiting falls later, which claim is stronger? Consider who bears the delayed cost and whether they have any voice."
    ]
   ],
   "topics": [
    [
     "2026B3",
     [
      "Shelving a hard decision looks like caution, but it is usually a choice to let someone else bear the cost. Mill and Bentham remove the pretence that inaction is neutral: an omission produces consequences as surely as an act, and those consequences are counted in the same account. The pensioner whose file waits, the litigant whose case is adjourned and the depositor whose bank’s losses are hidden are all affected by a decision that nobody admits to having taken. Arendt adds the harder point that harm is often permitted rather than chosen, through routines in which nobody stops to think.",
      "Yet it would be too simple to say that every delay is unethical. Simon reminds us that information is always incomplete, and precaution sometimes requires waiting, as the precautionary principle recognises for irreversible environmental harm. The real distinction is between a considered decision to wait, which has reasons, a timetable and an owner, and a drift that nobody chose and nobody will answer for.",
      "Shelving is the least ethical course because it combines the costs of a decision with the absence of responsibility for it. A wrong decision can be reviewed, appealed and corrected. A decision that was never taken leaves nothing to review and no one to hold answerable. Weber’s ethic of responsibility asks the decision-maker to own the foreseeable consequences of whatever is chosen, and shelving is an attempt to escape that ownership."
     ]
    ],
    [
     "2025B1",
     [
      "There are situations in which leaving things alone is the wisest course. A heated dispute may cool if it is not inflamed by premature intervention. A market may correct itself after a panic. An uncertain scientific question may become clearer with time. The precautionary principle even makes waiting a duty where action threatens irreversible harm. In such cases, patience is not negligence but judgment.",
      "The difficulty is that the same image can excuse drift. Muddy water clears when the mud settles by itself. The water does not clear while something is still stirring it. Banking forbearance was defended as patience while unviable loans were quietly restructured and hidden, and the eventual clean-up cost far more than early recognition would have. Court pendency is sometimes described as due process while the people waiting lose the value of the relief they seek.",
      "The ethical test is therefore to ask why the water is muddy. If the disturbance has stopped and time will settle it, restraint is wise. If the cause is continuing, whether a harm, a conflict or an institutional failure, then leaving it alone allows the damage to spread. Wise waiting has a reason, a watch and a date. Negligent waiting has only an excuse."
     ]
    ],
    [
     "2024B4",
     [
      "A wrong decision has a visible cost, which is one reason decision-makers fear it more than delay. But doing nothing also has a cost, often larger, spread over more people and harder to see. Bentham’s calculus counts omission and action on the same scale, and Simon explains that because certainty never arrives, waiting for it is itself a choice. Climate policy shows the pattern clearly: the cost of acting is visible now, while the cost of waiting accumulates until it can no longer be avoided.",
      "Being wrong has another advantage over doing nothing: it can be discovered and corrected. A decision that is taken, recorded and reviewed produces information. A decision that is avoided produces none. Drucker’s advice to state in advance what would count as being wrong makes error part of learning rather than a source of shame. Institutions that protect honest decisions, as Section 17A of the Prevention of Corruption Act attempts to do, make it possible for officers to accept this risk.",
      "The claim has limits, and a strong answer states them. Where an error would be irreversible, as with an unsafe structure or a potentially permanent environmental harm, the cost of being wrong can exceed the cost of waiting, and precaution becomes the responsible course. The principle is therefore not “act rather than wait” but “compare both costs honestly”: when errors are correctable and delay is costly, a timely imperfect decision is better than none."
     ]
    ]
   ],
   "intro": [
    "Much of public life is shaped by decisions that are never formally refused. A file waits, a licence stays pending, a warning is not issued, and the official who held them can say that nothing was done. But the people waiting for the file, the licence or the warning have been affected all the same. The ethical task is to see inaction as a choice with an owner, while recognising that some waiting is wise and some haste is reckless."
   ],
   "claim": "Not deciding is also a decision, and its costs fall on someone other than the person who delays. Yet not every delay is a failure: waiting can be the responsible course when action risks irreversible harm or when the facts are still emerging. The difference lies in ownership. A considered decision to wait has reasons, a time limit and an owner. Drift has none.",
   "problem": [
    "It is tempting to believe that an official who takes no step cannot be blamed for what follows. Administrative habit often reinforces the belief: an order can be challenged, but a file that simply does not move is harder to question. Yet omission shapes outcomes as surely as action. A pending pension, an undecided land claim or a delayed safety inspection distributes hardship to people who have no power to hurry the matter along, and the person who delayed rarely bears any of it.",
    "The opposite error is equally real. A culture that treats every delay as cowardice pushes officers into decisions they are not ready to take, on facts they do not yet have. Some problems do settle if they are given time. Some situations need observation before intervention. The judgment required is to distinguish deliberate waiting, which has reasons and a timetable, from avoidance, which has neither. The question is not simply whether to act or to wait, but whether the choice between them has been made openly and can be defended."
   ],
   "distinction": [
    "A useful distinction",
    "A deliberate delay is a decision: it states why waiting is better, what will be watched, and when the matter will be taken up again. Drift is the absence of a decision: nobody chose it, nobody recorded it, and nobody will answer for it."
   ],
   "thinkersTitle": "Five thinkers, five tests of judgment",
   "together": [
    "Putting the five together",
    "Mill and Bentham remove the idea that inaction is neutral. Arendt shows how harm follows when people stop thinking about what their routines do. Simon explains why certainty never arrives and why institutions teach officers to avoid decisions. Weber asks the decision-maker to own the foreseeable consequences of whichever course is chosen, including delay."
   ],
   "examplesIntro": "The examples below show how delay can be a hidden cost, a hidden danger, or a genuine protection. Each is most useful when the answer asks who bears the cost of waiting.",
   "models": [
    [
     "Inaction is a decision.",
     "Mill held that a person can cause harm by inaction as well as by action and is accountable for both. An undecided file, an unissued warning or a delayed inspection has consequences that fall on others. An official who delays has not avoided a choice. The delay has decided who will bear the cost."
    ],
    [
     "Waiting must have an owner.",
     "Not every delay is wrong: the precautionary principle can make waiting a duty when harm may be irreversible. What separates prudent waiting from drift is ownership, stated reasons, a time limit and a clear point at which the matter will be decided."
    ],
    [
     "Thoughtless compliance permits harm.",
     "Arendt found in Eichmann not a monster but a man who never asked what his work was doing. Harm in administration is often permitted rather than chosen. The capacity to pause and think about what a routine produces is therefore a moral capacity, not merely an intellectual one."
    ],
    [
     "Institutions can teach avoidance.",
     "Simon’s bounded rationality means that every real decision is taken without full information. An organisation that punishes every imperfect decision teaches its officers that delay is the only safe course. Protecting honest decisions is therefore part of good governance, not a concession to officials."
    ],
    [
     "The cost of delay has a distribution.",
     "Delay rarely costs the person who delays. The cost falls on the litigant, the pensioner, the depositor or the next generation. An ethical account of any delay must name those who bear it and ask whether they would accept the reason given."
    ]
   ],
   "steps": [
    [
     "Name what is being delayed.",
     "State the decision that is pending and the reason offered for not taking it. Do not accept “no decision” as a neutral position."
    ],
    [
     "Identify who bears the wait.",
     "List the people affected by the delay, especially those with the least power to hasten it."
    ],
    [
     "Compare the two costs.",
     "Weigh the foreseeable harm of acting wrongly against the foreseeable harm of not acting, on the same scale."
    ],
    [
     "Test reversibility.",
     "Ask whether an error could be corrected later, and whether the harm of delay could be undone. Irreversible harms justify more caution."
    ],
    [
     "Ask what waiting would reveal.",
     "If further information would genuinely change the decision, set out how it will be gathered. If it would not, waiting is only avoidance."
    ],
    [
     "Set an owner, a date and a trigger.",
     "Convert drift into a decision to wait by recording who is responsible, when the matter will return, and what would bring it back earlier."
    ],
    [
     "Own the outcome.",
     "Record the reasons, protect decisions taken in good faith, and accept responsibility for the consequences of the course chosen."
    ]
   ],
   "stepsIntro": "Use the following sequence when a question turns on delay, omission or the choice between acting now and waiting.",
   "formula": "Treat delay as a decision. Wait only for a reason that can be stated, for a period that is fixed, and for information that would change the choice. Otherwise decide, record the reasons and own the consequences, remembering that the cost of drift falls on those least able to bear it."
  },
  {
   "thinkers": [
    [
     "Simon",
     "calculation is always bounded",
     [
      "Simon explains why perfect calculation was never available. Real decision-makers have incomplete information, limited time and limited capacity to process what they do have. So they satisfice: they accept the first option that clears an acceptable threshold rather than searching endlessly for the best possible one.",
      "Satisficing is not a failure of rigour but the condition under which every real decision is taken. A method that pretends otherwise will produce confident nonsense. Simon’s distinction between programmed and non-programmed decisions adds a practical rule: routine problems can be turned into procedures, but novel problems require judgment."
     ],
     "an answer needs to explain why data cannot settle every decision, or why a routine procedure fails in a new situation."
    ],
    [
     "Barnard",
     "judgment about people fills the gap",
     [
      "Chester Barnard wrote from inside a company rather than a university. In The Functions of the Executive (1938), he argued that the main function of an executive is to secure cooperation. People accept instructions within what he called a zone of indifference, the range within which they obey without demanding a justification.",
      "The zone of indifference is sustained not by analysis of data but by judgment about people: their trust, their sense of fairness and their willingness to follow. A decision that is correct on paper but lost on those who must carry it out will fail. Barnard’s insight is that implementation is itself a matter of judgment."
     ],
     "the question involves leadership, implementation, or why an analytically sound decision fails in practice."
    ],
    [
     "Aristotle",
     "practical wisdom sees the particular case",
     [
      "Aristotle had already named the faculty that calculation cannot replace. He called it phronesis, or practical wisdom: the ability to see what a particular situation requires. Practical wisdom cannot be reduced to a rule, because no rule can anticipate every particular case in advance.",
      "Practical wisdom is not guesswork. The faculty develops through experience, reflection and good character, and works with principles rather than against them. Its task is to apply general knowledge to a situation that never exactly matches the textbook."
     ],
     "the answer needs to show why rules and data require interpretation, or why experience matters in judgment."
    ],
    [
     "Goleman",
     "judgment can be trained",
     [
      "Daniel Goleman adds that the ability to read situations and people can be trained, not merely inherited. His work suggests that self-awareness, self-regulation and empathy predict leadership performance more reliably than analytical ability alone.",
      "The point is not that emotion should replace reason. It is that good judgment depends on understanding one’s own reactions and those of others. An officer who is unaware of their biases, or blind to how a decision will be received, will misread both the data and the people."
     ],
     "the question concerns leadership, emotional intelligence, or the human side of decision-making."
    ],
    [
     "Drucker",
     "discipline turns intuition into learning",
     [
      "Peter Drucker supplies the discipline that stops judgment from becoming an excuse for acting on hunches. He advised deciding first what a decision is actually about, then stating in advance what would count as being wrong, and then building in feedback so that the result can be checked against the expectation.",
      "Drucker’s method makes intuition testable. A decision taken this way can be defended when it works and corrected when it does not. Without such discipline, both data and intuition become ways of confirming what one already believed."
     ],
     "an answer must show how to make judgment accountable, or how to learn from decisions over time."
    ]
   ],
   "examples": [
    [
     "Randomised trials: what they establish and what they cannot",
     [
      "The 2019 Nobel Prize in economics went to Abhijit Banerjee, Esther Duflo and Michael Kremer for bringing randomised controlled trials into development economics, beginning with Kremer’s schooling experiments in Kenya in the mid-1990s. Randomisation removes self-selection, so a measured difference can fairly be attributed to the intervention rather than to who signed up for it.",
      "The recognised weakness is external validity. Angus Deaton and Nancy Cartwright have argued that a result established in one place and at one scale does not travel automatically, because the mechanism that produced it may depend on local conditions. A trial shows that something worked there. The trial does not by itself show that it will work here."
     ],
     "What exactly does the evidence prove, and where? Separate the strength of a finding in its own setting from the judgment needed to apply it elsewhere."
    ],
    [
     "Indices and the risk that the measure becomes the goal",
     [
      "Goodhart’s law holds that when a measure becomes a target, it ceases to be a good measure, and Campbell’s law adds that indicators used for decisions tend to distort the processes they monitor. India measures heavily. The SDG India Index tracks states across 113 indicators aligned to the National Indicator Framework, and the Aspirational Districts Programme, launched in January 2018, ranks 112 districts on health, education, agriculture and infrastructure through periodic delta rankings.",
      "Ranking produces real improvement and a real incentive to manage the number. The ethical issue is whether an index rewards the underlying outcome or only the reported one, and whether the people behind the numbers are better off or only better counted."
     ],
     "Does the metric track the goal, or has it replaced it? Ask what behaviour the ranking rewards and what it could hide."
    ],
    [
     "A model that travels, and what must travel with it",
     [
      "The mid-day meal shows both halves of best-practice transfer. M. G. Ramachandran launched the noon meal scheme in Tamil Nadu on 1 July 1982. A national programme followed in 1995. On 28 November 2001, in the right to food case, the Supreme Court directed every state to provide a cooked meal of at least 300 calories and 8 to 12 grams of protein for a minimum of 200 school days. The design travelled across India and improved attendance and nutrition.",
      "The administrative capacity did not always travel with it. On 16 July 2013 at Gandaman in Saran district, Bihar, 23 children died after eating a meal cooked in oil taken from a container that had held the pesticide monocrotophos. The scheme was identical. The kitchen, the supervision and the accountability were not."
     ],
     "What made the practice work where it began, and is that present here? Distinguish the design from the capacity needed to carry it out."
    ],
    [
     "When the automated default is denial",
     [
      "An automated check has a default, and the default carries moral weight. Jean Drèze and colleagues surveyed around 1,000 households across 32 villages in Jharkhand and found exclusion rates as high as twenty percent where every ration sale required biometric authentication. The Right to Food Campaign documented at least 57 hunger-related deaths between 2015 and 2018, of which at least 19 were linked to exclusion from the public distribution system related to Aadhaar authentication.",
      "The ethical issue is who bears the error. A fingerprint that fails to match is treated as a failed claim rather than a failed sensor, so the system’s mistake becomes the claimant’s loss. Accuracy on average does not answer the question of what happens to the person the system gets wrong."
     ],
     "Who bears the cost when the algorithm is wrong? Look at the default, the error rate among the most vulnerable, and the remedy available."
    ],
    [
     "What the field knows that the file does not",
     [
      "The smallpox campaign is a clear case of field knowledge overturning central doctrine. The received strategy was mass vaccination, and by the early 1970s headquarters could point to rising coverage figures while transmission continued. Epidemiologists working in Bihar and Uttar Pradesh established that the disease was sustained by clusters that broad campaigns kept missing, and the strategy shifted to active search and containment: find each case, then vaccinate the ring of contacts around it.",
      "Coverage had been the wrong measure, and interruption of transmission the right one. Headquarters can see the aggregate and the field can see the mechanism. Policy fails when the aggregate is mistaken for the mechanism."
     ],
     "Is the measure tracking the real mechanism of the problem? Ask what people close to the problem can see that the summary figures conceal."
    ]
   ],
   "topics": [
    [
     "2023A2",
     [
      "Visionary decisions are rarely the product of pure logic or pure instinct. Logic works on what is known, but vision concerns what is not yet known: new situations, emerging risks and possibilities no dataset contains. Intuition, formed by experience and practical wisdom, can see patterns before they can be proven. Aristotle called this faculty phronesis, the ability to see what a particular situation requires, and it is what allows a leader to act before the evidence is complete.",
      "But intuition alone is dangerous. Experienced judgment can harden into prejudice, and confidence is not the same as insight. Simon showed that every decision is taken with bounded information, which means intuition is always operating on incomplete evidence. Drucker’s discipline turns this into a method: state what the decision is about, state in advance what would prove it wrong, and build in feedback so that the intuition can be tested. The smallpox campaign shows the value of the combination: field experience suggested that mass vaccination was missing hidden clusters, and careful analysis confirmed it and changed the strategy.",
      "The intersection is therefore not a compromise in which half the decision is logical and half instinctive. The intersection is a discipline in which intuition proposes and evidence tests, and in which data are interpreted by judgment rather than obeyed mechanically. A visionary decision-maker is one who can see further than the data while remaining willing to be corrected by them."
     ]
    ],
    [
     "2021B4",
     [
      "A best practice is a solution that worked somewhere. Its value is real: it saves effort, spreads innovation and allows a new administrator to learn from others. The mid-day meal, first scaled in Tamil Nadu, is a genuine success that travelled across the country. But the phrase suggests that a practice is best everywhere, and that is where it misleads.",
      "Simon’s distinction explains the problem. Programmed problems, which recur in similar form, can be handled by standard procedures. Non-programmed problems, which are new or specific to a place, need judgment. A practice imported without understanding why it worked becomes a rule applied to a situation it was never designed for. The Gandaman tragedy showed that the design of the mid-day meal could travel while the supervision that made it safe did not. Randomised trials, as Deaton and Cartwright argue, establish that something worked in one setting, not that it will work in another.",
      "Better practices are those that are adapted rather than adopted. They begin with the local problem, borrow ideas from elsewhere, test them in the new setting and keep the feedback that shows whether they work. Barnard’s point completes the argument: a practice succeeds only if the people who must carry it out understand and accept it. The better practice is not a template but a method for learning."
     ]
    ]
   ],
   "intro": [
    "Modern administration trusts numbers, and for good reason: data can expose waste, test claims and discipline intuition. Yet the most important decisions are often taken where the data run out, in situations that no dataset anticipated. A decision-maker who trusts only calculation will be confidently wrong in novel situations, while one who trusts only instinct will repeat familiar errors. The ethical task is to know which kind of problem one faces, and to combine evidence and judgment without letting either pretend to be the whole."
   ],
   "claim": "Good decisions need both evidence and judgment. Data can correct intuition, and experienced judgment can see what data miss, but neither is sufficient alone. The practical skill has three parts. Recognise when a problem is routine and when it is new. Import a practice only with an understanding of why it worked. Build in ways to find out quickly when you are wrong.",
   "problem": [
    "The phrase “evidence-based policy” sounds beyond argument, and in many ways it is a real advance. Randomised trials, indices and dashboards have shown which programmes work and exposed some that do not. But evidence is always evidence about somewhere, some time and some measure. A result established in one district may not hold in another. A number chosen to track progress may become the thing people chase. An automated rule applied at scale may fail the very people it was designed to serve.",
    "Intuition has the opposite strength and weakness. An experienced officer may recognise danger or opportunity before any report confirms it, but may also mistake prejudice or habit for insight. The question is therefore not whether to prefer logic or intuition. It is how to use each to check the other: evidence to test intuition, and judgment to decide what the evidence means in a particular case."
   ],
   "distinction": [
    "A useful distinction",
    "Herbert Simon distinguished programmed decisions, which are routine and can be turned into procedures, from non-programmed decisions, which are novel and cannot. Best practices work well for the first kind. Treating a novel problem as if it were routine is where best practice becomes a trap."
   ],
   "thinkersTitle": "Five thinkers, five tests of judgment",
   "together": [
    "Putting the five together",
    "Simon shows that calculation is always bounded and that novel problems need judgment. Barnard shows that decisions succeed only if people will carry them out. Aristotle names practical wisdom as the faculty that applies principles to particular cases. Goleman shows that this faculty can be trained. Drucker makes judgment testable, so that intuition and evidence correct each other over time."
   ],
   "examplesIntro": "The examples below show evidence and judgment working well, working badly, and needing each other. They are most useful when the answer explains what the evidence could and could not establish.",
   "models": [
    [
     "Calculation is always bounded.",
     "Simon showed that real decision-makers work with incomplete information, limited time and limited capacity, and so must satisfice rather than optimise. Demanding certainty before acting is therefore a demand for paralysis. Good decisions use the best available evidence and remain open to correction."
    ],
    [
     "Intuition needs discipline.",
     "Aristotle’s practical wisdom allows a decision-maker to see what a particular case requires, but judgment can also harden into bias. Drucker’s method of stating in advance what would count as being wrong turns intuition into a testable proposal rather than a private conviction."
    ],
    [
     "A practice must be adapted, not adopted.",
     "A best practice is evidence that something worked somewhere. The mid-day meal travelled successfully, but the Gandaman tragedy showed that design without local capacity can fail catastrophically. A practice should be imported only with an understanding of why it worked."
    ],
    [
     "The measure is not the goal.",
     "Goodhart’s and Campbell’s laws warn that indicators used as targets invite manipulation. Rankings can spur improvement, but they must be checked against the outcomes they are meant to reflect. A good administrator watches both the number and the reality behind it."
    ],
    [
     "The default carries moral weight.",
     "Automated systems decide what happens when they are uncertain. When a failed fingerprint means a denied ration, the system’s error becomes the citizen’s loss. Evidence of average accuracy is no answer to the person wrongly excluded. The design must protect those it is likely to fail."
    ]
   ],
   "steps": [
    [
     "Classify the problem.",
     "Ask whether it is routine and well understood, or new and specific to its setting. The first suits procedure, the second needs judgment."
    ],
    [
     "State what the evidence shows.",
     "Identify what the data or trial establish, and in what setting, without stretching it beyond that."
    ],
    [
     "Identify what the evidence cannot see.",
     "Consider local conditions, human responses and mechanisms that the numbers may hide."
    ],
    [
     "Use judgment to interpret, not to override.",
     "Let experience and practical wisdom decide how the evidence applies, while remaining ready to be proved wrong."
    ],
    [
     "Check the incentives of the measure.",
     "Ask whether the indicator tracks the real goal or invites people to manage the number."
    ],
    [
     "Protect those the system may fail.",
     "Design defaults and remedies for the people most likely to be wrongly excluded."
    ],
    [
     "Build in feedback.",
     "State in advance what would count as failure and review the decision against it."
    ]
   ],
   "stepsIntro": "Use the following sequence when a question turns on evidence, judgment, expertise or best practice.",
   "formula": "Let evidence discipline intuition, and let judgment interpret evidence. Classify the problem before choosing the method. Adapt practices rather than adopting them. Watch the outcome, not only the measure. Build in the feedback that shows when you are wrong."
  },
  {
   "thinkers": [
    [
     "Ambedkar",
     "custom protects the interests of those it serves",
     [
      "Ambedkar gives the clearest Indian argument against blindly following custom. He argued that caste is not merely a division of labour but a division of labourers, arranged in graded inequality, so that each group has some interest in preserving its position above others. Custom, on this view, is not neutral. Custom reflects the preferences of those who benefit from it and presents them as the natural order.",
      "His public burning of the Manusmriti at Mahad on 25 December 1927 made the point plainly: a practice cannot be justified simply because it is old. In the Constituent Assembly in November 1948 he warned that constitutional morality is not a natural sentiment. Constitutional morality has to be cultivated, because customary morality is deeply rooted."
     ],
     "an answer needs to show how custom can protect hierarchy, or why constitutional morality must be consciously built."
    ],
    [
     "Mill",
     "the despotism of custom",
     [
      "Mill gave the liberal version of the argument in On Liberty. He called the despotism of custom the standing hindrance to human advancement. Custom is powerful precisely because it is followed without anyone having to explain or justify it.",
      "For Mill, a society that allows individuals to question and depart from custom is one that can discover better ways of living. Freedom of thought and experiment are not threats to social order but the means of its improvement."
     ],
     "the question concerns individual liberty against social conformity, or why dissent is necessary for progress."
    ],
    [
     "Socrates",
     "conscience against unexamined authority",
     [
      "Socrates showed what it means to refuse the authority of custom when conscience requires it. Accused of corrupting the youth and disrespecting the gods, he refused to abandon his practice of questioning, holding that the unexamined life is not worth living. He accepted his sentence rather than give up his conscience.",
      "His example shows that conscience can demand resistance to both custom and law. His example also shows the discipline of that resistance. Socrates did not flee or deny the authority of the court. He argued openly and accepted the consequences."
     ],
     "the case involves conscience, dissent, or the duty to question inherited belief."
    ],
    [
     "Periyar",
     "reason and self-respect before reform",
     [
      "Periyar took this critique into a mass movement. Through the Self-Respect Movement, founded in 1925, he attacked ritual, superstition and the beliefs that supported hierarchy. His basic argument was that rational self-respect must come before the reform of any particular custom.",
      "For Periyar, removing one unjust practice is not enough if the beliefs that justify inequality remain. People must first question the ideas that make hierarchy seem natural. Then the practices built on those ideas lose their authority."
     ],
     "the answer needs to address social reform, rationalism, or the link between belief and inequality."
    ],
    [
     "Thoreau",
     "refusal where argument fails",
     [
      "Thoreau shows what an individual can do when argument and persuasion fail. He spent a night in jail in 1846 for refusing to pay a poll tax to a government that supported slavery and war, and wrote “Resistance to Civil Government”, later known as “Civil Disobedience”.",
      "His position was that a person owes greater loyalty to conscience than to an unjust law, and that anyone who knowingly supports an unjust system becomes part of it. His example marks the point where the duty to argue ends and the duty to refuse begins."
     ],
     "the question asks when non-cooperation or civil disobedience is justified."
    ]
   ],
   "examples": [
    [
     "The courts between custom and constitutional right",
     [
      "In Shayara Bano v Union of India, decided on 22 August 2017, a five-judge bench struck down instant triple talaq by 3:2, holding it arbitrary and not protected by Article 25. Parliament followed with the Muslim Women (Protection of Rights on Marriage) Act 2019. In Indian Young Lawyers Association v State of Kerala, decided on 28 September 2018, a bench held by 4:1 that excluding women aged 10 to 50 from the Sabarimala temple was unconstitutional, with Justice Indu Malhotra dissenting.",
      "The contrast is instructive. Legislative follow-through settled the first. The second drew more than fifty review petitions and a reference to a larger bench. A judgment can declare a right, but the acceptance of that right depends on persuasion, legislation and the community’s own change of view."
     ],
     "Can a court settle what a community has not accepted? Compare the legal declaration of a right with the social conditions for its exercise."
    ],
    [
     "Who decides what is essential to a religion",
     [
      "The essential religious practices doctrine comes from the Shirur Mutt case of 1954, in which a seven-judge bench held that what is essential to a religion is to be determined by reference to the doctrines of that religion itself. The consequence is awkward: a constitutional court must settle a theological question before it can settle a legal one.",
      "Sabarimala pushed the doctrine to its limit. In November 2019 the review petitions were kept pending and the larger questions were referred to a nine-judge bench. Until that bench rules, the test that decides these disputes is itself under reconsideration."
     ],
     "Should constitutional rights depend on what a religion considers essential? Ask who is competent to decide, and what happens to members of the faith who disagree with its authorities."
    ],
    [
     "Sanction that operates below the law",
     [
      "In Shakti Vahini v Union of India (2018), the Supreme Court held that when two consenting adults choose to marry, the choice is protected by Articles 19 and 21, and that assemblies gathering to punish such a marriage act illegally. The Court directed states to create special cells in every district, safe houses for threatened couples and a round-the-clock helpline.",
      "The wider point concerns where the sanction actually sits. No statute authorises these assemblies, and their power does not come from law but from a village’s willingness to enforce their verdict socially. A right that is legally secure can still be practically unavailable when the community around it disagrees."
     ],
     "Is a right real if the community will punish its use? Consider legal protection alongside the social power that decides whether the right can be exercised."
    ],
    [
     "Burke’s caution about dismantling faster than one can replace",
     [
      "Edmund Burke’s Reflections on the Revolution in France, published in 1790, is the strongest statement of the case for caution. His argument is not that inherited institutions are good, but that they may contain accumulated adjustments whose reasons are no longer visible. A reformer who cannot see the reason may still be removing something that holds up the structure. He therefore preferred reform that repairs to reform that replaces.",
      "Using Burke honestly means stating the objection too. The same argument was used to defend sati, caste disability and many practices later abolished. Caution is a reason to move carefully and to understand what a practice does. It is not a reason never to move."
     ],
     "Does caution protect wisdom or protect privilege? Ask what the practice actually does, for whom, and what would replace it."
    ],
    [
     "Reform from within: Roy and Vidyasagar",
     [
      "Both reformers worked from inside the tradition rather than against it. Raja Ram Mohan Roy campaigned against sati by arguing from Sanskrit scholarship that it had no scriptural warrant, and the Bengal Sati Regulation was issued by Lord William Bentinck on 4 December 1829. Ishwar Chandra Vidyasagar, principal of Sanskrit College, published his case for widow remarriage in 1855, arguing from the Parashara Smriti that the texts permitted it, and the Hindu Widows’ Remarriage Act followed in 1856.",
      "Both won the argument and both met the same limit. Legality is not acceptance. Widow remarriage remained rare for generations, which shows the standing limit of reform that changes the statute before it changes the social sanction."
     ],
     "What does it take for reform to last? Compare changing the law with changing the beliefs and sanctions that enforce custom."
    ]
   ],
   "topics": [
    [
     "2018B1",
     [
      "Customary morality once did much of the work that law and public institutions now do. Custom told people how to marry, trade, settle disputes and care for the old, and in small communities it could hold society together. But custom answers to the past and to the community, while modern life asks each person to be treated as an equal citizen, free to choose their faith, work and partner. Where the two conflict, custom cannot be the final guide.",
      "Ambedkar’s warning explains why. Custom often preserves hierarchy by presenting it as natural, and those who benefit from a practice have every reason to defend it. Mill’s despotism of custom describes the same danger in a liberal key: practices that are never questioned cannot improve. The Shakti Vahini judgment shows how customary sanction can still operate below the law, making a constitutional right unsafe to exercise.",
      "Yet the claim should not become contempt for tradition. Burke’s caution is a reminder that some customs carry practical wisdom, and reformers such as Roy and Vidyasagar succeeded partly by arguing from within tradition. Customary morality cannot be the guide, but it can be a source to be examined: its practices retained where they respect dignity and equality, and reformed where they do not. Constitutional morality, in Ambedkar’s phrase, has to be cultivated."
     ]
    ],
    [
     "2018B3",
     [
      "A privilege is an advantage held by some. A principle is a standard that applies to all. A people that values its privileges above its principles may keep its advantages for a time, but it destroys the ground on which those advantages could be defended. Once a principle has been abandoned whenever it becomes inconvenient, nobody can appeal to it, including those whose privileges later come under threat.",
      "Ambedkar’s account of graded inequality shows how this happens. Each group protects its place above others, and so the principle of equality is sacrificed to a chain of privileges. Custom then becomes the defence of those privileges, which is why it often refuses to justify itself. Periyar’s insistence that reason must come before reform addresses the same danger: a privilege that cannot survive questioning survives only through power.",
      "History bears out the loss. Privileges defended against principle eventually provoke resistance, and when they fall, they fall without the protection that principle would have given. A society that holds to its principles, even when they cost some of its members their advantages, keeps both its moral authority and its cohesion. Principles are the only secure foundation for rights, including the rights of those who once held privileges."
     ]
    ],
    [
     "2022B4",
     [
      "Having choices does not guarantee that any of them is right. The warning matters most when the choices themselves are shaped by custom. A young person who may choose among partners from the same caste, or a woman who may choose between two ways of accepting an inherited restriction, has options, but the framing of the options may already embody the injustice.",
      "The ethical response is to question the frame rather than rank the options within it. Ambedkar and Periyar did precisely this: rather than choosing among reforms that left hierarchy intact, they questioned the beliefs that made hierarchy seem natural. Socrates refused a choice between silence and exile that would have abandoned his conscience. Thoreau declined to choose between complying with the law and resisting it violently, and took a third course of open refusal.",
      "Questioning the frame does not mean that every choice can wait for a perfect alternative. Burke’s caution and the experience of reformers show that change often proceeds through imperfect steps. But when every available option asks a person to accept an unjust premise, the first ethical task is to name that premise and ask whether the range of choices can be widened."
     ]
    ]
   ],
   "intro": [
    "Every society inherits practices it did not choose: ways of marrying, eating, worshipping, dividing work and assigning status. Many of these practices carry real wisdom about living together. Some also carry inequality that has become invisible through familiarity. The ethical task is neither to obey custom because it is old nor to discard it because it is old, but to ask whether it can justify itself to those it burdens."
   ],
   "claim": "Custom deserves a hearing but not automatic obedience. Long survival shows that a practice has served some people for some purpose. Survival does not show that it is just. A practice must be defended by principles that those it burdens could accept. When it cannot be defended, reform is required, though the method of reform should respect the knowledge that custom may carry and the time it takes to change what people believe.",
   "problem": [
    "Custom is powerful because it rarely needs to explain itself. Children learn it before they can question it, communities enforce it without written rules, and its familiarity makes it feel natural. Familiarity is the strength of custom: it transmits accumulated experience and holds communities together. Familiarity is also its danger: a practice that serves some at the expense of others can present its advantages as the natural order.",
    "The difficulty for a modern society is that constitutional principles and customary practices sometimes collide. Equality before the law, freedom of choice in marriage and the dignity of every person may contradict practices that many people sincerely value. Reform imposed without persuasion can provoke resistance, while persuasion without reform can leave injustice in place for generations. The ethical question is how to judge custom by principle while changing it in a way that lasts."
   ],
   "distinction": [
    "A useful distinction",
    "Tradition can be a source of wisdom or a source of privilege. The test is not how old a practice is, but whether its reasons can be stated and whether those it burdens would accept them if they were free to choose."
   ],
   "thinkersTitle": "Five thinkers, five tests of judgment",
   "together": [
    "Putting the five together",
    "Ambedkar asks whose interests a custom protects. Mill asks whether individuals are free to question it. Socrates shows the discipline of conscience against authority. Periyar asks whether the beliefs behind a custom can survive rational scrutiny. Thoreau marks the point at which refusal becomes a duty. Together they judge custom by principle rather than by age."
   ],
   "examplesIntro": "The examples below show custom meeting constitutional principle in the courts, in communities and in the history of reform. They are most useful when the answer explains how change was achieved and where it stopped.",
   "models": [
    [
     "Age is not justification.",
     "Ambedkar’s burning of the Manusmriti made the point that a practice cannot be justified merely because it is old. Custom may carry wisdom, but it may also preserve hierarchy by making it seem natural. Every practice must be able to state its reasons to those it burdens."
    ],
    [
     "Constitutional morality must be cultivated.",
     "Ambedkar warned that constitutional morality is not a natural sentiment. Constitutional morality must be developed against deeply rooted customary morality. Laws can declare equality, but citizens have to learn to value it, which is why education and persuasion matter as much as judgments."
    ],
    [
     "Rights can be secure in law and unsafe in practice.",
     "The Shakti Vahini judgment protected the right of adults to marry by choice, yet social sanction can still punish its exercise. Effective reform must address the community power that enforces custom, not only the statute."
    ],
    [
     "Caution is not immobility.",
     "Burke rightly warned that institutions may carry wisdom whose reasons are no longer visible. But the same argument once defended sati and caste disability. Caution is a reason to reform carefully and understand what a practice does, not a reason to leave injustice untouched."
    ],
    [
     "Reform needs acceptance as well as law.",
     "Roy and Vidyasagar won legal reforms by arguing from within tradition, yet widow remarriage remained rare for generations. Lasting reform changes beliefs and social sanctions as well as statutes."
    ]
   ],
   "steps": [
    [
     "State the custom and its purpose.",
     "Describe what the practice does and what it is said to protect, without caricature."
    ],
    [
     "Identify who benefits and who bears the burden.",
     "Ask whose interests the practice serves and who pays for it."
    ],
    [
     "Test it against principle.",
     "Measure the practice against equality, dignity and freedom of choice as the Constitution understands them."
    ],
    [
     "Separate wisdom from privilege.",
     "Retain what genuinely serves the community and those it affects. Question what merely preserves advantage."
    ],
    [
     "Choose the method of change.",
     "Consider persuasion, reform from within, legislation and judicial protection, and their limits."
    ],
    [
     "Protect those who dissent.",
     "Ensure that individuals who depart from custom are safe from social punishment."
    ],
    [
     "Build acceptance.",
     "Plan for education and dialogue so that reform becomes part of social belief rather than only law."
    ]
   ],
   "stepsIntro": "Use the following sequence when a question turns on custom, tradition, conscience or social reform.",
   "formula": "Give custom a hearing but not automatic obedience. Ask whose interests it serves and whether it can be justified to those it burdens. Retain its wisdom and reform its injustice. Protect those who dissent. Remember that lasting change requires acceptance as well as law."
  },
  {
   "thinkers": [
    [
     "Kant",
     "morality is a standard, not a description",
     [
      "Kant gives the clearest statement of the structure. His categorical imperative says that we should act only on a rule that we could will to become a universal law. The imperative does not describe how people behave. The imperative establishes how they ought to behave, and loses none of its force even when everyone disobeys it.",
      "Kant was explicit that morality cannot be derived from what human beings actually do, because what they actually do is precisely what is being questioned. Values, on this account, are not a description of humanity but a standard held against it, and the gap between the two is not evidence that the standard is wrong."
     ],
     "an answer needs to separate how things are from how they ought to be, or to defend a standard that is widely violated."
    ],
    [
     "Rawls",
     "an unreachable device that corrects judgment",
     [
      "Rawls turns the ideal into a method that a state can use. His original position asks what principles you would choose if you did not know your caste, class, talents or beliefs. He admits from the beginning that nobody ever occupies the veil of ignorance.",
      "Its usefulness lies precisely in being unreachable. By removing the knowledge that corrupts judgment, the device lets us test institutions against a standard of fairness that no actual bargaining position could provide."
     ],
     "the question concerns justice, fairness in institutions, or why an imagined standard can guide real policy."
    ],
    [
     "Gandhi",
     "the ideal as a direction of travel",
     [
      "Gandhi supplies an Indian version in which the ideal works as a direction rather than a destination. His autobiography, The Story of My Experiments with Truth, assumes that truth is approached rather than possessed, and that the approach itself is the moral life.",
      "For Gandhi, the fact that one never fully reaches truth or non-violence is not a reason to abandon them. It is a reason to keep experimenting, to correct oneself, and to measure one’s conduct against a standard that remains ahead."
     ],
     "the answer needs to show how an ideal can guide personal conduct or social movements without being fully achieved."
    ],
    [
     "Nehru",
     "the pledge redeemed substantially, not wholly",
     [
      "Nehru conceded the same structure at the founding of the republic. In his “Tryst with Destiny” speech on the night of 14 August 1947, he spoke of redeeming a pledge “not wholly or in full measure, but very substantially”.",
      "The admission of shortfall is built into the sentence. The ideal is not abandoned because it cannot be met in full. Progress is measured against it, and the remaining distance becomes the work of the future."
     ],
     "the question concerns national ideals, constitutional goals, or honest measurement of progress."
    ]
   ],
   "examples": [
    [
     "Directive Principles that cannot be enforced but still legislate",
     [
      "Article 37 states that the Directive Principles are not enforceable by any court but are nevertheless fundamental in the governance of the country. The article reads like a contradiction and works as a programme. Article 45 on free and compulsory education remained unenforceable for over fifty years. The 86th Amendment of 2002 then inserted Article 21A and made elementary education a fundamental right. The Right of Children to Free and Compulsory Education Act 2009 made the right operational.",
      "Other directives followed the same path. Article 39A produced the Legal Services Authorities Act 1987, and Article 41 on the right to work stands behind MGNREGA in 2005. The mechanism is slow but real: a directive becomes a statute, and the statute creates an enforceable right."
     ],
     "Can an unenforceable ideal still shape policy? Trace how a directive became law and what that took."
    ],
    [
     "The Preamble as an annual audit",
     [
      "The Preamble commits the state to justice in its social, economic and political forms, to liberty of thought and belief, to equality of status and opportunity, and to fraternity assuring the dignity of the individual. Each term has measurable proxies. Economic justice can be read against consumption and wage data, equality of opportunity against school completion and labour force participation broken down by group, and dignity against conviction rates in atrocity cases.",
      "The exercise is to set the commitment beside the number and state the distance plainly, without dismissing the ideal as rhetoric or treating an improvement as arrival. The ideal provides the scale. The data show the position on it."
     ],
     "Does the ideal produce a measurable standard? Set each commitment against a relevant figure and state the gap honestly."
    ],
    [
     "The honest arithmetic of the SDGs",
     [
      "NITI Aayog’s SDG India Index is the clearest available measure of distance to a set of shared goals. The composite score moved from 57 in 2018 to 66 in 2020-21 and to 71 in 2023-24, across 113 indicators aligned to the National Indicator Framework. State and union territory scores now range from 57 to 79, against a range of 42 to 69 in 2018, with Uttarakhand and Kerala at the top. Climate action showed the largest single gain, rising from 54 to 67.",
      "Two readings follow, and a good answer carries both. The direction is genuinely positive and the floor has risen substantially. On most goals, the distance still to be covered by 2030 remains large."
     ],
     "Is progress being described honestly? Hold both the improvement and the remaining distance in view."
    ],
    [
     "Repairing the roof in good weather",
     [
      "Preparedness is the clearest case of spending now against a cost that may never visibly arrive. The Disaster Management Act 2005 created a three-tier structure of national, state and district authorities, with the National Disaster Management Authority chaired by the Prime Minister. India’s National Disaster Management Plan of 2016 was the first national plan explicitly aligned with the Sendai Framework, whose priorities include investing in disaster risk reduction for resilience.",
      "The political difficulty is structural. Money spent on preparedness produces no visible event and no gratitude, while money spent on relief produces both. Fiscal consolidation in good years is resisted for the same reason. Only a standard held in advance can justify spending against a storm that has not yet come."
     ],
     "Does the ideal of preparedness survive the absence of a visible crisis? Compare the cost of preparation with the cost of relief after a disaster."
    ],
    [
     "The cynic’s objection",
     [
      "The objection deserves its strongest form. If a standard can never be met, it can never be failed, and so it becomes a permanent alibi: every shortfall is explained by the difficulty of the ideal rather than by anyone’s decision. The Directive Principles were attacked on exactly this ground in the Constituent Assembly, as promises the state need never honour.",
      "The reply is that an unreachable standard is not the same as an unusable one. Article 45 was unenforceable for over fifty years and still produced Article 21A and the 2009 Act. The test is whether an ideal generates a direction and a schedule, or only a vocabulary for explaining why nothing moved."
     ],
     "Is the ideal producing action or excuses? Look for timelines, measures and accountability attached to the ideal."
    ]
   ],
   "topics": [
    [
     "2019A2",
     [
      "Values are not a description of human beings as they are. If they were, they would change whenever behaviour changed, and they could never criticise anything. Kant made the point directly: morality cannot be derived from what people actually do, because what they do is exactly what morality questions. Honesty remains a value in a society where many people lie. Equality remains a value in a society structured by inequality.",
      "For this reason values can guide change. The Constitution’s promise of equality of status and opportunity did not describe India in 1950. The promise described what India ought to become, and it made the existing hierarchy visible as a wrong. Rawls’s veil of ignorance works the same way. No one actually stands behind it, but imagining it lets us judge institutions by what fairness would require rather than by what the powerful prefer.",
      "The gap between what humanity is and what it ought to be is therefore not an embarrassment to values but their purpose. Gandhi described his life as a series of experiments with truth, approaching an ideal he never claimed to possess. Values mark the direction of improvement. A humanity that described itself only as it is would have nothing to aim at."
     ]
    ],
    [
     "2018B4",
     [
      "At first glance the statement seems paradoxical: if reality does not match the ideal, how can it confirm it? The answer lies in what an ideal does. The ideal is the standard by which we recognise shortfall. Poverty is seen as a failure only because we hold an ideal of dignity. Discrimination is seen as a wrong only because we hold an ideal of equality. Remove the standard, and the same facts would appear as simply the way things are.",
      "Nehru captured this structure when he spoke of redeeming a pledge “not wholly or in full measure, but very substantially”. The shortfall did not refute the pledge. The shortfall confirmed that the pledge was still the measure. The SDG India Index shows the same relation in numbers: the scores improve, the distance remains, and both are visible only because the goals exist.",
      "The danger is that confirmation becomes consolation, as if recognising the gap were enough. The cynic’s objection that unreachable ideals excuse underperformance must be answered with action. An ideal is confirmed by reality only when the recognition of the gap leads to effort to reduce it. Otherwise the ideal is merely admired, not followed."
     ]
    ],
    [
     "2022B1",
     [
      "The time to repair the roof is when the sun is shining, because repair is impossible during the storm. The proverb captures the logic of preparation: the most important protective actions must be taken when their need is least visible. Disaster preparedness, fiscal buffers and institutional reform all belong to this category. Their benefits appear only in the crises they prevent or soften.",
      "For this reason preparation depends on ideals and foresight rather than on present pressure. The Disaster Management Act 2005 and the National Disaster Management Plan of 2016 are attempts to institutionalise preparation before disasters strike. The political difficulty is that preparation produces no visible event and little gratitude, while relief after a disaster produces both. Only a standard held in advance can justify spending against a storm that has not yet arrived.",
      "Good weather also offers the best conditions for difficult reforms: revenues are stronger, public anxiety is lower and choices can be made calmly. Yet good times encourage complacency. The ethical responsibility of leadership is to use periods of stability to strengthen the institutions that will be needed in periods of stress."
     ]
    ]
   ],
   "intro": [
    "No society lives up to its ideals. Constitutions promise justice, equality and dignity, and every day falls short of them. The gap tempts two opposite errors: to dismiss the ideals as empty words, or to pretend that the society already meets them. The ethical task is to hold the ideal as a standard that directs action and measures progress, even though it is never fully reached."
   ],
   "claim": "An ideal does not need to be achieved to be useful. Its function is to direct action and to reveal shortfall: without the standard, a failure would look like the normal state of things. The gap between what is and what ought to be is not proof that the ideal is wrong, but it becomes an alibi if the ideal produces no direction, no timetable and no honest measure of distance.",
   "problem": [
    "It is often said that ideals are unrealistic and that practical people should concern themselves with what can be achieved. But ideals are not predictions. They are standards. The Constitution’s promise of equality of status and opportunity was not a description of India in 1950. It was a commitment that made the existing inequality visible as a wrong to be corrected.",
    "The danger runs the other way too. An ideal that is never expected to be met can become a permanent excuse: every shortfall can be blamed on the difficulty of the ideal rather than on anyone’s decisions. The Directive Principles were criticised in the Constituent Assembly on exactly this ground. The ethical question is how to keep an ideal both demanding and usable, so that it generates action rather than rhetoric."
   ],
   "distinction": [
    "A useful distinction",
    "A description tells us how things are. A standard tells us how they ought to be. The failure of reality to match a standard does not refute the standard, just as the existence of crime does not refute the law."
   ],
   "thinkersTitle": "Four thinkers, four tests of judgment",
   "together": [
    "Putting the four together",
    "Kant establishes that an ideal is a standard, not a description. Rawls shows that an unreachable device can still correct real judgment. Gandhi treats the ideal as a direction of travel. Nehru shows how a nation can admit its shortfall while holding to its pledge. Together they explain why reality confirms the ideal by revealing how far it falls short."
   ],
   "examplesIntro": "The examples below show ideals shaping law, measurement and preparation, and the cynic’s objection that an unreachable ideal can excuse underperformance. They are most useful when the answer measures the distance honestly.",
   "models": [
    [
     "A standard is not a description.",
     "Kant held that morality cannot be derived from how people behave, because behaviour is what morality judges. Values remain valid even when widely violated. The gap between what is and what ought to be shows the work still to be done, not the falsity of the ideal."
    ],
    [
     "An imagined standard can correct real judgment.",
     "Rawls’s veil of ignorance is a position nobody occupies, yet it removes the self-interest that distorts judgments about justice. Ideals can be useful precisely because they are unreachable: they give a reference point outside the interests of those who judge."
    ],
    [
     "Ideals are a direction of travel.",
     "Gandhi approached truth through experiment rather than claiming to possess it. An ideal need not be fully achieved to guide conduct. The ideal marks the direction of improvement and the standard against which progress is measured."
    ],
    [
     "Unenforceable ideals can become law.",
     "The Directive Principles are not enforceable in court, yet Article 45 eventually became Article 21A and the Right to Education Act. Ideals work slowly through legislation, turning aspirations into enforceable rights."
    ],
    [
     "Preparation is an ideal held in advance.",
     "Repairing the roof while the sun shines requires acting on a standard before the crisis makes it urgent. Disaster preparedness and fiscal prudence show that foresight is an ethical responsibility, not merely a technical one."
    ]
   ],
   "steps": [
    [
     "State the ideal precisely.",
     "Identify the value or commitment in question, and where it comes from."
    ],
    [
     "Describe the reality honestly.",
     "Present the relevant facts and figures without exaggerating success or failure."
    ],
    [
     "Measure the distance.",
     "Set the ideal beside the evidence and state the gap plainly."
    ],
    [
     "Explain why the ideal still matters.",
     "Show how it reveals shortfall and directs action, rather than treating the gap as refutation."
    ],
    [
     "Identify the mechanism of progress.",
     "Point to the laws, institutions or practices that turn the ideal into action."
    ],
    [
     "Answer the cynic.",
     "Ask whether the ideal is producing direction and deadlines, or only excuses."
    ],
    [
     "Commit to preparation.",
     "Where the ideal concerns the future, show what must be done now, before a crisis makes it urgent."
    ]
   ],
   "stepsIntro": "Use the following sequence when a question turns on ideals, values, foresight or the gap between promise and performance.",
   "formula": "Hold the ideal as a standard, not a description. Measure reality against it honestly. Treat the gap as work to be done rather than proof of failure. Turn the ideal into laws, timelines and measures. Act in good times on the foresight that bad times will demand."
  }
 ],
 "Knowledge, Education and the Doubting Mind": [
  {
   "thinkers": [
    [
     "Tagore",
     "a mind formed by wonder",
     [
      "Tagore founded Santiniketan because he believed the school he had attended did the opposite of educating. Instruction delivered as dictation trained a child to receive rather than to grow. He called such a school a factory that produces uniform minds.",
      "His alternative placed learning in the open air, in the arts and in the child’s own language. His reasoning was that a mind formed by wonder keeps that disposition long after the content has been forgotten. What survives the syllabus is the habit of attention and the willingness to be surprised."
     ],
     "the question asks what education is for, or contrasts learning with instruction."
    ],
    [
     "Freire",
     "the banking model and its politics",
     [
      "Paulo Freire named the mechanism that Tagore resisted. He called it the banking model of education. The student is treated as an empty account, and the teacher deposits information into it.",
      "Freire argued that the effect is political and not only educational. A person trained only to receive will accept the world as it has been described to them. His alternative was conscientisation, which teaches a learner to read the word and the world together. Literacy then becomes the ability to question the arrangement one lives under."
     ],
     "an answer needs to link teaching methods with citizenship, power or social change."
    ],
    [
     "Nussbaum",
     "education for democracy",
     [
      "Martha Nussbaum defends the humanities on democratic grounds. She argues that a democracy needs citizens who can examine their own assumptions and imagine a life unlike their own.",
      "Self-examination and imagination produce no measurable economic return. For that reason, Nussbaum notes, they are usually the first to be cut when budgets tighten. Her argument is that a society which trains only for profit will lose the civic abilities that self-government requires."
     ],
     "the question concerns the purpose of higher education, the humanities, or the relation between education and democracy."
    ],
    [
     "Vivekananda",
     "drawing out, not putting in",
     [
      "Vivekananda compresses the argument into one sentence. He said that education is the manifestation of the perfection already in man. The important word is manifestation. Nothing is being installed. Something already present is being drawn out.",
      "On this view, a teacher’s work is closer to gardening than to construction. A system built for efficient transmission will always mistake its own efficiency for success."
     ],
     "the answer needs an Indian framing of education as the development of character and capacity."
    ]
   ],
   "examples": [
    [
     "NEP 2020: structure and formation",
     [
      "The Union Cabinet approved the National Education Policy on 29 July 2020. The policy replaces the 10+2 school structure with a 5+3+3+4 design covering ages 3 to 18. The policy removes rigid separation between streams, allows multiple entry and exit in higher education, and targets a 50 per cent gross enrolment ratio in higher education by 2035.",
      "Every one of these is a change to structure. Whether formation changes depends on things the policy cannot legislate. A teacher with a class of sixty, an assessment system that still rewards recall, and colleges that do not value unusual subject combinations can all defeat the intention. Flexibility creates room for a different education. Flexibility does not by itself fill the room."
     ],
     "Can a policy change what students become, or only how schooling is arranged? Separate reforms of structure from changes in teaching and assessment."
    ],
    [
     "Coaching culture and the rational student",
     [
      "Coaching is usually criticised as a cultural failing. A better reading is that coaching is a rational response to the incentive a student faces. When one ranked examination decides access and the syllabus is finite, drilling pays better than exploration.",
      "The human cost is visible. According to the National Crime Records Bureau, more than 13,000 students died by suicide in 2022, and students made up 7.6 per cent of all suicides that year. In January 2024 the Ministry of Education issued guidelines for coaching centres. The guidelines require registration, bar the enrolment of students below sixteen, forbid misleading promises of ranks, and limit classes to five hours a day. The guidelines regulate the supply of coaching. They do not change the examination incentive that creates the demand."
     ],
     "Is the problem the coaching centre or the incentive that makes it rational? Ask what would change if the examination changed."
    ],
    [
     "ASER and the basics that must come first",
     [
      "ASER 2024 surveyed 649,491 children across 17,997 villages in 605 districts. The survey is the largest picture available of what rural schooling actually delivers. Among Class 5 children in government schools, the share who could read a Class 2 text rose from 38.5 per cent in 2022 to 44.8 per cent in 2024. Among Class 3 children in government schools, the figure rose from 16.3 per cent to 23.4 per cent, the highest since ASER began in 2005.",
      "The findings must be read both ways. The recovery from pandemic learning loss is real, and the trend is upward. Yet more than half of Class 5 children in government schools still cannot read at Class 2 level. No argument about critical thinking reaches a child who cannot read the question."
     ],
     "Can a school teach questioning before it has taught reading? Place foundational literacy before higher aims in the sequence of education."
    ],
    [
     "Employability: rival aim or precondition?",
     [
      "The India Skills Report, produced by CII with Wheebox and AICTE, put overall graduate employability at 54.81 per cent in 2025, up from 51.25 per cent in 2024. Roughly half of graduates, on this measure, are not ready for the jobs their degrees name.",
      "The usual framing sets skills against liberal education, as though a person must choose. A better framing is sequence. A graduate who cannot find work does not become a reflective citizen at leisure. The graduate falls into insecure work, which removes the freedom that liberal education is supposed to create. Employability is therefore a precondition for other aims of education, not a rival to them."
     ],
     "Does preparing for work betray the purpose of education? Consider whether economic security is the condition for the freedoms education promises."
    ],
    [
     "The honest counter-case: knowledge that must be retained",
     [
      "The anti-rote argument is often overstated, and a good answer says so. Some disciplines cannot be practised by looking things up. A surgeon in theatre and a pilot in an emergency work under time pressure where recall must be automatic.",
      "Mathematics is the clearest case in school. A student who has not internalised arithmetic and algebra cannot follow an argument that uses them, because working memory is consumed by the mechanics. Chess masters see patterns rather than pieces, and their pattern library is memorised. The real distinction is not memory against understanding. The distinction is between memorised content that enables thought and memorised content that replaces it."
     ],
     "Where does memorisation serve thinking rather than replace it? Identify the knowledge a discipline needs to have ready before judgment can work."
    ]
   ],
   "topics": [
    [
     "2023B4",
     [
      "The saying suggests that education is not the same as the content taught in school. Most facts learned for examinations are forgotten, yet an educated person remains different from one who was never educated. What remains is a way of attending to the world: curiosity, the habit of checking a claim, the confidence to ask a question and the patience to follow an argument. Tagore built Santiniketan around this idea, and Vivekananda described education as drawing out a capacity already present.",
      "Freire explains why many systems fail to leave anything behind. In the banking model, the student stores information in order to return it in an examination. Once the examination is over, nothing remains, because nothing was built. The coaching economy shows how rational this can be for the student when a single ranked examination decides the future.",
      "The saying has a limit that a good essay should state. Some content must remain, because it is the ground on which thinking stands. ASER shows that many children still cannot read a simple text, and no disposition can grow without that foundation. Education is what remains after the details are forgotten, but only if the foundations were first learned well enough never to be forgotten."
     ]
    ],
    [
     "2026B2",
     [
      "A person with little education often has firm answers because they have met few alternatives. Education introduces other views, other evidence and other ways of reasoning. Each answer learned opens further questions about its limits, its assumptions and its exceptions. A well-educated mind therefore ends with more questions, not because it knows less, but because it can see more of what is unknown.",
      "Nussbaum links this to democracy. Citizens who can question their own assumptions and imagine lives unlike their own can deliberate, compromise and correct error. Freire links it to freedom. A person who can question the arrangement they live under is no longer simply governed by it. Tagore’s wonder and Vivekananda’s drawing out describe the same growth from the inside.",
      "The statement should not be read as praise for endless doubt. Some questions do get answered, and an educated person acts on the best available answers while remaining open to revision. The better questions of an educated mind are more precise, more useful and more honest about what evidence could settle them. Questions are the sign that learning is still alive, not a reason to avoid decisions."
     ]
    ]
   ],
   "intro": [
    "Most of what a student learns for an examination is forgotten within a few years. Dates, formulas and definitions fade once they are no longer tested. Yet some people leave school changed in ways that last a lifetime, while others leave with a certificate and little else. The question is what education leaves behind once the syllabus has gone, and whether our schools are designed to produce it."
   ],
   "claim": "The lasting product of education is a disposition, not a store of facts. A well-educated person keeps the habit of attention, the willingness to be surprised and the ability to ask a better question. Facts still matter, because some knowledge must be retained before any thinking can begin. But a system that measures only what was deposited will mistake recall for education and close the minds it was meant to open.",
   "problem": [
    "Examinations reward what can be measured, and recall is the easiest thing to measure. A student facing a ranked examination with a fixed syllabus is acting rationally when they drill and memorise. Schools, coaching centres and parents respond to the same incentive. The result is a system that can report rising marks while producing people who are afraid of questions that do not have a known answer.",
    "The opposite error is also real. Critics of rote learning sometimes speak as if content does not matter at all. A child who cannot read cannot think critically about a text. A doctor who has to look up basic anatomy cannot act in an emergency. The ethical and practical question is therefore how to build the foundations that must be retained, while protecting the curiosity that makes those foundations useful."
   ],
   "distinction": [
    "A useful distinction",
    "Content that enables further thought, such as reading, arithmetic or a clinician’s knowledge of anatomy, must be retained. Content that substitutes for thought, such as a memorised model answer, can be forgotten without loss. Good education builds the first and does not confuse it with the second."
   ],
   "thinkersTitle": "Four thinkers, four tests of education",
   "together": [
    "Putting the four together",
    "Tagore shows that the lasting product of education is a disposition. Freire shows why a transmission model produces passive citizens. Nussbaum explains what a democracy loses when it trains only for employment. Vivekananda gives the Indian statement of education as drawing out what is already present. Together they explain why a good education leaves a person with more questions, and better ones."
   ],
   "examplesIntro": "The examples below test the argument against real policy and real limits. They are most useful when the answer admits both what structure can change and what it cannot.",
   "models": [
    [
     "Education leaves a disposition.",
     "Tagore believed that a mind formed by wonder keeps its curiosity long after the syllabus is forgotten. The lasting product of education is the habit of attention and the willingness to be surprised. A system that measures only recall measures the part of education that fades first."
    ],
    [
     "The banking model produces passive citizens.",
     "Freire argued that treating students as accounts into which information is deposited trains them to accept the world as described. Education that teaches students to question the arrangement they live under is a condition of democratic citizenship, not a luxury."
    ],
    [
     "Foundations must come first.",
     "ASER 2024 found that more than half of Class 5 children in government schools still cannot read a Class 2 text. Critical thinking cannot begin without literacy and numeracy. Any argument against rote learning must protect the basic knowledge that makes thinking possible."
    ],
    [
     "Incentives shape learning.",
     "Coaching culture is a rational response to ranked examinations with finite syllabi. Regulating coaching centres treats the symptom. Changing what examinations reward is the only way to change what students choose to learn."
    ],
    [
     "More questions mean better questions.",
     "An educated mind ends with more questions because it can see what remains unknown. Its questions are sharper and more answerable. Nussbaum links this capacity to self-government, because citizens who can question their assumptions can also correct their mistakes."
    ]
   ],
   "steps": [
    [
     "Define what education is for.",
     "Distinguish formation of the person from transmission of content and from training for employment."
    ],
    [
     "Identify what should remain.",
     "Name the lasting capacities, such as curiosity, reasoning and judgment, as well as the foundational knowledge that must be retained."
    ],
    [
     "Examine the incentives.",
     "Ask what examinations, rankings and admission systems actually reward."
    ],
    [
     "Use evidence on learning.",
     "Bring in ASER or employability data to show what schooling delivers in practice."
    ],
    [
     "State the counter-case.",
     "Acknowledge where memorisation and skills training are necessary."
    ],
    [
     "Connect education to citizenship.",
     "Show how questioning and imagination support democracy and social reform."
    ],
    [
     "Propose reforms at the right level.",
     "Suggest changes in assessment, teacher preparation and foundational learning, not only in structure."
    ]
   ],
   "stepsIntro": "Use the following sequence when a question concerns the purpose, methods or outcomes of education.",
   "formula": "Build the foundations that must be retained, then educate for the disposition that remains after the details fade. Judge a system by the curiosity, judgment and capacity to question that it leaves behind, not only by the marks it records."
  },
  {
   "thinkers": [
    [
     "Socrates",
     "admitted ignorance as the start of enquiry",
     [
      "Socrates built an entire philosophical practice on admitting that he knew nothing. His method was to question people who claimed expertise until the claim broke down. His conclusion was not that knowledge is impossible. His conclusion was that recognising one’s own ignorance is the only honest place to start.",
      "He described himself as a midwife rather than a teacher, because understanding cannot be handed over. Understanding has to be delivered out of the person who holds it. On this view the doubter is not obstructing enquiry. The doubter is conducting it, because certainty is where enquiry stops."
     ],
     "the answer needs to show why questioning is the beginning of knowledge, or why expertise must be tested."
    ],
    [
     "Einstein",
     "the assumption nobody examines",
     [
      "Einstein applied the same disposition to physics. He questioned the absoluteness of simultaneity, which every competent physicist had treated as too obvious to examine. The question produced relativity.",
      "He then spent decades doubting quantum mechanics, and he was largely wrong. Yet his objections sharpened the theory he was attacking. Productive doubt is not scepticism about everything. Productive doubt is a refusal to exempt the one assumption that nobody is examining."
     ],
     "the question concerns scientific discovery, originality, or how even mistaken doubt can improve knowledge."
    ],
    [
     "Mill",
     "contested opinion as living truth",
     [
      "Mill gives the social version of the argument. An opinion that is never contested is held as dead dogma rather than as living truth. Even a false challenge is useful, because answering it forces the holder to understand why they believe what they believe.",
      "A research culture therefore needs the doubter out of self-interest, not out of tolerance. An institution that treats questioning as disloyalty loses its only mechanism for discovering that it is wrong. The institution will go on being wrong with growing confidence."
     ],
     "an answer needs to defend dissent, open debate or institutional scrutiny."
    ],
    [
     "Kalam",
     "failure reviewed in public",
     [
      "A. P. J. Abdul Kalam’s account of the SLV-3 failure shows doubt working inside an institution. The first launch in 1979 failed. The review was held openly, the cause was traced, and nobody was made a scapegoat. The next attempt, in 1980, succeeded.",
      "Kalam recalled that Satish Dhawan, then chairman of ISRO, faced the press himself after the failure and let Kalam announce the success a year later. The sequence is possible only where error is treated as information rather than as disgrace."
     ],
     "the case involves research institutions, leadership after failure, or learning from mistakes."
    ]
   ],
   "examples": [
    [
     "ANRF and funding for risk",
     [
      "The Anusandhan National Research Foundation Act 2023 created a single body to fund and direct research across the sciences. The foundation’s target is 50,000 crore rupees over 2023 to 2028. About 14,000 crore is to come from the Centre. The remaining 36,000 crore, roughly seventy per cent, is expected from industry, philanthropy and other non-government sources.",
      "The design raises a real question. Funding raised from sponsors tends to favour work with a demonstrable application. Exploratory research needs the opposite: freedom to fail and to ask questions whose value is not yet clear. Whether ANRF protects risk depends on how much of its money is insulated from the demand to show a return."
     ],
     "Does the funding system reward safe confirmation or risky questions? Look at who pays and what they expect in return."
    ],
    [
     "Peer review, replication and predatory journals",
     [
      "Science does not rest on the honesty of individual scientists. Science rests on machinery designed to catch error: peer review before publication, replication afterwards and retraction when a result fails. Every part of the machinery is under strain. Large replication efforts in psychology and cancer biology have failed to reproduce a substantial share of published findings.",
      "Predatory journals publish for a fee without meaningful review, which gives a claim the appearance of scrutiny without its substance. Reviewers are unpaid and overloaded, and replication attracts neither funding nor citation. When doubt becomes a profession and the profession stops rewarding it, the label of science outlasts the process that earned it."
     ],
     "Are the institutions of doubt still doing their work? Ask whether replication, review and retraction are rewarded or neglected."
    ],
    [
     "Scientific temper as a constitutional duty",
     [
      "Article 51A(h), inserted by the 42nd Amendment in 1976, makes it a fundamental duty of every citizen to develop the scientific temper, humanism and the spirit of inquiry and reform. India is unusual in placing such a duty in a constitution at all.",
      "The duty is not enforceable, which raises the same question as the Directive Principles. An unenforceable duty still sets a standard against which public conduct can be judged, including the state’s own conduct. A government that funds research while promoting pseudoscience in official communication fails a duty named in its own Constitution. The demand falls on institutions as much as on citizens."
     ],
     "What does a duty to think scientifically require of the state? Apply the standard to official communication and policy, not only to citizens."
    ],
    [
     "Legitimate doubt and motivated reasoning",
     [
      "The line between doubt and denial is not the line between doubt and belief, because doubt is the correct scientific posture. The line lies between doubt that specifies what would change its mind and doubt that does not.",
      "A person who says a vaccine trial was too short to detect a specific long-term effect has made a claim that evidence can address. A person who treats every new safety study as further proof of a cover-up has adopted a position no evidence can reach. The same test separates a climate scientist arguing about the sensitivity of a model from a commentator for whom no observed warming would ever settle the question."
     ],
     "Is the doubt answerable? Ask what evidence would count against the doubter’s position."
    ],
    [
     "Bodies where dissent is recorded",
     [
      "Whether an expert body deliberates or merely ratifies is usually visible in whether disagreement leaves a trace. The Reserve Bank’s Monetary Policy Committee publishes minutes that show how each member voted. A persistent minority view is on the public record and can be tested against what happens next.",
      "A committee whose recommendations are always unanimous is either very lucky in its composition or is not really deliberating. The design lesson applies to any expert body. Requiring that dissent be recorded, rather than merely permitted, changes the incentive. A member who must sign their name to a decision reads the file differently."
     ],
     "Does the institution make dissent visible? Look for recorded votes, minority opinions and published reasons."
    ]
   ],
   "topics": [
    [
     "2024A4",
     [
      "Science is sometimes imagined as a collection of certainties. In fact, its history is a series of accepted beliefs that someone doubted. Einstein questioned the absoluteness of simultaneity, which physicists had treated as obvious, and relativity followed. Socrates made admitted ignorance the starting point of all enquiry. The doubter is a true scientist because doubt is how error is found, and finding error is how knowledge improves.",
      "Doubt also has an institutional form. Peer review, replication and retraction are organised doubt, designed so that no claim is accepted merely because of who made it. Kalam’s account of the SLV-3 failure shows an institution treating failure as information, reviewing it in public and succeeding a year later. Mill adds that even wrong challenges are useful, because answering them keeps knowledge alive rather than dead.",
      "The statement needs one qualification. Not every doubter is a scientist. A person who rejects every vaccine study or every climate observation doubts in a way that no evidence can answer. The scientific doubter is marked by discipline: they state what evidence would change their mind, and they accept the result. The true scientist doubts in order to know, not in order to avoid knowing."
     ]
    ],
    [
     "2021B2",
     [
      "A blind date is a meeting whose outcome cannot be known in advance. Research is similar. A genuine research question is one whose answer is not already known, and the researcher must be willing to be surprised, disappointed or proved wrong. Research whose conclusion is fixed before it starts is not research but advocacy.",
      "The comparison also explains why research needs a certain courage and institutional protection. Many experiments fail. Kalam’s account of the first SLV-3 launch shows that failure, reviewed honestly, is often the step before success. Funding systems that demand guaranteed results discourage the blind date altogether. The design of ANRF, which relies heavily on sponsors, raises exactly this question: will anyone fund a meeting whose outcome is unknown?",
      "A blind date is not random, however. The researcher prepares, chooses a method and knows what to look for. Socrates questioned with a method, and Einstein doubted a specific assumption. Research combines openness about the result with discipline in the method. The negative result, the failed replication and the surprising finding are all part of the knowledge the date produces."
     ]
    ]
   ],
   "intro": [
    "Science is often presented as a body of settled facts. In practice, science advances by doubting what everyone else takes for granted. The same is true of good administration and good research: progress depends on someone asking whether the accepted view is actually right. The difficulty is that doubt can also be used to reject evidence that is inconvenient. The task is to distinguish productive doubt, which can be answered by evidence, from doubt that no evidence could ever satisfy."
   ],
   "claim": "Doubt is the method of science, not its failure. A scientist who questions accepted assumptions is doing the work that allows knowledge to improve. But productive doubt is disciplined: it names what evidence would change its mind. Institutions must protect such doubt, reward honest negative results and record dissent, because the alternative to doubt is not certainty but undetected error.",
   "problem": [
    "Every institution prefers confidence. Funding bodies reward projects that promise results, journals prefer positive findings, and organisations treat a raised objection as disloyalty. Under such pressure, researchers learn to confirm rather than to test. The published record then fills with findings that cannot be replicated, and errors survive because nobody inside the system is rewarded for finding them.",
    "Doubt, however, is not good in itself. A person who rejects every vaccine study or every climate observation is also doubting, but in a way that no evidence can reach. Treating such doubt as scientific gives it an authority it has not earned. The practical question is how to protect questioning without giving equal standing to denial, and how to build institutions that treat error as information rather than as disgrace."
   ],
   "distinction": [
    "A useful distinction",
    "Productive doubt states what would count as an answer. Motivated doubt treats every new piece of evidence as further proof of its suspicion. The test is simple: ask the doubter what would change their mind."
   ],
   "thinkersTitle": "Four thinkers, four tests of enquiry",
   "together": [
    "Putting the four together",
    "Socrates shows that enquiry starts from admitted ignorance. Einstein shows that progress often comes from questioning the assumption everyone else accepts. Mill explains why institutions need challenges, even wrong ones. Kalam shows how an institution can treat failure as information. Together they make doubt a method with rules, not a mood."
   ],
   "examplesIntro": "The examples below show where institutions protect doubt, where they fail to, and where doubt turns into denial. They are most useful when the answer asks what the institution rewards.",
   "models": [
    [
     "Doubt begins enquiry.",
     "Socrates held that recognising one’s own ignorance is the only honest place to start. Certainty ends enquiry. The doubter is not an obstacle to knowledge but the person doing the work that allows knowledge to grow."
    ],
    [
     "Productive doubt targets an unexamined assumption.",
     "Einstein questioned the absoluteness of simultaneity, which physicists had treated as obvious. Productive doubt does not question everything at once. Productive doubt questions the one assumption that nobody else is examining."
    ],
    [
     "Contested opinions stay alive.",
     "Mill argued that an opinion never challenged becomes dead dogma. Even a false challenge forces believers to understand their reasons. Institutions therefore need critics for their own sake, not merely out of tolerance."
    ],
    [
     "Institutions must reward honest failure.",
     "Kalam’s account of the SLV-3 failure shows that error reviewed openly can lead to success. Research systems that punish negative results produce findings that cannot be replicated and errors that nobody is placed to catch."
    ],
    [
     "Doubt must be answerable.",
     "Legitimate doubt states what evidence would change its mind. Doubt that treats every new study as proof of a conspiracy is not scientific. The test separates a scientist debating a model from a denier whom no evidence could ever satisfy."
    ]
   ],
   "steps": [
    [
     "Define the role of doubt.",
     "Explain that doubt is the method by which knowledge is tested and improved."
    ],
    [
     "Identify the assumption being questioned.",
     "Show what accepted belief the doubt targets and why it matters."
    ],
    [
     "Test whether the doubt is answerable.",
     "Ask what evidence would change the doubter’s mind."
    ],
    [
     "Examine the institution.",
     "Consider whether funding, publication and promotion reward testing or confirmation."
    ],
    [
     "Record and protect dissent.",
     "Point to mechanisms such as published votes, minority opinions and replication."
    ],
    [
     "Treat failure as information.",
     "Show how honest review of failure leads to better results."
    ],
    [
     "Connect to citizenship.",
     "Link scientific temper to Article 51A(h) and to public reasoning."
    ]
   ],
   "stepsIntro": "Use the following sequence when a question concerns science, research, expertise or scepticism.",
   "formula": "Doubt is the method of science when it is disciplined and answerable. Protect doubt in institutions by rewarding replication, recording dissent and treating failure as information, and reject doubt that no evidence could ever satisfy."
  },
  {
   "thinkers": [
    [
     "Plato",
     "number turns the mind towards what does not change",
     [
      "Plato placed mathematics at the centre of education for a reason that had nothing to do with calculation. For him, number was the discipline that turns the mind away from the shifting world of appearances towards what does not change.",
      "He also believed that the ratios producing harmony in music were the same ratios that ordered the cosmos. For Plato, reason and beauty were not two neighbouring qualities. They were one quality perceived twice."
     ],
     "the question links mathematics with order, harmony or education of the mind."
    ],
    [
     "Aristotle",
     "contemplation as a pleasure in itself",
     [
      "Aristotle reached a similar position by a different route. He held that the highest human activity is contemplation, the mind engaged with what is necessarily true.",
      "He insisted that contemplation is pleasurable in itself, not merely as a means to something else. On this account, the joy of understanding is not a side effect of reasoning. The joy is part of what makes reasoning a complete human good."
     ],
     "an answer needs to show that intellectual work has intrinsic value, not only practical use."
    ],
    [
     "Einstein",
     "beauty as a guide to truth",
     [
      "Einstein treated beauty as evidence. He said more than once that the elegance of a theory was a sign of its truth. Many physicists accepted general relativity for its formal elegance before observation had confirmed it.",
      "The claim is strong because it suggests that the mind recognises rightness before it can prove it. Einstein’s own career shows both sides: elegance guided him to relativity, and the evidence then confirmed what elegance suggested."
     ],
     "the question concerns scientific creativity, elegance, or the relation between intuition and proof."
    ],
    [
     "Tagore",
     "beauty as human recognition of coherence",
     [
      "Tagore pressed the objection in his well-known conversation with Einstein in 1930. He argued that truth without a human perceiver is an empty abstraction.",
      "On his account, beauty is not decoration added to reason. Beauty is the form in which a human being registers coherence. The disagreement between Tagore and Einstein suggests that an idea with large consequences tends to be simple, not because reality is simple, but because a simple statement is what a mind can hold, turn over and act upon."
     ],
     "the answer needs to bring in the human side of knowledge, or to connect science with art."
    ],
    [
     "Ambedkar",
     "compression in constitutional drafting",
     [
      "Ambedkar’s drafting of the Constitution is the Indian example of simplicity with large consequences. What made the document usable was not its length but its compression. A vast moral and political argument was reduced to articles an ordinary citizen could invoke.",
      "Article 17 abolishes untouchability in a sentence of eleven words. The consequences were vast because the statement was simple enough to be carried, remembered and demanded."
     ],
     "the question asks how simple ideas produce large social or political consequences."
    ]
   ],
   "examples": [
    [
     "India’s mathematical inheritance",
     [
      "Aryabhata, working in the fifth century, gave a strikingly accurate value for pi and a method for solving indeterminate equations. Brahmagupta, in the seventh century, gave the first systematic rules for zero and for negative numbers as quantities in their own right.",
      "Ramanujan, with almost no formal training, produced thousands of results that he presented largely without proof. Many were confirmed only decades later, and some still generate new work. The tradition shows that intuition finds the result and proof secures it. The two are not rivals but stages. Ramanujan needed Hardy, and Hardy had nothing to prove without Ramanujan."
     ],
     "How do intuition and proof relate in mathematics? Show that each needs the other."
    ],
    [
     "When elegance misleads",
     [
      "Beauty is a good guide and a bad criterion, and physics shows why. String theory is mathematically elegant, unifies forces that resist unification and has attracted enormous talent for four decades. String theory has not produced a prediction that experiment can currently test and rule out.",
      "Supersymmetry, elegant for similar reasons, predicted particles that the Large Hadron Collider has not found in the expected ranges. The physicist Sabine Hossenfelder has argued that aesthetic criteria have been doing work in theory choice that evidence should be doing. The lesson transfers to policy. A framework that is beautiful, explains everything and cannot be falsified has stopped being a scientific claim."
     ],
     "When is elegance evidence and when is it only appeal? Ask whether the idea makes a prediction that could be wrong."
    ],
    [
     "Simplicity as discipline in design",
     [
      "Simplicity in design is expensive because it requires knowing exactly what can be removed. Hospital signs that a frightened person can follow, a form that a first-time applicant can complete without help, and a warning label that survives translation into many languages all depend on hidden work about what to leave out.",
      "The failure is the opposite of clarity: a document written to protect its author, where every contingency is covered, nothing is prioritised, and the reader cannot find the one instruction that matters. The test is not how short the result is. The test is whether the person it was written for can act on it without asking anyone."
     ],
     "Is the simplicity the product of understanding or of omission? Judge by whether the intended user can act on it."
    ],
    [
     "Two cultures and the split at Class XI",
     [
      "C. P. Snow’s lecture of 1959 described a British intellectual life divided into literary and scientific cultures that could no longer talk to each other. India institutionalises the split earlier than most systems. The choice of stream at Class XI, made at fifteen or sixteen, has been close to irreversible. A commerce student cannot ordinarily return to physics, and a science student often drops history entirely.",
      "NEP 2020 tries to address the split by removing rigid separation between streams and permitting combinations across them. Whether the reform reaches classrooms depends on board examinations and on what colleges accept at admission, neither of which a policy document controls."
     ],
     "Does the education system allow reason and imagination to meet? Look at the choices students are forced to make and when."
    ],
    [
     "Occam’s razor in policy",
     [
      "Occam’s razor says that entities should not be multiplied beyond necessity. The principle is a rule about explanation, not about reality, and reality is often complicated. The abuse in policy is to treat the simplest story as the true one because it is easiest to communicate.",
      "Blaming farmer distress on a single cause, or malnutrition on food availability alone, ignores sanitation, maternal health and distribution within the household. The result is an intervention that is clean, measurable and insufficient. The correct use of the razor is to prefer the simpler of two explanations that fit the evidence equally well. The razor says nothing in favour of a simple explanation that fits the evidence worse."
     ],
     "Is the simple explanation the best fit or only the easiest? Compare how well each explanation accounts for the evidence."
    ]
   ],
   "topics": [
    [
     "2023B2",
     [
      "Music and mathematics share structure. Both depend on pattern, proportion and the resolution of tension. Plato believed that the ratios producing harmony in music were the same ratios that ordered the cosmos, which is why he placed mathematics at the centre of education. Aristotle held that contemplation of necessary truths is pleasurable in itself. Calling mathematics the music of reason captures the experience of those who work in it: a proof resolves like a chord.",
      "The comparison also explains how mathematics is discovered. Ramanujan produced results by something close to hearing a pattern before he could prove it, and Hardy supplied the proofs. Einstein treated elegance as a sign of truth. In both cases, a sense of form guided the mind to the result, and rigour confirmed it.",
      "The analogy has a limit. Music is judged by the ear, but mathematics must also be proved. String theory shows that an elegant structure can attract generations of effort without producing a test. The music of reason is a guide to discovery, but proof and evidence remain the final judges. The phrase is best understood as a reminder that rigour, pursued far enough, produces its own kind of beauty."
     ]
    ],
    [
     "2024B3",
     [
      "Many ideas that changed the world can be stated in a sentence. Equality before the law, the germ theory of disease and the abolition of untouchability are all simple to state. Article 17 abolishes untouchability in a sentence of eleven words, and its consequences have been vast. A simple statement can be carried, remembered, taught and demanded, which is why simplicity helps large consequences to follow.",
      "Tagore’s conversation with Einstein suggests why. Simplicity is not a property of reality, which is often complicated. Simplicity is what a human mind can hold and act upon. Good design shows the same principle: a form or a warning that people can act on without help is the product of a great deal of work on what to leave out.",
      "The claim should not be taken as a rule that every simple idea is important or true. Occam’s razor is abused when a simple explanation is preferred even though it fits the evidence worse, as when malnutrition is blamed on food supply alone. The ideas with large consequences are simple in statement but deep in understanding. Their simplicity comes after the complexity has been understood, not before."
     ]
    ],
    [
     "2022A3",
     [
      "The statement describes history as a contest between two tempers. The scientific temper tests claims against evidence. The romantic temper trusts feeling, tradition and inspiration. Much of modern history does show the victory of the first: medicine displaced superstition, and experiment displaced authority. Article 51A(h) of the Constitution asks every citizen to develop the scientific temper and the spirit of inquiry.",
      "Yet the contest was never simply reason against feeling. Einstein treated beauty as a guide to truth. Ramanujan found results by intuition that others later proved. Plato saw mathematics and music as expressions of the same harmony. The scientific achievement often begins with something close to the romantic sense of wonder, disciplined by evidence.",
      "The better reading is that the victory of rigour was not a victory of coldness. Rigour, pursued far enough, produces its own kind of wonder. Tagore’s objection also deserves a place: science serves human beings, and a science cut off from human values can produce power without direction. History is best seen not as the defeat of the romantic by the scientific, but as the training of imagination by evidence."
     ]
    ]
   ],
   "intro": [
    "Mathematics is often taught as a set of rules and procedures, dry and mechanical. Yet many mathematicians and scientists describe their work in terms of beauty, harmony and elegance. They say a proof can be beautiful and a theory can be too elegant to be wrong. The question is what this experience of beauty tells us about reason, and whether simplicity and elegance are reliable guides to truth."
   ],
   "claim": "Rigour and beauty are not opposites. A simple, elegant statement is often a sign of deep understanding, because it shows what can be removed without loss. Ideas with large consequences are usually simple enough to be carried, remembered and acted upon. But elegance is a guide, not a proof. A beautiful theory must still be tested, and a simple explanation must still fit the evidence better than the complicated one it replaces.",
   "problem": [
    "Many students experience mathematics and science as a list of procedures to memorise. The popular picture sets reason against feeling, the scientist against the romantic, and precision against wonder. The picture misses what practitioners report: that understanding a proof or a law feels like seeing a pattern fall into place.",
    "The opposite error is to treat beauty as enough. Theories that are elegant but untested can attract decades of effort without producing evidence. In policy, a simple explanation is attractive because it is easy to communicate, even when the causes are many. The task is to value simplicity as the result of understanding while refusing simplicity that comes from ignoring what does not fit."
   ],
   "distinction": [
    "A useful distinction",
    "Simplicity that comes after understanding is compression: it keeps everything essential and removes the rest. Simplicity that comes before understanding is omission: it leaves out what is inconvenient. The first is insight. The second is a shortcut."
   ],
   "thinkersTitle": "Five thinkers, five tests of rigour and beauty",
   "together": [
    "Putting the five together",
    "Plato and Aristotle show that reason has its own beauty and its own pleasure. Einstein shows that elegance can guide discovery. Tagore reminds us that beauty is how a human mind recognises coherence. Ambedkar shows that a simple statement can change a society because people can carry and demand it. Together they explain why rigour, pursued far enough, produces its own kind of wonder."
   ],
   "examplesIntro": "The examples below show elegance guiding discovery, elegance misleading, and simplicity as a discipline in design and policy. They are most useful when the answer separates compression from omission.",
   "models": [
    [
     "Reason has its own beauty.",
     "Plato believed that the ratios behind musical harmony also ordered the cosmos. Mathematics, for him, turned the mind towards what does not change. The experience of beauty in a proof is not decoration. The experience is part of understanding."
    ],
    [
     "Elegance guides but does not prove.",
     "Einstein treated elegance as a sign of truth, and general relativity was later confirmed. Yet string theory shows that elegance can attract decades of effort without a testable prediction. Beauty points the way, and evidence decides."
    ],
    [
     "Simple statements carry large consequences.",
     "Article 17 abolishes untouchability in a sentence of eleven words. A simple statement can be remembered, taught and demanded, which is how it changes behaviour on a large scale."
    ],
    [
     "Simplicity must come after understanding.",
     "Simplicity that compresses knowledge is insight. Simplicity that omits inconvenient causes is a shortcut. Occam’s razor prefers the simpler of two explanations only when both fit the evidence equally well."
    ],
    [
     "Intuition and proof are stages, not rivals.",
     "Ramanujan found results that Hardy helped to prove. Intuition discovers and proof secures. A mature scientific temper values both, rather than setting feeling against reason."
    ]
   ],
   "steps": [
    [
     "Define the terms.",
     "Explain what is meant by rigour, beauty, simplicity or the scientific temper in the question."
    ],
    [
     "Show the link between reason and beauty.",
     "Use Plato, Aristotle or Einstein to show why understanding can be experienced as beauty."
    ],
    [
     "Give an Indian example.",
     "Use Aryabhata, Brahmagupta, Ramanujan or Ambedkar’s drafting."
    ],
    [
     "Separate compression from omission.",
     "Explain when simplicity reflects understanding and when it hides complexity."
    ],
    [
     "Test the claim.",
     "Use a case such as string theory to show that elegance must still meet evidence."
    ],
    [
     "Apply to public life.",
     "Show how simple design, clear law or clear policy communication helps people act."
    ],
    [
     "Conclude with balance.",
     "Present rigour and imagination as partners in discovery."
    ]
   ],
   "stepsIntro": "Use the following sequence when a question concerns mathematics, science, simplicity or the relation of reason and beauty.",
   "formula": "Value simplicity when it is the product of understanding, and treat elegance as a guide rather than a proof. Let intuition propose and evidence decide, so that rigour and wonder work together."
  },
  {
   "thinkers": [
    [
     "Ambedkar",
     "education first",
     [
      "Ambedkar’s instruction to educate, agitate and organise put education first on purpose. He had watched a community denied not only land and office but the right to read. He understood that such exclusion was not incidental to their subordination. Exclusion from knowledge was the machinery of it.",
      "Knowledge, in his account, turns a grievance into a claim and a claim into a constitutional argument. The empire that mattered was the one held over what people believed they were entitled to. His own life proves the point: a scholar redrafted the terms of membership of a nation."
     ],
     "the answer needs to connect knowledge with social justice, empowerment or the power to exclude."
    ],
    [
     "Kalam",
     "knowledge as national capital",
     [
      "Kalam framed the same insight as a national project. He argued that a country’s real capital lies in the knowledge of its young people, and that self-reliance in technology is a form of sovereignty.",
      "His concern with building things indigenously came from watching other countries decide what India would be allowed to build. For Kalam, a nation that cannot make its own critical technologies depends on the decisions of others."
     ],
     "the question concerns technology, self-reliance, research or the demographic dividend."
    ],
    [
     "Vivekananda",
     "confidence in one’s own thought",
     [
      "Vivekananda supplies an older Indian version of the argument. He said that education is the manifestation of the perfection already in man. He also argued that a nation confident in its own thought does not need to borrow its self-image from anyone.",
      "For Vivekananda, intellectual self-respect was the foundation of national strength. A people who believe their own ideas are worthless will not produce new ones."
     ],
     "the answer needs to link education with national confidence, culture or civilisational identity."
    ],
    [
     "Nye",
     "power through attraction",
     [
      "Joseph Nye, an American political scientist, coined the term soft power in 1990. He defined soft power as the ability to get what one wants through attraction rather than coercion or payment. Culture, political values and foreign policies seen as legitimate are its main sources.",
      "Nye’s framework explains why ideas, education and culture matter in international relations. Nye also warned that soft power is hard to control and cannot be switched on by a government. Attraction depends on how others perceive a country, not only on what it does."
     ],
     "the question concerns diplomacy, culture, diaspora or influence without force."
    ]
   ],
   "examples": [
    [
     "The demographic dividend and the employability gap",
     [
      "The demographic dividend is a window, not an endowment. The dividend pays only if the people entering the workforce can do work that someone will pay for, and the window closes as the population ages. The India Skills Report put graduate employability at 54.81 per cent in 2025, up from 51.25 per cent the year before.",
      "Roughly half of graduates, on that measure, are not immediately employable in the roles their qualifications name. The gap is less about the number of institutions than about the distance between what a syllabus certifies and what an employer needs. The distance widens when curricula are revised once a decade and work changes every year."
     ],
     "Is the knowledge economy built on degrees or on capacity? Compare the number of graduates with what they can actually do."
    ],
    [
     "Brain drain, remittances and the diaspora",
     [
      "Brain drain assumes departure is a net loss, and the accounting is more complicated. India received about 129 billion dollars in remittances in 2024, the largest inflow of any country and well ahead of Mexico at around 68 billion. A diaspora also supplies capital, market access, reputation and returning founders who bring practices learned elsewhere.",
      "The honest counter-argument remains. The sending country funded the education, and another economy captures the productivity. The loss is greatest when the emigrants are the most highly trained. Whether departure becomes drain or circulation depends largely on whether return is attractive."
     ],
     "Is the diaspora a loss or an extension of national capacity? Ask what would make talent return or stay connected."
    ],
    [
     "Research spending below one per cent",
     [
      "India’s gross expenditure on research and development is about 0.64 per cent of GDP, a figure that has barely moved in two decades of rapid growth. Israel spends about 6 per cent, South Korea about 5, the United States about 3.4 and China about 2.4. China rose from roughly 0.6 per cent in the late 1990s during its fastest growth years.",
      "The composition matters as much as the total. In high-spending economies, most research is funded by private firms. In India, the state carries an unusually large share, which is why ANRF was designed to draw in industry money. A country can import technology at India’s level of spending. A country cannot set the direction of technology at that level."
     ],
     "Can a country lead in ideas without investing in producing them? Compare research spending and who pays for it."
    ],
    [
     "Semiconductors and technological sovereignty",
     [
      "The India Semiconductor Mission was approved on 15 December 2021 with an outlay of 76,000 crore rupees. Micron’s assembly and test plant at Sanand was cleared in June 2023. The Tata joint venture with Taiwan’s Powerchip at Dholera, approved in February 2024, is the first commercial wafer fabrication unit, planned at 50,000 wafer starts a month on a 28 nanometre process.",
      "The 28 nanometre node is the workhorse for cars, appliances and defence electronics, and it is several generations behind the leading edge. The doctrine is therefore supply security, not frontier leadership. The two goals should not be confused in an answer."
     ],
     "What does technological sovereignty require, and what is realistic? Separate security of supply from leadership at the frontier."
    ],
    [
     "Culture, scholarships and soft power",
     [
      "The Indian Technical and Economic Cooperation programme, running since 1964, trains civil servants, engineers and officers from partner countries in Indian institutions. The programme builds a network of people across Africa, Asia and the Pacific with direct professional experience of India. Alongside it sits the influence of yoga, cinema and food, and the International Day of Yoga observed since 2015.",
      "The useful distinction is between reach and conversion. Cultural familiarity lowers the cost of a relationship. Familiarity does not by itself produce a vote at the United Nations or a defence agreement. Soft power reduces friction. Soft power does not deliver outcomes on demand."
     ],
     "Does cultural influence translate into outcomes? Distinguish familiarity from influence over decisions."
    ]
   ],
   "topics": [
    [
     "2024A2",
     [
      "Empires of the past were built on territory, trade routes and armies. Empires of the future will increasingly be built on the ability to generate and apply knowledge. Kalam argued that a country’s real capital is the knowledge of its young people and that technological self-reliance is a form of sovereignty. The semiconductor mission and the Anusandhan National Research Foundation show India trying to build such capacity.",
      "Knowledge power has two forms. The first is the capacity to create technology, medicine and institutions. The second is soft power, which Nye described as influence through attraction. India’s diaspora, its ITEC training programme and its culture all extend influence without force. Yet influence is fragile if the capacity beneath it is thin. Research spending of about 0.64 per cent of GDP and an employability rate near half show how much remains to be built.",
      "Ambedkar’s warning completes the argument. Control over knowledge has always been a tool of exclusion, and an empire of the mind can be built on propaganda as easily as on truth. The empires of the mind worth building are those that widen access to knowledge and remain accountable to the people they serve. Otherwise the new empire only reproduces the old exclusion in a new form."
     ]
    ],
    [
     "2025A3",
     [
      "Thought finds a world when it discovers what already exists: the laws of physics, the structure of a cell or the history of a people. Thought creates a world when ideas change what people believe is possible, and so change what they attempt. Constitutional rights, scientific institutions and technologies all began as ideas before they became facts.",
      "Ambedkar’s life shows both movements. He studied the social order to understand how caste worked, and then used that knowledge to draft a Constitution that created new rights. Vivekananda argued that a nation confident in its own thought will act differently from one that borrows its self-image. What a society believes decides what it attempts, and what it attempts decides what exists.",
      "The creative power of thought carries responsibility. Ideas can create a world of equal citizenship, but they can also create a world of manufactured grievance and division. Knowledge that is not tested against evidence and not accountable to the people it affects can build a false world. The task is to join the discovering power of thought, which respects evidence, with its creating power, which imagines what could be better."
     ]
    ]
   ],
   "intro": [
    "For most of history, power meant land, armies and resources. In the present century, the decisive advantage increasingly lies in knowledge: the ability to produce ideas, test them and turn them into technology, institutions and influence. The question is what an empire of the mind actually means, who holds it, and whether it can be used to free people as well as to control them."
   ],
   "claim": "The trained mind has become the decisive asset of nations. Territory can be occupied and resources exhausted, but a population able to generate, test and apply ideas produces advantages that cannot simply be seized. Thought both discovers a world and creates one, because what a society believes possible decides what it attempts. Yet an empire of the mind can be built on false ideas as easily as true ones, so knowledge must remain accountable to the people it governs.",
   "problem": [
    "India’s ambitions rest on the claim that a young population and a strong technical workforce can make the country a knowledge power. Yet the foundations are uneven. Around half of graduates are not ready for the jobs their degrees name. Research spending remains well below that of leading economies. Many of the most highly trained people leave for other countries. An empire of the mind requires more than a large number of degrees.",
    "The claim also has a darker side. The same capacity that spreads scientific knowledge spreads propaganda. Control over what people believe is a form of power, and it has always been used to exclude. Ambedkar saw that denying a community the right to read was the machinery of its subordination. The question is not only how to build a knowledge economy, but how to make knowledge a means of freedom rather than a new instrument of control."
   ],
   "distinction": [
    "A useful distinction",
    "Hard power compels through force or payment. Soft power attracts, so that others come to want what you want. Knowledge power creates the capacity to produce new ideas and technologies. An empire of the mind needs the third, and it can generate the second, but it cannot be imposed like the first."
   ],
   "thinkersTitle": "Four thinkers, four tests of knowledge as power",
   "together": [
    "Putting the four together",
    "Ambedkar shows that control over knowledge is control over people, and that education is the first step to freedom. Kalam treats knowledge and technology as national capital and sovereignty. Vivekananda adds the need for confidence in one’s own thought. Nye explains how ideas and culture become influence abroad. Together they show that the empire of the mind is built at home, in schools and laboratories, before it is felt abroad."
   ],
   "examplesIntro": "The examples below show the foundations, the gaps and the limits of India’s knowledge power. They are most useful when the answer separates capacity from reputation.",
   "models": [
    [
     "Knowledge is the new capital.",
     "Kalam argued that a nation’s real wealth lies in the knowledge of its young people. Territory can be occupied and resources exhausted, but the capacity to create and apply ideas cannot simply be seized."
    ],
    [
     "Exclusion from knowledge is a form of domination.",
     "Ambedkar saw that denying a community the right to read was the machinery of its subordination. Education turns a grievance into a claim and a claim into a right, which is why he placed education first."
    ],
    [
     "Capacity must precede reputation.",
     "India’s research spending of about 0.64 per cent of GDP and graduate employability near half show gaps in the foundations of knowledge power. Influence abroad cannot last without capacity at home."
    ],
    [
     "Soft power reduces friction but does not command.",
     "Nye defined soft power as influence through attraction. ITEC, the diaspora and culture make relationships easier, but they do not deliver outcomes on demand."
    ],
    [
     "Ideas can build false worlds too.",
     "The machinery that spreads scientific temper can also spread propaganda. An empire of the mind must remain accountable to evidence and to the people it governs."
    ]
   ],
   "steps": [
    [
     "Define the kind of power.",
     "Distinguish hard power, soft power and the capacity to produce knowledge."
    ],
    [
     "Show why knowledge now matters most.",
     "Explain why ideas and skills create advantages that cannot simply be seized."
    ],
    [
     "Assess the foundations.",
     "Use data on employability, research spending and technology to judge capacity."
    ],
    [
     "Consider the flows of talent.",
     "Discuss brain drain, remittances and circulation."
    ],
    [
     "Examine soft power honestly.",
     "Separate cultural reach from influence over decisions."
    ],
    [
     "Name the risks.",
     "Show how knowledge can be used for exclusion or propaganda."
    ],
    [
     "Conclude with accountability.",
     "Argue for knowledge power that widens access and remains answerable to evidence and citizens."
    ]
   ],
   "stepsIntro": "Use the following sequence when a question concerns knowledge, power, education or the knowledge economy.",
   "formula": "Build the empire of the mind at home, through foundations of learning, research and skill, before seeking influence abroad. Keep knowledge open and accountable, so that it frees people rather than controls them."
  },
  {
   "thinkers": [
    [
     "Socrates",
     "truth through dialogue",
     [
      "Socrates never wrote a treatise, and the omission was itself a position. He believed truth emerges from the friction between two people who disagree and are willing to follow the argument wherever it leads.",
      "A monologue, however brilliant, cannot expose the assumption its author cannot see. Plato’s dialogues show the pattern again and again. Someone arrives certain, the certainty is tested, and something more defensible survives. Wisdom finds truth because it is willing to lose an argument."
     ],
     "the answer needs to show how dialogue and questioning reveal truth."
    ],
    [
     "Mill",
     "silencing robs everyone",
     [
      "Mill turned the Socratic insight into a principle for whole societies. Silencing an opinion, he argued, robs everyone. If the opinion is right, we lose the correction. If it is wrong, we lose the clearer understanding that comes from defending the truth against it.",
      "Mill’s argument makes free discussion a public good, not merely an individual right. A society that suppresses dissent weakens its own capacity to find and hold the truth."
     ],
     "the question concerns freedom of expression, dissent or the value of opposing views."
    ],
    [
     "Habermas",
     "conditions for genuine debate",
     [
      "Jürgen Habermas set out the conditions under which a contest is genuine rather than staged. In what he called an ideal speech situation, every participant may question any claim, nobody is excluded, and no coercion is at work. A norm is legitimate only if everyone affected could accept it after a real discussion.",
      "The standard is demanding. The standard exposes much of what passes for debate: a panel chosen for agreement, a consultation held after the decision, or a chamber where the result is known before anyone speaks."
     ],
     "an answer needs to test the quality of public deliberation, consultation or legislative debate."
    ],
    [
     "Ambedkar",
     "constitutional morality must be cultivated",
     [
      "Ambedkar warned the Constituent Assembly that constitutional morality is not a natural sentiment. Constitutional morality has to be cultivated. The forms of democracy can survive while the substance drains away.",
      "For Ambedkar, democracy depends on habits: respect for opponents, restraint in the use of power and willingness to be answerable. Institutions that avoid scrutiny keep their procedures while losing their purpose."
     ],
     "the question concerns democratic institutions, parliamentary scrutiny or the health of constitutional democracy."
    ],
    [
     "Tagore and Gandhi",
     "disagreement between friends",
     [
      "The exchange between Tagore and Gandhi is the model worth remembering. The two men disagreed publicly and fundamentally about non-cooperation, the boycott of schools and the burning of foreign cloth. Neither softened his position for the sake of friendship or the movement.",
      "The exchange produced no winner. The exchange produced two positions that each had to become more precise under pressure. Their disagreement shows what a genuine opponent is for, and what the absence of one quietly costs."
     ],
     "the answer needs an example of respectful, principled disagreement that improved both sides."
    ]
   ],
   "examples": [
    [
     "Bills passed without committee scrutiny",
     [
      "Committee scrutiny is where a bill meets the people it will govern. Committees take evidence, sit across party lines and publish their reasoning. PRS Legislative Research found that the 17th Lok Sabha referred about 16 per cent of bills to committees. The 16th referred about 25 per cent, and the 14th and 15th about 60 and 71 per cent.",
      "Disruption compounds the problem. A House that loses sitting days to protest passes the same laws in less time and with fewer speakers. The result is law that is formally valid but substantively unexamined, and its defects surface later in litigation rather than earlier in drafting."
     ],
     "Is the legislature testing laws before passing them? Compare the rate of committee scrutiny across Lok Sabhas."
    ],
    [
     "Echo chambers and algorithmic sorting",
     [
      "Habermas described an ideal speech situation as debate free of power and deception, where only the force of the better argument decides. A recommendation system built for engagement is close to the opposite. The system shows each person the material most likely to hold their attention, and outrage holds attention better than qualification does.",
      "The result is not that people meet no disagreement. People meet the weakest form of the other side, which strengthens their existing view rather than testing it. Real contest requires meeting the best opposing argument, and the machinery has no reason to show it."
     ],
     "Does the platform expose people to the strongest opposing case or the weakest? Ask what the system is designed to maximise."
    ],
    [
     "The Pre-Legislative Consultation Policy",
     [
      "The Pre-Legislative Consultation Policy was adopted on 10 January 2014. The policy requires a department to publish a draft law with its justification and an assessment of costs, and to keep it open for comment for at least thirty days. Compliance has been poor. Between June 2014 and May 2019, 186 bills were introduced and only 44 were published for comment. Of these, 24 did not meet the thirty-day requirement.",
      "Across a wider count, 227 of 301 bills reached Parliament with no prior consultation. The policy is not binding, and no public system monitors compliance. Consultation that is optional is easily skipped when a government is in a hurry."
     ],
     "Is public consultation real or optional? Look at how often the policy is followed and what happens when it is not."
    ],
    [
     "Public interest litigation as institutional counter-argument",
     [
      "Public interest litigation relaxed the rule that only an injured party may approach the court. The change allowed people without means or standing to have a grievance heard. PIL works as a permanent opposition that does not depend on winning an election, and it has produced important outcomes on food, the environment and custodial rights.",
      "The objections are also real. A court is not designed to weigh budgets or run programmes. An unelected bench directing policy raises a democratic problem, and the instrument has been used for private ends under a public label. PIL is a corrective for a legislature that is not scrutinising, and a poor substitute for one that does."
     ],
     "When should courts supply the opposition that politics lacks? Weigh access to justice against the limits of judicial capacity and legitimacy."
    ],
    [
     "Khanna’s dissent in ADM Jabalpur",
     [
      "ADM Jabalpur v Shivkant Shukla, decided in 1976 during the Emergency, held that once the enforcement of Article 21 was suspended, a detainee could not seek habeas corpus, however unlawful the detention. Justice H. R. Khanna alone dissented. He held that the state cannot take life or liberty without the authority of law.",
      "Khanna was passed over for Chief Justice and resigned. The 44th Amendment of 1978 made Article 21 non-suspendable even during an Emergency. In Puttaswamy in 2017, the Supreme Court expressly overruled the majority. The dissent became the law, forty-one years later."
     ],
     "What is the value of a recorded dissent? Show how a lone opposing view can later correct an institution."
    ]
   ],
   "topics": [
    [
     "2023A1",
     [
      "A game needs an opponent because the opponent tests every move. Thinking works the same way. A single mind cannot easily see its own assumptions. An opponent exposes them and forces each position to become more precise. Socrates never wrote a treatise because he believed truth emerged in dialogue. Mill argued that even a false opinion helps, because answering it clarifies why the truth is true.",
      "The same principle applies to institutions. Parliamentary committees, public consultation and judicial review all place an opposite team inside decision-making. When bills pass without committee scrutiny, or consultation is skipped, the game is played without an opponent, and the flaws appear later in courts or on the ground. Khanna’s dissent in ADM Jabalpur shows how a lone opponent can protect a principle until the institution is ready to return to it.",
      "The analogy has a limit. An opponent improves thinking only if the contest is fair and both sides play to learn. Disruption, echo chambers and staged debates are not real opposition. Habermas’s ideal speech situation describes the conditions under which contest produces truth. Thinking needs an opponent, but it needs one who argues honestly and a referee who lets the better argument win."
     ]
    ],
    [
     "2019A1",
     [
      "Knowledge collects facts, but wisdom knows how to test them, weigh them and see what they mean. Wisdom finds truth by admitting ignorance, listening to other views and being willing to change its mind. Socrates said that his only wisdom was knowing that he did not know. His method of questioning was a way of finding truth by exposing false certainty.",
      "Wisdom also knows that truth is rarely found alone. Mill’s defence of free discussion shows that truth becomes clearer when it is challenged. Tagore and Gandhi disagreed openly, and each position became sharper under pressure. Wise institutions build in the opposition that individuals may lack: committees, courts, recorded dissent and public consultation.",
      "Wisdom differs from cleverness here. A clever person can defend any position, including a false one. A wise person seeks the position that survives the strongest objection. The finding of truth is therefore not only an intellectual act but a moral one, requiring humility, honesty and the courage to lose an argument. Wisdom finds truth because it looks for it where it might be proved wrong."
     ]
    ]
   ],
   "intro": [
    "People often think of thinking as something done alone. Yet most ideas improve only when they meet resistance. A plan that nobody questions keeps its hidden flaws, and a belief that nobody challenges is held without understanding. The question is why thought needs an opponent, and how societies can build institutions in which genuine disagreement improves decisions rather than blocking them."
   ],
   "claim": "Truth emerges most reliably from honest contest. An opponent exposes assumptions that a single mind cannot see, and forces each side to become more precise. Wisdom finds truth because it is willing to lose an argument. For this reason democratic institutions must protect real disagreement: committee scrutiny, public consultation, independent courts and recorded dissent. An institution that avoids opposition has not settled its questions. The institution has only stopped asking them.",
   "problem": [
    "Opposition is uncomfortable, slow and often unwelcome. Governments prefer to pass laws quickly, organisations prefer consensus, and individuals prefer to hear views that confirm their own. Digital platforms reinforce the preference by showing people content that holds their attention, which often means content that confirms what they already believe or presents the other side at its weakest.",
    "Yet contest can also fail. Debate can become noise, disruption or a performance for supporters. An opposition that only obstructs does not improve thinking any more than one that is silenced. The practical question is how to design institutions in which disagreement is genuine, evidence-based and consequential, so that the best version of each argument meets the best version of the other."
   ],
   "distinction": [
    "A useful distinction",
    "A genuine opponent tests an argument at its strongest and changes the outcome if the argument fails. A staged opponent is chosen to lose, heard after the decision, or answered only with a vote. The first improves thinking. The second only decorates a conclusion already reached."
   ],
   "thinkersTitle": "Five thinkers, five tests of contest",
   "together": [
    "Putting the five together",
    "Socrates shows that truth emerges from dialogue. Mill shows that silencing any view harms everyone. Habermas sets out the conditions for real debate. Ambedkar warns that democratic forms need cultivated habits of scrutiny. Tagore and Gandhi show principled disagreement between allies. Together they explain why thinking needs an opposite team."
   ],
   "examplesIntro": "The examples below show institutions that build contest into decision-making and those that avoid it. They are most useful when the answer asks whether disagreement can change the outcome.",
   "models": [
    [
     "Dialogue exposes hidden assumptions.",
     "Socrates believed truth emerges from the friction between people who disagree. A single mind cannot see its own blind spots. A genuine opponent can."
    ],
    [
     "Silencing harms everyone.",
     "Mill argued that suppressing an opinion robs both sides. A true opinion corrects us, and a false one sharpens our understanding of the truth. Free discussion is therefore a public good."
    ],
    [
     "Debate needs fair conditions.",
     "Habermas’s ideal speech situation requires that everyone can question any claim, nobody is excluded and no coercion is at work. Consultations held after decisions and panels chosen for agreement fail the test."
    ],
    [
     "Institutions must build in opposition.",
     "Committee scrutiny, public consultation, judicial review and recorded dissent place an opposite team inside decision-making. Bills that skip these steps are valid in form but unexamined in substance."
    ],
    [
     "Dissent can be the future law.",
     "Justice Khanna’s lone dissent in ADM Jabalpur was vindicated by the 44th Amendment and by Puttaswamy in 2017. A recorded dissent keeps a principle alive until the institution is ready to return to it."
    ]
   ],
   "steps": [
    [
     "Explain why thinking needs contest.",
     "Show that opposition exposes assumptions and improves arguments."
    ],
    [
     "Distinguish genuine from staged opposition.",
     "Ask whether the opposing view is heard at its strongest and can change the outcome."
    ],
    [
     "Examine institutional mechanisms.",
     "Discuss committee scrutiny, consultation, courts and recorded dissent."
    ],
    [
     "Bring in evidence.",
     "Use PRS data on committee referrals or the record of pre-legislative consultation."
    ],
    [
     "Consider the digital sphere.",
     "Show how algorithms can present the weakest version of the other side."
    ],
    [
     "Acknowledge the limits of contest.",
     "Recognise that disruption and endless debate can also block good decisions."
    ],
    [
     "Conclude with the virtues of dialogue.",
     "Emphasise humility, honesty and willingness to lose an argument."
    ]
   ],
   "stepsIntro": "Use the following sequence when a question concerns argument, dissent, deliberation or truth.",
   "formula": "Seek truth through honest contest. Build opposition into institutions, hear the strongest version of the other side, and be willing to lose an argument, because an idea that has never been challenged has never been tested."
  }
 ],
 "Character, Adversity and the Test of Power": [
  {
   "thinkers": [
    [
     "Epictetus",
     "what is up to us",
     [
      "Epictetus was born into slavery and was lame for life. From that position he built the most usable ethics in the Stoic tradition. His central distinction is between what is up to us and what is not. Our judgments, intentions and responses belong to us. Our bodies, reputations and circumstances do not.",
      "On this reading, suffering is not instructive by itself, because much of it simply causes damage. Hardship forces attention back onto the only territory a person actually governs. Bitter experience teaches where the boundary lies, and a comfortable life has no reason to reveal it."
     ],
     "the answer needs to explain how hardship redirects attention to what a person can control."
    ],
    [
     "Marcus Aurelius",
     "the obstacle becomes the way",
     [
      "Marcus Aurelius reached the same conclusion from the opposite end of fortune, as a Roman emperor. He added a more demanding claim: the obstacle to action advances the action, and what stands in the way becomes the way.",
      "For Marcus, the obstacle is not an interruption of the work. The obstacle is material for the work. A setback becomes a lesson when a person uses it to practise patience, courage or justice."
     ],
     "the question asks how a setback can be turned into an opportunity for growth."
    ],
    [
     "Nietzsche",
     "absorbing suffering, and the danger of resentment",
     [
      "Nietzsche pushed the idea further. He argued that suffering should not be explained away but absorbed, and that a person who has a reason to live can bear almost any conditions.",
      "His warning matters just as much. Hardship does not automatically ennoble anyone. A resentment that never becomes anything else corrodes the person carrying it. Suffering can produce strength or bitterness, and the result is not guaranteed."
     ],
     "the answer needs to show both the potential and the danger of hardship."
    ],
    [
     "Mandela",
     "a decision taken inside the sentence",
     [
      "Nelson Mandela spent twenty-seven years in prison. The imprisonment did not make him generous by itself. What turned the sentence into an education was a decision taken inside it. He learned the language of his jailers, Afrikaans, and prepared to govern alongside his opponents rather than over them.",
      "A thorn becomes a changed bud only where something did the changing. The experience supplied the pressure. What the pressure produced was still chosen."
     ],
     "the question concerns resilience, reconciliation or leadership formed in adversity."
    ],
    [
     "Malala",
     "adversity amplifies what already exists",
     [
      "Malala Yousafzai’s case sharpens the same distinction. She had been writing and campaigning for girls’ education for years before she was shot in October 2012. The attack that nearly killed her did not give her convictions. The attack gave her a platform, not a purpose.",
      "Adversity amplified something already formed. The same pattern appears in most lives cited as proof that hardship is good for people. An essay should therefore resist the comfortable claim that suffering creates character on its own."
     ],
     "the answer needs to separate the role of prior commitment from the role of hardship."
    ]
   ],
   "examples": [
    [
     "Post-traumatic growth: what the evidence supports",
     [
      "Research on post-traumatic growth, developed by Richard Tedeschi and Lawrence Calhoun, finds that some people report meaningful positive change after severe adversity. They describe changed priorities, closer relationships and a greater sense of strength. The findings are real, and they are often overstated.",
      "Much of the evidence rests on people reporting how much they have changed, which measures the story they tell rather than a measured difference. Growth is also not the typical outcome. Recovery to the earlier baseline is more common, and lasting harm is common too. Adversity can occasion growth for some people under some conditions. Adversity is not a reliable mechanism for turning suffering into strength."
     ],
     "Does the evidence show that hardship strengthens people, or only that some people grow after it? Separate a possible outcome from a general rule."
    ],
    [
     "Failure in a one-attempt examination system",
     [
      "An examination system can compress a decade of effort into a few hours. Where seats are scarce, the margin between outcomes is narrow and the consequence enormous. The National Crime Records Bureau recorded more than 13,000 student suicides in 2022.",
      "The structural feature to name is the absence of a second route. A system with lateral entry, credit transfer and several assessment points spreads risk across attempts. A system with one ranked examination concentrates it into a single day. Failure teaches only when a person can recover from it. A system that makes recovery nearly impossible turns a lesson into a catastrophe."
     ],
     "Is failure survivable in this system? Ask whether there is a second chance, and what failing costs."
    ],
    [
     "Bankruptcy law and the right to fail and return",
     [
      "Before 2016, India had no unified insolvency process. A failing firm could stay in limbo for years while its assets decayed. The Insolvency and Bankruptcy Code of 2016 set a time limit, now 330 days, and shifted control to creditors.",
      "The results are mixed. Average resolution time has stretched well beyond the limit, and overall recovery in resolved cases is about a third of admitted claims. Yet the code established that failure can be concluded rather than endured. A society that lets entrepreneurs fail, close the matter and start again allows failure to become experience rather than a permanent mark."
     ],
     "Does the system let people learn from failure and try again? Look at how quickly and cleanly failure can be concluded."
    ],
    [
     "Odisha: a community that learned from disaster",
     [
      "The super cyclone of 1999 struck the Odisha coast with winds near 250 kilometres an hour and killed about ten thousand people. Warnings had been issued, but evacuation was slow. Odisha then created India’s first state disaster management authority and spent years building cyclone shelters, running drills and planning evacuation routes.",
      "When Cyclone Phailin arrived in 2013 with comparable force, about a million people were evacuated and fewer than fifty died. The storm was not milder. The difference was the lesson drawn from 1999 and turned into investment, made when no cyclone was visible."
     ],
     "What turns a disaster into a lesson? Look for the investment and institutions built after the event."
    ],
    [
     "Chronic deprivation as damage, not curriculum",
     [
      "The romantic view of hardship does real harm when it is applied to chronic poverty. Adversity that teaches is bounded, survivable and followed by recovery. Chronic deprivation has none of those features.",
      "Research on scarcity by Sendhil Mullainathan and Eldar Shafir found that the constant mental load of managing too little reduces the capacity available for other decisions. Poverty consumes the very faculty a person would need to escape it. Childhood malnutrition and chronic stress leave effects that no later resilience undoes. Calling such hardship a teacher flatters the observer and misdescribes the person living it."
     ],
     "Is the hardship something a person passes through or lives inside? Separate bounded adversity from chronic deprivation."
    ]
   ],
   "topics": [
    [
     "2025A4",
     [
      "Comfortable experiences rarely force us to examine ourselves. Bitter experiences do. Failure, loss and humiliation expose the limits of our control and the weaknesses we preferred not to see. Epictetus built his ethics on the distinction between what is up to us and what is not, and hardship is often what makes the distinction clear. Odisha learned from the super cyclone of 1999 what no calm year could have taught, and Phailin in 2013 showed the result.",
      "Yet bitter experiences teach only when certain conditions are met. The person must survive the experience, have the room to reflect on it and have the support to act differently afterwards. Mandela turned prison into preparation through a deliberate choice. Nietzsche warned that the same suffering can produce resentment instead. Post-traumatic growth research shows that growth is possible but not typical.",
      "The best lessons may come from bitter experiences, but bitter experiences do not always produce lessons. Chronic deprivation, as research on scarcity shows, can destroy the capacity to learn. The ethical conclusion is to help people pass through adversity in ways that allow reflection and recovery: second chances in education, fair bankruptcy laws and support after disaster. A society should make bitter experience survivable, not celebrate it."
     ]
    ],
    [
     "2026A3",
     [
      "A thorn is a changed bud. The image suggests that what protects us, or wounds others, may have grown from something tender that was forced to change. Hardship can harden a person. The hardening can become strength and protection, or it can become the sharpness that hurts others. Marcus Aurelius taught that the obstacle can become the way, and Epictetus found in slavery the ground of his philosophy.",
      "The change is not automatic, and its direction is not fixed. Mandela entered prison as a militant and left it ready to reconcile with his jailers. The change was his choice inside the sentence. Nietzsche warned that suffering can also turn into resentment, a thorn that wounds the person who carries it. Malala’s example shows that adversity often sharpens a purpose that already existed.",
      "The image also carries a warning for society. Many people become thorns because their buds were damaged by poverty, humiliation or violence. Understanding the history of a thorn does not excuse harm, but it explains it and points to prevention. The better response is to protect buds from the pressures that deform them, and to help people who have been hardened find ways to turn protection into strength."
     ]
    ]
   ],
   "intro": [
    "Almost every biography of a great person includes a period of hardship: prison, exile, illness or failure. Readers draw the lesson that suffering builds character. Yet for every person strengthened by hardship, many more are simply damaged by it. The question is what adversity can actually teach, under what conditions, and who decides what a painful experience becomes."
   ],
   "claim": "Suffering is not a teacher by itself. Hardship teaches only when a person has the room and the resources to reflect on it and to choose a response. Bitter experience can reveal what lies within our control, but what it produces is still decided by the person who lives through it. A society should support people through adversity rather than praise hardship as good for them.",
   "problem": [
    "The belief that suffering builds character is comforting for those who have come through hardship and convenient for those who have not faced it. The belief can turn a failure into a story of growth and a struggle into a source of pride. At its best, the belief gives people courage to face difficulty rather than to avoid it.",
    "At its worst, the same belief excuses neglect. If hardship is good for people, then poverty, harsh examination systems and chronic stress can be described as training rather than as harm. Much adversity does not teach. Much adversity only wounds, and the wound limits the capacity to learn. The ethical question is how to recognise the conditions under which bitter experience becomes a lesson, and how to avoid romanticising suffering that should be prevented."
   ],
   "distinction": [
    "A useful distinction",
    "Adversity that a person passes through, such as a failed venture or an examination not cleared, can teach because it is bounded and followed by recovery. Deprivation that a person lives inside, such as chronic poverty or malnutrition, consumes the capacities needed to learn from it. Calling the second a teacher misdescribes it."
   ],
   "thinkersTitle": "Five thinkers, five tests of adversity",
   "together": [
    "Putting the five together",
    "Epictetus shows that hardship reveals the boundary of what we control. Marcus Aurelius shows how an obstacle can become material for action. Nietzsche warns that suffering can breed resentment as easily as strength. Mandela shows that a choice made inside hardship decides what it produces. Malala shows that adversity often amplifies what was already there. Together they turn “suffering teaches” into “suffering can teach, under conditions”."
   ],
   "examplesIntro": "The examples below test the claim against evidence and against real systems. They are most useful when the answer asks what conditions turned hardship into learning.",
   "models": [
    [
     "Suffering does not teach by itself.",
     "Epictetus showed that hardship can reveal the boundary between what is up to us and what is not. But much suffering only damages. The lesson depends on reflection, support and the chance to act differently."
    ],
    [
     "The response is chosen.",
     "Mandela spent twenty-seven years in prison. What turned the sentence into preparation was a decision to learn his jailers’ language and to govern with his opponents. Adversity supplies pressure. The person decides what it produces."
    ],
    [
     "Hardship can breed resentment.",
     "Nietzsche warned that suffering which never becomes anything else corrodes the person carrying it. An honest essay should admit that hardship can make people bitter as easily as it can make them strong."
    ],
    [
     "Systems must make failure survivable.",
     "A one-attempt examination and a slow insolvency process turn failure into catastrophe. Second chances, lateral entry and quick resolution of bankruptcy let failure become experience."
    ],
    [
     "Deprivation is damage, not a curriculum.",
     "Research on scarcity shows that chronic poverty consumes the mental capacity needed to escape it. Praising hardship for its lessons misdescribes the lives of people who live inside deprivation."
    ]
   ],
   "steps": [
    [
     "Acknowledge what hardship can teach.",
     "Use Epictetus or Marcus Aurelius to show how adversity reveals what is within our control."
    ],
    [
     "Set the conditions.",
     "Explain that learning depends on survival, reflection, support and the chance to try again."
    ],
    [
     "Show the choice inside hardship.",
     "Use Mandela or Malala to show that the response, not the suffering, shapes the outcome."
    ],
    [
     "Admit the risk of resentment.",
     "Bring in Nietzsche’s warning that hardship can corrode as well as strengthen."
    ],
    [
     "Distinguish adversity from deprivation.",
     "Separate bounded setbacks from chronic poverty and use the research on scarcity."
    ],
    [
     "Apply to institutions.",
     "Discuss examinations, bankruptcy law or disaster management as systems that make failure survivable or not."
    ],
    [
     "Conclude with responsibility.",
     "Argue that society should make hardship survivable rather than praise it."
    ]
   ],
   "stepsIntro": "Use the following sequence when a question concerns failure, hardship or the lessons of adversity.",
   "formula": "Treat adversity as a possible teacher, not a guaranteed one. The lesson depends on the response a person chooses and on the support that makes recovery possible, so build systems that make failure survivable and never mistake deprivation for education."
  },
  {
   "thinkers": [
    [
     "Vivekananda",
     "strength as a practice",
     [
      "Vivekananda told Indians to arise, awake and stop not till the goal is reached. He was addressing a people he believed had been made timid by circumstance. His diagnosis was blunt: the greatest sin is to think yourself weak.",
      "For Vivekananda, strength was a practice rather than a temperament. A life organised around avoiding risk trains exactly the weakness it fears. A ship kept in harbour is preserved and, at the same time, prevented from being a ship."
     ],
     "the answer needs an Indian voice on courage, self-belief and purpose."
    ],
    [
     "Nietzsche",
     "the last man and the conditions of creation",
     [
      "Nietzsche criticised what he called the last man, who is comfortable and cautious and believes he has invented happiness. His objection was not that comfort is wrong. His objection was that a life arranged to remove all danger also removes the conditions under which anything is created.",
      "When Nietzsche wrote about living dangerously, he meant creative work, not recklessness. The danger he valued was the risk of attempting something new."
     ],
     "the question concerns creativity, ambition or the cost of complacency."
    ],
    [
     "Kalam",
     "institutions that can absorb failure",
     [
      "Kalam’s account of the SLV-3 programme shows the same principle inside an institution. The first launch, in 1979, ended in the sea. The programme continued, and the next launch in 1980 succeeded.",
      "A launch that fails is a cost that serious technological ambition must be able to absorb. An organisation that cannot absorb such a cost will never attempt anything worth the risk."
     ],
     "the answer concerns institutions, innovation or research."
    ],
    [
     "Bose",
     "the contested gamble",
     [
      "Subhas Chandra Bose is the harder case, and he is useful because his example cuts both ways. He chose to raise an army abroad rather than wait for a negotiated transfer of power. The decision accepted risks that a cautious reading of the situation would have refused.",
      "The historical verdict on Bose is still contested. His case shows that boldness is not self-justifying. A risk can be admired for its courage and questioned for its judgment at the same time."
     ],
     "the question needs an example of bold risk whose wisdom remains debated."
    ],
    [
     "Camus",
     "acting without guarantees",
     [
      "Albert Camus described the absurd hero, who acts fully in a universe that guarantees nothing. For Camus, the value lies in the acting, not in any promise of arrival.",
      "Purpose, on this account, is not a prediction of success. Purpose is a reason to leave the harbour that survives the discovery that the sea is indifferent. Camus keeps the argument for risk from becoming mere adventure."
     ],
     "the answer needs to show how purpose can justify effort even when success is uncertain."
    ]
   ],
   "examples": [
    [
     "Startup failure and the second chance",
     [
      "Most new ventures fail. In a working risk economy, failure is expected: capital is spread across many attempts in the expectation that a few will more than cover the rest. What matters is not the failure rate but what failure costs the person.",
      "Where a failed founder becomes unemployable, where family credit was pledged, and where insolvency carries lasting stigma, the rational choice is not to try. India’s attitudes have shifted as venture capital has come to expect failures in its portfolio, as the insolvency process has begun to conclude cases, and as founders have become visible making second and third attempts. Attitudes follow the availability of a second chance more than they precede it."
     ],
     "What does failure cost the person who tries? Look at stigma, debt and the chance to try again."
    ],
    [
     "The civil service as harbour",
     [
      "A secure career with tenure, defined progression and protection from dismissal produces exactly the behaviour it is designed to produce. Where promotion runs largely on seniority, and the penalty for a failed decision is far larger than the reward for a successful one, the rational officer minimises exposure.",
      "The claim is about incentives, not character. The loss is hard to see: not visible failures, but initiatives never attempted, which appear in no record. Reform has to address the imbalance directly, by protecting honest decisions that fail and by making a record of initiative count at promotion."
     ],
     "Does the institution punish failed attempts more than it rewards successful ones? Ask what initiatives are never tried."
    ],
    [
     "Non-linear careers and the straight line",
     [
      "A non-linear career is punished twice. Formal systems ask for continuous service and treat a gap as a defect. Family expectation treats a change of path as a risk borne by everyone. Both responses were rational when one secure job supported an extended household and a lost year could not be recovered.",
      "Both are less rational when work changes faster than a syllabus and the ability to retrain matters more than unbroken tenure. The freedom to wander is also unequally shared. A gap year is an investment for a family with savings and a gamble for one without. An essay that celebrates wandering should say who can afford it."
     ],
     "Who can afford to wander? Consider the safety net that makes exploration possible."
    ],
    [
     "Regulatory sandboxes: permission to fail safely",
     [
      "A regulator faces a real dilemma. Approving an untested product risks harm to consumers, and refusing everything untested prevents innovation. A sandbox resolves the dilemma by limiting the possible failure rather than preventing it.",
      "The Reserve Bank’s sandbox framework, introduced in 2019, lets a small group of firms test products with real customers under supervision, with limits on scale and duration. The first group, on retail payments, began in November 2019, and six firms completed testing. Safety and experiment stop being opposites once the size of the possible loss is capped in advance."
     ],
     "Can the risk be bounded so that failure is affordable? Look for limits on scale, duration and harm."
    ],
    [
     "Recklessness with other people’s money and lives",
     [
      "The argument for risk has a boundary. Risk-taking is admirable when the person taking it bears the downside. Risk-taking becomes something else when the gain is private and the loss falls on people who never agreed to it.",
      "A trader with a bonus that pays on gains but not losses, a builder saving money on structural steel, or a firm running a plant beyond its safety limits all take risks whose costs land on others. The financial crisis of 2008 is the standing example of private gains and public losses. The test is not whether an actor is bold, but whether the person taking the risk pays if it fails."
     ],
     "Who pays if the risk fails? Separate courage that bears its own cost from recklessness that shifts it."
    ]
   ],
   "topics": [
    [
     "2022A4",
     [
      "A ship in harbour is safe, but it has stopped being a ship. The saying applies to people and institutions alike. A life organised only to avoid failure never discovers what it could have done. Vivekananda warned that thinking oneself weak is the greatest error, and Nietzsche argued that a life with all danger removed also loses the conditions for creation. Kalam’s SLV-3 programme succeeded because the institution could absorb the failure of its first launch.",
      "Institutions often reward the harbour. A civil servant who takes no risk rarely suffers, while one who attempts something new and fails may be punished. The resulting loss is invisible, because nobody records the initiative never attempted. Regulatory sandboxes and fair insolvency laws show how systems can make purposeful risk affordable by limiting the possible loss.",
      "The saying does not justify every departure from safety. A ship that sails without purpose, charts or seaworthiness is not fulfilling its function but endangering its crew. The 2008 financial crisis showed what happens when risks are taken with other people’s money. A ship is for voyages, and a voyage has a destination and a responsible captain. Purposeful risk, borne by those who take it, is what the ship is for."
     ]
    ],
    [
     "2023A3",
     [
      "Wandering is often treated as failure: a gap in a career, a change of subject or an unplanned journey. Yet many discoveries have come from paths that were not planned. A person exploring different fields may find a combination nobody else has seen. A career with turns may produce wider judgment than a straight line. Camus described a way of acting fully without a guarantee of arrival, and Nietzsche valued the risk of attempting something new.",
      "Not all who wander are lost, but some are. The distinction lies in purpose. A wanderer who can say what they are looking for, even if they do not know where they will find it, is exploring. A wanderer who moves only to avoid commitment is drifting. The test is whether the person could have explained, before setting out, what the journey was for.",
      "The freedom to wander is also unequally distributed. A gap year is an investment for a family with a cushion and a gamble for one without. Social and institutional systems that punish any departure from the straight line waste talent, but a society that praises wandering must also provide the safety net that makes it possible. Otherwise the freedom to explore belongs only to those who can afford to be lost."
     ]
    ]
   ],
   "intro": [
    "Every person and institution faces a choice between safety and purpose. Staying safe avoids loss, but it can also mean never attempting what one exists to do. Taking risks can create, discover and lead, but it can also waste resources or endanger others. The question is when exposure to risk fulfils a purpose, and when it becomes recklessness or aimless wandering."
   ],
   "claim": "A life or institution organised only to avoid risk loses its purpose. A ship kept in harbour is preserved but prevented from being a ship. Yet risk is admirable only when it serves a purpose that could be stated in advance and when the person taking it bears its cost. Wandering can be exploration or drift. The difference lies in whether the traveller knows what the voyage is for.",
   "problem": [
    "Security is valuable. Families seek stable careers, governments seek safe policies, and institutions seek to avoid scandal. The preference for safety is rational, because the cost of failure is visible while the cost of never trying is hidden. Nobody records the initiative never attempted, the business never started or the research never funded.",
    "Risk-taking has its own dangers. A bold decision with other people’s money, safety or lives is not courage. The financial crisis of 2008 showed how gains can be kept private while losses are shifted onto the public. The ethical question is how to encourage exposure that serves a purpose, while making sure that the person taking the risk is the person who pays if it fails."
   ],
   "distinction": [
    "A useful distinction",
    "Exposure undertaken for a purpose is voyage: it can say, before setting out, what it seeks. Movement mistaken for progress is drift: it has direction only in hindsight. Risk borne by the person taking it is courage. Risk shifted onto others is recklessness."
   ],
   "thinkersTitle": "Five thinkers, five tests of risk and purpose",
   "together": [
    "Putting the five together",
    "Vivekananda makes strength a practice. Nietzsche shows that removing all danger removes creation. Kalam shows that institutions must be able to absorb failure. Bose shows that bold risk remains open to judgment. Camus explains why purpose, not a guarantee of success, justifies leaving the harbour. Together they define courage as purposeful exposure, not mere daring."
   ],
   "examplesIntro": "The examples below show systems that encourage purposeful risk, systems that discourage it, and the limit where risk becomes recklessness. They are most useful when the answer asks who bears the cost of failure.",
   "models": [
    [
     "Safety can defeat purpose.",
     "A ship kept in harbour is preserved but prevented from being a ship. Vivekananda taught that a life organised around avoiding risk trains the weakness it fears. Purpose requires exposure."
    ],
    [
     "Institutions must absorb failure.",
     "Kalam’s SLV-3 programme succeeded after its first launch failed. An organisation that cannot absorb such losses will never attempt anything worth the risk."
    ],
    [
     "Risk must be borne by the risk-taker.",
     "Courage means accepting the downside of one’s own decision. Risk that places gains in private hands and losses on others, as in the 2008 financial crisis, is recklessness."
    ],
    [
     "Bounded failure makes innovation possible.",
     "Regulatory sandboxes limit the scale and duration of experiments so that failure is affordable. Safety and innovation stop being opposites once the possible loss is capped in advance."
    ],
    [
     "Wandering needs purpose and a safety net.",
     "Exploration differs from drift because it can say what it seeks. Yet the freedom to wander is unequally shared, so a society that values exploration must make it affordable."
    ]
   ],
   "steps": [
    [
     "Name the purpose.",
     "State what the person or institution exists to do."
    ],
    [
     "Identify the cost of safety.",
     "Show what is lost when risk is avoided, including initiatives never attempted."
    ],
    [
     "Identify the cost of risk.",
     "Show what could be lost if the attempt fails."
    ],
    [
     "Ask who bears the cost.",
     "Separate risks borne by the risk-taker from those shifted onto others."
    ],
    [
     "Bound the risk.",
     "Suggest ways to cap possible losses, such as pilots, sandboxes or phased decisions."
    ],
    [
     "Protect honest failure.",
     "Recommend institutional support for failed attempts made in good faith."
    ],
    [
     "Conclude with purpose.",
     "Argue for exposure that serves a stated purpose and is borne responsibly."
    ]
   ],
   "stepsIntro": "Use the following sequence when a question concerns risk, safety, exploration or purpose.",
   "formula": "Leave the harbour when the voyage has a purpose, the risk is bounded, and the person taking it bears the cost. Build institutions that absorb honest failure, and do not mistake drift or recklessness for courage."
  },
  {
   "thinkers": [
    [
     "Gandhi",
     "experiments with truth",
     [
      "Gandhi described his life as a series of experiments with truth. The phrase was about self-audit rather than modesty. He published his failures, his obsessions and his errors of judgment. He believed that a public life not continually examined from the inside will be corrupted from the inside.",
      "His clearest demonstration came in February 1922. After a crowd at Chauri Chaura set fire to a police station and killed the policemen inside, he suspended the Non-Cooperation Movement at enormous political cost. The threat he acted against was internal to his own side."
     ],
     "the answer needs an example of self-correction by a leader, or of acting against a fault within one’s own movement."
    ],
    [
     "Marcus Aurelius",
     "the emperor who corrected himself",
     [
      "Marcus Aurelius wrote the Meditations to himself, at night, on military campaign. He was an emperor with nobody left who could safely correct him, which is exactly the condition under which internal decay begins.",
      "His method was to question his own impressions before acting on them. He believed that the judgment a person adds to an event does more harm than the event itself. Self-examination was his substitute for the correction that power had removed."
     ],
     "the question concerns self-discipline, reflection or leadership without external checks."
    ],
    [
     "Aristotle",
     "virtue as habit",
     [
      "Aristotle explains why integrity has to be a habit rather than an occasional effort. Virtue is a settled disposition built by repetition. We become just by doing just acts and brave by doing brave acts.",
      "The courage to accept a fault is therefore a practised capacity, not a mood that arrives when needed. A person who has never practised admitting small errors will not suddenly admit a large one."
     ],
     "the answer needs to show that integrity is built by repeated practice."
    ],
    [
     "Ambedkar",
     "hero-worship as the road to degradation",
     [
      "Ambedkar completes the picture from the side of institutions. In his speech to the Constituent Assembly on 25 November 1949, he warned that hero-worship in politics is a sure road to degradation and eventual dictatorship.",
      "Devotion to a person removes the correction that keeps an organisation honest. An institution whose members cannot criticise its leader has lost its ability to find its own faults."
     ],
     "the question concerns democratic institutions, personality cults or the need for internal criticism."
    ],
    [
     "Thoreau",
     "an inventory of conscience",
     [
      "Thoreau gives the individual version of the discipline. His withdrawal to Walden Pond was an experiment in reducing life to its essentials to find out what he was actually living for.",
      "His refusal to pay a poll tax to a government that supported slavery followed from the same audit. A conscience that has never been examined cannot be relied on under pressure."
     ],
     "the answer needs to show personal self-examination as the basis of integrity."
    ]
   ],
   "examples": [
    [
     "Integrity institutions and their dependence",
     [
      "India has built a substantial structure for integrity. The Central Vigilance Commission received statutory status in 2003. The Lokpal and Lokayuktas Act was passed in 2013 after the anti-corruption movement of 2011. Every department has vigilance officers.",
      "The recurring weakness is not the absence of institutions but their dependence. A body whose appointments, budget and staff are controlled by the executive it examines is constrained, however capable its members. The useful questions are practical. Who appoints the members? Is the budget secure? Can the body investigate without prior sanction? The answers predict performance better than any mandate."
     ],
     "Is the watchdog independent of the body it watches? Examine appointments, budget and powers."
    ],
    [
     "Whistleblowers and a law never brought into force",
     [
      "Satyendra Dubey, an engineer with the National Highways Authority of India, wrote to the Prime Minister’s Office about corruption in a highway project and asked that his identity be protected. His letter was circulated with his name attached, and he was murdered in November 2003.",
      "Parliament passed the Whistle Blowers Protection Act in 2014. The Act has never been brought into force, because the government said it needed amendment first. An amendment bill introduced in 2015 passed the Lok Sabha and then lapsed. The result is a law that exists, is cited and protects nobody."
     ],
     "Can people inside the system report a breach safely? Look at whether protections operate, not only whether they exist."
    ],
    [
     "Corporate failures seen early from inside",
     [
      "Corporate collapses are rarely sudden to the people closest to them. Satyam Computer Services collapsed in January 2009 when its chairman admitted that the accounts had been falsified for years. The company had well-regarded independent directors and a large external auditor.",
      "IL&FS defaulted in 2018 and triggered a wider credit freeze, yet it carried high credit ratings until shortly before it failed. In both cases, the people positioned to raise the alarm were paid, appointed or rated by the entity they were assessing. Independence written into a charter is not the same as independence created by structure."
     ],
     "Are the people who check an organisation paid or appointed by it? Look for conflicts in the structure of oversight."
    ],
    [
     "Reform recommended but not adopted",
     [
      "The Second Administrative Reforms Commission submitted its fourth report, on ethics in governance, in January 2007. Parts were adopted. The Lokpal Act drew on its blueprint, and the Whistle Blowers Protection Act echoed its call to protect those who report wrongdoing.",
      "Many other recommendations were not implemented, especially those on security of tenure for officers and discretion in transfers and postings. The pattern is worth naming. Recommendations that create new bodies tend to be adopted. Recommendations that limit the discretion of those who would have to adopt them tend not to be."
     ],
     "Which reforms are adopted and which are ignored? Ask whether a reform limits the power of those who must approve it."
    ],
    [
     "External shocks and internal condition",
     [
      "Not every failure is a failure of character. A pandemic, a war or a sudden reversal in global capital flows comes from outside, whatever an institution’s internal condition. Treating every disaster as proof of internal decay is unfair.",
      "Internal condition, however, decides what a shock does. The super cyclone of 1999 killed about ten thousand people in Odisha. Cyclone Phailin in 2013, of comparable force, killed fewer than fifty. The storm was external. The difference was internal preparation. Integrity does not prevent a shock, but it decides the size of the hole the shock makes."
     ],
     "How much of the damage came from the shock and how much from internal weakness? Compare similar shocks in different conditions."
    ]
   ],
   "topics": [
    [
     "2020A3",
     [
      "Ships are built to live in water. The water around them is not a threat but a condition of their work. A ship sinks when water gets inside through a breach that was not repaired. The same is true of people and institutions. Pressure, competition and criticism are permanent conditions. What destroys a career, a company or a republic is usually a compromise tolerated from within: a falsified account, an ignored warning or a leader nobody dares to correct.",
      "Satyam and IL&FS failed not because of the market around them but because of what was hidden inside them. The Whistle Blowers Protection Act, passed in 2014 but never brought into force, shows how a society can build a pump and never switch it on. Ambedkar warned that hero-worship removes the correction that keeps institutions honest, and Gandhi suspended his own movement after Chauri Chaura because he saw the breach on his own side.",
      "External shocks are still real, and a fair essay should say so. Yet even then, internal condition decides how much damage a shock can do. Odisha’s preparation after 1999 turned a similar storm in 2013 into a far smaller disaster. The lesson is to keep watch on the hull, to protect those who report leaks and to repair small breaches before they become fatal."
     ]
    ],
    [
     "2019A4",
     [
      "Success is often attributed to talent or luck. Yet a large part of it depends on two moral capacities: the courage to accept one’s own faults and the dedication to correct them. Without the first, a person cannot see what must change. Without the second, the recognition produces only regret. Gandhi published his errors and called his life a series of experiments with truth. Marcus Aurelius examined his own judgments each night.",
      "Aristotle explains why these capacities must be practised. Virtue is a habit, and a person who never admits small mistakes will not admit large ones. Institutions need the same habits. An organisation that hides failures, punishes whistleblowers or worships its leader cannot improve. Kalam’s ISRO learned from the first SLV-3 failure because it reviewed the failure openly.",
      "Acceptance must not become resignation. Accepting a fault means acknowledging it honestly, not deciding it cannot change. Dedication must also be sustained, because improvement is slow and setbacks are common. Together, the two capacities turn failure into learning. They are keys to success because they allow a person or institution to find the leak in the hull and repair it before it sinks the ship."
     ]
    ]
   ],
   "intro": [
    "When institutions, careers or nations fail, the first explanation offered is usually external: an enemy, a crisis, the market or bad luck. Yet the decisive weakness is often internal. A small compromise is tolerated, a warning is ignored, and a flaw that everyone can see goes unnamed. The question is why internal decay is so dangerous, and what habits and institutions allow a person or organisation to find and repair the leak in time."
   ],
   "claim": "External pressure is a permanent condition. What decides whether a ship, a person or a republic survives is the breach that gets inside. Integrity therefore depends on continuous self-examination and on institutions that can name faults without fear. The courage to accept a fault and the dedication to improve are the two halves of naming a breach in time. External shocks are real, but internal condition decides how much damage they do.",
   "problem": [
    "Internal decay is hard to see because it grows slowly and because naming it is costly. A junior officer who reports wrongdoing risks a career. An auditor paid by the firm being audited has reasons to look away. A leader surrounded by admirers hears fewer corrections. Each small compromise seems too minor to justify a fight, and the pattern becomes visible only when it is too late.",
    "The opposite error is to blame every failure on character. Pandemics, wars and market crashes come from outside and would arrive whatever the internal condition of an institution. An argument that treats every disaster as evidence of internal rot is unfair and useless for analysis. The task is to separate the shock from the damage and to ask what internal condition made the damage worse."
   ],
   "distinction": [
    "A useful distinction",
    "Water around the hull is the external condition: pressure, competition and crisis. Water inside the hull is internal failure: a tolerated compromise, an ignored warning or a captured regulator. The first cannot be removed. The second can be found and repaired, if someone is allowed to name it."
   ],
   "thinkersTitle": "Five thinkers, five tests of integrity",
   "together": [
    "Putting the five together",
    "Gandhi and Marcus Aurelius show leaders examining themselves when nobody else can. Aristotle explains that the capacity to admit fault is built by habit. Ambedkar shows how hero-worship removes an institution’s ability to correct itself. Thoreau shows the personal inventory on which conscience rests. Together they explain why the leak must be found from inside."
   ],
   "examplesIntro": "The examples below show institutions built to find internal breaches and the reasons they often fail. They are most useful when the answer asks who is allowed, and protected, to name the fault.",
   "models": [
    [
     "Internal breaches sink ships.",
     "External pressure is a permanent condition, and no ship sinks because of the water around it. Failure usually comes from a tolerated compromise inside: a falsified account, an ignored warning or an unchecked leader."
    ],
    [
     "Self-examination is a discipline.",
     "Gandhi published his failures and suspended his movement after Chauri Chaura. Marcus Aurelius examined his own judgments nightly. Leaders who cannot be corrected by others must learn to correct themselves."
    ],
    [
     "Integrity is a habit.",
     "Aristotle held that virtue is formed by repeated action. The courage to admit a fault is practised in small matters before it is needed in large ones."
    ],
    [
     "Oversight must be independent.",
     "Watchdogs controlled by those they watch, and auditors paid by those they audit, cannot name a breach reliably. The Whistle Blowers Protection Act, never brought into force, shows the gap between enacting a safeguard and operating it."
    ],
    [
     "Internal condition decides the damage of a shock.",
     "Odisha’s preparation after the 1999 super cyclone greatly reduced deaths from Cyclone Phailin in 2013. External shocks cannot always be prevented, but internal strength decides how much harm they do."
    ]
   ],
   "steps": [
    [
     "Separate external pressure from internal breach.",
     "Identify what comes from outside and what is a weakness within."
    ],
    [
     "Name the breach.",
     "State the compromise, conflict of interest or ignored warning."
    ],
    [
     "Ask why it went unnamed.",
     "Examine fear, dependence, hero-worship or conflicts in oversight."
    ],
    [
     "Show the value of self-examination.",
     "Use Gandhi, Marcus Aurelius or Thoreau."
    ],
    [
     "Examine institutional safeguards.",
     "Discuss whistleblower protection, vigilance bodies and independent audit."
    ],
    [
     "Acknowledge external shocks.",
     "Show that internal condition decides the size of the damage."
    ],
    [
     "Conclude with habits of correction.",
     "Recommend the personal and institutional habits that find and repair breaches early."
    ]
   ],
   "stepsIntro": "Use the following sequence when a question concerns integrity, internal decay or self-improvement.",
   "formula": "Treat external pressure as a condition and internal compromise as the real danger. Build the habit of self-examination, protect those who name faults, make oversight independent, and repair small breaches before they sink the ship."
  },
  {
   "thinkers": [
    [
     "Aristotle",
     "power removes the restraint that habit relied on",
     [
      "Aristotle explains why the test is uneven. Character is formed by habit, and adversity pushes a person towards restraint, because circumstances supply the restraint. Power removes it.",
      "A person holding office faces fewer consequences for self-indulgence, hears fewer corrections and meets more reasons to believe flattery. The disposition that survived adversity may never have been tested where it matters. Practical wisdom is the capacity to judge rightly in particular circumstances, and its absence becomes visible under power, where nothing external forces the right answer."
     ],
     "the answer needs to explain why power tests character more deeply than hardship."
    ],
    [
     "Machiavelli",
     "the demands of office",
     [
      "Machiavelli refuses the comfortable reading. He observed that a ruler who judges every act by the standards of private morality may be indulging his own conscience at the public’s expense. The demands of office are genuinely different from the demands of private life.",
      "Machiavelli makes the question harder, not easier. A person in power is not merely tempted. A person in power is supplied with reasons that sound legitimate. The task is to tell a real public necessity from a self-serving excuse."
     ],
     "the question involves the tension between public duty and private morality, or the justifications offered for power."
    ],
    [
     "Arendt",
     "power without thinking",
     [
      "Hannah Arendt identified the modern form of failure. At his trial in Jerusalem in 1961, Adolf Eichmann struck her as frighteningly ordinary. He was not a monster but a man who had stopped thinking, who processed and complied and never asked what he was doing.",
      "The banality of evil describes power exercised without the inner examination that would have interrupted it. Arendt’s warning applies to administrators as much as to rulers."
     ],
     "the answer concerns bureaucratic power, obedience or the failure to reflect on routine decisions."
    ],
    [
     "Mandela",
     "restraint at the height of power",
     [
      "Nelson Mandela’s first acts as President ran the other way. He kept many of his predecessors’ staff, formed a Government of National Unity and declined the retribution his mandate could easily have carried.",
      "He served a single term and stepped down in 1999 while fully capable of winning again. Mandela passed the examination of power by using it with restraint and giving it up voluntarily."
     ],
     "the question needs an example of power used with restraint and surrendered willingly."
    ],
    [
     "Weber",
     "the ethic of responsibility",
     [
      "Max Weber gives the administrator a usable form of the argument. An ethic of conviction judges an act by the purity of the intention behind it. An ethic of responsibility judges it by its foreseeable consequences, including the ones the actor would rather not foresee.",
      "Office demands the second ethic. Power tempts a person to be satisfied with good intentions, and Weber insists that the holder of power must answer for results."
     ],
     "the answer needs to show how a public official should judge their own decisions."
    ]
   ],
   "examples": [
    [
     "Constitutional checks and their timing",
     [
      "The test of a check is what happens when it is used against a government with a large majority. The Comptroller and Auditor General is a constitutional office with security of tenure, and its reports have started national debates. But its work is retrospective. A report that arrives three years after the money is spent constrains a successor more than the incumbent.",
      "Judicial review is the strongest check, and it works on the court’s timetable. A matter that takes years to reach hearing may be decided after the policy has done its work. Timing, not authority, is where these checks usually weaken."
     ],
     "Does the check operate while power is being used, or only afterwards? Look at timing as well as legal authority."
    ],
    [
     "Milgram, Zimbardo and situational obedience",
     [
      "Two famous studies stand very differently. Stanley Milgram’s obedience findings have held up reasonably well. Jerry Burger’s partial replication in 2009, stopped at the 150-volt point, found obedience only slightly lower than Milgram had recorded decades earlier.",
      "Philip Zimbardo’s Stanford prison experiment has not held up. Archival work shows guards were coached towards harshness, and the BBC prison study of 2002 found participants reluctant to assert authority at all. The safe use is to cite Milgram for situational obedience and Zimbardo as a caution about how a compelling story can outlive its evidence."
     ],
     "How strongly do situations shape the use of power? Use evidence that has survived replication."
    ],
    [
     "Electoral bonds and power that need not explain itself",
     [
      "On 15 February 2024, a five-judge Constitution Bench unanimously struck down the electoral bonds scheme. The Court held that anonymous political funding violated the voter’s right to information under Article 19(1)(a). The Court directed the State Bank of India to disclose purchases made since 12 April 2019, and the Election Commission to publish the data.",
      "The reasoning is the useful part. The right at stake was the voter’s capacity to judge. A voter who cannot see who funded a party cannot assess whose interest a policy serves. Opacity is not a neutral administrative choice. Opacity moves power away from the people entitled to judge its use."
     ],
     "Does power have to disclose where it comes from? Ask who can evaluate its use and with what information."
    ],
    [
     "Discretion in transfers, postings and licences",
     [
      "Discretion is where power is exercised with the least visibility. A transfer, a posting, an allotment, a licence or a clearance is a small decision, rarely reasoned in writing, seldom challenged and almost never aggregated into a record anyone examines.",
      "No single decision is large enough to attract scrutiny, while the pattern across hundreds of decisions can be decisive. The remedy is well understood. Publish criteria in advance, record reasons, fix tenure so that transfers cannot be used as punishment, and make the overall pattern visible. Discretion cannot be abolished without paralysing administration, but it can be made to leave a trace."
     ],
     "Does the use of discretion leave a record? Look for published criteria, recorded reasons and visible patterns."
    ],
    [
     "Leaders who gave up power",
     [
      "Cincinnatus is the founding story. Appointed dictator of Rome to meet a military emergency, he is said to have resigned and returned to his farm once the crisis passed. George Washington declined a third term, setting a limit by practice. Nelson Mandela served one term as President of South Africa and stepped down in 1999.",
      "Each surrendered power before being required to. Adversity tests whether a person can endure. Office tests whether they can stop, and the second test is failed far more often."
     ],
     "Can the holder of power let it go? Treat voluntary surrender of power as the clearest evidence of character."
    ]
   ],
   "topics": [
    [
     "2024B2",
     [
      "Adversity is hard, but it offers few choices. A person in hardship is restrained by circumstance: there is little to abuse and little room to indulge. Aristotle’s account of character as habit explains why restraint in adversity may prove little. The restraint was supplied from outside. Power removes those external limits. The person in office faces fewer corrections, more flattery and many private opportunities, and each choice can be justified as necessary.",
      "Machiavelli shows why the test is subtle. Power supplies reasons as well as temptations, and some of those reasons are real. The demands of office do differ from private life. Arendt shows a different failure: power exercised by people who stop thinking about what their routines do. Weber offers the standard: an official must judge actions by their foreseeable consequences and not only by good intentions. Milgram’s findings on obedience show how readily ordinary people follow authority, which is why the character of those who hold authority matters.",
      "Character alone is not a sufficient safeguard, however. Institutions must test power continuously. Disclosure rules, such as those upheld in the electoral bonds judgment, make power explain its sources. Recorded reasons make discretion leave a trace. Independent audit and judicial review make it answerable, though timing often weakens them. The final test is surrender. Cincinnatus, Washington and Mandela gave up power before they were required to. Nearly all can stand adversity, but the character revealed by power is the one that was really there."
     ]
    ]
   ],
   "intro": [
    "Adversity is often called the great test of character. Yet adversity limits choice: a person in hardship often has little room to behave badly. Power removes those limits. The person in office can act on impulse, reward flatterers, punish critics and hide mistakes, often with plausible reasons. The question is why power is the more revealing test, and what habits and institutions help people pass it."
   ],
   "claim": "Power is the real examination of character because it offers choices that adversity does not. Adversity supplies restraint from outside. Power removes restraint and supplies justifications. The character that emerges under power is the one that was actually there. Passing the test requires both personal virtue and institutions that make power explain itself, leave a trace and give way when its time is over.",
   "problem": [
    "Many people behave well when they have little power. They are restrained by rules, by scarcity and by the judgment of others. When they gain power, the restraints loosen. Fewer people correct them, more people flatter them, and many decisions can be taken in private. Small indulgences become easy, and each can be justified as necessary for the public good.",
    "The difficulty is that the demands of office are also real. A leader must sometimes act in ways that private morality would question, and must accept responsibility for consequences that nobody could fully foresee. The ethical question is how to distinguish legitimate exercise of power from self-serving use of it, and how to build institutions that test power continuously rather than trusting character alone."
   ],
   "distinction": [
    "A useful distinction",
    "Adversity tests endurance: whether a person can bear what they cannot change. Power tests restraint: whether a person will refrain from what they could easily do. The second test is harder because it is taken repeatedly, in private, with reasons available for failing it."
   ],
   "thinkersTitle": "Five thinkers, five tests of power",
   "together": [
    "Putting the five together",
    "Aristotle explains why power removes the restraint adversity supplied. Machiavelli shows that power also supplies plausible reasons. Arendt shows how power can be exercised without thought. Mandela shows restraint and voluntary surrender. Weber gives the ethic that office requires. Together they explain why power, not adversity, reveals character."
   ],
   "examplesIntro": "The examples below show checks on power, the evidence on obedience, and leaders who passed the test. They are most useful when the answer asks whether power must explain itself.",
   "models": [
    [
     "Adversity restrains and power releases.",
     "Adversity supplies restraint from outside, so good behaviour under hardship may prove little. Power removes external limits and reveals the character that was actually there."
    ],
    [
     "Power supplies justifications.",
     "Machiavelli showed that the demands of office differ from private morality. The danger is not only temptation but plausible reasons for self-serving acts. A leader must tell public necessity from personal convenience."
    ],
    [
     "Thoughtless power is dangerous.",
     "Arendt found Eichmann ordinary: a man who stopped thinking about what he did. Power exercised without reflection can produce great harm without dramatic wickedness."
    ],
    [
     "Institutions must make power explain itself.",
     "The electoral bonds judgment held that voters have a right to know who funds parties. Disclosure, recorded reasons and timely review keep power answerable."
    ],
    [
     "Surrender is the final test.",
     "Cincinnatus, Washington and Mandela gave up power before they were required to. The willingness to stop is the clearest evidence that power has not captured the person holding it."
    ]
   ],
   "steps": [
    [
     "Contrast adversity and power.",
     "Explain why adversity restrains and power releases."
    ],
    [
     "Identify the temptations and justifications.",
     "Show how power supplies both opportunity and plausible reasons."
    ],
    [
     "Apply the ethic of responsibility.",
     "Judge decisions by their foreseeable consequences."
    ],
    [
     "Bring in evidence on obedience.",
     "Use Milgram carefully, and note the weakness of Zimbardo’s study."
    ],
    [
     "Examine institutional checks.",
     "Discuss disclosure, audit, judicial review and recorded discretion."
    ],
    [
     "Give an example of restraint.",
     "Use Mandela, Washington or Cincinnatus."
    ],
    [
     "Conclude with character and institutions together.",
     "Argue that virtue and checks are both needed."
    ]
   ],
   "stepsIntro": "Use the following sequence when a question concerns power, authority and character.",
   "formula": "Test character where power removes restraint. Judge the use of power by its consequences, make it explain its sources and reasons, check it while it acts, and honour those who use it with restraint and give it up willingly."
  },
  {
   "thinkers": [
    [
     "The Buddha",
     "impermanence",
     [
      "The Buddha gives the most economical statement of the problem. Everything that arises passes away. Nothing has a fixed essence, and suffering comes largely from insisting otherwise. What a person calls a self is a process rather than a thing.",
      "For this reason, you cannot step twice into the same river. The water has moved, and the person stepping has also changed. The insight is not meant to console. The insight is an instruction to stop treating the present arrangement as permanent."
     ],
     "the answer needs to show change and impermanence as the basic condition of life."
    ],
    [
     "Laozi",
     "acting without forcing",
     [
      "Laozi draws the practical consequence. His idea of acting without forcing holds that the softest thing in the world overcomes the hardest, and that much of what people do to speed up an outcome actually delays it.",
      "Mencius told the matching story of a farmer who pulled his seedlings upward to help them grow, and killed them. Time, on this reading, is not an obstacle to be defeated. Time is a medium with its own rate."
     ],
     "the question concerns patience, gradual change or the harm of forcing outcomes."
    ],
    [
     "Marcus Aurelius",
     "ambition in perspective",
     [
      "Marcus Aurelius applied the same thought to ambition. He noted how quickly everything vanishes, and how little the reputations people exhaust themselves acquiring will finally matter.",
      "His conclusion was not that effort is pointless. His conclusion was that effort should be spent on what survives that perspective: justice, service and good character."
     ],
     "the answer needs to put ambition or reputation in a long-term perspective."
    ],
    [
     "Hegel",
     "development and understanding after the fact",
     [
      "Hegel supplies the counterweight, because his dialectic denies that change is only loss. Contradiction drives development forward.",
      "Hegel also wrote that the owl of Minerva flies only at dusk. Understanding arrives after the process it explains has finished. The years teach what the days cannot, because only the years contain the pattern, and the pattern is where the meaning lies."
     ],
     "the question concerns historical change, progress or why understanding comes late."
    ],
    [
     "Tagore",
     "reading the current",
     [
      "Tagore’s image of the river current holds both claims together. A river is not the enemy of the boat. The river carries the boat, and the boatman’s skill lies in reading the flow rather than fighting it.",
      "The years teach how to read the current. The days only supply the water."
     ],
     "the answer needs an image of working with change rather than against it."
    ]
   ],
   "examples": [
    [
     "Policy horizons longer than electoral cycles",
     [
      "Some problems have a physics that does not match the electoral calendar. Emissions decided now determine temperatures decades later. A demographic transition unfolds across generations, and an aquifer drawn down over thirty years cannot be refilled within one.",
      "A government elected for five years faces costs inside its term and benefits outside it. The result is a structural bias towards delay, not merely a failing of individual politicians. The institutional responses remove decisions from the annual cycle: an independent central bank, a statutory fiscal rule, a long-range commission or a target written into law. Each trades some democratic responsiveness for the ability to keep a promise that outlives its author."
     ],
     "How can a democracy make commitments that outlast one term? Look at institutions that bind future governments."
    ],
    [
     "Institutional memory and frequent transfers",
     [
      "Institutional memory is knowledge of why a rule exists, which case caused a procedure to be written, and which local arrangement makes a scheme work in one district and fail in the next. Almost none of it is in the file. Institutional memory sits with people and leaves when they do.",
      "Frequent transfers therefore impose a cost that appears in no budget. An officer arrives, spends months learning what the previous officer knew and is moved before applying it. An official who expects to leave within eighteen months will prefer work that finishes within eighteen months, which starves the projects that take longer."
     ],
     "What knowledge is lost when tenure is short? Ask which projects become impossible under frequent transfers."
    ],
    [
     "Compounding: the arithmetic of patience",
     [
      "Compounding makes patience measurable. A quantity growing at a steady rate does little that is visible for a long time and then a great deal quickly. Early action is therefore worth far more than the same action later, and the difference is invisible while it builds.",
      "Compounding works in savings, where an early contribution outweighs a much larger late one. Compounding works in skills, where daily practice produces a capability no short burst can match. Compounding works in infrastructure, where a network becomes more valuable as it connects. The same arithmetic runs in reverse for neglect, which is why deferred maintenance costs many times what it saved."
     ],
     "What grows or decays slowly but decisively? Show how small steady actions accumulate over years."
    ],
    [
     "When delay is itself the harm",
     [
      "Patience can disguise avoidance. Some processes are irreversible on the timescale of deliberation. An epidemic doubling every few days makes a fortnight of consultation more costly than the decision it improves. Emissions accumulate, so a tonne not reduced this decade is locked into a stock that persists for centuries.",
      "Species loss and aquifer depletion allow no later correction at any price. The test is whether the option remains available. Where waiting preserves the choice, patience is a virtue. Where waiting destroys the choice, patience is a decision taken without admitting it."
     ],
     "Does waiting keep the options open or close them? Separate reversible situations from irreversible ones."
    ],
    [
     "Longitudinal studies and long-form journalism",
     [
      "Some things are invisible at any single moment and obvious across time. A longitudinal study follows the same people for decades and can separate a genuine effect from a difference that was already present. Birth cohort studies have produced much of what is known about how early childhood shapes adult health.",
      "Long-form journalism does something similar for institutions. The reporter returns to a scheme years after its launch, when the announcement is forgotten and the outcome is finally visible. Both methods are slow, expensive and poorly rewarded, and both show a society what daily reporting cannot."
     ],
     "What can only be seen over time? Use methods that follow the same subject across years."
    ]
   ],
   "topics": [
    [
     "2025B2",
     [
      "A day contains events: a decision, a success or a failure. Only the years reveal patterns: which decisions mattered, which successes lasted and which failures taught. Hegel wrote that the owl of Minerva flies only at dusk, meaning that understanding comes after the process it explains. A longitudinal study can show how childhood shapes adult health, and long-form journalism can show what a scheme achieved years after its launch. Neither insight is available on the first day.",
      "The years also teach through accumulation. Compounding shows how small steady actions become large over time, in savings, skills and infrastructure. Institutional memory holds the knowledge of why rules exist and what works locally. Frequent transfers destroy that memory, because an officer is moved before the years can teach. Laozi warned against forcing outcomes, and Mencius’s farmer killed his seedlings by pulling them upward to help them grow.",
      "The lesson has a limit. Some matters cannot wait for the years. An epidemic or rising emissions punish delay, because waiting destroys the choice. The wisdom of the years includes knowing when patience is a virtue and when it is avoidance. Long experience teaches both the value of waiting and the recognition of the moment when waiting has become the harm."
     ]
    ],
    [
     "2022B2",
     [
      "Heraclitus said that you cannot step twice into the same river, because new waters are always flowing. The person stepping has also changed. The Buddha taught the same truth as impermanence: everything that arises passes away, and suffering comes from insisting that things stay fixed.",
      "The insight has practical force. Policies designed for one decade may fail in the next, because the society they serve has changed. A demographic transition, a shift in technology or a change in the climate alters the river. Leaders who treat the present arrangement as permanent will be surprised by change. Hegel adds that change is not only loss but development, as contradictions push societies forward.",
      "Recognising change is not the same as surrendering to it. Tagore’s boatman reads the current rather than fighting it, and uses the flow to move where he intends. Marcus Aurelius drew from impermanence the lesson of spending effort on what lasts. A wise person accepts that the river changes, adapts methods to new conditions and holds to values that give direction amid the flow."
     ]
    ]
   ],
   "intro": [
    "Most decisions are made within a day, a week or a term of office. Yet the most important patterns in life and society unfold over years or decades. A single day shows an event. The years show what the event meant. The question is how to see and act on patterns that a day cannot reveal, and how to balance patience with the urgency that some problems demand."
   ],
   "claim": "Understanding requires time. Change is constant, and its meaning appears only across years, as a pattern rather than an event. Patience, institutional memory and long-term thinking are therefore forms of wisdom. But patience is a virtue only where waiting keeps the options open. Where delay destroys the choice, as with emissions or epidemics, urgency is the wiser course.",
   "problem": [
    "Public life is organised around short cycles: daily news, annual budgets and five-year elections. Short cycles reward visible results and punish costs that fall within the term while benefits arrive later. Officers are transferred before they learn a district, and projects that take longer than a tenure are starved. The knowledge that comes only with time is lost as people move on.",
    "The opposite danger is using long-term thinking as an excuse. Some processes are irreversible. An epidemic that doubles every few days or emissions that stay in the atmosphere for centuries punish delay. The ethical question is how to build patience into institutions without letting it become a disguise for avoiding decisions."
   ],
   "distinction": [
    "A useful distinction",
    "A day contains the event. The years contain the pattern. Patience is wise where waiting preserves the choice and lets the pattern appear. Patience is avoidance where waiting destroys the choice."
   ],
   "thinkersTitle": "Five thinkers, five tests of time",
   "together": [
    "Putting the five together",
    "The Buddha shows that change is constant. Laozi and Mencius show the harm of forcing outcomes. Marcus Aurelius puts ambition in perspective. Hegel shows that change can be development and that understanding comes late. Tagore shows how to work with the current. Together they explain what the years teach that the days never know."
   ],
   "examplesIntro": "The examples below show long time horizons in policy, the cost of short tenures, the arithmetic of patience and the limits of waiting. They are most useful when the answer asks whether waiting keeps or destroys the choice.",
   "models": [
    [
     "Change is the basic condition.",
     "The Buddha taught that everything that arises passes away. You cannot step twice into the same river because both the river and the person have changed. Policies and plans must expect change rather than assume permanence."
    ],
    [
     "The pattern appears only over years.",
     "Hegel’s owl of Minerva flies at dusk: understanding comes after the process it explains. A day shows an event. The years show the pattern and its meaning."
    ],
    [
     "Forcing growth defeats it.",
     "Laozi taught acting without forcing, and Mencius told of the farmer who killed his seedlings by pulling them upward. Some outcomes have their own rate, and impatience destroys them."
    ],
    [
     "Institutions need memory.",
     "Frequent transfers remove the knowledge that sits with people rather than files. Officials who expect to move soon prefer short projects, starving the long work that matters most."
    ],
    [
     "Patience has a limit.",
     "Where waiting destroys the choice, as with epidemics or emissions, patience becomes avoidance. The wisdom of the years includes knowing when to act quickly."
    ]
   ],
   "steps": [
    [
     "Establish the fact of change.",
     "Use the Buddha or Heraclitus to show that nothing stays fixed."
    ],
    [
     "Separate event from pattern.",
     "Explain what a day shows and what only the years reveal."
    ],
    [
     "Show the value of patience.",
     "Use Laozi, compounding or institutional memory."
    ],
    [
     "Examine institutional short-termism.",
     "Discuss electoral cycles, transfers and budgets."
    ],
    [
     "Suggest long-horizon mechanisms.",
     "Point to fiscal rules, independent bodies and long-term studies."
    ],
    [
     "Mark the limits of patience.",
     "Show where delay destroys the choice."
    ],
    [
     "Conclude with direction amid change.",
     "Argue for adapting methods while holding to lasting values."
    ]
   ],
   "stepsIntro": "Use the following sequence when a question concerns time, change, patience or long-term thinking.",
   "formula": "Expect change, read the pattern across years, and build institutions with memory and long horizons. Be patient where waiting keeps the choice open, and act quickly where waiting destroys it."
  }
 ],
 "The Good Life: Contentment, Simplicity and Being Humane": [
  {
   "thinkers": [
    [
     "Aristotle",
     "happiness as an activity",
     [
      "Aristotle’s argument turns on what the word means. Eudaimonia is not a feeling that arrives. Eudaimonia is an activity of the soul in accordance with virtue, carried on over a complete life. In other words, happiness is something a person does rather than something that happens to them.",
      "Aristotle noted that we choose honour, pleasure and intelligence partly for the sake of other things, but we choose happiness only for itself. A destination can be reached and then left behind. An activity is only ever being performed."
     ],
     "the answer needs to define happiness as a way of living rather than a state reached."
    ],
    [
     "The Buddha",
     "craving moves the target",
     [
      "The Buddha reaches the same point from another direction. Suffering arises from craving, which attaches satisfaction to a condition not yet obtained. The condition arrives, the mind adjusts, and the craving moves on to something else.",
      "The Eightfold Path is therefore a practice and not a prize. Nirvana is the extinguishing of craving, not the acquisition of its object."
     ],
     "the question concerns desire, restlessness or why achievement does not bring lasting satisfaction."
    ],
    [
     "Epicurus",
     "pleasures that do not create new wants",
     [
      "Epicurus is often misread as a lover of luxury. In fact he argued for a simple life. The pleasures worth pursuing are those that are easy to obtain and do not create further wants.",
      "Bread, water and friendship serve better than luxury, because they do not manufacture the appetite they satisfy. Epicurus locates happiness in modest, repeatable pleasures rather than in a distant goal."
     ],
     "the answer needs to show how simple pleasures and friendship support a good life."
    ],
    [
     "Camus",
     "meaning in the pushing",
     [
      "Albert Camus gives the hardest version. He faced a universe that offers no destination at all, and he still wrote that Sisyphus, pushing his rock up the hill for ever, must be imagined happy. The meaning lies in the pushing.",
      "Seeing life as a journey is therefore not a consoling metaphor. Seeing life as a journey accurately describes where satisfaction is located: in the activity or nowhere."
     ],
     "the question concerns meaning without guarantees, or finding value in effort itself."
    ],
    [
     "Epictetus",
     "satisfaction available now",
     [
      "Epictetus adds the practical point that makes the idea liveable. If satisfaction lies in an activity, then it is available now, under present conditions, because the activity belongs to us and the conditions do not.",
      "There is no path to happiness, because a path implies a distance still to be covered. For Epictetus, the distance was never the obstacle. The obstacle was the belief that happiness waits somewhere else."
     ],
     "the answer needs to show that happiness depends on present choices rather than future conditions."
    ]
   ],
   "examples": [
    [
     "Income and well-being: the research",
     [
      "The Easterlin paradox observed that average reported happiness in a country can stay flat while national income rises for decades. In 2010, Daniel Kahneman and Angus Deaton found that day-to-day emotional well-being stopped improving above an annual income of about 75,000 dollars. In 2021, Matthew Killingsworth found that it kept rising.",
      "The two sides then worked together with Barbara Mellers and published a joint answer in 2023. Flattening is real, but only for the least happy group. For everyone else, well-being keeps rising with income, at a diminishing rate. Money keeps mattering, but each doubling of income buys a fixed increase rather than a proportional one."
     ],
     "Does more money bring more happiness? Show that income matters most at the bottom and less at the top."
    ],
    [
     "Bhutan’s Gross National Happiness",
     [
      "Bhutan is the standing example of a state that made well-being its constitutional purpose. Gross National Happiness is written into its 2008 constitution and measured through an index covering health, education, living standards, governance, ecology, time use, community vitality, cultural resilience and psychological well-being. In India, Madhya Pradesh created a department for happiness in 2016.",
      "The serious argument is not whether happiness can be measured precisely. Every government already aims at something. GDP was designed to measure production, not life. What gets measured shapes what gets funded, which makes the choice of indicator a political decision."
     ],
     "What should a government measure to judge progress? Compare output measures with measures of well-being."
    ],
    [
     "Mental health in an achievement culture",
     [
      "The National Mental Health Survey of 2015-16, conducted by NIMHANS across twelve states with 34,802 respondents, found that about 10.6 per cent of adults had a mental disorder. Prevalence was higher in urban metros, at 13.5 per cent, than in rural areas, at 6.9 per cent. Between 70 and 92 per cent of those affected received no adequate care.",
      "Set the treatment gap beside a culture that measures worth by rank, salary and title. Achievement is measured and published continuously. Its cost is neither measured nor disclosed. A person is judged on one and left alone with the other."
     ],
     "What does a culture of arrival cost? Look at the mental health burden and the gap in care."
    ],
    [
     "The counter-argument: when arrival is the point",
     [
      "The claim that happiness lies in the journey is made mostly by people who have already arrived somewhere. For a household without secure food, a roof or the means to pay a medical bill, the destination is not a fantasy that will disappoint. The destination is a floor, and reaching it changes life in lasting ways.",
      "The income research supports this point. Gains from additional income are largest at the bottom. The arrival fallacy is therefore a problem of the comfortable. An essay that preaches contentment without saying to whom it applies is speaking to the wrong audience."
     ],
     "For whom is the journey the point, and for whom is arrival essential? Separate the arrival fallacy from the need for a secure floor."
    ],
    [
     "Emptiness after arrival",
     [
      "The arrival fallacy is easiest to see when a long-pursued goal is finally reached and the expected change does not come. Retirement, the departure of grown children, and the period after a promotion or a cleared examination share a structure.",
      "Each removes a source of daily purpose that had been mistaken for a burden. Each ends a story the person had been living inside. Goals are not worthless. A goal supplies a direction and a daily practice, and only the direction ends on arrival. The practice has to be rebuilt, and most people plan for neither."
     ],
     "What does a goal give that arrival takes away? Show why people need a new daily practice after reaching a goal."
    ]
   ],
   "topics": [
    [
     "2024A3",
     [
      "The saying rejects the idea that happiness waits at the end of a road. If happiness were a destination, it could be reached only after the journey, and life before arrival would be merely preparation. Aristotle described happiness as an activity carried on over a whole life, not a state reached at its end. The Buddha explained why reaching a goal rarely satisfies: craving adjusts and moves on to a new object.",
      "Research supports the point. Hedonic adaptation means people return to their previous level of well-being after most gains. The emptiness that often follows retirement, promotion or a cleared examination shows that the goal had supplied a daily practice, and arrival took it away. Camus found meaning in Sisyphus’s pushing, and Epictetus taught that satisfaction is available now, because the activity belongs to us.",
      "Yet the saying must not become a reason to ignore material need. Income matters most for people at the bottom, and for a family without food or healthcare, reaching security is a real improvement. The wise reading is that happiness is found in how one lives, once the basic floor of life is secure. Public policy must provide that floor. Personal wisdom must stop treating the next achievement as the condition for living well."
     ]
    ],
    [
     "2025B3",
     [
      "Seeing life as a destination makes the present a waiting room. Every day is judged by how close it brings us to a future condition. When the condition arrives, it often disappoints, and a new destination replaces it. Seeing life as a journey changes the question from “how far is there left to go?” to “how well am I travelling?” Aristotle’s eudaimonia and the Buddha’s path both place value in the practice rather than the prize.",
      "The journey view also changes how failure and delay appear. If life is a journey, a setback is part of the route rather than a failure to arrive. Epicurus valued the simple pleasures available along the way, and Camus found meaning in effort itself. The research on hedonic adaptation shows why the destination view disappoints: people adjust quickly to what they gain.",
      "A journey still needs direction. Without some destination, travel becomes wandering. The better view is to hold goals lightly as directions while finding satisfaction in the daily practice of work, relationships and growth. Society also has a role: people struggling to secure food, health and shelter need to reach those destinations. For them, arrival is not a fallacy but a necessity."
     ]
    ]
   ],
   "intro": [
    "Many people organise their lives around a future condition: a job, a salary, a house, a rank. They expect to be happy when they arrive. Often the arrival brings a short lift and then a return to the old mood, and a new goal takes the place of the old one. The question is where satisfaction is actually found, and what follows for how a person or a society should pursue it."
   ],
   "claim": "Happiness is an activity, not a destination. Satisfaction lies in how a life is lived each day: in work done well, relationships kept and virtues practised. Goals still matter because they give direction, but reaching them does not deliver lasting happiness. For people without the basics of a decent life, however, arriving at security is exactly the point, and the argument must not become a sermon on contentment to the poor.",
   "problem": [
    "Modern life encourages the belief that happiness lies at the end of a series of achievements. Education leads to a job, the job to promotion, and promotion to comfort. Each stage is presented as the condition for a happiness that will come later. Research on hedonic adaptation shows that people adjust quickly to gains, so the expected happiness fades soon after it arrives.",
    "Yet the opposite claim can also mislead. For a family without secure food, housing or healthcare, reaching a basic standard of living changes life in lasting ways. The income research supports this: additional income matters most at the bottom. The task is to hold both truths together: happiness is found in the practice of living, and a society must still secure the floor that makes such a practice possible."
   ],
   "distinction": [
    "A useful distinction",
    "A goal gives two things: a direction and a daily practice. Arrival delivers only the end of the direction. The practice has to be rebuilt, which is why people often feel empty after a long-sought goal is reached."
   ],
   "thinkersTitle": "Five thinkers, five tests of happiness",
   "together": [
    "Putting the five together",
    "Aristotle defines happiness as an activity. The Buddha explains why arrival does not satisfy. Epicurus shows the value of simple pleasures that create no new wants. Camus finds meaning in the effort itself. Epictetus makes satisfaction available now. Together they explain why happiness is the path rather than the end of it."
   ],
   "examplesIntro": "The examples below test the claim against research, policy and the lives of people who have not yet reached a secure floor. They are most useful when the answer asks for whom the claim is true.",
   "models": [
    [
     "Happiness is an activity.",
     "Aristotle defined eudaimonia as an activity of the soul in accordance with virtue over a complete life. Happiness is something a person does, not something that happens to them. A destination is reached and left. An activity is always being performed."
    ],
    [
     "Arrival disappoints because craving moves.",
     "The Buddha taught that craving attaches satisfaction to a condition not yet obtained. When the condition arrives, the mind adjusts and craving moves on. Research on hedonic adaptation shows the same pattern."
    ],
    [
     "Goals give direction and practice.",
     "A long-pursued goal supplies both a direction and a daily practice. Arrival ends only the direction. The emptiness after retirement or promotion shows that the practice must be rebuilt."
    ],
    [
     "Income matters most at the bottom.",
     "Research by Kahneman, Deaton and Killingsworth shows that well-being keeps rising with income at a diminishing rate. For the poor, reaching security is a real gain, not an illusion."
    ],
    [
     "Measure what matters.",
     "Bhutan made Gross National Happiness a constitutional purpose. Whatever a state measures shapes what it funds, so the choice between output and well-being indicators is a political decision."
    ]
   ],
   "steps": [
    [
     "Define happiness.",
     "Use Aristotle to present happiness as an activity rather than a feeling or a state."
    ],
    [
     "Explain the arrival fallacy.",
     "Use the Buddha and hedonic adaptation to show why goals rarely satisfy on arrival."
    ],
    [
     "Show where satisfaction lies.",
     "Point to daily practice, relationships and simple pleasures."
    ],
    [
     "Bring in evidence.",
     "Use the income and well-being research or mental health data."
    ],
    [
     "State the counter-argument.",
     "Acknowledge that for the poor, reaching security is essential."
    ],
    [
     "Apply to policy.",
     "Discuss well-being measures and the provision of a basic floor."
    ],
    [
     "Conclude with direction and practice.",
     "Recommend goals as directions and daily life as the place of satisfaction."
    ]
   ],
   "stepsIntro": "Use the following sequence when a question concerns happiness, the good life or the journey and the destination.",
   "formula": "Find happiness in the practice of living, not at the end of a road. Hold goals as directions, rebuild daily purpose after arrival, and secure the basic floor that lets everyone travel the journey with dignity."
  },
  {
   "thinkers": [
    [
     "Gandhi",
     "need and greed",
     [
      "Gandhi said that the earth provides enough for every man’s need but not for every man’s greed. The saying is usually quoted as moral advice. The saying reads better as an economic claim about limits. His idea of aparigraha, or non-possession, was not an instruction to own nothing. Aparigraha was an instruction to hold only what one actually uses.",
      "His objection to industrial civilisation followed. An industrial society manufactures wants faster than it satisfies them, so it grows richer in goods while growing poorer in the experience of having enough."
     ],
     "the answer needs an Indian argument for limits on consumption."
    ],
    [
     "Mahavira",
     "non-possession as a vow",
     [
      "Mahavira took the position to its limit. He made non-possession a vow and treated attachment itself as bondage.",
      "His example shows why the charge of utopianism must be answered honestly. A doctrine that only a renunciate can follow is not a social programme. Mahavira supplies the ideal. Others must supply a version that households can live by."
     ],
     "the question concerns renunciation, or the charge that wantlessness is utopian."
    ],
    [
     "Schumacher",
     "a different optimisation",
     [
      "E. F. Schumacher supplied the answer that makes the position workable. What he called Buddhist economics aims at the maximum of well-being with the minimum of consumption, not the maximum of consumption.",
      "Schumacher treated work as a source of meaning rather than a cost to be reduced, and asked what scale of technology a community can actually control. His economics is not renunciation. His economics is a different goal for the same economy."
     ],
     "the answer needs a practical economic model of sufficiency."
    ],
    [
     "Sen",
     "freedom as the goal",
     [
      "Amartya Sen moves the goal altogether. Development is the expansion of substantive freedoms: the capability to be and do what a person has reason to value.",
      "Income matters as an instrument, not in itself. Sen’s view explains why a poor household needs more goods, while a rich one may gain nothing from more. Enough is measured by capabilities, not possessions."
     ],
     "the question concerns development, poverty or what economic growth is for."
    ],
    [
     "Thiruvalluvar",
     "enough decided by need",
     [
      "Thiruvalluvar states the standard without any metaphysics. In the Tirukkural, wealth is meant to serve the household’s needs and the duties of giving and hospitality.",
      "What counts as enough is decided by those needs. Wealth beyond them becomes a burden, held for others rather than enjoyed. Thiruvalluvar grounds sufficiency in household ethics rather than renunciation."
     ],
     "the answer needs an ancient Indian view of wealth, sufficiency and giving."
    ]
   ],
   "examples": [
    [
     "Mission LiFE and individual responsibility",
     [
      "India announced Mission LiFE, or Lifestyle for Environment, at COP26 in Glasgow in November 2021. The mission frames sustainability partly as individual behaviour. UNEP has estimated that if one billion people adopted environment-friendly behaviours, global emissions could fall by about twenty per cent.",
      "The criticism concerns where responsibility lands. The Carbon Disclosure Project linked about seventy per cent of global industrial emissions since 1988 to a hundred producers. An exclusive focus on household habits can look like a transfer of blame. Twenty per cent is substantial, but it is not the other eighty."
     ],
     "Where does responsibility for consumption lie? Weigh individual behaviour against producers and policy."
    ],
    [
     "Fast fashion and food waste as manufactured want",
     [
      "The strongest evidence that wants are produced rather than discovered is that some industries are profitable only if wants keep expanding. Fast fashion works by shortening the time a garment feels wearable. Clothes are not worn out but declared finished.",
      "Food systems in wealthy markets waste a large share of what is grown, much of it after purchase. If the desire was engineered, then declining it is not self-denial. Declining it is refusing to buy a want that was sold alongside the product."
     ],
     "Is the desire natural or manufactured? Look at industries that depend on shortening the life of what they sell."
    ],
    [
     "Minimalism and the poor",
     [
      "Minimalism as it is sold is an aesthetic that requires money: fewer objects, but expensive ones, in a large uncluttered room. Minimalism demonstrates that one could buy more and has chosen not to, which makes it a status signal rather than renunciation.",
      "A household with three vessels because it can afford only three is not practising simplicity. Gandhi’s position survives the test because he could have lived otherwise and was explicit that poverty was not his ideal."
     ],
     "Is the simplicity chosen or imposed? Separate voluntary sufficiency from deprivation."
    ],
    [
     "Degrowth or green growth",
     [
      "The climate debate asks whether emissions can fall fast enough while output keeps rising. Green growth says they can, through renewables, efficiency and electrification. Several wealthy economies have reduced emissions while growing. Degrowth says the decoupling is too slow and partly due to moving production abroad, so rich economies must reduce throughput.",
      "For India, the argument has a different shape. A country with large unmet needs in energy, housing and nutrition cannot treat contraction as a goal. India has therefore argued in per capita terms. The honest framing is not growth against no growth. The honest framing is who has already used the carbon budget."
     ],
     "Should everyone consume less, or should the rich consume less while the poor consume more? Consider per capita emissions and unmet needs."
    ],
    [
     "Consumption and employment",
     [
      "The counter-case is strong in a developing economy. Domestic demand turns capacity into jobs. Much Indian employment sits in sectors that exist because people buy more than they strictly need: textiles, construction, hospitality, retail and transport.",
      "A general fall in consumption lands first on informal and daily-wage workers, as the demand collapse of 2020 showed. An argument for sufficiency must therefore specify whose consumption should fall. Reducing the footprint of the richest tenth and reducing total demand are different policies with opposite effects on the poor."
     ],
     "Whose consumption should change? Separate restraint at the top from a fall in demand that hurts workers."
    ]
   ],
   "topics": [
    [
     "2021A3",
     [
      "The statement rejects both extremes. Wantlessness is utopian because only a few can live by it. Mahavira made non-possession a vow, but a society cannot run on the ideals of renunciates. Families need homes, healthcare and education, and a developing economy needs demand to create jobs. Materialism is a chimera because it promises satisfaction it cannot deliver. Each gain creates a new want, and industries such as fast fashion profit by manufacturing desire.",
      "The third answer is sufficiency. Gandhi’s aparigraha asks people to hold what they use, not to own nothing. Schumacher’s Buddhist economics aims at maximum well-being with minimum consumption. Sen defines development as expanding freedoms, which means that income matters as a means. Thiruvalluvar ties wealth to the needs and duties of the household.",
      "Sufficiency also has a distributional meaning. The poor need more goods to reach a decent life, while the rich may gain little from more. Mission LiFE’s focus on lifestyle is useful, but responsibility also lies with producers and policy. The balanced conclusion is that neither renunciation nor accumulation should be the goal. Enough, defined by what a good life requires and shared fairly, is both practical and ethical."
     ]
    ],
    [
     "2025B4",
     [
      "Contentment is natural wealth because it does not depend on continuous acquisition. A person who knows what is enough can enjoy what they have without chasing the next purchase. Epicurus valued simple pleasures that create no new wants, and Gandhi argued that the earth has enough for need but not for greed. Contentment frees time, attention and resources for relationships, work and service.",
      "Luxury can be artificial poverty because it manufactures wants faster than it satisfies them. The more one has, the more one is trained to want, and the gap between desire and possession never closes. Fast fashion shows how industries shorten the life of goods to keep demand growing. A person surrounded by luxury may feel poorer than a person with less, because they are always measuring against the next level.",
      "The statement needs a qualification. Contentment cannot be preached to people without food, shelter or healthcare. For them, acquiring the basics is not greed but justice. Contentment is wealth only above the floor of a decent life. The ethical task is to help everyone reach that floor, while encouraging those above it to see that more consumption is not the same as more well-being."
     ]
    ]
   ],
   "intro": [
    "Two views of the good life compete. One says that happiness lies in wanting less: renunciation, simplicity and freedom from desire. The other says that prosperity lies in producing and consuming more. Both have failures. Complete renunciation is possible only for a few, and endless consumption promises satisfaction it cannot deliver. The question is whether there is a third answer that a society, not only a saint, can live by."
   ],
   "claim": "The third answer is sufficiency. Enough is defined by what a good life requires, not by what a market can sell. Sufficiency accepts that material goods matter as means to freedom and well-being, while refusing the belief that more is always better. Contentment is natural wealth because it does not require constant acquisition. Luxury can be artificial poverty because it manufactures wants faster than it satisfies them.",
   "problem": [
    "Consumption drives economies. Jobs in textiles, construction, retail and transport depend on people buying more than they strictly need. For a developing country with millions still lacking basic goods, rising consumption is part of rising welfare. A call for renunciation can sound like a demand that the poor stay poor.",
    "Yet unlimited consumption has costs. Industries profit by shortening the life of products and creating new wants. Environmental limits make the consumption patterns of the rich impossible to extend to everyone. The ethical and economic question is how to define enough, whose consumption should fall and whose should rise, and how to separate the need for development from the manufacture of desire."
   ],
   "distinction": [
    "A useful distinction",
    "Voluntary sufficiency is chosen by someone who could have more. Imposed scarcity is suffered by someone who cannot. The first can be a virtue. Describing the second as simplicity flatters the observer and insults the household."
   ],
   "thinkersTitle": "Five thinkers, five tests of enough",
   "together": [
    "Putting the five together",
    "Gandhi and Mahavira supply the ideal of non-possession. Schumacher turns it into an economics of well-being with minimum consumption. Sen redefines the goal as freedom, which explains why the poor need more and the rich may not. Thiruvalluvar defines enough by the needs of the household. Together they give the third answer: sufficiency."
   ],
   "examplesIntro": "The examples below show sufficiency in policy, the evidence of manufactured wants, and the limits of the argument in a developing economy. They are most useful when the answer asks whose consumption should change.",
   "models": [
    [
     "Sufficiency is the third answer.",
     "Neither wantlessness nor endless consumption can guide a society. Sufficiency defines enough by what a good life requires, not by what a market can sell. The standard is practical for households and ethical for the planet."
    ],
    [
     "Aparigraha means holding what you use.",
     "Gandhi’s non-possession was not an instruction to own nothing. Gandhi asked people to hold only what they actually use. The earth has enough for need but not for greed."
    ],
    [
     "Development is freedom, not accumulation.",
     "Sen defines development as the expansion of capabilities. Income matters as an instrument. The poor need more goods, while the rich may gain little from more."
    ],
    [
     "Many wants are manufactured.",
     "Fast fashion and food waste show industries that profit by expanding desire past the point of use. Declining such wants is not self-denial but a refusal to buy what was engineered."
    ],
    [
     "Restraint must fall where it is fair.",
     "A general fall in consumption hurts informal workers first. An argument for sufficiency must specify that the richest should consume less while the poorest are helped to consume more."
    ]
   ],
   "steps": [
    [
     "State both extremes.",
     "Explain why wantlessness is impractical and materialism unsatisfying."
    ],
    [
     "Propose sufficiency.",
     "Define enough by the needs of a good life."
    ],
    [
     "Bring in Indian thought.",
     "Use Gandhi’s aparigraha, Mahavira or Thiruvalluvar."
    ],
    [
     "Use economic reasoning.",
     "Apply Schumacher’s well-being economics and Sen’s capability approach."
    ],
    [
     "Show manufactured wants.",
     "Use fast fashion or food waste as evidence."
    ],
    [
     "Address distribution.",
     "Separate restraint by the rich from the needs of the poor, and discuss employment."
    ],
    [
     "Link to sustainability.",
     "Discuss Mission LiFE, producer responsibility and per capita fairness."
    ]
   ],
   "stepsIntro": "Use the following sequence when a question concerns consumption, simplicity, contentment or materialism.",
   "formula": "Seek sufficiency rather than renunciation or accumulation. Define enough by what a good life requires, raise the floor for the poor, restrain the manufactured wants of the rich, and measure progress by freedom and well-being rather than by consumption."
  },
  {
   "thinkers": [
    [
     "Laozi",
     "the effort that has been concealed",
     [
      "Laozi refuses the obvious reading of simplicity. He wrote that the Tao which can be named is not the eternal Tao, and that the sage achieves more by not forcing than the person who strains.",
      "Simplicity here is not the absence of effort but effort concealed. Simplicity is the state reached after everything unnecessary has been removed, which is far harder than the state before anything was added. Laozi’s image is water, the softest substance, which still wears down stone because it has no fixed shape to defend."
     ],
     "the answer needs a philosophical account of simplicity as achievement."
    ],
    [
     "Thiruvalluvar",
     "compression as mastery",
     [
      "Thiruvalluvar makes the same point through the form of his verse. Each couplet of the Tirukkural compresses an ethical argument into two short lines.",
      "The compression is itself the achievement. The thought had to be fully possessed before it could be stated so briefly. Brevity of that kind is evidence of understanding, not a shortcut around it."
     ],
     "the question needs an Indian example of compression as a sign of mastery."
    ],
    [
     "Gandhi",
     "the compressed symbol",
     [
      "Gandhi carried simplicity into politics and dress. Appearing in a loincloth before the British establishment was a compressed argument about whom he represented.",
      "The spinning wheel condensed self-reliance, the dignity of labour and economic decentralisation into a single object that a villager could hold. His talisman reduced a complex ethical judgment to one test that a tired official could apply."
     ],
     "the answer needs an example of simplicity as political communication or a decision rule."
    ],
    [
     "Kabir",
     "dismantling professional complexity",
     [
      "Kabir worked from the other direction. He used the language of weaving and ordinary household life to dismantle religious complexity that had become a profession for those who maintained it.",
      "Kabir shows that complexity has a sociology. Complexity can protect an expert class and keep ordinary people dependent on interpreters. Plain speech returns the question to everyone."
     ],
     "the question concerns jargon, gatekeeping or the power of experts."
    ],
    [
     "Schumacher",
     "appropriate technology",
     [
      "E. F. Schumacher applied the principle to machines. A tool that a village can build, repair and afford does more good than a plant the village cannot control.",
      "Simplicity here is an engineering discipline, not a preference. Simplicity puts the user rather than the manufacturer in charge of the outcome."
     ],
     "the answer concerns technology, development or design that serves users."
    ]
   ],
   "examples": [
    [
     "Plain language in law and welfare forms",
     [
      "A statute that governs a citizen and cannot be read by that citizen has transferred power to whoever can read it. Indian drafting inherits a colonial style built on very long sentences, nested provisos and definitions that refer to other definitions. The style may be defensible in a tax code argued by specialists. The style is indefensible in a welfare application.",
      "The consequence is exclusion. A form that requires an intermediary creates a paid intermediary, and the fee falls on exactly the applicant the scheme exists to help. The test for plain drafting is whether an eligible person can prove eligibility without paying someone to explain the sentence."
     ],
     "Who can read the rule that governs them? Ask whether complexity creates a paid gatekeeper."
    ],
    [
     "UPI and the design of public interfaces",
     [
      "UPI is India’s clearest demonstration that interface design is policy. Annual UPI transactions rose from about 1.78 crore in 2016-17 to more than 18,000 crore in 2024-25, and the number of banks on the network grew from 44 to more than 600. India now accounts for a large share of the world’s real-time payments.",
      "UPI did not succeed because its engineering was unprecedented. UPI succeeded because the action asked of the user was reduced to something possible on a cheap phone with poor connectivity. Where a public system fails on adoption, the defect is usually in what it asks of the person, not in what it can do."
     ],
     "Did simplicity decide adoption? Look at what the system asks of its least skilled user."
    ],
    [
     "Jargon as armour",
     [
      "Technical vocabulary has a legitimate use. Technical vocabulary compresses a precise idea for people who share the definition. Jargon can also make a decision unexaminable by anyone outside the room.",
      "The test is whether the term survives translation into ordinary words. If it does, the jargon was shorthand. If the plain version is embarrassing, the jargon was armour. Regulatory forbearance describes a decision to let a bank delay admitting a loss. A public decision must be defensible in the language of the public."
     ],
     "Does the term survive translation into plain words? Ask whether jargon compresses meaning or hides it."
    ],
    [
     "Irreducible complexity and the checklist",
     [
      "The case for simplicity, pushed too far, becomes an argument for dangerous ignorance. Some systems are complex because reality is. A drug interaction, the taxation of cross-border income or an aircraft failure at altitude cannot be reduced to one rule without losing distinctions on which safety depends.",
      "The answer is structure, not compression. The surgical safety checklist and the aviation checklist do not simplify the underlying system. The checklists make the complexity navigable under pressure by fixing the order of operations. Simplifying the problem can kill. Simplifying the interface saves lives."
     ],
     "Is the complexity real or protective? Simplify the interface, not the problem, where the complexity is real."
    ],
    [
     "Gandhi’s talisman as a decision rule",
     [
      "Gandhi’s talisman asks a person facing a doubtful decision to recall the face of the poorest and weakest person they have seen, and to ask whether the step contemplated will be of any use to that person.",
      "The talisman is a piece of design as well as moral instruction. The talisman turns an abstract question about the public good into a concrete test with a specific person in it, usable by someone tired and under pressure. The talisman is also a distributional rule, asking about the worst-off rather than the total, which places it closer to Rawls than to Bentham. Its limit is that it gives a direction, not a magnitude."
     ],
     "Can a complex ethical judgment be reduced to a usable rule? Show both the power and the limit of the talisman."
    ]
   ],
   "topics": [
    [
     "2020A4",
     [
      "Simplicity looks easy, but it is usually the last stage of understanding. Laozi described the sage as achieving more by not forcing, and Thiruvalluvar compressed whole ethical arguments into two lines. Reaching simplicity requires knowing what can be removed without loss, which requires understanding the whole. Complexity is the easier state. Anyone can add. Only someone who understands can take away.",
      "Simplicity is also sophisticated in its effects. UPI succeeded because it asked very little of the user. Gandhi’s spinning wheel and talisman carried complex arguments in forms that ordinary people could use. Schumacher’s appropriate technology put the user in charge. By contrast, complex laws and welfare forms create paid intermediaries, and jargon can hide decisions from public scrutiny. Kabir showed that complexity often protects those who control it.",
      "The saying has limits that a good answer should state. Some systems are complex because reality is complex. Medicine, aviation and international taxation cannot be reduced to single rules without danger. The sophisticated response is to simplify the interface, as checklists do, rather than the problem. Simplicity is the ultimate sophistication when it comes from understanding and serves the user, not when it ignores what matters."
     ]
    ]
   ],
   "intro": [
    "Simplicity is often mistaken for ease. A simple design, a clear sentence or a short rule looks as if it took little effort. In fact, simplicity is usually the result of long work: understanding a problem well enough to remove everything that does not matter. Complexity, by contrast, can protect experts, hide responsibility and exclude ordinary people. The question is why simplicity is a mark of sophistication, and when simplifying goes too far."
   ],
   "claim": "Simplicity is the ultimate sophistication because it requires complete understanding and makes an idea usable by others. A simple law, form or tool puts the user in charge. Complexity often has a social function: it protects those who control it and delays the moment when a claim can be checked. But some systems are complex because reality is complex. The answer there is not to simplify the problem, but to simplify the interface to it.",
   "problem": [
    "Much of public life is more complicated than it needs to be. Laws are drafted in long sentences with nested provisos. Welfare forms require intermediaries. Financial products are described in jargon that few can understand. Each layer of complexity has a defender, and each makes it harder for citizens to know their rights or hold decision-makers to account.",
    "Simplifying, however, can also cause harm. A drug interaction, an aircraft emergency or cross-border taxation cannot be reduced to a single rule without losing distinctions that keep people safe. The challenge is to separate complexity that conceals from complexity that is real, and to design systems in which even real complexity can be navigated by the people who depend on them."
   ],
   "distinction": [
    "A useful distinction",
    "Simplifying the problem removes distinctions that may matter, and can be dangerous. Simplifying the interface leaves the problem intact but makes it navigable, as a checklist or a well-designed form does. The second is the sophistication the saying praises."
   ],
   "thinkersTitle": "Five thinkers, five tests of simplicity",
   "together": [
    "Putting the five together",
    "Laozi shows that simplicity is effort concealed. Thiruvalluvar shows that compression requires mastery. Gandhi shows how a simple symbol or rule can carry a complex argument. Kabir shows how complexity can protect experts. Schumacher shows simplicity as design that empowers users. Together they explain why simplicity is harder to reach than complexity and more useful once reached."
   ],
   "examplesIntro": "The examples below show simplicity succeeding in public design, complexity serving as armour, and the limits of simplifying a complex reality. They are most useful when the answer asks who benefits from the complexity.",
   "models": [
    [
     "Simplicity is effort concealed.",
     "Laozi described simplicity as the state reached after everything unnecessary has been removed. Reaching it requires complete understanding, which is why it is harder than complexity."
    ],
    [
     "Compression shows mastery.",
     "Thiruvalluvar compressed ethical arguments into two-line couplets. A thought must be fully possessed before it can be stated so briefly."
    ],
    [
     "Complexity can protect power.",
     "Kabir used ordinary language to dismantle religious complexity maintained by professionals. Complex laws, forms and jargon can exclude citizens and shield decisions from scrutiny."
    ],
    [
     "Design decides adoption.",
     "UPI grew from about 1.78 crore transactions in 2016-17 to more than 18,000 crore in 2024-25, because it asked little of the user. Public systems often fail on what they ask of people, not on what they can do."
    ],
    [
     "Simplify the interface, not the problem.",
     "Medicine and aviation are complex because reality is. Checklists make that complexity navigable without pretending it away. The sophisticated response to real complexity is structure."
    ]
   ],
   "steps": [
    [
     "Define simplicity.",
     "Distinguish simplicity reached through understanding from simplicity that ignores what matters."
    ],
    [
     "Show why simplicity is hard.",
     "Use Laozi or Thiruvalluvar."
    ],
    [
     "Show what simplicity achieves.",
     "Use UPI, Gandhi’s symbols or appropriate technology."
    ],
    [
     "Examine the sociology of complexity.",
     "Ask whom complex laws, forms and jargon protect."
    ],
    [
     "Acknowledge irreducible complexity.",
     "Use medicine, aviation or tax as examples."
    ],
    [
     "Offer the solution.",
     "Recommend simplifying interfaces through checklists, plain language and good design."
    ],
    [
     "Conclude with the user.",
     "Judge simplicity by whether the intended user can act without help."
    ]
   ],
   "stepsIntro": "Use the following sequence when a question concerns simplicity, clarity or complexity.",
   "formula": "Pursue simplicity that comes from understanding and serves the user. Remove complexity that protects gatekeepers, and where reality is complex, simplify the interface rather than the problem."
  },
  {
   "thinkers": [
    [
     "Marcus Aurelius",
     "beginning with debts",
     [
      "Marcus Aurelius began the Meditations not with doctrine but with a list of debts. He set out what he had learned from his grandfather, his teachers and his adopted father.",
      "The opening is itself the argument. A mind that begins by listing what it has received is oriented differently from one that begins by listing what it lacks. The difference decides what the person notices for the rest of the day. His method throughout was to examine his own impressions before acting on them."
     ],
     "the answer needs a model of gratitude as a daily practice."
    ],
    [
     "Epictetus",
     "opinions, not things",
     [
      "Epictetus states the same mechanism as a rule. People are disturbed not by things but by the opinions they hold about things.",
      "Since the opinion is the part that belongs to us, calm is available even in circumstances that cannot be improved. For this reason Epictetus could teach the doctrine from a condition of slavery without absurdity."
     ],
     "the question concerns tranquillity, resilience or control over one’s own responses."
    ],
    [
     "The Buddha",
     "mindfulness interrupts craving",
     [
      "The Buddha adds the technique that the Stoics point towards without systematising. Mindfulness is sustained, non-judgmental attention to what is actually happening.",
      "Within the Eightfold Path, mindfulness interrupts the automatic movement from sensation to craving to distress before that movement completes. Tranquillity comes from seeing the reaction as it happens."
     ],
     "the answer needs to explain mindfulness and how it produces calm."
    ],
    [
     "Guru Nanak",
     "remembrance within working life",
     [
      "Guru Nanak gives an Indian devotional version. Remembrance of the divine, naam japna, is practised in the middle of ordinary working life rather than in withdrawal from it. Remembrance goes together with honest labour, kirat karni, and sharing with others, vand chhakna.",
      "Guru Nanak joins inner attention to outer duty. Tranquillity is not found by leaving the world but by living in it with remembrance, work and generosity."
     ],
     "the question needs an Indian example that links inner practice to work and service."
    ],
    [
     "Gibran",
     "joy and sorrow from the same well",
     [
      "Kahlil Gibran adds the corrective that stops the argument becoming a case for numbness. He wrote that joy and sorrow are inseparable, drawn from the same well.",
      "A tranquil self is therefore not one that has stopped feeling. A tranquil self is one that is no longer ruled by what it feels. Gibran’s distinction separates cultivated equanimity from suppression."
     ],
     "the answer needs to show that tranquillity does not mean the absence of feeling."
    ]
   ],
   "examples": [
    [
     "The attention economy",
     [
      "In a business funded by advertising, the user’s attention is the product and the content is the bait. The interface is designed against the user’s stated intention. Variable rewards, autoplay, infinite scroll and timed notifications apply well-understood behavioural findings to the problem of keeping users engaged.",
      "Framing the problem as a matter of willpower therefore misdescribes it. A person resisting a feed is not fighting their own weakness but the work of teams optimising against them with far better data. Mindfulness is a reasonable individual response and an inadequate systemic one, as a swimming lesson is a reasonable response to a flood."
     ],
     "Is distraction a personal failing or a designed outcome? Separate individual practice from the design of the environment."
    ],
    [
     "Corporate wellness and structural burnout",
     [
      "William Fleming of Oxford’s Wellbeing Research Centre studied survey responses from 46,336 workers in 233 organisations. The study, published in the Industrial Relations Journal in 2024, compared participants and non-participants in individual well-being programmes. The study found no benefit from resilience training, mindfulness classes or well-being apps. Of about ninety offerings examined, only volunteering was associated with better well-being.",
      "If burnout comes from workload, insecurity and lack of control, then an intervention aimed at the worker’s response treats the symptom while the cause continues. The programme’s real function may be to show that something was done."
     ],
     "Is the programme addressing the cause or the symptom? Ask whether work conditions changed."
    ],
    [
     "What the evidence on gratitude supports",
     [
      "Structured gratitude practices, such as writing down things one is grateful for, do show benefits. The effects are usually modest, often measured against no treatment rather than an active alternative, and frequently assessed over short periods with self-reported outcomes.",
      "The defensible claim is narrow. Deliberately attending to what is already present appears to raise reported well-being somewhat, for some people, in the short run. The effect is enough to make gratitude worth practising. The effect is not enough to support a claim that attention alone determines contentment."
     ],
     "How strong is the evidence for inner practices? Use modest claims that the research supports."
    ],
    [
     "Yoga as public health policy",
     [
      "India has treated yoga as an instrument of both health policy and diplomacy. The Ministry of AYUSH was created in 2014 to bring traditional systems into formal health administration. The United Nations designated 21 June as the International Day of Yoga, observed since 2015.",
      "The public health case rests on non-communicable disease. Where the burden is hypertension, diabetes and sedentary living, a low-cost practice needing no equipment is a rational intervention. Honesty about evidence is essential. Claims that yoga supports cardiovascular and mental health are reasonably supported. Claims that yoga can substitute for treatment of serious disease are not."
     ],
     "Where does an inner practice serve public health, and where does it overreach? Separate supported claims from unsupported ones."
    ],
    [
     "Tranquillity as accommodation",
     [
      "The sharpest objection to the theme should be stated at full strength. A philosophy that places well-being entirely in managing one’s own responses implies that conditions need not change. Applied to an underpaid worker or a person facing discrimination, such a philosophy becomes a doctrine of adjustment. Marx’s charge that religion consoles rather than frees has the same structure.",
      "The Stoic reply is that its distinction is between what is and is not within one’s control. Injustice within one’s control is exactly what one is obliged to act against. The test is whether a practice keeps that distinction."
     ],
     "Is the practice helping a person act, or persuading them to accept injustice? Check whether it preserves the duty to change what can be changed."
    ]
   ],
   "topics": [
    [
     "2026A2",
     [
      "A grateful mind is beautiful in a precise sense. Gratitude changes what a person notices. Marcus Aurelius began the Meditations by listing what he had received from others, and the list oriented his mind towards what he had rather than what he lacked. A person who begins with debts sees the world as a set of gifts, and responds with humility, generosity and trust.",
      "Gratitude also shapes relationships and communities. A grateful person acknowledges the work of others, including the unseen work of families, teachers and workers. Guru Nanak joined remembrance with honest labour and sharing, turning gratitude into generosity. Research on gratitude practices shows modest but real benefits to well-being.",
      "Gratitude must not become a demand that people be thankful for injustice. Telling an exploited worker to be grateful for a job is not moral guidance but a way of silencing complaint. The beautiful grateful mind recognises what it has received and still sees what should change. Gratitude that leads to generosity and action is beautiful. Gratitude used to excuse injustice is not."
     ]
    ],
    [
     "2020A2",
     [
      "A mindful manifesto is a commitment to attend deliberately to one’s own mind: to notice thoughts, feelings and reactions rather than being driven by them. The Buddha taught mindfulness as the practice that interrupts the movement from sensation to craving to distress. Epictetus taught that people are disturbed not by events but by their opinions about events. Both locate tranquillity in the relation between the mind and what happens, not in the events themselves.",
      "The need for such a practice is sharper today. The attention economy is designed to capture and fragment attention. Constant notifications and comparison produce restlessness even amid comfort. A mindful commitment helps a person decide where attention goes, rather than letting it be sold. Yoga and meditation, promoted through public health policy, can support this practice.",
      "Mindfulness is a catalyst, not a complete solution. The research on corporate wellness shows that individual practices do not fix burnout caused by workload and insecurity. A tranquil self must also be willing to change what can be changed, including unjust working conditions. Gibran reminds us that tranquillity does not mean the end of feeling. The mindful self feels fully but is not ruled by its feelings, and acts where action is due."
     ]
    ]
   ],
   "intro": [
    "People often believe that peace of mind depends on circumstances: a better job, a quieter home, fewer problems. Yet two people in the same circumstances can feel very differently. One is grateful and calm, the other restless and resentful. The question is how much of tranquillity lies in the mind’s own habits, such as attention and gratitude, and how much depends on conditions that should be changed."
   ],
   "claim": "Gratitude and attention shape the inner economy: they decide what a person counts as income and what as loss. A grateful mind notices what it has received, and a mindful mind interrupts the reaction that turns sensation into distress. Gratitude and attention make tranquillity possible in conditions that cannot be changed. But they must not become a way of accepting conditions that should be changed. Inner calm and outer action belong together.",
   "problem": [
    "Modern life is designed to capture attention. Notifications, advertising and endless feeds compete for every spare moment, and much of the design works against the user’s own intentions. Comparison with others is constant. Under such pressure, people feel restless even when their material conditions improve.",
    "Practices such as gratitude and mindfulness offer a response. Yet they can also be misused. Employers may offer mindfulness training instead of reducing workloads, and a philosophy of inner calm can be used to tell people to accept injustice. The question is how to cultivate an inner economy of attention and gratitude without turning it into a doctrine of adjustment."
   ],
   "distinction": [
    "A useful distinction",
    "Equanimity is not numbness. A tranquil person still feels joy and sorrow but is not ruled by them. Accepting what cannot be changed is wisdom. Accepting what can and should be changed is resignation."
   ],
   "thinkersTitle": "Five thinkers, five tests of the inner life",
   "together": [
    "Putting the five together",
    "Marcus Aurelius shows gratitude as a way of orienting attention. Epictetus shows that disturbance lies in our opinions. The Buddha supplies mindfulness as the technique. Guru Nanak joins remembrance to work and sharing. Gibran shows that tranquillity does not mean the end of feeling. Together they describe an inner economy that circumstances do not control."
   ],
   "examplesIntro": "The examples below show the external pressures on attention, the evidence for inner practices, and the danger of using them to avoid change. They are most useful when the answer separates individual practice from structural causes.",
   "models": [
    [
     "Gratitude orients attention.",
     "Marcus Aurelius began the Meditations with a list of debts. A mind that begins with what it has received notices differently from one that begins with what it lacks."
    ],
    [
     "Disturbance lies in judgment.",
     "Epictetus taught that people are disturbed not by things but by their opinions about things. Since opinions are within our control, calm is possible even in difficult conditions."
    ],
    [
     "Mindfulness interrupts reaction.",
     "The Buddha taught mindfulness as attention that stops the movement from sensation to craving to distress. Tranquillity comes from seeing a reaction before it takes control."
    ],
    [
     "Individual practice cannot fix structural causes.",
     "A study of 46,336 workers found no benefit from individual well-being programmes. Burnout caused by workload and insecurity needs changes in work, not only in workers."
    ],
    [
     "Equanimity is not resignation.",
     "Tranquillity means not being ruled by feelings, not accepting injustice. The Stoic distinction between what is and is not in our control obliges action on what can be changed."
    ]
   ],
   "steps": [
    [
     "Define the inner economy.",
     "Explain how attention and gratitude decide what a person counts as gain or loss."
    ],
    [
     "Use classical thinkers.",
     "Bring in Marcus Aurelius, Epictetus and the Buddha."
    ],
    [
     "Give an Indian perspective.",
     "Use Guru Nanak’s joining of remembrance, work and sharing."
    ],
    [
     "Examine modern pressures.",
     "Discuss the attention economy and constant comparison."
    ],
    [
     "Use evidence carefully.",
     "Cite modest, supported findings on gratitude and yoga."
    ],
    [
     "State the objection.",
     "Address the risk of accepting conditions that should be changed."
    ],
    [
     "Conclude with inner calm and outer action.",
     "Argue that tranquillity should support, not replace, efforts to change what is unjust."
    ]
   ],
   "stepsIntro": "Use the following sequence when a question concerns gratitude, mindfulness or tranquillity.",
   "formula": "Cultivate gratitude and attention so that circumstances do not rule the mind. Keep the distinction between what can and cannot be changed, and let inner calm support action against what should be changed."
  },
  {
   "thinkers": [
    [
     "Gandhi",
     "the talisman and sarvodaya",
     [
      "Gandhi’s talisman is the most usable ethical instrument in Indian public life. When in doubt, recall the face of the poorest and weakest person you have seen, and ask whether the step you are considering will be of any use to them. The talisman turns an abstract obligation into a test a person can apply.",
      "His idea of sarvodaya, the welfare of all, rejected the utilitarian settlement in which a majority’s gain permits a minority’s loss. Placing the last person first is not charity but the criterion for deciding whether a policy has worked."
     ],
     "the answer needs an Indian decision rule centred on the poorest."
    ],
    [
     "Vivekananda",
     "service as worship",
     [
      "Vivekananda gave the same commitment a religious form. He spoke of daridra narayana, the poor as God, and insisted that service to a living human being is worship rather than a substitute for it.",
      "His rebuke to a religion that offers philosophy to a hungry person remains the sharpest statement of misplaced priority. For Vivekananda, spiritual life that ignores suffering has missed its purpose."
     ],
     "the question links spirituality, service and social responsibility."
    ],
    [
     "Mother Teresa",
     "the poverty of being unwanted",
     [
      "Mother Teresa narrows the frame to the individual encounter. She argued that the loneliness of being unwanted is a more serious poverty than hunger, and that the work is done one person at a time.",
      "Her view corrects a politics that can discuss the poor endlessly without meeting one. Humaneness begins with presence."
     ],
     "the answer needs to show the importance of personal care and presence."
    ],
    [
     "Gilligan",
     "the ethic of care",
     [
      "Carol Gilligan supplies the theoretical vocabulary. Her ethic of care holds that moral maturity can consist in attending to relationship, need and context, rather than applying a rule more consistently.",
      "Becoming humane, on this account, is not an improvement in feeling. Becoming humane is a change in what a person is able to notice. For this reason the journey takes a lifetime and is never completed by good intentions alone."
     ],
     "the question concerns moral development, care work or attention to context."
    ],
    [
     "Deendayal Upadhyaya",
     "the last person in the queue",
     [
      "Deendayal Upadhyaya put the same test into the language of governance through the idea of antyodaya, the rise of the last person. He argued that a system should be judged by the condition of the last person in the queue rather than by its average performance.",
      "The criterion can be translated into budget lines and delivery data, which compassion alone cannot. Antyodaya turns care into a measurable standard for policy."
     ],
     "the answer needs a governance criterion for inclusive development."
    ]
   ],
   "examples": [
    [
     "Ayushman Bharat and the last mile",
     [
      "Ayushman Bharat PM-JAY, launched in September 2018, offers hospital cover of five lakh rupees a year per family. After the expansion of 2024, the scheme covers about 12 crore families, and in October 2024 it was extended to everyone aged seventy and above regardless of income.",
      "The design follows antyodaya: judge the scheme by its effect on the last person. The failures also lie at the last mile. Empanelled hospitals are concentrated in districts that already had them, some package rates are below what private hospitals accept, and eligible people often do not know they are eligible. Entitlement is created centrally and delivered locally, and the local half is where it breaks."
     ],
     "Does the scheme reach the last person? Look at delivery, awareness and hospital coverage, not only the entitlement."
    ],
    [
     "Unpaid care work",
     [
      "India’s Time Use Survey makes visible what GDP omits. In 2019, women spent an average of 299 minutes a day on unpaid domestic work, against 97 minutes for men. Women spent 134 minutes a day on caregiving, against 76 for men. The 2024 round shows the gap persisting.",
      "Two consequences follow. Care is a precondition for all counted labour, since nobody goes to work from a household that nobody maintains. Because care is unmeasured, it is also unfunded, unpensioned and absent from calculations of who contributed what."
     ],
     "Is care counted and supported? Show how unpaid care sustains the economy while remaining invisible."
    ],
    [
     "Kerala’s community palliative care",
     [
      "Palliative care shows what a health system thinks medicine is for, because the patient will not recover. Kerala built the Neighbourhood Network in Palliative Care around trained community volunteers linked to primary health centres and nursing support. Care reaches the home rather than requiring the household to reach a hospital.",
      "In 2008, Kerala became the first Indian state to adopt a palliative care policy and bring it into the public health system. The lesson is that the scarce resource was never only medical expertise. The scarce resource was presence, and presence can be organised."
     ],
     "Can compassion be organised at scale? Show how community systems turn care into a reliable service."
    ],
    [
     "Rights or compassion?",
     [
      "The counter-argument is strong. Compassion is unreliable in ways an entitlement is not. Compassion responds to proximity and vividness, so it favours the visible case over the greater need. Compassion fluctuates with the giver’s mood and creates no obligation a person can enforce.",
      "Ambedkar’s refusal to accept relief as a substitute for rights states the same objection politically. The reconciliation is that rights decide what a person may demand, while disposition decides what they meet at the counter. A system staffed by people who resent claimants will deliver less than the entitlement promises."
     ],
     "What does compassion add to rights, and what do rights add to compassion? Show why each needs the other."
    ],
    [
     "Compassion fatigue among frontline workers",
     [
      "Compassion fatigue is a predictable condition of certain work, not a personal failing. Compassion fatigue appears wherever people absorb distress repeatedly: nurses, palliative staff, child protection officers, disaster responders and helpline workers.",
      "Empathy has a cost. Where the caseload is unlimited, the cost accumulates until the worker withdraws emotionally in order to keep functioning, and the public reads the withdrawal as callousness. The protective factors are structural: limited caseloads, real supervision, teamwork and permission to rotate out. An institution that relies on compassion without renewing it is consuming a resource it has not planned to replace."
     ],
     "Can institutions sustain the compassion they depend on? Look at caseloads, supervision and support for workers."
    ]
   ],
   "topics": [
    [
     "2020A1",
     [
      "Every person is born human. Becoming humane takes a lifetime. The journey is one of learning to notice others: their needs, their suffering and their dignity. Gilligan describes moral maturity as growing attention to relationship and context. Gandhi’s talisman asks a person to recall the poorest face they have seen before deciding. Vivekananda saw service to the poor as worship. Each marks a step from living for oneself to living with and for others.",
      "The journey is never finished by good intentions. Compassion must become reliable, and that requires knowledge and systems. Ayushman Bharat shows how an entitlement can reach millions, and its last-mile failures show where care still breaks. Kerala’s palliative care network shows that presence can be organised. The unpaid care recorded by the Time Use Survey shows how much humane work remains invisible.",
      "Being humane also requires sustaining the people who care. Frontline workers suffer compassion fatigue when institutions rely on their empathy without support. A humane society does not leave compassion to chance. A humane society builds rights that do not depend on kindness, trains people to notice, and supports those who serve. The long journey from human being to being humane is personal and collective at once."
     ]
    ],
    [
     "2018A2",
     [
      "Love without knowledge can do harm. A person who wants to help but does not understand the problem may give the wrong help, create dependence or respond only to the visible case. Knowledge without love can be cold. An expert who understands a problem perfectly may design a system that treats people as numbers. A good life joins both: the desire to help and the understanding needed to help well.",
      "Indian thought offers examples of this union. Gandhi’s talisman begins with love for the poorest, and it becomes a practical test for policy. Deendayal Upadhyaya’s antyodaya turns care into a standard that budgets and delivery data can measure. Kerala’s palliative care network combines community compassion with medical training.",
      "The balance must be maintained. Love inspires, but it needs knowledge to guide it towards the greatest need and the most effective means. Knowledge guides, but it needs love to keep its purpose human. Rights and systems protect people from the unreliability of kindness, and compassionate people make systems humane in practice. A good life is one in which love supplies the purpose and knowledge supplies the means."
     ]
    ]
   ],
   "intro": [
    "Being human is a biological fact. Being humane is a moral achievement. A person may live a long life without learning to notice the suffering of others, while another spends a lifetime learning to respond to it. The question is how compassion is developed, how it becomes reliable enough to guide public life, and how it relates to rights, systems and knowledge."
   ],
   "claim": "Becoming humane is a lifelong journey of learning to notice and respond to others, especially the weakest. Compassion is essential, but it is not enough on its own, because it is uneven and cannot be enforced. A good life joins love with knowledge: the desire to help with the understanding needed to help well. In public life, compassion must be built into rights and systems, and systems need people who care.",
   "problem": [
    "Compassion is valued in every tradition, yet it fails in predictable ways. Compassion responds to what is near and vivid, not to what is greatest. Compassion fluctuates with mood and circumstance. Compassion leaves the receiver dependent on the continued kindness of the giver. Public welfare built on charity alone is unreliable and can humiliate those it helps.",
    "Systems and rights address these weaknesses, but they fail differently. An entitlement written in law can still be denied at a counter by an official who resents claimants. A health scheme can exist on paper and fail at the last mile. Frontline workers who care can burn out. The challenge is to join compassion and knowledge, disposition and design, so that care reaches the last person reliably."
   ],
   "distinction": [
    "A useful distinction",
    "Rights decide what a person may demand. Disposition decides what they actually meet at the counter. A humane society needs both: entitlements that do not depend on kindness, and people who deliver them with care."
   ],
   "thinkersTitle": "Five thinkers, five tests of humaneness",
   "together": [
    "Putting the five together",
    "Gandhi gives a test centred on the poorest. Vivekananda makes service a form of worship. Mother Teresa shows the importance of presence. Gilligan explains humaneness as a change in what one notices. Deendayal Upadhyaya turns the idea into a governance criterion. Together they show that becoming humane joins feeling, attention and systems."
   ],
   "examplesIntro": "The examples below show compassion built into policy, care that remains invisible, and the limits of compassion without systems. They are most useful when the answer asks whether care reaches the last person.",
   "models": [
    [
     "The poorest are the test.",
     "Gandhi’s talisman asks whether a step will help the poorest person one has seen. Antyodaya makes the last person in the queue the criterion for judging a system."
    ],
    [
     "Service is worship.",
     "Vivekananda saw the poor as divine and service as worship. A spiritual life that offers philosophy to the hungry has missed its purpose."
    ],
    [
     "Humaneness is a change in attention.",
     "Gilligan’s ethic of care holds that moral maturity lies in noticing relationships, needs and context. Becoming humane changes what a person can see."
    ],
    [
     "Rights and compassion need each other.",
     "Compassion is uneven and unenforceable, so people need rights. Rights are delivered by people, so systems need compassionate staff."
    ],
    [
     "Institutions must sustain carers.",
     "Compassion fatigue among nurses and frontline workers is predictable. Limited caseloads, supervision and rotation protect the empathy public services depend on."
    ]
   ],
   "steps": [
    [
     "Define being humane.",
     "Distinguish biological humanity from the moral capacity to notice and respond to others."
    ],
    [
     "Bring in Indian thinkers.",
     "Use Gandhi, Vivekananda or Deendayal Upadhyaya."
    ],
    [
     "Explain care as attention.",
     "Use Gilligan and Mother Teresa."
    ],
    [
     "Show the limits of compassion alone.",
     "Discuss unreliability and the need for rights."
    ],
    [
     "Give policy examples.",
     "Use Ayushman Bharat, palliative care or the Time Use Survey."
    ],
    [
     "Consider those who care.",
     "Discuss compassion fatigue and institutional support."
    ],
    [
     "Conclude with love and knowledge.",
     "Argue that compassion needs understanding and systems to be reliable."
    ]
   ],
   "stepsIntro": "Use the following sequence when a question concerns compassion, service or the good life.",
   "formula": "Become humane by learning to notice the weakest and to respond with care. Join love with knowledge, build rights that do not depend on kindness, support those who serve, and judge every system by the condition of the last person."
  }
 ]
};
