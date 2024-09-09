import thank from "../assets/images/icon-thank-you.svg";

const FinalMessage = () => {
  return (
    <div className="message">
      <img src={thank} alt="" />
      <h1>Thank You!</h1>
      <p>
        {" "}
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default FinalMessage;
