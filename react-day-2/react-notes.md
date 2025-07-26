# 📘 ReactJS Notes – Shadab Rahman

## 🌐 What is React?
- React is a JavaScript **library** used for building **User Interfaces (UI)**.
- Created by Facebook.
- Works on **Component-based architecture**.
- Fast rendering using **Virtual DOM**.

---

## 🟡 What is JSX?
- JSX stands for **JavaScript XML**.
- Lets us write HTML in JavaScript.
- JSX is not understood by browsers directly; it is compiled by Babel to JS.
  
```jsx
const element = <h1>Hello Shadab</h1>;
```

---

## 📌 Rules of Writing JSX
1. Wrap in one parent element (like `<div>`, `<>`).
2. Use `className` instead of `class`.
3. Use `htmlFor` instead of `for`.
4. JavaScript expressions go inside `{}`.
5. Self-closing tags must end with `/` (e.g., `<img />`).

---

## 🧱 Components in React
- Building blocks of UI.
- Two types:
  - Functional Components ✅ (used in modern React)
  - Class Components ❌ (old style)

```jsx
function Welcome() {
  return <h2>Welcome Shadab</h2>;
}
```

---

## 📩 Props in React
- Short for "Properties"
- Used to pass data from parent to child.
- Props are **read-only**.

```jsx
function Greet(props) {
  return <h1>Hello, {props.name}</h1>;
}
<Greet name="Shadab" />
```

---

## 📦 State in React
- Local data of a component.
- State changes cause component to re-render.
- Managed using `useState()` hook.

---

## 🔁 useState Hook
- Built-in React hook to use state in functional components.

```jsx
const [count, setCount] = useState(0);
```

```jsx
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
```

---

## 🧠 useEffect Hook
- Performs **side effects** like:
  - API calls
  - Timers
  - Event listeners

```jsx
useEffect(() => {
  // side effect logic
}, [dependency]);
```

```jsx
useEffect(() => {
  console.log("Component mounted or updated");
}, []);
```

---

## 📁 React Folder Structure (Basic)
```
src/
│
├── components/
│   └── Header.js, Footer.js
│
├── pages/
│   └── Home.js, About.js
│
├── App.js
├── index.js
├── index.css
```

---

## 🚀 Bonus Tips
- Break UI into small reusable components.
- Use hooks (useState, useEffect) for clean logic.
- Push your code regularly on GitHub.
- Always test in browser after writing JSX.

---

## ✅ Quick Recap:
- JSX = HTML in JS
- Component = UI block
- Props = data from parent to child
- State = component's data
- useState = manage state
- useEffect = run side effects
- Folder structure = organize code cleanly
