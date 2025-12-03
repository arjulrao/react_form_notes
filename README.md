# React Form Handling – Complete Guide

That Example demonstrates **four different ways** to handle forms in React:

1. **Normal HTML Form**
2. **Form using `useRef`**
3. **Controlled Components (useState)**
4. **React Hook Form**

Each method solves a specific problem related to form handling inside React.

---

## 📌 1. What is a Form in React?

A form allows users to enter information like name, email, etc.

But in React, we want to handle forms **without refreshing the page**, because React is a **Single Page Application (SPA)**.

Normal HTML forms reload the page on submit. React forms avoid this.

---

## ❌ 2. Why We Don’t Use Normal HTML Forms in React

Normal HTML form is shown in `NormalForm.jsx`.

### Problems:

### ❌ Page Reloads

* HTML form submits cause full page reload.
* React components lose state.
* Bad user experience.

### ❌ Hard to Read Input Values

* Need DOM selectors.
* Inputs are not managed by React.

### ❌ No Easy Validation

* Must write extra JavaScript for validation.

➡️ Because of these problems, React provides better ways to handle forms.

---

## ✔️ 3. Better Ways of Handling Forms in React

React provides three recommended methods:

1. **useRef (Uncontrolled Form)**
2. **Controlled Components (useState)**
3. **React Hook Form (Best)**

---

## ⭐ 4. Uncontrolled Form Using `useRef`

Located in: `UsingUseRef.jsx`

### 📌 What is useRef?

* A hook that gives direct access to DOM elements.
* Does NOT cause re-renders.

### 📌 How it works

```js
const username = useRef(null);
username.current.value;
```

### 👍 Advantages

* No re-renders
* Simple and fast

### 👎 Disadvantages

* Hard validation
* Not good for large forms

---

## ⭐ 5. Controlled Components (useState)

Located in: `ControlledComponents.jsx`

### 📌 What are controlled components?

Inputs whose values are controlled by React state.

```js
const [val, setVal] = useState({ name: "", email: "" });
```

### 👍 Advantages

* Full control
* Easy validation
* Real-time error handling

### 👎 Disadvantages

* Re-renders on every change
* Code becomes large for big forms

---

## 🌟 6. React Hook Form (Recommended Best Method)

Located in: `ReactHookForm.jsx`

### 📌 Why React Hook Form?

* Less code
* Better performance
* No unnecessary re-renders
* Easy validation rules

### 📌 How it works:

```js
const { register, handleSubmit } = useForm();
```

```jsx
<input {...register('username')} />
```

### 👍 Advantages

* Best for medium & large forms
* Clean syntax
* Fast

---

## 🧠 7. Why These Three Methods Exist?

| Method                | Best For               |
| --------------------- | ---------------------- |
| Normal HTML Form      | Not recommended        |
| useRef                | 1–2 input simple forms |
| Controlled Components | 3–10 input forms       |
| React Hook Form       | Real-world large forms |

---

## 📝 8. Main Issue Form Handling Solves

From the original README:

* Normal forms reload the page → Not good for React.
* React solutions prevent reload and allow full control over form values.

---

## 🎯 9. Most Asked React Interview Questions (With Answers)

### **1. What is a controlled component?**

A form input controlled by React state.

### **2. What is an uncontrolled component?**

A form input controlled by the DOM using useRef.

### **3. Difference between controlled and uncontrolled components?**

Controlled → uses state, re-renders.
Uncontrolled → uses ref, no re-render.

### **4. Why is React Hook Form preferred?**

Better performance, cleaner code, easy validation.

### **5. Why use `event.preventDefault()`?**

To stop page refresh when submitting.

### **6. What is the role of the `name` attribute?**

Used to identify form fields and send data.

### **7. How does validation work in React Hook Form?**

Using rules inside `register()`.

---

## ✔️ Final Summary

React improves form handling by avoiding page reloads and giving full control of form states. This project shows:

* Normal forms → not recommended
* useRef → simple forms
* Controlled Components → medium forms
* React Hook Form → best for real applications

You now understand why React forms are powerful, how to choose the right approach, and what interview questions to expect.
