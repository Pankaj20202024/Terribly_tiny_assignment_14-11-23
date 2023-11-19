#### Hosted Link : https://terriblyassignementbypankaj12015448.netlify.app

***

## **LIBRARIES AND PLUGINS USED**

1. React
2. useState
3. style is imported from a local CSS module file for styling the component.
4. data is hardcoded in a local JSON.

***

## **EXPLANATION OF THE CODE**

### DATA SOURCE

The application utilizes a local JSON file, `Data.json`, to store and retrieve dynamic content for various components. This approach allows for easy maintenance and modification of content without directly altering the component code.

Example `Data.json` structure:

```json

{
  "nav_heading1": "Stories",
  "nav_heading2": "Courses",
  "nav_image_url": "./images/stories.png",
  "background_image_url": "./images/background_image.png",
  "profile_component_data": [
    {
      "user_profile_url": "./images/userimage.jpeg",
      "user_name": "Anuj Gosalia",
      "user_side_icon1": "./images/diamond.png",
      "user_side_icon2": "./images/right.png",
      "user_followers_number": "6482",
      "user_following_number": "245",
      "user_followers_heading": "Followers",
      "user_following_heading": "Following",
      "user_designation": "Co-founder &CEO at Terribly Tiny Tales",
      "user_instagram_link": "http://www.instagram.com.anujgosalia",
      "star_icon_url": "./images/star.png",
      "total_no_of_stars": "125",
      "like_icon_url": "./images/like.png",
      "total_no_of_like": "12",
      "eye_icon_url": "./images/eyes.png",
      "total_no_views": "57.8K",
      "heart_icon_url": "./images/heart.png",
      "total_no_of_heart": "26.0K"
    }
  ],
  "post_component_data": [
    {
      "total_no_of_post": "134",
      "post_like_icon_url": "./images/like.png",
      "post_details": [
        {
          "post_id": "1",
          "post_heading": "A Changing World Order",
          "post_details": "The world is changing at a feverish pace. Friends, colleagues and everyone engaged in knowledge work are begnning to sense this , including...",
          "post_type": "musing",
          "post_by": "by anujgosalia",
          "post_day": "August 2",
          "post_read": "2 mins Read",
          "post_views": "102 Views"
        },
        {
          "post_id": "2",
          "post_heading": "Indian v/s Australia",
          "post_details": "Think about it - this cricket series was akin to therapy.",
          "post_details2": "Laying our childhood trauma up top , working with it slowly and surely over two m..",
          "post_type": "musing",
          "post_by": "by anujgosalia",
          "post_day": "January 21",
          "post_read": "1 mins Read",
          "post_views": "156 Views"
        },
        {
          "post_id": "3",
          "post_heading": "Write To build",
          "post_details": "Writing is the first step to create:",
          "step1":"stories",
          "step2":"products",
          "step3":"companies",
          "post_type": "musing",
          "post_by": "by anujgosalia",
          "post_day": "August 2",
          "post_read": "2 mins Read",
          "post_views": "102 Views"
        }
      ]
    }
  ]
}

```
## Their are total 4 components in my react application 

1. Navbar_component.js
2. Background_images.js
3. Profile_component.js
4. Post_component.js

## Navbar Component
The Navbar component (Navbar_component.js) provides a navigation bar with an icon, heading, and a button. The styling is implemented using a CSS module file (Navbar_component.module.css).

### Properties
1. nav_image_url: URL of the icon displayed in the navigation bar.
2. nav_heading1: Heading text displayed next to the icon.
3. nav_heading2: Text displayed on the button in the navigation bar.

```jsx

import React from "react";
import styles from "./Navbar_component.module.css";
import data from "./Data.json"

export default function Navbar_component() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_inner_container1}>
        <img src={data.nav_image_url} alt="my assignment" />
        <div className={styles.vertical}></div>
        <p>{data.nav_heading1}</p>
      </div>
      <div className={styles.navbar_inner_container2}>
        <button>{data.nav_heading2}</button>
      </div>
    </div>
  );
}

```

The styling for the Navbar component is defined in the Navbar_component.module.css file.

```css

.navbar {
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
    padding: 5%;
}

.navbar_inner_container1 {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    
}

.navbar_inner_container1 img {
    filter: invert(100%);
    width: 15%;
    margin: 1%;
}

.vertical {
    border-left: 2px solid #fca503;
    height: 20px;
    margin: 1%;
}

.navbar_inner_container1 p {
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    margin: 1%;
    font-size: 0.8rem;
}

.navbar_inner_container2 {
    display: flex;
    align-items: center;
    justify-content: end;
    width: 100%;
}

.navbar_inner_container2 button {
    color: black;
    background-color: #fca503;
    padding: 0.4rem;
    margin-right: 1%;
    font-size: 0.8rem;
    border-radius: 6px;
    border: none;
    outline: none;
    font-weight: bold;
}

@media only screen and (min-width: 460px) {
    .navbar_inner_container1 p {
        font-size: 1rem;
    }

    .navbar_inner_container2 button {
        font-size: 1rem;
    }

    .vertical {
        height: 28px;
    }
}

@media only screen and (min-width: 495px) {
    .navbar_inner_container1 p {
        font-size: 1.1rem;
    }

    .navbar_inner_container2 button {
        font-size: 1.1rem;
    }

    .vertical {
        height: 33px;
    }
}

@media only screen and (min-width: 567px) {
    .navbar_inner_container1 p {
        font-size: 1.2rem;
    }

    .navbar_inner_container2 button {
        font-size: 1.2rem;
    }

    .vertical {
        height: 38px;
    }
}

@media only screen and (min-width: 580px) {
    .navbar_inner_container1 p {
        font-size: 1.3rem;
    }

    .navbar_inner_container2 button {
        font-size: 1.3rem;
    }

    .vertical {
        height: 42px;
    }
}

@media only screen and (min-width: 640px) {
    .navbar_inner_container1 p {
        font-size: 1.4rem;
    }

    .navbar_inner_container2 button {
        font-size: 1.4rem;
    }

    .vertical {
        height: 44px;
    }
}

@media only screen and (min-width: 690px) {
    .navbar_inner_container1 p {
        font-size: 1.5rem;
    }

    .navbar_inner_container2 button {
        font-size: 1.5rem;
    }

    .vertical {
        height: 48px;
    }
}


@media only screen and (min-width: 730px) {
    .navbar_inner_container1 p {
        font-size: 1.8rem;
    }

    .navbar_inner_container2 button {
        font-size: 1.7rem;
        padding: 3%;
    }

    .vertical {
        height: 50px;
        border-width: 3.5px;
    }

    .navbar_inner_container1 img {
        width: 15%;
    }
}

@media only screen and (min-width: 900px) {
    .navbar_inner_container1 p {
        font-size: 2.3rem;
    }

    .navbar_inner_container2 button {
        font-size: 2.3rem;
        padding: 2%;
    }

    .vertical {
        height: 55px;
        border-width: 3.5px;
    }

    .navbar_inner_container1 img {
        width: 15%;
    }
}


@media only screen and (min-width: 1100px) {
    .navbar_inner_container1 p {
        font-size: 2.4rem;
    }

    .navbar_inner_container2 button {
        font-size: 2.3rem;
        padding: 2%;
    }

    .vertical {
        height: 59px;
        border-width: 3.6px;
    }

    .navbar_inner_container1 img {
        width: 14%;
    }
}

@media only screen and (min-width: 1200px) {
    .navbar_inner_container1 p {
        font-size: 2.6rem;
    }

    .navbar_inner_container2 button {
        font-size: 2.3rem;
        padding: 2%;
    }

    .vertical {
        height: 64px;
        border-width: 3.7px;
    }

    .navbar_inner_container1 img {
        width: 13%;
    }
}

```
### Background Component
The Background component (Background_images.jsx) displays the cover photo of the user.

### Properties
background_image_url: URL of the user's cover photo.

```jsx

import React from "react";
import styles from "./Background_image.module.css";
import data from "./Data.json";

export default function Background_images() {
  return (
    <div className={styles.BackgroundImages}>
      <img src={data.background_image_url} alt="my assignment" />
    </div>
  );
}

```

The styling for the Navbar component is defined in the Navbar_component.module.css file.

```css
.BackgroundImages {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -1%;
}

.BackgroundImages img {
    width: 100%;
    height: 200px;
}


@media only screen and (min-width: 460px) {
    .BackgroundImages img {
        width: 100%;
        height: 300px;
    }
}
@media only screen and (min-width: 550px) {
    .BackgroundImages img {
        width: 100%;
        height: 350px;
    }
}
@media only screen and (min-width: 680px) {
    .BackgroundImages img {
        width: 100%;
        height: 400px;
    }
}
@media only screen and (min-width: 800px) {
    .BackgroundImages img {
        width: 100%;
        height: 450px;
    }
}

```





