(function () {
    'use strict';

    var translations = {
        es: {
            'nav.about': 'Sobre mí',
            'nav.skills': 'Formación',
            'nav.services': 'Servicios',
            'nav.contact': 'Contacto',
            'nav.menu.open': 'Abrir menú',
            'nav.menu.close': 'Cerrar menú',
            'hero.tagline': 'Consultoría de Infraestructura IT | Ingeniero SR Unix/Linux',
            'hero.desc.line2': 'Soluciones a medida para el hogar, Empresas y PyMEs.',
            'hero.desc.line3.prefix': 'Más de ',
            'hero.desc.line3.suffix': ' años de experiencia en la industria IT.',
            'hero.cta.meeting': 'Agendar reunión',
            'hero.cta.cv': 'Descargar CV',
            'skills.title': 'Perfil Técnico',
            'education.title': 'Formación y Certificaciones',
            'services.title': 'Servicios',
            'services.infrastructure.title': 'Infraestructura',
            'services.infrastructure.detail': 'Servidores & Cloud.<br>Diseño y despliegue de entornos de alta disponibilidad (físicos, virtuales y cloud).<br>Especialista en conectividad segura (VPN), migraciones críticas a Servicios Cloud y optimización de arquitecturas híbridas.',
            'services.security.title': 'Ciberseguridad',
            'services.security.detail': 'Auditoría & Recuperación.<br>Auditorías de vulnerabilidades bajo estándares de cumplimiento.<br>Implementación de políticas robustas de Backup y Disaster Recovery para garantizar la continuidad del negocio.',
            'services.development.title': 'Desarrollo',
            'services.development.detail': 'Automatización y DevOps.<br>Optimización de procesos mediante scripts avanzados (Python/Bash) e integración de pipelines CI/CD.<br>Desarrollo de microservicios, APIs y dashboards personalizados para la gestión de infraestructura.',
            'services.documentation.title': 'Documentación',
            'services.documentation.detail': 'Gestión de procedimientos.<br>Estructuración de bases de conocimiento, guías operativas e instructivos técnicos alineados a normas ISO 9001 e ISO 27001.<br>Recursos centralizados para maximizar la eficiencia operativa.',
            'services.hardware.title': 'Hardware',
            'services.hardware.detail': 'Gestión de equipamiento.<br>Diagnóstico avanzado, reparación y optimización de PC, estaciones de trabajo y servidores.<br>Gestión de actualizaciones de software, mantenimiento preventivo y upgrades de rendimiento para extender la vida útil de los equipos.',
            'services.os.title': 'Sistemas',
            'services.os.detail': 'Gestión de plataformas.<br>Despliegue, hardening y administración de entornos Windows y Linux.<br>Gestión de usuarios, servicios y seguridad nativa para garantizar la estabilidad de sistemas críticos.',
            'contact.title': 'Contacto',
            'contact.emailLink': 'Enviame un correo',
            'contact.whatsappLink': 'Contactame por Whatsapp',
            'contact.location': 'Buenos Aires, Argentina',
            'contact.hours': 'Lun a Vie 9:00 - 18:00 hs',
            'contact.responseTime': 'Respuesta en menos de 24 hs hábiles',
            'contact.meeting': 'Agendar Reunión'
        },
        en: {
            'nav.about': 'About me',
            'nav.skills': 'Background',
            'nav.services': 'Services',
            'nav.contact': 'Contact',
            'nav.menu.open': 'Open menu',
            'nav.menu.close': 'Close menu',
            'hero.tagline': 'IT Infrastructure Consulting | SR Unix/Linux Engineer',
            'hero.desc.line2': 'Custom solutions for Home, Businesses and SMEs.',
            'hero.desc.line3.prefix': 'Over ',
            'hero.desc.line3.suffix': ' years of experience in the IT industry.',
            'hero.cta.meeting': 'Schedule meeting',
            'hero.cta.cv': 'Download CV',
            'skills.title': 'Technical Profile',
            'education.title': 'Education & Certifications',
            'services.title': 'Services',
            'services.infrastructure.title': 'Infrastructure',
            'services.infrastructure.detail': 'Servers & Cloud.<br>Design and deployment of high-availability environments (physical, virtual, and cloud).<br>Specialist in secure connectivity (VPN), critical migrations to Cloud Services, and hybrid architecture optimization.',
            'services.security.title': 'Cybersecurity',
            'services.security.detail': 'Audit & Recovery.<br>Vulnerability auditing under compliance standards.<br>Implementation of robust Backup and Disaster Recovery policies to ensure business continuity.',
            'services.development.title': 'Development',
            'services.development.detail': 'Automation & DevOps.<br>Process optimization through advanced scripting (Python/Bash) and CI/CD pipeline integration.<br>Development of microservices, APIs, and custom dashboards for infrastructure management.',
            'services.documentation.title': 'Documentation',
            'services.documentation.detail': 'Procedure management.<br>Structuring of knowledge bases, operating guides, and technical instructions aligned with ISO 9001 and ISO 27001 standards.<br>Centralized resources to maximize operational efficiency.',
            'services.hardware.title': 'Hardware',
            'services.hardware.detail': 'Equipment management.<br>Advanced diagnosis, repair, and optimization of PC, workstations and servers.<br>Software update management, preventive maintenance, and performance upgrades to extend asset lifespan.',
            'services.os.title': 'Systems',
            'services.os.detail': 'Platform management.<br>Deployment, hardening, and administration of Windows and Linux environments.<br>User management, services, and native security to ensure critical system stability.',
            'contact.title': 'Contact',
            'contact.emailLink': 'Send me an email',
            'contact.whatsappLink': 'Contact me on WhatsApp',
            'contact.location': 'Buenos Aires, Argentina',
            'contact.hours': 'Mon to Fri 9:00 AM - 6:00 PM',
            'contact.responseTime': 'Response in less than 24 business hours',
            'contact.meeting': 'Schedule Meeting'
        }
    };

    function storageGet(key, fallback) {
        try {
            return localStorage.getItem(key) || fallback;
        } catch (e) {
            return fallback;
        }
    }

    function storageSet(key, value) {
        try {
            localStorage.setItem(key, value);
        } catch (e) {}
    }

    var theme = storageGet('theme', 'dark');
    if (!localStorage.getItem('theme')) {
        try {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
                theme = 'light';
            }
        } catch (e) {}
    }

    function applyTheme(t) {
        theme = t;
        storageSet('theme', t);
        document.documentElement.setAttribute('data-theme', t);
        var themeBtn = document.getElementById('theme-switch');
        if (themeBtn) {
            var icon = themeBtn.querySelector('i');
            if (icon) {
                if (t === 'light') {
                    icon.className = 'fa-solid fa-moon';
                } else {
                    icon.className = 'fa-solid fa-sun';
                }
            }
            themeBtn.setAttribute('aria-label', t === 'light' ? 'Cambiar a tema oscuro' : 'Cambiar a tema claro');
        }
    }

    applyTheme(theme);

    var lang = storageGet('lang', 'es');


    var CONTACT_EMAIL_B64 = 'aGV4YWNvcmUuc29wb3J0ZUBnbWFpbC5jb20=';

    function initContactEmail() {
        var a = document.getElementById('contact-email');
        if (!a || !CONTACT_EMAIL_B64) return;
        try {
            var addr = atob(CONTACT_EMAIL_B64);
            if (!addr || addr.indexOf('@') < 1) return;
            a.setAttribute('href', 'mailto:' + addr);
        } catch (e) {}
    }

    function applyLanguage(l) {
        lang = l;
        storageSet('lang', l);
        document.documentElement.lang = l;

        var titleText = l === 'es'
            ? 'Nicolás Mato | Consultoría de Infraestructura IT y Ciberseguridad'
            : 'Nicolas Mato | IT Infrastructure Consulting & Cybersecurity';

        document.title = titleText;

        var favicon = document.querySelector('link[rel="icon"]');
        if (favicon) {
            favicon.setAttribute('title', titleText);
        }

        var t = translations[l];
        var htmlKeys = {
            'services.infrastructure.detail': true,
            'services.security.detail': true,
            'services.development.detail': true,
            'services.documentation.detail': true,
            'services.hardware.detail': true,
            'services.os.detail': true
        };
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            if (t[key]) {
                if (htmlKeys[key]) {
                    el.innerHTML = t[key];
                } else {
                    el.textContent = t[key];
                }
            }
        });

        var cvBtn = document.getElementById('cv-download');
        if (cvBtn) {
            cvBtn.setAttribute('href', l === 'es' ? 'cv_spa.pdf' : 'cv_eng.pdf');
        }

        var btn = document.getElementById('lang-switch');
        if (btn) {
            btn.textContent = l === 'es' ? 'ENG' : 'SPA';
            btn.setAttribute('aria-label', l === 'es' ? 'Cambiar idioma a inglés' : 'Switch language to Spanish');
        }

        updateLanguageBlocks();
        updateNavToggleAriaLabel();
    }

    var langBtn = document.getElementById('lang-switch');
    if (langBtn) {
        langBtn.addEventListener('click', function () {
            applyLanguage(lang === 'es' ? 'en' : 'es');
        });
    }

    var themeBtn = document.getElementById('theme-switch');
    if (themeBtn) {
        themeBtn.addEventListener('click', function () {
            applyTheme(theme === 'dark' ? 'light' : 'dark');
        });
    }

    var startDate = new Date(2000, 11, 12);
    var today = new Date();
    var years = today.getFullYear() - startDate.getFullYear();
    if (today.getMonth() < startDate.getMonth() || (today.getMonth() === startDate.getMonth() && today.getDate() < startDate.getDate())) years--;
    var yearsSpan = document.getElementById('years-exp');
    if (yearsSpan) yearsSpan.textContent = years;

    var nav = document.querySelector('.nav');
    var toggle = document.querySelector('.nav-toggle');
    var links = document.querySelectorAll('.nav-links a');

    function updateLanguageBlocks() {
        document.querySelectorAll('[data-lang-block]').forEach(function (el) {
            var blockLang = el.getAttribute('data-lang-block');
            el.classList.toggle('hidden', blockLang !== lang);
        });
    }

    function updateNavToggleAriaLabel() {
        if (!toggle || !nav) return;
        var t = translations[lang] || translations.es;
        var isOpen = nav.classList.contains('open');
        var labelKey = isOpen ? 'nav.menu.close' : 'nav.menu.open';
        toggle.setAttribute('aria-label', t[labelKey] || (isOpen ? 'Cerrar menú' : 'Abrir menú'));
    }

    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            nav.classList.toggle('open');
            toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
            updateNavToggleAriaLabel();
        });
    }

    links.forEach(function (a) {
        a.addEventListener('click', function () {
            if (nav && window.innerWidth < 640) {
                nav.classList.remove('open');
                if (toggle) toggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth >= 640 && nav) {
            nav.classList.remove('open');
            if (toggle) toggle.setAttribute('aria-expanded', 'false');
        }
    });

    applyLanguage(lang);
    initContactEmail();
})();
