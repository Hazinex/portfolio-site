import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getLogo(company: string) {
  switch (company) {
    case "Personal":
      return "/company-logos/personal-logo.png";
    case "TVS":
      return "/company-logos/tvs-logo.png";
    case "VEC":
      return "/company-logos/vec-logo.png";
    default:
      return "/templateProjectImg.png";
  }
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
}