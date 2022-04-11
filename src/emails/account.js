const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: 'vaibhavrajpianist@gmail.com',
    from: 'vaibhavrajpianist@gmail.com',
    subject: 'This is using sendgrid mail!',
    text: 'I hope this will actually reach you.'
})