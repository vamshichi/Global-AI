export type AgendaSession = {
  title: string;
  subtitle?: string;
};

export type AgendaBlock = {
  id: string;
  time: string;
  track: string;
  heading: string;
  sessions: AgendaSession[];
};

export const agendaBlocks: AgendaBlock[] = [
  {
    id: "morning-plenary",
    time: "09:00",
    track: "Morning Plenary",
    heading: "The Great AI Accountability Shift",
    sessions: [
      { title: "The Great AI Accountability Shift", subtitle: "Opening Keynote, MeitY / IndiaAI Mission" },
      { title: "The 13 November Question", subtitle: "DPDP penalties vs. a Data Protection Board with no Chair" },
      { title: "Regulation Without One AI Act", subtitle: "RBI, SEBI, IRDAI, TRAI: one stage, one question" },
      { title: "Stage Launch", subtitle: "India AI Governance & Security Readiness Index 2026" },
      { title: "The Global Governance Problem", subtitle: "What happens when a GCC writes its parent's AI policy?" },
    ],
  },
  {
    id: "regulate-assure",
    time: "11:00",
    track: "Regulate & Assure",
    heading: "Regulate & Assure",
    sessions: [
      { title: "DPDP × AI Collision" },
      { title: "Model Risk as Enterprise Risk" },
      { title: "The Hallucination Liability Question" },
      { title: "Synthetic Media Compliance" },
      { title: "ISO/IEC 42001" },
      { title: "Building the Governance Function" },
    ],
  },
  {
    id: "operate-secure",
    time: "13:30",
    track: "Operate & Secure",
    heading: "Operate & Secure",
    sessions: [
      { title: "When the Machine Makes the Decision" },
      { title: "Kill Switches & Human Oversight" },
      { title: "The AI Attack Surface" },
      { title: "Deepfakes: The ₹1,000 Crore Question" },
      { title: "Live Red-Team Arena" },
    ],
  },
  {
    id: "sector-deep-dives",
    time: "15:15",
    track: "Sector Deep-Dives",
    heading: "Sector Deep-Dives",
    sessions: [
      { title: "The Algorithm Behind the Money", subtitle: "BFSI" },
      { title: "When AI Touches a Patient", subtitle: "Healthcare" },
    ],
  },
  {
    id: "boardroom-simulation",
    time: "16:15",
    track: "Boardroom Simulation",
    heading: "Your AI caused a ₹100 crore loss. What happens in the first 60 minutes?",
    sessions: [
      { title: "Your AI caused a ₹100 crore loss", subtitle: "What happens in the first 60 minutes?" },
      { title: "\u201CWhat I Would Do Differently\u201D", subtitle: "A no-slides practitioner panel" },
    ],
  },
  {
    id: "gala",
    time: "19:00",
    track: "Gala Dinner & The AI GRCS 50",
    heading: "Gala Dinner & The AI GRCS 50",
    sessions: [
      { title: "Gala Dinner & The AI GRCS 50", subtitle: "Where the deals get made — and 50 leaders shaping trusted AI get recognised." },
    ],
  },
];
