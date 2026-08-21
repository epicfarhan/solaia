import Mailgen from "mailgen";

// content for emails

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

export {emailVerificationMailgenContent, forgotPasswordMailgenContent}