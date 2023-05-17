import Navbar from "./Navbar";

const Layout = ({ children }: any) => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
