export const Mistsplitter_Reforged = {
    key: 1,
    IMGname: 'Mistsplitter Reforged',
    name: "Рассекающий туман",
    stars: 5,
    weapon: 'One-handed',
    aboutCharTabs: {
        overview: {
            name: "Рассекающий туман",
            stars: 5,
            weapon: "Одноручный меч",
            desc: 'Один из многих мечей, которыми сёгун одаривает хатамото. Говорят, что он может призвать силы молнии и разрубить надвое всё, включая горы, ветер, ночь и даже туман. \nОднажды его разбили на тысячу осколков. Когда его перековали, его клинок украсили полосами, напоминающими поток облаков.',
            descAbout: "Меч, пылающий зловещим фиолетовым светом. Однажды он уже был сломан, но затем его выковали заново.",
        },
        statProgression: {
            columns: [
                {
                    title: 'Уровень',
                    dataIndex: 'level',
                    key: 'level',
                    slots: { customRender: 'standart' },
                },
                {
                    title: 'Базовая атака',
                    dataIndex: 'baseAtk',
                    key: 'baseAtk',
                    slots: { customRender: 'standart' },
                },
                {
                    title: 'Крит. урон',
                    dataIndex: 'critDamage',
                    key: 'critDamage',
                    slots: { customRender: 'standart' },
                },
                {
                    title: 'Материалы возвышения',
                    dataIndex: 'ascensionMaterials',
                    key: 'ascensionMaterials',
                    slots: { customRender: 'material' },
                }
            ],
            dataSource: [
                {
                    key: '1',
                    level: '1',
                    baseAtk: '48',
                    critDamage: '9.6',
                    ascensionMaterials: null
                },
                {
                    key: '2',
                    level: '5',
                    baseAtk: '65',
                    critDamage: '11.2',
                    ascensionMaterials: null
                },
                {
                    key: '3',
                    level: '10',
                    baseAtk: '87',
                    critDamage: '13.1',
                    ascensionMaterials: null
                },
                {
                    key: '4',
                    level: '15',
                    baseAtk: '110',
                    critDamage: '15',
                    ascensionMaterials: null
                },
                {
                    key: '5',
                    level: '20',
                    baseAtk: '133',
                    critDamage: '17',
                    ascensionMaterials: null
                },
                {
                    key: '6',
                    level: '20+',
                    baseAtk: '164',
                    critDamage: '17',
                    // ascensionMaterials: [
                    //     {
                    //         name: 'Коралловая ветвь внешних морей',
                    //         need: 5
                    //     },
                    //     {
                    //         name: 'Механизм хаоса',
                    //         need: 5
                    //     },
                    //     {
                    //         name: 'Старая гарда',
                    //         need: 3
                    //     },
                    //     {
                    //         name: 'Мора',
                    //         need: 10000
                    //     }
                    // ]
                    ascensionMaterials: null
                },
                {
                    key: '7',
                    level: '25',
                    baseAtk: '188',
                    critDamage: '18.9',
                    ascensionMaterials: null
                },
                {
                    key: '8',
                    level: '30',
                    baseAtk: '212',
                    critDamage: '20.8',
                    ascensionMaterials: null
                },
                {
                    key: '9',
                    level: '35',
                    baseAtk: '236',
                    critDamage: '22.8',
                    ascensionMaterials: null
                },
                {
                    key: '10',
                    level: '40',
                    baseAtk: '261',
                    critDamage: '24.7',
                    ascensionMaterials: null
                },
                {
                    key: '11',
                    level: '40+',
                    baseAtk: '292',
                    critDamage: '24.7',
                    ascensionMaterials: null
                },
                {
                    key: '12',
                    level: '45',
                    baseAtk: '316',
                    critDamage: '26.7',
                    ascensionMaterials: null
                },
                {
                    key: '13',
                    level: '50',
                    baseAtk: '341',
                    critDamage: '28.6',
                    ascensionMaterials: null
                },
                {
                    key: '14',
                    level: '50+',
                    baseAtk: '373',
                    critDamage: '28.6',
                    ascensionMaterials: null
                },
                {
                    key: '15',
                    level: '55',
                    baseAtk: '398',
                    critDamage: '30.5',
                    ascensionMaterials: null
                },
                {
                    key: '16',
                    level: '60',
                    baseAtk: '423',
                    critDamage: '32.5',
                    ascensionMaterials: null
                },
                {
                    key: '17',
                    level: '60+',
                    baseAtk: '455',
                    critDamage: '32.5',
                    ascensionMaterials: null
                },
                {
                    key: '18',
                    level: '65',
                    baseAtk: '480',
                    critDamage: '34.4',
                    ascensionMaterials: null
                },
                {
                    key: '19',
                    level: '70',
                    baseAtk: '506',
                    critDamage: '36.3',
                    ascensionMaterials: null
                },
                {
                    key: '20',
                    level: '70+',
                    baseAtk: '537',
                    critDamage: '36.3',
                    ascensionMaterials: null
                },
                {
                    key: '21',
                    level: '75',
                    baseAtk: '563',
                    critDamage: '38.3',
                    ascensionMaterials: null
                },
                {
                    key: '22',
                    level: '80',
                    baseAtk: '590',
                    critDamage: '40.2',
                    ascensionMaterials: null
                },
                {
                    key: '23',
                    level: '80+',
                    baseAtk: '621',
                    critDamage: '40.2',
                    ascensionMaterials: null
                },
                {
                    key: '24',
                    level: '85',
                    baseAtk: '648',
                    critDamage: '42.2',
                    ascensionMaterials: null
                },
                {
                    key: '25',
                    level: '90',
                    baseAtk: '674',
                    critDamage: '44.1',
                    ascensionMaterials: null
                },
            ]
        }
    }
}