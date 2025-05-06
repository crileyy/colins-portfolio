import { Resend } from 'resend';
import { EmailTemplate } from '@/lib/resend/email-template';
import { ReactNode } from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const formData = await req.json();
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['criley0007@gmail.com'],
      subject: `Contact form message from ${formData.email}`,
      react: EmailTemplate({ 
        email: formData.email,
        name: formData.name,
        message: formData.message
      }) as ReactNode,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
