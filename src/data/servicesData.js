import { 
  Smartphone, Blocks, Brain, ShoppingCart, Gamepad2, Wifi, Shield, 
  Code2, Users, Palette, Globe, Headphones, Wrench, UserPlus, TrendingUp 
} from 'lucide-react';

export const servicesData = {
  'mobile-app-development': {
    title: "Mobile App Development",
    icon: Smartphone,
    headline: "Custom Mobile App Development for Scalable Growth",
    overview: "In a mobile-first world, your application is often the primary touchpoint for your customers. Groish delivers enterprise-grade mobile solutions that combine native performance with cross-platform efficiency. We specialize in building scalable, secure, and user-centric applications for iOS and Android platforms that drive engagement and business growth.",
    painPoints: [
      "Slow time-to-market due to inefficient development cycles.",
      "Fragmented user experiences across different devices and platforms.",
      "High maintenance costs associated with legacy codebases.",
      "Performance issues and crashes leading to poor user retention."
    ],
    solutions: [
      { title: "Agile Development Teams", desc: "Rapid iteration cycles ensuring faster delivery without compromising quality." },
      { title: "Cross-Platform Excellence", desc: "Utilizing frameworks like React Native and Flutter for unified iOS and Android deployment." },
      { title: "User-Centric Design", desc: "Seamless UX/UI design principles applied to every interaction." },
      { title: "Automated Deployment", desc: "CI/CD pipelines for fast, reliable, and frequent releases." }
    ],
    outcomes: [
      "40% reduction in development time through cross-platform strategies.",
      "Consistent 5-star app store ratings driven by superior performance.",
      "Scalable architecture supporting millions of active users."
    ]
  },
  'blockchain-development': {
    title: "Blockchain Development",
    icon: Blocks,
    headline: "Secure and Transparent Blockchain Solutions",
    overview: "Groish empowers enterprises to leverage decentralized technologies for enhanced security, transparency, and efficiency. From smart contracts to private permissioned networks, our blockchain solutions are designed to eliminate intermediaries and build trust in your digital operations.",
    painPoints: [
      "Vulnerabilities in data security and centralized storage.",
      "High susceptibility to fraud and unauthorized tampering.",
      "Inefficient, slow, and costly transaction processes.",
      "Lack of verifiable transparency in supply chains or financial ledgers."
    ],
    solutions: [
      { title: "Decentralized Applications (DApps)", desc: "Building resilient, tamper-proof applications on major blockchain protocols." },
      { title: "Smart Contract Development", desc: "Self-executing contracts that automate processes and enforce agreements without intermediaries." },
      { title: "Private Ledger Implementation", desc: "Secure, permissioned blockchains tailored for enterprise data privacy." },
      { title: "Security Audits", desc: "Rigorous testing of smart contracts to prevent exploits." }
    ],
    outcomes: [
      "Immutable data records ensuring 100% auditability and trust.",
      "Significant reduction in transaction costs and processing times.",
      "Enhanced security posture against cyber threats and data manipulation."
    ]
  },
  'artificial-intelligence': {
    title: "Artificial Intelligence",
    icon: Brain,
    headline: "AI-Driven Solutions for Smarter Decisions",
    overview: "Unlock the power of your data with Groish's advanced AI and Machine Learning services. We transform raw data into actionable insights, automate complex decision-making processes, and create intelligent systems that learn and adapt to your business needs.",
    painPoints: [
      "Heavy reliance on manual, repetitive, and error-prone processes.",
      "Slow decision-making due to lack of real-time insights.",
      "Data overload leading to missed opportunities and paralysis.",
      "Inconsistent customer experiences across support channels."
    ],
    solutions: [
      { title: "Predictive Analytics", desc: "Forecasting trends and behaviors to stay ahead of the market." },
      { title: "Machine Learning Models", desc: "Custom algorithms that improve accuracy and efficiency over time." },
      { title: "Intelligent Automation", desc: "RPA enhanced with AI to handle complex, unstructured tasks." },
      { title: "Natural Language Processing", desc: "Chatbots and analysis tools that understand and generate human language." }
    ],
    outcomes: [
      "Data-driven strategic decisions made 3x faster.",
      "60% reduction in operational costs through intelligent automation.",
      "Personalized customer experiences at scale."
    ]
  },
  'ecommerce-development': {
    title: "Ecommerce Development",
    icon: ShoppingCart,
    headline: "End-to-End Ecommerce Development for Growth",
    overview: "We build robust, high-converting ecommerce platforms that provide seamless shopping experiences. Whether you need a custom storefront or a complex multi-vendor marketplace, Groish delivers solutions that drive sales and streamline inventory management.",
    painPoints: [
      "Slow website performance leading to high bounce rates.",
      "Poor mobile user experience frustrating potential buyers.",
      "Limited payment gateway integrations restricting global sales.",
      "High cart abandonment rates due to complex checkout flows."
    ],
    solutions: [
      { title: "Performance Optimization", desc: "High-speed architectures for instant page loads." },
      { title: "Responsive Design", desc: "Mobile-first layouts ensuring a perfect experience on any device." },
      { title: "Seamless Checkout", desc: "Frictionless payment processes reducing abandonment." },
      { title: "Headless Commerce", desc: "Decoupling frontend and backend for maximum flexibility." }
    ],
    outcomes: [
      "Significant increase in conversion rates and average order value.",
      "Streamlined inventory and order management workflows.",
      "Global reach with multi-currency and multi-language support."
    ]
  },
  'gaming-development': {
    title: "Gaming Development",
    icon: Gamepad2,
    headline: "Engaging Gaming Solutions for Entertainment and Education",
    overview: "Groish creates immersive gaming experiences that captivate audiences. From casual mobile games to complex educational simulations, our development team leverages cutting-edge engines to deliver stunning visuals and engaging gameplay mechanics.",
    painPoints: [
      "Lack of interactive and engaging content for users.",
      "Reliance on outdated game engines limiting visual quality.",
      "Scalability issues during high-traffic multiplayer sessions.",
      "Difficulty in monetizing user engagement effectively."
    ],
    solutions: [
      { title: "Feature-Rich Game Design", desc: "Compelling narratives and mechanics that keep players hooked." },
      { title: "Modern Engine Utilization", desc: "Expertise in Unity and Unreal Engine for top-tier graphics." },
      { title: "Scalable Server Architecture", desc: "Backend infrastructure supporting thousands of concurrent players." },
      { title: "Cross-Platform Development", desc: "Games that run smoothly on mobile, PC, and web." }
    ],
    outcomes: [
      "Higher user retention and longer session times.",
      "Robust multiplayer performance with minimal latency.",
      "Successful monetization through integrated purchases and ads."
    ]
  },
  'iot-development': {
    title: "IoT Development",
    icon: Wifi,
    headline: "Intelligent IoT Solutions for Connected Enterprises",
    overview: "Connect your physical assets to the digital world. Groish provides comprehensive Internet of Things (IoT) development services, from firmware programming to cloud platform integration, enabling real-time monitoring and control of your devices.",
    painPoints: [
      "Intermittent connectivity and unreliable data transmission.",
      "Security vulnerabilities in connected devices.",
      "Lack of actionable insights from sensor data.",
      "Complex integration with existing legacy systems."
    ],
    solutions: [
      { title: "Secure Device Connectivity", desc: "Robust protocols ensuring stable communication channels." },
      { title: "End-to-End Encryption", desc: "Protecting data integrity from device to cloud." },
      { title: "Real-Time Analytics Dashboard", desc: "Visualizing sensor data for immediate decision making." },
      { title: "Firmware Development", desc: "Optimized embedded software for low-power operation." }
    ],
    outcomes: [
      "Real-time operational visibility reducing downtime.",
      "Enhanced preventative maintenance capabilities.",
      "Secure and scalable ecosystem of connected devices."
    ]
  },
  'quality-assurance': {
    title: "Quality Assurance",
    icon: Shield,
    headline: "Comprehensive QA Services for Reliable Products",
    overview: "Quality is non-negotiable. Our QA experts employ a mix of automated and manual testing strategies to ensure your software is bug-free, secure, and performs optimally under all conditions before it reaches your users.",
    painPoints: [
      "Frequent software bugs disrupting user experience.",
      "Delayed product releases due to inefficient testing.",
      "Poor usability and interface inconsistencies.",
      "High maintenance costs from fixing production issues."
    ],
    solutions: [
      { title: "Automated Testing Suites", desc: "Rapid regression testing for faster release cycles." },
      { title: "Manual Exploratory Testing", desc: "Identifying complex usability and logic issues." },
      { title: "Performance Load Testing", desc: "Ensuring stability under high traffic conditions." },
      { title: "Security Vulnerability Assessment", desc: "Proactive identification of security risks." }
    ],
    outcomes: [
      "99.9% bug-free deployments and stable releases.",
      "Significantly reduced time-to-market.",
      "Lower long-term maintenance and support costs."
    ]
  },
  'software-development': {
    title: "Software Development Services",
    icon: Code2,
    headline: "Custom Software Solutions Tailored for Your Business",
    overview: "Off-the-shelf software rarely fits perfectly. Groish develops bespoke software solutions engineered to address your unique business challenges, streamline your specific workflows, and scale alongside your organizational growth.",
    painPoints: [
      "Legacy systems creating bottlenecks and inefficiencies.",
      "Disconnected workflows requiring manual data entry.",
      "Lack of scalability hindering business expansion.",
      "Generic software failing to meet specific industry compliance."
    ],
    solutions: [
      { title: "Custom Architecture Design", desc: "Software built from the ground up for your specific needs." },
      { title: "Seamless System Integration", desc: "Connecting disparate tools into a unified ecosystem." },
      { title: "Scalable Cloud Infrastructure", desc: "Future-proof backends that grow with your data." },
      { title: "Legacy Modernization", desc: "Upgrading outdated systems without business disruption." }
    ],
    outcomes: [
      "Operational efficiency increased by automating tailored workflows.",
      "Full ownership of intellectual property and code.",
      "Systems that adapt perfectly to changing business logic."
    ]
  },
  'staff-augmentation': {
    title: "Staff Augmentation",
    icon: Users,
    headline: "Flexible Talent Solutions for Project Success",
    overview: "Bridge your skills gap instantly. Groish provides on-demand access to a pool of pre-vetted, highly skilled IT professionals who integrate seamlessly with your in-house team, helping you meet deadlines and maintain high quality standards.",
    painPoints: [
      "Difficulty finding and retaining qualified niche talent.",
      "Project delays due to resource shortages.",
      "High costs and time associated with traditional recruitment.",
      "Slow onboarding processes affecting project momentum."
    ],
    solutions: [
      { title: "Vetted Senior Professionals", desc: "Access to top-tier developers and engineers." },
      { title: "Seamless Team Integration", desc: "Staff that adapts to your tools, culture, and timezone." },
      { title: "Rapid Scalability", desc: "Scale your team up or down based on project phases." },
      { title: "Administrative Management", desc: "We handle payroll, benefits, and HR for the augmented staff." }
    ],
    outcomes: [
      "Immediate project ramp-up without hiring delays.",
      "Significant reduction in recruitment overhead costs.",
      "Access to specialized skills not available locally."
    ]
  },
  'ui-ux-services': {
    title: "UI/UX Services",
    icon: Palette,
    headline: "User-Centric Design for Maximum Engagement",
    overview: "Great technology needs great design. Our UI/UX team focuses on creating intuitive, accessible, and visually stunning interfaces that guide users effortlessly toward their goals, increasing satisfaction and conversion rates.",
    painPoints: [
      "Poor usability leading to user frustration.",
      "Low engagement metrics and short session durations.",
      "Inconsistent branding across digital touchpoints.",
      "High bounce rates on landing pages and apps."
    ],
    solutions: [
      { title: "Intuitive Interface Design", desc: "Layouts that maximize clarity and ease of use." },
      { title: "Responsive & Adaptive Layouts", desc: "Designs that look perfect on every screen size." },
      { title: "Conversion Rate Optimization", desc: "Strategic design elements that drive user action." },
      { title: "User Research & Prototyping", desc: "Validating concepts before writing a single line of code." }
    ],
    outcomes: [
      "Increased user engagement and satisfaction scores.",
      "Stronger brand identity and visual consistency.",
      "Higher conversion rates through optimized user flows."
    ]
  },
  'web-development': {
    title: "Web Development",
    icon: Globe,
    headline: "Scalable Web Solutions for Enterprise Growth",
    overview: "Your website is your digital headquarters. Groish builds high-performance, secure, and SEO-friendly websites and web applications that serve as the foundation of your online presence and digital marketing efforts.",
    painPoints: [
      "Slow loading speeds affecting user experience and SEO.",
      "Outdated design failing to reflect brand authority.",
      "Poor search engine rankings limiting organic traffic.",
      "Limited scalability during traffic spikes."
    ],
    solutions: [
      { title: "Modern Tech Stack", desc: "Using React, Next.js, and Node.js for lightning-fast performance." },
      { title: "SEO-Optimized Architecture", desc: "Code structure designed for search engine visibility." },
      { title: "Responsive Implementation", desc: "Flawless functionality across mobile, tablet, and desktop." },
      { title: "Secure & Scalable Hosting", desc: "Robust infrastructure to handle enterprise-level traffic." }
    ],
    outcomes: [
      "Superior Core Web Vitals and faster load times.",
      "Improved organic search rankings and traffic.",
      "A digital presence that builds trust and authority."
    ]
  },
  'call-center-services': {
    title: "Call Center Services",
    icon: Headphones,
    headline: "Professional Call Center Solutions for Customer Satisfaction",
    overview: "Deliver exceptional customer support with our dedicated call center services. Our trained agents act as ambassadors for your brand, providing efficient, empathetic, and effective assistance across voice, chat, and email channels.",
    painPoints: [
      "Poor customer support leading to churn and negative reviews.",
      "High call abandonment rates during peak hours.",
      "Inconsistent service quality and lack of training.",
      "Language barriers and limited support hours."
    ],
    solutions: [
      { title: "Professionally Trained Agents", desc: "Rigorous training on your products and soft skills." },
      { title: "Process Efficiency", desc: "Optimized workflows to reduce handling time." },
      { title: "24/7 Monitoring & QA", desc: "Continuous oversight to ensure service standards." },
      { title: "Omnichannel Support", desc: "Seamless support across phone, email, and live chat." }
    ],
    outcomes: [
      "Higher Customer Satisfaction (CSAT) scores.",
      "Reduced wait times and call abandonment.",
      "Scalable support that grows with your customer base."
    ]
  },
  'it-support': {
    title: "IT Support",
    icon: Wrench,
    headline: "Proactive IT Support for Business Continuity",
    overview: "Keep your business running smoothly with Groish's managed IT support. We provide proactive monitoring, rapid issue resolution, and strategic guidance to ensure your infrastructure remains secure, up-to-date, and efficient.",
    painPoints: [
      "Unexpected system downtime disrupting operations.",
      "Slow resolution times for critical technical issues.",
      "Insufficient internal expertise to handle complex problems.",
      "Security risks from unpatched software."
    ],
    solutions: [
      { title: "24/7 Helpdesk Support", desc: "Round-the-clock assistance for urgent issues." },
      { title: "Proactive System Monitoring", desc: "Identifying and fixing issues before they impact you." },
      { title: "Expert Technical Guidance", desc: "Strategic advice on IT infrastructure planning." },
      { title: "Security Patch Management", desc: "Keeping all systems updated against threats." }
    ],
    outcomes: [
      "Maximized system uptime and reliability.",
      "Faster resolution of technical support tickets.",
      "Enhanced security posture and compliance."
    ]
  },
  'it-staffing': {
    title: "IT Staffing",
    icon: UserPlus,
    headline: "On-Demand IT Talent for Enterprise Projects",
    overview: "Finding the right permanent talent is challenging. Groish specializes in IT staffing, connecting you with experienced professionals who not only have the right technical skills but also fit your company culture and long-term goals.",
    painPoints: [
      "Severe shortages of qualified local IT talent.",
      "Lengthy hiring processes causing project delays.",
      "Inefficiencies due to skills gaps in current teams.",
      "High turnover rates in technical roles."
    ],
    solutions: [
      { title: "Experienced Professionals", desc: "Access to a global pool of verified tech talent." },
      { title: "Strategic Matching", desc: " aligning candidates with your specific tech stack and culture." },
      { title: "Rapid Placement", desc: "Streamlined hiring process to fill roles quickly." },
      { title: "Performance Guarantee", desc: "Ensuring new hires meet productivity expectations." }
    ],
    outcomes: [
      "Reduced time-to-hire for critical technical roles.",
      "Projects delivered on time with the right expertise.",
      "Lower turnover through better cultural fit."
    ]
  },
  'end-to-end-sales-cycle-services': {
    title: "End-to-End Sales Cycle Services",
    icon: TrendingUp,
    headline: "Complete Sales Support from Lead to Conversion",
    overview: "Accelerate your revenue growth with our comprehensive sales support services. From generating high-quality leads to nurturing prospects and closing deals, we optimize every stage of your sales funnel for maximum efficiency.",
    painPoints: [
      "Inefficient lead management and follow-up processes.",
      "Low conversion rates from marketing qualified leads.",
      "Fragmented sales processes and lack of data visibility.",
      "Sales teams spending too much time on admin tasks."
    ],
    solutions: [
      { title: "Structured Sales Support", desc: "Dedicated teams for SDR, BDR, and closing roles." },
      { title: "CRM Integration & Optimization", desc: "Ensuring clean data and efficient pipeline management." },
      { title: "Data-Driven Strategies", desc: "Using analytics to refine pitch and targeting." },
      { title: "Lead Qualification", desc: "Ensuring your closers only speak to ready-to-buy prospects." }
    ],
    outcomes: [
      "Increased pipeline velocity and revenue growth.",
      "Higher conversion rates at every funnel stage.",
      "More efficient sales operations and predictable results."
    ]
  }
};