import { StyledButton, StyledProductCard, StyledText } from "./styles";
import CartImg from "../../assets/icons/smallcart.svg";

interface ProductProps {
  id: number;
  name: string;
  price: number;
  img: string;
}
const ProductCard = ({ id, name, price, img }: ProductProps) => {
  return (
    <StyledProductCard>
      <div>
        <img src={img} alt={name} width={150} />
      </div>
      <StyledText>
        <span className="smallText">{name}</span>
        <strong>
          <span>R$ {price.toFixed(2)}</span>
        </strong>
      </StyledText>
      <div>
        <StyledButton>
          <img src={CartImg} alt="adicionar ao carrinho" /> Adicionar ao
          carrinho
        </StyledButton>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
