import nodemailer from 'nodemailer';
import User from "@/models/userModel";
import bcryptjs from 'bcryptjs';


export const sendEmail = async ({email,emailType, userId}:any) =>
{
    try {
      //* create a hashed token
      const hashedToken = await bcryptjs.hash(userId.toString(), 10);
      console.log("This is the Hashed Token: " + hashedToken)
      if (emailType === "VERIFY") {
        console.log("Email Type: " + emailType)
        console.log("Vefify email process ....")
        await User.findByIdAndUpdate(userId, 
          {  
          verifyToken: hashedToken,
          verifyTokenExipry: Date.now() + 3600000,
        });
      } else if (emailType === "RESET") {
        await User.findByIdAndUpdate(userId, {
          forgotPasswordToken: hashedToken,
          forgotPasswordTokenExpiry: Date.now() + 3600000,
        });
      }

      const transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "e9277afd4b80bb",
          pass: "efe7994ada1055",
        },
      });

      const mailOptions = {
        from: 'jolie@gmail.com',
        to: email,
        subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
        html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}
        or copy and paste the link below in your browser. <br> ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
        </p>`
    }
    console.log(mailOptions)

    const mailResponse = await transporter.sendMail(mailOptions);
    return mailResponse;

    } catch (error:any) {
        throw new Error(error.message);
    }
}