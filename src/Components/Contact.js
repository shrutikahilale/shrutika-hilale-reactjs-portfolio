import "../styles.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const handleDownload = () => {
    const url = "/files/Shrutika_Hilale_Software_Engineer_Resume.pdf"; // Path relative to the public directory
    const link = document.createElement("a");
    link.href = url;
    link.download = "Shrutika_Hilale_Resume.pdf"; // Name of the file to be downloaded
    link.click();
  };

  const iconSize = 30;

  return (
    <div className="contact-container">
      <div className="contact">
        <a
          href="https://github.com/shrutikahilale"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={iconSize} />
        </a>
        <a
          href="https://www.linkedin.com/in/shrutikahilale24/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={iconSize} />
        </a>
      </div>
      <br />
      <div className="contact">
        <button onClick={handleDownload} className="primary">
          Resume
        </button>
        <button onClick={""} className="secondary">
          Send Mail
        </button>
      </div>
    </div>
  );
};

export default Contact;
