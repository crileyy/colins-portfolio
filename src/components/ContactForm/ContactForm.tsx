'use client'
import { Form } from "radix-ui";
import styles from './ContactFormStyles.module.css';
import { sendEmail } from "@/lib/resend/sendEmail";
import { useActionState } from "react";

export const ContactForm = () => {

  // submit doesn't happen unless validation passes
  // const handleSubmit = (event) => {
  //   event?.preventDefault();
  //   const formData = new FormData(event?.target);
  //   console.log(event);
  //   fetch('/api/send-email', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       name: 'test name',
  //       email: 'test@gmail.com',
  //       message: 'hi colin!'
  //     }),
  //   })
  //   .then(data => data.json())
  //   .then(res => { console.log(res) });
  // }

  const [state, formAction] = useActionState(sendEmail, null);

  return (
    <>
      <Form.Root className={styles['form-wrapper']} action={formAction}>
        <Form.Field name="name" className={styles['name-wrapper']}>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
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
            type="text"
            required
          />
          <Form.Message match="valueMissing">Please enter your message</Form.Message>
        </Form.Field>

        <Form.Submit className={styles['submit-wrapper']}>Submit</Form.Submit>
        {state && <p>form sent!</p>}
      </Form.Root>
    </>
  );
};
