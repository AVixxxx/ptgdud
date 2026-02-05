import axios from "axios";

export default function CreatePosts() {
  const createPost = async () => {
    const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      title: "Bài viết mới",
      body: "Nội dung demo",
      userId: 1
    });

    console.log("Dữ liệu trả về:", res.data);
    alert("Đã thêm bài viết!");
  };

  return (
    <div>
      <h2>Create Post</h2>
      <button onClick={createPost}>Thêm bài viết</button>
    </div>
  );
}
