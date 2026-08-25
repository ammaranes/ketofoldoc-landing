export const ch21 = {
  id: "miller_ch21",
  chapterNumber: 21,
  title: "Intravenous Anesthetics",
  bookId: "miller",
  readTimeMinutes: 14,
  sections: [
    {
      title: `Overview 1`,
      content: `## <mark>Chapter 21: Intravenous Anesthetics & Ambulatory Review</mark>`
    },
    {
      title: `Overview 2`,
      content: `## **<mark>1. PROPOFOL & FOSPROPOFOL</mark>**`
    },
    {
      title: `Physicochemical Characteristics`,
      content: `Propofol (2,6-diisopropylphenol) is an alkylphenol derivative. It is highly lipid soluble and insoluble in aqueous solutions. The standard formulation consists of 1% propofol, 10% soybean oil, 1.2% purified egg phospholipid (emulsifier), 2.25% glycerol (tonicity adjuster), and sodium hydroxide to adjust pH to 7. Disodium edetate (EDTA) or metabisulfite is added as a bacteriostatic agent to retard microbial growth in this high-fat medium, which acts as an excellent culture medium for organisms like _Staphylococcus aureus_ and _Escherichia coli_ .`
    },
    {
      title: `Pharmacokinetics (PK)`,
      content: `- **Metabolism & Clearance:** Chiefly metabolized in the liver via oxidation to 1,4-diisopropyl quinol, followed by glucuronide conjugation to form propofol-1-glucuronide, quinol-1-glucuronide, and quinol-4-glucuronide, which are excreted by the kidneys. Metabolites are inactive. 

- **Extrahepatic Metabolism:** Total body clearance ( **_1.5 - 2.2 L/min_** ) exceeds hepatic blood flow. Extrahepatic clearance has been confirmed during the anhepatic phase of liver transplantation. The kidneys account for up to 30% of clearance. The lungs account for 20% to 30% first-pass uptake and elimination after a bolus dose. 

- **Enzyme Inhibition:** Propofol is an instantaneous competitive inhibitor of CYP3A4 activity. Exposure at a blood concentration of **_3 mcg/mL_** reduces CYP3A4 activity by 37%, altering midazolam clearance. 

- **Disposition:** Described by a 3-compartment model. Initial distribution half-life is **_1 - 8 min_** , slow distribution half-life is **_30 - 70 min_** , and the elimination half-life is **_4 - 23.5 hours_** . 

- **Context-Sensitive Half-Time:** Strikingly short ( **_< 10 min_** for infusions under 3 hours, and **_< 40 min_** for infusions up to 8 hours). Recovery remains rapid because awakening occurs after a minor drop in plasma levels (anesthesia range: **_2 - 5 mcg/mL_** ; awakening level: **_< 1.5 mcg/mL_** ).`
    },
    {
      title: `Overview 5`,
      content: `#### **Special Populations:**`
    },
    {
      title: `Section`,
      content: `- _Elderly:_ Decreased clearance and smaller central compartment due to lower cardiac output. Because of this and enhanced neural sensitivity, patients ≥ 80 years old require a 50% dose reduction compared to a 20-year-old. 

- Children: Larger central compartment (50% larger) and rapid clearance (25% faster). Weight-adjusted induction doses are higher (2.5–3 mg/kg). 

- Hepatic disease: Volume of distribution increases, clearance is maintained via extrahepatic pathways, and clinical recovery is largely unchanged; no routine dose adjustments are required.`
    },
    {
      title: `Pharmacodynamics & Systemic Effects`,
      content: `- **Central Nervous System (CNS):** Hypnotic effect is mediated by enhancing γ-aminobutyric acid (GABA)induced chloride currents through stereospecific binding to the β subunit (β1, β2, and β3 transmembrane domains) of the **_GABA_A_** receptor. At low concentrations, it potentiates GABA; at higher clinical 

concentrations, it directly gates the chloride channel. It suppresses cerebral metabolism ( **_CMRO_2_** ), lowers intracranial pressure (ICP) by 30% to 50%, and decreases intraocular pressure by 30% to 40%. 

- **Cardiovascular System:** Causes dose-dependent arterial hypotension predominantly through peripheral vasodilation (sympatholysis, smooth muscle intracellular **_Ca^{2+}_** mobilization inhibition, prostacyclin synthesis reduction, and activation of **_K^+_** -ATP channels). Heart rate is minimally altered because propofol resets or inhibits the baroreflex, blunting tachycardic compensation. 

- **Respiratory System:** Induces a 25% to 30% incidence of apnea following induction, which is enhanced by opioids. Maintenance infusions depress tidal volume (by 40% at 100 mcg/kg/min) and depress the ventilatory response to hypoxia via carotid body chemoreceptor depression. It preserves hypoxic pulmonary vasoconstriction (HPV) and induces direct bronchodilation. 

- **Antiemetic Effect**: Widespread unique antiemetic effect at subhypnotic levels, mediated by decreasing serotonin levels in the area postrema. The median antiemetic concentration is **_343 ng/mL_** . 

**Propofol Infusion Syndrome (PRIS):** A rare, fatal complication associated with prolonged infusions ( **_≥ 4 mg/ kg/h_** or **_≥ 67 mcg/kg/min_** for > 48 hours). Characterized by acute refractory bradycardia leading to asystole, severe metabolic acidosis (base deficit > 10 mmol/L), rhabdomyolysis, hyperlipidemia, enlarged/fatty liver, cardiomyopathy, and hyperkalemia. Driven by genetic disorders of fatty acid metabolism (e.g., MCAD deficiency) and low carbohydrate supply. Lipemia is an early warning sign.`
    },
    {
      title: `Fospropofol Disodium`,
      content: `Fospropofol is a water-soluble prodrug of propofol metabolized by hepatic alkaline phosphatases to active propofol, formaldehyde, and phosphate. Molar equivalence dictates that 1.86 mg of fospropofol sodium generates 1 mg of active propofol. It does not cause pain on injection but is associated with transient perineal paresthesias and pruritus. It was classified as a DEA controlled substance in 2009.`
    },
    {
      title: `Overview 9`,
      content: `## **<mark>2. BARBITURATES</mark>**`
    },
    {
      title: `Physicochemical Properties & Structure-Activity Relationships (SAR)`,
      content: `Barbiturates are derivatives of barbituric acid (2,4,6-trioxohexahydropyrimidine), formed by condensation of malonic acid and urea. Tautomerization (keto-enol) allows the enol form to form water-soluble sodium salts in highly alkaline solutions (pH > 10). Reconstitution must avoid acidic solutions (lactated Ringer's, opioids, muscle relaxants) to prevent immediate free-acid precipitation that can occlude IV lines. 

- Substitution of sulfur at C2 (thiobarbiturates like thiopental and thiamylal) markedly enhances lipid solubility, leading to rapid brain penetration and fast onset of action. 

- Methylation at position 1 (oxybarbiturates like methohexital) shortens duration of action but can induce excitatory side effects (tremors, myoclonus, hiccups, and coughing).`
    },
    {
      title: `Pharmacokinetics & Metabolism`,
      content: `Termination of a single induction bolus occurs purely via rapid redistribution from the vessel-rich group (VRG) to lean tissues (skeletal muscle) and later fat. Hepatic clearance via oxidation at C5 terminates prolonged administrations. Thiopental exhibits an elimination half-life of 12 hours with a low hepatic extraction ratio (0.15). Methohexital has a shorter elimination half-life (4 hours) due to its high hepatic clearance ($7.8-12.5 

mL/kg/min$) and higher extraction ratio (0.5). High doses or prolonged infusions lead to zero-order (MichaelisMenten) kinetics due to hepatic enzyme saturation.`
    },
    {
      title: `Pharmacodynamics & Contraindications`,
      content: `Barbiturates bind to the $ eta$ subunit of the $GABA_{A}$ receptor, facilitating chloride current by increasing the duration of channel openings. At high doses, they act as direct agonists. Barbiturates cause dosedependent decreases in **_CMRO_2_** up to a maximum of 50% (at which point the EEG becomes isoelectric, reflecting complete suppression of neuronal signaling while basal cellular metabolic integrity is preserved). They cause matching drops in CBF and ICP, preserving cerebral perfusion pressure (CPP). They cause venodilation, pooling, a direct negative inotropic effect, and central respiratory drive depression ("double apnea").`
    },
    {
      title: `Absolute Contraindications to Barbiturates:`,
      content: `- **Acute Intermittent Porphyria:** Barbiturates potently induce oxidative microsomes and stimulate γ- aminolevulinic acid (ALA) synthetase, precipitating a life-threatening porphyria attack. 

- Status asthmaticus and uncompensated hemorrhagic shock/hypovolemia.`
    },
    {
      title: `Overview 14`,
      content: `## **<mark>3. BENZODIAZEPINES & FLUMAZENIL</mark>**`
    },
    {
      title: `Pharmacokinetics & Profiles`,
      content: `Benzodiazepines act selectively at the **_GABA_A_** receptor's benzodiazepine binding site at the interface of specific subunits. Binding is stereospecific and saturable. Receptor affinity/potency ranks: **lorazepam > midazolam > diazepam** . 

|**Drug**|**Classification**|**Metabolic Pathway & Active**<br>**Metabolites**|**Elimination**<br>**Half-Life**|**Clinical Pearls &**<br>**Considerations**|
|---|---|---|---|---|
|**Midazolam**|Short-acting|CYP3A4/5 oxidation to 1-<br>hydroxymethylmidazolam<br>(active, weaker parent affinity,<br>conjugates and accumulates in<br>renal failure).|1.7 – 3.5<br>hours|Water-soluble at pH 3.5<br>due to an open imidazole<br>ring; closes at physiologic<br>pH 7.4 to become highly<br>lipophilic. Bioavailability<br><50% orally due to high<br>intestinal/hepatic first-pass<br>metabolism.|
|**Diazepam**|Long-acting|CYP2C19 & CYP3A4 to N-<br>desmethyldiazepam (active,<br>half-life up to 200 hours) and<br>oxazepam.|Prolonged;<br>clearance<br>drops with<br>age|Highly lipophilic,<br>distributes extensively into<br>fat. Omeprazole and<br>ciprofloxacin potently<br>prolong its half-life by<br>inhibiting CYP2C19.|
|**Lorazepam**|Intermediate|Direct hepatic glucuronidation<br>to an inactive glucuronide.<br>Minimal age-related changes.|8 – 25 hours|Unpredictable duration of<br>anterograde amnesia.<br>Cleared slowly in hepatic<br>failure. Probenecid and<br>valproic acid inhibit its<br>conjugation.|
|**Remimazolam**|Ultra-short|Rapidly hydrolyzed by non-<br>specific tissue esterases to an<br>inactive metabolite (CNS7054).|Organ-<br>independent;<br>short|No tissue accumulation or<br>prolonged context-<br>sensitive half-times. Highly<br>effective for fast-track<br>procedural sedation. Fully<br>reversed by flumazenil.|`
    },
    {
      title: `Pharmacodynamics & Systemic Effects`,
      content: `- **CNS Effects:** Anterograde amnesia, sedation, anxiolysis, anticonvulsant, and central muscle relaxation. **_GABA_A_** receptor **_α_1_** subunits mediate sedation, amnesia, and anticonvulsant properties, while **_α_2_** subunits mediate anxiolysis and muscle relaxation. They reduce **_CMRO_2_** and CBF, maintaining a normal ratio. 

- **Cardiorespiratory Effects:** Modest systemic effects. Induce a minimal decrease in MAP via SVR reduction with a distinct plateau effect (midazolam plateau at **_100 ng/mL_** , diazepam at **_900 ng/mL_** ). They cause respiratory drive depression and upper airway muscular relaxation. Opioids act synergistically to cause severe respiratory depression.`
    },
    {
      title: `Flumazenil (Benzodiazepine Antagonist)`,
      content: `Flumazenil is a specific, competitive benzodiazepine receptor antagonist with high affinity and minimal intrinsic agonist activity. It interacts with the receptor according to the law of mass action. It has a rapid total clearance approaching liver blood flow and an elimination half-life of **1 hour** (the shortest-lived agent). Because its clearance is faster than that of most benzodiazepine agonists, **rebound resedation and** 

**recurrent respiratory depression can occur** as the antagonist concentrations fall. It is titrated in **_0.2 mg_** increments up to a total of **_1 - 3 mg_** . It can precipitate acute withdrawal symptoms and seizures in benzodiazepine-dependent individuals.`
    },
    {
      title: `Overview 18`,
      content: `## **<mark>4. PHENCYCLIDINES (KETAMINE)</mark>**`
    },
    {
      title: `Physicochemical & Pharmacokinetics`,
      content: `Ketamine is a phencyclidine derivative formulated as a racemic mixture or pure $S(+)$-enantiomer. It is highly lipid soluble (5-10x thiopental) and exhibits minimal protein binding (12%). It undergoes hepatic microsomal N-demethylation via CYP enzymes to form **norketamine (Metabolite I)** , which retains 20% to 30% of the parent drug's anesthetic potency and contributes to prolonged postoperative analgesia. Clearance is high ($1.4 L/min$, approximating liver blood flow) with an elimination half-life of **_2 - 3 hours_** .`
    },
    {
      title: `S(+)-Ketamine Enantiomer Advantages:`,
      content: `The pure $S(+)$-isomer is 3 to 4 times more potent as an analgesic than the $R(-)$-isomer. It exhibits a 10% faster hepatic clearance and biotransformation, allows a quicker functional recovery, and produces fewer distressing psychomimetic emergence reactions.`
    },
    {
      title: `Pharmacodynamics & Systemic Effects`,
      content: `- **Mechanism of Action:** Produces a "dissociative" cataleptic state by non-competitive antagonism at the phencyclidine site of the N-methyl-D-aspartate (NMDA) receptor, uncoupling the thalamoneocortical and limbic systems. It inhibits central nociceptive hypersensitization and counters opioid-induced hyperalgesia. 

- **CNS Activation:** Unlike other IV anesthetics, ketamine **increases** **_CMRO_2_** , CBF, and ICP. These effects can be completely blunted by the co-administration of benzodiazepines or barbiturates. 

- **Emergence Reactions:** Occur in 10% to 30% of adults. Manifests as vivid dreaming, extracorporeal (floating) experiences, illusions, and fear due to the depression of auditory and visual relay nuclei. Risk factors include age >16, female gender, and rapid large boluses. Co-administration of benzodiazepines is the most effective preventative strategy. 

- **Cardiovascular System:** Indirectly acts as a cardiovascular stimulant, causing safe transient increases in heart rate, arterial blood pressure, and cardiac output. This is mediated by central sympathetic stimulation, systemic catecholamine release, and peripheral inhibition of neuronal norepinephrine reuptake. However, **ketamine is a direct myocardial depressant**; its depressant effects manifest when a patient has depleted catecholamine stores (e.g., severe chronic shock, end-stage sepsis). 

- **Respiratory System:** Minimal central respiratory depression; response to **_CO_2_** is preserved. It acts as a potent bronchial smooth muscle relaxant by stimulating sympathetic pathways and directly antagonizing carbachol/histamine-induced spasm. It is an excellent agent for status asthmaticus but causes significant hypersalivation, which can be minimized with glycopyrrolate or atropine.`
    },
    {
      title: `Overview 22`,
      content: `## **<mark>5. ETOMIDATE</mark>**`
    },
    {
      title: `Pharmacokinetics & Mechanics`,
      content: `Etomidate is an imidazole derivative formulated as a 0.2% solution in either 35% propylene glycol (causes significant pain on injection and superficial thrombophlebitis) or a lipid emulsion (Etomidate-Lipuro, which minimizes injection pain). It is 75% protein bound, exhibits a high hepatic clearance ($18 - 25 mL/kg/min$), an extraction ratio of 0.5, and an elimination half-life of 2.9 to 5.3 hours. Metabolism occurs via hepatic ester hydrolysis to an inactive carboxylic acid metabolite. 

Its primary CNS mechanism is positive allosteric modulation of the **_GABA_A_** receptor at clinical doses, directly gating the chloride channel at supraclinical doses.`
    },
    {
      title: `Physiologic Profile & Adrenocortical Suppression`,
      content: `- **Cardiovascular Stability:** Unique among rapid-onset induction agents. It has zero effect on sympathetic outflow or baroreceptor reflexes, maintaining myocardial oxygen supply-to-demand ratios perfectly. Essential for patients with severe valvular disease, ischemic heart disease, or compromised ejection fractions. 

- **Cerebral Dynamics:** Reduces CBF by 34% and **_CMRO_2_** by 45% without reducing MAP, resulting in a safe net increase in the cerebral oxygen supply-to-demand ratio. It decreases ICP by 50% in patients with intracranial hypertension. It can trigger grand mal seizures and activate epileptogenic foci, making it useful for intraoperative cortical mapping.`
    },
    {
      title: `Endocrine Axis Suppression (Critical Board Concept):`,
      content: `A single induction dose of etomidate causes potent, dose-dependent, reversible inhibition of **11βhydroxylase** (and to a lesser extent, 17α-hydroxylase), blocking the biosynthesis of cortisol and aldosterone for up to 72 hours. The etomidate concentration required for adrenocortical suppression is **_< 10 ng/mL_** , whereas the concentration needed for hypnosis is **_> 200 ng/mL_** . Meta-analyses demonstrate a 20% increase in relative fatality rates when administered as an induction agent to critically ill or septic patients with a projected mortality >44%. Continuous infusions have been completely abandoned.`
    },
    {
      title: `Etomidate Derivatives`,
      content: `To preserve cardiovascular stability while avoiding adrenocortical toxicity, soft analogs have been synthesized: _Methoxycarbonyl etomidate (MOC-etomidate)_ is rapidly metabolized by esterases to an inactive acid, preventing prolonged steroidogenesis inhibition, but its rapid breakdown makes it unsuitable for continuous infusion. _CPMM_ and _DMMM_ avoid the adrenal suppression axis entirely, but CPMM induces severe, uncontrollable myoclonic muscular movements, limiting its clinical utility.`
    },
    {
      title: `Overview 27`,
      content: `## **<mark>6. DEXMEDETOMIDINE</mark>**`
    },
    {
      title: `Pharmacology & Receptor Specificity`,
      content: `Dexmedetomidine is a highly selective, complete **_α_2_** -adrenergic agonist with an **_α_2 : α_1_** specificity ratio of **1600:1** (compared to 220:1 for clonidine). It acts via membrane-bound G-protein coupled receptors, inducing adenylate cyclase inhibition and opening voltage-gated potassium channels. 

- **Sedation Mechanism:** Acts postsynaptically on **_α_2_** receptors in the **locus coeruleus**, decreasing its inhibitory projection to the ventrolateral preoptic nucleus (VLPO). This triggers a physiological cascade that blocks histamine release from the tuberomammillary nucleus to the cortex, producing a **natural non-REM sleep pattern**. Patients remain easily arousable, cooperative, and exhibit a significantly lower prevalence of ICU delirium compared to infusions of midazolam or propofol. 

- **Analgesia Mechanism:** Mediated by stimulation of **_α_{2A}_** and **_α_{2C}_** receptors in the **dorsal horn of the spinal cord**, reducing the release of pronociceptive transmitters (substance P and glutamate) and hyperpolarizing interneurons. It produces a 50% opioid-sparing effect.`
    },
    {
      title: `Pharmacokinetics & Systemic Effects`,
      content: `Dexmedetomidine displays distinct **nonlinear pharmacokinetics** due to dose-dependent vasoconstriction. It undergoes extensive hepatic biotransformation via direct N-glucuronidation and CYP2A6 pathways. Clearance is delayed in hepatic impairment (Child-Pugh A, B, and C clearance falls to 74%, 64%, and 53% of normal, respectively), requiring careful downward titration. It does not change with renal impairment or age, though the free unbound fraction rises in severe renal disease due to protein binding alterations.`
    },
    {
      title: `Biphasic Cardiovascular Response:`,
      content: `Bolus loading infusions produce a distinct biphasic hemodynamic curve: initial stimulation of peripheral vascular smooth muscle **_α_{2B}_** receptors induces systemic vasoconstriction and transient **hypertension** with reflexive bradycardia. As central **_α_{2A}_** stimulation takes effect, central sympathetic outflow falls, resulting in sustained **hypotension and bradycardia**. Omitting the loading dose or extending its delivery over 20 minutes blunts this transient hypertension. 

The EMA issued a warning in June 2022 noting an increased risk of mortality when dexmedetomidine is used for early sedation in critically ill mechanically ventilated ICU patients ≤ 65 years old admitted for nonoperative reasons (SPICE III trial heterogeneity analysis: OR 1.26).`
    },
    {
      title: `mark>7. DROPERIDOL</mark>`,
      content: `Droperidol is a fluorinated butyrophenone derivative that acts as a potent central dopaminergic, noradrenergic, and serotonergic receptor antagonist. It induces full inhibition of peripheral **_α_2_** -acetylcholine receptors and submaximal inhibition of **_GABA_A_** receptors, which frequently explains the clinical occurrence of acute anxiety, dysphoria, and restlessness upon administration. It induces cerebral vasoconstriction, causing a 40% reduction in CBF with zero change in **_CMRO_2_** . It can precipitate extrapyramidal symptoms (dystonia) and worsen Parkinson's disease. 

Its primary current indication is as a highly effective antiemetic for postoperative nausea and vomiting (PONV) prophylaxis at low doses ( **_10 - 20 mcg/kg IV_** , typically **_0.6 - 1.25 mg_** ). It must be administered with caution due to an FDA **Black Box Warning** regarding dose-dependent delays in myocardial repolarization, which can **prolong the QT interval and precipitate fatal Torsades de Pointes** arrhythmias.`
    },
    {
      title: `Overview 32`,
      content: `## **<mark>8. HIGH-YIELD CLINICAL MATH & PHYSIOLOGY EQUATIONS</mark>**`
    },
    {
      title: `1. Arterial Oxygen Content ( CaO2 )`,
      content: `The total oxygen content carried in arterial blood is calculated as: 

**_CaO_2 = (Hgb imes 1.34 imes rac{SaO_2}{100}) + (PaO_2 imes 0.003)_** 

Where each gram of completely saturated hemoglobin binds **_1.34 mL_** of oxygen, and dissolved oxygen has a solubility coefficient of **_0.003 mL/dL/mm Hg_** . Hemoglobin concentration and oxygen saturation are the primary drivers; changes in **_PaO_2_** have a negligible impact once hemoglobin is fully saturated.`
    },
    {
      title: `2. Systemic Oxygen Delivery ( DO2 )`,
      content: `The total volume of oxygen delivered to the capillaries per minute is defined by: 

**_DO_2 = CO imes CaO_2 imes 10_** 

Where **_CO_** is cardiac output ( **_HR imes SV_** ). Even with normal **_SaO_2_** and hemoglobin, tissue oxygen delivery will fall lineary with reductions in cardiac output.`
    },
    {
      title: `3. Cerebral Perfusion Pressure (CPP)`,
      content: `The driving pressure for cerebral blood flow is calculated as: 

**_CPP = MAP - ICP_** (or MAP - CVP, whichever is higher) 

Barbiturates drop MAP slightly but drop ICP significantly more by inducing cerebral vasoconstriction paired with metabolic suppression, thereby maintaining or increasing net CPP.`
    },
    {
      title: `Overview 36`,
      content: `## **<mark>9. BOARD-STYLE MULTIPLE-CHOICE REVIEW QUESTIONS</mark>**`
    }
  ]
};
