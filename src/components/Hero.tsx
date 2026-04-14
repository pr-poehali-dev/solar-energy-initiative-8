import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/cb6c34d4-6b75-460c-9fda-f459de42d022/files/76cbba09-4473-411d-bed3-d722fd0e9bd9.jpg"
          alt="Пожилая женщина у окна"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="uppercase tracking-widest text-sm md:text-base mb-4 opacity-80">
          Платформа для живого общения
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight">
          ШАГ<br />НАВСТРЕЧУ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed">
          Объединяем волонтёров и пожилых людей, чтобы никто в большом городе не чувствовал себя одиноким
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-neutral-900 px-8 py-3 text-sm uppercase tracking-wide font-semibold hover:bg-neutral-200 transition-colors duration-300 cursor-pointer">
            Стать волонтёром
          </button>
          <button className="border border-white text-white px-8 py-3 text-sm uppercase tracking-wide hover:bg-white hover:text-neutral-900 transition-colors duration-300 cursor-pointer">
            Попросить помощь
          </button>
        </div>
      </div>
    </div>
  );
}
