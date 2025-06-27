
import { RenderFooter } from "./tableUtility";
import { Table } from "antd";
import Column from "antd/lib/table/Column";
import { tableSrNumber } from "../../../utility";

const CustomTable = ({
  rowData = [],
  children,
  scroll,
  summary,
  isLoading,
  isSearchStatus = false,
  pagination = {},
  handlePageChange = () => {},
  EditableRow,
  EditableCell,
  component,
  rowSelection = {},
  isRowSelection = false,
  isSRNumber = false,
  isShowTotal = false,
  rowKey = "id",
  position,
  editHandler,
  saveHandler,
  cancelHandler,
  deleteHandler,
  isPagination = false,
  className,
  pageSizeOptions = ["10", "20", "50", "100"],
  onRow,
  rowClassName,
  expandable = () => {},
  fixedSrNo = "",
}) => {
  const { current_page, page_size, total_entries, next } = pagination;

  return (
    <div className='table-design'>
      <div className='table-header mb-20'>
        <Table
          dataSource={[...rowData]}
          loading={isLoading}
          locale={{
            emptyText: isSearchStatus ? (
              "Search Data Not Found"
            ) : (
              "No Data"
            ),
          }}
          pagination={
            isPagination && {
              current: current_page,
              pageSize: page_size,
              total: total_entries,
              position: position,
              pageSizeOptions: pageSizeOptions,
              showSizeChanger: true,
              showTotal: () =>
                isShowTotal && (
                  <RenderFooter
                    current_page={current_page}
                    page_size={page_size}
                    total_entries={total_entries}
                    next={next}
                  />
                ),
            }
          }
          rowClassName={rowClassName || ((record) => record?.className)}
          rowSelection={
            isRowSelection && {
              type: rowSelection.type,
              preserveSelectedRowKeys: true,
              ...rowSelection,
            }
          }
          rowKey={rowKey}
          scroll={scroll ? scroll : { x: "max-content" }}
          bordered
          onChange={handlePageChange}
          components={rowData?.length && component}
          summary={summary}
          className={`overflow-sticky-header ${className} ${
            rowData?.length ? "" : "remove-scroll"
          }`}
          onRow={onRow}
          expandable={expandable}
        >
          {isSRNumber && (
            <Column
              title='Sr. No.'
              width={80}
              className='sr_no'
              fixed={fixedSrNo}
              render={(_value, _item, index) => tableSrNumber(pagination, index)}
            />
          )}
          {children}
        </Table>
      </div>
    </div>
  );
};

export default CustomTable;
