import { Fragment } from "react";
import Card from "../UI/Card";

const Work = () => {
  return (
    <Fragment>
      <Card title="First job">
        <div>
          <p>
            <h1>03/12/2019 – 12/02/2021 </h1>
            <h3>SERVICE DESK ANALYST – Endava</h3>
            <p>
              During my work here, I had the below responsibilities:
              <ul>
                <li>
                  Identifying and resolving issues as a first-level point of
                  contact.
                </li>
                <li>Optimising solving procedures for the existing issues.</li>

                <li>
                  Creating and reviewing the documentation used by the team.
                </li>
              </ul>
            </p>
          </p>
        </div>
      </Card>
      <Card title="Second job">
        <div>
          <p>
            <h1>12/02/2021 – Present </h1>
            <h3>Overmolding Engineer – Hirschmann Automotive GmBh</h3>
            <p>
              While working here I developed the below skills:
              <ul>
                <li>
                  Teaching and supervising adjusters as their direct superior.
                </li>
                <li>Optimising workflows and production procedures</li>

                <li>Verifying and validating new equipments.</li>
              </ul>
            </p>
          </p>
        </div>
      </Card>
      <Card title="Wanted job">Front-end Developer</Card>
    </Fragment>
  );
};

export default Work;
