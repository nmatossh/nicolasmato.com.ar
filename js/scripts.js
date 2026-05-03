(function () {
    'use strict';

    var translations = {
        es: {
            'nav.about': 'Sobre mí',
            'nav.skills': 'Habilidades',
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
            'skills.title': 'Habilidades Técnicas',
            'education.title': 'Formación y Certificaciones',
            'services.title': 'Servicios',
            'services.infrastructure.title': 'Infraestructura',
            'services.infrastructure.desc': 'Servidores & soluciones cloud',
            'services.infrastructure.detail': 'Diseño y despliegue de entornos de alta disponibilidad (físicos, virtuales y cloud). Especialista en conectividad segura (VPN), migraciones críticas a Servicios Cloud y optimización de arquitecturas híbridas.',
            'services.security.title': 'Ciberseguridad',
            'services.security.desc': 'Auditoría & Recuperación',
            'services.security.detail': 'Auditorías de vulnerabilidades bajo estándares de cumplimiento. Implementación de políticas robustas de Backup y Disaster Recovery para garantizar la continuidad del negocio.',
            'services.development.title': 'Desarrollo',
            'services.development.desc': 'Automatización y DevOps',
            'services.development.detail': 'Optimización de procesos mediante scripts avanzados (Python/Bash) e integración de pipelines CI/CD. Desarrollo de microservicios, APIs y dashboards personalizados para la gestión de infraestructura.',
            'services.documentation.title': 'Documentación',
            'services.documentation.desc': 'Gestión de procedimientos',
            'services.documentation.detail': 'Estructuración de bases de conocimiento, guías operativas e instructivos técnicos alineados a normas ISO 9001 e ISO 27001. Recursos centralizados para maximizar la eficiencia operativa.',
            'services.hardware.title': 'Hardware & Software',
            'services.hardware.desc': 'Gestión de equipamiento',
            'services.hardware.detail': 'Diagnóstico avanzado, reparación y optimización de PC, estaciones de trabajo y servidores. Gestión de actualizaciones de software, mantenimiento preventivo y upgrades de rendimiento para extender la vida útil de los equipos.',
            'services.os.title': 'Sistemas Operativos',
            'services.os.desc': 'Gestión de plataformas',
            'services.os.detail': 'Despliegue, hardening y administración de entornos Windows y Linux. Gestión de usuarios, servicios y seguridad nativa para garantizar la estabilidad de sistemas críticos.',
            'contact.title': 'Contacto',
            'contact.text': '¿Proyecto, consultoría o colaboración?',
            'contact.emailLink': 'Enviame un correo',
            'contact.whatsappLink': 'Contactame por Whatsapp',
            'contact.location': 'Buenos Aires, Argentina',
            'contact.hours': 'Lun a Vie 9:00 - 18:00 hs',
            'contact.responseTime': 'Respuesta en menos de 24 hs hábiles',
            'contact.note1': 'Consultas sin compromiso.',
            'contact.note2': 'Presupuestos a medida según el alcance del proyecto.',
            'contact.meeting': 'Agendar Reunión'
        },
        en: {
            'nav.about': 'About me',
            'nav.skills': 'Skills',
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
            'skills.title': 'Technical Skills',
            'education.title': 'Education & Certifications',
            'services.title': 'Services',
            'services.infrastructure.title': 'Infrastructure',
            'services.infrastructure.desc': 'Servers & cloud solutions',
            'services.infrastructure.detail': 'Design and deployment of high-availability environments (physical, virtual, and cloud). Specialist in secure connectivity (VPN), critical migrations to Cloud Services, and hybrid architecture optimization.',
            'services.security.title': 'Cybersecurity',
            'services.security.desc': 'Audit & Recovery',
            'services.security.detail': 'Vulnerability auditing under compliance standards. Implementation of robust Backup and Disaster Recovery policies to ensure business continuity.',
            'services.development.title': 'Development',
            'services.development.desc': 'Automation & DevOps',
            'services.development.detail': 'Process optimization through advanced scripting (Python/Bash) and CI/CD pipeline integration. Development of microservices, APIs, and custom dashboards for infrastructure management.',
            'services.documentation.title': 'Documentation',
            'services.documentation.desc': 'Procedure management',
            'services.documentation.detail': 'Structuring of knowledge bases, operating guides, and technical instructions aligned with ISO 9001 and ISO 27001 standards. Centralized resources to maximize operational efficiency.',
            'services.hardware.title': 'Hardware & Software',
            'services.hardware.desc': 'Equipment management',
            'services.hardware.detail': 'Advanced diagnosis, repair, and optimization of PC, workstations and servers. Software update management, preventive maintenance, and performance upgrades to extend asset lifespan.',
            'services.os.title': 'Operating Systems',
            'services.os.desc': 'Platform management',
            'services.os.detail': 'Deployment, hardening, and administration of Windows and Linux environments. User management, services, and native security to ensure critical system stability.',
            'contact.title': 'Contact',
            'contact.text': 'Project, consulting or collaboration?',
            'contact.emailLink': 'Send me an email',
            'contact.whatsappLink': 'Contact me on WhatsApp',
            'contact.location': 'Buenos Aires, Argentina',
            'contact.hours': 'Mon to Fri 9:00 AM - 6:00 PM',
            'contact.responseTime': 'Response in less than 24 business hours',
            'contact.note1': 'No-obligation consultations.',
            'contact.note2': 'Tailored quotes based on the scope of the project.',
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

    var lang = storageGet('lang', 'es');

    /**
     * Email no va en el HTML estático: crawlers tontos no lo ven en el snapshot inicial.
     * Sustituí CONTACT_EMAIL_B64 por el resultado de btoa('usuario@dominio.com') en consola.
     * No es protección contra bots avanzados; para eso: formulario + Turnstile y backend o servicio tipo Formspree.
     */
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
        document.title = l === 'es' ? 'Nicolas Mato - IT Infrastructure Consulting | SR Unix/Linux Engineer' : 'Nicolas Mato - IT Infrastructure Consulting | SR Unix/Linux Engineer';

        var t = translations[l];
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            if (t[key]) el.textContent = t[key];
        });

        var btn = document.getElementById('lang-switch');
        if (btn) btn.textContent = l === 'es' ? 'ENG' : 'SPA';

        updateLanguageBlocks();
        updateNavToggleAriaLabel();

        var startDate = new Date(2000, 11, 12);
        var today = new Date();
        var years = today.getFullYear() - startDate.getFullYear();
        if (today.getMonth() < startDate.getMonth() || (today.getMonth() === startDate.getMonth() && today.getDate() < startDate.getDate())) years--;
        var yearsSpan = document.getElementById('years-exp');
        if (yearsSpan) yearsSpan.textContent = years;
    }

    var langBtn = document.getElementById('lang-switch');
    if (langBtn) {
        langBtn.addEventListener('click', function () {
            applyLanguage(lang === 'es' ? 'en' : 'es');
        });
    }

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
