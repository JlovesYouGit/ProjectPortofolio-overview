export interface Project {
  id: string;
  title: string;
  description: string;
  securityHighlight: string;
  techStack: string[];
  githubUrl: string;
  qualityBadge?: string;
}

export const projects: Project[] = [
  {
    id: "agi-investmodel",
    title: "AGI-investmodel",
    description: "AI-powered trading platform with enterprise security",
    securityHighlight: "Multi-layer authentication with encrypted configuration and secure API key management for financial operations",
    techStack: ["Python", "AI/ML", "Security", "Trading APIs"],
    githubUrl: "https://github.com/JlovesYouGit/AGI-investmodel",
    qualityBadge: "Enterprise",
  },
  {
    id: "scryptmineos",
    title: "ScryptMineOS",
    description: "Multi-user cryptocurrency mining with role-based access control",
    securityHighlight: "Role-based access control with audit logging and encrypted user credential management",
    techStack: ["Python", "RBAC", "Mining", "Audit Logging"],
    githubUrl: "https://github.com/JlovesYouGit/ScryptMineOS",
    qualityBadge: "Production",
  },
  {
    id: "basic-network-tool",
    title: "BASIC-NETWORK-TOOL",
    description: "Automated network security scanning and device management",
    securityHighlight: "Automated vulnerability scanning and threat detection with real-time network monitoring",
    techStack: ["Python", "Network Security", "Scanning", "Automation"],
    githubUrl: "https://github.com/JlovesYouGit/BASIC-NETWORK-TOOL",
  },
  {
    id: "netes-spectrum-bench",
    title: "NETesSpectrumBench",
    description: "WiFi spectrum analysis with advanced security visualization",
    securityHighlight: "Real-time security monitoring with alerting for unauthorized access points and signal interference",
    techStack: ["Python", "WiFi", "Spectrum Analysis", "Monitoring"],
    githubUrl: "https://github.com/JlovesYouGit/NETesSpectrumBench",
  },
  {
    id: "mysm",
    title: "mysm",
    description: "Telecommunications security platform implementing SS7 protocols",
    securityHighlight: "SS7 protocol security implementation with vulnerability detection and prevention mechanisms",
    techStack: ["Python", "Telecommunications", "SS7", "Protocol Security"],
    githubUrl: "https://github.com/JlovesYouGit/mysm",
    qualityBadge: "Security Focus",
  },
];

export const featuredProjects = projects.slice(0, 3);
