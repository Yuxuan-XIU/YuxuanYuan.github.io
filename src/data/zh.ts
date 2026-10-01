export const zhResearchAreas = [
  {
    index: "01",
    title: "行星探测",
    description: "从微弱的观测信号中寻找行星，并约束太阳系外世界的物理性质。"
  },
  {
    index: "02",
    title: "系外行星大气",
    description: "解读穿过遥远行星大气的光，从中理解其物理过程与化学组成。"
  },
  {
    index: "03",
    title: "轨道动力学",
    description: "研究共振、稳定性，以及行星系统的长期演化。"
  }
] as const;

export const zhProjects = [
  {
    slug: "vega-companion",
    number: "01",
    eyebrow: "行星探测",
    title: "寻找织女星周围的系外行星",
    summary: "通过高分辨率光谱寻找织女星附近可能存在的行星信号：搜索其大气发射特征，并利用注入—恢复测试约束行星性质。",
    status: "研究项目",
    images: [
      {
        src: "assets/projects/vega-constraint.webp",
        alt: "织女星行星候选体的信噪比分布图",
        caption: "倾角—半径平面上的注入测试约束。"
      }
    ]
  },
  {
    slug: "hd80653b-transit",
    number: "02",
    eyebrow: "系外行星大气",
    title: "熔岩行星的大气逃逸",
    summary: "从凌日几何出发研究 HD 80653 b。由于它距离主星极近，强烈辐照可能驱动大气逃逸，并形成延展的逃逸物质包层。",
    status: "研究项目",
    images: [
      {
        src: "assets/projects/hd80653b-transit.png",
        alt: "HD 80653 b 凌日轨道几何示意图",
        caption: "行星凌日路径的简洁示意。"
      }
    ]
  },
  {
    slug: "orbital-dynamics",
    number: "03",
    eyebrow: "轨道动力学",
    title: "倾角共振",
    summary: "研究处于共振并发生迁移的行星系统中，轨道倾角被激发的动力学起源，重点关注周期轨道族、垂直不稳定性，以及倾角共振开始发生的条件。",
    status: "进行中的研究",
    images: [
      {
        src: "assets/projects/periodic-orbits.webp",
        alt: "二比一平运动共振的周期轨道族",
        caption: "二比一平运动共振的周期轨道族。"
      },
      {
        src: "assets/projects/koi134-search.webp",
        alt: "使用 Jnkepler 搜索数值解",
        caption: "使用 Jnkepler 优化约化卡方并搜索数值解。"
      }
    ]
  }
] as const;
