interface IPlaceholder {
  placeholder: string;
}

const SearchBar = ({ placeholder }: IPlaceholder) => {
  return (
    <div>
        <input type="text" placeholder={placeholder} />
    </div>
  )
}

export default SearchBar