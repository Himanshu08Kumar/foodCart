import data from '../backend/data/available-meals.json';
import Header from './components/Header';
function App() {
  console.log(data);
  return (
    <>
      <Header/>
      {/* <h1>You got this 💪</h1>
      <p>Stuck? Not sure how to proceed?</p>
      <p>Don't worry - we've all been there. Let's build it together!</p> */}
    </>
  );
}

export default App;
