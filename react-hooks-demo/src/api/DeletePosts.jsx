import axios from "axios";

export default function DeletePosts() {
  const deletePost = async () => {
    await axios.delete("https://jsonplaceholder.typicode.com/posts/1");
    alert("Đã xóa bài viết có id = 1");
  };

  return (
    <div>
      <h2>Delete Post</h2>
      <button onClick={deletePost}>Xóa bài viết</button>
    </div>
  );
}
