# My Thought Process

This file is dedicated to explaining the courses of decisions that I made during the test.

## Technology Choices

After reading the job requirements carefully, I picked two main technologies that are mandatory to demonstrate how my skills would be of value to the company.

-  **React with TypeScript**: For building components with some concern for type safety.
-  **SASS**: As a CSS pre-processor because it's the only pre-processor that I have experience with.

The other tech choices are for their use cases, specifically:

-  **Vite**: A minimal and performant build tool so that I wait less during build times, file updates and project start-up to observe changes and make decisions quicker.
-  **Radix UI**: A headless UI component library that is optimized for the best possible accessibility and completely unopinionated about styles. On top of that, this library components are installed separately, which means the time it takes to download each time is very fast and helps lower the overall bundle size.
-  **React Router**: Simple and small router for the sake of simple routing.
-  **React Icons**: Unnecessarily large pool of icons to install and choose from, but ok to use.

## Goal

The goal is to complete the translation from Figma within a short span of time while making the UI looks as close as the original design as possible. To keep the goal straight-forward, here are what I had in mind:

-  **Keep things simple**: There is no need for any fancy interactivity or transition when the design doesn't demand for it. Fancy features can be implemented after the main features are shipped.
-  **Prioritize maintainability and extendability**: The folder structure must be clean, the code is easy to follow, and lastly, the software is easy to extend, update when needed.

## Day 1: Design System

The entire first day of my adventure is spent for building up a design system. The target is to identify six things: colors, typography, spacing, border, radius, and reusable components.

There were a lot of difficulties along the way, as I don't have the ability to communicate with the design team/person, any design inconsistency is adjusted based on my own judgements. Many of which are just me being sloppy (I'll come back to this later).

The main difficulty that I had to face was with SASS. As someone who has a long history of using TailwindCSS and customize most of my design systems around it without ever looking back to vanilla CSS or SASS, wrapping my head around the tool and to actually build a design system from start to finish is extremely hard. This is the main reason why I got stuck with laying things out for a whole day.

The issues that I faced are: inconsistent naming convention, unnecessary design tokens and the reuse of icons in the design instead of a library.

## Day 2: Build

Since I already wasted my first day, I had to spend the second day on both building and fixing the issues that I caused. Starting with renaming classes, remove design tokens that cause overheads, use an icon library (React Icons).

Since I've already had a lot of experience with React and TypeScript, building and laying out major components were done in no time, which compensates somewhat for the time I wasted.

But there is still the part where I had to be sloppy, charts and tables. These two components require me to know what I'm doing in order to build them to be reusable, or rely on third-party libraries that support building them more easily. Unfortunately, none of the two requirements were met. I've never really built any of these components to understand how they're structured, nor do I have any experience using a library that strongly supports them (partly because these libraries tend to be too complicated for a simple UI app like this).

So please don't be surprised if the code for these two components turns out to be bad or even ugly due to my sloppiness. I tried my best :(.

## Day 3: Refactor and Optimize

The rest of the time is just me looking back at the code to find potential bugs and fix them. Since the folder structure is very clear and easy to navigate, everything was fixed in a matter of minutes to an hour or two.

The output is a web UI stuck closely to the original design and is consistent on both desktop and tablet devices.

Thank you for spending your precious time reading this.
