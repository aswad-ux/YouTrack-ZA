"use server";

import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailAction(formData: FormData) {
  try {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const company = formData.get('company') as string;
    const fleetSize = formData.get('fleetSize') as string;
    const tier = formData.get('tier') as string;
    const vehicleMake = formData.get('vehicleMake') as string;
    const vehicleYear = formData.get('vehicleYear') as string;
    
    // Construct the email body based on what was submitted
    let htmlContent = `
      <h2>New Lead from YouTrack ZA</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
    `;

    if (company) htmlContent += `<p><strong>Company:</strong> ${company}</p>`;
    if (fleetSize) htmlContent += `<p><strong>Fleet Size:</strong> ${fleetSize}</p>`;
    if (tier) htmlContent += `<p><strong>Requested Package:</strong> ${tier}</p>`;
    if (vehicleMake) htmlContent += `<p><strong>Vehicle Make:</strong> ${vehicleMake}</p>`;
    if (vehicleYear) htmlContent += `<p><strong>Vehicle Year:</strong> ${vehicleYear}</p>`;

    // Send the email
    const response = await resend.emails.send({
      from: 'YouTrack ZA <leads@youtrackza.com>', 
      to: 'info@youtrackza.com', 
      subject: `New Lead: ${name} - ${tier || 'Inquiry'}`,
      replyTo: email,
      html: htmlContent,
    });

    if (response.error) {
      console.error('Resend API Error:', response.error);
      return { success: false, error: response.error.message };
    }

    console.log('Email sent successfully:', response.data);
    return { success: true, data: response.data };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: 'Failed to send email' };
  }
}
