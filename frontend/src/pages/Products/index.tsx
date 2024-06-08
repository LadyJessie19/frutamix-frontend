import ProductCard from "../../components/ProductCard";
import {
  ButtonHeader,
  HeaderSection,
  ProductsDisplay,
  StyledSection,
} from "./styles";
import ArrowImg from "../../assets/icons/arrow.svg";
import { products } from "../../data/products";

const Products = () => {
  return (
    <>
      <StyledSection>
        <HeaderSection>
          <div>
            <ButtonHeader>Mais Vendidos</ButtonHeader>
            <img src={ArrowImg} alt="seta do menu de filtragem" />
          </div>
        </HeaderSection>

        <ProductsDisplay>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              img={product.img}
            />
          ))}
        </ProductsDisplay>
      </StyledSection>
    </>
  );
};

export default Products;
