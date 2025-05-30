import css from "./Feedback.module.css";

const Feedback = ({ points }) => {
  return (
    <ul className={css.list}>
      {points.map(([key, value]) => (
        <li className={css.item} key={key}>
          {key}: {value}
        </li>
      ))}
    </ul>
  );
};

export default Feedback;
