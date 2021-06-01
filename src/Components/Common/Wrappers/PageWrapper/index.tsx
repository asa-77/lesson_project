import React, { FC } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import style from "./PageWrapper.module.scss";

type TProps = {
  children: React.ReactNode;
};

const PageWrapper: FC<TProps> = (props: TProps) => {
  const { children } = props;
  return (
    <>
      <div className={style.page_wrapper}>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default PageWrapper;
