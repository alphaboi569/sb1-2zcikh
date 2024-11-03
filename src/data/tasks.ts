export const taskTypes = [
  {
    id: 'text',
    title: 'Текстовые задачи',
    subtasks: [
      {
        id: 'text-1',
        title: 'Задачи на движение',
        description: 'Два поезда выехали навстречу друг другу из городов, расстояние между которыми 440 км. Скорость первого поезда 60 км/ч, второго — 50 км/ч. Через сколько часов поезда встретятся?',
        difficulty: 'medium',
        hasInteractive: true,
        visualType: 'motion'
      },
      {
        id: 'text-2',
        title: 'Задачи на работу',
        description: 'Бригада маляров красит забор за 6 часов. После того, как они проработали 2 часа, к ним присоединились еще два маляра, и вся работа была закончена на 1 час раньше, чем планировалось. Сколько маляров было в бригаде первоначально?',
        difficulty: 'medium',
        hasInteractive: true,
        visualType: 'progress'
      },
      {
        id: 'text-3',
        title: 'Задачи на проценты',
        description: 'Банк начисляет 10% годовых. Вкладчик положил 100000 рублей на 3 года. Какая сумма будет на счете через 3 года при условии капитализации процентов?',
        difficulty: 'hard',
        hasInteractive: true,
        visualType: 'chart'
      },
      {
        id: 'text-4',
        title: 'Задачи на смеси и сплавы',
        description: 'В сплаве содержится 5 кг меди и 3 кг олова. Сколько килограммов меди нужно добавить к сплаву, чтобы содержание меди составило 70%?',
        difficulty: 'hard',
        hasInteractive: true,
        visualType: 'chart'
      },
      {
        id: 'text-5',
        title: 'Задачи на совместное движение по реке',
        description: 'Катер прошел по течению реки 24 км и вернулся обратно, затратив на весь путь 5 часов. Найдите скорость течения реки, если собственная скорость катера 12 км/ч.',
        difficulty: 'medium',
        hasInteractive: true,
        visualType: 'motion'
      },
      {
        id: 'text-6',
        title: 'Задачи на производительность',
        description: 'Первый насос наполняет бассейн за 8 часов, второй — за 6 часов. За сколько часов наполнится бассейн, если включить оба насоса одновременно?',
        difficulty: 'easy',
        hasInteractive: true,
        visualType: 'progress'
      },
      {
        id: 'text-7',
        title: 'Задачи на концентрацию',
        description: 'В 400-граммовый раствор соли с концентрацией 15% добавили 100 грамм воды. Какова концентрация получившегося раствора?',
        difficulty: 'medium',
        hasInteractive: true,
        visualType: 'chart'
      },
      {
        id: 'text-8',
        title: 'Задачи на числа',
        description: 'Найдите трехзначное число, которое в 12 раз больше суммы своих цифр.',
        difficulty: 'hard',
        hasInteractive: false
      }
    ],
    isExpanded: false
  },
  {
    id: 'probability',
    title: 'Теория вероятностей',
    subtasks: [
      {
        id: 'prob-1',
        title: 'Классическая вероятность',
        description: 'В урне находятся 10 шаров разных цветов: 3 красных, 4 синих и 3 зеленых. Какова вероятность вытащить красный шар?',
        difficulty: 'easy',
        hasInteractive: true,
        visualType: 'probability'
      },
      {
        id: 'prob-2',
        title: 'Геометрическая вероятность',
        description: 'На отрезке длиной 10 см случайным образом поставлены две точки. Найдите вероятность того, что расстояние между этими точками больше 5 см.',
        difficulty: 'hard',
        hasInteractive: true,
        visualType: 'geometry'
      },
      {
        id: 'prob-3',
        title: 'Условная вероятность',
        description: 'В группе 10 студентов, из них 6 девушек. Случайным образом выбирают двух студентов. Какова вероятность, что оба выбранных студента окажутся девушками?',
        difficulty: 'medium',
        hasInteractive: true,
        visualType: 'probability'
      },
      {
        id: 'prob-4',
        title: 'Независимые события',
        description: 'Монету подбрасывают три раза. Найдите вероятность того, что выпадет ровно два орла.',
        difficulty: 'easy',
        hasInteractive: true,
        visualType: 'probability'
      },
      {
        id: 'prob-5',
        title: 'Формула полной вероятности',
        description: 'В первой урне 2 белых и 3 черных шара, во второй — 4 белых и 1 черный. Случайным образом выбирают урну и достают из нее шар. Какова вероятность достать белый шар?',
        difficulty: 'hard',
        hasInteractive: true,
        visualType: 'probability'
      },
      {
        id: 'prob-6',
        title: 'Формула Бернулли',
        description: 'Вероятность попадания в цель при одном выстреле равна 0.8. Найдите вероятность того, что из 4 выстрелов будет ровно 3 попадания.',
        difficulty: 'medium',
        hasInteractive: true,
        visualType: 'probability'
      },
      {
        id: 'prob-7',
        title: 'Случайные величины',
        description: 'Игральный кубик бросают дважды. Найдите математическое ожидание суммы выпавших очков.',
        difficulty: 'medium',
        hasInteractive: true,
        visualType: 'probability'
      },
      {
        id: 'prob-8',
        title: 'Дисперсия случайной величины',
        description: 'В лотерее 100 билетов. Один выигрыш 1000 рублей, два выигрыша по 500 рублей, остальные невыигрышные. Найдите дисперсию случайной величины — выигрыша для одного билета.',
        difficulty: 'hard',
        hasInteractive: true,
        visualType: 'probability'
      }
    ],
    isExpanded: false
  },
  {
    id: 'computation',
    title: 'Вычислительные задачи',
    subtasks: [
      {
        id: 'comp-1',
        title: 'Тригонометрические вычисления',
        description: 'Вычислите значение выражения sin(30°) + cos(60°) × tg(45°)',
        difficulty: 'medium',
        hasInteractive: true,
        visualType: 'trigonometry'
      },
      {
        id: 'comp-2',
        title: 'Логарифмические вычисления',
        description: 'Найдите значение выражения log₂(8) + log₃(27) - log₄(16)',
        difficulty: 'hard',
        hasInteractive: true,
        visualType: 'logarithm'
      },
      {
        id: 'comp-3',
        title: 'Степенные выражения',
        description: 'Вычислите: (2^3 × 2^4) ÷ (2^5 × 2^-1)',
        difficulty: 'easy',
        hasInteractive: true,
        visualType: 'chart'
      },
      {
        id: 'comp-4',
        title: 'Комплексные числа',
        description: 'Найдите модуль комплексного числа z = 3 + 4i',
        difficulty: 'medium',
        hasInteractive: true,
        visualType: 'geometry'
      },
      {
        id: 'comp-5',
        title: 'Производные',
        description: 'Найдите производную функции f(x) = x³ - 3x² + 2x - 1',
        difficulty: 'medium',
        hasInteractive: true,
        visualType: 'graph'
      },
      {
        id: 'comp-6',
        title: 'Интегралы',
        description: 'Вычислите определенный интеграл ∫(0 до 1) x² dx',
        difficulty: 'hard',
        hasInteractive: true,
        visualType: 'graph'
      },
      {
        id: 'comp-7',
        title: 'Пределы',
        description: 'Найдите предел последовательности an = (n² + 1)/(n² - 1) при n → ∞',
        difficulty: 'hard',
        hasInteractive: true,
        visualType: 'graph'
      },
      {
        id: 'comp-8',
        title: 'Матрицы',
        description: 'Найдите определитель матрицы [[2, 1], [1, 3]]',
        difficulty: 'medium',
        hasInteractive: true,
        visualType: 'graph'
      }
    ],
    isExpanded: false
  },
  {
    id: 'geometry',
    title: 'Геометрические задачи',
    subtasks: [
      {
        id: 'geom-1',
        title: 'Планиметрия',
        description: 'В треугольнике ABC угол C равен 90°, AB = 10, BC = 6. Найдите площадь треугольника.',
        difficulty: 'medium',
        hasInteractive: true,
        visualType: 'geometry'
      },
      {
        id: 'geom-2',
        title: 'Стереометрия',
        description: 'В правильной четырехугольной пирамиде SABCD точка O — центр основания, SO = 5, а угол между боковым ребром и плоскостью основания равен 45°. Найдите площадь боковой поверхности пирамиды.',
        difficulty: 'hard',
        hasInteractive: true,
        visualType: 'geometry3d'
      },
      {
        id: 'geom-3',
        title: 'Векторы',
        description: 'Даны векторы a = (1, 2, -1) и b = (3, -1, 2). Найдите их скалярное произведение.',
        difficulty: 'medium',
        hasInteractive: true,
        visualType: 'geometry3d'
      },
      {
        id: 'geom-4',
        title: 'Окружность',
        description: 'В окружность вписан правильный шестиугольник. Найдите отношение площади шестиугольника к площади круга.',
        difficulty: 'hard',
        hasInteractive: true,
        visualType: 'geometry'
      },
      {
        id: 'geom-5',
        title: 'Многогранники',
        description: 'В кубе ABCDA₁B₁C₁D₁ найдите угол между диагональю куба и плоскостью ABC.',
        difficulty: 'hard',
        hasInteractive: true,
        visualType: 'geometry3d'
      },
      {
        id: 'geom-6',
        title: 'Координатная геометрия',
        description: 'Найдите расстояние от точки A(2, 3, 1) до плоскости 2x - y + 2z = 4.',
        difficulty: 'medium',
        hasInteractive: true,
        visualType: 'geometry3d'
      },
      {
        id: 'geom-7',
        title: 'Сечения',
        description: 'В правильной четырехугольной призме ABCDA₁B₁C₁D₁ найдите площадь сечения, проходящего через точки A, B₁ и D₁.',
        difficulty: 'hard',
        hasInteractive: true,
        visualType: 'geometry3d'
      },
      {
        id: 'geom-8',
        title: 'Вписанные и описанные фигуры',
        description: 'В равнобедренную трапецию вписана окружность. Основания трапеции равны 8 и 12, а боковая сторона равна 5. Найдите радиус окружности.',
        difficulty: 'hard',
        hasInteractive: true,
        visualType: 'geometry'
      }
    ],
    isExpanded: false
  },
  {
    id: 'equations',
    title: 'Уравнения',
    subtasks: [
      {
        id: 'eq-1',
        title: 'Квадратные уравнения',
        description: 'Решите уравнение: x² + 5x + 6 = 0',
        difficulty: 'easy',
        hasInteractive: true,
        visualType: 'graph'
      },
      {
        id: 'eq-2',
        title: 'Тригонометрические уравнения',
        description: 'Решите уравнение: sin(2x) = cos(x)',
        difficulty: 'hard',
        hasInteractive: true,
        visualType: 'trigonometry'
      },
      {
        id: 'eq-3',
        title: 'Показательные уравнения',
        description: 'Решите уравнение: 2^(x+1) + 2^x = 12',
        difficulty: 'medium',
        hasInteractive: true,
        visualType: 'graph'
      },
      {
        id: 'eq-4',
        title: 'Логарифмические уравнения',
        description: 'Решите уравнение: log₂(x-1) + log₂(x+1) = 3',
        difficulty: 'hard',
        hasInteractive: true,
        visualType: 'graph'
      },
      {
        id: 'eq-5',
        title: 'Иррациональные уравнения',
        description: 'Решите уравнение: √(x+5) + √(x-3) = 4',
        difficulty: 'medium',
        hasInteractive: true,
        visualType: 'graph'
      },
      {
        id: 'eq-6',
        title: 'Системы уравнений',
        description: 'Решите систему: {x + y = 5, xy = 6}',
        difficulty: 'medium',
        hasInteractive: true,
        visualType: 'graph'
      },
      {
        id: 'eq-7',
        title: 'Уравнения высших степеней',
        description: 'Решите уравнение: x⁴ - 5x² + 4 = 0',
        difficulty: 'hard',
        hasInteractive: true,
        visualType: 'graph'
      },
      {
        id: 'eq-8',
        title: 'Уравнения с модулем',
        description: 'Решите уравнение: |x-2| + |x+1| = 5',
        difficulty: 'medium',
        hasInteractive: true,
        visualType: 'graph'
      }
    ],
    isExpanded: false
  },
  {
    id: 'inequalities',
    title: 'Уравнения с неравенством',
    subtasks: [
      {
        id: 'ineq-1',
        title: 'Линейные неравенства',
        description: 'Решите неравенство: 2x + 3 > 7',
        difficulty: 'easy',
        hasInteractive: true,
        visualType: 'graph'
      },
      {
        id: 'ineq-2',
        title: 'Квадратные неравенства',
        description: 'Решите неравенство: x² - 4x + 3 ≤ 0',
        difficulty: 'medium',
        hasInteractive: true,
        visualType: 'graph'
      },
      {
        id: 'ineq-3',
        title: 'Показательные неравенства',
        description: 'Решите неравенство: 2^x > 8',
        difficulty: 'medium',
        hasInteractive: true,
        visualType: 'graph'
      },
      {
        id: 'ineq-4',
        title: 'Логарифмические неравенства',
        description: 'Решите неравенство: log₃(x-2) < 2',
        difficulty: 'hard',
        hasInteractive: true,
        visualType: 'graph'
      },
      {
        id: 'ineq-5',
        title: 'Неравенства с модулем',
        description: 'Решите неравенство: |2x-1| < 3',
        difficulty: 'medium',
        hasInteractive: true,
        visualType: 'graph'
      },
      {
        id: 'ineq-6',
        title: 'Системы неравенств',
        description: 'Решите систему: {x² < 4, x > 0}',
        difficulty: 'medium',
        hasInteractive: true,
        visualType: 'graph'
      },
      {
        id: 'ineq-7',
        title: 'Иррациональные неравенства',
        description: 'Решите неравенство: √(x+1) > x',
        difficulty: 'hard',
        hasInteractive: true,
        visualType: 'graph'
      },
      {
        id: 'ineq-8',
        title: 'Тригонометрические неравенства',
        description: 'Решите неравенство: sin(x) > 1/2 на отрезке [0, 2π]',
        difficulty: 'hard',
        hasInteractive: true,
        visualType: 'trigonometry'
      }
    ],
    isExpanded: false
  },
  {
    id: 'parameters',
    title: 'Задачи с параметром',
    subtasks: [
      {
        id: 'param-1',
        title: 'Линейные уравнения с параметром',
        description: 'При каких значениях параметра a уравнение (a+1)x + 3 = 2 имеет единственное решение?',
        difficulty: 'medium',
        hasInteractive: true,
        visualType: 'parameter'
      },
      {
        id: 'param-2',
        title: 'Квадратные уравнения с параметром',
        description: 'При каких значениях параметра a уравнение x² + ax + 1 = 0 имеет два различных корня?',
        difficulty: 'hard',
        hasInteractive: true,
        visualType: 'parameter'
      },
      {
        id: 'param-3',
        title: 'Системы с параметром',
        description: 'При каких значениях параметра a система {x + y = a, x - y = 1} имеет решение?',
        difficulty: 'medium',
        hasInteractive: true,
        visualType: 'parameter'
      },
      {
        id: 'param-4',
        title: 'Неравенства с параметром',
        description: 'При каких значениях параметра a неравенство ax² + 2x + 1 > 0 выполняется для всех x?',
        difficulty: 'hard',
        hasInteractive: true,
        visualType: 'parameter'
      },
      {
        id: 'param-5',
        title: 'Иррациональные уравнения с параметром',
        description: 'При каких значениях параметра a уравнение √(x+a) = x имеет ровно одно решение?',
        difficulty: 'hard',
        hasInteractive: true,
        visualType: 'parameter'
      },
      {
        id: 'param-6',
        title: 'Показательные уравнения с параметром',
        description: 'При каких значениях параметра a уравнение 2^x = ax + 1 имеет решение?',
        difficulty: 'hard',
        hasInteractive: true,
        visualType: 'parameter'
      },
      {
        id: 'param-7',
        title: 'Логарифмические уравнения с параметром',
        description: 'При каких значениях параметра a уравнение log₂(x) = ax имеет два различных решения?',
        difficulty: 'hard',
        hasInteractive: true,
        visualType: 'parameter'
      },
      {
        id: 'param-8',
        title: 'Тригонометрические уравнения с параметром',
        description: 'При каких значениях параметра a уравнение sin(x) = ax имеет решение на отрезке [0, π]?',
        difficulty: 'hard',
        hasInteractive: true,
        visualType: 'parameter'
      }
    ],
    isExpanded: false
  }
] as const;