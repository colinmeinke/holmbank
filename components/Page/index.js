import config from '../../config/style'
import Head from 'next/head'
import Header from '../Header'
import Post from '../Post'
import React from 'react'

export default () => (
  <div>
    <Head>
      <title>
        Holmbank - Stories from my Flying Logbook – And other scary tales
      </title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <style>{`
        html {
          color: ${config.font.color.strong};
          line-height: ${config.font.lineHeight};
          font-family: 'Droid', 'Helvetica', 'Arial', sans-serif;
          font-size: ${config.font.size.medium}px;
        }

        body {
          background: ${config.block.color.dark.background};
          margin: 0;
        }

        article,
        footer,
        header,
        main,
        nav,
        section {
          display: block;
        }

        h1,
        h2,
        h3,
        h4,
        p {
          font-size: 100%;
          margin: 0;
        }

        img {
          border: 0;
          maxWidth: 100%;
        }
      `}</style>
    </Head>

    <Header />

    <Post
      title="The Start Of It All"
      published="16 June 2015"
    >
      <h4>
        April 5 1965 – Jet Provost Mk3 XM 416.
      </h4>

      <p>
        My Royal Air Force flying instructor, Pete A. was not so sure.
        I’d had several flying training flights totalling 14 hours already
        but a lack of confidence (mine – and his in me) meant my first
        solo flight had been delayed. So all of my flights had been with
        an instructor.
      </p>

      <p>
        In 1965, towards the end of the cold war, but with other regional
        conflicts the RAF was still very busy training pilots. With several
        training airfields, the failure rate of trainee pilots was low but
        not uncommon and, from time to time, accidents did occur.
      </p>

      <p>
        This day, we flew from our base, RAF Church Fenton, to a satellite
        training airfield, RAF Elvington also in Yorkshire, and flew a few
        more circuits in order to practice landings.
      </p>

      <img
        src="/static/images/Jet-Provost-Mk3-XM-416-1.jpg"
        width="300"
        height="284"
        alt="Inside a Jet Provost Mk3 XM 416"
      />

      <p>
        Elvington had been a wartime Halifax bomber airfield, possessing
        a very long runway but, by 1965 it was little used. On April 5th
        the weather was perfect, cold with a light wind. The aircraft was
        a Jet Provost – a small two seater (side-by-side) RAF training
        aircraft with a jet engine.
      </p>

      <p>
        After the fourth circuit and landing we taxied back to the
        take-off point. Pete, my instructor, gave me instruction on flying
        the next circuit without him. Just before he got out of the cockpit
        he told me sternly – “Fly just one circuit and landing and taxi
        back to this point. Remember, if anything BUT ANYTHING goes
        wrong – EJECT!!”
      </p>

      <img
        src="/static/images/Jet-Provost-Mk3-XM-416-2.jpg"
        width="142"
        height="300"
        alt="Jet Provost Mk3 XM 416 in the log book"
      />

      <p>
        Outcome – I flew the circuit and landed without a major problem
        and continued through flying training. Just a few months later, on
        my 21st birthday, I found myself in a old Tiger Moth aircraft at
        Fairoaks grass airfield “upside down, nothing on the clock except
        for the makers name. And that was Smiths”.
      </p>
    </Post>
  </div>
)
