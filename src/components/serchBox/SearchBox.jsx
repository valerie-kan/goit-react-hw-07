import { useDispatch, useSelector } from "react-redux";

import css from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const filterWord = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <label className={css.searchBox}>
      <span>Find contacts by name</span>
      <input
        className={css.searchInp}
        type="text"
        name="filter"
        value={filterWord}
        onChange={(evt) => {
          const action = changeFilter(evt.target.value);
          dispatch(action);
        }}
      />
    </label>
  );
};

export default SearchBox;
