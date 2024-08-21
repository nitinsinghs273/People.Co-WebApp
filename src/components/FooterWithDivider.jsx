import Button from "./Button/Button";
import PropTypes from "prop-types";

const FooterWithDivider = ({ handlesubmit, onClose }) => {
  return (
    <div
      className={`w-[704px] flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border max-w-full `}
    >
      <div className="self-stretch flex flex-row items-start justify-end py-0 px-6">
        <div className="w-[173px] flex flex-row items-center justify-end py-0 pl-0.5 pr-0 box-border gap-2">
          <Button
            text="Cancel"
            propBorder="1px solid #cbd5e1"
            propBackgroundColor="#f8fafc"
            propFlex="1"
            propColor="#06103c"
            propMinWidth="72px"
            onHandleSelect={onClose}
          />
          <Button
            text="Save"
            onHandleSelect={handlesubmit}
            propBorder="1px solid #cbd5e1"
            propBackgroundColor="#f8fafc"
            propFlex="1"
            propColor="#06103c"
          />
        </div>
      </div>
    </div>
  );
};

FooterWithDivider.propTypes = {
  className: PropTypes.string,
};

export default FooterWithDivider;
