export const projects = [
  {
    slug: "orbital-dynamics",
    number: "01",
    eyebrow: "Orbital dynamics",
    title: "Periodic Orbits & Mean-motion Resonances",
    summary: "Exploring the structure and stability of resonant planetary systems through periodic-orbit families and numerical searches.",
    status: "Ongoing research",
    images: [
      {
        src: "assets/projects/periodic-orbits.webp",
        alt: "Families of stable and unstable periodic trajectories in eccentricity space",
        caption: "Stable and unstable branches across a family of periodic solutions."
      },
      {
        src: "assets/projects/koi134-search.webp",
        alt: "Numerical solution searches for two-to-one, three-to-one and four-to-one mean-motion resonances",
        caption: "A numerical search across several mean-motion resonances for KOI-134."
      }
    ]
  },
  {
    slug: "vega-companion",
    number: "02",
    eyebrow: "Planet detection",
    title: "Constraining a Planet Candidate around Vega",
    summary: "Testing where a possible companion could remain detectable by mapping signal-to-noise across orbital inclination and planet radius.",
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
    summary: "A geometric view of a close-in planet crossing its host star, connecting orbital configuration to the transit signal we observe.",
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
