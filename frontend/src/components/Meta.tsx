import React from "react";
import { Helmet } from "react-helmet";

interface IMeta {
  title?: string;
  description?: string;
  keywords?: string;
}

const Meta = ({ title, description, keywords }: IMeta) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome To Goraya Shop",
  description: "We sell the best products for cheap",
  keywords: "electronics, buy electronics, cheap electroincs",
};

export default Meta;
