import DocumentHead from '../components/document-head'
import ExtLink from '../components/ext-link'
import styles from '../styles/page.module.css'
import Typed from 'react-typed'

const ucapan = [
  'Hallo!',
  'Selamat datang! 👋'
]

const RenderPage = () => (
  <div className={styles.container}>
    <DocumentHead />

    <div>
      <h2>
      {' '}
          <Typed
                loop
                typeSpeed={160}
                backSpeed={20}
                strings={ucapan}
                smartBackspace
                backDelay={1000}
                loopCount={1}
                showCursor
                cursorChar="|"
          />
      </h2>
      <br/>
      <p>Silakan hubungi saya jika ada pertanyaan !</p>
      <p></p>
      <p>
        Contact{' '}
        <ExtLink href="https://wa.me/6282280781433">
          WhatsApp
        </ExtLink>
      </p>
    </div>
  </div>
)

export default RenderPage
