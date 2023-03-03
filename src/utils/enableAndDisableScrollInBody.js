const htmlTag = document.getElementsByTagName("html")[0];

const disableScroll = () => (htmlTag.style.overflowY = "hidden");
const enableScroll = () => (htmlTag.style.overflowY = "auto");

export { disableScroll, enableScroll };
