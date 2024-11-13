import Header from "./components/Header";
import Maintable from "./components/Maintable";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className=" flex justify-center items-center h-screen mx-auto flex-col bg-[#257180] ">
      <div className="w-[40rem] bg-[#F2E5BF] p-10 rounded">
        <Header />
        <Maintable />
        <Footer />
      </div>
    </div>
  );
};

export default App;
