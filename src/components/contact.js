import React from "react";
import TextField from "@material-ui/core/TextField";
import { css, jsx } from "@emotion/react";
import { Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { rhythm } from "../utils/typography";

const Contact = () => {
  const innerHeight = typeof window !== `undefined` ? window.innerHeight : 600;
  const [value, setValue] = React.useState("");

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <form
      noValidate
      autoComplete="off"
      id="contact"
      css={css`
        background-color: white;
        min-height: ${`${innerHeight}px`};
      `}
    >
      <h3>Contact</h3>
      <div
        css={css`
          width: 80%;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: auto;
          margin-bottom: 10rem;
        `}
      >
        <TextField
          id="standard-multiline-flexible"
          label="Name"
          fullWidth
          value={value}
          onChange={handleChange}
        />
        <TextField
          id="standard-textarea"
          label="E-mail"
          fullWidth
          placeholder="Placeholder"
          type="e-mail"
        />
        <TextField
          id="standard-multiline-static"
          label="Message"
          fullWidth
          multiline
          rows={5}
          css={css`
            margin-bottom: 1rem;
          `}
        />
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </div>
    </form>
  );
};

export default Contact;
