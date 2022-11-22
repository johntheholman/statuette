import Footer from 'src/components/Footer'
import Header from 'src/components/Header'

const CategoryLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default CategoryLayout
