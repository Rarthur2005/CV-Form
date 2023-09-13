import styles from "../styles/Form.module.css";
import { useState } from "react";

function Form() {
  const section1 = [
    { name: "Name", big: false },
    { name: "Phone No.", big: false },
    { name: "Age", big: false },
  ];
  const section2 = [
    { name: "School Name", big: false },
    { name: "Title of Study", big: false },
    { name: "Date of Study", big: false },
  ];
  const section3 = [
    { name: "Company Name", big: false },
    { name: "Position Title", big: false },
    { name: "Main Responsabilities", big: true },
    { name: "Start Date", big: false },
    { name: "End Date", big: false },
  ];

  return (
    <form>
      <div className={styles.box}>
        <p>Basic Info</p>
        <Section entries={section1} />
      </div>
      <div className={styles.box}>
        <p>Education</p>
        <Section entries={section2} />
      </div>
      <div className={styles.box}>
        <p>Practical Experience</p>
        <Section entries={section3} />
      </div>
    </form>
  );
}
function Section(props) {
  const [disabled, setDisabled] = useState(false);
  console.log(disabled);
  const items = props.entries.map((item) => {
    return (
      <Text
        key={item.name}
        disabled={disabled}
        BoxName={item.name}
        big={item.big}
      />
    );
  });
  return (
    <div className={styles.section}>
      {items}
      <div>
        <button id={disabled ? styles.blue : ""} type="button" className={styles.submit} onClick={() => setDisabled(disabled => !disabled)}>{disabled ? "Edit" : "Done"}</button>
      </div>
    </div>
  );
}

function Text(props) {
  const [value, setValue] = useState("");

  return (
    <div>
      <label htmlFor={props.BoxName}>{props.BoxName}</label>
      {props.big ? (
        <textarea
          name={props.BoxName}
          disabled={props.disabled ? true : false}
          onChange={(event) => setValue(event.target.value)}
        />
      ) : (
        <input
          type="text"
          name={props.BoxName}
          title={props.BoxName}
          disabled={props.disabled ? true : false}
          onChange={(event) => setValue(event.target.value)}
        />
      )}
    </div>
  );
}

export default Form;
