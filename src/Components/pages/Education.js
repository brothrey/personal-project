import classes from "../main/Main.module.css";

const Education = () => {
  return (
    <div className={classes.education}>
      <div>
        <p>
          <h1>2014 – 2019 </h1>{" "}
          <p>Str. George Barițiu Nr.26, Cluj Napoca, România</p>
          <h3>STUDENT LA UNIVERSITATEA TEHNICĂ DIN CLUJ NAPOCA</h3> Profilul:
          Electronică Telecomunicații și Tehnologia Informației <br></br>
          Lucrarea de diplomă: Implementarea unei solutii de tip Smart Home pe
          platforma Internet of Things.
        </p>
      </div>
      <div>
        <p>
          <h1>2010 – 2014 </h1> <p>Str. Republicii Nr.15, Tirnaveni, România</p>
          <h3>DIPLOMĂ DE BACALAUREAT – Liceul Teoretic Andrei Bârseanu</h3>
        </p>
      </div>
    </div>
  );
};

export default Education;
