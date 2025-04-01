import { Form } from "radix-ui";
import styles from './ContactFormStyles.module.css';

export const ContactForm = () => {
  return (
    <>
      <Form.Root className={styles['form-wrapper']}>
        <Form.Field name="name" className={styles['name-wrapper']}>
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="name"
            required
          />
          <Form.Message match="valueMissing">Please enter your name</Form.Message>
        </Form.Field>
        <Form.Field name="email" className={styles['email-wrapper']}>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            required
          />
          <Form.Message match="valueMissing">Please enter your email</Form.Message>
        </Form.Field>
        <Form.Field name="message" className={styles['message-wrapper']}>
          <Form.Label>Message</Form.Label>
          <Form.Control 
            type="message"
            required
          />
          <Form.Message match="valueMissing">Please enter your message</Form.Message>
        </Form.Field>

        <Form.Submit className={styles['submit-wrapper']}>Submit</Form.Submit>
      </Form.Root>
    </>
  );
};
