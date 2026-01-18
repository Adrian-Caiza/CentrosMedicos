import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, Users, FileText, Activity, 
  ArrowRight, CheckCircle, Clock, Heart, 
  Smartphone, MapPin, ShieldCheck
} from 'lucide-react';
import heroImage from './assets/Netlify.webp';
import imgProb1 from './assets/problem/salasColapsadas.avif'; 
import imgProb2 from './assets/problem/papelesPerdidos.avif'; 
import imgProb3 from './assets/problem/tiempoPerdido.avif';
import imgSol1 from './assets/solution/pacientes.avif';   
import imgSol2 from './assets/solution/gestionPacientes.avif';  
import imgSol3 from './assets/solution/recetaDigital.avif';

// --- DATOS DEL CONTENIDO (Fácil de editar) ---
const FEATURES = [
  {
    img: imgSol1,
    title: "Adiós a las filas",
    desc: "Tus pacientes eligen el horario desde su casa. Sin madrugadas, sin aglomeraciones en la entrada."
  },
  {
    img: imgSol2,
    title: "Gestión en la Nube",
    desc: "Accede a la historia clínica y datos de tus pacientes desde cualquier dispositivo, 100% seguro."
  },
  {
    img: imgSol3,
    title: "Recetas al WhatsApp",
    desc: "Envía la receta digital firmada electrónicamente directo al celular del paciente. Cero papel."
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

const Navbar = () => (
  <nav>
    <div className="container nav-content">
      <div className="logo"><Activity /> Medlify</div>
      <button className="btn btn-primary" style={{padding: '0.5rem 1.5rem'}}>Demo</button>
    </div>
  </nav>
);

// --- SECCIONES ---

const Hero = () => (
  <section style={{ paddingTop: '8rem', paddingBottom: '6rem', background: 'linear-gradient(180deg, #F0F9FF 0%, #F8FAFC 100%)' }}>
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
  <section style={{ background: 'white' }}>
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
  // Simulación simple de carrusel automático
  const [active, setActive] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setActive(c => (c + 1) % 3), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{ background: '#F8FAFC', textAlign: 'center' }}>
      <div className="container">
        <h2 style={{ marginBottom: '3rem' }}>Diseñado para ser intuitivo</h2>
        <div style={{ 
          maxWidth: '800px', margin: '0 auto', height: '400px', 
          background: 'white', borderRadius: '20px', 
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 10px 40px rgba(0,0,0,0.1)', position: 'relative', overflow: 'hidden'
        }}>
          {/* Aquí irían las imágenes reales */}
          <div style={{ padding: '2rem' }}>
             {active === 0 && <div className="animate-fade"><Smartphone size={64} color="var(--primary)"/><h3>Vista del Paciente</h3><p>Reserva en 3 clics</p></div>}
             {active === 1 && <div className="animate-fade"><Calendar size={64} color="var(--secondary)"/><h3>Vista del Médico</h3><p>Agenda organizada</p></div>}
             {active === 2 && <div className="animate-fade"><FileText size={64} color="#EF4444"/><h3>Receta Digital</h3><p>PDF automático</p></div>}
          </div>
          
          <div style={{ position: 'absolute', bottom: '20px', display: 'flex', gap: '10px' }}>
            {[0,1,2].map(i => (
              <div key={i} style={{ width: '10px', height: '10px', borderRadius: '50%', background: i === active ? 'var(--primary)' : '#cbd5e1' }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialImpact = () => (
  <section style={{ background: 'white' }}>
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
  <footer style={{ background: '#0f172a', color: 'white', padding: '4rem 0' }}>
    <div className="container" style={{ textAlign: 'center' }}>
      <h2 style={{ color: 'white', marginBottom: '2rem' }}>¿Listo para transformar tu centro médico?</h2>
      <button className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.2rem' }}>
        Solicitar Demo Gratuita
      </button>
      <div style={{ marginTop: '4rem', borderTop: '1px solid #334155', paddingTop: '2rem', fontSize: '0.9rem', color: '#94a3b8' }}>
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
      <SocialImpact />
      <Footer />
    </>
  )
}

export default App