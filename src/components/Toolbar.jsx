import React from 'react';
import { Printer, Layout, Monitor, ZoomIn, ZoomOut, Edit3, Check, RotateCcw } from 'lucide-react';

export const Toolbar = ({ 
  viewMode, 
  setViewMode, 
  zoomLevel, 
  setZoomLevel,
  isEditable,
  setIsEditable,
  onReset,
  onPrint 
}) => {
  return (
    <aside className="no-print portfolio-toolbar" aria-label="Resume view and print controls">
      <div className="toolbar-inner">
        <div className="toolbar-branding">
          <div className="status-dot" aria-hidden="true" />
          <span className="brand-title">Steven Terry — Resume Portfolio</span>
          <span className="badge-pill">A4 Print Ready</span>
        </div>

        <div className="toolbar-controls">
          {/* View Mode Toggle */}
          <div className="control-group">
            <button
              type="button"
              className={`tool-btn ${viewMode === 'a4' ? 'active' : ''}`}
              onClick={() => setViewMode('a4')}
              title="A4 Sheet Preview (Exact proportions)"
              aria-pressed={viewMode === 'a4'}
            >
              <Layout size={15} />
              <span>A4 Sheet View</span>
            </button>
            <button
              type="button"
              className={`tool-btn ${viewMode === 'fluid' ? 'active' : ''}`}
              onClick={() => setViewMode('fluid')}
              title="Fluid Responsive Web View"
              aria-pressed={viewMode === 'fluid'}
            >
              <Monitor size={15} />
              <span>Full Screen View</span>
            </button>
          </div>

          {/* Zoom controls (only active in A4 mode) */}
          {viewMode === 'a4' && (
            <div className="control-group zoom-controls">
              <button
                type="button"
                className="tool-btn icon-only"
                onClick={() => setZoomLevel((prev) => Math.max(0.7, +(prev - 0.1).toFixed(1)))}
                title="Zoom Out"
                disabled={zoomLevel <= 0.7}
              >
                <ZoomOut size={15} />
              </button>
              <span className="zoom-indicator">{Math.round(zoomLevel * 100)}%</span>
              <button
                type="button"
                className="tool-btn icon-only"
                onClick={() => setZoomLevel((prev) => Math.min(1.3, +(prev + 0.1).toFixed(1)))}
                title="Zoom In"
                disabled={zoomLevel >= 1.3}
              >
                <ZoomIn size={15} />
              </button>
            </div>
          )}

          {/* Edit Mode Toggle */}
          <button
            type="button"
            className={`tool-btn ${isEditable ? 'active-edit' : ''}`}
            onClick={() => setIsEditable((prev) => !prev)}
            title={isEditable ? "Finish editing and lock" : "Enable inline editing to personalize"}
          >
            {isEditable ? <Check size={15} /> : <Edit3 size={15} />}
            <span>{isEditable ? 'Done Editing' : 'Personalize / Edit'}</span>
          </button>

          {/* Reset Button (only shown if editable) */}
          {isEditable && (
            <button
              type="button"
              className="tool-btn icon-only"
              onClick={onReset}
              title="Reset all content to original reference design"
            >
              <RotateCcw size={15} />
            </button>
          )}

          {/* Print / Save to PDF Button */}
          <button
            type="button"
            className="tool-btn primary-action"
            onClick={onPrint}
            title="Print or Save as PDF"
          >
            <Printer size={16} />
            <span>Print / Save as PDF</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
