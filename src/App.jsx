import { useState } from 'react';
import Title from './components/Title';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isEmtpy, setIsEmtpy] = useState(false);
  return (
    <main>
      <section>
        {isEmtpy ? (
          <div className="title">
            <Title title="our tours" />
          </div>
        ) : (
          <div className="title">
            <Title title="no tours left" />
          </div>
        )}
      </section>
    </main>
  );
};
export default App;
