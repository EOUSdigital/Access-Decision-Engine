# Module 5 – Lesson 03.02: Comparison and Logical Operators - Challenge
## ✅ Step 4: Access Decision Engine

---

## 🎯 Objective

Create a JavaScript function that simulates a secure access system using comparison and logical operators.

---

## 🔧 Simulated Inputs

```javascript
const isLoggedIn = true;
const userRole = "admin";           // Options: "admin", "manager", "employee", "guest"
const hasClearance = true;
const accountStatus = "active";     // Options: "active", "suspended", "banned"
const currentTime = 0;              // 0–23 representing hour of day
```

---

## 🧠 Function Logic

### Conditions to Grant Access:
- User must be **logged in**
- Account must be **active** (not suspended or banned)
- User must have **security clearance**
- Current time must be **between 08:00 and 18:00**
- Role must be:
  - `"admin"` or `"manager"` → always allowed
  - `"employee"` → allowed only if account is active **and** has clearance

---

## ✅ Function Implementation

```javascript
function accessControl(isLoggedIn, userRole, hasClearance, accountStatus, currentTime) {
    if (!isLoggedIn) {
        return "Access denied: user not logged in.";
    }

    if (accountStatus === "banned") {
        return "Access denied: account banned.";
    } else if (accountStatus === "suspended") {
        return "Access denied: account suspended.";
    }

    if (!hasClearance) {
        return "Access denied: security clearance required.";
    }

    if (currentTime < 8 || currentTime > 18) {
        return "Access denied: outside permitted access hours.";
    }

    if (userRole === "admin" || userRole === "manager") {
        return "Access granted.";
    } else if (userRole === "employee") {
        if (accountStatus === "active" && hasClearance === true) {
            return "Access granted.";
        } else {
            return "Access denied: employees require an active account and clearance.";
        }
    } else {
        return "Access denied: insufficient role privileges.";
    }
}
```

---

## ✅ Example Call

```javascript
console.log(accessControl(isLoggedIn, userRole, hasClearance, accountStatus, currentTime));
```

---

## 📌 Highlights

- Used `if`, `else if`, `else` statements
- Combined comparison and logical operators: `===`, `&&`, `||`, `!`
- Clean branching with early returns for clarity
- Time-based access restriction successfully implemented
- Role-specific logic ensures realistic access control

---

## 🧾 Summary

This challenge was an exercise in using:
- Logical reasoning
- Condition chaining
- Precise access handling
- Clean and secure logic structure

The result is a practical, real-world decision engine simulation.
