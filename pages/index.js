import React from 'react'
import Typist from 'react-typist'

export default function Index() {
  const hours = new Date().getHours()
  const isNoon = hours > 11 && hours < 18
  const isEvening = (hours >= 0 && hours <= 4) || (hours >= 18 && hours <= 23)

  let welcome = 'Good morning'
  if (isNoon) welcome = 'Good afternoon'
  else if (isEvening) welcome = 'Good evening'

  return (
    <>
      <div className="hero">
        <div className="limit">
          <Typist startDelay={2000} cursor={{ element: '▍' }}>
            <span className="t-regular">
              <span>Hey,</span>
              <Typist.Backspace count={4} delay={500} />
              <span>{welcome}</span>
            </span>
            <Typist.Delay ms={500} />
            <br />
            <Typist.Delay ms={500} />
            <br />
            <Typist.Delay ms={500} />
            <span>
              I build pixel-perfect pages, smooth animations and performant web
              applications.
            </span>
            <Typist.Delay ms={500} />
            <br />
            <Typist.Delay ms={500} />
            <br />
            <Typist.Delay ms={500} />
            <span>✌️ 💯 🧿</span>
            <Typist.Delay ms={500} />
            <br />
            <Typist.Delay ms={500} />
            <br />
            <Typist.Delay ms={500} />
            <br />
            <Typist.Delay ms={500} />
            <span className="t-regular">
              <a href="https://twitter.com/ademilter">Twitter</a>
              <br />
              <Typist.Delay ms={500} />
              <a href="https://www.youtube.com/user/ademilter/">Youtube</a>
              <br />
              <Typist.Delay ms={500} />
              <a href="https://github.com/ademilter">Github</a>
              <br />
              <Typist.Delay ms={500} />
              <a href="https://www.instagram.com/ademilter/">Instagram️</a>
            </span>
            <Typist.Delay ms={500} />
            <br />
            <Typist.Delay ms={500} />
            <br />
            <Typist.Delay ms={500} />
            <br />
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
          font-size: 9vw;
        }
        .welcome {
          font-weight: normal;
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
      `}</style>
    </>
  )
}
