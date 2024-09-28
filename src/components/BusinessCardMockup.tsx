import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Twitter, Mail, QrCode, Share, Phone, Sun, Moon, Hexagon, MessageCircle } from 'lucide-react';

const BusinessCardMockup: React.FC = () => {

    const mockData = {
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
          "Agile Methodologies", "Communication", "Problem Solving", "Project Management", "Team Leadership", "User Experience (UX) Design",
          "Algorithms", "AWS", "CI/CD", "Cloud Computing", "CSS", "Data Structures", "Docker", "Git", "GraphQL",
          "HTML", "JavaScript", "Node.js", "PHP", "Python", "React", "RESTful APIs", "SQL", "System Architecture", "TypeScript"
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

    const [activeTab, setActiveTab] = useState('About');
    const [data, setData] = useState(mockData);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const footerRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
        // Set mock data and manage body overflow
        setTimeout(() => setData(mockData), 100);
        document.body.style.overflow = 'hidden';
    
        // Handle scroll for footer fade effect
        const handleScroll = () => {
          if (contentRef.current && footerRef.current) {
            const scrollPosition = contentRef.current.scrollTop;
            const scrollHeight = contentRef.current.scrollHeight;
            const clientHeight = contentRef.current.clientHeight;
            const fadeStart = scrollHeight - clientHeight - 100;
            const opacity = Math.max(0, Math.min(1, (scrollPosition - fadeStart) / 100));
            footerRef.current.style.setProperty('--footer-fade', `${opacity}`);
          }
        };
    
        const contentElement = contentRef.current;
        if (contentElement) {
          contentElement.addEventListener('scroll', handleScroll);
        }
    
        // Cleanup function
        return () => {
          document.body.style.overflow = 'auto';
          if (contentElement) {
            contentElement.removeEventListener('scroll', handleScroll);
          }
        };
      }, []);
  
    const styles = {
      appContainer: {
        backgroundColor: isDarkMode ? 'rgba(10, 10, 20, 0.95)' : '#f4e6c0', // Darker background for dark mode, paper yellow for light mode
        backgroundImage: isDarkMode
          ? 'linear-gradient(145deg, rgba(20, 20, 40, 0.9) 0%, rgba(10, 10, 20, 0.9) 100%)'
          : 'linear-gradient(145deg, #f4e6c0 0%, #f0dfa0 100%)',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '20px',
        transition: 'background-color 0.3s ease',
        position: 'relative' as const,
        overflow: 'hidden',
      },
      container: {
        fontFamily: isDarkMode ? '"Orbitron", sans-serif' : '"Helvetica Neue", Arial, sans-serif',
        width: '100%',
        maxWidth: '414px',
        height: '88vh',
        backgroundColor: isDarkMode ? 'rgba(30, 30, 50, 0.8)' : 'rgba(255, 255, 255, 0.8)',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: isDarkMode
          ? '0 10px 30px rgba(0, 0, 0, 0.3)'
          : '0 10px 30px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        position: 'relative' as const,
        zIndex: 1,
        backdropFilter: 'blur(10px)',
        display: 'flex',
        flexDirection: 'column' as const,
      },
      header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px',
        backgroundColor: isDarkMode ? 'rgba(30, 30, 50, 0.6)' : 'rgba(240, 230, 200, 0.6)',
        position: 'sticky' as const,
        top: 0,
        zIndex: 10,
        backdropFilter: 'blur(10px)',
      },
      brand: {
        display: 'flex',
        alignItems: 'center',
      },
      brandIcon: {
        width: '30px', // Smaller icon
        height: '30px', // Smaller icon
        marginRight: '10px',
        position: 'relative' as const,
      },
      brandAlphabet: {
        position: 'absolute' as const, 
        top: '50%', 
        left: '50%', 
        fontSize: '12px',
        fontWeight: 'bold',
        transform: 'translate(-50%, -50%)', 
        color: isDarkMode ? '#00ffff' : '#000000'
      },
      brandName: {
        fontWeight: '900',
        fontSize: '20px', // Slightly smaller font
        color: isDarkMode ? '#00ffff' : '#333',
        letterSpacing: '1px',
        textShadow: isDarkMode ? '0 0 10px rgba(0, 255, 255, 0.5)' : 'none',
      },
      wrapper: {
        padding: '20px',
        marginBottom: '20px',
      },
      content: {
        flex: 1,
        overflowY: 'auto' as const,
        color: isDarkMode ? '#ffffff' : '#333',
        scrollbarWidth: 'thin',
        scrollbarColor: isDarkMode ? '#00ffff #1E1E1E' : '#333 #f0f0f0',
        '&::WebkitScrollbar': {
          width: '8px',
          borderRadius: '4px',
        },
        '&::WebkitScrollbarTrack': {
          background: isDarkMode ? '#1E1E1E' : '#e0d0a0',
          borderRadius: '4px',
        },
        '&::WebkitScrollbarThumb': {
          background: isDarkMode ? '#00ffff' : '#b0a080',
          borderRadius: '4px',
        },
      },
      footer: {
        padding: '15px',
        textAlign: 'center' as const,
        fontSize: '12px',
        fontWeight: 'bold',
        color: isDarkMode ? '#00ffff' : '#666',
        position: 'sticky' as const,
        bottom: 0,
        backgroundColor: isDarkMode ? 'rgba(30, 30, 50, 0.8)' : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        '&::before': {
          content: '""',
          position: 'absolute' as const,
          top: '-20px',
          left: 0,
          right: 0,
          height: '20px',
          background: `linear-gradient(to bottom, 
            ${isDarkMode ? 'rgba(30, 30, 50, 0)' : 'rgba(255, 255, 255, 0)'}, 
            ${isDarkMode ? 'rgba(30, 30, 50, 0.8)' : 'rgba(255, 255, 255, 0.8)'}
          )`,
          opacity: 'var(--footer-fade, 0)',
        },
      },
      card: {
        backgroundColor: isDarkMode ? 'rgba(40, 40, 80, 0.6)' : 'rgba(255, 255, 255, 0.6)',
        borderRadius: '15px',
        padding: '15px',
        marginBottom: '15px',
        transition: 'all 0.3s ease',
        border: isDarkMode ? '1px solid rgba(0, 255, 255, 0.3)' : '1px solid rgba(0, 0, 0, 0.1)',
        boxShadow: isDarkMode ? '0 0 10px rgba(0, 255, 255, 0.2)' : '0 2px 5px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(5px)',
        '&:hover': {
          backgroundColor: isDarkMode ? 'rgba(50, 50, 100, 0.6)' : 'rgba(255, 255, 255, 0.8)',
          boxShadow: isDarkMode ? '0 0 20px rgba(0, 255, 255, 0.4)' : '0 5px 15px rgba(0, 0, 0, 0.1)',
          transform: 'translateY(-5px)',
        },
      },
      profile: {
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        padding: '30px 20px',
        backgroundImage: isDarkMode
          ? 'linear-gradient(145deg, rgba(40, 40, 80, 0.6) 0%, rgba(20, 20, 40, 0.6) 100%)'
          : 'none',
        backgroundColor: isDarkMode ? 'transparent' : '#fff',
      },
      avatar: {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        marginRight: '16px',
        border: isDarkMode ? '3px solid #00ffff' : '3px solid #333',
        boxShadow: isDarkMode ? '0 0 20px rgba(0, 255, 255, 0.5)' : 'none',
      },
      name: {
        fontSize: '16px',
        fontWeight: 'bold',
        margin: '0',
        color: isDarkMode ? '#ffffff' : '#333',
        textShadow: isDarkMode ? '0 0 10px rgba(255, 255, 255, 0.5)' : 'none',
      },
      title: {
        fontSize: '12px',
        color: isDarkMode ? '#00ffff' : '#666',
        margin: '10px 0',
        textAlign: 'center' as const,
        textShadow: isDarkMode ? '0 0 5px rgba(0, 255, 255, 0.5)' : 'none',
      },
      slogan: {
        fontSize: '16px',
        fontStyle: 'italic',
        color: isDarkMode ? '#ff00ff' : '#999',
        marginTop: '10px',
        textAlign: 'center' as const,
        textShadow: isDarkMode ? '0 0 5px rgba(255, 0, 255, 0.5)' : 'none',
      },
      nav: {
        display: 'flex',
        backgroundColor: isDarkMode ? 'rgba(30, 30, 50, 0.6)' : '#f0f0f0',
        overflowX: 'auto' as const,
        whiteSpace: 'nowrap' as const,
        scrollbarWidth: 'none' as const,
        msOverflowStyle: 'none' as const,
        '&::WebkitScrollbar': {
          display: 'none',
        },
      },
      navButton: {
        padding: '15px',
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        fontSize: '16px',
        color: isDarkMode ? '#00ffff' : '#333',
        flex: '0 0 auto',
        textAlign: 'center' as const,
        transition: 'all 0.3s ease',
        position: 'relative' as const,
        '&:hover': {
          color: isDarkMode ? '#ffffff' : '#000',
          textShadow: isDarkMode ? '0 0 10px rgba(0, 255, 255, 0.5)' : 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute' as const,
          bottom: 0,
          left: '50%',
          width: 0,
          height: '2px',
          backgroundColor: isDarkMode ? '#ff00ff' : '#333',
          transition: 'all 0.3s ease',
        },
        '&:hover::after': {
          width: '100%',
          left: 0,
        },
      },
      activeNavButton: {
        color: isDarkMode ? '#ffffff' : '#000',
        textShadow: isDarkMode ? '0 0 10px rgba(255, 255, 255, 0.5)' : 'none',
        '&::after': {
          width: '100%',
          left: 0,
        },
      },
      skillTag: {
        display: 'inline-block',
        background: isDarkMode ? 'rgba(0, 255, 255, 0.2)' : '#e0e0e0',
        padding: '5px 10px',
        borderRadius: '15px',
        fontSize: '12px',
        margin: '3px',
        color: isDarkMode ? '#00ffff' : '#333',
        border: isDarkMode ? '1px solid #00ffff' : '1px solid #ccc',
        boxShadow: isDarkMode ? '0 0 5px rgba(0, 255, 255, 0.5)' : 'none',
      },
      socialLink: {
        display: 'flex',
        alignItems: 'center',
        margin: '10px 0',
        color: isDarkMode ? '#00ffff' : '#333',
        textDecoration: 'none',
        fontSize: '14px',
        padding: '10px',
        borderRadius: '10px',
        backgroundColor: isDarkMode ? 'rgba(0, 255, 255, 0.1)' : '#f0f0f0',
        transition: 'all 0.3s ease',
        border: isDarkMode ? '1px solid rgba(0, 255, 255, 0.3)' : '1px solid #ccc',
        '&:hover': {
          backgroundColor: isDarkMode ? 'rgba(0, 255, 255, 0.2)' : '#e0e0e0',
          boxShadow: isDarkMode ? '0 0 15px rgba(0, 255, 255, 0.5)' : 'none',
        },
      },
      socialIcon: {
        marginRight: '10px'
      },
      themeToggle: {
        position: 'absolute' as const,
        left: '15px',
        bottom: '15px',
        backgroundColor: 'transparent',
        border: 'none',
        color: isDarkMode ? '#00ffff' : '#333',
        cursor: 'pointer',
        borderRadius: '50%',
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: isDarkMode ? 'rgba(0, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
          boxShadow: isDarkMode ? '0 0 15px rgba(0, 255, 255, 0.5)' : 'none',
        },
      },
      sectionTitle: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: isDarkMode ? '#00ffff' : '#333',
        marginBottom: '20px',
        textShadow: isDarkMode ? '0 0 10px rgba(0, 255, 255, 0.5)' : 'none',
        borderBottom: isDarkMode ? '2px solid #00ffff' : '2px solid #333',
        paddingBottom: '10px',
        display: 'inline-block',
      },
      sectionDescription: {
        fontSize: '16px',
        color: isDarkMode ? '#00ffff' : '#333',
        display: 'inline-block',
        marginBottom: '20px',
        paddingBottom: '10px',
        textAlign: 'justify' as const,
        textShadow: isDarkMode ? '0 0 10px rgba(0, 255, 255, 0.5)' : 'none',
      },
      iconButton: {
        backgroundColor: 'transparent',
        border: 'none',
        color: isDarkMode ? '#00ffff' : '#333',
        cursor: 'pointer',
        padding: '12px',
        borderRadius: '50%',
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: isDarkMode ? 'rgba(0, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
          boxShadow: isDarkMode ? '0 0 15px rgba(0, 255, 255, 0.5)' : 'none',
        },
      },
    };
  
    const renderContent = () => {
  
      switch (activeTab) {
        case 'About':
          return (
            <div style={styles.wrapper}>
              <h3 style={styles.sectionTitle}>About Me</h3>
              <p style={styles.sectionDescription}>{data.user.slogan}</p>
              <p style={styles.sectionDescription}>As the founder of Beam.cards, Lukis.app, and Kamfu.net, I'm dedicated to revolutionizing the way we approach digital solutions. My journey in tech began with a simple curiosity about how things work, which quickly evolved into a passion for creating innovative software that solves real-world problems.</p>
              <p style={styles.sectionDescription}>With over a decade of experience in web development and cloud technologies, I've had the privilege of working on diverse projects that have shaped my understanding of what makes great software. I believe in the power of continuous learning and always strive to stay at the forefront of technological advancements.</p>
              <p style={styles.sectionDescription}>When I&apos;m not coding or brainstorming new ideas, you can find me mentoring aspiring developers, contributing to open-source projects, or exploring the great outdoors for inspiration. I&apos;m always excited to connect with like-minded individuals and discuss how we can leverage technology to make a positive impact on the world.</p>
            </div>
          );
        case 'Skills':
          return (
            <div style={styles.wrapper}>
              <h3 style={styles.sectionTitle}>Skills</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {data.about.skills.map((skill: string, index: number) => (
                  <span key={index} style={styles.skillTag}>{skill}</span>
                ))}
              </div>
            </div>
          );
        case 'Experience':
          return (
            <div style={styles.wrapper}>
              <h3 style={styles.sectionTitle}>Experience</h3>
              {data?.experience.map((job: { title: string; company: string; period: string; responsibilities: string[] }, index: number) => (
                <div key={index} style={styles.card}>
                  <h4>{job.title} at {job.company}</h4>
                  <p>{job.period}</p>
                  <ul style={{ paddingLeft: '20px' }}>
                    {job.responsibilities.map((resp: string, i: number) => (
                      <li key={i} style={{ marginBottom: '5px' }}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          );
        case 'Projects':
          return (
            <div style={styles.wrapper}>
              <h3 style={styles.sectionTitle}>Projects</h3>
              {data?.projects.map((project: { id: number; title: string; description: string; status: string; technologies: string[] }, index: number) => (
                <div key={project.id} style={styles.card}>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <p>Status: {project.status}</p>
                  <p>Technologies: {project.technologies.join(', ')}</p>
                </div>
              ))}
            </div>
          );
        case 'Contact':
          return (
            <div style={styles.wrapper}>
              <h3 style={styles.sectionTitle}>Contact</h3>
              {data.user.social.map((socialItem: { platform: string; url: string; icon: string }, index: number) => (
                <a key={index} href={socialItem.url} target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                  {socialItem.icon === 'MessageCircle' && <MessageCircle size={20} style={styles.socialIcon} />}
                  {socialItem.icon === 'Phone' && <Phone size={20} style={styles.socialIcon} />}
                  {socialItem.icon === 'Mail' && <Mail size={20} style={styles.socialIcon} />}
                  {socialItem.icon === 'Linkedin' && <Linkedin size={20} style={styles.socialIcon} />}
                  {socialItem.icon === 'Github' && <Github size={20} style={styles.socialIcon} />}
                  {socialItem.icon === 'Twitter' && <Twitter size={20} style={styles.socialIcon} />}

                  {socialItem.platform}
                </a>
              ))}
            </div>
          );
        default:
          return null;
      }
    };
  
    return (
      <div style={styles.appContainer}>
        <div style={styles.container}>
          <header style={styles.header}>
            <div style={styles.brand}>
              <div style={styles.brandIcon}>
                <Hexagon 
                  size={30} 
                  fill="none" 
                  strokeWidth="2"
                  color={isDarkMode ? "#00ffff" : "#000000"} 
                />
                <span style={styles.brandAlphabet}>B</span>
              </div>
              <span style={styles.brandName}>BEAM</span>
            </div>
            <div>
              <button style={styles.iconButton} title="Show QR Code">
                <QrCode size={20} />
              </button>
              <button style={styles.iconButton} title="Share Beam Card">
                <Share size={20} />
              </button>
            </div>
          </header>
  
          <div className="content" ref={contentRef} style={{
            ...styles.content,
            scrollbarWidth: 'thin',
            scrollbarColor: isDarkMode ? '#888 #333' : '#888 #f4f4f4'
          }}>
            <div style={styles.profile}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={data.user.avatar} alt={data.user.name} style={styles.avatar} />
                <h1 style={styles.name}>{data.user.name}</h1>
              </div>
              <p style={styles.title}>{data.user.title}</p>
              <p style={styles.slogan}>{data.user.slogan}</p>
            </div>
  
            <nav style={styles.nav}>
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((tab) => (
                <button
                  key={tab}
                  style={{
                    ...styles.navButton,
                    ...(activeTab === tab ? styles.activeNavButton : {}),
                  }}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </nav>
  
            {renderContent()}
          </div>
  
          <footer style={styles.footer} ref={footerRef}>
            <button style={styles.themeToggle} onClick={() => setIsDarkMode(!isDarkMode)}>
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            Made with Beam
          </footer>
        </div>
      </div>
    );
};

export default BusinessCardMockup;
  