import Mailgen from "mailgen";
import nodemailer from "nodemailer";

const sendMail = async (options) => {

    // generate mail

   const mailGenerator = new Mailgen({
    theme: "default",
    product: {
        name: "Solaia",
        link: "link.com"
    }
   })

   // create the html version and text version of the email

  const emailTextual =  mailGenerator.generatePlaintext(options.mailgenContent);
  const emailHtml =  mailGenerator.generate(options.mailgenContent);

  // create nodemailer transporter

  const transporter =  nodemailer.createTransport({
    host: MAILTRAP_SMTP_HOST,
    port: MAILTRAP_SMTP_PORT,
    auth: {
        user: MAILTRAP_SMTP_USER,
        pass: MAILTRAP_SMTP_PASS
    }
  })

  // create mail object

  const mail = {
    from: "solaia@example.com",
    to: options.email,
    subject : options.subject,
    text: emailTextual,
    html: emailHtml
  }

  try {

    // send email

    await transporter.sendMail(mail);
  } catch (error) {
    console.error("Email service failed, check your mailtrap creds", error);
  }
}



// content for emails, templates

const emailVerificationMailgenContent = (username, verificationUrl) => {
    return{
        body: {
            name: username,
            intro: "Welcome to Solaia",
            action: {
                instruction: "To verify your email please click on the following button",
                button: {
                    color: "#8f64d3",
                    text: "verify email",
                    link: verificationUrl
                },
            },
            outro: "Have questions? Just reply to this email, thank you"
        }
    }
}

const forgotPasswordMailgenContent = (username, passwordResetUrl) => {
    return{
        body: {
            name: username,
            intro: "Request to reset password",
            action: {
                instruction: "To reset your password click on the following button",
                button: {
                    color: "#8f64d3",
                    text: "reset password",
                    link: passwordResetUrl
                },
            },
            outro: "Have questions? Just reply to this email, thank you"
        }
    }
}

export {emailVerificationMailgenContent, forgotPasswordMailgenContent, sendMail};