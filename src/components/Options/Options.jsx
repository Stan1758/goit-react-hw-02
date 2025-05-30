import css from "./Options.module.css";

const Options = ({ handleClick, points, resetPoints, totalFeedback }) => {
  return (
    <ul className={css.list}>
      {points.map((key, index) => (
        <li className={css.li} key={key}>
          <button
            className={css.button}
            onClick={() => handleClick(key, index + 1)}
          >
            {key}
          </button>
        </li>
      ))}
      {totalFeedback > 0 && (
        <li className={css.li}>
          <button
            className={`${css.button} ${css.resetBtn}`}
            onClick={resetPoints}
          >
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};

export default Options;
