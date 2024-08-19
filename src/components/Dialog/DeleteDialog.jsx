import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const DeleteDialog = memo(
  ({ className = "", setIsDelete, data, handleDeleteUser }) => {
    const navigate = useNavigate();

    const onButtonContainerClick = useCallback(() => {
      handleDeleteUser(data.id);
      navigate("/directory");
    }, [navigate]);

    const handleBack = useCallback(() => {
      setIsDelete(false);
      navigate("/directory");
    }, [navigate]);

    return (
      <div
        className={`w-[600px] shadow-[0px_32px_64px_rgba(0,_0,_0,_0.24),_0px_0px_8px_rgba(0,_0,_0,_0.2)] rounded-lg bg-neutral-background-1-rest border-neutral-stroke-transparent-rest border-[1px] border-solid box-border max-w-full flex flex-col items-start justify-start py-[22px] px-[23px] gap-2 leading-[normal] tracking-[normal] text-left text-lg text-neutral-foreground-1-rest font-body-body-2 ${className}`}
      >
        <div className="self-stretch flex flex-row items-center justify-start gap-2 max-w-full">
          <b className="h-8 flex-1 relative leading-[120%] flex items-center max-w-[calc(100%_-_24px)]">
            Delete Member Details
          </b>
          <button onClick={handleBack} className="border-0 text-base w-5">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 text-black"
              loading="lazy"
              alt=""
              src="/icons--lucide-6.svg"
            />
          </button>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start py-1.5 px-0 gap-4 text-sm text-neutral-neutral-700">
          <div className="self-stretch h-9 relative tracking-[-0.05px] leading-[125%] flex items-center">
            Are you sure you want to delete this Member details? This action
            cannot be undone.
          </div>
          <div className="w-[272px] h-[180px] shadow-[0px_2px_4px_rgba(0,_0,_0,_0.14),_0px_0px_2px_rgba(0,_0,_0,_0.12)] rounded-2xl bg-neutral-background-1-rest border-neutral-stroke-transparent-rest border-[1px] border-solid box-border hidden flex-col items-start justify-start p-4 gap-4 text-center text-xs text-brand-foreground-1-rest font-web-caption-2-strong">
            <div className="self-stretch hidden flex-row items-start justify-start gap-4">
              <div className="h-14 w-14 relative bg-brand-background-2-rest hidden">
                <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_85px)] leading-[16px] flex items-center justify-center overflow-hidden text-ellipsis w-[169px] h-3.5">{` `}</div>
              </div>
              <div className="h-14 flex-1 relative bg-brand-background-2-rest whitespace-nowrap text-3xs">
                <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_85px)] leading-[14px] font-semibold">
                  SWAP WITH CONTENT COMPONENT
                </div>
              </div>
            </div>
            <div className="self-stretch hidden flex-row items-start justify-start gap-4">
              <div className="h-14 w-14 relative bg-brand-background-2-rest hidden">
                <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_85px)] leading-[16px] flex items-center justify-center overflow-hidden text-ellipsis w-[169px] h-3.5">{` `}</div>
              </div>
              <div className="h-14 flex-1 relative bg-brand-background-2-rest whitespace-nowrap text-3xs">
                <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_85px)] leading-[14px] font-semibold">
                  SWAP WITH CONTENT COMPONENT
                </div>
              </div>
            </div>
            <div className="self-stretch hidden flex-row items-start justify-start gap-4">
              <div className="h-14 w-14 relative bg-brand-background-2-rest hidden">
                <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_85px)] leading-[16px] flex items-center justify-center overflow-hidden text-ellipsis w-[169px] h-3.5">{` `}</div>
              </div>
              <div className="h-14 flex-1 relative bg-brand-background-2-rest whitespace-nowrap text-3xs">
                <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_85px)] leading-[14px] font-semibold">
                  SWAP WITH CONTENT COMPONENT
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end text-base text-accent-accent-700 font-buttons-cta-text">
          <div className="w-[173px] flex flex-row items-center justify-end gap-2">
            <div className="self-stretch rounded-medium bg-neutral-neutral-50 border-neutral-neutral-300 border-[1px] border-solid overflow-hidden hidden flex-row items-center justify-center py-2 px-[11px]">
              <div className="flex flex-col items-center justify-center">
                <div className="w-[159px] flex flex-row items-center justify-center">
                  <b className="h-[19px] flex-1 relative tracking-[0.08em] leading-[120%] uppercase flex items-center">
                    Move to Drafts
                  </b>
                </div>
              </div>
            </div>
            <div
              className="rounded-medium bg-brand-700 overflow-hidden flex flex-row items-center justify-center py-[11.5px] px-[11px] cursor-pointer text-neutral-background-1-rest"
              onClick={onButtonContainerClick}
            >
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-row items-center justify-center">
                  <b className="relative tracking-[0.08em] leading-[120%] uppercase inline-block min-w-[68px]">
                    Delete
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

DeleteDialog.propTypes = {
  className: PropTypes.string,
};

export default DeleteDialog;
