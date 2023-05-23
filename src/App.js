import './index.css';
import Product from './components/Product';

// images
import one from "./images/one.jpg"
import two from "./images/two.jpg"
import three from "./images/three.jpg"
import four from "./images/four.jpg"
import five from "./images/five.jpg"

function App() {

  let products = [
    {
      img: one,
      infoOne: "EMKO",
      infoTwo: "FURNITURE",
      titleOne: "ENKO",
      titleTwo: "furniture",
    },
    {
    img: two,
      infoOne: "FINEMATTER",
      infoTwo: "E-COMMERCE",
      titleOne: "FINEMATTER",
      titleTwo: "jewellery",
    },
    {
    img: three,
      infoOne: "MANHAIMER",
      infoTwo: "E-COMMERCE",
      titleOne: "MANHAIMER",
      titleTwo: "berlin",
    },
    {
    img: four,
      infoOne: "PESONA",
      infoTwo: "GALLERY",
      titleOne: "PERSONA",
      titleTwo: "gallery",
    },
    {
    img: five,
      infoOne: "VONHEILIG",
      infoTwo: "STUDIO",
      titleOne: "VONHEILIG",
      titleTwo: "studio",
    },
  ]
  return (
    <div className="App">
      <nav>
        <h3 id='title'>R-D</h3>

        <div className="links">
          <h3>WORK</h3>
          <h3>ABOUT</h3>
          <h3>PLAYGROUND</h3>
          <h3>CONTACT</h3>
        </div>
      </nav>

        <div className="productContainer">
        {
          products.map(product => {
            return <Product
              img={product.img}
              infoOne={product.infoOne}
              infoTwo={product.infoTwo}
              titleOne = {product.titleOne}
              titleTwo={product.titleTwo}/>
          })
        }
        </div>
    </div>
  );
}

export default App;
