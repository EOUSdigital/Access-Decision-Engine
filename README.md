# Module 5 – Lesson 03.01: Comparison and Logical Operators
## ✅ Steps 1 – 3: Core Concepts, Real-World Examples, and Quiz

---

## 🧠 Step 1: Explore the Topic

### What Are Comparison Operators?

Comparison operators return `true` or `false` when comparing values:

| Operator | Meaning                  | Example         | Result  |
|----------|--------------------------|-----------------|---------|
| `===`    | Strict equality          | `5 === 5`       | true    |
| `!==`    | Strict inequality        | `5 !== '5'`     | true    |
| `==`     | Loose equality           | `5 == '5'`      | true ⚠️ |
| `!=`     | Loose inequality         | `5 != '5'`      | false ⚠️|
| `>`      | Greater than             | `10 > 7`        | true    |
| `<`      | Less than                | `3 < 2`         | false   |
| `>=`     | Greater than or equal to| `5 >= 5`        | true    |
| `<=`     | Less than or equal to   | `4 <= 3`        | false   |

⚠️ Avoid `==` and `!=` in modern JavaScript—prefer `===` and `!==`.

---

### What Are Logical Operators?

Used to combine Boolean conditions:

| Operator | Meaning        | Example                    | Result   |
|----------|----------------|----------------------------|----------|
| `&&`     | AND            | `isLoggedIn && isAdmin`    | true if both are true |
| `||`     | OR             | `isWeekend || isHoliday`   | true if at least one is true |
| `!`      | NOT            | `!isLoggedIn`              | inverts a Boolean value |

---

## 🌍 Step 2: Real-World Examples

### 1. Free Shipping
```javascript
if (cartTotal >= 50 && isMember) {
  console.log("You qualify for free shipping!");
}
```

### 2. Grading System
```javascript
if (score >= 90) {
  console.log("Grade A");
} else if (score >= 80) {
  console.log("Grade B");
}
```

### 3. Driving Rules
```javascript
if (age > 18 && hasLicense) {
  console.log("You're allowed to drive.");
}
```

### 4. Beach Day Planner
```javascript
if ((isWeekend || isHoliday) && weather === "sunny") {
  console.log("Let's go to the beach!");
}
```

### 5. Access Control
```javascript
if (!isLoggedIn) {
  console.log("Redirecting to login...");
}
```

### 6. Secure Role-Based Access
```javascript
if (isLoggedIn && (isAdmin || isManager)) {
  console.log("Access granted.");
}
```

---

## ✅ Step 3: Quiz Summary

**Score Achieved: 10/10**

| # | Type            | Your Answer | Correct | Notes |
|---|------------------|-------------|---------|-------|
| 1 | Multiple Choice  | C           | ✅       | `===` checks value and type |
| 2 | Multiple Choice  | A           | ✅       | `==` coerces types |
| 3 | Multiple Choice  | B           | ✅       | Only true if both are false |
| 4 | Multiple Choice  | B           | ✅       | One condition fails |
| 5 | Multiple Choice  | B           | ✅       | `!` inverts Boolean |
| 6 | True/False       | True        | ✅       | `||` is true if either is true |
| 7 | True/False       | False       | ✅       | `!(a && b)` ≠ `!a && !b` |
| 8 | True/False       | False       | ✅       | `===` is safer than `==` |
| 9 | True/False       | True        | ✅       | Comparison returns Boolean |
|10 | True/False       | True        | ✅       | `!true` → `false` |

---

## 🧾 Summary

In this lesson, you practiced:
- Using comparison operators to evaluate values and expressions
- Writing logical expressions with `&&`, `||`, and `!`
- Interpreting and debugging nested Boolean conditions
- Applying logic to real-world scenarios like access control, discount rules, and planning systems
