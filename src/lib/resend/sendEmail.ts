'use server'

import { ReactNode } from "react";
import { EmailTemplate } from "./email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(state: { success: boolean, message: string } | null, formData: FormData) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['criley0007@gmail.com'],
      subject: `Contact form message from ${formData.get('email')}`,
      react: EmailTemplate({ 
        email: formData.get('email') as string,
        name: formData.get('name') as string,
        message: formData.get('message') as string,
      }) as ReactNode,
    });

    if (error) {
      // return Response.json({ error }, { status: 500 });
      return {
        success: false,
        message: `Form not submitted!`
      };
    }

    // return Response.json(data);
    return {
      success: true,
      message: `Form submitted for ${data}!`
    };
  } catch (error) {
    // return Response.json({ error }, { status: 500 });
    return {
      success: false,
      message: `Form not submitted! ${error}`
    };
  }
}
