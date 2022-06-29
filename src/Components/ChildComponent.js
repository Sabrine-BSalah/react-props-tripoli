import React from "react";
import { Button } from "react-bootstrap";
import { PropTypes } from "prop-types";

const ChildComponent = (props) => {
  //   console.log(props.children);

  return (
    <div className="childComponent">
      <h2>Child Component</h2>
      <h3>{props.name}</h3>
      <h3>{props.age}</h3>
      <h3>
        Skills :{" "}
        {props.skills.map((skill, i) => (
          <span style={{ margin: "10px" }} key={i}>
            {skill}
          </span>
        ))}
      </h3>
      <h3>English : {props.lang.english}</h3>
      <h3>French : {props.lang.french}</h3>
      {props.children}

      {props.isStudent ? (
        <Button
          variant="outline-light"
          onClick={() => props.getName(props.name)}
        >
          Get the name
        </Button>
      ) : null}
    </div>
  );
};

export default ChildComponent;

/******* Proptypes */
ChildComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
  // skills: PropTypes.array,
  skills: PropTypes.arrayOf(PropTypes.string),
  // lang: PropTypes.object,
  lang: PropTypes.shape({
    english: PropTypes.string,
    french: PropTypes.string,
  }),
  getName: PropTypes.func,
};

ChildComponent.defaultProps = {
  name: "No name",
  age: -1,
};
