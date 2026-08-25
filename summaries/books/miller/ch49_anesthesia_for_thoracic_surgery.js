export const ch49 = {
  id: "miller_ch49",
  chapterNumber: 49,
  title: "Anesthesia for Thoracic Surgery",
  bookId: "miller",
  readTimeMinutes: 29,
  sections: [
    {
      title: `ANESTHESIA FOR THORACIC SURGERY`,
      content: `Derived exclusively from standard thoracic surgical anesthesia literature by Peter Slinger and Javier Campos`
    },
    {
      title: `1. Introduction & Central Fundamentals`,
      content: `Modern thoracic anesthesia has shifted from treating primarily infectious indications (e.g., lung abscesses, empyema, bronchiectasis) to managing advanced intrathoracic malignancies (pulmonary, esophageal, and mediastinal). Emerging respiratory pathogens, such as COVID-19, have added structural complexity to airway and ventilatory management. The two absolute technical pillars of thoracic anesthesia are: 

1. **Reliable lung isolation** to facilitate appropriate surgical access within the hemithorax. 

2. **Strategic management of one-lung ventilation (OLV)** to maintain optimal systemic oxygenation and minimize ventilator-induced lung injury (VILI).`
    },
    {
      title: `2. Preoperative Respiratory Assessment: The Three-Legged Stool`,
      content: `No single objective physiological test is capable of serving as a standalone predictor of postthoracotomy outcome. A comprehensive risk assessment must evaluate three distinct, independent physiologic dimensions—known as the **"three-legged stool"** of respiratory assessment. For oncologic resections, the primary objective is to differentiate a "resectable" tumor (anatomically localized disease) from an "operable" patient (one who possesses the cardiorespiratory reserve to tolerate parenchyma removal with acceptable risk).`
    },
    {
      title: `Leg 1: Respiratory Mechanical Function`,
      content: `Spirometric parameters correlate directly with postresection respiratory complications. The single most valid mechanical test is the **predicted postoperative forced expiratory volume in one second (** **_ppoFEV1%_ )** . 

##### **_ppoFEV1% = Preoperative FEV1% × [ 1 - (% Functional Lung Tissue Removed / 100) ]_** 

To quantify the percent of functional tissue removed, clinicians utilize the **anatomical subsegment model** . The human lungs are divided into a total of **42 functional subsegments** distributed as follows: 

- **Right Lung (22 subsegments total):** Right Upper Lobe (RUL) = 6; Right Middle Lobe (RML) = 4; Right Lower Lobe (RLL) = 12. 

- **Left Lung (20 subsegments total):** Left Upper Lobe (LUL) = 10; Left Lower Lobe (LLL) = 10. 

Anesthesia for Thoracic Surgery — Board Review Guide 

_Example calculation for a Right Lower Lobectomy:_ The RLL represents 12 of the 42 subsegments ( **_12 / 42 ≈ 29%_** ). If a patient's baseline preoperative **_FEV1_** is 70% of normal, their predicted postoperative value is: 

##### **_ppoFEV1% = 70% × (1 - 0.29) = 70% × 0.71 = 49.7% (Low Risk)_** 

###### **Mechanical Risk Thresholds:** 

- **Low Risk:** **_ppoFEV1 > 40%_** . These patients are low risk for respiratory failure and can typically undergo immediate tracheal extubation in the operating room if they are alert, warm, and comfortable (the **"AWaC"** criteria). 

- **Moderate/Elevated Risk:** **_ppoFEV1 between 30% and 40%_** . Risk of major complications (atelectasis, pneumonia, failure) is elevated. Extubation depends on favorable results in the remaining two legs or the use of minimally invasive techniques. 

- **High Risk:** **_ppoFEV1 < 30%_** . These patients are at extreme risk and require consideration for staged postoperative mechanical ventilation or specialized regional/minimally invasive pathways.`
    },
    {
      title: `Leg 2: Lung Parenchymal Function (Gas Exchange Capacity)`,
      content: `Mechanical delivery of gas to the alveoli must be matched by the capacity to cross the alveolarcapillary membrane. The gold standard test for gas exchange capacity is the **diffusing capacity of the lung for carbon monoxide (DLCO)** . The **_ppoDLCO%_** is calculated using the exact same anatomical subsegment formula as the **_FEV1_** . Notably, DLCO is heavily and negatively affected by preoperative chemotherapy, making it an independent and critical predictor of complications even when **_FEV1_** appears preserved. 

**Absolute Minimal Thresholds:** According to data from the National Emphysema Treatment Trial (NETT), a preoperative **_FEV1_** or **_DLCO < 20%_** represents an unacceptably high and prohibitive perioperative mortality rate, establishing the absolute floor for operability.`
    },
    {
      title: `Leg 3: Cardiopulmonary Interaction (Exercise Capacity)`,
      content: `The final and most critical dimension evaluates how the heart and lungs interact under physiological stress. Preoperative exercise capacity is the single best predictor of outcome in geriatric patients. 

- **Metabolic Equivalents (METs):** Resting oxygen consumption is **_3.5 mL/kg/min_** (1 MET). Climbing one flight of stairs (defined as 10 feet or 3 meters) requires 4 METs. A patient must be capable of climbing a minimum of 2 flights of stairs without stopping to be cleared for pulmonary resection evaluation. Patients unable to provide a reliable history require objective testing. 

- **Six-Minute Walk Test (6MWT):** A simple, valid test requiring no lab equipment that correlates tightly with maximal oxygen consumption ( **_VO2max_** ). In COPD patients, **_VO2max_** can be estimated as: 

**_Estimated VO2max (mL/kg/min) = 6MWT distance (meters) / 30_** 

Anesthesia for Thoracic Surgery — Board Review Guide 

A 6MWT distance **< 400 meters** is associated with a steep increase in postoperative cardiopulmonary complications. 

- **Laboratory Cardiopulmonary Exercise Testing (CPET):** The true gold standard. A baseline **_VO2max < 15 mL/kg/min_** indicates high risk, and a value **< 10 mL/kg/min (or < 35% predicted)** carries a prohibitive risk of morbidity/mortality, requiring alternative non-surgical therapies. Conversely, patients with a **_VO2max > 20 mL/kg/min (> 75% predicted)_** rarely experience respiratory complications. 

###### **BOX 49.1: SUMMARY OF RISK THRESHOLDS (THE THREE-LEGGED STOOL)** 

|**Physiologic Dimension**|**Gold Standard**<br>**Test**|**High Risk Threshold**|**Absolute Minimal**<br>**Value**|
|---|---|---|---|
|**Respiratory Mechanics**|**_ppoFEV1%_**|< 30% – 40%|< 20% (Prohibitive)|
|**Parenchymal Function**|**_ppoDLCO%_**|< 30% – 40% (Some<br>recommend < 50%)|< 20% (Prohibitive)|
|**Cardiopulmonary**<br>**Interaction**|Formal**_VO2max_**|< 15 mL/kg/min|< 10 mL/kg/min|`
    },
    {
      title: `The Risk Shift with Minimally Invasive Surgery`,
      content: `The rapid integration of Video-Assisted Thoracoscopic Surgery (VATS) and robotic resection has fundamentally shifted traditional risk boundaries. Because VATS avoids rib-spreading, it significantly preserves chest wall mechanics and minimizes the acute postoperative decline in functional residual capacity (FRC). Retrospective data indicate that the threshold for acceptable risk has shifted from an open thoracotomy baseline down to lower boundaries under VATS: 

Anesthesia for Thoracic Surgery — Board Review Guide 

###### **VISUALIZED DATA COMPARISON: FIG 49.3 & 49.4 (COMPLICATION INCIDENCE)** 

###### **Incidence of Major Postoperative Respiratory Complications:** 

|**Risk**|**Open**|**VATS/Robotic**|**Clinical Interpretation / Board Nuance**|
|---|---|---|---|
|**Stratification**<br>**Metric**|**Thoracotomy**<br>**Incidence**|**Incidence**||
|**_ppoFEV1 < 30%_**|74% Complication<br>Rate|30%<br>Complication<br>Rate|The high-risk threshold has shifted<br>downward; high-risk patients benefit most<br>dramatically from VATS.|
|**_ppoFEV1 30% –_**<br>**_45%_**|43% Complication<br>Rate|8%<br>Complication<br>Rate|Extreme safety benefit observed in moderate-<br>risk categories.|
|**_ppoDLCO < 45%_**|38% Complication<br>Rate|17%<br>Complication<br>Rate|Open procedures exhibit an exponential risk<br>surge below 60% ppoDLCO; VATS dampens<br>this risk curves significantly.|`
    },
    {
      title: `Ventilation-Perfusion (V/Q) Scintigraphy`,
      content: `Refines the post-resection assessment by determining the exact fractional contribution of the specific lung or lobe to be resected. If the region to be removed is completely nonfunctional due to tumorinduced vascular or bronchial destruction, its excision will not result in a postoperative functional drop. 

**Indication:** Strongly indicated for any patient undergoing a **pneumonectomy** whose baseline preoperative **_FEV1_** or **_DLCO is < 80%_** . It has very limited utility for predicting outcomes in standard lobectomies.`
    },
    {
      title: `Overview 9`,
      content: `## **3. Concomitant Medical Conditions: Core Board Pearls**`
    },
    {
      title: `A. Cardiac Disease and Ischemia`,
      content: `Lung resections are legally categorized as **intermediate-risk procedures** for perioperative cardiac events. Postthoracotomy ischemia has an incidence of 5%, characteristically peaking on **postoperative days 2 to 3** . Antiplatelet/stenting delay mandates include a minimum delay of 4 to 6 weeks after bare-metal stents and 6 months after drug-eluting stents. Major antiplatelet agents must be safely held prior to surgery, with the explicit exception of aspirin.`
    },
    {
      title: `B. Postoperative Atrial Fibrillation (AF)`,
      content: `Dysrhythmias complicate 30% to 50% of major pulmonary resections within the first postoperative week, with 60% to 70% manifesting as atrial fibrillation. The core etiology is multifactorial but driven by two interactive mechanisms: (1) permanent or transient elevations in pulmonary vascular 

Anesthesia for Thoracic Surgery — Board Review Guide 

resistance (PVR) leading to acute right-heart strain, and (2) peak sympathetic output on postoperative day 2 as mobilization begins. 

- **Risk Scale by Extent of Resection:** Extrapleural Pneumonectomy > Standard Pneumonectomy (60%) > Lobectomy (40%) > Non-resection Thoracotomy (30%). 

- **Prophylaxis: Diltiazem** is the most useful agent for postthoracotomy arrhythmia prophylaxis in patients with preserved cardiac function who are not taking pre-existing beta-blockers. Betablockers are highly effective but carry severe concerns regarding induction of bronchospasm in patients with reactive airway disease.`
    },
    {
      title: `C. Pulmonary Hypertension (PH) Management Principles`,
      content: `Anesthesiologists must distinguish PH due to left heart disease from PH due to chronic lung disease (cor pulmonale), as their responses to standard cardiovascular medications are completely inverted. Patients with cor pulmonale depend entirely on tonic cardiac sympathetic drive for right ventricular (RV) contractility and hemodynamic stability. 

###### **BOX 49.3: MANAGEMENT PRINCIPLES FOR COR PULMONALE / PH SECONDARY TO LUNG DISEASE** 

1. **Strict Avoidance of Hypotension and Vasodilators:** Standard agents (e.g., propofol, volatile anesthetics) cause profound decreases in systemic vascular resistance (SVR), which critically diminishes RV coronary perfusion pressure. 

2. **Induction Strategy:** Utilize **Ketamine or Etomidate** as primary induction agents; ketamine does not exacerbate pulmonary hypertension in this setting. 

3. **Vasopressor Selection (Critical Nuance):** Support mean systolic pressure utilizing **Norepinephrine, Phenylephrine, or Vasopressin** . In vitro dose-response testing demonstrates that all standard vasopressors cause equivalent constriction of both radial and pulmonary arteries, _except Vasopressin_ , which exhibits **zero vasoconstrictive action on human pulmonary arteries** while profoundly increasing systemic vascular tone (Fig 49.5). 

4. **Inhaled Pulmonary Vasodilators:** Use selective inhaled pulmonary vasodilators ( **Nitric Oxide at 10-40 ppm** or **nebulized Prostacyclin/Epoprostenol at 50 ng/kg/min** ) in absolute preference to intravenous vasodilators. _Note:_ Nebulized epoprostenol utilizes a glycine diluent that accumulates in the heat-moisture exchange (HME) filter; the HME filter **must be changed every hour** to prevent fatal airflow resistance. 

5. **Thoracic Epidural Warning:** Thoracic epidural local anesthetic blockade induces a high cardiac sympathectomy (T1–T4). Animal model data (Missant study, Fig 49.7) show that while a normal heart or one under lumbar epidural block compensates for an acute increase in RV afterload by increasing contractility (recruitable stroke work jumps from 1.8 to 2.9 mWs/ml), **thoracic epidural completely abolishes this compensatory contractility surge** , leaving the RV vulnerable to acute pressure overload and failure. If a thoracic epidural is used, a low-dose infusion of inotropes/vasopressors must be co-administered. 

Anesthesia for Thoracic Surgery — Board Review Guide`
    },
    {
      title: `D. Chronic Obstructive Pulmonary Disease (COPD) & Ventilatory Control`,
      content: `Anesthesiologists must understand the physiological realities of the "CO2 retainer": 

- **Mechanism of Hypercapnic Coma:** The traditional belief that hypercapnia occurs because supplemental oxygen removes a patient's hypoxic respiratory drive is scientifically incorrect; minute ventilation remains largely unchanged. Instead, high **_FiO2_** attenuates regional **hypoxic pulmonary vasoconstriction (HPV)**, redistributing pulmonary blood flow away from wellmatched regions into areas of low V/Q matching, significantly increasing alveolar dead space and shunt. This is further compounded by the **Haldane effect** (oxygenated hemoglobin has a lower affinity for $CO_2$, releasing it into the plasma). 

- **Flow Limitation & Auto-PEEP:** Severe COPD patients experience dynamic compression of the airways during tidal expiration. An **Equal Pressure Point (EPP)** develops where intrapleural pressure equals intraluminal pressure, limiting expiratory flow. Application of positive-pressure ventilation before lung isolation risks **dynamic hyperinflation (auto-PEEP)** . Manual bagging at induction can cause instant hemodynamic collapse due to severely restricted expiration, occasionally presenting as the _"Lazarus syndrome"_ (cardiac arrest that reverses only upon complete disconnection from the ventilator circuit). Auto-PEEP averages 4 to 6 $ ext{cmH}_2 ext{O} $ during one-lung anesthesia.`
    },
    {
      title: `E. Malignancy Specifics: The "4 M's"`,
      content: `|**Category**|**Specific Pathophysiology**|**Anesthetic Implication & Management Strategy**|
|---|---|---|
|**Mass Effects**|Tracheobronchial distortion,<br>Superior Vena Cava (SVC)<br>syndrome, Pancoast<br>syndrome, recurrent<br>laryngeal nerve paresis.|Saber-sheath trachea (side-to-side tracheal compression)<br>can obstruct a left-sided DLT lumen. SVC obstruction<br>invalidates internal jugular CVP lines.|
|**Metabolic /**<br>**Paraneoplastic**|Lambert-Eaton Myasthenic<br>Syndrome (LEMS),<br>hypercalcemia,<br>hyponatremia (SIADH via<br>Small Cell CA).|LEMS involves antibodies blocking pre-synaptic voltage-<br>gated calcium channels, causing impaired acetylcholine<br>release. Patients are **extremely sensitive to both<br>depolarizing and nondepolarizing neuromuscular<br>blockers** and respond very poorly to<br>anticholinesterase reversal (neostigmine). Diaphragm<br>function may be subclinically impaired.|
|**Metastases**|Occult spread to brain, bone,<br>liver, and adrenal glands.|Preoperative neurologic baseline documentation is<br>mandatory before regional anesthesia or emergence<br>evaluation.|
|**Medications**|Prior chemotherapy agents<br>with organ-specific toxicities.|**Bleomycin:**Causes oxygen-induced pulmonary toxicity.<br>Mandates strict maintenance of the lowest acceptable<br>**_FiO2_**consistent with safety.<br>**Cisplatin:**Causes severe renal toxicity. Postoperative<br>NSAIDs must be strictly withheld in patients recently<br>treated with cisplatin to prevent acute kidney injury.|

Anesthesia for Thoracic Surgery — Board Review Guide`
    },
    {
      title: `Overview 15`,
      content: `## **4. Lower Airway Monitoring, Anatomy, and Isolation Devices**`
    },
    {
      title: `Anatomical Foundations`,
      content: `The "ABCs" of thoracic airway management mandate precise anatomical knowledge. The right upper lobe (RUL) bronchus is a major board trap: it originates a mere **1.5 to 2 cm distal to the tracheal carina**. The right middle lobe bronchus exits directly anteriorly, whereas the superior segments of the lower lobes exit directly posteriorly (Mnemonic: **"A PALM A MAPL"** for segmental bronchi sequence). This short distance means right endobronchial intubation carries a high risk of obstructing the RUL orifice.`
    },
    {
      title: `Double-Lumen Tubes (DLTs) vs. Bronchial Blockers`,
      content: `DLTs are the gold standard for adult lung isolation. Left-sided DLTs are preferred for almost all elective cases except where specific anatomical contraindications exist (e.g., left-sided tumor compression, aortic aneurysm, left sleeve resection, left lung transplant). Right-sided DLTs incorporate a specialized ventilation slot aligned perfectly with the RUL bronchus, requiring absolute bronchoscopic verification of alignment (Fig 49.19). 

###### **DLT Depth & Selection Guidelines:** 

- The average external diameter of a DLT is massive compared to single-lumen tubes (e.g., a 35 Fr DLT is larger than an 8.0 mm ID SLT; a 41 Fr DLT is larger than a 10.0 mm ID SLT; Fig 49.17). DLTs must never be advanced against resistance. 

- Blind insertion depth formula at the teeth in average adults is: **_Depth (cm) = 12 + (Patient Height in cm / 10)_** . _Note:_ In patients of Asian descent or short stature (<155 cm), height is a notoriously poor predictor of depth, and deep migration risks left main bronchus rupture. 

###### **TABLE 49.7: DLT SIZING MATRIX BASED ON SEX AND HEIGHT** 

|**Patient**|**Patient**|**Recommended DLT Size**|**Critical Board Exceptions / Notes**|
|---|---|---|---|
|**Sex**|**Height (cm)**|**(French)**||
|**Female**|< 160 cm (63<br>in.)|35 Fr|For height < 152 cm, explicitly examine CT<br>bronchus diameter and consider**32 Fr**.|
|**Female**|> 160 cm|37 Fr|Standard female size.|
|**Male**|< 170 cm (67<br>in.)|39 Fr|For short stature males (< 160 cm), consider<br>down-sizing to**37 Fr**.|
|**Male**|> 170 cm|41 Fr|Standard male size.|`
    },
    {
      title: `Advanced Isolation Technology`,
      content: `1. **VivaSight DLT:** Incorporates an integrated high-definition video camera embedded at the distal end of the endotracheal lumen, providing continuous visual verification of the tracheal carina on a monitor screen. It includes an in-situ flushing system to clean the lens. It significantly accelerates placement and can eliminate the need for flexible bronchoscopy, minimizing aerosolization risks 

Anesthesia for Thoracic Surgery — Board Review Guide 

(critical in COVID-19 management). _Warning:_ Leaving the camera connected for prolonged periods in vitro can cause localized melting of the tube body near the light source. 

2. **ECOM DLT:** Contains a matrix of surface electrodes on the endobronchial cuff and tube that continuously process a bioimpedance signal from the ascending aorta, providing real-time indirect cardiac output monitoring when coupled with an arterial line (Fig 49.15). 

3. **Silbroncho DLT:** Constructed of pure silicone with a highly flexible, wire-reinforced endobronchial tip and a shortened bronchial cuff length, offering an expanded margin of safety to prevent lobar airway obstruction. Ideal for tube exchange combined with video laryngoscopy.`
    },
    {
      title: `Independent Bronchial Blockers (BBs)`,
      content: `BBs are advanced through a standard single-lumen tube (minimum 7.0 mm ID for a standard 9 Fr blocker with a <4.0 mm bronchoscope). They are highly preferred in pediatric patients, patients with known difficult upper airways, or those requiring prolonged postoperative mechanical ventilation (eliminating the dangerous requirement of a post-operative tube exchange over a critically edematous upper airway). 

- **Arndt Blocker:** Utilizes a wire-guided retractable loop advanced over a fiberoptic scope. Normally advances blindly into the right mainstem bronchus easily due to natural takeoff angles. 

- **Cohen Blocker:** Utilizes a unique manual proximal wheel to deflect the pre-angled distal tip towards the target bronchus under direct vision. 

- **EZ-Blocker:** A 7 Fr, 4-lumen Y-shaped catheter where the stem sits on the tracheal carina, and each limb automatically self-seats into the right and left main bronchi. The limbs are color-coded (blue and yellow) and inflated selectively based on the operative side. 

- **Complications:** BBs carry a high statistical rate of intraoperative displacement. If an inflated blocker balloon slips superiorly above the carina into the trachea, it causes **instantaneous inability to ventilate both lungs** , leading to precipitate hypoxemia and imminent arrest unless immediately recognized and deflated. Blockers are also vulnerable to accidental inclusion into surgical stapling lines during lobectomy; the blocker must be withdrawn several centimeters prior to vascular or bronchial stapling. 

###### **CRITICAL EMERGENCY PROTOCOL: DLT-SLT Tube Exchange** 

When managing a patient with a known difficult airway who requires OLV, the absolute primary goal is to establish an airway using a standard single-lumen tube (SLT) via awake fiberoptic intubation. Once the airway is safe, the clinician may choose to exchange the SLT for a DLT using a specialized **long tube-exchange catheter (≥ 83 cm)** : 

- For a 39 Fr or 41 Fr DLT, utilize a **14 Fr exchange catheter** . 

- 

- For a 35 Fr or 37 Fr DLT, utilize an **11 Fr exchange catheter** . 

- 

- **Maximum Depth Constraint:** The exchange catheter must **NEVER be advanced deeper than 24 cm at the lips** to prevent tragic mechanical rupture or laceration of the distal trachea or mainstem bronchi. Use a videolaryngoscope during the retrograde advancement of the DLT through the glottis. 

Anesthesia for Thoracic Surgery — Board Review Guide`
    },
    {
      title: `Overview 20`,
      content: `## **5. Positioning and Physiology of the Lateral Decubitus Position**`
    },
    {
      title: `Neurovascular Injury Prevention`,
      content: `The lateral decubitus position places unique physical stress on neurovascular structures: 

- **Brachial Plexus (Dependent Arm):** At extreme risk for compression injuries. The weight of the thorax must be kept off the arm by placing padding under the dependent chest wall. This padding is frequently misnamed an **"axillary roll"** ; it must **NEVER be placed in the axilla** , as superior migration directly compresses the retroclavicular space and plexus. 

- **Brachial Plexus (Nondependent Arm):** Vulnerable to stretch and traction injuries. Avoid arm abduction > 90 degrees, posterior extension beyond neutral, or excessive lateral flexion of the cervical spine. 

- **Suprascapular Nerve:** Anterior flexion of the arm across the chest can cause severe traction on this nerve, manifesting as deep, poorly localized postoperative shoulder pain.`
    },
    {
      title: `Ventilation-Perfusion (V/Q) Mismatch under General Anesthesia`,
      content: `The matching of ventilation and perfusion degrades significantly upon transitioning from the conscious, awake state to general anesthesia with paralysis and mechanical ventilation in the lateral decubitus position: 

|**Patient State /**<br>**Intervention**|**Ventilation / Perfusion Shifts**<br>**between Lungs**|**Physiologic Mechanism & Compliance Alterations**|
|---|---|---|
|**Conscious, Awake**<br>**Spontaneous**|Dependent lung ventilation<br>**increases by 10%**. Perfusion<br>matches ventilation.|Gravity increases blood flow to the dependent lung.<br>Contraction of the dependent diaphragm is highly<br>efficient due to abdominal content displacement.<br>Excellent V/Q matching.|
|**Anesthetized,**<br>**Paralyzed,**<br>**Mechanically**<br>**Ventilated**|Dependent lung ventilation<br>**decreases by 15%**.<br>Nondependent lung<br>hyperinflates.|The nondependent lung becomes highly compliant<br>because it is free of mediastinal and abdominal<br>compression. Positive-pressure ventilation<br>preferentially follows the path of least resistance into<br>the upper, nondependent lung, while gravity keeps<br>blood flow in the lower, dependent lung, creating<br>massive V/Q mismatch.|
|**Hemithorax**<br>**Opened (Chest**<br>**Open)**|Total respiratory compliance<br>increases. Both lungs tend to<br>collapse during prolonged<br>expiration.|Disruption of the negative interpleural pressure chest<br>wall spring eliminates the natural distending force.<br>The end-expiratory volume becomes purely a<br>function of expiratory time. Arteriovenous shunt<br>jumps from a 5% baseline up to 10% – 15% during<br>two-lung ventilation.|

Anesthesia for Thoracic Surgery — Board Review Guide`
    },
    {
      title: `Overview 23`,
      content: `## **6. Anesthetic Management of One-Lung Ventilation (OLV)**`
    },
    {
      title: `A. Restrictive Fluid Management Guidelines`,
      content: `Excessive intravenous fluid administration causes immediate hydrostatic fluid shifting into the dependent, ventilated lung due to the gravitational distribution of pulmonary blood flow, causing rapid alveolar edema and severe shunting. Fluid therapy must be strictly judicious and restricted: 

1. Total positive fluid balance within the first 24-hour perioperative window **must not exceed 20 mL/kg** . 

2. For a standard adult, total crystalloid administration must be capped at **< 3 Liters within the first 24 hours** . 

3. Administer fluids solely for maintenance and measured volume deficits; **zero fluid volume is allowed for theoretical "third-space" losses**. 

4. Targeting a urine output **_> 0.5 mL/kg/h_** is clinically unnecessary and dangerous. If tissue perfusion decreases postoperatively, deploy invasive tracking and inotropic support rather than a fluid challenge.`
    },
    {
      title: `B. Hypoxic Pulmonary Vasoconstriction (HPV) & Shunt Pathophysiology`,
      content: `During OLV, the nonventilated lung undergoes complete collapse, creating an obligate **20% to 30% right-to-left intrapulmonary shunt** . Systemic hypoxemia is prevented from reaching catastrophic levels primarily by the body's native **Hypoxic Pulmonary Vasoconstriction (HPV)** reflex. HPV induces localized precapillary vasoconstriction in the hypoxic alveoli, successfully diverting up to 50% of the nonventilated lung's blood flow toward the ventilated lung. 

- **Temporal Dynamics:** HPV exhibits a strictly biphasic response to alveolar hypoxia. The rapid phase begins immediately and plateaus at 20-30 minutes. The slow/delayed phase begins after 40 minutes and plateaus at 2 hours (Fig 49.34). 

- **Offset Delay & Preconditioning:** The offset of HPV is also slow; pulmonary vascular resistance can remain elevated for hours after re-expansion. This creates a severe board trap: during sequential bilateral procedures, collapse of the second lung carries a significantly higher risk of rapid desaturation because the first lung's HPV has not fully offset, impairing its gas exchange capacity. Conversely, HPV exhibits a beneficial "preconditioning" effect where subsequent hypoxic exposures trigger a faster and stronger reflex. 

- **Inhibitors of HPV:** All modern volatile anesthetics (Isoflurane, Sevoflurane, Desflurane) inhibit HPV in a dose-dependent fashion. However, at **doses ≤ 1 MAC, this inhibition is clinically negligible (~20% attenuation of the reflex)**, resulting in a net shunt increase of only 4%, which is undetectable in clinical practice. Total Intravenous Anesthesia (TIVA) with propofol preserves HPV perfectly but has not demonstrated superior systemic oxygenation over ≤ 1 MAC volatile anesthesia in randomized trials. Systemic vasodilators (nitroglycerin, nitroprusside) and nitrous oxide ( **_N2O_** ) are potent inhibitors of HPV and must be strictly avoided.`
    },
    {
      title: `C. Ventilatory Optimization Strategy`,
      content: `Historical ventilation strategies using massive tidal volumes (10 mL/kg) to prevent hypoxemia are highly injurious, triggering severe barotrauma, volutrauma, and shear stress (atelectrauma) in the 

Anesthesia for Thoracic Surgery — Board Review Guide 

single ventilated lung, leading to postresection acute lung injury (ALI). Management must utilize strict lung-protective boundaries: 

- **Tidal Volume (** **_VT_ ):** Initialize at **4 to 6 mL/kg ideal body weight (IBW)** . (In patients with previous pneumonectomy or during selective lobar ventilation, drop **_VT_** to **3 to 4 mL/kg** to prevent catastrophic hyperinflation of the single remaining lobe). 

- **External PEEP:** Initialize at **5 cmH2O**. External PEEP must be titrated carefully between 5 and 10 $ ext{cmH}_2 ext{O}$ to minimize the **ventilation driving pressure (** **_ΔP = Plateau Pressure - PEEP_ )** , maintaining a target **_ΔP ≤ 15 cmH2O_** . 

- **Pressure Constraints:** Peak airway pressures must be strictly managed to remain **< 35 cmH2O** , which matches a maximum **plateau pressure of ≤ 25 cmH2O**. Peak pressures exceeding 40 $ ext{cmH}_2 ext{O}$ trigger immediate hyperinflation injury. 

- **Spirometric Nuance (board trap):** Patients with completely **normal preoperative spirometry or restrictive lung disease are significantly more likely to desaturate** during stable OLV than patients with advanced emphysema/COPD. This occurs because emphysematous lungs suffer from loss of elastic recoil and retain a high level of native auto-PEEP (4-6 $ ext{cmH}_2 ext{O}$), which naturally recruits the dependent lung and stabilizes FRC. Patients with normal lung mechanics lack auto-PEEP, leading to rapid atelectasis of the dependent lung in the lateral decubitus position. 

Anesthesia for Thoracic Surgery — Board Review Guide 

**BOX 49.12: STRUCTURED PROTOCOL FOR MANAGEMENT OF DESATURATION DURING OLV** If systemic oxygen saturation ( **_SpO2_** ) declines below 90% during OLV, execute the following actions in strict chronological sequence: 

1. **Severe / Precipitous Crash:** Immediately abort one-lung ventilation. Resume bilateral twolung ventilation, deflate all bronchial cuffs/blocker balloons, and notify the surgical team to halt instrumentation. 

2. **Gradual / Standard Desaturation:** 

   - Verify that the delivered fraction of inspired oxygen ( **_FiO2_** ) is exactly 1.0 (except in patients with historical Bleomycin exposure). 

   - Immediately pass a flexible fiberoptic bronchoscope through the DLT tracheal lumen to reconfirm perfect positioning and rule out mechanical lobar obstruction or cuff herniation. 

   - Assess systemic hemodynamics. Ensure cardiac output (CO) is optimized and stop all systemic vasodilators. If CO has dropped due to surgical compression of the inferior vena cava or high thoracic epidural sympathetic block, immediately administer titratable inotropes/vasopressors. Reduce volatile anesthetic depth to **< 1 MAC** . 

   - Execute a formal **recruitment maneuver to the ventilated dependent lung** (apply an end-inspiratory hold of **20 cmH2O for 15 to 20 seconds** ). _Board warning:_ This maneuver will cause a transient, further drop in blood pressure and a brief dip in **_PaO2_** as cardiac output falls and blood flow is temporarily pushed into the nonventilated lung. Following recruitment, increase external PEEP to 5–10 $ ext{cmH}_2 ext{O}$ (except in patients with profound emphysema). 

   - Deploy **apneic oxygen insufflation** by advancing a small suction catheter delivering 3 L/ min of pure oxygen down the nonventilated lumen of the DLT. 

   - Apply **Continuous Positive Airway Pressure (CPAP) of 1 to 2 cmH2O to the nonventilated operative lung** . _Critical Nuance:_ CPAP is completely ineffective unless applied immediately following a brief recruitment maneuver to the operative lung, as the opening pressure of atelectatic lung regions exceeds 20 $ ext{cmH}_2 ext{O}$. CPAP levels of 5-10 $ ext{cmH}_2 ext{O}$ will hyperinflate the lung and completely obstruct the surgical field, especially in minimally invasive/VATS procedures. CPAP cannot be used if the bronchus is surgically open to the atmosphere. 

   - If hypoxemia persists, utilize partial ventilation methods (intermittent positive-pressure ventilation of the operative lung with a small 70 mL **_VT_** at a rate of 6/min) or requests mechanical restriction of the operative lung's blood flow (clamping or inflating a PA catheter balloon). The final line of rescue is the initiation of venovenous ECMO.`
    },
    {
      title: `Overview 27`,
      content: `## **7. Anesthetic Management for Specific Surgical Interventions**`
    },
    {
      title: `A. Tracheal Resection & Reconstruction`,
      content: `Indicated for high-grade stenosis or tumors. Intratracheal masses present a critical risk of complete airway obstruction upon induction of general anesthesia, behaving identically to anterior mediastinal 

Anesthesia for Thoracic Surgery — Board Review Guide 

###### masses. 

**Management:** Maintain spontaneous ventilation during induction. A rigid bronchoscope must be immediately open on the field, and the thoracic surgeon must be present at the bedside before induction. The primary management technique involves initializing the case with a laryngeal mask airway (LMA), followed by surgical opening of the trachea and immediate transition to **cross-field ventilation** (inserting a sterile endotracheal tube directly into the distal trachea or bronchus within the open surgical field; Fig 49.51). Postresection, the patient's head is rigidly secured in extreme anterior neck flexion using a heavy submental-to-sternum **"chin-stitch"** or cervical splint to minimize tension on the fresh anastomosis. _Tragic complication:_ Sudden development of postoperative **tetraplegia** is secondary to extreme hyperflexion of the neck causing spinal cord ischemia; if suspected, the chin-stitch must be cut immediately.`
    },
    {
      title: `B. Mediastinoscopy`,
      content: `Utilized for lymph node staging in NSCLC. The most severe, life-threatening complication is major hemorrhage from a tear in the superior vena cava or pulmonary artery. 

- **The Innominate Artery Trap:** During advancement of the mediastinoscope, the scope bluntly compresses the innominate (brachiocephalic) artery against the posterior sternum. This artery supplies the right subclavian and right common carotid arteries. Anesthesiologists **MUST monitor the pulse in the right arm continuously** (using a pulse oximeter or right radial arterial line). Innominate compression triggers immediate right-arm pulselessness and carries an extreme risk of acute cerebrovascular ischemia/stroke if the patient lacks robust cerebral collateral circulation. A noninvasive blood pressure cuff must be placed on the left arm to track true systemic pressures during compression episodes. 

- **Hemorrhage Protocol (Box 49.13):** If massive bleeding occurs, immediately halt surgery and pack the wound with surgical sponges. Establish urgent large-bore vascular access **strictly in the lower extremities (femoral veins)** ; if the hemorrhage is from a superior vena cava tear, any fluid or blood resuscitated through upper extremity or internal jugular lines will instantly exit the laceration directly into the surgical field. Maintain systolic pressures in the 90s, call for urgent cardiothoracic backup, place a DLT or blocker, and prepare blood warmers/rapid infusers for emergent conversion to sternotomy. 

- **PACU Mandate:** Every single patient undergoing a mediastinoscopy must have a chest radiograph taken immediately upon arrival in the PACU to explicitly rule out an occult pneumothorax.`
    },
    {
      title: `C. Pneumonectomy & Postpneumonectomy Pulmonary Edema`,
      content: `Complete removal of a lung triggers immediate, permanent increases in right ventricular afterload due to a severe reduction in the available pulmonary vascular bed. 

**The Right-Sided Board Trap:** Chronic postoperative pulmonary hypertension and RV dysfunction are significantly more severe following a **Right Pneumonectomy** than a Left Pneumonectomy (RVSP jumps from 25 to 50 mmHg; Fig 49.49), as the right lung represents a larger proportion of the total vascular bed. 

**Postpneumonectomy Pulmonary Edema / Acute Lung Injury (ALI):** This carries a catastrophic 

Anesthesia for Thoracic Surgery — Board Review Guide 

mortality rate of 30% to 50%. Anesthesiologists must understand the four independent, proven risk factors for postresection ALI: 

   - Undergoing a **Pneumonectomy** (especially right-sided). 

1. 

2. **Excessive administration of perioperative intravenous fluids** (crystalloid volume exceeding 3 Liters within the first 24 hours). 

3. A high intraoperative **ventilatory pressure index** (elevated peak and plateau airway pressures combined with extended time). 

4. Preoperative **alcohol abuse**.`
    },
    {
      title: `D. Esophageal Surgery`,
      content: `- **Aspiration Risk:** All esophagectomy and Zenker's diverticulum patients carry an extreme risk of gastric aspiration. **Zenker's Diverticulum Board Trap:** The diverticulum orifice sits *above* the cricoid cartilage. Therefore, standard cricoid pressure (Sellick maneuver) during a rapidsequence induction is completely ineffective, will compress the sac, and will **forcibly empty its highly contaminated contents directly into the pharynx**, causing massive aspiration. Cricoid pressure must be strictly avoided; the patient must manually express and empty the sac immediately before induction, or an awake fiberoptic intubation must be performed in a 20-30 degree head-up position. 

- **Orringer Transhiatal Esophagectomy:** Airway management is achieved with a standard SLT. However, the surgeon performs a blunt, completely blind manual dissection of the thoracic esophagus through the diaphragmatic hiatus. This blind compression frequently compresses the heart and great vessels, triggering **sudden, severe, profound hypotension**. The SLT must *never* be cut short for this procedure; if the surgeon accidentally lacerates the posterior tracheal wall during blind dissection, the anesthesiologist must instantly advance the uncut SLT past the laceration into a mainstem bronchus to secure single-lung ventilation.`
    },
    {
      title: `E. Anterior/Superior Mediastinal Masses & "NPIC" Strategy`,
      content: `Masses in the anterior or superior mediastinum risk catastrophic airway obstruction and complete cardiovascular collapse (due to compression of the main pulmonary artery or atria) upon induction of general anesthesia. Life-threatening collapse can occur in completely asymptomatic pediatric patients due to compressible cartilaginous airways. Tracheobronchial compression **> 50% on CT scan is an absolute contraindication to general anesthesia**. 

- **Mechanism of Collapse:** General anesthesia reduces lung volume (reducing airway diameters), relaxes bronchial smooth muscle (increasing compressibility), and eliminates the normal caudal movement of the diaphragm. This completely abolishes the transpleural pressure gradient that holds the airways open during spontaneous inspiration, leading to instant, irreversible mechanical collapse. _Board Trap:_ The point of compression sits distal to the trachea; forcibly passing an endotracheal tube will hit an impassable structural block. 

- **The "NPIC" Induction Protocol (Noli Pontes Ignii Consumere — "Don't Burn Your Bridges"):** If general anesthesia is unavoidable, execute a slow, step-by-step inhalation induction (Sevoflurane) or titratable IV infusion (propofol, dexmedetomidine, ketamine) while **strictly maintaining spontaneous ventilation**. An experienced rigid bronchoscopist and a rigid bronchoscope must be sterile and present in the room during induction. If airway collapse occurs, immediately execute two rescue maneuvers: reposition the patient into the lateral or prone position, or immediately 

Anesthesia for Thoracic Surgery — Board Review Guide 

advance a rigid bronchoscope past the obstruction into a single mainstem bronchus to deliver oxygenation. 

- **Standby CPB Myth:** Utilizing Cardiopulmonary Bypass (CPB) "standby" is a dangerous board trap; if sudden airway collapse occurs, the time required to surgically cannulate and initiate femoral-femoral bypass exceeds the threshold for permanent hypoxic cerebral injury. True safety requires the establishment of peripheral ECMO *prior* to the induction of anesthesia.`
    },
    {
      title: `8. Enhanced Recovery After Surgery (ERAS) Modifiable Factors`,
      content: `The European Society of Thoracic Surgeons (ESTS) has codified perioperative modifiable factors to minimize the stress response and preserve organ function: 

###### **TABLE 49.12 & 49.13: CODIFIED ERAS MODIFIABLE FACTORS MATRIX** 

|**Factor Category**|**Specific Perioperative Intervention**|**Evidence**<br>**Level**|**Recommendation**<br>**Grade**|
|---|---|---|---|
|**Surgical**<br>**Modifiable**|Nutritional supplementation if malnourished|Moderate|Strong|
|**Surgical**<br>**Modifiable**|Smoking cessation program (Minimum > 4<br>weeks)|High|Strong|
|**Surgical**<br>**Modifiable**|Video-Assisted Thoracoscopic Surgery (VATS)<br>for early-stage lung cancer|High|Strong|
|**Anesthetic**<br>**Modifiable**|Deployment of DLT or Bronchial Blocker for<br>lung isolation|Moderate|Strong|
|**Anesthetic**<br>**Modifiable**|Lung-protective ventilation (4-6 mL/kg,<br>titrated PEEP)|Moderate|Strong|
|**Anesthetic**<br>**Modifiable**|Euvolemic, restrictive fluid management<br>(<3L in first 24h)|High|Strong|
|**Anesthetic**<br>**Modifiable**|Inclusion of acetaminophen and NSAIDs in<br>multimodal analgesia|High|Strong|
|**Anesthetic**<br>**Modifiable**|Nonintubated thoracic surgery pathways|Low|**NOT Recommended**|`
    },
    {
      title: `9. Comprehensive Postoperative Analgesia`,
      content: `Thoracotomy incisions trigger a unique, severe post-operative functional decline that plateaus at 72 hours. Afferent nociceptive signals originate from multiple independent neural pathways, necessitating aggressive multimodal management: 

1. **The Surgical Incision:** Transmitted via intercostal nerves T4–T6. 

Anesthesia for Thoracic Surgery — Board Review Guide 

2. **Chest Tubes/Drains:** Transmitted via intercostal nerves T7–T8. 

3. **Mediastinal Pleura:** Transmitted via the vagus nerve (CN X). 

4. **Central Diaphragmatic Pleura:** Transmitted via the phrenic nerve (C3–C5). 

5. **Ipsilateral Shoulder:** Transmitted via the brachial plexus.`
    },
    {
      title: `Analgesic Modalities & Board Points`,
      content: `- **Thoracic Epidural Analgesia (TEA):** The historic gold standard. Achieved via a paramedian or laminar approach at midthoracic levels (T4–T7). Combined local anesthetic-opioid infusions provide synergistic analgesia. Highly lipid-soluble opioids (fentanyl, sufentanil) exhibit narrow dermatomal spread and high systemic vascular absorption when infused continuously. For wide incisions spanning multiple dermatomes (e.g., esophagectomy, clamshell, sternotomy), **hydrophilic opioids (morphine, hydromorphone) are highly preferred** due to extensive CSF distribution. _ASRA Coagulation Timing:_ Catheter placement requires an interval of 4 to 6 hours after a prophylactic dose of unfractionated heparin. For low-dose Low-Molecular-Weight Heparin (LMWH), wait a minimum of **12 hours**, and for high-dose therapeutic LMWH, wait a minimum of **24 hours** before catheter placement or removal. 

- **Paravertebral Block (PVB):** Infusion of local anesthetic into the potential space deep to the endothoracic fascia, producing reliable unilateral dermatomal block (Fig 49.60). Randomized comparisons with TEA demonstrate that PVB provides **identical, equivalent analgesia but with a significantly lower rate of block failure, less systemic hypotension, lower incidence of urinary retention, and zero risk of neuraxial hematoma** . PVB can be directly placed under direct vision by the surgeon when the chest is open. 

- **Ultrasound-Guided Fascial Blocks:** 

   - **Serratus Anterior Plane Block:** Performed at the 5th rib in the midaxillary line between the serratus anterior and latissimus dorsi muscles, serving as an effective adjunct for port sites and drains. 

   - **Erector Spinae Plane (ESP) Block:** Injection of local anesthetic deep to the erector spinae muscle fascia at the T5 transverse process level (Fig 49.61). It serves as an exceptional unilateral rescue modality for acute thoracotomy or VATS pain and can be safely deployed in the setting of prophylactic anticoagulation. 

- **The Postthoracotomy Shoulder Pain Trap (55% vs 45%):** Chronic, intense ipsilateral shoulder pain affects up to 78% of post-resection patients. **It is completely un-reactive to thoracic epidurals or paravertebral blocks** . This pain is divided into referred pain via phrenic nerve diaphragmatic irritation (55%) and true musculoskeletal shoulder girdle spasm (45%). Musculoskeletal pain is highly intense and **most responsive strictly to anti-inflammatories (NSAIDs and Acetaminophen)**. 

Anesthesia for Thoracic Surgery — Board Review Guide`
    },
    {
      title: `ANESTHESIA BOARD EXAM: THORACIC ANESTHESIA SECTION`,
      content: `_Instructions: Select the single best answer for each question. Detailed board-style rationales follow the answer choices._`
    }
  ]
};
