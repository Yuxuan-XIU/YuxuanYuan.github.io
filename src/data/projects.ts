export const projects = [
  {
    slug: "orbital-dynamics",
    number: "01",
    eyebrow: "Orbital dynamics",
    title: "Inclination Resonance",
    summary: "Investigating the dynamical origin of inclination excitation in migrating resonant planetary systems, with emphasis on periodic-orbit families, vertical instability, and conditions governing the onset of inclination resonance.",
    status: "Ongoing research",
    images: [
      {
        src: "assets/projects/periodic-orbits.webp",
        alt: "Families of periodic orbits of 2:1 MMR",
        caption: "Families of periodic orbits of 2:1 MMR"
      },
      {
        src: "assets/projects/koi134-search.webp",
        alt: "Searching solution with Jnkepler",
        caption: "Searching solution by optimizing reduced chi squire with Jnkepler"
      }
    ]
  },
  {
    slug: "vega-companion",
    number: "02",
    eyebrow: "Planet detection",
    title: "Searching exoplanet around Vega",
    summary: "Searching for a possible planetary signal around Vega in high-resolution spectra by searrching atmospheric emission features and constraining its properties through injection-and-recovery tests.",
    status: "Research project",
    images: [
      {
        src: "assets/projects/vega-constraint.webp",
        alt: "Signal-to-noise map for a planet candidate around Vega",
        caption: "Injection constraints in the inclination–radius plane."
      }
    ]
  },
  {
    slug: "hd80653b-transit",
    number: "03",
    eyebrow: "Transit geometry",
    title: "The Transit of HD 80653 b",
    summary: "A geometric view of HD 80653 b in transit, where its extreme proximity to the host star may drive atmospheric escape and produce an extended envelope of escaping material.",
    status: "Research project",
    images: [
      {
        src: "assets/projects/hd80653b-transit.png",
        alt: "Orbital geometry illustration for the transit of HD 80653 b",
        caption: "A compact visualization of the planet’s transit chord."
      }
    ]
  }
] as const;
