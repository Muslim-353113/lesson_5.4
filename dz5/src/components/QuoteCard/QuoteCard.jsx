import styles from './QuoteCard.module.css'

export const QuoteCard = ({ quote, loading, onNext }) => {
  return (
    <main className={styles.card}>
      <h1 className={styles.title}>💬 Случайная цитата</h1>

      {loading ? (
        <p className={styles.loading}>Загрузка…</p>
      ) : (
        <>
          <blockquote className={styles.text}>«{quote.text}»</blockquote>
          <p className={styles.author}>— {quote.author}</p>
        </>
      )}

      <button className={styles.button} onClick={onNext} disabled={loading}>
  Показать другую цитату
    </button>
    </main>
  )
}