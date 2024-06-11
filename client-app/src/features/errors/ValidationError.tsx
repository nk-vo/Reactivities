import { Message } from "semantic-ui-react";

interface Props {
  errors: string[];
}

export default function ValidationError({ errors }: Props) {
  return (
    <Message error>
      <Message.Header>Validation errors</Message.Header>
      <Message.List>
        {errors.map((err: string, i) => (
          <Message.Item key={i}>{err}</Message.Item>
        ))}
      </Message.List>
    </Message>
  );
}