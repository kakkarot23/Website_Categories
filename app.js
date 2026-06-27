// Data structures for the 300+ Website Categories & Ideas and Modern Features
const categoriesData = [
  {
    id: "business",
    name: "Business Websites",
    icon: "briefcase",
    color: "var(--accent-business)",
    gradient: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
    description: "Corporate and commercial platforms representing companies, startups, and professional service agencies.",
    items: [
      "Corporate Website", "Company Website", "Startup Website", "Small Business Website", "Enterprise Website",
      "Manufacturing Company Website", "Consulting Firm Website", "Construction Company Website", "Interior Design Company Website",
      "Architecture Firm Website", "Real Estate Company Website", "Cleaning Services Website", "Pest Control Website",
      "Plumbing Services Website", "Electrical Services Website", "Painting Contractor Website", "HVAC Services Website",
      "Roofing Company Website", "Logistics Company Website", "Shipping Company Website", "Courier Service Website",
      "Import Export Company Website", "Printing Company Website", "Packaging Company Website", "Event Management Company Website",
      "Advertising Agency Website", "Marketing Agency Website", "Branding Agency Website", "Public Relations Agency Website",
      "Recruitment Agency Website"
    ]
  },
  {
    id: "ecommerce",
    name: "E-Commerce Websites",
    icon: "shopping-bag",
    color: "var(--accent-ecommerce)",
    gradient: "linear-gradient(135deg, #d946ef 0%, #8b5cf6 100%)",
    description: "Digital retail spaces, multi-vendor marketplaces, single product stores, and online auction systems.",
    items: [
      "Online Shopping Website", "Multi-Vendor Marketplace", "Single Vendor Store", "Grocery Store", "Electronics Store",
      "Mobile Store", "Laptop Store", "Computer Accessories Store", "Fashion Store", "Clothing Store", "Footwear Store",
      "Jewelry Store", "Cosmetics Store", "Beauty Products Store", "Perfume Store", "Furniture Store", "Home Decor Store",
      "Kitchen Appliances Store", "Books Store", "Stationery Store", "Toy Store", "Baby Products Store", "Pet Store",
      "Sports Equipment Store", "Automobile Parts Store", "Bike Accessories Store", "Car Accessories Store",
      "Medical Equipment Store", "Pharmacy Store", "Organic Products Store", "Gift Store", "Handmade Products Store",
      "Digital Products Store", "Software Store", "Subscription Box Website", "Wholesale Marketplace", "Auction Website",
      "Rental Marketplace"
    ]
  },
  {
    id: "educational",
    name: "Educational Websites",
    icon: "graduation-cap",
    color: "var(--accent-educational)",
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    description: "Online academies, university networks, school portals, interactive quizzes, and e-learning ecosystems.",
    items: [
      "School Website", "College Website", "University Website", "Online Learning Platform", "LMS (Learning Management System)",
      "Coaching Center Website", "Tuition Website", "Online Examination Portal", "Quiz Platform", "Coding Learning Website",
      "Programming Practice Website", "Research Portal", "Digital Library", "Academic Journal Website", "Educational Blog",
      "Student Portal", "Faculty Portal", "Alumni Portal", "Scholarship Portal", "Career Guidance Website", "Certification Platform",
      "Online Workshop Platform", "Virtual Classroom", "MOOC Platform", "Assignment Submission Portal"
    ]
  },
  {
    id: "healthcare",
    name: "Healthcare Websites",
    icon: "heart-pulse",
    color: "var(--accent-healthcare)",
    gradient: "linear-gradient(135deg, #f43f5e 0%, #be123c 100%)",
    description: "Clinical networks, telemedicine hubs, fitness dashboards, and medical records management applications.",
    items: [
      "Hospital Website", "Clinic Website", "Dental Clinic Website", "Eye Hospital Website", "Diagnostic Center Website",
      "Pharmacy Website", "Telemedicine Platform", "Doctor Appointment Website", "Mental Health Portal", "Physiotherapy Clinic",
      "Nutrition Website", "Fitness Center Website", "Yoga Website", "Medical Laboratory", "Blood Bank Website",
      "Organ Donation Portal", "Health Insurance Portal", "Healthcare Management System"
    ]
  },
  {
    id: "social-networking",
    name: "Social Networking Websites",
    icon: "users",
    color: "var(--accent-social)",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
    description: "Connective communities, dating hubs, discussion forums, and multimedia sharing environments.",
    items: [
      "Social Media Platform", "Community Website", "Discussion Forum", "Professional Network", "Dating Website",
      "Messaging Platform", "Video Sharing Website", "Photo Sharing Platform", "Blogging Community", "Question Answer Website",
      "Microblogging Platform"
    ]
  },
  {
    id: "entertainment",
    name: "Entertainment Websites",
    icon: "film",
    color: "var(--accent-entertainment)",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    description: "Movie portals, streaming platforms, audio/podcast channels, and fan discussion ecosystems.",
    items: [
      "Movie Website", "Music Streaming Website", "Video Streaming Website", "Podcast Platform", "OTT Platform",
      "TV Shows Website", "Celebrity News Website", "Event Ticket Booking", "Meme Website", "Comics Website",
      "Fan Community Website"
    ]
  },
  {
    id: "news",
    name: "News Websites",
    icon: "newspaper",
    color: "var(--accent-news)",
    gradient: "linear-gradient(135deg, #6b7280 0%, #374151 100%)",
    description: "Newspapers, digital portals, local broadcasts, and specialized topic magazines.",
    items: [
      "Newspaper Website", "News Portal", "Magazine Website", "Breaking News Platform", "Local News Website",
      "Technology News Website", "Sports News Website", "Business News Website", "Financial News Website",
      "Political News Website"
    ]
  },
  {
    id: "government",
    name: "Government Websites",
    icon: "landmark",
    color: "var(--accent-gov)",
    gradient: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
    description: "Official public sector hubs, municipal operations, voting systems, and civic services portals.",
    items: [
      "Government Portal", "Municipality Website", "Panchayat Website", "Police Website", "Court Website",
      "Tax Portal", "Passport Portal", "Voting Portal", "Public Service Portal", "Citizen Complaint Portal"
    ]
  },
  {
    id: "financial",
    name: "Financial Websites",
    icon: "coins",
    color: "var(--accent-financial)",
    gradient: "linear-gradient(135deg, #10b981 0%, #065f46 100%)",
    description: "E-banking portals, stock trading interfaces, cryptocurrency engines, and budget management apps.",
    items: [
      "Bank Website", "Insurance Website", "Loan Portal", "Investment Platform", "Stock Trading Website",
      "Cryptocurrency Exchange", "Budget Planner", "Expense Tracker", "Accounting Software", "Payroll Management",
      "Tax Calculator"
    ]
  },
  {
    id: "travel",
    name: "Travel Websites",
    icon: "compass",
    color: "var(--accent-travel)",
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)",
    description: "Booking agencies, itinerary organizers, localized travel guides, and wanderlust blogs.",
    items: [
      "Travel Agency Website", "Hotel Booking Website", "Flight Booking Website", "Train Booking Website",
      "Bus Booking Website", "Taxi Booking Website", "Tour Package Website", "Adventure Tourism Website",
      "Cruise Booking", "Vacation Rental Website", "Travel Blog"
    ]
  },
  {
    id: "food",
    name: "Food Websites",
    icon: "utensils",
    color: "var(--accent-food)",
    gradient: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
    description: "Dining spaces, food delivery networks, cloud kitchens, and interactive recipe repositories.",
    items: [
      "Restaurant Website", "Food Ordering Website", "Cloud Kitchen Website", "Catering Website", "Recipe Website",
      "Food Delivery Website", "Bakery Website", "Cafe Website", "Grocery Delivery Website"
    ]
  },
  {
    id: "portfolio",
    name: "Portfolio Websites",
    icon: "user",
    color: "var(--accent-portfolio)",
    gradient: "linear-gradient(135deg, #a855f7 0%, #7e22ce 100%)",
    description: "Personal design resumes, writing displays, developer codeboards, and photographic galleries.",
    items: [
      "Personal Portfolio", "Photographer Portfolio", "Graphic Designer Portfolio", "UI/UX Portfolio",
      "Web Developer Portfolio", "Software Engineer Portfolio", "Architect Portfolio", "Artist Portfolio",
      "Writer Portfolio", "Freelancer Portfolio"
    ]
  },
  {
    id: "blogging",
    name: "Blogging Websites",
    icon: "pen-tool",
    color: "var(--accent-blogging)",
    gradient: "linear-gradient(135deg, #ec4899 0%, #db2777 100%)",
    description: "Chronicles of ideas, niche guides, lifestyle archives, and collaborative articles platforms.",
    items: [
      "Personal Blog", "Travel Blog", "Food Blog", "Fashion Blog", "Technology Blog",
      "Education Blog", "Business Blog", "Finance Blog", "Health Blog", "Lifestyle Blog"
    ]
  },
  {
    id: "job",
    name: "Job Websites",
    icon: "search-code",
    color: "var(--accent-job)",
    gradient: "linear-gradient(135deg, #6366f1 0%, #4338ca 100%)",
    description: "Recruitment marketplaces, freelancing networks, resume builders, and career guidance tools.",
    items: [
      "Job Portal", "Recruitment Portal", "Internship Website", "Freelancing Platform",
      "Resume Builder", "Resume Checker", "Career Counseling Website"
    ]
  },
  {
    id: "realestate",
    name: "Real Estate Websites",
    icon: "home",
    color: "var(--accent-realestate)",
    gradient: "linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)",
    description: "Property auctions, agent listings, tenant portals, and commercial property search fields.",
    items: [
      "Property Listing", "Property Rental", "Real Estate Agency", "Property Auction",
      "Apartment Booking", "Land Sales", "Commercial Property"
    ]
  },
  {
    id: "sports",
    name: "Sports Websites",
    icon: "trophy",
    color: "var(--accent-sports)",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
    description: "Live score tracking, sports clubs, tournament dashboards, and fantasy leagues.",
    items: [
      "Sports Club", "Tournament Website", "Live Score Website", "Fantasy Sports",
      "Cricket Website", "Football Website", "Gym Website", "Fitness Tracker"
    ]
  },
  {
    id: "event",
    name: "Event Websites",
    icon: "calendar",
    color: "var(--accent-event)",
    gradient: "linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)",
    description: "Interactive ticketing, weddings, virtual webinars, and major music festival logs.",
    items: [
      "Wedding Website", "Conference Website", "Seminar Website", "Webinar Platform",
      "Event Ticket Booking", "Music Festival Website", "Exhibition Website"
    ]
  },
  {
    id: "nonprofit",
    name: "Non-Profit Websites",
    icon: "heart",
    color: "var(--accent-nonprofit)",
    gradient: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
    description: "Charity initiatives, volunteer logs, donation gateways, and local organization maps.",
    items: [
      "NGO Website", "Charity Website", "Donation Portal", "Religious Organization",
      "Community Organization", "Volunteer Management"
    ]
  },
  {
    id: "legal",
    name: "Legal Websites",
    icon: "gavel",
    color: "var(--accent-legal)",
    gradient: "linear-gradient(135deg, #475569 0%, #1e293b 100%)",
    description: "Law firm representations, consultant boards, case tracking apps, and template generators.",
    items: [
      "Law Firm", "Advocate Portfolio", "Legal Consultation", "Court Case Tracking", "Legal Documentation"
    ]
  },
  {
    id: "technology",
    name: "Technology Websites",
    icon: "cpu",
    color: "var(--accent-tech)",
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #1d4ed8 100%)",
    description: "SaaS platforms, cloud databases, Git integrations, developer API stores, and security portals.",
    items: [
      "SaaS Platform", "AI Platform", "Machine Learning Portal", "API Marketplace",
      "Developer Documentation", "Git Repository", "Cloud Platform", "Cybersecurity Website"
    ]
  },
  {
    id: "gaming",
    name: "Gaming Websites",
    icon: "gamepad-2",
    color: "var(--accent-gaming)",
    gradient: "linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)",
    description: "Cloud gaming hubs, virtual shops, esports tournaments, and developer forums.",
    items: [
      "Online Games", "Game Store", "Esports Platform", "Gaming Community", "Leaderboard Website"
    ]
  },
  {
    id: "photography",
    name: "Photography Websites",
    icon: "camera",
    color: "var(--accent-photography)",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
    description: "Stock photo markets, custom galleries, fine-art exhibits, and creator licensing pools.",
    items: [
      "Photo Gallery", "Image Marketplace", "Stock Photography", "Photography Portfolio"
    ]
  },
  {
    id: "video",
    name: "Video Websites",
    icon: "video",
    color: "var(--accent-video)",
    gradient: "linear-gradient(135deg, #f43f5e 0%, #be123c 100%)",
    description: "Interactive broadcasts, lesson video banks, and virtual webinar dashboards.",
    items: [
      "Video Sharing", "Live Streaming", "Video Course Platform", "Webinar Platform"
    ]
  },
  {
    id: "music",
    name: "Music Websites",
    icon: "music",
    color: "var(--accent-music)",
    gradient: "linear-gradient(135deg, #ec4899 0%, #be185d 100%)",
    description: "Audio players, music instruction academies, concert lists, and instrument markets.",
    items: [
      "Music Streaming", "Artist Website", "Music School", "Instrument Store"
    ]
  },
  {
    id: "fashion",
    name: "Fashion Websites",
    icon: "sparkles",
    color: "var(--accent-fashion)",
    gradient: "linear-gradient(135deg, #d946ef 0%, #a21caf 100%)",
    description: "Designer portfolios, fashion labels, custom salon schedules, and stylist profiles.",
    items: [
      "Boutique Website", "Clothing Brand", "Fashion Designer", "Beauty Salon", "Makeup Artist"
    ]
  },
  {
    id: "automobile",
    name: "Automobile Websites",
    icon: "car",
    color: "var(--accent-automobile)",
    gradient: "linear-gradient(135deg, #64748b 0%, #334155 100%)",
    description: "Dealership listings, spare parts shopping, booking services, and driving classes.",
    items: [
      "Car Dealer", "Bike Dealer", "Service Center", "Vehicle Rental", "Driving School"
    ]
  },
  {
    id: "agriculture",
    name: "Agriculture Websites",
    icon: "leaf",
    color: "var(--accent-agri)",
    gradient: "linear-gradient(135deg, #10b981 0%, #064e3b 100%)",
    description: "Agronomic planners, seed marketplaces, farm analytics, and produce sales networks.",
    items: [
      "Farm Management", "Organic Farming", "Seed Marketplace", "Fertilizer Store", "Agri Marketplace"
    ]
  },
  {
    id: "industrial",
    name: "Industrial Websites",
    icon: "factory",
    color: "var(--accent-industrial)",
    gradient: "linear-gradient(135deg, #475569 0%, #0f172a 100%)",
    description: "Factory systems, heavy tooling shops, chemistry supply catalogs, and steel foundries.",
    items: [
      "Factory Website", "Industrial Equipment", "Chemical Industry", "Steel Industry"
    ]
  },
  {
    id: "research",
    name: "Research Websites",
    icon: "binary",
    color: "var(--accent-research)",
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
    description: "Lab collaboration dashboards, paper cataloging, and thesis libraries.",
    items: [
      "Research Lab", "Publication Portal", "Thesis Repository", "Scientific Journal", "Research Collaboration Platform"
    ]
  },
  {
    id: "ai-powered",
    name: "AI-Powered Websites",
    icon: "brain-circuit",
    color: "var(--accent-ai)",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)",
    description: "Next-gen generation tools, medical scanners, and automated assistants powered by LLMs.",
    items: [
      "AI Chatbot", "AI Image Generator", "AI Resume Builder", "AI Content Generator", "AI Code Generator",
      "AI Research Assistant", "AI Healthcare Assistant", "AI Legal Assistant", "AI Education Platform", "AI Shopping Assistant"
    ]
  },
  {
    id: "utility",
    name: "Utility Websites",
    icon: "wrench",
    color: "var(--accent-utility)",
    gradient: "linear-gradient(135deg, #84cc16 0%, #4d7c0f 100%)",
    description: "Micro-converters, QR encoders, PDF engines, and text compressors.",
    items: [
      "Weather Website", "Currency Converter", "Unit Converter", "QR Code Generator", "PDF Converter",
      "Image Compressor", "Password Generator", "URL Shortener", "Barcode Generator", "Calculator Website"
    ]
  },
  {
    id: "management",
    name: "Management Systems",
    icon: "layout-dashboard",
    color: "var(--accent-mgmt)",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)",
    description: "Enterprise scale CRM/ERP databases, clinic planners, and visitor logs.",
    items: [
      "School Management System", "College ERP", "Hospital Management System", "Hotel Management System",
      "Inventory Management System", "HR Management System", "CRM", "ERP", "Payroll System", "Attendance System",
      "Visitor Management System", "Asset Management System", "Warehouse Management System", "Library Management System",
      "Laboratory Information System"
    ]
  },
  {
    id: "booking",
    name: "Booking Websites",
    icon: "bookmark-check",
    color: "var(--accent-booking-sys)",
    gradient: "linear-gradient(135deg, #14b8a6 0%, #0f766e 100%)",
    description: "Appointment schedules, workspace rentals, car rentals, and athletic pitch reserves.",
    items: [
      "Doctor Appointment", "Salon Booking", "Hotel Reservation", "Restaurant Reservation", "Sports Ground Booking",
      "Meeting Room Booking", "Vehicle Booking", "Equipment Rental", "Tutor Booking", "Event Booking"
    ]
  },
  {
    id: "community",
    name: "Community Platforms",
    icon: "message-square-code",
    color: "var(--accent-comm)",
    gradient: "linear-gradient(135deg, #6366f1 0%, #4338ca 100%)",
    description: "Shared encyclopedias, hobby chat groups, local news clusters, and alumni logs.",
    items: [
      "Discussion Forum", "Knowledge Base", "Wiki Website", "Alumni Network",
      "Local Community Portal", "Hobby Groups"
    ]
  },
  {
    id: "specialized-industry",
    name: "Specialized Industry Websites",
    icon: "shield-alert",
    color: "var(--accent-special)",
    gradient: "linear-gradient(135deg, #f43f5e 0%, #9f1239 100%)",
    description: "Highly customized systems for niche sectors like laundry management, cooperative societies, and POS hubs.",
    items: [
      "Dental Clinic Management", "Aluminum Fabrication Management", "Construction Project Management", "Textile Business",
      "Jewellery Management", "Medical Store ERP", "Restaurant POS", "Pharmacy ERP", "Salon Management", "Gym Management",
      "Laundry Management", "Courier Management", "Vehicle Service Management", "Hostel Management", "Hotel PMS",
      "Cinema Ticket Booking", "Petrol Pump Management", "Cooperative Society Portal", "Microfinance Management",
      "Dairy Farm Management", "Poultry Farm Management", "Fish Farm Management"
    ]
  },
  {
    id: "advanced-ai-saas",
    name: "Advanced AI + SaaS Platforms",
    icon: "rocket",
    color: "var(--accent-adv-ai)",
    gradient: "linear-gradient(135deg, #a855f7 0%, #6b21a8 100%)",
    description: "Highly integrated SaaS platforms equipped with deep learning analytics and automation flows.",
    items: [
      "AI CRM", "AI ERP", "AI Inventory Management", "AI Student Analytics", "AI Attendance System",
      "AI Exam Evaluation", "AI Recruitment Platform", "AI Interview Platform", "AI Sales Analytics",
      "AI Business Intelligence Dashboard", "AI Recommendation Engine", "AI Fraud Detection", "AI Predictive Maintenance",
      "AI Healthcare Analytics", "AI Smart Agriculture Platform"
    ]
  }
];

const modernFeatures = [
  { name: "AI Chatbot", category: "AI & Engagement", complexity: 12 },
  { name: "Voice Search", category: "Accessibility", complexity: 8 },
  { name: "Dark/Light Mode", category: "Core UX", complexity: 3 },
  { name: "Multi-language Support", category: "Core UX", complexity: 5 },
  { name: "Progressive Web App (PWA)", category: "Mobile UX", complexity: 8 },
  { name: "Responsive Design", category: "Core UX", complexity: 3 },
  { name: "Push Notifications", category: "Engagement", complexity: 7 },
  { name: "Live Chat", category: "Engagement", complexity: 8 },
  { name: "User Authentication", category: "Security", complexity: 8 },
  { name: "Social Login", category: "Security", complexity: 6 },
  { name: "Payment Gateway Integration", category: "Transactions", complexity: 9 },
  { name: "Subscription Plans", category: "Transactions", complexity: 10 },
  { name: "Analytics Dashboard", category: "Data", complexity: 10 },
  { name: "Admin Panel", category: "Management", complexity: 9 },
  { name: "Role-Based Access Control", category: "Security", complexity: 9 },
  { name: "Email Notifications", category: "System", complexity: 4 },
  { name: "SMS/WhatsApp Notifications", category: "System", complexity: 7 },
  { name: "QR Code Integration", category: "Utility", complexity: 4 },
  { name: "Barcode Scanning", category: "Utility", complexity: 8 },
  { name: "Geolocation Services", category: "Utility", complexity: 6 },
  { name: "Maps Integration", category: "Utility", complexity: 5 },
  { name: "Recommendation System", category: "AI & Engagement", complexity: 11 },
  { name: "Search with Filters", category: "Core UX", complexity: 5 },
  { name: "Wishlist", category: "Transactions", complexity: 4 },
  { name: "Reviews and Ratings", category: "Engagement", complexity: 5 },
  { name: "Order Tracking", category: "Transactions", complexity: 7 },
  { name: "Inventory Management", category: "Management", complexity: 10 },
  { name: "AI-Based Product Recommendations", category: "AI & Engagement", complexity: 12 },
  { name: "OCR (Optical Character Recognition)", category: "AI & Utility", complexity: 12 },
  { name: "Image Recognition", category: "AI & Utility", complexity: 12 },
  { name: "Speech-to-Text", category: "AI & Utility", complexity: 10 },
  { name: "Text-to-Speech", category: "AI & Utility", complexity: 9 },
  { name: "Video Conferencing", category: "Engagement", complexity: 11 },
  { name: "File Uploads", category: "System", complexity: 5 },
  { name: "PDF Generation", category: "Utility", complexity: 5 },
  { name: "Report Export (PDF, Excel, CSV)", category: "Utility", complexity: 6 },
  { name: "REST API / GraphQL API", category: "System", complexity: 8 },
  { name: "Mobile App Integration", category: "System", complexity: 10 },
  { name: "Cloud Storage", category: "System", complexity: 7 },
  { name: "CDN Integration", category: "System", complexity: 5 },
  { name: "Two-Factor Authentication (2FA)", category: "Security", complexity: 9 },
  { name: "Audit Logs", category: "Security", complexity: 7 },
  { name: "Backup and Restore", category: "System", complexity: 9 },
  { name: "Role-Based Dashboards", category: "Management", complexity: 10 },
  { name: "Real-Time Notifications (WebSockets)", category: "System", complexity: 10 },
  { name: "AI Analytics and Insights", category: "AI & Engagement", complexity: 13 },
  { name: "Workflow Automation", category: "System", complexity: 12 },
  { name: "Multi-Tenant Architecture (SaaS)", category: "Architecture", complexity: 15 }
];

// App initialization and DOM elements
document.addEventListener("DOMContentLoaded", () => {
  initStarfield();
  renderCategoriesGrid();
  renderConfiguratorOptions();
  renderFeaturesMatrix();
  setupSearch();
  setupModalEvents();
  setupConfiguratorLogic();
  setupFilterTabs();
  setupThemeToggle();
  setupLuckySpinner();
});

// STARFIELD ENGINE (Canvas starfield with interactive gravity)
function initStarfield() {
  const canvas = document.getElementById("starfield-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let stars = [];
  const count = 90;
  let mouse = { x: null, y: null, radius: 140 };

  const resize = () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  };
  resize();
  window.addEventListener("resize", resize);

  window.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  window.addEventListener("mouseleave", () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Star {
    constructor() {
      this.reset();
      this.y = Math.random() * canvas.height;
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = 0;
      this.size = Math.random() * 2.2 + 0.5;
      this.speed = Math.random() * 0.4 + 0.1;
      this.opacity = Math.random() * 0.7 + 0.3;
      this.baseColor = Math.random() > 0.6 ? "#a855f7" : (Math.random() > 0.5 ? "#06b6d4" : "#ffffff");
    }
    update() {
      this.y += this.speed;
      if (this.y > canvas.height) {
        this.reset();
      }

      // Interaction with mouse
      if (mouse.x !== null && mouse.y !== null) {
        let dx = this.x - mouse.x;
        let dy = this.y - mouse.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          let force = (mouse.radius - dist) / mouse.radius;
          this.x += (dx / dist) * force * 1.5;
          this.y += (dy / dist) * force * 1.5;
        }
      }
    }
    draw() {
      ctx.fillStyle = this.baseColor;
      ctx.globalAlpha = this.opacity;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  for (let i = 0; i < count; i++) {
    stars.push(new Star());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
      s.update();
      s.draw();
    });
    // Draw links between nearby stars
    ctx.globalAlpha = 0.08;
    ctx.strokeStyle = document.body.classList.contains("light-mode") ? "#000000" : "#ffffff";
    ctx.lineWidth = 0.5;
    for (let i = 0; i < stars.length; i++) {
      for (let j = i + 1; j < stars.length; j++) {
        let dx = stars[i].x - stars[j].x;
        let dy = stars[i].y - stars[j].y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 80) {
          ctx.beginPath();
          ctx.moveTo(stars[i].x, stars[i].y);
          ctx.lineTo(stars[j].x, stars[j].y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }
  animate();
}

// Render Categories Grid
function renderCategoriesGrid() {
  const container = document.getElementById("categories-grid");
  if (!container) return;
  container.innerHTML = "";

  categoriesData.forEach(cat => {
    const card = document.createElement("div");
    card.className = "category-card";
    card.style.setProperty("--accent-theme", cat.color);
    card.setAttribute("data-id", cat.id);

    card.innerHTML = `
      <div class="card-glow" style="background: ${cat.gradient}"></div>
      <div class="card-header-icon">
        <i data-lucide="${cat.icon}"></i>
      </div>
      <h3 class="card-title">${cat.name}</h3>
      <p class="card-desc">${cat.description}</p>
      <div class="card-footer">
        <span class="card-count">${cat.items.length} Ideas</span>
        <button class="card-btn-explore" aria-label="Explore ${cat.name}">
          Explore <i data-lucide="arrow-right"></i>
        </button>
      </div>
    `;

    card.addEventListener("click", () => openCategoryDrawer(cat.id));
    container.appendChild(card);
  });
  lucide.createIcons();
}

// Interactive filter tabs setup
function setupFilterTabs() {
  const tabs = document.querySelectorAll(".filter-tab");
  if (!tabs) return;

  const tabMapping = {
    all: [],
    business: ['business', 'portfolio', 'blogging', 'job', 'legal', 'realestate', 'event', 'nonprofit', 'specialized-industry'],
    ecommerce: ['ecommerce', 'food', 'automobile', 'booking', 'fashion'],
    'ai-saas': ['advanced-ai-saas', 'ai-powered', 'technology'],
    'healthcare-gov': ['healthcare', 'government', 'educational', 'social-networking', 'news'],
    'utilities-mgmt': ['utility', 'management', 'community', 'research', 'photography', 'video', 'music', 'gaming', 'sports', 'agriculture', 'industrial']
  };

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Toggle active states
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const filterVal = tab.getAttribute("data-filter");
      const allowedCategories = tabMapping[filterVal];
      const cards = document.querySelectorAll(".category-card");

      cards.forEach(card => {
        const catId = card.getAttribute("data-id");
        if (filterVal === "all" || allowedCategories.includes(catId)) {
          card.style.display = "flex";
          card.style.opacity = "0";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "scale(1)";
          }, 50);
        } else {
          card.style.transform = "scale(0.95)";
          card.style.opacity = "0";
          setTimeout(() => {
            card.style.display = "none";
          }, 300);
        }
      });
    });
  });
}

// Global search features & setup
function setupSearch() {
  const searchInput = document.getElementById("global-search");
  const searchResultsCount = document.getElementById("search-results-count");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    const cards = document.querySelectorAll(".category-card");
    let visibleCount = 0;

    // Reset filter tabs to 'All'
    document.querySelectorAll(".filter-tab").forEach(t => {
      if (t.getAttribute("data-filter") === "all") t.classList.add("active");
      else t.classList.remove("active");
    });

    cards.forEach(card => {
      const catId = card.getAttribute("data-id");
      const cat = categoriesData.find(c => c.id === catId);
      
      // Match category name, desc or any subcategory list item
      const matchesName = cat.name.toLowerCase().includes(query);
      const matchesDesc = cat.description.toLowerCase().includes(query);
      const matchesItems = cat.items.some(item => item.toLowerCase().includes(query));

      if (matchesName || matchesDesc || matchesItems) {
        card.style.display = "flex";
        card.style.opacity = "1";
        visibleCount++;
        // If query matches specific items, highlight card visually
        if (query !== "" && matchesItems && !matchesName) {
          card.classList.add("matched-items");
        } else {
          card.classList.remove("matched-items");
        }
      } else {
        card.style.display = "none";
      }
    });

    if (query === "") {
      searchResultsCount.textContent = "Showing all categories";
      searchResultsCount.style.color = "var(--text-secondary)";
    } else {
      searchResultsCount.textContent = `Found ${visibleCount} categories matching "${query}"`;
      searchResultsCount.style.color = "var(--accent-ai)";
    }
  });
}

// Open Detailed Drawer
let currentOpenCategoryId = null;

function openCategoryDrawer(id) {
  const cat = categoriesData.find(c => c.id === id);
  if (!cat) return;

  currentOpenCategoryId = id;

  const drawer = document.getElementById("details-drawer");
  const overlay = document.getElementById("drawer-overlay");
  const title = document.getElementById("drawer-title");
  const desc = document.getElementById("drawer-desc");
  const list = document.getElementById("drawer-list");
  const iconBox = document.getElementById("drawer-icon-box");

  // Load content
  title.textContent = cat.name;
  desc.textContent = cat.description;
  iconBox.innerHTML = `<i data-lucide="${cat.icon}"></i>`;
  iconBox.className = "drawer-icon-wrap";
  iconBox.style.background = cat.gradient;

  // Add list items
  list.innerHTML = "";
  cat.items.forEach(item => {
    const li = document.createElement("li");
    li.className = "drawer-item";
    li.innerHTML = `
      <span class="item-bullet"></span>
      <span class="item-text">${item}</span>
      <button class="item-action-config" title="Send to Configurator" aria-label="Configure ${item}">
        <i data-lucide="plus"></i> Setup Blueprint
      </button>
    `;

    // Click handler to configure this item directly
    li.querySelector(".item-action-config").addEventListener("click", (e) => {
      e.stopPropagation();
      sendToConfigurator(item, cat.id);
      closeCategoryDrawer();
    });

    list.appendChild(li);
  });

  // Highlight active card
  document.querySelectorAll(".category-card").forEach(c => {
    if (c.getAttribute("data-id") === id) {
      c.classList.add("active-card");
    } else {
      c.classList.remove("active-card");
    }
  });

  // Open Animations
  overlay.classList.add("active");
  drawer.classList.add("open");
  document.body.style.overflow = "hidden"; // Prevent background scrolling

  lucide.createIcons();

  // Search filter inside drawer
  const drawerSearch = document.getElementById("drawer-search");
  drawerSearch.value = "";
  drawerSearch.focus();
  drawerSearch.addEventListener("input", filterDrawerItems);
}

function filterDrawerItems(e) {
  const query = e.target.value.toLowerCase().trim();
  const items = document.querySelectorAll(".drawer-item");

  items.forEach(item => {
    const text = item.querySelector(".item-text").textContent.toLowerCase();
    if (text.includes(query)) {
      item.style.display = "flex";
      // Highlight matching characters
      const originalText = item.querySelector(".item-text").textContent;
      const index = originalText.toLowerCase().indexOf(query);
      if (index >= 0 && query !== "") {
        const highlighted = originalText.substring(0, index) +
          `<mark class="search-highlight">${originalText.substring(index, index + query.length)}</mark>` +
          originalText.substring(index + query.length);
        item.querySelector(".item-text").innerHTML = highlighted;
      } else {
        item.querySelector(".item-text").textContent = originalText;
      }
    } else {
      item.style.display = "none";
    }
  });
}

function closeCategoryDrawer() {
  const drawer = document.getElementById("details-drawer");
  const overlay = document.getElementById("drawer-overlay");

  drawer.classList.remove("open");
  overlay.classList.remove("active");
  document.body.style.overflow = ""; // Restore scrolling

  document.querySelectorAll(".category-card").forEach(c => c.classList.remove("active-card"));
  currentOpenCategoryId = null;
}

function setupModalEvents() {
  const closeBtn = document.getElementById("drawer-close");
  const overlay = document.getElementById("drawer-overlay");

  if (closeBtn) closeBtn.addEventListener("click", closeCategoryDrawer);
  if (overlay) overlay.addEventListener("click", closeCategoryDrawer);

  // Close on Escape key
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCategoryDrawer();
    }
  });
}

// Light / Dark Theme toggling
function setupThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");
  if (!themeToggle) return;

  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "light") {
    document.body.classList.add("light-mode");
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    const theme = document.body.classList.contains("light-mode") ? "light" : "dark";
    localStorage.setItem("theme", theme);
  });
}

// CONFIGURATOR / BLUEPRINT GENERATOR LOGIC
function renderConfiguratorOptions() {
  const dropdown = document.getElementById("config-category-select");
  const ideasDropdown = document.getElementById("config-idea-select");
  const featuresChecklist = document.getElementById("config-features-checklist");
  if (!dropdown || !featuresChecklist) return;

  // Build category dropdown options
  dropdown.innerHTML = "";
  categoriesData.forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat.id;
    opt.textContent = cat.name;
    dropdown.appendChild(opt);
  });

  // Populate sub-ideas based on category selection
  const updateIdeas = () => {
    const selectedId = dropdown.value;
    const cat = categoriesData.find(c => c.id === selectedId);
    ideasDropdown.innerHTML = "";
    if (cat) {
      cat.items.forEach(item => {
        const opt = document.createElement("option");
        opt.value = item;
        opt.textContent = item;
        ideasDropdown.appendChild(opt);
      });
    }
  };

  dropdown.addEventListener("change", updateIdeas);
  updateIdeas(); // initial load

  // Render Features Checklist grouped by category
  featuresChecklist.innerHTML = "";
  const categories = [...new Set(modernFeatures.map(f => f.category))];
  
  categories.forEach(catName => {
    const groupWrap = document.createElement("div");
    groupWrap.className = "feature-group";
    groupWrap.innerHTML = `<h5 class="feature-group-title">${catName}</h5>`;

    const grid = document.createElement("div");
    grid.className = "feature-checklist-grid";

    const catFeatures = modernFeatures.filter(f => f.category === catName);
    catFeatures.forEach(feat => {
      const label = document.createElement("label");
      label.className = "feature-check-label";
      label.innerHTML = `
        <input type="checkbox" value="${feat.name}" data-complexity="${feat.complexity}">
        <span class="custom-checkbox"></span>
        <span class="feat-label-text">${feat.name}</span>
      `;
      grid.appendChild(label);
    });

    groupWrap.appendChild(grid);
    featuresChecklist.appendChild(groupWrap);
  });
}

function setupConfiguratorLogic() {
  const calculateBtn = document.getElementById("config-btn-generate");
  const categorySelect = document.getElementById("config-category-select");
  const ideaSelect = document.getElementById("config-idea-select");
  const featuresChecklist = document.getElementById("config-features-checklist");

  if (calculateBtn) {
    calculateBtn.addEventListener("click", () => {
      // Add spin rotation to button CPU icon
      const icon = calculateBtn.querySelector("i");
      if (icon) {
        icon.style.transform = "rotate(360deg)";
        icon.style.transition = "transform 0.8s ease";
        setTimeout(() => { icon.style.transform = "none"; }, 800);
      }
      generateBlueprint();
    });
  }

  // Interactivity: Auto-update on selections and checkbox toggles!
  if (categorySelect) {
    categorySelect.addEventListener("change", () => {
      // Small timeout to allow target website select to re-render
      setTimeout(generateBlueprint, 50);
    });
  }
  if (ideaSelect) {
    ideaSelect.addEventListener("change", generateBlueprint);
  }
  if (featuresChecklist) {
    featuresChecklist.addEventListener("change", generateBlueprint);
  }
}

function sendToConfigurator(item, categoryId) {
  const categorySelect = document.getElementById("config-category-select");
  const ideaSelect = document.getElementById("config-idea-select");
  const configuratorSection = document.getElementById("configurator");

  if (!categorySelect || !ideaSelect || !configuratorSection) return;

  // Change category select
  categorySelect.value = categoryId;
  
  // Force update the ideas dropdown options
  const cat = categoriesData.find(c => c.id === categoryId);
  ideaSelect.innerHTML = "";
  if (cat) {
    cat.items.forEach(it => {
      const opt = document.createElement("option");
      opt.value = it;
      opt.textContent = it;
      ideaSelect.appendChild(opt);
    });
  }

  // Set selected idea
  ideaSelect.value = item;

  // Smooth scroll to Configurator
  configuratorSection.scrollIntoView({ behavior: "smooth" });

  // Add flashing glow to indicate update
  configuratorSection.classList.add("section-highlight");
  setTimeout(() => {
    configuratorSection.classList.remove("section-highlight");
  }, 1200);

  // Trigger preview generation with default checked values
  generateBlueprint();
}

function generateBlueprint() {
  const categoryId = document.getElementById("config-category-select").value;
  const idea = document.getElementById("config-idea-select").value;
  const checkboxes = document.querySelectorAll("#config-features-checklist input[type='checkbox']:checked");
  
  const category = categoriesData.find(c => c.id === categoryId);
  if (!category || !idea) return;

  // Calculate stats based on checked elements
  let totalComplexity = 0;
  let featuresList = [];

  checkboxes.forEach(cb => {
    totalComplexity += parseInt(cb.getAttribute("data-complexity"), 10);
    featuresList.push(cb.value);
  });

  // Base difficulty points depending on category type
  let baseComplexity = 5;
  if (categoryId === "advanced-ai-saas" || categoryId === "management" || categoryId === "specialized-industry") {
    baseComplexity = 12;
  } else if (categoryId === "ecommerce" || categoryId === "financial" || categoryId === "technology") {
    baseComplexity = 9;
  }

  const score = baseComplexity + totalComplexity;

  // Formulate Recommendations
  let architecture = "Single Page Application (SPA) / SSR Client Stack";
  let techStack = ["Vanilla JS / CSS Grid", "Dynamic Local Templates"];
  let dbType = "Browser Storage (IndexedDB/Local)";
  let devTime = "1-2 Weeks";
  let tier = "Micro Project";

  if (score > 60) {
    architecture = "Enterprise SaaS Distributed Architecture";
    techStack = ["Next.js / Python FastAPIs", "Redis Cache", "Docker / Kubernetes"];
    dbType = "PostgreSQL Cluster + Vector Storage (for AI data)";
    devTime = "4-6 Months";
    tier = "Advanced / Enterprise SaaS Tier";
  } else if (score > 35) {
    architecture = "Fullstack Application (Server-Rendered / Serverless)";
    techStack = ["React / TailwindCSS / Node.js", "Express API Router", "Cloudflare CDN"];
    dbType = "Supabase / PostgreSQL Serverless";
    devTime = "1.5-3 Months";
    tier = "Medium-scale API Application";
  } else if (score > 15) {
    architecture = "Structured Web App (Frontend + Headless CMS)";
    techStack = ["Vite App Shell", "TailwindCSS styling", "Firebase Back-End"];
    dbType = "Firebase Firestore / MongoDB Atlas";
    devTime = "3-6 Weeks";
    tier = "Standard Web Application";
  }

  // Display Blueprint Card details
  const bpTitle = document.getElementById("bp-title");
  const bpCategory = document.getElementById("bp-category");
  const bpArch = document.getElementById("bp-arch");
  const bpDatabase = document.getElementById("bp-database");
  const bpStack = document.getElementById("bp-stack");
  const bpTimeline = document.getElementById("bp-timeline");
  const bpTier = document.getElementById("bp-tier");
  const bpFeaturesCount = document.getElementById("bp-features-count");
  const bpSelectedFeatures = document.getElementById("bp-selected-features");
  
  const complexityProgress = document.getElementById("bp-complexity-bar");
  const complexityText = document.getElementById("bp-complexity-text");

  // Fade action
  const container = document.getElementById("blueprint-card-display");
  container.classList.add("updating");
  
  setTimeout(() => {
    bpTitle.textContent = idea;
    bpCategory.textContent = category.name;
    bpArch.textContent = architecture;
    bpDatabase.textContent = dbType;
    bpTimeline.textContent = devTime;
    bpTier.textContent = tier;
    bpFeaturesCount.textContent = `${featuresList.length} Active Features`;
    
    // Stack array representation
    bpStack.innerHTML = techStack.map(t => `<span class="tech-tag">${t}</span>`).join("");

    // Dynamic Features display
    if (featuresList.length === 0) {
      bpSelectedFeatures.innerHTML = `<span class="no-features-label">No custom features selected. Using core static modules.</span>`;
    } else {
      bpSelectedFeatures.innerHTML = featuresList.map(f => `<span class="feat-tag"><i data-lucide="sparkle" class="sparkle-icon"></i> ${f}</span>`).join("");
      lucide.createIcons();
    }

    // Complexity progress animation
    const maxScore = 120;
    const pct = Math.min((score / maxScore) * 100, 100);
    complexityProgress.style.width = `${pct}%`;
    complexityText.textContent = `${Math.round(pct)}% (Complexity Score: ${score} pts)`;

    // Change complexity bar color depending on grade
    if (pct > 70) {
      complexityProgress.style.background = "linear-gradient(90deg, #f43f5e, #be123c)";
    } else if (pct > 35) {
      complexityProgress.style.background = "linear-gradient(90deg, #f59e0b, #d97706)";
    } else {
      complexityProgress.style.background = "linear-gradient(90deg, #10b981, #059669)";
    }

    container.classList.remove("updating");
  }, 200);
}

// I'M FEELING LUCKY RANDOM SPINNER LOGIC
function setupLuckySpinner() {
  const luckyBtn = document.getElementById("btn-feeling-lucky");
  if (!luckyBtn) return;

  luckyBtn.addEventListener("click", () => {
    // Disable button during spin animation
    luckyBtn.disabled = true;
    luckyBtn.innerHTML = `<i data-lucide="loader" class="spin-icon"></i> Selecting...`;
    lucide.createIcons();

    // Select random category & item
    const randCatIdx = Math.floor(Math.random() * categoriesData.length);
    const randCat = categoriesData[randCatIdx];
    const randItemIdx = Math.floor(Math.random() * randCat.items.length);
    const randItem = randCat.items[randItemIdx];

    // Select random features (between 2 and 5 features)
    const allCheckboxes = document.querySelectorAll("#config-features-checklist input[type='checkbox']");
    allCheckboxes.forEach(cb => cb.checked = false); // clear current selection

    const numFeats = Math.floor(Math.random() * 4) + 2;
    const shuffledChecks = Array.from(allCheckboxes).sort(() => 0.5 - Math.random());
    for (let i = 0; i < numFeats; i++) {
      if (shuffledChecks[i]) shuffledChecks[i].checked = true;
    }

    // Slot machine style scrolling animation of selects
    let counter = 0;
    const interval = setInterval(() => {
      const categorySelect = document.getElementById("config-category-select");
      const tempCat = categoriesData[Math.floor(Math.random() * categoriesData.length)];
      categorySelect.value = tempCat.id;

      // Populate temp items dropdown
      const ideaSelect = document.getElementById("config-idea-select");
      ideaSelect.innerHTML = tempCat.items.map(it => `<option value="${it}">${it}</option>`).join("");
      ideaSelect.value = tempCat.items[Math.floor(Math.random() * tempCat.items.length)];
      
      counter++;
      if (counter > 8) {
        clearInterval(interval);
        
        // Finalize selections
        categorySelect.value = randCat.id;
        ideaSelect.innerHTML = randCat.items.map(it => `<option value="${it}">${it}</option>`).join("");
        ideaSelect.value = randItem;

        // Run final blueprint generation
        generateBlueprint();

        // Restore button state
        luckyBtn.disabled = false;
        luckyBtn.innerHTML = `<i data-lucide="shuffle"></i> I'm Feeling Lucky (Spin Ideas)`;
        lucide.createIcons();

        // Scroll to configurator
        const configuratorSection = document.getElementById("configurator");
        configuratorSection.scrollIntoView({ behavior: "smooth" });

        // Highlight configurator card
        configuratorSection.classList.add("section-highlight");
        setTimeout(() => {
          configuratorSection.classList.remove("section-highlight");
        }, 1200);
      }
    }, 120);
  });
}

// Render Features Matrix Grid
function renderFeaturesMatrix() {
  const container = document.getElementById("features-matrix-grid");
  if (!container) return;
  container.innerHTML = "";

  modernFeatures.forEach(feat => {
    const card = document.createElement("div");
    card.className = "feature-matrix-card";
    card.innerHTML = `
      <div class="matrix-card-header">
        <span class="matrix-feat-category">${feat.category}</span>
        <span class="matrix-feat-complexity">Complexity: ${feat.complexity}/15</span>
      </div>
      <h4 class="matrix-feat-name">${feat.name}</h4>
      <p class="matrix-feat-desc">Enables seamless digital integration, optimized for modern performance and secure user pipelines.</p>
    `;
    container.appendChild(card);
  });
}

