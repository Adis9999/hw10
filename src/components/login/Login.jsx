import styled from "styled-components";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useEffect, useReducer, useRef, useState } from "react";

const Login = ({ onLogin }) => {
  const emailReducer = (state, action) => {
    if (action.type === "EMAIL_CHANGE") {
      return {
        ...state,
        emailValue: action.payload,
      };
    }
    if (action.type === "EMAIL_VALID") {
      return {
        ...state,
        emailValidate: state.emailValue.includes("@"),
      };
    }
    return {
      emailValue: "",
      emailValidate: true,
    };
  };
  const passwordReduser = (state, action) => {
    if (action.type === "PASSWORD_VALUE") {
      return {
        ...state,
        passwordValue: action.payload,
      };
    }
    if (action.type === "PASSWORD_VALID") {
      return {
        ...state,
        passwordValidate: state.passwordValue.trim().length > 6,
      };
    }
    return {
      passwordValue: "",
      passwordValidate: true,
    };
  };
  const [passwordState, passwordDispatch] = useReducer(passwordReduser, {
    passwordValue: "",
    passwordValidate: true,
  });

  const [emailState, emailDispatch] = useReducer(emailReducer, {
    emailValue: "",
    emailValidate: true,
  });
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);
  // const [emailIsValid, setEmailIsValid] = useState(true);
  // const [passwordIsValid, setPasswordIsValid] = useState(true);

  const emailChangeHandler = (e) => {
    emailDispatch({ type: "EMAIL_CHANGE", payload: e.target.value });
    setFormIsValid(
      e.target.value.includes("@") &&
        passwordState.passwordValue.trim().length > 6
    );
  };
  const passwordChangeHandler = (e) => {
    passwordDispatch({ type: "PASSWORD_VALUE", payload: e.target.value });
    setFormIsValid(
      e.target.value.trim().length > 6 && emailState.emailValue.includes("@")
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onLogin(emailState.emailValue, passwordState.passwordValue);
  };

  const emailValidateHandler = () => {
    emailDispatch({ type: "EMAIL_VALID" });
  };
  const passwordValidateHandler = () => {
    passwordDispatch({ type: "PASSWORD_VALID" });
  };

  useEffect(() => {}, []);

  return (
    <StyledLoginWrapper>
      <form onSubmit={onSubmit}>
        <ControlWrapper className={!emailState.emailValidate ? "invalid" : ""}>
          <StyledLable htmlFor="email">E-Mail</StyledLable>
          <StyledInput
            value={emailState.emailValue}
            onChange={emailChangeHandler}
            type="text"
            id="email"
            onBlur={emailValidateHandler}
          />
        </ControlWrapper>
        <ControlWrapper
          className={!passwordState.passwordValidate ? "invalid" : ""}
        >
          <StyledLable htmlFor="password">Password</StyledLable>
          <StyledInput
            value={passwordState.passwordValue}
            onChange={passwordChangeHandler}
            type="password"
            id="password"
            onBlur={passwordValidateHandler}
          />
        </ControlWrapper>
        <StyledActions>
          <Button type="submit" disabled={!formIsValid}>
            Login
          </Button>
        </StyledActions>
      </form>
    </StyledLoginWrapper>
  );
};

export default Login;

const StyledLoginWrapper = styled(Card)`
  width: 90%;
  max-width: 40rem;
  margin: 2rem auto;
  padding: 2rem;
`;

const StyledLable = styled.label`
  display: block;
  font-weight: bold;
  flex: 1;
  color: #464646;
  margin-bottom: 0.5rem;
`;

const StyledActions = styled.div`
  text-align: center;
`;
const StyledInput = styled.input`
  display: block;
  flex: 3;
  font: inherit;
  padding: 0.35rem 0.35rem;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

const ControlWrapper = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: stretch;
  flex-direction: column;

  input:focus {
    outline: none;
    border-color: #4f005f;
    background: #f6dbfc;
  }

  &.invalid input {
    border-color: red;
    background: #fbdada;
  }
`;
