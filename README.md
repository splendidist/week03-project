# week03-project

🎯 Please mention the requirements you met and which goals you achieved for this assignment.

Plan out the UI

- https://www.figma.com/file/blVrRbJ2JiAc1lqAOtKxgU/Project-week03-Design?type=design&node-id=0%3A1&mode=design&t=vJTFWsPyQvcGVyaD-1

Display the thumbnails and larger images

- One page, with a set of thumbnail images, and a larger image
- Styled with CSS, and made use of media queries.

Handle user interaction

- Used JavaScript to display the larger image when a thumbnail is selected
- Used JavaScript to navigate between images using the keyboard (tab, enter)

🏹 Stretch goals

- Handle user interaction with keyboard only (as if they have no mouse). The user is able to use the left and right arrows to navigate the thumbnails.
- Use your operating system's voiceover tools or a Screen Reader to have the computer announce the alt text of the selected image - I tested out using narrator, a screen-reading application that is built into Windows. This screen reader read out the alt text for my thumbnails.
- I used javascript to make the h1 and h2 update to be a relevant title and description for any image that is selected.
- I made a button which when clicked makes a random cat image appear in the middle of the screen. This uses an API to get the random image.

🎯 Were there any requirements or goals that you were not quite able to achieve?

- A goal I wanted to achieve was to use an API to allow the user to generate a random space-themed image as the main image.

- A personal goal I didn't achieve was allowing the user to remove the cat image from the middle of the screen. Also, I wanted to add text below the cat button so that it was clear to the user that they can click it.

🎯 If so, could you please tell us what was it that you found difficult about these tasks?

- I found trying to use an API difficult. I wanted to use Nasa's API, but found it really complicated to do so. I managed to get to the stage where I recieve the data in my console log, but the data that had returned was 100 arrays in 1 array, and each of those arrays had one image inside. I wasn't sure how to navigate this to target each singular image in each singular array. I spent a lot of time on the cat API and kind of understand it? but it took a lot of mistakes and trial and error to get it working.

- I also found the left and right arrow key functions difficult, as although my code works I have used a huge function to do it, and it was mentioned in the classroom on Friday that there is an easier way to implement this (using the array's lengh and [0] for the first item and [-1] for the last item, and having the tabIndex as 0). I couldn't figure out how to do this, so I used the keydown event similar to the keypress event used for enter. I also used the if and else statments to allow the user to jump from the last thumbnail to the first thumbnails, and vice versa.

🪐 What went really well and what could have gone better?

- I used a mobile first approach when laying out my webpage, so when it came to using media queries it wasn't too difficult to scale everything up.
- I used lighthouse to check my webpage and the Accessibillity has a value of 100, I also used WAVE and found that the H1 and H2 have very low contast between them and the background colors. I used a contrast checker to check the contrast between a white forground and black/dark grey background and it passed all of the WCAG levels.
- I found using javascript to creating image elements and placing them into the divs easy to understand
- I was able to make it so that the user can tab through thumbnails using tab, and also left and right arrow keys

🪐 Detailing useful external sources that helped you complete the assignment (e.g Youtube tutorials).

- https://images.nasa.gov/search?q=space&page=1&media=image&yearStart=1920&yearEnd=2024 - my images
- I tried to look at some youtube videos to help with the Nasa API but they all used python :(

API - chatgpt helped me a lot with this API

- https://cataas.com/ - API
- https://cataas.com/doc.html - API document
- https://stackoverflow.com/questions/57014837/how-can-i-fetch-cats-from-cataas-com-api-in-python - API endpoint

🪐 Describing errors or bugs you encountered while completing your assignment.

- the outline on the thumbnails should only appear when they are focused and not when they are active. I set thumbnail images:active {outline: none}, and tried to use !important, but neither worked. Overall I didn't mind that the outline stayed as I think it looks nice visually, but it would have been nice to figure out why this was happening.

🪐 Requesting feedback about a specific part of your submission.

- Could I please have some feedback about my left and right arrow key events, and if there is a way to clean this code as the function was very big. Could I also have some feedback on maybe why my thumbnails have outlines when they are clicked, when this should only occur when they are focused.
