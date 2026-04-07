import type { Cg_Config } from "../types/container-general.types";
import { imgs } from "./imgs.config";

export const cg_config = {
  cg: {
    class: 'container-general'
  },
  logo: {
    class: 'logo',
    src: imgs.logo,
    alt: 'logo'
  },
  title: {
    class: 'title',
    text: 'The Soul Of Your Wedding In Cartagena'
  }
} as const satisfies Cg_Config