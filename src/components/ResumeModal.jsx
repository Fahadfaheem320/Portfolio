import React from 'react';
import { X, Printer, Download } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import { Sidebar } from './Sidebar';
import { ResumeHeader } from './ResumeHeader';
import { MainContent } from './MainContent';

export const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div 
        className="resume-modal-shell"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Toolbar (hidden during print) */}
        <div className="no-print resume-modal-header">
          <div className="modal-header-branding">
            <span className="modal-status-dot" />
            <span className="modal-branding-text">Steven Terry — Official Curriculum Vitae</span>
            <span className="modal-pill">A4 Print Ready</span>
          </div>

          <div className="modal-header-actions">
            <button
              type="button"
              className="btn-modal-print"
              onClick={handlePrint}
              title="Print or Save as PDF"
            >
              <Printer size={16} />
              <span>Print / Save as PDF</span>
            </button>
            <button
              type="button"
              className="btn-modal-close"
              onClick={onClose}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* The Exact Printable Resume Document */}
        <div className="resume-modal-scroll-area">
          <article className="resume-document" id="resume-printable-area">
            {/* Left Sidebar: 36% width, dark navy blue #263642 */}
            <div className="resume-sidebar-col">
              <Sidebar data={resumeData} isEditable={false} />
            </div>

            {/* Right Content Area: 64% width, white background */}
            <div className="resume-main-col">
              {/* Blue Header: #548FA8 */}
              <ResumeHeader 
                header={resumeData.header}
                isEditable={false}
              />
              
              {/* Structured Main Content */}
              <MainContent 
                data={resumeData}
                isEditable={false}
              />
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

