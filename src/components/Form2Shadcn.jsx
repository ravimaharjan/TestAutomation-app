import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import * as Label from '@radix-ui/react-label';
import {
  TEST_TYPE_OPTIONS,
  PRIORITY_OPTIONS,
  ENVIRONMENT_OPTIONS,
  BROWSER_OPTIONS,
  showSuccessToast,
} from '../form-fields-config.jsx';

export default function Form2Shadcn() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    projectName: '',
    testCaseName: '',
    testType: '',
    priority: '',
    testModule: '',
    environment: '',
    browser: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.testCaseName?.trim()) return;
    setOpen(false);
    setFormData({
      projectName: '',
      testCaseName: '',
      testType: '',
      priority: '',
      testModule: '',
      environment: '',
      browser: '',
      description: '',
    });
    setTimeout(() => showSuccessToast(formData.testCaseName), 100);
  };

  return (
    <div className="space-y-4">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground h-10 px-4 py-2 hover:opacity-90"
      >
        Add Test
      </button>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-2xl translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 sm:rounded-lg">
            <Dialog.Title className="text-lg font-semibold leading-none tracking-tight">
              Add Test
            </Dialog.Title>
            <Dialog.Description className="text-sm text-muted-foreground">
              Same form fields as the Test form, built with shadcn-style components.
            </Dialog.Description>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label.Root htmlFor="f2-projectName" className="text-sm font-medium leading-none">
                    Project Name
                  </Label.Root>
                  <input
                    id="f2-projectName"
                    name="projectName"
                    value={formData.projectName}
                    onChange={handleChange}
                    placeholder="e.g. My App"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div className="space-y-2">
                  <Label.Root htmlFor="f2-testCaseName" className="text-sm font-medium leading-none">
                    Test Case Name <span className="text-destructive">*</span>
                  </Label.Root>
                  <input
                    id="f2-testCaseName"
                    name="testCaseName"
                    value={formData.testCaseName}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Login flow"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label.Root htmlFor="f2-testType" className="text-sm font-medium leading-none">
                    Test Type
                  </Label.Root>
                  <select
                    id="f2-testType"
                    name="testType"
                    value={formData.testType}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    {TEST_TYPE_OPTIONS.map((opt) => (
                      <option key={opt.value || 'empty'} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <Label.Root htmlFor="f2-priority" className="text-sm font-medium leading-none">
                    Priority
                  </Label.Root>
                  <select
                    id="f2-priority"
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    {PRIORITY_OPTIONS.map((opt) => (
                      <option key={opt.value || 'empty'} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label.Root htmlFor="f2-testModule" className="text-sm font-medium leading-none">
                    Test Module
                  </Label.Root>
                  <input
                    id="f2-testModule"
                    name="testModule"
                    value={formData.testModule}
                    onChange={handleChange}
                    placeholder="e.g. Authentication"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>
                <div className="space-y-2">
                  <Label.Root htmlFor="f2-environment" className="text-sm font-medium leading-none">
                    Environment
                  </Label.Root>
                  <select
                    id="f2-environment"
                    name="environment"
                    value={formData.environment}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    {ENVIRONMENT_OPTIONS.map((opt) => (
                      <option key={opt.value || 'empty'} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <Label.Root htmlFor="f2-browser" className="text-sm font-medium leading-none">
                    Browser
                  </Label.Root>
                  <select
                    id="f2-browser"
                    name="browser"
                    value={formData.browser}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    {BROWSER_OPTIONS.map((opt) => (
                      <option key={opt.value || 'empty'} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label.Root htmlFor="f2-description" className="text-sm font-medium leading-none">
                  Description
                </Label.Root>
                <textarea
                  id="f2-description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Test scenario description..."
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <Dialog.Close asChild>
                  <button
                    type="button"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium ring-offset-background hover:bg-accent hover:text-accent-foreground"
                  >
                    Cancel
                  </button>
                </Dialog.Close>
                <button
                  type="submit"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background hover:opacity-90"
                >
                  Submit Test
                </button>
              </div>
            </form>

            <Dialog.Close asChild>
              <button
                type="button"
                className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                aria-label="Close"
              >
                ×
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
