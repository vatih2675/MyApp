import { BrowserRouter, Route, Routes } from "react-router-dom";
import Topbar from "./components/Topbar";
import News from "./pages/news/Index";
import Weather from "./pages/weather/Index";
import Gold from "./pages/gold/Index";
import Nik from "./pages/nik/Index";
import Address from "./pages/address/Index";
import Nationality from "./pages/nationality/Index";
import Bmkg from "./pages/bmkg/Index";
import School from "./pages/school/Index";
import Qr from "./pages/qr/Index";
import Ftp from "./pages/ftp/Index";

export default function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <main className="py-5 px-10">
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/gold" element={<Gold />} />
          <Route path="/nik" element={<Nik />} />
          <Route path="/address" element={<Address />} />
          <Route path="/nationality" element={<Nationality />} />
          <Route path="/school" element={<School />} />
          <Route path="/bmkg" element={<Bmkg />} />
          <Route path="/qr" element={<Qr />} />
          <Route path="/ftp" element={<Ftp />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}