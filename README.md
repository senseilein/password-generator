# PASSWORD GENERATOR

![](https://img.shields.io/badge/html-HTML5-orange?logo=html5)
![](https://img.shields.io/badge/css-CSS3-%231572B6?logo=css3)
![](https://img.shields.io/badge/JavaScript-lightgrey?logo=javascript)
![](https://img.shields.io/github/license/senseilein/password-generator)

## 🚩 TABLE OF CONTENT

- [Description](#-description)
- [Usage](#-usage)
- [Technology used](#-technology-used)
- [Installation](#-installation)
- [Credits](#-credits)
- [License](#-license)

## 📖 DESCRIPTION

### 🎯 What is it about?

- An application that an employee can use to generate a random password based on criteria they’ve selected
- They can choose to include up to 4 categories of characters:  
  1-lowercased characters  
  2-uppercased characters  
  3-numeric characters  
  4-special characters  

### Preview

The following image shows the web application's appearance and functionality:
![password generator demo](./assets/images/javascript-challenge-password-generator-demo.png)

## 💻 USAGE

[Visit the webpage here](https://senseilein.github.io/password-generator)

This app runs in the browser and feature dynamically updated HTML and CSS (provided starter code) powered by JavaScript code that I've written. It has a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes.

### 💬 User story

```
As a user,
I WANT to use the app,
SO THAT I can generate passwords that fit my criteria
```

```
GIVEN the password generator app

WHEN I click on the "generate password" button
THEN I can see pop up windows where I can specify the password length and the types of characters I want to include

WHEN I specify all the criteria,
THEN I can see a corresponding password on the screen

```

### ✅ Acceptance Criteria

It's done when:

- [ ] the user select a password length between 10 and 64
- [ ] the user select at least 1 character type to be included in the password
- [ ] a password respecting user's criteria is generated

## 🔧 TECHNOLOGY USED

- Starter code: HTML and CSS
- I worked on : JavaScript

### 💡 What I've learnt

- Array manipulation and JavaScript Math Object: using methods such splice() combined with Math.random(), to randomly generate characters to be included in the password

### ➕ Suggestions for improvement

- Do some DRY improvements, especially in the do...while loop in the getpassword() function

## 🚀 INSTALLATION

No installation needed.

## 💬 CREDITS

- [Emoji ressources](https://gist.github.com/rxaviers/7360908)
- This project was created as part of a coding assignment with [Trilogy Education Services](https://skillsforlife.edx.org/?utm_source=govuk)

## 📜 LICENSE

This repository is licensed under the MIT license.
