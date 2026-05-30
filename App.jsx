import { useState, useEffect, useRef } from "react";

/* ─── IMAGES ─── */
const IMG = {
  bmw: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900&q=85",
  bmw2: "https://images.unsplash.com/photo-1617654112368-307921291f42?w=900&q=85",
  mercedes: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=900&q=85",
  toyota: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=900&q=85",
  hyundai: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=900&q=85",
  kia: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=900&q=85",
  audi: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=900&q=85",
  genesis: "https://images.unsplash.com/photo-1617650728438-e4e23c05b6b5?w=900&q=85",
  porsche: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=85",
  palisade: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85",
  carnival: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=900&q=85",
  herocar: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1600&q=90",
  bridge: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600&q=80",
  port: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=85",
  city: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80",
};

const CARS = [
  { id:1, name:"BMW 5 Series", brand:"BMW", year:2023, trans:"Автомат", fuel:"Бензин", price:62000, type:"Под выкуп", img:IMG.bmw, badge:"Под выкуп", km:"29 500" },
  { id:2, name:"Mercedes-Benz E-Class", brand:"Mercedes", year:2022, trans:"Автомат", fuel:"Бензин", price:65000, type:"Под выкуп", img:IMG.mercedes, badge:"Под выкуп", km:"18 200" },
  { id:3, name:"Toyota Camry", brand:"Toyota", year:2023, trans:"Автомат", fuel:"Бензин", price:58000, type:"Аренда", img:IMG.toyota, badge:null, km:"22 100" },
  { id:4, name:"Hyundai Santa Fe", brand:"Hyundai", year:2022, trans:"Автомат", fuel:"Дизель", price:53000, type:"Аренда", img:IMG.hyundai, badge:"Премиум", km:"11 800" },
  { id:5, name:"Kia K5", brand:"Kia", year:2022, trans:"Автомат", fuel:"Бензин", price:54000, type:"Кредит", img:IMG.kia, badge:null, km:"33 400" },
  { id:6, name:"Audi A6", brand:"Audi", year:2022, trans:"Автомат", fuel:"Бензин", price:75000, type:"Кредит", img:IMG.audi, badge:"Кредит", km:"15 900" },
  { id:7, name:"Genesis GV80", brand:"Genesis", year:2023, trans:"Автомат", fuel:"Бензин", price:89000, type:"Из Кореи", img:IMG.genesis, badge:"Из Кореи", km:"8 200" },
  { id:8, name:"Hyundai Palisade", brand:"Hyundai", year:2023, trans:"Автомат", fuel:"Дизель", price:77000, type:"Из Кореи", img:IMG.palisade, badge:"Из Кореи", km:"5 100" },
  { id:9, name:"Kia Carnival", brand:"Kia", year:2022, trans:"Автомат", fuel:"Дизель", price:68000, type:"Из Кореи", img:IMG.carnival, badge:"Из Кореи", km:"12 300" },
  { id:10, name:"Porsche Cayenne", brand:"Porsche", year:2023, trans:"Автомат", fuel:"Бензин", price:145000, type:"Привоз", img:IMG.porsche, badge:"Эксклюзив", km:"4 100" },
  { id:11, name:"BMW 3 Series", brand:"BMW", year:2023, trans:"Автомат", fuel:"Бензин", price:52000, type:"Аренда", img:IMG.bmw2, badge:null, km:"19 800" },
  { id:12, name:"Hyundai Sonata", brand:"Hyundai", year:2021, trans:"Автомат", fuel:"Бензин", price:46000, type:"Аренда", img:IMG.hyundai, badge:null, km:"41 200" },
];

// Генерация годов для скролла (1-2 года ... до 20+)
const YEAR_RANGES = [
  "1-2 года", "3-4 года", "5-6 лет", "7-8 лет", "9-10 лет",
  "11-12 лет", "13-14 лет", "15-16 лет", "17-18 лет", "19-20 лет",
  "21-22 года", "23-24 года", "25-26 лет", "27-28 лет", "29-30 лет",
  "31-32 год", "33-34 года", "35-36 лет", "37-38 лет", "39-40 лет",
  "41-42 год", "43-44 года", "45-46 лет", "47-48 лет", "49-50 лет",
  "51-52 год", "53-54 года", "55-56 лет", "57-58 лет", "59-60 лет"
];

/* ─── ANIMATED COUNTER ─── */
function Counter({ to, suffix="" }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = 0;
        const step = to / 60;
        const t = setInterval(() => {
          start += step;
          if (start >= to) { setN(to); clearInterval(t); } 
          else setN(Math.floor(start));
        }, 16);
        obs.disconnect();
      }
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}

/* ─── 3D HORIZONTAL SCROLL ─── */
function YearScroll() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleWheel = (e) => {
      if (scrollRef.current && e.target.closest('.year-scroll-container')) {
        e.preventDefault();
        scrollRef.current.scrollLeft += e.deltaY;
      }
    };
    const container = scrollRef.current?.closest('.year-scroll-container');
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      return () => container.removeEventListener('wheel', handleWheel);
    }
  }, []);

  return (
    <div className="year-scroll-container" style={{ position: "relative", background: "#fff", borderBottom: "1px solid #e2e8f0", overflow: "hidden" }}>
      <div ref={scrollRef} style={{
        display: "flex", gap: "10px", overflowX: "auto", scrollBehavior: "smooth",
        padding: "16px 40px", whiteSpace: "nowrap", cursor: "grab",
        WebkitOverflowScrolling: "touch", scrollbarWidth: "thin",
      }}>
        {YEAR_RANGES.map((year, idx) => (
          <div
            key={idx}
            onClick={() => setActiveIndex(idx)}
            style={{
              display: "inline-block", padding: "10px 24px",
              background: activeIndex === idx ? "linear-gradient(135deg, #0d2451, #2563eb)" : "#f1f5f9",
              borderRadius: "40px", fontSize: "14px", fontWeight: 600,
              color: activeIndex === idx ? "#fff" : "#475569",
              cursor: "pointer", transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              transform: activeIndex === idx ? "scale(1.05)" : "scale(1)",
              boxShadow: activeIndex === idx ? "0 4px 14px rgba(13,36,81,0.3)" : "none",
            }}
          >
            {year}
          </div>
        ))}
      </div>
      <style>{`
        .year-scroll-container div::-webkit-scrollbar { height: 4px; }
        .year-scroll-container div::-webkit-scrollbar-track { background: #f1f5f9; border-radius: 4px; }
        .year-scroll-container div::-webkit-scrollbar-thumb { background: #2563eb; border-radius: 4px; }
      `}</style>
    </div>
  );
}

/* ─── NAVBAR (Адаптивная) ─── */
function Navbar({ page, setPage, favCount }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = [
    { label:"Главная", key:"home" },
    { label:"Каталог", key:"catalog" },
    { label:"Аренда", key:"rental" },
    { label:"Под выкуп", key:"buyout" },
    { label:"Кредит", key:"credit" },
    { label:"Привоз", key:"import" },
  ];

  return (
    <nav style={{
      position:"fixed", top:0, left:0, right:0, zIndex:1000,
      background: scrolled ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0.98)",
      backdropFilter:"blur(20px)", borderBottom:"1px solid rgba(13,36,107,0.1)",
      boxShadow: scrolled ? "0 4px 32px rgba(13,36,107,0.1)" : "none",
      transition:"all 0.3s",
    }}>
      <div style={{
        maxWidth:1400, margin:"0 auto", padding:"0 20px",
        display:"flex", alignItems:"center", justifyContent:"space-between",
        height:68, gap:20,
      }}>
        <div onClick={()=>setPage("home")} style={{ display:"flex", alignItems:"center", gap:10, cursor:"pointer", flexShrink:0 }}>
          <div style={{
            width:40, height:40, borderRadius:10,
            background:"linear-gradient(135deg,#071529,#1a3a6b)",
            display:"flex", alignItems:"center", justifyContent:"center",
            fontSize:20, color:"#fff",
          }}>C</div>
          <div>
            <div style={{ fontSize:16, fontWeight:900, color:"#071529", lineHeight:1 }}>CyberCar</div>
            <div style={{ fontSize:8, fontWeight:700, color:"#94a3b8", letterSpacing:2 }}>AUTO</div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div style={{ display: "flex", gap: 4, flex: 1, justifyContent: "center" }}>
          {links.map(l => (
            <button key={l.key} onClick={()=>setPage(l.key)} style={{
              padding:"8px 16px", borderRadius:8, border:"none",
              background:"none", cursor:"pointer",
              fontSize:13, fontWeight: page===l.key ? 700 : 500,
              color: page===l.key ? "#0d2451" : "#475569",
              borderBottom: page===l.key ? "2px solid #2563eb" : "2px solid transparent",
              transition:"all 0.2s",
            }}>{l.label}</button>
          ))}
        </div>

        {/* Desktop Actions */}
        <div style={{ display:"flex", alignItems:"center", gap:10, flexShrink:0 }}>
          <a href="tel:+79991234567" style={{ fontSize:13, fontWeight:700, color:"#0d2451", textDecoration:"none" }}>📞 +7 (999) 123-45-67</a>
          <button onClick={()=>setPage("favs")} style={{
            position:"relative", width:38, height:38, borderRadius:10,
            background:"#f1f5f9", border:"1px solid #e2e8f0",
            display:"flex", alignItems:"center", justifyContent:"center",
            cursor:"pointer",
          }}>
            ♡
            {favCount>0 && <div style={{position:"absolute",top:-4,right:-4,width:16,height:16,borderRadius:"50%",background:"#ef4444",color:"#fff",fontSize:9,fontWeight:900,display:"flex",alignItems:"center",justifyContent:"center"}}>{favCount}</div>}
          </button>
          <button onClick={()=>setPage("profile")} style={{
            width:38, height:38, borderRadius:10,
            background:"#f1f5f9", border:"1px solid #e2e8f0",
            display:"flex", alignItems:"center", justifyContent:"center",
            cursor:"pointer",
          }}>👤</button>
          <button onClick={()=>setPage("apply")} style={{
            padding:"10px 22px", background:"linear-gradient(135deg,#0d2451,#2563eb)",
            border:"none", borderRadius:10, color:"#fff",
            fontSize:13, fontWeight:800, cursor:"pointer",
            whiteSpace:"nowrap",
          }}>Заявка</button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={()=>setMobileMenuOpen(!mobileMenuOpen)} style={{
          display:"none", background:"none", border:"none", fontSize:24, cursor:"pointer",
          '@media (max-width: 768px)': { display:"block" }
        }}>☰</button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          position:"absolute", top:68, left:0, right:0, background:"#fff",
          borderBottom:"1px solid #e2e8f0", padding:"16px 20px", display:"flex",
          flexDirection:"column", gap:10, boxShadow:"0 4px 20px rgba(0,0,0,0.1)",
        }}>
          {links.map(l => (
            <button key={l.key} onClick={()=>{setPage(l.key); setMobileMenuOpen(false);}} style={{
              padding:"12px", borderRadius:8, border:"none", background:"none",
              fontSize:14, fontWeight: page===l.key ? 700 : 500,
              color: page===l.key ? "#0d2451" : "#475569",
              textAlign:"left",
            }}>{l.label}</button>
          ))}
          <button onClick={()=>{setPage("apply"); setMobileMenuOpen(false);}} style={{
            padding:"12px", background:"linear-gradient(135deg,#0d2451,#2563eb)",
            border:"none", borderRadius:8, color:"#fff", fontSize:14, fontWeight:700,
          }}>Оставить заявку</button>
        </div>
      )}
    </nav>
  );
}

/* ─── CAR CARD ─── */
function CarCard({ car, favs, toggleFav, onClick, size="normal" }) {
  const [hov, setHov] = useState(false);
  const isFav = favs.includes(car.id);

  return (
    <div
      onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      onClick={()=>onClick(car)}
      style={{
        background:"#fff", borderRadius:16, overflow:"hidden", cursor:"pointer",
        boxShadow: hov ? "0 20px 40px rgba(13,36,107,0.15)" : "0 2px 12px rgba(13,36,107,0.08)",
        transform: hov ? "translateY(-4px)" : "translateY(0)",
        transition:"all 0.3s cubic-bezier(0.4,0,0.2,1)",
        border:"1px solid rgba(13,36,107,0.08)",
      }}
    >
      {car.badge && (
        <div style={{
          position:"absolute", top:12, left:12, zIndex:2,
          background: "linear-gradient(135deg,#0d2451,#2563eb)",
          color:"#fff", fontSize:10, fontWeight:700, padding:"4px 12px",
          borderRadius:20,
        }}>{car.badge}</div>
      )}
      <button onClick={e=>{e.stopPropagation(); toggleFav(car.id);}} style={{
        position:"absolute", top:12, right:12, zIndex:2,
        background: "rgba(255,255,255,0.95)", border:"none", borderRadius:"50%",
        width:32, height:32, display:"flex", alignItems:"center", justifyContent:"center",
        cursor:"pointer", fontSize:16, boxShadow:"0 2px 8px rgba(0,0,0,0.1)",
      }}>{isFav ? "❤️" : "♡"}</button>

      <div style={{ height: 180, overflow:"hidden", background:"#f0f4ff" }}>
        <img src={car.img} alt={car.name}
          style={{ width:"100%", height:"100%", objectFit:"cover",
            transform: hov ? "scale(1.05)" : "scale(1)", transition:"transform 0.5s" }}/>
      </div>

      <div style={{ padding: "16px" }}>
        <div style={{ fontSize: 16, fontWeight: 800, color:"#071529", marginBottom:4 }}>{car.name}</div>
        <div style={{ fontSize: 12, color:"#64748b", marginBottom:12 }}>{car.year} · {car.trans} · {car.fuel} · {car.km} км</div>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", borderTop:"1px solid #f1f5f9", paddingTop:12 }}>
          <div>
            <div style={{ fontSize:11, color:"#94a3b8" }}>от</div>
            <div style={{ fontSize: 18, fontWeight: 900, color:"#0d2451" }}>
              {car.price.toLocaleString()} ₽<span style={{ fontSize:11, fontWeight:500 }}>/мес</span>
            </div>
          </div>
          <button style={{
            background:"#f0f5ff", border:"none", borderRadius:20,
            padding:"6px 14px", fontSize:12, fontWeight:700, color:"#0d2451",
            cursor:"pointer",
          }}>→</button>
        </div>
      </div>
    </div>
  );
}

/* ─── HERO SECTION (Как на рендере) ─── */
function HeroSection({ setPage }) {
  return (
    <section style={{
      position:"relative", minHeight:"90vh", display:"flex", alignItems:"center",
      background: "linear-gradient(135deg, #071529 0%, #0d2451 50%, #1a3a6b 100%)",
      overflow:"hidden",
    }}>
      {/* Фоновое изображение */}
      <div style={{
        position:"absolute", inset:0,
        backgroundImage:`url(${IMG.herocar})`,
        backgroundSize:"cover", backgroundPosition:"center 30%",
        opacity:0.4,
      }}/>
      
      {/* Сетка/паттерн для стиля */}
      <div style={{
        position:"absolute", inset:0,
        backgroundImage: "radial-gradient(circle at 25% 50%, rgba(37,99,235,0.1) 0%, transparent 50%)",
      }}/>

      <div style={{
        position:"relative", zIndex:2, maxWidth:1400, margin:"0 auto",
        padding:"120px 40px 60px", width:"100%",
      }}>
        <div style={{ maxWidth:700 }}>
          <div style={{
            fontSize:12, color:"#93c5fd", fontWeight:700, letterSpacing:3,
            marginBottom:16, textTransform:"uppercase",
          }}>
            <span style={{ width:30, height:2, background:"#3b82f6", display:"inline-block", marginRight:10, verticalAlign:"middle" }}/>
            CyberCar Auto
          </div>
          <h1 style={{
            fontSize:"clamp(36px, 5vw, 64px)", fontWeight:900, color:"#fff",
            lineHeight:1.1, marginBottom:20, letterSpacing:-1.5,
          }}>
            Ваш путь к<br />
            <span style={{ color:"#60a5fa" }}>идеальному</span> авто
          </h1>
          <p style={{ fontSize:16, color:"rgba(255,255,255,0.7)", lineHeight:1.6, marginBottom:32, maxWidth:520 }}>
            Аренда, выкуп, кредит и привоз авто на лучших условиях
          </p>

          <div style={{ display:"flex", gap:16, flexWrap:"wrap", marginBottom:40 }}>
            <button onClick={()=>setPage("catalog")} style={{
              padding:"14px 32px", background:"#fff", border:"none", borderRadius:12,
              color:"#0d2451", fontSize:15, fontWeight:800, cursor:"pointer",
              boxShadow:"0 8px 24px rgba(0,0,0,0.2)",
            }}>Подобрать авто →</button>
            <button style={{
              padding:"14px 32px", background:"rgba(255,255,255,0.1)",
              backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.2)",
              borderRadius:12, color:"#fff", fontSize:15, fontWeight:600, cursor:"pointer",
            }}>Рассчитать платёж</button>
          </div>

          {/* Быстрые ссылки */}
          <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
            {["Аренда авто", "Кредит", "Под выкуп", "Привоз авто"].map(s => (
              <div key={s} style={{
                fontSize:13, color:"rgba(255,255,255,0.6)", padding:"6px 14px",
                border:"1px solid rgba(255,255,255,0.15)", borderRadius:24,
                cursor:"pointer",
              }}>{s}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══ HOME PAGE ═══ */
function HomePage({ setPage, favs, toggleFav, setSelCar }) {
  return (
    <div>
      <HeroSection setPage={setPage} />
      <YearScroll />
      
      {/* Форма подбора авто */}
      <section style={{ padding:"40px 20px", background:"#fff", borderBottom:"1px solid #f1f5f9" }}>
        <div style={{ maxWidth:1400, margin:"0 auto" }}>
          <div style={{
            background:"#fff", borderRadius:20, boxShadow:"0 8px 32px rgba(13,36,107,0.1)",
            border:"1px solid rgba(13,36,107,0.08)", padding:"28px",
          }}>
            <div style={{ fontSize:22, fontWeight:900, color:"#071529", marginBottom:20 }}>Подобрать авто</div>
            <div style={{
              display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",
              gap:16, marginBottom:20,
            }}>
              {[
                { label:"Марка", placeholder:"Любая марка" },
                { label:"Модель", placeholder:"Любая модель" },
                { label:"Тип услуги", placeholder:"Любой тип" },
                { label:"Цена", placeholder:"Любая цена" },
              ].map(field => (
                <div key={field.label}>
                  <div style={{ fontSize:12, color:"#64748b", fontWeight:600, marginBottom:6 }}>{field.label}</div>
                  <div style={{
                    background:"#f8fafc", border:"1.5px solid #e2e8f0", borderRadius:12,
                    padding:"12px 16px", fontSize:14, color:"#334155", fontWeight:500,
                    display:"flex", justifyContent:"space-between", cursor:"pointer",
                  }}>
                    {field.placeholder} <span style={{ color:"#94a3b8" }}>▼</span>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={()=>setPage("catalog")} style={{
              width:"100%", padding:"14px", background:"linear-gradient(135deg,#0d2451,#2563eb)",
              border:"none", borderRadius:12, color:"#fff", fontSize:15, fontWeight:800,
              cursor:"pointer",
            }}>Найти авто</button>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section style={{ padding:"60px 20px", background:"#fff" }}>
        <div style={{ maxWidth:1400, margin:"0 auto" }}>
          <div style={{
            display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",
            gap:20,
          }}>
            {[
              { title:"Аренда авто", desc:"На любой срок", icon:"🚗", pg:"rental" },
              { title:"Под выкуп", desc:"Аренда с выкупом", icon:"🔑", pg:"buyout" },
              { title:"Автокредит", desc:"Выгодные условия", icon:"💳", pg:"credit" },
              { title:"Привоз авто", desc:"Из любой точки мира", icon:"✈️", pg:"import" },
            ].map(s => (
              <div key={s.title} onClick={()=>setPage(s.pg)} style={{
                display:"flex", gap:16, padding:"20px", borderRadius:16,
                border:"1px solid #f1f5f9", cursor:"pointer", transition:"all 0.3s",
                background:"#fff",
              }}>
                <div style={{
                  width:56, height:56, borderRadius:14, background:"linear-gradient(135deg,#eff6ff,#dbeafe)",
                  display:"flex", alignItems:"center", justifyContent:"center", fontSize:28,
                }}>{s.icon}</div>
                <div>
                  <div style={{ fontSize:16, fontWeight:800, color:"#071529" }}>{s.title}</div>
                  <div style={{ fontSize:13, color:"#64748b" }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Популярные авто */}
      <section style={{ padding:"0 20px 60px", background:"#f8faff" }}>
        <div style={{ maxWidth:1400, margin:"0 auto" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:24 }}>
            <div>
              <div style={{ fontSize:12, color:"#3b82f6", fontWeight:700, letterSpacing:2 }}>КАТАЛОГ</div>
              <div style={{ fontSize:28, fontWeight:900, color:"#071529" }}>Популярные автомобили</div>
            </div>
            <button onClick={()=>setPage("catalog")} style={{
              background:"none", border:"1.5px solid #0d2451", borderRadius:10,
              padding:"10px 20px", color:"#0d2451", fontSize:13, fontWeight:700, cursor:"pointer",
            }}>Смотреть все →</button>
          </div>
          <div style={{
            display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",
            gap:20,
          }}>
            {CARS.slice(0,6).map(c => (
              <CarCard key={c.id} car={c} favs={favs} toggleFav={toggleFav} onClick={setSelCar}/>
            ))}
          </div>
        </div>
      </section>

      {/* Статистика */}
      <section style={{
        background:"linear-gradient(135deg, #071529, #0d2451)", padding:"60px 20px",
      }}>
        <div style={{ maxWidth:1400, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))", gap:32, textAlign:"center" }}>
          {[
            { val:10000, suffix:"+", label:"довольных клиентов" },
            { val:5000, suffix:"+", label:"авто в наличии" },
            { val:0, suffix:"%", label:"скрытых комиссий" },
            { val:15, suffix:"мин", label:"одобрение заявки" },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontSize:42, fontWeight:900, color:"#fff" }}><Counter to={s.val} suffix={s.suffix}/></div>
              <div style={{ fontSize:14, color:"rgba(255,255,255,0.6)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Футер */}
      <footer style={{ background:"#071529", padding:"48px 20px 32px" }}>
        <div style={{ maxWidth:1400, margin:"0 auto" }}>
          <div style={{
            display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",
            gap:40, marginBottom:40,
          }}>
            <div>
              <div style={{ fontSize:18, fontWeight:900, color:"#fff", marginBottom:12 }}>CyberCar Auto</div>
              <div style={{ fontSize:13, color:"rgba(255,255,255,0.5)", lineHeight:1.6 }}>
                Современная платформа для аренды, покупки и привоза автомобилей
              </div>
            </div>
            {[
              { title:"Услуги", items:["Аренда авто","Под выкуп","Автокредит","Привоз авто"] },
              { title:"О компании", items:["О нас","Отзывы","Вакансии","Контакты"] },
              { title:"Контакты", items:["+7 (999) 123-45-67","info@cybercar.ru","Ежедневно 9:00–21:00"] },
            ].map(col => (
              <div key={col.title}>
                <div style={{ fontSize:12, color:"rgba(255,255,255,0.4)", fontWeight:700, letterSpacing:2, marginBottom:16 }}>{col.title}</div>
                {col.items.map(item => (
                  <div key={item} style={{ fontSize:13, color:"rgba(255,255,255,0.7)", marginBottom:10, cursor:"pointer" }}>{item}</div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ borderTop:"1px solid rgba(255,255,255,0.08)", paddingTop:24, textAlign:"center", fontSize:12, color:"rgba(255,255,255,0.35)" }}>
            © 2024 CyberCar Auto. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ═══ CATALOG PAGE ═══ */
function CatalogPage({ favs, toggleFav, setSelCar }) {
  const [filter, setFilter] = useState("Все");
  const [search, setSearch] = useState("");
  const types = ["Все", "Аренда", "Под выкуп", "Кредит", "Из Кореи", "Привоз"];
  const filtered = CARS.filter(c => (filter==="Все" || c.type===filter) && c.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div style={{ maxWidth:1400, margin:"0 auto", padding:"100px 20px 60px" }}>
      <div style={{ fontSize:28, fontWeight:900, color:"#071529", marginBottom:8 }}>Каталог авто</div>
      <div style={{ fontSize:14, color:"#64748b", marginBottom:24 }}>{filtered.length} автомобилей</div>
      
      <div style={{ display:"flex", flexWrap:"wrap", gap:12, marginBottom:24 }}>
        {types.map(t => (
          <button key={t} onClick={()=>setFilter(t)} style={{
            padding:"8px 20px", borderRadius:30,
            background: filter===t ? "linear-gradient(135deg,#0d2451,#2563eb)" : "#f1f5f9",
            color: filter===t ? "#fff" : "#475569", border:"none",
            fontSize:13, fontWeight:600, cursor:"pointer", transition:"all 0.2s",
          }}>{t}</button>
        ))}
      </div>

      <div style={{ marginBottom:24 }}>
        <div style={{
          background:"#fff", border:"1.5px solid #e2e8f0", borderRadius:12,
          padding:"12px 16px", display:"flex", alignItems:"center", gap:8,
        }}>
          <span>🔍</span>
          <input value={search} onChange={e=>setSearch(e.target.value)}
            placeholder="Поиск по марке или модели..."
            style={{ border:"none", outline:"none", fontSize:14, flex:1, background:"transparent" }}/>
        </div>
      </div>

      <div style={{
        display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",
        gap:20,
      }}>
        {filtered.map(c => <CarCard key={c.id} car={c} favs={favs} toggleFav={toggleFav} onClick={setSelCar}/>)}
      </div>
    </div>
  );
}

/* ═══ SIMPLE PAGES ═══ */
function CreditPage() {
  return (
    <div style={{ maxWidth:1400, margin:"0 auto", padding:"100px 20px 60px", textAlign:"center" }}>
      <div style={{ fontSize:36, fontWeight:900, color:"#071529", marginBottom:16 }}>Автокредит</div>
      <div style={{ fontSize:16, color:"#64748b", marginBottom:32 }}>Ставка от 4.9% · Одобрение за 15 минут</div>
      <div style={{
        background:"linear-gradient(135deg,#eff6ff,#dbeafe)", borderRadius:20,
        padding:40, maxWidth:500, margin:"0 auto",
      }}>
        <div style={{ fontSize:20, fontWeight:800, color:"#0d2451", marginBottom:20 }}>Калькулятор</div>
        <button style={{
          padding:"14px 28px", background:"linear-gradient(135deg,#0d2451,#2563eb)",
          border:"none", borderRadius:12, color:"#fff", fontSize:14, fontWeight:800,
          cursor:"pointer", width:"100%",
        }}>Рассчитать →</button>
      </div>
    </div>
  );
}

function ImportPage({ favs, toggleFav, setSelCar }) {
  return (
    <div style={{ maxWidth:1400, margin:"0 auto", padding:"100px 20px 60px" }}>
      <div style={{ fontSize:36, fontWeight:900, color:"#071529", marginBottom:16 }}>Привоз авто из-за границы</div>
      <div style={{ fontSize:16, color:"#64748b", marginBottom:32 }}>Подберём, проверим и доставим авто из любой страны</div>
      <div style={{
        display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",
        gap:20,
      }}>
        {CARS.filter(c => c.type === "Из Кореи").map(c => (
          <CarCard key={c.id} car={c} favs={favs} toggleFav={toggleFav} onClick={setSelCar}/>
        ))}
      </div>
    </div>
  );
}

function ProfilePage({ setPage }) {
  return (
    <div style={{ maxWidth:1400, margin:"0 auto", padding:"100px 20px 60px", textAlign:"center" }}>
      <div style={{ fontSize:36, fontWeight:900, color:"#071529", marginBottom:16 }}>Личный кабинет</div>
      <div style={{
        background:"#fff", borderRadius:20, padding:32, maxWidth:400, margin:"0 auto",
        boxShadow:"0 8px 32px rgba(13,36,107,0.1)",
      }}>
        <div style={{ fontSize:80, marginBottom:16 }}>👤</div>
        <div style={{ fontSize:20, fontWeight:800, color:"#071529", marginBottom:4 }}>Константин</div>
        <div style={{ fontSize:14, color:"#64748b", marginBottom:20 }}>+7 (999) 123-45-67</div>
        <button style={{
          padding:"12px 24px", background:"linear-gradient(135deg,#0d2451,#2563eb)",
          border:"none", borderRadius:10, color:"#fff", fontSize:14, fontWeight:700,
          cursor:"pointer", width:"100%",
        }}>Редактировать профиль</button>
      </div>
    </div>
  );
}

function ApplyPage() {
  return (
    <div style={{ maxWidth:600, margin:"0 auto", padding:"100px 20px 60px" }}>
      <div style={{ fontSize:32, fontWeight:900, color:"#071529", marginBottom:16 }}>Оставить заявку</div>
      <div style={{ background:"#fff", borderRadius:20, padding:32, boxShadow:"0 8px 32px rgba(13,36,107,0.1)" }}>
        <input type="text" placeholder="Ваше имя" style={{ width:"100%", padding:"14px", marginBottom:16, border:"1.5px solid #e2e8f0", borderRadius:10, fontSize:14 }}/>
        <input type="tel" placeholder="+7 (___) ___-__-__" style={{ width:"100%", padding:"14px", marginBottom:16, border:"1.5px solid #e2e8f0", borderRadius:10, fontSize:14 }}/>
        <input type="email" placeholder="Email" style={{ width:"100%", padding:"14px", marginBottom:16, border:"1.5px solid #e2e8f0", borderRadius:10, fontSize:14 }}/>
        <select style={{ width:"100%", padding:"14px", marginBottom:16, border:"1.5px solid #e2e8f0", borderRadius:10, fontSize:14, background:"#fff" }}>
          <option>Аренда авто</option><option>Под выкуп</option><option>Кредит</option><option>Привоз авто</option>
        </select>
        <textarea placeholder="Комментарий" rows={4} style={{ width:"100%", padding:"14px", marginBottom:16, border:"1.5px solid #e2e8f0", borderRadius:10, fontSize:14, resize:"vertical" }}/>
        <button style={{ width:"100%", padding:"14px", background:"linear-gradient(135deg,#0d2451,#2563eb)", border:"none", borderRadius:10, color:"#fff", fontSize:16, fontWeight:800, cursor:"pointer" }}>Отправить</button>
      </div>
    </div>
  );
}

function CarModal({ car, onClose, favs, toggleFav }) {
  useEffect(() => { document.body.style.overflow = "hidden"; return () => document.body.style.overflow = ""; }, []);
  if (!car) return null;
  return (
    <div onClick={onClose} style={{ position:"fixed", inset:0, zIndex:2000, background:"rgba(7,21,41,0.8)", backdropFilter:"blur(8px)", display:"flex", alignItems:"center", justifyContent:"center", padding:20 }}>
      <div onClick={e=>e.stopPropagation()} style={{ background:"#fff", borderRadius:24, maxWidth:900, width:"100%", maxHeight:"90vh", overflow:"auto" }}>
        <img src={car.img} alt={car.name} style={{ width:"100%", height:300, objectFit:"cover" }}/>
        <div style={{ padding:24 }}>
          <div style={{ fontSize:24, fontWeight:900, color:"#071529", marginBottom:8 }}>{car.name}</div>
          <div style={{ fontSize:14, color:"#64748b", marginBottom:16 }}>{car.year} · {car.trans} · {car.fuel} · {car.km} км</div>
          <div style={{ fontSize:28, fontWeight:900, color:"#0d2451", marginBottom:20 }}>{car.price.toLocaleString()} ₽/мес</div>
          <div style={{ display:"flex", gap:12 }}>
            <button style={{ flex:1, padding:"14px", background:"#fff", border:"2px solid #0d2451", borderRadius:12, color:"#0d2451", fontSize:14, fontWeight:800, cursor:"pointer" }}>Рассчитать</button>
            <button style={{ flex:1, padding:"14px", background:"linear-gradient(135deg,#0d2451,#2563eb)", border:"none", borderRadius:12, color:"#fff", fontSize:14, fontWeight:800, cursor:"pointer" }}>Заявка</button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══ MAIN APP ═══ */
export default function CyberCarWebsite() {
  const [page, setPage] = useState("home");
  const [favs, setFavs] = useState([]);
  const [selCar, setSelCar] = useState(null);
  const toggleFav = (id) => setFavs(p => p.includes(id) ? p.filter(f=>f!==id) : [...p, id]);
  const navigate = (pg) => { setPage(pg); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const pages = {
    home: <HomePage setPage={navigate} favs={favs} toggleFav={toggleFav} setSelCar={setSelCar}/>,
    catalog: <CatalogPage favs={favs} toggleFav={toggleFav} setSelCar={setSelCar}/>,
    credit: <CreditPage/>,
    import: <ImportPage favs={favs} toggleFav={toggleFav} setSelCar={setSelCar}/>,
    profile: <ProfilePage setPage={navigate}/>,
    apply: <ApplyPage/>,
    rental: <CatalogPage favs={favs} toggleFav={toggleFav} setSelCar={setSelCar}/>,
    buyout: <CatalogPage favs={favs} toggleFav={toggleFav} setSelCar={setSelCar}/>,
    favs: <CatalogPage favs={favs} toggleFav={toggleFav} setSelCar={setSelCar}/>,
  };

  return (
    <div style={{ fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif", background:"#f8faff", minHeight:"100vh" }}>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        @media (max-width: 768px) {
          .desktop-only { display: none; }
        }
      `}</style>
      <Navbar page={page} setPage={navigate} favCount={favs.length}/>
      {pages[page] || pages.home}
      {selCar && <CarModal car={selCar} onClose={()=>setSelCar(null)} favs={favs} toggleFav={toggleFav}/>}
    </div>
  );
}
