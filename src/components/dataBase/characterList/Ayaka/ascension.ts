export const ascension = {
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