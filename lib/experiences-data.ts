export interface ExperienceItem {
  id: string
  company: string
  companyUrl: string
  position: string
  period: string
  location: string
}

export const experiences: ExperienceItem[] = [
  {
    id: "nauto",
    company: "Nauto",
    companyUrl: "https://nauto.com",
    position: "Frontend Software Engineer",
    period: "Dec 2025 to Present",
    location: "Argentina"
  },
  {
    id: "mercadolibre",
    company: "MercadoLibre",
    companyUrl: "https://mercadolibre.com",
    position: "Frontend Software Engineer",
    period: "2023 to Dec 2025",
    location: "Argentina"
  },
  {
    id: "enviopack",
    company: "Enviopack",
    companyUrl: "https://enviopack.com",
    position: "Frontend Software Engineer",
    period: "2022 to 2023",
    location: "Argentina"
  }
]
