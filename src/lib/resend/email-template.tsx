import * as React from 'react';

interface EmailTemplateProps {
  email?: string;
  name?: string;
  message?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
  name,
  message,
}: EmailTemplateProps) => (
  <div>
    <h1>From {email}</h1>
    <h2>Message from {name}:</h2>
    <p>{message}</p>
  </div>
);
