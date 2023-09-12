import { useEffect, useState } from 'react';
import Title from './components/Title';
import Tours from './components/Tours';
import Loading from './components/Loading';
import ErrorFetching from './components/ErrorFetching';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTours] = useState([]);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setIsError(true);
      }
      const tours = await response.json();
      setTours(tours);
    } catch (error) {
      alert(error);
      setIsLoading(false);
      setIsError(true);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (isError) {
    return (
      <main>
        <ErrorFetching />
      </main>
    );
  }

  return (
    <main>
      <section>
        {tours.length === 0 ? (
          <div className="title">
            <Title title="no tours left" />
            <button className="btn" onClick={() => fetchData()}>
              refresh
            </button>
          </div>
        ) : (
          <>
            <div className="title">
              <Title title="our tours" />
              <div className="title-underline" />
            </div>
            <Tours tours={tours} removeTour={removeTour} />
          </>
        )}
      </section>
    </main>
  );
};
export default App;
