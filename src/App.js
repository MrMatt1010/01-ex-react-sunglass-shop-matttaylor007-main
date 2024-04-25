import "./App.css";
import products from "./api/products.json";

const FilterBy = () => {
  return (
    <div className="filterBy">
      <label htmlFor="category">Filter by</label>
      <select id="category" defaultValue="all">
        <option value="all">All</option>
        <option value="accessories">Accessories</option>
        <option value="sunglasses">Sunglasses</option>
      </select>
    </div>
  );
};

const SortBy = () => {
  return (
    <div className="sortBy">
      <label htmlFor="sort">Sort by</label>
      <select id="sort" defaultValue="latest">
        <option value="latest">Latest</option>
        <option value="low">Price: Low</option>
        <option value="high">Price: High</option>
      </select>
    </div>
  );
};

const Product = ({ image, name, description }) => {
  return (
    <li className="product-grid-item">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <button>Buy now</button>
    </li>
  );
};

const Products = () => {
  return (
    <ul className="product-grid">
      <Product
        image={products[0].images[0]}
        name={products[0].name}
        description={products[0].description}
      />
      <Product
        image={products[1].images[0]}
        name={products[1].name}
        description={products[1].description}
      />
      <Product
        image={products[2].images[0]}
        name={products[2].name}
        description={products[2].description}
      />
      <Product
        image={products[3].images[0]}
        name={products[3].name}
        description={products[3].description}
      />
      <Product
        image={products[4].images[0]}
        name={products[4].name}
        description={products[4].description}
      />
      <Product
        image={products[5].images[0]}
        name={products[5].name}
        description={products[5].description}
      />
      <Product
        image={products[6].images[0]}
        name={products[6].name}
        description={products[6].description}
      />
      <Product
        image={products[7].images[0]}
        name={products[7].name}
        description={products[7].description}
      />
      <Product
        image={products[8].images[0]}
        name={products[8].name}
        description={products[8].description}
      />
      <Product
        image={products[9].images[0]}
        name={products[9].name}
        description={products[9].description}
      />
      <Product
        image={products[10].images[0]}
        name={products[10].name}
        description={products[10].description}
      />
      <Product
        image={products[11].images[0]}
        name={products[11].name}
        description={products[11].description}
      />
    </ul>
  );
};

const App = () => {
  return (
    <div className="container">
      <h1>Sunglass Shop</h1>
      <div className="toolbar">
        <FilterBy />
        <SortBy />
      </div>
      <Products />
    </div>
  );
};

export default App;
