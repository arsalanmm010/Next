import Navbar from "@/components/Navbar";
import Details from "@/components/Details";
import Courses from "@/components/Courses";
import OutCome from "@/components/Outcome";
import Footer from "@/components/Footer";

export default function index() {
  return (
    <div>
      <Navbar />
      <Details />
      <Courses />
      <OutCome />
      <Footer />
    </div>
  );
}
