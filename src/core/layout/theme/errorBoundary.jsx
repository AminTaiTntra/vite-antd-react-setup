import { useErrorBoundary } from "react-error-boundary";
// import { Button } from "../../common";
import { Result } from "antd";

const CustomErrorBoundary = () => {
  const { resetBoundary } = useErrorBoundary();

  return (
    <div className={"site-background permission-not-found"}>
      <Result
        status={"info"}
        title={"Sorry, something went wrong"}
        subTitle={"We are having trouble loading your page"}
        // extra={<Button buttonText={"Try Again"} onClick={resetBoundary} />}
      />
    </div>
  );
};

export default CustomErrorBoundary;
