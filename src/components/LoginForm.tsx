import { SyntheticEvent, useState } from "react";
// import { Button } from "./Button";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    console.log(target, {
      email,
      password,
    });
    // console.log("email", email, "password", password);
  };
  return (
    <form className="flex flex-col gap-4" onClick={handleSubmit}>

      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        value={email}
        type="email"
        placeholder="Enter your Emal"
      />

      <TextField
        label="Password"
        variant="outlined"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        value={password}
        type="password"
        placeholder="Enter your Password"
      />

      <Button type="submit" variant="contained">SUBMIT</Button>
    </form>
  );
};
