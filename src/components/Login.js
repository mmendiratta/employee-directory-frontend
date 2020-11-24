import React from "react";
import Input from '@material-ui/core/Input';

export default function Login () {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
      <div>
          <Input placeholder="Username" onSubmit={(text) => setUsername(text)} />
          <Input placeholder="Password" onSubmit={(text) => setPassword(text)} />
      </div>
  );
};
