import Card from "./pages/Card/Card";
import flower from "./pages/Media/flower.jpg"
import earth from "./pages/Media/earth.jpg"
import pinky from "./pages/Media/pinky.jpg"
function App() {
  return (
    <>
      <Card
        img={flower}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life lessons with CandyPixya"
        price={136}
      />
      <Card
        img={earth}
        rating="4.0"
        reviewCount={10}
        country="Space"
        title="I Know You"
        price={200}
      />
      <Card
        img={pinky}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Make the world pink"
        price={136}
      />
    </>
  );
}

export default App;
