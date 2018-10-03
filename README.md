# Code Challenge

## Sketch File

https://www.dropbox.com/s/z3k0ak5vf1wdzhd/www-growth-code-challenge.sketch?dl=0
Desktop fonts: https://www.dropbox.com/s/bxruxeixou1ep26/desktop_fonts.zip?dl=0

## Summary

- _Part 1:_ Build out the sections of our Enterprise page provided in the design file (linked above). This will include A) the page itself; B) the video modal (use any video you'd like), and C) the form modal. When a visitor clicks the CTA "Request a demo", the form modal will open, containing Enterprise demo request form.
- _Part 2:_ Store form submissions in a NoSQL database. Please provide access to this database for submissions to be verified.
- _Part 3:_ Provide documentation outlining your best idea for an experiment you would run on this page, with the goal of increasing conversion rates on the Enterprise demo request form. BONUS: Use Freehand to mockup your idea: https://freehand.invisionapp.com/freehand/new

## Requirements

- Matches Design
- Responsive
- "Request a demo" CTA opens the demo form modal
- The video play button will open a video modal
  - When the video modal closes, be sure the video stops playing

## Tech Stack

The only requirement here is React. Feel free to use whatever CSS framework or 3rd party lib to help with the challenge. Internally, we use React@16.3.x, styled-components, and NextJS. The tool should work in the latest version of Chrome, Firefox, Safari, Edge, Internet Explorer, iOS Safari, and Samsung Internet.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Instructions

- start the FE with `yarn start`
- start the backend server by navigating to inside the `/api` dir and `docker-compose up --build`, once that is up you should be able to submit a successful form to the DB
- to see the data download [Mongodb Compass](https://www.mongodb.com/download-center?jmp=hero#compass) and connect to `Hostname: localhost` and `Port: 2717` and you should see
  a `submissions-api` with a collection of `submissions`.
