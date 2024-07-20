import Header from "./components/Header";
import Task_input from "./components/Task_input";
import Task from "./components/Task";
import Footer from "./components/Footer";
export default function Home() {

  return (
    // Main container
    <div className="container mx-auto">
      <Header />
     

      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <Task_input/>

        <Task  work="Read a book" do="true" />
        {/* task */}
        <Task  work="Take a shower" do="false"/>
        {/* task */}
        <Task  work="Sleep" do="false"/>
      </div>

      {/* //footer section */}
      <Footer name="Noppong Anakhaphruek" id="660610750"/>
    </div>
  );
}

