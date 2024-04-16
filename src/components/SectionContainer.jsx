import PropTypes from "prop-types";

const SectionContainer = ({ id }) => {
  return (
    <section
      id={id}
      data-section={id}
      className={`section scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl`}
    >
      <slot />
    </section>
  );
};

export default SectionContainer;

SectionContainer.defaultProps = {
  id: "",
};

SectionContainer.propTypes = {
  id: PropTypes.string,
};
