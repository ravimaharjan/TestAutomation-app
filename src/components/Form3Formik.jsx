import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import Select from 'react-select';
import {
  TEST_TYPE_OPTIONS,
  PRIORITY_OPTIONS,
  ENVIRONMENT_OPTIONS,
  BROWSER_OPTIONS,
  showSuccessToast,
} from '../form-fields-config.jsx';

const initialValues = {
  projectName: '',
  testCaseName: '',
  testType: '',
  priority: '',
  testModule: '',
  environment: '',
  browser: '',
  description: '',
};

const selectOptions = {
  testType: TEST_TYPE_OPTIONS.filter((o) => o.value !== ''),
  priority: PRIORITY_OPTIONS.filter((o) => o.value !== ''),
  environment: ENVIRONMENT_OPTIONS.filter((o) => o.value !== ''),
  browser: BROWSER_OPTIONS.filter((o) => o.value !== ''),
};

export default function Form3Formik() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setModalOpen(true)}
        className="formik-add-plan-btn"
      >
        Add Test
      </button>
      {modalOpen && (
        <div className="formik-modal-overlay" onClick={() => setModalOpen(false)}>
          <div
            className="formik-modal-dialog"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-labelledby="formik-modal-title"
          >
            <div className="formik-modal-header">
              <h3 id="formik-modal-title">Add Test</h3>
              <button
                type="button"
                className="formik-modal-close"
                onClick={() => setModalOpen(false)}
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <Formik
              initialValues={initialValues}
              validate={(values) => {
                const errors = {};
                if (!values.testCaseName?.trim()) {
                  errors.testCaseName = 'Required';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setModalOpen(false);
                resetForm();
                setTimeout(() => showSuccessToast(values.testCaseName), 100);
                setSubmitting(false);
              }}
            >
              {({ setFieldValue, values, errors, touched }) => (
                <Form className="formik-form">
                  <div className="formik-form-body">
                    <div className="formik-row">
                      <div className="formik-field">
                        <label htmlFor="f3-projectName">Project Name</label>
                        <Field
                          id="f3-projectName"
                          name="projectName"
                          type="text"
                          placeholder="e.g. My App"
                          className="formik-input"
                        />
                      </div>
                      <div className="formik-field">
                        <label htmlFor="f3-testCaseName">Test Case Name *</label>
                        <Field
                          id="f3-testCaseName"
                          name="testCaseName"
                          type="text"
                          placeholder="e.g. Login flow"
                          className="formik-input"
                        />
                        {errors.testCaseName && touched.testCaseName && (
                          <span className="formik-error">{errors.testCaseName}</span>
                        )}
                      </div>
                    </div>

                    <div className="formik-row">
                      <div className="formik-field">
                        <label>Test Type</label>
                        <Select
                          name="testType"
                          options={selectOptions.testType}
                          value={selectOptions.testType.find((o) => o.value === values.testType) || null}
                          onChange={(opt) => setFieldValue('testType', opt?.value ?? '')}
                          placeholder="Select..."
                          classNamePrefix="formik-select"
                        />
                      </div>
                      <div className="formik-field">
                        <label>Priority</label>
                        <Select
                          name="priority"
                          options={selectOptions.priority}
                          value={selectOptions.priority.find((o) => o.value === values.priority) || null}
                          onChange={(opt) => setFieldValue('priority', opt?.value ?? '')}
                          placeholder="Select..."
                          classNamePrefix="formik-select"
                        />
                      </div>
                    </div>

                    <div className="formik-row formik-row-3">
                      <div className="formik-field">
                        <label htmlFor="f3-testModule">Test Module</label>
                        <Field
                          id="f3-testModule"
                          name="testModule"
                          type="text"
                          placeholder="e.g. Authentication"
                          className="formik-input"
                        />
                      </div>
                      <div className="formik-field">
                        <label>Environment</label>
                        <Select
                          name="environment"
                          options={selectOptions.environment}
                          value={selectOptions.environment.find((o) => o.value === values.environment) || null}
                          onChange={(opt) => setFieldValue('environment', opt?.value ?? '')}
                          placeholder="Select..."
                          classNamePrefix="formik-select"
                        />
                      </div>
                      <div className="formik-field">
                        <label>Browser</label>
                        <Select
                          name="browser"
                          options={selectOptions.browser}
                          value={selectOptions.browser.find((o) => o.value === values.browser) || null}
                          onChange={(opt) => setFieldValue('browser', opt?.value ?? '')}
                          placeholder="Select..."
                          classNamePrefix="formik-select"
                        />
                      </div>
                    </div>

                    <div className="formik-field">
                      <label htmlFor="f3-description">Description</label>
                      <Field
                        id="f3-description"
                        name="description"
                        as="textarea"
                        rows={4}
                        placeholder="Test scenario description..."
                        className="formik-input formik-textarea"
                      />
                    </div>
                  </div>
                  <div className="formik-form-actions">
                    <button type="button" className="formik-btn-secondary" onClick={() => setModalOpen(false)}>
                      Cancel
                    </button>
                    <button type="submit" className="formik-btn-primary">
                      Submit Test
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </div>
  );
}
