export interface Book {
  id: string
  title: string
  author: string
  amazonUrl: string
}

export const CURRENTLY_READING_BOOKS: Book[] = [
  {
    id: "system-design-interview",
    title: "System Design Interview An Insider's Guide",
    author: "Alex Xu",
    amazonUrl: "https://www.amazon.com/System-Design-Interview-insiders-Second/dp/B08CMF2CQF"
  },
  {
    id: "philosophy-software-design",
    title: "A Philosophy of Software Design",
    author: "John Ousterhout",
    amazonUrl: "https://www.amazon.com/Philosophy-Software-Design-John-Ousterhout/dp/1732102201"
  }
]
