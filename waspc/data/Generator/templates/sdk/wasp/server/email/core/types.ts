{{={= =}=}}
// PRIVATE API
export type EmailProvider = SMTPEmailProvider | SendGridProvider | MailgunEmailProvider | DummyEmailProvider;

// PRIVATE API
export type SMTPEmailProvider = {
  type: "smtp";
  host: string;
  port: number;
  username: string;
  password: string;
};

// PRIVATE API
export type SendGridProvider = {
  type: "sendgrid";
  apiKey: string;
};

// PRIVATE API
export type MailgunEmailProvider = {
  type: "mailgun";
  apiKey: string;
  domain: string;
};

// PRIVATE API
export type DummyEmailProvider = {
  type: "dummy";
}

// PUBLIC API
export type EmailSender = {
  send: (email: Email) => Promise<SentMessageInfo>;
};

// PUBLIC API
export type SentMessageInfo = any;

// PUBLIC API
export type Email = {
  {=# isDefaultFromFieldDefined =}
  from?: EmailFromField;
  {=/ isDefaultFromFieldDefined =}
  {=^ isDefaultFromFieldDefined =}
  from: EmailFromField;
  {=/ isDefaultFromFieldDefined =}
  to: string;
  subject: string;
  text: string;
  html: string;
};

// PUBLIC API
export type EmailFromField = {
  name?: string;
  email: string;
}
