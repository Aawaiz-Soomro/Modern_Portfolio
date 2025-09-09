export type Experience = {
  role: string;
  org: string;
  date: string;
  desc: string;
};

export const EXPERIENCES: Experience[] = [
  {
    role: "Graduate Research Assistant",
    org: "Contextual Computing Group @ Georgia Tech",
    date: "Aug 2024 – Present",
    desc: `Built and deployed an autonomous underwater robot for dolphin research, with a real-time DSP pipeline for whistle/click classification. Programmed ESP32 firmware for closed-loop thruster PID control, developed an Android telemetry/control app, and created a web dashboard for post-mission analysis. Also designed a submersible bone-conduction headset and worked on a wireless canine chew sensor for research trials.`
  },
  {
    role: "Graduate Teaching Assistant",
    org: "Georgia Institute of Technology",
    date: "May 2025 – Present",
    desc: `Served as teaching assistant for CS3651 (Prototyping Intelligent Devices) and CS7470 (Mobile & Ubiquitous Computing). For CS3651, supported lectures and labs on microcontroller programming, circuit design, and rapid prototyping, co-developed lab guides and assignments, and mentored teams on hardware/software integration and debugging. For CS7470, assisted with a graduate HCI course on ubiquitous computing, co-designed assignments, and mentored project teams on IoT systems, wearables, and mobile prototypes.`
  },
  {
    role: "Technical Support Agent (Student Lead)",
    org: "Georgia Tech Office of Information Technology",
    date: "May 2024 – Jan 2025",
    desc: `Led a team of nine student assistants providing campus IT support. Delivered multi-channel support (in-person, phone, remote), managed incidents, and supported inventory and documentation. Contributed to IT implementations and program improvements.`
  },
];
