import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const CHECKOUT_URL = 'https://pay.cakto.com.br/3c3uqg4_1353399';
const categories = [
  ['◇', 'Animações 3D'], ['▧', 'Backgrounds'], ['≋', 'Efeitos sonoros'], ['▱', 'Overlays'],
  ['◐', 'Shadows'], ['▢', 'Shapes & PNGs'], ['▷', 'Transições'], ['✳', 'Referências'],
  ['▤', 'Paper Journal'], ['↗', 'Linhas e Flechas Animadas'], ['Aa', 'Fontes'], ['▨', 'Texturas'],
];
const editors = [
  ['premiere.png', 'Adobe Premiere Pro'], ['aftereffects.png', 'Adobe After Effects'],
  ['davinci-resolve.png', 'DaVinci Resolve'], ['capcut.png', 'CapCut'], ['final-cut.png', 'Final Cut Pro'],
  [null, '+ Mais'],
];
function Button({ children }) { return <a className="button" href={CHECKOUT_URL}>{children}<span aria-hidden="true">↗</span></a>; }
function App() {
  return <main>
    <section className="hero wrap" id="top">
      <div className="hero-copy"><h1>Seus vídeos não precisam parecer com os de todo mundo.</h1><p className="intro">Mais de 7.000 assets para criar edições marcantes, economizar tempo e se destacar.</p><Button>QUERO ACESSAR O PACK</Button>
      </div>
      <img className="hero-art" src="/images/kronos.png" alt="Arte mitológica monocromática de Kronos com uma ampulheta" />
    </section>
    <section className="difference wrap" id="diferenciacao">
      <img src="/images/musa.png" alt="Retrato clássico em tratamento azul monocromático" />
      <div><h2>O diferente chama atenção.</h2><p>Em meio a tantos vídeos com a mesma aparência, destaque suas edições com elementos visuais que fogem do comum.</p>
        <div className="pills"><span>ϟ&nbsp; Mais impacto</span><span>◷&nbsp; Menos tempo</span><span>✣&nbsp; Mais criatividade</span></div>
      </div>
    </section>
    <section className="arsenal wrap" id="arsenal"><div className="arsenal-copy"><h2>Tudo que você precisa. Em um só lugar.</h2><p>Mais de 7.000 recursos criativos organizados para acelerar seu fluxo de edição.</p></div>
      <div className="categories">{categories.map(([icon, name]) => <div className="category" key={name}><b>{icon}</b><span>{name}</span></div>)}</div>
      <div className="weekly-update"><span className="update-icon" aria-hidden="true">↻</span><div><h3>Novos assets toda semana.</h3><p>O KRONOS continua crescendo com novos recursos para manter suas edições sempre atualizadas.</p></div></div>
      <div className="editor-compat"><h2>Compatível com todos os editores</h2><p>Use os assets do KRONOS no editor que você já conhece.</p><div className="editor-grid">{editors.map(([filename, name]) => <div className={`editor${filename ? '' : ' editor-more'}`} key={name}>{filename ? <img src={`/images/${filename}`} alt="" loading="lazy"/> : <span className="editor-more-mark" aria-hidden="true">+</span>}<span>{name}</span></div>)}</div></div>
    </section>
    <section className="offer wrap" id="oferta"><div className="offer-art" aria-hidden="true"></div><div className="offer-content"><h2>Eleve o nível das suas edições.</h2><p>Seu arsenal criativo completo por um único pagamento.</p>
      <div className="price-card"><div className="price"><span>R$</span><strong>37</strong></div><ul><li>7.000+ assets</li><li>Atualizações semanais</li><li>Pagamento único</li><li>Acesso digital</li></ul><Button>QUERO MEU ACESSO</Button></div></div>
    </section>
  </main>;
}

createRoot(document.getElementById('root')).render(<App />);
