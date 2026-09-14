import { Search } from "lucide-react";
import "./SearchBar.css";

interface IPlaceholder {
  placeholder: string;
}

const SearchBar = ({ placeholder }: IPlaceholder) => {
  return (
    <div className="search-bar">
      <Search className="search-icon" />

      <input
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;