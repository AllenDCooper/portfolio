import styles from './Posts.module.css';

const postsData = [
  {
    title: "Places of Healing & Social Belonging",
    subtitle: "Blog post",
    link: "https://community.macmillanlearning.com/t5/college-success-blog/places-of-healing-social-belonging/ba-p/6702",
    description: [],
    date: "October 2018"
  }
]

const Posts = () => {
  return (
    <section className={styles["posts-container"]}>
      <h2 className="view-heading">Posts</h2>
      {/* <p className="view-text"></p> */}
      <ul>
        {postsData.map(post => (
          <li><a href={post.link} target="_blank" ><em>{post.title}</em></a>. {post.subtitle}. {post.date}.
            <ul>
              {post.description.map(paragraph => (
                <li dangerouslySetInnerHTML={{__html: paragraph}}></li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Posts;