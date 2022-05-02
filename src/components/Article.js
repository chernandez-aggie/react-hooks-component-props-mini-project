import blogData from "../data/blog";

function Article(blogData){
const Post = blogData.post.map((post) => 
    <>
    <article>
                <h3>{blogData.post.title}</h3>
                <small>{blogData.post.date = "January 1, 1970"}</small>
                <p>{blogData.post.preview}</p>
    </article>
    </>)

    return <div key={blogData.post.id}>{Post}</div>;
}
export default Article;