import Nav from "./components/Nav";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import PersonalInfo from "./components/PersonalInfoForm";

const App = () => {
  return (
    <div className="min-h-screen relative w-full flex flex-col overflow-x-hidden">
      <Nav />
      <br />
      <main className="w-full flex flex-col lg:flex-row bg-white-200 mt-3 px-6 xl:px-15 lg:px-10 md:px-2 sm:px-1 gap-1">
        {/* left Section */}
        <div className="xl:w-[70%] lg:w-[65%] md:w-full sm:w-full md:mx-2">
          <Section1 />
          <Section2 />
        </div>

        {/* Right Section */}
        <div className="xl:w-[30%] lg:w-[35%] md:w-full sm:w-full">
          <PersonalInfo />
        </div>
      </main>

      <br />
    </div>
  );
};

export default App;
