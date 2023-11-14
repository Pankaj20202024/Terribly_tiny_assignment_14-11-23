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
