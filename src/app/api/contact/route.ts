import { NextRequest, NextResponse } from 'next/server';

interface ContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Prepare email content
    const emailSubject = `[Ygente Contact] ${data.subject}`;
    const body = `
Nuevo mensaje de contacto:

De: ${data.name}
Email: ${data.email}
Asunto: ${data.subject}

Mensaje:
${data.message}

Fecha: ${new Date().toISOString()}
    `.trim();

    // Send email to webforms@ygente.com
    // In production, integrate with email service
    console.log('=== CONTACT FORM SUBMISSION ===');
    console.log('To: webforms@ygente.com');
    console.log('Subject:', emailSubject);
    console.log('Body:', body);
    console.log('===============================');

    // TODO: Replace with actual email service integration
    // Example with SendGrid:
    // await sendgrid.send({
    //   to: 'webforms@ygente.com',
    //   from: 'noreply@ygente.com',
    //   replyTo: data.email,
    //   subject: emailSubject,
    //   text: body,
    // });

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
