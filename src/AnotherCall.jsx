import React from "react";
import useFetch from "./useFetch";

const AnotherCall = () => {
  const url = "https://dog.ceo/api/breeds/image/random";
  const { data, error, loading } = useFetch(url);

  return (
    <div>
      {loading && <h1>...loading</h1>}
      {error && <h3>error</h3>}
      <img src={data.message} alt="" />
    </div>
  );
};

export default AnotherCall;
