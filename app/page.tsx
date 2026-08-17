"use client";

import { useState } from "react";

const copy = {
  pt: {
    nav: ["Experiências", "Como funciona", "Sobre"],
    heroEyebrow: "PASSEIOS PRIVATIVOS NO CHILE",
    heroTitleA: "Chile no",
    heroTitleB: "seu ritmo.",
    heroText:
      "Mais do que transporte: planejamento, acompanhamento e cuidado em cada etapa para você viver o Chile com tranquilidade.",
    primaryCta: "Planejar no WhatsApp",
    secondaryCta: "Conhecer experiências",
    trust: ["Atendimento em português", "Roteiros flexíveis", "Experiência privativa"],
    experiencesEyebrow: "ESCOLHA, COMBINE, PERSONALIZE",
    experiencesTitle: "Um Chile, muitas possibilidades.",
    experiencesText:
      "Cada passeio é montado de acordo com seu grupo, seu tempo e o tipo de experiência que você quer viver.",
    cards: [
      {
        number: "01",
        tag: "CORDILHEIRA",
        title: "Neve & montanha",
        text: "Conheça, toque e brinque na neve, com orientação sobre roupas, equipamentos e condições do caminho.",
        places: "Farellones · El Colorado · Valle Nevado",
        tone: "ice",
      },
      {
        number: "02",
        tag: "SANTIAGO",
        title: "Ícones da cidade",
        text: "Uma leitura viva de Santiago, entre mirantes, bairros históricos, arquitetura e gastronomia.",
        places: "San Cristóbal · Lastarria · París–Londres · Concha y Toro",
        tone: "city",
      },
      {
        number: "03",
        tag: "CULTURA & PAISAGEM",
        title: "Bahá’í & Los Dominicos",
        text: "Silêncio, arquitetura e uma vista especial no Templo Bahá’í; depois, arte e tradição chilena no pueblito artesanal.",
        places: "Templo Bahá’í · Feria artesanal Los Dominicos",
        tone: "sunset",
      },
      {
        number: "04",
        tag: "VINHOS CHILENOS",
        title: "Vinícolas para escolher",
        text: "Do clássico ao boutique, selecionamos a vinícola que melhor combina com seu roteiro, horários e estilo.",
        places: "Concha y Toro · Santa Carolina · Undurraga · Cousiño Macul",
        tone: "wine",
      },
      {
        number: "05",
        tag: "PACÍFICO",
        title: "Costa & cidades coloridas",
        text: "Arte, mar e sabores do litoral em um dia que pode unir patrimônio, praia e um bom almoço.",
        places: "Valparaíso · Viña del Mar · Reñaca · Algarrobo",
        tone: "coast",
      },
      {
        number: "06",
        tag: "NATUREZA",
        title: "Cajón del Maipo",
        text: "Montanhas, pequenos povoados e paisagens que mudam a cada estação, com paradas ajustadas às condições do dia.",
        places: "San José de Maipo · San Gabriel · Embalse El Yeso",
        tone: "valley",
      },
    ],
    processEyebrow: "SEU DIA, DO SEU JEITO",
    processTitle: "Você escolhe a intenção. Nós conectamos os melhores momentos.",
    process: [
      ["01", "Conte sua ideia", "Datas, grupo, interesses e ritmo da viagem."],
      ["02", "Receba seu roteiro", "Paradas, tempos e alternativas pensadas para você."],
      ["03", "Viva a experiência", "Acompanhamento próximo do início ao fim do passeio."],
    ],
    flexibleTitle: "Roteiros que se adaptam à viagem real.",
    flexibleText:
      "Clima, trânsito, horários de entrada e energia do grupo podem mudar o dia. Por isso, cada proposta inclui alternativas para manter a experiência leve e bem aproveitada.",
    featureList: [
      "Orientação sobre roupas e equipamentos",
      "Sugestões de almoço e jantar",
      "Opções para famílias e crianças",
      "Planos alternativos para chuva ou mudanças climáticas",
    ],
    aboutEyebrow: "NEXT LEVEL TRAVEL",
    aboutTitle: "Teu parceiro de viagem.",
    aboutText:
      "Atendimento próximo em português e espanhol, com conhecimento local para transformar deslocamentos em boas histórias. Aqui você não recebe apenas uma rota: recebe apoio para aproveitar melhor cada lugar.",
    contactEyebrow: "VAMOS MONTAR SEU PASSEIO?",
    contactTitle: "Seu próximo Chile começa com uma conversa.",
    contactText:
      "Fale diretamente com Cristian e receba uma proposta personalizada para sua viagem.",
    contactCta: "Conversar com Cristian",
    note: "Ingressos, refeições e tickets são informados separadamente, salvo quando incluídos expressamente na proposta.",
    footer: "Passeios privativos e experiências personalizadas no Chile.",
  },
  es: {
    nav: ["Experiencias", "Cómo funciona", "Nosotros"],
    heroEyebrow: "PASEOS PRIVADOS EN CHILE",
    heroTitleA: "Chile a",
    heroTitleB: "tu ritmo.",
    heroText:
      "Más que transporte: planificación, acompañamiento y atención en cada etapa para que vivas Chile con tranquilidad.",
    primaryCta: "Planificar por WhatsApp",
    secondaryCta: "Conocer experiencias",
    trust: ["Atención en español y portugués", "Itinerarios flexibles", "Experiencia privada"],
    experiencesEyebrow: "ELIGE, COMBINA, PERSONALIZA",
    experiencesTitle: "Un Chile, muchas posibilidades.",
    experiencesText:
      "Cada paseo se organiza según tu grupo, tu tiempo y la experiencia que quieras vivir.",
    cards: [
      {
        number: "01",
        tag: "CORDILLERA",
        title: "Nieve y montaña",
        text: "Conoce, toca y juega en la nieve, con orientación sobre ropa, equipamiento y condiciones del camino.",
        places: "Farellones · El Colorado · Valle Nevado",
        tone: "ice",
      },
      {
        number: "02",
        tag: "SANTIAGO",
        title: "Íconos de la ciudad",
        text: "Una mirada viva a Santiago entre miradores, barrios históricos, arquitectura y gastronomía.",
        places: "San Cristóbal · Lastarria · París–Londres · Concha y Toro",
        tone: "city",
      },
      {
        number: "03",
        tag: "CULTURA Y PAISAJE",
        title: "Bahá’í y Los Dominicos",
        text: "Silencio, arquitectura y una vista especial en el Templo Bahá’í; luego, arte y tradición en el pueblito artesanal.",
        places: "Templo Bahá’í · Feria artesanal Los Dominicos",
        tone: "sunset",
      },
      {
        number: "04",
        tag: "VINOS CHILENOS",
        title: "Viñas para elegir",
        text: "Desde lo clásico a lo boutique, elegimos la viña que mejor combine con tu itinerario, horarios y estilo.",
        places: "Concha y Toro · Santa Carolina · Undurraga · Cousiño Macul",
        tone: "wine",
      },
      {
        number: "05",
        tag: "PACÍFICO",
        title: "Costa y ciudades coloridas",
        text: "Arte, mar y sabores del litoral en un día que puede unir patrimonio, playa y un buen almuerzo.",
        places: "Valparaíso · Viña del Mar · Reñaca · Algarrobo",
        tone: "coast",
      },
      {
        number: "06",
        tag: "NATURALEZA",
        title: "Cajón del Maipo",
        text: "Montañas, pequeños pueblos y paisajes que cambian en cada estación, con paradas ajustadas a las condiciones del día.",
        places: "San José de Maipo · San Gabriel · Embalse El Yeso",
        tone: "valley",
      },
    ],
    processEyebrow: "TU DÍA, A TU MANERA",
    processTitle: "Tú eliges la intención. Nosotros conectamos los mejores momentos.",
    process: [
      ["01", "Cuéntanos tu idea", "Fechas, grupo, intereses y ritmo del viaje."],
      ["02", "Recibe tu itinerario", "Paradas, tiempos y alternativas pensadas para ti."],
      ["03", "Vive la experiencia", "Acompañamiento cercano de principio a fin."],
    ],
    flexibleTitle: "Itinerarios que se adaptan al viaje real.",
    flexibleText:
      "El clima, el tránsito, los horarios de ingreso y la energía del grupo pueden cambiar el día. Por eso, cada propuesta incluye alternativas para aprovechar bien la experiencia.",
    featureList: [
      "Orientación sobre ropa y equipamiento",
      "Sugerencias de almuerzo y cena",
      "Opciones para familias y niños",
      "Alternativas para lluvia o cambios climáticos",
    ],
    aboutEyebrow: "NEXT LEVEL TRAVEL",
    aboutTitle: "Tu compañero de viaje.",
    aboutText:
      "Atención cercana en español y portugués, con conocimiento local para convertir traslados en buenas historias. Aquí no recibes solamente una ruta: recibes apoyo para disfrutar mejor cada lugar.",
    contactEyebrow: "¿ARMAMOS TU PASEO?",
    contactTitle: "Tu próximo Chile comienza con una conversación.",
    contactText:
      "Habla directamente con Cristian y recibe una propuesta personalizada para tu viaje.",
    contactCta: "Conversar con Cristian",
    note: "Entradas, comidas y tickets se informan por separado, salvo cuando estén incluidos expresamente en la propuesta.",
    footer: "Paseos privados y experiencias personalizadas en Chile.",
  },
} as const;

export default function Home() {
  const [lang, setLang] = useState<"pt" | "es">("pt");
  const t = copy[lang];
  const whatsappText =
    lang === "pt"
      ? "Olá, Cristian! Quero montar meu passeio no Chile com a NEXT LEVEL Travel."
      : "¡Hola, Cristian! Quiero organizar mi paseo en Chile con NEXT LEVEL Travel.";
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP ?? "";\n  const whatsappUrl = whatsappNumber\n    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`\n    : "#contato";

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="NEXT LEVEL Travel — início">
          <span className="brand-copy">
            <strong>NEXT LEVEL</strong>
            <small>TRAVEL</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#experiencias">{t.nav[0]}</a>
          <a href="#como-funciona">{t.nav[1]}</a>
          <a href="#sobre">{t.nav[2]}</a>
        </nav>
        <div className="header-actions">
          <div className="language-switch" aria-label="Idioma">
            <button className={lang === "pt" ? "active" : ""} onClick={() => setLang("pt")} aria-pressed={lang === "pt"}>PT</button>
            <span>/</span>
            <button className={lang === "es" ? "active" : ""} onClick={() => setLang("es")} aria-pressed={lang === "es"}>ES</button>
          </div>
          <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp <span>↗</span></a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow light">{t.heroEyebrow}</p>
            <h1>{t.heroTitleA}<br /><em>{t.heroTitleB}</em></h1>
            <p className="hero-description">{t.heroText}</p>
            <div className="hero-actions">
              <a className="button primary" href={whatsappUrl} target="_blank" rel="noreferrer">{t.primaryCta}<span>↗</span></a>
              <a className="text-link" href="#experiencias">{t.secondaryCta}<span>↓</span></a>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="sun-disc" />
            <div className="mountain mountain-back" />
            <div className="mountain mountain-mid" />
            <div className="mountain mountain-front" />
            <div className="hero-stamp">
              <span>SANTIAGO</span>
              <strong>33°S</strong>
              <span>CHILE</span>
            </div>
          </div>
        </div>
        <div className="trust-bar">
          {t.trust.map((item, index) => (
            <div key={item}><span>0{index + 1}</span>{item}</div>
          ))}
        </div>
      </section>

      <section className="experiences section" id="experiencias">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{t.experiencesEyebrow}</p>
            <h2>{t.experiencesTitle}</h2>
          </div>
          <p>{t.experiencesText}</p>
        </div>
        <div className="experience-grid">
          {t.cards.map((card) => (
            <article className={`experience-card ${card.tone}`} key={card.number}>
              <div className="card-top"><span>{card.tag}</span><strong>{card.number}</strong></div>
              <div className="card-landscape" aria-hidden="true"><i /><b /><em /></div>
              <div className="card-body">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <small>{card.places}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="process section" id="como-funciona">
        <div className="process-intro">
          <p className="eyebrow light">{t.processEyebrow}</p>
          <h2>{t.processTitle}</h2>
        </div>
        <div className="process-list">
          {t.process.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="flexible section">
        <div className="flexible-art" aria-hidden="true">
          <div className="route-line route-one" />
          <div className="route-line route-two" />
          <span className="route-point point-one" />
          <span className="route-point point-two" />
          <span className="route-point point-three" />
          <strong>CL</strong>
        </div>
        <div className="flexible-copy">
          <p className="eyebrow">FLEXIBILIDADE</p>
          <h2>{t.flexibleTitle}</h2>
          <p>{t.flexibleText}</p>
          <ul>
            {t.featureList.map((item) => <li key={item}><span>✓</span>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="about section" id="sobre">
        <div className="about-number">NL</div>
        <div className="about-copy">
          <p className="eyebrow">{t.aboutEyebrow}</p>
          <h2>{t.aboutTitle}</h2>
          <p>{t.aboutText}</p>
        </div>
        <div className="about-quote">
          <span>“</span>
          <p>Não é somente chegar.<br />É aproveitar o caminho.</p>
        </div>
      </section>

      <section className="contact section" id="contato">
        <div className="contact-copy">
          <p className="eyebrow light">{t.contactEyebrow}</p>
          <h2>{t.contactTitle}</h2>
          <p>{t.contactText}</p>
        </div>
        <a className="contact-button" href={whatsappUrl} target="_blank" rel="noreferrer">
          <span>{t.contactCta}</span><strong>↗</strong>
        </a>
        <p className="contact-note">{t.note}</p>
      </section>

      <footer>
        <div className="footer-brand"><strong>NEXT LEVEL</strong><span>TRAVEL</span></div>
        <p>{t.footer}</p>
        <p>© 2026 · Santiago, Chile</p>
      </footer>

      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Conversar por WhatsApp">
        <span>WA</span>
      </a>
    </main>
  );
}
