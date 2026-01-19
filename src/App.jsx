import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, Users, FileText, Activity, 
  ArrowRight, CheckCircle, Clock, Heart, 
  Smartphone, MapPin, ShieldCheck,
  Building2, Stethoscope, User, Check
} from 'lucide-react';
import { Menu, X, Mail, MessageCircle } from 'lucide-react';
import heroImage from './assets/Netlify.webp';
import imgProb1 from '../public/problem/salasColapsadas.avif'; 
import imgProb2 from '../public/problem/papelesPerdidos.avif'; 
import imgProb3 from '../public/problem/tiempoPerdido.avif';
import imgSol1 from '../public/solution/pacientes.avif';   
import imgSol2 from '../public/solution/gestionPacientes.avif';  
import imgSol3 from '../public/solution/recetaDigital.avif';
import logoImg from '../public/logo2.1.png';
import imgMockup1 from '../public/img/UIusuario.avif';  // Vista Paciente (Celular)
import imgMockup2 from '../public/img/UIdoctor.avif'; // Vista Médico (PC)
import imgMockup3 from '../public/img/RecetaPDF.avif';

// --- DATOS DEL CONTENIDO (Fácil de editar) ---
const FEATURES = [
  {
    img: imgSol1,
    title: "Adiós a las filas",
    desc: "Tus pacientes eligen el horario desde su casa. Sin madrugadas, sin aglomeraciones en la entrada.",
    
  },
  {
    img: imgSol2,
    title: "Gestión en la Nube",
    desc: "Accede a la historia clínica y datos de tus pacientes desde cualquier dispositivo, 100% seguro.",
    
  },
  {
    img: imgSol3,
    title: "Recetas al WhatsApp",
    desc: "Envía la receta digital firmada electrónicamente directo al celular del paciente. Cero papel.",
    
  }
];

const STEPS = [
  { num: "01", title: "El Paciente Agenda", desc: "Selecciona médico, hora y motivo desde la web app sin descargar nada." },
  { num: "02", title: "El Médico Confirma", desc: "Visualiza su agenda diaria y gestiona el flujo de atención en tiempo real." },
  { num: "03", title: "Consulta y Receta", desc: "Atención fluida y envío de indicaciones médicas digitales." }
];

const BENEFITS = [
  { role: "Centros Médicos", text: "Reduce costos operativos y mejora la imagen de tu centro." },
  { role: "Médicos", text: "Optimiza tu tiempo. Menos trámites, más atención al paciente." },
  { role: "Pacientes", text: "Acceso digno a la salud. Sin madrugadas, sin esperas innecesarias." }
];

// --- COMPONENTES UI ---

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Definimos los enlaces de navegación
  const navLinks = [
    { id: 'hero', label: 'Inicio' },
    { id: 'problema', label: 'Problema' },
    { id: 'solucion', label: 'Solución' },
    { id: 'modelo', label: 'Planes' },
    { id: 'impacto', label: 'Impacto' },
    { id: 'contacto', label: 'Contacto' },
  ];

  // Lógica para detectar qué sección está visible (Scroll Spy)
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 150; // Offset para mejor precisión

      sections.forEach(section => {
        if (section && 
            section.offsetTop <= scrollPosition && 
            (section.offsetTop + section.offsetHeight) > scrollPosition) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Función para hacer scroll suave al hacer click (y cerrar menú móvil)
  const scrollToSection = (id) => {
    setIsOpen(false); // Cerrar menú móvil si está abierto
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar-glass">
      <div className="container nav-content" style={{ height: '70px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* LOGO */}
        <div className="logo" onClick={() => scrollToSection('hero')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src={logoImg} alt="MedEc Logo" style={{ height: '40px', width: 'auto' }} />
          <span style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary)' }}>Medlify</span>
        </div>

        {/* ENLACES DESKTOP */}
        <div className="desktop-links" style={{ display: 'flex', gap: '0.5rem' }}>
          {navLinks.map((link) => (
            <a 
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* BOTÓN CTA & MENU MÓVIL */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button className="btn btn-primary btn-header-desktop" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>
            Solicitar Demo
          </button>
          
          {/* Botón Hamburguesa (Solo Móvil) */}
          <button className="menu-toggle" onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MENÚ DESPLEGABLE MÓVIL */}
      <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a 
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
            style={{ fontSize: '1.2rem', textAlign: 'center', display: 'block' }}
          >
            {link.label}
          </a>
        ))}
        <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
          Solicitar Demo
        </button>
      </div>
    </nav>
  );
};

// --- SECCIONES ---

const Hero = () => (
  <section id="hero" style={{ paddingTop: '8rem', paddingBottom: '6rem', background: 'linear-gradient(180deg, #F0F9FF 0%, #F8FAFC 100%)' }}>
    <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
      <FadeIn>
        <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: '#DBEAFE', color: '#1E40AF', borderRadius: '20px', fontSize: '0.875rem', fontWeight: '600', marginBottom: '1.5rem' }}>
          Revolucionando la salud en Ecuador
        </div>
        <h1>Moderniza tu Centro Médico sin complicaciones</h1>
        <p style={{ margin: '1.5rem 0 2.5rem', fontSize: '1.25rem' }}>
          La plataforma todo-en-uno para agendar citas, gestionar pacientes y emitir recetas digitales. Diseñada para médicos y centros de barrio.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button className="btn btn-primary">Empezar Ahora <ArrowRight size={20} style={{ marginLeft: '8px'}} /></button>
          <button className="btn btn-secondary">Ver Demo</button>
        </div>
        <div style={{ marginTop: '2rem', display: 'flex', gap: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><CheckCircle size={16} /> Sin instalación</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><CheckCircle size={16} /> Soporte local</span>
        </div>
      </FadeIn>
      
      <FadeIn delay={0.2}>
        <div style={{ 
            background: 'white', 
            borderRadius: '24px', 
            padding: '10px', /* Un pequeño borde blanco elegante */
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' 
        }}>
          <img 
            src={heroImage} 
            alt="Plataforma de Centros Médicos" 
            style={{ 
              width: '100%', 
              height: 'auto', 
              borderRadius: '16px', 
              display: 'block' /* Elimina espacios extra debajo de la imagen */
            }} 
          />
        </div>
      </FadeIn>
    </div>
  </section>
);

const Problem = () => (
  <section id="problema" style={{ background: 'white' }}>
    <div className="container">
      <FadeIn>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
          <h2>La salud no debería ser un trámite difícil</h2>
          <p>Los centros médicos actuales pierden el 30% de su tiempo en tareas administrativas manuales.</p>
        </div>
      </FadeIn>

      <div className="grid-3">
        {[
          { 
            img: imgProb1, 
            title: "Salas colapsadas", 
            text: "Pacientes esperando horas por un turno simple, exponiéndose a contagios y molestias." 
          },
          { 
            img: imgProb2, 
            title: "Papeles perdidos", 
            text: "Historias clínicas físicas que se deterioran, se pierden y ocupan espacio valioso." 
          },
          { 
            img: imgProb3, 
            title: "Tiempo perdido", 
            text: "Médicos y secretarias agendando por WhatsApp manualmente en lugar de atender pacientes." 
          }
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="card" style={{ 
              padding: 0, /* Quitamos el padding global para que la imagen toque los bordes */
              overflow: 'hidden', /* Asegura que la imagen respete los bordes redondeados */
              height: '100%', /* Altura igualada */
              display: 'flex',
              flexDirection: 'column'
            }}>
              {/* Contenedor de la Imagen */}
              <div style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
                <img 
                  src={item.img} 
                  alt={item.title} 
                  loading="lazy"
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', /* Esto evita que la foto se deforme */
                    transition: 'transform 0.5s ease'
                  }}
                  /* Pequeño efecto zoom al pasar el mouse por la tarjeta */
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              
              {/* Contenedor del Texto */}
              <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ marginBottom: '1rem', color: '#DC2626' /* Rojo suave para indicar problema */ }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                  {item.text}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

const Solution = () => (
  <section id="solucion" style={{ background: '#F8FAFC' /* Fondo gris muy suave para diferenciar */ }}>
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>La tecnología que tu centro necesita</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto' }}>
          Reemplazamos los procesos manuales con herramientas digitales intuitivas diseñadas para Ecuador.
        </p>
      </div>
      
      <div className="grid-3">
        {FEATURES.map((feat, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="card" style={{ 
              padding: 0, 
              overflow: 'hidden', 
              border: 'none',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}>
              {/* Contenedor de Imagen */}
              <div style={{ height: '220px', width: '100%', position: 'relative' }}>
                <img 
                  src={feat.img} 
                  alt={feat.title} 
                  loading="lazy"
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover'
                  }} 
                />
                {/* Overlay sutil de color sobre la imagen (opcional, le da toque tech) */}
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0, bottom: 0,
                  background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.05) 100%)'
                }}></div>
              </div>

              {/* Contenido */}
              <div style={{ padding: '2rem', flex: 1, background: 'white' }}>
                <h3 style={{ 
                  marginBottom: '0.75rem', 
                  color: 'var(--primary)', /* Azul Institucional */
                  fontWeight: '700'
                }}>
                  {feat.title}
                </h3>
                <p style={{ fontSize: '1rem', color: '#64748B' }}>
                  {feat.desc}
                </p>
                
                {/* Enlace sutil de 'Leer más' o flecha */}
                <div style={{ marginTop: '1.5rem', fontWeight: '600', color: 'var(--secondary)', display: 'flex', alignItems: 'center', fontSize: '0.9rem' }}>
                  Conocer más <ArrowRight size={16} style={{ marginLeft: '5px' }} />
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section style={{ background: 'var(--primary)', color: 'white' }}>
    <div className="container">
      <h2 style={{ textAlign: 'center', color: 'white', marginBottom: '4rem' }}>¿Cómo funciona?</h2>
      <div className="grid-3">
        {STEPS.map((step, i) => (
          <FadeIn key={i} delay={i * 0.2}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '4rem', fontWeight: '800', opacity: 0.2, marginBottom: '-1rem' }}>{step.num}</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{step.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>{step.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

const CarouselMockup = () => {
  const [active, setActive] = useState(0);

  // Datos del Carrusel
  const slides = [
    {
      img: imgMockup1,
      title: "Vista del Paciente",
      desc: "Reserva citas en 3 pasos desde cualquier dispositivo, sin descargar apps pesadas."
    },
    {
      img: imgMockup2,
      title: "Panel del Médico",
      desc: "Gestiona tu agenda, bloquea horarios y revisa historiales en una interfaz limpia para PC o Tablet."
    },
    {
      img: imgMockup3,
      title: "Receta Electrónica",
      desc: "Genera documentos PDF firmados automáticamente y envíalos por WhatsApp con un clic."
    }
  ];

  // Cambio automático cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section style={{ background: '#F8FAFC', padding: '6rem 0', textAlign: 'center' }}>
      <div className="container">
        <FadeIn>
          <h2 style={{ marginBottom: '1rem', color: 'var(--text-main)' }}>Diseñado para ser intuitivo</h2>
          <p style={{ marginBottom: '3rem', color: 'var(--text-muted)' }}>
            Una interfaz que entienden desde pacientes jóvenes hasta médicos mayores.
          </p>
        </FadeIn>
        
        {/* Contenedor del "Dispositivo" o Marco */}
        <div style={{ 
          maxWidth: '900px', 
          margin: '0 auto', 
          height: '500px', /* Aumentamos altura para que quepan bien las imágenes */
          background: 'white', 
          borderRadius: '24px', 
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)', 
          position: 'relative', 
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}>
          
          {/* Área de Visualización (Imagen + Texto) */}
          <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
            {/* Renderizado condicional con Animación */}
            <motion.div
              key={active} // La clave reinicia la animación al cambiar
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{ 
                width: '100%', 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {/* Imagen del Mockup */}
              <div style={{ 
                flex: 1, 
                width: '100%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: '1.5rem',
                overflow: 'hidden'
              }}>
                <img 
                  src={slides[active].img} 
                  alt={slides[active].title} 
                  style={{ 
                    maxWidth: '100%', 
                    maxHeight: '300px', // Altura máxima de la imagen para no tapar texto
                    objectFit: 'contain', // Muestra la imagen completa sin recortar
                    filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))' // Sombra suave a la imagen
                  }} 
                />
              </div>

              {/* Textos descriptivos */}
              <div>
                <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.5rem' }}>
                  {slides[active].title}
                </h3>
                <p style={{ maxWidth: '500px', margin: '0 auto', color: '#64748B' }}>
                  {slides[active].desc}
                </p>
              </div>
            </motion.div>
          </div>
          
          {/* Controles de Puntos (Indicadores) */}
          <div style={{ 
            padding: '1.5rem', 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '12px',
            background: 'rgba(255,255,255,0.9)',
            borderTop: '1px solid #f1f5f9'
          }}>
            {slides.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setActive(i)} // Permitir click manual
                style={{ 
                  width: i === active ? '30px' : '10px', // El activo es más largo
                  height: '10px', 
                  borderRadius: '10px', 
                  border: 'none',
                  background: i === active ? 'var(--primary)' : '#cbd5e1',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }} 
                aria-label={`Ver slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const BusinessModel = () => {
  const tiers = [
    {
      title: "Centros Públicos",
      subtitle: "Impacto Social",
      icon: <Building2 size={32} />,
      price: "Acceso Gratuito",
      desc: "Democratizamos la salud digitalizando la atención primaria estatal.",
      features: ["Agenda de citas básica", "Registro de pacientes", "Gestión de turnos", "Soporte técnico estándar"],
      color: "#10B981", // Verde Esmeralda
      bgColor: "#ECFDF5",
      btnText: "Contactar Gobierno"
    },
    {
      title: "Centros Privados",
      subtitle: "Eficiencia & ROI",
      icon: <Stethoscope size={32} />,
      price: "Suscripción",
      desc: "Plataforma integral para optimizar recursos y rentabilidad.",
      features: ["Demo gratuita (30 días)", "Reportes avanzados de data", "Recetas digitales certificadas", "Marketing para el centro"],
      color: "#0056D2", // Azul Institucional (Primary)
      bgColor: "#EFF6FF",
      btnText: "Iniciar Prueba Demo"
    },
    {
      title: "Doctores Independientes",
      subtitle: "Crecimiento",
      icon: <User size={32} />,
      price: "Freemium",
      desc: "Comienza gratis y profesionaliza tu consultorio a tu ritmo.",
      features: ["Plan Gratuito (hasta 50 citas)", "Agenda personal", "Historial clínico básico", "Upgrade a Plan Pro"],
      color: "#6366F1", // Índigo Moderno
      bgColor: "#EEF2FF",
      btnText: "Crear Cuenta Gratis"
    }
  ];

  return (
    <section id="modelo" style={{ background: '#F8FAFC', padding: '6rem 0' }}>
      <div className="container">
        <FadeIn>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem' }}>
            <h2 style={{ color: 'var(--text-main)' }}>Acceso Justo y Modelo Sostenible</h2>
            <p>Una arquitectura híbrida diseñada para financiar la expansión tecnológica mientras garantizamos el acceso universal a la salud.</p>
          </div>
        </FadeIn>

        <div className="grid-3">
          {tiers.map((tier, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="card" style={{ 
                height: '100%', 
                padding: '2.5rem', 
                borderTop: `6px solid ${tier.color}`,
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}>
                
                {/* Encabezado con Icono */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ 
                    background: tier.bgColor, 
                    color: tier.color, 
                    padding: '12px', 
                    borderRadius: '12px' 
                  }}>
                    {tier.icon}
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{tier.title}</h3>
                    <span style={{ fontSize: '0.875rem', color: tier.color, fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      {tier.subtitle}
                    </span>
                  </div>
                </div>

                {/* Precio y Descripción */}
                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                    {tier.price}
                  </div>
                  <p style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>{tier.desc}</p>
                </div>

                {/* Lista de Features */}
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', flex: 1 }}>
                  {tier.features.map((feat, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'start', gap: '10px', marginBottom: '12px', fontSize: '0.9rem', color: '#475569' }}>
                      <Check size={18} color={tier.color} style={{ minWidth: '18px', marginTop: '3px' }} />
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* Botón */}
                <button className="btn" style={{ 
                  width: '100%', 
                  background: tier.bgColor, 
                  color: tier.color, 
                  border: `1px solid ${tier.color}20`,
                  fontWeight: '700'
                }}>
                  {tier.btnText}
                </button>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Copy Final de Cierre */}
        <FadeIn delay={0.4}>
          <div style={{ 
            marginTop: '5rem', 
            textAlign: 'center', 
            padding: '2rem', 
            background: 'white', 
            borderRadius: '16px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
          }}>
            <p style={{ 
              fontSize: '1.25rem', 
              fontWeight: '600', 
              color: 'var(--primary)', 
              marginBottom: 0,
              fontStyle: 'italic'
            }}>
              “El sector privado impulsa la sostenibilidad, mientras el sector público garantiza el impacto social.”
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

const SocialImpact = () => (
  <section id="impacto" style={{ background: 'white' }}>
    <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <Heart size={48} fill="#EF4444" color="#EF4444" style={{ marginBottom: '1rem' }} />
      <h2>Impacto Social en Ecuador</h2>
      <p style={{ maxWidth: '700px', margin: '1rem auto 3rem' }}>
        No solo vendemos software. Democratizamos el acceso a la salud, permitiendo que pequeños dispensarios compitan con tecnología de punta y que los pacientes reciban el trato digno que merecen.
      </p>
      <div className="grid-3" style={{ width: '100%', gap: '1rem' }}>
         <div style={{ background: '#F0FDF4', padding: '1.5rem', borderRadius: '12px', color: '#166534' }}>Digitalización Inclusiva</div>
         <div style={{ background: '#EFF6FF', padding: '1.5rem', borderRadius: '12px', color: '#1E40AF' }}>Reducción de Costos</div>
         <div style={{ background: '#FFF7ED', padding: '1.5rem', borderRadius: '12px', color: '#9A3412' }}>Acceso 24/7</div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contacto" style={{ background: '#0f172a', color: 'white', padding: '5rem 0 3rem' }}>
    <div className="container" style={{ textAlign: 'center' }}>
      
      {/* --- SECCIÓN CTA PRINCIPAL --- */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>¿Listo para transformar tu centro médico?</h2>
        <p style={{ color: '#94a3b8', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
          Únete a la red de salud digital más grande de Ecuador.
        </p>
        <button className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
          Solicitar Demo Gratuita
        </button>
      </div>

      {/* LÍNEA DIVISORIA */}
      <div style={{ borderTop: '1px solid #334155', width: '100%', maxWidth: '800px', margin: '0 auto 3rem' }}></div>

      {/* --- SECCIÓN DE CONTACTO --- */}
      <div style={{ marginBottom: '3rem' }}>
        <h4 style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', color: '#64748b', marginBottom: '1.5rem' }}>
          Contáctanos
        </h4>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '2rem', 
          flexWrap: 'wrap',
          alignItems: 'center' 
        }}>
          {/* Botón Email */}
          <a href="medlify@gmail.com" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px', 
            color: '#cbd5e1', 
            textDecoration: 'none',
            fontSize: '1rem',
            transition: 'color 0.2s'
          }} onMouseOver={(e) => e.currentTarget.style.color = 'white'} 
             onMouseOut={(e) => e.currentTarget.style.color = '#cbd5e1'}>
            <Mail size={20} />
            medlify@gmail.com
          </a>

          {/* Botón WhatsApp */}
          <a href="https://wa.me/593997273831" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px', 
            color: '#cbd5e1', 
            textDecoration: 'none',
            fontSize: '1rem',
            transition: 'color 0.2s'
          }} onMouseOver={(e) => e.currentTarget.style.color = '#4ade80'} /* Verde claro al pasar mouse */
            onMouseOut={(e) => e.currentTarget.style.color = '#cbd5e1'}>
            <MessageCircle size={20} />
            +593 99 727 3831
          </a>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div style={{ fontSize: '0.85rem', color: '#475569' }}>
        © 2026 Medlify Ecuador. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <CarouselMockup />
      <BusinessModel />
      <SocialImpact />
      <Footer />
    </>
  )
}

export default App