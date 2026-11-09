import React, { useRef } from 'react';
import { Camera } from 'lucide-react';
import { Avatar } from './Avatar';

export const ResumeHeader = ({ header, onAvatarChange, isEditable }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file && onAvatarChange) {
      const reader = new FileReader();
      reader.onload = () => {
        onAvatarChange(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <header className="resume-header">
      <div className="header-text-container">
        <h1 
          className="candidate-name"
          contentEditable={isEditable}
          suppressContentEditableWarning
        >
          {header.name}
        </h1>
        <p 
          className="candidate-title"
          contentEditable={isEditable}
          suppressContentEditableWarning
        >
          {header.title}
        </p>
      </div>

      <div className="header-avatar-wrapper group">
        <Avatar
          src={header.photoUrl}
          alt={header.photoAlt || header.name}
          className="header-avatar-img"
        />
        {isEditable && (
          <>
            <button
              type="button"
              className="no-print avatar-upload-btn"
              title="Upload your own photo"
              onClick={() => fileInputRef.current?.click()}
              aria-label="Change photo"
            >
              <Camera size={16} />
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </>
        )}
      </div>
    </header>
  );
};
