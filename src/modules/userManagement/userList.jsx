import { Fragment } from "react";
import CustomTable from "../../core/components/customTable";
import { UserListColumns } from "./config";
import Column from "antd/es/table/Column";
import { Tooltip } from "antd";
import { EyeOutlined } from "@ant-design/icons";

const UserList = ({
  rowData = [],
  pagination = {},
  isLoading = false,
  isSearchStatus = false,
  handlePageChange = () => {},
  handleView = () => {},
}) => {
  return (
    <div>
      <CustomTable
        isSRNumber
        isDisplayIndex
        isShowTotal
        isPagination
        rowData={rowData}
        pagination={pagination}
        isLoading={isLoading}
        isSearchStatus={isSearchStatus}
        handlePageChange={handlePageChange}
      >
        <Column
          width={70}
          title={"Action"}
          fixed={"right"}
          render={(value) => {
            return (
              <Tooltip title={"View"}>
                <span className={"cursor-pointer"}>
                  <EyeOutlined onClick={() => handleView?.(value)} />
                </span>
              </Tooltip>
            );
          }}
        />
        {UserListColumns?.map((item, index) => {
          const { title, dataIndex, key, width, editable, sorting } = item;
          return (
            <Fragment key={index}>
              <Column
                key={key}
                title={title}
                width={width}
                dataIndex={dataIndex}
                editable={editable}
                sorter={sorting && { multiple: index }}
                render={(text, value, _index) => (
                  <>{text}</>
                  //   <RenderColumnData item={item} value={value} text={text} />
                )}
                {...item}
              />
            </Fragment>
          );
        })}
      </CustomTable>
    </div>
  );
};

export default UserList;
