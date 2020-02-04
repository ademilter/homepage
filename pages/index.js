import React from 'react'
import Typist from 'react-typist'

export default function Index() {
  const hours = new Date().getHours()
  const isNoon = hours > 11 && hours < 18
  const isEvening = (hours >= 0 && hours <= 4) || (hours >= 18 && hours <= 23)

  let hey = 'Good morning'
  if (isNoon) hey = 'Good afternoon'
  else if (isEvening) hey = 'Good evening'

  return (
    <>
      <div className="hero">
        <div className="limit">
          <Typist
            startDelay={2000}
            cursor={{ element: '▍' }}
          >
            <span className="fw-l">
              <span>Hey,</span>
              <Typist.Backspace count={4} delay={500} />
              <span>{hey}</span>
            </span>
            <Typist.Delay ms={500} />
            <br />
            <Typist.Delay ms={500} />
            <br />
            <Typist.Delay ms={1000} />
            <span>
              I build pixel-perfect pages, smooth animations and performant web
              applications.
            </span>
            <Typist.Delay ms={500} />
            <br />
            <Typist.Delay ms={500} />
            <br />
            <Typist.Delay ms={1000} />
            <span>✌️</span>
          </Typist>
        </div>
      </div>

      <style jsx>{`
        .limit {
          max-width: 1200px;
        }
        .hero {
          font-weight: bold;
          padding: 3rem 2rem;
          font-size: 8vw;
        }
        @media (min-width: 600px) {
          .hero {
            font-size: 5vw;
          }
        }
      `}</style>
      <style global jsx>{`
        .Cursor {
          display: inline-block;
          margin-left: 5px;
          opacity: 1;
          animation: blink 1s linear infinite;
        }
        @keyframes blink {
          to {
            opacity: 0;
          }
        }
        .fw-l {
          font-weight: normal;
        }
      `}</style>
    </>
  )
}
