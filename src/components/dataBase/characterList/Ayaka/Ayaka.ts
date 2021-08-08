import { ascension } from "./ascension"
import { constellations } from "./constellations"
import { skills } from "./skills"
import { overview } from "./overview"
import { basicCharacteristics } from "./basicCharacteristics"

export const Ayaka = {
    key: 1,
    IMGname: 'Kamisato Ayaka',
    name: 'Аяка',
    element: 'Cryo',
    stars: 5,
    weapon: 'One-handed',
    aboutCharTabs: {
        overview: overview,
        skills: skills,
        constellations: constellations,
        ascension: ascension,
        basicCharacteristics: basicCharacteristics
    }
}