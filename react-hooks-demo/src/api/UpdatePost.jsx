import axios from "axios";

export default function UpdatePost() {
  const updatePost = async () => {
    const res = await axios.put("https://jsonplaceholder.typicode.com/posts/1", {
      id: 1,
      title: "Bài viết đã cập nhật",
      body: "Nội dung mới",
      userId: 1
    });

    console.log("Dữ liệu sau khi cập nhật:", res.data);
    alert("Đã cập nhật bài viết!");
  };

  return (
    <div>
      <h2>Update Post</h2>
      <button onClick={updatePost}>Cập nhật bài viết</button>
    </div>
  );
}
