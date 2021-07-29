import '../styles/globals.css'

//import awsExports from '../components/aws-exports'
//Amplify.configure({ ...awsExports, ssr: true })

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
