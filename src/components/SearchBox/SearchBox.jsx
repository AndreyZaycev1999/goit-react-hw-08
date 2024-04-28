import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlices";

const useFilterValue = () => useSelector(selectNameFilter);

const SearchBox = () => {
  const dispatch = useDispatch();
  const nameFilter = useFilterValue();

  const handleChange = (e) => {
    const filterValue = e.target.value;

    dispatch(changeFilter(filterValue));
  };

  return (
    <div className={css.search_box}>
      <label>
        Find contacts by name
        <input
          type="text"
          placeholder="Search..."
          value={nameFilter}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default SearchBox;
