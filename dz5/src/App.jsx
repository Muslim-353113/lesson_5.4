import { useEffect, useState } from 'react'
import { QuoteCard } from './components'
import { QUOTES } from './data/quotes'
import styles from './App.module.css'

const getRandomQuote = (currentId = null) => {
  let next
  do {
    next = QUOTES[Math.floor(Math.random() * QUOTES.length)]
  } while (QUOTES.length > 1 && next.id === currentId)
  return next
}

export const App = () => {
  const [quote, setQuote] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuote(getRandomQuote())
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleNext = () => {
    setLoading(true)                       
    setTimeout(() => {
      setQuote((prev) => getRandomQuote(prev?.id))
      setLoading(false)
    }, 500)
  }

  return (
    <div className={styles.app}>
      <QuoteCard
        quote={quote}
        loading={loading}
        onNext={handleNext}
      />
    </div>
  )
}