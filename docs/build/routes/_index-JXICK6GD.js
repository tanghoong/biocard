import {
  require_jsx_dev_runtime
} from "/docs/build/_shared/chunk-NRYKPGXU.js";
import {
  createHotContext
} from "/docs/build/_shared/chunk-WBV36VXN.js";
import "/docs/build/_shared/chunk-QXIHW5KQ.js";
import {
  require_react
} from "/docs/build/_shared/chunk-JGA5HE7W.js";
import {
  __toESM
} from "/docs/build/_shared/chunk-6RDTFI4Q.js";

// app/components/BusinessCardMockup.tsx
var import_react2 = __toESM(require_react(), 1);

// node_modules/lucide-react/dist/esm/createLucideIcon.js
var import_react = __toESM(require_react());

// node_modules/lucide-react/dist/esm/defaultAttributes.js
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

// node_modules/lucide-react/dist/esm/createLucideIcon.js
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim();
var createLucideIcon = (iconName, iconNode) => {
  const Component = (0, import_react.forwardRef)(
    ({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, ...rest }, ref) => (0, import_react.createElement)(
      "svg",
      {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: ["lucide", `lucide-${toKebabCase(iconName)}`, className].join(" "),
        ...rest
      },
      [
        ...iconNode.map(([tag, attrs]) => (0, import_react.createElement)(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    )
  );
  Component.displayName = `${iconName}`;
  return Component;
};

// node_modules/lucide-react/dist/esm/icons/github.js
var Github = createLucideIcon("Github", [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef"
    }
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]
]);

// node_modules/lucide-react/dist/esm/icons/hexagon.js
var Hexagon = createLucideIcon("Hexagon", [
  [
    "path",
    {
      d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
      key: "yt0hxn"
    }
  ]
]);

// node_modules/lucide-react/dist/esm/icons/linkedin.js
var Linkedin = createLucideIcon("Linkedin", [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
]);

// node_modules/lucide-react/dist/esm/icons/mail.js
var Mail = createLucideIcon("Mail", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);

// node_modules/lucide-react/dist/esm/icons/message-circle.js
var MessageCircle = createLucideIcon("MessageCircle", [
  ["path", { d: "m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z", key: "v2veuj" }]
]);

// node_modules/lucide-react/dist/esm/icons/moon.js
var Moon = createLucideIcon("Moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);

// node_modules/lucide-react/dist/esm/icons/phone.js
var Phone = createLucideIcon("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
]);

// node_modules/lucide-react/dist/esm/icons/qr-code.js
var QrCode = createLucideIcon("QrCode", [
  ["rect", { width: "5", height: "5", x: "3", y: "3", rx: "1", key: "1tu5fj" }],
  ["rect", { width: "5", height: "5", x: "16", y: "3", rx: "1", key: "1v8r4q" }],
  ["rect", { width: "5", height: "5", x: "3", y: "16", rx: "1", key: "1x03jg" }],
  ["path", { d: "M21 16h-3a2 2 0 0 0-2 2v3", key: "177gqh" }],
  ["path", { d: "M21 21v.01", key: "ents32" }],
  ["path", { d: "M12 7v3a2 2 0 0 1-2 2H7", key: "8crl2c" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M12 3h.01", key: "n36tog" }],
  ["path", { d: "M12 16v.01", key: "133mhm" }],
  ["path", { d: "M16 12h1", key: "1slzba" }],
  ["path", { d: "M21 12v.01", key: "1lwtk9" }],
  ["path", { d: "M12 21v-1", key: "1880an" }]
]);

// node_modules/lucide-react/dist/esm/icons/share.js
var Share = createLucideIcon("Share", [
  ["path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8", key: "1b2hhj" }],
  ["polyline", { points: "16 6 12 2 8 6", key: "m901s6" }],
  ["line", { x1: "12", x2: "12", y1: "2", y2: "15", key: "1p0rca" }]
]);

// node_modules/lucide-react/dist/esm/icons/sun.js
var Sun = createLucideIcon("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
]);

// node_modules/lucide-react/dist/esm/icons/twitter.js
var Twitter = createLucideIcon("Twitter", [
  [
    "path",
    {
      d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
      key: "pff0z6"
    }
  ]
]);

// app/data/mockData.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\data\\mockData.ts"
  );
  import.meta.hot.lastModified = "1727417390155.157";
}
var mockData = {
  "user": {
    "name": "Charlie Tang Hoong",
    "title": "Founder of Beam.cards, Lukis.app, Kamfu.net",
    "avatar": "https://picsum.photos/seed/avatar/300/300",
    "slogan": "Turning ideas into reality, one line of code at a time.",
    "social": [
      { "platform": "github", "url": "https://github.com/tanghoong", "icon": "Github" },
      { "platform": "linkedin", "url": "https://www.linkedin.com/in/tanghoong/", "icon": "Linkedin" },
      { "platform": "twitter", "url": "https://twitter.com/tanghoong", "icon": "Twitter" },
      { "platform": "email", "url": "mailto:tang@beam.cards", "icon": "Mail" },
      { "platform": "phone", "url": "tel:+60123456789", "icon": "Phone" },
      { "platform": "whatsapp", "url": "https://wa.me/60123456789", "icon": "MessageCircle" }
    ]
  },
  "about": {
    "bio": "A passionate entrepreneur with a love for creating innovative solutions. I specialize in web development and cloud technologies, always striving to learn and implement the latest industry best practices.",
    "skills": [
      "Agile Methodologies",
      "Communication",
      "Problem Solving",
      "Project Management",
      "Team Leadership",
      "User Experience (UX) Design",
      "Algorithms",
      "AWS",
      "CI/CD",
      "Cloud Computing",
      "CSS",
      "Data Structures",
      "Docker",
      "Git",
      "GraphQL",
      "HTML",
      "JavaScript",
      "Node.js",
      "PHP",
      "Python",
      "React",
      "RESTful APIs",
      "SQL",
      "System Architecture",
      "TypeScript"
    ]
  },
  "experience": [
    {
      "title": "Founder & CEO",
      "company": "Beam.cards",
      "period": "2020 - Present",
      "responsibilities": [
        "Developed and launched innovative digital business card platform",
        "Led a team of developers and designers to create a user-friendly interface",
        "Implemented cutting-edge technologies to ensure seamless user experience"
      ]
    },
    {
      "title": "Co-founder",
      "company": "Lukis.app",
      "period": "2018 - Present",
      "responsibilities": [
        "Conceptualized and developed a creative design application",
        "Managed product development lifecycle and user feedback integration",
        "Collaborated with artists to create unique digital brushes and tools"
      ]
    },
    {
      "title": "Tech Lead",
      "company": "Kamfu.net",
      "period": "2015 - 2018",
      "responsibilities": [
        "Oversaw the development of a social networking platform for professionals",
        "Implemented scalable architecture to support millions of users",
        "Mentored junior developers and fostered a culture of continuous learning"
      ]
    }
  ],
  "projects": [
    { "id": 1, "title": "Project Alpha", "description": "An innovative web app for task management", "status": "active", "technologies": ["React", "Node.js", "MongoDB"] },
    { "id": 2, "title": "Legacy System", "description": "Deprecated but noteworthy inventory management system", "status": "discontinued", "technologies": ["PHP", "MySQL"] },
    { "id": 3, "title": "CloudNative", "description": "Microservices architecture for scalable applications", "status": "active", "technologies": ["Kubernetes", "Docker", "Go"] },
    { "id": 4, "title": "AI Assistant", "description": "Natural language processing chatbot", "status": "active", "technologies": ["Python", "TensorFlow", "AWS"] }
  ]
};
var mockData_default = mockData;

// app/components/BusinessCardMockup.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\BusinessCardMockup.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\BusinessCardMockup.tsx"
  );
  import.meta.hot.lastModified = "1727445913506.579";
}
var BusinessCardMockup = () => {
  _s();
  const [activeTab, setActiveTab] = (0, import_react2.useState)("About");
  const [data, setData] = (0, import_react2.useState)(mockData_default);
  const [isDarkMode, setIsDarkMode] = (0, import_react2.useState)(true);
  const contentRef = (0, import_react2.useRef)(null);
  const footerRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    setTimeout(() => setData(mockData_default), 100);
    document.body.style.overflow = "hidden";
    const handleScroll = () => {
      if (contentRef.current && footerRef.current) {
        const scrollPosition = contentRef.current.scrollTop;
        const scrollHeight = contentRef.current.scrollHeight;
        const clientHeight = contentRef.current.clientHeight;
        const fadeStart = scrollHeight - clientHeight - 100;
        const opacity = Math.max(0, Math.min(1, (scrollPosition - fadeStart) / 100));
        footerRef.current.style.setProperty("--footer-fade", `${opacity}`);
      }
    };
    const contentElement = contentRef.current;
    if (contentElement) {
      contentElement.addEventListener("scroll", handleScroll);
    }
    return () => {
      document.body.style.overflow = "auto";
      if (contentElement) {
        contentElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  const styles = {
    appContainer: {
      backgroundColor: isDarkMode ? "rgba(10, 10, 20, 0.95)" : "#f4e6c0",
      // Darker background for dark mode, paper yellow for light mode
      backgroundImage: isDarkMode ? "linear-gradient(145deg, rgba(20, 20, 40, 0.9) 0%, rgba(10, 10, 20, 0.9) 100%)" : "linear-gradient(145deg, #f4e6c0 0%, #f0dfa0 100%)",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      padding: "20px",
      transition: "background-color 0.3s ease",
      position: "relative",
      overflow: "hidden"
    },
    container: {
      fontFamily: isDarkMode ? '"Orbitron", sans-serif' : '"Helvetica Neue", Arial, sans-serif',
      width: "100%",
      maxWidth: "414px",
      height: "88vh",
      backgroundColor: isDarkMode ? "rgba(30, 30, 50, 0.8)" : "rgba(255, 255, 255, 0.8)",
      borderRadius: "20px",
      overflow: "hidden",
      boxShadow: isDarkMode ? "0 10px 30px rgba(0, 0, 0, 0.3)" : "0 10px 30px rgba(0, 0, 0, 0.1)",
      transition: "all 0.3s ease",
      position: "relative",
      zIndex: 1,
      backdropFilter: "blur(10px)",
      display: "flex",
      flexDirection: "column"
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px",
      backgroundColor: isDarkMode ? "rgba(30, 30, 50, 0.6)" : "rgba(240, 230, 200, 0.6)",
      position: "sticky",
      top: 0,
      zIndex: 10,
      backdropFilter: "blur(10px)"
    },
    brand: {
      display: "flex",
      alignItems: "center"
    },
    brandIcon: {
      width: "30px",
      // Smaller icon
      height: "30px",
      // Smaller icon
      marginRight: "10px",
      position: "relative"
    },
    brandAlphabet: {
      position: "absolute",
      top: "50%",
      left: "50%",
      fontSize: "12px",
      fontWeight: "bold",
      transform: "translate(-50%, -50%)",
      color: isDarkMode ? "#00ffff" : "#000000"
    },
    brandName: {
      fontWeight: "900",
      fontSize: "20px",
      // Slightly smaller font
      color: isDarkMode ? "#00ffff" : "#333",
      letterSpacing: "1px",
      textShadow: isDarkMode ? "0 0 10px rgba(0, 255, 255, 0.5)" : "none"
    },
    wrapper: {
      padding: "20px",
      marginBottom: "20px"
    },
    content: {
      flex: 1,
      overflowY: "auto",
      color: isDarkMode ? "#ffffff" : "#333",
      scrollbarWidth: "thin",
      scrollbarColor: isDarkMode ? "#00ffff #1E1E1E" : "#333 #f0f0f0",
      "&::WebkitScrollbar": {
        width: "8px",
        borderRadius: "4px"
      },
      "&::WebkitScrollbarTrack": {
        background: isDarkMode ? "#1E1E1E" : "#e0d0a0",
        borderRadius: "4px"
      },
      "&::WebkitScrollbarThumb": {
        background: isDarkMode ? "#00ffff" : "#b0a080",
        borderRadius: "4px"
      }
    },
    footer: {
      padding: "15px",
      textAlign: "center",
      fontSize: "12px",
      fontWeight: "bold",
      color: isDarkMode ? "#00ffff" : "#666",
      position: "sticky",
      bottom: 0,
      backgroundColor: isDarkMode ? "rgba(30, 30, 50, 0.8)" : "rgba(255, 255, 255, 0.8)",
      backdropFilter: "blur(10px)",
      "&::before": {
        content: '""',
        position: "absolute",
        top: "-20px",
        left: 0,
        right: 0,
        height: "20px",
        background: `linear-gradient(to bottom, 
            ${isDarkMode ? "rgba(30, 30, 50, 0)" : "rgba(255, 255, 255, 0)"}, 
            ${isDarkMode ? "rgba(30, 30, 50, 0.8)" : "rgba(255, 255, 255, 0.8)"}
          )`,
        opacity: "var(--footer-fade, 0)"
      }
    },
    card: {
      backgroundColor: isDarkMode ? "rgba(40, 40, 80, 0.6)" : "rgba(255, 255, 255, 0.6)",
      borderRadius: "15px",
      padding: "15px",
      marginBottom: "15px",
      transition: "all 0.3s ease",
      border: isDarkMode ? "1px solid rgba(0, 255, 255, 0.3)" : "1px solid rgba(0, 0, 0, 0.1)",
      boxShadow: isDarkMode ? "0 0 10px rgba(0, 255, 255, 0.2)" : "0 2px 5px rgba(0, 0, 0, 0.1)",
      backdropFilter: "blur(5px)",
      "&:hover": {
        backgroundColor: isDarkMode ? "rgba(50, 50, 100, 0.6)" : "rgba(255, 255, 255, 0.8)",
        boxShadow: isDarkMode ? "0 0 20px rgba(0, 255, 255, 0.4)" : "0 5px 15px rgba(0, 0, 0, 0.1)",
        transform: "translateY(-5px)"
      }
    },
    profile: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "30px 20px",
      backgroundImage: isDarkMode ? "linear-gradient(145deg, rgba(40, 40, 80, 0.6) 0%, rgba(20, 20, 40, 0.6) 100%)" : "none",
      backgroundColor: isDarkMode ? "transparent" : "#fff"
    },
    avatar: {
      width: "80px",
      height: "80px",
      borderRadius: "50%",
      marginRight: "16px",
      border: isDarkMode ? "3px solid #00ffff" : "3px solid #333",
      boxShadow: isDarkMode ? "0 0 20px rgba(0, 255, 255, 0.5)" : "none"
    },
    name: {
      fontSize: "16px",
      fontWeight: "bold",
      margin: "0",
      color: isDarkMode ? "#ffffff" : "#333",
      textShadow: isDarkMode ? "0 0 10px rgba(255, 255, 255, 0.5)" : "none"
    },
    title: {
      fontSize: "12px",
      color: isDarkMode ? "#00ffff" : "#666",
      margin: "10px 0",
      textAlign: "center",
      textShadow: isDarkMode ? "0 0 5px rgba(0, 255, 255, 0.5)" : "none"
    },
    slogan: {
      fontSize: "16px",
      fontStyle: "italic",
      color: isDarkMode ? "#ff00ff" : "#999",
      marginTop: "10px",
      textAlign: "center",
      textShadow: isDarkMode ? "0 0 5px rgba(255, 0, 255, 0.5)" : "none"
    },
    nav: {
      display: "flex",
      backgroundColor: isDarkMode ? "rgba(30, 30, 50, 0.6)" : "#f0f0f0",
      overflowX: "auto",
      whiteSpace: "nowrap",
      scrollbarWidth: "none",
      msOverflowStyle: "none",
      "&::WebkitScrollbar": {
        display: "none"
      }
    },
    navButton: {
      padding: "15px",
      border: "none",
      background: "none",
      cursor: "pointer",
      fontSize: "16px",
      color: isDarkMode ? "#00ffff" : "#333",
      flex: "0 0 auto",
      textAlign: "center",
      transition: "all 0.3s ease",
      position: "relative",
      "&:hover": {
        color: isDarkMode ? "#ffffff" : "#000",
        textShadow: isDarkMode ? "0 0 10px rgba(0, 255, 255, 0.5)" : "none"
      },
      "&::after": {
        content: '""',
        position: "absolute",
        bottom: 0,
        left: "50%",
        width: 0,
        height: "2px",
        backgroundColor: isDarkMode ? "#ff00ff" : "#333",
        transition: "all 0.3s ease"
      },
      "&:hover::after": {
        width: "100%",
        left: 0
      }
    },
    activeNavButton: {
      color: isDarkMode ? "#ffffff" : "#000",
      textShadow: isDarkMode ? "0 0 10px rgba(255, 255, 255, 0.5)" : "none",
      "&::after": {
        width: "100%",
        left: 0
      }
    },
    skillTag: {
      display: "inline-block",
      background: isDarkMode ? "rgba(0, 255, 255, 0.2)" : "#e0e0e0",
      padding: "5px 10px",
      borderRadius: "15px",
      fontSize: "12px",
      margin: "3px",
      color: isDarkMode ? "#00ffff" : "#333",
      border: isDarkMode ? "1px solid #00ffff" : "1px solid #ccc",
      boxShadow: isDarkMode ? "0 0 5px rgba(0, 255, 255, 0.5)" : "none"
    },
    socialLink: {
      display: "flex",
      alignItems: "center",
      margin: "10px 0",
      color: isDarkMode ? "#00ffff" : "#333",
      textDecoration: "none",
      fontSize: "14px",
      padding: "10px",
      borderRadius: "10px",
      backgroundColor: isDarkMode ? "rgba(0, 255, 255, 0.1)" : "#f0f0f0",
      transition: "all 0.3s ease",
      border: isDarkMode ? "1px solid rgba(0, 255, 255, 0.3)" : "1px solid #ccc",
      "&:hover": {
        backgroundColor: isDarkMode ? "rgba(0, 255, 255, 0.2)" : "#e0e0e0",
        boxShadow: isDarkMode ? "0 0 15px rgba(0, 255, 255, 0.5)" : "none"
      }
    },
    socialIcon: {
      marginRight: "10px"
    },
    themeToggle: {
      position: "absolute",
      left: "15px",
      bottom: "15px",
      backgroundColor: "transparent",
      border: "none",
      color: isDarkMode ? "#00ffff" : "#333",
      cursor: "pointer",
      borderRadius: "50%",
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: isDarkMode ? "rgba(0, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1)",
        boxShadow: isDarkMode ? "0 0 15px rgba(0, 255, 255, 0.5)" : "none"
      }
    },
    sectionTitle: {
      fontSize: "24px",
      fontWeight: "bold",
      color: isDarkMode ? "#00ffff" : "#333",
      marginBottom: "20px",
      textShadow: isDarkMode ? "0 0 10px rgba(0, 255, 255, 0.5)" : "none",
      borderBottom: isDarkMode ? "2px solid #00ffff" : "2px solid #333",
      paddingBottom: "10px",
      display: "inline-block"
    },
    sectionDescription: {
      fontSize: "16px",
      color: isDarkMode ? "#00ffff" : "#333",
      display: "inline-block",
      marginBottom: "20px",
      paddingBottom: "10px",
      textAlign: "justify",
      textShadow: isDarkMode ? "0 0 10px rgba(0, 255, 255, 0.5)" : "none"
    },
    iconButton: {
      backgroundColor: "transparent",
      border: "none",
      color: isDarkMode ? "#00ffff" : "#333",
      cursor: "pointer",
      padding: "12px",
      borderRadius: "50%",
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: isDarkMode ? "rgba(0, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1)",
        boxShadow: isDarkMode ? "0 0 15px rgba(0, 255, 255, 0.5)" : "none"
      }
    }
  };
  const renderContent = () => {
    switch (activeTab) {
      case "About":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.wrapper, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.sectionTitle, children: "About Me" }, void 0, false, {
            fileName: "app/components/BusinessCardMockup.tsx",
            lineNumber: 363,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.sectionDescription, children: data.user.slogan }, void 0, false, {
            fileName: "app/components/BusinessCardMockup.tsx",
            lineNumber: 364,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.sectionDescription, children: "As the founder of Beam.cards, Lukis.app, and Kamfu.net, I'm dedicated to revolutionizing the way we approach digital solutions. My journey in tech began with a simple curiosity about how things work, which quickly evolved into a passion for creating innovative software that solves real-world problems." }, void 0, false, {
            fileName: "app/components/BusinessCardMockup.tsx",
            lineNumber: 365,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.sectionDescription, children: "With over a decade of experience in web development and cloud technologies, I've had the privilege of working on diverse projects that have shaped my understanding of what makes great software. I believe in the power of continuous learning and always strive to stay at the forefront of technological advancements." }, void 0, false, {
            fileName: "app/components/BusinessCardMockup.tsx",
            lineNumber: 366,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.sectionDescription, children: "When I'm not coding or brainstorming new ideas, you can find me mentoring aspiring developers, contributing to open-source projects, or exploring the great outdoors for inspiration. I'm always excited to connect with like-minded individuals and discuss how we can leverage technology to make a positive impact on the world." }, void 0, false, {
            fileName: "app/components/BusinessCardMockup.tsx",
            lineNumber: 367,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/BusinessCardMockup.tsx",
          lineNumber: 362,
          columnNumber: 16
        }, this);
      case "Skills":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.wrapper, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.sectionTitle, children: "Skills" }, void 0, false, {
            fileName: "app/components/BusinessCardMockup.tsx",
            lineNumber: 371,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            display: "flex",
            flexWrap: "wrap"
          }, children: data.about.skills.map((skill, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.skillTag, children: skill }, index, false, {
            fileName: "app/components/BusinessCardMockup.tsx",
            lineNumber: 376,
            columnNumber: 58
          }, this)) }, void 0, false, {
            fileName: "app/components/BusinessCardMockup.tsx",
            lineNumber: 372,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/BusinessCardMockup.tsx",
          lineNumber: 370,
          columnNumber: 16
        }, this);
      case "Experience":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.wrapper, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.sectionTitle, children: "Experience" }, void 0, false, {
            fileName: "app/components/BusinessCardMockup.tsx",
            lineNumber: 381,
            columnNumber: 15
          }, this),
          data?.experience.map((job, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.card, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: [
              job.title,
              " at ",
              job.company
            ] }, void 0, true, {
              fileName: "app/components/BusinessCardMockup.tsx",
              lineNumber: 383,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: job.period }, void 0, false, {
              fileName: "app/components/BusinessCardMockup.tsx",
              lineNumber: 384,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { style: {
              paddingLeft: "20px"
            }, children: job.responsibilities.map((resp, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { style: {
              marginBottom: "5px"
            }, children: resp }, i, false, {
              fileName: "app/components/BusinessCardMockup.tsx",
              lineNumber: 388,
              columnNumber: 60
            }, this)) }, void 0, false, {
              fileName: "app/components/BusinessCardMockup.tsx",
              lineNumber: 385,
              columnNumber: 19
            }, this)
          ] }, index, true, {
            fileName: "app/components/BusinessCardMockup.tsx",
            lineNumber: 382,
            columnNumber: 53
          }, this))
        ] }, void 0, true, {
          fileName: "app/components/BusinessCardMockup.tsx",
          lineNumber: 380,
          columnNumber: 16
        }, this);
      case "Projects":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.wrapper, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.sectionTitle, children: "Projects" }, void 0, false, {
            fileName: "app/components/BusinessCardMockup.tsx",
            lineNumber: 396,
            columnNumber: 15
          }, this),
          data?.projects.map((project, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.card, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: project.title }, void 0, false, {
              fileName: "app/components/BusinessCardMockup.tsx",
              lineNumber: 398,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: project.description }, void 0, false, {
              fileName: "app/components/BusinessCardMockup.tsx",
              lineNumber: 399,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              "Status: ",
              project.status
            ] }, void 0, true, {
              fileName: "app/components/BusinessCardMockup.tsx",
              lineNumber: 400,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              "Technologies: ",
              project.technologies.join(", ")
            ] }, void 0, true, {
              fileName: "app/components/BusinessCardMockup.tsx",
              lineNumber: 401,
              columnNumber: 19
            }, this)
          ] }, project.id, true, {
            fileName: "app/components/BusinessCardMockup.tsx",
            lineNumber: 397,
            columnNumber: 55
          }, this))
        ] }, void 0, true, {
          fileName: "app/components/BusinessCardMockup.tsx",
          lineNumber: 395,
          columnNumber: 16
        }, this);
      case "Contact":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.wrapper, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.sectionTitle, children: "Contact" }, void 0, false, {
            fileName: "app/components/BusinessCardMockup.tsx",
            lineNumber: 406,
            columnNumber: 15
          }, this),
          data.user.social.map((socialItem, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: socialItem.url, target: "_blank", rel: "noopener noreferrer", style: styles.socialLink, children: [
            socialItem.icon === "MessageCircle" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MessageCircle, { size: 20, style: styles.socialIcon }, void 0, false, {
              fileName: "app/components/BusinessCardMockup.tsx",
              lineNumber: 408,
              columnNumber: 59
            }, this),
            socialItem.icon === "Phone" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Phone, { size: 20, style: styles.socialIcon }, void 0, false, {
              fileName: "app/components/BusinessCardMockup.tsx",
              lineNumber: 409,
              columnNumber: 51
            }, this),
            socialItem.icon === "Mail" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { size: 20, style: styles.socialIcon }, void 0, false, {
              fileName: "app/components/BusinessCardMockup.tsx",
              lineNumber: 410,
              columnNumber: 50
            }, this),
            socialItem.icon === "Linkedin" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Linkedin, { size: 20, style: styles.socialIcon }, void 0, false, {
              fileName: "app/components/BusinessCardMockup.tsx",
              lineNumber: 411,
              columnNumber: 54
            }, this),
            socialItem.icon === "Github" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Github, { size: 20, style: styles.socialIcon }, void 0, false, {
              fileName: "app/components/BusinessCardMockup.tsx",
              lineNumber: 412,
              columnNumber: 52
            }, this),
            socialItem.icon === "Twitter" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Twitter, { size: 20, style: styles.socialIcon }, void 0, false, {
              fileName: "app/components/BusinessCardMockup.tsx",
              lineNumber: 413,
              columnNumber: 53
            }, this),
            socialItem.platform
          ] }, index, true, {
            fileName: "app/components/BusinessCardMockup.tsx",
            lineNumber: 407,
            columnNumber: 60
          }, this))
        ] }, void 0, true, {
          fileName: "app/components/BusinessCardMockup.tsx",
          lineNumber: 405,
          columnNumber: 16
        }, this);
      default:
        return null;
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.appContainer, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.container, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { style: styles.header, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.brand, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.brandIcon, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Hexagon, { size: 30, fill: "none", strokeWidth: "2", color: isDarkMode ? "#00ffff" : "#000000" }, void 0, false, {
            fileName: "app/components/BusinessCardMockup.tsx",
            lineNumber: 427,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.brandAlphabet, children: "B" }, void 0, false, {
            fileName: "app/components/BusinessCardMockup.tsx",
            lineNumber: 428,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/BusinessCardMockup.tsx",
          lineNumber: 426,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.brandName, children: "BEAM" }, void 0, false, {
          fileName: "app/components/BusinessCardMockup.tsx",
          lineNumber: 430,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/BusinessCardMockup.tsx",
        lineNumber: 425,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: styles.iconButton, title: "Show QR Code", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QrCode, { size: 20 }, void 0, false, {
          fileName: "app/components/BusinessCardMockup.tsx",
          lineNumber: 434,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/BusinessCardMockup.tsx",
          lineNumber: 433,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: styles.iconButton, title: "Share Beam Card", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Share, { size: 20 }, void 0, false, {
          fileName: "app/components/BusinessCardMockup.tsx",
          lineNumber: 437,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/BusinessCardMockup.tsx",
          lineNumber: 436,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/BusinessCardMockup.tsx",
        lineNumber: 432,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/BusinessCardMockup.tsx",
      lineNumber: 424,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "content", ref: contentRef, style: {
      ...styles.content,
      scrollbarWidth: "thin",
      scrollbarColor: isDarkMode ? "#888 #333" : "#888 #f4f4f4"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.profile, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          display: "flex",
          alignItems: "center"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: data.user.avatar, alt: data.user.name, style: styles.avatar }, void 0, false, {
            fileName: "app/components/BusinessCardMockup.tsx",
            lineNumber: 452,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { style: styles.name, children: data.user.name }, void 0, false, {
            fileName: "app/components/BusinessCardMockup.tsx",
            lineNumber: 453,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/BusinessCardMockup.tsx",
          lineNumber: 448,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.title, children: data.user.title }, void 0, false, {
          fileName: "app/components/BusinessCardMockup.tsx",
          lineNumber: 455,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.slogan, children: data.user.slogan }, void 0, false, {
          fileName: "app/components/BusinessCardMockup.tsx",
          lineNumber: 456,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/BusinessCardMockup.tsx",
        lineNumber: 447,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { style: styles.nav, children: ["About", "Skills", "Experience", "Projects", "Contact"].map((tab) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: {
        ...styles.navButton,
        ...activeTab === tab ? styles.activeNavButton : {}
      }, onClick: () => setActiveTab(tab), children: tab }, tab, false, {
        fileName: "app/components/BusinessCardMockup.tsx",
        lineNumber: 460,
        columnNumber: 84
      }, this)) }, void 0, false, {
        fileName: "app/components/BusinessCardMockup.tsx",
        lineNumber: 459,
        columnNumber: 13
      }, this),
      renderContent()
    ] }, void 0, true, {
      fileName: "app/components/BusinessCardMockup.tsx",
      lineNumber: 442,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", { style: styles.footer, ref: footerRef, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: styles.themeToggle, onClick: () => setIsDarkMode(!isDarkMode), children: isDarkMode ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sun, { size: 18 }, void 0, false, {
        fileName: "app/components/BusinessCardMockup.tsx",
        lineNumber: 473,
        columnNumber: 29
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Moon, { size: 18 }, void 0, false, {
        fileName: "app/components/BusinessCardMockup.tsx",
        lineNumber: 473,
        columnNumber: 49
      }, this) }, void 0, false, {
        fileName: "app/components/BusinessCardMockup.tsx",
        lineNumber: 472,
        columnNumber: 13
      }, this),
      "Made with Beam"
    ] }, void 0, true, {
      fileName: "app/components/BusinessCardMockup.tsx",
      lineNumber: 471,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/BusinessCardMockup.tsx",
    lineNumber: 423,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/BusinessCardMockup.tsx",
    lineNumber: 422,
    columnNumber: 10
  }, this);
};
_s(BusinessCardMockup, "RjBpWvudzUiiV/eyYBZa5PXPe3A=");
_c = BusinessCardMockup;
var BusinessCardMockup_default = BusinessCardMockup;
var _c;
$RefreshReg$(_c, "BusinessCardMockup");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_index.tsx"
  );
  import.meta.hot.lastModified = "1727415135893.4849";
}
var meta = () => {
  return [{
    title: "Beam Cards"
  }, {
    name: "description",
    content: "Digital business cards for the modern professional"
  }];
};
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: {
    fontFamily: "system-ui, sans-serif",
    lineHeight: "1.8"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BusinessCardMockup_default, {}, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 35,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_c2 = Index;
var _c2;
$RefreshReg$(_c2, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
/*! Bundled license information:

lucide-react/dist/esm/defaultAttributes.js:
  (**
   * @license lucide-react v0.294.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/createLucideIcon.js:
  (**
   * @license lucide-react v0.294.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/github.js:
  (**
   * @license lucide-react v0.294.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/hexagon.js:
  (**
   * @license lucide-react v0.294.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/linkedin.js:
  (**
   * @license lucide-react v0.294.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/mail.js:
  (**
   * @license lucide-react v0.294.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/message-circle.js:
  (**
   * @license lucide-react v0.294.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/moon.js:
  (**
   * @license lucide-react v0.294.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/phone.js:
  (**
   * @license lucide-react v0.294.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/qr-code.js:
  (**
   * @license lucide-react v0.294.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/share.js:
  (**
   * @license lucide-react v0.294.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/sun.js:
  (**
   * @license lucide-react v0.294.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/twitter.js:
  (**
   * @license lucide-react v0.294.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.294.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=/docs/build/routes/_index-JXICK6GD.js.map
