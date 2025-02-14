import React from "react";
import amazon from "./Assets/images/amazon.png";
import logo from "./Assets/images/cart.jpg";
import "./Amazon.css";

//  Class Component
export default class Amazon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartCount: 0,  
    };
  }
  // Function to increase  count
  addToCart = () => {
    this.setState((prevState) => ({
      cartCount: prevState.cartCount + 1,
    }));
  };
  // Product info
  render() {
    // Array of products with name, price, and image
    const products = [
      { name: "CPU Processor Chip", price: "₹3000", image: "https://s.yimg.com/ny/api/res/1.2/SENX8L7hiDM7I813Gp6d3Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQzMw--/https://o.aolcdn.com/hss/storage/midas/fd51ed18dc56eb7efe37ca0fdee37a6/205318902/Intel+Core+i9+x+series.jpg"},
      { name: "CPU Cooling Fan ", price: "₹3,500", image: "https://www.dealsplant.com/cdn/shop/products/dealsplant-laptops-computer-peripherals-cpu-cooler-fan-11297272135755.jpg?v=1647759721" },
      { name: "MotherBoard", price: "₹11,400", image: "https://m.media-amazon.com/images/I/71zMsBQQrwL._AC_UF1000,1000_QL80_.jpg" },
      { name: "Graphic Card", price: "₹25,000", image: "https://m.media-amazon.com/images/I/81dwV4r1VaL.jpg" },
      { name: "Memory", price: "₹4,559", image: "https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/D2/9B/b55e7bf4-3781-4236-97a3-a105f4d7ec0e.jpg" },
      { name: "SSD", price: "₹7,089", image: "https://ae01.alicdn.com/kf/H2406d378b8c14a41bdc2b5eadf3fc3f5c.jpg" },
      { name: "Power Supply", price: "₹5,375", image: "https://image.made-in-china.com/202f0j00JSmlthvbyeqL/1000W-High-End-Gaming-80plus-Gold-Certified-Power-Supply-PSU.webp" },
      { name: "Cabinet", price: "₹11,500", image: "https://computechstore.in/wp-content/uploads/2024/03/Ant-Esports-205-Air-ARGB-Gaming-Cabinet-Black-1-e1709362042838.jpg" },
      { name: "Monitor ", price: "₹37,599", image: "https://www.fix4less.com/wp-content/uploads/2021/02/Acer-LED-moniter-21-FHD-EB-Series-159.99.jpg" },
      { name: "Router", price: "₹2,000", image: "https://blog.teufelaudio.com/wp-content/uploads/2017/06/what-is-a-router.jpg" },
      { name: "Printer", price: "₹19,499", image: "https://in-media.apjonlinecdn.com/catalog/product/2/8/28C12A-1_T1680352069.png" },
      { name: "Keyboard", price: "₹2,500", image: "https://media.croma.com/image/upload/v1681404931/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/257348_0_lpyooa.png" },
      { name: "Mouse", price: "₹4,639", image: "https://id-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/h/p/hp_240_bluetooth_mouse_jetblack_coreset_topdown_1.png" },
      { name: "Ports", price: "₹1,149", image: "https://m.media-amazon.com/images/I/61Q+pBh+4sL._AC._SR360,460.jpg" },
      { name: "HeadPhone", price: "₹4,500", image: "https://www.ezpzsolutions.in/wp-content/uploads/2021/11/Razer-Kraken-for-Console-1-300x300.jpg" },
    ];
    return (
      <div className="cart-main-container">
       {/* Header */}
        <div className="cart-container">
          <img src={amazon} style={{height:"200px", width:"240px"}}></img>
          <div className="search-container">
            <button type="text">Search</button>
          </div>
          <img src={logo} alt="Cart Logo" className="cart-logo" />
        </div>

         {/* Product section */}
        <h1 className="heading">CPU Parts</h1>
        <div className="product-container">
          {products.map((product, index) => (
            <div key={index} className="product-box">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <button className="add-to-cart" onClick={this.addToCart}>Add to Cart</button>  
            </div>
          ))}
        </div>
      </div>
    );
  }
}

