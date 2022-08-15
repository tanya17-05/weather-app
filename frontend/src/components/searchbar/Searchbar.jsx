import "./searchbar.scss";

const Searchbar = ({ searchArray, setSearchArray }) => {
  const handleForm = (e) => {
    e.preventDefault()
    const text = e.target[0].value
    const searchTextArray = text.split(',')
    // console.log(searchTextArray)
    setSearchArray(searchTextArray)
  }

  return (
    <div className="searchbar">
      <form onSubmit={(e)=>handleForm(e)}>
        <input type="text" placeholder="cities" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Searchbar;
