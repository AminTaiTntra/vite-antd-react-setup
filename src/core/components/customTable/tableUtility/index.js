import { Table } from "antd";

const getSingleSortingOrder = ({ order, columnKey }) => {
  if (!order) {
    return "";
  }
  if (order === "ascend") {
    return columnKey;
  } else {
    return `-${columnKey}`;
  }
};

const RenderFooter = ({ current_page, page_size, total_entries, next }) => {
  const pageEnd = next == null ? total_entries : current_page * page_size;
  return (
    <div className='show-record'>
      <span>
        Page
        {(current_page - 1) * page_size + 1}-{pageEnd}
      </span>
      <span>
        of
        {total_entries}
      </span>
    </div>
  );
};

const getMultipleSortingOrder = (sorter) => {
  return sorter.map(({ order, columnKey }) => getSingleSortingOrder({ order, columnKey }));
};

const tableSummary = (summary) => (
  <Table.Summary.Row>
    {[...Array(summary?.totalCol).keys()].map((_, index) => (
      <Table.Summary.Cell key={index}>
        <span style={{ fontWeight: "bold" }}>
          {summary?.hasOwnProperty(index) ? summary[index] : ""}
        </span>
      </Table.Summary.Cell>
    ))}
  </Table.Summary.Row>
);

export { getSingleSortingOrder, getMultipleSortingOrder, RenderFooter, tableSummary };