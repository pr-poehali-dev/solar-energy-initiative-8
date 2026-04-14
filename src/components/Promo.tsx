import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const episodes = [
  { num: "01", title: "Случайная встреча", text: "Максим доставляет заказ и встречает Анну Петровну. Чашка чая и 15 минут разговора меняют всё." },
  { num: "02", title: "Первый шаг", text: "Тронутый встречей, Максим регистрируется волонтёром и начинает навещать Анну Петровну каждую неделю." },
  { num: "03", title: "Расширение круга", text: "Анна Петровна знакомится с соседом Игорем на встрече в парке. Рождается идея клуба для пожилых." },
  { num: "04", title: "Новая жизнь", text: "«Ты вернул мне не просто компанию, а смысл жить дальше» — говорит Анна Петровна Максиму." },
];

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/cb6c34d4-6b75-460c-9fda-f459de42d022/files/c2349322-ec97-45a1-a227-8119b2556fad.jpg"
            alt="Москва с высоты"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      </div>

      <div className="relative z-10 px-6 py-16 max-w-5xl mx-auto w-full">
        <h3 className="text-white uppercase tracking-widest text-sm mb-12 opacity-70">
          История одной встречи
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {episodes.map((ep) => (
            <div key={ep.num} className="border border-white/20 p-6 hover:border-white/50 transition-colors duration-300">
              <span className="text-white/40 text-xs uppercase tracking-widest mb-3 block">
                Эпизод {ep.num}
              </span>
              <h4 className="text-white text-xl font-semibold mb-3">{ep.title}</h4>
              <p className="text-white/70 text-sm leading-relaxed">{ep.text}</p>
            </div>
          ))}
        </div>
        <p className="text-white/60 text-lg md:text-2xl mt-12 max-w-2xl leading-relaxed">
          Таких историй — тысячи. И каждая начинается с одного маленького шага навстречу другому человеку.
        </p>
      </div>
    </div>
  );
}
