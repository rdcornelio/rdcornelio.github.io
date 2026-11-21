/**
 * Personal Portfolio & Dynamic A4 Resume PDF Generator
 * Author: Reynalyn Cornelio
 */

/* ==========================================================================
   CENTRALIZED PORTFOLIO, DOSSIER & RESUME DATA SOURCE
   ========================================================================== */
const portfolioData = {
    /* Optional: Paste a free Formspree or Web3Forms endpoint URL to deliver contact form messages directly to your inbox */
    contactFormEndpoint: "https://formspree.io/f/xvkaqjya",

    personal: {
        fullName: "Reynalyn Cornelio",
        academicTitle: "BSIT – 3rd Year Student",
        tagline: "404: Sleep Not Found",
        email: "reynn4936@gmail.com",
        phone: "0963-707-4735",
        address: "Halang, Calamba City, Laguna"
    },
    socials: [
        { label: "GitHub", icon: "fab fa-github", url: "https://l.facebook.com/l.php?u=https%3A%2F%2Fgithub.com%2Frdcornelio%3Ftab%3Dprojects%26fbclid%3DIwZXh0bgNhZW0CMTAAcGRvZgVicmlkETFVdElyVWl1dksxa1NhdVVQc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABH9vXB9N_WRLLArRJ5e_-nzu3hx9S_sbaNDHT5-IOgOWU5runP3fbM6qj13nB_aem_UEj3LmFj31Ps0H2t6aJUTA&h=AUBOplabdX81Q-oEBCn-cU5xuZyvNnhwha55j7nFTrGpx5j1d-4ZUIpc73ISBRi5dzJH5plAG8-gpZjwQrGuZ6dwmhMmtIECiUtxbBAyNOkN0Xz_kwQy12XlmemVABE" },
        { label: "LinkedIn", icon: "fab fa-linkedin-in", url: "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Freynn-undefined-b090ba451%3Ftrk%3Dcontact-info%26fbclid%3DIwZXh0bgNhZW0CMTAAcGRvZgVicmlkETFVdElyVWl1dksxa1NhdVVQc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABH4pIZ9BG6MZ7Gw_IoETmx7XBQ7q0gcm70A7_rtMjPott-VoCkJenKU3wclxk_aem_FONfvYbEv_tIgggn5dUsCg&h=AUBzeXiixzUpXQa7ushLUMTHZdgOl4KXELhhUiVAlrJa5EG1W0_RD6FR4p3x8tQ-nrvcIox-Yc9QiRQVrrrZl7QppgowDopHdxZd8JJ5LPmJ5POPL_ySdhzEsrUW10A" },
        { label: "Facebook", icon: "fab fa-facebook-f", url: "https://www.facebook.com/share/1Gus2iEfUc/?mibextid=wwXIfr" },
        { label: "Email", icon: "fas fa-envelope", url: "#contact" }
    ],
    /* Personnel Dossier Data (Photos Carousel + Full Personal Details & Motto) */
    dossier: {
        photos: [
            {
                src: "images/profile.jpg",
                label: "PHOTO 01 / 03",
                title: "Portrait Shot",
                caption: "Click 'Next' or press → to browse",
                icon: "fas fa-user-tie"
            },
            {
                src: "images/profile1.jpg",
                label: "PHOTO 02 / 03",
                title: "Campus & Tech Life",
                caption: "BSIT 3rd Year Student",
                icon: "fas fa-laptop-code"
            },
            {
                src: "images/profile2.jpg",
                label: "PHOTO 03 / 03",
                title: "Cool Geng",
                caption: "Hardware & Systems Servicing",
                icon: "fas fa-award"
            }
        ],
        details: [
            {
                label: "Personal Motto",
                icon: "fas fa-quote-left",
                value: "“Trust no one.”",
                isMotto: true
            },
            { label: "Full Name", icon: "fas fa-user", value: "No One" },
            { label: "Age", icon: "fas fa-hourglass-half", value: "20" },
            { label: "Birthday", icon: "fas fa-cake-candles", value: "October 16, 2006" },
            { label: "Location", icon: "fas fa-location-dot", value: "Halang, Calamba City, Laguna" },
            { label: "Program & Year", icon: "fas fa-graduation-cap", value: "BSIT – 3rd Year" },
            { label: "Hobbies", icon: "fas fa-language", value: "Reading, Playing Games" },
            { label: "Interests", icon: "fas fa-sparkles", value: "Web Design, Databases, UI/UX & Tech" }
        ]
    },
    professionalSummary:
        "Dedicated 3rd-year Bachelor of Science in Information Technology (BSIT) student with a strong foundation in web development, programming, database management, and computer systems servicing. Experienced in developing academic and web-based applications using HTML, CSS, JavaScript, PHP, and MySQL, with a strong commitment to continuous learning, problem-solving, and delivering reliable digital solutions.",
    education: [
        {
            level: "Tertiary Education",
            program: "Bachelor of Science in Information Technology (BSIT) – 3rd Year",
            school: "City College of Calamba",
            location: "6569+R2J, General Lim St, Calamba, 4027 Laguna, Philippines",
            year: "2024 - Present",
            icon: "fas fa-university"
        },
        {
            level: "Senior High School",
            program: "STEM - Science, Technology, Engineering, and Mathematics",
            school: "Saints John and Paul Educational Foundation, Inc. (SJPEF)",
            location: "Pamana Compound, National Highway, Halang, Calamba City, Laguna 4027, Philippines",
            year: "2022 - 2024",
            icon: "fas fa-graduation-cap"
        },
        {
            level: "Junior High School",
            program: "Junior High School Curriculum",
            year: "2018 - 2022",
            icon: "fas fa-book-reader",
            schools: [
                {
                    name: "Eduardo Barretto, Sr. National High School",
                    location: "143 Jalandoni St, Brgy. Pansol, Calamba City, 4027 Laguna, Philippines",
                    year: "2019 - 2022"
                },
                {
                    name: "Gov. Felicisimo T. San Luis Integrated Senior High School",
                    location: "Laguna Sports Complex in Bubukal, Sta. Cruz, Laguna, Philippines",
                    year: "2018 - 2019"
                }
            ]
        },
        {
            level: "Elementary School",
            program: "Elementary Education",
            school: "Bubukal Elementary School",
            location: "7C23+755, Santa Cruz, Laguna, Philippines",
            year: "2018",
            icon: "fas fa-pencil-alt"
        }
    ],
    technicalSkillCategories: [
        {
            category: "Programming & Web Development",
            icon: "fas fa-code",
            skills: [
                { name: "HTML", icon: "fab fa-html5" },
                { name: "CSS", icon: "fab fa-css3-alt" },
                { name: "JavaScript", icon: "fab fa-js" },
                { name: "PHP", icon: "fab fa-php" },
                { name: "Web Development", icon: "fas fa-globe" }
            ]
        },
        {
            category: "Database Management",
            icon: "fas fa-database",
            skills: [
                { name: "MySQL", icon: "fas fa-server" },
                { name: "Database Management", icon: "fas fa-table" }
            ]
        },
        {
            category: "Computer Hardware & Servicing",
            icon: "fas fa-tools",
            skills: [
                { name: "Computer Hardware Troubleshooting", icon: "fas fa-microchip" },
                { name: "Computer Systems Servicing", icon: "fas fa-desktop" }
            ]
        },
        {
            category: "Networking & Cybersecurity",
            icon: "fas fa-shield-alt",
            skills: [
                { name: "Networking Fundamentals", icon: "fas fa-network-wired" },
                { name: "Basic Cybersecurity", icon: "fas fa-user-shield" }
            ]
        },
        {
            category: "Productivity Tools",
            icon: "fas fa-briefcase",
            skills: [
                { name: "Microsoft Office Applications", icon: "fas fa-file-alt" }
            ]
        }
    ],
    softSkills: [
        {
            name: "Communication Skills",
            icon: "fas fa-comments",
            description: "Conveying technical and project ideas clearly with peers and stakeholders."
        },
        {
            name: "Teamwork and Collaboration",
            icon: "fas fa-people-carry",
            description: "Working cooperatively in group development projects to achieve shared goals."
        },
        {
            name: "Time Management",
            icon: "fas fa-clock",
            description: "Organizing tasks efficiently to meet academic and project deadlines."
        },
        {
            name: "Problem-Solving",
            icon: "fas fa-puzzle-piece",
            description: "Diagnosing system errors and crafting practical, logical solutions."
        },
        {
            name: "Adaptability",
            icon: "fas fa-sync-alt",
            description: "Adjusting smoothly to new technologies, tools, and project requirements."
        },
        {
            name: "Critical Thinking",
            icon: "fas fa-brain",
            description: "Evaluating system workflows objectively before implementing features."
        },
        {
            name: "Creativity",
            icon: "fas fa-palette",
            description: "Designing engaging, user-friendly interfaces with thoughtful visual balance."
        },
        {
            name: "Attention to Detail",
            icon: "fas fa-search-plus",
            description: "Ensuring accuracy in code structure, layout alignment, and data handling."
        },
        {
            name: "Willingness to Learn",
            icon: "fas fa-book-open",
            description: "Actively seeking feedback and exploring new IT concepts and best practices."
        },
        {
            name: "Responsibility",
            icon: "fas fa-check-circle",
            description: "Taking ownership of assigned deliverables with reliability and integrity."
        }
    ],
    projects: [
        {
            number: "01",
            title: "A Web-Based Event Reservation System with Inventory and Catering Equipment Management for Cherry-Andrews Catering Services",
            description: "Full-stack, role-based web platform featuring Customer, Admin, and Owner panels to automate event reservations, enforce daily booking limits, track catering equipment inventory, verify downpayments, and generate POS financial analytics.",
            highlights: [
                "Multi-step customer booking portal enforcing a 2-events-per-day cap, 14-day advance notice, package customization, 30% GCash/bank deposit upload, and a 7-stage reservation tracker",
                "Real-time catering equipment inventory management with automated stock deductions and post-event return, missing, and damage audits",
                "Admin and Owner dashboards featuring a payment verification queue, on-call staff duty monitoring, POS payment & expense ledger, and printable sales analytics reports (ISO/IEC 25010 evaluated: 3.63/4.00)"
            ],
            technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
            icon: "fas fa-utensils",
            image: "images/proj1.jpg",
            demoUrl: "#contact",
            repoUrl: ""
        },
        {
            number: "02",
            title: "Escapar — Mobile Café Ordering & Delivery App UI/UX Prototype",
            description: "End-to-end mobile application interface designed in Figma for a specialty coffee shop, guiding users from onboarding and account authentication through categorized menu browsing, cart management, and pickup or delivery checkout.",
            highlights: [
                "Complete user onboarding flow featuring landing, Sign In / Sign Up authentication, and loading states",
                "Categorized digital menu (Iced, Hot, Pastries) with featured combo promos and search filtering",
                "Interactive cart and order summary supporting Delivery and Pickup modes with live order status tracking (On-Going, Completed, Canceled)"
            ],
            technologies: ["Figma", "UI/UX Design", "Mobile Prototyping", "Wireframing"],
            icon: "fas fa-mobile-screen-button",
            image: "images/proj2.jpg",
            demoUrl: "https://www.figma.com/design/PT4M0lunICo7gOR3ByR0cW/Escapar?node-id=0-1",
            repoUrl: ""
        },
        {
            number: "03",
            title: "An Online Ordering System for a Coffee Shop",
            description: "Digital cafe ordering application allowing customers to customize drink sizes, sugar levels, and add-ons while providing staff with an organized queue to track order preparation.",
            highlights: [
                "Interactive beverage customizer for sizes, ice/sugar preferences, and add-ons",
                "Streamlined customer checkout with itemized order summary",
                "Live order status tracking from pending queue to ready-for-pickup"
            ],
            technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
            icon: "fas fa-mug-hot",
            image: "images/proj3.jpg",
            demoUrl: "#contact",
            repoUrl: ""
        }
    ],
    certificates: [
        {
            title: "National Certificate II in Computer Systems Servicing",
            issuer: "TESDA",
            date: "August 01, 2026",
            description: "Validated hands-on competency in assembling computer hardware, installing operating systems and drivers, configuring local area networks, and diagnosing system faults.",
            icon: "fas fa-award",
            image: "images/cert1.jpg"
        },
        {
            title: "The Cybersecurity Landscape",
            issuer: "Cisco Networking Academy",
            date: "August 08, 2026",
            description: "Completed foundational training on modern cyber threats, attack vectors, vulnerability awareness, and organizational defense strategies.",
            icon: "fas fa-shield-virus",
            image: "images/cert2.jpg"
        },
        {
            title: "Introduction to Cybersecurity",
            issuer: "Cisco Networking Academy",
            date: "August 08, 2026",
            description: "Covered core principles of online safety, data privacy, network security essentials, and protecting digital infrastructure.",
            icon: "fas fa-lock",
            image: "images/cert3.jpg"
        }
    ],
    seminars: [
        {
            title: "Media and Information Literacy Seminar",
            organizer: "President of Supreme Student Council (SSC) of City College of Calamba",
            date: "October 20, 2026",
            image: "images/sem1.jpg",
            description: "Explored responsible digital citizenship, critical evaluation of online sources, misinformation awareness, and ethical information sharing in academic and professional environments."
        }
    ]
};

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    initPersonnelDossier();
    renderPortfolioSectionsFromData();
    renderDedicatedPrintResume();
    initThemeSwitcher();
    initMobileNavigation();
    initScrollSpyAndNavbar();
    initScrollReveal();
    initResumeActions();
    initContactFormValidation();
    initBackToTopButton();
    initShowcaseModals();
});

/* ==========================================================================
   1. 3-MODE THEME CYCLER: PURPLE / YELLOW / WHITE
   ========================================================================== */
function initThemeSwitcher() {
    const toggleBtn = document.getElementById("theme-toggle");
    const labelEl = document.getElementById("ws-label");
    const root = document.documentElement;
    if (!toggleBtn) return;

    const themes = [
        { id: "purple", label: "PURPLE" },
        { id: "yellow", label: "YELLOW" },
        { id: "white", label: "WHITE" }
    ];

    let currentIndex = 0;
    const savedTheme = localStorage.getItem("portfolio-palette-theme");
    const foundIndex = themes.findIndex((t) => t.id === savedTheme);
    if (foundIndex !== -1) {
        currentIndex = foundIndex;
    }

    function applyTheme(index) {
        const selected = themes[index];
        if (selected.id === "purple") {
            root.removeAttribute("data-theme");
        } else {
            root.setAttribute("data-theme", selected.id);
        }
        if (labelEl) {
            labelEl.textContent = selected.label;
        }
        localStorage.setItem("portfolio-palette-theme", selected.id);
    }

    applyTheme(currentIndex);

    toggleBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % themes.length;
        applyTheme(currentIndex);
    });
}

/* ==========================================================================
   2. HERO PORTRAIT TRIGGER & INTERACTIVE DOSSIER MODAL
   ========================================================================== */
function initPersonnelDossier() {
    const heroPortraitStage = document.getElementById("hero-portrait-stage");
    const openTrigger = document.getElementById("open-dossier-trigger");
    const dossierModal = document.getElementById("dossier-modal");
    const closeBtn = document.getElementById("dossier-modal-close");

    const photoStage = document.getElementById("dossier-photo-stage");
    const dotsContainer = document.getElementById("dossier-dots");
    const nextBtn = document.getElementById("dossier-next-btn");
    const infoList = document.getElementById("dossier-info-list");

    const { photos, details } = portfolioData.dossier;
    let activeSlide = 0;

    // 1. Render ONLY the primary portrait on the Hero page
    const mainPhoto = photos[0];
    if (heroPortraitStage && mainPhoto) {
        if (mainPhoto.src) {
            heroPortraitStage.innerHTML = `<img src="${escapeAttr(mainPhoto.src)}" alt="Reynalyn Cornelio">`;
        } else {
            heroPortraitStage.innerHTML = `
                <div class="dossier-slide-icon">
                    <i class="${escapeAttr(mainPhoto.icon)}"></i>
                </div>
                <div class="dossier-slide-title">Reynalyn Cornelio</div>
                <div class="dossier-slide-caption">Add your portrait in script.js</div>
            `;
        }
    }

    // 2. Render full personal info inside the modal without clipping
    if (infoList) {
        infoList.innerHTML = details
            .map((item) => {
                if (item.isMotto) {
                    return `
                        <div class="dossier-field dossier-motto-box">
                            <span class="dossier-motto-watermark" aria-hidden="true">”</span>
                            <span class="dossier-label"><i class="${escapeAttr(item.icon)}"></i> ${escapeHTML(item.label)}</span>
                            <div class="dossier-value">${escapeHTML(item.value)}</div>
                        </div>
                    `;
                }
                return `
                    <div class="dossier-field">
                        <span class="dossier-label"><i class="${escapeAttr(item.icon)}"></i> ${escapeHTML(item.label)}</span>
                        <div class="dossier-value">${escapeHTML(item.value)}</div>
                    </div>
                `;
            })
            .join("");
    }

    // 3. Render multi-photo carousel inside the modal
    function renderSlide(index) {
        const slide = photos[index];
        if (!photoStage || !slide) return;

        if (slide.src) {
            photoStage.innerHTML = `
                <span class="dossier-slide-badge">${escapeHTML(slide.label)}</span>
                <img src="${escapeAttr(slide.src)}" alt="${escapeAttr(slide.title)}">
            `;
        } else {
            photoStage.innerHTML = `
                <span class="dossier-slide-badge">${escapeHTML(slide.label)}</span>
                <div class="dossier-slide-icon">
                    <i class="${escapeAttr(slide.icon)}"></i>
                </div>
                <div class="dossier-slide-title">${escapeHTML(slide.title)}</div>
                <div class="dossier-slide-caption">${escapeHTML(slide.caption)}</div>
            `;
        }

        if (dotsContainer) {
            dotsContainer.innerHTML = photos
                .map(
                    (_, i) => `
                    <button type="button" class="dossier-dot ${i === index ? "active" : ""}" data-slide="${i}" aria-label="Show photo ${i + 1}"></button>
                `
                )
                .join("");

            dotsContainer.querySelectorAll(".dossier-dot").forEach((dot) => {
                dot.addEventListener("click", () => {
                    activeSlide = Number(dot.getAttribute("data-slide"));
                    renderSlide(activeSlide);
                });
            });
        }
    }

    function stepSlide(delta) {
        activeSlide = (activeSlide + delta + photos.length) % photos.length;
        renderSlide(activeSlide);
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => stepSlide(1));
    }

    // 4. Open / Close Dossier Modal with Focus Management & Keyboard Support
    function openDossierModal() {
        if (!dossierModal) return;
        renderSlide(activeSlide);
        dossierModal.hidden = false;
        if (closeBtn) {
            closeBtn.focus();
        }
    }

    function closeDossierModal() {
        if (!dossierModal) return;
        dossierModal.hidden = true;
        if (openTrigger) {
            openTrigger.focus();
        }
    }

    if (openTrigger) {
        openTrigger.addEventListener("click", openDossierModal);
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", closeDossierModal);
    }

    if (dossierModal) {
        dossierModal.addEventListener("click", (e) => {
            if (e.target === dossierModal) closeDossierModal();
        });
    }

    document.addEventListener("keydown", (e) => {
        if (!dossierModal || dossierModal.hidden) return;
        if (e.key === "Escape") {
            closeDossierModal();
        } else if (e.key === "ArrowRight") {
            stepSlide(1);
        } else if (e.key === "ArrowLeft") {
            stepSlide(-1);
        }
    });

    renderSlide(activeSlide);
}

/* ==========================================================================
   3. RENDER PORTFOLIO SECTIONS FROM CENTRALIZED DATA
   ========================================================================== */
function renderPortfolioSectionsFromData() {
    const eduContainer = document.getElementById("portfolio-education-list");
    if (eduContainer) {
        eduContainer.innerHTML = portfolioData.education
            .map((edu) => {
                const schoolsHTML = Array.isArray(edu.schools)
                    ? edu.schools
                          .map(
                              (s) => `
                              <div class="edu-sub-school">
                                  <p class="edu-school"><i class="fas fa-school"></i> ${escapeHTML(s.name)} <span class="edu-sub-year">(${escapeHTML(s.year)})</span></p>
                                  <p class="edu-location"><i class="fas fa-map-marker-alt"></i> ${escapeHTML(s.location)}</p>
                              </div>
                          `
                          )
                          .join("")
                    : `
                        <p class="edu-school"><i class="fas fa-school"></i> ${escapeHTML(edu.school)}</p>
                        <p class="edu-location"><i class="fas fa-map-marker-alt"></i> ${escapeHTML(edu.location)}</p>
                    `;

                return `
                    <div class="timeline-item reveal">
                        <div class="timeline-dot">
                            <i class="${escapeAttr(edu.icon)}"></i>
                        </div>
                        <div class="surface-card timeline-card">
                            <div class="timeline-top">
                                <span class="edu-level">${escapeHTML(edu.level)}</span>
                                <span class="edu-year"><i class="far fa-calendar-alt"></i> ${escapeHTML(edu.year)}</span>
                            </div>
                            <h3 class="edu-program">${escapeHTML(edu.program)}</h3>
                            ${schoolsHTML}
                        </div>
                    </div>
                `;
            })
            .join("");
    }

    const projContainer = document.getElementById("portfolio-projects-list");
    if (projContainer) {
        projContainer.innerHTML = portfolioData.projects
            .map(
                (proj, idx) => `
                <article class="surface-card project-card reveal">
                    <div class="project-image-box">
                        ${
                            proj.image
                                ? `<img src="${escapeAttr(proj.image)}" alt="${escapeAttr(proj.title)}" class="media-cover">`
                                : `<div class="img-placeholder">
                                       <i class="${escapeAttr(proj.icon)}"></i>
                                       <span>SCREENSHOT PLACEHOLDER</span>
                                   </div>`
                        }
                        <span class="project-number">PRJ ${escapeHTML(proj.number)}</span>
                    </div>
                    <div class="project-body">
                        <h3 class="project-title">${escapeHTML(proj.title)}</h3>
                        <p class="project-desc">${escapeHTML(proj.description)}</p>
                        <div class="project-tech">
                            ${proj.technologies.map((tech) => `<span class="tech-tag">${escapeHTML(tech)}</span>`).join("")}
                        </div>
                        <div class="project-footer">
                            <button type="button" class="btn-project" data-project-index="${idx}">
                                <span>View Case Study</span>
                                <i class="fas fa-arrow-up-right-from-square"></i>
                            </button>
                        </div>
                    </div>
                </article>
            `
            )
            .join("");
    }

    const techContainer = document.getElementById("portfolio-tech-skills-list");
    if (techContainer) {
        techContainer.innerHTML = portfolioData.technicalSkillCategories
            .map(
                (cat) => `
                <div class="skill-category-card">
                    <h4><i class="${escapeAttr(cat.icon)}"></i> ${escapeHTML(cat.category)}</h4>
                    <div class="skill-badges">
                        ${cat.skills
                            .map(
                                (skill) => `
                                <span class="skill-badge">
                                    <i class="${escapeAttr(skill.icon)}"></i> ${escapeHTML(skill.name)}
                                </span>
                            `
                            )
                            .join("")}
                    </div>
                </div>
            `
            )
            .join("");
    }

    const softContainer = document.getElementById("portfolio-soft-skills-list");
    if (softContainer) {
        softContainer.innerHTML = portfolioData.softSkills
            .map(
                (skill) => `
                <div class="soft-skill-card">
                    <i class="${escapeAttr(skill.icon)}"></i>
                    <div>
                        <h4>${escapeHTML(skill.name)}</h4>
                        <p>${escapeHTML(skill.description)}</p>
                    </div>
                </div>
            `
            )
            .join("");
    }

    const certContainer = document.getElementById("portfolio-certificates-list");
    if (certContainer) {
        certContainer.innerHTML = portfolioData.certificates
            .map(
                (cert, idx) => `
                <article class="surface-card cert-card reveal">
                    <div class="cert-image-box">
                        ${
                            cert.image
                                ? `<img src="${escapeAttr(cert.image)}" alt="${escapeAttr(cert.title)}" class="media-cover">`
                                : `<div class="img-placeholder">
                                       <i class="${escapeAttr(cert.icon)}"></i>
                                       <span>CERTIFICATE PLACEHOLDER</span>
                                   </div>`
                        }
                        <span class="issuer-badge">${escapeHTML(cert.issuer)}</span>
                    </div>
                    <div class="cert-body">
                        <h3 class="cert-title">${escapeHTML(cert.title)}</h3>
                        <p class="cert-issuer"><i class="fas fa-building"></i> ${escapeHTML(cert.issuer)}</p>
                        <p class="cert-date"><i class="far fa-calendar-check"></i> Date Earned: ${escapeHTML(cert.date)}</p>
                        <div class="cert-footer">
                            <button type="button" class="btn-cert" data-cert-index="${idx}">
                                <span>View Certificate</span>
                                <i class="fas fa-expand-alt"></i>
                            </button>
                        </div>
                    </div>
                </article>
            `
            )
            .join("");
    }

    const seminarContainer = document.getElementById("portfolio-seminars-list");
    if (seminarContainer) {
        seminarContainer.innerHTML = portfolioData.seminars
            .map(
                (sem, idx) => `
                <article class="surface-card seminar-card">
                    <div class="seminar-media seminar-media-trigger" data-seminar-index="${idx}" role="button" tabindex="0" aria-label="View ${escapeAttr(sem.title)} certificate">
                        ${
                            sem.image
                                ? `<img src="${escapeAttr(sem.image)}" alt="${escapeAttr(sem.title)}" class="media-cover">`
                                : `<div class="img-placeholder seminar-placeholder">
                                       <i class="fas fa-chalkboard-teacher"></i>
                                       <span>EVENT / CERT PLACEHOLDER</span>
                                   </div>`
                        }
                    </div>
                    <div class="seminar-content">
                        <div class="seminar-meta">
                            <span class="seminar-tag">SEMINAR</span>
                            <span class="seminar-date"><i class="far fa-calendar-alt"></i> ${escapeHTML(sem.date)}</span>
                        </div>
                        <h3 class="seminar-title">${escapeHTML(sem.title)}</h3>
                        <p class="seminar-organizer">
                            <strong>Organizer:</strong> ${escapeHTML(sem.organizer)}
                        </p>
                        <p class="seminar-desc">${escapeHTML(sem.description)}</p>
                        <div class="seminar-footer">
                            <button type="button" class="btn-seminar" data-seminar-index="${idx}">
                                <span>View Certificate</span>
                                <i class="fas fa-expand-alt"></i>
                            </button>
                        </div>
                    </div>
                </article>
            `
            )
            .join("");
    }

    const contactContainer = document.getElementById("portfolio-contact-details");
    if (contactContainer) {
        const { email, phone, address } = portfolioData.personal;
        contactContainer.innerHTML = `
            <div class="contact-item">
                <div class="contact-icon"><i class="fas fa-envelope"></i></div>
                <div>
                    <h4>Email Address</h4>
                    <p>${escapeHTML(email)}</p>
                </div>
            </div>
            <div class="contact-item">
                <div class="contact-icon"><i class="fas fa-phone-alt"></i></div>
                <div>
                    <h4>Contact Number</h4>
                    <p>${escapeHTML(phone)}</p>
                </div>
            </div>
            <div class="contact-item">
                <div class="contact-icon"><i class="fas fa-map-marker-alt"></i></div>
                <div>
                    <h4>Address</h4>
                    <p>${escapeHTML(address)}</p>
                </div>
            </div>
        `;
    }

    const socialContainer = document.getElementById("footer-social-links");
    if (socialContainer && Array.isArray(portfolioData.socials)) {
        socialContainer.innerHTML = portfolioData.socials
            .map((soc) => {
                const isExternal = soc.url.startsWith("http");
                const targetAttrs = isExternal ? ' target="_blank" rel="noopener noreferrer"' : "";
                return `<a href="${escapeAttr(soc.url)}" aria-label="${escapeAttr(soc.label)}" title="${escapeAttr(soc.label)}"${targetAttrs}><i class="${escapeAttr(soc.icon)}"></i></a>`;
            })
            .join("");
    }
}

/* ==========================================================================
   4. INTERACTIVE PROJECT CASE STUDY, CERTIFICATE & SEMINAR LIGHTBOX MODALS
   ========================================================================== */
function initShowcaseModals() {
    const modal = document.getElementById("showcase-modal");
    const closeBtn = document.getElementById("showcase-modal-close");
    const iconEl = document.getElementById("showcase-modal-icon");
    const kickerEl = document.getElementById("showcase-modal-kicker");
    const mediaStage = document.getElementById("showcase-media-stage");
    const titleEl = document.getElementById("showcase-modal-title");
    const metaEl = document.getElementById("showcase-modal-meta");
    const descEl = document.getElementById("showcase-modal-desc");
    const highlightsWrap = document.getElementById("showcase-highlights-wrap");
    const highlightsList = document.getElementById("showcase-highlights-list");
    const tagsList = document.getElementById("showcase-tags-list");
    const actionsEl = document.getElementById("showcase-actions");

    if (!modal) return;
    let lastTrigger = null;

    function closeShowcaseModal() {
        modal.hidden = true;
        if (lastTrigger) lastTrigger.focus();
    }

    function openProjectCaseStudy(index, triggerBtn) {
        const proj = portfolioData.projects[index];
        if (!proj) return;
        lastTrigger = triggerBtn;

        iconEl.className = "fas fa-folder-open";
        kickerEl.textContent = `PROJECT CASE STUDY • ${proj.number}`;
        titleEl.textContent = proj.title;
        metaEl.textContent = `Stack: ${proj.technologies.join(" • ")}`;
        descEl.textContent = proj.description;

        mediaStage.innerHTML = proj.image
            ? `<img src="${escapeAttr(proj.image)}" alt="${escapeAttr(proj.title)}" class="media-cover">`
            : `<div class="img-placeholder">
                   <i class="${escapeAttr(proj.icon)}"></i>
                   <span>Add screenshot path in portfolioData.projects[${index}].image</span>
               </div>`;

        if (proj.highlights && proj.highlights.length) {
            highlightsWrap.hidden = false;
            highlightsList.innerHTML = proj.highlights.map((h) => `<li>${escapeHTML(h)}</li>`).join("");
        } else {
            highlightsWrap.hidden = true;
        }

        tagsList.innerHTML = proj.technologies.map((t) => `<span class="tech-tag">${escapeHTML(t)}</span>`).join("");

        const actionButtons = [];
        if (proj.demoUrl) {
            const isAnchor = proj.demoUrl.startsWith("#");
            if (isAnchor) {
                actionButtons.push(`<a href="${escapeAttr(proj.demoUrl)}" class="btn btn-primary" id="showcase-anchor-btn"><i class="fas fa-envelope"></i> Request Live Demo</a>`);
            } else {
                actionButtons.push(`<a href="${escapeAttr(proj.demoUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary"><i class="fas fa-external-link-alt"></i> Live Demo</a>`);
            }
        }
        if (proj.repoUrl) {
            actionButtons.push(`<a href="${escapeAttr(proj.repoUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost"><i class="fab fa-github"></i> Source Code</a>`);
        }
        if (!actionButtons.length) {
            actionButtons.push(`<button type="button" class="btn btn-ghost" id="showcase-done-btn">Close Preview</button>`);
        }
        actionsEl.innerHTML = actionButtons.join("");

        const anchorBtn = document.getElementById("showcase-anchor-btn");
        if (anchorBtn) {
            anchorBtn.addEventListener("click", (e) => {
                e.preventDefault();
                closeShowcaseModal();
                document.querySelector(proj.demoUrl)?.scrollIntoView({ behavior: "smooth" });
            });
        }

        const doneBtn = document.getElementById("showcase-done-btn");
        if (doneBtn) doneBtn.addEventListener("click", closeShowcaseModal);

        modal.hidden = false;
        closeBtn.focus();
    }

    function openCertificateLightbox(index, triggerBtn) {
        const cert = portfolioData.certificates[index];
        if (!cert) return;
        lastTrigger = triggerBtn;

        iconEl.className = "fas fa-certificate";
        kickerEl.textContent = `VERIFIED CREDENTIAL • ${cert.issuer.toUpperCase()}`;
        titleEl.textContent = cert.title;
        metaEl.textContent = `Issued by ${cert.issuer} • Earned: ${cert.date}`;
        descEl.textContent = cert.description || "";

        mediaStage.innerHTML = cert.image
            ? `<img src="${escapeAttr(cert.image)}" alt="${escapeAttr(cert.title)}" class="media-cover">`
            : `<div class="img-placeholder">
                   <i class="${escapeAttr(cert.icon)}"></i>
                   <span>Add scanned certificate path in portfolioData.certificates[${index}].image</span>
               </div>`;

        highlightsWrap.hidden = true;
        tagsList.innerHTML = `<span class="tech-tag">${escapeHTML(cert.issuer)}</span>`;
        actionsEl.innerHTML = `<button type="button" class="btn btn-primary" id="showcase-done-btn">Close Certificate</button>`;

        const doneBtn = document.getElementById("showcase-done-btn");
        if (doneBtn) doneBtn.addEventListener("click", closeShowcaseModal);

        modal.hidden = false;
        closeBtn.focus();
    }

    function openSeminarLightbox(index, triggerEl) {
        const sem = portfolioData.seminars[index];
        if (!sem) return;
        lastTrigger = triggerEl;

        iconEl.className = "fas fa-chalkboard-teacher";
        kickerEl.textContent = "SEMINAR PARTICIPATION • VERIFIED";
        titleEl.textContent = sem.title;
        metaEl.textContent = `Organizer: ${sem.organizer} • Date: ${sem.date}`;
        descEl.textContent = sem.description || "";

        mediaStage.innerHTML = sem.image
            ? `<img src="${escapeAttr(sem.image)}" alt="${escapeAttr(sem.title)}" class="media-cover">`
            : `<div class="img-placeholder">
                   <i class="fas fa-chalkboard-teacher"></i>
                   <span>Add seminar certificate path in portfolioData.seminars[${index}].image</span>
               </div>`;

        highlightsWrap.hidden = true;
        tagsList.innerHTML = `<span class="tech-tag">SEMINAR</span><span class="tech-tag">${escapeHTML(sem.date)}</span>`;
        actionsEl.innerHTML = `<button type="button" class="btn btn-primary" id="showcase-done-btn">Close Certificate</button>`;

        const doneBtn = document.getElementById("showcase-done-btn");
        if (doneBtn) doneBtn.addEventListener("click", closeShowcaseModal);

        modal.hidden = false;
        closeBtn.focus();
    }

    document.querySelectorAll(".btn-project").forEach((btn) => {
        btn.addEventListener("click", () => {
            const index = Number(btn.getAttribute("data-project-index"));
            openProjectCaseStudy(index, btn);
        });
    });

    document.querySelectorAll(".btn-cert").forEach((btn) => {
        btn.addEventListener("click", () => {
            const index = Number(btn.getAttribute("data-cert-index"));
            openCertificateLightbox(index, btn);
        });
    });

    document.querySelectorAll(".btn-seminar, .seminar-media-trigger").forEach((el) => {
        el.addEventListener("click", () => {
            const index = Number(el.getAttribute("data-seminar-index"));
            openSeminarLightbox(index, el);
        });

        el.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                const index = Number(el.getAttribute("data-seminar-index"));
                openSeminarLightbox(index, el);
            }
        });
    });

    closeBtn.addEventListener("click", closeShowcaseModal);
    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeShowcaseModal();
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !modal.hidden) {
            closeShowcaseModal();
        }
    });
}

/* ==========================================================================
   5. DEDICATED A4 RESUME HTML GENERATOR (FOR VIEW & PRINT)
   ========================================================================== */
function buildResumeInnerMarkup() {
    const { personal, professionalSummary, education, technicalSkillCategories, softSkills, projects, certificates, seminars } = portfolioData;
    const allTechnicalSkills = technicalSkillCategories.flatMap((cat) => cat.skills.map((s) => s.name));

    return `
        <div class="cv-doc-header">
            <h1 class="cv-doc-name">${escapeHTML(personal.fullName)}</h1>
            <p class="cv-doc-subtitle">${escapeHTML(personal.academicTitle)}</p>
            <div class="cv-doc-contact-row">
                <span><strong>Email:</strong> ${escapeHTML(personal.email)}</span>
                <span><strong>Phone:</strong> ${escapeHTML(personal.phone)}</span>
                <span><strong>Address:</strong> ${escapeHTML(personal.address)}</span>
            </div>
        </div>

        <section class="cv-doc-section">
            <h2 class="cv-doc-section-title">Professional Summary</h2>
            <p class="cv-doc-summary">${escapeHTML(professionalSummary)}</p>
        </section>

        <section class="cv-doc-section">
            <h2 class="cv-doc-section-title">Educational Background</h2>
            ${education
                .map((edu) => {
                    const schoolsMarkup = Array.isArray(edu.schools)
                        ? edu.schools
                              .map(
                                  (s) => `
                                  <div class="cv-doc-entry-sub"><strong>${escapeHTML(s.name)}</strong> (${escapeHTML(s.year)}) | ${escapeHTML(s.location)}</div>
                              `
                              )
                              .join("")
                        : `<div class="cv-doc-entry-sub">${escapeHTML(edu.school)} | ${escapeHTML(edu.location)}</div>`;

                    return `
                        <div class="cv-doc-entry">
                            <div class="cv-doc-entry-header">
                                <span>${escapeHTML(edu.level)} — ${escapeHTML(edu.program)}</span>
                                <span class="cv-doc-entry-date">${escapeHTML(edu.year)}</span>
                            </div>
                            ${schoolsMarkup}
                        </div>
                    `;
                })
                .join("")}
        </section>

        <section class="cv-doc-section">
            <div class="cv-doc-skills-grid">
                <div>
                    <h2 class="cv-doc-section-title">Technical Skills</h2>
                    <ul class="cv-doc-list">
                        ${allTechnicalSkills.map((skill) => `<li>${escapeHTML(skill)}</li>`).join("")}
                    </ul>
                </div>
                <div>
                    <h2 class="cv-doc-section-title">Soft Skills</h2>
                    <ul class="cv-doc-list">
                        ${softSkills.map((skill) => `<li>${escapeHTML(skill.name)}</li>`).join("")}
                    </ul>
                </div>
            </div>
        </section>

        <section class="cv-doc-section">
            <h2 class="cv-doc-section-title">Projects</h2>
            ${projects
                .map(
                    (proj) => `
                    <div class="cv-doc-entry">
                        <div class="cv-doc-entry-header">
                            <span>${escapeHTML(proj.title)}</span>
                        </div>
                        <div class="cv-doc-entry-sub"><strong>Technologies:</strong> ${escapeHTML(proj.technologies.join(", "))}</div>
                        <div class="cv-doc-entry-desc">${escapeHTML(proj.description)}</div>
                    </div>
                `
                )
                .join("")}
        </section>

        <section class="cv-doc-section">
            <h2 class="cv-doc-section-title">Certificates</h2>
            <ul class="cv-doc-list">
                ${certificates
                    .map(
                        (cert) => `
                        <li>
                            <strong>${escapeHTML(cert.title)}</strong> – ${escapeHTML(cert.issuer)} (${escapeHTML(cert.date)})
                        </li>
                    `
                    )
                    .join("")}
            </ul>
        </section>

        <section class="cv-doc-section">
            <h2 class="cv-doc-section-title">Seminars</h2>
            ${seminars
                .map(
                    (sem) => `
                    <div class="cv-doc-entry">
                        <div class="cv-doc-entry-header">
                            <span>${escapeHTML(sem.title)}</span>
                            <span class="cv-doc-entry-date">${escapeHTML(sem.date)}</span>
                        </div>
                        <div class="cv-doc-entry-sub"><strong>Organizer:</strong> ${escapeHTML(sem.organizer)}</div>
                        <div class="cv-doc-entry-desc">${escapeHTML(sem.description)}</div>
                    </div>
                `
                )
                .join("")}
        </section>
    `;
}

function renderDedicatedPrintResume() {
    const container = document.getElementById("dedicated-print-resume");
    if (container) {
        container.innerHTML = buildResumeInnerMarkup();
    }
}

/* ==========================================================================
   6. RESUME BUTTONS: VIEW, DIRECT PDF DOWNLOAD (jsPDF), AND PRINT
   ========================================================================== */
function initResumeActions() {
    const viewBtn = document.getElementById("btn-view-resume");
    const downloadBtn = document.getElementById("btn-download-resume");
    const printBtn = document.getElementById("btn-print-resume");
    const statusNote = document.getElementById("resume-status-note");

    if (viewBtn) {
        viewBtn.addEventListener("click", () => {
            const resumeWindow = window.open("", "_blank");
            if (!resumeWindow) {
                if (statusNote) {
                    statusNote.innerHTML =
                        '<i class="fas fa-exclamation-triangle"></i> <span>Pop-up blocked by your browser. Please allow pop-ups for this page to view the resume in a new tab.</span>';
                }
                return;
            }

            resumeWindow.document.open();
            resumeWindow.document.write(generateStandaloneResumeHTML());
            resumeWindow.document.close();
        });
    }

    if (downloadBtn) {
        downloadBtn.addEventListener("click", () => {
            if (window.jspdf && window.jspdf.jsPDF) {
                downloadResumePDFDirect();
                if (statusNote) {
                    statusNote.innerHTML =
                        '<i class="fas fa-check-circle"></i> <span><strong>Reynalyn_Cornelio_Resume.pdf</strong> has been generated and downloaded to your device!</span>';
                }
            } else {
                if (statusNote) {
                    statusNote.innerHTML =
                        '<i class="fas fa-file-pdf"></i> <span>Select <strong>"Save as PDF"</strong> in the print dialog to save <strong>Reynalyn_Cornelio_Resume.pdf</strong>.</span>';
                }
                triggerResumePrint();
            }
        });
    }

    if (printBtn) {
        printBtn.addEventListener("click", () => {
            if (statusNote) {
                statusNote.innerHTML =
                    '<i class="fas fa-print"></i> <span>Opening clean print preview for your formatted A4 resume document...</span>';
            }
            triggerResumePrint();
        });
    }
}

function downloadResumePDFDirect() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
        orientation: "portrait",
        unit: "pt",
        format: "a4"
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 50.4;
    const maxWidth = pageWidth - margin * 2;
    let y = margin;

    const { personal, professionalSummary, education, technicalSkillCategories, softSkills, projects, certificates, seminars } = portfolioData;
    const allTechnicalSkills = technicalSkillCategories.flatMap((cat) => cat.skills.map((s) => s.name));

    function checkPageBreak(neededHeight) {
        if (y + neededHeight > pageHeight - margin) {
            doc.addPage();
            y = margin;
        }
    }

    function drawSectionHeading(title) {
        checkPageBreak(28);
        y += 6;
        doc.setFont("helvetica", "bold");
        doc.setFontSize(11.5);
        doc.setTextColor(91, 42, 134);
        doc.text(title.toUpperCase(), margin, y);
        y += 4;
        doc.setDrawColor(216, 194, 235);
        doc.setLineWidth(1);
        doc.line(margin, y, pageWidth - margin, y);
        y += 12;
    }

    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(91, 42, 134);
    doc.text(personal.fullName, margin, y + 6);
    y += 22;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(34, 34, 34);
    doc.text(personal.academicTitle, margin, y);
    y += 14;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(51, 51, 51);
    const contactLine = `Email: ${personal.email}   |   Phone: ${personal.phone}   |   Address: ${personal.address}`;
    const contactWrapped = doc.splitTextToSize(contactLine, maxWidth);
    doc.text(contactWrapped, margin, y);
    y += contactWrapped.length * 12 + 2;

    doc.setDrawColor(91, 42, 134);
    doc.setLineWidth(1.8);
    doc.line(margin, y, pageWidth - margin, y);
    y += 12;

    drawSectionHeading("Professional Summary");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(26, 26, 26);
    const summaryLines = doc.splitTextToSize(professionalSummary, maxWidth);
    checkPageBreak(summaryLines.length * 12.5);
    doc.text(summaryLines, margin, y);
    y += summaryLines.length * 12.5 + 4;

    drawSectionHeading("Educational Background");
    education.forEach((edu) => {
        const titleText = `${edu.level} — ${edu.program}`;
        const titleLines = doc.splitTextToSize(titleText, maxWidth - 110);
        const schoolItems = Array.isArray(edu.schools)
            ? edu.schools.map((s) => `${s.name} (${s.year}) | ${s.location}`)
            : [`${edu.school} | ${edu.location}`];

        checkPageBreak(titleLines.length * 12 + schoolItems.length * 13 + 6);

        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.setTextColor(26, 26, 26);
        doc.text(titleLines, margin, y);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(9.5);
        doc.setTextColor(68, 68, 68);
        doc.text(edu.year, pageWidth - margin, y, { align: "right" });

        y += titleLines.length * 12;
        doc.setTextColor(51, 51, 51);
        schoolItems.forEach((line) => {
            const wrappedSub = doc.splitTextToSize(line, maxWidth);
            doc.text(wrappedSub, margin, y);
            y += wrappedSub.length * 11.5;
        });
        y += 5;
    });

    drawSectionHeading("Technical Skills & Soft Skills");
    const colWidth = (maxWidth - 20) / 2;
    const maxRows = Math.max(allTechnicalSkills.length, softSkills.length);
    checkPageBreak(maxRows * 12.5 + 16);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(91, 42, 134);
    doc.text("Technical Skills", margin, y);
    doc.text("Soft Skills", margin + colWidth + 20, y);
    y += 13;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(26, 26, 26);

    for (let i = 0; i < maxRows; i++) {
        if (allTechnicalSkills[i]) {
            doc.text(`• ${allTechnicalSkills[i]}`, margin + 4, y);
        }
        if (softSkills[i]) {
            doc.text(`• ${softSkills[i].name}`, margin + colWidth + 24, y);
        }
        y += 12.2;
    }
    y += 4;

    drawSectionHeading("Projects");
    projects.forEach((proj) => {
        const titleLines = doc.splitTextToSize(proj.title, maxWidth);
        const techLine = `Technologies: ${proj.technologies.join(", ")}`;
        const descLines = doc.splitTextToSize(proj.description, maxWidth);
        checkPageBreak((titleLines.length + descLines.length + 2) * 12 + 8);

        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.setTextColor(26, 26, 26);
        doc.text(titleLines, margin, y);
        y += titleLines.length * 12;

        doc.setFont("helvetica", "bold");
        doc.setFontSize(9.2);
        doc.setTextColor(68, 68, 68);
        doc.text(techLine, margin, y);
        y += 11.5;

        doc.setFont("helvetica", "normal");
        doc.setFontSize(9.5);
        doc.setTextColor(34, 34, 34);
        doc.text(descLines, margin, y);
        y += descLines.length * 11.5 + 7;
    });

    drawSectionHeading("Certificates");
    certificates.forEach((cert) => {
        const line = `• ${cert.title} – ${cert.issuer} (${cert.date})`;
        const wrapped = doc.splitTextToSize(line, maxWidth);
        checkPageBreak(wrapped.length * 12.5);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9.8);
        doc.setTextColor(26, 26, 26);
        doc.text(wrapped, margin + 4, y);
        y += wrapped.length * 12.5 + 2;
    });
    y += 4;

    drawSectionHeading("Seminars");
    seminars.forEach((sem) => {
        const descLines = doc.splitTextToSize(sem.description, maxWidth);
        checkPageBreak(descLines.length * 12 + 28);

        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.setTextColor(26, 26, 26);
        doc.text(sem.title, margin, y);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(9.5);
        doc.setTextColor(68, 68, 68);
        doc.text(sem.date, pageWidth - margin, y, { align: "right" });
        y += 12;

        doc.text(`Organizer: ${sem.organizer}`, margin, y);
        y += 12;

        doc.setTextColor(34, 34, 34);
        doc.text(descLines, margin, y);
        y += descLines.length * 11.5 + 6;
    });

    doc.save("Reynalyn_Cornelio_Resume.pdf");
}

function triggerResumePrint() {
    renderDedicatedPrintResume();
    window.print();
}

function generateStandaloneResumeHTML() {
    const resumeBody = buildResumeInnerMarkup();

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reynalyn Cornelio – Resume</title>
    <style>
        @page {
            size: A4 portrait;
            margin: 0;
        }
        * { box-sizing: border-box; }
        body {
            margin: 0;
            padding: 0;
            background-color: #161421;
            font-family: Arial, Calibri, "Segoe UI", sans-serif;
            color: #1A1A1A;
            line-height: 1.15;
        }
        .preview-toolbar {
            position: sticky;
            top: 0;
            z-index: 100;
            background-color: #1F1B2E;
            border-bottom: 1px solid rgba(255,255,255,0.12);
            color: #FFFFFF;
            padding: 12px 24px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
        }
        .preview-toolbar-info { font-size: 13.5px; }
        .preview-toolbar-info strong { color: #F59E0B; }
        .toolbar-actions { display: flex; gap: 10px; }
        .toolbar-btn {
            border: none;
            border-radius: 6px;
            padding: 8px 16px;
            font-family: inherit;
            font-size: 13px;
            font-weight: 700;
            cursor: pointer;
        }
        .btn-save-pdf { background-color: #F59E0B; color: #141118; }
        .btn-close-tab { background-color: rgba(255,255,255,0.14); color: #FFFFFF; }
        .a4-sheet {
            width: 210mm;
            min-height: 297mm;
            margin: 24px auto;
            background: #FFFFFF;
            padding: 0.7in;
            box-shadow: 0 18px 45px rgba(0, 0, 0, 0.45);
        }
        .cv-doc-header {
            border-bottom: 2px solid #5B2A86;
            padding-bottom: 8pt;
            margin-bottom: 11pt;
        }
        .cv-doc-name {
            font-size: 22pt;
            font-weight: 700;
            color: #5B2A86;
            margin: 0 0 2pt 0;
        }
        .cv-doc-subtitle {
            font-size: 11pt;
            font-weight: 600;
            color: #222222;
            margin: 0 0 5pt 0;
        }
        .cv-doc-contact-row {
            font-size: 9.5pt;
            color: #333333;
            display: flex;
            flex-wrap: wrap;
            gap: 4pt 14pt;
        }
        .cv-doc-section { margin-bottom: 10pt; }
        .cv-doc-section-title {
            font-size: 11.5pt;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.4pt;
            color: #5B2A86;
            border-bottom: 1px solid #D8C2EB;
            padding-bottom: 2pt;
            margin: 0 0 5pt 0;
        }
        .cv-doc-summary { font-size: 10pt; line-height: 1.2; margin: 0; }
        .cv-doc-entry { margin-bottom: 6pt; }
        .cv-doc-entry-header {
            display: flex;
            justify-content: space-between;
            gap: 8pt;
            font-weight: 700;
            font-size: 10pt;
        }
        .cv-doc-entry-date { font-weight: 600; font-size: 9.5pt; color: #444444; white-space: nowrap; }
        .cv-doc-entry-sub { font-size: 9.5pt; color: #333333; margin-top: 1pt; }
        .cv-doc-entry-desc { font-size: 9.5pt; color: #222222; margin-top: 2pt; }
        .cv-doc-skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14pt; }
        .cv-doc-list { margin: 0; padding-left: 14pt; list-style-type: disc; }
        .cv-doc-list li { font-size: 9.8pt; line-height: 1.18; margin-bottom: 2pt; }
        @media print {
            body { background: #FFFFFF !important; }
            .preview-toolbar { display: none !important; }
            .a4-sheet {
                width: 100% !important;
                min-height: auto !important;
                margin: 0 !important;
                padding: 0.7in !important;
                box-shadow: none !important;
            }
        }
    </style>
</head>
<body>
    <div class="preview-toolbar">
        <div class="preview-toolbar-info">
            <strong>Resume Preview (A4 Portrait)</strong> — Click <strong>Print / Save as PDF</strong> to print or save a copy.
        </div>
        <div class="toolbar-actions">
            <button type="button" class="toolbar-btn btn-save-pdf" onclick="window.print()">Print / Save as PDF</button>
            <button type="button" class="toolbar-btn btn-close-tab" onclick="window.close()">Close Preview</button>
        </div>
    </div>
    <article class="a4-sheet">${resumeBody}</article>
</body>
</html>`;
}

/* ==========================================================================
   7. NAVIGATION, SCROLLSPY, REVEAL, FORM & BACK-TO-TOP
   ========================================================================== */
function initMobileNavigation() {
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    if (!navToggle || !navMenu) return;

    navToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
        navToggle.innerHTML = isOpen
            ? '<i class="fas fa-times"></i>'
            : '<i class="fas fa-bars"></i>';
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (navMenu.classList.contains("open")) {
                navMenu.classList.remove("open");
                navToggle.setAttribute("aria-expanded", "false");
                navToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });
}

function initScrollSpyAndNavbar() {
    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    function updateActiveSection() {
        const scrollY = window.scrollY;
        let currentSectionId = "home";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 130;
            const sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    updateActiveSection();
}

function initScrollReveal() {
    const revealElements = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
        revealElements.forEach((el) => el.classList.add("active"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    obs.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1, rootMargin: "0px 0px -35px 0px" }
    );

    revealElements.forEach((el) => observer.observe(el));
}

function initContactFormValidation() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    const nameInput = document.getElementById("sender-name");
    const emailInput = document.getElementById("sender-email");
    const subjectInput = document.getElementById("sender-subject");
    const messageInput = document.getElementById("sender-message");
    const submitBtn = document.getElementById("contact-submit-btn");

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const subjectError = document.getElementById("subject-error");
    const messageError = document.getElementById("message-error");
    const feedbackBanner = document.getElementById("form-feedback");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    function setFieldError(input, errorEl, message) {
        input.classList.add("invalid");
        errorEl.textContent = message;
    }

    function clearFieldError(input, errorEl) {
        input.classList.remove("invalid");
        errorEl.textContent = "";
    }

    function validateFields() {
        let isValid = true;

        if (nameInput.value.trim().length < 2) {
            setFieldError(nameInput, nameError, "Please enter your name (at least 2 characters).");
            isValid = false;
        } else {
            clearFieldError(nameInput, nameError);
        }

        const emailValue = emailInput.value.trim();
        if (!emailValue) {
            setFieldError(emailInput, emailError, "Please enter your email address.");
            isValid = false;
        } else if (!emailPattern.test(emailValue)) {
            setFieldError(emailInput, emailError, "Please enter a valid email format (e.g., name@example.com).");
            isValid = false;
        } else {
            clearFieldError(emailInput, emailError);
        }

        if (subjectInput.value.trim().length < 3) {
            setFieldError(subjectInput, subjectError, "Please enter a subject for your message.");
            isValid = false;
        } else {
            clearFieldError(subjectInput, subjectError);
        }

        if (messageInput.value.trim().length < 10) {
            setFieldError(messageInput, messageError, "Please write a message of at least 10 characters.");
            isValid = false;
        } else {
            clearFieldError(messageInput, messageError);
        }

        return isValid;
    }

    [
        [nameInput, nameError],
        [emailInput, emailError],
        [subjectInput, subjectError],
        [messageInput, messageError]
    ].forEach(([input, errorEl]) => {
        input.addEventListener("input", () => {
            if (input.classList.contains("invalid")) {
                clearFieldError(input, errorEl);
            }
        });
    });

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        feedbackBanner.className = "form-feedback";
        feedbackBanner.textContent = "";

        if (!validateFields()) {
            feedbackBanner.classList.add("error");
            feedbackBanner.innerHTML =
                '<i class="fas fa-exclamation-circle"></i> Please fix the highlighted fields above before submitting.';
            return;
        }

        const senderName = nameInput.value.trim();
        const endpoint = (portfolioData.contactFormEndpoint || "").trim();

        if (!endpoint) {
            feedbackBanner.classList.add("success");
            feedbackBanner.innerHTML =
                `<i class="fas fa-check-circle"></i> Thank you, <strong>${escapeHTML(senderName)}</strong>! Your message passed validation. Add your Formspree/Web3Forms URL to <code>contactFormEndpoint</code> in <code>script.js</code> to deliver emails live.`;
            form.reset();
            return;
        }

        const originalBtnHTML = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Sending...</span>';

        try {
            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    name: senderName,
                    email: emailInput.value.trim(),
                    subject: subjectInput.value.trim(),
                    message: messageInput.value.trim()
                })
            });

            if (response.ok) {
                feedbackBanner.classList.add("success");
                feedbackBanner.innerHTML =
                    `<i class="fas fa-check-circle"></i> Thank you, <strong>${escapeHTML(senderName)}</strong>! Your message has been sent successfully.`;
                form.reset();
            } else {
                throw new Error("Server rejected submission");
            }
        } catch (err) {
            feedbackBanner.classList.add("error");
            feedbackBanner.innerHTML =
                '<i class="fas fa-exclamation-triangle"></i> Unable to send message right now. Please try again or reach out directly via email.';
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnHTML;
        }
    });
}

function initBackToTopButton() {
    const backToTopBtn = document.getElementById("back-to-top");
    if (!backToTopBtn) return;

    window.addEventListener(
        "scroll",
        () => {
            backToTopBtn.classList.toggle("visible", window.scrollY > 400);
        },
        { passive: true }
    );

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

/* ==========================================================================
   8. HTML SANITIZATION HELPERS
   ========================================================================== */
function escapeHTML(str) {
    const div = document.createElement("div");
    div.textContent = String(str ?? "");
    return div.innerHTML;
}

function escapeAttr(str) {
    const map = {
        "&": "\x26amp;",
        '"': "\x26quot;",
        "'": "\x26#39;",
        "<": "\x26lt;",
        ">": "\x26gt;"
    };
    return String(str ?? "").replace(/[&"'<>]/g, (char) => map[char]);
}