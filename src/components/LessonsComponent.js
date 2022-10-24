import CardComponent from "./CardComponent";

function LessonsComponent(){

    const wordsToLearn1 = {
        words: [
        {eng: 'Humidity',
        ukr: 'Вологість'},
        {eng: 'Humid',
        ukr: 'Вологий, сирий'},
        {eng: 'Stuffy',
        ukr: 'Душний, задушливий'},
        {eng: 'Feature',
        ukr: 'Особливість, риса'},
        {eng: 'To master',
        ukr: 'Опановувати'},
        {eng: 'Let down',
        ukr: 'Підводити, розчаровувати'},
        {eng: 'Tendency',
        ukr: 'Тендеція, схильність'},
        {eng: 'Up-and-coming',
        ukr: 'Багатообіцяючий, перспективний'},
        {eng: 'Neglect',
        ukr: 'Зневажати, нехтувати'},
        {eng: 'Negligence',
        ukr: 'Недбалість, халатність'},
        {eng: 'Lenient',
        ukr: 'М\'який, поблажливий'},
        {eng: 'Show off',
        ukr: 'Випендрюватися'},
        {eng: 'Picky',
        ukr: 'Прискіпливий'},
        {eng: 'Solve',
        ukr: 'Вирішувати (проблему, задачу)'},
        {eng: 'Resentment',
        ukr: 'Обурення, образа'},
        {eng: 'Resentful',
        ukr: 'Ображений, обурений'},
        {eng: 'On the safe side',
        ukr: 'Про всяк випадок'},
        {eng: 'Resent',
        ukr: 'Обурюватися, ображатися'},
        {eng: 'Dean',
        ukr: 'Декан, настоятель собору'},
        {eng: 'Callous',
        ukr: 'Черствий, безсердечний'},
        {eng: 'To bribe',
        ukr: 'Давати хабар'},
        {eng: 'Bribery',
        ukr: 'Хабарництво, продажність'},
        {eng: 'Restrict',
        ukr: 'Обмежувати'},
        {eng: 'Strict',
        ukr: 'Суворий, вимогливий'},
        {eng: 'Hypocrite',
        ukr: 'Лицемір'},
        {eng: 'Spit',
        ukr: 'Плювати'},
        {eng: 'Footage',
        ukr: 'Метраж, кадри'},
        {eng: 'Heritage',
        ukr: 'Спадщина, спадок'},
        {eng: 'Inherit',
        ukr: 'Успадковувати'},
        {eng: 'Goldsmith',
        ukr: 'Ювелір'},
        {eng: 'Insription',
        ukr: 'Напис'},
        {eng: 'Tie',
        ukr: 'Краватка, зав\'язвувати'},
        {eng: 'Untie',
        ukr: 'Розв\'язувати'},
        {eng: 'Flame',
        ukr: 'Полум\'я'},
        {eng: 'Inflammation',
        ukr: 'Запалення'}
      ],
      lesson: 1};

      const wordsToLearn2 = {
        words: [
        {eng: 'Brew',
        ukr: 'Заварювати'},
        {eng: 'Lace',
        ukr: 'Мереживо, шнурок'},
        {eng: 'Bootlace',
        ukr: 'Шнурок'},
        {eng: 'Collar',
        ukr: 'Комір'},
        {eng: 'Sleeve',
        ukr: 'Рукав'},
        {eng: 'Psyche',
        ukr: 'Психіка'},
        {eng: 'Remorse',
        ukr: 'Каяття, муки сумління'},
        {eng: 'Flatter',
        ukr: 'Підлещуватися'},
        {eng: 'Abundant',
        ukr: 'Рясний, багатий'},
        {eng: 'Decoy',
        ukr: 'Приманка, пастка'},
        {eng: 'Insecurity',
        ukr: 'Невпевненість'},
        {eng: 'Inferirority complex',
        ukr: 'Комплекс неповноцінності'},
        {eng: 'Inmate',
        ukr: 'В\'язень'},
        {eng: 'Immerse',
        ukr: 'Занурювати, поринути'},
        {eng: 'Deprive of',
        ukr: 'Позбавляти, відбирати'},
        {eng: 'To great extent',
        ukr: 'Значною мірою'},
        {eng: 'To some extent',
        ukr: 'Певною мірою'},
        {eng: 'Exceed',
        ukr: 'Перевищувати'},
        {eng: 'Excess',
        ukr: 'Надлишок'},
        {eng: 'Sue',
        ukr: 'Подавати в суд'},
        {eng: 'Lawsuit',
        ukr: 'Судовий процес'},
        {eng: 'Fine',
        ukr: 'Штраф, штрафувати'},
        {eng: 'Violate',
        ukr: 'Порушувати'},
        {eng: 'Fare',
        ukr: 'Плата за проїзд'},
        {eng: 'Entrance',
        ukr: 'Вхід'},
        {eng: 'Treat',
        ukr: 'Лікувати'},
        {eng: 'Freak Out',
        ukr: 'Психувати'},
        {eng: 'Ram',
        ukr: 'Таранити'},
        {eng: 'Biased',
        ukr: 'Упереджений'},
        {eng: 'Intentionally',
        ukr: 'Навмисно'},
        {eng: 'Deleberately',
        ukr: 'Навмисно'},
        {eng: 'By chance',
        ukr: 'Випадково'},
        {eng: 'Accidentally',
        ukr: 'Випадково'},
        {eng: 'Blow over',
        ukr: 'Минати, проходити'},
        {eng: 'Inequality',
        ukr: 'Нерівність'},
        {eng: 'Minor',
        ukr: 'Незначний'},
        {eng: 'Major',
        ukr: 'Основний'},
        {eng: 'Riot',
        ukr: 'Бунт, повстання'},
        {eng: 'Rebellion',
        ukr: 'Повстання'},
        {eng: 'Fulfil',
        ukr: 'Виконувати'},
        {eng: 'Carry out',
        ukr: 'Виконувати'}
      ],
      lesson:2};

      const wordsToLearn3 = {
        words: [
        {eng: 'Harvest',
        ukr: 'Врожай'},
        {eng: 'Pole',
        ukr: 'Стовб'},
        {eng: 'Chase',
        ukr: 'Переслідувати'},
        {eng: 'Persue',
        ukr: 'Переслідувати'},
        {eng: 'Get on with',
        ukr: 'Ладити'},
        {eng: 'Superficial',
        ukr: 'Поверхневий'},
        {eng: 'Lag behind',
        ukr: 'Відставати'},
        {eng: 'Fall behind',
        ukr: 'Відставати'},
        {eng: 'Deceive',
        ukr: 'Обманювати'},
        {eng: 'Deception',
        ukr: 'Обман, шахрайство'},
        {eng: 'Treason',
        ukr: 'Зрада'},
        {eng: 'Betreyal',
        ukr: 'Зрада'},
        {eng: 'Landlord',
        ukr: 'Домовласник'},
        {eng: 'Tenant',
        ukr: 'Орендатор, житель'},
        {eng: 'Public utilities',
        ukr: 'Комунальні послуги'},
        {eng: 'Receipt',
        ukr: 'Чек, квитанція'},
        {eng: 'Electrician',
        ukr: 'Електрик'},
        {eng: 'Plumber',
        ukr: 'Сантехник'},
        {eng: 'Tub',
        ukr: 'Ванна'},
        {eng: 'Bath tub',
        ukr: 'Ванна'},
        {eng: 'Faucet',
        ukr: 'Кран'},
        {eng: 'Tap',
        ukr: 'Кран'},
        {eng: 'Leak',
        ukr: 'Витік, протікати'},
        {eng: 'Lavatory pan',
        ukr: 'Унітаз'},
        {eng: 'Lid',
        ukr: 'Кришка'},
        {eng: 'Casserole',
        ukr: 'Кастрюля'},
        {eng: 'Sause pan',
        ukr: 'Кастрюля'},
        {eng: 'Wash sink',
        ukr: 'Раковина'},
        {eng: 'Cabinets',
        ukr: 'Кухонні шкафчики'},
        {eng: 'Drapes',
        ukr: 'Штори'},
        {eng: 'Curtains',
        ukr: 'Штори'},
        {eng: 'Heating',
        ukr: 'Обігрів'},
        {eng: 'Radiator',
        ukr: 'Батарея, радіатор'},
        {eng: 'Window sill',
        ukr: 'Підвіконня'},
        {eng: 'Prop',
        ukr: 'Підпирати'},
        {eng: 'Crack',
        ukr: 'Тріщина'},
        {eng: 'Rug',
        ukr: 'Килимок'},
        {eng: 'Tissue',
        ukr: 'Паперова серветка'},
        {eng: 'Lining',
        ukr: 'Підкладка'},
        {eng: 'Padding',
        ukr: 'Набивка'},
        {eng: 'Rubber',
        ukr: 'Гума'},
        {eng: 'Balcony',
        ukr: 'Балкон'},
        {eng: 'Handrails',
        ukr: 'Перила, поручні'},
        {eng: 'Iron',
        ukr: 'Праска'},
        {eng: 'Sewing machine',
        ukr: 'Швейна машинка'},
        {eng: 'Wrap',
        ukr: 'Загортати'},
        {eng: 'Wrapping',
        ukr: 'Упаковка, обгортка'},
        {eng: 'Laundry',
        ukr: 'Пральня'},
        {eng: 'Oven',
        ukr: 'Піч, духовка'},
        {eng: 'Forfeit',
        ukr: 'Розплата, розплачуватися'},
        {eng: 'ATM',
        ukr: 'Банкомат'},
        {eng: 'Cash machine',
        ukr: 'Банкомат'},
        {eng: 'Real estate (agent)',
        ukr: 'Рієлтор'},
        {eng: 'Property agent',
        ukr: 'Агент з нерухомості'},
        {eng: 'Showdown',
        ukr: 'Протистояння'},
        {eng: 'Anticipate',
        ukr: 'Чекати, передбачити'},
        {eng: 'Foresee',
        ukr: 'Передбачити, знати наперед'}
      ],
      lesson:3};

      const wordsToLearn4 = {
        words: [
        {eng: 'Customs office',
        ukr: 'Митниця'},
        {eng: 'Gesture',
        ukr: 'Жестикулювати'},
        {eng: 'Vegetation',
        ukr: 'Рослинність'},
        {eng: 'Gentrify',
        ukr: 'Облагороджувати'},
        {eng: 'Fig',
        ukr: 'Інжир'},
        {eng: 'Dates',
        ukr: 'Фініки'},
        {eng: 'Sour',
        ukr: 'Кислий, кислота'},
        {eng: 'Bitter',
        ukr: 'Гіркий'},
        {eng: 'Flesh',
        ukr: 'Плоть'},
        {eng: 'Pip',
        ukr: 'Кісточка, зернятно'},
        {eng: 'Cuisine',
        ukr: 'Кухня'}
      ],
      lesson:4};

      const wordsToLearn5 = {
        words: [
        {eng: 'Hamper',
        ukr: 'Перешкоджати, заважати'},
        {eng: 'Interfere (with)',
        ukr: 'Заважати'},
        {eng: 'Mess around with',
        ukr: 'Возитися з'},
        {eng: 'Trunk',
        ukr: 'Багажник'},
        {eng: 'Boot',
        ukr: 'Багажник'},
        {eng: 'Steering wheel',
        ukr: 'Кермо'},
        {eng: 'Brakes',
        ukr: 'Гальма'},
        {eng: 'Bonnet',
        ukr: 'Капот'},
        {eng: 'Seat',
        ukr: 'Сидіння, місце'},
        {eng: 'Drop off',
        ukr: 'Висаджувати'},
        {eng: 'Traffic Lights',
        ukr: 'Світлофор'},
        {eng: 'Roundabout',
        ukr: 'Круговий рух'},
        {eng: 'Stumble (against)',
        ukr: 'Наштовхнутися на'},
        {eng: 'Threshold',
        ukr: 'Поріг, межа'},
        {eng: 'Cart',
        ukr: 'Візок'},
        {eng: 'Trolley',
        ukr: 'Візок'},
        {eng: 'Raisins',
        ukr: 'Родзинки'},
        {eng: 'Yacht',
        ukr: 'Яхта'},
        {eng: 'Coward',
        ukr: 'Боягуз'},
        {eng: 'Psychiatrist',
        ukr: 'Психіатр'},
        {eng: 'Pop up',
        ukr: 'Несподівано виникнути'},
        {eng: 'Head to',
        ukr: 'Направлятися'},
        {eng: 'Make for',
        ukr: 'Направлятися'},
        {eng: 'Cellar',
        ukr: 'Підвал'},
        {eng: 'Loft',
        ukr: 'Горище'},
        {eng: 'Attic',
        ukr: 'Горище'},
        {eng: 'Hierarchy',
        ukr: 'Ієрархія'},
        {eng: 'Dispel',
        ukr: 'Ровіювати, навіювати'},
        {eng: 'Rewind',
        ukr: 'Перемотувати'},
        {eng: 'Nomad',
        ukr: 'Кочівник'},
        {eng: 'Fancy',
        ukr: 'Уявляти'},
        {eng: 'Couch',
        ukr: 'Кушетка'},
        {eng: 'Coach',
        ukr: 'Тренер, міжміський автобус'},
        {eng: 'Stove',
        ukr: 'Плита'},
        {eng: 'Prawn',
        ukr: 'Королівська креветка'},
        {eng: 'Shrimp',
        ukr: 'Маленька креветка'},
        {eng: 'Stand',
        ukr: 'Витримувати'},
        {eng: 'Crayfish',
        ukr: 'Рак'},
        {eng: 'Temple',
        ukr: 'Храм'},
        {eng: 'Squeamish',
        ukr: 'Гидливий'},
        {eng: 'Inside out',
        ukr: 'Навиворіт'},
        {eng: 'Earthquake',
        ukr: 'Землетрус'},
        {eng: 'Sugar Cane',
        ukr: 'Цукрова тростина'}
      ],
      lesson:5};

      const wordsToLearn6 = {
        words: [
        {eng: 'Gloomy',
        ukr: 'Похмурий'},
        {eng: 'Pour',
        ukr: 'Наливати'},
        {eng: 'Flow',
        ukr: 'Потік, течія'},
        {eng: 'Current',
        ukr: 'Поточний'},
        {eng: 'Hoodoo',
        ukr: 'Наврочити, порча'},
        {eng: 'Remedy',
        ukr: 'Засіб, ліки'},
        {eng: 'Preparation',
        ukr: 'Підготовка'},
        {eng: 'Charcoal',
        ukr: 'Вугілля (активоване)'},
        {eng: 'Coal',
        ukr: 'Кам\'яне вугілля'},
        {eng: 'Firewoods',
        ukr: 'Дрова'},
        {eng: 'Digestion',
        ukr: 'Травлення'},
        {eng: 'Digest',
        ukr: 'Перетравлювати'},
        {eng: 'Plum',
        ukr: 'Слива'},
        {eng: 'Industriuos',
        ukr: 'Працьовитий'},
        {eng: 'Embankment',
        ukr: 'Набережна, насип'},
        {eng: 'Showdown',
        ukr: 'Вирішальний поєдинок'},
        {eng: 'Linen',
        ukr: 'Білизна'},
        {eng: 'Duvet cover',
        ukr: 'Підковдра'},
        {eng: 'Try on',
        ukr: 'Намагатися'},
        {eng: 'Disposable',
        ukr: 'Одноразовий'},
        {eng: 'Parquet',
        ukr: 'Паркет'},
        {eng: 'Slip',
        ukr: 'Ковзати'},
        {eng: 'Slippery',
        ukr: 'Слизький'}
      ],
      lesson: 6};

      const wordsToLearn7 = {
        words: [
        {eng: 'Lean',
        ukr: 'Спиратися, нахилятися'},
        {eng: 'Rub',
        ukr: 'Терти, натирати'},
        {eng: 'Wrap up',
        ukr: 'Завершувати, закруглятися'},
        {eng: 'Despair',
        ukr: 'Відчай, безвихідь'},
        {eng: 'Babysitter',
        ukr: 'Няня'},
        {eng: 'Caretaker',
        ukr: 'Наглядач, сторож'},
        {eng: 'Orphan',
        ukr: 'Сирота'},
        {eng: 'Orphanage',
        ukr: 'Дитячий будинок'},
        {eng: 'Elderly',
        ukr: 'Пристарілий, літній'},
        {eng: 'Superstitious',
        ukr: 'Забобонний'},
        {eng: 'Basin',
        ukr: 'Таз'},
        {eng: 'Hose',
        ukr: 'Шланг'},
        {eng: 'Hull',
        ukr: 'Корпус'},
        {eng: 'Nozzle',
        ukr: 'Насадка'},
        {eng: 'Plug',
        ukr: 'Вилка'},
        {eng: 'Socket',
        ukr: 'Розетка, роз\'єм'},
        {eng: 'Stagger',
        ukr: 'Хитатися'},
        {eng: 'Greedy',
        ukr: 'Жадібний'},
        {eng: 'Generous',
        ukr: 'Щедрий'},
        {eng: 'By no means',
        ukr: 'Ні в якому разі'},
        {eng: 'Meaness',
        ukr: 'Підлість'},
        {eng: 'Interrogation',
        ukr: 'Допит'}
      ],
      lesson: 7};

      const wordsToLearn8 = {
        words: [
        {eng: 'Nerve-racking',
        ukr: 'Діючий на нерви'},
        {eng: 'To pass the law',
        ukr: 'Приймати закон'},
        {eng: 'Supreme Council',
        ukr: 'Верховна Рада'},
        {eng: 'Internal',
        ukr: 'Внутрішній, душевний'},
        {eng: 'Inner',
        ukr: 'Внутрішній'},
        {eng: 'External',
        ukr: 'Зовнішній'},
        {eng: 'Outer',
        ukr: 'Зовнішній'},
        {eng: 'Gradually',
        ukr: 'Поступово'},
        {eng: 'Abruptly',
        ukr: 'Несподівано, різко'},
        {eng: 'Go over',
        ukr: 'Підійти, повторювати'},
        {eng: 'Transition',
        ukr: 'Перехід'},
        {eng: 'Makeover',
        ukr: 'Перевтілення'},
        {eng: 'Stroke',
        ukr: 'Гладити'},
        {eng: 'Will',
        ukr: 'Воля'},
        {eng: 'Log',
        ukr: 'Колода'},
        {eng: 'Backlog',
        ukr: 'Заборгованість'},
        {eng: 'Meticulous',
        ukr: 'Прискіпливий'},
        {eng: 'Groom',
        ukr: 'Наречений'},
        {eng: 'Sinister',
        ukr: 'Зловісний'},
        {eng: 'Creepy',
        ukr: 'Страшний'},
        {eng: 'Conscious',
        ukr: 'Свідомий'},
        {eng: 'Consciousness',
        ukr: 'Свідомість'},
        {eng: 'Particular',
        ukr: 'Конкретний'},
        {eng: 'Special',
        ukr: 'Особливий'},
        {eng: 'Think over',
        ukr: 'Обдумувати'},
        {eng: 'Mull over',
        ukr: 'Обдумувати'},
        {eng: 'Think up',
        ukr: 'Придумати, вигадати'},
        {eng: 'Ginger',
        ukr: 'Рудий, імбир'},
        {eng: 'Frankly',
        ukr: 'Відверто кажучи'}
      ],
      lesson: 8};

      const wordsToLearn9 = {
        words: [
        {eng: 'Screw',
        ukr: 'Шуруп'},
        {eng: 'Metal scrap',
        ukr: 'Металолом'},
        {eng: 'Bolt',
        ukr: 'Болт'},
        {eng: 'Obsolete',
        ukr: 'Застарілий'},
        {eng: 'Go nuts',
        ukr: 'З\'їхати з глузду'},
        {eng: 'Nutty',
        ukr: 'Божевільний'},
        {eng: 'Shell',
        ukr: 'Ракушка, оболонка'},
        {eng: 'Shelter',
        ukr: 'Прихисток, сховище'},
        {eng: 'Womanizer',
        ukr: 'Бабій'},
        {eng: 'Dupe',
        ukr: 'Простофиля'},
        {eng: 'Dude',
        ukr: 'Піжон'},
        {eng: 'Vomit',
        ukr: 'Нудити, рвати'},
        {eng: 'Nausea',
        ukr: 'Нудота'},
        {eng: 'Decent',
        ukr: 'Пристойний, порядний'},
        {eng: 'Sorrow',
        ukr: 'Горе, печаль'},
        {eng: 'Resort',
        ukr: 'Курорт'},
        {eng: 'Screw-driver',
        ukr: 'Викрутка'}
      ],
      lesson: 9};

      const wordsToLearn10 = {
        words: [
        {eng: 'Empire',
        ukr: 'Імперія'},
        {eng: 'Seduce',
        ukr: 'Спокушати'},
        {eng: 'Disabled',
        ukr: 'Інвалід'},
        {eng: 'Insolent',
        ukr: 'Наглий'},
        {eng: 'Slavic',
        ukr: 'Слов\'янський'},
        {eng: 'Slav',
        ukr: 'Слов\'янин'},
        {eng: 'Dogsbody',
        ukr: 'Хлопчик на побігеньках'},
        {eng: 'Empress',
        ukr: 'Імператриця'},
        {eng: 'Tease',
        ukr: 'Дражнити'},
        {eng: 'Temptation',
        ukr: 'Спокуса'},
        {eng: 'Historian',
        ukr: 'Історик'},
        {eng: 'Beloved',
        ukr: 'Любий'},
        {eng: 'Suspend',
        ukr: 'Призупиняти, відкладувати'},
        {eng: 'Mediaeval',
        ukr: 'Середньовічний'},
        {eng: 'Resume',
        ukr: 'Відновлювати'},
        {eng: 'Emperor',
        ukr: 'Імператор'},
        {eng: 'Axe',
        ukr: 'Сокира'},
        {eng: 'Lewd',
        ukr: 'Непристойний'},
        {eng: 'Poker',
        ukr: 'Кочерга'},
        {eng: 'Landing strip',
        ukr: 'Злітно-посадочна полоса'},
        {eng: 'Poke',
        ukr: 'Тикати'},
        {eng: 'Disband',
        ukr: 'Розпускати'}
      ],
      lesson: 10};

      const wordsToLearn11 = {
        words: [
        {eng: 'Desecrate',
        ukr: 'Осквернювати'},
        {eng: 'Counter',
        ukr: 'Прилавок'},
        {eng: 'Subpoena',
        ukr: 'Повістка'},
        {eng: 'Junction',
        ukr: 'Залізничний вузол'},
        {eng: 'Tout',
        ukr: 'Рекламувати'},
        {eng: 'Shelling',
        ukr: 'Артобстріл'},
        {eng: 'Shoot down',
        ukr: 'Збити'},
        {eng: 'Chapel',
        ukr: 'Часовня, каплиця'},
        {eng: 'Missile',
        ukr: 'Ракета, снаряд'},
        {eng: 'Catch up with',
        ukr: 'Наздогнати когось'},
        {eng: 'Jew',
        ukr: 'Єврей'},
        {eng: 'Curfew',
        ukr: 'Комндантська година'},
        {eng: 'Obtrusive',
        ukr: 'Нав\'язливий'},
        {eng: 'Impose on',
        ukr: 'Нав\'язувати'},
        {eng: 'Worship',
        ukr: 'Поклонятися'},
        {eng: 'Banal',
        ukr: 'Банальний'},
        {eng: 'Consecrate',
        ukr: 'Посв\'ячувати, осв\'ячений'},
        {eng: 'Stir',
        ukr: 'Розмішувати'}
      ],
      lesson: 11};

      const wordsToLearn12 = {
        words: [
        {eng: 'Tomb',
        ukr: 'Гробниця, могила'},
        {eng: 'Armour',
        ukr: 'Броня'},
        {eng: 'Nibble',
        ukr: 'Відкусувати'},
        {eng: 'Enclose',
        ukr: 'Оточувати, заключати'},
        {eng: 'Cling',
        ukr: 'Чіплятися, прилипати'},
        {eng: 'Kneel',
        ukr: 'Стояти на колінах'},
        {eng: 'Outpost',
        ukr: 'Блокпост'},
        {eng: 'Safety box',
        ukr: 'Сейф'},
        {eng: 'Politician',
        ukr: 'Політик'},
        {eng: 'Glaze',
        ukr: 'Склити'},
        {eng: 'Fold',
        ukr: 'Складати'},
        {eng: 'Jewish',
        ukr: 'Єврейський'},
        {eng: 'Unfold',
        ukr: 'Розкривати, розгортати'},
        {eng: 'Checkpoint',
        ukr: 'Блокпост'},
        {eng: 'Balm',
        ukr: 'Бальзам, втіха'},
        {eng: 'Squat',
        ukr: 'Сидіти навприсядки, присідати'},
        {eng: 'Armed people',
        ukr: 'Озброєні люди'},
        {eng: 'To arm',
        ukr: 'Озброювати'},
        {eng: 'Mince',
        ukr: 'Крошити, фарш'},
        {eng: 'Pothole',
        ukr: 'Вибоїна'},
        {eng: 'Give away',
        ukr: 'Роздавати безкоштовно'},
        {eng: 'Breast',
        ukr: 'Жіночі груди'},
        {eng: 'Solvency',
        ukr: 'Платіжна здатність'},
        {eng: 'Part',
        ukr: 'Розставатися, відділяти'},
        {eng: 'To disarm',
        ukr: 'Обеззброїти'},
        {eng: 'Enclosure',
        ukr: 'Огорожа'},
        {eng: 'Bark',
        ukr: 'Гавкати'},
        {eng: 'Loss',
        ukr: 'Збитки'}
      ],
      lesson: 12};

    return(
        <div>
            <CardComponent words={wordsToLearn1}/>
            <CardComponent words={wordsToLearn2}/>
            <CardComponent words={wordsToLearn3}/>
            <CardComponent words={wordsToLearn4}/>
            <CardComponent words={wordsToLearn5}/>
            <CardComponent words={wordsToLearn6}/>
            <CardComponent words={wordsToLearn7}/>
            <CardComponent words={wordsToLearn8}/>
            <CardComponent words={wordsToLearn9}/>
            <CardComponent words={wordsToLearn10}/>
            <CardComponent words={wordsToLearn11}/>
            <CardComponent words={wordsToLearn12}/>
        </div>
    );
}

export default LessonsComponent;