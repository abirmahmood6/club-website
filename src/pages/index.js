import dynamic from 'next/dynamic'

const HomePage = dynamic(() => import('@screens/HomePage'), {
  ssr: false,
})

const Home = () => <HomePage />

export default Home
