# 🚀 Dev Stack Builder

Dev Stack Builder is a simple and interactive web application built with React. It helps developers explore different web development technologies and create their own technology stack by selecting their favorite tools.

## 🌐 Live Website

[Visit Dev Stack Builder](https://devstack-builder-website.netlify.app/)

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- Tailwind CSS
- React Router DOM
- React Toastify
- HTML5
- Vite

## ✨ Features

1. **Explore Technologies:** Browse different technologies with their names, categories, descriptions, ratings, and difficulty levels.

2. **Build Your Own Stack:** Add your favorite technologies to your stack, remove individual items, or clear all selected technologies at once.

3. **Responsive Design:** Enjoy a clean and user-friendly experience on desktop, tablet, and mobile devices.

---

# 📚 React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a way to write HTML-like code inside JavaScript. It makes creating and understanding React components easier.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is used to store and manage data inside a component. Props are read-only, but state can be updated.

### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook helps us store and update data in a component. I used it to manage selected technologies, the mobile menu, and password visibility.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook is used to handle side effects in React, such as fetching data. In my project, I used `fetch()`, `Suspense`, and the `use()` API to load JSON data instead of `useEffect`.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list. It helps React update the correct items when the list changes.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering means showing different content based on a condition. I used it in the Your Stack section. When no technology is selected, an empty message is displayed. When technologies are added, the selected items are shown.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

We can pass data from a parent to a child using props. A child can send information back by calling a function passed from the parent through props.

---

## 👨‍💻 Author

**Shifaj Ahmed Rahim**

GitHub: [@shifajahmed](https://github.com/shifajahmed)