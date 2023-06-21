import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'teamonereact@gmail.com',
    pass: 'sgiucmdlnysqqftw'
  }
});

export function send(email: string, subject: string, html: string) {
  transporter.sendMail({
    from: 'Nice gadgets',
    to: email,
    subject,
    text: 'Hello world?',
    html
  });
}

export function sendActivationLink(email: string, token: string) {
  const link = `http://localhost:3000/login/activation/${token}`;

  return send(
    email,
    'Activation account',
    `<h1>Activation account</h1>
    <a href=${link}>${link}</a>`
  );
}

export const emailServices = {
  send,
  sendActivationLink
};
