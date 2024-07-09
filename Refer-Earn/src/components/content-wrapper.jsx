import { useCallback } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";

const ContentWrapper = ({ className = "" }) => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://home.accredian.com/");
  }, []);

  const onLinkClick = useCallback(() => {
    window.open("https://home.accredian.com/login");
  }, []);

  const onLinkContainerClick1 = useCallback(() => {
    window.open("https://trial.accredian.com/");
  }, []);

  return (
    <header
      className={`self-stretch h-[119px] flex flex-row items-start justify-start pt-0 px-0 pb-[39.8px] box-border max-w-full text-left text-mini-8 text-gray-100 font-inter ${className}`}
    >
      <div className="self-stretch flex-1 flex flex-row items-start justify-center py-[9.6px] px-5 box-border max-w-full">
        <div className="self-stretch w-[1360px] flex flex-row items-center justify-between py-2.5 px-0 box-border max-w-[1360px] min-h-[60px] gap-[0px] [row-gap:20px] mq1650:max-w-full">
          <div className="w-[560px] flex flex-row items-center justify-start py-0 pr-[287px] pl-0 box-border gap-[32px] max-w-full mq900:gap-[16px] mq900:pr-[143px] mq900:box-border mq450:pr-5 mq450:box-border">
            <div
              className="flex-1 flex flex-col items-start justify-start cursor-pointer"
              onClick={onLinkContainerClick}
            >
              <img
                className="w-full h-[36.7px] relative max-w-[125px] overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/logopng@2x.png"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start">
              <FormControl
                className="self-stretch h-10 font-inter font-medium text-mini-9 text-homeaccrediancom-nero"
                variant="standard"
                sx={{
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  backgroundColor: "#1a73e8",
                  borderRadius: "6px",
                  width: "100%",
                  height: "40px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "40px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "40px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "40px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "40px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#fff",
                    fontSize: 14.9,
                    fontWeight: "Medium",
                    fontFamily: "Inter",
                    textAlign: "left",
                    p: "0 !important",
                    marginLeft: "18px",
                  },
                }}
              >
                <InputLabel color="primary" />
                <Select
                  color="primary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="16px"
                      height="16px"
                      src="/svg.svg"
                      style={{ marginRight: "18px" }}
                    />
                  )}
                >
                  <MenuItem>Courses</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-end py-0 pr-0 pl-[268px] box-border gap-[31.5px] max-w-full mq900:pl-[134px] mq900:box-border mq450:gap-[16px] mq450:pl-5 mq450:box-border">
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[24px] capitalize font-medium inline-block min-w-[88px] whitespace-nowrap">{`Refer & Earn`}</div>
            </div>
            <div className="w-[173px] flex flex-row items-center justify-between gap-[20px] mq900:hidden">
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[24px] capitalize font-medium inline-block min-w-[75px]">
                  Resources
                </div>
              </div>
              <div className="flex flex-col items-start justify-start text-mini">
                <a className="[text-decoration:none] relative leading-[24px] capitalize font-medium text-[inherit] inline-block min-w-[67px] whitespace-nowrap">
                  About us
                </a>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center gap-[16px] text-center text-homeaccrediancom-nero">
              <Button
                className="self-stretch w-[77px] cursor-pointer"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#1a202c",
                  fontSize: "15.3",
                  background: "rgba(148, 163, 184, 0.2)",
                  borderRadius: "0px 0px 0px 0px",
                  "&:hover": { background: "rgba(148, 163, 184, 0.2)" },
                  width: 77,
                }}
                onClick={onLinkClick}
              >
                Login
              </Button>
              <div
                className="flex flex-col items-start justify-start cursor-pointer"
                onClick={onLinkContainerClick1}
              >
                <div className="rounded-md bg-homeaccrediancom-royal-blue flex flex-row items-start justify-start py-2 px-[18px] whitespace-nowrap">
                  <a
                    className="relative leading-[24px] font-medium text-[inherit] inline-block [text-decoration:none] min-w-[79px]"
                    href="https://trial.accredian.com/"
                    target="_blank"
                  >
                    Try for free
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

ContentWrapper.propTypes = {
  className: PropTypes.string,
};

export default ContentWrapper;
