const medoids = [
  {
    "business_name": "Ryshelie",
    "owner": "Mariia",
    "category": "Текстиль",
    "description": "Постільна білизна преміум-класу",
    "link": "https://ryshelie.com/"
  },
  {
    "business_name": "Globalpost",
    "owner": "Дмитро Колосовський",
    "category": "Логістика",
    "description": "Міжнародна доставка та логістика",
    "link": "https://globalpost.ua/"
  },
  {
    "business_name": "Books-P",
    "owner": "Aleksey",
    "category": "Книги",
    "description": "Книжковий магазин, друк книг",
    "link": "https://www.books-p.com/uk/"
  },
  {
    "business_name": "Star Energy Trade",
    "owner": "Олег Попенко",
    "category": "Енергетика",
    "description": "Електроенергія для юр. осіб за вигідними цінами",
    "link": "mailto:starenergytrade@gmail.com"
  },
  {
    "business_name": "Інженер-проектувальник",
    "owner": "Проскурня Михайло",
    "category": "Інженерія",
    "description": "Проектування систем опалення та вентиляції",
    "link": "https://www.linkedin.com/in/mykhailo-proskurnia-90b461217/"
  },
  {
    "business_name": "Husse Ukraine",
    "owner": "Dmytro Tarasiuk",
    "category": "Тварини",
    "description": "Шведський сухий корм для собак і котів",
    "link": "https://www.husse.ua/"
  },
  {
    "business_name": "Компонент-Р",
    "owner": "Oleksii",
    "category": "Виробництво",
    "description": "Переробка ПВХ та інших полімерів",
    "link": "https://komponentr.kyiv.ua/ua/"
  },
  {
    "business_name": "Lukas Kids",
    "owner": "Луцька Наталія",
    "category": "Одяг",
    "description": "Одяг для дівчаток, шкільна форма",
    "link": "https://lukas-kids.com/"
  },
  {
    "business_name": "Zeus Agency",
    "owner": "Igor",
    "category": "Маркетинг",
    "description": "Digital marketing та просування бізнесу",
    "link": "https://zeus-agency.com.ua/"
  },
  {
    "business_name": "NLP Master",
    "owner": "Олександр Антиков",
    "category": "Психологія",
    "description": "Психолог, методолог, тренер",
    "link": "https://www.facebook.com/aleksandr.antykov"
  },
  {
    "business_name": "Нерухомість Львів",
    "owner": "Bagirova Oksana",
    "category": "Нерухомість",
    "description": "Професійний рієлтор у місті Львів",
    "link": "https://t.me/neruhomist_lviv23"
  },
  {
    "business_name": "S2S Tools",
    "owner": "Андрій Писаренко",
    "category": "IT / ERP",
    "description": "Українська FSM-система для управління сервісом",
    "link": "https://www.s2s.tools/"
  },
  {
    "business_name": "Вент Хоум",
    "owner": "Виталій",
    "category": "Інженерія",
    "description": "Кліматичне та вентиляційне обладнання",
    "link": "https://ventklimat.com/"
  },
  {
    "business_name": "Agrar Media",
    "owner": "Олександр Білецький",
    "category": "Книги",
    "description": "Друк книг, журналів та методичок",
    "link": "https://agrarmedia.com/"
  },
  {
    "business_name": "ERP Guardians",
    "owner": "Макс Пономарев",
    "category": "IT / ERP",
    "description": "Впровадження Microsoft Dynamics 365 F&O",
    "link": "https://www.erpguardians.com"
  },
  {
    "business_name": "SDC Group",
    "owner": "Veronika Bunevich",
    "category": "Будівництво",
    "description": "Будівельно-ремонтні роботи",
    "link": "https://sdcgroup.com.ua/"
  },
  {
    "business_name": "Urban Flowers",
    "owner": "Sergey Filonenko",
    "category": "Товари",
    "description": "Магазин інтимних товарів",
    "link": "https://urbanflowers.com.ua/"
  },
  {
    "business_name": "Skvospace",
    "owner": "Костянтин Борисов",
    "category": "Дизайн",
    "description": "Створення просторів зі смислом",
    "link": "https://www.instagram.com/skvospace"
  },
  {
    "business_name": "Family Cosmetics",
    "owner": "Viacheslav Kuzmin",
    "category": "Краса",
    "description": "Український бренд засобів для волосся",
    "link": "https://www.instagram.com/familycosmeticsrecipe"
  },
  {
    "business_name": "Бухгалтерія",
    "owner": "Елена Кистрица",
    "category": "Послуги",
    "description": "Оподаткування та бухгалтерський облік",
    "link": "https://t.me/KistritsaOlena"
  },
  {
    "business_name": "Aquamarine Touristik",
    "owner": "Владимир Гапон",
    "category": "Туризм",
    "description": "Відпочинок та туристичні подорожі",
    "link": "https://www.instagram.com/aquamarinetouristik"
  },
  {
    "business_name": "Театр Маскам Рад",
    "owner": "Viktor Ko",
    "category": "Культура",
    "description": "Київський театр «Маскам Рад»",
    "link": "https://www.facebook.com/MaskamRad"
  },
  {
    "business_name": "Agile Consultant",
    "owner": "Mykhailo Shteinbok",
    "category": "Менеджмент",
    "description": "Впровадження гнучких методологій Agile/Scrum",
    "link": "https://t.me/Kaiser_I"
  },
  {
    "business_name": "Переклади та Мови",
    "owner": "Мирослава",
    "category": "Освіта",
    "description": "Нотаріальні переклади та уроки мов",
    "link": "https://t.me/MyroslavaNevirkovets"
  },
  {
    "business_name": "Світ Терас",
    "owner": "Андрій",
    "category": "Будівництво",
    "description": "Будівництво та облаштування терас",
    "link": "https://www.instagram.com/svit.teras_ukraine"
  },
  {
    "business_name": "Дідусь Мухомор",
    "owner": "Сергей Душин",
    "category": "Здоров'я",
    "description": "Функціональні гриби",
    "link": "https://t.me/dedushka_muhomor"
  },
  {
    "business_name": "Імідж-М",
    "owner": "Володимир Івченко",
    "category": "Маркетинг",
    "description": "Рекламно-виробнича компанія",
    "link": "http://www.imidg-m.com.ua"
  },
  {
    "business_name": "Психологія",
    "owner": "Tamara Gridina",
    "category": "Психологія",
    "description": "Коуч та спеціаліст з профайлінгу",
    "link": "https://www.instagram.com/tamara_gridina_"
  },
  {
    "business_name": "Fermentari",
    "owner": "Anna Ivanenko-Puryk",
    "category": "Продукти",
    "description": "Ферментовані овочі",
    "link": "https://www.fermentari.com/"
  },
  {
    "business_name": "Вініл",
    "owner": "Besarab Records",
    "category": "Товари",
    "description": "Магазин вінілових платівок",
    "link": "https://besarab-records.com/"
  },
  {
    "business_name": "Catman Retail",
    "owner": "Svitlana Dmitriyeva",
    "category": "Консалтинг",
    "description": "Розвиток торгових компаній",
    "link": "https://www.catmanretail.com/"
  },
  {
    "business_name": "Ayurveda4you",
    "owner": "Жанна Максимова",
    "category": "Здоров'я",
    "description": "Інтернет-магазин аюрведи",
    "link": "http://ayurveda4you.in.ua"
  },
  {
    "business_name": "Tattoo Saga",
    "owner": "Юля",
    "category": "Краса",
    "description": "Професійний тату-майстер",
    "link": "https://www.instagram.com/tattoo.saga"
  },
  {
    "business_name": "Смаколики Одеса",
    "owner": "Ольга",
    "category": "Продукти",
    "description": "Натуральна пастила",
    "link": "https://www.instagram.com/pastila_odessa_ol"
  },
  {
    "business_name": "LU Group Customs",
    "owner": "Fabricio Del Dongo",
    "category": "Логістика",
    "description": "Митно-брокерські послуги",
    "link": "https://www.lugroupcustoms.com"
  },
  {
    "business_name": "Handmade Silver",
    "owner": "Svitlana Yakovytska",
    "category": "Товари",
    "description": "Срібні прикраси ручної роботи",
    "link": "https://www.instagram.com/svetlana_yakovitskaya"
  },
  {
    "business_name": "IT Entrepreneur",
    "owner": "Alexander Zharenov",
    "category": "IT / ERP",
    "description": "MarTech-спеціаліст",
    "link": "https://www.linkedin.com/in/al-zh/"
  },
  {
    "business_name": "Target Specialist",
    "owner": "Микола Павелко",
    "category": "Маркетинг",
    "description": "Реклама FB, Insta, TikTok, Google",
    "link": "https://t.me/pmv_target"
  },
  {
    "business_name": "AI Agent Dev",
    "owner": "Андрій Шкабко",
    "category": "IT / AI",
    "description": "Розробка AI-агентів",
    "link": "https://t.me/andreyshkabko"
  },
  {
    "business_name": "Logo-S",
    "owner": "Igor Garry",
    "category": "Подарунки",
    "description": "Солодкі подарунки з логотипом",
    "link": "https://logo-s.com.ua/"
  }
];
