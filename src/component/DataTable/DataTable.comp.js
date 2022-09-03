import React, { useEffect, useState } from "react";
import classes from "./DataTable.module.css";
import FeatherIcon from "feather-icons-react";
import DataTableItem from "./Item/DataTableItem.comp";

const DataTable = ({ data, changeStatus, actions }) => {
  const [tableData, setTableData] = useState(data);
  const order = Object.keys(data[0]);

  const [searchParams, setSearchParams] = useState(null);

  const onAccept = (index, id) => changeStatus("confirmed", index, id);
  const onDecline = (index, id) => changeStatus("cancelled", index, id);

  const onChangeSearch = (e) =>
    setSearchParams(e.target.value.trim().toLowerCase());

  const searchParamsFunction = (table) => {
    let searching = table;
    if (searchParams === "" || searchParams === null) return table;
    else {
      searching = searching.filter((d) => {
        const name = d.product.name.toLowerCase();
        return name.includes(searchParams);
      });

      return searching;
    }
  };

  const filterByName = (data, index) => {
    let filterData = tableData;

    filterData = filterData.sort(function (a, b) {
      return a[data] - b[data];
    });
    console.log(filterData);
    setTableData([...filterData]);
  };

  useEffect(() => {
    searchParamsFunction(tableData);
  }, [searchParams, tableData]);

  return (
    <div className={classes.data__table}>
      <div className={classes.options_filter}>
        <div className={classes.search__data}>
          <FeatherIcon icon="search" />
          <input
            type="text"
            placeholder="Search Orders by id , user , product or something else"
            onChange={onChangeSearch}
          />
        </div>
        <div className={classes.actions__container}>
          <FeatherIcon icon="filter" />
          <p>Filter</p>
        </div>
        <div className={classes.actions__container}>
          <FeatherIcon icon="file-plus" />
          <p>Export</p>
        </div>
      </div>
      <table className={classes.data__table__wrapper}>
        <tr>
          {order.map((order, index) => (
            <th key={index} onClick={(e) => filterByName(order, index)}>
              {order.split("_").join(" ")}
            </th>
          ))}
          <th></th>
        </tr>
        {searchParamsFunction(tableData).map((data, index) => {
          return (
            <DataTableItem
              key={index}
              onAccept={onAccept}
              onDecline={onDecline}
              data={data}
              index={index}
              actions={actions}
            />
          );
        })}
      </table>
    </div>
  );
};

export default DataTable;
