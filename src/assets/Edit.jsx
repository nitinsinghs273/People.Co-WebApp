import EmailInput from "./EmailInput";
import RoleInput from "./RoleInput";
import TeamName from "./TeamName";
import FooterWithDivider from "./FooterWithDivider";
import PropTypes from "prop-types";

const Edit = ({ className = "", onClose }) => {
  return (
    <div
      className={`relative shadow-[0px_32px_64px_rgba(0,_0,_0,_0.24),_0px_0px_8px_rgba(0,_0,_0,_0.2)] rounded-lg bg-base-white border-neutral-stroke-transparent-rest border-[1px] border-solid box-border overflow-auto flex flex-col items-start justify-start py-[22px] px-0 gap-[41px] leading-[normal] tracking-[normal] max-w-full max-h-full mq450:gap-5 ${className}`}
    >
      <section className="w-[704px] flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
        <form className="m-0 flex-1 flex flex-col items-start justify-start gap-[23.6px] max-w-full">
          <a className="[text-decoration:none] self-stretch relative text-5xl font-bold font-text-sm-semibold text-neutral-neutral-900 text-left mq450:text-[19px]">
            Edit Profile
          </a>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <div className="h-[100px] w-[100px] rounded-181xl flex flex-row items-start justify-start bg-[url('/public/avatar10@3x.png')] bg-cover bg-no-repeat bg-[top]">
              <div className="h-[100px] w-[100px] relative rounded-181xl border-miscellaneous-floating-tab-text-unselected border-[0.8px] border-solid box-border overflow-hidden shrink-0 opacity-[0.08]" />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="flex flex-col items-center justify-start max-w-full">
              <div className="flex flex-row items-center justify-start py-0 px-0 gap-2 mq450:flex-wrap">
                <button className="cursor-pointer border-neutral-neutral-300 border-[1px] border-solid py-1.5 px-[7px] bg-neutral-neutral-50 rounded-medium overflow-hidden flex flex-row items-center justify-center">
                  <div className="flex flex-row items-center justify-center gap-[7px]">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                      alt=""
                      src="/icons--lucide1.svg"
                    />
                    <div className="flex flex-row items-center justify-center">
                      <b className="relative text-sm tracking-[0.08em] leading-[120%] uppercase inline-block font-text-sm-semibold text-accent-accent-700 text-left min-w-[128px]">
                        change photo
                      </b>
                    </div>
                  </div>
                </button>
                <button className="cursor-pointer border-neutral-neutral-300 border-[1px] border-solid py-1.5 px-[7px] bg-neutral-neutral-50 rounded-medium overflow-hidden flex flex-row items-center justify-center">
                  <div className="flex flex-row items-center justify-center gap-[7px]">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                      alt=""
                      src="/icons--lucide-1.svg"
                    />
                    <div className="flex flex-row items-center justify-center">
                      <b className="relative text-sm tracking-[0.08em] leading-[120%] uppercase inline-block font-text-sm-semibold text-accent-accent-700 text-left min-w-[127px]">
                        Remove photo
                      </b>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <EmailInput />
          <RoleInput />
          <TeamName />
        </form>
      </section>
      <FooterWithDivider />
    </div>
  );
};

Edit.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default Edit;
