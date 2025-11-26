# Custom Instructions for Copilot

When generating code, please follow these guidelines:

1. **Clarity**: Aim for clear and understandable code. Use descriptive variable and function names.
2. **Simplicity**: Keep the code as simple as possible. Avoid unnecessary complexity.
3. **Consistency**: Follow the existing coding style and conventions used in the project.
4. **Documentation**: Include comments and documentation where necessary to explain the code's purpose and functionality.
5. **Testing**: Ensure that the code is testable and include tests where appropriate.
6. **Performance**: Write efficient code that performs well, especially for critical sections.
7. **Security**: Follow best practices for security to protect against vulnerabilities.
8. **Maintainability**: Write code that is easy to maintain and extend in the future.
9. **Error Handling**: Implement robust error handling to manage potential issues gracefully.
10. **Collaboration**: Write code that is easy for other developers to understand and work with.
11. **Adherence to Requirements**: Ensure that the code meets the specified requirements and functionality.
12. **Use of Modern Practices**: Leverage modern programming practices and language features where appropriate.
13. **Accessibility**: Consider accessibility best practices to ensure the code is usable by all users.
14. **Version Control**: Write code that integrates well with version control systems, including meaningful commit messages.

For generating Vue.js components, please also adhere to the following:

1. **Component Structure**: Follow the standard Vue.js single-file component structure with `<script>`, `<template>`, and `<style>` sections.
2. **Reactivity**: Utilize Vue's reactivity system effectively, using `data`, `computed`, and `watch` properties as needed.
3. **Props and Events**: Use props for passing data to components and emit events for communication back to parent components.
4. **Lifecycle Hooks**: Make use of Vue lifecycle hooks appropriately to manage component behavior.
5. **Scoped Styles**: Use scoped styles to prevent CSS leakage and ensure styles apply only to the component.
6. **Vue Directives**: Leverage Vue directives (e.g., `v-if`, `v-for`, `v-bind`, `v-model`) effectively for dynamic rendering and data binding.
7. **State Management**: If applicable, integrate with Vuex or other state management solutions for managing global state.
8. **Performance Optimization**: Optimize component performance, especially for large lists or complex UIs.
9. **Accessibility**: Ensure components are accessible, following best practices for ARIA roles and keyboard navigation.
10. **Theme Compatibility**: Ensure components are compatible with the application's theming system, using CSS variables or classes as needed. please refer to ../src/assets/tailwind-bind.css for theme variables.
11. **Testing**: Write unit tests for components using Vitest to ensure reliability.
12. **Documentation**: Document component usage, props, events, and slots clearly for other developers.
13. **Error Handling**: Implement error handling within components to manage potential issues gracefully.
14. **Use of Composition API**: Prefer the Composition API for better organization and reuse of
15. **Use of Reusable Components**: Leverage existing reusable components within the project to maintain consistency and reduce redundancy.
16. **Code Structure**: Check the eslint and prettier configuration files in the project root to ensure code style consistency.

For generating Tailwind CSS styles, please also adhere to the following:

1. **Outlines and Rings**: only use outline-_ and ring-_ classes for input focus states. Use font color, weight, or background color changes for hover and active states.
2. **Responsive Design**: Utilize Tailwind's responsive utilities to ensure designs are mobile-friendly and adapt well to different screen sizes.
3. **Custom Classes**: When necessary, create custom utility classes in the Tailwind configuration for repeated styles.
4. **Theming**: Use CSS variables defined in ../src/assets/tailwind-bind.css for colors, fonts, and other theming aspects to ensure consistency across the application.
5. **Performance**: Keep the generated CSS efficient by avoiding overly specific selectors and unnecessary styles.
6. **Accessibility**: Ensure that styles support accessibility best practices, such as sufficient color contrast and focus indicators.
7. **Maintainability**: Write styles that are easy to maintain and understand, using Tailwind's utility-first approach effectively.
