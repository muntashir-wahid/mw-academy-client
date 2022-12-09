const { useEffect } = require("react");

const useChangeTitle = (title) => {
  console.log(title);
  useEffect(() => {
    window.document.title = `${title} || MW Academy`;
  }, [title]);
};

export default useChangeTitle;
