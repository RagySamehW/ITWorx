import './CSS/EmployeeNominationCSS.css';
import Profile from './profile';

export default function Nominee({ nominee }) {
  console.log(nominee);
  async function Profile(event){
    try{
        const nomineeData = await fetch(`http://localhost:8000/get_employee_data/${encodeURIComponent(nominee.name)}`, {
            method:"GET",
            headers:{
              "Content-Type": "application/json",
            },
            credentials: "include",
        });
        const nomineeDataJson = await nomineeData.json()
        console.log(nomineeDataJson);
        sessionStorage.setItem('employeeData', JSON.stringify(nomineeDataJson));

        // window.location.href = `/profile`;

    }catch(error){
        console.error("Error getting nominee data:", error);
    }
};
  function handleProfile() {
    window.location.href = "/profile";
  };

  return (
    <div className="nominationContainer" onClick={Profile}>
      <img className="photo" alt="Profile Picture" src="PIC/profilePicture.jpg" />
      <div className="info">
        <h4>{nominee.name}</h4>
        <small>{nominee.nomination_reason}</small>
      </div>
    </div>
  );
}
