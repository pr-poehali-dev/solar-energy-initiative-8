import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "MapPin",
    title: "Карта общения",
    desc: "Найди пожилых людей рядом с тобой, которые ждут новых знакомств и готовы к общению",
  },
  {
    icon: "CalendarDays",
    title: "Календарь встреч",
    desc: "Прогулки, мастер-классы, чаепития — живые мероприятия для тех, кто хочет быть в кругу людей",
  },
  {
    icon: "HandHeart",
    title: "Запросы на помощь",
    desc: "Сходить в магазин, помочь с техникой или просто поговорить — любая просьба найдёт отклик",
  },
  {
    icon: "MessageCircle",
    title: "Чат сообщества",
    desc: "Волонтёры и кураторы на связи: координируем помощь, делимся опытом и поддерживаем друг друга",
  },
];

export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-16 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-12 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/cb6c34d4-6b75-460c-9fda-f459de42d022/files/91fc05df-2c09-49a8-bd99-1bff0717de80.jpg"
          alt="Встреча сообщества в парке"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-16 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-widest text-neutral-500">
          Что мы делаем
        </h3>
        <p className="text-2xl lg:text-4xl mb-10 text-neutral-900 leading-tight font-light">
          Одиночество в большом городе — не приговор.
          Мы строим мосты между поколениями, один шаг навстречу за раз.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {features.map((f) => (
            <div key={f.title} className="flex gap-3 items-start">
              <div className="mt-0.5 shrink-0 text-neutral-700">
                <Icon name={f.icon} size={20} />
              </div>
              <div>
                <p className="font-semibold text-neutral-900 mb-1">{f.title}</p>
                <p className="text-sm text-neutral-500 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-black text-white border border-black px-6 py-3 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Узнать больше
        </button>
      </div>
    </div>
  );
}
