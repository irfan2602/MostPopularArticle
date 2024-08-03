import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import useFetch from './components/UseFetch/useFetch';
import Footer from './components/Footer/Footer';
import React, { Suspense } from 'react';
const ArticleCard = React.lazy(() => import('./components/ArticleCard/ArticleCard'))

localStorage.setItem('apiKey','hlmCaNoX5Nl8DD0HtY27CURxbn8jsfBP')
const apiKey = localStorage.getItem('apiKey')
function App() {
  const [data] = useFetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${apiKey}`)
  
  console.log(data)
  return (
    <div >
      <div>
        <Header />
      </div>
      <div className='articleContainer' >
        <Suspense fallback={<div>Loading...</div>} >
          {
            data.results && data.results.map((res) => (
              <ArticleCard
                link={res.url}
                heading={res.source}
                summary={res.abstract}
                writer={res.byline}
                title={res.title}
                pulishDate={res.published_date}
                updateDate={res.updated}
                section={res.section} />))
          }
        </Suspense>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
