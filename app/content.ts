import catalog from './project-catalog.json';
export const applications = catalog.applications;
export const engineering = catalog.engineering;

/** Edit this file to update the portfolio. See CONTENT_GUIDE.md. */
export const profile = {
  name: 'Sunil',
  intro: 'A place for my work, ideas, and everything I discover along the way.',
  bio: 'I build applications across AI, learning, finance, and media production, and explore the systems underneath them. This is a collection of working apps, local prototypes, and engineering experiments.',
  links: [{ label: 'GitHub · sunilnjc', url: 'https://github.com/sunilnjc' }] as { label: string; url: string }[],
};
export const projects = [
  { id: 'camera-copilot', number: '01', title: 'AI Camera Copilot', category: 'COMPUTER VISION', status: 'Recorded-video prototype',
    description: 'Turning recorded footage into useful camera guidance. A local prototype for detecting subjects, tracking motion, and reviewing composition.',
    tags: ['Python', 'Computer vision', 'Local processing'],
    detail: 'Processes recorded video and produces an annotated MP4 with a structured analysis report. Composition checks cover frame edges, subject scale, loss of tracking, and motion-based lead room. Operator mode reduces the output to a single framing cue.',
    limitation: 'Recorded-video phases 0–2 are documented as complete. Live HDMI capture remains deferred.',
    facts: ['Subject tracking', 'Composition guidance', 'Annotated video + JSON'],
  },
  { id: 'account-ledger', number: '02', title: 'Account Ledger Core', category: 'SYSTEMS & MODELLING', status: 'Reference implementation',
    description: 'An account ledger built around an immutable journal. Exploring how balances, authorizations, and daily close can be reconstructed from events.',
    tags: ['Java 21', 'Event modelling', 'Ledger design'],
    detail: 'Retains every input attempt, appends accepted postings, and rebuilds authorization and daily-close projections. Effective dates and knowledge dates are separate, so historical balances can be examined from different points in time.',
    limitation: 'An in-memory exercise. Persistence, concurrency, and automatic authorization expiry are outside its implemented scope.',
    facts: ['Immutable journal', 'Rebuildable projections', 'Bitemporal queries'],
  },
];
export const milestones = [
  { label: 'PROTOTYPE', title: 'From subject detection to framing guidance', detail: 'AI Camera Copilot documents completion of its recorded-video prototype phases, including composition guidance.', project: '#camera-copilot' },
  { label: 'IMPLEMENTATION', title: 'A replayable account ledger', detail: 'The ledger project documents an immutable journal, daily-close calculations, and a normal suite of eight passing tests.', project: '#account-ledger' },
];
export const discoveries = [
  { id: 'one-cue', category: 'CAMERA COPILOT · PROJECT NOTE', title: 'One clear cue can be more useful than every diagnostic.', text: 'The camera prototype separates detailed analysis from operator guidance. The report preserves the diagnostics, while operator mode presents one stabilized instruction: hold, pan, or reacquire. It is a useful design distinction between explaining a system and helping someone act.', project: '#camera-copilot' },
  { id: 'two-dates', category: 'ACCOUNT LEDGER · PROJECT NOTE', title: 'When something happened and when you learned it are different.', text: 'The ledger model separates an event’s effective date from its knowledge date. That makes it possible to ask what a balance was for an earlier day using information available at a later point. The journal stays intact while the historical view can change.', project: '#account-ledger' },
];
