import UseStateDemo1 from "./hooks/UseStateDemo1";
import UseEffectDemo from "./hooks/UseEffectDemo";
import UseReducerDemo from "./hooks/UseReducerDemo";
import UseRefDemo from "./hooks/UseRefDemo";
import UseMemoDemo from "./hooks/UseMemoDemo";
import UseCallbackDemo from "./hooks/UseCallbackDemo";

import ReadPosts from "./api/ReadPosts";
import CreatePost from "./api/CreatePosts";
import DeletePost from "./api/DeletePosts";
import UpdatePost from "./api/UpdatePost";

function App() {
  return (
    <div>
      <h1>React Hooks Demo</h1>

      <UseStateDemo1 />
      <UseEffectDemo />
      <UseReducerDemo />
      <UseRefDemo />
      <UseMemoDemo />
      <UseCallbackDemo />

      <hr />
      <h1>API Demo</h1>
      <ReadPosts />
      <CreatePost />
      <DeletePost />
      <UpdatePost />
    </div>
  );
}

export default App;
