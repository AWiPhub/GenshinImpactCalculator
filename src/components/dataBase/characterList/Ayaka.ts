export const Ayaka = {
    key: 1,
    name: 'Аяка',
    element: 'Cryo',
    stars: 5,
    weapon: 'One-handed',
    aboutCharTabs: {
        overview: {
            name: "Камисато Аяка",
            stars: 5,
            element: "Крио",
            weapon: "Одноручный меч",
            birthday: "28 сентября",
            desc: 'Дочь клана Камисато комиссии Ясиро. Благородна, изящна, мудра и сильна. \nВсегда честна и учтива. Обожаемая народом Инадзумы, она заслужила прозвище «Сирасаги Химэгими».',
            descAbout: "Хоть и госпожа Аяка - старшая дочь клана Камисато, но она так о всех нас заботится. Какой бы сложной ни была проблема, она приложит все усилия, чтобы решить её. Не видел бы я этого собственными глазами, ни за что бы не поверил, что есть такие люди, как она!",
        },
        skills: {
            attack: {
                icon: "1",
                name: "Искусство Камисато: Нанамэ",
                type: "Обычная/Заряженная атака",
                defaultAttack: "До пяти быстрых ударов мечом.",
                chargedAttack: "Создаёт продолжительный град из клинков, для которого тратится определённое количество выносливости.",
                fallAttack: "Стремительно падает на землю, атакуя всех врагов на пути. Приземлившись, наносит урон по площади.",
            },
            elementalSkill: {
                icon: "2",
                name: "Искусство Камисато: Хёка",
                type: "Элементальный навык",
                desc: "Призывает цветущий лёд, который подбрасывает ближайших противников в воздух и наносит им Крио урон",
            },
            explosionElements: {
                icon: "3",
                name: "Искусство Камисато: Сомэцу",
                type: "Взрыв стихии",
                desc: "Безупречным движением вызывает снежную бурю и выпускает непрерывно движущийся вперёд Морозный сэки но то.",
                options: {
                    name: "Морозный сэки но то:",
                    items: [
                        "Пронзающий холодный ветер непрерывно кромсает противников и наносит им Крио урон;",
                        "По истечении времени действия взрывается и наносит Крио урон по площади."
                    ]
                }
            },
            firstPassive: {
                icon: "passive1",
                name: "Освящение амауми куницуми",
                type: "Пассивный талант 1",
                desc: "После использования навыка Искусство Камисато: Хёка урон обычных и заряженных атак Аяки увеличивается на 30% в течение 6 сек.",
            },
            secondPassive: {
                icon: "passive2",
                name: "Благословение кантэн сэммё",
                type: "Пассивный талант 2",
                options: {
                    name: "Когда Крио эффект в конце действия навыка Искусство Камисато: Сэнхо поражает противника, Камисато Аяка получает следующие эффекты:",
                    items: [
                        "Восстанавливает 10 ед. энергии.",
                        "Получает 18% Бонус Крио урона на 10 сек."
                    ]
                }
            },
            thirdPassive: {
                icon: "passive3",
                name: "Плоды синса",
                type: "Пассивный талант 3",
                desc: "При создании материалов возвышения оружия имеет 10% шанс создать дополнительный предмет.",
            },
            sprint: {
                icon: "sprint",
                name: "Искусство Камисато: Сэнхо",
                type: "Альтернативный спринт",
                desc: "Аяка потребляет выносливость и скрывается в стремительном потоке мокрого снега, который движется вместе с ней.",
                options: {
                    name: 'Форма Сэнхо позволяет ей двигаться по воде с большой скоростью. \nПосле окончания формы Сэнхо и при повторном появлении происходят следующие эффекты:',
                    items: [
                        "Высвобождается холодная энергия, которая накладывает эффект Крио на ближайших противников.",
                        "Холод собирается вдоль лезвия Аяки, на короткое время наделяя её атаки инфузией Крио."
                    ]
                }
            }
        },
        constellations: {
            first: {
                level: 1,
                name: "Укутанная снегом сакура",
                effect: "Когда обычные атаки или заряженные атаки Аяки наносят Крио урон противникам, есть 50% шанс уменьшить время отката навыка Искусство Камисато: Хёка на 0.3 сек.",
                additional: "Этот эффект может возникнуть раз в 0.1 сек.",
            },
            second: {
                level: 2,
                name: "Лезвие бури сэки но то",
                effect: "Навык Искусство Камисато: Сомэцу создаёт два дополнительных Морозных сэки но то поменьше, каждый из которых наносит урон, равный 20% от основного урона.",
            },
            third: {
                level: 3,
                name: "Ледяной цветок камифубуки",
                effect: "Увеличивает уровень навыка Искусство Камисато: Сомэцу на 3.",
                additional: "Макс. Ур.: 15",
            },
            four: {
                level: 4,
                name: "Приливы и отливы",
                effect: "Понижает защиту, получивших урон от Морозного сэки но то навыка Искусство Камисато: Сомэцу, на 30% в течение 6 сек.",
            },
            five: {
                level: 5,
                name: "Цветущее облако ируцуки",
                effect: "Увеличивает уровень навыка Искусство Камисато: Хёка на 3.",
                additional: "Макс. Ур.: 15"
            },
            six: {
                level: 6,
                name: "Танец суигэцу",
                effect: "Каждые 10 сек. Камисато Аяка получает эффект Усурахи буто, который повышает урон её заряженных атак на 298%. Через 0.5 сек после попадания заряженной атакой по врагу этот эффект пропадает, и отсчёт начинается заново.",
            }
        },
        ascension: {
            columns: [
                {
                    title: 'Фаза',
                    dataIndex: 'phase',
                    key: 'phase',
                    slots: { customRender: 'standart' },
                },
                {
                    title: 'Треб. ур.',
                    dataIndex: 'needLvl',
                    key: 'needLvl',
                    slots: { customRender: 'standart' },
                },
                {
                    title: 'Треб. моры',
                    dataIndex: 'mora',
                    key: 'mora',
                    slots: { customRender: 'standart' },
                },
                {
                    title: 'Элементальный материал 1',
                    dataIndex: 'firstElementMaterial',
                    key: 'firstElementMaterial',
                    slots: { customRender: 'material' },
                },
                {
                    title: 'Элементальный материал 2',
                    dataIndex: 'secondElementMaterial',
                    key: 'secondElementMaterial',
                    slots: { customRender: 'material' },
                },
                {
                    title: 'Местная диковина',
                    dataIndex: 'localCuriosity',
                    key: 'localCuriosity',
                    slots: { customRender: 'material' },
                },
                {
                    title: 'Обычный материал',
                    dataIndex: 'regularMaterial',
                    key: 'regularMaterial',
                    slots: { customRender: 'material' },
                }
            ],
            dataSource: [
                {
                    key: '1',
                    phase: 1,
                    needLvl: 20,
                    mora: 20000,
                    firstElementMaterial: {
                        name: "Осколок нефрита Шивада",
                        need: 1,
                    },
                    secondElementMaterial: null,
                    localCuriosity: {
                        name: "Цвет сакуры",
                        need: 3,
                    },
                    regularMaterial: {
                        name: "Старая гарда",
                        need: 3,
                    }
                },
                {
                    key: '2',
                    phase: 2,
                    needLvl: 40,
                    mora: 40000,
                    firstElementMaterial: {
                        name: "Фрагмент нефрита Шивада",
                        need: 3,
                    },
                    secondElementMaterial: {
                        name: "Сердце бесконечного механизма",
                        need: 2,
                    },
                    localCuriosity: {
                        name: "Цвет сакуры",
                        need: 10,
                    },
                    regularMaterial: {
                        name: "Старая гарда",
                        need: 15,
                    }
                },
                {
                    key: '3',
                    phase: 3,
                    needLvl: 50,
                    mora: 60000,
                    firstElementMaterial: {
                        name: "Фрагмент нефрита Шивада",
                        need: 6,
                    },
                    secondElementMaterial: {
                        name: "Сердце бесконечного механизма",
                        need: 4,
                    },
                    localCuriosity: {
                        name: "Цвет сакуры",
                        need: 20,
                    },
                    regularMaterial: {
                        name: "Гарда кагэути",
                        need: 12,
                    }
                },
                {
                    key: '4',
                    phase: 4,
                    needLvl: 60,
                    mora: 80000,
                    firstElementMaterial: {
                        name: "Кусок нефрита Шивада",
                        need: 3,
                    },
                    secondElementMaterial: {
                        name: "Сердце бесконечного механизма",
                        need: 8,
                    },
                    localCuriosity: {
                        name: "Цвет сакуры",
                        need: 30,
                    },
                    regularMaterial: {
                        name: "Гарда кагэути",
                        need: 18,
                    }
                },
                {
                    key: '5',
                    phase: 5,
                    needLvl: 70,
                    mora: 100000,
                    firstElementMaterial: {
                        name: "Фрагмент нефрита Шивада",
                        need: 6,
                    },
                    secondElementMaterial: {
                        name: "Сердце бесконечного механизма",
                        need: 12,
                    },
                    localCuriosity: {
                        name: "Цвет сакуры",
                        need: 45,
                    },
                    regularMaterial: {
                        name: "Прославленная гарда",
                        need: 12,
                    }
                },
                {
                    key: '6',
                    phase: 6,
                    needLvl: 80,
                    mora: 120000,
                    firstElementMaterial: {
                        name: "Драгоценный нефрит Шивада",
                        need: 6,
                    },
                    secondElementMaterial: {
                        name: "Сердце бесконечного механизма",
                        need: 20,
                    },
                    localCuriosity: {
                        name: "Цвет сакуры",
                        need: 60,
                    },
                    regularMaterial: {
                        name: "Прославленная гарда",
                        need: 24,
                    }
                },
                
            ]
        }
    }
}