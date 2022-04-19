# Password Generator

[Deployed Site](https://framenolan.github.io/pwgenerator/)

## Table of Contents
* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Features](#features)
* [Technologies](#technologies)
* [Images](#images)

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Features

When the Generate button is clicked, user is prompted to enter a password length and choose if each character type (lowercase, uppercase, numeric, and special characters) should be included.

My code runs a validation that the requested password legnth is between 8-128 characters long, and that at least one character type is selected.

Then it builds an empty array of the given length, known as pwArray.

Then it builds a different array that includes all characters of the selected type(s) known as charPool.

Then it generates a random character from charPool and replaces each item in pwArray with the randomly selected character.

Then it converts pwArray to a string and updates the output within the display box with the new randomly generated string.

## Technologies

- HTML
- CSS
- JavaScript

## Images

![screenshot](https://user-images.githubusercontent.com/101062909/163897539-91a48ed6-9fad-404a-b932-fa82f8765284.png)
