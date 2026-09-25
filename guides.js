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
 ]
};
