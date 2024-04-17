import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";

import PawelView from "./PawelView/PawelView";
import PawelList from "./PawelList/PawelList";
import PawelCreateForm from "./PawelCreateForm/PawelCreateForm";
import PawelUpdateForm from "./PawelUpdateForm/PawelUpdateForm";
import CreatedPawel from "./PawelCreateForm/CreatedPawel";
import PawelDeleted from "./PawelView/PawelDeleted";
import PawelPage from "./MainPage/Pawel";

import DavidView from "./DavidView/DavidView";
import DavidList from "./DavidList/DavidList";
import DavidCreateForm from "./DavidCreateForm/DavidCreateForm";
import DavidUpdateForm from "./DavidUpdateForm/DavidUpdateForm";
import CreatedDavid from "./DavidCreateForm/CreatedDavid";
import DavidDeleted from "./DavidView/DavidDeleted";
import DavidPage from "./MainPage/David";

import SchejbalView from "./SchejbalView/SchejbalView";
import SchejbalList from "./SchejbalList/SchejbalList";
import SchejbalCreateForm from "./SchejbalCreateForm/SchejbalCreateForm";
import SchejbalUpdateForm from "./SchejbalUpdateForm/SchejbalUpdateForm";
import CreatedSchejbal from "./SchejbalCreateForm/CreatedSchejbal";
import SchejbalDeleted from "./SchejbalView/SchejbalDeleted";
import SchejbalPage from "./MainPage/Schejbal";

import OndraView from "./OndraView/OndraView";
import OndraList from "./OndraList/OndraList";
import OndraCreateForm from "./OndraCreateForm/OndraCreateForm";
import OndraUpdateForm from "./OndraUpdateForm/OndraUpdateForm";
import CreatedOndra from "./OndraCreateForm/CreatedOndra";
import OndraDeleted from "./OndraView/OndraDeleted";
import OndraPage from "./MainPage/Ondra";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/pawel/:id" element={<PawelView />} />
        <Route path="/pawels" element={<PawelList />} />
        <Route path="/createpawel" element={<PawelCreateForm />} />
        <Route path="/updatepawel/:id" element={<PawelUpdateForm />} />
        <Route path="/createdpawel/:id" element={<CreatedPawel />} />
        <Route path="/deletedpawel/:id" element={<PawelDeleted />} />
        <Route path="/pawel/" element={<PawelPage />} />

        <Route path="/david/:id" element={<DavidView />} />
        <Route path="/davids" element={<DavidList />} />
        <Route path="/createdavid" element={<DavidCreateForm />} />
        <Route path="/updatedavid/:id" element={<DavidUpdateForm />} />
        <Route path="/createddavid/:id" element={<CreatedDavid />} />
        <Route path="/deleteddavid/:id" element={<DavidDeleted />} />
        <Route path="/david/" element={<DavidPage />} />
        

        
        <Route path="/schejbal/:id" element={<SchejbalView />} />
        <Route path="/schejbals" element={<SchejbalList />} />
        <Route path="/createschejbal" element={<SchejbalCreateForm />} />
        <Route path="/updateschejbal/:id" element={<SchejbalUpdateForm />} />
        <Route path="/createdschejbal/:id" element={<CreatedSchejbal />} />
        <Route path="/deletedschejbal/:id" element={<SchejbalDeleted />} />
        <Route path="/schejbal/" element={<SchejbalPage />} />

        <Route path="/ondra/:id" element={<OndraView />} />
        <Route path="/ondras" element={<OndraList />} />
        <Route path="/createondra" element={<OndraCreateForm />} />
        <Route path="/updateondra/:id" element={<OndraUpdateForm />} />
        <Route path="/createdondra/:id" element={<CreatedOndra />} />
        <Route path="/deletedondra/:id" element={<OndraDeleted />} />
        <Route path="/ondra/" element={<OndraPage />} />

      </Routes>
    </BrowserRouter>
  );
}
