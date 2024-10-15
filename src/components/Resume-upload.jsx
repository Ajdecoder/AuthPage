import { useState } from 'react';
import { COHIRE_DOMAIN_IP } from '../commons';

const ResumeUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('resume', file);

    const response = await fetch(`${COHIRE_DOMAIN_IP}resume/upload_resume/`, {
        method: "POST",
        body: formData,
      });

      console.log(response)

    if (response.ok) {
      alert('Resume uploaded successfully!');
    } else {
      alert('Failed to upload resume.');
    }
  };

  return (
    <div>
      <input type="file" className='p-8' onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Resume</button>
    </div>
  );
};

export default ResumeUpload;
