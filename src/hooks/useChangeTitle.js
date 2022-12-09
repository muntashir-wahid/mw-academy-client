const { useEffect } = require("react");

const useChangeTitle = (title) => {
  useEffect(() => {
    window.document.title = `${title} || MW Academy`;
  }, [title]);
};

export default useChangeTitle;
