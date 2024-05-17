import { Link } from "react-router-dom";

import styles from "./PostDetails.module.css";

const PostDetail = ({ post }) => {
  return (
    <div className={styles.post_detail}>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <div className={styles.post_container}>
      <p className={styles.createdby}>por: {post.createdBy}</p>
      <div className={styles.tags}>
        {/* {post.tags.map((tag) => (
          <p key={tag}>
          <span>#</span>
          {tag}
          </p>
        ))} */}
      </div>
      <Link to={`/posts/${post.id}`}className={styles.link} >
        Leia mais
      </Link>
        </div>
    </div>
  );
};

export default PostDetail;