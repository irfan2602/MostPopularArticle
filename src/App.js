import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import ArticleCard from './components/ArticleCard/ArticleCard';
import useFetch from './components/UseFetch/useFetch';
import Footer from './components/Footer/Footer';

function App() {
  const [data] = useFetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=hlmCaNoX5Nl8DD0HtY27CURxbn8jsfBP')
  console.log(data)
  return (
    <div >
      <div>
        <Header />
      </div>
      <div className='articleContainer' >
        {
          data.results && data.results.map((res) => (
            <ArticleCard
              link={res.url}
              heading={res.title}
              summary={res.abstract}
              writer={res.byline}
              title={res.source}
              pulishDate={res.published_date}
              updateDate={res.updated}
              section={res.section} />))
        }
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
