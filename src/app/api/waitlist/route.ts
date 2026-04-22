import { NextRequest, NextResponse } from 'next/server';

interface WaitlistData {
  email: string;
  role?: string;
  name?: string;
  why?: string;
  type?: 'waitlist' | 'founding-circle';
}

export async function POST(request: NextRequest) {
  try {
    const data: WaitlistData = await request.json();

    // Validate required fields
    if (!data.email) {
      return NextResponse.json(
        { error: 'Email is required' },
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
    const isFoundingCircle = data.type === 'founding-circle';
    const subject = isFoundingCircle
      ? `[Ygente] Nueva Aplicación Círculo Fundador: ${data.name || data.email}`
      : `[Ygente] Nueva Suscripción Waitlist: ${data.email}`;

    const body = isFoundingCircle
      ? `
Nueva aplicación al Círculo Fundador:

Nombre: ${data.name || 'No proporcionado'}
Email: ${data.email}
Rol de interés: ${data.role || 'No especificado'}
Razón para unirse: ${data.why || 'No proporcionada'}

Fecha: ${new Date().toISOString()}
      `.trim()
      : `
Nueva suscripción a la lista de espera:

Email: ${data.email}
Rol de interés: ${data.role || 'No especificado'}

Fecha: ${new Date().toISOString()}
      `.trim();

    // Send email to webforms@ygente.com
    // In production, you would integrate with an email service like:
    // - SendGrid
    // - AWS SES
    // - Resend
    // - Postmark

    // For now, we'll log the submission and return success
    // This should be replaced with actual email sending logic
    console.log('=== WAITLIST SUBMISSION ===');
    console.log('To: webforms@ygente.com');
    console.log('Subject:', subject);
    console.log('Body:', body);
    console.log('===========================');

    // TODO: Replace with actual email service integration
    // Example with SendGrid:
    // await sendgrid.send({
    //   to: 'webforms@ygente.com',
    //   from: 'noreply@ygente.com',
    //   subject,
    //   text: body,
    // });

    // Store in database if needed
    // await db.waitlist.create({ data });

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully added to waitlist'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Waitlist submission error:', error);
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
