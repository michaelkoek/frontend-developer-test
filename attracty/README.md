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
-   Tried to use as less plugins as possible to highlight more of what I can do

### Setup

-   Made sure Redux, React Navigation, Typescript and Styled Components was installed properly and ready for use
-   Created a folder structure which would suit this (small) project. I usually setup a folder structure depending on the size of the project.

### Typing and models

-   To ensure the same contract over the application I’ve added a `type` folder where I (surprisingly) store all the types. I’ve decided to add two of these folders over the application; one site wide and the other is Redux specific. For me that made sense to have an isolated Redux flow.
-   I’ve added a `models` folder which holds a `Candidate` class. As of the current setup, this is not heavily used and doesn’t have a lot of additional value, but as the application grows it does. If the data model from the back-end chances, you can still ensure the received data with this method. Also you can add some getters, setters and additional methods to that class to handle data more secure.

### Inspiration for design

-   As this application (Feeld) has a “kinky” and anonymous side to it, I thought I find colors which may represents these tones a bit more. I came a cross a few colors which I thought could enhance this vibe like; purple, red and darker colors.
-   Here are some styles I looked at and used for inspiration  [example one](https://dribbble.com/shots/3897193-DWYHTD-trailer-visuals-for-instagram-story) [example two](https://dribbble.com/shots/6715492-Kink-17)

## Features which didn't make it in

-   Theming done with styled components
-   User profiles
-   End-to-End (E2E) Test with [Detox](https://github.com/wix/Detox)
-   Store matches in local database for faster loading
-   More Animations and transitions
-   Active suitable for both platform

# Suggestions for the future

-   Let the user choose themes (darker, light, sexual orientend)

## Information

```
{
    author: 'Michael Koek',
    email: 'michaelkoek@gmail.com'
    github: 'https://github.com/michaelkoek'
}
```
