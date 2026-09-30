export const site = {
  name: "Yuxuan Yuan",
  role: "PhD Student in Astronomy",
  institution: "Tsinghua University",
  email: "yuanyx26@tsinghua.edu.cn",
  github: "https://github.com/Yuxuan-XIU",
  linkedin: "https://www.linkedin.com/in/yuxuan-yuan-a40176350/",
  cv: `${import.meta.env.BASE_URL.endsWith("/") ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`}cv-yuxuan-yuan.pdf`
} as const;

export const researchAreas = [
  {
    index: "01",
    title: "Exoplanet Atmospheres",
    description: "Reading the physical and chemical stories encoded in the light that passes through distant atmospheres."
  },
  {
    index: "02",
    title: "Planet Detection",
    description: "Finding subtle planetary signals and constraining the properties of worlds beyond the Solar System."
  },
  {
    index: "03",
    title: "Orbital Dynamics",
    description: "Exploring resonances, stability, and the long-term evolution of planetary systems."
  }
] as const;
