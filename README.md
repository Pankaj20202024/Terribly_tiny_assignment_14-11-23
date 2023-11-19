#### Hosted Link : https://terriblyfrontendassignment12015448.netlify.app

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

## Navbar.jsx Component
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
### Background_image.jsx Component
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

The styling for the Background_image component is defined in the Background_image.module.css file.

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

## Profile Component

The `Profile_component.jsx` component is designed to showcase the user's profile information within your application. It includes a user cover photo, profile picture, username, follower and following counts, user designation, and a link to the user's Instagram profile. Additionally, the component features statistical data represented by icons, such as stars, likes, views, and hearts. All this information is dynamically populated from the `Data.json` file.

### Usage

To seamlessly integrate the `Profile_component.jsx` component into your project, follow these simple steps:

```jsx

import React from "react";
import styles from "./Profile_component.module.css";
import data from "./Data.json";

export default function Profile_component() {
  return (
    <>
      <div className={styles.ProfileContainer}>
        <div className={styles.profile_inner_container1}>
          <img src={data.profile_component_data[0].user_profile_url} alt="" />
        </div>
        <div className={styles.profile_inner_container2}>
          <div className={styles.profile_content}>
            <p>{data.profile_component_data[0].user_name}</p>
            <img src={data.profile_component_data[0].user_side_icon1} alt="" />
            <img src={data.profile_component_data[0].user_side_icon2} alt="" />
          </div>
          <div className={styles.profile_details}>
            <div className={styles.user_followers}>
              <p className={styles.number}>
                {data.profile_component_data[0].user_followers_number}
              </p>
              <p className={styles.heading}>
                {data.profile_component_data[0].user_followers_heading}
              </p>
            </div>
            <div className={styles.user_following}>
              <p className={styles.number}>
                {data.profile_component_data[0].user_following_number}
              </p>
              <p className={styles.heading}>
                {data.profile_component_data[0].user_following_heading}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.moreProfileDetails}>
        <p>{data.profile_component_data[0].user_designation}</p>
        <a href="#">
          <p>{data.profile_component_data[0].user_instagram_link}</p>
        </a>
        <div className={styles.others_icons_container}>
          <div>
            <img src={data.profile_component_data[0].star_icon_url} alt="" />
            <span>{data.profile_component_data[0].total_no_of_stars}</span>
          </div>
          <div>
            <img src={data.profile_component_data[0].like_icon_url} alt="" />
            <span>{data.profile_component_data[0].total_no_of_like}</span>
          </div>
          <div>
            <img src={data.profile_component_data[0].eye_icon_url} alt="" />
            <span>{data.profile_component_data[0].total_no_views}</span>
          </div>
          <div>
            <img src={data.profile_component_data[0].heart_icon_url} alt="" />
            <span>{data.profile_component_data[0].total_no_of_heart}</span>
          </div>
        </div>
      </div>
    </>
  );
}

```

### Styling
The styling for the Profile_component.jsx component is defined in the Profile_component.module.css file.

```css

.ProfileContainer {
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
}

/* i am here  */

.profile_inner_container1 {
    width: 35%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.profile_inner_container1 img {
    width: 100%;
    border-radius: 50%;
    border: 1px solid black;
    margin-top: -25%;

}

.profile_inner_container2 {
    padding: 2%;
    width: 55%;

}

.profile_content {
    display: flex;
    align-items: center;
    justify-content: space-between;
 
    width: 100%;
}

.profile_content p {
    font-size: .8rem;
    
}

.profile_content img {
    width: 10%;
}

.profile_details {
    display: flex;
    align-items: center;
    justify-content: start;
    margin-top: -10%;
    width: 100%;
}

.user_followers {
    margin-right: 6%;
}

.user_following {
    margin-left: 6%;
}

.number {
    border: 2px solid rgb(125, 125, 125);
    border-radius: 10px;
    text-align: center;
    color: grey;
    font-size: .7rem;
    cursor: pointer;
}

.heading {
    margin-top: -20%;
    color: grey;
    font-size: .6rem;
}

.moreProfileDetails {
    font-family: 'Poppins', sans-serif;
    display: flex;
    width: 95%;
    margin-left: 5%;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}

.moreProfileDetails p {
    font-size: 0.65rem;
    text-align: start;
    color: gray;
    width: 100%;
}

.moreProfileDetails a {
    text-decoration: none;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-wrap: wrap;
}

.moreProfileDetails a p {
    color: rgb(5, 157, 168);
    font-size: 0.6rem;
}



.others_icons_container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

.others_icons_container div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

.others_icons_container div img {
    width: 20%;
}

.others_icons_container div span {
    font-size: 0.7rem;
}


@media only screen and (min-width: 372px) {
    .profile_content p {
        font-size: 0.94rem;
    }
}

@media only screen and (min-width: 460px) {

    .profile_inner_container1 {
        width: 30%;
    }

    .profile_content p {
        font-size: 1.4rem;
    }

    .profile_content img {
        width: 9%;

    }

    .number {
        font-size: 1rem;
    }

    .heading {
        font-size: 1rem;
    }

    .moreProfileDetails p {
        font-size: 1rem;
    }

    .moreProfileDetails a p {
        font-size: 1rem;
        margin-top: -1%;
        margin-bottom: 8%;
    }

    .others_icons_container div img {
        width: 21%;
    }

    .others_icons_container div span {
        font-size: 1rem;

    }

    .profile_details {
        margin-top: -5%;
    }
}


@media only screen and (min-width: 500px) {
    .profile_inner_container1 {
        width: 26%;
    }

    .profile_details {
        margin-top: -3%;
    }

    .profile_inner_container1 {
        width: 30%;
    }

    .profile_content p {
        font-size: 1.5rem;

    }

    .profile_content img {
        width: 11%;

    }

    .number {
        font-size: 1.2rem;

    }

    .heading {
        font-size: 1.2rem;
    }

    .moreProfileDetails p {
        margin-top: -1%;
        font-size: 1.2rem;
    }

    .moreProfileDetails a p {
        font-size: 1.2rem;
        margin-bottom: 6%;
    }

    .others_icons_container div img {
        width: 21%;
    }

    .others_icons_container div span {
        font-size: 1.2rem;
    }
}

@media only screen and (min-width: 650px) {
    .profile_inner_container1 {
        width: 28%;
    }

    .profile_content p {
        font-size: 1.8rem;

    }

    .profile_content img {
        width: 12%;

    }

    .number {
        font-size: 1.4rem;

    }

    .heading {
        font-size: 1.4rem;
    }

    .moreProfileDetails p {
        margin-top: -1%;
        font-size: 1.4rem;
    }

    .moreProfileDetails a p {
        font-size: 1.4rem;
        margin-bottom: 6%;
    }

    .others_icons_container div img {
        width: 23%;
    }

    .others_icons_container div span {
        font-size: 1.4rem;
    }
}



@media only screen and (min-width: 750px) {
    .profile_content p {
        font-size: 2rem;

    }

    .profile_content img {
        width: 13%;

    }

    .number {
        font-size: 1.6rem;

    }

    .heading {
        font-size: 1.6rem;
    }

    .moreProfileDetails p {
        margin-top: -1%;
        font-size: 1.6rem;
    }

    .moreProfileDetails a p {
        font-size: 1.6rem;
        margin-bottom: 6%;
    }

    .others_icons_container div img {
        width: 25%;
    }

    .others_icons_container div span {
        font-size: 1.6rem;
    }
}

@media only screen and (min-width: 850px) {
    .profile_content p {
        font-size: 2.2rem;

    }

    .profile_content img {
        width: 12%;

    }

    .number {
        font-size: 1.8rem;

    }

    .heading {
        font-size: 1.8rem;
    }

    .moreProfileDetails p {
        margin-top: -1%;
        font-size: 1.8rem;
    }

    .moreProfileDetails a p {
        font-size: 1.6rem;
        margin-bottom: 6%;
    }

    .others_icons_container div img {
        width: 26%;
    }

    .others_icons_container div span {
        font-size: 1.9rem;
    }
}

```

## Post Component

The `Post.js` component is responsible for rendering the user's posts, providing a dynamic and engaging display. The component utilizes the `map` function to iterate through the posts, and it employs conditional rendering to ensure diverse UI structures for each post, enhancing the visual appeal of your page.

```jsx
import React from "react";
import styles from "./Post.module.css";
import data from "./Data.json";

export default function Post() {
  const Post_Pattern = (id, extra_content, step1, step2, step3) => {
    if (id === "2") {
      return <p>{extra_content}</p>;
    }
    if (id === "3") {
      return (
        <>
          <p>-{step1}</p>
          <p>-{step2}</p>
          <p>-{step3}</p>
        </>
      );
    }
  };

  return (
    <div className={styles.PostContainer}>
      <div className={styles.no_of_post}>
        {console.log(data)}
        <p>{data.post_component_data[0].total_no_of_post} Post</p>
      </div>
      <div className={styles.setting_border_container}>
        <div className={styles.setting_border_container1}></div>
        <div className={styles.setting_border_container2}></div>
      </div>

      {data.post_component_data[0].post_details.map((post_items) => {
        return (
          <div className={styles.PostDetailsContainer} key={post_items.post_id}>
            <div className={styles.PostHeader}>
              <h1>{post_items.post_heading}</h1>
              <img
                src={data.post_component_data[0].post_like_icon_url}
                alt="my assignment "
              />
            </div>
            <div className={styles.PostDetails}>
              <p>{post_items.post_details}</p>

              {Post_Pattern(
                post_items.post_id,
                post_items.post_details2,
                post_items.step1,
                post_items.step2,
                post_items.step3
              )}
            </div>
            <div className={styles.PostFooter}>
              <div className={styles.PostFooterInner1}>
                <p>
                  {post_items.post_type} <span>{post_items.post_by}</span>
                </p>
              </div>
              <div className={styles.PostFooterInner2}>
                <p>{post_items.post_day}</p>
                <p className={styles.dot}></p>
                <p>{post_items.post_read}</p>
                <p className={styles.dot}></p>
                <p>{post_items.post_views}</p>
              </div>
            </div>
            <div className={styles.horizontal_row}></div>
          </div>
        );
      })}
    </div>
  );
}

```

### Styling
The styling for the Post.jsx component is defined in the Post.module.css file.

```css
.PostContainer {
    margin-top: 5%;

}

.no_of_post {
    border-width: 1px;
    border-style: solid;
    border-top-color: rgb(214, 214, 214);
    border-right-color: rgb(214, 214, 214);
    border-left-color: white;
    border-bottom-color: white;
    width: 30%;
}

.no_of_post p {
    font-size: 0.7rem;
    font-family: 'Poppins', sans-serif;
    color: rgb(5, 157, 168);
    text-align: center;
}

.setting_border_container {

    display: flex;
    align-items: center;
    justify-content: center;
}

.setting_border_container1 {

    width: 30%;

}

.setting_border_container2 {

    width: 70%;
    border-width: 1px;
    border-style: solid;
    border-top-color: rgb(214, 214, 214);
    border-right-color: white;
    border-left-color: white;
    border-bottom-color: white;
}


.PostDetailsContainer {
    font-family: 'Poppins', sans-serif;

}

.PostHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1%;
    margin-top: 6%;

}

.PostHeader h1 {
    font-size: 0.7rem;
    color: black;
    padding-left: 3%;
    font-weight: bolder;

}

.PostHeader img {
    width: 6%;
    padding-right: 4%;
}

.PostDetails {
    display: flex;
    align-items: center;
    justify-content: start;
    flex-wrap: wrap;
    padding: 1%;

}

.PostDetails p {
    font-size: 0.7rem;
    color: rgb(121, 121, 121);
    width: 100%;
    padding-left: 2%;
    margin-top: -1%;
}

.PostFooter {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 2%;
}

.PostFooterInner1 {
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: start;
}

.PostFooterInner1 p {
    font-size: 0.45rem;
    color: rgb(5, 157, 168);
    padding-left: 2%;
}

.PostFooterInner1 p span {
    font-size: 0.45rem;
    color: rgb(70, 70, 70);
}

.PostFooterInner2 {
    width: 55%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

.PostFooterInner2 p {
    font-size: 0.45rem;
    color: grey;
}

.dot {
    border: 1px solid grey;
    border-radius: 50%;
}

.horizontal_row {
    border-width: 1px;
    border-style: solid;
    border-top-color: rgb(214, 214, 214);
    border-right-color: white;
    border-left-color: white;
    border-bottom-color: white;

}


@media only screen and (min-width: 290px) {
    .PostHeader img {
        width: 5%;
    }


}

@media only screen and (min-width: 357px) {
    .PostHeader img {
        width: 4%;
    }

}

@media only screen and (min-width: 426px) {
    .PostHeader img {
        width: 3%;
    }

}

@media only screen and (min-width: 460px) {
    .no_of_post p {
        font-size: 1rem;
    }

    .PostHeader h1 {
        font-size: 1rem;
    }

    .PostHeader img {
        width: 6%;
    }

    .PostDetails p {
        font-size: 1rem;
    }

    .PostFooterInner1 p {
        font-size: 0.9rem;
    }

    .PostFooterInner1 p span {
        font-size: 0.9rem;
    }

    .PostFooterInner2 p {
        font-size: 0.9rem;
        color: grey;
    }

    .dot {
        border: 1.5px solid grey;
        border-radius: 50%;
    }

}


@media only screen and (min-width: 500px) {
    .no_of_post p {
        font-size: 1.2rem;
    }

    .PostHeader h1 {
        font-size: 1.2rem;
    }

    .PostHeader img {
        width: 6%;
    }

    .PostDetails p {
        font-size: 1.2rem;
    }

    .PostFooterInner1 p {
        font-size: 1rem;
    }

    .PostFooterInner1 p span {
        font-size: 1.1rem;
    }

    .PostFooterInner2 p {
        font-size: 1rem;
        color: grey;
    }

    .dot {
        border: 2px solid grey;
        border-radius: 50%;
    }

}

@media only screen and (min-width: 650px) {
    .no_of_post p {
        font-size: 1.4rem;
    }

    .PostHeader h1 {
        font-size: 1.4rem;
    }

    .PostHeader img {
        width: 6%;
    }

    .PostDetails p {
        font-size: 1.4rem;
    }

    .PostFooterInner1 p {
        font-size: 1.3rem;
    }

    .PostFooterInner1 p span {
        font-size: 1.3rem;
    }

    .PostFooterInner2 p {
        font-size: 1.3rem;
        color: grey;
    }

    .dot {
        border: 2.2px solid grey;
        border-radius: 50%;
    }

}

@media only screen and (min-width: 750px) {
    .no_of_post p {
        font-size: 1.6rem;
    }

    .PostHeader h1 {
        font-size: 1.6rem;
    }

    .PostHeader img {
        width: 6%;
    }

    .PostDetails p {
        font-size: 1.6rem;
    }

    .PostFooterInner1 p {
        font-size: 1.5rem;
    }

    .PostFooterInner1 p span {
        font-size: 1.5rem;
    }

    .PostFooterInner2 p {
        font-size: 1.5rem;
        color: grey;
    }

    .dot {
        border: 2.3px solid grey;
        border-radius: 50%;
    }

}


@media only screen and (min-width: 850px) {
    .no_of_post p {
        font-size: 1.8rem;
    }

    .PostHeader h1 {
        font-size: 1.8rem;
    }

    .PostHeader img {
        width: 6%;
    }

    .PostDetails p {
        font-size: 1.8rem;
    }

    .PostFooterInner1 p {
        font-size: 1.7rem;
    }

    .PostFooterInner1 p span {
        font-size: 1.7rem;
    }

    .PostFooterInner2 p {
        font-size: 1.7rem;
        color: grey;
    }

    .dot {
        border: 2.5px solid grey;
        border-radius: 50%;
    }

}

```
