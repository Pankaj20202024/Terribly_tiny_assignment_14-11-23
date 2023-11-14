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
