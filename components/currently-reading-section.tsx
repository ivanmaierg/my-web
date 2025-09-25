import { memo } from "react"
import { Section } from "./section"
import { ExternalLinkIcon } from "./external-link-icon"
import { Book, CURRENTLY_READING_BOOKS } from "@/lib/books-data"

interface CurrentlyReadingProps {
  books?: Book[]
}

interface BookItemProps {
  book: Book
}

const BookItem = memo(({ book }: BookItemProps) => (
  <article className="group">
    <h3 className="font-medium mb-1">
      <a 
        href={book.amazonUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-sm inline-flex items-center gap-1"
        aria-label={`View ${book.title} by ${book.author} on Amazon`}
      >
        {book.title}
        <ExternalLinkIcon />
      </a>
    </h3>
    <p className="text-muted-foreground">
      by <span className="font-medium">{book.author}</span>
    </p>
  </article>
))

BookItem.displayName = "BookItem"

export const CurrentlyReadingSection = memo(({ books = CURRENTLY_READING_BOOKS }: CurrentlyReadingProps) => {
  if (!books || books.length === 0) {
    return (
      <Section title="Currently Reading">
        <div className="text-sm text-muted-foreground border-b border-border pb-6 mobile:pb-8">
          <p>No books currently being read.</p>
        </div>
      </Section>
    )
  }

  return (
    <Section title="Currently Reading">
      <div className="text-sm text-foreground leading-relaxed border-b border-border pb-6 mobile:pb-8">
        <ul className="space-y-4" role="list">
          {books.map((book) => (
            <li key={book.id}>
              <BookItem book={book} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
})

CurrentlyReadingSection.displayName = "CurrentlyReadingSection"
