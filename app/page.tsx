'use client';

import { ArrowUpRight, ArrowDown, ArrowUp, Code2, ScanLine, NotebookPen, Sparkles } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription } from '@/components/ui/empty';
import { profile, projects, milestones, discoveries } from './content';

export default function Home() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header" id="top">
      <a className="wordmark" href="#top" aria-label="Sunil home">sunil<span className="blue">●</span></a>
      <nav aria-label="Main navigation"><a href="#about">About</a><a href="#projects">Projects</a><a href="#achievements">Achievements</a><a href="#discoveries">Discoveries</a></nav>
      <a className="header-link" href="#connect">Say hello <ArrowUpRight size={16}/></a>
    </header>
    <main id="main">
      <section className="hero wrap" id="about" aria-labelledby="intro-heading">
        <div className="hero-main"><p className="eyebrow"><span className="blue-dot"/> A PERSONAL SPACE</p>
          <h1 id="intro-heading">Hi, I’m {profile.name}<span className="blue">.</span><br/><span className="serif">Always curious.</span></h1>
          <p className="intro">{profile.intro}</p>
          <a className="primary-link" href="#projects">Explore my work <ArrowDown size={18}/></a>
        </div>
        <aside className="index-card" aria-label="On this site"><div className="index-top"><span>THE COLLECTION</span><span>↗</span></div>
          <a href="#projects"><span>01</span><strong>Things I build</strong><ArrowUpRight/></a>
          <a href="#achievements"><span>02</span><strong>Milestones so far</strong><ArrowUpRight/></a>
          <a href="#discoveries"><span>03</span><strong>Notes along the way</strong><ArrowUpRight/></a>
          <div className="index-bottom">A work in progress. By design.</div>
        </aside>
      </section>
      <div className="about-strip wrap"><span className="eyebrow">A LITTLE CONTEXT</span><p>{profile.bio}</p></div>
      <section className="section wrap" id="projects" aria-labelledby="projects-heading">
        <div className="section-heading"><div><p className="eyebrow">01 / SELECTED WORK</p><h2 id="projects-heading">Ideas, made tangible<span className="blue">.</span></h2></div><span className="section-note">Experiments & implementations</span></div>
        <div className="project-grid">{projects.map((p,i)=><article className="project-card" key={p.id} id={p.id}>
          <div className={`project-cover cover-${i}`}><div className="cover-top"><span>{p.category}</span>{i===0?<ScanLine size={25}/>:<Code2 size={25}/>}</div><div className="cover-title">{i===0?<>See.<br/>Understand.<br/><em>Guide.</em></>:<>Every event.<br/>Every entry.<br/><em>A clear trail.</em></>}</div><div className="cover-foot"><span>{p.facts[0]}</span><span>PROJECT / {p.number}</span></div></div>
          <div className="project-body"><span className="status"><span/>{p.status}</span><h3>{p.title}</h3><p>{p.description}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div>
          <Accordion><AccordionItem value={p.id}><AccordionTrigger className="project-trigger">Project details</AccordionTrigger><AccordionContent className="detail-copy"><p>{p.detail}</p><p className="limitation">{p.limitation}</p></AccordionContent></AccordionItem></Accordion>
          </div>
        </article>)}</div>
      </section>
      <section className="milestone-section" id="achievements" aria-labelledby="milestones-heading"><div className="wrap milestone-layout"><div><p className="eyebrow">02 / ACHIEVEMENTS</p><h2 id="milestones-heading">Small steps.<br/><span className="serif">Real progress.</span></h2><p className="muted">Selected milestones from the projects.<br/>More to come as the work grows.</p></div><div className="milestone-list">{milestones.map((m,i)=><article key={m.title}><div className="milestone-number">0{i+1}</div><div><span className="eyebrow">{m.label}</span><h3>{m.title}</h3><p>{m.detail}</p><a className="text-link" href={m.project}>Explore the project <ArrowUpRight size={16}/></a></div></article>)}</div></div></section>
      <section className="section wrap" id="discoveries" aria-labelledby="discoveries-heading"><div className="section-heading"><div><p className="eyebrow">03 / THE NOTEBOOK</p><h2 id="discoveries-heading">Worth a closer look<span className="blue">.</span></h2></div><NotebookPen className="notebook-icon" size={32}/></div><p className="section-intro">Observations from building, testing, and figuring things out.</p>
        <Accordion className="notes">{discoveries.map((n,i)=><AccordionItem key={n.id} value={n.id} className="note-item"><AccordionTrigger className="note-trigger"><span className="note-number">0{i+1}</span><span><span className="eyebrow">{n.category}</span><span className="note-title">{n.title}</span></span></AccordionTrigger><AccordionContent className="note-content"><p>{n.text}</p><a className="text-link" href={n.project}>Related project <ArrowUpRight size={16}/></a></AccordionContent></AccordionItem>)}</Accordion>
      </section>
      <section className="connect wrap" id="connect"><div><p className="eyebrow">KEEP IN TOUCH</p><h2>Good things start<br/>with a <span className="serif">conversation.</span></h2></div><div className="contact-content">{profile.links.length ? profile.links.map(link=><a key={link.url} className="text-link" href={link.url} target="_blank" rel="noopener noreferrer">{link.label}<ArrowUpRight size={18}/></a>) : <Empty className="contact-empty"><EmptyHeader><Sparkles size={24}/><EmptyTitle>More connections, soon.</EmptyTitle><EmptyDescription>Public profile and contact links will appear here.</EmptyDescription></EmptyHeader></Empty>}</div></section>
    </main>
    <footer className="wrap"><span>© {new Date().getFullYear()} {profile.name}</span><span>Made with curiosity.</span><a href="#top">Back to top <ArrowUp size={15}/></a></footer>
  </>;
}
