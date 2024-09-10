# Mintago - Frontend Developer Technical Test

This application tracks projected and desired pension and displays data in the form of helpful visual bar graphs.

Written in React, TypeScript, and TailwindCSS. Utilizing Jest and React Testing Library for testing.

### Prerequisites
- Node.js (version 18 or above): Download and install from the [Node.js website](https://nodejs.org/en).
- A command-line interface (CLI) such as Terminal or Command Prompt

### Installation
1. Clone the repo:
  `git clone <repo-url>`
2. Navigate to Project Directory using the CLI:
  `cd <repo-directory>`
3. Install dependencies:
  `npm i`

### Run the Application
To run the application, in the terminal run:
  `cd pension_tracker`
  `npm run dev`

### Run Tests
To run the tests, in the terminal run:
  `cd pension_tracker`
  `npm run test`

### Design Decisions:
#### Modularity:
- Organized the project into separate folders, each containing their respective React file, test file, and types file
- Created a modular input components that makes it simpler to reuse in the Form and provides a cleaner codebase. Allowed for ease in testing and following TDD strategy.

##### Responsive Design:
- Used tailwindCSS for styling and included responsive design to ensure the application can be viewed on mobile up to varying web page sizes
- Created a custom webhook to get the window dimensions. Struggled with making the BarChart from recharts reactive. In the future, would not use ReCharts again - library logging defaultProps error.


### Description of Features Added:
- User Form - when all the fields are updated, the projected and desired pension data will update as well as the charts
- Graph 1 - visual representation of the projected pension pot vs. desired pension pot (comparison graph)
- Graph 2 - visual representation of the year-on-year pension pot total. Colors indicate when the pension is accumulated, collected, and in the negative (desired is greater than projected)
- Annual Interest Rate - calculations take into account the yearly compounded annual interest rate.


### Continued Development
If I had more time, I would implement:
- Accessibility: ARIA
- Error messages for the user
- Implement boundaries on the input components (ex: prevent user from inputting a retirement age outside of the age bounds)
- Would include selection features for the user to input additional info:
    - other pension pots
    - toggle annual interest rate ON/OFF
    - toggle graph views
- Consider using a different Chart Library - ReChart library gives warning errors. With ore complex graphs, a different library like D3 could be more useful for custom graphs.
