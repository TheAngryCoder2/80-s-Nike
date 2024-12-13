import Hero from './Sections/Hero'
import Footer from './Sections/Footer'
import PopularProducts from './Sections/PopularProducts'
import SpecialOffer from './Sections/SpecialOffer'
import Subscribe from './Sections/Subscribe'
import SuperSpecial from './Sections/SuperSpecial'
import Nav from './Components/nav'



const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperSpecial />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>

  </main>
)

export default App