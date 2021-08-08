import React, { useCallback } from "react";
import { Input } from "antd";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import { edit } from "../store/search/actions";

const { Search } = Input;

const SearchTodo = ({ editSearch }) => {
  const handleChangeSearch = useCallback(
    (e) => {
      editSearch(e.target.value);
    },
    [editSearch]
  );

  return (
    <div>
      <Search
        placeholder="Search..."
        onChange={handleChangeSearch}
        style={{
          width: "15%",
          marginTop: "10px",
          marginRight: "30%",
          marginBottom: "10px",
        }}
      />
    </div>
  );
};

const mapDispatchToProps = {
  editSearch: edit,
};

export default connect(null, mapDispatchToProps)(SearchTodo);
