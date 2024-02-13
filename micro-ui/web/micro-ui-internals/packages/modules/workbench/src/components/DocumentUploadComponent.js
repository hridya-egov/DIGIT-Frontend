import React, { useState } from 'react';

const DocumentTypeDropdown = ({ documentTypes, onSelect }) => {
  return (
    <div>
      <label>Select Document Type:</label>
      <select onChange={(event) => onSelect(event.target.value)}>
        {documentTypes.map((type) => (
          <option key={type.value} value={type.value}>
            {type.label}
          </option>
        ))}
      </select>
    </div>
  );
};


const DocumentUploadComponent = ({ formData, props }) => {
  //console.log("onPhotoUpload prop in DocumentUploadComponent:", onPhotoUpload);
  const [documentType, setDocumentType] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  console.log(onPhotoUpload, "calling from document uploader")
  console.log("pppp", formData);
  console.log("ffffff", props);

  
  const handleFileChange = (event) => {
    console.log("event",event)
    setSelectedFile(event.target.files[0]);
    // onPhotoUpload(event.target.files[0]); 
  };

  const handleDocumentTypeSelect = (selectedType) => {
    setDocumentType(selectedType);
   

  };

  // const handleUpload = () => {
  //   if (selectedFile && documentType) {
  //     const formData = new FormData();
  //     console.log(formData,"hhhhhhhhhhh");
  //     formData.append('photo', selectedFile);
  //     console.log(formData,"pppppppp");
  //     onPhotoUpload(photo); 
  //   }
  // };

  return (
    <div>
      <DocumentTypeDropdown
        documentTypes={[
          { value: '', label: 'Select Document Type' },
          { value: 'passport', label: 'Passport' },
          { value: 'driverLicense', label: "Driver's License" },
          { value: 'idCard', label: 'ID Card' },
        ]}
        onSelect={handleDocumentTypeSelect}
      />
      {documentType && (
        <div>
          <label>Upload Document:</label>
          <input type="file" onChange={handleFileChange} />
        </div>
      )}
    </div>
  );
};

export default DocumentUploadComponent;
