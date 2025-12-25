import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getLogo(company: string) {
  switch (company) {
    case "Personal":
      return "/personal-logo3.png";
    case "TVS":
      return "/tvs-logo.png";
    case "VEC":
      return "/vec-logo.png";
    default:
      return "/templateProjectImg.png";
  }
}