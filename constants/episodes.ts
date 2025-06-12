import { Episode } from "@/constants/types";

const DEFAULT_EPISODES: Episode[] = [
  {
    season: 1,
    episode: 1,
    title: "Simpsons Roasting on an Open Fire",
    description:
      "Es Navidad y Homer no recibe su bono navideño. La familia debe encontrar una manera de celebrar las fiestas sin dinero.",
    ageRating: "ATP",
    image: "🎄",
  },
  {
    season: 2,
    episode: 9,
    title: "Itchy & Scratchy & Marge",
    description:
      "Marge inicia una campaña contra la violencia en televisión después de que Maggie ataque a Homer.",
    ageRating: "ATP",
    image: "📺",
  },
  {
    season: 4,
    episode: 12,
    title: "Marge vs. the Monorail",
    description:
      "Un vendedor convence a Springfield de construir un monorriel, pero Marge sospecha que algo no está bien.",
    ageRating: "ATP",
    image: "🚝",
  },
  {
    season: 5,
    episode: 2,
    title: "Cape Feare",
    description:
      "Sideshow Bob sale de prisión y persigue a Bart. La familia debe entrar en el programa de protección de testigos.",
    ageRating: "SAM 13",
    image: "🔪",
  },
  {
    season: 6,
    episode: 25,
    title: "Who Shot Mr. Burns?",
    description:
      "El Sr. Burns es disparado y toda Springfield es sospechosa. ¿Quién pudo haber sido el culpable?",
    ageRating: "SAM 13",
    image: "🔫",
  },
  {
    season: 7,
    episode: 6,
    title: "Treehouse of Horror VI",
    description:
      "Tres historias de terror: Attack of the 50-Foot Eyesores, Nightmare on Evergreen Terrace y Homer³.",
    ageRating: "SAM 16",
    image: "👻",
  },
  {
    season: 8,
    episode: 23,
    title: "The Springfield Files",
    description:
      "Homer cree haber visto un extraterrestre en el bosque. Mulder y Scully llegan para investigar.",
    ageRating: "SAM 13",
    image: "👽",
  },
];

export { DEFAULT_EPISODES };
