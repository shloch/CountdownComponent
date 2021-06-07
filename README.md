<h1 align="center">CountdownComponent</h1>
<p>
            <a href="https://twitter.com/shloch" target="_blank">
                <img alt="Twitter: @shloch" src="https://img.shields.io/twitter/follow/shloch.svg?style=social" />
            </a> <br/>
</p>


## EXERCISE

You are in a development team that is coding a quiz (using React and Typescript) using multiple choice questions. In this quizz a countdown is displayed, showing the number of seconds before time runs out (each question lasts 30s).

You have been tasked with coding this countdown in React, using functional components and hooks.

The countdown component will be called CountdownComponent, and shall:
- Take as parameters (props) the current question number (called “nb”, an integer) and an onDone function (which returns void)
- Restart the countdown from 30 whenever the question number (nb) changes
- Calls the onDone function if the timer reaches 0 (the parent component manages the function, and will change the question number or hide the component)
- Show the time remaining in seconds (as text) e.g. “3s”

Your mission is to code the CountdownComponent (and any code you need to test/show that it works)

### Output Screenshot

screenshot on a 5-seconds countdown. This was just for demonstration, timer interval is configurable in the code.

![alt text](https://github.com/shloch/CountdownComponent/blob/main/countDown.gif)

### Important files
Mains files are 
- [App.js](https://github.com/shloch/CountdownComponent/blob/main/src/App.js)
- `CountdownComponent.js` (https://github.com/shloch/CountdownComponent/blob/main/src/components/CountdownComponent.js)
## Contributor

### 👤 **SHEY Louis CHIA**

- Github: [shloch](https://github.com/shloch)
- Twitter: [@shloch](https://twitter.com/shloch)
- Linkedin: [/in/shey-louis-chia](https://www.linkedin.com/in/shey-louis-chia)
- Email: shloch2007@yahoo.fr