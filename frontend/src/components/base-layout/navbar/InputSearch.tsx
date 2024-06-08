import { StyledSearchBar, StyledSearchInput } from "./styles";
import SearchImg from "../../../assets/icons/search.svg";

const InputSearch = () => {
  return (
    <StyledSearchBar>
      <StyledSearchInput type="text" />
      <img src={SearchImg} />
    </StyledSearchBar>
  );
};

export default InputSearch;
