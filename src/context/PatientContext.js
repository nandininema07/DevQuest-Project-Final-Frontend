import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { backendurl } from "../urls";
import { getAuthToken } from "..";


const PatientContext = createContext({});

export const PatientProvider = ({ children }) => {

    // const token = localStorage.getItem('token')
    const token = getAuthToken();
    // console.log(token);
    
    const tokenJson = JSON.parse(token);
    const [patientDetailsList, setPatientDetailsList] = useState();
    const [loading, setLoading] = useState(false);
    const fetchPatientDetails = async () => {
        try {
            // if (!tokenJson?.token?.access) {
            //     navigate("/login");
            //     return;
            // }

            const response = await fetch(`${backendurl}/dashboard/`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${tokenJson?.token?.access}`,
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                console.error("Error fetching data:", response.statusText);
                return;
                
            }

            const responseData = await response.json();
            setPatientDetailsList(responseData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        finally {
            // After fetching data, set loading to false
            setLoading(false);
        }
    };
    useEffect(() => {

        fetchPatientDetails();
    }, [])

    return (
        <PatientContext.Provider
        value={{
            patientDetailsList, fetchPatientDetails,setPatientDetailsList
        }}
        >
            {children}
        </PatientContext.Provider>
    )
}

export default PatientContext