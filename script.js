//TODO 📗 Module 5. Logic and Control Flow - Lesson 03.01: Comparison and Logical Operators - Challenge


//TODO  📝 Step 4: Project Challenge – “Access Decision Engine”

//* 🎯 Objective:
//  Create a JavaScript function that determines whether a user should be granted or denied access to a secure area of a website or app.

//* 🔧 Simulate the Following Inputs:
//  • isLoggedIn → true or false
//  • userRole → one of "admin", "manager", "employee", "guest"
//  • hasClearance → true or false
//  • accountStatus → "active", "suspended", or "banned"

//* 🧠 Logic Requirements:
//  A user should be granted access only if:
//  • They are logged in, AND
//  • Their role is either "admin" or "manager", AND
//  • They have security clearance, AND
//  • Their account is not suspended or banned

//* 📌 Challenge Conditions:
//  • Use at least two logical operators (&&, ||, !)
//  • Use at least one comparison (===, !==)
//  • Include clear console output like "Access granted." or "Access denied: account suspended."
//  • Handle each denial reason specifically (don't just say "Access denied")

//* 🧾 Stretch Goals (Optional):
//  • Add a time restriction (e.g., only allow access between 08:00 and 18:00)
//  • Allow "employee" role access only if the account is "active" and they have clearance
//  • Return a message string instead of logging directly

//* 📦 Final Deliverables:
//  • A function named accessControl(...) that:
//      > Takes all necessary input parameters
//      > Returns or logs access decisions
//      > Includes branching and logic combining comparison and logical operators

//! Solution

//  Optional: To store all possible roles or statuses
//  const allRoles = ["admin", "manager", "employee", "guest"];
//  const allAccountStatus = ["active", "suspended", "banned"];

const isLoggedIn = true;
const userRole = "admin";
const hasClearance = true;
const accountStatus = "active";
const currentTime = 0;

function accessControl(isLoggedIn, userRole, hasClearance, accountStatus, currentTime) {
    // 1. Check if the user is logged in
    if (!isLoggedIn) {
        return "Access denied: user not logged in.";
    }

    // 2. Check account status
    if (accountStatus === "banned") {
        return "Access denied: account banned.";
    } else if (accountStatus === "suspended") {
        return "Access denied: account suspended.";
    }

    // 3. Check security clearance
    if (!hasClearance) {
        return "Access denied: security clearance required.";
    }

    // 4. (Stretch) Time restriction: Only allow access between 08:00 and 18:00
    //    Assume currentTime is a number (e.g., 8 for 8:00, 18 for 18:00)
    if (currentTime < 8 || currentTime > 18) {
        return "Access denied: outside permitted access hours.";
    }

    // 5. Role-based access control
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

console.log(accessControl(isLoggedIn, userRole, hasClearance, accountStatus, currentTime));






























