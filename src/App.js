import Hero from './components/Hero'
import NewestDeals from './components/NewestDeals'
import AboutUs from './components/AboutUs'
import BestDeals from './components/BestDeals'
import Footer from './components/Footer'


function App() {
  return (
    <div className='App'>
      <div className='w-11/12 md:4/5 m-auto'>
      <Hero/>
      <NewestDeals/>
      <AboutUs/>
      <BestDeals/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
