export interface IProject {
  id: number;
  placeholder: string;
  link?: {
    title: string;
    url: string;
  };
  videoLink: string;
  title: string;
  description: string;
  role: string;
  frames: string[];
}

export const portfolioItems: IProject[] = [
  {
    id: 1,
    placeholder:
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1752533679/Jupiter-LogoMotion_1_vbnnbx.gif",
    videoLink: "https://res.cloudinary.com/dbhenrihl/video/upload/v1752256466/Jupiter-LogoMotion_wlds2m.mp4",
    title: "Jupiter - Logo Motion Design",
    description:
      "the leading decentralized liquidity aggregator, the largest DAO, and home to one of the strongest communities in crypto.",
    role: "Motion Designer · Sound Designer · Concept Designer",
    link: { url: "https://x.com/JupiterExchange/status/1916584069703311780", title: "Check It on X" },
    frames: [
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1752256258/sc-01_jyu66p.jpg",
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1752534914/ssjj_tow8ub.gif",
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1752256259/sc-03_srhlnf.jpg",
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1752256259/sc-04_y2okip.jpg",
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1752534590/sj1_ejezdd.png", 
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1752534594/sj2_hnqf7x.png", 
    ],
  },
  {
    id: 17,
    placeholder:
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1787137829/Solana-Upgrades_uqobbg.gif",
    videoLink: "https://res.cloudinary.com/dbhenrihl/video/upload/v1787134537/Solana-Upgrades_teuuzk.mp4",
    title: "Solana Upgrades",
    description:
      "Solana keeps getting faster, more capable, and more resilient.",
    role: "Motion Designer · Sound Designer",
    link: { url: "https://x.com/solana_devs/status/2080307773108015572?s=20", title: "Check It on X" },
    frames: [

    ],
  },
  {
    id: 18,
    placeholder:
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1787141864/BraceSoft_2_qm7di3.gif",
    videoLink: "https://res.cloudinary.com/dbhenrihl/video/upload/v1787141705/BraceSoftMotionFinal_wsgpkq.mp4",
    title: "Bracesoft",
    description:
      "let’s bring it all onchain",
    role: "Motion Designer .  Sound Designer",
     frames: [
      
    ],
  },
    {
    id: 18,
    placeholder:
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1778347285/PhoenixThumbnail_ptahjk.gif",
    videoLink: "https://res.cloudinary.com/dbhenrihl/video/upload/v1778346373/WTIOILPhoenixV2_d3i5kl.mp4",
    title: "phoenix.trade",
    description:
      "Solana’s on-chain perpetuals exchange",
    role: "Motion Designer",
    link: { url: "https://x.com/PhoenixTrade/status/2053929435456590287?s=20", title: "Check It on X" },
    frames: [
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1778411468/ss_k360ov.png",
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1778411317/framePhoenix_x3jtqc.gif",
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1778411466/sce_lng4n0.png",
    ],
  },
  {
    id: 16,
    placeholder:
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1775746842/yieldbaycover_zlmtnf.gif",
    videoLink: "https://res.cloudinary.com/dbhenrihl/video/upload/v1775746869/yieldbay2_mzs6vb.mp4",
    title: "yieldbay - Motion Design",
    description:
      "the final tab for solana yield",
    role: "Motion Designer · Sound Designer · Concept Designer",
    link: { url: "https://x.com/yieldbayfi/status/2039292674146996448?s=20", title: "Check It on X" },
    frames: [
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1775746848/gif2_1_qkd7n6.gif",
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1775746846/keyframes_1_lq6jke.gif",
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1775749084/Screenshot_2026-04-09_at_5.29.44_PM_ytmubw.png",
    ],
  },
  {
    id: 2,
    placeholder:
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1754088269/fr-2_mjqizu.gif",
    videoLink: "https://res.cloudinary.com/dbhenrihl/video/upload/v1754087928/ss-promo_kyo23m.mp4",
    title: "Solana Spaces",
    description:
      "Building the future of retail",
    role: "Motion Designer · Sound Designer · Concept Designer",
    frames: [
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1754088268/fr-3_lklew0.gif",
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1754088266/fr-4_zardo3.gif",
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1754088270/fr-1_zztkca.gif",
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1754088269/fr-2_mjqizu.gif",
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1754088494/Screenshot_2025-08-02_at_2.09.56_AM_oc9dlq.png",
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1754088494/Screenshot_2025-08-02_at_2.09.32_AM_nnnxl4.png",
    ],
  },
  {
    id: 3,
    placeholder: "https://res.cloudinary.com/dbhenrihl/image/upload/v1753378024/main_k6h12z.gif",
    videoLink: "https://res.cloudinary.com/dbhenrihl/video/upload/v1753377798/Meteora-morph_jcywqn.mp4",
    title: "Meteora Logo Motion",
    description:
    "Building world-class dynamic liquidity pools for liquidity providers, launchpads and token launches",
   role: "Motion Designer - Sound Designer",
    frames: [
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1753378024/met1_pc8pcj.gif",
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1753378024/Screenshot_2025-07-24_at_7.53.45_PM_hr5zvh.png",
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1753378024/met2_ojo1dp.gif",
    ],
  },
  {
    id: 4,
    placeholder: "https://res.cloudinary.com/dbhenrihl/image/upload/v1753379074/GIF-2_c1sha6.gif",
    videoLink: "https://res.cloudinary.com/dbhenrihl/video/upload/v1753378784/heiv-motionbranding_aq9mdu.mp4",
    title: "Heiv Design Studio",
    description:
    "Heiv is a creative design studio engaged in various fields of design. The studio was established with the aim of providing innovative and high-quality services across different design domains. Heiv strives to deliver unique projects for its clients by leveraging creativity and technology.",
    role: "Motion Designer · Sound Designer",
    frames: [
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1753379073/GIF-3_so8f2w.gif",
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1753379072/Gif-4_gmtnpn.gif",
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1753379072/gif-1_l6bdt6.gif",
    ],
  },
  {
    id: 5,
    placeholder: "https://res.cloudinary.com/dbhenrihl/image/upload/v1753440921/Junocover_jzc1ys.gif",
    videoLink: "https://res.cloudinary.com/dbhenrihl/video/upload/v1753440526/JUNO-2_chstbp.mp4",
    title: "Jupiter - Aggregating everything",
    description:
    "Aggregating everything ― so you keep winning",
    role: "Motion Designer · Concept Designer",
    link: { url: "https://x.com/JupiterExchange/status/1931369960481190158", title: "Check It on X" },
    frames: [
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1753440921/Junocover_jzc1ys.gif",
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1753441486/x-juno_sjwaeu.jpg",
    ],
  },
  {
    id: 6,
    placeholder: "https://res.cloudinary.com/dbhenrihl/image/upload/v1757886818/DRiP-Radar_1_1_gtfwgy.gif",
    videoLink: "https://res.cloudinary.com/dbhenrihl/video/upload/v1757886829/DRiP-Radar_ybkdat.mp4",
    title: "DRiP - Custom Notifications",
    description:
    "DRiP - The Collectibles Platform. Collect, create, and earn on crypto's #1 content app",
    role: "Motion Designer · Sound Designer · Concept Designer",
    frames: [

    ],
  },
  {
    id: 7,
    placeholder:
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1753026383/LogoMotionSS_omlucu.gif",
    videoLink: "https://res.cloudinary.com/dbhenrihl/video/upload/v1753026141/LogoMotion_d0zt5x.mp4",
    title: "Solana Spaces Logo Motion",
    description:
      "Building the Future of Retail",
    role: "Motion Designer - Sound Designer",
    link: { url: "https://x.com/solanaspaces/status/1910432418269446257", title: "Check It on X" },
    frames: [
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1753027397/retailtext_2_ny8hgh.gif",
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1753027396/Colors_1_qcgnav.gif",
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1753028163/ssmotion_sq5ew0.gif",
    ],
  },
  {
    id: 8,
    placeholder: "https://res.cloudinary.com/dbhenrihl/image/upload/v1754002735/moneysendjp_smsjx5.gif",
    videoLink: "https://res.cloudinary.com/dbhenrihl/video/upload/v1754002681/moneysendjp_zgdopu.mp4",
    title: "Send Money Anywhere",
    description:
    "Motion graphics showcasing the Universal Send feature of Jupiter Exchange",
    role: "Motion Designer · Sound Designer · Concept Designer",
    link: { url: "https://x.com/JupiterExchange/status/1939609844979224726", title: "Check It on X" },
    frames: [
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1754002320/Screenshot_2025-08-01_at_2.17.58_AM_vuhbes.png",
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1754002322/Screenshot_2025-08-01_at_2.16.46_AM_vqvvwu.png",
    ],
  },
  {
    id: 9,
    placeholder: "https://res.cloudinary.com/dbhenrihl/image/upload/v1753442877/Arna_3_u9ln3t.gif",
    videoLink: "https://res.cloudinary.com/dbhenrihl/video/upload/v1753442006/Arna_aeimhy.mp4",
    title: "Arna Diesel Logo Motion",
    description:
    "Arna Diesel is a source of buying and selling trucks",
    role: "Motion Designer · Sound Designer · Concept Designer",
    frames: [
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1753442313/ArnaDizel_hyyuzm.jpg",
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1753442530/Arna_2_xawvwe.gif",
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1753442739/ShapesTruck_eeudpf.jpg",
    ],
  },
  {
    id: 10,
    placeholder: "https://res.cloudinary.com/dbhenrihl/image/upload/v1754005120/LogoMotion-Eshragh_a5sqle.gif",
    videoLink: "https://res.cloudinary.com/dbhenrihl/video/upload/v1754004911/LogoMotion-Eshragh_arsgil.mp4",
    title: "Eshragh Medical",
    description:
    "Eshragh Medical Imaging Center - Logo Motion",
    role: "Motion Designer",
    frames: [
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1754005419/fr_dbb0f6.gif",
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1754005420/fr-2_kjqw1f.gif",
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1754005428/fr-3_yrjapd.gif",
    ],
  },
  {
    id: 11,
     placeholder:
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1754004061/PPP_xxgej0.gif",
    videoLink: "https://res.cloudinary.com/dbhenrihl/video/upload/v1754004005/PPP_nrbemj.mp4",
    title: "PPP",
    description:
      "is an acronym from Jupiter Exchange - Peer Pump Peer, as opposed to PVP (Player Versus Player), refers to the J4J mentality of helping fellow Catdets and community members succeed in their personal, professional, and all other aspects of life.",
    role: "Motion Designer · Sound Designer · Concept Designer",
    frames: [
    ],
  },
  {
    id: 12,
    placeholder: "https://res.cloudinary.com/dbhenrihl/image/upload/v1754089291/wagmi_2_q1utcq.gif",
    videoLink: "https://res.cloudinary.com/dbhenrihl/video/upload/v1754089177/wagmi_lcygsb.mp4",
    title: "WAGMI",
    description:
    "We Are Gonna Make It",
    role: "Motion Designer",
    frames: [
    ],
  },
  {
    id: 13,
    placeholder: "https://res.cloudinary.com/dbhenrihl/image/upload/v1754089680/prowin_luhdgo.gif",
    videoLink: "https://res.cloudinary.com/dbhenrihl/video/upload/v1754089695/prowin_co1eaa.mp4",
    title: "Winning.",
    description:
    "Created for JUP Pro.",
    role: "Motion Designer · Sound Designer",
    link: { url: "https://x.com/JupPro/status/1921914058376139153", title: "Check It on X" },
    frames: [
    ],
  },
  {
    id: 14,
    placeholder: "https://res.cloudinary.com/dbhenrihl/image/upload/v1754133774/juphome2_kq2xdv.gif",
    videoLink: "https://res.cloudinary.com/dbhenrihl/video/upload/v1754133715/juphome2_jzz8jp.mp4",
    title: "JUP is home",
    description:
    "Created for Jupiter Exchange.",
    role: "Motion Designer · Sound Designer · Concept Designer",
    link: { url: "https://x.com/JupiterExchange/status/1932056240894447958", title: "Check It on X" },
    frames: [
    ],
  },
  {
    id: 15,
    placeholder: "https://res.cloudinary.com/dbhenrihl/image/upload/v1754134537/cult_bi3w6a.gif",
    videoLink: "https://res.cloudinary.com/dbhenrihl/video/upload/v1754134262/cult_oq24ek.mp4",
    title: "Jupiter Launchpads",
    description:
    "Created for Jupiter Exchange.",
    role: "Motion Designer · Sound Designer · Concept Designer",
    frames: [
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1754134442/xApple_lrcyzm.gif",
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1754134441/gfm_kmyd5o.gif",
      "https://res.cloudinary.com/dbhenrihl/image/upload/v1754134442/Trends_vvacmr.gif",
    ],
  },
  
 
  
];

export const getSingleProject = (id: number) => {
  return portfolioItems.find((project) => project.id === id);
};
