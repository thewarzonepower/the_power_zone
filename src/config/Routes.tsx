import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HospitalMangementDash from "../container/Hospita-Management-Admin-Agent";
import HospitalMangementDashboardHome from "../views/Hospital-Management-System/Views/DashboardHome";
import HospitalMangementPatientDash from "../views/Hospital-Management-System/Views/ManagePatient";
import HospitalMangementDoctorDash from "../views/Hospital-Management-System/Views/ManageDoctor";
import HospitalMangementNurseDash from "../views/Hospital-Management-System/Views/ManageNurse";
import HospitalMangementPharmacistDash from "../views/Hospital-Management-System/Views/ManagePharmacist";
import HospitalMangementLaboratoristDash from "../views/Hospital-Management-System/Views/ManageLaboratorist";
import HospitalMangementAccountantDash from "../views/Hospital-Management-System/Views/ManageAccountant";
import HospitalMangementReceptionistDash from "../views/Hospital-Management-System/Views/ManageReceptionist";
import LoginForm from "../container/Login-Form";
interface Props {

}

const AppRoute: React.FC<Props> = ({ }) => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route
            path="/dashboard*"
            element={
                <HospitalMangementDash>
                  <Routes>
                  <Route path="/" element={<HospitalMangementDashboardHome />} />
                  <Route path="/patient" element={<HospitalMangementPatientDash />} />
                  <Route path="/patient" element={<HospitalMangementPatientDash />} />
                  <Route path="/doctor" element={<HospitalMangementDoctorDash />} />
                  <Route path="/nurse" element={<HospitalMangementNurseDash />} />
                  <Route path="/pharmacist" element={<HospitalMangementPharmacistDash />} />
                  <Route path="/laboratorist" element={<HospitalMangementLaboratoristDash />} />
                  <Route path="/accountant" element={<HospitalMangementAccountantDash />} />
                  <Route path="/receptionist" element={<HospitalMangementReceptionistDash />} />
                  </Routes>
                </HospitalMangementDash>

            }
          />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoute