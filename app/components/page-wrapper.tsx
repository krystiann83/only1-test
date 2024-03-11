import type { PageWrapperProps } from "../types/page-wrapper";

const PageWrapper = ({ children }: PageWrapperProps) => {
  return <div className="flex justify-center items-center h-screen">{children}</div>;
};

export default PageWrapper;
