import { useState } from "react";
import { COHIRE_DOMAIN_IP } from "../commons";

const ResumeText = () => {
  const [file, setFile] = useState(null);
  const [extractedText, setExtractedText] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("resume", file);

    const response = await fetch(`${COHIRE_DOMAIN_IP}resume/upload_resume/`, {
      method: "POST",
      body: formData,
    });

    console.log(response)

    const data = await response.json();
    if (response.ok) {
      setExtractedText(data.text);
    } else {
      alert("Failed to upload resume.");
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Resume</button>

      {extractedText && (
        <div>
          <h3>Extracted Text from Resume:</h3>
          <p>{extractedText}</p>
        </div>
      )}
    </div>
  );
};

export default ResumeText;
