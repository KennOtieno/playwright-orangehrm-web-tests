# OrangeHRM Web Automation Testing

## Overview
This project showcases end-to-end web automation testing of the **OrangeHRM Demo Application**, with a strong emphasis on **real-world QA challenges** encountered when testing a modern, enterprise-grade web application.

Rather than focusing only on happy paths, this project highlights how test design decisions must adapt to **dynamic UI behavior**, **asynchronous rendering**, and **state-driven navigation**.

## Application Under Test
**OrangeHRM Demo**
- URL: https://opensource-demo.orangehrmlive.com
- An HR management system featuring authentication, dashboards, and employee lifecycle management.

## Scope of Testing

### In Scope
- Authentication (Login, Logout)
- Dashboard rendering and core widgets
- PIM (Personnel Information Management)
  - Add Employee
  - Search Employee
  - Edit Employee details
- Navigation and page state validation

### Out of Scope
- Performance testing
- Security testing
- Backend/database validation
- Cross-browser testing

## Test Strategy & Design
- Test cases are derived from **real user workflows**
- Assertions prioritize **visible UI outcomes** over brittle URL-only checks
- Tests simulate full user journeys from login to task completion
- A **Page Object Model (POM)** is used to reduce duplication and improve maintainability

## Automation Stack
- **Framework:** Playwright
- **Language:** TypeScript
- **Design Pattern:** Page Object Model (POM)

## Known Challenges & Observations

### PIM Module (Add Employee)
While automating the **Add Employee** flow, several challenges were encountered:

- The application does not always redirect immediately after saving an employee
- Navigation to the *Personal Details* page is sometimes delayed or state-driven
- URL-based assertions proved unreliable due to SPA behavior
- UI elements render asynchronously, requiring visibility-based assertions

**Resolution Approach:**
- Shifted from strict URL assertions to validating:
  - Presence of the *Personal Details* section
  - Visibility of key UI elements
- Introduced explicit checks for rendered content instead of navigation timing

These challenges reflect **real world enterprise application behavior**, where UI state—not navigation—is the true indicator of success.


