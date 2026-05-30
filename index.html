import { useState, useEffect, useRef } from "react";

/* ─── IMAGES ─── */
const IMG = {
  bmw:      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900&q=85",
  bmw2:     "https://images.unsplash.com/photo-1617654112368-307921291f42?w=900&q=85",
  mercedes: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=900&q=85",
  toyota:   "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=900&q=85",
  hyundai:  "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=900&q=85",
  kia:      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=900&q=85",
  audi:     "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=900&q=85",
  genesis:  "https://images.unsplash.com/photo-1617650728438-e4e23c05b6b5?w=900&q=85",
  porsche:  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=85",
  palisade: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85",
  carnival: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=900&q=85",
  herocar:  "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1600&q=90",
  bridge:   "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600&q=80",
  port:     "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=85",
  city:     "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80",
};

const CARS = [
  { id:1,  name:"BMW 5 Series",       brand:"BMW",      year:2023, trans:"Автомат", fuel:"Бензин", price:62000,  type:"Под выкуп", img:IMG.bmw,      badge:"Под выкуп",  km:"29 500" },
  { id:2,  name:"Mercedes-Benz E-Class", brand:"Mercedes",year:2022,trans:"Автомат",fuel:"Бензин",price:65000, type:"Под выкуп", img:IMG.mercedes,  badge:"Под выкуп",  km:"18 200" },
  { id:3,  name:"Toyota Camry",       brand:"Toyota",   year:2023, trans:"Автомат", fuel:"Бензин", price:58000,  type:"Аренда",    img:IMG.toyota,   badge:null,          km:"22 100" },
  { id:4,  name:"Hyundai Santa Fe",   brand:"Hyundai",  year:2022, trans:"Автомат", fuel:"Дизель", price:53000,  type:"Аренда",    img:IMG.hyundai,  badge:"Премиум",     km:"11 800" },
  { id:5,  name:"Kia K5",             brand:"Kia",      year:2022, trans:"Автомат", fuel:"Бензин", price:54000,  type:"Кредит",    img:IMG.kia,      badge:null,          km:"33 400" },
  { id:6,  name:"Audi A6",            brand:"Audi",     year:2022, trans:"Автомат", fuel:"Бензин", price:75000,  type:"Кредит",    img:IMG.audi,     badge:"Кредит",      km:"15 900" },
  { id:7,  name:"Genesis GV80",       brand:"Genesis",  year:2023, trans:"Автомат", fuel:"Бензин", price:89000,  type:"Из Кореи",  img:IMG.genesis,  badge:"Из Кореи",   km:"8 200"  },
  { id:8,  name:"Hyundai Palisade",   brand:"Hyundai",  year:2023, trans:"Автомат", fuel:"Дизель", price:77000,  type:"Из Кореи",  img:IMG.palisade, badge:"Из Кореи",   km:"5 100"  },
  { id:9,  name:"Kia Carnival",       brand:"Kia",      year:2022, trans:"Автомат", fuel:"Дизель", price:68000,  type:"Из Кореи",  img:IMG.carnival, badge:"Из Кореи",   km:"12 300" },
  { id:10, name:"Porsche Cayenne",    brand:"Porsche",  year:2023, trans:"Автомат", fuel:"Бензин", price:145000, type:"Привоз",    img:IMG.porsche,  badge:"Эксклюзив",  km:"4 100"  },
  { id:11, name:"BMW 3 Series",       brand:"BMW",      year:2023, trans:"Автомат", fuel:"Бензин", price:52000,  type:"Аренда",    img:IMG.bmw2,     badge:null,          km:"19 800" },
  { id:12, name:"Hyundai Sonata",     brand:"Hyundai",  year:2021, trans:"Автомат", fuel:"Бензин", price:46000,  type:"Аренда",    img:IMG.hyundai,  badge:null,          km:"41 200" },
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
          if (start >= to) { setN(to); clearInterval(t); } else setN(Math.round(start));
        }, 16);
        obs.disconnect();
      }
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}

/* ─── NAVBAR ─── */
function Navbar({ page, setPage, favCount }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = [
    { label:"Главная", key:"home" },
    { label:"Каталог авто", key:"catalog" },
    { label:"Аренда", key:"rental" },
    { label:"Под выкуп", key:"buyout" },
    { label:"Кредит", key:"credit" },
    { label:"Привоз авто", key:"import" },
    { label:"О компании", key:"about" },
  ];

  return (
    <nav style={{
      position:"fixed", top:0, left:0, right:0, zIndex:1000,
      background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.97)",
      backdropFilter:"blur(20px)",
      borderBottom:"1px solid rgba(13,36,107,0.10)",
      boxShadow: scrolled ? "0 4px 32px rgba(13,36,107,0.10)" : "none",
      transition:"all .3s",
    }}>
      <div style={{ maxWidth:1400, margin:"0 auto", padding:"0 40px", display:"flex", alignItems:"center", height:68, gap:32 }}>
        {/* Logo */}
        <div onClick={()=>setPage("home")} style={{ display:"flex", alignItems:"center", gap:10, cursor:"pointer", flexShrink:0 }}>
          <div style={{
            width:44, height:44, borderRadius:12,
            background:"linear-gradient(135deg,#071529,#1a3a6b)",
            display:"flex", alignItems:"center", justifyContent:"center",
            fontSize:22, boxShadow:"0 4px 14px rgba(7,21,41,0.3)",
          }}>🌉</div>
          <div>
            <div style={{ fontSize:17, fontWeight:900, color:"#071529", letterSpacing:-.4, lineHeight:1 }}>CyberCar</div>
            <div style={{ fontSize:9, fontWeight:700, color:"#94a3b8", letterSpacing:2.5, textTransform:"uppercase" }}>Auto</div>
          </div>
        </div>

        {/* Nav links */}
        <div style={{ display:"flex", alignItems:"center", gap:4, flex:1 }}>
          {links.map(l => (
            <button key={l.key} onClick={()=>setPage(l.key)} style={{
              padding:"8px 14px", borderRadius:8, border:"none",
              background:"none", cursor:"pointer",
              fontSize:13, fontWeight: page===l.key ? 700 : 500,
              color: page===l.key ? "#0d2451" : "#475569",
              borderBottom: page===l.key ? "2px solid #2563eb" : "2px solid transparent",
              transition:"all .2s",
            }}>{l.label}</button>
          ))}
        </div>

        {/* Right actions */}
        <div style={{ display:"flex", alignItems:"center", gap:10, flexShrink:0 }}>
          <a href="tel:+79991234567" style={{
            fontSize:13, fontWeight:700, color:"#0d2451",
            textDecoration:"none", display:"flex", alignItems:"center", gap:6,
          }}>📞 +7 (999) 123-45-67</a>
          <button onClick={()=>setPage("favs")} style={{
            position:"relative", width:38, height:38, borderRadius:10,
            background:"#f1f5f9", border:"1px solid #e2e8f0",
            display:"flex", alignItems:"center", justifyContent:"center",
            fontSize:17, cursor:"pointer",
          }}>
            🤍
            {favCount>0 && <div style={{position:"absolute",top:-4,right:-4,width:17,height:17,borderRadius:"50%",background:"#ef4444",color:"#fff",fontSize:9,fontWeight:900,display:"flex",alignItems:"center",justifyContent:"center",border:"2px solid #fff"}}>{favCount}</div>}
          </button>
          <button style={{
            width:38, height:38, borderRadius:10,
            background:"#f1f5f9", border:"1px solid #e2e8f0",
            display:"flex", alignItems:"center", justifyContent:"center",
            fontSize:17, cursor:"pointer",
          }}>🔔</button>
          <button style={{
            width:38, height:38, borderRadius:10,
            background:"#f1f5f9", border:"1px solid #e2e8f0",
            display:"flex", alignItems:"center", justifyContent:"center",
            fontSize:17, cursor:"pointer",
          }} onClick={()=>setPage("profile")}>👤</button>
          <button onClick={()=>setPage("apply")} style={{
            padding:"10px 22px", background:"linear-gradient(135deg,#0d2451,#2563eb)",
            border:"none", borderRadius:10, color:"#fff",
            fontSize:13, fontWeight:800, cursor:"pointer",
            boxShadow:"0 4px 16px rgba(13,36,81,0.35)",
            whiteSpace:"nowrap",
          }}>Оставить заявку</button>
        </div>
      </div>
    </nav>
  );
}

/* ─── CALCULATOR WIDGET ─── */
function CalcWidget({ title }) {
  const [price, setPrice] = useState(3200000);
  const [down, setDown]   = useState(25);
  const [term, setTerm]   = useState(36);
  const rate = 6.5;
  const loan = price * (1 - down / 100);
  const r = rate / 100 / 12;
  const monthly = Math.round((loan * r) / (1 - Math.pow(1 + r, -term)));

  return (
    <div style={{
      background:"#fff", borderRadius:20, padding:28,
      boxShadow:"0 8px 40px rgba(13,36,107,0.12)",
      border:"1px solid rgba(13,36,107,0.08)",
    }}>
      {title && <div style={{ fontSize:18, fontWeight:900, color:"#071529", marginBottom:4 }}>{title}</div>}
      <div style={{ fontSize:12, color:"#94a3b8", marginBottom:20 }}>Ставка {rate}% · Одобрение 15 минут</div>

      {/* Car visual */}
      <div style={{
        height:130, borderRadius:14, overflow:"hidden", marginBottom:20,
        background:"linear-gradient(135deg,#eef2ff,#e0e9ff)", position:"relative",
      }}>
        <img src={IMG.bmw} alt="car" style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center 60%" }}
          onError={e => e.target.style.display="none"} />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to right, rgba(238,242,255,0.5) 0%, transparent 60%)" }} />
      </div>

      {[
        { label:"Стоимость авто", val:price, min:500000, max:15000000, step:100000, set:setPrice, fmt:(v)=>`${(v/1000000).toFixed(1)} млн ₽` },
        { label:"Первоначальный взнос", val:down, min:0, max:80, step:5, set:setDown, fmt:(v)=>`${(price*v/100).toLocaleString()} ₽ (${v}%)` },
        { label:"Срок аренды", val:term, min:12, max:84, step:12, set:setTerm, fmt:(v)=>`${v} месяцев` },
      ].map(s => (
        <div key={s.label} style={{ marginBottom:18 }}>
          <div style={{ display:"flex", justifyContent:"space-between", marginBottom:6 }}>
            <span style={{ fontSize:12, color:"#64748b", fontWeight:500 }}>{s.label}</span>
            <span style={{ fontSize:12, fontWeight:800, color:"#0d2451" }}>{s.fmt(s.val)}</span>
          </div>
          <div style={{ position:"relative", height:6, background:"#f1f5f9", borderRadius:6 }}>
            <div style={{
              position:"absolute", left:0, top:0, height:"100%",
              width: `${((s.val - s.min) / (s.max - s.min)) * 100}%`,
              background:"linear-gradient(90deg,#2563eb,#3b82f6)", borderRadius:6,
            }} />
          </div>
          <input type="range" min={s.min} max={s.max} step={s.step} value={s.val}
            onChange={e => s.set(+e.target.value)}
            style={{ width:"100%", opacity:0, marginTop:-6, position:"relative", zIndex:1, cursor:"pointer", height:18 }} />
        </div>
      ))}

      <div style={{
        background:"linear-gradient(135deg,#f0f5ff,#e8f0fe)",
        borderRadius:14, padding:"16px 20px",
        border:"1px solid #c7d7f5", marginBottom:16, textAlign:"center",
      }}>
        <div style={{ fontSize:11, color:"#64748b", marginBottom:3 }}>Ежемесячный платёж</div>
        <div style={{ fontSize:32, fontWeight:900, color:"#0d2451", letterSpacing:-1 }}>
          {monthly.toLocaleString()} <span style={{ fontSize:18, fontWeight:700 }}>₽</span>
        </div>
        <div style={{ fontSize:11, color:"#94a3b8", marginTop:4 }}>
          Переплата: {((monthly * term) - loan).toLocaleString()} ₽ · Займ: {loan.toLocaleString()} ₽
        </div>
      </div>

      <button style={{
        width:"100%", padding:"14px",
        background:"linear-gradient(135deg,#0d2451,#2563eb)",
        border:"none", borderRadius:12, color:"#fff",
        fontSize:14, fontWeight:800, cursor:"pointer",
        boxShadow:"0 6px 22px rgba(13,36,81,0.38)",
      }}>Оставить заявку</button>
      <button style={{
        width:"100%", padding:"11px", marginTop:8,
        background:"none", border:"2px solid #e2e8f0",
        borderRadius:12, color:"#475569", fontSize:13, fontWeight:700, cursor:"pointer",
      }}>Рассчитать другой вариант</button>
    </div>
  );
}

/* ─── CAR CARD ─── */
function CarCard({ car, favs, toggleFav, onClick, size="normal" }) {
  const [hov, setHov] = useState(false);
  const isFav = favs.includes(car.id);
  const sm = size === "small";

  return (
    <div
      onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      onClick={()=>onClick(car)}
      style={{
        background:"#fff", borderRadius:16, overflow:"hidden", cursor:"pointer",
        boxShadow: hov ? "0 20px 60px rgba(13,36,107,0.18)" : "0 2px 16px rgba(13,36,107,0.08)",
        transform: hov ? "translateY(-6px)" : "translateY(0)",
        transition:"all .32s cubic-bezier(.4,0,.2,1)",
        border:"1px solid rgba(13,36,107,0.07)",
        position:"relative",
      }}
    >
      {car.badge && (
        <div style={{
          position:"absolute", top:10, left:10, zIndex:3,
          background: car.type==="Из Кореи"||car.type==="Привоз" ? "linear-gradient(135deg,#f59e0b,#d97706)"
            : car.type==="Кредит" ? "linear-gradient(135deg,#6366f1,#4f46e5)"
            : "linear-gradient(135deg,#0d2451,#2563eb)",
          color:"#fff", fontSize:10, fontWeight:800, padding:"4px 10px",
          borderRadius:20, letterSpacing:.4,
        }}>{car.badge}</div>
      )}
      <button onClick={e=>{e.stopPropagation();toggleFav(car.id);}} style={{
        position:"absolute", top:10, right:10, zIndex:3,
        background: isFav ? "#0d2451" : "rgba(255,255,255,0.88)",
        border:"none", borderRadius:"50%", width:32, height:32,
        display:"flex", alignItems:"center", justifyContent:"center",
        cursor:"pointer", fontSize:14, boxShadow:"0 2px 8px rgba(0,0,0,0.12)",
        transform: isFav ? "scale(1.12)" : "scale(1)", transition:"all .18s",
      }}>{isFav ? "❤️" : "🤍"}</button>

      <div style={{ height: sm ? 140 : 170, overflow:"hidden", position:"relative", background:"#eef2ff" }}>
        <img src={car.img} alt={car.name}
          style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center 55%",
            transform: hov ? "scale(1.07)" : "scale(1)", transition:"transform .5s" }}
          onError={e=>e.target.style.display="none"} />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(7,21,41,0.4) 0%, transparent 60%)" }} />
        <div style={{ position:"absolute", bottom:8, left:10, right:10, display:"flex", justifyContent:"space-between" }}>
          <span style={{ fontSize:10, color:"rgba(255,255,255,0.85)", fontWeight:600 }}>🛣 {car.km} км</span>
          <span style={{ fontSize:10, color:"#fff", background:"rgba(0,0,0,0.3)", padding:"3px 8px", borderRadius:10, fontWeight:700, backdropFilter:"blur(6px)" }}>{car.year}</span>
        </div>
      </div>

      <div style={{ padding: sm ? "12px 12px 14px" : "14px 16px 18px" }}>
        <div style={{ fontSize: sm ? 13 : 14, fontWeight:800, color:"#071529", marginBottom:3 }}>{car.name}</div>
        <div style={{ fontSize:11, color:"#64748b", marginBottom:10 }}>{car.year} · {car.trans} · {car.fuel}</div>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", borderTop:"1px solid #f1f5f9", paddingTop:10 }}>
          <div>
            <div style={{ fontSize:10, color:"#94a3b8" }}>от</div>
            <div style={{ fontSize: sm ? 15 : 17, fontWeight:900, color:"#0d2451" }}>
              {car.price.toLocaleString()} <span style={{ fontSize:11, fontWeight:600 }}>₽/мес</span>
            </div>
          </div>
          <button onClick={e=>{e.stopPropagation();}} style={{
            background:"linear-gradient(135deg,#f0f5ff,#e0e9ff)",
            color:"#0d2451", border:"1.5px solid #c7d7f5",
            fontSize:11, fontWeight:800, padding:"6px 12px", borderRadius:20,
            cursor:"pointer",
          }}>Подробнее</button>
        </div>
      </div>
    </div>
  );
}

/* ─── CAR DETAIL MODAL ─── */
function CarModal({ car, onClose, favs, toggleFav }) {
  if (!car) return null;
  const isFav = favs.includes(car.id);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div style={{
      position:"fixed", inset:0, zIndex:2000,
      background:"rgba(7,21,41,0.7)", backdropFilter:"blur(12px)",
      display:"flex", alignItems:"center", justifyContent:"center",
      padding:24, animation:"fadeIn .2s ease",
    }} onClick={onClose}>
      <div onClick={e=>e.stopPropagation()} style={{
        background:"#fff", borderRadius:24, overflow:"hidden",
        width:"100%", maxWidth:860, display:"flex",
        boxShadow:"0 40px 120px rgba(7,21,41,0.3)",
        animation:"scaleIn .3s cubic-bezier(.4,0,.2,1)",
        maxHeight:"92vh",
      }}>
        {/* Left: image */}
        <div style={{ width:"45%", position:"relative", flexShrink:0 }}>
          <img src={car.img} alt={car.name}
            style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }}
            onError={e=>e.target.style.display="none"} />
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg,rgba(7,21,41,0.5),transparent)" }} />
          <button onClick={onClose} style={{
            position:"absolute", top:16, left:16,
            background:"rgba(255,255,255,0.15)", backdropFilter:"blur(10px)",
            border:"1px solid rgba(255,255,255,0.25)", borderRadius:50,
            width:36, height:36, fontSize:16, cursor:"pointer", color:"#fff",
          }}>✕</button>
          {car.badge && (
            <div style={{
              position:"absolute", top:16, right:16,
              background:"linear-gradient(135deg,#0d2451,#2563eb)",
              color:"#fff", fontSize:11, fontWeight:800, padding:"5px 13px",
              borderRadius:20,
            }}>{car.badge}</div>
          )}
          <div style={{ position:"absolute", bottom:24, left:24 }}>
            <div style={{ fontSize:26, fontWeight:900, color:"#fff", textShadow:"0 2px 8px rgba(0,0,0,0.4)" }}>{car.name}</div>
            <div style={{ fontSize:13, color:"rgba(255,255,255,0.75)", marginTop:4 }}>{car.year} · {car.trans} · {car.fuel}</div>
          </div>
        </div>

        {/* Right: details */}
        <div style={{ flex:1, padding:32, overflowY:"auto" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:20 }}>
            <div>
              <div style={{ fontSize:13, color:"#64748b" }}>Ежемесячный платёж</div>
              <div style={{ fontSize:34, fontWeight:900, color:"#0d2451", letterSpacing:-1 }}>
                {car.price.toLocaleString()} <span style={{ fontSize:18 }}>₽/мес</span>
              </div>
            </div>
            <button onClick={()=>toggleFav(car.id)} style={{
              background: isFav ? "#0d2451" : "#f8fafc",
              border:"1.5px solid #e2e8f0", borderRadius:12,
              width:44, height:44, fontSize:20, cursor:"pointer",
              display:"flex", alignItems:"center", justifyContent:"center",
            }}>{isFav?"❤️":"🤍"}</button>
          </div>

          {/* Rating */}
          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:20 }}>
            <div style={{ display:"flex", gap:2 }}>{[1,2,3,4,5].map(i=><span key={i} style={{fontSize:13,color:i<=4?"#f59e0b":"#e2e8f0"}}>★</span>)}</div>
            <span style={{ fontSize:12, color:"#64748b" }}>4.8 (138 отзывов)</span>
            <span style={{ background:"#dcfce7", color:"#16a34a", fontSize:10, fontWeight:700, padding:"3px 8px", borderRadius:10 }}>В наличии</span>
          </div>

          {/* Specs */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr", gap:10, marginBottom:20 }}>
            {[["🛣","Пробег",car.km+" км"],["⚙️","КПП","Автомат"],["🏙","Кузов","Седан"],["⛽","Топливо",car.fuel],["📅","Год",car.year],["🔑","Тип",car.type],["💪","Двигатель","2.0л 190 л.с."],["🎨","Цвет","Белый"]].map(([ic,k,v])=>(
              <div key={k} style={{ background:"#f8fafc", borderRadius:12, padding:"10px 12px" }}>
                <div style={{ fontSize:16, marginBottom:3 }}>{ic}</div>
                <div style={{ fontSize:10, color:"#94a3b8" }}>{k}</div>
                <div style={{ fontSize:12, fontWeight:700, color:"#1e293b" }}>{v}</div>
              </div>
            ))}
          </div>

          {/* Conditions */}
          <div style={{ background:"linear-gradient(135deg,#eff6ff,#dbeafe)", borderRadius:14, padding:"16px 18px", marginBottom:20, border:"1px solid #bfdbfe" }}>
            <div style={{ fontSize:13, fontWeight:800, color:"#1d4ed8", marginBottom:10 }}>Условия {car.type}</div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:12 }}>
              {[["Взнос","20% · "+((car.price*36*0.2)/1000).toFixed(0)+" тыс"],["Срок","36 месяцев"],["Ставка","от 6.5%"]].map(([k,v])=>(
                <div key={k}>
                  <div style={{ fontSize:10, color:"#3b82f6" }}>{k}</div>
                  <div style={{ fontSize:13, fontWeight:800, color:"#1e40af" }}>{v}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
            <button style={{ padding:"14px", background:"#fff", border:"2px solid #0d2451", borderRadius:12, color:"#0d2451", fontSize:14, fontWeight:800, cursor:"pointer" }}>Рассчитать платёж</button>
            <button style={{ padding:"14px", background:"linear-gradient(135deg,#0d2451,#2563eb)", border:"none", borderRadius:12, color:"#fff", fontSize:14, fontWeight:800, cursor:"pointer", boxShadow:"0 6px 20px rgba(13,36,81,0.4)" }}>Оставить заявку</button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════ HOME PAGE ═══════════════ */
function HomePage({ setPage, favs, toggleFav, setSelCar }) {
  const [heroSlide, setHeroSlide] = useState(0);
  const heroData = [
    { img: IMG.herocar, tag:"Популярное авто" },
    { img: IMG.porsche, tag:"Премиум класс" },
  ];
  useEffect(()=>{
    const t = setInterval(()=>setHeroSlide(p=>(p+1)%heroData.length),5000);
    return ()=>clearInterval(t);
  },[]);

  return (
    <div>
      {/* ══ HERO ══ */}
      <section style={{ position:"relative", minHeight:"100vh", overflow:"hidden" }}>
        {/* BG images */}
        {heroData.map((h,i)=>(
          <div key={i} style={{
            position:"absolute", inset:0,
            backgroundImage:`url(${h.img})`,
            backgroundSize:"cover", backgroundPosition:"center 40%",
            opacity: heroSlide===i ? 1 : 0,
            transition:"opacity 1.4s ease",
          }}/>
        ))}
        {/* Overlay */}
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(105deg,rgba(7,21,41,0.88) 0%,rgba(13,36,107,0.65) 45%,rgba(7,21,41,0.35) 100%)" }}/>

        {/* Bridge subtle */}
        <div style={{ position:"absolute", inset:0, backgroundImage:`url(${IMG.bridge})`, backgroundSize:"cover", backgroundPosition:"center", opacity:0.08 }}/>

        {/* Content */}
        <div style={{ position:"relative", zIndex:2, maxWidth:1400, margin:"0 auto", padding:"160px 40px 80px", display:"grid", gridTemplateColumns:"1fr 380px", gap:60, alignItems:"center" }}>
          {/* Left */}
          <div>
            <div style={{ fontSize:11, color:"#93c5fd", fontWeight:700, letterSpacing:3, textTransform:"uppercase", marginBottom:16, display:"flex", alignItems:"center", gap:8 }}>
              <span style={{ width:24, height:2, background:"#3b82f6", display:"inline-block" }}/>
              CyberCar Auto
            </div>
            <h1 style={{ fontSize:"clamp(36px,4.5vw,64px)", fontWeight:900, color:"#fff", lineHeight:1.06, margin:"0 0 20px", letterSpacing:-1.5 }}>
              Ваш путь к<br />
              <span style={{ color:"#60a5fa" }}>идеальному</span> авто
            </h1>
            <p style={{ fontSize:17, color:"rgba(255,255,255,0.70)", lineHeight:1.65, maxWidth:520, marginBottom:36 }}>
              Современная платформа для аренды, покупки и привоза автомобилей на самых выгодных условиях
            </p>

            {/* Breadcrumb nav */}
            <div style={{ display:"flex", gap:12, marginBottom:36, flexWrap:"wrap" }}>
              {["Аренда","Кредит","Под выкуп","Привоз авто"].map(s=>(
                <div key={s} style={{
                  fontSize:12, color:"rgba(255,255,255,0.7)", padding:"7px 16px",
                  border:"1px solid rgba(255,255,255,0.18)", borderRadius:22,
                  cursor:"pointer", backdropFilter:"blur(8px)",
                  background:"rgba(255,255,255,0.07)", fontWeight:600,
                  transition:"all .2s",
                }}>{s} →</div>
              ))}
            </div>

            <div style={{ display:"flex", gap:14, alignItems:"center" }}>
              <button onClick={()=>setPage("catalog")} style={{
                padding:"15px 32px", background:"#fff",
                border:"none", borderRadius:12,
                color:"#0d2451", fontSize:15, fontWeight:900, cursor:"pointer",
                boxShadow:"0 8px 32px rgba(0,0,0,0.30)", display:"flex", alignItems:"center", gap:8,
              }}>Подобрать авто <span style={{ fontSize:18 }}>→</span></button>
              <button onClick={()=>document.getElementById("calc-section")?.scrollIntoView({behavior:"smooth"})} style={{
                padding:"15px 32px",
                background:"rgba(255,255,255,0.10)", backdropFilter:"blur(12px)",
                border:"1.5px solid rgba(255,255,255,0.22)",
                borderRadius:12, color:"#fff", fontSize:15, fontWeight:700, cursor:"pointer",
              }}>Рассчитать платёж</button>
            </div>

            {/* Stats row */}
            <div style={{ display:"flex", gap:36, marginTop:52 }}>
              {[[10000,"+","довольных клиентов"],[5000,"+","авто в наличии"],[0,"%","скрытых комиссий"],[15,"мин","одобрение заявки"]].map(([n,s,l])=>(
                <div key={l}>
                  <div style={{ fontSize:26, fontWeight:900, color:"#fff", lineHeight:1 }}><Counter to={n} suffix={s}/></div>
                  <div style={{ fontSize:11, color:"rgba(255,255,255,0.50)", marginTop:4, lineHeight:1.3 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Floating popular car card + calc */}
          <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
            {/* Popular car popup */}
            <div style={{
              background:"rgba(255,255,255,0.12)", backdropFilter:"blur(24px)",
              border:"1px solid rgba(255,255,255,0.22)", borderRadius:20,
              padding:20, animation:"floatY 4s ease-in-out infinite",
            }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12 }}>
                <div style={{ fontSize:11, color:"rgba(255,255,255,0.7)", fontWeight:600 }}>Популярное авто</div>
                <button style={{ background:"none", border:"none", color:"rgba(255,255,255,0.6)", cursor:"pointer", fontSize:16 }}>✕</button>
              </div>
              <div style={{ display:"flex", gap:14, alignItems:"center", marginBottom:14 }}>
                <img src={IMG.bmw} alt="bmw" style={{ width:90, height:62, objectFit:"cover", borderRadius:10 }} onError={e=>e.target.style.display="none"}/>
                <div>
                  <div style={{ fontSize:15, fontWeight:800, color:"#fff" }}>BMW 5 Series</div>
                  <div style={{ fontSize:11, color:"rgba(255,255,255,0.65)" }}>2023 · Автомат · Бензин</div>
                  <div style={{ fontSize:18, fontWeight:900, color:"#93c5fd", marginTop:4 }}>от 62 000 ₽/мес</div>
                </div>
              </div>
              {/* Slide dots */}
              <div style={{ display:"flex", gap:5, marginBottom:14, justifyContent:"center" }}>
                {[0,1,2,3].map(i=><div key={i} style={{ width: i===0?20:6, height:6, borderRadius:3, background: i===0?"#60a5fa":"rgba(255,255,255,0.3)", transition:"width .3s" }}/>)}
              </div>
              <button style={{
                width:"100%", padding:"11px",
                background:"linear-gradient(135deg,#2563eb,#3b82f6)",
                border:"none", borderRadius:10, color:"#fff",
                fontSize:13, fontWeight:800, cursor:"pointer",
              }}>Подробнее</button>
            </div>

            {/* Mini services */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
              {[["🚗","Аренда авто","от 1 дня"],["🔑","Под выкуп","выгодно"],["💳","Кредит","от 4.9%"],["✈️","Привоз","под ключ"]].map(([ic,t,d])=>(
                <div key={t} style={{
                  background:"rgba(255,255,255,0.09)", backdropFilter:"blur(12px)",
                  border:"1px solid rgba(255,255,255,0.15)", borderRadius:14, padding:"14px",
                  cursor:"pointer",
                }}>
                  <div style={{ fontSize:22, marginBottom:5 }}>{ic}</div>
                  <div style={{ fontSize:12, fontWeight:700, color:"#fff" }}>{t}</div>
                  <div style={{ fontSize:10, color:"rgba(255,255,255,0.55)" }}>{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide nav */}
        <div style={{ position:"absolute", bottom:32, left:"50%", transform:"translateX(-50%)", display:"flex", gap:8, zIndex:3 }}>
          {heroData.map((_,i)=>(
            <div key={i} onClick={()=>setHeroSlide(i)} style={{
              width: heroSlide===i ? 28 : 8, height:8, borderRadius:4,
              background: heroSlide===i ? "#60a5fa" : "rgba(255,255,255,0.35)",
              transition:"all .3s", cursor:"pointer",
            }}/>
          ))}
        </div>
        {/* Nav arrows */}
        {[["‹","left",()=>setHeroSlide(p=>(p-1+heroData.length)%heroData.length)],["›","right",()=>setHeroSlide(p=>(p+1)%heroData.length)]].map(([t,side,fn])=>(
          <button key={side} onClick={fn} style={{
            position:"absolute", top:"50%", [side]:32,
            transform:"translateY(-50%)", zIndex:3,
            background:"rgba(255,255,255,0.12)", backdropFilter:"blur(8px)",
            border:"1px solid rgba(255,255,255,0.2)", borderRadius:50,
            width:44, height:44, fontSize:22, color:"#fff", cursor:"pointer",
          }}>{t}</button>
        ))}
      </section>

      {/* ══ SEARCH BAR ══ */}
      <section style={{ background:"#fff", borderBottom:"1px solid #f1f5f9" }}>
        <div style={{ maxWidth:1400, margin:"0 auto", padding:"0 40px" }}>
          <div style={{
            background:"#fff", borderRadius:16, marginTop:-32, position:"relative", zIndex:10,
            boxShadow:"0 8px 48px rgba(13,36,107,0.14)",
            border:"1px solid rgba(13,36,107,0.07)",
            padding:"20px 24px", display:"flex", gap:12, alignItems:"center",
          }}>
            <div style={{ display:"flex", gap:10, flex:1 }}>
              {[["Марка","Любая марка"],["Модель","Любая модель"],["Тип кузова","Любой тип"],["Цена","Любая цена"]].map(([l,p])=>(
                <div key={l} style={{
                  flex:1, background:"#f8fafc", borderRadius:10, padding:"10px 14px",
                  border:"1.5px solid #e2e8f0", cursor:"pointer",
                }}>
                  <div style={{ fontSize:10, color:"#94a3b8", fontWeight:600, marginBottom:2 }}>{l}</div>
                  <div style={{ fontSize:13, color:"#334155", fontWeight:600, display:"flex", justifyContent:"space-between" }}>
                    {p} <span style={{ color:"#94a3b8" }}>▾</span>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={()=>setPage("catalog")} style={{
              padding:"14px 28px", background:"linear-gradient(135deg,#0d2451,#2563eb)",
              border:"none", borderRadius:12, color:"#fff", fontSize:14, fontWeight:800, cursor:"pointer",
              boxShadow:"0 4px 18px rgba(13,36,81,0.38)", whiteSpace:"nowrap",
              display:"flex", alignItems:"center", gap:8,
            }}>🔍 Найти авто</button>
          </div>
        </div>
      </section>

      {/* ══ SERVICES STRIP ══ */}
      <section style={{ background:"#fff", padding:"32px 0 28px", borderBottom:"1px solid #f1f5f9" }}>
        <div style={{ maxWidth:1400, margin:"0 auto", padding:"0 40px", display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:20 }}>
          {[
            { icon:"🚗", title:"Аренда авто", sub:"На любой срок", desc:"Флот 5000+ авто, от 1 дня, без скрытых платежей", pg:"catalog" },
            { icon:"🔑", title:"Под выкуп", sub:"Аренда с выкупом", desc:"Выгодные условия, гибкий срок, быстрое оформление", pg:"buyout" },
            { icon:"💳", title:"Автокредит", sub:"Выгодные условия", desc:"Ставка от 4.9%, одобрение за 15 минут", pg:"credit" },
            { icon:"✈️", title:"Привоз авто", sub:"Из любой точки мира", desc:"Корея, Китай, Германия, США — под ключ", pg:"import" },
          ].map((s,i)=>(
            <div key={i} onClick={()=>setPage(s.pg)} style={{
              display:"flex", gap:14, alignItems:"flex-start", padding:"18px 20px",
              borderRadius:14, border:"1.5px solid #f1f5f9", cursor:"pointer",
              transition:"all .22s", background:"#fff",
            }}
            onMouseEnter={e=>{ e.currentTarget.style.boxShadow="0 8px 32px rgba(13,36,107,0.11)"; e.currentTarget.style.borderColor="#dbeafe"; }}
            onMouseLeave={e=>{ e.currentTarget.style.boxShadow="none"; e.currentTarget.style.borderColor="#f1f5f9"; }}>
              <div style={{ width:48, height:48, borderRadius:12, background:"linear-gradient(135deg,#eff6ff,#dbeafe)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:24, flexShrink:0 }}>{s.icon}</div>
              <div>
                <div style={{ fontSize:14, fontWeight:800, color:"#071529" }}>{s.title}</div>
                <div style={{ fontSize:11, color:"#3b82f6", fontWeight:600, marginBottom:4 }}>{s.sub}</div>
                <div style={{ fontSize:11, color:"#94a3b8", lineHeight:1.4 }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ POPULAR CARS ══ */}
      <section style={{ padding:"60px 0", background:"#f8faff" }}>
        <div style={{ maxWidth:1400, margin:"0 auto", padding:"0 40px" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:32 }}>
            <div>
              <div style={{ fontSize:12, color:"#3b82f6", fontWeight:700, letterSpacing:2, textTransform:"uppercase", marginBottom:6 }}>Каталог</div>
              <div style={{ fontSize:28, fontWeight:900, color:"#071529", letterSpacing:-.5 }}>Популярные автомобили</div>
            </div>
            <button onClick={()=>setPage("catalog")} style={{ background:"none", border:"1.5px solid #0d2451", borderRadius:10, padding:"10px 22px", color:"#0d2451", fontSize:13, fontWeight:700, cursor:"pointer" }}>Смотреть все →</button>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:16 }}>
            {CARS.slice(0,5).map(c=>(
              <CarCard key={c.id} car={c} favs={favs} toggleFav={toggleFav} onClick={setSelCar} size="small"/>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY US + CALC ══ */}
      <section id="calc-section" style={{ padding:"60px 0", background:"#fff" }}>
        <div style={{ maxWidth:1400, margin:"0 auto", padding:"0 40px", display:"grid", gridTemplateColumns:"1fr 420px", gap:60, alignItems:"flex-start" }}>
          <div>
            <div style={{ fontSize:12, color:"#3b82f6", fontWeight:700, letterSpacing:2, textTransform:"uppercase", marginBottom:6 }}>Преимущества</div>
            <div style={{ fontSize:28, fontWeight:900, color:"#071529", letterSpacing:-.5, marginBottom:28 }}>Почему выбирают CyberCar Auto?</div>

            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, marginBottom:36 }}>
              {[
                { icon:"🔒", t:"Прозрачные условия", d:"Без скрытых платежей и комиссий" },
                { icon:"⚡", t:"Одобрение за 15 минут", d:"Быстрое решение по любой заявке" },
                { icon:"🚗", t:"Большой выбор авто", d:"Тысячи проверенных автомобилей" },
                { icon:"📞", t:"Поддержка 24/7", d:"Всегда на связи с клиентами" },
              ].map((item,i)=>(
                <div key={i} style={{ display:"flex", gap:14, padding:"18px", borderRadius:14, border:"1.5px solid #f1f5f9", background:"#fafcff" }}>
                  <div style={{ width:44, height:44, borderRadius:12, background:"linear-gradient(135deg,#eff6ff,#dbeafe)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, flexShrink:0 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize:14, fontWeight:700, color:"#1e293b", marginBottom:3 }}>{item.t}</div>
                    <div style={{ fontSize:12, color:"#94a3b8", lineHeight:1.4 }}>{item.d}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* How it works */}
            <div style={{ fontSize:18, fontWeight:800, color:"#071529", marginBottom:20 }}>Как это работает</div>
            <div style={{ display:"flex", gap:0 }}>
              {[["1","Выбор авто","Подберите из каталога"],["2","Заявка","Онлайн за 2 мин"],["3","Одобрение","За 15 минут"],["4","Договор","Подпись онлайн"],["5","Получение","Доставим сами"]].map(([n,t,d],i)=>(
                <div key={n} style={{ display:"flex", alignItems:"center", flex:1 }}>
                  <div style={{ flex:1, textAlign:"center" }}>
                    <div style={{ width:44, height:44, borderRadius:"50%", margin:"0 auto 8px", background:"linear-gradient(135deg,#0d2451,#2563eb)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:16, fontWeight:900, color:"#fff", boxShadow:"0 4px 14px rgba(13,36,81,0.3)" }}>{n}</div>
                    <div style={{ fontSize:12, fontWeight:800, color:"#1e293b" }}>{t}</div>
                    <div style={{ fontSize:10, color:"#94a3b8", marginTop:2 }}>{d}</div>
                  </div>
                  {i<4 && <div style={{ width:24, height:2, background:"linear-gradient(90deg,#2563eb,#93c5fd)", borderRadius:2, flexShrink:0 }}/>}
                </div>
              ))}
            </div>
          </div>

          <CalcWidget title="Калькулятор платежей" />
        </div>
      </section>

      {/* ══ IMPORT SECTION ══ */}
      <section style={{ padding:"0 0 60px", background:"#f8faff" }}>
        <div style={{ maxWidth:1400, margin:"0 auto", padding:"0 40px" }}>
          <div style={{ borderRadius:24, overflow:"hidden", position:"relative", minHeight:420 }}>
            <img src={IMG.port} alt="port" style={{ width:"100%", height:"100%", objectFit:"cover", position:"absolute", inset:0, display:"block" }} onError={e=>e.target.style.display="none"}/>
            <div style={{ position:"absolute", inset:0, background:"linear-gradient(105deg,rgba(7,21,41,0.94) 0%,rgba(13,36,107,0.82) 50%,rgba(7,21,41,0.60) 100%)" }}/>
            <div style={{ position:"relative", zIndex:2, padding:"52px 60px", display:"grid", gridTemplateColumns:"1fr 480px", gap:60, alignItems:"center" }}>
              <div>
                <div style={{ fontSize:11, color:"#93c5fd", fontWeight:700, letterSpacing:2.5, textTransform:"uppercase", marginBottom:14 }}>Привоз авто из-за границы</div>
                <div style={{ fontSize:"clamp(28px,3vw,40px)", fontWeight:900, color:"#fff", lineHeight:1.1, marginBottom:14, letterSpacing:-.5 }}>
                  Подберём, проверим<br/>и доставим авто<br/>из любой страны
                </div>
                <div style={{ fontSize:15, color:"rgba(255,255,255,0.65)", marginBottom:28 }}>Честные цены · Полное сопровождение · Быстрая доставка</div>
                <div style={{ display:"flex", gap:10, flexWrap:"wrap", marginBottom:32 }}>
                  {["Корея","Китай","ОАЭ","Германия","США","Япония"].map(c=>(
                    <div key={c} style={{ background:"rgba(255,255,255,0.12)", backdropFilter:"blur(8px)", border:"1px solid rgba(255,255,255,0.2)", color:"#fff", fontSize:12, fontWeight:700, padding:"7px 16px", borderRadius:22, cursor:"pointer" }}>{c}</div>
                  ))}
                </div>
                <div style={{ display:"flex", gap:14 }}>
                  <button onClick={()=>setPage("import")} style={{ padding:"13px 28px", background:"#fff", border:"none", borderRadius:11, color:"#0d2451", fontSize:14, fontWeight:900, cursor:"pointer", boxShadow:"0 6px 20px rgba(0,0,0,0.2)" }}>Найти авто →</button>
                  <button style={{ padding:"13px 24px", background:"rgba(255,255,255,0.12)", backdropFilter:"blur(8px)", border:"1.5px solid rgba(255,255,255,0.22)", borderRadius:11, color:"#fff", fontSize:14, fontWeight:700, cursor:"pointer" }}>Узнать стоимость</button>
                </div>
              </div>

              {/* Import search form */}
              <div style={{ background:"rgba(255,255,255,0.96)", borderRadius:20, padding:28, boxShadow:"0 16px 48px rgba(0,0,0,0.3)" }}>
                <div style={{ fontSize:16, fontWeight:900, color:"#071529", marginBottom:4 }}>Подобрать авто</div>
                <div style={{ fontSize:12, color:"#94a3b8", marginBottom:20 }}>из-за границы под ключ</div>
                {[["Марка","Любая марка"],["Модель","Любая модель"],["Год выпуска","2018 – 2024"]].map(([l,p])=>(
                  <div key={l} style={{ marginBottom:12 }}>
                    <div style={{ fontSize:11, color:"#64748b", fontWeight:600, marginBottom:5 }}>{l}</div>
                    <div style={{ background:"#f8fafc", border:"1.5px solid #e2e8f0", borderRadius:10, padding:"11px 14px", fontSize:13, color:"#334155", fontWeight:600, display:"flex", justifyContent:"space-between", cursor:"pointer" }}>
                      {p} <span style={{ color:"#94a3b8" }}>▾</span>
                    </div>
                  </div>
                ))}
                <button style={{ width:"100%", padding:"13px", background:"linear-gradient(135deg,#0d2451,#2563eb)", border:"none", borderRadius:11, color:"#fff", fontSize:14, fontWeight:800, cursor:"pointer", boxShadow:"0 6px 18px rgba(13,36,81,0.38)", marginTop:4 }}>Найти авто</button>
                <div style={{ display:"flex", justifyContent:"space-around", marginTop:16 }}>
                  {[["✅","Честные цены"],["🔍","Проверка"],["⚡","15 дней"]].map(([ic,t])=>(
                    <div key={t} style={{ textAlign:"center" }}>
                      <div style={{ fontSize:18 }}>{ic}</div>
                      <div style={{ fontSize:9, color:"#64748b", fontWeight:600, marginTop:3 }}>{t}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Korea cars row */}
          <div style={{ marginTop:40 }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 }}>
              <div style={{ fontSize:20, fontWeight:900, color:"#071529" }}>Популярные авто из Кореи</div>
              <button onClick={()=>setPage("import")} style={{ background:"none", border:"1.5px solid #0d2451", borderRadius:10, padding:"8px 20px", color:"#0d2451", fontSize:13, fontWeight:700, cursor:"pointer" }}>Смотреть все →</button>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:16 }}>
              {CARS.filter(c=>c.type==="Из Кореи").map(c=>(
                <CarCard key={c.id} car={c} favs={favs} toggleFav={toggleFav} onClick={setSelCar}/>
              ))}
              <CarCard car={CARS[9]} favs={favs} toggleFav={toggleFav} onClick={setSelCar}/>
            </div>
          </div>
        </div>
      </section>

      {/* ══ STATS BANNER ══ */}
      <section style={{
        backgroundImage:`linear-gradient(135deg,rgba(7,21,41,0.95),rgba(13,36,107,0.90)),url(${IMG.city})`,
        backgroundSize:"cover", backgroundPosition:"center",
        padding:"60px 0",
      }}>
        <div style={{ maxWidth:1400, margin:"0 auto", padding:"0 40px", display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:32, textAlign:"center" }}>
          {[[10000,"клиентов","довольных клиентов"],[5000,"авто","в наличии"],[15,"мин","одобрение заявки"],[0,"%","скрытых платежей"]].map(([n,s,l])=>(
            <div key={l}>
              <div style={{ fontSize:48, fontWeight:900, color:"#fff", letterSpacing:-2 }}><Counter to={n} suffix={s}/></div>
              <div style={{ fontSize:14, color:"rgba(255,255,255,0.55)", marginTop:6 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{ background:"#071529", padding:"48px 0 32px" }}>
        <div style={{ maxWidth:1400, margin:"0 auto", padding:"0 40px" }}>
          <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr", gap:48, marginBottom:40 }}>
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:16 }}>
                <div style={{ width:40, height:40, borderRadius:10, background:"linear-gradient(135deg,#1a3a6b,#2563eb)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:20 }}>🌉</div>
                <div>
                  <div style={{ fontSize:16, fontWeight:900, color:"#fff" }}>CyberCar Auto</div>
                  <div style={{ fontSize:9, color:"rgba(255,255,255,0.4)", letterSpacing:2 }}>ЭКОСИСТЕМА МОБИЛЬНОСТИ</div>
                </div>
              </div>
              <div style={{ fontSize:13, color:"rgba(255,255,255,0.5)", lineHeight:1.7, maxWidth:280 }}>
                Современная платформа для аренды, покупки и привоза автомобилей на самых выгодных условиях.
              </div>
            </div>
            {[
              ["Услуги",["Аренда авто","Под выкуп","Автокредит","Привоз авто"]],
              ["Информация",["О компании","Отзывы","Вакансии","Контакты"]],
              ["Контакты",["+7 (999) 123-45-67","info@cybercar.ru","Ежедневно 9:00–21:00",""]],
            ].map(([t,items])=>(
              <div key={t}>
                <div style={{ fontSize:12, fontWeight:700, color:"rgba(255,255,255,0.5)", letterSpacing:1.5, textTransform:"uppercase", marginBottom:14 }}>{t}</div>
                {items.map((it,i)=>it&&<div key={i} style={{ fontSize:13, color:"rgba(255,255,255,0.7)", marginBottom:10, cursor:"pointer" }}>{it}</div>)}
              </div>
            ))}
          </div>
          <div style={{ borderTop:"1px solid rgba(255,255,255,0.08)", paddingTop:24, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <div style={{ fontSize:12, color:"rgba(255,255,255,0.35)" }}>© 2024 CyberCar Auto. Все права защищены.</div>
            <div style={{ display:"flex", gap:16 }}>
              {["Политика конфиденциальности","Пользовательское соглашение"].map(t=>(
                <div key={t} style={{ fontSize:12, color:"rgba(255,255,255,0.35)", cursor:"pointer" }}>{t}</div>
              ))}
            </div>
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
  const [sort, setSort] = useState("popular");
  const types = ["Все","Аренда","Под выкуп","Кредит","Из Кореи","Привоз"];

  const filtered = CARS.filter(c=>
    (filter==="Все"||c.type===filter) &&
    (c.name.toLowerCase().includes(search.toLowerCase())||c.brand.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div style={{ maxWidth:1400, margin:"0 auto", padding:"100px 40px 60px" }}>
      {/* Breadcrumb */}
      <div style={{ fontSize:12, color:"#94a3b8", marginBottom:20 }}>
        <span style={{ cursor:"pointer", color:"#3b82f6" }}>Главная</span> › Каталог авто
      </div>

      <div style={{ fontSize:32, fontWeight:900, color:"#071529", marginBottom:8, letterSpacing:-.5 }}>Каталог авто</div>
      <div style={{ fontSize:14, color:"#64748b", marginBottom:28 }}>Выберите подходящий автомобиль из нашего каталога</div>

      <div style={{ display:"grid", gridTemplateColumns:"260px 1fr", gap:32 }}>
        {/* Sidebar filters */}
        <div>
          <div style={{ background:"#fff", borderRadius:18, padding:24, boxShadow:"0 2px 16px rgba(13,36,107,0.07)", border:"1px solid rgba(13,36,107,0.07)", position:"sticky", top:90 }}>
            <div style={{ display:"flex", justifyContent:"space-between", marginBottom:20 }}>
              <div style={{ fontSize:15, fontWeight:800, color:"#071529" }}>Фильтры</div>
              <button style={{ background:"none", border:"none", fontSize:12, color:"#3b82f6", fontWeight:700, cursor:"pointer" }}>Сбросить</button>
            </div>

            {/* Type */}
            <div style={{ marginBottom:20 }}>
              <div style={{ fontSize:12, fontWeight:700, color:"#64748b", marginBottom:10, textTransform:"uppercase", letterSpacing:1 }}>Тип услуги</div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:7 }}>
                {types.map(t=>(
                  <div key={t} onClick={()=>setFilter(t)} style={{
                    padding:"6px 13px", borderRadius:20,
                    background: filter===t ? "linear-gradient(135deg,#0d2451,#2563eb)" : "#f1f5f9",
                    color: filter===t ? "#fff" : "#475569",
                    fontSize:12, fontWeight:700, cursor:"pointer", transition:"all .2s",
                  }}>{t}</div>
                ))}
              </div>
            </div>

            {[["Марка",["BMW","Mercedes","Toyota","Hyundai","Kia","Audi","Genesis","Porsche"]],["Модель",[]]].map(([label,opts])=>(
              <div key={label} style={{ marginBottom:20 }}>
                <div style={{ fontSize:12, fontWeight:700, color:"#64748b", marginBottom:8, textTransform:"uppercase", letterSpacing:1 }}>{label}</div>
                <div style={{ background:"#f8fafc", border:"1.5px solid #e2e8f0", borderRadius:10, padding:"10px 14px", fontSize:13, color:"#334155", fontWeight:600, display:"flex", justifyContent:"space-between", cursor:"pointer" }}>
                  Любая {label.toLowerCase()} <span>▾</span>
                </div>
              </div>
            ))}

            {/* Year range */}
            <div style={{ marginBottom:20 }}>
              <div style={{ fontSize:12, fontWeight:700, color:"#64748b", marginBottom:8, textTransform:"uppercase", letterSpacing:1 }}>Год выпуска</div>
              <div style={{ display:"flex", gap:8 }}>
                {[["от","2016"],["до","2024"]].map(([l,v])=>(
                  <div key={l} style={{ flex:1, background:"#f8fafc", border:"1.5px solid #e2e8f0", borderRadius:10, padding:"9px 12px" }}>
                    <div style={{ fontSize:9, color:"#94a3b8", fontWeight:600 }}>{l}</div>
                    <div style={{ fontSize:13, fontWeight:700, color:"#334155" }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Price */}
            <div style={{ marginBottom:20 }}>
              <div style={{ fontSize:12, fontWeight:700, color:"#64748b", marginBottom:8, textTransform:"uppercase", letterSpacing:1 }}>Цена, ₽/мес</div>
              <div style={{ display:"flex", gap:8 }}>
                {[["от","500 000"],["до","10 000 000"]].map(([l,v])=>(
                  <div key={l} style={{ flex:1, background:"#f8fafc", border:"1.5px solid #e2e8f0", borderRadius:10, padding:"9px 12px" }}>
                    <div style={{ fontSize:9, color:"#94a3b8", fontWeight:600 }}>{l}</div>
                    <div style={{ fontSize:12, fontWeight:700, color:"#334155" }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>

            {["Тип кузова","Коробка передач","Топливо"].map(f=>(
              <div key={f} style={{ marginBottom:16 }}>
                <div style={{ fontSize:12, fontWeight:700, color:"#64748b", marginBottom:6, textTransform:"uppercase", letterSpacing:1 }}>{f}</div>
                <div style={{ background:"#f8fafc", border:"1.5px solid #e2e8f0", borderRadius:10, padding:"10px 14px", fontSize:13, color:"#94a3b8", display:"flex", justifyContent:"space-between", cursor:"pointer" }}>
                  Любой <span>▾</span>
                </div>
              </div>
            ))}

            <button onClick={()=>setFilter(filter)} style={{
              width:"100%", padding:"13px",
              background:"linear-gradient(135deg,#0d2451,#2563eb)",
              border:"none", borderRadius:11, color:"#fff", fontSize:13, fontWeight:800, cursor:"pointer",
              boxShadow:"0 4px 16px rgba(13,36,81,0.35)",
            }}>Показать {filtered.length} авто</button>
          </div>
        </div>

        {/* Main grid */}
        <div>
          {/* Top bar */}
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 }}>
            <div style={{ display:"flex", alignItems:"center", gap:12 }}>
              <div style={{ background:"#fff", border:"1.5px solid #e2e8f0", borderRadius:11, padding:"10px 16px", display:"flex", alignItems:"center", gap:8, flex:1, minWidth:280 }}>
                <span style={{ color:"#94a3b8" }}>🔍</span>
                <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Поиск по марке, модели..."
                  style={{ border:"none", outline:"none", fontSize:13, background:"transparent", flex:1, fontFamily:"inherit", color:"#334155" }}/>
                {search && <button onClick={()=>setSearch("")} style={{ background:"none", border:"none", cursor:"pointer", color:"#94a3b8" }}>✕</button>}
              </div>
              <div style={{ fontSize:13, color:"#64748b" }}>Найдено: <b style={{ color:"#0d2451" }}>{filtered.length}</b> авто</div>
            </div>
            <div style={{ display:"flex", alignItems:"center", gap:8 }}>
              <span style={{ fontSize:12, color:"#94a3b8" }}>Сортировка:</span>
              <select value={sort} onChange={e=>setSort(e.target.value)} style={{
                border:"1.5px solid #e2e8f0", borderRadius:9, padding:"8px 12px",
                fontSize:12, color:"#334155", fontWeight:600, background:"#fff", cursor:"pointer",
                outline:"none", fontFamily:"inherit",
              }}>
                <option>Популярные</option>
                <option>Сначала дешевле</option>
                <option>Сначала новее</option>
              </select>
              <div style={{ display:"flex", gap:4 }}>
                {["▦","▤","⊞"].map((ic,i)=>(
                  <button key={i} style={{ width:32, height:32, borderRadius:8, border:"1.5px solid #e2e8f0", background: i===0?"#0d2451":"#fff", color: i===0?"#fff":"#94a3b8", fontSize:14, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>{ic}</button>
                ))}
              </div>
            </div>
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:18 }}>
            {filtered.map(c=>(
              <CarCard key={c.id} car={c} favs={favs} toggleFav={toggleFav} onClick={setSelCar}/>
            ))}
          </div>

          {filtered.length===0 && (
            <div style={{ textAlign:"center", padding:"80px 0" }}>
              <div style={{ fontSize:64 }}>🔍</div>
              <div style={{ fontSize:20, fontWeight:700, color:"#1e293b", marginTop:16 }}>Ничего не найдено</div>
              <div style={{ fontSize:14, color:"#94a3b8", marginTop:6 }}>Попробуйте изменить фильтры</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ═══ PROFILE / DASHBOARD ═══ */
function ProfilePage({ setPage }) {
  const APPS_DATA = [
    { car:"BMW 5 Series",     type:"Под выкуп",  status:"Активна",      sc:"#22c55e", date:"12 мая 2024", pay:"62 000 ₽/мес", term:"36 мес",     img:IMG.bmw     },
    { car:"Toyota Camry",     type:"Аренда авто", status:"Одобрена",    sc:"#3b82f6", date:"15 мая 2024", pay:"33 000 ₽/мес", term:"1 мес",      img:IMG.toyota  },
    { car:"Hyundai Palisade", type:"Привоз авто", status:"В обработке", sc:"#f59e0b", date:"13 мая 2024", pay:"3 200 000 ₽",  term:"12–18 дней", img:IMG.palisade},
  ];

  return (
    <div style={{ maxWidth:1400, margin:"0 auto", padding:"100px 40px 60px", display:"grid", gridTemplateColumns:"260px 1fr", gap:32 }}>
      {/* Sidebar */}
      <div>
        <div style={{ background:"linear-gradient(145deg,#071529,#1a3a6b)", borderRadius:20, padding:24, marginBottom:16, textAlign:"center" }}>
          <div style={{ width:72, height:72, borderRadius:"50%", background:"linear-gradient(135deg,#3b82f6,#60a5fa)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:32, margin:"0 auto 14px", border:"3px solid rgba(255,255,255,0.2)" }}>👤</div>
          <div style={{ fontSize:17, fontWeight:900, color:"#fff" }}>Константин</div>
          <div style={{ fontSize:12, color:"rgba(255,255,255,0.6)", marginTop:3 }}>+7 (999) 123-45-67</div>
          <div style={{ display:"inline-flex", gap:5, alignItems:"center", marginTop:10, background:"rgba(37,99,235,0.3)", padding:"5px 12px", borderRadius:20, border:"1px solid rgba(96,165,250,0.3)" }}>
            <span style={{ fontSize:12 }}>⭐</span>
            <span style={{ fontSize:11, color:"#93c5fd", fontWeight:700 }}>Premium клиент</span>
          </div>
        </div>
        {[["📋","Главная","dashboard"],["📝","Мои заявки","apps"],["🚗","Мои авто","mycar"],["💳","Платежи","pay"],["📄","Документы","docs"],["❤️","Избранное","favs"],["🔔","Уведомления","notif"],["⚙️","Настройки","settings"]].map(([ic,lb,key],i)=>(
          <div key={i} style={{ display:"flex", alignItems:"center", gap:12, padding:"13px 16px", borderRadius:12, marginBottom:4, cursor:"pointer", background:"transparent", transition:"all .2s" }}
            onMouseEnter={e=>e.currentTarget.style.background="#f0f5ff"}
            onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
            <span style={{ fontSize:18 }}>{ic}</span>
            <span style={{ fontSize:13, fontWeight:600, color:"#334155" }}>{lb}</span>
          </div>
        ))}
        <div style={{ marginTop:12 }}>
          <button style={{ width:"100%", padding:"12px", background:"linear-gradient(135deg,#16a34a,#15803d)", border:"none", borderRadius:12, color:"#fff", fontSize:13, fontWeight:800, cursor:"pointer" }}>+ Новая заявка</button>
        </div>
      </div>

      {/* Main */}
      <div>
        <div style={{ fontSize:26, fontWeight:900, color:"#071529", marginBottom:6 }}>Мои заявки</div>
        <div style={{ fontSize:13, color:"#64748b", marginBottom:24 }}>Управляйте вашими заявками и договорами</div>

        {/* Filter tabs */}
        <div style={{ display:"flex", gap:8, marginBottom:24 }}>
          {["Все","Аренда","Под выкуп","Кредит","Привоз авто"].map((t,i)=>(
            <button key={t} style={{
              padding:"8px 18px", borderRadius:22,
              background: i===0 ? "linear-gradient(135deg,#0d2451,#2563eb)" : "#fff",
              color: i===0 ? "#fff" : "#64748b",
              border: i===0 ? "none" : "1.5px solid #e2e8f0",
              fontSize:13, fontWeight:700, cursor:"pointer",
              boxShadow: i===0 ? "0 4px 14px rgba(13,36,81,0.3)" : "none",
            }}>{t}</button>
          ))}
        </div>

        <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
          {APPS_DATA.map((a,i)=>(
            <div key={i} style={{ background:"#fff", borderRadius:18, overflow:"hidden", boxShadow:"0 2px 20px rgba(13,36,107,0.08)", border:"1px solid rgba(13,36,107,0.06)", display:"flex" }}>
              <div style={{ width:160, position:"relative", flexShrink:0 }}>
                <img src={a.img} alt={a.car} style={{ width:"100%", height:"100%", objectFit:"cover" }} onError={e=>e.target.style.display="none"}/>
                <div style={{ position:"absolute", inset:0, background:"linear-gradient(to right, transparent 60%, rgba(255,255,255,0.3))" }}/>
              </div>
              <div style={{ flex:1, padding:"20px 24px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                <div>
                  <div style={{ fontSize:16, fontWeight:900, color:"#071529", marginBottom:3 }}>{a.car}</div>
                  <div style={{ fontSize:12, color:"#64748b", marginBottom:12 }}>{a.type} · {a.date}</div>
                  <div style={{ display:"flex", gap:20 }}>
                    {[["Платёж",a.pay],["Срок",a.term]].map(([k,v])=>(
                      <div key={k}>
                        <div style={{ fontSize:10, color:"#94a3b8" }}>{k}</div>
                        <div style={{ fontSize:14, fontWeight:800, color:"#0d2451" }}>{v}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:12 }}>
                  <div style={{ background:`${a.sc}18`, color:a.sc, fontSize:12, fontWeight:800, padding:"6px 14px", borderRadius:22, border:`1.5px solid ${a.sc}44` }}>{a.status}</div>
                  <button style={{ padding:"10px 22px", background:"linear-gradient(135deg,#0d2451,#2563eb)", border:"none", borderRadius:10, color:"#fff", fontSize:12, fontWeight:800, cursor:"pointer" }}>Подробнее</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick actions */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:14, marginTop:28 }}>
          {[["📝","Новая заявка"],["💰","Рассчитать платёж"],["❤️","Избранное"],["💬","Поддержка 24/7"]].map(([ic,lb])=>(
            <button key={lb} style={{
              background:"#fff", border:"1.5px solid #e2e8f0", borderRadius:14,
              padding:"18px 12px", display:"flex", flexDirection:"column", alignItems:"center", gap:8,
              cursor:"pointer", fontSize:13, fontWeight:700, color:"#1e293b",
              transition:"all .2s",
              boxShadow:"0 2px 10px rgba(13,36,107,0.06)",
            }}>
              <span style={{ fontSize:26 }}>{ic}</span>{lb}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══ IMPORT PAGE ═══ */
function ImportPage({ favs, toggleFav, setSelCar }) {
  const [country, setCountry] = useState("Корея");
  return (
    <div style={{ maxWidth:1400, margin:"0 auto", padding:"100px 40px 60px" }}>
      <div style={{ fontSize:12, color:"#94a3b8", marginBottom:16 }}>
        <span style={{ cursor:"pointer", color:"#3b82f6" }}>Главная</span> › Привоз авто
      </div>
      <div style={{ fontSize:32, fontWeight:900, color:"#071529", marginBottom:6 }}>Привоз авто из-за границы</div>
      <div style={{ fontSize:15, color:"#64748b", marginBottom:32 }}>Подберём, проверим и доставим авто из любой страны под ключ</div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 380px", gap:40 }}>
        <div>
          <div style={{ display:"flex", gap:10, marginBottom:32, flexWrap:"wrap" }}>
            {["Корея","Китай","ОАЭ","Германия","США","Япония"].map(c=>(
              <button key={c} onClick={()=>setCountry(c)} style={{
                padding:"10px 22px", borderRadius:22,
                background: country===c ? "linear-gradient(135deg,#0d2451,#2563eb)" : "#fff",
                color: country===c ? "#fff" : "#64748b",
                border: country===c ? "none" : "1.5px solid #e2e8f0",
                fontSize:13, fontWeight:700, cursor:"pointer",
                boxShadow: country===c ? "0 4px 14px rgba(13,36,81,0.3)" : "none",
              }}>{c}</button>
            ))}
          </div>

          <div style={{ fontSize:18, fontWeight:800, color:"#071529", marginBottom:20 }}>Популярные авто из {country}</div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:18 }}>
            {CARS.filter(c=>c.type==="Из Кореи").map(c=>(
              <CarCard key={c.id} car={c} favs={favs} toggleFav={toggleFav} onClick={setSelCar}/>
            ))}
          </div>

          <div style={{ marginTop:36, display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:14 }}>
            {[["✅","Честные цены","Без скрытых наценок"],["🔍","Сопровождение","От подбора до доставки"],["🛡️","Проверка","По 120+ параметрам"],["⚡","Доставка","От 15 дней"]].map(([ic,t,d])=>(
              <div key={t} style={{ background:"#fff", borderRadius:14, padding:18, boxShadow:"0 2px 12px rgba(13,36,107,0.07)", border:"1px solid rgba(13,36,107,0.06)", textAlign:"center" }}>
                <div style={{ fontSize:28, marginBottom:8 }}>{ic}</div>
                <div style={{ fontSize:13, fontWeight:800, color:"#1e293b", marginBottom:3 }}>{t}</div>
                <div style={{ fontSize:11, color:"#94a3b8" }}>{d}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position:"sticky", top:90 }}>
          <div style={{ background:"#fff", borderRadius:20, padding:28, boxShadow:"0 8px 40px rgba(13,36,107,0.12)", border:"1px solid rgba(13,36,107,0.08)" }}>
            <div style={{ fontSize:17, fontWeight:900, color:"#071529", marginBottom:4 }}>Подобрать авто</div>
            <div style={{ fontSize:12, color:"#94a3b8", marginBottom:20 }}>из {country} под ключ</div>
            {[["Марка","Любая марка"],["Модель","Любая модель"],["Год выпуска","2018 – 2024"]].map(([l,p])=>(
              <div key={l} style={{ marginBottom:12 }}>
                <div style={{ fontSize:11, color:"#64748b", fontWeight:600, marginBottom:5 }}>{l}</div>
                <div style={{ background:"#f8fafc", border:"1.5px solid #e2e8f0", borderRadius:10, padding:"11px 14px", fontSize:13, color:"#334155", fontWeight:600, display:"flex", justifyContent:"space-between", cursor:"pointer" }}>{p} <span style={{color:"#94a3b8"}}>▾</span></div>
              </div>
            ))}
            <button style={{ width:"100%", padding:"14px", background:"linear-gradient(135deg,#0d2451,#2563eb)", border:"none", borderRadius:12, color:"#fff", fontSize:14, fontWeight:800, cursor:"pointer", boxShadow:"0 6px 20px rgba(13,36,81,0.38)", marginTop:4, marginBottom:12 }}>
              Найти авто в {country}
            </button>
            <div style={{ display:"flex", justifyContent:"space-between", padding:"14px 0 0", borderTop:"1px solid #f1f5f9" }}>
              {[["🚢","Морем 15–25 дней"],["✈️","Авиа 3–7 дней"],["🚛","Авто 5–14 дней"]].map(([ic,t])=>(
                <div key={t} style={{ textAlign:"center" }}>
                  <div style={{ fontSize:20 }}>{ic}</div>
                  <div style={{ fontSize:9, color:"#64748b", fontWeight:600, marginTop:3, lineHeight:1.3 }}>{t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══ CREDIT PAGE ═══ */
function CreditPage() {
  return (
    <div style={{ maxWidth:1400, margin:"0 auto", padding:"100px 40px 60px" }}>
      <div style={{ fontSize:12, color:"#94a3b8", marginBottom:16 }}><span style={{ cursor:"pointer", color:"#3b82f6" }}>Главная</span> › Автокредит</div>
      <div style={{ fontSize:32, fontWeight:900, color:"#071529", marginBottom:6 }}>Автокредит</div>
      <div style={{ fontSize:15, color:"#64748b", marginBottom:36 }}>Одобрение за 15 минут · Ставка от 4.9%</div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 420px", gap:48 }}>
        <div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:16, marginBottom:36 }}>
            {[["📊","4.9%","Ставка годовых","linear-gradient(135deg,#eff6ff,#dbeafe)"],["⚡","15 мин","Одобрение","linear-gradient(135deg,#f0fdf4,#dcfce7)"],["📅","7 лет","Срок кредита","linear-gradient(135deg,#fff7ed,#fed7aa)"],["💳","0%","Первый взнос","linear-gradient(135deg,#fdf4ff,#fae8ff)"]].map(([ic,v,l,bg])=>(
              <div key={l} style={{ background:bg, borderRadius:16, padding:"22px", textAlign:"center", border:"1px solid rgba(0,0,0,0.04)" }}>
                <div style={{ fontSize:30, marginBottom:8 }}>{ic}</div>
                <div style={{ fontSize:26, fontWeight:900, color:"#0d2451" }}>от {v}</div>
                <div style={{ fontSize:11, color:"#64748b", marginTop:4 }}>{l}</div>
              </div>
            ))}
          </div>

          <div style={{ fontSize:18, fontWeight:800, color:"#071529", marginBottom:16 }}>Необходимые документы</div>
          {["Паспорт гражданина РФ","Водительское удостоверение","Справка 2-НДФЛ или по форме банка","СТС (при наличии авто)"].map((doc,i)=>(
            <div key={i} style={{ background:"#fff", borderRadius:12, padding:"14px 18px", marginBottom:10, display:"flex", gap:14, alignItems:"center", border:"1.5px solid #f1f5f9" }}>
              <div style={{ width:30, height:30, borderRadius:"50%", background:"linear-gradient(135deg,#eff6ff,#dbeafe)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, fontWeight:900, color:"#2563eb", flexShrink:0 }}>{i+1}</div>
              <span style={{ fontSize:14, color:"#1e293b" }}>{doc}</span>
            </div>
          ))}

          <div style={{ marginTop:28, background:"linear-gradient(135deg,#f8faff,#eff3ff)", borderRadius:18, padding:24, border:"1px solid #e0e9ff" }}>
            <div style={{ fontSize:15, fontWeight:800, color:"#071529", marginBottom:14 }}>Банки-партнёры</div>
            <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
              {["Сбербанк","ВТБ","Альфа-Банк","Тинькофф","Совкомбанк","Россельхоз"].map(b=>(
                <div key={b} style={{ background:"#fff", borderRadius:10, padding:"9px 18px", fontSize:13, fontWeight:700, color:"#334155", border:"1.5px solid #e2e8f0" }}>{b}</div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ position:"sticky", top:90 }}>
          <CalcWidget title="Рассчитать кредит" />
        </div>
      </div>
    </div>
  );
}

/* ═══ APPLY PAGE ═══ */
function ApplyPage() {
  return (
    <div style={{ maxWidth:700, margin:"0 auto", padding:"100px 40px 60px" }}>
      <div style={{ fontSize:32, fontWeight:900, color:"#071529", marginBottom:6 }}>Оставить заявку</div>
      <div style={{ fontSize:14, color:"#64748b", marginBottom:32 }}>Заполните форму — мы перезвоним в течение 15 минут</div>

      <div style={{ background:"#fff", borderRadius:20, padding:36, boxShadow:"0 8px 40px rgba(13,36,107,0.10)", border:"1px solid rgba(13,36,107,0.07)" }}>
        {[["Имя","Ваше имя","text"],["Телефон","+7 (___) ___-__-__","tel"],["Email","email@example.com","email"]].map(([l,p,t])=>(
          <div key={l} style={{ marginBottom:18 }}>
            <div style={{ fontSize:13, fontWeight:700, color:"#334155", marginBottom:6 }}>{l}</div>
            <input type={t} placeholder={p} style={{
              width:"100%", background:"#f8fafc", border:"1.5px solid #e2e8f0",
              borderRadius:11, padding:"13px 16px", fontSize:14, color:"#1e293b",
              outline:"none", fontFamily:"inherit", transition:"border .2s",
            }}
            onFocus={e=>e.target.style.borderColor="#3b82f6"}
            onBlur={e=>e.target.style.borderColor="#e2e8f0"}/>
          </div>
        ))}

        <div style={{ marginBottom:18 }}>
          <div style={{ fontSize:13, fontWeight:700, color:"#334155", marginBottom:6 }}>Тип услуги</div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
            {["Аренда авто","Под выкуп","Автокредит","Привоз авто"].map((s,i)=>(
              <div key={s} style={{
                padding:"12px 16px", borderRadius:11,
                border: i===0 ? "2px solid #2563eb" : "1.5px solid #e2e8f0",
                background: i===0 ? "#eff6ff" : "#f8fafc",
                cursor:"pointer", fontSize:13, fontWeight:700,
                color: i===0 ? "#0d2451" : "#475569",
              }}>{s}</div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom:24 }}>
          <div style={{ fontSize:13, fontWeight:700, color:"#334155", marginBottom:6 }}>Комментарий</div>
          <textarea placeholder="Укажите пожелания по автомобилю..." rows={4} style={{
            width:"100%", background:"#f8fafc", border:"1.5px solid #e2e8f0",
            borderRadius:11, padding:"13px 16px", fontSize:14, color:"#1e293b",
            outline:"none", fontFamily:"inherit", resize:"vertical", boxSizing:"border-box",
          }}
          onFocus={e=>e.target.style.borderColor="#3b82f6"}
          onBlur={e=>e.target.style.borderColor="#e2e8f0"}/>
        </div>

        <button style={{
          width:"100%", padding:"16px",
          background:"linear-gradient(135deg,#0d2451,#2563eb)",
          border:"none", borderRadius:13, color:"#fff",
          fontSize:16, fontWeight:800, cursor:"pointer",
          boxShadow:"0 8px 28px rgba(13,36,81,0.38)",
        }}>Отправить заявку</button>
        <div style={{ textAlign:"center", marginTop:12, fontSize:11, color:"#94a3b8" }}>
          Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
        </div>
      </div>
    </div>
  );
}

/* ═══════════════ MAIN APP ═══════════════ */
export default function CyberCarWebsite() {
  const [page, setPage]       = useState("home");
  const [favs, setFavs]       = useState([1, 3]);
  const [selCar, setSelCar]   = useState(null);

  const toggleFav = (id) => setFavs(p => p.includes(id) ? p.filter(f=>f!==id) : [...p, id]);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const navigate  = (pg) => { setPage(pg); scrollTop(); };

  const PAGES = {
    home:    <HomePage    setPage={navigate} favs={favs} toggleFav={toggleFav} setSelCar={setSelCar}/>,
    catalog: <CatalogPage favs={favs} toggleFav={toggleFav} setSelCar={setSelCar}/>,
    import:  <ImportPage  favs={favs} toggleFav={toggleFav} setSelCar={setSelCar}/>,
    credit:  <CreditPage/>,
    profile: <ProfilePage setPage={navigate}/>,
    apply:   <ApplyPage/>,
    favs:    <CatalogPage favs={favs} toggleFav={toggleFav} setSelCar={setSelCar}/>,
    buyout:  <CatalogPage favs={favs} toggleFav={toggleFav} setSelCar={setSelCar}/>,
    rental:  <CatalogPage favs={favs} toggleFav={toggleFav} setSelCar={setSelCar}/>,
    about:   <HomePage    setPage={navigate} favs={favs} toggleFav={toggleFav} setSelCar={setSelCar}/>,
  };

  return (
    <div style={{ fontFamily:"-apple-system, 'SF Pro Display', BlinkMacSystemFont, 'Helvetica Neue', sans-serif", background:"#f4f7fe", minHeight:"100vh" }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #f1f5f9; }
        ::-webkit-scrollbar-thumb { background: #94a3b8; border-radius: 3px; }
        @keyframes fadeIn  { from{opacity:0} to{opacity:1} }
        @keyframes scaleIn { from{opacity:0;transform:scale(.95)} to{opacity:1;transform:scale(1)} }
        @keyframes floatY  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        input[type=range]  { -webkit-appearance:none; height:4px; background:#e2e8f0; border-radius:4px; outline:none; margin:0; }
        input[type=range]::-webkit-slider-thumb { -webkit-appearance:none; width:20px; height:20px; border-radius:50%; background:linear-gradient(135deg,#0d2451,#2563eb); cursor:pointer; box-shadow:0 2px 8px rgba(13,36,81,0.4); }
        button:active  { opacity:.85; transform:scale(.98)!important; }
        textarea       { -webkit-appearance:none; }
        select         { -webkit-appearance:none; }
      `}</style>

      <Navbar page={page} setPage={navigate} favCount={favs.length}/>

      <main>
        {PAGES[page] || PAGES.home}
      </main>

      {selCar && (
        <CarModal
          car={selCar}
          onClose={()=>setSelCar(null)}
          favs={favs}
          toggleFav={toggleFav}
        />
      )}

      {/* Floating CTA */}
      <div style={{
        position:"fixed", bottom:32, right:32, zIndex:500,
        display:"flex", flexDirection:"column", gap:10, alignItems:"flex-end",
      }}>
        <button onClick={()=>navigate("apply")} style={{
          padding:"13px 24px",
          background:"linear-gradient(135deg,#0d2451,#2563eb)",
          border:"none", borderRadius:50, color:"#fff",
          fontSize:14, fontWeight:800, cursor:"pointer",
          boxShadow:"0 8px 32px rgba(13,36,81,0.45)",
          display:"flex", alignItems:"center", gap:8,
          animation:"floatY 4s ease-in-out infinite",
        }}>📝 Оставить заявку</button>
      </div>
    </div>
  );
}
