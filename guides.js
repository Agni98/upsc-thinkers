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
   "formula": "Become humane by learning to notice the weakest and to respond with care. Join love with knowledge, build rights that do not depend on kindness, support those who serve, and judge every system by the condition of the last person."
  }
 ],
 "Culture, Memory and the Making of Meaning": [
  {
   "thinkers": [
    [
     "Tagore",
     "keeping imagination larger than politics",
     [
      "Tagore is the strongest Indian evidence for the claim. He wrote the national anthems of two countries, India and Bangladesh. He returned his knighthood in 1919 in a letter that shaped how the Jallianwala Bagh massacre was understood. He argued publicly with Gandhi about the moral character of a mass movement. He held no institutional authority for any of this.",
      "His argument was that the artist’s function is to keep a society’s imagination larger than its politics. A people who cannot imagine an arrangement other than the present one will never demand one."
     ],
     "the answer needs an Indian example of art shaping national life and conscience."
    ],
    [
     "Tolstoy",
     "art as the transmission of feeling",
     [
      "Tolstoy supplied the theory in What Is Art?, published in 1897. He held that art is the transmission of feeling from one person to another, and that its value lies in the sincerity and reach of the transmission rather than in refinement.",
      "On this account the artist legislates by deciding what a society is able to feel about a fact it already knows. A change in feeling usually comes before any change in law."
     ],
     "the question asks how art influences society or what makes art valuable."
    ],
    [
     "Plato",
     "the opposing witness",
     [
      "Plato is the necessary opposing witness, and the argument is stronger for taking him seriously. In the Republic he proposed excluding poets from his ideal city, precisely because he agreed that they shape the soul.",
      "Plato thought such power was too dangerous to leave unsupervised. The disagreement between Plato and Tolstoy concerns the value of the influence, not whether it exists. Both agree that poets legislate."
     ],
     "the answer needs to present the case for regulating art, or the danger of its influence."
    ],
    [
     "Gibran",
     "the extraordinary in the ordinary",
     [
      "Kahlil Gibran completes the picture from the maker’s side. He insisted that the poet finds the extraordinary already present in ordinary things rather than inventing it.",
      "Creativity springs from looking for the magical in the mundane, because the mundane is where a society stores its assumptions. Noticing those assumptions is the first legislative act of an artist."
     ],
     "the question concerns creativity, inspiration or seeing the familiar freshly."
    ],
    [
     "Aurobindo",
     "consciousness before institutions",
     [
      "Sri Aurobindo’s life is a sharp Indian illustration. He moved from revolutionary politics into poetry and philosophy, settling in Pondicherry in 1910.",
      "His view was that a people’s consciousness must change before its institutions can, and that the work of changing consciousness is not done in legislatures. Whether his turn was wisdom or retreat is a genuine question, and an essay is stronger for asking it."
     ],
     "the answer needs to discuss the relation between inner change and political change."
    ]
   ],
   "examples": [
    [
     "Art that changed feeling before the law",
     [
      "The claim that art legislates is best tested where public feeling shifted before any law did. Charles Dickens on debtors’ prisons and Upton Sinclair on meatpacking are standard Western examples. In India, Premchand wrote about rural indebtedness, and Mahasweta Devi wrote about bonded labour and dispossession. Hindi and regional cinema put caste and dowry before audiences who could otherwise avoid them.",
      "The causal claim must be made carefully. Art rarely produces a statute directly. Art changes the emotional cost of continuing to do nothing, and legislation tends to follow that change rather than lead it."
     ],
     "Did the art change the law, or the feeling that made the law possible? Trace the sequence from sentiment to policy."
    ],
    [
     "Film certification and the state’s judgment",
     [
      "India certifies films before release under the Cinematograph Act of 1952. The Central Board of Film Certification is therefore a licensing body, not only a rating body. In K. A. Abbas v Union of India in 1970, the Supreme Court upheld pre-censorship of films. The Court reasoned that cinema’s immediacy and reach justified treating films differently from print.",
      "The reasoning rests on a claim about the power of the medium that predates television and the internet. The Shyam Benegal committee recommended in 2016 that the Board move towards certification and away from ordering changes. The unresolved question is why a democracy that permits a book to be published permits a film only after alteration."
     ],
     "Should the state decide what art may transmit? Compare the treatment of different media and the reasons given."
    ],
    [
     "Art organised for politics: PWA and IPTA",
     [
      "The Progressive Writers’ Association, formed in 1936, and the Indian People’s Theatre Association, formed in 1943 during the Bengal famine, placed literature and performance in the service of a political programme. The two movements produced durable work.",
      "The movements also show a standing difficulty. Art committed in advance to a conclusion tends to become illustration. Members argued among themselves about whether art should be a weapon, or whether a work that stops being honest stops being persuasive. Art influences politics most when it remains answerable first to its own truthfulness."
     ],
     "When does committed art become propaganda? Ask whether the work stays honest when honesty is inconvenient to its cause."
    ],
    [
     "Public funding and independence",
     [
      "India funds culture through bodies created in the early 1950s. The Sangeet Natak Akademi, established in 1953, is the model: an autonomous academy funded by the state and governed by practitioners. The design solves a real problem, because art forms with small audiences and long training cannot survive on ticket sales, and their loss would be irreversible.",
      "The design creates its own problem. Autonomy on paper can coexist with dependence in fact when appointments and budgets run through government. The question is not whether the state should fund art. The question is what insulates the judgment of merit from the funder."
     ],
     "Can art be publicly funded and still independent? Look at who appoints and who decides what deserves support."
    ],
    [
     "The objection: influence without accountability",
     [
      "A legislator can be voted out, an official is bound by service rules, and a judge writes reasons that can be appealed. An artist with a large audience faces none of these checks and may shape public sentiment more than any of them.",
      "The reply is not that artists are secretly accountable. The objection proves too much, since it applies equally to columnists, preachers and teachers. The relevant distinction is between power that compels and power that persuades. An artist cannot make anyone do anything, and the remedy for unwelcome persuasion has always been counter-persuasion."
     ],
     "Is the artist’s influence a threat to democracy? Separate persuasion from compulsion."
    ]
   ],
   "topics": [
    [
     "2022A2",
     [
      "Shelley’s claim is that poets shape the laws of the world without holding office. Laws follow what a society can feel and imagine, and poets, novelists and filmmakers shape both. Tolstoy described art as the transmission of feeling, and a change in feeling usually comes before a change in law. Tagore wrote the anthems of two nations and returned his knighthood after Jallianwala Bagh, shaping how a massacre was understood.",
      "Indian literature offers many examples. Premchand made rural indebtedness visible to readers who did not live it, and Mahasweta Devi did the same for bonded labour. Cinema brought caste and dowry into public discussion. In each case, art raised the emotional cost of doing nothing, and reform became easier. Plato feared this power so much that he would have excluded poets from his republic.",
      "The influence is unacknowledged because it cannot be measured or voted on. Governments sometimes try to control it through censorship, as the pre-certification of films shows. Yet art persuades rather than compels, and a democracy should answer art with argument rather than licensing. The poet’s legislation is real, but it works only through the free consent of those who are moved."
     ]
    ],
    [
     "2023A4",
     [
      "Creativity is often imagined as a flash from nowhere. More often it begins with attention to the ordinary. Gibran held that the poet finds the extraordinary already present in ordinary things. A familiar object, a daily routine or a common phrase can reveal something new when looked at freshly. The mundane is where a society stores its assumptions, and noticing them is the first step to questioning them.",
      "Tagore found poetry in village life and seasons. Premchand found drama in the debts of a farmer. Designers find better solutions in the small frustrations of daily use. The effort matters: seeing the magical in the mundane requires patience, attention and the willingness to look again at what everyone else has stopped noticing.",
      "The claim has a social dimension too. Art that reveals the hidden meaning of ordinary life can change how a society sees itself. Aurobindo believed that consciousness must change before institutions, and looking freshly at the ordinary is one way consciousness changes. Inspiration is not waiting for the extraordinary. Inspiration is the effort to see the ordinary clearly enough to find what was always there."
     ]
    ]
   ],
   "intro": [
    "Laws are made in parliaments, but the feelings that make laws possible are often shaped elsewhere. A poem, a novel or a film can change how a society feels about a fact it already knows. Artists hold no office and command no army, yet their work can shift what people are able to imagine and to demand. The question is how art exercises this quiet authority, and whether an influence without accountability should worry a democracy."
   ],
   "claim": "Artists legislate by shaping what a society can feel and imagine. Their work usually comes before any change in law, because it changes the emotional cost of doing nothing. Creativity begins by noticing what is taken for granted in ordinary life, where a society stores its assumptions. The power is real, which is why Plato feared it. Yet the power works through persuasion, not compulsion, and the right answer to art one dislikes is more art, not a licence.",
   "problem": [
    "Art is often treated as decoration, separate from the serious business of law and policy. Budgets for culture are the first to be cut, and artists are praised in speeches but seldom consulted. The view misses how public feeling changes. Social reform has repeatedly followed a change in sentiment that writers, singers and filmmakers helped to create.",
    "Yet the power of art raises hard questions. Art can inflame as well as enlighten. Governments may try to control art through censorship or funding, and artists may place their work in the service of a political programme until it becomes propaganda. The challenge is to recognise art’s influence, protect its independence and accept that influence without office must be answered by argument rather than by control."
   ],
   "distinction": [
    "A useful distinction",
    "Power that compels, like a law or an order, must be accountable to voters and courts. Power that persuades, like art or argument, cannot force anyone to act. The remedy for persuasion one dislikes is counter-persuasion, not licensing."
   ],
   "thinkersTitle": "Five thinkers, five tests of the artist’s authority",
   "together": [
    "Putting the five together",
    "Tagore shows the artist keeping imagination larger than politics. Tolstoy explains how art transmits feeling. Plato agrees that art shapes the soul and warns of its danger. Gibran locates creativity in the ordinary. Aurobindo argues that consciousness changes before institutions. Together they explain why poets legislate without being acknowledged."
   ],
   "models": [
    [
     "Art changes feeling before law.",
     "Tolstoy described art as the transmission of feeling. Reforms on indebtedness, bonded labour, caste and dowry followed changes in public feeling that writers and filmmakers helped to create."
    ],
    [
     "The artist keeps imagination larger than politics.",
     "Tagore argued that a people who cannot imagine another arrangement will never demand one. The artist’s function is to widen what a society can imagine."
    ],
    [
     "Plato agreed that poets legislate.",
     "Plato wanted to exclude poets from his republic because they shape the soul. The debate is about the value of art’s influence, not its existence."
    ],
    [
     "Creativity begins in the ordinary.",
     "Gibran held that the poet finds the extraordinary in ordinary things. The mundane stores a society’s assumptions, and noticing them is the first creative act."
    ],
    [
     "Persuasion should be answered by persuasion.",
     "Artists cannot compel anyone. Pre-censorship treats persuasion as if it were compulsion. The democratic remedy for unwelcome art is counter-argument, not licensing."
    ]
   ],
   "steps": [
    [
     "Define the artist’s authority.",
     "Explain how art shapes feeling and imagination rather than law directly."
    ],
    [
     "Give Indian examples.",
     "Use Tagore, Premchand, Mahasweta Devi or cinema."
    ],
    [
     "Present the opposing view.",
     "Use Plato’s argument for regulating poets."
    ],
    [
     "Discuss creativity.",
     "Use Gibran on finding the extraordinary in the ordinary."
    ],
    [
     "Examine state control.",
     "Discuss film certification and public funding."
    ],
    [
     "Address accountability.",
     "Distinguish persuasion from compulsion."
    ],
    [
     "Conclude with freedom and responsibility.",
     "Argue for independent art answerable to its own truthfulness."
    ]
   ],
   "formula": "Recognise that artists shape what a society can feel and imagine, often before law follows. Protect art’s independence, answer unwelcome art with argument rather than control, and expect art to stay answerable to its own truthfulness."
  },
  {
   "thinkers": [
    [
     "Gandhi",
     "true civilisation as conduct",
     [
      "Gandhi gave the sharpest statement of the distinction in Hind Swaraj, written in 1909 as an attack. Civilisation, he argued, had come to mean the multiplication of wants and the machinery for satisfying them. What he called true civilisation was a mode of conduct that shows a person the path of duty.",
      "The provocation was deliberate. Gandhi argued that a nation could acquire every instrument of modern life and become less itself in the process. An independence that merely transferred the machinery would not be independence at all."
     ],
     "the answer needs a critique of material progress without moral progress."
    ],
    [
     "Tagore",
     "a culture alive through absorption",
     [
      "Tagore gave a more generous version. He refused to treat inheritance as something to be preserved intact. Culture, for him, was alive to the degree that it could absorb what it met, argue with it and be changed by it.",
      "A tradition kept behind glass has already stopped being a tradition. Tagore’s Visva-Bharati was designed as a meeting place of cultures, not a fortress for one."
     ],
     "the question concerns cultural exchange, openness or globalisation."
    ],
    [
     "Nehru",
     "the palimpsest",
     [
      "Nehru supplied the historical form with his image of India as a palimpsest, in which layer is written upon layer and none wholly erases what came before.",
      "His insistence on scientific temper was an argument that a culture can adopt an instrument without surrendering an identity. For Nehru, modern science and an ancient civilisation were not enemies."
     ],
     "the answer needs to show how a culture can modernise while keeping continuity."
    ],
    [
     "Burke",
     "the wisdom held in manners",
     [
      "Edmund Burke provides the conservative caution that deserves engaging rather than dismissing. Institutions and manners contain accumulated practical wisdom that no individual reasoner could reconstruct from scratch.",
      "Dismantling them faster than they can be replaced destroys knowledge that nobody knew was being held. Burke’s caution applies to rapid cultural change as much as to political revolution."
     ],
     "the question concerns the risks of rapid change or the value of tradition."
    ],
    [
     "Kabir",
     "arguing from within",
     [
      "Kabir stands against any account that treats culture as a possession to be guarded. He worked from inside both Hindu and Islamic vocabularies while refusing to belong wholly to either.",
      "He showed that a culture can be argued with from within, and that the arguing is not a threat to the inheritance. The arguing is evidence that the inheritance is still alive."
     ],
     "the answer needs an example of syncretism or of critique from within a tradition."
    ]
   ],
   "examples": [
    [
     "Heritage listing and what gets chosen",
     [
      "Heritage listing is an act of selection, and selection carries politics. UNESCO’s intangible heritage list includes Indian entries such as the Kumbh Mela, inscribed in 2017, Durga Puja in Kolkata in 2021 and the Garba of Gujarat in 2023. Each inscription brings visibility, funding and tourism.",
      "Each inscription also fixes a living practice in an official description at a particular moment. Listing tends to favour practices that are already visible and organised, which can widen the gap between traditions with advocates and those without. A practice that survives by changing can be pressed to perform an approved version of itself for visitors."
     ],
     "Does listing protect a living practice or freeze it? Ask who chooses what is listed and what the listing changes."
    ],
    [
     "Globalisation and regional traditions",
     [
      "The homogenisation thesis holds that global supply chains and media make tastes converge, so regional food, dress and craft give way to a standard set. What has actually happened is more varied. Convergence is strongest where an item is a commodity competing on price, which is why handloom and small craft have suffered against mill production.",
      "Convergence is weakest where an item carries identity, which is why regional cuisine has spread rather than shrunk. The threat to a tradition is not exposure but commodification. Practices that survive are those that people continue to do, not only to buy."
     ],
     "Is globalisation erasing culture or changing its form? Separate commodities from practices that carry identity."
    ],
    [
     "Language counts in the 2011 Census",
     [
      "The 2011 Census recorded 19,569 raw returns of mother tongues. Rationalisation reduced them to 1,369 mother tongues. Only those with at least ten thousand speakers were reported as languages, giving 121 languages, of which 22 are in the Eighth Schedule. About 96.7 per cent of the population reports one of the 22 as its mother tongue.",
      "The counting method is itself an argument. A language spoken by fewer than ten thousand people does not appear as a language at all. Since schooling, examinations and official use follow the scheduled list, the classification does not merely record the hierarchy of languages. The classification reinforces it."
     ],
     "How does official classification affect cultural survival? Look at which languages are counted, taught and used."
    ],
    [
     "Culture as inheritance or practice",
     [
      "Every living tradition has absorbed, adapted and discarded continuously. Indian classical music absorbed Persian forms. The architecture of any long-standing temple shows successive periods. Food regarded as most authentically regional often contains crops that arrived through trade, such as the chilli.",
      "An argument that treats culture as a fixed inheritance must explain why the moment of authenticity is the one it happens to prefer. Culture defended as inheritance is threatened by change. Culture lived as practice is threatened mainly by being forbidden."
     ],
     "Which moment of a tradition is treated as authentic, and why? Show that living cultures have always changed."
    ],
    [
     "Diaspora culture",
     [
      "A diaspora separates two things normally joined: the culture people carry and the society that produced and continuously revised it. What travels is a snapshot, and it is preserved with more care than at home, because it is under pressure.",
      "Diaspora communities therefore often keep older forms, more elaborate rituals and more conservative language than the place they left. Neither version is more authentic. The home version has continuity and drift. The diaspora version has fidelity to a moment but has lost the process that would revise it. Culture is not a possession that can be carried intact. Culture is a process that needs a living society to run it."
     ],
     "Can culture be carried without the society that produced it? Compare the home and diaspora versions of a tradition."
    ]
   ],
   "topics": [
    [
     "2020B1",
     [
      "The saying separates two things often confused. Civilisation, in this sense, is what a society has: its roads, machines, institutions and goods. Culture is what a society is: its values, habits, relationships and ways of meaning. Possessions can be acquired within a generation and lost within one. Culture changes more slowly, and it decides what a people does with its possessions.",
      "Gandhi’s Hind Swaraj made the point as a warning. A nation could acquire every modern instrument and become less itself. True civilisation, for Gandhi, was conduct that shows the path of duty. Tagore added that a living culture absorbs what it meets rather than guarding itself behind glass. Nehru’s image of India as a palimpsest shows how new layers are written without erasing the old, and Kabir shows how a tradition stays alive by arguing with itself.",
      "The distinction must not be pushed too far. Culture is shaped by what a society has: technology changes work, family and language. The 2011 Census shows how official choices about languages affect which cultures survive. Burke warns that rapid change can destroy wisdom held in manners. The balanced conclusion is that a society should adopt useful instruments while keeping its culture alive through practice, not by freezing it as a possession."
     ]
    ]
   ],
   "intro": [
    "A society can change its possessions within a generation. Cars, phones, buildings and machines arrive quickly and spread fast. What changes more slowly is what people value, how they treat one another and what they are able to do with what they have. The question is how to distinguish culture from civilisation, and what a society keeps when its possessions change."
   ],
   "claim": "Culture is the way a people lives, thinks and relates. Civilisation, in the sense of the saying, is the stock of instruments and possessions it has acquired. Possessions can be gained or lost in a generation. Culture changes more slowly and decides what a society does with its possessions. A living culture is not a museum piece: it absorbs, argues and adapts, and it survives by being practised rather than guarded.",
   "problem": [
    "Rapid economic change raises fears of cultural loss. Global brands, languages and media seem to replace local ones. Some respond by treating culture as an inheritance to be defended against change. Others dismiss culture as irrelevant to modern progress. Both responses misunderstand how culture actually lives.",
    "The distinction also raises a question about modernity. A nation can acquire every modern instrument and still lose its ability to use them well. Gandhi feared exactly such an outcome. Yet a culture that refuses all new instruments may lose the means to meet its people’s needs. The challenge is to adopt what is useful without surrendering the values and capacities that make a society itself."
   ],
   "distinction": [
    "A useful distinction",
    "Culture as inheritance is a fixed body of practices to be defended against change. Culture as practice is what people actually do now, absorbing and adapting continuously. Every living tradition has behaved like the second while often describing itself as the first."
   ],
   "thinkersTitle": "Five thinkers, five tests of culture",
   "together": [
    "Putting the five together",
    "Gandhi separates civilisation as machinery from civilisation as conduct. Tagore shows that a living culture absorbs what it meets. Nehru describes culture as layered continuity. Burke warns that tradition holds wisdom nobody can easily rebuild. Kabir shows that argument from within keeps a culture alive. Together they explain why culture is what we are, and why it is not a possession."
   ],
   "models": [
    [
     "Civilisation is possession, culture is practice.",
     "Possessions can be gained or lost in a generation. Culture is what a people is able to do with them, and it changes more slowly."
    ],
    [
     "True civilisation is conduct.",
     "Gandhi defined true civilisation as conduct that shows the path of duty. A nation can acquire modern instruments and still lose itself if its conduct does not improve."
    ],
    [
     "Living cultures absorb and adapt.",
     "Tagore held that culture is alive to the degree that it can absorb, argue and change. A tradition kept behind glass has stopped being a tradition."
    ],
    [
     "Tradition holds hidden wisdom.",
     "Burke warned that manners and institutions contain practical knowledge nobody can rebuild quickly. Rapid change can destroy what nobody knew was being held."
    ],
    [
     "Classification shapes survival.",
     "The 2011 Census counted only languages with at least ten thousand speakers. Official lists decide which languages are taught and used, and so which cultures survive."
    ]
   ],
   "steps": [
    [
     "Define both terms.",
     "Separate culture as a way of life from civilisation as possessions and instruments."
    ],
    [
     "Present Gandhi’s critique.",
     "Use Hind Swaraj on material progress without moral progress."
    ],
    [
     "Show culture as living practice.",
     "Use Tagore, Nehru’s palimpsest or Kabir."
    ],
    [
     "Acknowledge the value of tradition.",
     "Use Burke’s caution about hidden wisdom."
    ],
    [
     "Give examples.",
     "Discuss heritage listing, globalisation, languages or diaspora."
    ],
    [
     "Address authenticity.",
     "Show that living cultures have always changed."
    ],
    [
     "Conclude with balance.",
     "Argue for adopting useful instruments while keeping culture alive through practice."
    ]
   ],
   "formula": "Treat culture as what a people is and does, not as a possession to be guarded. Adopt useful instruments, keep traditions alive by practising and arguing with them, and protect the wisdom that change can destroy."
  },
  {
   "thinkers": [
    [
     "Marx",
     "the borrowed costume",
     [
      "Marx’s line about history repeating first as tragedy and then as farce, from The Eighteenth Brumaire of 1852, is quoted constantly and completed rarely. His actual argument was that people make their own history, but not under circumstances of their own choosing. In moments of crisis they borrow the costumes and slogans of the past to perform a revolution that is really about something else.",
      "The farce lies in the borrowing, not in the events. A present that cannot describe itself in its own words reaches for an older script, and the mismatch produces the comedy."
     ],
     "the answer needs to explain why history appears to repeat, or why political movements borrow old symbols."
    ],
    [
     "Hegel",
     "understanding comes late",
     [
      "Hegel supplies a structure that makes repetition intelligible. History, for him, is a process in which contradiction drives development forward, and understanding arrives only afterwards.",
      "The owl of Minerva flies at dusk. Lessons are always drawn late, and patterns are invisible to people living inside them."
     ],
     "the question concerns historical development or why lessons are learned only after the fact."
    ],
    [
     "Burke",
     "a partnership across generations",
     [
      "Burke explains why the past binds us even when it is not understood. Society, he wrote, is a partnership between the living, the dead and those not yet born.",
      "An inheritance is therefore held in trust rather than owned outright. The present generation has duties to those who came before and those who will come after."
     ],
     "the answer needs a view of history as inheritance and trust."
    ],
    [
     "Orwell",
     "control of the past",
     [
      "George Orwell stated the danger in its most compressed form in Nineteen Eighty-Four. Whoever controls the past controls the future, and whoever controls the present controls the past.",
      "His deeper insight is that manipulation works mostly through what is quietly removed rather than through what is loudly asserted. A deletion leaves no argument to answer."
     ],
     "the question concerns propaganda, censorship of history or the politics of memory."
    ],
    [
     "Azad",
     "the composite past as fact",
     [
      "Maulana Abul Kalam Azad showed what is at stake in India. In his Congress presidential address at Ramgarh in 1940, he insisted that India’s composite past was a historical fact rather than a sentiment.",
      "The past is a permanent dimension of consciousness because a contested version of it supplies the material for present claims. Azad defended the shared past as the ground of a shared future."
     ],
     "the answer needs an Indian example of history used to support pluralism."
    ],
    [
     "Nehru",
     "the past examined in prison",
     [
      "Nehru’s The Discovery of India shows what an honest version looks like. He wrote it in Ahmednagar Fort prison between 1942 and 1945, treating the past as something to be examined and argued with rather than venerated.",
      "The book is useful because it names what was ugly alongside what was admirable. A past that only ever produces pride has stopped being history and become an instrument."
     ],
     "the question needs a model of honest, critical engagement with national history."
    ]
   ],
   "examples": [
    [
     "Textbook revision and who may narrate",
     [
      "Textbook revision is unavoidable, because scholarship advances and syllabi have limited pages. Every deletion is both a teaching decision and a political one. What separates legitimate revision from imposition is procedure rather than content.",
      "Was the change made by subject experts through a documented process, or by administrative direction? Was the deletion published with reasons, or made quietly between editions? A curriculum revised openly by historians who disagree in public is doing what a discipline does. A curriculum revised without a visible record is asserting a narrative, and the missing record is itself the evidence."
     ],
     "Is the past being revised by an open process or by quiet deletion? Look at who decided and whether reasons were published."
    ],
    [
     "Monuments and renaming",
     [
      "Monuments are not history. Monuments record a society’s decisions about whom to honour, made at a particular time. Taking down a statue does not erase a historical figure, who remains in archives and textbooks, but it does withdraw honour.",
      "The strongest counter-position is that a landscape edited to contain only the acceptable teaches nothing about what a society once believed. An honest inscription beside a monument may preserve more than removal. Renaming raises the same question more cheaply, because a name change is highly visible, costs little and can substitute for the material redress it appears to symbolise."
     ],
     "Does removing or renaming change understanding or only honour? Compare removal with recontextualisation and redress."
    ],
    [
     "Archives and access to the record",
     [
      "A society cannot examine what it cannot see. India’s Public Records Act of 1993 governs the transfer of records to the National Archives, ordinarily after twenty-five years, subject to exemptions applied by departments themselves.",
      "The incentive to transfer is weak and the penalty for not transferring is negligible. Declassification happens episodically and by political decision rather than by rule. Where the record is unavailable, the field is left to memory and assertion, which is exactly the condition in which contested history becomes impossible to resolve."
     ],
     "Is the record available to historians and citizens? Look at archival rules and how they are applied."
    ],
    [
     "Truth and reconciliation",
     [
      "South Africa’s Truth and Reconciliation Commission, established in 1995 and chaired by Archbishop Desmond Tutu, made an explicit trade. Perpetrators could apply for amnesty, but only in exchange for full disclosure of politically motivated acts.",
      "The design assumed that a society emerging from conflict needs the facts established more than it needs punishment. The criticisms are serious. Victims were asked to accept truth in place of justice, reparations were slow and small, and economic inequality was left untouched. The alternative of amnesty without truth, which many transitions chose, provides neither."
     ],
     "Can a society establish truth without full justice? Weigh disclosure, amnesty and reparation."
    ],
    [
     "When a society cannot set its history down",
     [
      "The familiar warning is that a society that forgets its past will repeat it. The counter-argument inverts the warning. A society that cannot conclude an account of what happened remains inside it. Grievance that has never been acknowledged stays available for mobilisation, because nothing has been settled.",
      "The argument supports commissions, official histories and open archives as means of closure. The danger is real too. A settled official account can also be a silencing. Closure imposed by the stronger party is not closure but a second injury. Setting the record down and dictating it are different acts."
     ],
     "Does the society need to remember more or to settle more? Separate honest closure from imposed silence."
    ]
   ],
   "topics": [
    [
     "2021B3",
     [
      "Marx’s remark, in The Eighteenth Brumaire of 1852, described Louis Napoleon’s seizure of power as a repetition of his uncle’s. The first Napoleon was a tragedy of genuine historical force. The nephew’s coup borrowed its costumes and became a farce. Marx’s deeper point was that people make history under circumstances not of their choosing, and in moments of crisis they borrow the language and symbols of the past.",
      "The pattern can be seen whenever a political movement dresses present conflicts in old costumes. Past glories and past grievances are revived to justify present claims, often with little fit between the old script and the new situation. Orwell warned that whoever controls the past controls the future, and textbook revisions, monuments and renaming show how actively the past is used. Hegel adds that the pattern is visible only afterwards, which is why lessons come late.",
      "History does not literally repeat. Circumstances change, and the same actions produce different results. What repeats is the temptation to borrow the past rather than understand the present. Nehru’s Discovery of India shows the alternative: examining the past honestly, including its failures, so that the present can describe itself in its own terms. A society that understands its history is less likely to perform it again as farce."
     ]
    ],
    [
     "2018B2",
     [
      "The past is a permanent dimension of consciousness because no person or society can think without it. Language, values, institutions and identities are inherited. Burke described society as a partnership between the living, the dead and those not yet born, so the present always acts within a trust received from the past. Even rebellion against tradition takes its meaning from what it rejects.",
      "The past also shapes values through memory. Azad defended India’s composite past as a historical fact, and that memory supported a pluralist nation. Other memories of conquest or injustice can support grievance. The struggle over textbooks, monuments and archives shows that control of the past is a form of power, as Orwell warned. Truth and reconciliation commissions show societies trying to settle a painful past through disclosure.",
      "The permanence of the past is not a sentence to be ruled by it. Nehru examined India’s past critically, naming what was ugly and admirable. Hegel suggested that understanding comes late but does come. The past remains in consciousness, but a society can choose whether to hold it as honest inquiry or as a weapon. Values grounded in an honestly examined past can guide the future. Values built on a selected past can only divide it."
     ]
    ]
   ],
   "intro": [
    "Every society lives with its past. The past supplies identity, pride and grievance, and it is constantly retold to justify present claims. Some societies repeat old mistakes. Others use history to build unity or division. The question is how history repeats, how the past shapes consciousness and values, and how a society can hold its history honestly."
   ],
   "claim": "The past is a permanent dimension of human consciousness because present claims are built from it. History does not repeat mechanically, but societies in crisis borrow the scripts of the past, sometimes tragically and sometimes absurdly. An honest relation to the past examines it rather than venerating it, names what was ugly as well as what was admirable, keeps the record open, and seeks closure without silencing.",
   "problem": [
    "The past is contested because it confers legitimacy. Groups seek recognition for past wrongs, nations build pride on past glory, and political movements borrow symbols from earlier struggles. Control over history, through textbooks, monuments and archives, becomes control over identity and power.",
    "Yet forgetting the past is no solution. A society that cannot acknowledge its history may repeat it, and grievances left unaddressed remain available for mobilisation. A society that cannot set its history down may also be imprisoned by it. The challenge is to keep the past as an object of honest inquiry, open to evidence and argument, rather than a weapon in present conflicts."
   ],
   "distinction": [
    "A useful distinction",
    "History examined is a record open to evidence and argument, including what is uncomfortable. History used is a selection of the past arranged to justify a present claim. The first can correct a society. The second can only confirm it."
   ],
   "thinkersTitle": "Six thinkers, six tests of memory",
   "together": [
    "Putting the six together",
    "Marx explains repetition as the borrowing of old scripts. Hegel shows that understanding comes late. Burke describes the past as a trust across generations. Orwell warns that control of the past is control of the future. Azad defends a shared past, and Nehru models honest examination. Together they show how to hold the past without being ruled by it."
   ],
   "models": [
    [
     "Repetition comes from borrowed scripts.",
     "Marx argued that people in crisis borrow the costumes and slogans of the past. The farce lies in the mismatch between the old script and the new situation."
    ],
    [
     "The past is held in trust.",
     "Burke described society as a partnership between the living, the dead and the unborn. The present inherits obligations as well as possessions."
    ],
    [
     "Control of the past is power.",
     "Orwell warned that whoever controls the present controls the past. Manipulation works mostly through quiet deletion, which leaves nothing to argue with."
    ],
    [
     "Honest history names the ugly.",
     "Nehru’s Discovery of India examined the past rather than venerating it. A past that only produces pride has become an instrument."
    ],
    [
     "Closure needs truth, not silence.",
     "South Africa’s Truth and Reconciliation Commission traded amnesty for disclosure. A settled record can end a conflict, but closure imposed by the stronger party is a second injury."
    ]
   ],
   "steps": [
    [
     "Explain how the past shapes the present.",
     "Use Burke or Hegel."
    ],
    [
     "Explain repetition.",
     "Use Marx on borrowed scripts."
    ],
    [
     "Show the politics of memory.",
     "Use Orwell with examples of textbooks, monuments or archives."
    ],
    [
     "Give an Indian perspective.",
     "Use Azad on the composite past or Nehru on critical history."
    ],
    [
     "Discuss closure.",
     "Use the Truth and Reconciliation Commission and its limits."
    ],
    [
     "Separate examination from use.",
     "Distinguish honest inquiry from selective memory."
    ],
    [
     "Conclude with responsibility.",
     "Argue for open archives, honest teaching and closure without silencing."
    ]
   ],
   "formula": "Hold the past as a record to be examined, not a script to be borrowed. Keep the archive open, name what was ugly with what was admirable, and seek closure through truth rather than silence."
  },
  {
   "thinkers": [
    [
     "Socrates",
     "irony as method",
     [
      "Socrates made irony a method rather than a mannerism. He professed ignorance while questioning people who claimed knowledge, and used the gap between what he said and what he meant to expose confusion.",
      "The technique works because a contradiction stated directly is resisted, while a contradiction the listener discovers is accepted. Ambiguity is often the only vehicle by which an uncomfortable meaning can travel."
     ],
     "the answer needs to show irony as a tool of teaching or discovery."
    ],
    [
     "Laozi",
     "paradox as philosophy",
     [
      "Laozi built a philosophy on paradox. He opened by saying that the Tao which can be named is not the eternal Tao. He wrote of the soft overcoming the hard and the sage acting without acting.",
      "The paradoxes carry weight. Laozi’s position is that language works by division while reality does not, so any statement precise enough to be useful has already left something out."
     ],
     "the question concerns the limits of language or the truth in contradiction."
    ],
    [
     "Kabir",
     "upside-down sayings",
     [
      "Kabir worked the same seam in Indian devotional verse. His ulatbamsi, or upside-down sayings, use impossible images to shake listeners out of their settled categories.",
      "Kabir’s paradoxes are designed to dislodge certainty. A listener who cannot fit the saying into familiar categories is forced to think again."
     ],
     "the answer needs an Indian example of paradox used to challenge fixed belief."
    ],
    [
     "Camus",
     "holding the absurd",
     [
      "Albert Camus gave the modern and hardest version. The absurd is not a property of the universe. The absurd is the collision between a human demand for meaning and a universe that returns none.",
      "His instruction is to hold the contradiction rather than resolve it through faith or despair. Living with an unresolved tension is, for Camus, a form of honesty."
     ],
     "the question concerns living with contradiction or finding meaning without certainty."
    ],
    [
     "Nietzsche",
     "suspicion with a purpose",
     [
      "Nietzsche added the warning that stops the argument becoming a licence. He objected that philosophers mistook their own grammar for the structure of the world, and he wrote in aphorisms to resist that temptation.",
      "He was clear, however, that suspicion of language is a tool for getting closer to something. Suspicion is not permission to say nothing and call it depth."
     ],
     "the answer needs to warn against using ambiguity as an escape from meaning."
    ]
   ],
   "examples": [
    [
     "Constructive ambiguity in diplomacy",
     [
      "Diplomacy sometimes needs a text both sides can sign because it does not resolve their disagreement. United Nations Security Council Resolution 242 of 1967 is the standard example. Its English text refers to withdrawal from “territories” rather than from “the territories”, and each side has relied on its preferred reading.",
      "Constructive ambiguity is a real technique, not a drafting failure. Ambiguity buys a ceasefire or a framework that precision would have prevented. The cost is deferred, not avoided. The disagreement remains, and each party believes it secured its reading."
     ],
     "Does the ambiguity make agreement possible or only postpone conflict? Weigh present agreement against future dispute."
    ],
    [
     "Legal drafting where ambiguity is a defect",
     [
      "Legal drafting reverses the diplomatic case. A statute or contract is written so that a stranger, years later, can determine what was meant without asking anyone. Ambiguity in law transfers the decision to whoever interprets it, usually a court or an official.",
      "Vagueness in a penal provision or licensing condition therefore works as a delegation of power. For this reason vagueness is treated as a constitutional problem, not only a matter of style. A rule a citizen cannot apply to their own conduct in advance is not working as a rule."
     ],
     "Who decides what an ambiguous rule means? Show how vagueness transfers power to the interpreter."
    ],
    [
     "Satire as political speech",
     [
      "Satire is politically distinctive because it withdraws dignity rather than making a claim that can be rebutted, which is why the powerful find it hard to answer. In India, satire is also legally exposed. Provisions on hurting religious feelings, obscenity and public mischief are broadly drawn, and complaints can be filed in many places.",
      "The process of defending against complaints is itself a punishment, whatever the final result. Where a comedian faces travel, bail and years of hearings, the chilling effect comes from procedure rather than conviction. A conviction rate near zero is therefore no evidence that speech is free."
     ],
     "Is satire free if its process punishes? Look at procedure as well as verdicts."
    ],
    [
     "Translation and what is lost",
     [
      "Translation between Indian languages and English tests the claim that language shapes thought. Kinship terms in many Indian languages encode relation, side and seniority that English collapses into “cousin” or “uncle”. Honorific pronouns mark relative status in every sentence, and English cannot carry that without adding words.",
      "Terms such as dharma, maya and jugaad are usually left untranslated because every English candidate brings the wrong frame. The consequence for public life is concrete. Law, administration and higher education conducted in English require many citizens to argue in a register that is not fully theirs."
     ],
     "What meaning is lost between languages, and who bears the loss? Consider the citizen who must use a second language in public life."
    ],
    [
     "Euphemism as evasion",
     [
      "Ambiguity is not always richness. George Orwell argued in 1946 that political language exists largely to make the indefensible sound acceptable, and that corruption runs from the phrase back into the thought.",
      "The modern examples are easy to collect: “collateral damage” for civilians killed, “enhanced interrogation” for torture, “rightsizing” for dismissal, “encounter” for a killing without trial. Each substitutes an abstract noun for a concrete act, and removes the person to whom the act was done. Literary ambiguity opens a text to more meaning. Euphemism closes it, because the plain statement would be resisted."
     ],
     "Does the phrase reveal or hide the act? Translate the euphemism into plain words and compare."
    ]
   ],
   "topics": [
    [
     "2026A1",
     [
      "An oxymoron joins two words that seem to contradict each other: bitter sweetness, a living death or a wise fool. The figure is not a failure of expression. Life often contains both terms at once. A farewell can be happy and sad, success can feel empty, and freedom can be frightening. Laozi’s paradoxes, such as the soft overcoming the hard, and Kabir’s upside-down sayings show that contradiction can describe reality more accurately than plain statement.",
      "The ironies of life appear where intentions and results diverge. Socrates used irony to reveal the gap between claimed and real knowledge. Camus described the absurd as the collision between human demand for meaning and a silent universe. Oxymorons capture such situations in a compressed form, holding both sides without choosing one.",
      "Contradictions should still be used honestly. Nietzsche warned that suspicion of language must aim at truth, not escape it. Euphemisms like “collateral damage” also combine words oddly, but they hide rather than reveal. The oxymoron that reflects life brings a hidden tension into view. The phrase that conceals makes a harsh act disappear. Oxymorons reflect the ironies of life when they help us see more of the truth, not less."
     ]
    ],
    [
     "2022B3",
     [
      "A smile is the most ambiguous of human expressions. The same smile can express joy, politeness, embarrassment, contempt, sorrow or courage. A smile can welcome or dismiss, comfort or wound. A smile says a great deal while committing to nothing, which is why it is the chosen vehicle for all ambiguities.",
      "The ambiguity has uses. Socrates’ irony, often delivered with a smile, exposed confusion without direct attack. A smile can ease tension in diplomacy, soften a refusal or hide pain to protect others. Like constructive ambiguity in a treaty, a smile can keep a relationship going when plain words would break it.",
      "The ambiguity also has costs. A smile can hide contempt, mask cruelty or conceal suffering that needs help. Satire uses the smile to withdraw dignity from the powerful. Frontline workers smile through exhaustion, and societies may read their smiles as contentment. The ethical task is to read smiles carefully and to recognise when a smile carries meaning that words cannot, and when it covers something that should be said plainly."
     ]
    ]
   ],
   "intro": [
    "Language usually aims at clarity. Yet some of the most truthful statements are paradoxes, ironies or contradictions: bitter sweetness, a deafening silence, a wise fool. A smile can mean welcome, embarrassment, contempt or grief. The question is why contradiction and ambiguity are sometimes the most accurate way to describe life, and when ambiguity becomes evasion."
   ],
   "claim": "Life often contains both terms of a contradiction at once, and oxymorons and ironies report that truth accurately. Ambiguity can carry meanings that a plain statement would provoke resistance to, and it can hold situations that do not resolve. But ambiguity has two directions. Literary ambiguity opens meaning, while euphemism closes it to hide an act. Precision is a duty where others must act on the words.",
   "problem": [
    "Clear language is essential in law, science and administration. A rule that nobody can understand gives power to whoever interprets it. Yet much of human experience resists clear statement. Love can hurt, success can feel empty, and a victory can be a loss. Insisting on plain statements alone may falsify experience.",
    "Ambiguity can also be abused. Governments and organisations use euphemisms to make harmful acts sound acceptable. Diplomats use deliberate vagueness to secure agreement, postponing conflict rather than resolving it. The challenge is to know when ambiguity conveys truth and when it conceals it, and when precision is required."
   ],
   "distinction": [
    "A useful distinction",
    "Ambiguity that opens meaning allows a text or a gesture to carry more than a plain statement could. Ambiguity that closes meaning, like euphemism, replaces a concrete act with an abstraction so that the act cannot be seen. The test is whether the plain statement would reveal more or less."
   ],
   "thinkersTitle": "Five thinkers, five tests of paradox",
   "together": [
    "Putting the five together",
    "Socrates uses irony to reveal what direct statement cannot. Laozi and Kabir use paradox to break settled categories. Camus asks us to hold contradiction rather than resolve it falsely. Nietzsche warns that suspicion of language must still aim at truth. Together they explain why oxymorons reflect life, and why ambiguity must be used honestly."
   ],
   "models": [
    [
     "Contradiction can be accurate.",
     "Oxymorons reflect life because many situations genuinely contain both terms. Laozi’s paradoxes and Kabir’s upside-down sayings describe reality more accurately than plain statement."
    ],
    [
     "Irony lets uncomfortable meaning travel.",
     "Socrates used irony to expose confusion that could not be shown directly. A contradiction the listener discovers is accepted where a direct one would be resisted."
    ],
    [
     "Ambiguity can defer conflict.",
     "Resolution 242 of 1967 was signed because its wording allowed different readings. Constructive ambiguity buys agreement now against a dispute later."
    ],
    [
     "Precision is a duty in law.",
     "A vague rule transfers power to whoever interprets it. A rule a citizen cannot apply to their own conduct in advance is not working as a rule."
    ],
    [
     "Euphemism closes meaning.",
     "Orwell showed how political language makes the indefensible sound acceptable. Phrases like “collateral damage” remove the person to whom the act was done."
    ]
   ],
   "steps": [
    [
     "Define the figure.",
     "Explain oxymoron, irony or ambiguity with a simple example."
    ],
    [
     "Show why contradiction can be true.",
     "Use Laozi, Kabir or Camus."
    ],
    [
     "Show irony as method.",
     "Use Socrates."
    ],
    [
     "Discuss uses of ambiguity.",
     "Use diplomacy and everyday gestures such as the smile."
    ],
    [
     "Mark where ambiguity fails.",
     "Use legal drafting and the duty of precision."
    ],
    [
     "Expose evasion.",
     "Use Orwell and modern euphemisms."
    ],
    [
     "Conclude with the test of direction.",
     "Argue that ambiguity is honest when it opens meaning and dishonest when it hides an act."
    ]
   ],
   "formula": "Accept contradiction where life truly contains both terms, and use ambiguity when it opens meaning. Demand precision where others must act on the words, and translate every euphemism back into the plain act it hides."
  },
  {
   "thinkers": [
    [
     "Hegel",
     "the real is rational",
     [
      "Hegel’s proposition that the real is rational and the rational is real is often misread. He was not saying that whatever exists is justified.",
      "His claim was that reality has a rational structure that unfolds through contradiction and its resolution. What genuinely is, as opposed to what merely persists for a while, is intelligible. What is genuinely rational has the power to make itself actual. The doctrine is an argument for reading history as a process with a logic rather than as a series of accidents."
     ],
     "the answer needs to interpret the relation between reason and reality, or the logic of historical change."
    ],
    [
     "Kant",
     "the mind shapes experience",
     [
      "Kant supplied the correction that stops Hegel’s view from becoming naive. We never meet things as they are in themselves. The mind imposes space, time and causality on whatever it receives.",
      "Experience is therefore produced jointly by the world and by the mind receiving it. For the same reason, your perception of another person tells us something about you, because the categories you bring to the encounter are yours."
     ],
     "the question concerns how the mind shapes perception, or the limits of knowledge."
    ],
    [
     "Shankara",
     "superimposition",
     [
      "Shankara pushed the same insight further. In Advaita Vedanta, the world as ordinarily experienced is real in practice but not ultimately real.",
      "Adhyasa, or superimposition, is the process by which we mistake our own construction for the thing itself, as a rope seen in dim light is mistaken for a snake. Clear knowledge removes the superimposition."
     ],
     "the answer needs an Indian philosophical account of perception and illusion."
    ],
    [
     "Sartre",
     "the look",
     [
      "Jean-Paul Sartre closed the loop on the side of human relations with what he called the look. In being seen by another person, you become an object in someone else’s world and discover a self you did not author.",
      "My reaction to you therefore reveals me to myself. No perception happens without a perceiver, and the perceiver is always disclosed as well."
     ],
     "the question concerns how others’ perceptions shape self-understanding."
    ],
    [
     "Plato",
     "the cave",
     [
      "Plato’s cave holds the whole argument together. The prisoners are not deceived by anyone. They see accurately, and what they see is shadows. Their error is structural, not moral.",
      "The alternative to a distorted perception is not an undistorted one. The alternative is knowing that you stand somewhere, and being willing to move towards a clearer view."
     ],
     "the answer needs an image of the difference between appearance and reality, or of learning to see better."
    ]
   ],
   "examples": [
    [
     "Attribution and bias",
     [
      "The most usable finding in the psychology of perception is the fundamental attribution error. People explain others’ behaviour by character and their own by circumstance. The same lateness is his carelessness and my traffic. Confirmation bias filters new evidence towards what is already believed.",
      "Public argument is largely conducted through attributions. Whether poverty is explained by effort or by structure, whether a riot is explained by character or provocation, and whether an official failure is explained by corruption or capacity are the same question. The evidence rarely settles which explanation people reach for first."
     ],
     "Is the judgment about the other person or about the observer? Check whether the same standard is applied to oneself."
    ],
    [
     "Media framing",
     [
      "Framing is not falsehood, which is why it is harder to argue against. Every account must choose where an event begins, whose experience anchors it and which word names the actors. A report that opens with a retaliation and one that opens with the provocation can both be accurate and produce opposite judgments.",
      "The same is true of the choice between “protest” and “unrest”, or between “welfare” and “subsidy”. Checking a story for accuracy is therefore not enough. The question that reveals the frame is what a fair account would have included that this one left out."
     ],
     "What does the frame include and leave out? Ask what a fair account would have had to contain."
    ],
    [
     "Standpoint and objectivity",
     [
      "Standpoint arguments are easy to state badly and worth stating well. The defensible version is about evidence. Someone who experiences a system from below has access to information about how it works that is unavailable from above. Excluding such people produces worse knowledge, not merely less inclusive knowledge.",
      "The strong version, that a claim’s truth depends on who makes it, defeats itself. The strong version would apply to itself and leaves no way to decide between two standpoints that disagree. Standpoint governs access to evidence, but it does not decide truth."
     ],
     "Whose experience is missing from the evidence? Include excluded standpoints without making truth depend on identity."
    ],
    [
     "Eyewitness testimony",
     [
      "Eyewitness identification shows that perception rebuilds rather than records. Of the DNA exonerations recorded by the Innocence Project in the United States, around sixty-nine per cent involved eyewitness misidentification, the largest single cause of those wrongful convictions.",
      "Elizabeth Loftus showed the mechanism experimentally. Memory is rebuilt at each recall and absorbs information met after the event, so the wording of a question can change what is sincerely remembered. Confidence and accuracy are only weakly related after identification procedures, so the signal a jury trusts most may carry the least information."
     ],
     "How reliable is sincere perception? Separate a witness’s confidence from the accuracy of the memory."
    ],
    [
     "Scientific realism",
     [
      "The counter-argument stops the theme from becoming the claim that reality is whatever we take it to be. The strongest version is the no-miracles argument: the predictive success of mature science would be an extraordinary coincidence if its theories did not track something real.",
      "General relativity predicted the bending of starlight, confirmed in 1919. A vaccine designed on a model of a virus works in bodies that know nothing of the model. Frameworks shape which questions are asked, but the world keeps the power to refuse an answer. Perception is constructed. What perception is constructed about is not."
     ],
     "Does the world constrain our constructions? Use the success of science to show that reality pushes back."
    ]
   ],
   "topics": [
    [
     "2021A2",
     [
      "When I perceive you, I bring my own categories, fears and expectations. What I notice, and how I judge it, says as much about me as about you. Kant showed that the mind shapes all experience, and psychology confirms it: people explain others’ faults by character and their own by circumstance. My perception of you is therefore partly a reflection of me.",
      "The second half of the statement turns inward. My reaction to you reveals me to myself. Sartre described how being seen by another makes us aware of a self we did not author. Anger, envy or admiration in response to another person shows what I value and fear. Each encounter is a mirror in which I can learn about my own character.",
      "The insight has limits. Perception is not only projection. Other people have real qualities, and some perceptions are more accurate than others. The eyewitness research shows that sincere perception can be wrong, but careful procedures can improve it. The wise response is humility: to recognise that my view of others is shaped by my standpoint, and to use my reactions as a way of knowing myself, while still seeking the truth about others."
     ]
    ],
    [
     "2021A4",
     [
      "Hegel’s statement is often misread as saying that whatever exists is justified. Hegel meant something different. Reality has a rational structure that unfolds through contradiction and its resolution. What genuinely is can be understood by reason, and what is genuinely rational has the power to become actual. History, on this view, is not a sequence of accidents but a process with a logic.",
      "The first half, that the real is rational, expresses confidence that reality can be known. Science supports that confidence. The predictive success of theories such as general relativity would be a miracle if the world had no rational structure. The second half, that the rational is real, suggests that rational ideas tend to realise themselves. Ideas such as equality and human rights, once reasoned out, have gradually reshaped institutions.",
      "The statement needs qualification. Kant warned that we know reality only through the forms of our own mind. Plato’s cave shows how people can take shadows for reality. Many irrational practices persist for long periods, and not every rational idea is realised. The statement is best read as a direction rather than a guarantee: reason can understand reality and can help to change it, but only through continued inquiry and effort."
     ]
    ]
   ],
   "intro": [
    "We usually assume that we see the world as it is. Yet two people can look at the same event and see different things, and each reveals as much about themselves as about the event. Philosophers have long asked how much of what we perceive comes from the world and how much from the mind. The question is how perception relates to reality, what our judgments of others reveal about us, and whether reality has a rational structure we can know."
   ],
   "claim": "Perception is shaped by the perceiver. The categories, expectations and experiences we bring to an encounter decide what we notice, so our perception of others reveals us as well as them. Yet perception is constructed about something real. The success of science shows that the world can refuse an answer whatever our framework. The wise response is not to seek a view from nowhere, but to know where we stand and to be willing to move.",
   "problem": [
    "Much public conflict is conducted through perception. People explain their own failures by circumstance and others’ by character. Media reports frame the same event differently. Witnesses sincerely remember what did not happen. When each side is certain that it sees clearly, disagreement becomes hostility.",
    "The opposite error is to conclude that nothing is real and every view is equally valid. Relativism of this kind removes the possibility of argument and makes truth depend on power. The challenge is to accept that perception is shaped by standpoint while holding that some accounts fit the evidence better than others, and that reality has a structure which reason can gradually understand."
   ],
   "distinction": [
    "A useful distinction",
    "Standpoint governs access to evidence: someone below a system sees things that someone above it cannot. Standpoint does not decide whether a claim is true. Keeping the two apart preserves both the insight and the possibility of argument."
   ],
   "thinkersTitle": "Five thinkers, five tests of perception",
   "together": [
    "Putting the five together",
    "Hegel argues that reality has a rational structure. Kant shows that the mind shapes experience. Shankara explains how we mistake our constructions for reality. Sartre shows how others’ perceptions reveal us to ourselves. Plato’s cave shows the path from shadows to clearer sight. Together they explain why perception reflects the perceiver while reason still seeks what is real."
   ],
   "models": [
    [
     "Perception reveals the perceiver.",
     "Kant showed that the mind imposes its own forms on experience. What we notice in another person reflects our own categories, fears and expectations."
    ],
    [
     "We judge others and ourselves differently.",
     "The fundamental attribution error explains others’ behaviour by character and our own by circumstance. Public arguments about poverty, riots and failure often follow the same bias."
    ],
    [
     "Sincere memory can be wrong.",
     "Around sixty-nine per cent of DNA exonerations recorded by the Innocence Project involved eyewitness misidentification. Confidence is not accuracy."
    ],
    [
     "Standpoint governs access, not truth.",
     "People who experience a system from below see evidence that others cannot. Including their view improves knowledge, but truth still depends on evidence."
    ],
    [
     "Reality pushes back.",
     "The success of science would be a miracle if theories did not track something real. Perception is constructed, but what it is constructed about is not."
    ]
   ],
   "steps": [
    [
     "Explain how perception is shaped.",
     "Use Kant, Shankara or the psychology of bias."
    ],
    [
     "Show what perception reveals about the perceiver.",
     "Use Sartre and the attribution error."
    ],
    [
     "Give examples.",
     "Use media framing, eyewitness testimony or standpoint."
    ],
    [
     "Interpret Hegel correctly.",
     "Explain that “the real is rational” does not mean that whatever exists is justified."
    ],
    [
     "State the realist counter-argument.",
     "Use the success of science."
    ],
    [
     "Use Plato’s cave.",
     "Show that the goal is to move towards clearer sight."
    ],
    [
     "Conclude with humility and inquiry.",
     "Argue for knowing one’s standpoint while seeking truth."
    ]
   ],
   "formula": "Accept that perception reflects the perceiver, and use your reactions to know yourself. Keep reality in view, test perceptions against evidence, and move from shadows towards clearer sight."
  }
 ],
 "Justice, Equality and the Excluded": [
  {
   "thinkers": [
    [
     "Rawls",
     "justice in the basic structure",
     [
      "John Rawls gives the structural argument. He held that justice is the first virtue of social institutions. Principles chosen behind a veil of ignorance would allow inequality only where it benefits the least advantaged. Rawls called this the difference principle.",
      "The principle concerns the basic structure of society, not individual generosity. A society whose institutions distribute fairly produces fewer people who need rescuing. Charity, however admirable, arrives after the distribution has already failed, and it leaves the arrangement that caused the failure untouched."
     ],
     "the answer needs to show why institutions, not individual generosity, decide how much charity a society needs."
    ],
    [
     "Ambedkar",
     "rights, not relief",
     [
      "Ambedkar made the same point with a sharper Indian edge. He refused to accept relief as a substitute for rights. A benefit that depends on the goodwill of the giver leaves the recipient in the same subordination that produced their condition.",
      "Constitutional guarantees, reservation and legal remedies were instruments of dignity for Ambedkar because they do not require anyone to be kind. A right can be claimed. A favour can only be requested."
     ],
     "the question concerns dignity, entitlement or the difference between welfare and rights."
    ],
    [
     "Nozick",
     "the entitlement objection",
     [
      "Robert Nozick supplies the objection that must be answered. His entitlement theory holds that a distribution is just if it arose from just acquisition and voluntary transfer. Redistribution is then a violation, whatever pattern it produces.",
      "The reply is that original acquisitions in India were rarely just. Land, schooling and entry into occupations were denied to many by caste and custom. Nozick’s own principle of rectification, which requires past injustice to be corrected, concedes the point."
     ],
     "the answer needs to present and answer the libertarian case against redistribution."
    ],
    [
     "Gandhi",
     "trusteeship",
     [
      "Gandhi’s idea of trusteeship attempts a middle path. The wealthy would hold their property on behalf of society and use it for the common good.",
      "The idea deserves an honest place, along with its weakness. Trusteeship depends on the conscience of the person holding the property. Dependence on conscience is exactly what Ambedkar objected to, because it leaves the poor waiting on the virtue of the rich."
     ],
     "the question needs an Indian middle path between charity and redistribution, and its limits."
    ]
   ],
   "examples": [
    [
     "CSR under Section 135",
     [
      "Section 135 of the Companies Act 2013 requires companies above certain limits of net worth, turnover or profit to spend at least two per cent of their average net profits of the previous three years on corporate social responsibility. India was the first country to make such spending a legal requirement.",
      "According to the National CSR Portal, 27,188 companies spent about 34,909 crore rupees on CSR in 2023-24, up from about 10,066 crore in 2014-15. Education, health and rural development receive most of it. A mandated two per cent is effectively a tax collected and spent by the payer. Calling it generosity misdescribes it, since the company’s choice is over where to spend, not whether to give."
     ],
     "Is mandated giving charity or a tax? Ask who decides the use of the money and who can hold them to account."
    ],
    [
     "Rights-based welfare laws",
     [
      "Three statutes changed the language of Indian welfare by turning schemes into claims. MGNREGA, passed in 2005, guarantees a hundred days of wage work a year to a rural household that asks for it, with an unemployment allowance if work is not provided. The National Food Security Act of 2013 makes subsidised grain a legal entitlement for about two-thirds of the population. The Right to Education Act of 2009 gives children aged six to fourteen a right to free schooling.",
      "The change matters because of what it does to the relationship. A beneficiary must be grateful. A rights-holder can complain, go to court and vote on non-delivery."
     ],
     "Does the law create a claim or a hope? Look for enforceable entitlements and remedies for non-delivery."
    ],
    [
     "Direct benefit transfer",
     [
      "Direct benefit transfer moves money into an account rather than delivering goods through an office. The aim is to remove intermediaries who could divert, delay or demand a share. Cash also lets a person buy what they judge they need, which treats them as a chooser rather than a case.",
      "Two qualifications apply. Cash assumes a working market nearby, so it helps less where the problem is lack of supply. Delivery is only as reliable as the authentication system, and the Jharkhand evidence of exclusion shows where it can fail. Transfer changes who decides how to spend. Transfer does not by itself change who is entitled."
     ],
     "Does the method of delivery increase dignity and reliability? Check both the choice it gives and the exclusion it risks."
    ],
    [
     "Philanthropy in health and education",
     [
      "Private foundations bring money, tolerance of risk and freedom from election cycles. Foundations can fund what a government cannot easily justify: an unproven method, a small population or a long horizon.",
      "Foundations also decide alone. A foundation chooses its problem, its region and its measure, and no affected person can vote it out or appeal its withdrawal. Funding clusters where results are easy to show, which is rarely where need is greatest. A service sustained by a grant can end when priorities change, having relieved the state of pressure to build the same capacity."
     ],
     "Does philanthropy fill a gap or replace an obligation? Ask what happens when the funding ends."
    ],
    [
     "The strengths of charity",
     [
      "The counter-argument has real force. A rights framework is slow by design, because entitlement requires eligibility rules, verification and audit. Charity can act on the morning of a flood without asking whether the recipient qualifies.",
      "Community kitchens during the 2020 lockdown reached people faster than any scheme, because they asked for nothing. Religious and voluntary networks serve people with no documents or address, who have no legal claim on anything. Charity’s advantages are speed, reach and freedom from categories. All three are strengths in an emergency and weaknesses as a permanent arrangement."
     ],
     "Where does charity do what rights cannot? Separate emergency relief from permanent dependence."
    ]
   ],
   "topics": [
    [
     "2023B3",
     [
      "Charity responds to need after it has arisen. Justice asks why the need arose. Rawls held that justice is the first virtue of social institutions, and a society whose institutions distribute land, education and work fairly produces fewer people who need rescue. The need for charity is therefore largely an output of the system, not a fact of nature. The more just the structure, the less charity is required.",
      "Ambedkar explained why charity cannot replace justice. A benefit that depends on the giver’s goodwill leaves the recipient subordinate. MGNREGA, the Food Security Act and the Right to Education Act turned help into rights that can be claimed and enforced. Even corporate giving, made compulsory under Section 135, shows the state moving from voluntary generosity towards obligation.",
      "Charity still has a role. Community kitchens during the 2020 lockdown and relief after floods show that charity can act faster than any entitlement, and reach people without documents. The balanced conclusion is that charity is valuable in emergencies and in the gaps a system cannot yet reach. A society that relies on charity permanently, however, has chosen generosity over justice, and keeps its poor waiting on the kindness of others."
     ]
    ],
    [
     "2018A3",
     [
      "Poverty is not contained within the lives of the poor. Poverty spreads through institutions everyone shares: public health, labour markets, schools, politics and the environment. A child denied schooling becomes a worker unable to take up new jobs. A family denied healthcare spreads disease. A region left behind feeds migration, crime and political anger. Prosperity anywhere depends on the capabilities of people everywhere.",
      "Rawls’s difference principle expresses the moral side: inequality is acceptable only if it benefits the least advantaged. Ambedkar warned that a society which leaves some in subordination cannot secure its own democracy. Charity alone cannot remove the threat, because it treats the symptom and leaves the cause. Rights-based welfare, fair distribution of land and education, and public provision reduce the conditions that produce poverty.",
      "The statement also applies across nations. Pandemics, climate change and migration show that deprivation in one place affects prosperity elsewhere. The case for addressing poverty is therefore moral and prudential at once. A prosperous society that ignores the poor within or beyond its borders builds its prosperity on unstable ground. Justice is not only a gift to the poor. Justice is a condition of lasting prosperity for all."
     ]
    ]
   ],
   "intro": [
    "Charity is admired in every tradition. Giving to the poor, feeding the hungry and funding schools are rightly praised. Yet the need for charity is also a sign that something has gone wrong earlier, in the way a society distributes land, education, work and power. The question is whether generosity can ever replace justice, and what changes when help becomes a right rather than a gift."
   ],
   "claim": "A just society needs less charity because the need for rescue is largely produced by unjust institutions. Charity arrives after distribution has failed and leaves the cause untouched. Rights, by contrast, do not depend on anyone’s kindness and let the recipient claim, complain and hold the state to account. Charity still has a place in emergencies and among the undocumented, but as a permanent arrangement it keeps the poor dependent.",
   "problem": [
    "Societies often prefer charity to justice because charity leaves existing arrangements in place. A donor can feel generous without questioning how the gap arose. Philanthropy and corporate giving can fill real gaps in health and education, yet they decide by themselves what to fund and when to stop. The recipient remains grateful rather than entitled.",
    "Rights-based welfare has its own difficulties. Entitlements require eligibility rules, verification and audit, which slow delivery and can exclude people without documents. The state may be absent or slow where charity is quick and flexible. The challenge is to build a structure of justice that reduces the need for rescue, while keeping the speed and reach of charity for the cases a system cannot yet serve."
   ],
   "distinction": [
    "A useful distinction",
    "A beneficiary receives what someone chose to give and must hope it continues. A rights-holder receives what is owed and can complain, litigate and vote when it is not delivered. The shift from the first to the second changes the relationship, not only the amount."
   ],
   "thinkersTitle": "Four thinkers, four tests of justice and charity",
   "together": [
    "Putting the four together",
    "Rawls locates justice in institutions. Ambedkar insists on rights rather than relief. Nozick raises the entitlement objection, which rectification answers. Gandhi offers trusteeship, which still depends on conscience. Together they explain why justice reduces the need for charity, and why charity cannot replace justice."
   ],
   "models": [
    [
     "Charity arrives after justice has failed.",
     "Rawls located justice in the basic structure of society. A fair structure produces fewer people who need rescue. Charity treats the result of unfair distribution and leaves its cause untouched."
    ],
    [
     "Rights replace dependence with claims.",
     "Ambedkar refused relief as a substitute for rights, because a benefit that depends on goodwill keeps the recipient subordinate. MGNREGA and the Food Security Act turned help into enforceable entitlements."
    ],
    [
     "Past injustice answers the entitlement objection.",
     "Nozick held that just acquisition makes redistribution a violation. But land, schooling and occupations were long denied by caste. Nozick’s own principle of rectification supports correcting that history."
    ],
    [
     "Mandated giving is not generosity.",
     "Section 135 requires companies to spend two per cent of profits on CSR. About 34,909 crore rupees were spent in 2023-24. Mandated spending is closer to a tax than to charity."
    ],
    [
     "Charity has a place in emergencies.",
     "Community kitchens in 2020 moved faster than any scheme. Charity’s speed and reach are strengths in a crisis and weaknesses as a permanent system."
    ]
   ],
   "steps": [
    [
     "Define the difference.",
     "Separate charity as a gift from justice as a fair structure and a right."
    ],
    [
     "Show why need arises.",
     "Use Rawls to link poverty to institutions."
    ],
    [
     "Explain dignity.",
     "Use Ambedkar on rights rather than relief."
    ],
    [
     "Answer objections.",
     "Present Nozick and the principle of rectification."
    ],
    [
     "Give Indian examples.",
     "Use MGNREGA, NFSA, RTE, CSR and direct benefit transfer."
    ],
    [
     "Acknowledge charity’s strengths.",
     "Discuss speed and reach in emergencies."
    ],
    [
     "Conclude with justice first.",
     "Argue for rights as the base and charity as a supplement."
    ]
   ],
   "formula": "Build justice into institutions so that fewer people need rescue. Turn help into rights that can be claimed, keep charity for emergencies and the gaps rights cannot yet reach, and never let generosity replace the duty to change the structure."
  },
  {
   "thinkers": [
    [
     "Sen",
     "development as freedom",
     [
      "Amartya Sen provides the spine of the argument. Development is the expansion of substantive freedoms: the capability to be and do what a person has reason to value. Income is a means rather than an end.",
      "His comparative work makes the point concrete. States with similar or lower per capita income have achieved much better literacy, life expectancy and child survival. Distribution and public provision are therefore not simply results of growth. They are partly independent of it."
     ],
     "the answer needs to show that income growth and human development can diverge."
    ],
    [
     "Nozick",
     "wealth before sharing",
     [
      "Robert Nozick’s view deserves equal weight, and an answer is unbalanced without it. Wealth must be created before it can be shared, and redistribution that ignores how wealth was produced can violate rights and weaken incentives.",
      "A redistributive politics in a stagnant economy distributes shortage, and shortage falls hardest on those with the least buffer. Nozick’s warning is a reason to protect the conditions of production."
     ],
     "the question needs the case for growth and against distribution that ignores production."
    ],
    [
     "Ambedkar",
     "a life of contradictions",
     [
      "Ambedkar held both claims together and refused to rank them. In his final speech to the Constituent Assembly on 25 November 1949, he warned that India was entering a life of contradictions. The country would have political equality of one person, one vote, alongside deep social and economic inequality.",
      "He said the contradiction must be removed, or those denied equality would blow up the structure of political democracy. For Ambedkar, economic justice was a condition of democratic survival."
     ],
     "the answer needs to link economic inequality with the stability of democracy."
    ],
    [
     "Lohia",
     "caste and class together",
     [
      "Ram Manohar Lohia supplied a practical form. He argued for limits on inequality within a productive economy, and insisted that in India caste and class must be attacked at the same time.",
      "For Lohia, growth that left caste hierarchy intact would reproduce inequality in new forms. Justice needed both economic measures and social ones."
     ],
     "the question concerns the links between caste, class and economic policy."
    ],
    [
     "Deendayal Upadhyaya",
     "antyodaya",
     [
      "Deendayal Upadhyaya reached the same conjunction from a different tradition. He rejected both the economic man of capitalism and the collective man of socialism, and proposed antyodaya, the rise of the last person, as the test of any economic arrangement.",
      "The formulation is useful because it can be measured. The question is not what the economy produced, but where the least advantaged person now stands."
     ],
     "the answer needs an operational test for inclusive growth."
    ]
   ],
   "examples": [
    [
     "Inequality data and its limits",
     [
      "The World Inequality Lab’s 2024 paper on India argued that present inequality exceeds that of the colonial period. The paper reports the top one per cent holding about 40 per cent of national wealth. The top ten per cent receive about 58 per cent of national income, against about 15 per cent for the bottom half.",
      "The measurement disputes are real. Consumption surveys show far less inequality than income and wealth estimates, partly because the very rich are under-sampled. The Lab combines surveys with tax records and rich lists. The direction of the trend is not seriously contested even by critics. The size is, and an answer should name its source."
     ],
     "How unequal is growth, and how do we know? Name the data series and its limits."
    ],
    [
     "Kerala and Tamil Nadu",
     [
      "Kerala and Tamil Nadu are the standing Indian evidence that income and capability can diverge. Both have long recorded better life expectancy, literacy, infant mortality and school completion than several states with higher per capita income.",
      "The explanation is historical: earlier land reform, earlier and broader public schooling, older networks of primary health centres, and social movements that made education and health politically unavoidable. Capability outcomes respond to public provision more than to average income. The investments were made decades before the outcomes appeared, which is why they are politically hard to repeat."
     ],
     "Can a state achieve high human development without high income? Look at public provision and social movements."
    ],
    [
     "Jobless growth and informal work",
     [
      "Around nine in ten Indian workers are informal. Recent increases in female participation are concentrated in self-employment and unpaid family work, which is a warning about how participation figures should be read.",
      "Output can rise substantially without creating secure wage jobs, because growth concentrated in capital-intensive and skill-intensive sectors adds value without adding many jobs. A society can become much richer while the typical worker’s security does not change. Jobless growth is the reason an aggregate figure settles nothing."
     ],
     "Does growth create secure work for most people? Look at employment quality, not only output."
    ],
    [
     "Who bears the tax burden",
     [
      "Who bears a tax is a different question from who pays it at the counter. GST is levied on transactions, so a household spending nearly all its income pays tax on nearly all of it, while a household saving a large share pays on less. Without strong rate differences for necessities, a consumption tax is regressive relative to income.",
      "Direct taxation is where progressivity is possible, and India collects a smaller share of revenue from direct taxes than many comparable economies. The design of GST slabs and the exemption of unprocessed food therefore carry a heavy distributive weight."
     ],
     "Who actually bears the cost of public revenue? Compare consumption and income taxes relative to income."
    ],
    [
     "The East Asian sequence",
     [
      "Japan, South Korea and Taiwan achieved rapid industrial growth with unusually low inequality, partly because redistribution came before growth. Post-war land reform broke up large holdings and created owner-cultivators. Near-universal primary schooling was in place before industrial take-off.",
      "When growth arrived, people were equipped to take part in it and assets were already spread out. In India, land reform remained incomplete outside a few states, and mass schooling came later and unevenly. Growth met a population not positioned to share it evenly. The lesson is not that redistribution and growth trade off. The lesson is that the order matters."
     ],
     "Does early redistribution help growth include everyone? Compare the sequence of land reform, schooling and industrialisation."
    ]
   ],
   "topics": [
    [
     "2020B2",
     [
      "Social justice needs resources. Schools, hospitals, pensions and public works must be paid for, and a stagnant economy has little to distribute. Nozick’s warning that wealth must be created before it is shared has force: redistribution in a stagnant economy shares shortage, and shortage hurts the poor most. In that sense, there can be no social justice without economic prosperity.",
      "Prosperity without justice, however, is meaningless for most people. Sen showed that development is the expansion of freedoms, and that income is only a means. The World Inequality Lab’s figures on the concentration of wealth, and the persistence of informal work, show how growth can enrich the aggregate without improving the lives of most. Ambedkar warned that such contradictions threaten democracy itself.",
      "The two are conditions for each other. Kerala and Tamil Nadu show that public investment in health and education improves lives even at modest income. East Asian land reform and schooling show that justice can prepare the ground for faster and fairer growth. Deendayal Upadhyaya’s antyodaya offers the test: judge the economy by the condition of the last person. Prosperity is the means, and justice is what gives it meaning."
     ]
    ],
    [
     "2018A3",
     [
      "Poverty threatens prosperity because economies depend on the capabilities of all their people. Where many are poorly educated, unhealthy or insecure, markets are smaller, productivity is lower and growth is fragile. Jobless growth concentrates gains among a few while demand from the majority stagnates. Inequality then weakens the base on which prosperity rests.",
      "Poverty also threatens prosperity politically. Ambedkar warned that a democracy built on deep economic inequality risks being blown apart by those denied equality. Lohia argued that caste and class inequality reinforce each other. Societies that leave large groups behind face unrest, polarisation and loss of trust, all of which damage investment and growth.",
      "The East Asian experience shows the positive side. Land reform and universal schooling spread capability widely before growth arrived, and growth then included most people. Poverty anywhere threatens prosperity everywhere because economies and societies are connected. The prudent response is not only to grow, but to grow in ways that raise the floor, measured, as Deendayal Upadhyaya proposed, by the rise of the last person."
     ]
    ]
   ],
   "intro": [
    "Economic growth and social justice are often presented as rivals. One side says a country must first grow and distribute later. The other says growth that leaves most people behind is worthless. Both sides point to real failures: stagnant economies that could only share scarcity, and booming economies whose gains went to a few. The question is how growth and justice depend on each other."
   ],
   "claim": "Growth and justice are conditions for each other. Without prosperity, there is little to distribute, and redistribution in a stagnant economy shares shortage. Without justice, growth enriches the aggregate while most people are no freer. Distribution and public provision also shape growth itself, as land reform and schooling show. The test of an economy is not only what it produces, but where the least advantaged person stands.",
   "problem": [
    "Growth figures are easy to report and satisfying to celebrate. Yet growth concentrated in capital-intensive or skill-intensive sectors can add wealth without adding secure jobs. Inequality in income and wealth has risen sharply in India, and most workers remain in informal employment. A rising average can hide a stagnant median.",
    "The opposite danger is real too. A politics that redistributes without growth can shrink the resources available for public provision. States that ignore efficiency can end up distributing poverty. The challenge is to design growth that includes the poor and justice that strengthens the economy, rather than treating the two as a trade-off to be managed."
   ],
   "distinction": [
    "A useful distinction",
    "Growth measures what an economy produces. Development, in Sen’s sense, measures what people are able to do and be. An economy can grow without developing, and some states have developed faster than their income alone would predict."
   ],
   "thinkersTitle": "Five thinkers, five tests of growth and justice",
   "together": [
    "Putting the five together",
    "Sen shows that development and income can diverge. Nozick warns that there must be something to distribute. Ambedkar shows that inequality threatens democracy. Lohia joins caste and class. Deendayal Upadhyaya gives a measurable test. Together they show that growth and justice are conditions for each other, not rivals."
   ],
   "models": [
    [
     "Development is freedom, not income.",
     "Sen showed that states with similar income achieve very different literacy and life expectancy. Public provision shapes development partly independently of growth."
    ],
    [
     "Without growth, justice shares shortage.",
     "Nozick’s warning has force: redistribution in a stagnant economy distributes scarcity, and scarcity hurts the poor most. Growth is a condition of lasting justice."
    ],
    [
     "Inequality threatens democracy.",
     "Ambedkar warned in 1949 that political equality alongside social and economic inequality creates a life of contradictions that could blow up political democracy."
    ],
    [
     "Sequence matters.",
     "East Asian economies carried out land reform and universal schooling before industrial take-off. Early redistribution prepared people to share in growth."
    ],
    [
     "Judge by the last person.",
     "Deendayal Upadhyaya’s antyodaya tests an economy by where the least advantaged person stands. The test turns justice into a measurable standard."
    ]
   ],
   "steps": [
    [
     "Define both terms.",
     "Separate economic growth from social justice and human development."
    ],
    [
     "Show why justice needs growth.",
     "Use Nozick and fiscal capacity."
    ],
    [
     "Show why growth needs justice.",
     "Use Sen, inequality data and jobless growth."
    ],
    [
     "Give Indian evidence.",
     "Use Kerala and Tamil Nadu, informal employment and taxation."
    ],
    [
     "Bring in sequencing.",
     "Use the East Asian example."
    ],
    [
     "Link to democracy.",
     "Use Ambedkar’s warning of 1949."
    ],
    [
     "Conclude with a test.",
     "Use antyodaya to judge whether growth is just."
    ]
   ],
   "formula": "Treat growth and justice as conditions for each other. Grow to create the means, distribute capabilities early so that growth includes everyone, and judge the economy by the condition of the last person."
  },
  {
   "thinkers": [
    [
     "Sen",
     "capabilities, not commodities",
     [
      "Amartya Sen’s capability approach moves the question. What matters is not what a person owns but what they are able to do and be: adequately nourished, free from preventable illness, literate and able to take part in community life.",
      "Income buys these capabilities unevenly, because the conversion depends on health, gender and location. The same rupees do not buy the same freedom for a woman in a village with no clinic. Neglect of primary health and education disables everything downstream, including the ability to benefit from growth."
     ],
     "the answer needs to explain why capability matters more than income."
    ],
    [
     "Nussbaum",
     "a threshold for every person",
     [
      "Martha Nussbaum makes the list explicit and therefore actionable. She specifies central capabilities, such as life, bodily health, bodily integrity, senses and imagination, practical reason and affiliation.",
      "A decent political order must secure each capability to a threshold for every person, not only on average. The move from average to threshold is the heart of her argument."
     ],
     "the question needs a clear list of basic capabilities or a threshold standard for policy."
    ],
    [
     "Jyotirao and Savitribai Phule",
     "education against hierarchy",
     [
      "Jyotirao and Savitribai Phule acted on this priority a century before it was theorised. They opened a school for girls in Pune in 1848. They identified denial of education as the means by which caste and gender subordination reproduced themselves.",
      "Savitribai walked to school carrying a spare sari, because people threw mud and dung at her on the way. The Phules showed that education is not a service among others. Education is the key to every other freedom."
     ],
     "the answer needs an Indian example of education as a tool of social equality."
    ],
    [
     "Ambedkar",
     "educate first",
     [
      "Ambedkar placed education first in his call to educate, agitate and organise. His own life is the argument in miniature. The capabilities he acquired turned a personal humiliation into a constitutional claim.",
      "For Ambedkar, education was the precondition for political action. A person who cannot read the law cannot claim its protection."
     ],
     "the question links education with empowerment and political participation."
    ],
    [
     "Deendayal Upadhyaya",
     "the last person in the queue",
     [
      "Deendayal Upadhyaya supplied the administrative version of the test. A system should be judged by the condition of the last person in the queue, not by its average.",
      "Backwardness, on this reading, is not a residue that growth will clear away. Backwardness is the predictable result of withholding the capabilities on which every other opportunity depends."
     ],
     "the answer needs a governance standard for basic services."
    ]
   ],
   "examples": [
    [
     "Public health spending and out-of-pocket costs",
     [
      "According to the National Health Accounts, government health expenditure rose from about 1.15 per cent of GDP in 2013-14 to about 1.43 per cent in 2022-23. The National Health Policy of 2017 set a target of 2.5 per cent. Out-of-pocket spending fell from about 64 per cent of total health spending to about 43 per cent over the same period.",
      "The fall is real progress, and India still ranks high by international comparison. Out-of-pocket spending is the mechanism by which illness produces poverty. A household without insurance meets a hospital bill by selling assets or borrowing. An underfunded public health system therefore generates poverty."
     ],
     "Does illness push families into poverty? Look at public spending and the share paid out of pocket."
    ],
    [
     "Learning, not enrolment",
     [
      "Enrolment in India is near universal, so enrolment reveals little. What matters is whether children can do what schooling is for. ASER 2024 found that 44.8 per cent of Class 5 children in government schools could read a Class 2 text, up from 38.5 per cent in 2022. Among Class 3 children in government schools, 23.4 per cent could do so, the best figure since 2005.",
      "Both figures show recovery, and both leave a majority below the benchmark. The idea of learning poverty exists to force the distinction between schooling and learning. A system judged on inputs can report success for ever while the outcome it exists for does not occur."
     ],
     "Are children learning or only attending? Measure outcomes rather than enrolment."
    ],
    [
     "Nutrition as a lifelong capability",
     [
      "The National Family Health Survey 2019-21 found stunting among children under five at 35.5 per cent, down from 38.4 per cent in the previous round. Wasting stood at 19.3 per cent and underweight at 32.1 per cent. Anaemia rose: about 57 per cent of women aged 15 to 49 and about 67 per cent of children aged six to fifty-nine months were anaemic.",
      "Stunting is the clearest case of a capability rather than a commodity. Stunting reflects deprivation in the first thousand days, is linked to later learning and earnings, and cannot be reversed by feeding the same person more later. The deprivation is temporary. The disability it produces is not."
     ],
     "Which deprivations cause lifelong harm? Identify capabilities that must be secured early."
    ],
    [
     "Insurance against primary care",
     [
      "Ayushman Bharat has two parts that are often discussed as one. PM-JAY insures hospital treatment, and the health and wellness centres, now called Ayushman Arogya Mandirs, are meant to strengthen primary care where most illness first appears.",
      "The design tension is real. Insurance is visible and politically rewarding, because a saved hospital bill can be attributed. Primary care is unglamorous, and its success appears as an admission that never happened. A system that funds insurance well and primary care poorly treats disease late and expensively."
     ],
     "Does the system prevent illness or only pay for treatment? Compare investment in primary care with hospital insurance."
    ],
    [
     "Fiscal capacity and priority",
     [
      "The counter-argument deserves respect. A state cannot spend what it does not collect. India’s tax-to-GDP ratio limits what any government can commit to health, education and nutrition at once. Growth expands the base from which all of these are funded.",
      "The constraint is real but partly chosen. The composition of spending and the efficiency of collection are policy decisions, and states with similar incomes have achieved very different outcomes. Fiscal capacity limits the pace. Fiscal capacity does not decide the priority."
     ],
     "Is neglect forced by limited resources or chosen through priorities? Compare states with similar incomes and different outcomes."
    ]
   ],
   "topics": [
    [
     "2019B2",
     [
      "Backwardness is often explained by low income, poor infrastructure or lack of investment. The statement points to a deeper cause: the neglect of primary health care and education. Sen’s capability approach explains why. Income is useful only if people can convert it into a good life, and health and education are what make that conversion possible. A sick or illiterate person cannot take up new jobs, use new technology or claim legal rights.",
      "The evidence shows the cost of neglect. More than half of Class 5 children in government schools cannot read a Class 2 text. Over a third of young children are stunted, a harm that cannot be reversed later. Out-of-pocket spending still makes up over two-fifths of health expenditure, pushing families into poverty. Kerala and Tamil Nadu show the opposite path: early investment in schooling and health produced better outcomes than richer states achieved.",
      "The statement should be qualified. Backwardness has several causes, including incomplete land reform, weak industrialisation and social hierarchy. Fiscal limits are real. Yet neglect of basic capabilities is the cause that disables all others. The Phules and Ambedkar understood that education was the key to every other freedom. A state that neglects health and education has not saved money. The state has decided how much of its population will be unable to use any opportunity."
     ]
    ]
   ],
   "intro": [
    "Income is the usual measure of progress. Yet the same income can buy very different lives. A family with the same earnings may be healthy and educated in one place and sick and illiterate in another. What decides the difference is often whether the state provides basic health care, schooling and nutrition. The question is why these capabilities matter more than income, and why neglecting them keeps a country backward."
   ],
   "claim": "What matters is not what a person owns but what they are able to do and be: to be healthy, educated, nourished and able to take part in community life. Primary health care and education are the foundations of every other opportunity. Neglecting them does not save money. Neglecting them decides how much of the population will be unable to use anything else the state or the market provides.",
   "problem": [
    "Governments often treat health and education as expenditure to be minimised in hard times. Growth, infrastructure and industry seem more urgent. The results appear only slowly: children who cannot read, adults disabled by preventable illness and families pushed into poverty by medical bills. Because the damage is gradual, it rarely creates a crisis that forces action.",
    "Fiscal limits are real. A state cannot spend what it does not collect, and India’s tax base limits what can be committed at once. The ethical and policy question is whether these limits justify neglect, or whether the priority of basic capabilities should shape how limited resources are spent. The experience of states with similar incomes but very different outcomes suggests that the priority is partly a choice."
   ],
   "distinction": [
    "A useful distinction",
    "An average measures the mean. A threshold measures whether every person has reached the minimum for a recognisably human life. A country can raise its average while leaving a fifth of its people below the threshold."
   ],
   "thinkersTitle": "Five thinkers, five tests of capability",
   "together": [
    "Putting the five together",
    "Sen shifts attention from income to capabilities. Nussbaum sets a threshold for every person. The Phules and Ambedkar show education as the key to equality. Deendayal Upadhyaya judges a system by its last person. Together they explain why neglect of primary health and education is the root of backwardness."
   ],
   "models": [
    [
     "Capability, not income.",
     "Sen argued that what matters is what people can do and be. The same income buys different freedoms depending on health, gender and location, which is why basic services matter more than averages."
    ],
    [
     "Thresholds, not averages.",
     "Nussbaum requires every person to reach a threshold in central capabilities. A country can raise its average while leaving a fifth of its people below the level of a decent life."
    ],
    [
     "Illness produces poverty.",
     "Out-of-pocket spending made up about 43 per cent of health expenditure in 2022-23. Where public health care is weak, a hospital bill pushes families into debt."
    ],
    [
     "Early deprivation is permanent.",
     "Stunting, at 35.5 per cent of young children in NFHS-5, reflects deprivation in the first thousand days and cannot be reversed later. Nutrition is a capability that must be secured early."
    ],
    [
     "Education unlocks every other freedom.",
     "The Phules opened a girls’ school in 1848, and Ambedkar placed education first. A person who cannot read cannot claim rights or take up opportunities."
    ]
   ],
   "steps": [
    [
     "Shift from income to capability.",
     "Use Sen to explain what matters."
    ],
    [
     "Set a threshold.",
     "Use Nussbaum’s list of central capabilities."
    ],
    [
     "Present the evidence.",
     "Use health spending, ASER and NFHS figures."
    ],
    [
     "Give Indian examples.",
     "Contrast Kerala and Tamil Nadu with higher-income states."
    ],
    [
     "Bring in social reformers.",
     "Use the Phules and Ambedkar on education."
    ],
    [
     "Address fiscal limits.",
     "Show that constraints limit pace but not priority."
    ],
    [
     "Conclude with the last person.",
     "Judge the system by its least served citizen."
    ]
   ],
   "formula": "Measure progress by what people can do and be, not by average income. Secure health, education and nutrition to a threshold for everyone, early and publicly, because every other opportunity depends on them."
  },
  {
   "thinkers": [
    [
     "Beauvoir",
     "one becomes a woman",
     [
      "Simone de Beauvoir gave the most efficient opening. She wrote that one is not born, but rather becomes, a woman. Femininity is produced by upbringing, expectation and institutions rather than given by biology.",
      "The central mechanism is that man is treated as the standard and woman as the deviation from a norm she did not set. A default is never experienced as a position, which is why the structure is invisible to those it favours."
     ],
     "the answer needs to explain how gender roles are socially produced."
    ],
    [
     "Wollstonecraft",
     "treatment produces the evidence",
     [
      "Mary Wollstonecraft identified the engine two centuries earlier, in A Vindication of the Rights of Woman in 1792. She argued that women appear frivolous because they are educated to be ornamental.",
      "The supposed evidence of women’s inferiority is produced by the treatment it is then used to justify. The circle can be broken only by changing the treatment, especially education."
     ],
     "the question concerns education, stereotypes or how inequality justifies itself."
    ],
    [
     "Savitribai Phule and Pandita Ramabai",
     "reform under attack",
     [
      "Savitribai Phule and Pandita Ramabai turned the argument into practice in India, under direct social attack. Savitribai taught in the girls’ schools she and Jyotirao Phule opened from 1848.",
      "Pandita Ramabai founded the Sharada Sadan in 1889 for widows who had nowhere else to go. Both women built institutions that gave women education and shelter outside the family’s control."
     ],
     "the answer needs Indian examples of women building institutions against patriarchy."
    ],
    [
     "Periyar",
     "gender and caste together",
     [
      "Periyar’s Self-Respect Movement treated marriage, ritual and property together. Self-respect marriages dispensed with priests and rituals that marked women as subordinate.",
      "Periyar refused to separate the question of gender from the question of caste. He argued that both rested on the same beliefs about birth, purity and obedience."
     ],
     "the question concerns the links between caste, marriage and women’s status."
    ],
    [
     "Gilligan",
     "the scale built from male responses",
     [
      "Carol Gilligan showed a subtler form of invisibility. In In a Different Voice, published in 1982, she demonstrated that women’s moral reasoning had been classified as less developed largely because the scale used to measure it had been built from male responses.",
      "Her ethic of care reveals how the standard itself can carry bias. When men are the default, women’s differences appear as deficits."
     ],
     "the answer needs an example of bias built into the standard of measurement."
    ],
    [
     "Ambedkar",
     "endogamy joins caste and gender",
     [
      "Ambedkar saw the connection most clearly. In his paper Castes in India, written in 1916, he argued that caste is maintained through endogamy, and therefore through control over whom women may marry. Caste and patriarchy are one system with two faces.",
      "His Hindu Code Bill, covering divorce, maintenance and inheritance, tried to legislate at that joint. His resignation in 1951, when the bill was stalled and diluted, measures how much resistance the structure could still mount."
     ],
     "the question needs to link caste with control over women, or discuss legal reform of family law."
    ]
   ],
   "examples": [
    [
     "Women’s work: rising participation, changing composition",
     [
      "The claim that women’s labour force participation is falling has been overtaken by the data. The Periodic Labour Force Survey reports female participation rising from 23.3 per cent in 2017-18 to about 41.7 per cent in 2023-24. Rural women drove the rise, with the urban rate moving only from 20.4 to 25.4 per cent.",
      "The composition keeps the older concern alive. Most of the increase is in self-employment and unpaid family work rather than wage work. Whether the rise represents opportunity or distress depends on which kind of work it is."
     ],
     "Is more work the same as more power? Look at the kind of work and who controls the income."
    ],
    [
     "Time use and invisible hours",
     [
      "The Time Use Survey of 2019 found that women spent about 299 minutes a day on unpaid domestic work, against 97 minutes for men. Women spent about 134 minutes on caregiving, against 76 for men. The 2024 round shows the gap persisting.",
      "The data supply the structural explanation that the sentiment account cannot. A woman is not absent from paid work because anyone forbade it. She is absent because about five hours of daily unpaid work have already been assigned to her. Attitudes can change while the constraint remains, because the constraint is time, not opinion."
     ],
     "What limits women’s choices even when attitudes change? Look at the allocation of time."
    ],
    [
     "Inheritance in law and in practice",
     [
      "The Hindu Succession (Amendment) Act of 2005 made daughters coparceners in joint family property on the same footing as sons. In Vineeta Sharma v Rakesh Sharma in 2020, the Supreme Court held that the right arises by birth, whether or not the father was alive when the amendment came into force.",
      "The legal position is clear. Practice is not. Land and housing are still recorded mostly in men’s names, partitions are settled informally, and a daughter who claims her share risks the family relationship that is her fallback. The statute addressed the sentiment. The structure, meaning who holds the asset and who fears the cost of claiming it, remains."
     ],
     "Does a legal right change who holds property? Compare the law with land records and family practice."
    ],
    [
     "Sex ratio at birth",
     [
      "Sex ratio at birth is the rare case where a private preference leaves a public trace. NFHS-5 recorded 929 female births per 1,000 male births, up from 919 in NFHS-4, against a natural level of about 952. Punjab improved from 860 to 904 and Haryana from 836 to 893, though both remain below the natural level.",
      "Beti Bachao Beti Padhao is the flagship response. A parliamentary committee reported in 2021 that about 79 per cent of the funds released between 2016 and 2019 went to media advocacy. The ratio is measured. Whether the scheme moved it is contested."
     ],
     "How is son preference measured, and what changes it? Separate awareness campaigns from structural change."
    ],
    [
     "Men inside the structure",
     [
      "A structural account must explain why men enforce patriarchy, including against themselves. The same code that assigns women to the household assigns men to provision and stoicism. The costs are visible. Men account for about seven in ten recorded suicides in India, are over-represented in dangerous work and are less likely to seek help for mental distress.",
      "None of this makes the structure symmetrical, since the distribution of power and property is not in doubt. The costs establish that patriarchy is a set of role obligations rather than a simple transfer from one group to another. Treating patriarchy as a quarrel between men and women misdescribes it."
     ],
     "What does the structure demand of men? Show how role obligations harm both sexes while power remains unequal."
    ]
   ],
   "topics": [
    [
     "2020B3",
     [
      "Patriarchy is the least noticed structure of inequality because it works through ordinary life. Unlike a discriminatory law, it is not written in one place. Patriarchy lives in the household, the compliment, the division of chores and the name on a land record. Beauvoir observed that man is treated as the standard and woman as the deviation, and a default is never experienced as a position. People who benefit from patriarchy rarely see it, and many who are disadvantaged accept it as natural.",
      "Patriarchy is also the most significant structure, because it shapes every other. The Time Use Survey shows women carrying about five hours a day of unpaid work, which limits their paid work and income. Inheritance law gives daughters equal rights, yet property remains mostly in men’s names. Ambedkar showed that caste itself is maintained by controlling women’s marriages, so patriarchy supports other hierarchies too.",
      "Recognising patriarchy as a structure changes the remedy. Good intentions and awareness campaigns are not enough, as the uncertain effect of Beti Bachao Beti Padhao shows. Change requires redistributing time through shared care and public services, property through enforced inheritance, and power through representation. Patriarchy becomes visible only when we ask what it allocates, not only what people believe."
     ]
    ],
    [
     "2023B1",
     [
      "Girls and boys are raised under different disciplines. Girls are restricted in movement, dress, speech and ambition. Boys face demands to earn, to succeed, to protect and to hide emotion. Both disciplines are imposed by the same structure on children who chose neither. Beauvoir’s insight that one becomes a woman applies equally to becoming a man: both are produced by expectation.",
      "Both disciplines cause harm. Restrictions limit girls’ education, work and freedom, and shape the unequal allocation of time and property in adult life. Demands on boys produce pressure, fear of failure and emotional isolation. Men account for about seven in ten recorded suicides in India and are less likely to seek help for distress.",
      "The phrase “equally harmful” needs care. The harms are real on both sides, but the power they produce is not equal. Restrictions on girls keep women from property and decisions, while demands on boys still place men in positions of authority. The better response is to free both from rigid roles: to widen girls’ freedoms and to relieve boys of impossible demands. Recognising the harm to boys strengthens the case against patriarchy, because it shows that the structure serves no one well."
     ]
    ],
    [
     "2021B1",
     [
      "The saying praises mothers as the hidden rulers of the world, because they shape the next generation. There is truth in it. Early care shapes health, language, values and character, and mothers have long carried most of that work. The Time Use Survey confirms that women do most caregiving in India.",
      "Yet the saying can also disguise powerlessness. The hand that rocks the cradle rules nothing if it holds no property, no wage and no way out. Praise for motherhood has often been used to keep women in the home and away from public power. Wollstonecraft warned that women are educated for ornament and then judged by the result. The Phules and Pandita Ramabai showed that real influence requires education and independent institutions.",
      "The saying can be read in a better way. If care shapes the world, then care deserves recognition, support and sharing. Care work should be counted, supported by public services and shared by men. Women should also hold property, income and decision-making power. The hand that rocks the cradle will truly rule when it also holds a vote, a title deed and an equal voice."
     ]
    ]
   ],
   "intro": [
    "Patriarchy is rarely experienced as a system. Patriarchy appears instead as habit, custom, compliment and expectation: who cooks, who inherits, who speaks, who decides. Because it works through ordinary life, it often goes unnoticed, even by those it disadvantages. Yet it shapes property, work, marriage and power more deeply than many written laws. The question is why patriarchy is a structure rather than a sentiment, and why good intentions leave it intact."
   ],
   "claim": "Patriarchy is a structure of roles, property and time, not merely an attitude. Patriarchy treats men as the standard and women as the deviation, assigns women unpaid care and men provision and stoicism, and keeps assets and decisions in male hands. Changing sentiments and passing laws are necessary but insufficient. The structure changes only when property, time, work and power are redistributed.",
   "problem": [
    "Many people believe that gender inequality is mainly about prejudice. If attitudes improve, the inequality will fade. Laws granting equal inheritance and schemes promoting girls’ education express such a belief. Laws and schemes matter, but the structure often continues. Daughters rarely claim land they are legally entitled to. Women take up paid work while still carrying most unpaid care. Praise for motherhood can coexist with the absence of any property or income of one’s own.",
    "The structure also harms men, though not symmetrically. Boys are raised under demands to provide, to succeed and to suppress emotion. The challenge is to see patriarchy as a system that assigns roles to everyone, while recognising that power and property remain unequally distributed, and to design changes that alter the structure rather than only its image."
   ],
   "distinction": [
    "A useful distinction",
    "A sentiment is an attitude that can change with persuasion. A structure is an allocation of property, time and power that persists even when attitudes change. A law that addresses the sentiment may leave the structure untouched."
   ],
   "thinkersTitle": "Thinkers who exposed a hidden structure",
   "together": [
    "Putting them together",
    "Beauvoir and Wollstonecraft show that gender is produced by treatment that then justifies itself. Savitribai Phule and Pandita Ramabai built institutions against it. Periyar and Ambedkar show that caste and gender are bound together. Gilligan shows bias hidden in the standard itself. Together they explain why patriarchy is a structure that sentiment alone cannot change."
   ],
   "models": [
    [
     "Patriarchy is a structure, not a sentiment.",
     "Beauvoir showed that man is treated as the standard and woman as the deviation. A default is invisible to those it favours. Changing attitudes is not enough if property, time and power stay unequal."
    ],
    [
     "Time is the hidden constraint.",
     "The Time Use Survey found women spending about 299 minutes a day on unpaid domestic work against 97 for men. Women’s choices are limited less by opinion than by the time already assigned to them."
    ],
    [
     "Law without practice leaves the structure intact.",
     "Daughters have had equal coparcenary rights since 2005, confirmed in Vineeta Sharma in 2020. Yet land remains mostly in men’s names, because claiming a share risks family support."
    ],
    [
     "Caste and patriarchy are joined.",
     "Ambedkar argued that caste is maintained through endogamy and therefore through control of women’s marriages. The two hierarchies are one system with two faces."
    ],
    [
     "The structure harms men too.",
     "Boys are raised under demands to provide and to hide distress. Men account for about seven in ten recorded suicides. Patriarchy assigns burdens to both sexes while keeping power unequal."
    ]
   ],
   "steps": [
    [
     "Define patriarchy as a structure.",
     "Use Beauvoir and Wollstonecraft to show how roles are produced."
    ],
    [
     "Show what it allocates.",
     "Use data on time use, property and work."
    ],
    [
     "Give Indian reformers.",
     "Use Savitribai Phule, Pandita Ramabai, Periyar and Ambedkar."
    ],
    [
     "Show the gap between law and practice.",
     "Use inheritance law and sex ratio at birth."
    ],
    [
     "Include men.",
     "Discuss the demands placed on boys and their costs."
    ],
    [
     "Avoid false symmetry.",
     "Acknowledge that power and property remain unequal."
    ],
    [
     "Conclude with structural remedies.",
     "Recommend redistribution of care, property and power."
    ]
   ],
   "formula": "Treat patriarchy as a structure that allocates property, time and power. Change laws and attitudes, but also redistribute care work, enforce women’s property rights and open decisions to women, while freeing both sexes from rigid roles."
  },
  {
   "thinkers": [
    [
     "Bentham",
     "the greatest happiness",
     [
      "Jeremy Bentham stated the majoritarian answer at its clearest. The aim is the greatest happiness of the greatest number, with each person counting for one and nobody for more than one.",
      "The strength of the principle is its impartiality: no person’s pleasure counts extra because of birth or status, a radical claim in the eighteenth century. Its weakness is what the question probes. An aggregate can improve while a minority is made much worse off, and the arithmetic registers no objection."
     ],
     "the answer needs to present the case for aggregate welfare and its blind spot."
    ],
    [
     "Mill",
     "the tyranny of the majority",
     [
      "John Stuart Mill saw the danger and named it. He warned that the tyranny of the majority works through opinion and custom as well as through law.",
      "A society can enslave more effectively than any magistrate, because its pressure reaches into private life. Mill’s harm principle limits interference to preventing harm to others."
     ],
     "the question concerns individual liberty against social pressure, or the limits of state power."
    ],
    [
     "Rawls",
     "the separateness of persons",
     [
      "John Rawls answered the arithmetic directly. He argued that utilitarianism does not take seriously the distinction between persons, because it treats a society as a single being trading off its own satisfactions.",
      "The veil of ignorance blocks the trade. A person who might turn out to be the sacrificed minority will not agree to sacrificing it."
     ],
     "the answer needs to explain why individuals cannot simply be traded off for aggregate gain."
    ],
    [
     "Ambedkar",
     "safeguards against majority custom",
     [
      "Ambedkar applied the same reasoning to a society where the majority’s customary preference was itself the instrument of exclusion.",
      "For this reason he insisted on constitutional safeguards rather than trusting goodwill. Fundamental rights, reservation and legal remedies protect minorities from a majority that may be sincere and still unjust."
     ],
     "the question concerns minority rights, reservation or constitutional protections."
    ],
    [
     "Tocqueville",
     "the benevolent majority",
     [
      "Alexis de Tocqueville added an observation that completes the picture. A democratic majority can be sincerely benevolent and still crushing, because it never has to meet the minority’s reasoning.",
      "His insight explains why good intentions do not protect minorities. Institutions must require the majority to hear and answer those it outvotes."
     ],
     "the answer needs to show how democratic majorities can harm minorities without intending to."
    ]
   ],
   "examples": [
    [
     "Land acquisition and displacement",
     [
      "Land acquisition is where the aggregate case and the individual case collide most visibly. A dam, a highway or a plant may raise welfare in total while imposing near-total loss on the households standing on the site. The displaced households usually have the least capacity to relocate.",
      "The Right to Fair Compensation and Transparency in Land Acquisition, Rehabilitation and Resettlement Act of 2013 required social impact assessment, consent from most landowners for private and public-private projects, and compensation at a multiple of market value. The gap is that compensation is monetary and the loss is not. A cultivator loses an occupation, a network and a place, and cash restores none of them."
     ],
     "Who bears the cost of a public project? Weigh aggregate benefit against the loss to those displaced."
    ],
    [
     "Vaccine mandates and bodily autonomy",
     [
      "The pandemic tested whether an individual may be compelled for a collective benefit. In Jacob Puliyel v Union of India in 2022, the Supreme Court held that bodily autonomy is protected under Article 21 and that nobody can be forcibly vaccinated. The Court accepted that the state may impose reasonable restrictions in the interest of public health.",
      "The strongest case for compulsion is not paternalism but harm to others, since vaccination and isolation protect other people, which is exactly the situation Mill’s harm principle addresses. The strongest case against is that emergency powers are easy to assume and hard to give up."
     ],
     "When may individual liberty be limited for public health? Apply the harm principle and check for time limits."
    ],
    [
     "Reservation as a counter-majoritarian device",
     [
      "Reservation is counter-majoritarian by design. Its premise is that a majority will not voluntarily give up advantage, so representation must be secured by rule. In Indra Sawhney in 1992, the Supreme Court set a ceiling of fifty per cent and excluded the creamy layer.",
      "In Janhit Abhiyan in 2022, the Court upheld the ten per cent quota for economically weaker sections by three to two, holding that the fifty per cent limit is not part of the basic structure. The ruling reopens a settled question, because a ceiling that can be exceeded when Parliament decides is a convention rather than a constraint."
     ],
     "How should minorities be protected from majority advantage? Examine the purpose and limits of reservation."
    ],
    [
     "Clearances and forest rights",
     [
      "Eminent domain rests on the proposition that the state’s claim over land is ultimately superior to the holder’s. What varies is the procedure required before it is used. Public hearings for environmental clearance are held where a project is sited, so those who bear the harm can speak, while beneficiaries elsewhere are unrepresented.",
      "The Forest Rights Act of 2006 recognised rights that predate the state’s record. Clearance can no longer treat forest-dwelling communities as occupying land without title. Recognition is in the statute. Whether recognition is applied at the point of clearance is the live question."
     ],
     "Are the rights of affected communities respected in practice? Compare the law with the clearance process."
    ],
    [
     "The libertarian objection",
     [
      "Robert Nozick argued that rights act as side constraints rather than goals to be maximised. Rights mark out what may not be done to a person, whatever the aggregate gain. On that view, asking whether total benefit exceeds total loss is the wrong question, because a person is not a resource whose sacrifice can be justified by gains to others.",
      "Applied consistently, the view rules out much ordinary policy, including redistributive taxation. Its value in an essay is that it names what utilitarian reasoning cannot see: those who bear the cost are not compensated by the fact that others gained."
     ],
     "Are there things that may not be done to a person for any gain? Identify rights that limit aggregate reasoning."
    ]
   ],
   "topics": [
    [
     "2019A3",
     [
      "What benefits one person can harm others. A factory owner gains from polluting a river, and a driver saves time by ignoring traffic rules. In such cases, the best choice for the individual imposes costs on society. Mill’s harm principle allows society to limit individual liberty only to prevent harm to others, and the pandemic showed why: a person’s refusal to isolate can endanger many.",
      "The statement also works the other way. What is best for society in aggregate may not be best for individuals. Land acquisition can raise total welfare while destroying the livelihood of displaced families. Bentham’s arithmetic registers no objection when a minority is made worse off, which is why Rawls insisted on the separateness of persons, and why Ambedkar built constitutional safeguards. Nozick’s side constraints mark what may not be done to a person for any gain.",
      "The balanced answer is that neither the individual nor the aggregate should always prevail. Society may limit individual choices that harm others, as in public health, but it must justify the limit and keep it temporary. Society may pursue collective projects, but it must compensate and protect those who bear the cost. A just society is one where the trade between individual and collective good is always made openly and justified to the person bearing it."
     ]
    ],
    [
     "2025A1",
     [
      "Truth knows no colour: a valid claim does not get its validity from the race, caste, religion, class or gender of the person who makes it. The same evidence should lead to the same conclusion whoever presents it. The idea is the foundation of science, law and democratic debate. Bentham’s principle that each counts for one expresses the same impartiality in ethics.",
      "In practice, societies often judge claims by who makes them. Minority voices are dismissed, while the claims of the powerful are accepted without scrutiny. Mill warned that the tyranny of the majority works through opinion and custom. Tocqueville saw that a majority can be benevolent and still never hear the minority’s reasoning. Standpoint matters here in a precise sense: people outside power often see evidence that others miss, and excluding them makes knowledge worse.",
      "A society tests whether it believes that truth knows no colour by how it treats claims from people it could afford to ignore. Ambedkar’s constitutional safeguards, public hearings for displaced communities and the Forest Rights Act all try to ensure that such claims are heard. Truth may know no colour, but institutions must be designed so that the colour of the speaker does not decide whether the truth is heard."
     ]
    ]
   ],
   "intro": [
    "A society is made of individuals, yet what benefits one person may harm others, and what benefits the majority may crush a minority. A factory may raise a region’s income while displacing a village. A vaccine mandate may protect the public while limiting personal choice. The question is how to weigh individual interests against the common good, and what makes a claim valid regardless of who makes it."
   ],
   "claim": "What is best for an individual is not always best for society, and what is best for the majority is not always just. The common good must be pursued without treating any person as a mere resource for others. Rights mark what may not be done to a person, whatever the aggregate gain. Truth knows no colour: a claim’s validity does not depend on who makes it, and a society proves its impartiality by how it treats claims from people it could afford to ignore.",
   "problem": [
    "Public policy constantly balances individual and collective interests. Land is acquired for roads, dams and industry. Health measures limit freedom to protect others. Taxation takes from some to provide for all. In each case, the benefits are spread widely while the costs fall heavily on particular people, often those least able to resist.",
    "The difficulty is that both extremes fail. A society that always puts individual choice first cannot build public goods or control harms like epidemics. A society that always puts the aggregate first can sacrifice minorities without noticing. The challenge is to pursue the common good while protecting individuals, especially those whose voices carry least weight, and to judge claims by their merits rather than by the status of those who make them."
   ],
   "distinction": [
    "A useful distinction",
    "An aggregate asks whether total benefit exceeds total cost. A distribution asks who bears the cost and who receives the benefit. A policy can pass the first test while failing the second, and a just society must answer both."
   ],
   "thinkersTitle": "Five thinkers, five tests of the common good",
   "together": [
    "Putting the five together",
    "Bentham offers impartial aggregate welfare. Mill warns of majority tyranny. Rawls insists that persons cannot be traded off. Ambedkar builds constitutional safeguards. Tocqueville shows that even a kind majority can crush a minority it never hears. Together they explain why the common good must protect the individual it asks to sacrifice."
   ],
   "models": [
    [
     "Aggregate gain can hide individual loss.",
     "Bentham’s greatest happiness principle counts each person as one. But an aggregate can rise while a minority is made much worse off, and the arithmetic records no objection."
    ],
    [
     "Persons are separate.",
     "Rawls argued that utilitarianism treats society as a single being trading off its own satisfactions. The veil of ignorance blocks the sacrifice of a minority that anyone might belong to."
    ],
    [
     "Liberty may be limited only to prevent harm.",
     "Mill’s harm principle justifies public health measures that protect others. In Jacob Puliyel in 2022, the Supreme Court held that nobody can be forcibly vaccinated, while allowing reasonable restrictions."
    ],
    [
     "Minorities need safeguards, not goodwill.",
     "Ambedkar insisted on constitutional protections because majority custom was itself the tool of exclusion. Tocqueville showed that even a benevolent majority can crush those it never hears."
    ],
    [
     "Compensation is not restoration.",
     "The 2013 land acquisition law requires social impact assessment and higher compensation. Yet a displaced cultivator loses an occupation and a community that money cannot restore."
    ]
   ],
   "steps": [
    [
     "State the conflict.",
     "Show how individual and collective good can diverge in both directions."
    ],
    [
     "Present aggregate reasoning.",
     "Use Bentham and its strength of impartiality."
    ],
    [
     "Show its blind spot.",
     "Use Rawls, Mill and Tocqueville on minorities."
    ],
    [
     "Give Indian examples.",
     "Use land acquisition, vaccine mandates, reservation or forest rights."
    ],
    [
     "Present rights as limits.",
     "Use Nozick’s side constraints and Ambedkar’s safeguards."
    ],
    [
     "Apply impartiality.",
     "Explain why claims must be judged on merit, and how institutions ensure all are heard."
    ],
    [
     "Conclude with justification.",
     "Argue that every trade between individual and society must be justified to the person bearing it."
    ]
   ],
   "formula": "Pursue the common good without treating any person as a resource. Limit liberty only to prevent harm, compensate and protect those who bear public costs, safeguard minorities, and judge every claim on its merits, whoever makes it."
  }
 ],
 "Democracy, the State and India in the World": [
  {
   "thinkers": [
    [
     "Gandhi",
     "reading and disciplining a public mood",
     [
      "A line often credited to Gandhi, though it goes back to the French politician Ledru-Rollin in 1848, says that a leader must follow the passing crowd because he is its leader. The line reads better as theory than as a joke.",
      "Gandhi’s own leadership worked by reading a public mood, giving it a disciplined form, and withdrawing when that discipline broke. Suspending the Non-Cooperation Movement after Chauri Chaura in 1922 was the costliest instance. Consent was the source of his authority, and his judgment was what that consent was placed in."
     ],
     "the answer needs an example of leadership that follows the people and still disciplines their direction."
    ],
    [
     "Barnard",
     "authority conferred by acceptance",
     [
      "Chester Barnard gave the idea an administrative structure. Authority, in his account, does not come down from a position. Authority is conferred by acceptance: an instruction is authoritative only if the person receiving it treats it as such.",
      "The executive’s real work is securing the cooperation that makes acceptance routine. What Barnard called the zone of indifference widens with trust and narrows with every order that seems arbitrary."
     ],
     "the question concerns authority in organisations, or why orders fail without trust."
    ],
    [
     "Habermas",
     "decisions that survive explanation",
     [
      "Jürgen Habermas supplied the democratic test. Legitimacy comes from discussion in which those affected can question any claim without being coerced.",
      "A decision is therefore authoritative to the degree that it could survive being explained. A leader who cannot give reasons that others could accept has power, but not legitimacy."
     ],
     "the answer needs a test of democratic legitimacy."
    ],
    [
     "Mandela",
     "leading by restraint",
     [
      "Nelson Mandela is the working example. As President he kept many of his predecessors’ officials, formed a Government of National Unity and served a single term.",
      "Mandela led by showing restraint where his mandate allowed domination. His authority grew because his opponents could see that he would not use it against them."
     ],
     "the question needs an example of inclusive leadership after conflict."
    ],
    [
     "Tocqueville",
     "the danger of soft despotism",
     [
      "Alexis de Tocqueville completed the picture from the other side. He warned that democracy can produce a soft despotism. A benevolent power provides for citizens while gradually relieving them of the trouble of thinking for themselves.",
      "The warning applies to leaders who follow the people only to manage them. A leader who makes citizens dependent has weakened the very consent on which democratic authority rests."
     ],
     "the answer needs to warn against paternalism or dependence in democratic leadership."
    ],
    [
     "Nehru",
     "explaining decisions across a federation",
     [
      "Jawaharlal Nehru wrote fortnightly letters to the chief ministers of the states for most of his sixteen years as Prime Minister. The letters were not formal consultation and carried no legal authority.",
      "The letters built a shared understanding of why decisions were being taken, across a federation that could easily have fragmented. Nehru’s practice shows leadership as continuous explanation."
     ],
     "the question concerns communication, federalism or building shared understanding."
    ]
   ],
   "examples": [
    [
     "Coalition politics and aggregated consent",
     [
      "A coalition leader cannot simply instruct. Agreement must be assembled before every significant decision, because any partner can withdraw and end the government. India’s coalition decades are therefore a natural test of what listening does to policy.",
      "The output was slower and often less coherent. The output was also more consultative, since a proposal had to satisfy partners with different regional bases before it reached Parliament. One reading sees paralysis and small parties holding disproportionate leverage. Another sees a form of federal consent that single-party majorities do not need and therefore do not seek. Both readings are defensible, and an answer should choose deliberately."
     ],
     "Does the need for consent improve or paralyse decisions? Weigh consultation against coherence and speed."
    ],
    [
     "Panchayati Raj and devolved authority",
     [
      "The 73rd and 74th Amendments, in force from 1993, gave panchayats and municipalities constitutional status, elections every five years, and reservation for women, Scheduled Castes and Scheduled Tribes. The Eleventh Schedule lists 29 subjects that states may devolve to panchayats.",
      "The test of devolution is the three Fs: functions, funds and functionaries. Elections happen reliably, which is a real achievement. Devolution of funds and staff is uneven and largely at state discretion. The gram sabha is the only body in Indian government where citizens decide directly, and its powers are real chiefly where a state has chosen to make them so."
     ],
     "Does local leadership have real authority? Check functions, funds and functionaries."
    ],
    [
     "Populism and the dismantling of institutions",
     [
      "The populist claim has a distinctive structure. The claim is not that the leader represents a majority, which is ordinary democratic politics. The claim is that the leader embodies the people directly, so anything standing between them is an obstruction.",
      "Courts, a professional press, the permanent civil service, opposition parties and independent regulators then appear as elite interference. The sign is institutional posture rather than policy. Ask whether the leader argues that an institution decided wrongly, which is normal politics, or that it has no business deciding at all, which dismantles democracy."
     ],
     "Does the leader dispute an institution’s decision or its right to decide? Separate disagreement from dismantling."
    ],
    [
     "Civil service neutrality and honest advice",
     [
      "Civil service neutrality is often misunderstood as having no view. Its actual content is narrower and harder. The officer must give honest advice, including advice the minister does not want, record it, and then implement the lawful decision faithfully.",
      "Both halves are duties. An officer who suppresses an objection to stay in favour has failed, and so has an officer who obstructs a lawful decision. The incentives run one way, because contrary advice is remembered and transfers are discretionary. Security of tenure and a documented file are therefore the conditions of honest advice, not bureaucratic comforts."
     ],
     "Can advisers disagree with leaders safely? Look for recorded advice and protection from arbitrary transfer."
    ],
    [
     "Crisis leadership and legitimacy recovered afterwards",
     [
      "Some decisions cannot wait for consent: an epidemic, a cyclone landfall or a run on a bank. Crisis leadership is the hardest case, because the procedures that produce legitimacy are exactly what the situation does not allow.",
      "The resolution is that legitimacy is recovered afterwards rather than abandoned. Three conditions make recovery possible. The decision is taken under a defined legal power, it carries an expiry date, and its reasoning is disclosed once the emergency passes. Measures that meet none of these conditions may still be correct, but nobody can establish that they were."
     ],
     "How does a leader keep legitimacy when there is no time to consult? Look for legal basis, time limits and later disclosure."
    ]
   ],
   "topics": [
    [
     "2026B4",
     [
      "The statement seems to reverse the usual idea of leadership. Yet in a democracy, a leader’s authority does come from those who follow. Barnard showed that authority is conferred by acceptance: an order works only if people accept it. Habermas held that decisions are legitimate only if they could survive explanation to those affected. Gandhi’s leadership read the public mood and gave it form, and Nehru explained his decisions in regular letters to chief ministers.",
      "Following the followers does not mean obeying every mood. A leader who only follows polls is a weathervane, and a populist who claims to embody the people may dismantle the institutions through which they speak. Gandhi suspended the Non-Cooperation Movement after Chauri Chaura, against the wishes of many followers, because the movement had broken its discipline. Mandela restrained his supporters’ desire for retribution. Both followed their people’s deeper purpose rather than their immediate demand.",
      "A good leader therefore follows the followers in two senses. The leader takes direction from their consent and their real interests, and keeps listening through institutions such as panchayats, a neutral civil service and a free press. The leader also supplies judgment, explains it, and accepts correction. Tocqueville warned that a leader who provides everything may make citizens dependent. The best leader follows the people towards their own capacity to govern themselves."
     ]
    ]
   ],
   "intro": [
    "Leadership is often imagined as command: the leader decides and others follow. In a democracy, the relationship is more complicated. A leader’s authority comes from the consent of those led, yet a leader who only echoes the crowd provides no direction. The question is how a leader can follow the followers without becoming a weathervane, and how authority is earned, kept and lost."
   ],
   "claim": "Good democratic leadership rests on consent but supplies judgment. Followers authorise the direction, and the leader gives it a disciplined form, explains it, and withdraws when it goes wrong. Authority is conferred by acceptance, not by position, and it lasts only as long as decisions can survive being explained. A leader who supplies no judgment has not followed the people anywhere, and a leader who ignores them has become a ruler.",
   "problem": [
    "Two failures of leadership are common. The first is the leader who follows polls and moods, promising whatever is popular and avoiding every difficult choice. The second is the leader who claims to embody the people while dismantling the institutions through which they speak: courts, the press, the civil service and the opposition. Both claim to serve the people, and both betray them.",
    "Democratic institutions add further complexity. Coalition leaders must assemble agreement before every decision. Civil servants must advise honestly and then implement lawful decisions they may dislike. In a crisis, there may be no time to consult at all. The challenge is to describe a leadership that listens without surrendering judgment, and that acts decisively without losing legitimacy."
   ],
   "distinction": [
    "A useful distinction",
    "A weathervane follows the crowd and supplies no judgment. A ruler ignores the crowd and supplies only will. A democratic leader draws authority from consent and supplies judgment within it, and explains the judgment so that consent can be renewed."
   ],
   "thinkersTitle": "Six thinkers, six tests of leadership",
   "together": [
    "Putting the six together",
    "Gandhi reads and disciplines public mood. Barnard shows that authority is conferred by acceptance. Habermas tests decisions by whether they survive explanation. Mandela leads through restraint. Tocqueville warns against making citizens dependent. Nehru shows leadership as continuous explanation. Together they explain how a good leader follows the followers without surrendering judgment."
   ],
   "models": [
    [
     "Authority is conferred by acceptance.",
     "Barnard showed that an instruction is authoritative only if those who receive it accept it. Trust widens the zone of acceptance, and arbitrary orders narrow it."
    ],
    [
     "Legitimacy survives explanation.",
     "Habermas held that a decision is legitimate if those affected could accept it after free discussion. A leader who cannot give acceptable reasons has power without legitimacy."
    ],
    [
     "Following is not obeying.",
     "Gandhi suspended the Non-Cooperation Movement after Chauri Chaura against the wishes of many followers. A good leader follows the people’s deeper purpose, not every passing demand."
    ],
    [
     "Populism dismantles the channels of consent.",
     "A leader who claims to embody the people treats courts, the press and the opposition as obstacles. Disputing an institution’s decision is politics. Denying its right to decide is dismantling."
    ],
    [
     "Crisis legitimacy is recovered afterwards.",
     "In an emergency, decisions must be taken under legal powers, with expiry dates and later disclosure. Legal basis, expiry and disclosure let citizens judge whether the decisions were right."
    ]
   ],
   "steps": [
    [
     "Define democratic authority.",
     "Explain that authority rests on consent and acceptance."
    ],
    [
     "Distinguish the three types.",
     "Separate the weathervane, the ruler and the democratic leader."
    ],
    [
     "Use thinkers.",
     "Bring in Barnard, Habermas and Gandhi."
    ],
    [
     "Give Indian institutional examples.",
     "Discuss coalitions, panchayats and civil service neutrality."
    ],
    [
     "Warn against distortions.",
     "Discuss populism and soft despotism."
    ],
    [
     "Address crisis leadership.",
     "Show how legitimacy is recovered after emergencies."
    ],
    [
     "Conclude with judgment and consent.",
     "Argue that good leaders listen, explain and supply judgment."
    ]
   ],
   "formula": "Draw authority from consent, supply judgment within it, and explain every decision so that consent can be renewed. Protect the institutions through which people speak, and in a crisis act lawfully, for a limited time, and give reasons afterwards."
  },
  {
   "thinkers": [
    [
     "Mill",
     "silencing robs everyone",
     [
      "John Stuart Mill’s defence of free expression is the foundation, and it is an argument about error rather than rights. Silencing an opinion robs everyone. If the opinion is right, we lose the correction. If it is wrong, we lose the clearer grasp of truth that comes from defending against it.",
      "On this reasoning, a biased press is not merely unpleasant. A biased press is dangerous, because it removes the mechanism by which a society discovers its own mistakes."
     ],
     "the answer needs a principled defence of free and plural media."
    ],
    [
     "Orwell",
     "the corruption of language",
     [
      "George Orwell described what replaces an honest press. His concern was not censorship alone but the corruption of language. Euphemism makes lying respectable, and a vocabulary can be built that prevents a thought from forming.",
      "His observation that whoever controls the past controls the future applies directly to an information system in which the record is continuously revised and the archive is privately owned."
     ],
     "the question concerns propaganda, euphemism or the manipulation of public memory."
    ],
    [
     "Habermas",
     "the decay of the public sphere",
     [
      "Jürgen Habermas gave the institutional diagnosis. The public sphere emerged as a space where private people reasoned together about common affairs.",
      "The public sphere decays when communication becomes a managed display of opinion produced for consumption rather than an exchange of arguments. Television debates designed for conflict are a modern example."
     ],
     "the answer needs to explain how media change from a forum of reasoning to a spectacle."
    ],
    [
     "Ambedkar",
     "hero-worship and judgment",
     [
      "Ambedkar warned the Constituent Assembly in 1949 that hero-worship in politics is a sure road to degradation and eventual dictatorship.",
      "A media environment organised around a personality has no remaining capacity to evaluate a policy. Coverage that celebrates a leader cannot ask whether the leader’s decisions worked."
     ],
     "the question concerns personality politics, media and accountability."
    ],
    [
     "Tagore",
     "the critic’s voice must circulate",
     [
      "Tagore insisted that a society must be able to hear its critics. He returned his knighthood after the Jallianwala Bagh massacre in a public letter, and the act mattered because the letter could be printed.",
      "A dissent that cannot circulate is a private feeling rather than a political fact. Nelson Mandela made the same point from office, defending a press that attacked his own government. A democracy without a critical press is a contradiction."
     ],
     "the answer needs an example of the value of dissent reaching the public."
    ]
   ],
   "examples": [
    [
     "Ownership, advertising and cross-holdings",
     [
      "Editorial independence depends on the revenue model. Indian outlets rely heavily on advertising rather than subscriptions, and governments at central and state level are among the largest advertisers. The dependency works without any instruction being issued.",
      "Cross-holdings add to the problem. Where a media group belongs to a conglomerate with interests in regulated sectors, coverage of the regulator affects the parent company. The useful question is not who is biased but who can afford to lose a particular advertiser. The answer predicts coverage better than any statement of editorial policy."
     ],
     "Who pays for the news, and what can the outlet afford to report? Look at advertising, ownership and cross-holdings."
    ],
    [
     "Ratings and the economics of heat",
     [
      "A channel funded by advertising sells audience attention, and ratings set the price. The operative question becomes what holds viewers through the break, not what they need to know. Conflict formats deliver attention efficiently: a panel assembled for disagreement, a topic chosen for outrage and a presenter whose job is escalation.",
      "The result is a market failure, not a moral failing of journalists. Careful reporting is expensive, slow and less watched, while studio argument is cheap and rates well. Appeals to responsibility will not survive the revenue model. Serious proposals concern ownership disclosure, ratings methods and funding for public-interest journalism."
     ],
     "What does the business model reward? Separate individual responsibility from market incentives."
    ],
    [
     "Who decides what is false",
     [
      "The 2023 amendment to the IT Rules allowed the government to create a fact-check unit. Its finding that content about the government was false or misleading would have required platforms to act, or lose their legal protection. In Kunal Kamra v Union of India, the Bombay High Court was split, and in September 2024 the deciding judge held the rule unconstitutional.",
      "The objection was not that fact-checking is worthless. The objection was that the government was made the sole judge of the truth of statements about itself, with no appeal. Misinformation is real, but a remedy that makes the interested party the judge is not a remedy."
     ],
     "Who should decide what is false? Check whether the judge has an interest in the answer."
    ],
    [
     "Internet shutdowns",
     [
      "India recorded 84 internet shutdowns in 2024, according to Access Now, the highest of any democracy and second in the world. Manipur accounted for 21, and Haryana and Jammu and Kashmir for 12 each. In Anuradha Bhasin v Union of India in 2020, the Supreme Court held that indefinite suspension is impermissible, and that orders must be reasoned, proportionate, reviewed and published.",
      "The gap between the ruling and practice is the problem. Orders often go unpublished, which makes the legal remedy unusable, because a citizen cannot challenge an order they cannot see. A safeguard that depends on disclosure fails silently when disclosure does not happen."
     ],
     "Can citizens challenge a restriction on information? Look at whether orders are published and time-limited."
    ],
    [
     "Vernacular and local reporting",
     [
      "Much of India’s most important journalism is not in English and not national. Vernacular newspapers carry district reporting that national outlets have largely abandoned. Community radio works at a scale where the audience knows the broadcaster. Digital outlets funded by subscriptions have grown because subscriptions remove the dependency that advertising creates.",
      "The danger for local reporters is different. A district reporter is often poorly paid, working on a stringer contract without institutional protection, and is physically reachable by anyone displeased. National coverage is shaped by revenue. Local coverage is shaped by proximity, which is more dangerous for the individual reporter."
     ],
     "Where does independent reporting survive, and who protects it? Consider revenue models and the safety of local journalists."
    ]
   ],
   "topics": [
    [
     "2019B3",
     [
      "Democracy depends on citizens who know what is happening and can hear competing arguments. Elections aggregate preferences, and courts settle disputes, but neither tells citizens what their government is doing. The media perform that function. Mill argued that silencing any view robs everyone of the chance to correct error. A biased media system removes that chance and leaves a democracy unable to see its own mistakes.",
      "In India, bias is mostly structural. Dependence on advertising, including government advertising, cross-holdings with regulated businesses and ratings incentives shape coverage without any order being issued. Habermas described how the public sphere decays into a managed spectacle, and television debates built for outrage fit the description. Ambedkar warned that hero-worship degrades politics, and media built around a personality cannot evaluate policy. Internet shutdowns and proposals to let the government declare what is false add legal pressures.",
      "The threat is real, but the response must be careful. Giving the state power to decide what is true, as the Kunal Kamra judgment recognised, can worsen the problem. Better remedies include disclosure of ownership, reform of ratings, support for subscription and public-interest journalism, protection for local reporters and published, time-limited shutdown orders. Tagore’s letter after Jallianwala Bagh mattered because it could be printed. A democracy stays healthy when criticism can circulate."
     ]
    ]
   ],
   "intro": [
    "Citizens cannot see most of what their government does. They rely on newspapers, television, radio and digital platforms to learn what is happening and to hear arguments about it. When the media inform accurately and allow disagreement, democracy can correct its mistakes. When the media become biased or captured, citizens vote, protest and judge on a distorted picture. The question is why biased media threaten democracy, and what makes media biased."
   ],
   "claim": "A free and plural media is democracy’s nervous system: it carries information and criticism that no other institution supplies. Bias becomes a threat not because it is unusual but because a public that hears only one account cannot correct anything, including that account. Bias today is mostly structural, produced by revenue models, ownership and incentives rather than by orders. Remedies must address those structures while protecting independent reporting.",
   "problem": [
    "Every outlet has a perspective, and some bias is unavoidable. The danger arises when a media system as a whole leans one way, excludes inconvenient facts or replaces reporting with managed spectacle. Elections then aggregate preferences formed on partial information, and courts cannot supply what citizens were never told.",
    "The causes are often invisible. Advertising revenue, government advertising budgets, cross-holdings with other businesses, ratings incentives and legal pressures shape coverage without anyone issuing an instruction. The remedies also carry risks. When a government claims the power to declare what is false, the cure can be worse than the disease. The challenge is to strengthen independent reporting without handing control of truth to the powerful."
   ],
   "distinction": [
    "A useful distinction",
    "Perspective is the angle every account takes and can be answered by other accounts. Structural bias is a system in which some accounts cannot be afforded, printed or heard. Democracy can live with the first. The second removes its capacity to correct itself."
   ],
   "thinkersTitle": "Five thinkers, five tests of an informed public",
   "together": [
    "Putting the five together",
    "Mill shows that silencing any view harms everyone. Orwell shows how language and memory are corrupted. Habermas explains how the public sphere decays into spectacle. Ambedkar warns against media built around personality. Tagore shows that dissent matters only if it can circulate. Together they explain why biased media threaten democracy."
   ],
   "models": [
    [
     "A free press lets democracy correct itself.",
     "Mill argued that silencing any opinion robs everyone of correction or clarity. A biased media system removes the mechanism by which a society discovers its errors."
    ],
    [
     "Bias is often structural.",
     "Dependence on advertising, including government advertising, and cross-holdings with regulated businesses shape coverage without any instruction. The question is who can afford to lose which advertiser."
    ],
    [
     "Spectacle replaces reasoning.",
     "Habermas described the public sphere decaying into a managed display of opinion. Ratings reward conflict formats over careful reporting."
    ],
    [
     "The interested party cannot judge truth.",
     "In Kunal Kamra in 2024, the Bombay High Court struck down a rule that let the government decide what was false about itself. Remedies for misinformation must not hand truth to the powerful."
    ],
    [
     "Dissent must circulate.",
     "Tagore’s letter returning his knighthood mattered because it could be printed. A criticism that cannot reach the public is a private feeling, not a political fact."
    ]
   ],
   "steps": [
    [
     "Explain the media’s democratic function.",
     "Show why no other institution tells citizens what is happening."
    ],
    [
     "Define bias carefully.",
     "Separate perspective from structural bias."
    ],
    [
     "Identify structural causes.",
     "Discuss advertising, ownership and ratings."
    ],
    [
     "Examine legal pressures.",
     "Use the IT Rules case and internet shutdowns."
    ],
    [
     "Show the decay of debate.",
     "Use Habermas and Orwell."
    ],
    [
     "Point to resilience.",
     "Discuss vernacular, local and subscription-funded journalism."
    ],
    [
     "Conclude with careful remedies.",
     "Recommend structural reforms that do not give the state control of truth."
    ]
   ],
   "formula": "Protect a plural media by fixing the structures that produce bias: revenue, ownership, ratings and legal pressure. Never let the interested party decide what is true, and make sure criticism can circulate, because democracy corrects itself only through what its citizens can see and hear."
  },
  {
   "thinkers": [
    [
     "Tagore",
     "against the nation as machine",
     [
      "Tagore’s objection to nationalism is the sharpest Indian starting point, and it is often misread. He was not indifferent to freedom. He opposed the nation understood as an organised political machine that demands uniformity.",
      "Tagore argued that India’s genius had been the accommodation of difference rather than its resolution. On his account, plural identity is not a problem the state must manage. Plural identity is the material the society is made of."
     ],
     "the answer needs a critique of uniform nationalism or a defence of cultural plurality."
    ],
    [
     "Nehru",
     "the palimpsest and secular neutrality",
     [
      "Nehru gave the idea a historical form with his image of India as a palimpsest, in which layer is written upon layer and none wholly erases what came before.",
      "His insistence that secularism means state neutrality rather than irreligion followed from the same idea. A state that belongs to no single faith can belong to all."
     ],
     "the question concerns secularism, composite culture or Indian history."
    ],
    [
     "Azad",
     "composite nationhood from within faith",
     [
      "Maulana Abul Kalam Azad argued from inside a religious tradition. He held that composite nationhood was a principled position, not merely a political convenience.",
      "His opposition to partition rested on the conviction that Hindus and Muslims shared a common Indian inheritance. Azad shows that pluralism can be defended from within religion, not only against it."
     ],
     "the answer needs an Indian Muslim voice for composite nationalism."
    ],
    [
     "Ambedkar",
     "a society still to be made",
     [
      "Ambedkar provides the necessary corrective, and an answer that leaves him out is sentimental. He doubted that Indian society was a society at all, calling it a collection of castes without a shared sense of kinship.",
      "He located unity in constitutional guarantees rather than cultural inheritance. The cultural weave contains hierarchy, and it is the constitutional layer that gives the person at the bottom a claim."
     ],
     "the question needs to acknowledge caste hierarchy within plural culture, or the role of the Constitution in unity."
    ],
    [
     "Gandhi",
     "coexistence performed daily",
     [
      "Gandhi supplied the everyday mechanism that theory needs. His prayer meetings included readings from several religious traditions. His fasts against communal violence, including in Calcutta in 1947, treated coexistence as something performed continuously rather than declared once.",
      "For Gandhi, unity was a practice, renewed by each community’s conduct towards the other."
     ],
     "the answer needs an example of practical work for communal harmony."
    ],
    [
     "Aurobindo",
     "unity through variety",
     [
      "Sri Aurobindo took the longer view. He argued that Indian civilisation typically absorbed what arrived rather than eliminating it, and that its unity was expressed through variety rather than in spite of it.",
      "The claim is generous about the past. The claim is not a description of how the past treated everyone living inside it, which is why Ambedkar’s corrective is needed alongside it."
     ],
     "the question concerns civilisational continuity or unity in diversity."
    ]
   ],
   "examples": [
    [
     "Federalism, linguistic states and the Sixth Schedule",
     [
      "India’s answer to diversity was to build accommodation into its institutions. Linguistic reorganisation from 1956 redrew states so that a language community would not have to fight for standing where it was permanently outnumbered.",
      "The Sixth Schedule went further for tribal areas of the north-east. The Schedule created autonomous district councils with authority over land, forests, inheritance and customary law, on the reasoning that some communities need a protected sphere, not only representation. Unity was pursued by conceding difference institutionally rather than by requiring assimilation."
     ],
     "How can institutions accommodate difference? Look at federal design and autonomy for distinct communities."
    ],
    [
     "Minority rights under Articles 29 and 30",
     [
      "Article 29 protects the right of any section of citizens with a distinct language, script or culture to conserve it. Article 30 gives religious and linguistic minorities the right to establish and administer educational institutions.",
      "The design logic is that a majority can preserve its culture through ordinary democratic means, while a minority cannot. In T. M. A. Pai Foundation v State of Karnataka in 2002, an eleven-judge bench held that regulation for excellence is allowed, while regulation that destroys an institution’s character is not. The line has been litigated ever since."
     ],
     "How should the state protect minority cultures? Balance autonomy with public standards."
    ],
    [
     "The three-language formula",
     [
      "The three-language formula, framed in the 1960s, asked each region to teach three languages so that the burden of learning across the linguistic divide would be shared. In practice it was one-sided. Hindi-speaking states rarely took up a southern language, while non-Hindi states were asked to add Hindi to their own language and English.",
      "Tamil Nadu’s refusal, dating back to agitations in the 1930s and 1960s, has rested on that asymmetry. NEP 2020 keeps a three-language structure while stating that no language will be imposed. The unresolved question is not how many languages are taught, but who must learn whose."
     ],
     "Is the policy shared or imposed? Ask who bears the burden of learning."
    ],
    [
     "Internal migration and regional identity",
     [
      "India has hundreds of millions of internal migrants, and their movement produces friction the Constitution anticipated. Article 19 guarantees the right to move and reside anywhere in India. Regional movements have periodically demanded job preference for local people.",
      "Migration lets workers from poorer regions reach higher wages elsewhere, and it also changes a region’s linguistic and cultural composition without anyone deciding it should. Domicile-based reservation in private jobs has repeatedly run into constitutional difficulty, because a right to move without a right to work where one moves is not a real right to move."
     ],
     "How can regional identity coexist with national mobility? Weigh local claims against the right to move."
    ],
    [
     "SAARC and ASEAN: culture is not enough",
     [
      "South Asia shares language families, cuisine, religions and history more deeply than Southeast Asia does, yet it is one of the least economically integrated regions in the world. Trade within the region is about five per cent of members’ total trade, against roughly a quarter within ASEAN.",
      "SAARC has not held a summit since 2014. The 2016 summit collapsed after India withdrew following the Uri attack. SAARC contains one member larger than all the others combined, and its charter requires unanimity. ASEAN has no dominant member and proceeds by gradual consensus. Cultural affinity does not substitute for a workable decision rule."
     ],
     "Does shared culture produce cooperation? Compare cultural ties with institutional design."
    ]
   ],
   "topics": [
    [
     "2019B1",
     [
      "South Asian societies existed long before modern states. Communities, languages, religions and trade networks wove a social fabric across shifting political borders. Tagore argued that India’s genius lay in accommodating difference, and Nehru described India as a palimpsest of layers that never wholly erased one another. Azad defended a composite nationhood grounded in shared inheritance. The statement captures this truth: people’s everyday loyalties are often to language, faith, region and community before the state.",
      "The plural weave is also why attempts at uniformity have caused conflict. Language agitations and ethnic struggles in the region show that a state imposing one identity weakens itself. India’s constitutional answer was to accommodate difference through linguistic states, the Sixth Schedule and minority rights. Gandhi’s prayer meetings and fasts showed coexistence as a daily practice.",
      "The statement must be qualified. The plural cultures of South Asia contain hierarchy, as Ambedkar insisted, and a woven society can still leave some at the bottom without rights. Constitutional guarantees give them a claim that culture alone does not. Shared culture also does not guarantee cooperation, as SAARC’s weakness shows. South Asian societies are woven around plural cultures, but a just and stable weave needs the state to protect every thread."
     ]
    ]
   ],
   "intro": [
    "South Asia is one of the most diverse regions in the world. Languages, religions, castes, tribes and regional cultures overlap and interweave. States in the region have often tried to create unity through a single language, religion or identity, sometimes with violent results. The question is what actually holds such societies together, and whether the state or the plural culture is the stronger thread."
   ],
   "claim": "South Asian societies are held together more by plural cultures and overlapping identities than by the state alone. The weave of shared practices, exchange and coexistence is durable because it does not depend on one authority. Yet the weave also contains hierarchy, and it is the constitutional layer, with its rights and institutions, that gives the person at the bottom a claim. Durable unity needs both the cultural weave and constitutional guarantees.",
   "problem": [
    "Modern states often seek unity through uniformity. A single national language, a dominant religion or a standard culture can seem the quickest way to build a nation. In diverse societies, such projects provoke resistance and conflict, as language agitations and ethnic struggles in the region have shown.",
    "Yet celebrating plurality can also mislead. Cultural traditions contain caste hierarchy, gender inequality and exclusion. A society woven around plural cultures may still leave many at the bottom without rights. The challenge is to protect diversity while ensuring that plural culture does not become an excuse for inequality, and to design institutions that accommodate difference without dividing the nation."
   ],
   "distinction": [
    "A useful distinction",
    "Unity through uniformity requires everyone to share one identity. Unity through accommodation lets many identities coexist within shared institutions. India’s constitutional settlement chose the second, and it is better described as an arrangement between communities than as a single national identity."
   ],
   "thinkersTitle": "Six thinkers, six tests of plural unity",
   "together": [
    "Putting the six together",
    "Tagore opposes the uniform nation. Nehru describes layered history and secular neutrality. Azad defends composite nationhood from within faith. Ambedkar warns that plural culture contains hierarchy and grounds unity in the Constitution. Gandhi shows coexistence as daily practice. Aurobindo sees unity expressed through variety. Together they explain why plural culture holds society together, and why constitutional rights must protect those at the bottom."
   ],
   "models": [
    [
     "Plural culture is the fabric of society.",
     "Tagore argued that India’s genius was the accommodation of difference. Plural identity is not a problem to be managed but the material of which the society is made."
    ],
    [
     "Accommodation, not uniformity.",
     "Linguistic states, the Sixth Schedule and minority rights built difference into India’s institutions. Unity was pursued by conceding difference rather than demanding assimilation."
    ],
    [
     "Culture contains hierarchy.",
     "Ambedkar called Indian society a collection of castes and located unity in constitutional guarantees. The cultural weave needs rights to protect those at the bottom."
    ],
    [
     "Coexistence must be practised.",
     "Gandhi’s prayer meetings and fasts against communal violence treated harmony as something performed daily, not declared once."
    ],
    [
     "Shared culture does not ensure cooperation.",
     "South Asia shares deep cultural ties yet trades far less within the region than ASEAN. Institutions and decision rules matter as much as affinity."
    ]
   ],
   "steps": [
    [
     "Describe the plural weave.",
     "Use Tagore, Nehru and Aurobindo."
    ],
    [
     "Contrast uniformity and accommodation.",
     "Explain India’s constitutional choice."
    ],
    [
     "Give institutional examples.",
     "Use linguistic states, the Sixth Schedule and Articles 29 and 30."
    ],
    [
     "Show contested areas.",
     "Discuss language policy and internal migration."
    ],
    [
     "Bring in the corrective.",
     "Use Ambedkar on hierarchy and constitutional guarantees."
    ],
    [
     "Look at the region.",
     "Use SAARC and ASEAN."
    ],
    [
     "Conclude with culture and constitution together.",
     "Argue that plural culture and constitutional rights sustain unity together."
    ]
   ],
   "formula": "Build unity by accommodating difference rather than demanding uniformity. Let the plural cultural weave hold society together, and let constitutional rights protect every person within it, especially those the weave has placed at the bottom."
  },
  {
   "thinkers": [
    [
     "Kautilya",
     "a doctrine for the weaker party",
     [
      "Kautilya’s Arthashastra was written for a state surrounded by stronger neighbours. His mandala theory arranges the world in circles of interest. The immediate neighbour is a natural rival, and the neighbour’s neighbour is a natural ally.",
      "His sixfold policy of peace, war, neutrality, preparation, alliance and dual policy is chosen according to relative strength, not sentiment. His fourfold means put conciliation and inducement before division and force, because force is the most expensive and least reliable instrument. The doctrine still reads as contemporary because it was written for the weaker party."
     ],
     "the answer needs an Indian framework for foreign policy and strategic choice."
    ],
    [
     "Nehru",
     "non-alignment and its limits",
     [
      "Nehru applied Kautilya’s logic to a world divided into two blocs. Non-alignment refused bloc membership in order to keep the freedom to decide each issue on its merits.",
      "The war with China in 1962 is the honest evidence that autonomy without capability is a posture rather than a policy. Nehru’s legacy is the goal of strategic autonomy. His lesson is that the goal needs military and economic strength."
     ],
     "the question concerns non-alignment, strategic autonomy or the lessons of 1962."
    ],
    [
     "Patel",
     "negotiation backed by force",
     [
      "Sardar Patel supplied the counterweight. The integration of the princely states combined negotiation with the clear availability of force.",
      "Hyderabad in 1948 shows what the combination achieved that neither element could have achieved alone. Patel’s approach shows that diplomacy works best when the other side knows the alternative."
     ],
     "the answer needs an example of combining diplomacy with credible strength."
    ],
    [
     "Machiavelli",
     "neutrality without leverage",
     [
      "Niccolò Machiavelli warned weaker states directly. A prince who allows two stronger neighbours to fight over his ground will find that the winner’s victory is his own defeat.",
      "Neutrality without leverage buys nothing. A weak state that stays out of a conflict may still be crushed by its result."
     ],
     "the question concerns small states caught between great powers."
    ],
    [
     "Gandhi",
     "what a nation is willing to endure",
     [
      "Gandhi’s contribution should not be dismissed as naive. He argued that a nation’s strength lies in what it is willing to endure rather than in what it can inflict. A settlement imposed by force must be maintained by force indefinitely.",
      "As a complete strategy, the view has limits. As an explanation of why occupations end and why borders stay disputed for decades, it is uncomfortably accurate."
     ],
     "the answer needs to explain why imposed settlements fail, or the moral dimension of conflict."
    ]
   ],
   "examples": [
    [
     "Strategic autonomy and issue-based alignment",
     [
      "India’s position is best described as issue-based alignment rather than neutrality. India participates in the Quad with the United States, Japan and Australia, while continuing defence and energy relations with Russia. India declines to join blocs that would require choosing.",
      "The doctrine continues non-alignment’s refusal to subordinate national judgment to an alliance. The cost must be stated. Autonomy of this kind is available only to a state large enough that partners tolerate ambiguity. Autonomy also requires constant renegotiation and gives up the security guarantees an alliance provides."
     ],
     "Can a state keep its options open without alliances? Weigh flexibility against the absence of guarantees."
    ],
    [
     "India’s border disputes",
     [
      "Border disputes persist because settlement requires a government to formally concede something, which is costly at home even when the practical arrangement is stable. Along the Line of Actual Control with China, the boundary is not jointly mapped, so patrols operate on different perceptions, and infrastructure on either side changes facts on the ground.",
      "Sir Creek, with Pakistan, is a tidal channel where the boundary decides a maritime zone far beyond the creek. Kachchatheevu, ceded to Sri Lanka by agreement in 1974, still produces friction over fishing access. The three disputes are sustained less by their substance than by the political cost of closing them."
     ],
     "Why do border disputes last? Separate the substance of the dispute from the political cost of settlement."
    ],
    [
     "Neighbourhood First and the view from smaller states",
     [
      "Neighbourhood First rests on a sound premise: a stable and prosperous neighbourhood serves India better than a weak one. The policy keeps meeting the same difficulty. India’s size means that its help and its interests are read unevenly. What Delhi sees as support, a smaller neighbour may see as management.",
      "Relations with Nepal, the Maldives and Sri Lanka have cycled through cooperation and resentment, often with an election as the trigger. Alternatives now exist, so a neighbour dissatisfied with India’s terms can seek Chinese finance. The policy question is the speed and conditions of delivery, not the intent."
     ],
     "How does a large neighbour avoid being the elephant? Look at delivery, respect and the alternatives available to smaller states."
    ],
    [
     "Supply chains as modern asymmetry",
     [
      "Formal sovereignty coexists with practical dependence wherever a state cannot make, repair or replace what its economy runs on. Semiconductors are the clearest case. A handful of firms and countries control advanced chip manufacturing and the equipment needed for it.",
      "The India Semiconductor Mission, approved in December 2021, targets assembly, testing and a first commercial fabrication plant at a mature node, which is a strategy of supply security rather than frontier leadership. The same point applies to pharmaceutical ingredients, rare earths and specialised machinery. Leverage now lies less in territory than in position within production chains."
     ],
     "Where does modern dependence lie? Identify the goods a country cannot make or replace."
    ],
    [
     "Small states that played asymmetry well",
     [
      "Singapore and Vietnam are standing examples of small states that turned position into leverage. Singapore made itself indispensable: a port and financial centre whose functioning benefits everyone, backed by credible defence spending and a diplomacy that takes positions on rules rather than sides.",
      "Vietnam diversified. Vietnam normalised relations with the United States while keeping ties with China and Russia, and made itself valuable to supply chains seeking alternatives. The common element is not neutrality. Both built specific capabilities, so partners had positive reasons to include them, and both avoided dependence on any single relationship."
     ],
     "How can a small state avoid being trampled? Show how usefulness and diversification create leverage."
    ]
   ],
   "topics": [
    [
     "2026A4",
     [
      "The proverb describes a hard truth of international politics. When great powers compete, smaller states and ordinary people pay the cost: trade disrupted, neighbours pressured to choose sides and conflicts fought on others’ ground. Machiavelli warned that a weak state which lets two stronger neighbours fight over it will find that the winner’s victory is its own defeat. Neutrality without leverage buys nothing.",
      "Yet a state is not grass. Kautilya’s Arthashastra was written for a state surrounded by stronger neighbours, and its sixfold policy gives the weaker party choices. Singapore made itself indispensable, and Vietnam diversified its partnerships. India’s issue-based alignment, working with the Quad while keeping ties with Russia, is an attempt to avoid being trampled by any single rivalry. Nehru’s experience in 1962 shows that such autonomy needs capability behind it.",
      "The proverb also carries a lesson for India as a large power in its own neighbourhood. To Nepal, Sri Lanka and the Maldives, India can appear as the elephant. Gandhi’s insight that imposed settlements must be maintained by force applies here too. The better course is to be the kind of large neighbour whose strength protects the grass rather than tramples it: reliable, respectful and quick to deliver."
     ]
    ],
    [
     "2018A4",
     [
      "India’s borders are among the most complex in the world. The Line of Actual Control with China has never been jointly mapped, so patrols operate on different perceptions, and infrastructure building changes facts on the ground. The boundary with Pakistan includes the Line of Control and disputes such as Sir Creek, where the land boundary decides a large maritime zone. Even settled arrangements, such as Kachchatheevu with Sri Lanka, produce friction over fishing.",
      "The difficulty is political as much as geographical. Settlement requires a government to concede something formally, which is costly at home even when the practical situation is stable. Gandhi’s insight that settlements imposed by force must be maintained by force explains why disputes last for decades. Kautilya’s advice to prefer conciliation and inducement before force applies directly to border management.",
      "Management therefore combines several tools. Capability, including border infrastructure and military preparedness, prevents unilateral change. Confidence-building measures and agreed patrol arrangements reduce the risk of clashes. Local livelihoods, such as fishing, need practical arrangements that do not wait for final settlement. Patel’s method of negotiation backed by strength remains relevant. Border management is complex because it must keep peace, protect territory and preserve options at once."
     ]
    ]
   ],
   "intro": [
    "When great powers compete, smaller states and ordinary people often bear the cost. Wars are fought on their territory, sanctions disrupt their trade and rivalries divide their neighbourhoods. India itself sits between powerful rivals and manages long, disputed borders. The question is how weaker states can protect themselves in a world of stronger ones, and why border disputes are so difficult to settle."
   ],
   "claim": "When two elephants fight, the grass is trampled, but a state is not grass: it has options. Weaker states can build capability, make themselves expensive to trample, become useful to many partners and keep more than one door open. Border disputes persist less because of their substance than because settlement requires a government to concede something publicly. Managing them requires strength, patience and stable arrangements that do not depend on final resolution.",
   "problem": [
    "Great power rivalry can impose costs on those who did not choose it. Supply chains are disrupted, neighbours are pressured to take sides, and conflicts spill over borders. Neutrality offers little protection without leverage, and alignment can bring dependence. Smaller states face a choice among bad options.",
    "India faces both sides of the problem. India is a large power to its smaller neighbours and a smaller power beside China. Its borders with China and Pakistan remain disputed, and its neighbourhood relations cycle between cooperation and resentment. The challenge is to protect national interests amid rivalry, to manage borders without war, and to treat smaller neighbours in ways that do not make India the elephant they fear."
   ],
   "distinction": [
    "A useful distinction",
    "A posture is a declared position, such as non-alignment or neutrality. A policy is a position backed by the capability to sustain it. Autonomy without capability is a posture, as 1962 showed."
   ],
   "thinkersTitle": "Five thinkers, five tests of statecraft",
   "together": [
    "Putting the five together",
    "Kautilya gives the weaker party a doctrine of choices. Nehru shows the value and limits of autonomy. Patel shows negotiation backed by strength. Machiavelli warns that neutrality without leverage fails. Gandhi explains why imposed settlements do not last. Together they show that a state caught between elephants has options, if it builds the capability to use them."
   ],
   "models": [
    [
     "A state is not grass.",
     "When great powers fight, the weak suffer, but states have options. Kautilya’s sixfold policy gives the weaker party a range of choices based on relative strength."
    ],
    [
     "Autonomy needs capability.",
     "Nehru’s non-alignment preserved freedom of choice, but 1962 showed that autonomy without military and economic strength is only a posture."
    ],
    [
     "Neutrality without leverage fails.",
     "Machiavelli warned that a weak state standing aside while stronger neighbours fight will lose whoever wins. Leverage must be built, not assumed."
    ],
    [
     "Borders persist because settlement is costly.",
     "The LAC, Sir Creek and Kachchatheevu disputes last because a government must concede something publicly. Stable practical arrangements can reduce conflict without final settlement."
    ],
    [
     "Usefulness creates leverage.",
     "Singapore and Vietnam made themselves valuable to many partners. Small states avoid being trampled by building capabilities others need and avoiding single dependence."
    ]
   ],
   "steps": [
    [
     "Describe the asymmetry.",
     "Explain the costs that great power rivalry imposes on others."
    ],
    [
     "Present the strategic options.",
     "Use Kautilya’s sixfold policy and fourfold means."
    ],
    [
     "Show the need for capability.",
     "Use Nehru and 1962, and Patel’s combination of negotiation and force."
    ],
    [
     "Give Indian examples.",
     "Discuss strategic autonomy, borders and Neighbourhood First."
    ],
    [
     "Include modern dependence.",
     "Discuss supply chains and semiconductors."
    ],
    [
     "Learn from small states.",
     "Use Singapore and Vietnam."
    ],
    [
     "Conclude with India’s dual role.",
     "Argue that India must resist being trampled and avoid trampling its neighbours."
    ]
   ],
   "formula": "Build capability, become useful to many partners and keep more than one door open, so that rivals find you expensive to trample. Manage borders with strength, patience and practical arrangements, and treat smaller neighbours as partners rather than grass."
  },
  {
   "thinkers": [
    [
     "Ambedkar",
     "constitutional morality must be cultivated",
     [
      "Ambedkar told the Constituent Assembly in November 1948 that constitutional morality is not a natural sentiment and has to be cultivated. He added that democracy in India was only a top-dressing on a soil that was essentially undemocratic.",
      "His three warnings in the final address of 25 November 1949 remain a checklist. Abandon the grammar of anarchy in favour of constitutional methods. Refuse hero-worship. Make political democracy a social democracy too, because political equality cannot survive deep social inequality for ever."
     ],
     "the answer needs the Indian foundation of constitutional morality."
    ],
    [
     "Montesquieu",
     "power checking power",
     [
      "Montesquieu supplied the mechanism. In The Spirit of the Laws in 1748, he argued that the separation of powers works not because each branch is virtuous but because power is arranged to check power.",
      "Liberty survives on structure rather than on the character of officeholders. Montesquieu explains why independence of appointments and fixed procedures matter."
     ],
     "the question concerns separation of powers, checks and balances or institutional design."
    ],
    [
     "Rousseau",
     "the general will",
     [
      "Jean-Jacques Rousseau named what structure cannot supply. The general will is not the sum of private interests. The general will is what citizens want when they think as members of a whole.",
      "No institution can manufacture that disposition if citizens do not hold it. Structure can check power, but it cannot create public spirit."
     ],
     "the answer needs to show the limits of institutional design without civic virtue."
    ],
    [
     "Tocqueville",
     "habits of the heart",
     [
      "Alexis de Tocqueville located the answer in what he called the habits of the heart. Associations, local self-government, a free press and jury service make up the daily practice of self-rule.",
      "Daily practice produces citizens rather than subjects. For Tocqueville, democracy lives in daily habits more than in its written charter."
     ],
     "the question concerns civic culture, participation or local democracy."
    ],
    [
     "Jayaprakash Narayan",
     "institutions reclaimed by citizens",
     [
      "Jayaprakash Narayan argued the same case in India. His call for total revolution in 1974, and his refusal of office, rested on the view that institutions not continuously reclaimed by citizens do not survive on paper alone.",
      "His movement against corruption and the Emergency showed citizens acting to defend constitutional democracy when institutions failed."
     ],
     "the answer needs an Indian example of citizen action to defend democracy."
    ],
    [
     "Mill",
     "the danger of dwarfing citizens",
     [
      "John Stuart Mill completed the account at the end of On Liberty. A state that dwarfs its citizens to make them more docile instruments will find that with small men no great thing can be accomplished.",
      "The machinery survives, and the capacity to use it does not. Constitutional morality is a habit that citizens hold on the document’s behalf, and no institution can supply it for them."
     ],
     "the question concerns the relation between citizen capacity and state power."
    ]
   ],
   "examples": [
    [
     "The Speaker and the anti-defection law",
     [
      "The Tenth Schedule makes the Speaker the authority who decides whether a member has defected. The Speaker is usually a member of the governing party. The design flaw is timing as well as partiality. No deadline was written in, so a Speaker who does not decide leaves defectors voting as members until the term ends.",
      "In Keisham Meghachandra Singh v Speaker, Manipur Legislative Assembly, in 2020, the Supreme Court said that petitions should ordinarily be decided within three months, and suggested that Parliament consider an independent tribunal. Neither step binds the discretion in question. A rule without a clock is a rule the holder can suspend by inaction."
     ],
     "Can the rule be defeated by delay? Look for deadlines and independent decision-makers."
    ],
    [
     "Appointments to independent bodies",
     [
      "Independence is decided at appointment more than by tenure clauses. In Anoop Baranwal v Union of India in March 2023, a Constitution Bench ruled on how Election Commissioners are appointed. Until Parliament legislated, a committee of the Prime Minister, the Leader of the Opposition and the Chief Justice of India would advise.",
      "Parliament then passed a law in 2023 that replaced the Chief Justice with a Union Minister nominated by the Prime Minister, giving the executive two of three votes. The same question arises for the Central Information Commission and the CBI. The test is whether the appointing body can produce an appointment the government does not want."
     ],
     "Can the appointing body choose someone the government would not? Examine who holds the majority on the selection committee."
    ],
    [
     "Ordinances and money bills",
     [
      "Two provisions designed for narrow purposes have become general routes. The ordinance power exists so that a government can act when Parliament is not sitting. Re-issuing ordinances repeatedly turns a temporary tool into a way of legislating without a vote.",
      "The money bill route exists so that the directly elected House controls taxation and spending. Certification as a money bill removes the Rajya Sabha’s power to amend. Where a bill with substantial non-financial content is certified as a money bill, a whole chamber is bypassed. The text is complied with while its purpose is defeated."
     ],
     "Is the power being used for its purpose? Compare the provision’s purpose with its use."
    ],
    [
     "Governors and cooperative federalism",
     [
      "The Governor is appointed by the Union, holds office at its pleasure and exercises functions within a state. The Constitution manages the resulting tension mainly by convention. Friction arises over how long assent to a bill may be withheld, when a bill is reserved for the President, who is invited to form a government, and when the assembly is summoned.",
      "The text says little about time limits, which is where discretion expands. Ambedkar expected the office to be largely ceremonial and restrained by convention. Where the state and Union governments are politically opposed, convention is exactly what erodes, and the disputes now reach the courts routinely."
     ],
     "What restrains an office when conventions weaken? Look for time limits and reasons."
    ],
    [
     "RTI and social audit as everyday constitutional morality",
     [
      "The everyday form of constitutional morality is whether an ordinary person can find out what was decided about them and why. The Right to Information Act of 2005 made access to information a legal claim rather than a favour. Its strength depends on the independence of the information commissions, which is why the 2019 amendment giving the central government control over their tenure and salaries mattered.",
      "Social audit under MGNREGA works on the same principle, requiring spending to be read out before the people it was meant for. Disclosure constrains power only where someone independent can compel it."
     ],
     "Can citizens find out what was decided and why? Check whether disclosure is enforceable by an independent body."
    ]
   ],
   "topics": [
    [
     "practice",
     [
      "A constitution is a set of rules, but rules do not enforce themselves. Ambedkar warned that constitutional morality is not a natural sentiment and must be cultivated. Montesquieu arranged power to check power. Yet even the best arrangement depends on conventions the text does not spell out: a Speaker deciding petitions promptly, a Governor giving assent without delay, a government using ordinances only when Parliament cannot meet.",
      "When habits weaken, the text can be observed while its purpose is defeated. Disqualification petitions can be left undecided, bills can be certified as money bills to bypass a chamber, and appointments can be controlled by the executive. Each step may be legal, and together they hollow out the checks the Constitution intended. Tocqueville located democracy in the habits of the heart, and Jayaprakash Narayan argued that citizens must continuously reclaim their institutions.",
      "Structure still matters. Deadlines, independent appointments and enforceable disclosure make habits easier to keep and failures easier to see. The Right to Information Act and social audits show how citizens can hold officials to account between elections. A constitution survives when its rules are clear and its citizens and officeholders share the habit of using power for the purposes it was given."
     ],
     "Constitutions survive on habits, not on paper."
    ],
    [
     "practice",
     [
      "Elections decide who holds power, but they do not decide how power is used between elections. Much of that depends on conventions: unwritten expectations that officeholders will act fairly, give reasons and respect other institutions. A Governor’s restraint, a Speaker’s neutrality and an executive’s respect for independent bodies are rarely enforceable in detail. They rely on habit and on public expectation.",
      "Conventions are fragile when political rivalry is intense. Where the Union and a state are opposed, Governors’ discretion over bills and summoning becomes contested. Where a party holds a majority, appointments to the Election Commission can be shaped by the executive. Rousseau warned that institutions cannot create public spirit, and Mill warned that a state which weakens its citizens loses the capacity to use its own machinery.",
      "The honesty of a republic between elections depends on three things. Rules must have clocks and independent enforcers, so that inaction cannot defeat them. Information must be available through RTI, social audit and a free press, so that citizens can notice when conventions are broken. Citizens must care enough to object. A republic stays honest when conventions are observed, and when their breach is seen and answered."
     ],
     "Between elections, a republic is only as honest as its conventions."
    ]
   ],
   "intro": [
    "A constitution sets out institutions and rules. Yet the written text cannot anticipate every situation, and many of its protections depend on how officeholders choose to behave. A Speaker can delay a decision, a Governor can sit on a bill, and a government can use emergency powers routinely. The question is what keeps a republic honest between elections, when the text is observed but its purpose may be defeated."
   ],
   "claim": "Constitutional morality is a habit, not a document. The separation of powers and written rules matter, but they depend on conventions that officeholders choose to observe and on citizens who notice when they stop. A rule without a clock can be suspended by inaction, an appointment controlled by the executive cannot produce independence, and a provision used beyond its purpose defeats the text while obeying it. Institutions survive only when citizens and officials cultivate the habits that make them work.",
   "problem": [
    "Democracies can decay without any formal breach of the constitution. Each step may be legal: an ordinance re-issued, a bill certified as a money bill, a disqualification petition left undecided, or an appointment made by a committee the government controls. Individually, each step can be defended. Together, they hollow out the checks the constitution was meant to provide.",
    "The remedy cannot be more text alone, because any rule can be evaded by someone determined to evade it. Nor can it be trust in the virtue of officeholders, since power tempts everyone. The challenge is to combine structure, which arranges power to check power, with a public culture that expects conventions to be observed and holds officeholders to them."
   ],
   "distinction": [
    "A useful distinction",
    "Constitutional form is the text: the rules, powers and procedures. Constitutional morality is the habit of using those powers for the purposes they were given. The form can be observed while the morality drains away."
   ],
   "thinkersTitle": "Six thinkers, six tests of constitutional morality",
   "together": [
    "Putting the six together",
    "Ambedkar shows that constitutional morality must be cultivated. Montesquieu arranges power to check power. Rousseau and Tocqueville show that structure needs civic spirit and daily habits. Jayaprakash Narayan shows citizens reclaiming institutions. Mill warns that a state which weakens its citizens loses the capacity to use its own machinery. Together they explain why constitutions survive on habits, not paper."
   ],
   "models": [
    [
     "Constitutional morality must be cultivated.",
     "Ambedkar warned that constitutional morality is not a natural sentiment and that Indian democracy was a top-dressing on undemocratic soil. The habit of using power for its intended purpose must be built."
    ],
    [
     "A rule without a clock can be suspended.",
     "The Tenth Schedule set no deadline for the Speaker’s decision on defection. In 2020 the Supreme Court suggested three months and an independent tribunal. Deadlines turn discretion into duty."
    ],
    [
     "Independence begins at appointment.",
     "Anoop Baranwal in 2023 required a balanced committee for Election Commissioners. The 2023 law gave the executive two of three votes. An appointing body that the government controls cannot produce independence."
    ],
    [
     "The text can be obeyed while its purpose is defeated.",
     "Re-issued ordinances and bills certified as money bills comply with the Constitution’s words while bypassing its checks. Constitutional morality asks whether powers serve their purpose."
    ],
    [
     "Citizens hold the habit.",
     "Tocqueville located democracy in the habits of the heart, and RTI and social audit let citizens see decisions. A constitution survives when citizens notice and object when conventions break."
    ]
   ],
   "steps": [
    [
     "Define constitutional morality.",
     "Use Ambedkar to distinguish it from the text."
    ],
    [
     "Explain structure.",
     "Use Montesquieu on power checking power."
    ],
    [
     "Show the limits of structure.",
     "Use Rousseau, Tocqueville and Mill."
    ],
    [
     "Give Indian examples of erosion.",
     "Discuss anti-defection delays, appointments, ordinances and money bills."
    ],
    [
     "Discuss federal conventions.",
     "Use the role of Governors."
    ],
    [
     "Show citizen tools.",
     "Use RTI, social audit and Jayaprakash Narayan."
    ],
    [
     "Conclude with habits and safeguards.",
     "Recommend deadlines, independent appointments and an alert public."
    ]
   ],
   "formula": "Treat constitutional morality as a habit that officeholders and citizens must keep. Give every rule a clock and an independent enforcer, use every power for its intended purpose, and keep information open so that citizens can see and answer every breach."
  }
 ],
 "Nature, Development and Civilisation": [
  {
   "thinkers": [
    [
     "Schumacher",
     "natural capital treated as income",
     [
      "E. F. Schumacher turned the aphorism into economics. He objected that modern accounting treats fossil fuels, soil fertility and forest cover as income, when they are actually capital. No business that consumes its capital while reporting it as earnings can be called successful.",
      "A civilisation living off natural capital is therefore liquidating. The liquidation appears as growth in the years before it appears as desert. When Schumacher wrote that small is beautiful, he meant that a system too large for its users to see its consequences will not correct itself in time."
     ],
     "the answer needs an economic argument about natural capital and scale."
    ],
    [
     "Gandhi",
     "need and greed",
     [
      "Gandhi stated the same limit as a moral principle. He said that the earth provides enough for every man’s need but not for every man’s greed.",
      "His objection to industrialism was that it turns wanting into an engine that cannot be switched off. A civilisation driven by ever-expanding wants will eventually consume the ground it stands on."
     ],
     "the question needs an Indian moral argument for limits on consumption."
    ],
    [
     "Ostrom",
     "commons can be governed",
     [
      "Elinor Ostrom supplied the correction that prevents fatalism. Her fieldwork on forests, fisheries and irrigation systems showed that communities do govern shared resources sustainably over centuries.",
      "Communities succeed where boundaries are clear, rules are made locally, users monitor each other and sanctions increase gradually. The tragedy of the commons is a failure of institutions, not a law of nature. Ostrom received the Nobel Prize in economics in 2009 for this work."
     ],
     "the answer needs to show that shared resources can be managed sustainably."
    ],
    [
     "Burke",
     "a partnership with the unborn",
     [
      "Edmund Burke completed the argument from the conservative side. He described society as a partnership between those living, those dead and those yet to be born.",
      "Burke’s view places the unborn among the parties whose interests bind the present. A generation that destroys a forest settles a question for people who cannot object."
     ],
     "the question concerns intergenerational justice or stewardship."
    ],
    [
     "Thoreau",
     "in wildness is the preservation of the world",
     [
      "Henry David Thoreau named what accounting cannot price. He wrote that in wildness is the preservation of the world.",
      "What is lost when the last uncultivated ground is converted is not only a stock of resources. What is lost is the reminder that a civilisation did not make everything it depends on. A society that forgets this will not notice when it begins to spend its capital."
     ],
     "the answer needs to show the value of wild nature beyond economic use."
    ]
   ],
   "examples": [
    [
     "The Forest Rights Act and community forests",
     [
      "Ostrom showed that commons can be governed sustainably when users have clear rights and their right to organise is recognised by higher authority. The Forest Rights Act of 2006 was India’s attempt to supply that recognition. Community forest resource rights matter most, because they vest management in the gram sabha rather than the forest department.",
      "Implementation is the weak link. Only a few states have recognised community forest rights at scale, with Maharashtra the clearest case of rights put into practice. Where gram sabhas have gained management rights, as in villages of Gadchiroli, communities have protected forests while earning income from produce such as bamboo."
     ],
     "Do communities have real rights to manage their forests? Check whether community forest rights are recognised in practice."
    ],
    [
     "Compensatory afforestation and CAMPA",
     [
      "Compensatory afforestation rests on a substitution claim: forest land diverted to a project is offset by planting elsewhere. The Compensatory Afforestation Fund Act of 2016 created the machinery, and in August 2019 the Centre transferred about 47,000 crore rupees to states.",
      "The objections are ecological. Plantations are often monocultures, which produce canopy without the species that made the original forest work. Replacing an old forest patch with fragmented plantations damages connectivity. An accounting system that counts hectares planted against hectares lost can report success while the forest’s functions are not reproduced."
     ],
     "Can planted trees replace a forest? Compare hectares with ecological function."
    ],
    [
     "Green GDP and natural capital accounting",
     [
      "National income accounting was designed to measure production. National accounts treat the depletion of a natural asset as income rather than as a drawdown. Cutting a forest adds timber to output and subtracts nothing for the forest.",
      "Green GDP and natural capital accounting exist to correct the error, and India has published environmental accounts for some years. They remain marginal for three reasons. Valuing a watershed is contestable in a way a market price is not. The correction is always downward, so no government gains from publicising it. No budget or credit rating is calculated on the adjusted figure."
     ],
     "Does the measure of progress count the loss of nature? Ask whether natural capital appears in the accounts that guide decisions."
    ],
    [
     "Historical collapse and contested causes",
     [
      "Historical examples must be used carefully. Easter Island is the standard illustration of collapse through deforestation. Researchers have challenged the account, arguing that introduced rats destroyed palm seeds and that population decline followed European contact, disease and slavery.",
      "The decline of the Indus cities has been linked to weakening monsoons and shifting rivers, but the sequence remains unsettled. Degradation in the Sahel involves rainfall variation, grazing pressure and policy together. The defensible claim is that societies can undermine their own resource base, not that any particular collapse has been proved to be self-inflicted."
     ],
     "What does history actually show about ecological collapse? State causal claims with the care the evidence allows."
    ],
    [
     "The Western Ghats and the Aravallis",
     [
      "The Gadgil panel reported in 2011 and proposed that most of the Western Ghats be treated as ecologically sensitive, with graded restrictions and decisions devolved to gram sabhas. State governments objected. The Kasturirangan committee reported in 2013 and reduced the protected area to about a third.",
      "Neither report has been implemented in full. The Aravallis show the same problem more bluntly, with mining and construction continuing in a range that holds back the spread of desert. In both cases, the boundary is not a technical question but a decision about whose activity stops."
     ],
     "Who decides how much nature is protected? Examine the gap between scientific advice and political decision."
    ]
   ],
   "topics": [
    [
     "2024A1",
     [
      "The saying compresses a long history. Forests and fertile land allowed settlement, agriculture and cities. When forests were cleared, soils eroded and rivers changed, some civilisations weakened or moved. Schumacher explained the logic: natural resources are capital, not income. A civilisation that consumes its natural capital while calling it growth is liquidating its inheritance, and the desert appears after the prosperity.",
      "Modern India faces the same choice. Mining in the Aravallis threatens a range that holds back desertification. The Western Ghats reports show how scientific advice about protection meets political resistance. Compensatory afforestation counts hectares planted without restoring the forest’s functions. Gandhi’s warning that the earth cannot satisfy greed applies to a development model that measures success by output alone.",
      "The saying should not be read as fate. Ostrom showed that communities can govern forests, fisheries and water sustainably when they have clear rights and local rules. The Forest Rights Act, where implemented, has let gram sabhas protect forests and earn from them. Burke reminds us that the unborn are partners in today’s decisions. Deserts follow civilisations only when they forget that nature is capital. A civilisation that keeps its accounts honestly can keep its forests."
     ]
    ]
   ],
   "intro": [
    "Civilisations rise on land that nature prepared: fertile soil, forests, rivers and a stable climate. Many civilisations have also degraded that land through deforestation, overgrazing and overuse of water. The saying that forests precede civilisations and deserts follow them is a warning about this pattern. The question is why societies consume the natural base on which they depend, and what institutions allow them to use it without destroying it."
   ],
   "claim": "Nature is the capital on which civilisation is built, not its income. A society that treats forests, soil, water and a stable climate as income will report growth in the very years it is spending its inheritance. Collapse is not inevitable. Communities have governed shared resources sustainably for centuries when institutions give users clear rights, local rules and a stake in the future. Deserts follow when a society forgets the difference between capital and income.",
   "problem": [
    "Modern accounting rewards the conversion of natural capital into income. Cutting a forest adds timber to GDP and subtracts nothing for the forest lost. Mining a hillside adds output and ignores the watershed it protected. Because the loss is invisible in the accounts, each decision looks profitable, and the damage appears only when it is too late to reverse.",
    "Yet the answer is not simply to stop all use. Communities depend on forests, fields and rivers for their livelihoods, and fatalism about collapse ignores cases where people have managed resources well. The challenge is to build institutions and measures that treat nature as capital, give users a stake in its future, and recognise that the unborn are also parties to today’s decisions."
   ],
   "distinction": [
    "A useful distinction",
    "Income is what can be spent while leaving the source intact. Capital is the source itself. A civilisation that spends its natural capital while calling it income is not prospering but liquidating."
   ],
   "thinkersTitle": "Five thinkers, five tests of natural capital",
   "together": [
    "Putting the five together",
    "Schumacher shows natural capital being spent as income. Gandhi warns that greed has no limit. Ostrom shows that commons can be governed well. Burke includes the unborn in present decisions. Thoreau reminds us that civilisation depends on what it did not make. Together they explain why deserts follow civilisations that forget their inheritance."
   ],
   "models": [
    [
     "Nature is capital, not income.",
     "Schumacher argued that treating fossil fuels, soil and forests as income is a basic accounting error. A civilisation spending its natural capital reports growth until the desert appears."
    ],
    [
     "The commons can be governed.",
     "Ostrom showed that communities manage forests and water sustainably when boundaries are clear, rules are local and users monitor each other. The tragedy of the commons is an institutional failure, not a law."
    ],
    [
     "Planting is not restoring.",
     "Compensatory afforestation counts hectares planted against hectares lost. Monoculture plantations do not reproduce the functions of an old forest."
    ],
    [
     "The unborn are partners.",
     "Burke described society as a partnership between the living, the dead and the unborn. A forest felled today settles a question for people who cannot object."
    ],
    [
     "Collapse is a risk, not a fate.",
     "Easter Island and the Indus are contested cases. The defensible claim is that societies can undermine their resource base, and that institutions decide whether they do."
    ]
   ],
   "steps": [
    [
     "Explain natural capital.",
     "Use Schumacher to distinguish capital from income."
    ],
    [
     "Add the moral limit.",
     "Use Gandhi on need and greed."
    ],
    [
     "Use history carefully.",
     "Discuss collapse cases with their contested causes."
    ],
    [
     "Give Indian examples.",
     "Use the Western Ghats, the Aravallis and compensatory afforestation."
    ],
    [
     "Show the institutional answer.",
     "Use Ostrom and the Forest Rights Act."
    ],
    [
     "Consider future generations.",
     "Use Burke’s partnership with the unborn."
    ],
    [
     "Conclude with honest accounts.",
     "Argue for measures and institutions that treat nature as capital."
    ]
   ],
   "formula": "Treat nature as capital, not income. Measure its loss honestly, give communities rights and a stake in its future, and remember that the unborn are partners in every decision that spends it."
  },
  {
   "thinkers": [
    [
     "Ostrom",
     "efficient management without a conventional owner",
     [
      "Elinor Ostrom overturned the standard result. Garrett Hardin’s tragedy of the commons predicted that shared resources must be privatised or nationalised. Ostrom examined what actually happens.",
      "Across forests, pastures and irrigation systems, she found self-governing arrangements that had lasted for centuries. The users know the boundaries, help make the rules, monitor use themselves and apply graduated sanctions, and higher authorities recognise their right to organise. A forest shows that efficient management does not require an owner in the conventional sense."
     ],
     "the answer needs an economic model of community management."
    ],
    [
     "Schumacher",
     "the market’s omission",
     [
      "E. F. Schumacher supplied the accounting objection. Treating a forest as a stock of timber values the one output with a market.",
      "The valuation ignores watershed regulation, soil retention, pollination, the local climate and livelihoods that never generate an invoice. The market’s valuation is therefore not a measurement. The valuation is an omission."
     ],
     "the question concerns the limits of market prices in valuing nature."
    ],
    [
     "Sen",
     "the forest as capability",
     [
      "Amartya Sen’s capability approach extends the point. For a forest-dwelling household, the forest is not an asset to be sold. The forest is the basis of what those people are able to do and be.",
      "Compensation calculated on timber value has not compensated them for their loss. Their food, medicine, culture and income depend on the standing forest."
     ],
     "the answer needs to show the human value of forests for dependent communities."
    ],
    [
     "Gandhi",
     "why conversion always wins",
     [
      "Gandhi’s objection is the plainest and anticipates the whole measurement problem. A civilisation that multiplies wants will always find a reason to convert a forest.",
      "The conversion registers as income, and the loss registers nowhere. Gandhi explains why forests keep losing in economic decisions."
     ],
     "the question concerns consumption, development and the loss of forests."
    ],
    [
     "Burke",
     "excellence across generations",
     [
      "Edmund Burke added a correction across time that no discount rate captures. Society is a partnership between the living, the dead and the unborn.",
      "A forest felled for a present return has settled a question for people who were never consulted. Excellence measured over a single generation is not excellence. Short-term excellence of that kind is a transfer from the future to the present."
     ],
     "the answer needs an intergenerational perspective on economic value."
    ]
   ],
   "examples": [
    [
     "Finance Commission rewards for forest cover",
     [
      "A state that protects forest bears the cost locally, while the benefits in carbon, water and biodiversity spread nationally. Without correction, forests will be under-protected. India’s main correction runs through the Finance Commission’s formula for sharing central taxes. The Fourteenth Finance Commission gave forest cover a weight of 7.5 per cent, and the Fifteenth raised it to 10 per cent.",
      "The transfer directs large sums towards states with forest wealth, and it is among the largest ecological fiscal transfers anywhere. The limitation is that the transfer is untied. The transfer rewards the state treasury for forest existing, but it does not by itself reach the community that bears the cost of protection."
     ],
     "Are those who protect forests rewarded? Trace the money from the Centre to the communities."
    ],
    [
     "Joint Forest Management",
     [
      "Joint Forest Management, introduced from 1990, was the first large attempt to make protection a partnership. Village committees received a share of forest produce in return for protection duties.",
      "The results tracked Ostrom’s conditions closely. Where benefits were significant and reliable, boundaries were clear and committees actually decided, institutions held and forest condition improved. Where shares were small or delayed, membership was captured by the better-off, or the department kept real control, institutions failed. Participation without decision rights is not participation, and communities notice the difference quickly."
     ],
     "Do communities have real decision rights? Compare consultation with control."
    ],
    [
     "Valuing ecosystem services",
     [
      "The Economics of Ecosystems and Biodiversity project, and Indian studies that followed it, try to put a number on services markets never price: pollination, water regulation, soil formation, storm protection and carbon storage.",
      "The purpose is often misunderstood. A wetland’s true worth is not a precise figure, since the estimates carry wide uncertainty. The point is that the current implicit value is zero, and zero is certainly wrong. A cost-benefit appraisal that counts a project’s revenue and treats a destroyed wetland as costless has decided the outcome through its accounting. Valuation corrects a default."
     ],
     "What value does the decision currently give to nature? Show that ignoring a service values it at zero."
    ],
    [
     "Non-timber forest produce and livelihoods",
     [
      "Non-timber forest produce, such as tendu leaves, mahua, honey, gum, bamboo and medicinal plants, is often the larger part of income for forest-dwelling households. The terms of trade have historically been poor, because a collector with no storage, no price information and an urgent need for cash faces a single buyer.",
      "The minimum support price for minor forest produce and the Van Dhan centres, which add value locally, try to correct the imbalance. The strategic point matters. Produce that requires the forest to stay standing aligns the collector’s interest with conservation, which no enforcement system achieves."
     ],
     "Does the livelihood depend on the forest standing? Link income from forest produce to conservation."
    ],
    [
     "The case and the danger of pricing",
     [
      "A decision between a mine and a forest is made in a room where the mine arrives with revenue, jobs and taxes, and the forest arrives with an adjective. Where one side is quantified and the other is not, the quantified side wins by default. The practical case for valuation and payment for ecosystem services is about procedure, not metaphysics.",
      "The objection from the other direction is also serious. Once a forest has a price, it can be bought. Pricing an irreplaceable thing invites the assumption that adequate compensation exists, when some losses cannot be compensated."
     ],
     "Does a price protect the forest or make it purchasable? Weigh visibility in decisions against the risk of commodification."
    ]
   ],
   "topics": [
    [
     "2022A1",
     [
      "Forests are models of efficiency. Forests recycle nutrients without waste, regulate water, store carbon, protect soil and support many forms of life, all powered by sunlight. They sustain the livelihoods of millions through food, fuel, medicine and non-timber produce. Ostrom showed that communities have managed forests sustainably for centuries without private or state ownership. In these senses, forests are excellent case studies of economic excellence.",
      "They are also case studies in how conventional economics fails. Schumacher pointed out that market prices count timber and ignore everything else, so a forest’s value is systematically understated. Gandhi explained why conversion always seems profitable: the income is counted, the loss is not. Valuation efforts such as TEEB, and the Finance Commission’s reward for forest cover, try to correct the bias. Joint Forest Management and the Forest Rights Act show that communities manage forests best when they hold real decision rights.",
      "The lesson for economic excellence is broader. True excellence produces value sustainably, shares benefits with those who depend on the resource, and keeps accounts for future generations, as Burke’s partnership with the unborn requires. Growth that consumes its natural capital is not excellence but liquidation. Forests show that the best economy is one that can continue indefinitely while sustaining those who depend on it."
     ]
    ]
   ],
   "intro": [
    "Economic excellence is usually measured by output, profit and growth. A forest seems an odd example of it. Yet a forest produces clean water, fertile soil, a stable local climate, food, medicine and livelihoods without waste and without an owner in the usual sense. The question is what forests teach about economic excellence, and why conventional economics so often fails to see it."
   ],
   "claim": "Forests are the best case studies of economic excellence because they produce many valuable services efficiently and sustainably, and because communities have managed them well without conventional ownership. Most of what makes a forest valuable has no market price, so conventional accounts treat it as zero. Better valuation, fiscal transfers and community rights can correct the bias. Yet a price can also invite the belief that an irreplaceable thing can be bought.",
   "problem": [
    "When a decision is made between a mine and a forest, the mine arrives with revenue, jobs and taxes. The forest arrives with adjectives. The quantified side wins by default. Timber, the one forest product with a clear market, is counted, while watershed protection, pollination, soil retention and tribal livelihoods are ignored.",
    "Correcting the bias is not simple. Valuing ecosystem services is uncertain, and prices can be manipulated. Paying states to keep forests may not reach the communities who bear the cost. Putting a price on nature may suggest that it can be sold. The challenge is to make the value of forests visible in decisions while protecting what cannot be replaced."
   ],
   "distinction": [
    "A useful distinction",
    "Market value counts what can be sold. Economic value counts everything that contributes to human well-being, including services that are never invoiced. A forest valued at its timber price has been measured by what can be removed from it, not by what it does."
   ],
   "thinkersTitle": "Five thinkers, five tests of forest economics",
   "together": [
    "Putting the five together",
    "Ostrom shows that forests can be managed efficiently by communities. Schumacher shows that market prices omit most of a forest’s value. Sen shows the forest as the capability of those who depend on it. Gandhi explains why conversion always seems profitable. Burke adds the claims of future generations. Together they explain why the forest is a model of economic excellence that conventional accounts cannot see."
   ],
   "models": [
    [
     "Commons can be managed efficiently.",
     "Ostrom showed that communities have governed forests for centuries without conventional owners. Clear boundaries, local rules and user monitoring are the conditions of success."
    ],
    [
     "Market prices omit most of a forest’s value.",
     "Schumacher argued that valuing a forest as timber ignores watershed, soil, pollination and livelihoods. The market’s price is an omission, not a measurement."
    ],
    [
     "An unpriced service is valued at zero.",
     "Valuation exercises such as TEEB do not give exact figures. They correct the default of treating a wetland or forest as costless in project appraisal."
    ],
    [
     "Rewards must reach those who bear the cost.",
     "The Fifteenth Finance Commission gave forest cover a 10 per cent weight in tax sharing. Untied transfers reward states, but communities who protect forests may receive nothing."
    ],
    [
     "Livelihoods can align with conservation.",
     "Non-timber forest produce requires the forest to stay standing. Fair prices through MSP and Van Dhan centres make conservation the collector’s interest."
    ]
   ],
   "steps": [
    [
     "Describe the forest’s value.",
     "List services and livelihoods beyond timber."
    ],
    [
     "Show why markets miss it.",
     "Use Schumacher and the problem of unpriced services."
    ],
    [
     "Present community management.",
     "Use Ostrom and Joint Forest Management."
    ],
    [
     "Give policy corrections.",
     "Discuss Finance Commission transfers, valuation and MSP for forest produce."
    ],
    [
     "State the danger of pricing.",
     "Explain how a price can make nature purchasable."
    ],
    [
     "Consider future generations.",
     "Use Burke."
    ],
    [
     "Conclude with a definition of excellence.",
     "Define excellence as sustainable, shared and lasting value."
    ]
   ],
   "formula": "Measure forests by everything they do, not only by what can be sold. Give communities real rights and fair returns, reward those who protect forests, and count the future in every decision about them."
  },
  {
   "thinkers": [
    [
     "Tagore",
     "nature as relationship",
     [
      "Tagore built Santiniketan under trees for a reason. He held that a child educated indoors learns to treat the world as material, while a child educated among seasons and growing things learns to treat it as a relationship.",
      "His objection to Western modernity was that it had reduced nature to raw material for a productive machine. In Tagore’s writing, nature is not scenery. Nature is where a person discovers proportion: the recognition of being part of something not made for one’s use."
     ],
     "the answer needs an Indian view of nature as teacher and of education close to nature."
    ],
    [
     "Thoreau",
     "nature as a mirror of the self",
     [
      "Henry David Thoreau made the claim experimentally. He went to live by Walden Pond to live deliberately and face only the essential facts of life, so that he would not discover at the end that he had not lived.",
      "His stay was an experiment in using nature as an instrument of self-knowledge. His conclusion that in wildness is the preservation of the world is a claim about human beings as much as about ecosystems."
     ],
     "the question concerns simplicity, self-knowledge or the value of wild nature."
    ],
    [
     "Mahavira",
     "ahimsa towards all life",
     [
      "Mahavira gave the Indian ethical form by extending ahimsa, or non-violence, to all living things.",
      "The restraint is not a conservation policy. The restraint recognises that other lives have standing independent of any use we have for them. Mahavira’s ethics anticipates the idea of intrinsic value in nature."
     ],
     "the answer needs an Indian ethical basis for respecting all life."
    ],
    [
     "Aurobindo",
     "matter and spirit continuous",
     [
      "Sri Aurobindo added the metaphysical version. He treated matter and spirit as continuous rather than opposed.",
      "The evolution visible in nature is, for Aurobindo, the same movement that works towards consciousness. Nature is then not the opposite of spirit but its early expression."
     ],
     "the question needs a philosophical account of nature as spirit."
    ]
   ],
   "examples": [
    [
     "Rivers as legal persons",
     [
      "In March 2017, the Uttarakhand High Court declared the Ganga and Yamuna to be legal persons, with officials appointed as their guardians. Shortly afterwards the Court extended similar status to glaciers and other natural features. The Supreme Court stayed the ruling within months, after the state raised practical difficulties, such as who would be liable if the river flooded.",
      "The idea is not merely symbolic. Legal personality solves a standing problem, letting a case be brought on the river’s behalf without a human plaintiff showing personal injury. Whether personhood adds anything where environmental laws already exist is the genuine question."
     ],
     "Can law give nature standing of its own? Weigh symbolic recognition against practical enforcement."
    ],
    [
     "Sacred groves and the Bishnoi tradition",
     [
      "Sacred groves are patches of forest protected by religious prohibition rather than by law. Sacred groves survive across many Indian states and often hold species that surrounding land has lost. The Bishnoi tradition of western Rajasthan protects trees and animals. At Khejarli in 1730, Amrita Devi and hundreds of villagers died resisting the felling of khejri trees.",
      "The enforcement mechanism is what makes these cases interesting. There is no inspector and no penalty schedule. Compliance rests on belief and community sanction, which is cheaper and more durable than monitoring. The limit is equally clear. Belief binds believers, and it has no hold on an outside firm with a lease."
     ],
     "Can belief protect nature? Show both the strength of internal commitment and its limits against outsiders."
    ],
    [
     "Deep ecology and intrinsic value",
     [
      "Arne Naess drew the distinction in 1973. Shallow environmentalism opposes pollution and resource depletion because they harm human beings, which leaves nature valuable only as a means. Deep ecology holds that living systems have value independent of any use to us.",
      "The practical difference appears in hard cases. On a shallow account, a species with no known use is hard to defend. On a deep account, the question of use does not arise. Deep ecology must still answer how competing claims are settled when the interests of a forest and of the people living in it diverge."
     ],
     "Does nature have value beyond human use? Consider how intrinsic value guides hard choices."
    ],
    [
     "Nature in Indian cities",
     [
      "Urban green space is often treated as an amenity. Urban green space is better understood as infrastructure, since tree cover lowers surface temperature, absorbs particulates, retains stormwater and shapes where a heat wave becomes deadly.",
      "Most large Indian cities fall below recommended green space per person, and the distribution within cities is unequal. Planned colonies hold parks and mature trees, while dense informal settlements hold least. Access to outdoor space for children is now decided largely by the value of the land their families live on, which makes it a question of distribution."
     ],
     "Who has access to nature in cities? Treat green space as infrastructure and ask who receives it."
    ],
    [
     "Reverence without regulation",
     [
      "The objection should be conceded before it is answered. India has a rich tradition of reverence for rivers, mountains and trees, and also severely polluted rivers, depleted aquifers and mined hills. Veneration of the Ganga has coexisted with its contamination for decades. What has actually changed outcomes is enforceable regulation: emission standards, clearance conditions and courts willing to halt projects.",
      "The reply is that regulation depends on enforcement capacity and political will, both scarce. A population that regards a place as sacred supplies monitoring and resistance the state cannot afford. Reverence is not sufficient. Where reverence survives, it is not idle either."
     ],
     "What actually protects nature? Combine regulation with the public commitment that supports it."
    ]
   ],
   "topics": [
    [
     "2026B1",
     [
      "To call nature the symbol of the spirit is to say that the order we see in nature reflects an order we can find within ourselves. Tagore taught children under trees so that they would learn proportion: that they are part of something not made for their use. Thoreau went to the woods to learn what life essentially requires. Aurobindo saw spirit working through matter, so that nature’s evolution is the early expression of consciousness.",
      "Indian ethics adds a moral dimension. Mahavira extended non-violence to all living things, recognising their standing apart from human use. Sacred groves and the Bishnoi tradition show how reverence can protect nature through belief and community sanction. Deep ecology gives the modern form of the same insight: living systems have value in themselves.",
      "The symbol has limits in practice. Reverence for the Ganga has not stopped its pollution, and belief does not bind outside firms. The Uttarakhand High Court’s attempt to give rivers legal personhood shows the search for ways to turn reverence into protection. Nature can be the symbol of the spirit only if a society acts on the symbol, joining inner regard with enforceable law and fair access to nature for all."
     ]
    ]
   ],
   "intro": [
    "Modern life often treats nature as a resource: timber, minerals, water and land to be used. Many traditions have seen nature differently, as a teacher, a sacred presence or a mirror of the human spirit. The statement that nature is the symbol of the spirit belongs to this second view. The question is what it means to learn from nature, and whether reverence can protect nature in a world driven by production."
   ],
   "claim": "Nature teaches by being what we did not make and cannot improve. The order visible in nature and the order a person can achieve within themselves are, in this view, the same order met twice. Reverence for nature can shape conduct, sustain conservation and give ecological ethics a deeper basis. Yet reverence alone has not stopped pollution or mining. Spiritual regard for nature is most powerful when joined to enforceable law.",
   "problem": [
    "A civilisation organised around production tends to see nature only as material. Children grow up indoors, cities lose green space, and rivers are revered in ritual while polluted in practice. The loss is not only ecological. Something is lost in human understanding when people no longer meet a world they did not make.",
    "The spiritual view also faces a hard objection. India has rich traditions of reverence for rivers, mountains and trees, yet also severely polluted rivers and mined hills. Belief binds believers but not outside firms holding leases. The challenge is to show what the spiritual understanding of nature contributes, while recognising that it needs institutions and law to protect nature in practice."
   ],
   "distinction": [
    "A useful distinction",
    "Shallow environmentalism protects nature because harming it harms people. Deep ecology holds that living systems have value independent of their use to us. The first makes nature tradeable against other human interests. The second changes the structure of the argument."
   ],
   "thinkersTitle": "Four thinkers, four tests of nature and spirit",
   "together": [
    "Putting the four together",
    "Tagore sees nature as a relationship that teaches proportion. Thoreau uses nature for self-knowledge. Mahavira extends moral standing to all life. Aurobindo sees spirit working through matter. Together they explain why nature can be the symbol of the spirit: it is the thing a person did not make and cannot improve."
   ],
   "models": [
    [
     "Nature teaches proportion.",
     "Tagore held that children educated among growing things learn to see the world as a relationship rather than material. Nature is where a person learns to be part of something not made for their use."
    ],
    [
     "Nature is a mirror for self-knowledge.",
     "Thoreau went to Walden to live deliberately and learn what life essentially requires. In wildness, he wrote, is the preservation of the world."
    ],
    [
     "All life has standing.",
     "Mahavira extended ahimsa to every living thing. Deep ecology, as described by Arne Naess in 1973, holds that living systems have value independent of human use."
    ],
    [
     "Belief can conserve, within limits.",
     "Sacred groves and the Bishnoi tradition protect nature through internalised prohibition. Belief binds believers but has no hold on outside firms."
    ],
    [
     "Reverence needs regulation.",
     "Veneration of the Ganga has coexisted with its pollution. Spiritual regard for nature is most powerful when joined to enforceable law."
    ]
   ],
   "steps": [
    [
     "Explain the symbolic view.",
     "Use Tagore, Thoreau and Aurobindo."
    ],
    [
     "Give the ethical basis.",
     "Use Mahavira and deep ecology."
    ],
    [
     "Show living traditions.",
     "Use sacred groves and the Bishnoi example."
    ],
    [
     "Discuss legal experiments.",
     "Use the rivers as legal persons case."
    ],
    [
     "Include urban life.",
     "Discuss green space and children’s access to nature."
    ],
    [
     "State the objection.",
     "Concede that reverence alone has not stopped pollution."
    ],
    [
     "Conclude with symbol and law together.",
     "Argue for joining spiritual regard with enforceable protection."
    ]
   ],
   "formula": "Learn from nature as the thing we did not make and cannot improve. Respect all life, keep traditions of reverence alive, and join them to enforceable law, so that the symbol of the spirit is protected in practice."
  },
  {
   "thinkers": [
    [
     "Schumacher",
     "intermediate technology",
     [
      "E. F. Schumacher’s idea of intermediate technology governs this question. He proposed technology cheap enough to be widely accessible, simple enough to be maintained locally, small enough to be affordable, and suited to human creativity rather than replacing it.",
      "A plant that a community cannot repair, finance or shut down is a dependency. A dependency imposed in the name of development has transferred control rather than capability."
     ],
     "the answer needs criteria for choosing technology in development."
    ],
    [
     "Gandhi",
     "the charkha as specification",
     [
      "Gandhi made the same case through an object. He did not oppose all machinery. He opposed machinery that concentrates ownership and displaces people.",
      "The charkha was chosen because a household could own it, use it and earn from it. The spinning wheel was a specification, not only a symbol."
     ],
     "the question needs an Indian example of technology that empowers users."
    ],
    [
     "Kalam",
     "self-reliance in critical technology",
     [
      "Kalam applied the principle at national scale. His insistence on building launch vehicles and missiles in India came from working under sanctions and technology denial regimes.",
      "A technology you cannot build is a technology you may lose access to whenever the supplier chooses. Self-reliance in critical technology is a form of resilience."
     ],
     "the answer concerns technological self-reliance and strategic resilience."
    ],
    [
     "Einstein",
     "capability does not settle whether to build",
     [
      "Albert Einstein supplied the ethical frame from the other end of the scale. He urged the building of an atomic weapon in 1939, and then spent his later years working for disarmament.",
      "Einstein’s career shows that technical capability settles nothing about whether a thing should be built. Choosing technology is an ethical decision as well as an engineering one."
     ],
     "the question concerns the ethics of technology."
    ],
    [
     "Deendayal Upadhyaya",
     "technology for the whole person",
     [
      "Deendayal Upadhyaya reached the same criteria from Indian political thought. He argued that technology should be judged by whether it serves the whole person and the whole society, not by output alone.",
      "A Gandhian, a Buddhist economist and an Indian political thinker arrive independently at scale, control and reversibility as the criteria. The convergence suggests the criteria are not sentimental. The criteria decide who benefits."
     ],
     "the answer needs an Indian framework for human-centred technology."
    ]
   ],
   "examples": [
    [
     "Rooftop and community solar",
     [
      "The case for rooftop and community solar is not only that it is renewable. Decentralised solar changes the structure of the energy system. Generation near consumption avoids transmission losses, reduces exposure to single points of failure and can serve places the grid reaches poorly. The PM Surya Ghar scheme for household rooftop solar, launched in 2024, aims at exactly this.",
      "The qualifications concern intermittency and capital. Solar generates when the sun shines, and demand does not follow the sun, so decentralised systems need storage that remains expensive. A household investment requires subsidy or credit that the poorest cannot easily access."
     ],
     "Does decentralisation improve resilience, and who can afford it? Weigh structural gains against storage and credit limits."
    ],
    [
     "Millets and drought-resilient farming",
     [
      "The Green Revolution raised output by matching subsidies and procurement to wheat and rice. In semi-arid regions, those crops are grown on irrigation that groundwater cannot sustain. Millets are the counter-example that is not nostalgia. Millets tolerate drought, need far less water, grow in poor soils and carry better micronutrients. The United Nations observed 2023 as the International Year of Millets.",
      "The constraint is not agronomic. Price support, procurement and consumer demand were built around wheat and rice, so a farmer who switches bears the risk that no buyer will be there."
     ],
     "Why do resilient crops struggle to spread? Look at the incentives built around other crops."
    ],
    [
     "Where scale is necessary",
     [
      "Appropriate technology is a claim about fit, not a preference for smallness. Steel, cement, fertiliser and long-haul transport need dense and continuous energy, often in chemical form. The National Green Hydrogen Mission, approved in January 2023 with an outlay of 19,744 crore rupees, targets production of five million tonnes a year by 2030.",
      "Nuclear power makes the same argument for firm low-carbon power that does not depend on weather. Schumacher’s principle is compatible with scale. The test was fitness for the task, and a task that is inherently large is not made appropriate by being attempted small."
     ],
     "When is large technology the appropriate one? Match the scale of the technology to the scale of the task."
    ],
    [
     "Technology transfer and climate finance",
     [
      "Climate negotiations return repeatedly to three demands from developing countries. Finance covers the cost of mitigation and adaptation for emissions they did not cause. The goal of 100 billion dollars a year was met late, and the new goal agreed at Baku in 2024 remains contested as inadequate.",
      "Technology transfer addresses the fact that clean technology exists but is owned by others. Intellectual property is where finance and technology meet, because a patent that raises the cost of solar or battery technology slows deployment in countries with the least capital. The equity argument rests on history: emissions accumulated over two centuries caused the warming, while the constraint now falls on those industrialising later."
     ],
     "Who pays for and who owns the technology needed for resilience? Consider historical responsibility and access."
    ],
    [
     "Traditional water systems as climate infrastructure",
     [
      "Johads in Rajasthan, stepwells across western India, ahar-pyne systems in south Bihar and tank cascades in the south were not primitive dams. They were designed to capture local runoff, recharge groundwater and spread water across a landscape.",
      "Their revival in the Alwar region, led by Rajendra Singh and Tarun Bharat Sangh, is credited with returning water to seasonal rivers such as the Arvari. The systems are cheap, repairable locally and resilient, since one broken structure does not disable the whole. The claim is not that they replace large infrastructure. The claim is that they address recharge, which large infrastructure does not."
     ],
     "Can traditional knowledge supply modern resilience? Show how local systems address problems large projects miss."
    ]
   ],
   "topics": [
    [
     "2018A1",
     [
      "Climate change will test India’s farms, water systems, energy supply and cities. Resilience means the ability to absorb shocks and recover. Alternative technologies can strengthen resilience where large centralised systems are vulnerable. Rooftop and community solar reduce dependence on a single grid. Millets and drought-tolerant cropping reduce dependence on irrigation. Traditional water systems such as johads and ahar-pyne recharge groundwater and survive local failures.",
      "Schumacher’s intermediate technology gives the criteria: affordable, repairable and suited to local control. Gandhi’s charkha showed the value of tools that households can own. Kalam’s insistence on self-reliance adds a strategic dimension: technology India cannot build may become unavailable when it is most needed. Deendayal Upadhyaya’s test asks whether a technology serves the whole person and society.",
      "Alternative does not always mean small. Green hydrogen for heavy industry and firm low-carbon power need scale, and the National Green Hydrogen Mission reflects this. Access to finance and technology also matters, which is why technology transfer and climate finance remain central in negotiations. A climate-resilient India needs technologies chosen for fit: decentralised where local control and repair matter, large where the task demands it, and always designed so that failure in one place does not become failure everywhere."
     ]
    ]
   ],
   "intro": [
    "Climate change requires India to adapt its farms, cities, water systems and energy supply. The usual picture of progress favours large, centralised technology: big dams, large power plants and industrial agriculture. Yet large systems can fail at a single point, depend on distant suppliers and leave communities without control. The question is which technologies make India resilient to climate change, and who should control them."
   ],
   "claim": "Appropriate technology is judged by fit, not by size. For many needs, resilience comes from technologies that are affordable, repairable and locally controlled: decentralised solar, drought-tolerant crops and traditional water harvesting. For other needs, such as steel or firm power, scale is unavoidable. The test is whether a technology suits the task, can be maintained by those who depend on it, and keeps control and reversibility among its design requirements.",
   "problem": [
    "Climate change brings heat waves, droughts, floods and erratic rainfall. Large centralised systems can be vulnerable: a flooded substation can darken a region, and a failed monsoon can empty a reservoir. Technologies imported without local capacity can create dependence on distant suppliers and experts.",
    "The opposite error is to treat small as always better. Heavy industry needs dense and continuous energy, and some problems require national investment. Decentralised solutions may need storage and credit that the poorest cannot access. The challenge is to choose technology by its fit to the task, its resilience and its effect on who holds control, rather than by a preference for either scale."
   ],
   "distinction": [
    "A useful distinction",
    "Mass production concentrates control in whoever owns the plant. Production by the masses, in Schumacher’s phrase, spreads control to those who use the tools. The difference decides who benefits and who can repair the system when it fails."
   ],
   "thinkersTitle": "Five thinkers, five tests of appropriate technology",
   "together": [
    "Putting the five together",
    "Schumacher sets criteria of accessibility, repairability and scale. Gandhi shows technology that households can own. Kalam shows self-reliance as resilience. Einstein shows that capability does not settle whether to build. Deendayal Upadhyaya judges technology by whether it serves the whole person. Together they define appropriate technology as fit, control and reversibility."
   ],
   "models": [
    [
     "Technology must fit the task.",
     "Schumacher’s intermediate technology is accessible, repairable and affordable. Appropriateness is judged by fit to the task and the users, not by size alone."
    ],
    [
     "Ownership decides who benefits.",
     "Gandhi chose the charkha because a household could own it and earn from it. Technology that concentrates ownership can transfer control rather than capability."
    ],
    [
     "Self-reliance is resilience.",
     "Kalam’s experience of sanctions showed that a technology you cannot build may be denied when needed. Critical capabilities must be secured at home."
    ],
    [
     "Decentralisation reduces single points of failure.",
     "Rooftop solar, millets and traditional water systems spread risk across many small units. One failure does not disable the whole system."
    ],
    [
     "Some tasks need scale.",
     "Heavy industry needs dense, continuous energy. The National Green Hydrogen Mission of 2023 shows that appropriate technology can be large when the task is large."
    ]
   ],
   "steps": [
    [
     "Define resilience.",
     "Explain the ability to absorb shocks and recover."
    ],
    [
     "Set criteria for technology.",
     "Use Schumacher’s accessibility, repairability and scale."
    ],
    [
     "Give decentralised examples.",
     "Use rooftop solar, millets and traditional water systems."
    ],
    [
     "Acknowledge the need for scale.",
     "Discuss green hydrogen and firm power."
    ],
    [
     "Consider control and self-reliance.",
     "Use Gandhi and Kalam."
    ],
    [
     "Address global equity.",
     "Discuss climate finance and technology transfer."
    ],
    [
     "Conclude with fit and reversibility.",
     "Argue for technology chosen by fit, control and resilience."
    ]
   ],
   "formula": "Choose technology by its fit to the task, its resilience to failure and the control it gives to those who depend on it. Decentralise where local repair and ownership matter, build at scale where the task demands it, and keep reversibility among the design requirements."
  },
  {
   "thinkers": [
    [
     "Sen",
     "development as freedom",
     [
      "Amartya Sen provided the foundation. Development is the expansion of substantive freedoms: the capability to be and do what a person has reason to value. Income is a means to that, not the same thing.",
      "His evidence made the distinction practical. Countries and states at similar income levels differ enormously in literacy, life expectancy and child survival. Converting growth into well-being is a political achievement, and treating growth as the end has a measurable human cost."
     ],
     "the answer needs to define development and show how it differs from growth."
    ],
    [
     "Nussbaum",
     "a threshold for everyone",
     [
      "Martha Nussbaum turned the idea into a threshold rather than an average. She listed central capabilities that a decent society must secure for every person, including life, bodily health, bodily integrity, senses and imagination, practical reason, affiliation and relation to other species.",
      "A country can raise its average while leaving a fifth of its people below the level of a recognisably human life. An average conceals exactly the people development is meant to reach."
     ],
     "the question needs a threshold standard for judging development."
    ],
    [
     "Gandhi",
     "the talisman",
     [
      "Gandhi supplied the same test in a form an official can use. Recall the face of the poorest person you have seen, and ask whether the step you are considering will be of any use to that person.",
      "The talisman asks about the worst-off individual, not the total. The talisman turns a growth figure into a question about a particular life."
     ],
     "the answer needs a simple ethical test for development policy."
    ],
    [
     "Schumacher",
     "the ecological condition",
     [
      "E. F. Schumacher added the ecological condition the others assume. Any account of development that ignores the depletion of natural capital is measuring something temporary.",
      "Growth that consumes forests, soil and water reports prosperity until the base is gone. Development must be sustainable to count as development."
     ],
     "the question needs to include environmental sustainability in development."
    ],
    [
     "Deendayal Upadhyaya",
     "the last person",
     [
      "Deendayal Upadhyaya stated the criterion in a form administrators can apply. An arrangement is judged by the condition of the last person, not by the average.",
      "Antyodaya, the rise of the last, turns the purpose of growth into a measurable test for policy and budgets."
     ],
     "the answer needs an Indian governance criterion for inclusive development."
    ],
    [
     "Tagore",
     "people as the point, not instruments",
     [
      "Tagore added the objection that no index reaches. A society can meet every threshold and still be organised so that people are instruments of production rather than its purpose.",
      "For Tagore, the question of what growth is for must be asked before measurement begins, not after. A civilisation that forgets the answer serves its machinery rather than its people."
     ],
     "the question needs a humanist critique of growth-centred development."
    ]
   ],
   "examples": [
    [
     "Multidimensional poverty",
     [
      "The Multidimensional Poverty Index counts deprivation directly across nutrition, schooling, sanitation, cooking fuel, housing, electricity and assets, rather than inferring poverty from income. NITI Aayog estimated that the share of multidimensionally poor people fell from about 29.17 per cent in 2013-14 to 11.28 per cent in 2022-23. About 24.8 crore people moved out of multidimensional poverty.",
      "The change is large and genuine. The index measures the crossing of low thresholds, so an answer should be precise. What improved is the floor. The distance from the floor to a decent standard of living is a separate question."
     ],
     "What exactly has improved, and how far is it from a decent life? Separate the floor from the goal."
    ],
    [
     "Kerala’s development at moderate income",
     [
      "Kerala remains the clearest Indian demonstration that development outcomes are not simply bought with income. Its life expectancy, literacy, infant mortality and school completion have long exceeded those of several richer states.",
      "The explanation is historical: earlier land reform, an older network of schools and primary health centres, and political competition that made social provision unavoidable. States that grew fast while human development lagged show that converting income into capability is not automatic. Public provision decides whether growth becomes capability, and public provision can come before growth."
     ],
     "Can development precede high income? Compare Kerala with richer states."
    ],
    [
     "Jobless growth and household experience",
     [
      "Output can rise sharply while the typical household’s experience barely changes. About nine in ten Indian workers are informal. Recent increases in women’s participation are concentrated in self-employment and unpaid family work rather than wage jobs.",
      "Growth concentrated in capital-intensive and skill-intensive sectors adds value without adding many secure jobs, so gains go to profit and a small salaried group. GDP per head is an average, and where distribution is skewed, the average moves with the top. Household consumption and job quality show whether growth reached anyone."
     ],
     "Did growth reach households? Look at jobs and consumption, not only output."
    ],
    [
     "State differences in the SDG India Index",
     [
      "The SDG India Index is most useful for the differences between states. The national score rose from 57 in 2018 to 71 in 2023-24 across 113 indicators. State and union territory scores now range from about 57 to 79, with Uttarakhand and Kerala at the top. The 2018 range ran from 42 to 69.",
      "The floor has risen faster than the ceiling, which is a real finding. A national average still conceals a country in which a person’s prospects in health, schooling and sanitation depend heavily on where they were born. Convergence between states is a more demanding test than improvement of the average."
     ],
     "Does the average hide unequal progress? Look at the gap between states."
    ],
    [
     "The case for growth",
     [
      "The counter-argument deserves full weight. Growth is not optional. Public health, schooling, nutrition and pensions are funded from a tax base that grows with output. A state that stops growing faces its commitments with shrinking resources.",
      "Stagnation also falls first on those with no assets, no savings and informal work, the very group redistribution is meant to protect. The defensible position is sequential rather than oppositional. Growth is necessary and not sufficient. The failure to guard against is not growth itself, but treating the means as if it were the end."
     ],
     "Is growth being treated as a means or an end? Show why growth is necessary but not sufficient."
    ]
   ],
   "topics": [
    [
     "practice",
     [
      "Growth increases the resources a society has. Development is what people are able to do with those resources: to be healthy, educated, secure and free. Sen defined development as the expansion of substantive freedoms, and his evidence showed that countries with similar incomes achieve very different outcomes. Kerala’s high human development at moderate income is the clearest Indian example.",
      "Treating growth as the end hides the people it is supposed to serve. Jobless growth can raise output while most workers remain informal and insecure. National averages can conceal large differences between states, as the SDG India Index shows. Nussbaum’s threshold and Deendayal Upadhyaya’s antyodaya both ask whether every person, especially the last, has gained.",
      "Growth remains necessary. Without it, public services cannot be funded, and stagnation harms the poor first. Development also requires sustainability, since Schumacher showed that growth consuming natural capital is temporary. The balanced conclusion is that growth should be pursued with its purpose specified at the start: what it is meant to make possible, for whom and for how long."
     ],
     "Growth is a means, development is the end."
    ],
    [
     "practice",
     [
      "GDP measures total output. People live individual lives. The two can move apart when growth is concentrated among a few, when it creates few secure jobs, or when public services fail to convert income into health and education. India’s large informal workforce shows how output can rise while the median worker’s security changes little.",
      "The gap is not inevitable. Public provision decides whether growth becomes capability. Kerala built schools and health centres early and reached high human development before high income. The Multidimensional Poverty Index shows that direct measures of deprivation can fall quickly when basic services expand. Gandhi’s talisman asks the right question of any growth strategy: will it help the poorest person you have seen?",
      "People grow when their capabilities grow. Tagore warned that a society can meet every target and still treat people as instruments of production. An economy should therefore be measured by more than its speed of growth. The test is whether growth widens the freedoms of those at the bottom, sustains the natural base, and keeps people as the purpose of the economy rather than its tools."
     ],
     "An economy can grow while its people do not."
    ]
   ],
   "intro": [
    "Governments, media and markets watch growth figures closely. A rising GDP is celebrated, and a slowdown causes alarm. Yet growth is a measure of output, not of how people live. Two countries with the same income can differ greatly in health, education and freedom. The question is what development is for, and how the difference between an economy growing and people flourishing should shape policy."
   ],
   "claim": "Growth is a means, not an end. Development is the expansion of what people are able to do and be. Growth supplies resources for that expansion, but converting growth into well-being is a political achievement, not an automatic process. A good economy is judged by whether every person reaches a threshold of capability, whether the least advantaged gain, and whether natural capital is preserved. Growth is necessary, but treating it as the goal is a costly mistake.",
   "problem": [
    "Growth figures are easy to measure and compare. Averages can hide deep inequality: output may rise while jobs remain insecure and informal, and while the poorest see little change. States with similar income differ widely in literacy, life expectancy and child survival, which shows that growth alone does not decide how people live.",
    "The opposite danger is to treat growth as optional. Health, schooling and pensions are funded from a tax base that grows with the economy. Stagnation harms the poor first. The challenge is to pursue growth as a means while specifying at the outset what it is for and for whom, and to measure progress by outcomes for people rather than output alone."
   ],
   "distinction": [
    "A useful distinction",
    "Growth measures the size of the economy. Development measures the freedoms people enjoy. The first is a means to the second, and treating the means as the end hides the people the economy is supposed to serve."
   ],
   "thinkersTitle": "Six thinkers, six tests of development",
   "together": [
    "Putting the six together",
    "Sen defines development as freedom. Nussbaum sets a threshold for every person. Gandhi and Deendayal Upadhyaya test policy by the poorest and the last. Schumacher adds ecological sustainability. Tagore insists that people are the point of the economy. Together they show that growth is a means whose purpose must be specified from the start."
   ],
   "models": [
    [
     "Development is freedom.",
     "Sen defined development as the expansion of what people can do and be. Growth is a means, and converting it into well-being is a political achievement, not an automatic result."
    ],
    [
     "Thresholds reveal what averages hide.",
     "Nussbaum requires every person to reach a threshold of central capabilities. A rising average can conceal a fifth of the population below a decent life."
    ],
    [
     "The floor has risen, the goal is further.",
     "Multidimensional poverty fell from about 29 per cent in 2013-14 to about 11 per cent in 2022-23. The index measures low thresholds, so the distance to a decent life remains."
    ],
    [
     "Public provision converts income into capability.",
     "Kerala achieved high human development at moderate income through early investment in schools and health. Development can precede high growth."
    ],
    [
     "Growth is necessary but not sufficient.",
     "Stagnation harms the poor first and shrinks the resources for public services. The error is not pursuing growth but treating it as the end."
    ]
   ],
   "steps": [
    [
     "Distinguish growth from development.",
     "Use Sen."
    ],
    [
     "Set a threshold.",
     "Use Nussbaum’s list of central capabilities."
    ],
    [
     "Give evidence.",
     "Use MPI, Kerala and the SDG India Index."
    ],
    [
     "Show where growth fails people.",
     "Discuss jobless growth and informality."
    ],
    [
     "Add sustainability.",
     "Use Schumacher on natural capital."
    ],
    [
     "Give the case for growth.",
     "Explain why stagnation harms the poor."
    ],
    [
     "Conclude with purpose.",
     "Argue that growth should be specified by what it makes possible and for whom."
    ]
   ],
   "formula": "Pursue growth as a means, and specify at the outset what it is for and for whom. Judge the economy by the capabilities of its least advantaged people, by its care for natural capital, and by whether people remain its purpose rather than its instruments."
  }
 ],
 "Technology and the Modern Self": [
  {
   "thinkers": [
    [
     "Foucault",
     "techniques of the self",
     [
      "Michel Foucault’s late work supplies the frame. He argued that every culture provides techniques of the self: practices through which a person builds themselves as a subject. Confession, the diary and the examination of conscience were older instruments. The feed, the profile and the metric are the current ones.",
      "The older techniques belonged to the person using them. The newer ones belong to a company whose interests are not that person’s. Foucault’s account of the panopticon adds the mechanism: where a person may always be observed, they begin to observe themselves. Every action becomes a potential post."
     ],
     "the answer needs to explain how platforms shape the way people form themselves."
    ],
    [
     "James and Allport",
     "the self as knower and as known",
     [
      "William James, and later Gordon Allport, distinguished the self as knower from the self as known. One part of the self observes and judges, and another part is observed.",
      "The distinction becomes unstable online, because the audience’s response arrives fast enough to shape the self it is responding to. The known self starts to be written by others’ reactions before the knower has had time to reflect."
     ],
     "the question concerns identity formation and the influence of feedback."
    ],
    [
     "Festinger",
     "social comparison",
     [
      "Leon Festinger’s social comparison theory of 1954 names the engine of the distress. People evaluate themselves against others wherever no objective standard exists.",
      "Upward comparison with people who appear to be doing better is both compulsive and corrosive. A curated feed industrialises exactly that mechanism, showing each person an endless supply of others’ best moments."
     ],
     "the answer needs to explain FOMO, envy or low self-esteem linked to social media."
    ],
    [
     "Maslow",
     "self-actualisation and autonomy",
     [
      "Abraham Maslow described self-actualisation as the growth of an autonomous person towards their own potential.",
      "A self assembled from continuous external feedback has not been discovered. A self assembled that way has been built to a specification, and the specification belongs to somebody else. Maslow’s model asks whether growth comes from within or is shaped by metrics."
     ],
     "the question concerns personal growth, autonomy or authenticity."
    ],
    [
     "Marcus Aurelius",
     "writing for no reader",
     [
      "Marcus Aurelius offers the older technique against which the new one can be measured. He wrote the Meditations for no reader at all.",
      "The absence of an audience made his writing an instrument of self-knowledge rather than self-presentation. A journal with an audience is a performance. Once a record of inner life is written to be seen, it is edited by the response one expects."
     ],
     "the answer needs an example of reflection without an audience."
    ]
   ],
   "examples": [
    [
     "Social media and adolescent mental health",
     [
      "The claim that social media causes adolescent anxiety and depression is the most commonly overstated in the theme. Jonathan Haidt argued in 2024 that smartphones and social media caused the rise in adolescent anxiety and depression. Critics such as Candice Odgers and Andrew Przybylski accept the correlation but dispute the causal step, noting that most studies are cross-sectional and show small, mixed associations.",
      "Two objections are worth carrying. Much of the experimental evidence Haidt cites was run on adults, while policy targets children under thirteen. If the mechanism were algorithmic, the association should strengthen as algorithms improve, which is not clearly observed. A careful answer reports the correlation as robust and the causation as unsettled."
     ],
     "What does the evidence show about harm? Separate correlation from causation."
    ],
    [
     "Recommender systems and engagement",
     [
      "A recommender system does not choose what is good for the user, or even what the user says they want. The system predicts what will keep the user present, because engagement is what the business model sells.",
      "The objective explains most of what follows without any theory of malice. Content that provokes outrage holds attention better than content that qualifies. Autoplay and infinite scroll remove natural stopping points. Variable rewards, like those of slot machines, make refreshing compulsive. The interests of the user and the operator diverge at the moment the user would otherwise stop."
     ],
     "What is the platform designed to maximise? Show how the business model shapes the user’s experience."
    ],
    [
     "The Digital Personal Data Protection Act",
     [
      "India’s Digital Personal Data Protection Act was passed in August 2023, and its rules were notified in November 2025. The law is built on consent: personal data may be processed for a stated purpose with notice, and individuals may withdraw consent.",
      "The exemptions are where the argument lies. Section 17 allows the central government to exempt notified state agencies from the Act. Section 44(3) amended the Right to Information Act’s exemption for personal information, removing the public interest override. The result binds private processors substantially and the state considerably less."
     ],
     "Who does the law protect people from? Compare obligations on private companies with exemptions for the state."
    ],
    [
     "Correctives: detox, school bans and age limits",
     [
      "Three kinds of corrective operate at different levels. Individual digital detox relies on the user out-willing an interface built by teams with better data, which is the weakest approach. School phone restrictions work better because they change a default for everyone in a shared space, so no child pays a social cost for abstaining alone.",
      "Statutory age limits shift the obligation to the platform. Australia’s minimum age of sixteen for social media accounts is the furthest-reaching example. Each approach faces a difficulty. Age verification requires collecting more data, and a restriction that ends at the school gate or the national border is easily bypassed."
     ],
     "Which corrective changes the environment rather than relying on willpower? Compare individual, institutional and legal approaches."
    ],
    [
     "Online community as genuine self-discovery",
     [
      "The counter-case is strong and often left out. For a person whose surroundings offer nobody like them, an online community is not a substitute for connection but the only form of it available.",
      "In India, the point applies to a young person with a rare illness, someone whose caste or gender identity is unsafe to disclose locally, a disabled person facing inaccessible spaces, or a woman whose movement is restricted. The platform supplies what the neighbourhood withholds, and the self discovered there is genuine. The same architecture produces both harm and help, depending largely on what a person had offline."
     ],
     "For whom is the platform a lifeline? Show that online communities can support real self-discovery."
    ]
   ],
   "topics": [
    [
     "2021A1",
     [
      "Self-discovery once depended on reflection, conversation, solitude and experience. Today much of it happens through technology. Personality quizzes, recommendation feeds, fitness trackers and social media profiles tell people what they like, how they compare and who they are. Foucault described every culture’s techniques of the self. The platform has become one such technique, but it belongs to a company rather than to the person using it.",
      "The outsourcing changes the self being discovered. James and Allport distinguished the self as knower from the self as known, and online feedback now arrives fast enough to shape the known self before the knower reflects. Festinger’s social comparison explains why constant exposure to others’ curated lives produces anxiety. Maslow’s self-actualisation requires autonomy, and a self built from metrics has been assembled to another’s specification.",
      "The claim should not be pushed too far. For isolated people, online communities can enable real self-discovery. Evidence that social media harms mental health is correlational and disputed. The better conclusion is that self-discovery has been partly leased to technology, and people must reclaim some of its tools. Marcus Aurelius wrote for no reader, and reflection without an audience remains the surest path to knowing oneself."
     ]
    ],
    [
     "2024B1",
     [
      "Fear of missing out is the anxiety that others are enjoying experiences one is missing. Social media intensifies it by displaying a constant stream of others’ best moments. Festinger’s social comparison theory explains the mechanism: people judge themselves against others, and upward comparison with those who seem happier is corrosive. Recommender systems designed for engagement keep users scrolling through such comparisons.",
      "The link to depression and loneliness is widely argued. Jonathan Haidt has linked the rise in adolescent anxiety and depression to smartphones and social media. Critics such as Candice Odgers and Andrew Przybylski accept the correlation but question the causal claim, pointing to small and mixed effects in most studies. An honest answer treats the association as real and the causation as unsettled.",
      "The response should target the environment as much as the individual. School phone restrictions change the default for everyone. Age limits, such as Australia’s minimum age of sixteen, place obligations on platforms. Rules against manipulative design address the engagement model itself. Online communities also help isolated young people, so the goal is not to remove social media but to reduce the design features that turn connection into comparison and comparison into loneliness."
     ]
    ]
   ],
   "intro": [
    "People have always discovered themselves through the tools their culture offered: prayer, confession, diaries, conversation and solitude. Today much of that work happens through platforms: profiles, feeds, likes and metrics. The tools shape what a person notices about themselves and how they judge their worth. The question is whether self-discovery has been handed over to technology, and what that means for identity, mental health and freedom."
   ],
   "claim": "Self-discovery has not been abolished, but its tools have been leased. The older techniques of the self belonged to the person using them. The newer ones belong to companies whose interests differ from the user’s. When every action may be seen, people begin to observe and edit themselves for an audience. A self assembled from continuous external feedback risks being built to someone else’s specification. Yet the same platforms can also help isolated people find others like them, and the evidence on harm is still disputed.",
   "problem": [
    "Social media promises connection and self-expression. Its design also encourages constant comparison, performance and the pursuit of approval. Young people especially may measure themselves against curated images of others’ lives and feel anxious that they are missing out. The rise in adolescent anxiety has been linked to smartphones and social media, though the causal evidence is contested.",
    "A simple story of harm is also incomplete. For a young person with a rare illness, a disability or an identity unsafe to reveal locally, online communities may be the only place to find understanding. The challenge is to see how platform design shapes the self, to judge the evidence honestly, and to find correctives that protect the young without denying the value that some people find online."
   ],
   "distinction": [
    "A useful distinction",
    "Self-knowledge is written for no audience and can be honest. Self-presentation is written to be seen and is edited by the response one expects. The more of inner life that is performed, the less of it is discovered."
   ],
   "thinkersTitle": "Five thinkers, five tests of the self",
   "together": [
    "Putting the five together",
    "Foucault shows that platforms have become techniques of the self owned by others. James and Allport show how feedback reshapes the self it observes. Festinger explains the comparison that fuels FOMO. Maslow asks whether growth is autonomous. Marcus Aurelius shows reflection without an audience. Together they explain what it means for self-discovery to be outsourced."
   ],
   "models": [
    [
     "The tools of self-discovery are leased.",
     "Foucault described techniques through which people form themselves. The feed and the profile are modern techniques, but they belong to companies whose interests differ from users’."
    ],
    [
     "Feedback reshapes the self.",
     "James and Allport distinguished the self as knower from the self as known. Online reactions arrive fast enough to shape the known self before reflection can occur."
    ],
    [
     "Comparison drives FOMO.",
     "Festinger showed that people judge themselves against others. Curated feeds industrialise upward comparison, which fuels anxiety and the fear of missing out."
    ],
    [
     "Correlation is not causation.",
     "Haidt links social media to adolescent distress, while Odgers and Przybylski dispute the causal evidence. A careful answer treats the link as real and the cause as unsettled."
    ],
    [
     "Online community can be a lifeline.",
     "For people isolated by illness, disability or identity, platforms supply connection the neighbourhood withholds. The same architecture harms some and helps others."
    ]
   ],
   "steps": [
    [
     "Describe the change.",
     "Explain how technology has become a tool of self-discovery."
    ],
    [
     "Use Foucault.",
     "Show that the tools are owned by others and encourage self-surveillance."
    ],
    [
     "Explain the psychology.",
     "Use social comparison and the self as knower and known."
    ],
    [
     "Present the evidence honestly.",
     "Separate correlation from causation in mental health research."
    ],
    [
     "Show the business model.",
     "Explain engagement optimisation."
    ],
    [
     "Give the counter-case.",
     "Show how online communities help isolated people."
    ],
    [
     "Conclude with reclaiming the self.",
     "Recommend changes to design and habits of reflection without an audience."
    ]
   ],
   "formula": "Recognise that the tools of self-discovery have been leased to platforms built for engagement. Reclaim reflection without an audience, change the design and defaults that turn connection into comparison, and protect the online communities that give isolated people a place to belong."
  },
  {
   "thinkers": [
    [
     "Bentham",
     "observation that needs no intent",
     [
      "Jeremy Bentham designed the panopticon as a humane efficiency: a prison in which one unseen observer could watch every cell. Inmates who never knew when they were watched behaved as though they always were.",
      "Bentham’s benevolent intention is what makes the design instructive. The effect comes from the architecture, and nobody needs to intend harm for it to work."
     ],
     "the answer needs to show how design shapes behaviour without anyone intending it."
    ],
    [
     "Foucault",
     "the internalised observer",
     [
      "Michel Foucault drew out the consequence. What matters is not the watching but the internalising. The cost is not mainly what others learn about us. The cost is the conduct that never happens: the thought not pursued and the question not asked.",
      "The loss leaves no record and produces no complainant, which is why it appears in no assessment of a platform’s harms."
     ],
     "the question concerns surveillance, self-censorship or the hidden costs of being observed."
    ],
    [
     "The Buddha",
     "attention as the faculty that interrupts",
     [
      "The Buddha’s teaching on mindfulness identifies what is being taken. Attention is the faculty that interrupts the automatic movement from sensation to craving to distress.",
      "A mind trained never to rest anywhere has lost the instrument it might have used to notice what was happening to it. Losing attention means losing the capacity for self-correction."
     ],
     "the answer needs to explain why attention matters for well-being and self-control."
    ],
    [
     "Marcus Aurelius",
     "the retreat within",
     [
      "Marcus Aurelius supplied the same insight without technical vocabulary. He observed that people seek retreats in the countryside or by the sea, when they could at any moment retreat into themselves.",
      "The inner retreat is available only to a mind that still knows how to use it. Continuous distraction removes the one refuge that requires no travel."
     ],
     "the question concerns inner calm, solitude or reflection."
    ],
    [
     "Habermas",
     "attention and public reasoning",
     [
      "Jürgen Habermas gave the political version of the loss. A public sphere needs participants who can follow an argument to its end.",
      "Where communication becomes a managed display for consumption, the capacity for deliberation disappears with the capacity for attention. Democracy needs citizens who can attend long enough to judge."
     ],
     "the answer needs to link attention with democratic debate."
    ],
    [
     "Drucker",
     "attention as the productive asset",
     [
      "Peter Drucker sharpened the economic consequence. If the productive asset of a knowledge economy is the capacity to concentrate, then an environment engineered to fragment concentration consumes the very input the economy depends on.",
      "The consumption appears on no balance sheet as depletion. Firms and students lose productivity without any account recording the loss."
     ],
     "the question concerns productivity, learning or the knowledge economy."
    ]
   ],
   "examples": [
    [
     "Notification design and interruption",
     [
      "Notifications are not neutral technical features. Their timing, grouping, wording and default state are chosen, and chosen to produce a return visit. The evidence on cost is clear on one point. After an interruption, resuming a demanding task takes much longer than the interruption itself, because the mental context has to be rebuilt.",
      "The effect persists even when the notification is not acted on. The cost is not only the seconds spent looking at the phone. The anticipation of interruption itself degrades sustained attention, which is why silencing a device produces better work than merely resisting it."
     ],
     "What does an interruption really cost? Count the time to recover focus, not only the time spent looking."
    ],
    [
     "Multitasking and learning",
     [
      "Research on media multitasking supports a narrower claim than popular writing makes, and the narrower claim is still damaging. What people call multitasking is rapid switching, and switching costs time and accuracy in ways the switcher underestimates.",
      "Comprehension of difficult text falls when reading is mixed with messaging, yet readers believe they have understood. Studies comparing screen and paper reading find a modest advantage for paper on demanding texts. For a student, the felt sense of having studied is an unreliable sign of having learned."
     ],
     "Does the student learn or only feel busy? Separate the feeling of study from measured comprehension."
    ],
    [
     "Advertising and the incentive against depth",
     [
      "Where a publisher is paid for attention delivered to advertisers rather than for value delivered to readers, the incentive runs against depth. A long investigation costs months of salary, may produce nothing publishable, and is read by fewer people than a list or a controversy.",
      "The structural fix is to change what the reader pays for, which is why subscription and reader-funded models have returned. Public-interest journalism is increasingly funded by trusts. The trade-off must be stated: subscriptions produce better journalism for those who can pay, and may leave others with the advertising-funded version."
     ],
     "What does the business model reward? Link revenue models to the depth of content."
    ],
    [
     "Regulating design rather than content",
     [
      "Regulators have shifted from policing content to policing design, which is a more workable target. The European Union’s Digital Services Act requires very large platforms to assess risks, explain their recommender systems and offer an option not to be profiled.",
      "India’s Central Consumer Protection Authority issued guidelines in 2023 against dark patterns, naming manipulative practices such as false urgency, basket sneaking, confirm-shaming and subscription traps. Design regulation avoids asking the state to decide truth. Design regulation governs how a choice is presented, which is a narrower and more defensible power."
     ],
     "Can regulation protect attention without controlling speech? Focus on design rather than content."
    ],
    [
     "Moral panic and the burden of proof",
     [
      "Every communication technology has drawn similar warnings. In Plato’s Phaedrus, Socrates objects that writing will produce forgetfulness, because people will rely on external marks instead of memory, and a written text cannot answer questions. The same fears greeted print, the novel, radio, television and video games.",
      "The history does not show that present concerns are baseless. The history sets a burden of proof: whoever claims this time is different must identify what is structurally new. The strongest candidates are personalisation, constant availability and the measurement of every response."
     ],
     "What is genuinely new about the present technology? Identify structural differences, not only familiar fears."
    ]
   ],
   "topics": [
    [
     "2024B1",
     [
      "Fear of missing out grows where attention is constantly pulled towards what others are doing. Social media feeds are designed to hold attention through variable rewards, infinite scroll and notifications timed to bring users back. Each return exposes the user to more of others’ curated lives. Foucault showed how being observed changes conduct, and constant visibility on social media encourages people to watch themselves and compare.",
      "The link to depression and loneliness runs through attention. The Buddha taught that attention is the faculty that interrupts the movement from sensation to craving to distress. A mind constantly interrupted loses that capacity. Marcus Aurelius described the inner retreat available to anyone who can turn attention inward. Continuous distraction removes that refuge and leaves a person restless even when surrounded by connection.",
      "The evidence on causation remains disputed, and history warns against moral panic. Yet the design features that capture attention are real and structural. Effective responses change defaults rather than relying on willpower: school phone rules, limits on manipulative design and age restrictions on platforms. Young people also need spaces and habits where attention can rest. Protecting attention is the most direct way to reduce the fear of missing out."
     ]
    ]
   ],
   "intro": [
    "Information is now abundant, but the attention needed to understand it is scarce. Phones, feeds and notifications compete for every spare moment, and much of that competition is designed. People feel busy and distracted, students struggle to concentrate, and public debate shrinks into slogans. The question is why attention has become the scarce resource, what is lost when it is consumed, and what can protect it."
   ],
   "claim": "The scarce resource in an information economy is sustained attention: the capacity that turns information into understanding. Continuous observation and engineered interruption consume that capacity without leaving a record of the loss. The cost appears as thoughts not pursued, reading not understood and debates not followed. Protecting attention requires changing defaults and design, not only individual willpower, while recognising that new media have always drawn moral panic.",
   "problem": [
    "Every new notification seems trivial, and each scroll takes only seconds. Yet the combined effect is a fragmented mind that finds it harder to read deeply, think slowly or follow an argument. The costs are hard to measure. Nobody files a complaint about a thought they never had.",
    "The business model makes the problem structural. Platforms and many media outlets are paid for attention delivered to advertisers, so they are designed to capture and hold it. Individual willpower is weak against such design. Yet warnings about new technology have often been exaggerated, from Socrates’ fear of writing onwards. The challenge is to identify what is genuinely new, and to design correctives that protect attention without assuming every new medium is a disaster."
   ],
   "distinction": [
    "A useful distinction",
    "Information is what arrives. Attention is what turns it into understanding. An economy that multiplies information while consuming attention produces more data and less knowledge."
   ],
   "thinkersTitle": "Six thinkers, six tests of attention",
   "together": [
    "Putting the six together",
    "Bentham and Foucault show how observation reshapes conduct without intent. The Buddha and Marcus Aurelius show attention as the faculty of inner freedom. Habermas links attention to democratic reasoning. Drucker shows attention as the scarce asset of the knowledge economy. Together they explain why attention is the resource most consumed and least counted."
   ],
   "models": [
    [
     "Attention is the scarce resource.",
     "Information is abundant, but the attention that turns it into understanding is limited. An economy that consumes attention produces more data and less knowledge."
    ],
    [
     "Design works without intent.",
     "Bentham designed the panopticon as a humane reform, yet its architecture shaped behaviour on its own. Notification design and infinite scroll shape attention in the same way."
    ],
    [
     "The cost leaves no record.",
     "Foucault showed that the real cost of observation is the conduct that never happens. Thoughts not pursued and questions not asked appear in no account of harm."
    ],
    [
     "Attention enables self-correction.",
     "The Buddha taught mindfulness as the faculty that interrupts craving and distress. A mind never allowed to rest loses its capacity to notice what is happening to it."
    ],
    [
     "Regulate design, not speech.",
     "The EU’s Digital Services Act and India’s 2023 dark-pattern guidelines target manipulative design. Rules of this kind protect attention without asking the state to decide what is true."
    ]
   ],
   "steps": [
    [
     "Define attention as scarce.",
     "Distinguish information from the attention that turns it into understanding."
    ],
    [
     "Show how attention is captured.",
     "Explain notification design, engagement and business models."
    ],
    [
     "Show the costs.",
     "Use evidence on interruption and learning."
    ],
    [
     "Use thinkers.",
     "Bring in Foucault, the Buddha and Habermas."
    ],
    [
     "Consider the economy.",
     "Use Drucker on attention as a productive asset."
    ],
    [
     "Address moral panic.",
     "Identify what is genuinely new."
    ],
    [
     "Conclude with design and habits.",
     "Recommend changes in defaults, regulation and personal practice."
    ]
   ],
   "formula": "Treat sustained attention as the scarce resource that turns information into understanding. Change the defaults and designs that consume it, regulate manipulation rather than speech, and protect spaces where attention can rest."
  },
  {
   "thinkers": [
    [
     "Marx",
     "alienation",
     [
      "Karl Marx’s account of alienation is the necessary starting point. Work under industrial conditions estranges the worker from the product, the activity, other workers and their own human capacities.",
      "The question is therefore never simply whether jobs exist. The question is whether work returns anything to the person doing it. Automation that removes degrading labour is not automatically a loss. What changes is who captures the surplus created by higher productivity."
     ],
     "the answer needs to examine the quality of work and the distribution of gains from technology."
    ],
    [
     "Schumacher",
     "good work",
     [
      "E. F. Schumacher supplied a positive account of work. Good work gives people the chance to use and develop their faculties, to join others in a common task, and to produce something needed.",
      "Work therefore has three functions, and income is only one. A skilling policy built entirely around employability addresses a third of the problem."
     ],
     "the question concerns the meaning and dignity of work."
    ],
    [
     "Drucker",
     "the knowledge worker",
     [
      "Peter Drucker saw the transition earliest. He identified the knowledge worker, whose means of production is knowledge they own and carry.",
      "Drucker warned that such an economy makes continuous learning a condition of staying employable, not an extra. Reskilling is not a one-time event but a lifelong requirement."
     ],
     "the answer needs to explain lifelong learning and the changing nature of skills."
    ],
    [
     "Sen",
     "capability as the criterion",
     [
      "Amartya Sen gave the criterion for judging the outcome. What matters is whether people can do and be what they have reason to value.",
      "A transition that raises output while destroying people’s capability to earn a living has failed on its own terms. Sen’s test asks what happens to the displaced, not only to the average."
     ],
     "the question needs a criterion for judging technological change."
    ],
    [
     "McGregor",
     "Theory X and Theory Y",
     [
      "Douglas McGregor explained why the same technology can produce either outcome. Theory X assumes that people avoid work and must be controlled, and designs jobs accordingly. Theory Y assumes that people seek responsibility, and designs jobs that allow it.",
      "Automation deployed under Theory X strips the remaining judgment out of a role. Under Theory Y, automation removes drudgery and leaves the judgment to the worker."
     ],
     "the answer needs to show how management choices shape the effect of automation."
    ]
   ],
   "examples": [
    [
     "India’s particular exposure",
     [
      "India’s exposure to automation has an unusual shape. About nine in ten workers are informal, and many are in agriculture, construction and personal services, which are physically embodied and hard to automate with current systems.",
      "The exposed segment is the one India built most recently: routine cognitive work in services, back offices, customer support, basic coding and document handling. A large share of formal, aspirational, English-medium jobs sits there. The risk is not mass displacement across the economy. The risk is the removal of the rung that has carried graduates to secure salaries, just as the largest cohorts reach it."
     ],
     "Which jobs are most exposed, and who holds them? Look at the route from a degree to a secure job."
    ],
    [
     "Skilling and the placement gap",
     [
      "Skilling programmes are often measured by enrolments and certificates, which are inputs. The outcome that matters is whether a person is doing better-paid work a year later. Evaluations of Indian skilling have repeatedly found a gap between the two.",
      "The causes are structural. Courses are chosen by availability rather than local demand, employers do not recognise certificates, and short courses cannot replace learning on the job. Apprenticeships perform better because training happens inside a firm with a reason to keep the trainee. Measuring certificates instead of jobs repeats the error Goodhart described."
     ],
     "Does training lead to jobs? Measure placement and wages, not certificates."
    ],
    [
     "Gig and platform work",
     [
      "Platform work sits between two legal categories. A worker directed on price, allocation, route and rating is being managed. A worker classified as an independent contractor bears their own risk and receives none of an employer’s obligations. NITI Aayog estimated about 77 lakh gig workers in 2020-21, projected to reach 2.35 crore by 2029-30.",
      "Rajasthan passed a law for gig workers in 2023, creating registration and a welfare fund. Karnataka followed in 2025 with a welfare board funded by a fee on transactions. The Code on Social Security 2020 recognises gig and platform workers nationally. The state laws build a welfare floor without settling whether the platform is an employer."
     ],
     "Who protects the worker whose manager is an algorithm? Examine classification and social security."
    ],
    [
     "Universal basic income",
     [
      "The Economic Survey of 2016-17 examined universal basic income seriously. The Survey concluded that a genuinely universal payment at a meaningful level would be fiscally very demanding. A payment large enough to matter, multiplied by India’s population, approaches the size of the entire welfare budget.",
      "Serious Indian proposals are therefore quasi-universal, and the funding question becomes which existing subsidies are withdrawn. The argument in favour is administrative as well as ethical. A universal payment needs no eligibility test and so produces no exclusion error, which is where targeted schemes often fail."
     ],
     "Can income support cushion displacement affordably? Weigh fiscal cost against exclusion error."
    ],
    [
     "Where AI augments rather than replaces",
     [
      "The useful distinction is between tasks where a system produces the final output and tasks where it produces a candidate that a human judges. Diagnostic screening is the clearest case. An algorithm reading retinal images or chest X-rays can triage volumes no radiologist could see, and flag cases for expert attention where no expert is present.",
      "Machine translation has the same structure, and Indian language technology projects aim at multilingual access that human translation cannot provide at scale. Agricultural advisory brings weather and pest guidance to farmers who would otherwise receive none. In each case, AI extends reach into a gap rather than displacing a worker."
     ],
     "Does the technology replace workers or extend services into gaps? Look for augmentation where experts are absent."
    ]
   ],
   "topics": [
    [
     "2019B4",
     [
      "Artificial intelligence can automate tasks once thought to require human judgment. In India, the most exposed jobs are routine cognitive roles in services, back offices and basic coding, which have carried many graduates into secure employment. The threat of a jobless future is real for this group, and it arrives as India’s largest cohorts reach working age.",
      "Yet the future is not fixed by technology. Marx asked who captures the gains of higher productivity. McGregor showed that the same automation can strip judgment from work or remove drudgery and leave judgment with the worker. AI can also augment work, extending diagnostics, translation and agricultural advice to places without experts. Much of India’s workforce is in physical work that is hard to automate.",
      "Reskilling is necessary but insufficient. Drucker showed that continuous learning is now a condition of employment, yet Indian skilling programmes often produce certificates without jobs. Apprenticeships tied to employers work better. Gig workers need social security, and income support may be needed for those displaced. Schumacher reminds us that work offers meaning as well as income. The outcome depends on policy choices about training, protection and the sharing of gains, not on the technology alone."
     ]
    ]
   ],
   "intro": [
    "Artificial intelligence can now write, translate, diagnose, code and analyse. Some fear a future in which machines take most jobs. Others expect new and better work for those who reskill. Both views treat the outcome as a matter of technology. The question is what work means, who captures the gains of automation, and which choices decide whether AI brings a jobless future or better jobs."
   ],
   "claim": "Whether AI produces a jobless future or better work is a political and institutional choice, not a technological fate. Work provides income, the chance to develop one’s abilities and a place in a common task. Automation that removes drudgery can improve work, while automation that strips judgment from roles can degrade it. Reskilling matters, but it must be tied to real jobs, and social protection must support those displaced. The distribution of gains decides the outcome.",
   "problem": [
    "AI threatens jobs in routine cognitive work: back-office processing, customer support, basic coding and document handling. In India, these are the jobs that have offered many graduates a route to secure salaries. The threat falls exactly where the country has most recently built its middle class.",
    "Yet the jobless-future story is too simple. Much of India’s workforce is in agriculture, construction and personal services, which are hard to automate. AI can extend diagnostics, translation and advice to places without experts. Reskilling programmes often fail to lead to jobs, and gig work grows without clear protection. The challenge is to shape the transition so that productivity gains improve work and are shared."
   ],
   "distinction": [
    "A useful distinction",
    "Automation that replaces produces the final output and removes the worker. Automation that augments produces a candidate that a human judges, extending reach into gaps no expert covers. The same technology can do either, depending on how work is designed."
   ],
   "thinkersTitle": "Five thinkers, five tests of work",
   "together": [
    "Putting the five together",
    "Marx asks who captures the gains and whether work returns anything to the worker. Schumacher defines good work beyond income. Drucker makes learning lifelong. Sen judges the transition by what people can do. McGregor shows that job design decides whether automation degrades or improves work. Together they show that the future of work is a choice."
   ],
   "models": [
    [
     "Work is more than income.",
     "Schumacher described good work as developing faculties, joining a common task and producing something needed. Skilling that aims only at employability addresses a third of the problem."
    ],
    [
     "Gains depend on who captures them.",
     "Marx asked whether work returns anything to the worker. Automation raises productivity, and the distribution of that surplus decides whether workers gain."
    ],
    [
     "Design decides the effect.",
     "McGregor’s Theory X and Theory Y show that automation can strip judgment from jobs or remove drudgery. The same tool produces different work depending on management choices."
    ],
    [
     "Measure placement, not certificates.",
     "Indian skilling has often produced certificates without jobs. Apprenticeships succeed because training happens inside firms that want to keep the trainee."
    ],
    [
     "Augmentation extends reach.",
     "AI in diagnostics, translation and farm advice extends services into places without experts. Deploying AI to fill gaps is easier and more beneficial than replacing incumbents."
    ]
   ],
   "steps": [
    [
     "Define work broadly.",
     "Use Schumacher and Marx."
    ],
    [
     "Identify exposure.",
     "Show which Indian jobs are most at risk and why."
    ],
    [
     "Distinguish replacement from augmentation.",
     "Give examples of each."
    ],
    [
     "Evaluate reskilling.",
     "Use Drucker and evidence on placement."
    ],
    [
     "Address protection.",
     "Discuss gig work and income support."
    ],
    [
     "Show that design matters.",
     "Use McGregor."
    ],
    [
     "Conclude with choice.",
     "Argue that the outcome depends on policy and distribution."
    ]
   ],
   "formula": "Treat the future of work as a choice, not a fate. Deploy AI to augment and extend human work, tie training to real jobs, protect workers in transition, and share the gains of productivity so that automation removes drudgery rather than dignity."
  },
  {
   "thinkers": [
    [
     "Foucault",
     "power and knowledge",
     [
      "Michel Foucault’s central claim is that power and knowledge cannot be separated. Defining criminality, risk or normality is already an exercise of authority over the people being sorted.",
      "A system that ranks citizens by predicted risk is not neutrally observing a population. The system is producing one. The panoptic mechanism makes control self-enforcing, because a person who might always be observed begins to police themselves."
     ],
     "the answer needs to explain how classification and observation exercise power."
    ],
    [
     "Orwell",
     "control of language and record",
     [
      "George Orwell described the same architecture through language. His concern was a vocabulary designed to make certain thoughts unavailable.",
      "His observation that whoever controls the past controls the future applies to an environment where the record is held by whoever runs the platform or the database."
     ],
     "the question concerns control of information, records or public memory."
    ],
    [
     "Bentham",
     "the humane intention",
     [
      "Jeremy Bentham designed the panopticon as a reform of prisons. His intention was humane.",
      "The fact that a humane purpose produced a structure of total observation is exactly why good intentions are a poor safeguard. The design operates regardless of the designer’s motives."
     ],
     "the answer needs to show why good intentions do not justify surveillance."
    ],
    [
     "Habermas",
     "consent without coercion",
     [
      "Jürgen Habermas supplied the standard for judging such systems. A norm is valid only if everyone affected could accept it in a discussion free of coercion and deception.",
      "A consent notice that nobody can reasonably read fails that test. Consent obtained where refusal means losing a service is not free consent."
     ],
     "the question concerns consent, legitimacy or data protection."
    ],
    [
     "Ambedkar",
     "a right that cannot be exercised",
     [
      "Ambedkar insisted that a right which cannot be exercised is indistinguishable from a right that does not exist.",
      "The safeguard that works is therefore not transparency alone, because knowing that a database exists helps little. The safeguard is contestability: whether the person classified can see, question and appeal the category applied to them."
     ],
     "the answer needs to show why remedies and appeals matter."
    ],
    [
     "Schumacher",
     "scale and consent",
     [
      "E. F. Schumacher’s question about scale supplies the design rule. A system too large for its users to understand cannot meaningfully be consented to.",
      "Minimisation, retention limits and a ban on linking databases across purposes are not concessions to privacy advocates. Limits of this kind are the conditions under which consent means anything at all."
     ],
     "the question concerns data minimisation and the design of large systems."
    ]
   ],
   "examples": [
    [
     "The Puttaswamy test",
     [
      "In Justice K. S. Puttaswamy v Union of India in 2017, nine judges unanimously held that privacy is a fundamental right under Article 21. The judgment’s lasting contribution is its test. A state intrusion must rest on a law, pursue a legitimate aim, be proportionate and the least restrictive means available, and carry safeguards against abuse.",
      "Applying the test honestly is demanding. Many contested surveillance practices in India fail the first step, because they rest on executive orders rather than statutes. The test turns a general anxiety about privacy into four specific questions with checkable answers."
     ],
     "Does the intrusion meet legality, necessity and proportionality? Apply each part of the test in turn."
    ],
    [
     "Authentication failure and exclusion",
     [
      "Aadhaar’s difficulties are best understood as a design question about defaults. When biometric authentication fails, the system treats the failure as an unverified claim rather than an unreadable sensor, so the cost falls on the claimant.",
      "Jean Drèze and colleagues surveyed about 1,000 households across 32 villages in Jharkhand and found exclusion rates as high as twenty per cent where every ration purchase required authentication. The Right to Food Campaign documented at least 57 hunger-related deaths between 2015 and 2018, at least 19 linked to Aadhaar-related exclusion. In any verification system, the decisive choice is what happens on failure."
     ],
     "What happens when the system fails? Look at who bears the cost of an error."
    ],
    [
     "Facial recognition without a statute",
     [
      "Facial recognition in Indian policing has expanded without a law authorising it. Responding to information requests from the Internet Freedom Foundation, Delhi Police disclosed that it treats a similarity score above eighty per cent as a positive match, and that its use rests on a departmental order.",
      "Eighty per cent is not a confidence level in any evidential sense. In a 2018 test by the American Civil Liberties Union at a similar threshold, a commercial system falsely matched 28 members of the United States Congress with arrest photographs. Measured against Puttaswamy, the practice fails on legality before accuracy is even considered."
     ],
     "Is the technology authorised by law and accurate enough to act on? Check legality first, then error rates."
    ],
    [
     "Function creep",
     [
      "Function creep is the process by which a system built for one purpose becomes required for others. Each extension seems reasonable, and none is separately debated. Aadhaar was introduced to make subsidy delivery more reliable. Aadhaar then became progressively necessary for bank accounts, phone connections, school admissions and pensions.",
      "The mechanism is administrative convenience rather than conspiracy, since an existing database is cheaper for any department than building its own. The original consent no longer covers the current use, and nobody approved the overall system as a whole. Purpose limitation is therefore the central principle of data protection."
     ],
     "Is the data being used for the purpose for which it was collected? Trace each extension of use."
    ],
    [
     "Unpublished restrictions and contestability",
     [
      "A restriction that cannot be examined cannot be contested. In Anuradha Bhasin v Union of India in 2020, the Supreme Court held that indefinite internet shutdowns are impermissible and that orders must be reasoned, proportionate, reviewed and published.",
      "India recorded 84 shutdowns in 2024, the most of any democracy, and orders often go unpublished. Where an order is not published, the remedy exists in principle and is unusable in practice. Publication and automatic expiry are not procedural details. Publication and expiry are the conditions under which the right operates at all."
     ],
     "Can the citizen see and challenge the order? Check publication and expiry."
    ]
   ],
   "topics": [
    [
     "practice",
     [
      "Every data system sorts people into categories: eligible or ineligible, low risk or high risk, verified or unverified. Foucault argued that defining such categories is an exercise of power, because it settles questions about people who were never asked. A system that ranks citizens by predicted risk does not simply observe a population. The system shapes how that population is treated.",
      "The consequences are concrete. When Aadhaar authentication failed in Jharkhand, families were classified as unverified and lost rations. When facial recognition sets a match threshold of eighty per cent, people can be classified as suspects by a system with no statutory basis. When a database built for one purpose spreads to others, the categories follow people into banks, schools and pensions.",
      "Because classification is power, it must be constrained like any other power. Puttaswamy requires legality, necessity and proportionality. Purpose limitation keeps categories within the use for which they were created. Ambedkar’s insistence that rights must be exercisable points to the most important safeguard: every person classified should be able to see the category, question it and appeal it."
     ],
     "Classification is power."
    ],
    [
     "practice",
     [
      "Most surveillance systems are introduced for good reasons: to reduce fraud, improve welfare, prevent crime or protect public order. Bentham designed the panopticon as a humane reform. Yet the architecture of total observation worked the same way whatever its designer intended. People who may be watched begin to watch themselves, and the cost appears as thoughts and actions that never happen.",
      "Good intentions also do not prevent function creep or error. Aadhaar was introduced for subsidy delivery and became necessary for many services. Authentication failures excluded the poor from rations. Internet shutdowns meant to maintain order often go unpublished, making them impossible to challenge.",
      "Safeguards must therefore be structural. Every intrusion should rest on law, as Puttaswamy requires. Systems should collect only what they need and keep it only as long as necessary. Databases should not be linked across purposes. Orders should be published and should expire automatically. Most important, those affected must be able to contest decisions. A state that relies on good intentions rather than safeguards has left citizens dependent on the continuing goodwill of those who watch them."
     ],
     "Good intentions are a poor safeguard against surveillance."
    ]
   ],
   "intro": [
    "Governments and companies collect more data about people than ever before: identity, location, purchases, health and faces. Data can make welfare more efficient and policing more effective. Data can also be used to classify, exclude and control. The question is how surveillance and data collection change the relationship between citizens and power, and what safeguards make such systems legitimate."
   ],
   "claim": "Classification is power. Whoever defines categories such as risk, eligibility or suspicion settles questions about people who were never asked. Surveillance shapes behaviour even without intent, because people who may be watched begin to watch themselves. Good intentions are therefore a poor safeguard. The safeguards that work are legality, minimisation, purpose limitation and above all contestability: the ability of the person classified to see, question and appeal the category applied to them.",
   "problem": [
    "Data systems promise efficiency. Digital identity can reduce fraud, cameras can help find criminals, and linked databases can deliver benefits faster. Each system is usually introduced for a reasonable purpose. Over time, systems extend to new uses, link with other databases and become required for ordinary life, often without new debate.",
    "The costs fall unevenly. When authentication fails, the poor lose rations and pensions. When facial recognition misidentifies, innocent people face suspicion. When orders restricting communication are not published, citizens cannot challenge them. The challenge is to capture the benefits of data while ensuring that every system rests on law, collects only what it needs, stays within its purpose and can be challenged by those it affects."
   ],
   "distinction": [
    "A useful distinction",
    "Identification verifies that a person is entitled to something. Surveillance keeps a permanent record of what they do. A state can verify an entitlement without keeping a record of every transaction, and most of the welfare gain survives the separation."
   ],
   "thinkersTitle": "Six thinkers, six tests of surveillance",
   "together": [
    "Putting the six together",
    "Foucault shows that classification is power. Orwell shows the control of records. Bentham shows that humane intent does not prevent harm. Habermas sets the test of free consent. Ambedkar insists on rights that can be exercised. Schumacher shows why systems must be small enough to understand. Together they define the safeguards that make data systems legitimate."
   ],
   "models": [
    [
     "Classification is power.",
     "Foucault showed that defining categories such as risk or eligibility is an exercise of authority. Data systems do not just observe people. They decide how people are treated."
    ],
    [
     "Good intentions do not protect.",
     "Bentham designed the panopticon as a humane reform, yet its architecture controlled behaviour regardless of intent. Surveillance must be judged by its design, not its purpose."
    ],
    [
     "Law comes first.",
     "Puttaswamy in 2017 required legality, necessity, proportionality and safeguards. Facial recognition resting on a departmental order fails the first test."
    ],
    [
     "The default on failure carries moral weight.",
     "Aadhaar authentication failures excluded Jharkhand households from rations. In any verification system, what happens when the system fails decides who bears the cost."
    ],
    [
     "Contestability is the key safeguard.",
     "Ambedkar held that a right that cannot be exercised does not exist. People must be able to see, question and appeal the categories applied to them."
    ]
   ],
   "steps": [
    [
     "Explain classification as power.",
     "Use Foucault and Orwell."
    ],
    [
     "Show why intent is not enough.",
     "Use Bentham’s panopticon."
    ],
    [
     "Apply the legal test.",
     "Use Puttaswamy’s four requirements."
    ],
    [
     "Give Indian examples.",
     "Discuss Aadhaar exclusion, facial recognition and function creep."
    ],
    [
     "Separate identification from surveillance.",
     "Show that entitlements can be verified without permanent records."
    ],
    [
     "Set design rules.",
     "Recommend minimisation, purpose limitation and retention limits."
    ],
    [
     "Conclude with contestability.",
     "Argue that those classified must be able to see and challenge decisions."
    ]
   ],
   "formula": "Treat every data system as an exercise of power. Ground it in law, collect only what is needed, keep it to its purpose, publish its orders and give every person classified the means to see, question and appeal the category applied to them."
  },
  {
   "thinkers": [
    [
     "Einstein",
     "capability does not decide use",
     [
      "Albert Einstein urged President Roosevelt in 1939 to build an atomic weapon before Germany could. He later worked for disarmament, and signed the Russell-Einstein Manifesto against nuclear weapons days before his death in 1955.",
      "The sequence shows two things. Technical capability settles nothing about whether a thing should be built. The people best placed to understand a technology cannot leave decisions about its use to whoever deploys it later."
     ],
     "the answer needs to address the ethics of powerful technologies."
    ],
    [
     "Kautilya",
     "capability sets the menu",
     [
      "Kautilya’s sixfold policy treats capability as the variable that decides which options are available: peace, war, neutrality, preparation, alliance or dual policy.",
      "A state’s technological position therefore sets the menu long before any negotiation begins. The leverage is exercised without being stated aloud."
     ],
     "the question needs an Indian framework linking capability with foreign policy choices."
    ],
    [
     "Nehru",
     "science as the base of autonomy",
     [
      "Nehru’s investment in scientific institutions, from the IITs to the atomic energy and space programmes, came from understanding that independence needs a capability base.",
      "Non-alignment as a doctrine of autonomy required capabilities that took decades to build. Nehru’s experience shows both the vision and the long lag between investment and leverage."
     ],
     "the answer needs a historical Indian example of building scientific capability."
    ],
    [
     "Schumacher",
     "dependency as a lever",
     [
      "E. F. Schumacher’s warning about scale applies to states as much as villages. A technology a country cannot build, maintain or replace is a dependency.",
      "Dependencies are the instruments through which pressure is applied when it cannot be applied openly. Resilience requires the ability to repair and replace, not only to buy."
     ],
     "the question concerns technological dependence and self-reliance."
    ],
    [
     "Orwell",
     "power without announcement",
     [
      "George Orwell named what the silence permits. The most consequential exercises of power are those for which no announcement is ever made.",
      "Where there is no announcement, there is nothing to object to. Export controls, cable disruptions and cyber operations often work in exactly this silence."
     ],
     "the answer needs to explain hidden or unannounced forms of power."
    ],
    [
     "Ambedkar",
     "rights that cannot be exercised",
     [
      "Ambedkar’s point that a right which cannot be exercised is indistinguishable from one that does not exist applies to sovereignty.",
      "A state that cannot build or replace the systems its economy runs on holds formal independence alongside practical dependence. The gap between the two is where the silent factor operates."
     ],
     "the question concerns the difference between formal and practical sovereignty."
    ]
   ],
   "examples": [
    [
     "Semiconductor chokepoints",
     [
      "Semiconductor manufacturing shows that modern leverage lies at chokepoints rather than in overall size. Advanced chip fabrication is concentrated in a handful of firms. The extreme ultraviolet lithography machines required are made by essentially one company in the Netherlands, and design software and certain materials are similarly concentrated.",
      "Export controls exploit these narrow points. A country with a large market but no place in the chain has little to answer with. India’s Semiconductor Mission targets assembly, testing and a first commercial fabrication plant at a mature node, a strategy of supply security rather than frontier leadership. Dependence is measured by whether a substitute exists at any price."
     ],
     "Where are the chokepoints, and does a substitute exist? Map dependence by irreplaceability, not trade volume."
    ],
    [
     "Digital public infrastructure as soft power",
     [
      "India’s digital public infrastructure has become a distinctive instrument of influence because it is offered as a template rather than a product. Identity, payments and document storage are provided as open specifications a country can implement itself, avoiding dependence on a foreign vendor. UPI and UPI-linked payments now work in several countries, including Singapore, the UAE, Nepal, Bhutan, Mauritius, Sri Lanka and France.",
      "A country running on Indian-designed systems develops a continuing relationship in standards, training and interoperability. The qualification is that exporting an architecture also exports its assumptions, including its treatment of consent and state access to data."
     ],
     "Does sharing technology build influence, and what does it export with it? Consider both partnership and the assumptions built into the design."
    ],
    [
     "Undersea cables and cyber operations",
     [
      "Almost all intercontinental data traffic runs through submarine cables. The infrastructure is sparse, largely unguarded and concentrated at a few landing points, which makes it both critical and exposed.",
      "The deeper strategic difficulty is attribution. A cyber operation can be routed through third countries and carried out by actors whose link to a state is deliberately unclear. The target may know it was attacked without being able to prove by whom. Deterrence depends on the promise of retaliation, and retaliation requires an address. Operations are designed to stay below the threshold that would justify a response, which is what the grey zone means."
     ],
     "Can a state respond to an attack it cannot attribute? Examine attribution and thresholds in cyber conflict."
    ],
    [
     "Critical minerals and the energy transition",
     [
      "Decarbonisation substitutes one dependence for another. Batteries, magnets, wind turbines and electrolysers need lithium, cobalt, nickel and rare earth elements. The constraint is less about deposits than processing. China accounts for roughly seventy per cent of rare earth mining and about ninety per cent of processing capacity, and has used export licensing as an instrument.",
      "India approved the National Critical Mineral Mission in January 2025, with an outlay of about 34,300 crore rupees over seven years for exploration, overseas assets, recycling and processing. An energy transition presented as freedom from imported fuel can reproduce the same vulnerability in a different material."
     ],
     "Does the energy transition create new dependencies? Look at processing capacity, not only reserves."
    ],
    [
     "Dual-use space capability",
     [
      "India’s space programme was justified from the start in developmental terms: communication for remote areas, weather forecasting, resource mapping and disaster warning. The framing is accurate but incomplete, because space capabilities are inherently dual-use.",
      "A launch vehicle that places a satellite in orbit is also a delivery system. An imaging satellite that maps crops also images installations. A navigation system that guides fishermen also guides munitions. The civilian purpose is not a cover. The line between civilian and strategic capability is thin in space by nature, which is why access to launch and imagery is treated as a question of autonomy."
     ],
     "Can civilian and strategic technology be separated? Show how dual-use capability shapes strategic relations."
    ]
   ],
   "topics": [
    [
     "2020B4",
     [
      "Diplomacy and war are the visible faces of international relations. Technology works beneath them. Kautilya taught that capability decides which policies are available, and technology is now the core of capability. A country that controls semiconductor chokepoints, critical mineral processing or undersea cables holds leverage that needs no announcement. Export controls and supply restrictions can shape another state’s choices quietly, as Orwell’s warning about unannounced power suggests.",
      "Dependence is the channel of this silent influence. Schumacher warned that a technology one cannot build or replace is a dependency. India’s Semiconductor Mission and National Critical Mineral Mission are attempts to reduce such dependence. Nehru’s early investment in scientific institutions shows that capability takes decades to build. Ambedkar’s insight applies to sovereignty: a right that cannot be exercised is no right at all, and formal independence without capability is incomplete.",
      "Technology is also a positive instrument. India’s digital public infrastructure, shared as open templates and linked through UPI to several countries, builds influence without dependence. Space capabilities serve development and security at once. Einstein’s life reminds us that capability does not decide use. Technology is the silent factor because it sets the terms of international relations before diplomats speak, and wise statecraft builds capability while keeping ethical judgment over its use."
     ]
    ]
   ],
   "intro": [
    "International relations are usually described through diplomacy, alliances, trade and war. Yet much of the real balance of power is set earlier and more quietly: in laboratories, factories, supply chains and technical standards. A country that cannot make critical technologies depends on those who can. The question is how technology silently shapes international relations, and what it means for India’s autonomy."
   ],
   "claim": "Technology is a silent factor in international relations because capability decides which choices are available long before any negotiation begins. Dependence on technologies a state cannot build, maintain or replace becomes an instrument of pressure that need never be announced. Strategic autonomy therefore requires capability, not only declarations. Yet capability also raises ethical questions that its builders cannot leave to others.",
   "problem": [
    "Formal sovereignty can hide practical dependence. A country may be independent on paper while relying on others for semiconductors, critical minerals, satellite imagery or communication cables. Export controls, supply disruptions and cyber operations can apply pressure without any declaration of hostility.",
    "Building capability is slow and expensive. Nehru’s investment in scientific institutions took decades to pay off. Technologies are often dual-use, serving both civilian and military ends. Exporting technology can build influence and also export its assumptions. The challenge is to see technology as a central factor in statecraft, build the capabilities that preserve autonomy, and keep ethical judgment over how they are used."
   ],
   "distinction": [
    "A useful distinction",
    "Formal independence is the legal right to decide. Practical autonomy is the capability to act on the decision. A state that cannot build or replace the systems its economy runs on holds the first without the second."
   ],
   "thinkersTitle": "Six thinkers, six tests of technological power",
   "together": [
    "Putting the six together",
    "Einstein shows that capability does not decide use. Kautilya shows that capability sets the menu of choices. Nehru shows the long work of building a scientific base. Schumacher shows dependency as a lever. Orwell shows power exercised without announcement. Ambedkar shows the gap between formal and practical sovereignty. Together they explain why technology is the silent factor in international relations."
   ],
   "models": [
    [
     "Capability sets the menu.",
     "Kautilya taught that a state’s strength decides which policies are available. Technological capability now defines the options before any negotiation begins."
    ],
    [
     "Dependence is a silent lever.",
     "Schumacher warned that a technology one cannot build or replace is a dependency. Export controls on chips or minerals apply pressure without any declaration."
    ],
    [
     "Chokepoints matter more than size.",
     "One company makes the machines for the most advanced chips, and China processes about ninety per cent of rare earths. Leverage lies where no substitute exists."
    ],
    [
     "Formal sovereignty needs practical capability.",
     "Ambedkar held that a right that cannot be exercised does not exist. A state that cannot replace critical systems holds independence without autonomy."
    ],
    [
     "Capability does not decide use.",
     "Einstein urged the atomic bomb and then worked for disarmament. The builders of powerful technology cannot leave the ethics of its use to others."
    ]
   ],
   "steps": [
    [
     "Explain why technology is silent.",
     "Show how capability shapes options before diplomacy."
    ],
    [
     "Use Kautilya.",
     "Link capability to available policies."
    ],
    [
     "Identify dependencies.",
     "Discuss semiconductors, critical minerals and cables."
    ],
    [
     "Show India’s responses.",
     "Use the Semiconductor Mission and the National Critical Mineral Mission."
    ],
    [
     "Show technology as influence.",
     "Discuss digital public infrastructure and space."
    ],
    [
     "Address grey-zone conflict.",
     "Discuss cyber operations and attribution."
    ],
    [
     "Conclude with capability and ethics.",
     "Argue for building capability while keeping judgment over its use."
    ]
   ],
   "formula": "Treat technology as the silent factor that sets the terms of international relations. Build the capabilities that turn formal independence into practical autonomy, share technology in ways that build partnership rather than dependence, and keep ethical judgment over how capability is used."
  }
 ]
};
