import { useState, useEffect } from "react";
import PreLoader from "./PreLoader";

const Page = (props) => {
  const [loading, setLoading] = useState(true);
  const loadData = async () => {
    await new Promise((r) => setTimeout(r, 2000));
    setLoading(!loading);
  };
  useEffect(() => {
    document.title = props.title;
    loadData();
    // eslint-disable-next-line
  }, [props.title]);
  if (loading)
    return (
      <div>
        <PreLoader />
      </div>
    );
  return <div>{props.children}</div>;
};

export default Page;
