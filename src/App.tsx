import React, { useState } from 'react';
import './App.css';
import Card from './Card'

const shuffle = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export async function http(
  request: RequestInfo
): Promise<any> {
  const response = await fetch(request);
  const body = await response.json();
  return body;
}

const planes = await http(
  "https://api.scryfall.com/cards/search?q=t:plane"
);
const phenoms = await http(
  "https://api.scryfall.com/cards/search?q=t:phenomenon"
);

let data = planes.data.concat(phenoms.data)
console.log(data)
let cards = shuffle(data)
let nextCard_ = cards.pop()

function App() {

  const [nextCard, setNextCard] = useState(nextCard_)


  return (
    <div className="App">

      <header className="App-header">

        <button onClick={() => setNextCard(cards.pop())}>
          Next Card
        </button>


        <Card img_uri={nextCard.image_uris.png} title={nextCard.name} />
      </header>
    </div>
  )
}

export default App;
