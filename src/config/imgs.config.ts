import mail from '../assets/icons/mail.svg';
import ws from '../assets/icons/ws.svg';
import logo_lnm from '../assets/Logo-dorado-24.png';
import type { Imgs } from "../types/imgs.types";

export const imgs = {
  whatsapp: ws,
  mail: mail,
  logo: logo_lnm
} as const satisfies Imgs