import React, { useContext } from "react";
import "./School.css";
import { SchoolContext } from "./SchoolProvider";
import { Link, useHistory } from "react-router-dom";

export const SchoolCard = ({ school }) => {
  const { deleteSchool } = useContext(SchoolContext);
  const history = useHistory();
  const trashSchool = () => {
    deleteSchool(school.id).then(() => {
      history.push("/");
    });
  };

  // const [appliedSchools, setAppliedSchools] = useState({
  //   schoolId: 0,
  //   applied: true,
  // });

  // const { appliedSchoolId } = useParams(); //* Is an object

  // const appliedSchool = { ...appliedSchools };

  //! Create a dropdown to add the school object to applied on the detail page.
  // const SubmitHandler = () => {
  //   while (appliedSchool.schoolId === "" || appliedSchool.applied === "") {
  //     while (appliedSchoolId) {
  //       const newAppliedSchool = {
  //         schoolId: parseInt(appliedSchool.schoolId),
  //         applied: true,
  //       };
  //       addAppliedSchool(newAppliedSchool).then(() =>
  //         history.push("/schools/applied")
  //       );
  //     }
  //   }
  // };

  return (
    <section className="school">
      <h3>
        <Link to={`/schools/url/${school.id}`}>{school.institutionName}</Link>
      </h3>
      <div className="school_major">Field of Study: {school.major}</div>
      <div className="school_cost">Annual Tuition: ${school.tuition}</div>
      <button className="delete_button" onClick={trashSchool}>
        Delete This School
      </button>
    </section>
  );
};
