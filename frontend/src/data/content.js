export const THEMES = {
    gate: {
        bg: '#140407', surface: '#1F070C', surface2: '#250B10',
        text: '#FAF5F0', text2: '#B59E9E',
        accent: '#9E1C38', highlight: '#E54B6E',
        border: 'rgba(247, 237, 230, 0.12)', glow: 'rgba(184, 35, 70, 0.4)',
        webgl: '#B82346',
    },
    tech: {
        bg: '#0D0204', surface: '#19060A', surface2: '#250B10',
        text: '#FCF8F5', text2: '#C8A4A9',
        accent: '#B82346', highlight: '#E54B6E',
        border: 'rgba(180, 50, 75, 0.25)', glow: 'rgba(184, 35, 70, 0.4)',
        webgl: '#B82346',
    },
    marketing: {
        bg: '#220811', surface: '#320F1C', surface2: '#451627',
        text: '#FFF5F7', text2: '#DFBAC5',
        accent: '#D85375', highlight: '#F896AF',
        border: 'rgba(224, 130, 155, 0.28)', glow: 'rgba(216, 83, 117, 0.35)',
        webgl: '#D85375',
    },
    both: {
        bg: '#FAF7F2', surface: '#FFFFFF', surface2: '#F2EBE3',
        text: '#20040A', text2: '#5E4249',
        accent: '#5E0D1E', highlight: '#8F1630',
        border: 'rgba(61, 8, 19, 0.14)', glow: 'rgba(94, 13, 30, 0.25)',
        webgl: '#8F1630',
    },
};

export const TEAM = [
    {
        id: 'dev-1',
        name: 'Valentin Rousseau',
        role: 'Lead Systems Architect',
        discipline: 'TECH',
        specs: 'Rust · WebGL · Distributed Platforms',
        signature: 'Krypton Core — 120k req/s realtime asset broker',
    },
    {
        id: 'dev-2',
        name: 'Elena Vane-Chen',
        role: 'Principal Creative Engineer',
        discipline: 'TECH',
        specs: 'Shaders · Three.js · Micro-interaction choreography',
        signature: 'Chronos Spatial — 60fps WebGL brand flagship',
    },
    {
        id: 'mkt-1',
        name: 'Aurelia Thorne',
        role: 'Brand Strategy Director',
        discipline: 'MARKETING',
        specs: 'Narrative Arbitrage · GTM · Positioning, seed to Series B',
        signature: 'Velvet Capital — rebrand & $42M category launch',
    },
];

export const PORTFOLIOS = {
    tech: {
        label: 'Tech',
        kicker: 'Domain 01 — Engineering',
        heroLines: ['We build systems', 'that feel', 'inevitable.'],
        sub: 'Interfaces, engines, infrastructure. The Socxio engineering arm ships software with the finish of a couture house.',
        image: 'https://images.unsplash.com/photo-1546414701-81cc6963c67f?crop=entropy&cs=srgb&fm=jpg&auto=format&fit=crop&q=85&w=1600',
        story: [
            'Every product carries an architecture, whether someone drew it or not. We draw it. The engineering side of Socxio treats latency, memory and motion as design materials — the same way a tailor treats cloth.',
            'From realtime brokers pushing a hundred thousand messages a second to shaders that make a brand feel physical, we build the parts users never see and never forget.',
        ],
        projects: [
            { title: 'Krypton Core', meta: 'Realtime Asset Broker · Rust', metric: '120k req/s', desc: 'A distributed asset broker handling 120,000 requests per second with zero dropped frames at the edge.' },
            { title: 'Chronos Spatial', meta: 'WebGL Flagship · Three.js / GLSL', metric: '60fps', desc: 'A spatial commerce flagship where every product lives in a shader-lit scene, locked at 60fps on mid-tier hardware.' },
            { title: 'Meshline Ledger', meta: 'Distributed Audit Trail', metric: '4 regions', desc: 'An append-only audit system spanning four regions, verifiable end to end and boring in exactly the right way.' },
        ],
        capabilities: [
            { n: '01', title: 'Fullstack Architecture', desc: 'Type-safe systems from database to draw call.' },
            { n: '02', title: 'Realtime & Distributed', desc: 'WebSockets, brokers, consensus — built for load.' },
            { n: '03', title: 'WebGL & Motion', desc: 'Shaders, 3D scenes, interaction choreography.' },
            { n: '04', title: 'Performance Forensics', desc: 'We make slow things fast, measurably.' },
        ],
    },
    marketing: {
        label: 'Marketing',
        kicker: 'Domain 02 — Narrative',
        heroLines: ['We build narratives', 'that convert', 'on contact.'],
        sub: 'Positioning, story, demand. The Socxio narrative arm turns quiet products into categories with a name, a face and a price of entry.',
        image: 'https://images.unsplash.com/photo-1496865534669-25ec2a3a0fd3?crop=entropy&cs=srgb&fm=jpg&auto=format&fit=crop&q=85&w=1600',
        story: [
            'Nobody buys a spec sheet. They buy the sentence they can repeat in a boardroom. Our narrative work starts where the engineers stop — at meaning — and works backwards until every touchpoint agrees.',
            'Launches, rebrands, category design: we write the story, stage it, and run the growth engine that keeps it alive after the applause.',
        ],
        projects: [
            { title: 'Velvet Capital', meta: 'Rebrand & Category Launch', metric: '$42M raised', desc: 'A full rebrand and go-to-market blitz that carried a fintech from seed stealth to a $42M category launch in seven markets.' },
            { title: 'Solstice Engine', meta: 'Growth Program · B2B SaaS', metric: '3.2x pipeline', desc: 'A compounding demand program pairing editorial content with surgical ABM, tripling qualified pipeline in two quarters.' },
            { title: 'Marrow Sprint', meta: 'Positioning Studio · 6 Weeks', metric: '1 sentence', desc: 'A six-week positioning sprint that distilled eleven product claims into one sentence the whole company could say.' },
        ],
        capabilities: [
            { n: '01', title: 'Narrative Positioning', desc: 'The sentence your market repeats for you.' },
            { n: '02', title: 'Go-To-Market Blitz', desc: 'Launch choreography from tease to conversion.' },
            { n: '03', title: 'Growth Engines', desc: 'Compounding demand, not one-off campaigns.' },
            { n: '04', title: 'Brand Systems', desc: 'Voice, identity and ritual, engineered to scale.' },
        ],
    },
    both: {
        label: 'Both',
        kicker: 'Domain 03 — Synergy',
        heroLines: ['From silicon', 'to story,', 'one atelier.'],
        sub: 'The full arc. When the people who build the product also write its story, nothing gets lost in translation — and everything converts.',
        image: 'https://images.pexels.com/photos/18620026/pexels-photo-18620026.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200',
        story: [
            'Most agencies hand off. The brand deck goes to one shop, the build to another, and the product arrives speaking two languages. Socxio was built to end that conversation.',
            'Three people, one table. The architects who write the shaders sit across from the strategist who writes the launch — so the product and its story are the same object.',
        ],
        projects: [
            { title: 'Chronos, End to End', meta: 'Build + Launch · Full Arc', metric: '0 → 60fps → market', desc: 'Engineered the WebGL flagship, wrote the narrative around it, and ran the launch — one team, one arc, no handoffs.' },
            { title: 'Velvet Platform', meta: 'Product + Rebrand', metric: '$42M category', desc: 'Built the realtime platform underneath the brand, then positioned and launched both as a single category king move.' },
            { title: 'The Atelier Model', meta: 'Method · Ongoing', metric: '3 people', desc: 'Our own experiment: a studio small enough that strategy and code share a desk. This site is the proof.' },
        ],
        capabilities: [
            { n: '01', title: 'Design & Build', desc: 'Product engineering with brand DNA in the repo.' },
            { n: '02', title: 'Position & Launch', desc: 'Narrative authored by the people who shipped it.' },
            { n: '03', title: 'Category Design', desc: 'Name the thing, own the thing.' },
            { n: '04', title: 'Full-Arc Partnership', desc: 'One table, zero handoffs, end to end.' },
        ],
    },
};

export const MARQUEE_ITEMS = [
    'NARRATIVE MEETS ARCHITECTURE',
    'WHERE CODE CONVERTS',
    'CRAFT OVER CONFORMITY',
    'SOCXIO ATELIER · MMXXVI',
];
