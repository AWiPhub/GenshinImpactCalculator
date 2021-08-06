import { charactersFilter } from "./filtersList/charactersFilter"
import { artifactsFilter } from "./filtersList/artifactsFilter"

export const filter = [
    {
        type: "characters",
        charactersFilter
    },
    {
        type: "artifacts",
        artifactsFilter
    }
]