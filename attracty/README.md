# Attracty dating app

## Introduction

Welcome to the **Attracty app** and thank you for reviewing my code. It was a really fun challange to build this app; once I got started my mind went in overdrive of all possibilities.

Unfortunately I hadn’t the time to build all the idea’s I wanted I was still able to work on the core principles of the app.

**Note**: This app is tested only on iOS. Layout may differ on other platforms.

## Description

This is an app that simulates a dating app. I say simulates because it obviously is not a fully working app.
For now it offers two pages; _candidates_ screen and _matches_ screen.
On the candidates screen you can see a list of users with who you can match.
Each card displays some information about the candidate like name, age and desires. Whenever you have a similar desire as the candidate, that desire is “highlighted” with a red color.

Swipe either left or right to perform an action. Swiping from **Left** to **Right** wil match you with that person. Swipe the other way around and you will dismiss the profile.
All the people you swipe right, will automatically be a match and you’ll be able to see a list of users in the matches screen.

**Happy Matching!**

## Way of working

After reading the requirements I thought about the structure and the design of the application. After having a general idea I thought about what were the main packages I would need to simulate the app.
A list of the packages installed and used can be viewed in the  `package.json` file.
Worth mentioning is that I used Redux in this project for state management. This was also used to proof that I know these patterns and way of working.

To give my code clear documentation I used TypeScript. I know **Feeld** wants to move eventually to this superset. Hopefully with this project I can give you an impression of my proficiency.

There is also some unused code and old structures still in the stack. This is to hopefully show my trail of thought and will hopefully suit for a healthy discussion.

## What I did

-   Filtered out all duplicates

## Features which didn't make it in

-   Theming done with styled components
-   User profiles
-   End-to-End (E2E) Test with [Detox](https://github.com/wix/Detox)
-   Store matches in local database for faster loading
-   More Animations and transitions
-   Active suitable for both platform

# Suggestions for the future

-

## Information

```
{
    author: 'Michael Koek',
    email: 'michaelkoek@gmail.com'
    github: 'https://github.com/michaelkoek'
}
```
