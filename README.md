# API-Data-Dashboard

A lightweight **JavaScript dashboard application** that demonstrates modern **asynchronous JavaScript patterns** by fetching and displaying user, post, and comment data from the public API service JSONPlaceholder.

The project is designed to showcase real-world frontend architecture using **ES Modules, async/await, Promise utilities, caching, and performance optimizations** such as debounce and throttle.

The application dynamically loads data, organizes it into a nested structure (Users → Posts → Comments), and renders it inside a simple dashboard interface. It also includes search filtering and simulated infinite scrolling.

## Project Objective

The goal of this project is to demonstrate a practical understanding of **Asynchronous JavaScript and modern browser APIs**. The implementation focuses on structured code organization, proper error handling, and efficient data handling techniques commonly used in real-world applications.

The dashboard loads data from multiple endpoints, processes it asynchronously, and displays the results in a user-friendly structure while ensuring good performance and maintainable code.

## Features

**Asynchronous Data Fetching**

The application retrieves data from multiple API endpoints using **async/await**. All requests are handled through a centralized fetch client to ensure consistent error handling and response processing.

**Promise.allSettled Integration**

Multiple API requests (users and posts) are executed concurrently using `Promise.allSettled`, allowing the dashboard to gracefully handle partial failures while still displaying available data.

This demonstrates promise chaining and asynchronous data composition.

**Custom Error Handling**

Custom error classes extend the base `Error` object to provide structured error types such as:

* API errors
* Network errors
* Resource not found errors

This approach improves debugging and makes error handling more maintainable.

**Search with Debounce**

The search input uses a debounce mechanism to prevent unnecessary re-rendering while the user is typing. Filtering occurs only after the user pauses typing for a short delay.

**Infinite Scroll Simulation**

Scrolling near the bottom of the page loads additional posts dynamically. The scroll handler uses throttling to limit how frequently it executes, improving performance.

**WeakMap Caching**

Comments fetched for posts are cached using a `WeakMap`. This prevents duplicate API requests and allows the JavaScript engine to automatically clean up memory when objects are no longer referenced.

**Modular Architecture**

The project follows a modular structure using ES Modules. Code is separated into logical areas including API services, utilities, core configuration, and application features.

---
**index.html**
Contains the dashboard layout and loads the main JavaScript module.

**main.js**
Application entry point responsible for initializing the dashboard, search functionality, and infinite scrolling.

**api/**
Handles communication with the external API service.

**core/**
Contains configuration, caching logic, and custom error classes.

**utils/**
Reusable helper utilities such as debounce and throttle.

**features/**
Feature-based modules responsible for dashboard rendering, search functionality, and infinite scrolling behavior.

---

## Technologies Used

* JavaScript (ES6+)
* ES Modules
* Fetch API
* Async / Await
* Promise.allSettled
* WeakMap caching
* HTML5
* CSS3

---

## Running the Project

1. Clone the repository.

```
git clone <repository-url>
```

2. Navigate into the project directory.

```
cd api-data-dashboard
```

3. Start a local development server. For example:

```
npx serve
```

4. Open the application in your browser:

```
http://localhost:3000
```

The dashboard will automatically fetch and render user, post, and comment data.

---

## Expected Behavior

When the application loads:

* Users are fetched from the API
* Posts associated with each user are displayed
* Comments for each post are loaded dynamically
* The search input filters users by name
* Scrolling near the bottom loads additional posts

All asynchronous operations are handled safely with proper error handling and caching mechanisms.

---

## Learning Outcomes

This project demonstrates practical knowledge of:

* JavaScript asynchronous programming
* Promise management with `Promise.allSettled`
* API data handling using the Fetch API
* Custom error handling patterns
* Performance optimization using debounce and throttle
* Memory optimization with WeakMap caching
* Modular project architecture using ES Modules

---

## License

This project is intended for educational purposes and learning modern JavaScript development practices.
