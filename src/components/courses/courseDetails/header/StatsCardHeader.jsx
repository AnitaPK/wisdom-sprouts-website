// StatsCards.jsx
import React from 'react'
import styles from './StatsCardHeader.module.css'

export default function StatsCards({ items }) {
  const defaultItems = [
    { value: '95%', label: 'Placement rate' },
    { value: '1200+', label: 'Companies Hiring' },
    { value: '128%', label: 'Average hike' },
    { value: '1.5 L+', label: 'Learners' },
  ]

  const data = Array.isArray(items) && items.length ? items : defaultItems

  return (
    <section className={`container my-4`}>
      {/* Apply statStrip to the row container for the overall light teal background */}
      <div className={`row g-0 justify-content-center align-items-stretch ${styles.statStrip}`}>
        {data.map((item, idx) => (
          /* col-6: 2 cards per row on mobile (xs)
            col-md-3: 4 cards per row on desktop (md and up)
            d-flex: Ensures equal height for cardBox (flex-grow: 1)
          */
          <div 
            key={idx} 
            className="col-6 col-md-3 d-flex"
          >
            {/* Apply the divider class here. The CSS will handle which borders are visible. */}
            <div className={`${styles.cardBox} ${styles.divider} text-center`}>
              <div className={styles.cardValue}>{item.value}</div>
              <div className={styles.cardLabel}>{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}