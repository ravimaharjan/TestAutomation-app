import { toast as sonnerToast } from 'sonner';

// Shared form field config (same as first form)
export const TEST_TYPE_OPTIONS = [
  { value: '', label: 'Select...' },
  { value: 'Smoke', label: 'Smoke' },
  { value: 'Regression', label: 'Regression' },
  { value: 'System', label: 'System' },
];

export const PRIORITY_OPTIONS = [
  { value: '', label: 'Select...' },
  { value: 'High', label: 'High' },
  { value: 'Medium', label: 'Medium' },
  { value: 'Low', label: 'Low' },
];

export const ENVIRONMENT_OPTIONS = [
  { value: '', label: 'Select...' },
  { value: 'QA', label: 'QA' },
  { value: 'UAT', label: 'UAT' },
  { value: 'Production', label: 'Production' },
];

export const BROWSER_OPTIONS = [
  { value: '', label: 'Select...' },
  { value: 'Chrome', label: 'Chrome' },
  { value: 'Firefox', label: 'Firefox' },
  { value: 'Edge', label: 'Edge' },
];

export function showSuccessToast(testCaseName) {
  const name = testCaseName || 'Test';
  sonnerToast.success(`Test "${name}" created successfully.`);
}
