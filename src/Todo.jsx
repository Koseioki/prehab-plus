import Navigation from './components/Navigation';
import Notebook from './components/Notebook';

function Todo() {

      // get the current danish date
  const date = new Date();
  const options = { month: 'long', day: 'numeric', weekday: 'long' };
  const danishDate = date.toLocaleDateString('da-DK', options);
  console.log(danishDate);
  return (
    <>
    <Navigation />
    <Notebook>
    <h1>Min to-do liste</h1>
    <p>{danishDate}</p>
    </Notebook>

    </>
  );
}