'use client';

import { ArrowUpRight, ArrowUp, BookOpen, BriefcaseBusiness, FlaskConical, Wallet, ChartNoAxesCombined, Mic, Orbit, ScanLine, Thermometer, Clapperboard, Radio, Layers, LockKeyhole, Code2 } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { profile, milestones, discoveries, applications, engineering } from './content';

const icons = [BriefcaseBusiness, BookOpen, FlaskConical, Wallet, ChartNoAxesCombined, Mic, Orbit, ChartNoAxesCombined, Orbit, Wallet, ScanLine, Thermometer, Clapperboard, Radio, Layers];
const liveFirst = [...applications].sort((a,b) => Number(b.appAccess === 'public') - Number(a.appAccess === 'public'));
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
    <header className="site-header" id="top"><a className="wordmark" href="#top">sunil<span>●</span></a><nav aria-label="Main navigation"><a href="#projects">Work</a><a href="#more">More</a><a href="https://github.com/sunilnjc" target="_blank" rel="noopener noreferrer"><Code2 size={16}/> GitHub <ArrowUpRight size={14}/></a></nav></header>
    <main className="wrap" id="main">
      <section className="intro" aria-labelledby="intro-heading"><div><p className="eyebrow">SUNIL / PROJECT COLLECTION</p><h1 id="intro-heading">Things I’ve built<span>.</span></h1><p>Apps, prototypes, and experiments. Pick one to explore.</p></div><span className="collection-count">{applications.length} builds</span></section>
      <section id="projects" aria-label="Application gallery" className="gallery">
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
      <section id="more" className="more-section" aria-label="More about the work"><Accordion>
        <AccordionItem value="engineering"><AccordionTrigger className="section-toggle"><span>More projects <span className="muted-count">{engineering.length}</span></span></AccordionTrigger><AccordionContent><div className="engineering-list">{engineering.map(e=><article key={e.id}><div><h3>{e.title}</h3><p>{e.description}</p></div>{e.repository ? <a href={e.repository} className="action action-source" target="_blank" rel="noopener noreferrer" aria-label={`${e.title} on GitHub`}><Code2 size={15}/><span>Code</span><ArrowUpRight size={14}/></a> : <span className="card-status">Local build</span>}</article>)}</div></AccordionContent></AccordionItem>
        <AccordionItem value="notes"><AccordionTrigger className="section-toggle">Build notes & milestones</AccordionTrigger><AccordionContent><div className="notes-grid"><div><h3>Milestones</h3>{milestones.map(m=><article key={m.title}><a href={m.project}>{m.title}<ArrowUpRight size={15}/></a><p>{m.detail}</p></article>)}</div><div><h3>Discoveries</h3>{discoveries.map(n=><article key={n.id}><h4>{n.title}</h4><p>{n.text}</p><a href={n.project}>See project <ArrowUpRight size={14}/></a></article>)}</div></div></AccordionContent></AccordionItem>
        <AccordionItem value="about"><AccordionTrigger className="section-toggle">About Sunil</AccordionTrigger><AccordionContent><p className="about-copy">{profile.bio}</p></AccordionContent></AccordionItem>
      </Accordion></section>
    </main>
    <footer className="wrap"><span>© {new Date().getFullYear()} {profile.name}</span><a href="https://github.com/sunilnjc" target="_blank" rel="noopener noreferrer">Find me on GitHub <ArrowUpRight size={14}/></a><a href="#top" aria-label="Back to top"><ArrowUp size={17}/></a></footer>
  </>;
}
