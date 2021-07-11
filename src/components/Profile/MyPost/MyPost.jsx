import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = (props) => {

    let postsElements = props.posts.map( p => <Post message={p.message} likeCount={p.likeCount} /> );

    return (
    <div className={s.postBlock}>
        <h3>My posts</h3>
              <div>
                <div>
                   <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
              </div>
        <div className={s.posts}>

            { postsElements }

        </div>
    </div>
)
}


export default MyPost;