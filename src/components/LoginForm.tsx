import { SyntheticEvent, useState } from "react";

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
      <input
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        value={email}
        type="email"
        placeholder="Enter your Emal"
      />
      <input
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        value={password}
        type="password"
        placeholder="Enter your Password"
      />
      <button type="submit">Submit</button>
    </form>
  );
};
