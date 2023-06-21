import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ProductDetail from "./ProductDetail";
import { Outlet, useNavigate } from "react-router-dom";

const productList = [
  {
    id: 0,
    img: "https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/March2023/meme-meo-6_35.jpg",
    title: "Đây là Phước",
    body: "Cái thứ mù quáng ",
  },
  {
    id: 1,
    img: "https://phunugioi.com/wp-content/uploads/2022/04/Anh-meme-meo-1.jpg",
    title: "Đây là kẹo bông gòn",
    body: "Ỏ ",
  },
];
function Product() {
  const navigate = useNavigate();
  const [products, setProducts] = useState(productList);
  useEffect(() => localStorage.setItem("product", JSON.stringify(products)), []);
  return (
    <div className="container d-flex">
      <Outlet />
      {products.map((product) => (
        <Card style={{ width: "18rem", margin: "10px" }} key={product.id}>
          <Card.Img variant="top" src={product.img} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.body}</Card.Text>
            <Button
              variant="primary"
              onClick={() => navigate(`/product/productDetail/${product.id}`)}
            >
              Go to detail
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Product;
