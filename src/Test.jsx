import emailjs from "@emailjs/browser";

export default function Test() {
  const send = async () => {
    try {
      const res = await emailjs.send(
        "service_wnyrw1b",
        "template_fjhf8sp",
        {
          from_name: "Sameer",
          from_email: "sameerkhan2003a@gmail.com",
          subject: "Test",
          message: "Hello",
        },
        {
          publicKey: "ovSP0Ey4782Et-VHJ",
        }
      );

      console.log(res);
      alert("Success");
    } catch (err) {
      console.error(err);
    }
  };

  return <button onClick={send}>Send Test</button>;
}