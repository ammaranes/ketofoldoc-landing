// chapter_01.js
// Chapter 1: Anesthesia Equipment and Physics

export const chapter01 = [
  {
    "id": 1,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "A 75-year-old patient in the intensive care unit (ICU) is extubated after recovering from acute respiratory distress syndrome (ARDS). He has a history of previous myocardial infarction, congestive heart failure, and pneumonia. He has an A-line, pulmonary artery (PA) catheter and is receiving oxygen by nasal cannula. Which of the following techniques is LEAST accurate for assessing an intravascular fluid challenge?",
    "options": {
      "A": "Central venous pressure (CVP)",
      "B": "PA occlusion pressure",
      "C": "Transesophageal echocardiography (TEE)",
      "D": "Measurement of pulse pressure variation (PPV)"
    },
    "correctAnswer": "D",
    "explanation": "Cardiac output is determined by four main factors: preload, afterload, myocardial contractility, and heart rate. An intravascular fluid challenge is frequently used to increase preload and cardiac output. Preload refers to the amount of stretch of the cardiac muscle at the start of systole and is indirectly determined by the pressure in the ventricle (an increase in pressure usually means increase to stretch, unless there is a cardiac tamponade, which prevents the heart from filling). Afterload refers to the resistance in blood flow from the ventricle as determined by the aortic valve or arterial resistance. Contractility refers to the measurement of force the cardiac muscle can generate. A PA catheter is often placed to measure the CVP, PA pressure, and wedge pressure, and can determine the cardiac output (usually by thermodilution). The CVP measures the filling pressure for the right ventricle, and the PA occlusion or wedge pressure measures the filling pressure for the left ventricle. TEE can be used to look at the size of the ventricular chambers and how well they contract (e.g., ejection fraction). When a patient is receiving positive pressure ventilation, measurement of PPV or systolic pressure variation (SPV) can be done. When positive pressure is applied to the lungs during mechanical ventilation (i.e., during inspiration), venous return to the right side of the heart and right ventricle stroke volume is reduced, decreasing cardiac output and systolic BP. Pulse pressure is the difference between systolic and diastolic BPs. PPV is defined as the pulse pressure between breaths (PPmax) minus the pulse pressure during positive pressure ventilation (PPmin) divided by the mean pulse pressure (PPmax + PPmin/2) times 100%. For example, if the PPmax is 90 (systolic BP 160, diastolic 70) and the PPmin is 70 (systolic BP 130, diastolic 60) then the PPV = (90 - 70)/80 = 25%. Patients are considered fluid responsive (i.e., an increase in BP or cardiac output) if the PPV is > 15% and not fluid responsive if the PPV is < 7%. Alternatively, SPV, which is the difference in systolic BP during inspiration (positive intrathoracic pressure) and expiration, can be determined, with normal values of 7 to 10 mm Hg. Hypovolemic patients have an elevation in SPV. Patients with an SPV > 10 mm Hg are fluid responsive, whereas those with an SPV < 5 mm Hg are not fluid responsive. For both SPV and PPV the patient must be mechanically ventilated and in a regular rhythm (not in atrial fibrillation) for the calculations. Measurements of BP are with an arterial line. This patient has been extubated, so measurement of PPV or SPV cannot be performed. (Miller: Basics of Anesthesia, ed 7, pp 352–357; Miller: Miller’s Anesthesia, ed 8, pp 1359–1361)."
  },
  {
    "id": 2,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "Select the correct statement regarding color Doppler imaging.",
    "options": {
      "A": "It is a form of M-mode echocardiography",
      "B": "The technology is based on continuous wave Doppler",
      "C": "By convention, motion toward the ultrasound probe is red and motion away from the probe is blue",
      "D": "Two ultrasound crystals are used: one for transmission of the ultrasound signal and one for reception of the returning wave"
    },
    "correctAnswer": "C",
    "explanation": "Color Flow. This Doppler modality is an application of pulsed wave Doppler technology that allows determination of velocity at a specific location. Velocity is color coded and superimposed over a two- dimensional image. However, like pulsed wave Doppler, color Doppler is limited by signal aliasing. Fluid or tissue that moves toward the probe causes compression of sound waves and an increase in the received frequency, whereas motion away from the probe leads to a reduced frequency. Although ultrasound machine color maps can often be adjusted, by convention flow toward the probe is coded red, whereas flow away from the probe is coded blue (BART: Blue Away Red Toward). Continuous wave Doppler. Continuous wave Doppler uses two dedicated ultrasound crystals, one for continuous transmission and a second for continuous reception of ultrasound signals. This permits measurement of very high frequency Doppler shifts or velocities. The “cost” is range ambiguity. In other words, the precise location of the peak velocity along the length of the Doppler cursor is not definitely known. Instead, the clinician must infer the location of the highest velocity, such as a stenotic aortic valve. Continuous wave Doppler is used for measuring very high velocities (e.g., stenosis of a valve or prosthesis). Pulsed Doppler. In contrast to continuous wave Doppler, which records the signal along the entire length of the ultrasound beam, pulsed wave Doppler permits sampling of blood flow velocities from a specific region, known as the sample volume. This modality is particularly useful for assessing the relatively low velocity flows associated with transmitral or transtricuspid blood flow, pulmonary venous flow, and left atrial appendage flow. To permit this, a pulse of ultrasound is transmitted by a single piezoelectric crystal, and then the receiver “listens” during a subsequent interval defined by the distance from the transmitter and the sample site. This transducer mode of transmit-wait- receive is repeated at an interval termed the pulse-repetition frequency (PRF). The PRF is therefore depth dependent, being greater for near regions and lower for distant or deeper regions. The position of the sample volume is varied by adjusting the length of the transducer “receive” interval. In contrast to continuous wave Doppler, which is sometimes performed without two-dimensional guidance, pulsed Doppler is always performed with two-dimensional guidance to determine the sample volume position. Because pulsed wave Doppler echo repeatedly samples the returning signal, there is a maximum limit to the frequency shift or velocity that can be measured unambiguously. Thus the maximum detectable frequency shift, or Nyquist limit, is one half the PRF. If the velocity of interest exceeds the Nyquist limit, “wraparound” of the signal occurs, first into the reverse channel and then back to the forward channel; this is known as aliasing. (Barash: Clinical Anesthesia, ed 8, p 743)."
  },
  {
    "id": 3,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "When the pressure gauge on a size “E” compressed-gas cylinder containing N2O begins to fall from its previous constant pressure of 750 psi, approximately how many liters of gas will remain in the cylinder?",
    "options": {
      "A": "200 L",
      "B": "400 L",
      "C": "600 L",
      "D": "Cannot be calculated"
    },
    "correctAnswer": "B",
    "explanation": "The pressure gauge on a size “E” compressed-gas cylinder containing liquid N2O shows 750 psi when it is full and will continue to register 750 psi until approximately three fourths of the N2O has left the cylinder (i.e., liquid N2O has all been vaporized). A full cylinder of N2O contains 1590 L. Therefore when 400 L of gas remain in the cylinder, the pressure within the cylinder will begin to fall (Miller: Basics of Anesthesia, ed 7, p 223; Barash: Clinical Anesthesia, ed 8, p 658)."
  },
  {
    "id": 4,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "What percent desflurane is present in the vaporizing chamber of a desflurane vaporizer (pressurized to 1500 mm Hg and heated to 23° C)?",
    "options": {
      "A": "Nearly 100%",
      "B": "85%",
      "C": "65%",
      "D": "45%"
    },
    "correctAnswer": "D",
    "explanation": "Desflurane is unique among the current commonly used volatile anesthetics because of its high vapor pressure of 664 mm Hg. Because of the high vapor pressure, the vaporizer is pressurized to 1500 mm Hg and electrically heated to 23° C to give more predictable concentrations: 664/1500 = about 44%. If desflurane were used at 1 atmosphere, the concentration would be about 88% [664 mm Hg/760 mm Hg = 88]. (Barash: Clinical Anesthesia, ed 8, p 461)."
  },
  {
    "id": 5,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "If the internal diameter of an intravenous catheter were doubled, flow through the catheter would be",
    "options": {
      "A": "Decreased by a factor of 2",
      "B": "Decreased by a factor of 4",
      "C": "Increased by a factor of 8",
      "D": "Increased by a factor of 16"
    },
    "correctAnswer": "D",
    "explanation": "Factors that influence the rate of laminar flow of a substance through a tube are described by the Hagen-Poiseuille law of friction. The mathematical expression of the Hagen-Poiseuille law of friction is as follows: where is the flow of the substance, r is the radius of the tube, ΔP is the pressure gradient down the tube, L is the length of the tube, and μ is the viscosity of the substance. Note that the rate of laminar flow is proportional to the radius of the tube to the fourth power. If the diameter of an intravenous catheter is doubled, flow would increase by a factor of two raised to the fourth power (i.e., a factor of 16) (Ehrenwerth: Anesthesia Equipment: Principles and Applications, ed 2, pp 377–378; Barash: Clinical Anesthesia, ed 8, pp 365–366)."
  },
  {
    "id": 6,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "A size “E” compressed-gas cylinder completely filled with N2O contains how many liters?",
    "options": {
      "A": "1160 L",
      "B": "1470 L",
      "C": "1590 L",
      "D": "1640 L"
    },
    "correctAnswer": "C",
    "explanation": "The World Health Organization requires that compressed-gas cylinders containing N2O for medical use be painted blue. Size “E” compressed-gas cylinders completely filled with liquid N2O contain approximately 1590 L of gas. See table from Explanation 10 (Barash: Clinical Anesthesia, ed 8, p 658)."
  },
  {
    "id": 7,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "Which of the following methods can be used to detect all leaks in the low-pressure circuit of all contemporary anesthesia machines?",
    "options": {
      "A": "Negative-pressure leak test",
      "B": "Common gas outlet occlusion test",
      "C": "Traditional positive-pressure leak test",
      "D": "None of the above"
    },
    "correctAnswer": "D",
    "explanation": "Anesthesia machines should be checked each day before their use. For most machines, three parts are checked before use: calibration for the oxygen analyzer, the low-pressure circuit leak test, and the circle system. Many consider the low-pressure circuit the area most vulnerable for problems because it is more subject to leaks. Leaks in this part of the machine have been associated with intraoperative awareness (e.g., loose vaporizer filling caps) and hypoxia. To test the low-pressure part of the machine, several tests have been used. For the positive-pressure test, positive pressure is applied to the circuit by depressing the oxygen flush button and occluding the Y-piece of the circle system (which is connected to the endotracheal tube or the anesthesia mask during anesthetic administration) and looking for positive pressure detected by the airway pressure gauge. A leak in the low-pressure part of the machine or the circle system will be demonstrated by a decrease in airway pressure. With many newer machines, a check valve is positioned downstream from the flowmeters (rotameters) and vaporizers but upstream from the oxygen flush valve, which would not permit the positive pressure from the circle system to flow back to the low-pressure circuit. In these machines with the check valve, the positive-pressure reading will fall only with a leak in the circle part, but a leak in the low- pressure circuit of the anesthesia machine will not be detected. In 1993 use of the U.S. Food and Drug Administration universal negative- pressure leak test was encouraged, whereby the machine master switch and the flow valves are turned off, and a suction bulb is collapsed and attached to the common or fresh gas outlet of the machine. If the bulb stays fully collapsed for at least 10 seconds, a leak did not exist (this needs to be repeated for each vaporizer, each one opened at a time). Of course, when the test is completed, the fresh gas hose is reconnected to the circle system. Because machines continue to be developed and to differ from one another, you should be familiar with each manufacturer’s machine preoperative checklist. For example, the negative-pressure leak test is recommended for Ohmeda Unitrol, Ohmeda 30/70, Ohmeda Modulus I, Ohmeda Modulus II and II plus, Ohmeda Excel series, Ohmeda CD, and Datex-Ohmeda Aestiva. The Dräger Narkomed 2A, 2B, 2C, 3, 4, and GS require a positive-pressure leak test. The Fabius GS, Narkomed 6000, and Datex-Ohmeda S5/ADU have self-tests (Miller: Miller’s Anesthesia, ed 8, pp 752–755; Barash: Clinical Anesthesia, ed 8, p 654). (Reprinted with permission from Andrews JJ: Understanding anesthesia machines. In: 1988 Review Course Lectures, Cleveland, International Anesthesia Research Society, 1988, p 78.)",
    "explanationImages": [
      "/images_hall/ch01/q7_exp_0.png",
      "/images_hall/ch01/q7_exp_1.png"
    ]
  },
  {
    "id": 8,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "Which of the following valves prevents transfilling between compressed- gas cylinders?",
    "options": {
      "A": "Fail-safe valve",
      "B": "Check valve",
      "C": "Pressure-sensor shutoff valve",
      "D": "Adjustable pressure-limiting valve"
    },
    "correctAnswer": "B",
    "explanation": "Check valves permit only unidirectional flow of gases. These valves prevent retrograde flow of gases from the anesthesia machine or the transfer of gas from a compressed-gas cylinder at high pressure into a container at a lower pressure. Thus these unidirectional valves will allow an empty compressed-gas cylinder to be exchanged for a full one during operation of the anesthesia machine with minimal loss of gas. The adjustable pressure-limiting valve is a synonym for a pop-off valve and can be adjusted to allow varying degrees of pressure to be transmitted to the patient. A fail-safe valve is a synonym for a pressure-sensor shutoff valve. The purpose of a fail-safe valve is to discontinue the flow of N2O (or proportionally reduce it) if the O2 pressure within the anesthesia machine falls below 30 psi (Miller: Miller’s Anesthesia, ed 8, p 756; Barash: Clinical Anesthesia, ed 8, p 657)."
  },
  {
    "id": 9,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "The driving force of the ventilator (Datex-Ohmeda 7000, 7810, 7100, and 7900) on the anesthesia workstation is accomplished with",
    "options": {
      "A": "Compressed oxygen",
      "B": "Compressed air",
      "C": "Electricity alone",
      "D": "Electricity and compressed oxygen"
    },
    "correctAnswer": "A",
    "explanation": "The control mechanism of standard anesthesia ventilators, such as the Ohmeda 7000, uses compressed oxygen (100%) to compress the ventilator bellows and electric power for the timing circuits. Some ventilators (e.g., North American Dräger AV-E and AV-2 +) use a Venturi device, which mixes oxygen and air. Still other ventilators use sophisticated digital controls that allow advanced ventilation modes. These ventilators use an electric stepper motor attached to a piston (Miller: Miller’s Anesthesia, ed 8, p 757; Ehrenwerth: Anesthesia Equipment: Principles and Applications, ed 2, pp 160–161; Barash: Clinical Anesthesia, ed 8, p 684)."
  },
  {
    "id": 10,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "The pressure gauge on a size “E” compressed-gas cylinder containing O2 reads 1600 psi. How long could O2 be delivered from this cylinder at a rate of 2 L/min?",
    "options": {
      "A": "90 minutes",
      "B": "140 minutes",
      "C": "250 minutes",
      "D": "320 minutes"
    },
    "correctAnswer": "C",
    "explanation": "U.S. manufacturers require that all compressed-gas cylinders containing O2 for medical use be painted green. A compressed-gas cylinder completely filled with O2 has a pressure of approximately 2000 psi and contains approximately 625 L of gas. According to Boyle’s law, the volume of gas remaining in a closed container can be estimated by measuring the pressure within the container. Therefore, when the pressure gauge on a compressed-gas cylinder containing O2 shows a pressure of 1600 psi, the cylinder contains 500 L (1600 psi /2100 psi = 0.77 and 0.77 times 650 = 500) of O2. At a gas flow of 2 L/min, O2 could be delivered from the cylinder for approximately 250 minutes (Ehrenwerth: Anesthesia Equipment: Principles and Applications, ed 2, p 4; Butterworth: Barash: Clinical Anesthesia, ed 8, p 657). ¾ The World Health Organization specifies that cylinders containing oxygen for medical use be painted white, but manufacturers in the United States use green. Likewise, the international color for air is white and black, whereas cylinders in the United States are color-coded yellow. Characteristics of compressed gases stored in “e” size cylinders that may be attached to the anesthesia machine From Miller RD: Basics of Anesthesia, ed 6, Philadelphia, Saunders, 2011, p 201, Table 15-2."
  },
  {
    "id": 11,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "A 25-year-old healthy patient is anesthetized for a femoral hernia repair. Anesthesia is maintained with isoflurane and N2O 50% in O2, and the patient’s lungs are mechanically ventilated. Suddenly, the “low-arterial saturation” warning signal on the pulse oximeter gives an alarm. After the patient is disconnected from the anesthesia machine, he undergoes ventilation with an Ambu bag with 100% O2 without difficulty, and the arterial saturation quickly improves. During inspection of your anesthesia equipment, you notice that the bobbin in the O2 rotameter is not rotating. This most likely indicates",
    "options": {
      "A": "Flow of O2 through the O2 rotameter",
      "B": "No flow of O2 through the O2 rotameter",
      "C": "A leak in the O2 rotameter below the bobbin",
      "D": "A leak in the O2 rotameter above the bobbin"
    },
    "correctAnswer": "B",
    "explanation": "Given the description of the problem, no flow of O2 through the O2 rotameter is the correct choice. In a normally functioning rotameter, gas flows between the rim of the bobbin and the wall of the Thorpe tube, causing the bobbin to rotate. If the bobbin is rotating, you can be certain that gas is flowing through the rotameter and that the bobbin is not stuck (Ehrenwerth: Anesthesia Equipment: Principles and Applications, ed 2, pp 43–45; Barash: Clinical Anesthesia, ed 8, pp 661–662). (Modified from American Society of Anesthesiologists (ASA): Check-out: A Guide for Preoperative Inspection of an Anesthesia Machine, Park Ridge, IS, ASA, 1987. A copy of the full text can be obtained from the ASA at 520 N. Northwest Highway, Park Ridge, IL 60068-2573.)"
  },
  {
    "id": 12,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "The O2 pressure-sensor shutoff valve requires what O2 pressure to remain open and allow N2O to flow into the N2O rotameter?",
    "options": {
      "A": "10 psi",
      "B": "30 psi",
      "C": "50 psi",
      "D": "100 psi"
    },
    "correctAnswer": "B",
    "explanation": "Fail-safe valve is a synonym for pressure-sensor shutoff valve. The purpose of the fail-safe valve is to prevent the delivery of hypoxic gas mixtures from the anesthesia machine to the patient resulting from failure of the O2 supply. Most modern anesthesia machines, however, would not allow a hypoxic mixture, because the knob controlling the N2O is linked to the O2 knob. When the O2 pressure within the anesthesia machine decreases below 30 psi, this valve discontinues the flow of N2O or proportionally decreases the flow of all gases. It is important to realize that this valve will not prevent the delivery of hypoxic gas mixtures or pure N2O when the O2 rotameter is off, because the O2 pressure within the circuits of the anesthesia machine is maintained by an open O2 compressed-gas cylinder or a central supply source. Under these circumstances, an O2 analyzer will be needed to detect the delivery of a hypoxic gas mixture (Ehrenwerth: Anesthesia Equipment: Principles and Applications, ed 2, pp 37–40; Barash: Clinical Anesthesia, ed 8, p 656).",
    "explanationImages": [
      "/images_hall/ch01/q12_exp_0.png"
    ]
  },
  {
    "id": 13,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "A 78-year-old patient is anesthetized for resection of a liver tumor. After induction and tracheal intubation, a 20-gauge arterial line is placed and connected to a transducer that is located 20 cm below the level of the heart. The system is zeroed at the stopcock located at the wrist while the patient’s arm is stretched out on an arm board. How will the arterial line pressure compare with the true blood pressure (BP)?",
    "options": {
      "A": "It will be 20 mm Hg higher",
      "B": "It will be 15 mm Hg higher",
      "C": "It will be the same",
      "D": "It will be 15 mm Hg lower"
    },
    "correctAnswer": "C",
    "explanation": "It is important to zero the electromechanical transducer system with the reference point at the approximate level of the heart. This will eliminate the effect of the fluid column of the transducer system on the arterial BP reading of the system. In this question, the system was zeroed at the stopcock, which was located at the patient’s wrist (approximate level of the ventricle). The BP expressed by the arterial line will therefore be accurate, provided the stopcock remains at the wrist and the transducer is not moved once zeroed. Raising the arm (e.g., 15 cm) decreases the BP at the wrist but increases the pressure on the transducer by the same amount (i.e., the vertical tubing length is now 15 cm H2O higher than before) (Ehrenwerth: Anesthesia Equipment: Principles and Applications, ed 2, pp 276–278; Miller: Miller’s Anesthesia, ed 8, pp 1354–1355; Barash: Clinical Anesthesia, ed 8, p 714)."
  },
  {
    "id": 14,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "The second-stage O2 pressure regulator delivers a constant O2 pressure to the rotameters of",
    "options": {
      "A": "4 psi",
      "B": "8 psi",
      "C": "16 psi",
      "D": "32 psi"
    },
    "correctAnswer": "C",
    "explanation": "O2 and N2O enter the anesthesia machine from a central supply source or compressed-gas cylinders at pressures as high as 2200 psi (O2) and 750 psi (N2O). First-stage pressure regulators reduce these pressures to approximately 45 psi. Before entering the rotameters, second-stage O2 pressure regulators further reduce the pressure to approximately 14 to 16 psi. (Miller: Miller’s Anesthesia, ed 8, p 761; Barash: Clinical Anesthesia, ed 8, pp 660–661)."
  },
  {
    "id": 15,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "You are called to assist a colleague who notes a large gas leak in the anesthesia circuit. Very high oxygen flows (15 L/minute) are being used, but the ventilator bellows do not fill during the ventilator cycle. You then attempt to manually ventilate the patient, but the reservoir bag does not fill. You then disconnect the patient from the anesthesia machine and attempt to ventilate the patient with an anesthesia bag (connected to separate oxygen source), but high oxygen flows are still required to achieve even a low positive pressure for ventilation. The most appropriate step would be",
    "options": {
      "A": "Deflate cuff and reinflate until there is a good seal",
      "B": "Pull out nasogastric tube",
      "C": "Reintubate the patient",
      "D": "Reconnect the endotracheal tube to the anesthesia machine circuit with 15 L/minute flow O2 plus 15 L/flow air"
    },
    "correctAnswer": "B",
    "explanation": "This patient has a huge air leak. Before switching to an anesthesia bag connected to a separate oxygen source, possible reasons to consider include disconnected hoses (inspiratory limb or expiratory limb) from the circle system, disconnection of the Y piece from the anesthesia circuit to the endotracheal tube (ETT) tube, failure to close the CO2 absorber or a crack in the CO2 absorber system, check valve or anesthesia pressure limiting valve (pop-off valve) malfunction, flowmeter or vaporizer leak, disconnection in the oxygen analyzer, disconnection from the fresh gas flow to the circle system, and pipeline pressure below 50 psi causing a failure in the oxygen supply pressure to give oxygen flow. Most of these should have been evaluated in the preoperative check of the machine before inducing anesthesia. When the same problem with ventilation occurs with an anesthesia bag connected to a separate oxygen source, the anesthesia machine is not the problem. Rarely would the leak from an underinflated ETT or an esophageal intubation cause that much of an air leak; however, when an NG tube inadvertently enters the trachea instead of the GI tract and the suction connected to the NG tube is turned on, you quickly deflate the lung and will not be able to adequately ventilate the patient. Resolution of the air leak will occur when NG suction is turned off or when the NG tube is removed from the trachea. (Miller: Miller’s Anesthesia, ed 8, pp 752– 817)."
  },
  {
    "id": 16,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "A sevoflurane vaporizer will deliver an accurate concentration of an unknown volatile anesthetic if the latter shares which property with sevoflurane?",
    "options": {
      "A": "Molecular weight",
      "B": "Oil/gas partition coefficient",
      "C": "Vapor pressure",
      "D": "Blood/gas partition coefficient"
    },
    "correctAnswer": "C",
    "explanation": "Agent-specific vaporizers, such as the Sevotec (sevoflurane) vaporizer, are designed for each volatile anesthetic. However, volatile anesthetics with identical saturated vapor pressures can be used interchangeably, with accurate delivery of the volatile anesthetic. Although halothane is no longer used in the United States, that vaporizer, for example, may still be used in developing countries for administration of isoflurane (Ehrenwerth: Anesthesia Equipment: Principles and Applications, ed 2, pp 72–73; Barash: Clinical Anesthesia, ed 8, pp 668-669, 672). Vapor pressures Agent Vapor Pressure mm Hg at 20° C Halothane 243 Sevoflurane 160 Isoflurane 240 Desflurane 669"
  },
  {
    "id": 17,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "A 58-year-old patient has severe shortness of breath and “wheezing.” On examination, the patient is found to have inspiratory and expiratory stridor. Further evaluation reveals marked extrinsic compression of the midtrachea by a tumor. The type of airflow at the point of obstruction within the trachea is",
    "options": {
      "A": "Laminar flow",
      "B": "Turbulent flow",
      "C": "Undulant flow",
      "D": "Stenotic flow"
    },
    "correctAnswer": "B",
    "explanation": "Turbulent flow occurs when gas flows through a region of severe constriction such as that described in this question. Laminar flow occurs when gas flows down parallel-sided tubes at a rate less than critical velocity. When the gas flow exceeds the critical velocity, it becomes turbulent. (Barash: Clinical Anesthesia, ed 8, p 366)."
  },
  {
    "id": 18,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "Concerning the patient in Question 17, administration of 70% helium in O2 instead of 100% O2 will decrease the resistance to airflow through the stenotic region within the trachea because",
    "options": {
      "A": "Helium decreases the viscosity of the gas mixture",
      "B": "Helium decreases the friction coefficient of the gas mixture",
      "C": "Helium decreases the density of the gas mixture",
      "D": "Helium increases the Reynolds number of the gas mixture"
    },
    "correctAnswer": "C",
    "explanation": "During turbulent flow, the resistance to gas flow is directly proportional to the density of the gas mixture. Substituting helium for oxygen will decrease the density of the gas mixture, thereby decreasing the resistance to gas flow (as much as threefold) through the region of constriction (Ehrenwerth: Anesthesia Equipment: Principles and Applications, ed 2, pp 230–234; Barash: Clinical Anesthesia, ed 8, pp 365–366)."
  },
  {
    "id": 19,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "A 56-year-old patient is brought to the operating room (OR) for elective replacement of a stenotic aortic valve. An awake 20-gauge arterial catheter is placed into the right radial artery and is then connected to a transducer located at the same level as the patient’s left ventricle. The entire system is zeroed at the transducer. Several seconds later, the patient raises both arms into the air until his right wrist is 20 cm above his heart. As he is doing this the BP on the monitor reads 120/80 mm Hg. What would this patient’s true BP be at this time?",
    "options": {
      "A": "140/100 mm Hg",
      "B": "135/95 mm Hg",
      "C": "120/80 mm Hg",
      "D": "105/65 mm Hg"
    },
    "correctAnswer": "C",
    "explanation": "Modern electronic BP monitors are designed to interface with electromechanical transducer systems. These systems do not require extensive technical skill on the part of the anesthesia provider for accurate use. A static zeroing of the system is built into most modern electronic monitors. Thus after the zeroing procedure is accomplished, the system is ready for operation. The system should be zeroed with the reference point of the transducer at the approximate level of the aortic root, eliminating the effect of the fluid column of the system on arterial BP readings (Ehrenwerth: Anesthesia Equipment: Principles and Applications, ed 2, pp 276–278; Barash: Clinical Anesthesia, ed 8, pp 713–714)."
  },
  {
    "id": 20,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "An admixture of room air in the waste gas disposal system during an appendectomy in a paralyzed, mechanically ventilated patient under general volatile anesthesia can best be explained by which mechanism of entry?",
    "options": {
      "A": "Positive-pressure relief valve",
      "B": "Negative-pressure relief valve",
      "C": "Soda lime canister",
      "D": "Ventilator bellows"
    },
    "correctAnswer": "B",
    "explanation": "Waste gas disposal systems, also called scavenging systems, are designed to decrease pollution in the OR by anesthetic gases. These scavenging systems can be passive (waste gases flow from the anesthesia machine to a ventilation system on their own) or active (anesthesia machine is connected to a vacuum system, then to the ventilation system). Positive-pressure relief valves open if there is an obstruction between the anesthesia machine and the disposal system, which would then leak the gas into the OR. A leak in the soda lime canisters would also vent to the OR. Given that most ventilator bellows are powered by oxygen, a leak in the bellows will not add air to the evacuation system. The negative-pressure relief valve is used in active systems and will entrap room air if the pressure in the system is less than −0.5 cm H2O. (Ehrenwerth: Anesthesia Equipment: Principles and Applications, ed 2, pp 101–103; Miller: Miller’s Anesthesia, ed 8, p 802; Barash: Clinical Anesthesia, ed 8, pp 693–694)."
  },
  {
    "id": 21,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "Automated noninvasive blood pressure (ANIBP) devices calculate which of the following using proprietary algorithms?",
    "options": {
      "A": "Systolic BP",
      "B": "Diastolic BP",
      "C": "Mean arterial BP",
      "D": "Both systolic and diastolic BPs"
    },
    "correctAnswer": "D",
    "explanation": "The standard method for BP measurements introduced by NS Korotkoff in 1905 was by auscultation, which measures the systolic (first sounds heard when the BP cuff is deflated) and diastolic BP (significantly muffled or disappearance of sounds with further deflation of the cuff), but not the mean arterial blood pressure (MAP). MAP is calculated using the following formula: The reason the diastolic BP is multiplied by 2 is that the diastolic portion of the cardiac cycle is usually twice as long as the systolic portion of the cardiac cycle. ANIBP measurements are based on oscillometry, with small changes in cuff pressure during cuff deflation used to estimate mean arterial BP. Both systolic and diastolic pressures are calculated according to proprietary algorithms by each manufacturer and are therefore less reliable than the values for MAP. Typically systolic BP corresponds to a pressure where escalating pulsations reach 25% to 50% of maximum. Diastolic pressure is the most unreliable calculation and is derived when the pulse amplitude is a small fraction of the peak amplitude. (Miller: Anesthesia, ed 8, pp 1347–1348)."
  },
  {
    "id": 22,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "Currently, the commonly used vaporizers (e.g., GE-Datex-Ohmeda Tec 4, Tec 5, Tec 7; Dräger Vapor 19.n and 2000 series) are described as having all of the following features EXCEPT",
    "options": {
      "A": "Agent specificity",
      "B": "Variable bypass",
      "C": "Bubble through",
      "D": "Temperature compensated"
    },
    "correctAnswer": "C",
    "explanation": "Because volatile anesthetics have different vapor pressures, the vaporizers are agent specific. Vaporizers are described as having variable bypass, which means that some of the total fresh gas flow (usually less than 20%) is diverted into the vaporizing chamber, and the rest bypasses the vaporizer. Tipping the vaporizers (which should not occur) may cause some of the liquid to enter the bypass circuit, leading to a high concentration of anesthetic being delivered to the patient. The gas that enters the vaporizer flows over (does not bubble through) the volatile anesthetic. The older (now obsolete) Copper Kettle and Vernitrol vaporizers were not agent specific, and oxygen (with a separate flowmeter) was bubbled through the volatile anesthetic; then, the combination of oxygen with volatile gas was diluted with the fresh gas flow (oxygen, air, N2O) and administered to the patient. Because vaporization changes with temperature, modern vaporizers are designed to maintain a constant concentration over clinically used temperatures (20° C to 35° C) (Barash: Clinical Anesthesia, ed 8, pp 668–678)."
  },
  {
    "id": 23,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "For any given concentration of volatile anesthetic, the splitting ratio is dependent on which of the following characteristics of that volatile anesthetic?",
    "options": {
      "A": "Vapor pressure",
      "B": "Molecular weight",
      "C": "Specific heat",
      "D": "Minimum alveolar concentration (MAC) at 1 atmosphere"
    },
    "correctAnswer": "A",
    "explanation": "Vaporizers can be categorized into variable-bypass and measured- flow vaporizers. Measured-flow vaporizers (nonconcentration calibrated vaporizers) include the obsolete Copper Kettle and Vernitrol vaporizers. With measured-flow vaporizers, the flow of oxygen is selected on a separate flowmeter to pass into the vaporizing chamber, from which the anesthetic vapor emerges at its saturated vapor pressure. By contrast, in variable-bypass vaporizers, the total gas flow is split between a variable bypass and the vaporizer chamber containing the anesthetic agent. The ratio of these two flows is called the splitting ratio. The splitting ratio depends on the anesthetic agent, the temperature, the chosen vapor concentration set to be delivered to the patient, and the saturated vapor pressure of the anesthetic. (Barash: Clinical Anesthesia, ed 8, pp 668–678)."
  },
  {
    "id": 24,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "On Monday morning the absorbent granules in your anesthesia machine, which was not used in the last 48 hours, are violet. In addition to rebreathing CO2 when exhausted, this form of absorbent also carries the risk of",
    "options": {
      "A": "Channeling",
      "B": "Fire",
      "C": "Compound A formation",
      "D": "Carbon monoxide production"
    },
    "correctAnswer": "A",
    "explanation": "Most anesthesia machines have a circle absorption system, which includes a canister of carbon dioxide (CO2) absorbent that can effectively absorb exhaled CO2. This allows the anesthesia machines to use lower fresh gas flows, decreasing the amount of expensive inhaled anesthetics used. CO2 absorbents use the principle of neutralizing an acid (CO2 + H2O produces carbonic acid = H2CO3) with a base (mostly calcium hydroxide = Ca(OH)2). Some natural hydration of the granules is essential to allow the chemical reactions to occur. The end product of the reaction is calcium carbonate, water, and heat. H2CO3 + Ca(OH)2 produces calcium carbonate (CaCO3) + H2O + Heat Soda Lime contains: 76% to 81% Ca(OH)2, 14% to 19% H2O, 4% NaOH, and 1% KOH. NaOH and KOH serve as an effective catalyst for the chemical reactions to occur. Unfortunately, these catalysts degrade sevoflurane to the nephrotoxic called compound A, and degrade desflurane as well as isoflurane to produce clinically significant amounts of carbon monoxide (CO) when the granules are desiccated. The catalyst used in Amsorb Plus and Litholyme does not degrade sevoflurane to compound A and does not produce CO from volatile anesthetics when the granules are desiccated. Amsorb Plus contains; > 80% Ca(OH)2, 13% to 18% H2O, and 4% CaCl2 Litholyme contains; > 75% Ca(OH)2, 12% to 19% H2O, and 3% LiCl The indicator dye used in soda lime that changes from off-white to violet can change back to the original white color when the granules dry. In contrast, the indicator dye for Amsorb Plus and Litholyme changes from off-white to violet but does not change back to off-white. The absorptive capacity of Litholyme is similar to soda lime and slightly better than Amsorb Plus. In addition, there is less heat produced with the chemical reaction with Amsorb Plus and Litholyme compared with soda lime. Channeling can occur with any absorbent type, and frank fire has only been reported with Baralyme, which is no longer available (Miller: Basics of Anesthesia, ed 7, pp 233–236; Miller: Miller’s Anesthesia, ed 8, pp 660–663, 787)."
  },
  {
    "id": 25,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "During the pre-anesthesia checkout (PAC) of the anesthesia delivery system, the mounted oxygen E cylinder is shown to have a pressure of 1200 psi. Before proceeding with the next case, the most appropriate action would be:",
    "options": {
      "A": "Leave cylinder valve open and proceed with case",
      "B": "Close cylinder valve and proceed with case",
      "C": "Replace the cylinder, open valve to check pressure, then close and proceed with case",
      "D": "Replace the cylinder, open valve to check pressure, and proceed with case"
    },
    "correctAnswer": "B",
    "explanation": "Recommendations for Pre-Anesthesia Checkout (PAC) Procedures (2008) made by the subcommittee of the American Society of Anesthesiologists (ASA) Committee on Equipment and Facilities clearly state, “the anesthesia care provider is ultimately responsible for proper function of all equipment used to provide anesthesia care.” Most anesthesia delivery systems have two sources of oxygen, a pipeline supply of oxygen (with a pressure > 50 psi) and a backup oxygen cylinder in case there is a problem with the anesthesia pipeline supply. Item #5 of the ASA PAC refers to an adequate amount of pressure on the spare oxygen cylinder mounted on the anesthesia machine. Because of the increasing complexity of anesthesia delivery systems, the operating manuals should be understood. In general, the oxygen cylinder is used only when there is a failure of the pipeline oxygen supply. If there is no pipeline supply, then the oxygen cylinder must supply oxygen for the entire anesthetic. Although the ASA’s 2008 checkout guidelines do not specify an exact pressure, manufacturer’s manuals often recommend an oxygen cylinder pressure of > 1000 psi. After the tank is checked and found to have an adequate oxygen pressure, the tank’s valve should be closed. The reason for closing the valve is to allow the activation of the machine’s oxygen pressure alert when the pipeline pressure drops below a specific pressure. If activated, the provider becomes aware of the failure in pipeline supply of oxygen and then opens the valve to use the oxygen cylinder, knowing that the backup oxygen source is now being used. If the valve is left open and the pipeline supply fails, then the oxygen pressure alert will become activated only when the oxygen tank is also empty (American Society of Anesthesiology – Recommendations for Pre Anesthesia Checkout Procedures (2008) in asahq.org; Miller: Miller’s Anesthesia, ed 8, pp 804–817)."
  },
  {
    "id": 26,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "ECG monitors utilize high- and low-frequency filters to reduce noise (artifact). Which of the following are reduced with low-frequency filtering?",
    "options": {
      "A": "Muscle fasciculation",
      "B": "Respirations",
      "C": "Tremor",
      "D": "Electromagnetic interference from other devices"
    },
    "correctAnswer": "B",
    "explanation": "To improve signal quality, electrocardiographic monitors use filters to narrow the signal bandwidth to reduce environmental artifacts. These filters can be either low frequency (for distortion by patient movement such as those produced by breathing) or high frequency (for distortion from muscle fasciculations, tremors, or electrical equipment). Because the frequency filters can distort the ECG and produce false positive recordings (e.g., the ST segment or T wave changes), manufacturers have several filter modes, including a diagnostic mode that removes the filters. So if the ECG monitor looks different from the preoperative ECG, it may be best to turn off the filters and use the diagnostic mode (Miller: Basics of Anesthesia, 7th ed, pp 345–346; Miller: Miller’s Anesthesia, ed 8, pp 1434–2435)."
  },
  {
    "id": 27,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "If the anesthesia machine is discovered Monday morning to have run with 5 L/min of oxygen all weekend long, the most reasonable course of action before administering the next anesthetic would be to",
    "options": {
      "A": "Administer 100% oxygen for the first hour of the next case",
      "B": "Place humidifier in line with the expiratory limb",
      "C": "Avoid use of sevoflurane",
      "D": "Change the CO2 absorbent"
    },
    "correctAnswer": "D",
    "explanation": "CO can be generated when volatile anesthetics are exposed to CO2 absorbers that contain NaOH or KOH (e.g., soda lime) and have sometimes produced carboxyhemoglobin levels of 35%. Factors that are involved in the production of CO and formation of carboxyhemoglobin include (1) the specific volatile anesthetic used (desflurane ≥ enflurane > isoflurane ≫ sevoflurane = halothane), (2) high concentrations of volatile anesthetic (more CO is generated at higher volatile concentrations), (3) high temperatures (more CO is generated at higher temperatures), (4) low fresh gas flows, and especially (5) dry soda lime (dry granules produce more CO than do hydrated granules). Soda lime contains 15% water by weight, and only when it gets dehydrated to below 1.4% will appreciable amounts of CO be formed. Many of the reported cases of patients experiencing elevated carboxyhemoglobin levels occurred on Monday mornings, when the fresh gas flow on the anesthesia circuit was not turned off and high anesthetic fresh gas flows (> 5 L/min) for prolonged periods of time (e.g., > 48 hours) occurred. Because of some resistance of the inspiratory valve, retrograde flow through the CO2 absorber (which hastens the drying of the soda lime) will develop, especially if the breathing bag is absent, the Y-piece of the circuit is occluded, and the adjustable pressure-limiting valve is open. Whenever you are uncertain as to the dryness of the CO2 absorber, especially when the fresh gas flow was not turned off the anesthesia machine for an extended or indeterminate period of time, the CO2 absorber should be changed. This CO production occurs with soda lime and occurred more so with Baralyme (which is no longer available), but it does not occur with Amsorb Plus or Drägersorb Free (which contains calcium chloride and calcium hydroxide and no NaOH or KOH) (Miller: Miller’s Anesthesia, ed 8, pp 789–792; Barash: Clinical Anesthesia, ed 8, pp 681–683)."
  },
  {
    "id": 28,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "According to National Institute for Occupational Safety and Health (NIOSH) regulations, the highest concentration of volatile anesthetic contamination allowed in the OR atmosphere when administered in conjunction with N2O is",
    "options": {
      "A": "0.5 ppm",
      "B": "2 ppm",
      "C": "5 ppm",
      "D": "25 ppm"
    },
    "correctAnswer": "A",
    "explanation": "NIOSH mandates that the highest trace concentration of volatile anesthetic contamination of the OR atmosphere when administered in conjunction with N2O is 0.5 ppm. (Barash: Clinical Anesthesia, ed 8, p 691)."
  },
  {
    "id": 29,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "The device on anesthesia machines that most reliably detects delivery of hypoxic gas mixtures is the",
    "options": {
      "A": "Fail-safe valve",
      "B": "O2 analyzer",
      "C": "Second-stage O2 pressure regulator",
      "D": "Proportion-limiting control system"
    },
    "correctAnswer": "B",
    "explanation": "The O2 analyzer is the last line of defense against the inadvertent delivery of hypoxic gas mixtures. It should be located in the inspiratory (not expiratory) limb of the patient’s breathing circuit to provide maximum safety. Because the O2 concentration in the fresh-gas supply line may be different from that of the patient’s breathing circuit, the O2 analyzer should not be located in the fresh-gas supply line (Ehrenwerth: Anesthesia Equipment: Principles and Applications, ed 2, pp 209–210; Barash: Clinical Anesthesia, ed 8, pp 652–653)."
  },
  {
    "id": 30,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "A ventilator pressure-relief valve stuck in the closed position can result in",
    "options": {
      "A": "Barotrauma",
      "B": "Hypoventilation",
      "C": "Hyperventilation",
      "D": "Low breathing circuit pressure"
    },
    "correctAnswer": "A",
    "explanation": "The ventilator pressure-relief valve (also called the spill valve) is pressure controlled via pilot tubing that communicates with the ventilator bellows chamber. As pressure within the bellows chamber increases during the inspiratory phase of the ventilator cycle, the pressure is transmitted via the pilot tubing to close the pressure-relief valve, thus making the patient’s breathing circuit “gas tight.” This valve should open during the expiratory phase of the ventilator cycle to allow the release of excess gas from the patient’s breathing circuit into the waste-gas scavenging circuit after the bellows has fully expanded. If the ventilator pressure-relief valve were to stick in the closed position, there would be a rapid buildup of pressure within the circle system that would be readily transmitted to the patient. Barotrauma to the patient’s lungs would result if this situation were to continue unrecognized (Barash: Clinical Anesthesia, ed 8, p 687). (From Andrews JJ: Understanding your anesthesia machine and ventilator. In: 1989 Review Course Lectures, Cleveland, International Anesthesia Research Society, 1989, p 59.)",
    "explanationImages": [
      "/images_hall/ch01/q30_exp_1.png"
    ]
  },
  {
    "id": 31,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "A mixture of 1% isoflurane, 70% N2O, and 30% O2 is administered to a patient for 30 minutes. The expired isoflurane concentration measured is 1%. N2O is shut off, and a mixture of 30% O2 and 70% N2 with 1% isoflurane is administered. The expired isoflurane concentration measured 1 minute after the start of this new mixture is 2.3%. The best explanation for this observation is",
    "options": {
      "A": "Intermittent back pressure (pumping effect)",
      "B": "Diffusion hypoxia",
      "C": "Concentration effect",
      "D": "Effect of N2O solubility in isoflurane"
    },
    "correctAnswer": "D",
    "explanation": "Vaporizer output can be affected by the composition of the carrier gas used to vaporize the volatile agent in the vaporizing chamber, especially when N2O is either initiated or discontinued. This observation can be explained by the solubility of N2O in the volatile agent. When N2O and oxygen enter the vaporizing chamber, a portion of the N2O dissolves in the liquid agent. Thus the vaporizer output transiently decreases. Conversely, when N2O is withdrawn as part of the carrier gas, the N2O dissolved in the volatile agent comes out of solution, thereby transiently increasing the vaporizer output. (Miller: Miller’s Anesthesia, ed 8, pp 769–771)."
  },
  {
    "id": 32,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "The capnogram waveform above represents which of the following situations? (From van Genderingen HR et al: Computer-assisted capnogram analysis, J Clin Monit 3:194–200, 1987, with kind permission of Kluwer Academic Publishers.)",
    "options": {
      "A": "Kinked endotracheal tube",
      "B": "Bronchospasm",
      "C": "Incompetent inspiratory valve",
      "D": "Incompetent expiratory valve"
    },
    "correctAnswer": "D",
    "explanation": "The capnogram can provide a variety of information, such as verification of exhaled CO2 after tracheal intubation, estimation of the differences in Paco2 and Petco2, abnormalities of ventilation, and hypercapnia or hypocapnia. The four phases of the capnogram are inspiratory baseline, expiratory upstroke, expiratory plateau, and inspiratory downstroke. The shape of the capnogram can be used to recognize and diagnose a variety of potentially adverse circumstances. Under normal conditions, the inspiratory baseline should be 0, indicating that there is no rebreathing of CO2 with a normal functioning circle breathing system. If the inspiratory baseline is elevated above 0, there is rebreathing of CO2. If this occurs, the differential diagnosis should include an incompetent expiratory valve, exhausted CO2 absorbent, or gas channeling through the CO2 absorbent. However, the inspiratory baseline may be elevated when the inspiratory valve is incompetent (e.g., there may be a slanted inspiratory downstroke). The expiratory upstroke occurs when the fresh gas from the anatomic dead space is quickly replaced by CO2-rich alveolar gas. Under normal conditions, the upstroke should be steep; however, it may become slanted during partial airway obstruction, if a sidestream analyzer is sampling gas too slowly, or if the response time of the capnograph is too slow for the patient’s respiratory rate. Partial obstruction may be the result of an obstruction in the breathing system (e.g., by a kinked endotracheal tube) or in the patient’s airway (e.g., chronic obstructive pulmonary disease [COPD] or acute bronchospasm). The expiratory plateau is normally characterized by a slow but shallow progressive increase in CO2 concentration. This occurs because of imperfect matching of ventilation and perfusion in all lung units. Partial obstruction of gas flow either in the breathing system or in the patient’s airways may cause a prolonged increase in the slope of the expiratory plateau, which may continue rising until the next inspiratory downstroke begins. The inspiratory downstroke is caused by the rapid influx of fresh gas, which washes the CO2 away from the CO2 sensing or sampling site. Under normal conditions, the inspiratory downstroke is very steep. The causes of a slanted or blunted inspiratory downstroke include an incompetent inspiratory valve, slow mechanical inspiration, slow gas sampling, and partial CO2 rebreathing (Ehrenwerth: Anesthesia Equipment: Principles and Applications, ed 2, p 248; Barash: Clinical Anesthesia, ed 8, pp 711–712; Miller: Basics of Anesthesia, ed 7, 342–347).",
    "image": "/images_hall/ch01/q32_stem.png",
    "explanationImages": [
      "/images_hall/ch01/q32_exp_0.png"
    ]
  },
  {
    "id": 33,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "Select the FALSE statement.",
    "options": {
      "A": "If a Magill forceps is used for a nasotracheal intubation, the right nares is preferable for insertion of the nasotracheal tube",
      "B": "Extension of the neck can convert an endotracheal intubation to an endobronchial intubation",
      "C": "Bucking signifies the return of the coughing reflex",
      "D": "Postintubation pharyngitis is more likely to occur in female patients"
    },
    "correctAnswer": "B",
    "explanation": "The complications of tracheal intubation can be divided into those associated with direct laryngoscopy and intubation of the trachea, tracheal tube placement, and extubation of the trachea. The most frequent complication associated with direct laryngoscopy and tracheal intubation is dental trauma. If a tooth is dislodged and not found, radiographs of the chest and abdomen should be taken to determine whether the tooth has passed through the glottic opening into the lungs. Should dental trauma occur, immediate consultation with a dentist is indicated. Other complications of direct laryngoscopy and tracheal intubation include hypertension, tachycardia, cardiac dysrhythmias, and aspiration of gastric contents. The most common complication that occurs while the endotracheal tube is in place is inadvertent endobronchial intubation. Flexion, not extension, of the neck or a change from the supine position to the head-down position can shift the carina upward, which may convert a midtracheal tube placement into a bronchial intubation. Extension of the neck can cause cephalad displacement of the tube into the pharynx. Lateral rotation of the head can displace the distal end of the endotracheal tube approximately 0.7 cm away from the carina. The right naris is preferable because the laryngoscope is in the left hand. The complications associated with extubation of the trachea can be immediate or delayed; of the immediate complications associated with extubation of the trachea, the two most serious are laryngospasm and aspiration of gastric contents. Laryngospasm is most likely to occur in patients who are lightly anesthetized at the time of extubation. If laryngospasm occurs, positive- pressure bag and mask ventilation with 100% O2 and forward displacement of the mandible may be sufficient treatment. However, if laryngospasm persists, succinylcholine should be administered intravenously or intramuscularly. Pharyngitis is another frequent complication after extubation of the trachea. It occurs most commonly in female individuals, presumably because of the thinner mucosal covering over the posterior vocal cords in comparison with male individuals. This complication usually does not require treatment and spontaneously resolves in 48 to 72 hours. Delayed complications associated with extubation of the trachea include laryngeal ulcerations, tracheitis, tracheal stenosis, vocal cord paralysis, and arytenoid cartilage dislocation. (Miller: Miller’s Anesthesia, ed 8, p 1655)."
  },
  {
    "id": 34,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "Gas from an N2O compressed-gas cylinder enters the anesthesia machine through a pressure regulator that reduces the pressure to",
    "options": {
      "A": "60 psi",
      "B": "45 psi",
      "C": "30 psi",
      "D": "15 psi"
    },
    "correctAnswer": "B",
    "explanation": "Gas leaving a compressed-gas cylinder is directed through a pressure-reducing valve, which lowers the pressure within the metal tubing of the anesthesia machine to 45 to 55 psi (Ehrenwerth: Anesthesia Equipment: Principles and Applications, ed 2, pp 27–34; Miller: Miller’s Anesthesia, ed 8, p 756; Barash: Clinical Anesthesia, ed 8, p 657)."
  },
  {
    "id": 35,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "Eye protection for OR staff is needed when laser surgery is performed. Clear wraparound goggles or glasses are adequate with which kind of laser?",
    "options": {
      "A": "Argon laser",
      "B": "Nd:YAG (neodymium:yttrium-aluminum-garnet) laser",
      "C": "CO2 laser",
      "D": "None of the above"
    },
    "correctAnswer": "C",
    "explanation": "CO2 lasers can cause serious corneal injury, whereas argon, Nd:YAG, ruby, or potassium titanyl phosphate lasers can burn the retina. Use of the incorrect filter provides no protection! Clear glass or plastic lenses are opaque for CO2 laser light and are adequate protection for this beam (contact lenses are not adequate protection). For argon or krypton laser light, amber-orange filters are used. For Nd:YAG laser light, special green-tinted filters are used. For potassium titanyl phosphate:Nd:YAG laser light, red filters are used. (Miller: Miller’s Anesthesia, ed 8, pp 2604–2605)."
  },
  {
    "id": 36,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "Which of the following systems prevents attachment of gas- administering equipment to the wrong type of gas line?",
    "options": {
      "A": "Pin index safety system",
      "B": "Diameter index safety system",
      "C": "Fail-safe system",
      "D": "Proportion-limiting control system"
    },
    "correctAnswer": "B",
    "explanation": "The diameter index safety system prevents incorrect connections of medical gas lines. This system consists of two concentric and specific bores in the body of one connection, which correspond to two concentric and specific shoulders on the nipple of the other connection (Ehrenwerth: Anesthesia Equipment: Principles and Applications, ed 2, pp 20, 27–28; Barash: Clinical Anesthesia, ed 8, p 657)."
  },
  {
    "id": 37,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "A 59-year-old pacemaker-dependent patient comes to surgery with the pacemaker programmed in the DDD mode. Extracorporeal shock wave lithotripsy (ESWL) is scheduled for fragmentation of several 3- to 5-mm kidney stones. What preparation is needed before undertaking ESWL in this setting to avoid inappropriate firing of the lithotripter?",
    "options": {
      "A": "Program pacemaker to DVI",
      "B": "Program pacemaker to VVI",
      "C": "Program pacemaker to DOO",
      "D": "Proceed with the case"
    },
    "correctAnswer": "B",
    "explanation": "Lithotripsy is a noninvasive treatment using ultrasonic shock waves to break apart kidney stones. There are three main components of lithotripters; an energy source, a system to focus the shock wave, and fluoroscopy or ultrasound to visualize and localize the stone in focus. Because most lithotripters are triggered by the R wave of the ECG and can be fired inappropriately by the atrial-pacing artifact (with the potential of producing serious cardiac dysrhythmias), pacemakers should be changed to a mode that does not pace the atrium. Thus the lithotripter has no possibility of misinterpreting the atrial spike as an R wave. In addition, the shock waves can interfere with pacemaker function, and some devices can be damaged, so an alternative means of pacing should be available. After the lithotripter procedure, the pacemaker should be reactivated to the patient’s original mode (in this case DDD) and checked for proper functioning. If the patient has an automatic implanted cardioverter-defibrillator (AICD), the AICD needs to be turned off during the treatment and reactivated after the treatment. (Miller: Miller’s Anesthesia, ed 8, pp 1474, 2235–2237)."
  },
  {
    "id": 38,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "The dial of an isoflurane-specific, variable bypass, temperature- compensated, flowover, out-of-circuit vaporizer (i.e., modern vaporizer) is set on 2%, and the infrared spectrometer measures 2% isoflurane vapor from the common gas outlet. The flowmeter is set at a rate of 700 mL/min during this measurement. The output measurements are repeated with the flowmeter set at 100 mL/min and 15 L/min (vapor dial still set on 2%). How will these two measurements compare with the first measurement taken?",
    "options": {
      "A": "Output will be less than 2% in both cases",
      "B": "Output will be greater than 2% in both cases",
      "C": "Output will be 2% at 100 mL/min O2 flow and less than 2% at 15 L/min flow",
      "D": "Output will be less than 2% at 100 mL/min and 2% at 15 L/min"
    },
    "correctAnswer": "A",
    "explanation": "The output of the vaporizer will be lower at flow rates less than 250 mL/min because there is insufficient pressure to advance the molecules of the volatile agent upward. At extremely high carrier gas flow rates (> 15 L/min), there is insufficient mixing in the vaporizing chamber. (Miller: Miller’s Anesthesia, ed 8, pp 777-778; Barash: Clinical Anesthesia, ed 8, p 671)."
  },
  {
    "id": 39,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "Which of the following would result in the greatest decrease in the arterial hemoglobin saturation (Spo2) value measured by the dual- wavelength pulse oximeter?",
    "options": {
      "A": "Intravenous injection of indigo carmine",
      "B": "Intravenous injection of indocyanine green",
      "C": "Intravenous injection of methylene blue",
      "D": "Elevation of bilirubin"
    },
    "correctAnswer": "C",
    "explanation": "Pulse oximeters estimate arterial hemoglobin saturation (Sao2) by measuring the amount of light transmitted through a pulsatile vascular tissue bed. Pulse oximeters measure the alternating current component of light absorbance at each of two wavelengths (660 and 940 nm) and then divide this measurement by the corresponding direct current component. Then the ratio (R) of the two absorbance measurements is determined by the following equation: Using an empiric calibration curve that relates arterial hemoglobin saturation to R, the actual arterial hemoglobin saturation is calculated. Based on the physical principles outlined above, the sources of error in Spo2 readings can be easily predicted. Pulse oximeters can function accurately when only two hemoglobin species, oxyhemoglobin and reduced hemoglobin, are present. If any light-absorbing species other than oxyhemoglobin and reduced hemoglobin are present, the pulse oximeter measurements will be inaccurate. Fetal hemoglobin has a minimal effect on the accuracy of pulse oximetry because the extinction coefficients for fetal hemoglobin at the two wavelengths used by pulse oximetry are very similar to the corresponding values for adult hemoglobin. In addition to abnormal hemoglobins, any substance present in the blood that absorbs light at either 660 or 940 nm, such as intravenous dyes used for diagnostic purposes, will affect the value of R, making accurate measurements of the pulse oximeter impossible. These dyes include methylene blue and indigo carmine. Methylene blue has the greatest effect on Sao2 measurements because the extinction coefficient is so similar to that of oxyhemoglobin. (Ehrenwerth: Anesthesia Equipment: Principles and Applications, ed 2, pp 261–262; Miller: Miller’s Anesthesia, ed 8, pp 1547–1548).",
    "explanationImages": [
      "/images_hall/ch01/q39_exp_0.png"
    ]
  },
  {
    "id": 40,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "A 45-year-old patient recovering in the ICU after a motor vehicle accident is continuously being assessed with transcutaneous O2 and CO2 monitoring. Compared with conventional arterial blood gas values, those for transcutaneous oxygen (Ptco2) and transcutaneous carbon dioxide (Ptcco2) would likely be",
    "options": {
      "A": "Higher (both)",
      "B": "Ptco2 lower, Ptcco2 higher",
      "C": "Ptco2 higher, Ptcco2 lower",
      "D": "Lower (both)"
    },
    "correctAnswer": "B",
    "explanation": "Direct measurement of arterial blood gases is the standard for monitoring arterial oxygen and carbon dioxide levels but only provides values for a specific point in time. Transcutaneous noninvasive measurements (Ptc) for oxygen (Ptco2) and carbon dioxide (Ptcco2) are based on the diffusion of O2 and CO2 through the skin. In order to get reliable transcutaneous readings, the skin must be warmed to facilitate gas diffusion. This, however, allows for some metabolism of oxygen and production of carbon dioxide by the skin. The net result is a lower Ptco2 level and a higher Ptcco2 level. (Miller: Miller’s Anesthesia, ed 8, p 1574)."
  },
  {
    "id": 41,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "Which of the following combinations would result in delivery of a lower-than-expected concentration of volatile anesthetic to the patient?",
    "options": {
      "A": "Sevoflurane vaporizer filled with desflurane",
      "B": "Isoflurane vaporizer filled with sevoflurane",
      "C": "Sevoflurane vaporizer filled with isoflurane",
      "D": "All of the above would result in less than the dialed concentration"
    },
    "correctAnswer": "B",
    "explanation": "Saturated vapor pressures depend on the physical properties of the liquid and the temperature. Vapor pressures are independent of barometric pressure. At 20° C the vapor pressures of halothane (243 mm Hg) and isoflurane (240 mm Hg) are similar, and at 1 atmosphere the concentration in the vaporizer for these drugs is 240/760, or about 32%. Similarly, the vapor pressures for sevoflurane (160 mm Hg) and enflurane (172 mm Hg) are similar, and at 1 atmosphere the concentration in the vaporizer for these drugs is 160/760, or about 21%. If desflurane (vapor pressure of 669 mm Hg) is placed in a 1- atmosphere pressure vaporizer, the concentration would be 669/760 = 88%. Because the bypass flow is adjusted for each vaporizer, putting a volatile anesthetic with a higher saturated vapor pressure would lead to a higher-than-expected concentration of anesthetic delivered from the vaporizer, whereas putting a drug with a lower saturated vapor pressure would lead to a lower-than-expected concentration of drug delivered from the vaporizer. (Barash: Clinical Anesthesia, ed 8, pp 668–678). MAC, minimum alveolar concentration. Vapor pressure and minimum alveolar concentration"
  },
  {
    "id": 42,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "At high altitudes, the flow of a gas through a rotameter will be",
    "options": {
      "A": "Greater than expected",
      "B": "Less than expected",
      "C": "Less than expected at high flows but greater than expected at low flows",
      "D": "Greater than expected at high flows but accurate at low flows"
    },
    "correctAnswer": "D",
    "explanation": "Gas density decreases with increasing altitude (i.e., the density of a gas is directly proportional to atmospheric pressure). Atmospheric pressure will influence the function of rotameters because the accurate function of rotameters is influenced by the physical properties of the gas, such as density and viscosity. The magnitude of this influence, however, depends on the rate of gas flow. At low gas flows, the pattern of gas flow is laminar. Atmospheric pressure will have little effect on the accurate function of rotameters at low gas flows because laminar gas flow is influenced by gas viscosity (which is minimally affected by atmospheric pressure), not by gas density. However, at high gas flows, the gas flow pattern is turbulent and is influenced by gas density. At high altitudes (i.e., low atmospheric pressure), the gas flow through the rotameter will be greater than expected at high flows but accurate at low flows (Ehrenwerth: Anesthesia Equipment: Principles and Applications, ed 2, pp 43–45, 230–231; Miller: Miller’s Anesthesia, ed 8, p 2691)."
  },
  {
    "id": 43,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "A patient presents for knee arthroscopy and tells his anesthesiologist that he has a VDD pacemaker. Select the true statement regarding this pacemaker.",
    "options": {
      "A": "It senses and paces only the ventricle",
      "B": "It paces only the ventricle",
      "C": "Its response to a sensed event is always inhibition",
      "D": "It is not useful in a patient with atrioventricular (AV) nodal block"
    },
    "correctAnswer": "B",
    "explanation": "Pacemakers have a three- to five-letter code that describes the pacemaker type and function. Given that the purpose of the pacemaker is to send electric current to the heart, the first letter identifies the chamber(s) paced: A for atrial, V for ventricle, and D for dual chamber (A + V). The second letter identifies the chamber where endogenous current is sensed: A,V, D, and O for none sensed. The third letter describes the response to sensing: O for none, I for inhibited, T for triggered, and D for dual (I + T). The fourth letter describes programmability or rate modulation: O for none and R for rate modulation (i.e., faster heart rate with exercise). The fifth letter describes anti-tachycardia function: A, V or D (A + V), or O. A VDD pacemaker is used for patients with AV node dysfunction but intact sinus node activity. (Miller: Miller’s Anesthesia, ed 8, pp 1467-1468; Barash: Clinical Anesthesia, ed 8, pp 1724–1725)."
  },
  {
    "id": 44,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "All of the following would result in less trace gas pollution of the OR atmosphere EXCEPT",
    "options": {
      "A": "Use of a high gas flow in a circular system",
      "B": "Tight mask seal during mask induction",
      "C": "Use of a scavenging system",
      "D": "Allow patient to breathe 100% O2 as long as possible before extubation"
    },
    "correctAnswer": "A",
    "explanation": "Although controversial, it is thought that chronic exposure to low concentrations of volatile anesthetics may constitute a health hazard to OR personnel. Therefore removal of trace concentrations of volatile anesthetic gases from the OR atmosphere with a scavenging system and steps to reduce and control gas leakage into the environment are required. High-pressure system leakage of volatile anesthetic gases into the OR atmosphere occurs when gas escapes from compressed-gas cylinders attached to the anesthetic machine (e.g., faulty yokes) or from tubing delivering these gases to the anesthesia machine from a central supply source. The most common cause of low-pressure leakage of anesthetic gases into the OR atmosphere is the escape of gases from sites located between the flowmeters of the anesthesia machine and the patient, such as a poor mask seal. The use of high gas flows in a circle system will not reduce trace gas contamination of the OR atmosphere. In fact, this could contribute to the contamination if there is a leak in the circle system (Miller: Miller’s Anesthesia, ed 8, pp 3232–3234)."
  },
  {
    "id": 45,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "The greatest source for contamination of the OR atmosphere is leakage of volatile anesthetics",
    "options": {
      "A": "Around the anesthesia mask",
      "B": "At the vaporizer",
      "C": "At the CO2 absorber",
      "D": "At the endotracheal tube"
    },
    "correctAnswer": "A",
    "explanation": "Although there is insufficient evidence that chronic exposure to low concentrations of inhaled anesthetics may pose a health hazard to those in the OR, precautions are made to decrease the pollution of inhalation anesthetics there. This includes ventilating the room adequately (air in the OR should be exchanged at least 15 times an hour), maintenance of anesthetic scavenging systems to remove anesthetic vapors, and a tight anesthetic seal with no leakage of gas into the OR atmosphere. Although periodic equipment maintenance should be performed to make sure the anesthetic equipment is operating properly, leakage around an improperly sealed face mask as well as the face mask not applied to the face during airway manipulations (placement of an airway) poses the greatest risk of OR contamination from inhaled anesthetics (Miller: Miller’s Anesthesia, ed 8, pp 3232–3234)."
  },
  {
    "id": 46,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "Uptake of sevoflurane from the lungs during the first minute of general anesthesia is 50 mL. How much sevoflurane would be taken up from the lungs between the 16th and 36th minutes?",
    "options": {
      "A": "25 mL",
      "B": "50 mL",
      "C": "100 mL",
      "D": "500 mL"
    },
    "correctAnswer": "C",
    "explanation": "The amount of volatile anesthetic taken up by the patient in the first minute is equal to the amount taken up between the squares of any two consecutive minutes (square root of time equation). Thus, if 50 mL is taken up in the first minute, 50 mL will be taken up between the first (1 squared) and fourth (2 squared) minutes. Similarly, between the fourth and ninth minutes (2 squared and 3 squared), another 50 mL will be absorbed. In this example, we are looking for the uptake between the 16th (4 squared) and 36th (6 squared) minutes, which would be 2 consecutive minutes squared, or 2 × 50 mL = 100 mL. (Miller: Miller’s Anesthesia, ed 8, pp 650–651)."
  },
  {
    "id": 47,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "Which of the drugs below would have the LEAST impact on somatosensory evoked potentials (SSEPs) monitoring in a 15-year-old patient undergoing scoliosis surgery?",
    "options": {
      "A": "Midazolam",
      "B": "Propofol",
      "C": "Isoflurane",
      "D": "Vecuronium"
    },
    "correctAnswer": "D",
    "explanation": "In evaluating SSEPs, one looks at both the amplitude or voltage of the recorded response wave and the latency (time measured from the stimulus to the onset or peak of the response wave). A decrease in amplitude (> 50%) and/or an increase in latency (> 10%) is usually clinically significant. These changes may reflect hypoperfusion, neural ischemia, temperature changes, or drug effects. All of the volatile anesthetics and the barbiturates cause a decrease in amplitude as well as an increase in latency. Propofol affects both latency and amplitude and, like other intravenous agents, has a significantly less effect than “equipotent” doses of volatile anesthetics. Etomidate causes an increase in latency and an increase in amplitude. Midazolam decreases the amplitude but has little effect on latency. Opioids cause small and not clinically significant increases in latency and a decrease in amplitude of the SSEPs. Muscle relaxants have no effect on SSEPs (Miller: Miller’s Anesthesia, ed 8, pp 1514–1517; Barash: Clinical Anesthesia, ed 8, p 1011)."
  },
  {
    "id": 48,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "Which of the following is NOT found in the low-pressure circuit on an anesthesia machine?",
    "options": {
      "A": "Oxygen supply failure alarm",
      "B": "Flowmeters",
      "C": "Vaporizers",
      "D": "Vaporizer check valve"
    },
    "correctAnswer": "A",
    "explanation": "The anesthesia machine, now more properly called the anesthesia workstation, has two main pressure circuits. The higher-pressure circuits consist of the gas supply from the pipelines and tanks, all piping, pressure gauges, pressure reduction regulators, check valves (which prevent backward gas flow), the oxygen pressure-sensor shutoff valve (also called the oxygen failure cutoff or fail-safe valve), the oxygen supply failure alarm, and the oxygen flush valve—or, simplistically, everything up to the gas flow control valves and the machine common gas outlet. The low-pressure circuit starts with and includes the gas flow control valves, flowmeters, vaporizers, and vaporizer check valve and goes to the machine common gas outlet. See also figure for explanation to Question 12. (Barash: Clinical Anesthesia, ed 8, pp 652–679)."
  },
  {
    "id": 49,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "Frost develops on the outside of an N2O compressed-gas cylinder during general anesthesia. This phenomenon indicates that",
    "options": {
      "A": "The saturated vapor pressure of N2O within the cylinder is rapidly increasing",
      "B": "The cylinder is almost empty",
      "C": "There is a rapid transfer of heat to the cylinder",
      "D": "The flow of N2O from the cylinder into the anesthesia machine is rapid"
    },
    "correctAnswer": "D",
    "explanation": "Vaporization of a liquid requires the transfer of heat from the objects in contact with the liquid (e.g., the metal cylinder and surrounding atmosphere). For this reason, at high gas flows, atmospheric water will condense as frost on the outside of compressed-gas cylinders. (Miller: Basics of Anesthesia, ed 7, p 224)."
  },
  {
    "id": 50,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "The LEAST reliable site for central temperature monitoring is the",
    "options": {
      "A": "PA",
      "B": "Skin on the forehead",
      "C": "Distal third of the esophagus",
      "D": "Nasopharynx"
    },
    "correctAnswer": "B",
    "explanation": "Temperature measurements of the PA, esophagus, axilla, nasopharynx, and tympanic membrane correlate with central temperature in patients undergoing noncardiac surgery. Skin temperature does not reflect central temperature and does not warn adequately of malignant hyperthermia or excessive hypothermia. (Miller: Miller’s Anesthesia, ed 8, pp 1643–1644)."
  },
  {
    "id": 51,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "Of the following medical lasers, which laser light penetrates tissues the most?",
    "options": {
      "A": "Argon laser",
      "B": "Helium–neon laser (He–Ne)",
      "C": "Nd:YAG laser",
      "D": "CO2 laser"
    },
    "correctAnswer": "C",
    "explanation": "Laser refers to Light Amplification by the Stimulated Emission of Radiation. Laser light differs from ordinary light in three main ways. First, laser light is monochromic (possesses one wavelength or color). Second, laser light is coherent (the photons oscillate in the same phase). Third, laser light is collimated (exists in a narrow parallel beam). Visible light has a wide spectrum of wavelengths in the 385- to 760-nm range. Argon laser light, which can penetrate tissues to a depth of 0.05 to 2.0 mm, is either blue (wavelength 488 nm) or green (wavelength 514 nm) and is often used for vascular pigmented lesions because it is intensively absorbed by hemoglobin. Helium–neon laser light is red, has a frequency of 632 nm, and is often used as an aiming beam because it has very low power and presents no significant danger to OR personnel. Nd:YAG laser light is the most powerful medical laser and can penetrate tissues from 2 to 6 mm. Nd:YAG laser light is in the near infrared range, with a wavelength of 1064 nm, has general uses (e.g., prostate surgery, laryngeal papillomatosis, coagulation), and can be used with fiberoptics. CO2 laser light is in the far infrared range, with a long wavelength of 10,600 nm. Because CO2 laser light penetrates tissues poorly, it can vaporize superficial tissues with little damage to underlying cells (Miller: Miller’s Anesthesia, ed 8, pp 2598–2601; Barash: Clinical Anesthesia, ed 8, p 1392)."
  },
  {
    "id": 52,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "Which of the following supraglottic airway devices features a built-in bite block, a channel for nasogastric suctioning, and a cuff modified to extend to the posterior surface of the mask?",
    "options": {
      "A": "LMA Fastrach",
      "B": "LMA Supreme",
      "C": "Air-Q",
      "D": "I-Gel"
    },
    "correctAnswer": "B",
    "explanation": "There are four methods of administering anesthetic gases to a patient; mask, supraglottic airway, endotracheal tube, and a surgical airway (tracheostomy). The first supraglottic airway (laryngeal mask airway or LMA) was used in 1988. The LMA is basically an airway tube with a distal elliptical inflatable mask that has an anterior aperture. The LMA is inserted blindly into the pharynx, and the mask is inflated to obtain a seal around the glottis opening. The original LMA had two small, narrow bar-like structures to cover the distal opening. Because of the bar-like structures, you cannot pass an endotracheal tube through the airway tube of the LMA. The LMA Fastrach (Intubating LMA or ILMA) does not have the bar-like structures so that an endotracheal tube can be passed through the LMA into the trachea; then the LMA could be removed, leaving the endotracheal tube in the trachea. One disadvantage of the original LMA is the inability to empty the stomach. The reusable LMA Proseal and the single-use LMA Supreme were designed with the mask modified to extend the posterior surface for an improved seal, a built-in bite block to decrease the chance of an obstructed airway lumen, and a second lumen that allows for a suction catheter to pass through the LMA into the stomach. The Air-Q is another second-generation supraglottic airway, with a shorter airway tube, a bite block, and a removable circuit connector that more easily allows one to pass a standard endotracheal tube through the LMA into the trachea. The I-Gel is another second-generation supraglottic airway that was designed as a noninflatable supraglottic airway with a soft, gel-like seal. The I-Gel has a gastric channel that runs from the distal tip to an outlet lateral to the airway connector and allows for the insertion of a gastric tube. Suctioning of the stomach is not possible with the LMA Fastrach or Air- Q supraglottic airways. (Barash: Clinical Anesthesia, ed 8, pp 775–778; Miller: Basics of Anesthesia, ed 7, pp 248–250; Miller: Miller’s Anesthesia, ed 8, pp 1661–1665)"
  },
  {
    "id": 53,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "The maximum Fio2 that can be delivered by a nasal cannula is",
    "options": {
      "A": "0.30",
      "B": "0.35",
      "C": "0.40",
      "D": "0.45"
    },
    "correctAnswer": "D",
    "explanation": "The Fio2 delivered to patients from low-flow systems (e.g., nasal prongs) is determined by the size of the O2 reservoir, the O2 flow, and the patient’s breathing pattern. As a rule of thumb, assuming a normal breathing pattern, the Fio2 delivered by nasal prongs increases by approximately 0.04 for each L/min increase in O2 flow up to a maximal Fio2 of approximately 0.45 (at an O2 flow of 6 L/min). In general, the larger the patient’s VT or the faster the respiratory rate, the lower the Fio2 for a given O2 flow. (Miller: Miller’s Anesthesia, ed 8, pp 2933– 2934)."
  },
  {
    "id": 54,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "General anesthesia is administered to an otherwise healthy 38-year-old patient undergoing repair of a right inguinal hernia. During mechanical ventilation, the anesthesiologist notices that the scavenging system reservoir bag is distended during inspiration. The most likely cause of this is",
    "options": {
      "A": "An incompetent pressure-relief valve in the mechanical ventilator",
      "B": "An incompetent pressure-relief valve in the patient’s breathing circuit",
      "C": "An incompetent inspiratory unidirectional valve in the patient’s breathing circuit",
      "D": "An incompetent expiratory unidirectional valve in the patient’s breathing circuit"
    },
    "correctAnswer": "A",
    "explanation": "(Courtesy Draeger Medical, Inc., Telford, Pennsylvania.) In a closed scavenging system interface, the reservoir bag should expand during expiration and contract during inspiration. During the inspiratory phase of mechanical ventilation, the ventilator pressure-relief valve closes, thereby directing the gas inside the ventilator bellows into the patient’s breathing circuit. If the ventilator pressure-relief valve is incompetent, there will be a direct communication between the patient’s breathing circuit and the scavenging circuit. This will result in delivery of part of the mechanical ventilator VT directly to the scavenging circuit, causing the reservoir bag to inflate during the inspiratory phase of the ventilator cycle (Ehrenwerth: Anesthesia Equipment: Principles and Applications, ed 2, pp 130–132; Miller: Miller’s Anesthesia, ed 8, pp 2933–2934; Pardo: Basics of Anesthesia, ed 7, p 233).",
    "explanationImages": [
      "/images_hall/ch01/q54_exp_1.png"
    ]
  },
  {
    "id": 55,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "Which color of nail polish would have the greatest effect on the accuracy of dual-wavelength pulse oximeters?",
    "options": {
      "A": "Red",
      "B": "Yellow",
      "C": "Blue",
      "D": "Green"
    },
    "correctAnswer": "C",
    "explanation": "The accurate function of dual-wavelength pulse oximeters is altered by nail polish. Because blue nail polish has a peak absorbance similar to that of adult deoxygenated hemoglobin (near 660 nm), it has the greatest effect on the Spo2 reading. Nail polish causes an artifactual and fixed decrease in the Spo2 reading as shown by these devices. Turning the finger probe 90 degrees so the light shines sidewise through the finger is useful when there is nail polish on the patient’s fingernails (Miller: Miller’s Anesthesia, ed 8, p 1547)."
  },
  {
    "id": 56,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "The minimum macroshock current required to elicit ventricular fibrillation is",
    "options": {
      "A": "1 mA",
      "B": "10 mA",
      "C": "100 mA",
      "D": "500 mA"
    },
    "correctAnswer": "C",
    "explanation": "Leakage electric currents less than 1 mA are imperceptible to touch. The minimal ventricular fibrillation threshold of current applied to the skin is about 100 mA. If the current bypasses the high resistance of the skin and is applied directly to the heart via pacemaker, central line, etc. (microshock), currents as low as 100 μA (0.1 mA) may be fatal. Because of this, the American National Standards Institute has set the maximum leakage of electric current allowed through electrodes or catheters in contact with the heart at 10 μA (Miller: Miller’s Anesthesia, ed 8, p 3226; Barash: Clinical Anesthesia, ed 8, pp 111–112)."
  },
  {
    "id": 57,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "The line isolation monitor",
    "options": {
      "A": "Prevents microshock",
      "B": "Prevents macroshock",
      "C": "Provides electric isolation in the OR",
      "D": "Sounds an alarm when grounding occurs in the OR"
    },
    "correctAnswer": "D",
    "explanation": "The line isolation monitor gives an alarm when grounding occurs in the OR or when the maximum current that a short circuit could cause exceeds 2 to 5 mA. The line isolation monitor is purely a monitor and does not interrupt electric current. Therefore the line isolation monitor will not prevent microshock or macroshock (Brunner: Electricity, Safety, and the Patient, ed 1, p 304; Miller: Miller’s Anesthesia, ed 8, pp 3221–3223.)"
  },
  {
    "id": 58,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "Kinking or occlusion of the transfer tubing from the patient’s breathing circuit to the closed scavenging system interface can result in",
    "options": {
      "A": "Barotrauma",
      "B": "Hypoventilation",
      "C": "Hypoxia",
      "D": "Hyperventilation"
    },
    "correctAnswer": "A",
    "explanation": "(From Azar I, Eisenkraft JB: Waste anesthetic gas spillage and scavenging systems. In Ehrenwerth J, Eisenkraft JB, editors: Anesthesia Equipment: Principles and Applications, St Louis, Mosby, 1993, p 128.) A scavenging system with a closed interface is one in which there is communication with the atmosphere through positive-pressure and negative- pressure relief valves. The positive-pressure relief valve will prevent transmission of excessive pressure buildup to the patient’s breathing circuit, even if there is an obstruction distal to the interface or if the system is not connected to wall suction. However, obstruction of the transfer tubing from the patient’s breathing circuit to the scavenging circuit is proximal to the interface. This will isolate the patient’s breathing circuit from the positive-pressure relief valve of the scavenging system interface. Should this occur, barotrauma to the patient’s lungs can result (Ehrenwerth: Anesthesia Equipment: Principles and Applications, ed 2, pp 130–137).",
    "explanationImages": [
      "/images_hall/ch01/q58_exp_1.png"
    ]
  },
  {
    "id": 59,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "The reason a patient is not burned by the return of energy from the patient to the ESU (electrosurgical unit, Bovie) is that",
    "options": {
      "A": "The coagulation side of this circuit is positive relative to the ground side",
      "B": "Resistance in the patient’s body attenuates the energy",
      "C": "The exit current density is much less than…?",
      "D": "The exit current density is much less than that at the handpiece"
    },
    "correctAnswer": "C",
    "explanation": "Electrocautery units, or electrosurgical units (ESUs), were invented by Professor W. T. Bovie and were first used in 1926. They operate by generating ultra-high frequency (0.1-3 MHz) alternating electric currents and are commonly used today for cutting and coagulating tissue. Whenever a current passes through a resistance such as tissue, heat is generated and is inversely proportional to the surface area through which the current passes. At the point of entry to the body from the small active electrode or cautery tip, a fair amount of heat is generated. For the current to complete its circuit, the return electrode plate or dispersive pad (incorrectly but commonly called the ground pad) has a large surface area, where very little heat develops. The dispersive pad should be as close as is reasonable to the site of surgery. If the current from the ESU passes through an artificial cardiac pacemaker, the pacemaker may misinterpret the current as cardiac activity and may not pace, which is why a magnet placed over the pacemaker will turn off the pacemaker sensor, putting the pacemaker in the asynchronous mode, and should be available (if the pacemaker’s sensory mode is not turned off preoperatively). In addition, automatic implantable cardioverter-defibrillators (AICDs) may misinterpret the electric activity as ventricular fibrillation and defibrillate the patient. AICDs should be turned off before use of an ESU. (Barash: Clinical Anesthesia, ed 8, pp 125–127).",
    "explanationImages": [
      "/images_hall/ch01/q59_exp_0.png"
    ]
  },
  {
    "id": 60,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "Select the FALSE statement regarding noninvasive arterial BP monitoring devices.",
    "options": {
      "A": "If the width of the BP cuff is too narrow, the measured BP will be falsely lowered",
      "B": "The width of the BP cuff should be 40% of the circumference of the patient’s arm",
      "C": "If the BP cuff is wrapped around the arm too loosely, the measured BP will be falsely elevated",
      "D": "Frequent cycling of automated BP monitoring devices can result in edema distal to the cuff"
    },
    "correctAnswer": "B",
    "explanation": "ANIBP devices provide consistent and reliable arterial BP measurements. Variations in the cuff pressure resulting from arterial pulsations during cuff deflation are sensed by the device and are used to calculate MAP. Then, values for systolic and diastolic pressures are derived from formulas that use the rate of change of the arterial pressure pulsations and the MAP (oscillometric principle). This method provides accurate measurements of arterial BP in neonates, infants, children, and adults. The main advantage of ANIBP devices is that they free the anesthesia provider to perform other duties required for optimal anesthesia care. Additionally, these devices provide alarm systems to draw attention to extreme BP values, and they have the capacity to transfer data to automated trending devices or recorders. Improper use of these devices can lead to erroneous measurements and complications. The width of the BP cuff should be approximately 40% of the circumference of the patient’s arm. If the BP cuff is too narrow or if the BP cuff is wrapped too loosely around the arm, the BP measurement by the device will be falsely elevated. Frequent BP measurements can result in edema of the extremity distal to the cuff. For this reason, cycling of these devices should not be more frequent than every 1 to 3 minutes. Other complications associated with improper use of ANIBP devices include ulnar nerve paresthesia, superficial thrombophlebitis, and compartment syndrome. Fortunately, these complications are rare. (Miller: Miller’s Anesthesia, ed 8, pp 1347–1348; Barash: Clinical Anesthesia, ed 8, pp 1287; 715–717)."
  },
  {
    "id": 61,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "When electrocardiogram (ECG) electrodes are placed for a patient undergoing a magnetic resonance imaging (MRI) scan, which of the following is true?",
    "options": {
      "A": "Electrodes should be as close as possible and in the periphery of the magnetic field",
      "B": "Electrodes should be as close as possible and in the center of the magnetic field",
      "C": "Placement of electrodes relative to field is not important as long as they are far apart",
      "D": "ECG cannot be monitored during an MRI scan"
    },
    "correctAnswer": "B",
    "explanation": "ECG monitoring is often not used during MRI scans because artifacts are very common (abnormalities in T waves and ST waves), and heating of the wires during the scan would potentially burn the patient. However, ECG can be used if the electrodes are placed close together and toward the center of the magnetic field and the wires are insulated from the patient’s skin and straight. In addition, the wires should not be wound together in loops (because this can induce heating of the wires), and worn or frayed wires should not be used. (Miller: Miller’s Anesthesia, ed 8, p 2655; Barash: Clinical Anesthesia, ed 8, p 888)."
  },
  {
    "id": 62,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "Which of the reasons below best accounts for the capnography tracing depicted in this figure? (Adapted from Szocik J, Teig M, Tremper K. Anesthetic monitoring. In: Basics of Anesthesia, ed 7, Pardo M, Miller R (Eds). Elsevier; 2018.)",
    "options": {
      "A": "Severe obstructive airways disease",
      "B": "Exhausted CO2 absorbent",
      "C": "Ruptured cuff",
      "D": "Pulmonary embolism"
    },
    "correctAnswer": "D",
    "explanation": "The capnography tracing provides a great deal of information. After intubation the mere presence of CO2 is very reassuring. During the procedure, other data can be gleaned like presence of COPD, exhausted absorbent, stuck anesthesia circuit valves, and more. The tracing above depicts a scenario in which the patient’s lungs are receiving progressively less blood flow. Such a tracing could come from a number of causes such as exsanguination, cardiac failure, and pulmonary embolism. (From Szocik J, Teig M, Tremper K. Anesthetic monitoring. In: Basics of Anesthesia, ed 7, Pardo M, Miller R (Eds). Elsevier; 2018.)",
    "image": "/images_hall/ch01/q62_stem.png",
    "explanationImages": [
      "/images_hall/ch01/q62_exp_1.png"
    ]
  },
  {
    "id": 63,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "The most frequent cause of mechanical failure of the anesthesia delivery system to deliver adequate O2 to the patient is",
    "options": {
      "A": "Attachment of the wrong compressed-gas cylinder to the O2 yoke",
      "B": "Improperly assembled O2 rotameter",
      "C": "Fresh-gas line disconnection from the anesthesia machine to the in-line hosing",
      "D": "Disconnection of the O2 supply system from the patient"
    },
    "correctAnswer": "D",
    "explanation": "Failure to oxygenate patients adequately is an important cause of anesthesia-related morbidity and mortality. All of the choices listed in this question are potential causes of inadequate delivery of O2 to the patient; however, the most frequent cause is inadvertent disconnection of the O2 supply system from the patient (e.g., disconnection of the patient’s breathing circuit from the endotracheal tube) (Ehrenwerth: Anesthesia Equipment: Principles and Applications, ed 2, p 121; Miller: Miller’s Anesthesia, ed 8, pp 780–781).",
    "explanationImages": [
      "/images_hall/ch01/q63_exp_0.png"
    ]
  },
  {
    "id": 64,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "The esophageal detector device",
    "options": {
      "A": "Uses a negative-pressure bulb",
      "B": "Is especially useful in children younger than 1 year of age",
      "C": "Requires a cardiac output to function appropriately",
      "D": "Is reliable in morbidly obese patients and parturients"
    },
    "correctAnswer": "A",
    "explanation": "The esophageal detector device (EDD) is essentially a bulb that is first compressed and then attached to the endotracheal tube after the tube is inserted into the patient. The pressure generated is about −40 cm of water. If the endotracheal tube is placed in the esophagus, then the negative pressure will collapse the esophagus, and the bulb will not inflate. If the endotracheal tube is in the trachea, then the air from the lung will enable the bulb to inflate (usually in a few seconds, but sometimes more than 30 seconds). A syringe that has a negative pressure applied to it has also been used. Although initial studies were very positive about the use of the EDD, more recent studies show that up to 30% of correctly placed endotracheal tubes in adults may be removed because the EDD has suggested esophageal placement. Misleading results have been noted in patients with morbid obesity, late pregnancy, status asthmaticus, and copious endotracheal secretion, wherein the trachea tends to collapse. Its use in children younger than 1 year of age has shown poor sensitivity and poor specificity. Although a cardiac output is needed to get CO2 to the lungs for a CO2 gas analyzer to function, a cardiac output is not needed for an EDD. (Miller: Miller’s Anesthesia, ed 8, p 1654)."
  },
  {
    "id": 65,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "The reason CO2 measured by capnometer is less than the arterial Paco2 value measured simultaneously is",
    "options": {
      "A": "Use of ion-specific electrode for blood gas determination",
      "B": "Alveolar capillary gradient",
      "C": "One-way values",
      "D": "Alveolar dead space"
    },
    "correctAnswer": "D",
    "explanation": "The capnometer measures the CO2 concentration of respiratory gases. Today this is most commonly performed by infrared absorption using a sidestream gas sample. The sampling tube should be connected as close as possible to the patient’s airway. The difference between the end-tidal CO2 (Etco2) and the arterial CO2 (Paco2) is typically 5 to 10 mm Hg and is due to alveolar dead space ventilation. Because nonperfused alveoli do not contribute to gas exchange, any condition that increases alveolar dead space ventilation (i.e., reduces pulmonary blood flow, as by pulmonary embolism or cardiac arrest) will increase dead space ventilation and the Etco2-to-Paco2 difference. Conditions that increase pulmonary shunt result in minimal changes in the Paco2–Etco2 gradient. CO2 diffuses rapidly across the capillary-alveolar membrane (Miller: Miller’s Anesthesia, ed 8, pp 1551–1553; Barash: Clinical Anesthesia, ed 8, pp 711–712)."
  },
  {
    "id": 66,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "Which of the following arrangements of rotameters on the anesthesia machine manifold is safest with left-to-right gas flow?",
    "options": {
      "A": "O2, CO2, N2O, air",
      "B": "CO2, O2, N2O, air",
      "C": "Air, CO2, O2, N2O",
      "D": "Air, CO2, N2O, O2"
    },
    "correctAnswer": "D",
    "explanation": "The last gas added to a gas mixture should always be O2. This arrangement is the safest because it ensures that leaks proximal to the O2 inflow cannot result in the delivery of a hypoxic gas mixture to the patient. With this arrangement (O2 added last), leaks distal to the O2 inflow will result in a decreased volume of gas, but the Fio2 of anesthesia will not be reduced. (Ehrenwerth: Anesthesia Equipment: Principles and Applications, ed 2, pp 43–45; Miller: Basics of Anesthesia, ed 7, p 223; Barash: Clinical Anesthesia, ed 8, pp 661–664)."
  },
  {
    "id": 67,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "A Datex-Ohmeda Tec 4 vaporizer is tipped over while being attached to the anesthesia machine but is placed upright and installed. The soonest it can be safely used is",
    "options": {
      "A": "After 30 minutes of flushing with dial set to “off”",
      "B": "After 6 hours of flushing with dial set to “off”",
      "C": "After 30 minutes with dial turned on",
      "D": "Immediately"
    },
    "correctAnswer": "C",
    "explanation": "Most modern Datex-Ohmeda Tec or North American Dräger Vapor vaporizers (except desflurane) are variable-bypass, flowover vaporizers. This means that the gas that flows through the vaporizers is split into two parts, depending on the concentration selected. The gas goes through either the bypass chamber on the top of the vaporizer or the vaporizing chamber on the bottom of the vaporizer. If the vaporizer is tipped, which might happen when a filled vaporizer is switched out or moved from one machine to another machine, part of the anesthetic liquid in the vaporizing chamber may get into the bypass chamber. This could result in a much higher concentration of gas than that dialed. With the Datex-Ohmeda Tec 4 or the North American Dräger Vapor 19.1 series, it is recommended to flush the vaporizer at high flows with the vaporizer set at a low concentration until the output shows no excessive agent (this usually takes 20-30 minutes). The Dräger Vapor 2000 series has a transport (T) dial setting. This setting isolates the bypass from the vaporizer chamber. The Aladin cassette vaporizer does not have a bypass flow chamber and has no tipping hazard (Miller: Miller’s Anesthesia, ed 8, p 771; Barash: Clinical Anesthesia, ed 8, pp 672–673)."
  },
  {
    "id": 68,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "In the event of misfilling, what percent sevoflurane would be delivered from an isoflurane vaporizer set at 1%?",
    "options": {
      "A": "0.6%",
      "B": "0.8%",
      "C": "1.0%",
      "D": "1.2%"
    },
    "correctAnswer": "A",
    "explanation": "Accurate delivery of volatile anesthetic concentration is dependent on filling the agent-specific vaporizer with the appropriate (volatile) agent. Differences in anesthetic potencies further necessitate this requirement. Each agent-specific vaporizer uses a splitting ratio that determines the portion of the fresh gas that is directed through the vaporizing chamber versus that which travels through the bypass chamber. BP, blood pressure; VP, vapor pressure. Vapor pressure, anesthetic vapor pressure, and splitting ratio The table shows the calculation (fraction) that when multiplied by the quantity of fresh gas traversing the vaporizing chamber (affluent fresh gas in mL/min) will yield the output (mL/min) of anesthetic vapor in the effluent gas. When this fraction is multiplied by 100, it equals the splitting ratio for 1% for the given volatile agent. For example, when the isoflurane vaporizer is set to deliver 1% isoflurane, one part of fresh gas is passed through the vaporizing chamber while 47 parts travel through the bypass chamber. One can determine on inspection that when a less soluble volatile agent like sevoflurane (or the obsolete volatile agent enflurane, for the sake of example) is placed into an isoflurane (or halothane) vaporizer, the output in volume percent will be less than expected; how much less can be determined by simply comparing their splitting ratios 27/47 or 0.6. Halothane and enflurane are no longer used in the United States, but old halothane and enflurane vaporizers can be (and are) used elsewhere in the world to accurately deliver isoflurane and sevoflurane, respectively (Ehrenwerth: Anesthesia Equipment: Principles and Applications, ed 2, pp 72– 73; Miller: Miller’s Anesthesia, ed 8, pp 771–774)."
  },
  {
    "id": 69,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "How long would a vaporizer (filled with 150 mL volatile) deliver 2% isoflurane if total flow is set at 4.0 L/min?",
    "options": {
      "A": "2 hours",
      "B": "4 hours",
      "C": "6 hours",
      "D": "8 hours"
    },
    "correctAnswer": "C",
    "explanation": "Two percent of 4 L/min will be 80 mL of isoflurane per minute. Given that 1 mL of isoflurane liquid yields 195 mL of anesthetic vapor and by applying the calculation (195 mL vapor/1 mL liquid isoflurane) × (150 mL isoflurane liquid) = 29,250 mL isoflurane vapor, it follows that (29,250 mL ÷ 80 mL/min = 365 minutes). 365 minutes is around 6 hours (Ehrenwerth: Anesthesia Equipment: Principles and Applications, ed 2, pp 65–70; Barash: Clinical Anesthesia, ed 8, pp 668–673)."
  },
  {
    "id": 70,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "Raising the frequency of an ultrasound transducer used for line placement or regional anesthesia (e.g., from 3 MHz to 10 MHz) will result in",
    "options": {
      "A": "Higher penetration of tissue with lower resolution",
      "B": "Higher penetration of tissue with higher resolution",
      "C": "Lower penetration of tissue with higher resolution",
      "D": "Higher resolution with no change in tissue penetration"
    },
    "correctAnswer": "C",
    "explanation": "The human ear can perceive sound in the range of 20 Hz to 20 kHz. Frequencies above 20 kHz, inaudible to humans, are ultrasonic frequencies (ultra = Latin for “beyond” or “on the far side of”). In regional anesthesia, ultrasound is used for imaging in the frequency range of 2.5 to 10 MHz. Wavelength is inversely proportional to frequency (i.e., λ = C/f [λ = wavelength, C = velocity of sound through tissue or 1540 m/sec, f = frequency]). Wavelength in millimeters can be calculated by dividing 1.54 by the Doppler frequency in megahertz. Penetration into tissue is 200 to 400 times wavelength, and resolution is twice the wavelength. Therefore a frequency of 3 MHz (wavelength 0.51 mm) would have a resolution of 1 mm and a penetration of up to 100 to 200 mm (10-20 cm), whereas 10 MHz (wavelength 0.15 mm) corresponds to a resolution of 0.3 mm but a penetration depth of no more than 60 to 120 mm (6-12 cm) (Miller: Miller’s Anesthesia, ed 8, pp 1398–1405; Miller: Basics of Anesthesia, ed 7, p 305)."
  },
  {
    "id": 71,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "The fundamental difference between microshock and macroshock is related to",
    "options": {
      "A": "Location of shock",
      "B": "Duration",
      "C": "Voltage",
      "D": "Lethality"
    },
    "correctAnswer": "A",
    "explanation": "Microshock refers to electric shock located in or near the heart. A current as low as 100 μA passing through the heart can produce ventricular fibrillation. Pacemaker electrodes, central venous catheters, PA catheters, and other devices in the heart are necessary prerequisites for microshock. Because the line isolation monitor has a threshold of 2 mA (2000 μA) for alarming, it will not protect against microshock (Miller: Miller’s Anesthesia, ed 8, p 3226; Barash: Clinical Anesthesia, ed 8, p 123)."
  },
  {
    "id": 72,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "Intraoperative awareness under general anesthesia can be eliminated by closely monitoring",
    "options": {
      "A": "Electroencephalogram",
      "B": "BP/heart rate",
      "C": "Bispectral index (BIS)",
      "D": "None of the above"
    },
    "correctAnswer": "D",
    "explanation": "Intraoperative awareness or recall during general anesthesia is rare (overall incidence is 0.2%, for obstetrics 0.4%, for cardiac 1%-1.5%) except for major trauma, which has a reported incidence as high as 43%. With the electroencephalogram, trends can be identified with changes in the depth of anesthesia; however, the sensitivity and specificity of the available trends are such that none serve as a sole indicator of anesthesia depth. Although using the BIS monitor may reduce the risk of recall, it, like the other listed signs as well as patient movement, does not totally eliminate recall. (Miller: Miller’s Anesthesia, ed 8, pp 1527–1528)."
  },
  {
    "id": 73,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "A mechanically ventilated patient is transported from the OR to the ICU using a portable ventilator that consumes 2 L/min of oxygen to run the mechanically controlled valves and drive the ventilator. The transport cart is equipped with an “E” cylinder with a gauge pressure of 2000 psi. The patient receives a tidal volume (VT) of 500 mL at a rate of 10 breaths/min. If the ventilator requires 200 psi to operate, how long could the patient be mechanically ventilated?",
    "options": {
      "A": "20 minutes",
      "B": "40 minutes",
      "C": "60 minutes",
      "D": "80 minutes"
    },
    "correctAnswer": "D",
    "explanation": "The minute ventilation is 5 L (0.5 L per breath at 10 breaths/min) and 2 L/min to drive the ventilator for a total O2 consumption of 7 L/min. A full oxygen “E” cylinder contains 625 L. Ninety percent of the volume of the cylinder (≈ 560 L) can be delivered before the ventilator can no longer be driven. At a rate of 7 L/min, this supply would last about 80 minutes (Ehrenwerth: Anesthesia Equipment: Principles and Applications, ed 2, pp 29–33, 37; Miller: Basics of Anesthesia, ed 7, pp 221–223)."
  },
  {
    "id": 74,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "A 135-kg man is ventilated at a rate of 14 breaths/min with a VT of 600 mL and positive end-expiratory pressure (PEEP) of 5 cm H2O during a laparoscopic banding procedure. Peak airway pressure is 50 cm H2O, and the patient is fully relaxed with a nondepolarizing neuromuscular blocking agent. How can peak airway pressure be reduced without a loss of alveolar ventilation?",
    "options": {
      "A": "Increase the inspiratory flow rate",
      "B": "Take off PEEP",
      "C": "Reduce the I:E ratio (e.g., change from 1:3 to 1:2)",
      "D": "Decrease VT to 300 and increase rate to 28"
    },
    "correctAnswer": "C",
    "explanation": "After eliminating reversible causes of high peak airway pressures (e.g., occlusion of the endotracheal tube, mainstem intubation, or bronchospasm), adjusting the ventilator can reduce the peak airway pressure. Increasing the inspiratory flow rate would cause the airway pressures to go up faster and would produce higher peak airway pressures. Removing PEEP would lower peak pressure at the expense of alveolar ventilation. Changing the I:E ratio from 1:3 to 1:2 will permit 8% (25% inspiratory time to 33% inspiratory time) more time for the VT to be administered and will result in lower airway pressures. Decreasing the VT to 300 and increasing the rate to 28 would give the same minute ventilation but not the same alveolar ventilation. Recall that alveolar ventilation equals (frequency) times (VT minus dead space), and because dead space is the same (about 2 mL/kg ideal weight), alveolar ventilation would be reduced, in this case to a dangerously low level. Another option is to change from volume-cycled to pressure-cycled ventilation, which produces a more constant pressure over time instead of the peaked pressures seen with fixed VT ventilation (Miller: Miller’s Anesthesia, ed 8, pp 3064–3074)."
  },
  {
    "id": 75,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "The pressure and volume per minute delivered from the central hospital oxygen supply are",
    "options": {
      "A": "2100 psi and 650 L/min",
      "B": "1600 psi and 100 L/min",
      "C": "75 psi and 100 L/min",
      "D": "50 psi and 50 L/min"
    },
    "correctAnswer": "D",
    "explanation": "The central hospital oxygen supply to the ORs is designed to give enough pressure and oxygen flow to run the three oxygen components of the anesthesia machine (patient fresh gas flow, anesthesia ventilator, and oxygen flush valve). The oxygen flowmeter on the anesthesia machine is designed to run at an oxygen pressure of 50 psi, and for emergency purposes the oxygen flush valve delivers oxygen at 35 to 75 L/min (Miller: Basics of Anesthesia, ed 7, pp 221–224)."
  },
  {
    "id": 76,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "During normal laminar airflow, resistance is dependent on which characteristic of oxygen?",
    "options": {
      "A": "Density",
      "B": "Viscosity",
      "C": "Molecular weight",
      "D": "Temperature"
    },
    "correctAnswer": "B",
    "explanation": "Within the respiratory system, both laminar and turbulent flows exist. At low flow rates, the respiratory flow tends to be laminar, like a series of concentric tubes that slide over one another with the center tubes flowing faster than the more peripheral tubes. Laminar flow is usually inaudible and is dependent on gas viscosity. Turbulent flow tends to be faster, is audible, and is dependent on gas density. Gas density can be decreased by using a mixture of helium with oxygen. (Barash: Clinical Anesthesia, ed 8, pp 365–366)."
  },
  {
    "id": 77,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "If the oxygen cylinder were being used as the source of oxygen at a remote anesthetizing location and the oxygen flush valve on an anesthesia machine were pressed and held down, as during an emergency situation, each of the items below would be bypassed during 100% oxygen delivery EXCEPT",
    "options": {
      "A": "O2 flowmeter",
      "B": "First-stage regulator",
      "C": "Vaporizer check valve",
      "D": "Vaporizers"
    },
    "correctAnswer": "B",
    "explanation": "Anesthesia workstations have high-pressure, intermediate-pressure, and low-pressure circuits (see figure in the explanation for Question 11). The high-pressure circuit is from the oxygen cylinder to the oxygen pressure regulator (first-stage regulator), which takes the oxygen pressure from a high of 2200 psi to 45 psi. The intermediate-pressure circuit consists of the pipeline pressure of about 50 to 55 psi and goes to the second-stage regulator, which then lowers the pressure to 14 to 26 psi (depending on the machine). The low-pressure circuit then consists of the flow tubes, vaporizer manifold, vaporizers, and vaporizer check valve to the common gas outlet. The oxygen flush valve is in the intermediate-pressure circuit and bypasses the low-pressure circuit (Ehrenwerth: Anesthesia Equipment: Principles and Applications, ed 2, pp 34–36; Miller: Miller’s Anesthesia, ed 8, p 759; Barash: Clinical Anesthesia, ed 8, pp 652, 667–668)."
  },
  {
    "id": 78,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "After induction and intubation with confirmation of tracheal placement, the O2 saturation begins to fall. The O2 analyzer shows 4% inspired oxygen. The oxygen line pressure is 65 psi. The O2 tank on the back of the anesthesia machine has a pressure of 2100 psi and is turned on. The oxygen saturation continues to fall. The next step should be to",
    "options": {
      "A": "Exchange the tank",
      "B": "Replace pulse oximeter probe",
      "C": "Disconnect O2 line from hospital source",
      "D": "Extubate and start mask ventilation"
    },
    "correctAnswer": "C",
    "explanation": "Two major problems should be noted in this case. The first obvious problem is the inspired oxygen concentration of 4%, a concentration that is not possible if the gases going to the machine are appropriate unless the oxygen analyzer is faulty. Given the dire consequences of a hypoxic gas mixture, one must assume the oxygen analyzer is correct and work on the premise that the O2 pipeline is supplying a gas other than oxygen. Second, the oxygen line pressure is 65 psi. The pipeline pressures are normally around 50 to 55 psi, whereas the pressure from the oxygen cylinder, if the cylinder is turned on, is reduced to 45 psi. For the oxygen tank to deliver oxygen to the patient, the pipeline pressure needs to be less than 45 psi, which in this case will occur only when the pipeline is disconnected. Although we rarely think of problems with hospital gas lines, a survey of more than 200 hospitals showed about 33% had problems with the pipelines. The most common pipeline problems were low pressure, followed by high pressure and, very rarely, crossed gas lines (Ehrenwerth: Anesthesia Equipment: Principles and Applications, ed 2, p 34; Miller: Miller’s Anesthesia, ed 8, p 756; Barash: Clinical Anesthesia, ed 8, p 656)."
  },
  {
    "id": 79,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "The correct location for placement of the V5 lead is",
    "options": {
      "A": "Midclavicular line, third intercostal space",
      "B": "Anterior axillary line, fourth intercostal space",
      "C": "Midclavicular line, fifth intercostal space",
      "D": "Anterior axillary line, fifth intercostal space"
    },
    "correctAnswer": "D",
    "explanation": "There are many ways to monitor the electric activity of the heart. The five-electrode system using one lead for each limb and the fifth lead for the precordium is commonly used in the OR. The precordial lead placed in the V5 position (anterior axillary line in the fifth intercostal space) gives the V5 tracing, which, combined with the standard lead II, is the most common tracing used to look for myocardial ischemia (Miller: Miller’s Anesthesia, ed 8, pp 1429–1434; Barash: Clinical Anesthesia, ed 8, p 1710)."
  },
  {
    "id": 80,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "The diameter index safety system refers to the interface between",
    "options": {
      "A": "Pipeline source and anesthesia machine",
      "B": "Gas cylinders and anesthesia machine",
      "C": "Vaporizers and refilling connectors attached to bottles of volatile anesthetics",
      "D": "Both pipeline and gas cylinders interface with anesthesia machine"
    },
    "correctAnswer": "A",
    "explanation": "See also Question 36. The diameter index safety system provides threaded, noninterchangeable connections for medical gas pipelines through the hospital as well as to the anesthesia machine. The pin index safety system has two metal pins in different arrangements around the yoke on the back of anesthesia machines, with each arrangement for a specific gas cylinder. Vaporizers often have keyed fillers that attach to the bottle of anesthetic and the vaporizer. Vaporizers not equipped with keyed fillers occasionally have been misfilled with the wrong anesthetic liquid (Barash: Clinical Anesthesia, ed 8, pp 656–659; Miller: Basics of Anesthesia, ed 7, p 221–223)."
  },
  {
    "id": 81,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "Each of the following is cited as an advantage of calcium hydroxide lime (Amsorb Plus, Drägersorb) over soda lime EXCEPT",
    "options": {
      "A": "Compound A is not formed",
      "B": "CO is not formed",
      "C": "More absorptive capacity per 100 g of granules",
      "D": "It does not contain NaOH or KOH"
    },
    "correctAnswer": "C",
    "explanation": "Calcium hydroxide lime does not contain the monovalent hydroxide bases that are present in soda lime (namely, NaOH and KOH). Sevoflurane in the presence of NaOH or KOH is degraded to trace amounts of compound A, which is nephrotoxic to rats at high concentrations. Soda lime normally contains about 13% to 15% water, but if the soda lime is desiccated (water content < 5%—which has occurred if the machine is not used for a while and the fresh gas flow is left on) and is exposed to current volatile anesthetics (isoflurane, sevoflurane, and especially desflurane), CO can be produced. Neither compound A nor CO is formed when calcium hydroxide lime is used. With soda lime and calcium hydroxide lime, the indicator dye changes from white to purple as the granules become exhausted. The two major disadvantages of calcium hydroxide lime are the expense and the fact that its absorptive capacity is about half that of soda lime (10.2 L of CO2/100 g of calcium hydroxide lime versus 26 L of CO2/100 g of soda lime). (Miller: Miller’s Anesthesia, ed 8, pp 787–789; Barash: Clinical Anesthesia, ed 8, pp 681–683; Miller: Basics of Anesthesia, ed 7, 233–236)."
  },
  {
    "id": 82,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "The arrows in the figure above indicate (From Mark JB: Atlas of Cardiovascular Monitoring, New York, Churchill Livingstone, 1998, Figure 9-4.)",
    "options": {
      "A": "Respiratory variation",
      "B": "An underdamped signal",
      "C": "An overdamped signal",
      "D": "Atrial fibrillation"
    },
    "correctAnswer": "B",
    "explanation": "The aim of direct invasive monitoring is to give continuous arterial BPs that are similar to the intermittent noninvasive arterial BPs from a cuff, as well as to give a port for arterial blood samples. The displayed signal reflects the actual pressure and the distortions from the measuring system (i.e., the catheter, tubing, stopcocks, and amplifier). Although the signal is usually accurate, at times we see an underdamped or an overdamped signal. In an underdamped signal, as in this case, exaggerated readings are noted (widened pulse pressure). In an overdamped signal, readings are diminished (narrowed pulse pressure). However, the mean BP tends to be accurate in both underdamped and overdamped signals (Miller: Miller’s Anesthesia, ed 8, pp 1347–1359; Barash: Clinical Anesthesia, ed 8, pp 714–715).",
    "image": "/images_hall/ch01/q82_stem.png"
  },
  {
    "id": 83,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "During a laparoscopic cholecystectomy, exhaled CO2 is 6%, but inhaled CO2 is 1%. Which explanation could NOT account for the 1% inhaled CO2?",
    "options": {
      "A": "Channeling through soda lime",
      "B": "Faulty expiratory valve",
      "C": "Exhausted soda lime",
      "D": "Absorption of CO2 through peritoneum Directions (Questions 84 through 86): Please match the color of the compressed-gas cylinder with the appropriate gas."
    },
    "correctAnswer": "D",
    "explanation": "Rebreathing of expired gases (e.g., stuck open expiratory or inspiratory valves), faulty removal of CO2 from the CO2 absorber (e.g., exhausted CO2 absorber, channeling through a CO2 absorber, or having the CO2 absorber bypassed—an option in some older anesthetic machines), or addition of CO2 from a gas supply (rarely done with current anesthetic machines) can all increase inspired CO2. The absorption of CO2 during laparoscopic surgery when CO2 is used as the abdominal distending gas will increase absorption of CO2 but will not cause an increase in inspired CO2. (Miller: Miller’s Anesthesia, ed 8, pp 1551–1559)."
  },
  {
    "id": 84,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "Helium",
    "options": {},
    "correctAnswer": "B",
    "explanation": "(Miller: Basics of Anesthesia, ed 7, pp 221–223; Ehrenwerth: Anesthesia Equipment: Principles and Applications, ed 2, p 7)."
  },
  {
    "id": 85,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "Nitrogen",
    "options": {},
    "correctAnswer": "A",
    "explanation": "(Miller: Basics of Anesthesia, ed 7, pp 221–223; Ehrenwerth: Anesthesia Equipment: Principles and Applications, ed 2, p 7)."
  },
  {
    "id": 86,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "CO2",
    "options": {
      "A": "Black",
      "B": "Brown",
      "C": "Orange",
      "D": "Gray Directions (Questions 87 through 90): Match the figures below with the correct numbered statement. Each lettered figure may be selected once, more than once, or not at all. (Modified from Willis BA, Pender JW, Mapleson WW: Rebreathing in a T-piece: volunteer and theoretical studies of Jackson-Rees modification of Ayre’s T-piece during spontaneous respiration, Br J Anaesth 47:1239–1246, 1975. © The Board of Management and Trustees of the British Journal of Anesthesia. Reproduced by permission of Oxford University Press/British Journal of Anesthesia.)"
    },
    "correctAnswer": "D",
    "explanation": "Medical gas cylinders are color coded, but the colors may differ from one country to another. In the United States if there is a combination of two gases, the tank would have both corresponding colors; for example, a tank containing oxygen and helium would be green and brown. The only exception to the mixed gas color scheme is O2 and N2 in the proportion of 19.5% to 23.5% O2 mixed with N2, which is solid yellow (air) (Ehrenwerth: Anesthesia Equipment: Principles and Applications, ed 2, p 7; Miller: Basics of Anesthesia, ed 7, pp 221–223). Gas color codes Gas United States International Air Yellow White and black CO2 Gray Gray Helium Brown Brown Nitrogen Black Black N2O Blue Blue Oxygen Green White Data from Ehrenwerth J, Eisenkraft JB, Berry JM: Anesthesia Equipment: Principles and Applications, ed 2, Philadelphia, Saunders, 2013."
  },
  {
    "id": 87,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "Best for spontaneous ventilation",
    "options": {},
    "correctAnswer": "A",
    "explanation": "(Miller: Miller’s Anesthesia, ed 8, pp 780–781; Miller: Basics of Anesthesia, ed 7, pp 225–229)."
  },
  {
    "id": 88,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "Best for controlled ventilation",
    "options": {},
    "correctAnswer": "D",
    "explanation": "(Miller: Miller’s Anesthesia, ed 8, pp 780–781; Miller: Basics of Anesthesia, ed 7, pp 225–229)."
  },
  {
    "id": 89,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "Bain system is modification of",
    "options": {},
    "correctAnswer": "D",
    "explanation": "(Miller: Miller’s Anesthesia, ed 8, pp 780–781; Miller: Basics of Anesthesia, ed 7, pp 225–229)."
  },
  {
    "id": 90,
    "chapter": 1,
    "chapterTitle": "Anesthesia Equipment and Physics",
    "stem": "Jackson-Rees system Anesthesia Equipment and Physics",
    "options": {},
    "correctAnswer": "F",
    "explanation": "There are six types of Mapleson breathing circuits (designated A through F). These circuits vary in arrangement of the fresh-gas-flow inlet, tubing, mask, reservoir bag, and unidirectional expiratory valve. These systems are lightweight, portable, and easy to clean; they offer low resistance to breathing, and, because of high fresh gas inflows, they prevent rebreathing of exhaled gases. In addition, with these breathing circuits, the concentration of volatile anesthetic gases and O2 delivered to the patient can be accurately estimated. The reservoir bag enables the anesthesia provider to provide assisted or controlled ventilation of the lungs. The unidirectional expiratory valve functions to direct fresh gas into the patient and exhaled gases out of the circuit. In the Mapleson A breathing circuit, the unidirectional expiratory valve is near the patient, and the fresh-gas-flow inlet is proximal to the reservoir bag. This arrangement is the most efficient for elimination of CO2 during spontaneous breathing. However, because the unidirectional expiratory valve must be tightened to permit production of positive airway pressure when the gas reservoir bag is manually compressed, this breathing circuit is less efficient in preventing rebreathing of CO2 during assisted or controlled ventilation of the lungs. The structure of the Mapleson D breathing circuit is similar to that of the Mapleson A breathing circuit except that the positions of the fresh-gas-flow inlet and the unidirectional expiratory valve are reversed. The placement of the fresh- gas-flow inlet near the patient produces efficient elimination of CO2, regardless of whether the patient is breathing spontaneously or with controlled ventilation. The Bain anesthesia breathing circuit is a coaxial version of the Mapleson D breathing circuit, except that the fresh gas enters through a narrow tube within the corrugated expiratory limb of the circuit. The Jackson-Rees breathing circuit is a modification of the Mapleson E breathing circuit and is called a Mapleson F breathing circuit. In the Jackson-Rees breathing circuit, the adjustable unidirectional expiratory valve is incorporated into the reservoir bag, and the fresh-gas-flow inlet is close to the patient. This arrangement offers the advantage of ease of instituting assisted or controlled ventilation of the lungs, as well as monitoring ventilation by movement of the reservoir bag during spontaneous breathing (Ehrenwerth: Anesthesia Equipment: Principles and Applications, ed 2, pp 109–117; Miller: Miller’s Anesthesia, ed 8, pp 780–781; Miller: Basics of Anesthesia, ed 7, p 225–229). CHAPTER 2 Respiratory Physiology and Critical Care Medicine"
  }
];
