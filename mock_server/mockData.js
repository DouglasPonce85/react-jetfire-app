const products = [
  {
    id: 1,
    name: "Securing React Apps with Auth0",
    slug: "react-auth0-authentication-security",
    categoryId: 1,
    price: 250
  },
  {
    id: 2,
    name: "React: The Big Picture",
    slug: "react-big-picture",
    priceId: 1,
    price: 35
  },
  {
    id: 3,
    name: "Creating Reusable React Components",
    slug: "react-creating-reusable-components",
    priceId: 1,
    price: 135
  },
  {
    id: 4,
    name: "Building a JavaScript Development Environment",
    slug: "javascript-development-environment",
    priceId: 1,
    price: 205
  },
  {
    id: 5,
    name: "Building Applications with React and Redux",
    slug: "react-redux-react-router-es6",
    priceId: 1,
    price: 350
  },
  {
    id: 6,
    name: "Building Applications in React and Flux",
    slug: "react-flux-building-applications",
    priceId: 1,
    price: 199
  },
  {
    id: 7,
    name: "Clean Code: Writing Code for Humans",
    slug: "writing-clean-code-humans",
    priceId: 1,
    price: 25
  },
  {
    id: 8,
    name: "Architecting Applications for the Real World",
    slug: "architecting-applications-dotnet",
    priceId: 1,
    price: 56
  },
  {
    id: 9,
    name: "Becoming an Outlier: Reprogramming the Developer Mind",
    slug: "career-reboot-for-developer-mind",
    priceId: 1,
    price: 99
  },
  {
    id: 10,
    name: "Web Component Fundamentals",
    slug: "web-components-shadow-dom",
    priceId: 1,
    price: 65
  }
];

const locations = [
  { id: 1, name: "New York" },
  { id: 2, name: "Los Angeles" },
  { id: 3, name: "Nashville" }
];

const newProduct = {
  id: null,
  name: "",
  categoryId: null,
  price: 0
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newProduct,
  products,
  locations
}