export const equip = {
  id: "equip",
  title: "Equipment & Monitoring",
  questions: [
    {
      id: 1,
      stem: "Which of the following is a sign of effective CPR",
      options: {
        A: "PETCO2 > 10 mmhg",
        B: "Patient temperature < 32 c",
        C: "Measured urine output of 1 ml/kg per hour",
        D: "Diastolic intra- arterial pressure <20 mmhg"
      },
      correctAnswer: "A",
      explanation: "An end-tidal CO2 (PETCO2) greater than 10–15 mmHg during ongoing cardiopulmonary resuscitation reflects adequate pulmonary blood flow and serves as a key indicator of effective chest compressions and prognosis for ROSC."
    },
    {
      id: 2,
      stem: "14 years old girl, for scoliosis repair under general anesthesia, she have history of thoracic scoliosis with Cobb’s angle 60 What is the best predictor of post-operative respiratory complication?",
      options: {
        A: "Vital capacity less than 40%",
        B: "DLCO2 less than 50",
        C: "FEV1 65%",
        D: "FVC 75%"
      },
      correctAnswer: "A",
      explanation: "A preoperative **Vital Capacity (VC) less than 40% of predicted** in severe thoracic scoliosis is a major predictor of postoperative pulmonary complications and the need for prolonged mechanical ventilation."
    },
    {
      id: 3,
      stem: "Pulse oximeter :",
      options: {
        A: "Contain both red & infrared",
        B: "Wave length used 600-900",
        C: "Wave length used 800-900"
      },
      correctAnswer: "A",
      explanation: "Pulse oximeters utilize two distinct light wavelengths: **red light (~660 nm)** and **infrared light (~940 nm)** to differentiate oxygenated hemoglobin from deoxygenated hemoglobin."
    },
    {
      id: 4,
      stem: "Which of the following is the least to affect SpO2 probe (pulse oximeter):",
      options: {
        A: "Fluorescent light",
        B: "Infrared light",
        C: "Surgical light",
        D: "Camera flash light",
        E: "Fibreoptic surgical light"
      },
      correctAnswer: "A",
      explanation: "Ambient operating room lights (surgical lamps, fluorescent sources) can cause pulse oximeter interference if unshielded, whereas internal sensor calibration accounts for baseline probe spectrums."
    },
    {
      id: 5,
      stem: "Regarding pulse oximeter , which gives false elevation reading:",
      options: {
        A: "Hemoglobin S",
        B: "Hemoglobin F",
        C: "Methylene blue dye",
        D: "Fluroscene dye",
        E: "Carboxyhaemoglobin"
      },
      correctAnswer: "E",
      explanation: "**Carboxyhemoglobin absorbs light strongly at 660 nm**, mimicking oxygenated hemoglobin and causing standard pulse oximeters to give **falsely high/elevated SpO2 readings** in carbon monoxide poisoning. Dyes like methylene blue cause falsely low readings."
    },
    {
      id: 6,
      stem: "32 year old male found unconscious by the fire department in a room where he inhaled 0.1% CO for a prolonged period , his RR 42 breath/min but he is not cyanotic. CO increases his MV by which mechanism?",
      options: {
        A: "Left shift of the oxygen Hemoglobin dissociation curve",
        B: "Increase CO2 production",
        C: "Lactic acidosis",
        D: "Decreasing Pao2",
        E: "Producing methemoglobin"
      },
      correctAnswer: "C",
      explanation: "Carbon monoxide binds avidly to hemoglobin, creating carboxyhemoglobin which impairs tissue oxygen unloading. The resulting severe tissue hypoxia triggers **lactic acidosis**, which stimulates peripheral and central chemoreceptors to markedly increase minute ventilation."
    },
    {
      id: 7,
      stem: "50 year old patient for laparoscopic surgery, how Co2 inflation participate in lowering the patient’s temperature:",
      options: {
        A: "Radiation",
        B: "Convection",
        C: "Conduction",
        D: "Evaporation"
      },
      correctAnswer: "B",
      explanation: "Insufflation of cold, dry CO2 gas directly into the peritoneal cavity extracts core body heat primarily via **convective heat loss** and gas expansion/evaporation."
    },
    {
      id: 8,
      stem: "With which of following type of laser you showed wear green tinged goggles ?",
      options: {
        A: "KTP",
        B: "Argon",
        C: "Co2 laser",
        D: "YAG"
      },
      correctAnswer: "D",
      explanation: "Laser safety eyewear is wavelength-specific: **Nd:YAG lasers (1064 nm, near-infrared) require green-tinted goggles** to absorb the beam. Argon/KTP lasers require amber/orange lenses, while CO2 lasers require clear lenses."
    },
    {
      id: 9,
      stem: "Which of the following is most likely related to CO2 laser airway surgery :",
      options: {
        A: "It’s a red color.",
        B: "It’s wave length is 500 nm.",
        C: "Originated from solid emitter.",
        D: "Cannot be transmitted through fiberoptic"
      },
      correctAnswer: "D",
      explanation: "The **CO2 laser wavelength (10,600 nm / invisible infrared region)** is absorbed by water and glass, meaning it **cannot be transmitted through standard flexible glass fiberoptics** and requires articulated mirror arms or specialized hollow-core wave guides."
    },
    {
      id: 10,
      stem: "Regarding IOP :",
      options: {
        A: "Increase Po2 will decrease IOP",
        B: "Increase Po2 will increase IOP",
        C: "Increase Pco2 will increase IOP",
        D: "Decrease Pco2 will increase IOP"
      },
      correctAnswer: "C",
      explanation: "**Hypercapnia (increased PaCO2) causes choroidal vasodilation**, leading to an increase in intraocular pressure (IOP); hypocapnia and hyperoxia lower IOP."
    },
    {
      id: 11,
      stem: "64y old pt was diagnosed to have SAH without symptoms other than headache and without neurological deficit coming for coiling, which of the following is true:",
      options: {
        A: "Invasive arterial line is recommended",
        B: "Hypotensive anesthesia is good in this case",
        C: "Aim for hyperventilation to PaCO2 of 25 mmHg",
        D: "Optimal temperature is 32C",
        E: "Moderate sedation using propofol and remifentanil"
      },
      correctAnswer: "A",
      explanation: "An **invasive arterial line is strongly recommended** during cerebral aneurysm coiling to ensure continuous, precise blood pressure monitoring and strict control of cerebral perfusion pressure."
    },
    {
      id: 12,
      stem: "24 year male MVA had exploratory laparotomy, nephrectomy, splenectomy, received 3 unit PRBC over 2 hour, FiO2 80% to keep O2 saturation 92% , PB: 110\\76 , HR: 110 , Temp: 36.7 , O2 sat room air 94% ABG showed : pH: 7.34 , PaCO2: 56 , PaO2: 106 Chest x Ray shows bilateral infiltrates What is your diagnosis ?",
      options: {
        A: "Aspiration Pneumonia",
        B: "Transfusion Related Acute Lung Injury (TRALI)",
        C: "Negative Pressure Pulmonary Edema",
        D: "Transfusion Associated Circulatory Overload (TACO)"
      },
      correctAnswer: "B",
      explanation: "New-onset non-cardiogenic pulmonary edema developing within 6 hours of blood product transfusion characterized by severe hypoxemia (PaO2/FiO2 <= 300) and bilateral infiltrates in the absence of left atrial hypertension defines **TRALI**."
    },
    {
      id: 13,
      stem: "Which of the following conditions prevent rebreathing of exhaled gases in Mapleson A breathing circuit:",
      options: {
        A: "Patient alveolar ventilation",
        B: "2 × MV",
        C: "3 × MV",
        D: "4 × MV",
        E: "70 ml/kg/min"
      },
      correctAnswer: "A",
      explanation: "In a **Mapleson A circuit during spontaneous ventilation**, fresh gas flow equal to **alveolar ventilation (1 x Minute Ventilation)** completely prevents rebreathing (the most efficient circuit for spontaneous ventilation)."
    },
    {
      id: 14,
      stem: "Bain circuit MV prevent rebreathing:",
      options: {
        A: "Alveolar vent",
        B: "2 × MV",
        C: "3 × MV",
        D: "4 × MV"
      },
      correctAnswer: "C",
      explanation: "The **Bain circuit** (a coaxial Mapleson D) requires high fresh gas flow rates (**2.5 to 3 x Minute Ventilation**) during controlled mechanical ventilation to prevent rebreathing."
    },
    {
      id: 15,
      stem: "An adult patient is anesthetized and is breathing spontaneously via a Bain circuit. The volume of fresh gas flow to prevent rebreathing a most accurately determined by which of the following?",
      options: {
        A: "Age",
        B: "Body Weight",
        C: "Tidal volume",
        D: "Minute volume"
      },
      correctAnswer: "D",
      explanation: "Fresh gas flow requirements in Mapleson systems are directly proportional to the patient's **Minute Volume (MV)**."
    },
    {
      id: 16,
      stem: "Q about circuits . Memorize all circuits with what close to the pt :",
      options: {
        A: "Mapelson A FGF and APL close to pt",
        B: "Mapelson F has open bag and FGF is close to pt",
        C: "Mapelson D the FGF .APL and breathing bag close to pt",
        D: "Mapelson E something"
      },
      correctAnswer: "B",
      explanation: "In the Mapleson F (Jackson-Rees) circuit, the fresh gas flow (FGF) inlet is close to the patient, while the reservoir bag with an open tail/relief mechanism is located at the distal (machine) end."
    },
    {
      id: 17,
      stem: "Which of the following is fresh gas decoupling in Draeger workstation?",
      options: {
        A: "Fresh gas inflow directly into circle system",
        B: "The oxygen flush valve is entering the circle system at the fresh gas inlet",
        C: "The ventilator is delivering the prescribed tidal volume to the patient lungs",
        D: "The fresh gas inlet is delivered into reservoir bag by a valve that is located between the fresh gas source and ventilator circuit."
      },
      correctAnswer: "D",
      explanation: "In **fresh gas decoupling** workstations (e.g., Draeger Fabius/Cicero), a decoupling valve diverts fresh gas flow away from the breathing circuit and into the reservoir bag during inspiration, ensuring delivered tidal volume remains unaffected by FGF variations."
    },
    {
      id: 18,
      stem: "One of the following will cause hyperventilation and shift the Co2 curve to the left ?",
      options: {
        A: "Metabolic Acidosis",
        B: "Hyperoxia",
        C: "Barbiturate",
        D: "one of the opioids"
      },
      correctAnswer: "A",
      explanation: "Metabolic acidosis stimulates peripheral chemoreceptors, causing compensatory hyperventilation which shifts the carbon dioxide response curve to the left."
    },
    {
      id: 19,
      stem: "An anesthetist is starting his first case of the day, which of the following part of the checkout of anesthesia workstation?",
      options: {
        A: "In GE Aisys machine, pressure system leakage is not measured",
        B: "Oxygen analyzer is least important monitors of the anesthesia ventilators",
        C: "A functioning self-inflating resuscitation bag is required even if anesthesia machine passed initial checkout time",
        D: "The ASA 2008 recommendation call for performing the breathing system test and leak test before",
        E: "Starting once a week"
      },
      correctAnswer: "C",
      explanation: "Per ASA checkout recommendations, an independent backup ventilation device (**self-inflating bag-valve-mask / Ambu bag**) must always be immediately available regardless of automated workstation check results."
    },
    {
      id: 20,
      stem: "Pre use check identify leak by anesthetist, the most fragile part of the anesthesia machine which can cause leak is :",
      options: {
        A: "O2 analyzer",
        B: "CO2 analyzer",
        C: "Cuff leak",
        D: "O ring"
      },
      correctAnswer: "D",
      explanation: "Rubber **O-rings** (especially at high-pressure cylinder yokes and pipeline connections) are the most frequently displaced or degraded components causing pressure leaks in anesthesia machines."
    },
    {
      id: 21,
      stem: "19 years old male for emergency appendectomy, Anesthesia machine self-test . you have to check the circle test manually :",
      options: {
        A: "Close the pop-off valve, occlude the Y-piece, pressure the circuit to 50 cm water",
        B: "Close the pop-off valve, occlude the Y-piece, pressure the circuit to 30 cm water",
        C: "Close the pop-off valve, occlude the Y-piece, pressure the circuit to 100 cm water",
        D: "Remove the Y-piece, breath through the two corrugated hoses individually, the valve should present and move appropriately"
      },
      correctAnswer: "B",
      explanation: "Manual low-pressure circle system leak testing involves closing the APL valve, occluding the Y-piece, and pressurizing the circuit to **30 cmH2O** to verify absence of major leaks."
    },
    {
      id: 22,
      stem: "First sign of MH :",
      options: {
        A: "Muscle spasm",
        B: "Hyperthermia",
        C: "Increase EtCO2"
      },
      correctAnswer: "C",
      explanation: "An abrupt, **unexplained rise in End-Tidal Carbon Dioxide (ETCO2)** out of proportion to minute ventilation is the earliest, most sensitive metabolic sign of Malignant Hyperthermia."
    },
    {
      id: 23,
      stem: "45 yrs old admitted to the ICU due to pulmonary embolism. On 100% O2 ABG shows: PaCo2 25, PH 7.5, PaO2 60 What is the cause of abnormal ABG?",
      options: {
        A: "Hypoperfusion",
        B: "Diffusion abnormality",
        C: "Ventilation perfusion mismatch",
        D: "Shunt"
      },
      correctAnswer: "C",
      explanation: "Acute pulmonary embolism creates massive unperfused ventilated lung regions (**high V/Q mismatch and dead space**), leading to severe refractory hypoxemia despite 100% O2."
    },
    {
      id: 24,
      stem: "45 yrs old admitted to the ICU due to pulmonary embolism his ABG Show PaCo2 25  PH 7.5 PaO2 60  On fio2 80%   What is the cause???",
      options: {
        A: "Dead space",
        B: "Diffusion abnormality",
        C: "Shunt",
        D: "Hypoperfusion syndrome"
      },
      correctAnswer: "A",
      explanation: "Pulmonary vascular obstruction increases **alveolar dead space**, resulting in wasted ventilation, hyperventilation (PaCO2 = 25 mmHg), and refractory hypoxemia."
    },
    {
      id: 25,
      stem: "56 years old male known case of emphysema, ABG: PH 7.36, PCO2 39, PO2 60, Which of the following the cause of this abnormalities:",
      options: {
        A: "Shunt",
        B: "Hypoventilation",
        C: "Ventilation perfusion mismatch",
        D: "Membrane damage"
      },
      correctAnswer: "C",
      explanation: "Emphysema destroys alveolar walls and pulmonary capillary beds, creating extensive **V/Q mismatching** responsible for hypoxemia with normocarbia."
    },
    {
      id: 26,
      stem: "65 years old man admitted to ICU after motor vehicle accident with acute respiratory distress syndrome.  ABG analyzed on Oxygen 70% shows: PH 7.36, PaCO2: 4.9 kpa, PaO2: 13.3 kpa. What is the cause:",
      options: {
        A: "Shunt",
        B: "Hypoventilation",
        C: "Diffusion impairment",
        D: "Ventilation / Perfusion mismatch"
      },
      correctAnswer: "A",
      explanation: "In ARDS, alveolar flooding and collapse create profound **intrapulmonary shunting (V/Q = 0)**, producing refractory hypoxemia that does not correct with supplemental oxygen alone."
    },
    {
      id: 27,
      stem: "Intubated patient under general anaesthesia on 100% oxygen, ventilation was interrupted for 5 min and EtCO2 increased by 10 mmHg. This increase is due to:",
      options: {
        A: "Shunt",
        B: "V-Q mismatching",
        C: "Increase production of carbon monoxide",
        D: "Alteration of fluid-gas gradient",
        E: "Increased dead space"
      },
      correctAnswer: "A",
      explanation: "Apnea / cessation of ventilation stops carbon dioxide elimination, allowing continuous metabolic CO2 production to accumulate in the functional residual capacity and circuit, raising ETCO2."
    },
    {
      id: 28,
      stem: "Which of the following cause increase in PETCO2",
      options: {
        A: "Seizure",
        B: "Poor sampling spine",
        C: "Leaking from the tube",
        D: "Pulmonary hypoperfusion"
      },
      correctAnswer: "A",
      explanation: "Conditions that acutely increase cellular metabolism and CO2 production (**seizures, malignant hyperthermia, sepsis, shivering**) cause a marked **increase in ETCO2**."
    },
    {
      id: 29,
      stem: "Which of the following causes an increase in ETCO2 ?",
      options: {
        A: "PE",
        B: "Poor sampling",
        C: "Hypoventilation",
        D: "Pulmonary hypoperfusion"
      },
      correctAnswer: "C",
      explanation: "**Hypoventilation** reduces alveolar minute ventilation, causing alveolar and end-tidal carbon dioxide accumulation (ETCO2). PE and hypoperfusion decrease ETCO2."
    },
    {
      id: 30,
      stem: "55 y k/o hypothyroidism for lap cholecystectomy which of following can rise ETCO2 during GA :",
      options: {
        A: "Sepsis",
        B: "Hypothyroidism",
        C: "Hypothermia",
        D: "PE"
      },
      correctAnswer: "A",
      explanation: "**Sepsis** increases metabolic rate, oxygen consumption, and carbon dioxide production, elevating ETCO2. Hypothermia and PE lower ETCO2."
    },
    {
      id: 31,
      stem: "Which of the following conditions will increase PaCO2 to PetCO2 Gradient :",
      options: {
        A: "Hypoventilation",
        B: "V/Q mismatch",
        C: "Atelectasis",
        D: "Rt to Lt shunt",
        E: "CO2 Absorbent failure"
      },
      correctAnswer: "B",
      explanation: "Any condition that increases **alveolar dead space (V/Q mismatch, PE)** increases the gradient between arterial PaCO2 and end-tidal ETCO2 (PaCO2 - ETCO2)."
    },
    {
      id: 32,
      stem: "A 20 y/o male patient, post laparotomy discharged to PACU. Desaturating 80-85%. ABG: pH; 7.1, pO2: 6.7 kpa, pCO2: 10.7 kpa , HCO3: 21 mmol/L, What most probably explains these ABG findings ?",
      options: {
        A: "Atelectasis",
        B: "Alveolar hypoventilation",
        C: "Hypoxic gas mixture",
        D: "Carbon monoxide poisoning"
      },
      correctAnswer: "B",
      explanation: "Severe acute respiratory acidosis (pH 7.10, PaCO2 = 10.7 kPa approx 80 mmHg) combined with hypoxemia reflects profound **acute alveolar hypoventilation** (residual neuromuscular blockade or opioid sedation)."
    },
    {
      id: 33,
      stem: "ABG: PH 7.10, CO2 High 70 maybe, O2 low 50. What the cause?",
      options: {
        A: "Alveolar hypoventilation",
        B: "VQ mismatch",
        C: "Shunt",
        D: "Diffusion"
      },
      correctAnswer: "A",
      explanation: "Elevated PaCO2 (70 mmHg) with acidemia (pH 7.10) and hypoxemia is the classic ABG signature of **alveolar hypoventilation**."
    },
    {
      id: 34,
      stem: "What the changes that occur in in laparoscopic :",
      options: {
        A: "Increase CO",
        B: "Decrease CO",
        C: "Increase CO2",
        D: "Decrease CO2"
      },
      correctAnswer: "C",
      explanation: "Peritoneal insufflation of CO2 leads to systemic absorption, resulting in **hypercarbia / increased CO2 absorption** alongside elevated SVR and decreased cardiac output."
    },
    {
      id: 35,
      stem: "30 years old male brought with decreased Level of consciousness and fixed right pupil “5mm” . His medical history was significant for ESD and subdural hematoma, evacuation was done in OR, and the patient was transferred to ICU intubated Fio2 50% and sedated. Vitals were as follow: BP: 100/50, HR: 120, O2 sat: 85%, Temp: 39, RR: 35 What is management according to TBI ?",
      options: {
        A: "PO2 80, CO2 35, MAP 80, Temperature 36",
        B: "PO2 60, CO2 40, MAP 60, Temperature 36",
        C: "PO2 60, CO2 35, MAP 80, Temperature 38",
        D: "PO2 80, CO2 40, MAP 60, Temperature 36"
      },
      correctAnswer: "A",
      explanation: "Optimal TBI targets include: normoxia (PaO2 >= 80 mmHg / SaO2 > 95%), normocapnia (PaCO2 = 35–38 mmHg), adequate perfusion (MAP >= 80 mmHg -> CPP >= 60), and strict normothermia (36–37C)."
    },
    {
      id: 36,
      stem: "Berlin criteria for respiratory acute distress syndrome, which of the following is least for indication of severity:",
      options: {
        A: "PaO2 / FiO2 ratio",
        B: "Bilateral infiltrates on chest X-ray",
        C: "CO2 level",
        D: "Positive end expiratory pressure"
      },
      correctAnswer: "C",
      explanation: "The Berlin Definition of ARDS categorizes severity strictly based on the **PaO2/FiO2 ratio** (with PEEP >= 5 cmH2O); arterial carbon dioxide (CO2) level is not a grading parameter."
    },
    {
      id: 37,
      stem: "3 day old with diaphragmatic hernia for repair the concern of anesthetic management is:",
      options: {
        A: "Keep Po2 <100mmHg",
        B: "Keep Pco2 > 45mmHg",
        C: "N2o can be used",
        D: "Fio2 should be 100%",
        E: "Hypothermia"
      },
      correctAnswer: "B",
      explanation: "CDH anesthetic management emphasizes gentle ventilation with peak pressures < 25 cmH2O, avoiding hyperoxia, and utilizing **permissive hypercapnia (PaCO2 >= 45–55 mmHg)** to reduce pulmonary vascular resistance."
    },
    {
      id: 38,
      stem: "Which of the following value will predict an increased risk of post- operative pulmonary complications after lung surgery?",
      options: {
        A: "PaO2 > 80, room air, arterial blood gas",
        B: "PaCO2 > 40, room air, arterial blood gas",
        C: "FEV1 > 2 L",
        D: "FEV1/FVC > 0.5",
        E: "Patient with predicted post-operative FEV1 (ppoFEV1) < 40 %"
      },
      correctAnswer: "E",
      explanation: "A **predicted postoperative FEV1 (ppoFEV1) less than 40%** (or ppoDLCO < 40%) indicates high risk for postoperative cardiopulmonary morbidity and mortality following lung resection."
    },
    {
      id: 39,
      stem: "About hypoventilation definition ?",
      options: {
        A: "Increase Co2 due to cessation of air flow"
      },
      correctAnswer: "A",
      explanation: "Hypoventilation is defined physiologically as alveolar ventilation insufficient to eliminate metabolically produced CO2, resulting in hypercapnia (PaCO2 > 45 mmHg)."
    },
    {
      id: 40,
      stem: "Lap chole under GA after abdominal insufflation patient has asystole. Which mechanism is likely the cause ?",
      options: {
        A: "Acute Peritoneal stretching",
        B: "Decrease venous retune",
        C: "Co2 embolism"
      },
      correctAnswer: "A",
      explanation: "Rapid peritoneal insufflation and stretching of the peritoneum trigger a strong **peritoneal-vagal reflex**, resulting in sudden severe bradycardia or asystole."
    },
    {
      id: 41,
      stem: "Characteristics of CO2 absorbent that help in forming compound A with Sevoflurane ?",
      options: {
        A: "Small granules",
        B: "High water content",
        C: "High silica",
        D: "Strong base"
      },
      correctAnswer: "D",
      explanation: "**Compound A** formation is accelerated by desiccated absorbent, high absorbent temperature, high sevoflurane concentrations, and the presence of **strong bases (KOH/NaOH)**."
    },
    {
      id: 42,
      stem: "Q about Nitric oxide in ARDS :",
      options: {
        A: "Reduce mortality",
        B: "Reduce ventilator days",
        C: "Increase PaO2/fiO2 ratio"
      },
      correctAnswer: "C",
      explanation: "Inhaled Nitric Oxide (iNO) selectively dilates pulmonary vessels in ventilated alveoli, leading to a transient **improvement in oxygenation (PaO2/FiO2 ratio)**, though large trials show it does not reduce overall mortality or ventilator duration in ARDS."
    },
    {
      id: 43,
      stem: "The scavenging interface is the most important component of the system Because it protects the breathing circuit or ventilator from excessive positive or negative pressure. ( Q true about scavenging interface system )",
      options: {
        A: "Open need active disposal",
        B: "Open has negative valve",
        C: "Close something",
        D: "Close"
      },
      correctAnswer: "A",
      explanation: "Scavenging interfaces protect the patient's airway from excessive subatmospheric pressure (from active suction disposal systems) or high positive pressure (from occlusion). Open interfaces vent to room air and have no valves, requiring an active disposal system."
    },
    {
      id: 44,
      stem: "11 y/o SCD for laparoscopic procedure what changes occur with CO2 Insufflation ?",
      options: {
        A: "PaCO2 increase 50%",
        B: "Increase venous return",
        C: "Increase V/Q mismatch",
        D: "Increase pulmonary vascular resistance"
      },
      correctAnswer: "C",
      explanation: "In patients with Sickle Cell Disease, CO2 pneumoperitoneum combined with surgical stress increases V/Q mismatch, systemic vascular resistance, and acidosis, heightening the risk of acute sickle vaso-occlusive crisis."
    },
    {
      id: 45,
      stem: "14 year old girl , Rt. Radial fracture fixation, under GA, later vitals showed: EtCo2: 70, HR 120, Temp 39, with muscle rigidity, What is responsible for this pic?",
      options: {
        A: "Sevo",
        B: "Propofol",
        C: "Ketamine",
        D: "N2O"
      },
      correctAnswer: "A",
      explanation: "The classic triad of **hypercarbia (ETCO2 = 70), tachycardia, hyperthermia (Temp 39°C), and skeletal muscle rigidity** following exposure to volatile anesthetics (Sevoflurane) is diagnostic for **Malignant Hyperthermia**."
    },
    {
      id: 46,
      stem: "Old man around 60 known case of DM and HTN had a history of fall down on floor. Complicated by hip fracture, Plan for fixation, GA initiated Then suddenly after induction End co2 high cyanosis, hypotension, What’s your immediate action:",
      options: {
        A: "Start chest compression",
        B: "Give IV adrenaline",
        C: "Abort the surgery and shift the Pt to ICU immediately"
      },
      correctAnswer: "B",
      explanation: "Sudden profound hypotension, hypoxia/cyanosis, and acute cardiovascular collapse upon cementation/fixation of a hip fracture indicate severe Fat Embolism Syndrome or Bone Cement Implantation Syndrome; immediate resuscitation with 100% O2 and **vasopressors (Adrenaline)** is required."
    },
    {
      id: 47,
      stem: "46-year-old female patient, undergoing an elective open anterior colon resection. After an uneventful induction of anesthesia, general anesthesia was maintained by sevoflurane and boluses of fentanyl and rocuronium. During the procedure, the anesthesiologist noticed the following parameters: SpO2: 100%, EtCO2: 34, TOF:0, PTC: 1, PVI (Pleth Variability index): 41%, MAC: 0.9, BIS: 51. Which of the following agents will improve the patient’s condition given the parameters?",
      options: {
        A: "Propofol",
        B: "Rocuronium",
        C: "Succinylcholine",
        D: "Ringer Lactate"
      },
      correctAnswer: "D",
      explanation: "A **Pleth Variability Index (PVI) of 41%** is markedly elevated (normal < 13–14%), indicating severe intravascular volume depletion / fluid responsiveness; administering a balanced crystalloid fluid bolus (**Ringer Lactate**) corrects the deficit."
    },
    {
      id: 48,
      stem: "30 yrs. female came as emergency laparotomy she gives a hx of excessive sweating, heat intolerance, loss weight, After induction she became tachycardia 140 BPM and hypertensive 140/100, the pt. not improved after deepening anesthesia and analgesia, surgery is done uneventful, pt. in the recovery and with this parameter : Temp 39.9, ABG show:, Ph (7.2), Pco2 (56), PO2 was normal range, What’s the Genetic mutation?",
      options: {
        A: "NMDA",
        B: "Ryanodine",
        C: "Potassium channel"
      },
      correctAnswer: "B",
      explanation: "Malignant Hyperthermia is an autosomal dominant pharmacogenetic disorder linked primarily to mutations in the **RYR1 gene (Ryanodine Receptor type 1)** on skeletal muscle sarcoplasmic reticulum."
    },
    {
      id: 49,
      stem: "30 yrs. female came as emergency laparotomy she gives a hx of excessive sweating, heat intolerance, loss weight, After induction she became tachycardia 140 BPM and hypertensive 140/100, the pt. not improved after deepening anesthesia and analgesia, surgery is done uneventful, pt. in the recovery and with this parameter : Temp 39.9, ABG show:, Ph (7.2), Pco2 (56), PO2 was normal range, What is the best management?",
      options: {
        A: "Paracetamol",
        B: "Dantrolene",
        C: "Methidazole",
        D: "Cyproheptadine"
      },
      correctAnswer: "C",
      explanation: "History of weight loss, heat intolerance, and sweating combined with extreme hyperpyrexia (Temp 39.9°C), tachycardia (140 BPM), and hypercarbic acidosis post-induction points to **Thyroid Storm** (thyrotoxic crisis), treated with antithyroid agents (Methimazole/PTU), beta-blockers, and steroids."
    }
  ]
};
