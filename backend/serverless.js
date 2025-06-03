exports.handler = async (event, context) => {
  try {
    // Parse the incoming request body
    const body = JSON.parse(event.body);
    const { name, email, quoteDetails } = body;

    // In a real-world scenario, integrate with an email service provider (e.g. SendGrid, Mailgun) to send the email.
    // For now, we simulate sending an email by logging the details.
    console.log(`Sending quote request email to: ${email}`);
    console.log(`Name: ${name}`);
    console.log(`Quote Details: ${quoteDetails}`);

    // Simulate success response
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Quote request email successfully sent.' })
    };
  } catch (error) {
    console.error('Error processing the quote request:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal server error.' })
    };
  }
};
