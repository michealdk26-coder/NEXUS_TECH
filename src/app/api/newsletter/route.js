import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const { email } = await req.json();

        if (!email) {
            return Response.json({ error: 'Email is required' }, { status: 400 });
        }

        // Create transporter using Gmail
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASSWORD,
            },
        });

        // Send email to admin
        await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: 'michealdk26@gmail.com',
            subject: 'New Newsletter Subscription',
            html: `
                <h2>New Subscriber!</h2>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
                <p>You can now reach out to them for web dev tips and consultations.</p>
            `,
        });

        // Send welcome email to subscriber
        await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: email,
            subject: 'Welcome to NEXUS - Web Dev Tips & Consultation',
            html: `
                <h2>Welcome to NEXUS! 🚀</h2>
                <p>Thank you for subscribing to our web development tips and free consultation service.</p>
                
                <h3>Let's Connect!</h3>
                <p>We're excited to work with you! You can now message us directly on Gmail:</p>
                <p><strong>Email:</strong> <a href="mailto:michealdk26@gmail.com">michealdk26@gmail.com</a></p>
                
                <p>Just send us a message with:</p>
                <ul>
                    <li>Your project details</li>
                    <li>Your web development needs</li>
                    <li>Any questions you have</li>
                </ul>
                
                <p>We'll respond within 24 hours with personalized web dev tips and consultation.</p>
                
                <hr>
                <p><strong>Quick Start:</strong></p>
                <p>Reply to this email or reach out to michealdk26@gmail.com whenever you're ready to chat!</p>
                
                <p>Best regards,<br><strong>NEXUS Team</strong><br>Web Development Solutions</p>
            `,
        });

        return Response.json({ success: true, message: 'Subscribed successfully!' });
    } catch (error) {
        console.error('Newsletter error:', error);
        return Response.json(
            { error: 'Failed to process subscription' },
            { status: 500 }
        );
    }
}
