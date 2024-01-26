import logo from "./logo.svg";
import "./App.css";
import Header from "./header/Header";
import NavLinks from "./NavLinks/NavLinks";
import Home from "./Home/Home";
import AboutUs from "./About_us/AboutUs";
import Services from "./Services/Services";
import ContactUs from "./Contact_us/ContactUs";
import { Route, Routes } from "react-router-dom";
import MoneyRecovery from "./money_recovery/MoneyRecovery";
import FamilyDisputes from "./familydisputes/FamilyDisputes";
import Footer from "./footer/Footer";
import DomesticViolence from "./domestic_violence/DomesticViolence";
import Stp from "./stp/Stp";
import PartionIssues from "./partion_issues/PartionIssues";
import LandRecords from "./lands_records_and_title_research/LandRecords";
import Agreements from "./agreements/Agreements";
import DraftingDocuments from "./drafting_of_documents/DraftingDocuments";
import LegalOpinions from "./legal_ipinions/LegalOpinions";
import Form from "./form/Form";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/moneyrecovery" element={<MoneyRecovery />} />
        <Route path="/services/familydisputes" element={<FamilyDisputes />} />
        <Route
          path="/services/domesticviolence"
          element={<DomesticViolence />}
        />
        <Route path="/services/successiontoproperty" element={<Stp />} />
        <Route path="/services/partionissues" element={<PartionIssues />} />
        <Route path="/services/landrecords" element={<LandRecords />} />
        <Route path="/services/agreements" element={<Agreements />} />
        <Route
          path="/services/draftingdocuments"
          element={<DraftingDocuments />}
        />
        <Route path="/services/legalopinions" element={<LegalOpinions />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/fillform" element={<Form />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
