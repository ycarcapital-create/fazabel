import { useState, type FormEvent } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Layers,
  Cpu,
  Headset,
  Menu,
  X,
  Clock,
} from "lucide-react";
import logoMark from "./assets/logo.png";

const ORANGE = "#f47a20";

const IMG = {
  hero: "https://images.pexels.com/photos/30415070/pexels-photo-30415070.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1800",
  control:
    "https://images.pexels.com/photos/30692441/pexels-photo-30692441.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  camera:
    "https://images.pexels.com/photos/5650141/pexels-photo-5650141.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  substation:
    "https://images.pexels.com/photos/25537595/pexels-photo-25537595.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  solder:
    "https://images.pexels.com/photos/37426133/pexels-photo-37426133.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  board:
    "https://images.pexels.com/photos/38145576/pexels-photo-38145576.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  museum:
    "https://images.pexels.com/photos/32607684/pexels-photo-32607684.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  expo: "https://images.pexels.com/photos/11466352/pexels-photo-11466352.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  exchange:
    "https://images.pexels.com/photos/13876964/pexels-photo-13876964.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
};

const NAV = [
  { label: "Главная", active: true, dropdown: false },
  { label: "Услуги", active: false, dropdown: true },
  { label: "Вызов электрика", active: false, dropdown: false },
  { label: "Предпроект", active: false, dropdown: false },
  { label: "Конкурентное предложение", active: false, dropdown: false },
  { label: "Контакты", active: false, dropdown: false },
];

const SUBNAV = [
  "Технические условия",
  "Проект и смета",
  "Поставка и монтаж",
  "Ввод в эксплуатацию",
  "Техническое обслуживание",
];

const DIRECTIONS = [
  {
    tag: "Безопасность · Монтаж",
    title: "Проектирование и монтаж систем безопасности",
    desc: "Видеонаблюдение, СКУД, охранная и пожарная сигнализация. Полный цикл: обследование, проект, монтаж, пусконаладка и сдача.",
    img: IMG.control,
  },
  {
    tag: "Безопасность · Сервис",
    title: "Техническое обслуживание систем безопасности",
    desc: "Плановое обслуживание по договору, регламентные проверки, аварийные выезды. Лицензируемый вид деятельности.",
    img: IMG.camera,
  },
  {
    tag: "Электроснабжение",
    title: "Монтаж и обслуживание систем электроснабжения",
    desc: "Электрощитовые, силовые и осветительные сети, ответственный за электрохозяйство. Работы по ПУЭ и ТКП.",
    img: IMG.substation,
  },
  {
    tag: "Разработка",
    title: "Разработка электронных устройств по заданию",
    desc: "Схемотехника, разводка плат, прошивки и корпусирование. Проектируем устройство под вашу техническую задачу.",
    img: IMG.solder,
  },
  {
    tag: "Производство",
    title: "Производство электронных устройств",
    desc: "Микрофонные массивы, LED-экраны, системы умного дома, щитовое силовое оборудование и щиты освещения.",
    img: IMG.board,
  },
];

const WHY = [
  {
    icon: ShieldCheck,
    title: "Официально и по аттестации/лицензии",
    desc: "Работаем по договору, все виды лицензируемых работ выполняем легально, с актами и гарантией.",
  },
  {
    icon: Layers,
    title: "Полный цикл под ключ",
    desc: "От обследования объекта и проекта до монтажа, пусконаладки и сдачи в эксплуатацию.",
  },
  {
    icon: Cpu,
    title: "Собственное производство",
    desc: "Разрабатываем и выпускаем электронные устройства — от прототипа до серии.",
  },
  {
    icon: Headset,
    title: "Поддержка 24/7",
    desc: "Сервисное сопровождение объектов и аварийные выезды по договору обслуживания.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Заявка и обследование",
    desc: "Обсуждаем задачу, выезжаем на объект, фиксируем условия и требования.",
  },
  {
    n: "02",
    title: "Проект и смета",
    desc: "Готовим техническое решение, спецификацию оборудования и прозрачную смету.",
  },
  {
    n: "03",
    title: "Монтаж и наладка",
    desc: "Выполняем работы силами штатных инженеров, проводим пусконаладку.",
  },
  {
    n: "04",
    title: "Сдача и сервис",
    desc: "Оформляем документы, обучаем персонал, берём объект на обслуживание.",
  },
];

const OBJECTS = [
  {
    title: "Национальный музей истории Беларуси",
    desc: "Система управления освещением DALI, монтаж систем освещения",
    img: IMG.museum,
  },
  {
    title: "Минский международный выставочный центр",
    desc: "Монтаж и наладка архитектурно-художественной подсветки",
    img: IMG.expo,
  },
  {
    title: "Белорусская валютно-фондовая биржа",
    desc: "Электроснабжение · видеонаблюдение · контроль и управление доступом · адресная охранная и пожарная сигнализация · Аспирационная система пожарной сигнализации",
    img: IMG.exchange,
  },
];

const REVIEWS = [
  {
    text: "Сделали видеонаблюдение и СКУД на весь центр под ключ. Проект, монтаж и документы — без нашего участия. Работает без сбоев второй год.",
    name: "Андрей Ковалёв",
    role: "Управляющий бизнес-центром",
    object: "Офисный центр, 4 200 м²",
  },
  {
    text: "Обслуживают охранную и пожарную сигнализацию по договору. Аварийный выезд реально быстрый, штрафов от МЧС больше нет.",
    name: "Ирина Мельник",
    role: "Директор торговой сети",
    object: "Сеть магазинов, 6 объектов",
  },
  {
    text: "Смонтировали электрощитовые и кабельные линии с соблюдением ПУЭ. Цена вышла заметно ниже, чем у других подрядчиков.",
    name: "Сергей Дубина",
    role: "Главный инженер склада",
    object: "Логистический комплекс, 12 000 м²",
  },
  {
    text: "Поставили домофонию и видеонаблюдение во дворе. Понравилось, что всё официально: договор, акты, гарантия на работы.",
    name: "Наталья Гурская",
    role: "Председатель ТСЖ",
    object: "Жилой комплекс",
  },
  {
    text: "Разрабатывали для нас контроллер под задачу и запустили небольшую серию. Уложились в сроки, прототип согласовывали поэтапно.",
    name: "Дмитрий Раков",
    role: "Владелец производства",
    object: "Цех, 1 800 м²",
  },
  {
    text: "Комплексная система безопасности на большой объект. Отдельно ценю круглосуточную техподдержку — всегда на связи.",
    name: "Ольга Сазонова",
    role: "Администратор ТЦ",
    object: "Торговый центр, 28 000 м²",
  },
];

function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <img
        src={logoMark}
        alt=""
        width={40}
        height={37}
        className="h-10 w-10 shrink-0 object-contain"
      />
      <div className="leading-none">
        <div className="text-[17px] font-extrabold tracking-tight">ФАЗА.БЕЛ</div>
        <div className="mt-1 text-[8px] font-medium tracking-[0.18em] text-white/50">
          ЭНЕРГО•ИНЖИНИРИНГ
        </div>
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-[#15171b] text-white">
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-1.5 text-[10px] text-white/50">
          <span>fazabel.by</span>
          <div className="flex items-center gap-5">
            <span>info@fazabel.by</span>
            <span>+375 (29) 10-60-170</span>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3">
        <a href="#top">
          <Logo />
        </a>
        <nav className="hidden items-center gap-6 text-[12px] xl:flex">
          {NAV.map((item) => (
            <a
              key={item.label}
              href="#"
              className="flex items-center gap-1 whitespace-nowrap transition hover:text-[#f47a20]"
              style={{ color: item.active ? ORANGE : "rgba(255,255,255,0.85)" }}
            >
              {item.label}
              {item.dropdown && <ChevronDown size={12} />}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden items-center whitespace-nowrap rounded-md px-4 py-2 text-[12px] font-semibold text-white transition hover:brightness-110 md:flex"
            style={{ background: ORANGE }}
          >
            Заказать звонок
          </a>
          <button className="xl:hidden" onClick={() => setOpen(!open)} aria-label="Меню">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      <div className="hidden border-t border-white/10 md:block">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-1 px-5 py-2 text-[10px] uppercase tracking-[0.08em] text-white/70">
          {SUBNAV.map((s) => (
            <a key={s} href="#" className="transition hover:text-[#f47a20]">
              {s}
            </a>
          ))}
        </div>
      </div>
      {open && (
        <div className="border-t border-white/10 px-5 py-4 xl:hidden">
          <div className="flex flex-col gap-3 text-sm">
            {NAV.map((item) => (
              <a key={item.label} href="#" className="text-white/85">
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 rounded-md px-4 py-2 text-center font-semibold"
              style={{ background: ORANGE }}
            >
              Заказать звонок
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden text-white">
      <img src={IMG.hero} alt="Электроустановка" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0e1013] via-[#0e1013]/85 to-[#0e1013]/45" />
      <div className="relative mx-auto flex max-w-7xl flex-col px-5 pb-28 pt-20 md:pt-28">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-medium tracking-wide text-white/80 backdrop-blur">
          <MapPin size={12} style={{ color: ORANGE }} />
          Работаем по всей Беларуси
        </span>
        <p className="mt-7 text-xl font-semibold md:text-2xl" style={{ color: ORANGE }}>
          Инженерные системы под ключ
        </p>
        <h1 className="mt-2 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight md:text-6xl">
          Электроснабжение объекта: легальность работ и безопасность эксплуатации
        </h1>
        <p className="mt-6 max-w-2xl text-[11px] leading-relaxed tracking-[0.12em] text-white/60">
          ПРОЕКТИРОВАНИЕ • МОНТАЖ • НАЛАДКА • ЭФИ • ВВОД В ЭКСПЛУАТАЦИЮ (ДОПУСК)
          <br />
          ОБСЛУЖИВАНИЕ • ТЕКУЩИЙ РЕМОНТ ЭЛЕКТРОУСТАНОВОК
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="rounded-md px-7 py-3.5 text-sm font-semibold text-white transition hover:brightness-110"
            style={{ background: ORANGE }}
          >
            Оставить заявку
          </a>
          <a
            href="#directions"
            className="rounded-md border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#15171b]"
          >
            Наши направления
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionHead({
  label,
  title,
  text,
  center = false,
  dark = false,
}: {
  label: string;
  title: string;
  text?: string;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}>
      <p className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: ORANGE }}>
        {label}
      </p>
      <h2
        className={`mt-2 text-3xl font-extrabold tracking-tight md:text-4xl ${
          dark ? "text-white" : "text-[#15171b]"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p className={`mt-3 text-[15px] leading-relaxed ${dark ? "text-white/60" : "text-[#5d6168]"}`}>
          {text}
        </p>
      )}
    </div>
  );
}

function Directions() {
  return (
    <section id="directions" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead
          label="Направления"
          title="Основные направления — один надёжный подрядчик"
          text="Комплексно закрываем инженерные задачи объекта: от систем безопасности и электроснабжения до разработки и производства собственной электроники."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DIRECTIONS.map((d) => (
            <article
              key={d.title}
              className="group flex flex-col overflow-hidden border border-[#e7e8ea] bg-white transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={d.img}
                  alt={d.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1013]/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                  {d.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold leading-snug text-[#15171b]">{d.title}</h3>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-[#5d6168]">{d.desc}</p>
                <a
                  href="#"
                  className="mt-6 flex items-center justify-center gap-2 rounded-md py-3 text-sm font-semibold text-white transition hover:brightness-110"
                  style={{ background: ORANGE }}
                >
                  Подробнее <ArrowRight size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="bg-[#f3f4f6] py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead
          label="Почему мы"
          title="Работаем строго, прозрачно и в срок"
          text="Масштаб объекта не имеет значения — подход к качеству и документам одинаковый для всех."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {WHY.map((w) => {
            const Icon = w.icon;
            return (
              <div key={w.title} className="bg-white p-7">
                <div
                  className="grid h-11 w-11 place-items-center rounded-md"
                  style={{ background: "rgba(244,122,32,0.12)", color: ORANGE }}
                >
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-[16px] font-bold leading-snug text-[#15171b]">{w.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[#5d6168]">{w.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead label="Процесс" title="Как мы ведём проект" text="Понятные этапы работы с фиксацией результата на каждом шаге." />
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.n} className="relative border-t-2 pt-6" style={{ borderColor: ORANGE }}>
              <span className="text-4xl font-extrabold" style={{ color: ORANGE }}>
                {s.n}
              </span>
              <h3 className="mt-4 text-lg font-bold text-[#15171b]">{s.title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-[#5d6168]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Objects() {
  return (
    <section className="bg-[#f3f4f6] py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead
          label="Наши работы"
          title="Объекты, которые мы оснастили"
          text="Реализуем проекты любой сложности — от отдельного магазина до крупных промышленных и торговых комплексов."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {OBJECTS.map((o) => (
            <article key={o.title} className="group relative h-[340px] overflow-hidden bg-[#15171b]">
              <img
                src={o.img}
                alt={o.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1013] via-[#0e1013]/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-lg font-bold leading-snug">{o.title}</h3>
                <p className="mt-2 text-[12px] leading-relaxed text-white/70">{o.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead
          label="Отзывы"
          title="Нам доверяют объекты и повторные заказы"
          text="Часть клиентов работает с нами годами — от разовых монтажей до постоянного сервисного обслуживания."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure key={r.name} className="flex flex-col border border-[#e7e8ea] bg-white p-7">
              <div className="flex gap-1" style={{ color: ORANGE }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-sm">★</span>
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-[14px] leading-relaxed text-[#3b3f46]">
                «{r.text}»
              </blockquote>
              <figcaption className="mt-6 border-t border-[#ececec] pt-5">
                <div className="font-bold text-[#15171b]">{r.name}</div>
                <div className="text-[13px] text-[#5d6168]">{r.role}</div>
                <div className="mt-1 text-[12px] font-semibold" style={{ color: ORANGE }}>
                  {r.object}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", phone: "", message: "" });
  };

  const inputCls =
    "mt-1.5 w-full border border-[#dfe1e4] bg-white px-4 py-3 text-sm text-[#15171b] outline-none transition placeholder:text-[#a4a8ae] focus:border-[#f47a20]";

  return (
    <div className="bg-white p-8 text-[#15171b] md:p-10">
      <h3 className="text-2xl font-extrabold">Оставьте заявку</h3>
      <p className="mt-2 text-[14px] leading-relaxed text-[#5d6168]">
        Заполните форму — инженер перезвонит, ответит на вопросы и рассчитает стоимость.
      </p>
      <form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-4">
        <label className="text-[13px] font-semibold">
          Имя
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Как к вам обращаться"
            className={inputCls}
          />
        </label>
        <label className="text-[13px] font-semibold">
          Телефон
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+375 (__) ___-__-__"
            className={inputCls}
          />
        </label>
        <label className="text-[13px] font-semibold">
          Сообщение
          <textarea
            rows={3}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Коротко опишите задачу или объект"
            className={`${inputCls} resize-none`}
          />
        </label>
        <button
          type="submit"
          className="mt-2 w-full py-3.5 text-sm font-semibold text-white transition hover:brightness-110"
          style={{ background: ORANGE }}
        >
          Оставить заявку
        </button>
        {sent && (
          <p className="text-center text-[13px] font-semibold" style={{ color: ORANGE }}>
            Спасибо! Инженер свяжется с вами в ближайшее время.
          </p>
        )}
        <p className="text-center text-[11px] text-[#8a8f96]">
          Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
        </p>
      </form>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-[#15171b] py-20 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
        <div>
          <SectionHead
            label="Свяжитесь с нами"
            title="Обсудим ваш объект"
            text="Оставьте заявку — инженер свяжется с вами, уточнит задачу и подготовит расчёт стоимости работ."
            dark
          />
          <div className="mt-10 flex flex-col gap-5">
            <a href="tel:+375291060170" className="flex items-center gap-4 text-lg font-semibold">
              <span className="grid h-11 w-11 place-items-center rounded-md" style={{ background: ORANGE }}>
                <Phone size={18} />
              </span>
              +375 (29) 10-60-170
            </a>
            <a href="mailto:info@fazabel.by" className="flex items-center gap-4 text-base text-white/85">
              <span className="grid h-11 w-11 place-items-center rounded-md bg-white/10">
                <Mail size={18} style={{ color: ORANGE }} />
              </span>
              info@fazabel.by
            </a>
            <div className="flex items-center gap-4 text-sm text-white/70">
              <span className="grid h-11 w-11 place-items-center rounded-md bg-white/10">
                <Clock size={18} style={{ color: ORANGE }} />
              </span>
              Пн–Пт 9:00–18:00 · аварийный выезд по договору 24/7
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t-2 bg-[#0e1013] text-white" style={{ borderColor: ORANGE }}>
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-[13px] leading-relaxed text-white/60">
            Инженерные системы под ключ с 2021 года. Официально, с гарантией на работы.
          </p>
          <p className="mt-4 text-[12px] text-white/40">fazabel.by</p>
        </div>
        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">Разделы</h4>
          <ul className="mt-5 flex flex-col gap-3 text-[14px] text-white/80">
            {["Главная", "Услуги", "Электрика", "Разработка", "Производство", "Контакты"].map((l) => (
              <li key={l}>
                <a href="#" className="transition hover:text-[#f47a20]">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">Контакты</h4>
          <ul className="mt-5 flex flex-col gap-4 text-[14px] text-white/80">
            <li className="flex items-center gap-3">
              <Phone size={15} style={{ color: ORANGE }} /> +375 (29) 10-60-170
            </li>
            <li className="flex items-center gap-3">
              <Mail size={15} style={{ color: ORANGE }} /> info@fazabel.by
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={15} style={{ color: ORANGE }} /> Республика Беларусь, г. Минск
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-[12px] text-white/40 md:flex-row">
          <span>© 2026 СоюзДронСтрой. Все права защищены.</span>
          <span>fazabel.by</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#15171b] antialiased">
      <Header />
      <Hero />
      <Directions />
      <WhyUs />
      <Process />
      <Objects />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}
