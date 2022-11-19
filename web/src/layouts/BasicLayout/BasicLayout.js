import Footer from 'src/components/Footer'
import Header from 'src/components/Header'

const BasicLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default BasicLayout
