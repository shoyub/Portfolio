export const sendEmail = async (formData: {
  name: string;
  email: string;
  message: string;
}) => {
  const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      service_id: "service_swv8viy",
      template_id: "template_ip2y6ws",
      user_id: "85RNvHU3sWIm7hCfC",
      template_params: {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to send email");
  }

  return response;
};
