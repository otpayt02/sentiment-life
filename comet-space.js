// Sentiment Life — Perplexity / Comet intelligence space v1.0
// Mounts after #atlas without modifying the generated archive in index.html.
// Important evidence rule: anything Comet-specific remains an inference until a real
// Perplexity/Comet history/export is imported in the Evidence Dock.
(() => {
  'use strict';

  if (window.SentimentLifeComet?.mounted || document.getElementById('comet-space')) return;

  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const esc = (value = '') => String(value).replace(/[&<>'"]/g, ch => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  })[ch]);

  const PROFILE = {
    version: '1.0',
    evidenceMode: 'cross-platform working model',
    sourceNote: 'Built from the existing Sentiment Life / ChatGPT-Codex record and known project patterns. No raw Perplexity or Comet history has been imported yet.',
    thesis: {
      eyebrow: 'Persona conclusion · working model',
      title: 'THE SYSTEMS CARTOGRAPHER',
      subtitle: 'You rarely stop at an answer. You turn the answer into a map, the map into a workflow, and the workflow into something reusable.',
      confidence: 0.94,
      note: 'High confidence as a cross-domain pattern. Platform-specific Comet behavior is still provisional.'
    },
    signatures: [
      {
        id: 'systems',
        label: 'Systems over isolated answers',
        score: 98,
        confidence: 'high',
        short: 'The question expands until the mechanism is visible.',
        evidence: 'Repeatedly moves from “how do I do this?” to architecture, storage, feedback loops, observability, automation, governance, and reuse.'
      },
      {
        id: 'implementation',
        label: 'Implementation bias',
        score: 96,
        confidence: 'high',
        short: 'A concept is not finished until it can run.',
        evidence: 'Strong preference for concrete commands, working prototypes, repo changes, operating steps, deployable workflows, and practical consequences.'
      },
      {
        id: 'compression',
        label: 'Complexity → usable model',
        score: 93,
        confidence: 'high',
        short: 'You ask broadly, then compress toward the next move.',
        evidence: 'Large exploratory prompts are usually followed by requests for the sequence, the non-negotiables, the budget, the exact command, or what to do tonight.'
      },
      {
        id: 'crossdomain',
        label: 'Cross-domain transfer',
        score: 91,
        confidence: 'high',
        short: 'A pattern discovered once gets reused somewhere else.',
        evidence: 'Ideas migrate between engineering, AI automation, language infrastructure, web design, community systems, media pipelines, sports analysis, and diagnostics.'
      },
      {
        id: 'iteration',
        label: 'Aggressive iterative refinement',
        score: 95,
        confidence: 'high',
        short: 'You steer through successive passes rather than one perfect specification.',
        evidence: 'Frequent rapid revisions: build → inspect → identify mismatch → tighten constraints → rebuild while preserving what worked.'
      },
      {
        id: 'taste',
        label: 'Utility with authored taste',
        score: 88,
        confidence: 'medium-high',
        short: 'Function matters, but generic output is treated as a defect.',
        evidence: 'Repeated insistence that cinematic interaction, visual continuity, minimalism, and polish serve comprehension rather than replace it.'
      }
    ],
    loop: [
      {n: '01', verb: 'NOTICE', title: 'Find the friction', body: 'A broken workflow, missing capability, confusing interface, weak explanation, inaccessible resource, or physical failure becomes the entry point.'},
      {n: '02', verb: 'OPEN', title: 'Expand the system boundary', body: 'You keep asking until adjacent constraints, dependencies, failure modes, actors, tools, and data become visible.'},
      {n: '03', verb: 'MODEL', title: 'Build the mechanism', body: 'Turn the mess into components, schemas, sequences, causal explanations, interfaces, or diagnostic branches.'},
      {n: '04', verb: 'SHIP', title: 'Force it toward reality', body: 'Ask for the command, code, prototype, workflow, website, data pipeline, repair step, or executable decision.'},
      {n: '05', verb: 'OBSERVE', title: 'Look at what failed', body: 'The first output is evidence. You inspect the mismatch instead of protecting the original plan.'},
      {n: '06', verb: 'COMPRESS', title: 'Keep the reusable rule', body: 'The final value is often a template, architecture, heuristic, system, or next-step sequence that can survive outside the original problem.'}
    ],
    domains: [
      {id:'automation', name:'AI + automation', weight:100, ring:1, angle:14, descriptor:'agents · scrapers · workflows · observability · APIs'},
      {id:'language', name:'Language infrastructure', weight:94, ring:2, angle:67, descriptor:'OCR · dictionaries · speech · community data · low-resource AI'},
      {id:'product', name:'Product + web systems', weight:92, ring:2, angle:124, descriptor:'cinematic UX · information architecture · interaction · implementation'},
      {id:'community', name:'Community infrastructure', weight:88, ring:3, angle:178, descriptor:'resources · participation · events · knowledge access'},
      {id:'engineering', name:'Engineering diagnostics', weight:86, ring:2, angle:224, descriptor:'failure trees · mechanisms · measurement · repair logic'},
      {id:'research', name:'Research synthesis', weight:84, ring:3, angle:278, descriptor:'source discovery · comparisons · evidence → decision'},
      {id:'music', name:'Music + direction', weight:68, ring:3, angle:322, descriptor:'piano · arrangement · leadership · creative systems'},
      {id:'sports', name:'Sports + tracking', weight:66, ring:3, angle:352, descriptor:'Sepak Takraw · analytics · detection · community play'}
    ],
    deductions: [
      {
        rank:'A', confidence:'high',
        title:'You use conversation as an external systems workbench.',
        body:'The chat is not just a place to retrieve facts. It functions as scratchpad, debugger, architect, critic, command generator, memory layer, and second set of eyes.',
        why:'This explains why context continuity matters so much: losing the prior state is equivalent to losing part of the workspace.'
      },
      {
        rank:'A', confidence:'high',
        title:'Your natural unit of work is the loop, not the task.',
        body:'A one-off solution often immediately triggers questions about automation, feedback, storage, verification, maintenance, scale, or how another person can use it.',
        why:'The durable artifact is usually a repeatable process rather than the original answer.'
      },
      {
        rank:'A', confidence:'high',
        title:'You learn fastest when explanation is attached to an active build.',
        body:'Abstract concepts become sticky when they are tied to the repo, repair, pipeline, website, model, scraper, or decision currently in front of you.',
        why:'“Teach me” and “make it work” are frequently the same request.'
      },
      {
        rank:'B', confidence:'medium-high',
        title:'Breadth is a source of leverage—and a source of unfinished gravity.',
        body:'You can transfer patterns unusually quickly across domains, but every promising idea creates another system that could be expanded.',
        why:'The recurring optimization problem is not ideation. It is deciding which loops deserve closure now.'
      },
      {
        rank:'B', confidence:'medium-high',
        title:'You are highly sensitive to genericness.',
        body:'When an output feels templated, visually disconnected, shallow, or merely “technically correct,” you push for another pass.',
        why:'Your quality bar includes authorship: the system should feel like it understands the purpose, not just the component list.'
      },
      {
        rank:'B', confidence:'medium',
        title:'You treat constraints as design material.',
        body:'Limited budget, limited compute, underrepresented data, old hardware, missing parts, incomplete sources, or imperfect tools often become prompts to design a workaround or a better architecture.',
        why:'Constraint removal is useful, but constraint-aware systems are more aligned with how you actually operate.'
      }
    ],
    tensions: [
      {left:'EXPANSION', right:'CLOSURE', line:'Your curiosity keeps widening the graph; execution improves when one branch is deliberately closed before the graph widens again.'},
      {left:'CINEMA', right:'COGNITION', line:'You want interfaces to feel alive, but the motion has to carry meaning. Spectacle without information is noise.'},
      {left:'AUTOMATION', right:'VERIFICATION', line:'The more of the workflow you automate, the more important provenance, fallbacks, confidence, and review become.'},
      {left:'SPEED', right:'ARCHITECTURE', line:'Fast iteration creates momentum; periodic consolidation prevents the codebase and the mental model from drifting apart.'}
    ],
    evolution: [
      {phase:'I', title:'ANSWER SEEKING', body:'Solve the immediate thing. Understand enough to move.'},
      {phase:'II', title:'MECHANISM SEEKING', body:'Why did it happen? What are the variables? What else can fail?'},
      {phase:'III', title:'SYSTEM SEEKING', body:'Can the solution become a repeatable architecture instead of a one-off?'},
      {phase:'IV', title:'INSTRUMENTATION', body:'Can the system watch itself, collect evidence, expose state, and improve from feedback?'},
      {phase:'V', title:'INTEGRATION', body:'Can projects, knowledge, agents, sources, and personal context become one navigable operating layer?'}
    ],
    platformRoles: [
      {
        name:'CHATGPT', code:'FORGE', status:'observed',
        line:'Synthesis + dialogue + continuity',
        body:'Where an ambiguous thought becomes a model, a plan, a critique, a decision, or a reusable explanation.'
      },
      {
        name:'CODEX', code:'WORKBENCH', status:'observed',
        line:'Execution + repository reality',
        body:'Where the model is forced through files, code, tests, architecture, and the constraints of a real implementation.'
      },
      {
        name:'COMET', code:'SCOUT', status:'provisional',
        line:'Discovery + browsing + source adjacency',
        body:'The intended second orbit: search outward, traverse sources, inspect the live web, discover edges, then return useful evidence to the Forge and Workbench.'
      }
    ],
    cometHypotheses: [
      'Comet likely captures more outward-facing curiosity than ChatGPT: pages visited, source trails, comparisons, and rapid verification.',
      'Its highest-value contrast is not “what topics appear there?” but “what behavior changes when the browser itself becomes the thinking surface?”',
      'Imported history should reveal whether Comet is primarily a scout, a validator, a rabbit-hole engine, or a bridge between research and execution.',
      'The strongest combined model will compare intent → browsing path → source set → conclusion → downstream ChatGPT/Codex action.'
    ]
  };

  const state = {
    selectedDomain: PROFILE.domains[0].id,
    records: [],
    importLabel: 'No Comet export imported',
    importMode: 'inferred'
  };

  function injectStyles(){
    if (document.getElementById('comet-space-styles')) return;
    const style = document.createElement('style');
    style.id = 'comet-space-styles';
    style.textContent = `
      #comet-space{--c-bg:#07090a;--c-ink:#f4efe6;--c-muted:#969b9d;--c-line:rgba(244,239,230,.12);--c-hot:#f0a54a;--c-ice:#9be7e5;--c-blue:#86b6ff;--mx:0;--my:0;position:relative;isolation:isolate;background:var(--c-bg);color:var(--c-ink);overflow:clip;border-top:1px solid rgba(255,255,255,.06)}
      #comet-space *{box-sizing:border-box}
      .comet-shell{width:min(1500px,calc(100% - 48px));margin-inline:auto}
      .comet-kicker{font-size:.68rem;letter-spacing:.22em;text-transform:uppercase;color:var(--c-muted);font-weight:800}
      .comet-kicker b{color:var(--c-ice);font-weight:900}
      .comet-hero{height:290vh;position:relative}
      .comet-hero__sticky{position:sticky;top:0;height:100svh;min-height:640px;overflow:hidden;display:grid;place-items:center;background:radial-gradient(circle at calc(50% + var(--mx)*4%) calc(47% + var(--my)*3%),rgba(155,231,229,.10),transparent 24%),radial-gradient(circle at 50% 50%,rgba(134,182,255,.065),transparent 45%),#07090a}
      .comet-hero__grid{position:absolute;inset:-20%;opacity:.23;background-image:linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);background-size:74px 74px;transform:perspective(800px) rotateX(68deg) translateY(calc(25% + var(--comet-p,0)*-8%)) scale(1.35);transform-origin:center 70%;mask-image:radial-gradient(circle at 50% 55%,#000 0 35%,transparent 72%)}
      .comet-tail{position:absolute;left:50%;top:50%;height:2px;width:120vmax;background:linear-gradient(90deg,transparent,rgba(155,231,229,.02) 18%,rgba(155,231,229,.8) 49.7%,#fff 50%,rgba(134,182,255,.23) 61%,transparent 82%);transform:translate(-48%,-50%) rotate(calc(-18deg + var(--comet-p,0)*24deg)) scaleX(calc(.3 + var(--comet-p,0)*1.1));filter:blur(.2px) drop-shadow(0 0 24px rgba(155,231,229,.35));opacity:calc(.18 + var(--comet-p,0)*.72)}
      .comet-tail:after{content:"";position:absolute;left:50%;top:50%;width:12px;height:12px;border-radius:50%;background:#fff;transform:translate(-50%,-50%);box-shadow:0 0 20px #fff,0 0 60px var(--c-ice),0 0 130px var(--c-blue)}
      .comet-orbit{position:absolute;left:50%;top:50%;width:min(74vw,880px);aspect-ratio:1;border:1px solid rgba(155,231,229,.16);border-radius:50%;transform:translate(-50%,-50%) rotate(calc(var(--comet-p,0)*36deg)) scale(calc(.72 + var(--comet-p,0)*.32));box-shadow:inset 0 0 110px rgba(155,231,229,.02),0 0 90px rgba(155,231,229,.025)}
      .comet-orbit:before,.comet-orbit:after{content:"";position:absolute;border-radius:50%;border:1px dashed rgba(244,239,230,.09);inset:12%;transform:rotate(33deg)}
      .comet-orbit:after{inset:27%;border-style:solid;border-color:rgba(240,165,74,.1);transform:rotate(-21deg)}
      .comet-hero__copy{position:relative;z-index:4;text-align:center;width:min(1180px,calc(100% - 40px));transform:translate3d(calc(var(--mx)*9px),calc(var(--my)*7px),0)}
      .comet-hero__copy h2{font-size:clamp(5rem,18vw,17rem);line-height:.68;letter-spacing:-.095em;margin:.13em 0 .16em;font-weight:900;text-transform:uppercase;text-shadow:0 0 55px rgba(155,231,229,.08)}
      .comet-hero__copy h2 span{display:block;font-size:.12em;line-height:1;letter-spacing:.32em;color:var(--c-ice);margin:2.6em 0 0;text-indent:.32em}
      .comet-hero__copy p{width:min(760px,92%);margin:0 auto;font-size:clamp(1rem,1.7vw,1.35rem);line-height:1.55;color:#c7caca;text-wrap:balance}
      .comet-hero__status{position:absolute;z-index:6;left:max(22px,4vw);bottom:5vh;display:flex;gap:12px;align-items:center;font-size:.62rem;letter-spacing:.16em;text-transform:uppercase;color:var(--c-muted)}
      .comet-live-dot{width:7px;height:7px;border-radius:50%;background:var(--c-hot);box-shadow:0 0 18px rgba(240,165,74,.7)}
      .comet-hero__index{position:absolute;z-index:6;right:max(22px,4vw);top:5vh;font-size:.62rem;letter-spacing:.16em;text-transform:uppercase;color:var(--c-muted);text-align:right}
      .comet-hero__index b{display:block;color:var(--c-ink);font-size:.78rem;margin-bottom:5px}

      .comet-thesis{padding:18vh 0 14vh;position:relative}
      .comet-thesis__grid{display:grid;grid-template-columns:minmax(0,1.35fr) minmax(280px,.65fr);gap:clamp(40px,8vw,120px);align-items:end}
      .comet-thesis h3{font-size:clamp(3.4rem,9vw,9rem);line-height:.82;letter-spacing:-.07em;margin:.18em 0 .28em;max-width:1050px;text-wrap:balance}
      .comet-thesis h3 em{font-style:normal;color:var(--c-hot)}
      .comet-thesis__side{border-left:1px solid var(--c-line);padding-left:30px;color:#b9bdbe;font-size:1rem;line-height:1.65}
      .confidence-meter{margin-top:30px;display:grid;grid-template-columns:1fr auto;gap:10px 14px;align-items:center}.confidence-meter__track{height:2px;background:rgba(255,255,255,.1);overflow:hidden}.confidence-meter__fill{display:block;height:100%;width:94%;background:linear-gradient(90deg,var(--c-hot),var(--c-ice));box-shadow:0 0 16px rgba(155,231,229,.3)}.confidence-meter strong{font-size:.66rem;letter-spacing:.16em;text-transform:uppercase}.confidence-meter small{color:var(--c-muted)}

      .comet-section{padding:12vh 0 16vh;position:relative}
      .comet-section__head{display:flex;justify-content:space-between;gap:30px;align-items:end;margin-bottom:70px;border-bottom:1px solid var(--c-line);padding-bottom:24px}
      .comet-section__head h3{font-size:clamp(2.8rem,6vw,6rem);line-height:.84;letter-spacing:-.06em;margin:.12em 0 0}
      .comet-section__head p{max-width:520px;margin:0;color:var(--c-muted);line-height:1.55}
      .comet-signatures{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--c-line);border:1px solid var(--c-line)}
      .signature-card{background:#090b0c;padding:32px;min-height:330px;display:flex;flex-direction:column;position:relative;overflow:hidden;transition:background .35s ease,transform .35s ease}
      .signature-card:hover{background:#0e1112;z-index:2;transform:translateY(-4px)}
      .signature-card:before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 90% 0%,rgba(155,231,229,.08),transparent 38%);opacity:0;transition:opacity .35s}.signature-card:hover:before{opacity:1}
      .signature-card__top{display:flex;justify-content:space-between;gap:20px;align-items:center}.signature-card__score{font-size:2.4rem;line-height:1;letter-spacing:-.06em}.signature-card__confidence{font-size:.58rem;letter-spacing:.14em;text-transform:uppercase;color:var(--c-ice);border:1px solid rgba(155,231,229,.22);padding:7px 9px;border-radius:99px}.signature-card h4{font-size:1.5rem;line-height:1.06;margin:auto 0 12px;letter-spacing:-.025em}.signature-card p{color:#aeb2b3;line-height:1.55;margin:0}.signature-card details{margin-top:18px;color:#cdd0d0}.signature-card summary{cursor:pointer;font-size:.64rem;text-transform:uppercase;letter-spacing:.13em;color:var(--c-hot)}.signature-card details p{font-size:.86rem;margin-top:12px}

      .method-loop{position:relative;display:grid;grid-template-columns:repeat(6,1fr);gap:0;border-top:1px solid var(--c-line);border-bottom:1px solid var(--c-line)}
      .method-step{min-height:360px;padding:28px 22px;border-right:1px solid var(--c-line);position:relative;transition:background .3s,transform .3s}.method-step:last-child{border-right:0}.method-step:hover{background:rgba(155,231,229,.035);transform:translateY(-5px)}.method-step__n{font-size:.62rem;letter-spacing:.18em;color:var(--c-muted)}.method-step__verb{font-size:clamp(1.7rem,2.6vw,3rem);line-height:.9;letter-spacing:-.05em;color:var(--c-ice);margin:42px 0 12px}.method-step h4{font-size:1rem;margin:0 0 14px}.method-step p{font-size:.88rem;line-height:1.55;color:#9fa4a5;margin:0}.method-step:after{content:"→";position:absolute;right:-11px;top:50%;z-index:2;color:var(--c-hot);font-size:1rem;background:var(--c-bg);width:22px;text-align:center}.method-step:last-child:after{content:"↺";right:14px;top:auto;bottom:18px;background:transparent}

      .constellation-wrap{min-height:790px;position:relative;border:1px solid var(--c-line);background:radial-gradient(circle at 50% 50%,rgba(155,231,229,.045),transparent 31%),linear-gradient(rgba(255,255,255,.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.018) 1px,transparent 1px);background-size:auto,52px 52px,52px 52px;overflow:hidden}
      .constellation-rings{position:absolute;inset:50%;width:min(72vw,720px);aspect-ratio:1;transform:translate(-50%,-50%);border:1px solid rgba(255,255,255,.09);border-radius:50%;pointer-events:none}.constellation-rings:before,.constellation-rings:after{content:"";position:absolute;border-radius:50%;border:1px solid rgba(255,255,255,.065);inset:17%}.constellation-rings:after{inset:34%;border-color:rgba(240,165,74,.10)}
      .constellation-core{position:absolute;left:50%;top:50%;width:250px;min-height:250px;border-radius:50%;transform:translate(-50%,-50%);display:grid;place-items:center;text-align:center;padding:32px;border:1px solid rgba(155,231,229,.24);background:rgba(7,9,10,.92);box-shadow:0 0 80px rgba(155,231,229,.08),inset 0 0 60px rgba(155,231,229,.035);z-index:3}.constellation-core strong{display:block;font-size:1.35rem;letter-spacing:-.03em}.constellation-core small{display:block;margin-top:10px;color:var(--c-muted);line-height:1.45}.constellation-core span{display:block;margin-bottom:11px;color:var(--c-ice);font-size:.58rem;letter-spacing:.18em;text-transform:uppercase}
      .domain-node{position:absolute;left:50%;top:50%;z-index:4;border:1px solid rgba(255,255,255,.15);background:rgba(8,10,11,.88);color:var(--c-ink);border-radius:999px;padding:10px 14px;font:inherit;font-size:.7rem;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;white-space:nowrap;transform:translate(-50%,-50%) translate(var(--dx),var(--dy));transition:border-color .25s,background .25s,color .25s,box-shadow .25s,scale .25s}.domain-node:hover,.domain-node[aria-pressed="true"]{border-color:rgba(155,231,229,.65);color:#fff;background:#101617;box-shadow:0 0 30px rgba(155,231,229,.12);scale:1.06}.domain-node:before{content:"";display:inline-block;width:5px;height:5px;border-radius:50%;background:var(--c-hot);margin-right:8px;box-shadow:0 0 9px rgba(240,165,74,.55)}

      .platform-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.platform-card{border:1px solid var(--c-line);padding:34px;min-height:360px;position:relative;overflow:hidden;background:linear-gradient(145deg,rgba(255,255,255,.018),transparent 60%)}.platform-card:before{content:attr(data-code);position:absolute;right:-.04em;bottom:-.12em;font-size:clamp(4rem,8vw,9rem);font-weight:900;letter-spacing:-.09em;color:rgba(255,255,255,.025);pointer-events:none}.platform-card__status{display:inline-flex;align-items:center;gap:8px;font-size:.58rem;letter-spacing:.16em;text-transform:uppercase;color:var(--c-muted)}.platform-card__status i{width:6px;height:6px;border-radius:50%;background:var(--c-ice)}.platform-card[data-status="provisional"] .platform-card__status i{background:var(--c-hot)}.platform-card h4{font-size:clamp(2.4rem,4vw,4.8rem);line-height:.83;letter-spacing:-.065em;margin:42px 0 16px}.platform-card h4 small{font-size:.16em;display:block;letter-spacing:.24em;color:var(--c-ice);margin-bottom:16px}.platform-card p{max-width:420px;color:#aeb2b3;line-height:1.6}.platform-card strong{display:block;margin-top:30px;font-size:.72rem;text-transform:uppercase;letter-spacing:.13em;color:var(--c-hot)}

      .deduction-stack{display:grid;gap:14px}.deduction{display:grid;grid-template-columns:80px minmax(220px,.8fr) 1.2fr 1fr;gap:28px;align-items:start;border-top:1px solid var(--c-line);padding:30px 0}.deduction:last-child{border-bottom:1px solid var(--c-line)}.deduction__rank{font-size:2.5rem;font-weight:900;line-height:.8;color:var(--c-hot)}.deduction h4{font-size:1.25rem;line-height:1.15;margin:0}.deduction p{margin:0;color:#a7acad;line-height:1.55}.deduction__why{font-size:.86rem;color:#c6c9c9!important}.deduction__confidence{display:block;margin-top:10px;font-size:.58rem;letter-spacing:.13em;text-transform:uppercase;color:var(--c-ice)}

      .tension-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1px;background:var(--c-line);border:1px solid var(--c-line)}.tension{background:#090b0c;padding:36px;min-height:250px}.tension__axis{display:flex;align-items:center;gap:14px;font-size:.66rem;letter-spacing:.15em;font-weight:900}.tension__axis i{height:1px;flex:1;background:linear-gradient(90deg,var(--c-hot),var(--c-ice))}.tension p{font-size:1.2rem;line-height:1.5;margin:70px 0 0;color:#c3c6c7}

      .evolution{display:grid;grid-template-columns:repeat(5,1fr);gap:0;border-top:1px solid var(--c-line)}.evolution-phase{padding:28px 24px 34px;border-right:1px solid var(--c-line);min-height:300px;position:relative}.evolution-phase:last-child{border-right:0}.evolution-phase__id{font-size:.62rem;color:var(--c-hot);letter-spacing:.2em}.evolution-phase h4{font-size:1.35rem;line-height:1;margin:60px 0 16px}.evolution-phase p{font-size:.9rem;line-height:1.55;color:#9da2a3}.evolution-phase:before{content:"";position:absolute;top:-4px;left:24px;width:7px;height:7px;border-radius:50%;background:var(--c-ice);box-shadow:0 0 18px rgba(155,231,229,.6)}

      .comet-hypotheses{display:grid;grid-template-columns:1fr 1fr;gap:18px}.hypothesis{border:1px solid var(--c-line);padding:28px;display:grid;grid-template-columns:auto 1fr;gap:22px;align-items:start}.hypothesis b{font-size:.65rem;color:var(--c-hot);letter-spacing:.14em}.hypothesis p{margin:0;color:#bec1c2;line-height:1.55}

      .evidence-dock{margin:16vh 0 18vh;border:1px solid rgba(155,231,229,.18);background:linear-gradient(145deg,rgba(155,231,229,.045),rgba(255,255,255,.01) 48%,rgba(240,165,74,.025));padding:clamp(26px,5vw,64px);position:relative;overflow:hidden}.evidence-dock:before{content:"EVIDENCE";position:absolute;right:-.03em;top:-.14em;font-size:clamp(5rem,14vw,14rem);font-weight:900;letter-spacing:-.08em;color:rgba(255,255,255,.018);pointer-events:none}.evidence-dock__grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(30px,7vw,100px);align-items:end}.evidence-dock h3{font-size:clamp(3rem,7vw,7rem);line-height:.84;letter-spacing:-.065em;margin:.15em 0 .25em}.evidence-dock p{color:#aeb3b4;line-height:1.6}.evidence-dock__state{display:flex;gap:10px;align-items:center;margin-top:22px;color:var(--c-muted);font-size:.66rem;letter-spacing:.12em;text-transform:uppercase}.evidence-dock__state i{width:7px;height:7px;border-radius:50%;background:var(--c-hot);box-shadow:0 0 13px rgba(240,165,74,.5)}.evidence-dock[data-mode="observed"] .evidence-dock__state i{background:var(--c-ice);box-shadow:0 0 13px rgba(155,231,229,.55)}
      .dropzone{min-height:250px;border:1px dashed rgba(155,231,229,.28);display:grid;place-items:center;text-align:center;padding:30px;position:relative;transition:background .25s,border-color .25s}.dropzone.is-over{background:rgba(155,231,229,.06);border-color:var(--c-ice)}.dropzone input{position:absolute;inset:0;opacity:0;cursor:pointer}.dropzone strong{display:block;font-size:1.05rem}.dropzone small{display:block;color:var(--c-muted);margin-top:10px;line-height:1.5}.import-summary{margin-top:18px;font-size:.75rem;color:#c9cccc;line-height:1.5}.import-summary b{color:var(--c-ice)}
      .comet-footer{padding:8vh 0 14vh;border-top:1px solid var(--c-line);display:flex;justify-content:space-between;gap:28px;align-items:end}.comet-footer strong{font-size:clamp(2.5rem,6vw,6rem);line-height:.8;letter-spacing:-.06em}.comet-footer p{max-width:500px;color:var(--c-muted);line-height:1.55;margin:0}

      .comet-reveal{opacity:0;transform:translateY(36px);filter:blur(6px);transition:opacity .85s cubic-bezier(.16,1,.3,1),transform .85s cubic-bezier(.16,1,.3,1),filter .85s cubic-bezier(.16,1,.3,1)}.comet-reveal.is-visible{opacity:1;transform:none;filter:none}
      @media(max-width:1100px){.comet-signatures{grid-template-columns:repeat(2,1fr)}.method-loop{grid-template-columns:repeat(3,1fr)}.method-step:nth-child(3){border-right:0}.platform-grid{grid-template-columns:1fr}.deduction{grid-template-columns:56px 1fr 1.2fr}.deduction__why{grid-column:2/-1}.evolution{grid-template-columns:repeat(3,1fr)}.evolution-phase:nth-child(3){border-right:0}.evidence-dock__grid{grid-template-columns:1fr}}
      @media(max-width:760px){.comet-shell{width:min(100% - 28px,1500px)}.comet-hero{height:220vh}.comet-hero__sticky{min-height:560px}.comet-hero__copy h2{font-size:clamp(4.4rem,28vw,9rem)}.comet-thesis__grid{grid-template-columns:1fr}.comet-thesis__side{border-left:0;border-top:1px solid var(--c-line);padding:24px 0 0}.comet-section__head{display:block}.comet-section__head p{margin-top:20px}.comet-signatures{grid-template-columns:1fr}.method-loop{grid-template-columns:1fr}.method-step{min-height:auto;border-right:0;border-bottom:1px solid var(--c-line);padding:28px}.method-step:after{content:"↓";right:16px;top:auto;bottom:-12px}.method-step:last-child:after{content:"↺";bottom:14px}.constellation-wrap{min-height:680px}.constellation-rings{width:580px}.constellation-core{width:190px;min-height:190px;padding:22px}.domain-node{font-size:.57rem;padding:8px 10px}.deduction{grid-template-columns:42px 1fr;gap:18px}.deduction>p,.deduction__why{grid-column:2}.tension-grid,.comet-hypotheses{grid-template-columns:1fr}.evolution{grid-template-columns:1fr}.evolution-phase{border-right:0;border-bottom:1px solid var(--c-line);min-height:auto}.comet-footer{display:block}.comet-footer p{margin-top:28px}.comet-hero__index{display:none}}
      @media(prefers-reduced-motion:reduce){.comet-hero{height:auto}.comet-hero__sticky{position:relative;height:auto;min-height:78vh}.comet-tail,.comet-orbit{opacity:.24}.comet-reveal{opacity:1;transform:none;filter:none;transition:none}.signature-card,.method-step,.domain-node{transition:none}}
    `;
    document.head.appendChild(style);
  }

  function domainPosition(domain){
    const radius = domain.ring === 1 ? 235 : domain.ring === 2 ? 300 : 350;
    const mobileScale = innerWidth < 760 ? .72 : innerWidth < 1100 ? .88 : 1;
    const rad = domain.angle * Math.PI / 180;
    return {
      x: Math.cos(rad) * radius * mobileScale,
      y: Math.sin(rad) * radius * mobileScale
    };
  }

  function signatureMarkup(){
    return PROFILE.signatures.map(item => `
      <article class="signature-card comet-reveal">
        <div class="signature-card__top"><span class="signature-card__score">${item.score}</span><span class="signature-card__confidence">${esc(item.confidence)}</span></div>
        <h4>${esc(item.label)}</h4>
        <p>${esc(item.short)}</p>
        <details><summary>Why this deduction</summary><p>${esc(item.evidence)}</p></details>
      </article>`).join('');
  }

  function methodMarkup(){
    return PROFILE.loop.map(item => `
      <article class="method-step comet-reveal">
        <span class="method-step__n">${item.n}</span>
        <div class="method-step__verb">${esc(item.verb)}</div>
        <h4>${esc(item.title)}</h4>
        <p>${esc(item.body)}</p>
      </article>`).join('');
  }

  function domainMarkup(){
    return PROFILE.domains.map((domain, index) => {
      const pos = domainPosition(domain);
      return `<button class="domain-node" type="button" data-domain="${esc(domain.id)}" aria-pressed="${index === 0 ? 'true' : 'false'}" style="--dx:${pos.x.toFixed(1)}px;--dy:${pos.y.toFixed(1)}px">${esc(domain.name)}</button>`;
    }).join('');
  }

  function platformMarkup(){
    return PROFILE.platformRoles.map(item => `
      <article class="platform-card comet-reveal" data-code="${esc(item.code)}" data-status="${esc(item.status)}">
        <span class="platform-card__status"><i></i>${esc(item.status)}</span>
        <h4><small>${esc(item.name)}</small>${esc(item.code)}</h4>
        <p>${esc(item.body)}</p>
        <strong>${esc(item.line)}</strong>
      </article>`).join('');
  }

  function deductionsMarkup(){
    return PROFILE.deductions.map(item => `
      <article class="deduction comet-reveal">
        <div class="deduction__rank">${esc(item.rank)}</div>
        <h4>${esc(item.title)}<span class="deduction__confidence">${esc(item.confidence)} confidence</span></h4>
        <p>${esc(item.body)}</p>
        <p class="deduction__why"><b>Implication —</b> ${esc(item.why)}</p>
      </article>`).join('');
  }

  function tensionsMarkup(){
    return PROFILE.tensions.map(item => `
      <article class="tension comet-reveal">
        <div class="tension__axis"><span>${esc(item.left)}</span><i></i><span>${esc(item.right)}</span></div>
        <p>${esc(item.line)}</p>
      </article>`).join('');
  }

  function evolutionMarkup(){
    return PROFILE.evolution.map(item => `
      <article class="evolution-phase comet-reveal">
        <span class="evolution-phase__id">PHASE ${esc(item.phase)}</span>
        <h4>${esc(item.title)}</h4>
        <p>${esc(item.body)}</p>
      </article>`).join('');
  }

  function hypothesesMarkup(){
    return PROFILE.cometHypotheses.map((item, i) => `
      <article class="hypothesis comet-reveal"><b>H${String(i+1).padStart(2,'0')}</b><p>${esc(item)}</p></article>`).join('');
  }

  function buildSection(){
    const section = document.createElement('section');
    section.id = 'comet-space';
    section.setAttribute('aria-label', 'Perplexity Comet intelligence space');
    section.innerHTML = `
      <div class="comet-hero" aria-labelledby="comet-title">
        <div class="comet-hero__sticky">
          <div class="comet-hero__grid" aria-hidden="true"></div>
          <div class="comet-tail" aria-hidden="true"></div>
          <div class="comet-orbit" aria-hidden="true"></div>
          <div class="comet-hero__copy">
            <div class="comet-kicker"><b>Second orbit</b> · Perplexity / Comet</div>
            <h2 id="comet-title">COMET<span>THE OUTWARD MIND</span></h2>
            <p>ChatGPT maps the internal conversation. Codex makes it executable. This space is designed to reveal what happens when your thinking moves through the live web: what you chase, what you verify, what you connect, and what comes back.</p>
          </div>
          <div class="comet-hero__status"><i class="comet-live-dot"></i><span>Inference layer active · raw Comet evidence not yet imported</span></div>
          <div class="comet-hero__index"><b>SENTIMENT LIFE / 02</b>cross-platform intelligence</div>
        </div>
      </div>

      <div class="comet-shell">
        <section class="comet-thesis comet-reveal">
          <div class="comet-thesis__grid">
            <div>
              <div class="comet-kicker">${esc(PROFILE.thesis.eyebrow)}</div>
              <h3>THE SYSTEMS <em>CARTOGRAPHER.</em></h3>
              <p style="font-size:clamp(1.2rem,2.2vw,2rem);line-height:1.38;max-width:920px;color:#c7caca;margin:0">${esc(PROFILE.thesis.subtitle)}</p>
            </div>
            <aside class="comet-thesis__side">
              ${esc(PROFILE.thesis.note)}
              <div class="confidence-meter"><div class="confidence-meter__track"><span class="confidence-meter__fill"></span></div><strong>${Math.round(PROFILE.thesis.confidence*100)}%</strong><small>cross-domain confidence</small><small>evidence-backed inference</small></div>
            </aside>
          </div>
        </section>

        <section class="comet-section" aria-labelledby="signature-title">
          <header class="comet-section__head comet-reveal"><div><div class="comet-kicker">01 · Behavioral fingerprint</div><h3 id="signature-title">HOW YOU MOVE</h3></div><p>Not personality adjectives. Repeated operational patterns: what your questions do when they encounter uncertainty.</p></header>
          <div class="comet-signatures">${signatureMarkup()}</div>
        </section>

        <section class="comet-section" aria-labelledby="loop-title">
          <header class="comet-section__head comet-reveal"><div><div class="comet-kicker">02 · Recurring method</div><h3 id="loop-title">THE LOOP</h3></div><p>The same sequence appears in software, research, design, diagnostics, language work, and planning.</p></header>
          <div class="method-loop">${methodMarkup()}</div>
        </section>

        <section class="comet-section" aria-labelledby="constellation-title">
          <header class="comet-section__head comet-reveal"><div><div class="comet-kicker">03 · Curiosity topology</div><h3 id="constellation-title">THE CONSTELLATION</h3></div><p>Click a domain. The center changes, but the surrounding system stays connected—the point is the transfer between fields.</p></header>
          <div class="constellation-wrap comet-reveal">
            <div class="constellation-rings" aria-hidden="true"></div>
            <div class="constellation-core" aria-live="polite"><div><span id="domain-weight">PRIMARY ORBIT · 100</span><strong id="domain-name">${esc(PROFILE.domains[0].name)}</strong><small id="domain-description">${esc(PROFILE.domains[0].descriptor)}</small></div></div>
            ${domainMarkup()}
          </div>
        </section>

        <section class="comet-section" aria-labelledby="platform-title">
          <header class="comet-section__head comet-reveal"><div><div class="comet-kicker">04 · Tool ecology</div><h3 id="platform-title">THREE SURFACES</h3></div><p>One mind, different affordances. The useful question is what each surface makes easier to think.</p></header>
          <div class="platform-grid">${platformMarkup()}</div>
        </section>

        <section class="comet-section" aria-labelledby="deduction-title">
          <header class="comet-section__head comet-reveal"><div><div class="comet-kicker">05 · Persona deductions</div><h3 id="deduction-title">WHAT THE RECORD IMPLIES</h3></div><p>Each statement is a deduction, not a fact claim. Confidence is based on repetition across unrelated domains.</p></header>
          <div class="deduction-stack">${deductionsMarkup()}</div>
        </section>

        <section class="comet-section" aria-labelledby="tensions-title">
          <header class="comet-section__head comet-reveal"><div><div class="comet-kicker">06 · Productive tensions</div><h3 id="tensions-title">WHERE THE ENERGY LIVES</h3></div><p>The interesting traits are not poles. They are the balancing problems that keep reappearing.</p></header>
          <div class="tension-grid">${tensionsMarkup()}</div>
        </section>

        <section class="comet-section" aria-labelledby="evolution-title">
          <header class="comet-section__head comet-reveal"><div><div class="comet-kicker">07 · Evolution model</div><h3 id="evolution-title">FROM ANSWER → OPERATING LAYER</h3></div><p>A non-chronological maturity model of how the inquiry pattern tends to deepen.</p></header>
          <div class="evolution">${evolutionMarkup()}</div>
        </section>

        <section class="comet-section" aria-labelledby="hypothesis-title">
          <header class="comet-section__head comet-reveal"><div><div class="comet-kicker">08 · Before import</div><h3 id="hypothesis-title">WHAT COMET MAY REVEAL</h3></div><p>These are hypotheses on purpose. Once real browser history is ingested, they can be promoted, weakened, or rejected.</p></header>
          <div class="comet-hypotheses">${hypothesesMarkup()}</div>
        </section>

        <section class="evidence-dock comet-reveal" id="comet-evidence-dock" data-mode="inferred" aria-labelledby="evidence-title">
          <div class="evidence-dock__grid">
            <div>
              <div class="comet-kicker">09 · Evidence dock</div>
              <h3 id="evidence-title">MAKE THE SECOND ORBIT REAL.</h3>
              <p>${esc(PROFILE.sourceNote)}</p>
              <p>The importer is deliberately permissive: JSON, JSONL, and text exports can be normalized locally in the browser. It looks for common fields such as query, prompt, title, URL, timestamp, created_at, text, and summary. Nothing is uploaded by this component.</p>
              <div class="evidence-dock__state"><i></i><span id="comet-import-state">No Comet export imported · inference mode</span></div>
              <div class="import-summary" id="comet-import-summary">Current model: <b>cross-platform inference</b>. Importing evidence changes the status to observed and exposes a normalized record count for later analysis.</div>
            </div>
            <label class="dropzone" id="comet-dropzone">
              <input id="comet-file-input" type="file" accept=".json,.jsonl,.txt,.csv" aria-label="Import Perplexity or Comet history export">
              <span><strong>DROP PERPLEXITY / COMET HISTORY</strong><small>or click to choose a JSON, JSONL, TXT, or CSV export<br>Processed locally in this page</small></span>
            </label>
          </div>
        </section>

        <footer class="comet-footer comet-reveal"><strong>THE MAP<br>LOOKS OUTWARD.</strong><p>Sentiment Life now has a second conceptual surface: not just what you told an AI, but a place ready to model how you navigate information beyond the conversation. The next fidelity jump comes from real Comet history.</p></footer>
      </div>
    `;
    return section;
  }

  function mount(){
    const atlas = document.getElementById('atlas');
    if (!atlas || document.getElementById('comet-space')) return false;
    injectStyles();
    const section = buildSection();
    atlas.insertAdjacentElement('afterend', section);

    const hero = section.querySelector('.comet-hero');
    const sticky = section.querySelector('.comet-hero__sticky');
    const coreName = section.querySelector('#domain-name');
    const coreDescription = section.querySelector('#domain-description');
    const coreWeight = section.querySelector('#domain-weight');

    section.querySelectorAll('.domain-node').forEach(button => {
      button.addEventListener('click', () => {
        const domain = PROFILE.domains.find(d => d.id === button.dataset.domain);
        if (!domain) return;
        state.selectedDomain = domain.id;
        section.querySelectorAll('.domain-node').forEach(node => node.setAttribute('aria-pressed', String(node === button)));
        coreName.textContent = domain.name;
        coreDescription.textContent = domain.descriptor;
        coreWeight.textContent = `${domain.ring === 1 ? 'PRIMARY' : domain.ring === 2 ? 'SECONDARY' : 'ADJACENT'} ORBIT · ${domain.weight}`;
      });
    });

    const reposition = () => {
      section.querySelectorAll('.domain-node').forEach(button => {
        const domain = PROFILE.domains.find(d => d.id === button.dataset.domain);
        if (!domain) return;
        const pos = domainPosition(domain);
        button.style.setProperty('--dx', `${pos.x.toFixed(1)}px`);
        button.style.setProperty('--dy', `${pos.y.toFixed(1)}px`);
      });
    };
    addEventListener('resize', reposition, {passive:true});

    if (!reduceMotion) {
      sticky.addEventListener('pointermove', event => {
        const r = sticky.getBoundingClientRect();
        section.style.setProperty('--mx', (((event.clientX-r.left)/r.width)-.5).toFixed(3));
        section.style.setProperty('--my', (((event.clientY-r.top)/r.height)-.5).toFixed(3));
      }, {passive:true});

      let visual = 0;
      const frame = () => {
        if (!document.body.contains(section)) return;
        const r = hero.getBoundingClientRect();
        const travel = Math.max(1, hero.offsetHeight - innerHeight);
        const raw = Math.max(0, Math.min(1, -r.top / travel));
        visual += (raw - visual) * .075;
        section.style.setProperty('--comet-p', visual.toFixed(4));
        requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    } else {
      section.style.setProperty('--comet-p', '.65');
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {threshold:.11, rootMargin:'0px 0px -7%'});
    section.querySelectorAll('.comet-reveal').forEach(el => observer.observe(el));

    wireImporter(section);
    window.SentimentLifeComet.mounted = true;
    window.dispatchEvent(new CustomEvent('sentimentlife:comet-mounted'));
    return true;
  }

  function flattenCandidates(value, path = 'root', output = [], depth = 0){
    if (depth > 9 || value == null) return output;
    if (Array.isArray(value)) {
      value.forEach((item, i) => flattenCandidates(item, `${path}[${i}]`, output, depth + 1));
      return output;
    }
    if (typeof value !== 'object') return output;

    const keys = Object.keys(value);
    const lower = Object.fromEntries(keys.map(k => [k.toLowerCase(), k]));
    const pick = (...names) => {
      for (const name of names) if (lower[name] && value[lower[name]] != null) return value[lower[name]];
      return null;
    };

    const query = pick('query','prompt','question','user_query','search_query','input');
    const title = pick('title','name','page_title','heading');
    const url = pick('url','href','link','source_url');
    const text = pick('text','content','summary','answer','response','snippet');
    const timestamp = pick('timestamp','created_at','createdat','date','time','visited_at','updated_at');
    if (query || title || url || text) {
      output.push({
        path,
        query: typeof query === 'string' ? query : '',
        title: typeof title === 'string' ? title : '',
        url: typeof url === 'string' ? url : '',
        text: typeof text === 'string' ? text.slice(0, 4000) : '',
        timestamp: timestamp == null ? '' : String(timestamp),
        source: 'comet-import'
      });
    }
    keys.forEach(key => {
      const child = value[key];
      if (child && typeof child === 'object') flattenCandidates(child, `${path}.${key}`, output, depth + 1);
    });
    return output;
  }

  function parseLooseText(text){
    const trimmed = text.trim();
    if (!trimmed) return [];
    try { return flattenCandidates(JSON.parse(trimmed)); } catch (_) {}

    const lines = trimmed.split(/\r?\n/).filter(Boolean);
    const jsonl = [];
    let validJsonLines = 0;
    for (const [i,line] of lines.entries()) {
      try {
        const parsed = JSON.parse(line);
        validJsonLines++;
        flattenCandidates(parsed, `line[${i}]`, jsonl);
      } catch (_) {}
    }
    if (validJsonLines > Math.max(1, lines.length * .35)) return jsonl;

    return lines
      .map((line, i) => line.trim())
      .filter(line => line.length > 8)
      .slice(0, 5000)
      .map((line, i) => ({path:`text[${i}]`, query:line, title:'', url:'', text:'', timestamp:'', source:'comet-import'}));
  }

  function dedupeRecords(records){
    const seen = new Set();
    return records.filter(record => {
      const key = [record.query, record.title, record.url, record.timestamp].join('|').toLowerCase();
      if (!key.replace(/\|/g,'').trim() || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  function ingest(input, label = 'Programmatic import'){
    let records = [];
    if (typeof input === 'string') records = parseLooseText(input);
    else if (Array.isArray(input) || (input && typeof input === 'object')) records = flattenCandidates(input);
    records = dedupeRecords(records);
    state.records = records;
    state.importLabel = label;
    state.importMode = records.length ? 'observed' : 'inferred';
    updateImportUI();
    window.dispatchEvent(new CustomEvent('sentimentlife:comet-ingested', {detail:{records, label}}));
    return records;
  }

  function updateImportUI(){
    const section = document.getElementById('comet-space');
    if (!section) return;
    const dock = section.querySelector('#comet-evidence-dock');
    const status = section.querySelector('#comet-import-state');
    const summary = section.querySelector('#comet-import-summary');
    if (!dock || !status || !summary) return;
    dock.dataset.mode = state.importMode;
    if (state.records.length) {
      status.textContent = `${state.records.length.toLocaleString()} normalized records · observed evidence available`;
      const withUrls = state.records.filter(r => r.url).length;
      const withQueries = state.records.filter(r => r.query).length;
      const dated = state.records.filter(r => r.timestamp).length;
      summary.innerHTML = `Imported <b>${esc(state.importLabel)}</b> · ${state.records.length.toLocaleString()} records · ${withQueries.toLocaleString()} with queries · ${withUrls.toLocaleString()} with URLs · ${dated.toLocaleString()} dated. The raw normalized records are available at <b>window.SentimentLifeComet.records()</b>.`;
    } else {
      status.textContent = 'No usable Comet records detected · inference mode';
      summary.innerHTML = 'Current model: <b>cross-platform inference</b>. Try a broader export or call <b>window.SentimentLifeComet.ingest(data)</b> with JSON-like history.';
    }
  }

  function wireImporter(section){
    const input = section.querySelector('#comet-file-input');
    const zone = section.querySelector('#comet-dropzone');
    if (!input || !zone) return;

    const processFile = async file => {
      if (!file) return;
      const text = await file.text();
      ingest(text, file.name);
    };
    input.addEventListener('change', () => processFile(input.files?.[0]));
    ['dragenter','dragover'].forEach(type => zone.addEventListener(type, e => {e.preventDefault();zone.classList.add('is-over');}));
    ['dragleave','drop'].forEach(type => zone.addEventListener(type, e => {e.preventDefault();zone.classList.remove('is-over');}));
    zone.addEventListener('drop', e => processFile(e.dataTransfer?.files?.[0]));
  }

  window.SentimentLifeComet = {
    version: PROFILE.version,
    mounted: false,
    profile: PROFILE,
    mount,
    ingest,
    normalize: input => dedupeRecords(typeof input === 'string' ? parseLooseText(input) : flattenCandidates(input)),
    records: () => state.records.slice(),
    state: () => ({...state, records: state.records.length})
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      if (!mount()) setTimeout(mount, 300);
    }, {once:true});
  } else if (!mount()) {
    setTimeout(mount, 300);
  }
})();
