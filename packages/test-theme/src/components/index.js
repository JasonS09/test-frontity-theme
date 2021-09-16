import {connect} from "frontity";

const Root = ({state}) => {
  const data = state.source.get(state.source.postsPage)
  console.log(state.source.postsPage)
  const items = data.categories
  console.log(items)

    return (
      <>
        You can edit your package in:
        <pre>packages\test-theme\src\index.js</pre>
      </>
    );
  };

  export default connect(Root)