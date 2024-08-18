import PropTypes from "prop-types";

const EmailInput = ({ name, email, setName, setEmail, className = "" }) => {
  // Local state management for input fields
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  // Handling change in email input
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full text-left text-base text-neutral-neutral-900 font-text-sm-semibold ${className}`}
    >
      <div className="flex-1 flex flex-row flex-wrap items-start justify-center gap-7 max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[7px] min-w-[203px]">
          <div className="self-stretch relative leading-[120%] font-semibold">
            Name
          </div>
          <div className="self-stretch rounded bg-base-white overflow-hidden flex flex-row items-start justify-start gap-[110px] text-neutral-neutral-700 mq450:gap-[55px]">
            <div className="h-12 flex-1 flex flex-col items-start justify-start py-px px-0 box-border relative gap-px">
              <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded bg-base-white border-neutral-neutral-300 border-[1px] border-solid box-border" />
              <div className="flex flex-row items-start justify-start py-0 px-2.5">
                <div className="flex flex-row items-start justify-start py-[13px] px-0 gap-2.5 z-[1]">
                  <img
                    className="h-6 w-6 relative hidden"
                    alt=""
                    src="../../../public/placeholder.svg"
                  />
                  <div className="relative leading-[125%] whitespace-nowrap">
                    <input
                      className="w-full [border:none] [outline:none] bg-[transparent] flex flex-row items-start justify-start box-border font-text-sm-semibold text-base text-neutral-neutral-700"
                      type="text"
                      placeholder="name"
                      value={name}
                      onChange={handleNameChange}
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[1.2px] relative bg-primary hidden z-[2]" />
              <div className="self-stretch h-px relative border-neutral-neutral-600 border-t-[1px] border-solid box-border" />
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0 hidden z-[4]"
                alt=""
                src="../../../public/icon-end-1-medium.svg"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[7px] min-w-[203px]">
          <div className="self-stretch relative leading-[120%] font-semibold">
            Email
          </div>
          <div className="self-stretch rounded bg-base-white overflow-hidden flex flex-row items-start justify-start gap-[110px] text-neutral-neutral-700 mq450:gap-[55px]">
            <div className="h-12 flex-1 flex flex-col items-start justify-start py-px px-0 box-border relative gap-px">
              <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded bg-base-white border-neutral-neutral-300 border-[1px] border-solid box-border" />
              <div className="flex flex-row items-start justify-start py-0 px-2.5">
                <div className="flex flex-row items-start justify-start py-[13px] px-0 gap-2.5 z-[1]">
                  <img
                    className="h-6 w-6 relative hidden"
                    alt=""
                    src="../../../public/placeholder.svg"
                  />
                  <div className="relative leading-[125%] whitespace-nowrap">
                    <input
                      className="w-full[border:none] [outline:none] bg-[transparent] flex flex-row items-start justify-start box-border font-text-sm-semibold text-base text-neutral-neutral-700"
                      placeholder="email"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[1.2px] relative bg-primary hidden z-[2]" />
              <div className="self-stretch h-px relative border-neutral-neutral-600 border-t-[1px] border-solid box-border" />
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0 hidden z-[4]"
                alt=""
                src="../../../public/icon-end-1-medium.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

EmailInput.propTypes = {
  className: PropTypes.string,
};

export default EmailInput;
