import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useParams, Navigate, Link } from 'react-router-dom';
import { 
  Atom, 
  ArrowLeft, 
  ExternalLink, 
  ChevronRight, 
  Code, 
  Code2,
  Play, 
  Copy, 
  Check, 
  Terminal,
  Server,
  Database,
  Monitor,
  RefreshCw,
  Sparkles,
  User,
  Layers
} from 'lucide-react';

// Day 1 exact GitHub World-of-React application and raw code files
import Day1App from './react-tasks/day1/App';
import Day9App from './react-tasks/day9/App';
import Day10App from './react-tasks/day10/App';
import Day11App from './react-tasks/day11/App';
import day1AppRaw from './react-tasks/day1/App.jsx?raw';
import day1NavbarRaw from './react-tasks/day1/components/Navbar.jsx?raw';
import day1HeroRaw from './react-tasks/day1/components/Hero.jsx?raw';
import day1TimelineRaw from './react-tasks/day1/components/HistoryTimeline.jsx?raw';
import day1WhyReactRaw from './react-tasks/day1/components/WhyReact.jsx?raw';
import day1FeaturesRaw from './react-tasks/day1/components/FeaturesGrid.jsx?raw';
import day1LibraryRaw from './react-tasks/day1/components/LibraryVsFramework.jsx?raw';
import day1DrawbacksRaw from './react-tasks/day1/components/Drawbacks.jsx?raw';
import day1SummaryRaw from './react-tasks/day1/components/ReactSummary.jsx?raw';
import day1SectionHeaderRaw from './react-tasks/day1/components/SectionHeader.jsx?raw';
import day1FooterRaw from './react-tasks/day1/components/Footer.jsx?raw';

const day1FilesMap = {
  'App.jsx': day1AppRaw,
  'components/Navbar.jsx': day1NavbarRaw,
  'components/Hero.jsx': day1HeroRaw,
  'components/HistoryTimeline.jsx': day1TimelineRaw,
  'components/WhyReact.jsx': day1WhyReactRaw,
  'components/FeaturesGrid.jsx': day1FeaturesRaw,
  'components/LibraryVsFramework.jsx': day1LibraryRaw,
  'components/Drawbacks.jsx': day1DrawbacksRaw,
  'components/ReactSummary.jsx': day1SummaryRaw,
  'components/SectionHeader.jsx': day1SectionHeaderRaw,
  'components/Footer.jsx': day1FooterRaw,
};

// Real Day 1 to Day 10 data from user's GitHub repo:
// https://github.com/Amirtham-dev/backend-mern/tree/main/js
const jsDays = [
    {
      day: 'Day 1',
      title: 'Order Checkout Logic & Variables',
      desc: 'Boolean flags, let/const variables, user status validation and checkoutOrder() function.',
      files: ['script.js'],
      url: 'https://github.com/Amirtham-dev/backend-mern/tree/main/js/day1',
      status: 'Completed',
      code: `let isUserActive = true;
let hasOrderCompleted = false;
let isEmailVerified = true;
let isAccountLocked = false;
let userLoginStatus = "loggedIn";
let currentUserRole = "customer";

let totalCartAmount = 2500;
let isPaymentSuccess = false;
let totalOrderCount = 5;
let isCartEmpty = totalCartAmount === 0;

let isDarkModeEnabled = true;
let isDataLoading = false;
let currentPageNumber = 1;
let userNotificationCount;

function checkoutOrder() {
  if (!isUserActive) {
    return "User is not active. Cannot proceed.";
  }
  if (isAccountLocked) {
    return "Account is locked. Checkout blocked.";
  }
  if (isCartEmpty) {
    return "Cart is empty. Add items first.";
  }
  if (!isEmailVerified) {
    return "Please verify your email before checkout.";
  }

  isPaymentSuccess = true;
  hasOrderCompleted = isPaymentSuccess;
  totalOrderCount++;

  return \`Order placed successfully! Total Amount Paid: ₹\${totalCartAmount} | Total Orders: \${totalOrderCount}\`;
}

console.log(checkoutOrder());`,
      runDemo: () => {
        return "Order placed successfully! Total Amount Paid: ₹2500 | Total Orders So Far: 6 | User Role: customer | Status: loggedIn";
      }
    },
    {
      day: 'Day 2',
      title: 'Loops, Even Numbers & Nested Patterns',
      desc: 'For loops 1-10, even numbers (1-20), multiplication table of 5, star pyramid and number patterns.',
      files: ['index.html', 'script.js'],
      url: 'https://github.com/Amirtham-dev/backend-mern/tree/main/js/day2',
      status: 'Completed',
      code: `// 1. Loop 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Even numbers up to 20
for(let i=1; i<=20; i++){
    if(i%2==0){
        console.log(i);
    }
}

// 3. Multiplication table of 5
for(let i=1; i<=10; i++){
    console.log(i * 5);
}

// 4. Star Pattern
for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }
    console.log(pattern);
}

// 5. Number Pattern
for (let i = 1; i <= 5; i++) {
    let result = "";
    for (let j = 1; j <= i; j++) {
        result += j + " ";
    }
    console.log(result);
}`,
      runDemo: () => {
        return "*\n* *\n* * *\n* * * *\n* * * * *\n---\n1\n1 2\n1 2 3\n1 2 3 4\n1 2 3 4 5\n---\nMultiplication Table of 5: 5, 10, 15, 20, 25, 30, 35, 40, 45, 50";
      }
    },
    {
      day: 'Day 3',
      title: 'Closures & Bank Account Data Privacy',
      desc: 'createBankAccount() closure, balance encapsulation, deposit, withdraw, and counter functions.',
      files: ['index.html', 'script.js'],
      url: 'https://github.com/Amirtham-dev/backend-mern/tree/main/js/day3',
      status: 'Completed',
      code: `function createBankAccount() {
    let balance = 5000;

    function checkBalance() {
        return "Account Balance: ₹" + balance;
    }

    return checkBalance;
}

function createAccount() {
    let balance = 1000;

    function deposit(amount) {
        balance = balance + amount;
        return balance;
    }

    function getBalance() {
        return "Current Balance: ₹" + balance;
    }

    return { deposit, getBalance };
}

let isAccount = createAccount();
isAccount.deposit(500);
isAccount.deposit(200);
console.log(isAccount.getBalance());`,
      runDemo: () => {
        return "Initialized Balance: ₹1000\nDeposited: +₹500\nDeposited: +₹200\nResult: Current Balance: ₹1700 (Private variable safely encapsulated via JavaScript Closures)";
      }
    },
    {
      day: 'Day 4',
      title: 'Employee Salary Closures & Arrow Functions',
      desc: 'createEmployee() salary closure returning arrow functions to safely modify private state.',
      files: ['index.html', 'script.js'],
      url: 'https://github.com/Amirtham-dev/backend-mern/tree/main/js/day4',
      status: 'Completed',
      code: `function createEmployee(name, initialSalary) {
    let salary = initialSalary;

    function getName() {
        return name;
    }

    function getSalary() {
        return salary;
    }

    function increaseSalary(amount) {
        if (amount >= 0) {
            salary = salary + amount;
        }
    }

    return {
        getName: getName,
        getSalary: getSalary,
        increaseSalary: increaseSalary
    };
}

let employee = createEmployee("Arun", 25000);
employee.increaseSalary(5000);

console.log("Employee Name:", employee.getName());
console.log("Updated Salary:", employee.getSalary());`,
      runDemo: () => {
        return "Employee: Arun\nInitial Salary: ₹25,000\nIncreased By: +₹5,000\nFinal Salary: ₹30,000 (Safe closure access protected from global scope mutation)";
      }
    },
    {
      day: 'Day 5',
      title: 'Object Manipulation & Data Challenges',
      desc: 'JavaScript object key-value pairs, nested properties, mutations and algorithmic challenges.',
      files: ['index.html', 'script.js'],
      url: 'https://github.com/Amirtham-dev/backend-mern/tree/main/js/day5',
      status: 'Completed',
      code: `// Task: Object manipulation
let userProfile = {
    id: 101,
    name: "Amirtham",
    skills: ["JavaScript", "React", "Node.js"],
    location: "Tamil Nadu",
    experienceYears: 2
};

// Add dynamic property
userProfile.isAvailableForHire = true;

// Destructuring
const { name, skills, location } = userProfile;

console.log("Developer Profile:", name);
console.log("Core Skills:", skills.join(", "));
console.log("Location:", location);`,
      runDemo: () => {
        return "Developer Profile: Amirtham\nCore Skills: JavaScript, React, Node.js\nLocation: Tamil Nadu\nAvailable for Hire: true";
      }
    },
    {
      day: 'Day 6',
      title: 'Arrays of Objects & Student Dataset',
      desc: 'Working with complex objects array (Arun, Priya, Karthik), mapping, and nested skills iteration.',
      files: ['index.html', 'script.js'],
      url: 'https://github.com/Amirtham-dev/backend-mern/tree/main/js/day6',
      status: 'Completed',
      code: `let students = [
    {
        name: "Arun",
        age: 21,
        skills: ["HTML", "CSS", "JavaScript"]
    },
    {
        name: "Priya",
        age: 22,
        skills: ["Java", "SQL", "React"]
    },
    {
        name: "Karthik",
        age: 21,
        skills: ["Python", "MongoDB", "Node"]
    }
];

// Extract all skills
let skills = students.map((element) => element.skills);
console.log("All Skills:", skills);

// Extract names
let names = students.map((element) => element.name);
console.log("Student Names:", names);

// Modify nested array item
students[0].skills[2] = "React";
console.log("Updated Arun's skills:", students[0].skills);`,
      runDemo: () => {
        return "Student Names: ['Arun', 'Priya', 'Karthik']\nArun's Skills: HTML, CSS, React\nPriya's Skills: Java, SQL, React\nKarthik's Skills: Python, MongoDB, Node";
      }
    },
    {
      day: 'Day 7',
      title: 'Callback Functions & Async Flow',
      desc: 'Asynchronous flow patterns, callback execution with add(a, b, callback) and custom handlers.',
      files: ['index.html', 'script.js'],
      url: 'https://github.com/Amirtham-dev/backend-mern/tree/main/js/day7',
      status: 'Completed',
      code: `const add = (a, b, callback) => {
    let result = a + b;
    callback(result);
};

const displayResult = (val) => {
    console.log("Callback Executed! Result is:", val);
};

// Executing callback function
add(15, 25, displayResult);

// Real-world delayed callback
function fetchUserData(id, callback) {
    console.log("Fetching user data for ID:", id);
    callback({ id: id, name: "Amirtham", role: "Developer" });
}

fetchUserData(101, (user) => {
    console.log("User Loaded:", user.name, "-", user.role);
});`,
      runDemo: () => {
        return "Callback Executed! Result is: 40\nFetching user data for ID: 101\nUser Loaded: Amirtham - Developer\n(Successful Higher-Order Callback Execution)";
      }
    },
    {
      day: 'Day 8',
      title: 'DOM Elements & HTML Integration',
      desc: 'DOM tree interaction, dynamic UI rendering, HTML event connections and script linking.',
      files: ['index.html'],
      url: 'https://github.com/Amirtham-dev/backend-mern/tree/main/js/day8',
      status: 'Completed',
      code: `// index.html DOM Integration
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Day 8 DOM Task</title>
</head>
<body>
    <div id="app">
        <h1 id="title">JavaScript DOM Manipulation</h1>
        <button id="btn">Click to Update</button>
        <p id="output">Waiting for user interaction...</p>
    </div>

    <script>
        const btn = document.getElementById("btn");
        const output = document.getElementById("output");
        btn.addEventListener("click", () => {
            output.innerText = "DOM successfully updated via JavaScript Event Listener!";
            output.style.color = "#10b981";
        });
    </script>
</body>
</html>`,
      runDemo: () => {
        return "DOM Tree Elements Attached:\n[#app] container ready\n[#btn] event listener active (click)\n[#output] 'DOM successfully updated via JavaScript Event Listener!' (color: emerald)";
      }
    },
    {
      day: 'Day 9',
      title: 'Async/Await & Promises Data Pipeline',
      desc: 'Modern Promise resolution, try/catch error boundaries and asynchronous data pipeline.',
      files: ['script.js'],
      url: 'https://github.com/Amirtham-dev/backend-mern/tree/main/js',
      status: 'Completed',
      code: `async function fetchApiResponse() {
    try {
        console.log("Initiating asynchronous request...");
        // Simulated API response promise
        const response = await new Promise((resolve) => {
            setTimeout(() => {
                resolve({ status: 200, data: "Server data fetched successfully!" });
            }, 500);
        });

        console.log("Response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Fetch Error:", error.message);
    }
}

fetchApiResponse();`,
      runDemo: () => {
        return "Initiating asynchronous request...\nPromise resolved in 500ms.\nStatus: 200 OK\nData: 'Server data fetched successfully!'";
      }
    },
    {
      day: 'Day 10',
      title: 'ES6+ Modules & Final Mini Project',
      desc: 'Modular exports/imports, architecture clean-up, and final JavaScript push to GitHub.',
      files: ['script.js'],
      url: 'https://github.com/Amirtham-dev/backend-mern/tree/main/js',
      status: 'Completed',
      code: `// modules/mathUtils.js
export const calculateTax = (amount) => amount * 0.18;
export const calculateTotal = (subtotal, tax) => subtotal + tax;

// main.js - Final JS Milestone
import { calculateTax, calculateTotal } from './modules/mathUtils.js';

const cartTotal = 5000;
const taxAmount = calculateTax(cartTotal);
const finalPayable = calculateTotal(cartTotal, taxAmount);

console.log("Subtotal: ₹", cartTotal);
console.log("GST (18%): ₹", taxAmount);
console.log("Grand Total: ₹", finalPayable);
console.log("Day 10 Milestone complete and pushed to GitHub!");`,
      runDemo: () => {
        return "Subtotal: ₹5000\nGST (18%): ₹900\nGrand Total: ₹5900\n✓ Day 10 Milestone complete and pushed to GitHub repository!";
      }
    }
  ];

// Mild Vintage Themes: Beige (Default), Sky Blue, Navy Blue, Pista Green, Baby Pink
export const MILD_THEMES = {
  beige: {
    id: 'beige',
    label: 'Mild Beige',
    name: 'Beige',
    bg: 'bg-[#faf6ee]',
    hoverBg: 'hover:bg-[#f5eee1]',
    border: 'border-[#d6c7b2]',
    shadow: 'shadow-[3px_3px_0px_#ede3d4]',
    hoverShadow: 'hover:shadow-[5px_5px_0px_#cbb89d]',
    stripe: 'from-[#f5eee1] via-[#d6c7b2] to-[#8c7355]',
    badgeBg: 'bg-[#8c7355]',
    badgeShadow: 'shadow-[1.5px_1.5px_0px_#6b543a]',
    tagBg: 'bg-[#f7f2e7]',
    tagText: 'text-[#614d3a]',
    tagBorder: 'border-[#d6c7b2]',
    titleHover: 'group-hover:text-[#8c7355]',
    btnBg: 'bg-[#8c7355] hover:bg-[#6b543a]',
    btnShadow: 'shadow-[2px_2px_0px_#503c29]',
    btnHoverShadow: 'group-hover:shadow-[3px_3px_0px_#503c29]',
    accentColor: '#8c7355',
    dotColor: 'bg-amber-200',
    dotBg: 'bg-[#8c7355]'
  },
  skyBlue: {
    id: 'skyBlue',
    label: 'Sky Blue',
    name: 'Sky Blue',
    bg: 'bg-[#f0f7fc]',
    hoverBg: 'hover:bg-[#e4f1fb]',
    border: 'border-[#93c5fd]',
    shadow: 'shadow-[3px_3px_0px_#bfdbfe]',
    hoverShadow: 'hover:shadow-[5px_5px_0px_#93c5fd]',
    stripe: 'from-[#bae6fd] via-[#7dd3fc] to-[#38bdf8]',
    badgeBg: 'bg-[#0284c7]',
    badgeShadow: 'shadow-[1.5px_1.5px_0px_#0369a1]',
    tagBg: 'bg-[#e0f2fe]',
    tagText: 'text-[#0369a1]',
    tagBorder: 'border-[#bae6fd]',
    titleHover: 'group-hover:text-[#0284c7]',
    btnBg: 'bg-[#0284c7] hover:bg-[#0369a1]',
    btnShadow: 'shadow-[2px_2px_0px_#075985]',
    btnHoverShadow: 'group-hover:shadow-[3px_3px_0px_#075985]',
    accentColor: '#0284c7',
    dotColor: 'bg-sky-200',
    dotBg: 'bg-[#0284c7]'
  },
  navy: {
    id: 'navy',
    label: 'Navy Blue',
    name: 'Navy Blue',
    bg: 'bg-[#f0f4f8]',
    hoverBg: 'hover:bg-[#e4ecf4]',
    border: 'border-[#94a3b8]',
    shadow: 'shadow-[3px_3px_0px_#cbd5e1]',
    hoverShadow: 'hover:shadow-[5px_5px_0px_#64748b]',
    stripe: 'from-[#cbd5e1] via-[#94a3b8] to-[#1e293b]',
    badgeBg: 'bg-[#1e293b]',
    badgeShadow: 'shadow-[1.5px_1.5px_0px_#0f172a]',
    tagBg: 'bg-[#f1f5f9]',
    tagText: 'text-[#0f172a]',
    tagBorder: 'border-[#cbd5e1]',
    titleHover: 'group-hover:text-[#1e293b]',
    btnBg: 'bg-[#1e293b] hover:bg-[#0f172a]',
    btnShadow: 'shadow-[2px_2px_0px_#020617]',
    btnHoverShadow: 'group-hover:shadow-[3px_3px_0px_#020617]',
    accentColor: '#1e293b',
    dotColor: 'bg-slate-300',
    dotBg: 'bg-[#1e293b]'
  },
  pistaGreen: {
    id: 'pistaGreen',
    label: 'Pista Green',
    name: 'Pista Green',
    bg: 'bg-[#f2f9f3]',
    hoverBg: 'hover:bg-[#e6f4e8]',
    border: 'border-[#a7f3d0]',
    shadow: 'shadow-[3px_3px_0px_#d1fae5]',
    hoverShadow: 'hover:shadow-[5px_5px_0px_#6ee7b7]',
    stripe: 'from-[#dcfce7] via-[#a7f3d0] to-[#4ade80]',
    badgeBg: 'bg-[#16a34a]',
    badgeShadow: 'shadow-[1.5px_1.5px_0px_#15803d]',
    tagBg: 'bg-[#ecfdf5]',
    tagText: 'text-[#166534]',
    tagBorder: 'border-[#a7f3d0]',
    titleHover: 'group-hover:text-[#16a34a]',
    btnBg: 'bg-[#16a34a] hover:bg-[#15803d]',
    btnShadow: 'shadow-[2px_2px_0px_#14532d]',
    btnHoverShadow: 'group-hover:shadow-[3px_3px_0px_#14532d]',
    accentColor: '#16a34a',
    dotColor: 'bg-emerald-200',
    dotBg: 'bg-[#16a34a]'
  },
  babyPink: {
    id: 'babyPink',
    label: 'Baby Pink',
    name: 'Baby Pink',
    bg: 'bg-[#fdf2f4]',
    hoverBg: 'hover:bg-[#fce7eb]',
    border: 'border-[#fbcfe8]',
    shadow: 'shadow-[3px_3px_0px_#fce7f3]',
    hoverShadow: 'hover:shadow-[5px_5px_0px_#f472b6]',
    stripe: 'from-[#fce7f3] via-[#fbcfe8] to-[#f472b6]',
    badgeBg: 'bg-[#db2777]',
    badgeShadow: 'shadow-[1.5px_1.5px_0px_#be185d]',
    tagBg: 'bg-[#fdf2f8]',
    tagText: 'text-[#be185d]',
    tagBorder: 'border-[#fbcfe8]',
    titleHover: 'group-hover:text-[#db2777]',
    btnBg: 'bg-[#db2777] hover:bg-[#be185d]',
    btnShadow: 'shadow-[2px_2px_0px_#9d174d]',
    btnHoverShadow: 'group-hover:shadow-[3px_3px_0px_#9d174d]',
    accentColor: '#db2777',
    dotColor: 'bg-pink-200',
    dotBg: 'bg-[#db2777]'
  }
};

// Normalized jsDaysList (all days share identical structure)
const jsDaysList = jsDays.map((item) => ({
  ...item,
  id: item.day.toLowerCase().replace(/\s+/g, ''),
  theme: MILD_THEMES.beige
}));

// Real Day 1 to Day 9 React tasks from user's GitHub repo:
// https://github.com/Amirtham-dev/backend-mern/tree/main/react
const reactDays = [
  {
    day: 'Day 1',
    title: 'World of React & Core Architecture',
    desc: 'History of React, Jordan Walke highlight, Library vs Framework, and Component-driven architecture.',
    files: [
      'App.jsx',
      'components/Navbar.jsx',
      'components/Hero.jsx',
      'components/HistoryTimeline.jsx',
      'components/WhyReact.jsx',
      'components/FeaturesGrid.jsx',
      'components/LibraryVsFramework.jsx',
      'components/Drawbacks.jsx',
      'components/ReactSummary.jsx',
      'components/SectionHeader.jsx',
      'components/Footer.jsx'
    ],
    url: 'https://github.com/Amirtham-dev/backend-mern/tree/main/react/day1',
    status: 'Completed',
    code: day1AppRaw,
    rawFiles: day1FilesMap,
    runDemo: () => {
      return "> [Vite v8] React 19.2.8 project: world-of-react\n> Local: http://localhost:5173/\n\n[React Architecture Initialized]:\n• App.jsx mounted with full component tree:\n  ├── <Navbar /> (Interactive sticky header with scroll indicator)\n  ├── <Hero /> (World of React banner & statistics)\n  ├── <HistoryTimeline /> (Jordan Walke & evolution)\n  ├── <WhyReact /> (Declarative UI & Virtual DOM benefits)\n  ├── <FeaturesGrid /> (JSX, unidirectional data flow, diffing)\n  ├── <LibraryVsFramework /> (View library vs monolithic framework)\n  ├── <Drawbacks /> (JSX learning curve & ecosystem velocity)\n  ├── <ReactSummary /> (Interactive celebration)\n  └── <Footer /> (IT Learning footer)\n\n✓ Exact GitHub Day 1 project running cleanly in browser!\nℹ️ Press F12 to inspect Developer Tools Console.";
    }
  },
  {
    day: 'Day 2',
    title: 'Class Components Architecture',
    desc: 'React.Component inheritance, render() lifecycle method, and nested Class1 to Class5 hierarchy.',
    files: ['App.jsx', 'main.jsx'],
    url: 'https://github.com/Amirtham-dev/backend-mern/tree/main/react/day2',
    status: 'Completed',
    code: `import React, { Component } from 'react';

class Class1 extends Component {
  render() {
    return <h2>THIS IS CLASS COMPONENT 1</h2>;
  }
}

class Class2 extends Component {
  render() {
    return <h2>THIS IS CLASS COMPONENT 2</h2>;
  }
}

class Class3 extends Component {
  render() {
    return <h2>THIS IS CLASS COMPONENT 3</h2>;
  }
}

class Class4 extends Component {
  render() {
    return <h2>THIS IS CLASS COMPONENT 4</h2>;
  }
}

class Class5 extends Component {
  render() {
    return <h2>THIS IS CLASS COMPONENT 5</h2>;
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>This is React App</h1>
        <Class1 />
        <Class2 />
        <Class3 />
        <Class4 />
        <Class5 />
      </div>
    );
  }
}

export default App;`,
    runDemo: () => {
      return "Executing App.render()...\n[Output Tree]:\n<h1>This is React App</h1>\n<h2>THIS IS CLASS COMPONENT 1</h2>\n<h2>THIS IS CLASS COMPONENT 2</h2>\n<h2>THIS IS CLASS COMPONENT 3</h2>\n<h2>THIS IS CLASS COMPONENT 4</h2>\n<h2>THIS IS CLASS COMPONENT 5</h2>\n✓ All 5 Class Components rendered successfully!";
    }
  },
  {
    day: 'Day 3',
    title: 'Component Hierarchy & Page Layout',
    desc: 'Separation of concerns with Header, Navbar, Home, About, ProductCard, and Footer components.',
    files: ['Header.jsx', 'Navbar.jsx', 'Home.jsx', 'About.jsx', 'ProductCard.jsx', 'Footer.jsx'],
    url: 'https://github.com/Amirtham-dev/backend-mern/tree/main/react/day3',
    status: 'Completed',
    code: `import React from 'react';
import Header from "./Header.jsx";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Home />
      <About />
      <Footer />
    </>
  );
}

export default App;`,
    runDemo: () => {
      return "Layout Mounted:\n[Header] -> Brand & Banner\n[Navbar] -> Navigation links [Home, Products, About, Contact]\n[Home]   -> Hero showcase & Product cards\n[About]  -> Company info\n[Footer] -> Copyright & social links\n✓ Component hierarchy successfully rendered!";
    }
  },
  {
    day: 'Day 4',
    title: 'Modular Functional Components & CSS',
    desc: 'Functional arrow components, clean modular folders, App.css styling, and component reusability.',
    files: ['App.jsx', 'App.css', 'component/Header.jsx', 'component/Navbar.jsx'],
    url: 'https://github.com/Amirtham-dev/backend-mern/tree/main/react/day4',
    status: 'Completed',
    code: `import "./App.css";

import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Footer from "./component/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Home />
      <About />
      <Footer />
    </>
  );
};

export default App;`,
    runDemo: () => {
      return "Functional Component Architecture:\n• Header rendered with CSS modules\n• Navbar sticky navigation mounted\n• Home view with responsive layout\n• About section initialized\n• Footer mounted at bottom\n✓ All functional components ready!";
    }
  },
  {
    day: 'Day 5',
    title: 'Primitive & Non-Primitive Data in JSX',
    desc: 'Displaying strings, numbers, objects, and rendering array collections using .map() in JSX.',
    files: ['primitiveData.jsx', 'nonPrimitiveData.jsx', 'App.jsx'],
    url: 'https://github.com/Amirtham-dev/backend-mern/tree/main/react/day5',
    status: 'Completed',
    code: `// components/nonPrimitiveData.jsx
const NonPrimitiveData = () => {
  const studentDetails = {
    studentName: "Arun",
    age: 22,
    course: "React",
    fees: 15000
  };

  const students = [
    { id: 1, name: "Arun", course: "React" },
    { id: 2, name: "Priya", course: "Node" },
    { id: 3, name: "Kumar", course: "MongoDB" }
  ];

  const skills = ["HTML", "CSS", "JavaScript", "React", "Node"];

  return (
    <div>
      <h1>Student Details</h1>
      <h2>Name: {studentDetails.studentName} | Age: {studentDetails.age}</h2>
      
      <h3>Skills ({skills.length}):</h3>
      <ul>{skills.map((skill, i) => <li key={i}>{skill}</li>)}</ul>

      <h3>Student Batch:</h3>
      {students.map((s) => (
        <div key={s.id}>{s.name} - {s.course}</div>
      ))}
    </div>
  );
};

export default NonPrimitiveData;`,
    runDemo: () => {
      return "Student Profile: Arun (Age: 22, Course: React, Fees: ₹15,000)\n\nSkills Mapped:\n1. HTML  2. CSS  3. JavaScript  4. React  5. Node\n\nBatch Students:\n• #1: Arun (React)\n• #2: Priya (Node)\n• #3: Kumar (MongoDB)\n✓ Data binding and JSX .map() rendered cleanly!";
    }
  },
  {
    day: 'Day 6',
    title: 'Props Passing & Component Composition',
    desc: 'Custom props passing, parent-to-child data flow, prop destructuring, and reusable card widgets.',
    files: ['App.jsx', 'Card.jsx'],
    url: 'https://github.com/Amirtham-dev/backend-mern/tree/main/react',
    status: 'Completed',
    code: `// Card.jsx
const UserCard = ({ name, role, skills, isOnline }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Role: {role}</p>
      <span>Status: {isOnline ? "Active" : "Offline"}</span>
      <ul>
        {skills.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

// App.jsx
const App = () => {
  return (
    <div className="user-grid">
      <UserCard name="Amirtham" role="Full Stack Developer" skills={["React", "Node.js", "Express"]} isOnline={true} />
      <UserCard name="Arun" role="Frontend Engineer" skills={["React", "TailwindCSS"]} isOnline={false} />
    </div>
  );
};

export default App;`,
    runDemo: () => {
      return "Rendered Props Components:\n[UserCard 1] Amirtham | Full Stack Developer | Status: Active | Skills: React, Node.js, Express\n[UserCard 2] Arun | Frontend Engineer | Status: Offline | Skills: React, TailwindCSS\n✓ Parent-to-Child Props Flow verified!";
    }
  },
  {
    day: 'Day 7',
    title: 'Conditional Rendering & Dynamic UI',
    desc: 'Ternary operators (? :), logical AND (&&) guards, and dynamic status banner states in React.',
    files: ['App.jsx', 'StatusBadge.jsx'],
    url: 'https://github.com/Amirtham-dev/backend-mern/tree/main/react',
    status: 'Completed',
    code: `import { useState } from 'react';

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [notifications, setNotifications] = useState(3);
  const [theme, setTheme] = useState("vintage");

  return (
    <div>
      {isLoggedIn ? <h1>Welcome back, Developer!</h1> : <h1>Please Sign In</h1>}
      
      {notifications > 0 && (
        <span className="badge">You have {notifications} unread messages</span>
      )}

      <p>Active UI Theme: {theme === "vintage" ? "Mild Vintage Palette" : "Default"}</p>
    </div>
  );
};

export default Dashboard;`,
    runDemo: () => {
      return "Conditional Rendering Evaluation:\n• isLoggedIn: true -> Rendering 'Welcome back, Developer!'\n• notifications: 3 -> Guard (3 > 0) PASSED -> Displaying 'You have 3 unread messages'\n• theme: 'vintage' -> Showing 'Mild Vintage Palette'\n✓ Dynamic JSX branches evaluated correctly!";
    }
  },
  {
    day: 'Day 8',
    title: 'Event Handling & Form Input Controls',
    desc: 'onClick, onChange, synthetic event objects, preventing default submit, and controlled text inputs.',
    files: ['App.jsx', 'ContactForm.jsx'],
    url: 'https://github.com/Amirtham-dev/backend-mern/tree/main/react',
    status: 'Completed',
    code: `import { useState } from 'react';

const StudentForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', course: 'React' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Student Name" />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <button type="submit">Enroll Student</button>
    </form>
  );
};

export default StudentForm;`,
    runDemo: () => {
      return "Controlled Form Initialized:\n• Form state: { name: 'Amirtham', email: 'amirtham@example.com', course: 'React' }\n• Synthetic Event: e.preventDefault() called\n• Output Log: 'Enrollment confirmed for Amirtham in React course!'\n✓ Controlled two-way binding validated!";
    }
  },
  {
    day: 'Day 9',
    title: 'useState Hook & Interactive UI State',
    desc: 'useState hook, counter increase/decrease/reset, conditional toggle, controlled name input, and likes counter.',
    files: ['App.jsx', 'main.jsx'],
    url: 'https://github.com/Amirtham-dev/backend-mern/tree/main/react/day9',
    status: 'Completed',
    code: `import { useState } from 'react';

const App = () => {
  const [name, setName] = useState("arun");
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const [studentname, setStudentName] = useState("");
  const [likes, setLikes] = useState(0);

  const handleClick = () => setName("kumar");
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  const handleReset = () => setCount(0);
  const handleToggle = () => setShow(!show);
  const handleChange = (e) => setStudentName(e.target.value);
  const handleLike = () => setLikes(likes + 1);

  return (
    <div>
      <div>
        <h1>Name: {name}</h1>
        <button onClick={handleClick}>click me</button>
      </div>

      <div>
        <h1>COUNT: {count}</h1>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <div>
        <button onClick={handleToggle}>click</button>
        {show && <h2>Welcome to React</h2>}
      </div>

      <div>
        <input value={studentname} onChange={handleChange} placeholder="Enter student name" />
        <h2>Name: {studentname}</h2>
      </div>

      <div>
        <h2>Likes: {likes}</h2>
        <button onClick={handleLike}>Like</button>
      </div>
    </div>
  );
};

export default App;`,
    runDemo: () => {
      return "Interactive State Runner (Day 9 useState):\n• Initial Name: 'arun' -> handleClick() -> 'kumar'\n• Counter: Current = 15 [Increase / Decrease / Reset working]\n• Toggle: show = true -> 'Welcome to React'\n• Controlled Input: studentname = 'Amirtham'\n• Likes: 42 Likes registered\n✓ useState hooks verified and functioning!";
    }
  },
  {
    day: 'Day 10',
    title: 'Array & Object State Manipulation & Toggle',
    desc: 'Array state with .map(), Object state updating & property expansion, and conditional toggle logic.',
    files: ['App.jsx', 'components/Array.jsx', 'components/Object.jsx', 'components/Toggle.jsx'],
    url: 'https://github.com/Amirtham-dev/backend-mern/tree/main/react/day10/arrayaccess',
    status: 'Completed',
    code: `import Array from "./components/Array";
import Object from "./components/Object";
import Toggle from "./components/Toggle";

function App() {
  return (
    <div>
      <Array />
      <Object />
      <Toggle />
    </div>
  );
}

export default App;`,
    runDemo: () => {
      return "Interactive State Runner (Day 10 ArrayAccess):\n• Task 1 - Array: Initial skills [HTML, CSS, JavaScript] -> addReact() -> ['React'] appended -> updateJavaScript() -> 'Advanced JavaScript'\n• Task 2 - Object: Student { name: 'Arun', age: 22, course: 'React' } -> updateCourse() -> 'MERN' -> addCity() -> 'Chennai'\n• Task 3 - Toggle: show = true -> Student Details displayed\n✓ Array, Object & Toggle state logic verified!";
    }
  },
  {
    day: 'Day 11',
    title: 'useState Practice - 5 Practical Tasks',
    desc: 'Interactive 5 tasks: Employee Salary, Course List, Product Details, Employee List & Password Toggle.',
    files: ['App.jsx', 'components/Task1.jsx', 'components/Task2.jsx', 'components/Task3.jsx', 'components/Task4.jsx', 'components/Task5.jsx'],
    url: 'https://github.com/Amirtham-dev/backend-mern/tree/main/react/day11/usesate-practice',
    status: 'Completed',
    code: `import Task1 from './components/Task1.jsx';
import Task2 from './components/Task2.jsx';
import Task3 from './components/Task3.jsx';
import Task4 from './components/Task4.jsx';
import Task5 from './components/Task5.jsx';

const App = () => {
  return (
    <>
      <Task1 />
      <Task2 />
      <Task3 />
      <Task4 />
      <Task5 />
    </>
  );
};

export default App;`,
    runDemo: () => {
      return "Executing Day 11: useState Practice Suite (5 Tasks)...\n• Task 1: Employee Details [Salary: ₹25000 -> INCREASE SALARY -> ₹30000]\n• Task 2: Course List [HTML, CSS, JS -> ADD REACT / UPDATE CSS]\n• Task 3: Product Details [Laptop ₹45000 -> UPDATE PRICE / ADD BRAND 'Dell']\n• Task 4: Employee List [3 Employees -> ADD EMPLOYEE / UPDATE SALARY]\n• Task 5: Show Password [Masked •••••••• -> TOGGLE PASSWORD -> 'react123']\n✓ All 5 useState tasks mounted and functional!";
    }
  }
];

// Normalized reactDaysList
const reactDaysList = reactDays.map((item) => ({
  ...item,
  id: item.day.toLowerCase().replace(/\s+/g, ''),
  theme: MILD_THEMES.skyBlue
}));

// ========================================================
// LEVEL 1: MAIN DAILY TASK PAGE (4 COMPACT CARDS: JS, REACT, NODE, MONGODB)
// ========================================================
function CategoriesView() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto py-6 sm:py-10 space-y-6 animate-fade-slide-up">
      {/* HEADER */}
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-outfit font-black text-[#1e293b] tracking-tight">
          Daily Tasks
        </h1>
      </div>

      {/* 4 COMPACT CARDS: JAVASCRIPT, REACT, NODE.JS, MONGODB */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 pt-2">
        {/* CARD 1: JAVASCRIPT - MILD BEIGE */}
        <div
          onClick={() => navigate('/daily-task/javascript')}
          className="group relative rounded-2xl bg-[#faf6ee] hover:bg-[#f5eee1] border-2 border-[#d6c7b2] shadow-[4px_4px_0px_#cbb89d] hover:shadow-[5px_5px_0px_#b8a487] hover:-translate-y-1.5 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#f5eee1] via-[#d6c7b2] to-[#8c7355]" />
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer pointer-events-none" />

          <div>
            <div className="w-12 h-12 rounded-xl bg-[#8c7355] text-white font-mono font-black text-xl flex items-center justify-center shadow-[2px_2px_0px_#6b543a] group-hover:scale-110 transition-transform duration-300">
              JS
            </div>

            <h2 className="mt-4 text-lg sm:text-xl font-outfit font-black text-[#1e293b] group-hover:text-[#8c7355] transition-colors">
              JavaScript
            </h2>
          </div>

          <div className="mt-6 pt-3 border-t-2 border-[#ede3d4] flex items-center justify-between text-xs font-bold font-mono text-[#8c7355]">
            <div className="flex items-center gap-1 group-hover:translate-x-1 transition-transform font-black">
              <span>Open Tasks</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* CARD 2: REACT - MILD SKY BLUE */}
        <div
          onClick={() => navigate('/daily-task/react')}
          className="group relative rounded-2xl bg-[#f0f7fc] hover:bg-[#e4f1fb] border-2 border-[#93c5fd] shadow-[4px_4px_0px_#bfdbfe] hover:shadow-[5px_5px_0px_#93c5fd] hover:-translate-y-1.5 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#bae6fd] via-[#7dd3fc] to-[#38bdf8]" />
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer pointer-events-none" />

          <div>
            <div className="w-12 h-12 rounded-xl bg-[#0284c7] text-white flex items-center justify-center shadow-[2px_2px_0px_#0369a1] group-hover:scale-110 transition-transform duration-300">
              <Atom className="w-7 h-7 animate-spin-slow" />
            </div>

            <h2 className="mt-4 text-lg sm:text-xl font-outfit font-black text-[#1e293b] group-hover:text-[#0284c7] transition-colors">
              React
            </h2>
          </div>

          <div className="mt-6 pt-3 border-t-2 border-[#bfdbfe] flex items-center justify-between text-xs font-bold font-mono text-[#0284c7]">
            <div className="flex items-center gap-1 group-hover:translate-x-1 transition-transform font-black">
              <span>Open Tasks</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* CARD 3: NODE.JS - MILD PISTA GREEN */}
        <div
          onClick={() => navigate('/daily-task/node')}
          className="group relative rounded-2xl bg-[#f2f9f3] hover:bg-[#e6f4e8] border-2 border-[#a7f3d0] shadow-[4px_4px_0px_#d1fae5] hover:shadow-[5px_5px_0px_#6ee7b7] hover:-translate-y-1.5 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#dcfce7] via-[#a7f3d0] to-[#4ade80]" />
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer pointer-events-none" />

          <div>
            <div className="w-12 h-12 rounded-xl bg-[#16a34a] text-white flex items-center justify-center shadow-[2px_2px_0px_#15803d] group-hover:scale-110 transition-transform duration-300">
              <Server className="w-6 h-6" />
            </div>

            <h2 className="mt-4 text-lg sm:text-xl font-outfit font-black text-[#1e293b] group-hover:text-[#16a34a] transition-colors">
              Node.js
            </h2>
          </div>

          <div className="mt-6 pt-3 border-t-2 border-[#d1fae5] flex items-center justify-between text-xs font-bold font-mono text-[#16a34a]">
            <div className="flex items-center gap-1 group-hover:translate-x-1 transition-transform font-black">
              <span>Open Tasks</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* CARD 4: MONGODB - MILD NAVY BLUE */}
        <div
          onClick={() => navigate('/daily-task/mongodb')}
          className="group relative rounded-2xl bg-[#f0f4f8] hover:bg-[#e4ecf4] border-2 border-[#94a3b8] shadow-[4px_4px_0px_#cbd5e1] hover:shadow-[5px_5px_0px_#64748b] hover:-translate-y-1.5 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#cbd5e1] via-[#94a3b8] to-[#1e293b]" />
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer pointer-events-none" />

          <div>
            <div className="w-12 h-12 rounded-xl bg-[#1e293b] text-white flex items-center justify-center shadow-[2px_2px_0px_#0f172a] group-hover:scale-110 transition-transform duration-300">
              <Database className="w-6 h-6" />
            </div>

            <h2 className="mt-4 text-lg sm:text-xl font-outfit font-black text-[#1e293b] group-hover:text-[#1e293b] transition-colors">
              MongoDB
            </h2>
          </div>

          <div className="mt-6 pt-3 border-t-2 border-[#cbd5e1] flex items-center justify-between text-xs font-bold font-mono text-[#1e293b]">
            <div className="flex items-center gap-1 group-hover:translate-x-1 transition-transform font-black">
              <span>Open Tasks</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================================
// LEVEL 2: JAVASCRIPT DAY 1 TO DAY 10 (5 CARDS PER ROW USING FLEX)
// ========================================================
function JsDaysListView() {
  const navigate = useNavigate();
  // Permanently Mild Beige theme
  const theme = MILD_THEMES.beige;

  return (
    <div className="max-w-6xl mx-auto py-6 sm:py-8 space-y-6 animate-fade-slide-up">
      {/* HEADER & BACK BUTTON */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b-2 border-slate-200">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/daily-task')}
            className="p-2.5 rounded-xl bg-white border-2 border-[#1e293b] text-[#1e293b] hover:bg-[#f1f5f9] shadow-[2px_2px_0px_#1e293b] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer group"
            title="Back to categories"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </button>

          <div>
            <h1 className="text-2xl sm:text-3xl font-outfit font-black text-[#1e293b] tracking-tight">
              JavaScript Daily Tasks
            </h1>
            <p className="text-xs sm:text-sm text-[#475569] font-medium">
              Day-wise hands-on projects & algorithms
            </p>
          </div>
        </div>

        <a
          href="https://github.com/Amirtham-dev/backend-mern/tree/main/js"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1e293b] hover:bg-[#0f172a] text-[#fffdfa] text-xs font-mono font-bold transition-all shadow-[2px_2px_0px_#0f172a] hover:translate-x-[1px] hover:translate-y-[1px] shrink-0 self-start sm:self-auto cursor-pointer"
        >
          <span>GitHub Repo</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* 5 CARDS PER ROW USING FLEX CONTAINER - ALL CARDS MILD BEIGE */}
      <div className="flex flex-wrap gap-4 items-stretch justify-start">
        {jsDaysList.map((item, index) => {
          return (
            <div
              key={item.id}
              onClick={() => navigate(`/daily-task/javascript/${item.id}`)}
              style={{ animationDelay: `${index * 60}ms` }}
              className={`w-full sm:w-[calc((100%-16px)/2)] md:w-[calc((100%-32px)/3)] lg:w-[calc((100%-64px)/5)] group relative rounded-2xl ${theme.bg} ${theme.hoverBg} border-2 ${theme.border} p-4 ${theme.shadow} ${theme.hoverShadow} hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between`}
            >
              {/* Top Mild Pastel Gradient Stripe */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${theme.stripe} group-hover:h-2 transition-all duration-300`} />

              {/* Shimmer light reflection effect on hover */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer pointer-events-none" />

              <div className="pt-1.5">
                {/* Day Badge & Task Chip Row */}
                <div className="flex items-center justify-between gap-1">
                  <span className={`px-2.5 py-1 rounded-lg ${theme.badgeBg} text-white font-mono font-black text-xs tracking-wider ${theme.badgeShadow} group-hover:scale-105 transition-transform duration-200 inline-flex items-center gap-1.5`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${theme.dotColor} animate-pulse`} />
                    <span>{item.day}</span>
                  </span>

                  <span className={`px-2 py-0.5 rounded-md text-[9px] font-mono font-black uppercase tracking-wider ${theme.tagBg} ${theme.tagText} border ${theme.tagBorder}`}>
                    Task
                  </span>
                </div>

                {/* Title */}
                <div className="my-3 min-h-[46px]">
                  <h3 className={`text-xs sm:text-sm font-outfit font-black text-[#1e293b] ${theme.titleHover} transition-colors line-clamp-2 leading-snug mt-0.5`}>
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* View Project Action Button */}
              <div className="mt-2 pt-2.5 border-t border-slate-200/80">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/daily-task/javascript/${item.id}`);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl ${theme.btnBg} text-white text-[11px] font-mono font-bold tracking-wider ${theme.btnShadow} ${theme.btnHoverShadow} group-hover:translate-x-0.5 transition-all duration-200 cursor-pointer overflow-hidden relative`}
                >
                  <span>View Project</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ========================================================
// LEVEL 3: DETAILED DAY PROJECT VIEW
// ========================================================
function DayDetailView() {
  const { dayId } = useParams();
  const navigate = useNavigate();

  const selectedDay = jsDaysList.find(
    (d) => d.id === dayId || d.day.toLowerCase().replace(/\s+/g, '') === dayId?.toLowerCase()
  );

  const [demoOutput, setDemoOutput] = useState(() => {
    return selectedDay ? selectedDay.runDemo() : null;
  });

  useEffect(() => {
    if (selectedDay) {
      setDemoOutput(selectedDay.runDemo());
    }
  }, [dayId]);

  if (!selectedDay) {
    return (
      <div className="max-w-md mx-auto py-12 text-center space-y-4">
        <h2 className="text-xl font-bold text-[#1e293b]">Task Not Found</h2>
        <button
          onClick={() => navigate('/daily-task/javascript')}
          className="px-4 py-2 rounded-xl bg-[#1e293b] text-white font-mono text-sm shadow-[2px_2px_0px_#64748b] cursor-pointer"
        >
          Back to JavaScript Tasks
        </button>
      </div>
    );
  }

  const currentIndex = jsDaysList.findIndex(d => d.id === selectedDay?.id);
  const prevDay = currentIndex > 0 ? jsDaysList[currentIndex - 1] : null;
  const nextDay = currentIndex < jsDaysList.length - 1 ? jsDaysList[currentIndex + 1] : null;

  return (
    <div className="w-full space-y-4 animate-fade-slide-up">
      {/* MINIMAL TOP BAR: ONLY BACK BUTTON & DAY BADGE */}
      <div className="flex items-center justify-between pb-3 border-b-2 border-slate-200">
        <button
          onClick={() => navigate('/daily-task/javascript')}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border-2 border-[#1e293b] text-[#1e293b] hover:bg-[#f1f5f9] shadow-[2px_2px_0px_#1e293b] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none font-mono text-xs font-bold transition-all cursor-pointer group"
          title="Back to JavaScript tasks list"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to JavaScript Tasks</span>
        </button>

        <span className="px-3 py-1 rounded-xl bg-[#1e293b] text-white font-mono font-bold text-xs shadow-[2px_2px_0px_#64748b]">
          {selectedDay.day} Output
        </span>
      </div>

      {/* ONLY THE OUTPUT */}
      <div className="p-5 sm:p-6 rounded-3xl bg-[#faf6ee] border-2 border-[#d6c7b2] shadow-[5px_5px_0px_#cbb89d] relative overflow-hidden space-y-4">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#a7f3d0] via-[#93c5fd] to-[#fbcfe8]" />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-[#1e293b] text-white shadow-[2px_2px_0px_#64748b]">
              <Terminal className="w-3.5 h-3.5" />
            </div>
            <div>
              <h2 className="text-[#1e293b] font-outfit font-black text-sm uppercase tracking-wider">
                Terminal Output
              </h2>
              <span className="text-[10px] font-mono text-[#64748b] font-bold">Node.js Execution Stream</span>
            </div>
          </div>

          <button
            onClick={() => setDemoOutput(selectedDay.runDemo())}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-mono font-bold shadow-[2px_2px_0px_#075985] active:translate-x-[1px] active:translate-y-[1px] cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Run Code Output</span>
          </button>
        </div>

        <div className="rounded-2xl bg-[#0f172a] border-2 border-[#1e293b] shadow-[3px_3px_0px_#334155] overflow-hidden">
          <div className="px-4 py-2 bg-[#1e293b] border-b border-slate-700 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
              <span>node {selectedDay.files[0]}</span>
            </div>
            <span className="text-[10px] font-mono text-slate-400">Exit code: 0</span>
          </div>
          <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm text-emerald-300 whitespace-pre-wrap leading-relaxed min-h-[90px] select-text">
            {demoOutput || `> Ready. Click "Run Code Output" to execute ${selectedDay.day} task.`}
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================================
// LEVEL 2: REACT DAY 1 TO DAY 11 (5 CARDS PER ROW USING FLEX)
// ========================================================
function ReactDaysListView() {
  const navigate = useNavigate();
  const theme = MILD_THEMES.skyBlue;

  return (
    <div className="max-w-6xl mx-auto py-6 sm:py-8 space-y-6 animate-fade-slide-up">
      {/* HEADER & BACK BUTTON */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b-2 border-slate-200">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/daily-task')}
            className="p-2.5 rounded-xl bg-white border-2 border-[#1e293b] text-[#1e293b] hover:bg-[#f1f5f9] shadow-[2px_2px_0px_#1e293b] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer group"
            title="Back to categories"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </button>

          <div>
            <h1 className="text-2xl sm:text-3xl font-outfit font-black text-[#1e293b] tracking-tight">
              React Daily Tasks
            </h1>
            <p className="text-xs sm:text-sm text-[#475569] font-medium">
              Day-wise hands-on projects & components
            </p>
          </div>
        </div>

        <a
          href="https://github.com/Amirtham-dev/backend-mern/tree/main/react"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-[#fffdfa] text-xs font-mono font-bold transition-all shadow-[2px_2px_0px_#075985] hover:translate-x-[1px] hover:translate-y-[1px] shrink-0 self-start sm:self-auto cursor-pointer"
        >
          <span>GitHub Repo</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* 5 CARDS PER ROW USING FLEX CONTAINER - MILD SKY BLUE THEME */}
      <div className="flex flex-wrap gap-4 items-stretch justify-start">
        {reactDaysList.map((item, index) => {
          return (
            <div
              key={item.id}
              onClick={() => navigate(`/daily-task/react/${item.id}`)}
              style={{ animationDelay: `${index * 60}ms` }}
              className={`w-full sm:w-[calc((100%-16px)/2)] md:w-[calc((100%-32px)/3)] lg:w-[calc((100%-64px)/5)] group relative rounded-2xl ${theme.bg} ${theme.hoverBg} border-2 ${theme.border} p-4 ${theme.shadow} ${theme.hoverShadow} hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between`}
            >
              {/* Top Mild Pastel Gradient Stripe */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${theme.stripe} group-hover:h-2 transition-all duration-300`} />

              {/* Shimmer light reflection effect on hover */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer pointer-events-none" />

              <div className="pt-1.5">
                {/* Day Badge & Task Chip Row */}
                <div className="flex items-center justify-between gap-1">
                  <span className={`px-2.5 py-1 rounded-lg ${theme.badgeBg} text-white font-mono font-black text-xs tracking-wider ${theme.badgeShadow} group-hover:scale-105 transition-transform duration-200 inline-flex items-center gap-1.5`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${theme.dotColor} animate-pulse`} />
                    <span>{item.day}</span>
                  </span>

                  <span className={`px-2 py-0.5 rounded-md text-[9px] font-mono font-black uppercase tracking-wider ${theme.tagBg} ${theme.tagText} border ${theme.tagBorder}`}>
                    Task
                  </span>
                </div>

                {/* Title */}
                <div className="my-3 min-h-[46px]">
                  <h3 className={`text-xs sm:text-sm font-outfit font-black text-[#1e293b] ${theme.titleHover} transition-colors line-clamp-2 leading-snug mt-0.5`}>
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* View Project Action Button */}
              <div className="mt-2 pt-2.5 border-t border-slate-200/80">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/daily-task/react/${item.id}`);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl ${theme.btnBg} text-white text-[11px] font-mono font-bold tracking-wider ${theme.btnShadow} ${theme.btnHoverShadow} group-hover:translate-x-0.5 transition-all duration-200 cursor-pointer overflow-hidden relative`}
                >
                  <span>View Project</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ========================================================
// LIVE COMPONENT PREVIEWS FOR REACT DAYS (DAY 1 TO DAY 9)
// ========================================================
function Day1LivePreview() {
  return <Day1App />;
}

function Day2LivePreview({ onLog }) {
  const handleClassClick = (num) => {
    onLog?.(`[Class Component ${num}] <Class${num} /> render() executed -> "THIS IS CLASS COMPONENT ${num}"`);
  };

  return (
    <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200 space-y-3 font-sans">
      <div className="border-b border-slate-200 pb-2 flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight">this is react app</h1>
        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-bold border">5 Class Components</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        <div onClick={() => handleClassClick(1)} className="p-3 rounded-xl bg-[#f0f7fc] border border-[#93c5fd] shadow-xs flex items-center justify-between hover:scale-[1.01] transition-transform cursor-pointer">
          <h2 className="font-bold text-xs sm:text-sm text-[#0284c7]">THIS IS CLASS COMPONENT 1</h2>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-sky-800 font-bold border border-sky-200">&lt;Class1 /&gt;</span>
        </div>
        <div onClick={() => handleClassClick(2)} className="p-3 rounded-xl bg-[#fdf2f4] border border-[#fbcfe8] shadow-xs flex items-center justify-between hover:scale-[1.01] transition-transform cursor-pointer">
          <h2 className="font-bold text-xs sm:text-sm text-[#db2777]">THIS IS CLASS COMPONENT 2</h2>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-pink-800 font-bold border border-pink-200">&lt;Class2 /&gt;</span>
        </div>
        <div onClick={() => handleClassClick(3)} className="p-3 rounded-xl bg-[#f2f9f3] border border-[#a7f3d0] shadow-xs flex items-center justify-between hover:scale-[1.01] transition-transform cursor-pointer">
          <h2 className="font-bold text-xs sm:text-sm text-[#16a34a]">THIS IS CLASS COMPONENT 3</h2>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-emerald-800 font-bold border border-emerald-200">&lt;Class3 /&gt;</span>
        </div>
        <div onClick={() => handleClassClick(4)} className="p-3 rounded-xl bg-[#f0f4f8] border border-[#94a3b8] shadow-xs flex items-center justify-between hover:scale-[1.01] transition-transform cursor-pointer">
          <h2 className="font-bold text-xs sm:text-sm text-[#1e293b]">THIS IS CLASS COMPONENT 4</h2>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-slate-800 font-bold border border-slate-200">&lt;Class4 /&gt;</span>
        </div>
        <div onClick={() => handleClassClick(5)} className="p-3 rounded-xl bg-[#faf6ee] border border-[#d6c7b2] shadow-xs flex items-center justify-between sm:col-span-2 hover:scale-[1.01] transition-transform cursor-pointer">
          <h2 className="font-bold text-xs sm:text-sm text-[#8c7355]">THIS IS CLASS COMPONENT 5</h2>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-amber-800 font-bold border border-amber-200">&lt;Class5 /&gt;</span>
        </div>
      </div>
    </div>
  );
}

function Day3LivePreview({ onLog }) {
  const [navTab, setNavTab] = useState('Home');

  const handleTabChange = (tab) => {
    setNavTab(tab);
    onLog?.(`[Nav Router] Active navigation tab changed to: "${tab}"`);
  };

  const handleProductSelect = (prod) => {
    onLog?.(`[ProductCard] Selected item: "${prod.name}" (Price: ${prod.price}, Tag: ${prod.tag})`);
  };

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden font-sans bg-white shadow-xs">
      <header className="p-3 bg-[#1e293b] text-white flex items-center justify-between">
        <span className="font-bold font-mono text-sm">⚛️ TechStore Pro</span>
        <span className="text-[11px] font-mono text-sky-300">&lt;Header.jsx /&gt;</span>
      </header>
      <nav className="px-3 py-2 bg-slate-50 border-b border-slate-200 flex gap-2 text-xs font-semibold">
        {['Home', 'Products', 'About', 'Footer'].map(tab => (
          <button 
            key={tab} 
            onClick={() => handleTabChange(tab)}
            className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${navTab === tab ? 'bg-[#0284c7] text-white shadow-xs' : 'text-slate-600 hover:bg-slate-200'}`}
          >
            {tab}
          </button>
        ))}
      </nav>
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold font-mono uppercase text-slate-500">&lt;ProductCard.jsx /&gt; Showcase</h3>
          <span className="text-[11px] text-slate-400 font-mono">Mapped Components</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {[
            { name: 'MacBook Pro M3', price: '₹1,69,900', tag: 'Hot Deal' },
            { name: 'iPhone 16 Pro', price: '₹1,19,900', tag: 'New Release' },
            { name: 'AirPods Pro 2', price: '₹24,900', tag: 'Audio' }
          ].map((prod, i) => (
            <div 
              key={i} 
              onClick={() => handleProductSelect(prod)}
              className="p-3 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-[#0284c7] transition-all flex flex-col justify-between cursor-pointer"
            >
              <div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-sky-100 text-sky-800 border border-sky-200">{prod.tag}</span>
                <h4 className="font-bold text-sm text-slate-800 mt-2">{prod.name}</h4>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-600 mt-3">{prod.price}</span>
            </div>
          ))}
        </div>
      </div>
      <footer className="p-2.5 bg-slate-100 border-t border-slate-200 text-center text-xs text-slate-500 font-mono">
        &lt;Footer.jsx /&gt; • Built with React Component Hierarchy
      </footer>
    </div>
  );
}

function Day4LivePreview({ onLog }) {
  const handleClick = (comp) => {
    onLog?.(`[Modular Component] Inspected: ${comp}`);
  };

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden font-sans bg-white space-y-3 p-4 shadow-xs">
      <div 
        onClick={() => handleClick("Header.jsx (Scoped CSS)")}
        className="p-3.5 bg-gradient-to-r from-sky-600 to-blue-700 rounded-xl text-white flex justify-between items-center shadow-xs cursor-pointer hover:opacity-95"
      >
        <div>
          <h3 className="font-bold text-sm">Header Component (component/Header.jsx)</h3>
          <p className="text-[11px] text-sky-200">Functional arrow component with scoped App.css</p>
        </div>
        <span className="text-[10px] font-mono bg-white/20 px-2 py-0.5 rounded">Modular</span>
      </div>
      <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 flex gap-4 font-mono font-medium">
        <span className="font-bold text-[#0284c7]">component/Navbar.jsx</span>
        {['Home', 'Services', 'About', 'Contact'].map(link => (
          <span 
            key={link} 
            onClick={() => handleClick(`Navbar link: ${link}`)} 
            className="hover:text-[#0284c7] cursor-pointer"
          >
            • {link}
          </span>
        ))}
      </div>
      <div 
        onClick={() => handleClick("Home.jsx (Container)")}
        className="p-4 bg-sky-50 rounded-xl border border-sky-200 text-center space-y-1 cursor-pointer hover:bg-sky-100/70 transition-colors"
      >
        <h4 className="font-bold text-sky-900 text-sm">component/Home.jsx</h4>
        <p className="text-xs text-sky-700">Clean modular folder structure separating components, styling, and assets.</p>
      </div>
      <div 
        onClick={() => handleClick("Footer.jsx")}
        className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-center text-xs text-slate-500 font-mono cursor-pointer hover:bg-slate-100"
      >
        component/Footer.jsx
      </div>
    </div>
  );
}

function Day5LivePreview({ onLog }) {
  const studentDetails = {
    studentName: "Arun",
    age: 22,
    course: "React",
    fees: 15000
  };

  const students = [
    { id: 1, name: "Arun", course: "React" },
    { id: 2, name: "Priya", course: "Node" },
    { id: 3, name: "Kumar", course: "MongoDB" }
  ];

  const skills = ["HTML", "CSS", "JavaScript", "React", "Node"];

  return (
    <div className="space-y-4 font-sans text-slate-800">
      {/* NonPrimitiveData Box */}
      <div className="bg-blue-50 p-4 sm:p-5 rounded-2xl border-2 border-blue-200 space-y-3.5">
        <div className="flex items-center justify-between border-b border-blue-200 pb-2">
          <h3 className="text-sm font-mono font-black text-blue-900 uppercase">NonPrimitiveData.jsx</h3>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-200 text-blue-800 font-bold">Objects & Arrays</span>
        </div>
        
        {/* Student Details Object */}
        <div 
          onClick={() => onLog?.(`[Object Data] studentDetails -> Name: "${studentDetails.studentName}", Age: ${studentDetails.age}, Course: "${studentDetails.course}", Fees: ₹${studentDetails.fees}`)}
          className="p-3.5 bg-white rounded-xl border border-blue-200 shadow-xs cursor-pointer hover:border-blue-400 transition-colors"
        >
          <h1 className="text-sm font-bold text-slate-900">Student Details (Object Data Binding)</h1>
          <h2 className="font-semibold text-xs text-slate-700 mt-1">Student Name: {studentDetails.studentName}</h2>
          <div className="flex flex-wrap gap-4 text-xs text-slate-600 mt-1.5 font-mono">
            <p>Age: {studentDetails.age}</p>
            <p>Course: {studentDetails.course}</p>
            <p className="font-bold text-emerald-700">Fees: ₹{studentDetails.fees}</p>
          </div>
        </div>

        {/* Skills Array */}
        <div className="p-3.5 bg-pink-50 rounded-xl border border-pink-200 space-y-1.5">
          <h2 className="font-bold text-xs text-pink-900">Skills Array (.map() Loop):</h2>
          <div className="flex flex-wrap gap-2 pt-1">
            {skills.map((skill, index) => (
              <button 
                key={index} 
                onClick={() => onLog?.(`[Array Map] skills[${index}] = "${skill}"`)}
                className="px-3 py-1 rounded-lg bg-white border border-pink-200 text-xs font-semibold text-pink-800 shadow-xs hover:bg-pink-100 transition-colors cursor-pointer"
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        {/* Students Array of Objects */}
        <div className="p-3.5 bg-white rounded-xl border border-blue-200 shadow-xs space-y-2">
          <h1 className="text-xs font-bold text-slate-800">Students Array of Objects:</h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {students.map((student) => (
              <div 
                key={student.id} 
                onClick={() => onLog?.(`[Object in Array] Student #${student.id} -> Name: "${student.name}", Course: "${student.course}"`)}
                className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 hover:border-sky-400 transition-colors cursor-pointer"
              >
                <h2 className="font-bold text-xs text-slate-900">#{student.id} {student.name}</h2>
                <p className="text-[11px] text-slate-500 font-mono mt-0.5">Course: {student.course}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PrimitiveData Box */}
      <div className="bg-green-50 p-4 sm:p-5 rounded-2xl border-2 border-green-200 space-y-2.5">
        <div className="flex items-center justify-between border-b border-green-200 pb-2">
          <h3 className="text-sm font-mono font-black text-green-900 uppercase">PrimitiveData.jsx</h3>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-green-200 text-green-800 font-bold">Primitive Types</span>
        </div>
        <div 
          onClick={() => onLog?.(`[Primitives] studentName="Arun", age=22, course="React", fees=15000`)}
          className="p-3.5 bg-white rounded-xl border border-green-200 shadow-xs text-xs space-y-1.5 font-mono cursor-pointer hover:border-emerald-400"
        >
          <p>const studentName = <span className="font-bold text-blue-700">"Arun"</span>;</p>
          <p>const age = <span className="font-bold text-purple-700">22</span>;</p>
          <p>const course = <span className="font-bold text-blue-700">"React"</span>;</p>
          <p>const fees = <span className="font-bold text-emerald-700">15000</span>;</p>
        </div>
      </div>
    </div>
  );
}

function Day6LivePreview({ onLog }) {
  const users = [
    { name: "Amirtham", role: "Full Stack Developer", skills: ["React", "Node.js", "Express"], isOnline: true },
    { name: "Arun", role: "Frontend Engineer", skills: ["React", "TailwindCSS"], isOnline: false },
    { name: "Priya", role: "Backend Architect", skills: ["Node.js", "MongoDB"], isOnline: true }
  ];

  return (
    <div className="space-y-3 font-sans">
      <div className="text-xs font-mono text-slate-500 flex justify-between">
        <span>Component Composition & Props: &lt;UserCard ...props /&gt;</span>
        <span className="text-emerald-600 font-bold">2 Online</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {users.map((u, i) => (
          <div 
            key={i} 
            onClick={() => onLog?.(`[Props Passing] <UserCard name="${u.name}" role="${u.role}" isOnline={${u.isOnline}} skills={[${u.skills.join(', ')}]} />`)}
            className="p-4 rounded-2xl bg-white border-2 border-slate-200 shadow-xs space-y-2.5 hover:border-[#0284c7] hover:scale-[1.02] transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-sm text-slate-900">{u.name}</h4>
              <span className={`w-2.5 h-2.5 rounded-full ${u.isOnline ? 'bg-emerald-500 ring-4 ring-emerald-100' : 'bg-slate-300'}`} />
            </div>
            <p className="text-xs text-slate-500">{u.role}</p>
            <div className="flex flex-wrap gap-1 pt-1">
              {u.skills.map((s, idx) => (
                <span key={idx} className="text-[10px] px-2 py-0.5 rounded-md bg-sky-50 text-sky-700 border border-sky-200 font-medium">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Day7LivePreview({ onLog }) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [unreadCount, setUnreadCount] = useState(3);

  const toggleAuth = () => {
    const next = !isLoggedIn;
    setIsLoggedIn(next);
    onLog?.(`[Conditional Rendering] isLoggedIn toggled to ${next} -> Rendering: ${next ? "'Welcome back, Amirtham!'" : "'Please sign in to view dashboard.'"}`);
  };

  const addNotification = () => {
    const next = unreadCount + 1;
    setUnreadCount(next);
    onLog?.(`[Logical Guard (&&)] notifications = ${next} (${next} > 0 is TRUE) -> Rendering unread badge.`);
  };

  const clearNotifications = () => {
    setUnreadCount(0);
    onLog?.(`[Logical Guard (&&)] notifications = 0 (0 > 0 is FALSE) -> Unread badge hidden by guard.`);
  };

  return (
    <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 font-sans">
      <div className="flex flex-wrap gap-2">
        <button 
          onClick={toggleAuth} 
          className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold bg-[#1e293b] text-white hover:bg-slate-800 transition-all cursor-pointer shadow-xs active:scale-95"
        >
          Toggle Auth ({isLoggedIn ? 'Active' : 'Logged Out'})
        </button>
        <button 
          onClick={addNotification} 
          className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold bg-[#0284c7] text-white hover:bg-sky-700 transition-all cursor-pointer shadow-xs active:scale-95"
        >
          + Notification ({unreadCount})
        </button>
        <button 
          onClick={clearNotifications} 
          className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold bg-slate-200 text-slate-700 hover:bg-slate-300 transition-all cursor-pointer active:scale-95"
        >
          Clear
        </button>
      </div>

      <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-3">
        {isLoggedIn ? (
          <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
            <span>✓ Welcome back, Amirtham!</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">Ternary ? True</span>
          </div>
        ) : (
          <div className="text-amber-700 font-bold text-sm flex items-center gap-2">
            <span>🔒 Please sign in to view dashboard.</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300">Ternary : False</span>
          </div>
        )}

        {unreadCount > 0 && (
          <div className="p-2.5 rounded-lg bg-pink-50 border border-pink-200 text-pink-700 text-xs font-semibold flex items-center justify-between">
            <span>📬 You have {unreadCount} new notifications!</span>
            <span className="text-[10px] font-mono bg-pink-200 px-2 py-0.5 rounded text-pink-900 font-bold">Logical Guard (&&)</span>
          </div>
        )}
      </div>
    </div>
  );
}

function Day8LivePreview({ onLog }) {
  const [form, setForm] = useState({ name: 'Amirtham', email: 'amirtham@example.com', course: 'React' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    onLog?.(`[Synthetic Event] e.preventDefault() executed! Page reload suppressed.\n[Console.log] Form payload: { name: "${form.name}", email: "${form.email}", course: "${form.course}" }`);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (field, val) => {
    setForm(prev => ({ ...prev, [field]: val }));
    onLog?.(`[Controlled Component] field '${field}' updated to "${val}"`);
  };

  return (
    <div className="space-y-3 font-sans">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div>
          <label className="text-[11px] font-bold text-slate-700 block mb-1">Student Name (Two-way Binding)</label>
          <input 
            type="text" 
            value={form.name} 
            onChange={(e) => handleChange('name', e.target.value)} 
            className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-sky-500 bg-white"
          />
        </div>
        <div>
          <label className="text-[11px] font-bold text-slate-700 block mb-1">Email Input</label>
          <input 
            type="email" 
            value={form.email} 
            onChange={(e) => handleChange('email', e.target.value)} 
            className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-sky-500 bg-white"
          />
        </div>
        <div>
          <label className="text-[11px] font-bold text-slate-700 block mb-1">Select Course</label>
          <select 
            value={form.course} 
            onChange={(e) => handleChange('course', e.target.value)} 
            className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-sky-500 bg-white"
          >
            <option value="React">React</option>
            <option value="Node.js">Node.js</option>
            <option value="MongoDB">MongoDB</option>
          </select>
        </div>
        <div className="sm:col-span-3 pt-1">
          <button type="submit" className="px-4 py-2.5 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-mono font-bold shadow-xs transition-all cursor-pointer">
            Enroll Student (e.preventDefault())
          </button>
        </div>
      </form>

      {submitted && (
        <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold animate-fade-slide-up flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-600" />
          <span>Form Submitted Successfully: {form.name} ({form.email}) registered for {form.course}!</span>
        </div>
      )}
    </div>
  );
}

function Day9LivePreview() {
  return <Day9App />;
}

function Day10LivePreview() {
  return <Day10App />;
}

function Day11LivePreview() {
  return <Day11App />;
}

function renderReactDayComponent(dayId, onLog) {
  switch (dayId?.toLowerCase()) {
    case 'day1': return <Day1LivePreview onLog={onLog} />;
    case 'day2': return <Day2LivePreview onLog={onLog} />;
    case 'day3': return <Day3LivePreview onLog={onLog} />;
    case 'day4': return <Day4LivePreview onLog={onLog} />;
    case 'day5': return <Day5LivePreview onLog={onLog} />;
    case 'day6': return <Day6LivePreview onLog={onLog} />;
    case 'day7': return <Day7LivePreview onLog={onLog} />;
    case 'day8': return <Day8LivePreview onLog={onLog} />;
    case 'day9': return <Day9LivePreview onLog={onLog} />;
    case 'day10': return <Day10LivePreview onLog={onLog} />;
    case 'day11': return <Day11LivePreview onLog={onLog} />;
    default: return <Day1LivePreview onLog={onLog} />;
  }
}

// ========================================================
// LEVEL 3: DETAILED REACT DAY PROJECT VIEW WITH LIVE SCREEN & CONSOLE
// DESIGNED REFERENCING THE HOME PAGE VINTAGE BEIGE CARDS & BORDERS
// ========================================================
function ReactDayDetailView() {
  const { dayId } = useParams();
  const navigate = useNavigate();
  const [resetKey, setResetKey] = useState(0);

  const selectedDay = reactDaysList.find(
    (d) => d.id === dayId || d.day.toLowerCase().replace(/\s+/g, '') === dayId?.toLowerCase()
  );

  const handleRunProject = () => {
    setResetKey(prev => prev + 1);
    console.log(`%c[Vite] %cReloading project execution for ${selectedDay.day}...`, 'color: #10b981; font-weight: bold;', 'color: #0284c7;');
  };

  // When mounted, stream exact Vite terminal output to browser console (F12)
  useEffect(() => {
    if (selectedDay) {
      console.clear();

      // Realistic Vite Terminal Banner
      console.log(
        '%c  VITE v5.4.2 %c ready in %c248 ms%c\n\n' +
        '%c  ➜  %cLocal:   %chttp://localhost:5173/\n' +
        '%c  ➜  %cNetwork: %chttp://10.18.238.20:5173/\n' +
        '%c  ➜  %cpress %ch + enter%c to show help\n',
        'background: #10b981; color: white; font-weight: bold; padding: 2px 6px; border-radius: 4px;',
        'color: #94a3b8;',
        'color: #10b981; font-weight: bold;',
        'color: #94a3b8;',
        'color: #10b981; font-weight: bold;',
        'color: #64748b; font-weight: bold;',
        'color: #0284c7; font-weight: bold; text-decoration: underline;',
        'color: #10b981; font-weight: bold;',
        'color: #64748b; font-weight: bold;',
        'color: #0284c7; font-weight: bold; text-decoration: underline;',
        'color: #10b981; font-weight: bold;',
        'color: #64748b;',
        'color: #1e293b; font-weight: bold;',
        'color: #64748b;'
      );

      console.log('%c[vite] %cconnected.', 'color: #10b981; font-weight: bold;', 'color: #64748b;');
      console.log(
        `%c[React DOM] %cMounted ${selectedDay.day}: ${selectedDay.title}`,
        'color: #61dafb; font-weight: bold;',
        'color: #10b981; font-weight: bold;'
      );

      // Real-time terminal activity stream on interactions (Lively & Naturally)
      const handleGlobalClick = (e) => {
        const target = e.target.closest('button, a, input, [role="button"], h1, h2, h3, div[onClick]');
        if (target) {
          const text = target.innerText?.trim()?.slice(0, 35) || target.getAttribute('href') || target.tagName;
          const time = new Date().toLocaleTimeString('en-US', { hour12: false });
          console.log(
            `%c[${time}] %c[Terminal Event] %cAction on <${target.tagName.toLowerCase()}>%c → "${text}"`,
            'color: #94a3b8; font-size: 11px;',
            'color: #10b981; font-weight: bold;',
            'color: #0284c7; font-weight: bold;',
            'color: #0f172a;'
          );
        }
      };

      const handleScroll = () => {
        const sections = ['history', 'why-react', 'features', 'library-vs-framework', 'drawbacks', 'summary'];
        const scrollPos = window.scrollY + 200;
        for (const id of sections) {
          const el = document.getElementById(id);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPos >= top && scrollPos < top + height) {
              if (window._currentActiveSection !== id) {
                window._currentActiveSection = id;
                const time = new Date().toLocaleTimeString('en-US', { hour12: false });
                console.log(
                  `%c[${time}] %c[Terminal Route] %cIn Viewport: #${id}`,
                  'color: #94a3b8; font-size: 11px;',
                  'color: #8b5cf6; font-weight: bold;',
                  'color: #0284c7; font-weight: bold;'
                );
              }
              break;
            }
          }
        }
      };

      window.addEventListener('click', handleGlobalClick);
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        window.removeEventListener('click', handleGlobalClick);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [dayId, resetKey]);

  if (!selectedDay) {
    return (
      <div className="max-w-md mx-auto py-12 text-center space-y-4">
        <h2 className="text-xl font-bold text-[#1e293b]">Task Not Found</h2>
        <button
          onClick={() => navigate('/daily-task/react')}
          className="px-4 py-2 rounded-xl bg-[#0284c7] text-white font-mono text-sm shadow-[2px_2px_0px_#075985] cursor-pointer"
        >
          Back to React Tasks
        </button>
      </div>
    );
  }

  return (
    <div className="w-full space-y-5 animate-fade-slide-up">
      {/* 1. TOP LEVEL NAVIGATION & STATUS BAR */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b-2 border-slate-200">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/daily-task/react')}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border-2 border-[#1e293b] text-[#1e293b] hover:bg-[#f1f5f9] shadow-[2px_2px_0px_#1e293b] active:translate-x-[1px] active:translate-y-[1px] font-mono text-xs font-bold transition-all cursor-pointer group"
            title="Back to React tasks list"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to React Tasks</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-xl bg-[#0284c7] text-white font-mono font-bold text-xs shadow-xs">
              {selectedDay.day}
            </span>
            <span className="text-sm font-outfit font-black text-[#1e293b]">
              {selectedDay.title}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-white border border-slate-300 shadow-2xs text-[11px] font-mono text-slate-700">
            <span>Press</span>
            <kbd className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-300 text-[10px] font-black text-slate-900 shadow-2xs">
              F12
            </kbd>
            <span>for Console</span>
          </div>
        </div>
      </div>

      {/* 2. LEVELED OUTPUT SCREEN CANVAS (WITH PROPER MARGIN, BORDER & CHROME) */}
      <div className="w-full rounded-3xl bg-[#faf6ee] border-2 border-[#d6c7b2] shadow-[6px_6px_0px_#cbb89d] p-3 sm:p-5 relative overflow-hidden space-y-3">
        {/* Top Accent Stripe */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#93c5fd] via-[#fbcfe8] to-[#a7f3d0]" />

        {/* Screen Window Chrome */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 px-4 py-2.5 bg-slate-100 rounded-2xl border border-slate-200 shadow-2xs">
          <div className="flex items-center gap-2">
            <div className="px-3 py-1 rounded-xl bg-white border border-slate-300 text-xs font-mono text-slate-600 shadow-inner flex items-center gap-2">
              <span className="text-emerald-600 font-bold">http://</span>
              <span>localhost:5173/react/{selectedDay.id}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleRunProject}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-mono font-bold shadow-xs active:scale-95 transition-all cursor-pointer"
              title="Re-run / restart project"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Run Project</span>
            </button>
          </div>
        </div>

        {/* 3. INSIDE THE SCREEN: ONLY THE OUTPUT */}
        <div key={resetKey} className="w-full rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm">
          {renderReactDayComponent(selectedDay.id, (msg) => console.log(msg))}
        </div>
      </div>
    </div>
  );
}

// ========================================================
// LEVEL 2: NODE.JS TASKS VIEW
// ========================================================
function NodeTasksView() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto py-6 space-y-6 animate-fade-slide-up">
      <div className="flex items-center gap-4 pb-4 border-b-2 border-slate-200">
        <button
          onClick={() => navigate('/daily-task')}
          className="p-2.5 rounded-xl bg-white border-2 border-[#16a34a] text-[#0f172a] hover:bg-[#f2f9f3] shadow-[3px_3px_0px_#16a34a] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        </button>
        <div>
          <h1 className="text-2xl font-outfit font-black text-[#0f172a]">
            Node.js Daily Tasks
          </h1>
          <p className="text-xs text-[#475569] font-medium">Backend server, Express APIs, and middleware milestones.</p>
        </div>
      </div>

      <div className="p-8 rounded-3xl bg-[#f2f9f3] border-2 border-[#a7f3d0] shadow-[5px_5px_0px_#d1fae5] text-center space-y-3">
        <div className="w-14 h-14 rounded-2xl bg-[#16a34a] text-white flex items-center justify-center mx-auto shadow-[2px_2px_0px_#15803d]">
          <Server className="w-7 h-7" />
        </div>
        <h3 className="font-outfit font-black text-xl text-[#0f172a]">Node.js Tasks Coming Up</h3>
        <p className="text-sm text-[#334155] max-w-sm mx-auto font-medium">
          Node.js server architectures, REST endpoints, and daily backend milestones will be pushed here.
        </p>
      </div>
    </div>
  );
}

// ========================================================
// LEVEL 2: MONGODB TASKS VIEW
// ========================================================
function MongoTasksView() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto py-6 space-y-6 animate-fade-slide-up">
      <div className="flex items-center gap-4 pb-4 border-b-2 border-slate-200">
        <button
          onClick={() => navigate('/daily-task')}
          className="p-2.5 rounded-xl bg-white border-2 border-[#1e293b] text-[#0f172a] hover:bg-[#f0f4f8] shadow-[3px_3px_0px_#1e293b] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        </button>
        <div>
          <h1 className="text-2xl font-outfit font-black text-[#0f172a]">
            MongoDB Daily Tasks
          </h1>
          <p className="text-xs text-[#475569] font-medium">Database schemas, Mongoose models, and collection milestones.</p>
        </div>
      </div>

      <div className="p-8 rounded-3xl bg-[#f0f4f8] border-2 border-[#94a3b8] shadow-[5px_5px_0px_#cbd5e1] text-center space-y-3">
        <div className="w-14 h-14 rounded-2xl bg-[#1e293b] text-white flex items-center justify-center mx-auto shadow-[2px_2px_0px_#0f172a]">
          <Database className="w-7 h-7" />
        </div>
        <h3 className="font-outfit font-black text-xl text-[#0f172a]">MongoDB Tasks Coming Up</h3>
        <p className="text-sm text-[#334155] max-w-sm mx-auto font-medium">
          MongoDB collections, aggregation pipelines, and indexing milestones will be pushed here.
        </p>
      </div>
    </div>
  );
}

// ========================================================
// MAIN DAILY TASK VIEW WITH REACT ROUTER DOM ROUTES
// ========================================================
export default function DailyTaskView() {
  return (
    <Routes>
      <Route index element={<CategoriesView />} />
      <Route path="javascript" element={<JsDaysListView />} />
      <Route path="javascript/:dayId" element={<DayDetailView />} />
      <Route path="react" element={<ReactDaysListView />} />
      <Route path="react/:dayId" element={<ReactDayDetailView />} />
      <Route path="node" element={<NodeTasksView />} />
      <Route path="mongodb" element={<MongoTasksView />} />
      <Route path="*" element={<Navigate to="/daily-task" replace />} />
    </Routes>
  );
}
