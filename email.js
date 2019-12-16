const AWS = require('aws-sdk');
const ses = new AWS.SES();

export async function main(event) {
    const email = JSON.parse(event.body)

    console.log('Event body: ', event.body);
    console.log('Email: ', email)

    let body = {
        to: email.recipient,
        from: email.sender,
        subject: email.subject,
        htmlBody: email.htmlBody,
        textBody: email.textBody
    }

    console.log('Body object: ', body)

    const result = await sendEmail(body);

    console.log('Sent email successfully', result);

    return result;
};

function sendEmail(email) {
    const params = {
        Destination: {
            ToAddresses: [email.to],
        },
        Message: {
            Subject: {
                Data: email.subject,
            },
            Body: {
                Html: {
                    Data: email.htmlBody || email.textBody,
                },
                Text: {
                    Data: email.textBody || email.htmlBody,
                },
            },
        },
        Source: email.from,
    };
    return ses.sendEmail(params).promise();
}
