'use client';

import { ArrowUpRight, ArrowUp, BookOpen, BriefcaseBusiness, FlaskConical, Wallet, ChartNoAxesCombined, Mic, Orbit, ScanLine, Thermometer, Clapperboard, Radio, Layers, LockKeyhole, Code2 } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { profile, applications, engineering } from './content';
import {caseStudies} from './case-studies';

const icons = [BriefcaseBusiness, BookOpen, FlaskConical, Wallet, ChartNoAxesCombined, Mic, Orbit, ChartNoAxesCombined, Orbit, Wallet, ScanLine, Thermometer, Clapperboard, Radio, Layers];
const liveFirst = applications.filter(a => !['ritestack','job-search-agent','bulls-2028','budget-tracker','whisper-journal','camera-copilot','worship-director'].includes(a.id)).sort((a,b) => Number(b.appAccess === 'public') - Number(a.appAccess === 'public'));
type Application = (typeof applications)[number];

function ProjectLinks({app}: {app: Application}) {
  return <>
    {app.appUrl && <a className={`action ${app.appAccess === 'public' ? 'action-primary' : 'action-private'}`} href={app.appUrl} target="_blank" rel="noopener noreferrer">{app.appAccess === 'public' ? <>Open app <ArrowUpRight size={15}/></> : <><LockKeyhole size={13}/> Private preview</>}</a>}
    {app.repository && <a className="action action-source" href={app.repository} target="_blank" rel="noopener noreferrer"><Code2 size={15}/> GitHub</a>}
  </>;
}

export default function Home() {
  return <>
    <a className="skip-link" href="#main">Skip to projects</a>
    <header className="site-header" id="top"><a className="wordmark" href="#top">sunil<span>●</span></a><nav aria-label="Main navigation"><a href="#projects">Work</a><a href="#experience">Experience</a><a href="#resume">Resume</a><a href="https://github.com/sunilnjc" target="_blank" rel="noopener noreferrer"><Code2 size={16}/> GitHub <ArrowUpRight size={14}/></a></nav></header>
    <main className="wrap" id="main">
      <section className="intro portfolio-intro" aria-labelledby="intro-heading"><div><p className="eyebrow">SUNILKUMAR KALABANDI · DUBAI, UAE</p><h1 id="intro-heading">Banking systems.<br/>Applied AI.<br/><span>Products in production.</span></h1><p className="intro-bio">Senior Software Engineer with 11+ years in banking, payments and trading. I build enterprise systems with Java and Spring Boot, and independent products with Python, Node.js and React.</p><div className="intro-links"><a className="action action-primary" href="#projects">Explore my work</a><a className="action" href="mailto:sunilkumar.kalabandi@gmail.com">Get in touch</a><a className="text-link" href="https://www.linkedin.com/in/sunilkumar-kalabandi" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div></div><aside className="experience-summary"><span className="eyebrow">ENGINEERING EXPERIENCE</span><strong>11+ years</strong><p>Banking, payments & enterprise integration</p><div>Java · Spring Boot · Distributed systems</div><div>Applied AI · Full-stack delivery</div></aside></section>
      <section id="experience" className="professional-section"><p className="eyebrow">PROFESSIONAL EXPERIENCE</p><h2>Engineering for enterprise scale</h2><div className="experience-grid"><article><span className="experience-metric">1.6M</span><h3>ENBD X customers · year-end 2025</h3><p>Developed Beneficiary V2 and contributed to Transfers services for Emirates NBD’s ENBD X platform, supporting retail banking across multiple countries.</p><a className="text-link" href="https://cdn.emiratesnbd.com/assets/pdf/strategic_report_2025.pdf" target="_blank" rel="noopener noreferrer">Platform customer count · 2025 report ↗</a></article><article><span className="experience-metric">300M+</span><h3>Records processed per month</h3><p>Architected and scaled CPR Explorer at Emirates NBD for banking analytics, with MongoDB pipelines, optimized queries and LLM integration through the bank’s governed LEAP AI gateway.</p></article><article><span className="experience-metric">20+</span><h3>Banking services migrated</h3><p>Led migration to OCI KSA across eight teams, including dependency mapping, environment readiness, reusable deployment automation and production rollout.</p></article><article><span className="experience-metric">SSO</span><h3>Enterprise identity integration</h3><p>Implemented Azure AD SAML-based single sign-on. Delivered banking APIs and integrations across payments, transfers, onboarding and trading systems.</p></article></div><p className="subtle">Emirates NBD via Bitech · ADSS via Halian · Arab Bank · Earlier roles at Fujitsu and Capgemini</p></section>
      <section id="projects" className="featured-section"><div className="section-heading"><div><p className="eyebrow">SELECTED WORK</p><h2>From problem to deployed product</h2></div><span>Three independent builds</span></div><div className="gallery">{caseStudies.map((p,i)=><article className="project-card featured-card" key={p.id}><div className="card-top"><span className="project-number">0{i+1}</span><span className="card-status">{p.status}</span></div><p className="eyebrow">{p.category}</p><h3>{p.title}</h3><p className="card-summary">{p.summary}</p><div className="tags">{p.stack.slice(0,4).map(t=><span key={t}>{t}</span>)}</div><div className="card-actions"><a className="action action-primary" href={`/projects/${p.id}`}>Read case study</a><a className="text-link" href={p.url} target="_blank" rel="noopener noreferrer">Live app ↗</a></div></article>)}</div></section>
      <section id="additional" className="additional-section"><div className="section-heading"><div><p className="eyebrow">MORE TO EXPLORE</p><h2>Applications & engineering experiments</h2></div></div>
      <section aria-label="Additional applications" className="gallery">
        {liveFirst.map(a => {
          const index = applications.findIndex(x=>x.id === a.id);
          const Icon = icons[index] ?? Code2;
          return <article className={`project-card ${a.appAccess === 'public' ? 'has-live-app' : ''}`} key={a.id} id={a.id}>
            <div className="card-top"><span className={`app-icon tone-${index%5}`}><Icon size={23} strokeWidth={1.8}/></span><span className={`card-status ${a.appAccess === 'public' ? 'live' : ''}`}>{a.appAccess === 'public' ? <><span/>Live app</> : a.appAccess === 'private' ? 'Private preview' : a.repository ? 'On GitHub' : 'Local build'}</span></div>
            <h2>{a.title}</h2><p className="card-summary">{a.headline}</p>
            <div className="card-actions"><ProjectLinks app={a}/>
              <Sheet><SheetTrigger className="details-button" aria-label={`Details about ${a.title}`}>Details</SheetTrigger><SheetContent className="project-panel"><SheetHeader><p className="eyebrow">{a.category}</p><SheetTitle>{a.title}</SheetTitle><SheetDescription>{a.description}</SheetDescription></SheetHeader><div className="panel-body"><span className="stage">{a.status}</span><h3>Current scope</h3><p>{a.scope}</p><div className="tags">{a.tags.map(t=><span key={t}>{t}</span>)}</div><div className="panel-links"><ProjectLinks app={a}/></div>{!a.repository && <p className="source-note">{a.source}.</p>}{a.appAccess === 'private' && <p className="source-note">Preview access is restricted. Sign in with an account that has access.</p>}</div></SheetContent></Sheet>
            </div>
          </article>;
        })}
      </section>
      </section>
      <section id="more" className="more-section" aria-label="More about the work"><Accordion>
        <AccordionItem value="engineering"><AccordionTrigger className="section-toggle"><span>More projects <span className="muted-count">{engineering.length}</span></span></AccordionTrigger><AccordionContent><div className="engineering-list">{engineering.map(e=><article key={e.id}><div><h3>{e.title}</h3><p>{e.description}</p></div>{e.repository ? <a href={e.repository} className="action action-source" target="_blank" rel="noopener noreferrer" aria-label={`${e.title} on GitHub`}><Code2 size={15}/><span>Code</span><ArrowUpRight size={14}/></a> : <span className="card-status">Local build</span>}</article>)}</div></AccordionContent></AccordionItem>
        <AccordionItem value="about"><AccordionTrigger className="section-toggle">About Sunil</AccordionTrigger><AccordionContent><p className="about-copy">I’m Sunilkumar Kalabandi, a Dubai-based engineer working across backend systems, enterprise delivery and applied AI. My core professional experience is in banking and payments; my independent projects also explore crypto, Web3 and learning products.</p></AccordionContent></AccordionItem>
      </Accordion></section>
      <section className="resume-section" id="resume"><div><p className="eyebrow">CONTINUE THE CONVERSATION</p><h2>Experience, in one page.</h2><p>Choose the resume relevant to your team.</p></div><div className="resume-actions"><a className="action" href="/resumes/Sunilkumar_Kalabandi_SSE.pdf" download>Senior Software Engineer · PDF ↓</a><a className="action" href="/resumes/Sunilkumar_kalabandi_FDE.pdf" download>Forward Deployed Engineer · PDF ↓</a></div></section>
    </main>
    <footer className="wrap"><span>© {new Date().getFullYear()} {profile.name}</span><a href="https://github.com/sunilnjc" target="_blank" rel="noopener noreferrer">Find me on GitHub <ArrowUpRight size={14}/></a><a href="#top" aria-label="Back to top"><ArrowUp size={17}/></a></footer>
  </>;
}
