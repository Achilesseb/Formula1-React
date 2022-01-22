
import "./circuitsPage-progressbar.styles.scss";

export const ProgressBar = (props) => {
  return (
    <div className="progress-bar-background">
      <div
        className="progress-bar"
        style={{
          width: `${(100 / props.props.numberOfPages) * props.props.page}%`,
        }}
      />
    </div>
  );
};
