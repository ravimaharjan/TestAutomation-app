# TestAutomation App

A **simple web app** used to validate **UI test automation**. It provides the same “Create Test” flow in three different implementations so you can run automation (e.g. [no-locator-automation](https://github.com/ravimaharjan/no-locator-automation)) against different JavaScript UI stacks.

## Purpose

This app is a **test harness** for UI automation: same flows, different tech. The goal is to see how well **no-locator-automation** (label-based, discovery-driven) works across:

- Plain HTML form controls  
- Component libraries (e.g. Radix/shadcn)  
- Form libraries + custom selects (Formik + react-select)

## Three Test Case Creation Forms

The app has **three links**, each implementing the **same Test Case creation form** with a different front-end approach:

| Link | Route | Technology | Description |
|------|--------|------------|-------------|
| **Create Test1** | `#/test` | Simple HTML controls | Standard `<input>`, `<select>`, `<textarea>`, `<button>` with minimal styling. |
| **Create Test2** | `#/test2` | **shadcn-style (Radix UI)** | Radix primitives (Dialog, Label) with Tailwind. Accessible, custom-styled components. |
| **Create Test3** | `#/test3` | **Formik + react-select** | Form state via Formik; dropdowns via react-select. Different DOM and accessibility patterns. |

Each form has the same logical fields (e.g. Project Name, Test Case Name, Test Type, Priority, Environment, Browser, Description) and an “Add Test” / “Submit Test” flow, so automation can target the same labels across all three and compare behavior.

## Objective

- Validate **no-locator-automation** against **different JS libraries** and component patterns.  
- Ensure discovery (e.g. by label, role, placeholder) works for:
  - Native HTML
  - Radix/shadcn
  - Formik + react-select (custom combobox/listbox)

## Run the App (Development)

**Prerequisites:** Node.js (v18+ recommended) and npm.

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the dev server**
   ```bash
   npm run dev
   ```

3. **Open in browser**  
   Vite usually serves at **http://localhost:3000**. Use the nav to open:
   - **Create Test1** – `http://localhost:3000/#/test`
   - **Create Test2** – `http://localhost:3000/#/test2`
   - **Create Test3** – `http://localhost:3000/#/test3`

Then run your [no-locator-automation](https://github.com/ravimaharjan/no-locator-automation) testcase against these URLs to verify discovery and steps on each implementation.

