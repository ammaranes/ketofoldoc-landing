export const ch34 = {
  id: "miller_ch34",
  chapterNumber: 34,
  title: "Implantable Cardiac Pulse Generators  Pacemakers and Cardioverter Defibrillators",
  bookId: "miller",
  readTimeMinutes: 26,
  sections: [
    {
      title: `Overview 1`,
      content: `# **PERIOPERATIVE MANAGEMENT OF PACEMAKERS AND CARDIOVERTERDEFIBRILLATORS**`
    },
    {
      title: `KEY CORE CONCEPTS & CLINICAL IMPERATIVES`,
      content: `- **Device Identification:** Identify the specific cardiovascular implantable electronic device (CIED) type (pacemaker, transvenous ICD, subcutaneous ICD, or CRT), manufacturer, and model preoperatively. 

- **Preoperative Coordination:** Contact the managing clinic or physician to obtain formal interrogation reports and perioperative recommendations from the Heart Rhythm Society (HRS). 

- **Electrosurgical Proximity:** High-risk interventions are defined when monopolar electrosurgery occurs within 15 cm of the generator or leads. Consider replacing units nearing their elective replacement period. 

- **Rate Responsiveness:** Disable minute ventilation rate responsiveness preoperatively to avoid false sensordriven tachycardia from mechanical ventilation or electrocautery. 

- **ICD Disabling:** Turn off antitachycardia therapy (shocks and ATP) preoperatively if electromagnetic interference (EMI) is anticipated above the umbilicus, ensuring continuous external cardiac monitoring. 

- **Intraoperative Monitoring:** Monitor cardiac rhythm with plethysmographic pulse oximetry or arterial waveform analysis to verify mechanical capture and actual pulse generation during electrocautery.`
    },
    {
      title: `I. Introduction & Epidemiology`,
      content: `Cardiovascular implantable electronic devices (CIEDs) encompass permanently implanted cardiac pacemakers, implantable cardioverter-defibrillators (ICDs), and cardiac resynchronization therapy (CRT) devices. Rapidly advancing technology and expanded clinical indications for bradyarrhythmias, tachyarrhythmias, and congestive heart failure have made the perioperative management of CIEDs a critical competency for modern anesthesiologists. 

It is estimated that more than 3 million people in the United States possess a pacemaker, and more than 300,000 individuals have an ICD. Globally, approximately 1 million new pacemakers or ICDs are implanted every year. The primary driver for this expanded utilization is the rising prevalence of cardiovascular disease within an aging population. Historically, conflicting consensus guidelines caused confusion; however, in 2011, the Heart Rhythm Society (HRS) and the American Society of Anesthesiologists (ASA) published an Expert Consensus Statement in collaboration with the American Heart Association (AHA) and the Society of Thoracic Surgeons (STS). The ASA subsequently updated its practice advisory in 2020, solidifying a structured team approach as the standard of care. 

**Anesthesia Board Exam Prep: Advanced CIED Management**`
    },
    {
      title: `Overview 4`,
      content: `## **II. Basic Cardiac Implantable Electronic Device Function**`
    },
    {
      title: `A. Permanent Pacemakers`,
      content: `Pacemakers provide electrical stimulation for symptomatic bradyarrhythmias, representing the only effective therapy for symptomatic bradycardia caused by sinus node dysfunction (e.g., sick sinus syndrome) or complete failure of impulse propagation (e.g., complete heart block). Modern pacemakers maintain physiologic atrial-ventricular activation across varying heart rate ranges, adjust the pacing rate in response to metabolic demands, and preserve natural ventricular activation patterns. Standard pacemakers use either single-chamber or dual-chamber configurations (atrial and ventricular leads). 

A patient is defined as **pacemaker-dependent** if they suffer significant symptoms or cardiac arrest upon the immediate cessation of pacing therapy. Dual-chamber pacemakers can pace and sense in both chambers, ensuring a minimum atrial rate, guaranteeing a specified AV delay to preserve the atrial contraction ("atrial kick") before ventricular contraction, and enforcing programmable ventricular rate limits. 

**Rate-Adaptive Mode Sensors:** To alter pacing rates based on perceived metabolic demand, devices employ sensors: 

- _Piezoelectric sensors:_ Detect physical body motion transmitted from underlying skeletal muscles. 

- 

- _Bioimpedance sensors:_ Detect variations in respiratory rate and/or respiratory volume (minute ventilation). 

- 

- _Ventricular impedance sensors:_ Measure changes in ventricular dimensions to determine chronotropic response. 

**Pacing Capture Threshold:** This is defined as the minimum electrical energy needed to consistently depolarize the myocardium outside of its physiological refractory period. It is determined by three variables: (1) the intrinsic excitability of the myocardium, (2) the current density at the electrode-tissue interface, and (3) the duration of the electric pulse.`
    },
    {
      title: `B. Pacemaker Coding (The NBG Code)`,
      content: `The North American Society of Pacing and Electrophysiology (NASPE) and the British Pacing and Electrophysiology Group (BPEG) updated the generic pacemaker code in 2002 to standardize programming nomenclature: 

1. **Position I (Chamber Paced):** O = None, A = Atrium, V = Ventricle, D = Dual (A+V) 

2. **Position II (Chamber Sensed):** O = None, A = Atrium, V = Ventricle, D = Dual (A+V) 

3. **Position III (Response to Sensing):** O = None, I = Inhibited, T = Triggered, D = Dual (I+T) 

4. **Position IV (Rate Modulation/Responsiveness):** O = None, R = Rate responsive sensor active`
    },
    {
      title: `Common Perioperative Pacing Modes:`,
      content: `- **DDDR:** Paces and senses both chambers; inhibits or triggers pacing output based on intrinsic activity, with an active rate-responsive sensor. Common in sick sinus syndrome and complete heart block. 

- **DDIR:** Utilized in patients with history of supraventricular tachyarrhythmias (SVTs). If a device is in standard DDD mode, a fast atrial rate triggers rapid ventricular pacing. DDIR senses and paces both chambers but inhibits ventricular triggering in response to fast atrial events, avoiding tachycardia propagation. Modern devices possess _automatic mode switching_ that automatically toggles from DDD to DDIR or VVIR during an SVT episode. 

**Anesthesia Board Exam Prep: Advanced CIED Management** 

- **DOO (Asynchronous Pacing):** Paces both the atrium and ventricle at a fixed, set rate regardless of underlying intrinsic cardiac activity. This mode avoids oversensing (and subsequent inappropriate pacing inhibition) caused by electrocautery being misinterpreted as intrinsic cardiac conduction.`
    },
    {
      title: `C. Implantable Cardioverter-Defibrillators (ICDs)`,
      content: `ICDs are placed for primary or secondary prevention of cardiac arrest. _Primary prevention_ applies to patients at high risk for malignant ventricular arrhythmias who have not yet experienced an event (e.g., left ventricular ejection fraction [LVEF] < 40% on optimal medical therapy, reducing mortality by 23% to 55% in ischemic and nonischemic cardiomyopathy). _Secondary prevention_ applies to patients with prior documented ventricular arrhythmias. Of note, certain cohorts do not benefit from ICDs, including patients with a recent myocardial infarction or those who recently underwent coronary artery bypass grafting (CABG). 

Modern ICDs feature four core functions: sensing atrial/ventricular electrical activity, classifying signals into programmed "heart rate zones," delivering tiered therapies to terminate ventricular tachycardia (VT) or ventricular fibrillation (VF), and bradycardia pacing (all modern ICDs are pacemakers). 

**SVT vs. VT Discrimination:** Inappropriate shocks comprise 30% to 50% of all delivered shocks, causing proarrhythmic states, severe anxiety, and depression. To avoid inappropriate delivery during SVT, ICDs utilize discrimination algorithms: 

- _Single-chamber ventricular ICDs:_ Evaluate ventricular-ventricular (V-V) timing intervals and QRS morphology. 

- 

- _Dual-chamber ICDs:_ Evaluate atrial-atrial (A-A) timing intervals and the chamber of arrhythmia onset. 

- 

- _Subcutaneous ICDs:_ Analyze the surface electrocardiogram (ECG) with QRS morphology sensitivity and specificity exceeding 90%. 

**Arrhythmia Termination:** Tiered therapy includes _Antitachycardia Pacing (ATP)_ and _Defibrillation_ . ATP terminates reentrant, slow VT (< 188 to 200 bpm) approximately 90% of the time by delivering rapid pacing pulses to interrupt the reentry circuit, conserving battery and avoiding shocks. If ATP fails or VF is detected, high-energy defibrillation shocks are delivered at max or incrementally increasing energy levels.`
    },
    {
      title: `D. Cardiac Resynchronization Therapy (CRT) Devices`,
      content: `CRT devices are indicated in select patients with advanced heart failure, severe systolic dysfunction, a sinus rhythm, and a prolonged QRS complex (> 120 ms) despite optimal medical therapy. Conduction defects (most commonly Left Bundle Branch Block [LBBB]) occur in 25% to 40% of systolic heart failure patients, leading to intraventricular dyssynchrony where the left ventricular (LV) septal wall depolarizes and contracts significantly earlier than the lateral wall, causing highly inefficient systolic ejection and reduced diastolic filling. 

CRT restores synchronous mechanical contraction via biventricular pacing, utilizing a standard right ventricular (RV) lead and an LV lead placed adjacent to the lateral wall via the coronary sinus. This significantly improves hemodynamic parameters: systolic blood pressure, stroke volume, cardiac output, and the max rate of rise of LV pressure ( **_dP/dt_** ). Crucially, unlike positive inotropic medications, CRT enhances performance while _reducing_ myocardial metabolic demand. Over time, reverse ventricular remodeling improves mitral regurgitation and NYHA functional class. 

**Anesthesia Board Exam Prep: Advanced CIED Management** 

Standard criteria for implantation include an LVEF < 35%, QRS > 120 ms, and NYHA class III or IV symptoms. Approximately 30% of patients meet criteria but are "non-responders"; risk factors for failure include ischemic cardiomyopathy, sustained VT, severe mitral regurgitation, and a dilated LV cavity. 

**Perioperative Pearl:** CRT patients must always be considered pacemaker-dependent, as loss of biventricular pacing induces immediate mechanical dyssynchrony and rapid hemodynamic deterioration.`
    },
    {
      title: `III. Preoperative Assessment & Information Transfer`,
      content: `The cornerstone of safe care is timely multidisciplinary communication between the anesthesia provider and the managing CIED team (cardiologist, electrophysiologist, or specialized nurse practitioner). Industry-employed representatives should not independently dictate the final perioperative care plan. 

Routine preoperative interrogation is unnecessary unless there has been an acute change in clinical presentation (e.g., palpitations, chest pain, dyspnea, or a recent shock). Otherwise, formal interrogation reports must be available according to strict timelines: 

- **Permanent Pacemakers:** Interrogation within the last **12 months** . 

- 

- **ICD and CRT Devices:** Interrogation within the last **6 months** . 

- 

The shorter timeline for ICD/CRT devices reflects the severe cardiovascular comorbidities and lower ejection fractions of these populations, making them highly susceptible to clinical decompensation that negatively impacts CIED function. 

**Battery Longevity:** A remaining battery life of **> 3 months** is required for elective procedures. Anesthetic agents and surgical stressors (e.g., opioids, beta-blockers, and calcium channel blockers) suppress the SA and AV nodes, expanding pacing requirements beyond baseline. If battery life is compromised, a generator replacement must be scheduled before the elective operation.`
    },
    {
      title: `IV. Electromagnetic Interference (EMI)`,
      content: `EMI within the operating suite can inhibit pacing, trigger inappropriate ventricular pacing from atrial oversensing, induce undesired asynchronous pacing (noise reversion mode), damage the lead-tissue interface, destroy the pulse generator circuitry, or cause a catastrophic electrical reset. This risk is highest if the EMI source is within 15 cm (6 inches) of the generator. 

**Monopolar vs. Bipolar Electrocautery:** Monopolar electrocautery is the primary source of perioperative EMI because the electrical current travels from the probe through the patient's body to a large grounding pad. Bipolar electrocautery is restricted to the two poles at the tip of the instrument, creating a tiny localized current field that presents no EMI risk to a CIED unless applied directly to the device. Bipolar units are typically limited to neurosurgery, ophthalmology, and head/neck surgeries. 

**Oversensing and Pacing Inhibition:** If a pacemaker oversenses monopolar electrocautery artifacts, it misinterprets the electrical noise as intrinsic cardiac depolarization. It will inhibit its pacing output, which can cause severe bradycardia or asystole in a pacemaker-dependent patient. Conversely, if an ICD oversenses EMI, it interprets the noise as a malignant ventricular tachyarrhythmia, delivering inappropriate shocks or ATP. 

**Anesthesia Board Exam Prep: Advanced CIED Management** 

**The Umbilicus Rule:** For operations conducted completely **below the umbilicus** , the patient can proceed safely without routine device reprogramming or magnet application, provided that the monopolar grounding pad is also placed entirely below the umbilicus. If current travels above the umbilicus, or if the procedure is above the umbilicus and involves EMI, device modification or magnet placement is required.`
    },
    {
      title: `V. Magnet Application Dynamics`,
      content: `Magnets were originally designed to check battery status, not for perioperative management, but they provide a simple tool to modify device behavior. The response depends entirely on the device type and manufacturer:`
    },
    {
      title: `A. Permanent Pacemakers`,
      content: `Placing a magnet over a standard pacemaker forces it into an **asynchronous pacing mode** (e.g., DOO), ignoring intrinsic activity and external electrical noise. Once the magnet is removed, the device immediately returns to its programmed parameters. The exact pacing rate is binary or gradual depending on the manufacturer: 

- **Medtronic Pacemakers:** Switches to asynchronous pacing. Paces at **85 bpm** if the battery is normal, and drops in a binary fashion to **65 bpm** if the battery has reached its elective replacement interval (ERI). 

- **Abbott (St. Jude) Pacemakers:** If the magnet response is programmed ON, the device paces asynchronously at **100 bpm** with a normal battery, or at **85 bpm** at ERI. This rate reduction is gradual rather than binary. 

_Clinical Warning:_ Fixed magnet rates (~90–100 bpm) may cause competitive rhythms if surgical stimulation increases the patient's intrinsic sinus rate. Pacing pulses hitting the myocardium during the vulnerable refractory period can trigger lethal ventricular tachyarrhythmias.`
    },
    {
      title: `B. Implantable Cardioverter-Defibrillators (ICDs)`,
      content: `Placing a magnet over an ICD **suspends tachyarrhythmia detection** (disabling shocks and ATP). Crucially, **a magnet does NOT alter the pacing mode of the underlying pacemaker in an ICD** . It will not force asynchronous pacing. Therefore, if a patient is both pacemaker-dependent and has an ICD, a magnet will protect against inappropriate shocks but will _not_ prevent EMI-induced pacing inhibition. This patient population **MUST be reprogrammed via a programmer** to an asynchronous pacing mode (e.g., DOO) and have tachytherapy disabled. 

**Reprogramming vs. Magnet Application:** Reprogramming is preferred for non-supine positions (e.g., prone or lateral positions) where a magnet can easily slip out of position. However, reprogramming introduces human error risk: failure to re-enable tachyarrhythmia therapy postoperatively carries catastrophic consequences.`
    },
    {
      title: `C. Electrical Reset Mode`,
      content: `A massive surge of EMI or therapeutic ionizing radiation directly hitting the generator can induce an electrical safety reset due to hardware/software failure. Magnet application or preoperative programming cannot prevent an electrical reset. When a reset occurs, devices typically default to a safe **Ventricular Demand Pacing (VVI) mode at 65 to 70 bpm** with varied VT detection cutoffs. This condition requires immediate postoperative electrophysiology consultation. 

**Anesthesia Board Exam Prep: Advanced CIED Management**`
    },
    {
      title: `Overview 16`,
      content: `## **VI. Preserved Chapter Reference Tables**`
    },
    {
      title: `Table 34.3: Preoperative Interrogation & Identification Checklist`,
      content: `|**Perioperative**|**Clinical Comments & Standards**|
|---|---|
|**Parameter**||
|**Last CIED**<br>**Interrogation**|Valid for 12 months for standard pacemakers; valid for 6 months for ICD and CRT<br>devices.|
|**Type of Device**|Identify if Pacemaker, ICD, CRT, or Loop Recorder via patient card, history, notes, or<br>CXR.|
|**Manufacturer**|Medtronic, Abbott (St. Jude), Boston Scientific, or Biotronik. Identify via CXR<br>alphanumeric codes.|
|**Battery Life**|Suggested longevity of > 3 months to manage increased perioperative pacing<br>burdens.|
|**Pacemaker**<br>**Dependence**|Determine via history of asystole/syncope, AV nodal ablation history, or stepwise<br>downward rate checks.|
|**Magnet Response**|Differs extensively by manufacturer and remaining battery life. Confirm if programmed<br>ON or OFF.|
|**Pacing Threshold**|Capture threshold should be verified and set several times higher than baseline for<br>safety.|

**Table 34.4: Emergency Surgery Component Identification** 

|**Important Information**<br>**to Obtain**|**Validated Modalities for Rapid Information Retrieval**|
|---|---|
|**Type of Device**|CIED wallet card, electronic medical records, recent chest radiographs, manufacturer<br>1-800 lines, or programmer interrogation.|
|**Pacemaker**<br>**Dependence**|Review medical record chart, examine a surface 12-lead ECG/rhythm strip for<br>predominant pacing spikes, or utilize a device programmer.|
|**Risk of EMI**|Direct verbal communication with the operating surgeon regarding tool choices<br>(monopolar vs. bipolar) and anatomical site.|
|**Magnet Function**|Review past medical records or interrogate directly via a dedicated manufacturer<br>device programmer.|

**Anesthesia Board Exam Prep: Advanced CIED Management** 

**Table 34.5: Manufacturer Emergency Contact Routing** 

|**CIED Manufacturer**|**Emergency Technical Support Phone Line**|
|---|---|
|**Medtronic**|1-800-633-8766 (General Support) / 800-505-4636 (Pacers) / 800-723-4636 (ICDs)|
|**St. Jude Medical / Abbott**|1-800-722-3423 / 800-227-3422 (Tech Support)|
|**Boston Scientific**|1-800-227-3422|
|**Biotronik**|1-800-547-0394 / 800-284-6689|`
    },
    {
      title: `VII. Emergency Surgery "Blind Magnet" Protocol`,
      content: `When a patient presents for emergent surgery above the umbilicus with anticipated monopolar EMI and no medical records, a diagnostic magnet application can be safely performed under active monitor visualization: 

   - Place a magnet firmly over the pulse generator while observing continuous telemetry. 

1. 

2. **If an abrupt change in heart rate occurs:** The device is a pacemaker. The specific pacing rate helps identify the manufacturer: 

   - _Medtronic:_ 85 bpm 

   - 

   - _Biotronik:_ 90 bpm 

   - 

   - _Abbott / St. Jude:_ 98.6 or 100 bpm 

   - _Boston Scientific:_ 100 bpm 

   - 

3. **If the pacing rate does NOT change:** The device is an ICD. The magnet will temporarily suspend shock therapy, but will not provide asynchronous pacing protection. To confirm the magnet is aligned over an ICD, listen for manufacturer-specific acoustic alerts: 

   - _Boston Scientific:_ Continuous, cyclical emitting beeping tone. 

   - 

- _Medtronic:_ 10- to 15-second continuous monotone. 

- 

- _Abbott / St. Jude (Gallant series only):_ 4-second continuous monotone. 

During emergency cases with an ICD and no programmer, place external defibrillator pads immediately, apply the magnet to suspend shocks, and instruct the surgeon to use short, discrete bursts of monopolar cautery (< 5 seconds) to avoid inducing pacing quiescence from oversensing.`
    },
    {
      title: `VIII. Management in Specific Clinical Settings`,
      content: `- **Cardioversion/Defibrillation:** Modern bipolar leads minimize risk, but external current can cause loss of capture or reset. Place cardioversion pads in an _anterior-posterior orientation_ , ensuring the anterior pad is **> 8 cm away** from the CIED generator. If a magnet is active on an ICD, remove it to allow internal therapies if external cardioversion fails, or proceed immediately with external rescue shocks. 

**Anesthesia Board Exam Prep: Advanced CIED Management** 

- **Radiofrequency Ablation (RFA):** RFA near a CIED poses risks for electrical reset, oversensing, and undersensing. Keep the electrical path (ablation tip to return pad) completely away from the generator and leads; avoid direct catheter-to-device contact. 

- **Extracorporeal Shockwave Lithotripsy:** Maintain a minimum distance of **15 cm** between the focal shockwave treatment area and the CIED generator. Abdominally implanted pulse generators represent an absolute contraindication to lithotripsy. 

- **Therapeutic Radiation:** Highly sensitive to ionizing radiation, which can permanently destroy generator circuitry. Keep total cumulative radiation doses **< 5 Gy** , shield the device, and position it completely outside the field. Structural surgical relocation may be required pre-treatment. Diagnostic radiation (X-rays, CT) does not significantly impact CIEDs. 

- **Electroconvulsive Therapy (ECT):** Brief electrical currents (< 5 seconds) rarely induce clinically significant hemodynamically relevant oversensing. However, repetitive or prolonged ECT requires programming the device to an asynchronous pacing mode and disabling tachytherapies. Always maintain a magnet at the bedside to manage sudden myopotential oversensing or sinus tachycardia. 

- **Endoscopy:** Most routine endoscopies do not require cautery. If monopolar electrocautery is required for polypectomy or hemostasis, standard above/below umbilicus guidelines apply to protect against inappropriate ICD firing.`
    },
    {
      title: `Magnetic Resonance Imaging (MRI):`,
      content: `- 

- _MR-Conditional Devices:_ Interrogate pre-MRI, program into a dedicated "MRI Mode" (asynchronous pacing for dependent patients, non-pacing for non-dependent, suspension of tachytherapies), perform the scan, and promptly re-interrogate post-MRI to restore baseline functions. 

- _MR-Nonconditional Devices:_ Can safely undergo MRI if no fractured, epicardial, or abandoned leads exist, and the scan represents the best diagnostic tool. Program to asynchronous modes (if dependent) or nonpacing/inhibiting modes (ODO/DDI if non-dependent) under strict institutional protocols with an MR/CIED physician present, continuous ECG/SpO2, and an external defibrillator parked outside Zone 4.`
    },
    {
      title: `Overview 21`,
      content: `## **IX. Emerging Technologies**`
    },
    {
      title: `A. Leadless Pacemakers`,
      content: `Developed to completely eliminate lead-related long-term complications (fracture, venous thrombosis, and infection), these miniature units are deployed transvenously via the femoral vein directly into the right ventricular endocardium. 

- **Medtronic Micra:** Single-chamber RV device supporting VVIR, VVI, VOO, OVO, and OFF modes. Employs an internal accelerometer to achieve VVIR rate responsiveness. The advanced _Micra AV_ utilizes mechanical accelerometer feedback to sense intrinsic atrial mechanical contractions, allowing physiologic **VDD pacing** . **CRITICAL CRITICAL NOTE: Medtronic leadless pacemakers DO NOT respond to magnets.** If asynchronous pacing (VOO) is mandatory for surgery, a formal Medtronic programmer must be wheeled into the room to manually reprogram the device. 

- **Abbott AVEIR VR:** Single-chamber leadless device utilizing a temperature-based rate-response sensor. It cannot provide VDD pacing. **Unlike Medtronic, the AVEIR VR DOES respond to a magnet.** Direct precordial magnet placement over the heart induces VOO pacing at 100 bpm for exactly 5 beats, followed by fixed pacing at its 

**Anesthesia Board Exam Prep: Advanced CIED Management** 

programmed magnet rate (which declines gradually with battery depletion). Anesthesiologists must confirm the magnet feature is programmed ON preoperatively.`
    },
    {
      title: `B. Subcutaneous ICDs (S-ICDs)`,
      content: `Manufactured by Boston Scientific, the S-ICD is an entirely extrathoracic system consisting of a pulse generator implanted subcutaneously between the anterior and midaxillary lines at the 6th intercostal space, and a single subcutaneous lead tunneled medially to the xiphoid and superiorly along the left parasternal border. It is designed for patients at high risk for malignant ventricular arrhythmias who have no baseline requirement for bradycardia pacing or ATP. 

Following a high-energy defibrillatory shock, the S-ICD can provide temporary demand pacing at 50 pulses/min for up to 30 seconds if profound post-shock bradycardia ensues. 

**Magnet Dynamics:** Placing a magnet over the S-ICD generator disables tachyarrhythmia therapy. It confirms successful positioning by emitting an acoustic beeping sound for 60 seconds (therapy remains suspended even after the sound stops, provided the magnet stays in place). Due to its lateral position, a magnet can easily dislodge during surgery; thus, formal programming to turn off tachytherapy is preferred. 

**Modular Cardiac Rhythm Management:** Future paradigms are trialing the integration of the Boston Scientific _Empower LP_ (a leadless pacemaker) with the S-ICD. They communicate via wireless signals, enabling the subcutaneous system to trigger wireless ATP pulses through the leadless pacemaker to terminate stable VT without delivering painful shocks. 

**Anesthesia Board Exam Prep: Advanced CIED Management**`
    },
    {
      title: `ABA Board-Style Exam Questions & Detailed Rationales`,
      content: `**1. A 74-year-old male with a history of severe ischemic cardiomyopathy presents for an urgent open cholecystectomy. Review of his records reveals the presence of a Boston Scientific Subcutaneous Implantable Cardioverter-Defibrillator (S-ICD) placed two years ago. Monopolar electrocautery will be used extensively near the epigastrium. Which of the following statements regarding the intraoperative use of a magnet on this device is CORRECT?** 

- A. Applying a magnet will switch the underlying pacemaker to DOO mode at 100 beats per minute while maintaining shock therapy. 

- B. Applying a magnet will turn off all antiarrhythmic features, confirmed by an acoustic beeping sound that emits indefinitely as long as the magnet remains in position. 

- C. Applying a magnet will suspend tachyarrhythmia detection and shock delivery, but it will emit an acoustic beeping sound that ceases after 60 seconds despite therapy remaining suspended. 

- D. Applying a magnet has no clinical effect because subcutaneous ICD systems do not possess internal magnetic reed switches.`
    },
    {
      title: `Correct Answer: C`,
      content: `**Comprehensive Rationale:** According to the text, the Boston Scientific S-ICD responds to a magnet by suspending its antiarrhythmic features (tachyarrhythmia detection and shock delivery). To ensure the magnet is correctly positioned over the generator (implanted at the midaxillary line), the device emits an acoustic beeping tone. This beeping tone stops after 60 seconds, but shock therapy remains suspended as long as the magnet is held fixed in that exact position. Option A is incorrect because the S-ICD does not provide long-term asynchronous pacing, and a magnet disables shocks, not the reverse. Option B is incorrect because the beep stops after 60 seconds. Option D is incorrect because it does respond to a magnet. 

**Anesthesia Board Exam Prep: Advanced CIED Management** 

**2. A 68-year-old female is scheduled for a major spinal fusion in the prone position. Preoperative evaluation identifies a Medtronic permanent pacemaker programmed to DDDR mode. The patient is confirmed to be completely pacemaker-dependent. The surgical team plans to use monopolar electrocautery extensively within 10 cm of the pulse generator. What is the most appropriate perioperative management strategy?** 

- A. Place a standard clinical magnet over the pulse generator in the preoperative holding area and secure it with tape prior to rolling the patient prone. 

- B. Proceed to the operating room without modifications, ensuring that the monopolar electrosurgical grounding pad is positioned below the umbilicus. 

- C. Formally reprogram the device to an asynchronous pacing mode (e.g., DOO) and disable the minute ventilation rate responsiveness feature preoperatively. 

- D. Program the device to DDIR mode and leave the minute ventilation rate responsive sensor on maximum sensitivity to accommodate surgical blood loss.`
    },
    {
      title: `Correct Answer: C`,
      content: `**Comprehensive Rationale:** The chapter specifies that for a pacemaker-dependent patient undergoing surgery with a high risk of close-proximity EMI (< 15 cm from the generator), the device should be formally reprogrammed to an asynchronous mode (DOO) to prevent oversensing and subsequent pacing quiescence/hemodynamic collapse. Additionally, rate-responsive features must be turned "off" if they rely on minute ventilation (thoracic bioimpedance) sensors, because mechanical ventilation variations or electrocautery will falsely drive up pacing rates. Securing a magnet in a non-supine position (Option A) like the prone position is explicitly discouraged because magnets can easily become displaced. Option B is incorrect because the surgical site is superior to the umbilicus and within 10 cm of the device, creating a high risk of EMI. 

**Anesthesia Board Exam Prep: Advanced CIED Management** 

**3. A patient with severe congestive heart failure and an active Cardiac Resynchronization Therapy Defibrillator (CRT-D) device is undergoing an emergency emergency operation above the umbilicus. No device programmer is accessible. A magnet is firmly applied over the pulse generator. What is the physiological impact on this patient's cardiac rhythm and resynchronization status during prolonged monopolar electrocautery?** 

- A. The magnet forces the device into asynchronous biventricular pacing, protecting the patient from EMI-induced dyssynchrony. 

- B. The magnet successfully suspends tachyarrhythmia therapies, but it does NOT render the underlying pacemaker asynchronous; prolonged monopolar electrocautery will cause oversensing, pacing inhibition, and immediate hemodynamic deterioration due to a loss of ventricular synchrony. 

- C. The device will experience an immediate electrical reset to ODO mode, entirely ceasing all electrical outputs to prevent myocardial tissue heating. 

- D. The magnet triggers a binary drop in the pacing rate to 65 beats per minute, which optimizes stroke volume through prolonged diastolic filling times.`
    },
    {
      title: `Correct Answer: B`,
      content: `**Comprehensive Rationale:** The text highlights that almost all CRT devices function as ICDs. Applying a magnet to an ICD deactivates tachyarrhythmia therapies but does _not_ make the underlying pacemaker asynchronous. While brief bursts of electrocautery might be tolerated, prolonged use of monopolar electrocautery will lead to oversensing, pacemaker inhibition, and severe hemodynamic deterioration because CRT patients rely on 100% constant biventricular pacing to maintain RV-LV and LV-LV synchrony. Option A is factually incorrect because magnets do not force ICDs into asynchronous modes. Option C is false; resets revert to VVI at 65-70 bpm. Option D describes a Medtronic pacemaker ERI battery status, not a CRT magnet rule. 

**Anesthesia Board Exam Prep: Advanced CIED Management** 

**4. During an emergency midnight laparotomy on an unconscious patient, a chest radiograph reveals a leadless pacemaker deployed within the right ventricle. Telemetry demonstrates predominant ventricular pacing, and the patient is deemed pacemaker-dependent. Monopolar electrocautery is about to be used above the** 

**umbilicus. A clinician suggests placing a magnet over the patient's heart. Which of the following facts is CRITICAL to realize?** 

- A. If it is an Abbott AVEIR VR, it will ignore the magnet completely; a programmer must be used. 

- B. If it is a Medtronic Micra or Micra AV, it will NOT respond to a magnet; manual reprogramming via a standard Medtronic programmer is mandatory to establish asynchronous VOO pacing. 

- C. All leadless pacemakers enter safe asynchronous VOO pacing at 90 beats per minute upon precordial magnet application. 

- D. Magnet application will trigger the leadless device to emit a continuous monotone sound for 15 seconds, indicating an electrical reset.`
    },
    {
      title: `Correct Answer: B`,
      content: `**Comprehensive Rationale:** As detailed under emerging technologies, neither of the Medtronic leadless pacemakers (Micra or Micra AV) will respond to a magnet. If VOO pacing is indicated intraoperatively to prevent EMI-induced oversensing, a standard Medtronic programmer must be obtained to manually change the pacing mode. Conversely, the Abbott AVEIR VR _does_ respond to a magnet by initiating VOO pacing at 100 bpm for 5 beats before dropping to its magnet rate. Option A is inverted. Option C is incorrect because Medtronic does not respond. Option D describes an ICD acoustic alert rule, not a leadless pacemaker mechanic. 

**5. A patient with an implantable cardioverter-defibrillator (ICD) presents for emergency trauma surgery. No medical records or device cards are present. The anesthesia provider places a magnet over the generator and listens closely. A 12-second continuous monotone acoustic alert is elicited. Which manufacturer designed this device, and what does this tone confirm?** 

- A. Boston Scientific; confirms that bradycardia pacing has been switched to VOO mode. 

- B. Medtronic; confirms that tachyarrhythmia detection and shock therapies have been successfully suspended. 

- C. Abbott-St. Jude; confirms that the device has undergone an immediate hardware electrical reset to VVI mode. 

- D. Biotronik; confirms that the battery has reached its elective replacement interval.`
    },
    {
      title: `Correct Answer: B`,
      content: `**Comprehensive Rationale:** The text states that during the emergency protocol, if a magnet applied over a device does not change the pacing rate, it is likely an ICD. If the magnet application induces a 10- to 15-second monotone sound, this confirms it is a Medtronic ICD and that tachyarrhythmia therapy has been successfully suspended. Boston Scientific ICDs emit a continual cyclical beeping tone, and Abbott St. Jude Gallant series devices emit a 4-second monotone. These tones explicitly signify the suspension of shock therapy. 

**Anesthesia Board Exam Prep: Advanced CIED Management** 

**6. An elite 58-year-old marathon runner with a history of complete heart block has a permanent pacemaker. Preoperatively, a clinician applies a magnet over the device to confirm its function. The device immediately switches to asynchronous pacing at a steady rate of 65 beats per minute. What is the correct interpretation of this finding?** 

- A. The device is an Abbott pacemaker with normal battery function. 

- B. The device is a Medtronic pacemaker that has reached its battery elective replacement interval (ERI) and should prompt electrophysiology consultation for generator replacement. 

- C. The device has experienced an electrical reset due to background environmental radiation. 

- D. The device is programmed to its standard physiological sleep mode.`
    },
    {
      title: `Correct Answer: B`,
      content: `**Comprehensive Rationale:** The text outlines that when a magnet is applied to a Medtronic pacemaker with a normal battery life, it will pace asynchronously at 85 bpm. However, if the battery life has entered its elective replacement interval (ERI), the pacing rate drops in a binary fashion to 65 bpm. This requires contacting the patient's electrophysiologist prior to an elective surgical procedure to determine if the generator needs to be replaced. Abbott devices pace at 100 bpm (normal) or 85 bpm (ERI).`
    },
    {
      title: `Overview 31`,
      content: `#### **7. A patient with a permanent dual-chamber pacemaker is undergoing an emergency orthopedic procedure below the umbilicus. The surgeon intends to use a monopolar electrocautery unit. The grounding pad is affixed firmly to the patient's left calf. What is the most appropriate perioperative device management?** 

- A. Reprogram the pacemaker to DOO mode immediately via an emergent EP consult. 

- B. No routine reprogramming or magnet application is necessary; have a magnet available at the bedside in case the surgical plan changes. 

- C. Apply a magnet immediately over the generator to trigger automatic mode switching. 

- D. Request the surgeon to switch exclusively to pure blend electrocautery applied in continuous 10-second bursts.`
    },
    {
      title: `Correct Answer: B`,
      content: `**Comprehensive Rationale:** The HRS/ASA Expert Consensus Statement explicitly indicates that due to the minimal likelihood of electromagnetic interference affecting a CIED when surgery is performed completely below the umbilicus, the patient can proceed to surgery with no magnet application or proactive reprogramming. This is contingent on the electrocautery grounding pad also being placed below the umbilicus (the calf fits this requirement). A magnet must simply be present in the room for safety. Continuous 10-second bursts (Option D) are strictly contraindicated; the text recommends bursts < 4 seconds separated by at least 2 seconds if EMI is a concern. 

**Anesthesia Board Exam Prep: Advanced CIED Management**`
    }
  ]
};
