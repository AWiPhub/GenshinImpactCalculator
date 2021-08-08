export const basicCharacteristics = {
    columns: [
        {
            title: 'Фаза возвышения',
            dataIndex: 'phase',
            key: 'phase',
            slots: { customRender: 'standart' },
        },
        {
            title: 'Уровень',
            dataIndex: 'level',
            key: 'level',
            slots: { customRender: 'standart' },
        },
        {
            title: 'HP',
            dataIndex: 'HP',
            key: 'HP',
            slots: { customRender: 'standart' },
        },
        {
            title: 'Атака',
            dataIndex: 'atk',
            key: 'atk',
            slots: { customRender: 'standart' },
        },
        {
            title: 'Защита',
            dataIndex: 'def',
            key: 'def',
            slots: { customRender: 'standart' },
        },
        {
            title: 'Крит. урон',
            dataIndex: 'crit',
            key: 'crit',
            slots: { customRender: 'standart' },
        },
        
    ],
    dataSource: [
        {
            key: '1',
            phase: 0,
            level: 1,
            HP: 1001,
            atk: 27,
            def: 61,
            crit: null
        },
        {
            key: '2',
            phase: 0,
            level: 20,
            HP: 2597,
            atk: 69,
            def: 158,
            crit: null
        },
        {
            key: '3',
            phase: 1,
            level: 20,
            HP: 3455,
            atk: 92,
            def: 211,
            crit: null
        },
        {
            key: '4',
            phase: 1,
            level: 40,
            HP: 5170,
            atk: 138,
            def: 315,
            crit: null
        },
        {
            key: '5',
            phase: 2,
            level: 40,
            HP: 5779,
            atk: 154,
            def: 352,
            crit: 9.6
        },
        {
            key: '6',
            phase: 2,
            level: 50,
            HP: 6649,
            atk: 177,
            def: 405,
            crit: 9.6
        },
        {
            key: '7',
            phase: 3,
            level: 50,
            HP: 7462,
            atk: 198,
            def: 455,
            crit: 19.2
        },
        {
            key: '8',
            phase: 3,
            level: 60,
            HP: 8341,
            atk: 222,
            def: 509,
            crit: 19.2
        },
        {
            key: '9',
            phase: 4,
            level: 60,
            HP: 8951,
            atk: 238,
            def: 546,
            crit: 19.2
        },
        {
            key: '10',
            phase: 4,
            level: 70,
            HP: 9838,
            atk: 262,
            def: 600,
            crit: 19.2
        },
        {
            key: '11',
            phase: 5,
            level: 70,
            HP: 10448,
            atk: 278,
            def: 637,
            crit: 28.8
        },
        {
            key: '12',
            phase: 5,
            level: 80,
            HP: 11345,
            atk: 302,
            def: 692,
            crit: 28.8
        },
        {
            key: '13',
            phase: 6,
            level: 80,
            HP: 11954,
            atk: 318,
            def: 729,
            crit: 38.4
        },
        {
            key: '14',
            phase: 6,
            level: 90,
            HP: 12858,
            atk: 342,
            def: 784,
            crit: 38.4
        },
        
    ]
}