import style from "./style.css";
export const Image = ({ src, ...props }) => (
  <img
    {...props}
    src={src}
    class={`${style.loading} ${props.class}`}
    width="150"
    height="150"
  />
);
