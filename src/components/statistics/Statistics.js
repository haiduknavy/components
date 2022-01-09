import PropTypes from "prop-types";
import TypeFileInfo from "./TypeFileInfo";
import { SectionStatistics, Title, StatList } from "./Statistics.styled";

export default function Statistics({ title, stats }) {
  return (
    <SectionStatistics>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map((item) => (
          <TypeFileInfo
            label={item.label}
            percentage={item.percentage}
            key={item.id}
          />
        ))}
      </StatList>
    </SectionStatistics>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};
