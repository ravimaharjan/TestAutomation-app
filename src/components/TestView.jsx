import React, { useState } from 'react';
import {
  TEST_TYPE_OPTIONS,
  PRIORITY_OPTIONS,
  ENVIRONMENT_OPTIONS,
  BROWSER_OPTIONS,
  showSuccessToast,
} from '../form-fields-config.jsx';

const initialForm = {
  projectName: '',
  testCaseName: '',
  testType: '',
  priority: '',
  testModule: '',
  environment: '',
  browser: '',
  description: '',
};

export default function TestView() {
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState(initialForm);

  function openModal() {
    setModalOpen(true);
    document.body.classList.add('modal-open');
  }

  function closeModal() {
    setModalOpen(false);
    setForm(initialForm);
    document.body.classList.remove('modal-open');
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const testCaseName = form.testCaseName?.trim() || 'Test';
    closeModal();
    setTimeout(() => showSuccessToast(testCaseName), 100);
  }

  return (
    <div className="view">
      <button type="button" id="addTestButton" className="btn-primary" onClick={openModal}>
        Add Test
      </button>

      {modalOpen && (
        <div id="testModal" className="modal" aria-hidden="false" aria-labelledby="testModalTitle">
          <div className="modal-backdrop" id="testModalBackdrop" onClick={closeModal} aria-hidden="true" />
          <div className="modal-dialog" role="dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h3 id="testModalTitle">Create Test</h3>
                <button type="button" className="modal-close" id="testModalClose" aria-label="Close" onClick={closeModal}>
                  &times;
                </button>
              </div>
              <form id="test-form" className="test-form" onSubmit={handleSubmit}>
                <div className="modal-form-body">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="projectName">Project Name</label>
                      <input
                        type="text"
                        id="projectName"
                        name="projectName"
                        placeholder="e.g. My App"
                        value={form.projectName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="testCaseName">Test Case Name</label>
                      <input
                        type="text"
                        id="testCaseName"
                        name="testCaseName"
                        required
                        placeholder="e.g. Login flow"
                        value={form.testCaseName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="testType">Test Type</label>
                      <select id="testType" name="testType" value={form.testType} onChange={handleChange}>
                        {TEST_TYPE_OPTIONS.map((opt) => (
                          <option key={opt.value || 'empty'} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="priority">Priority</label>
                      <select id="priority" name="priority" value={form.priority} onChange={handleChange}>
                        {PRIORITY_OPTIONS.map((opt) => (
                          <option key={opt.value || 'empty'} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="testModule">Test Module</label>
                      <input
                        type="text"
                        id="testModule"
                        name="testModule"
                        placeholder="e.g. Authentication"
                        value={form.testModule}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="environment">Environment</label>
                      <select id="environment" name="environment" value={form.environment} onChange={handleChange}>
                        {ENVIRONMENT_OPTIONS.map((opt) => (
                          <option key={opt.value || 'empty'} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="browser">Browser</label>
                      <select id="browser" name="browser" value={form.browser} onChange={handleChange}>
                        {BROWSER_OPTIONS.map((opt) => (
                          <option key={opt.value || 'empty'} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                      id="description"
                      name="description"
                      rows={4}
                      placeholder="Test scenario description..."
                      value={form.description}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="modal-form-actions">
                  <button type="submit" id="saveTestButton" className="btn-primary">Submit Test</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
