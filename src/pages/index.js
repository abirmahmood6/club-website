import styles from '../styles/Home.module.css'
import axios from 'axios'

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Home Page</h1>
    </div>
  )
}

export const getStaticProps = async (context) => {
  const data = await axios.get('http://localhost:3000/api/hello/')
  console.log(data)
  return {
    props: {},
  }
}

export default Home
