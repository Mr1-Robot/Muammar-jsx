// useContext Hook
import { useContext } from "react";
// Mode Context
import { ModeContext } from "@/context/ThemeContext";

const NextJS = () => {
  const ctx = useContext(ModeContext);

  const color = ctx.mode === "dark" ? "#f3f3f3" : "#000";
  return (
    <svg
      width="73"
      height="17"
      viewBox="0 0 73 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_490_1035)">
        <path
          d="M48.5281 0.00732422H61.2434V2.73312H56.1994V17.0732H53.6772V2.73312H48.5281V0.00732422Z"
          fill={color}
        />
        <path
          d="M27.6162 0.00732422V2.73312H17.424V7.11809H25.6205V9.84387H17.424V14.3474H27.6162V17.0732H14.9019V2.73312H14.9009V0.00732422H27.6162Z"
          fill={color}
        />
        <path
          d="M33.9654 0.0141602H30.6648L42.4867 17.08H45.7969L39.8852 8.55295L45.7875 0.0271803L42.4867 0.0331045L38.2327 6.16935L33.9654 0.0141602Z"
          fill={color}
        />
        <path
          d="M37.3522 12.2042L35.6993 9.81738L30.6553 17.0929H33.9653L37.3522 12.2042Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.9904 17.073L3.15254 0H0V17.0658H2.52204V3.64781L11.8221 17.073H14.9904Z"
          fill={color}
        />
        <path
          d="M61.8104 16.9688C61.6257 16.9688 61.4686 16.8945 61.337 16.7459C61.2055 16.5973 61.1405 16.4173 61.1421 16.2042C61.1405 15.9968 61.2055 15.8189 61.337 15.6702C61.4686 15.5216 61.6257 15.4473 61.8104 15.4473C61.9881 15.4473 62.1436 15.5216 62.2751 15.6702C62.4085 15.8189 62.475 15.9968 62.4769 16.2042C62.475 16.345 62.4443 16.474 62.3828 16.5894C62.3196 16.7068 62.2393 16.7987 62.1384 16.8652C62.0392 16.9336 61.9299 16.9688 61.8104 16.9688Z"
          fill={color}
        />
        <path
          d="M66.1151 9.7793H67.2327V14.7802C67.2311 15.2398 67.1455 15.6329 66.9781 15.9634C66.809 16.2939 66.5748 16.5462 66.2741 16.7242C65.975 16.9002 65.6247 16.9902 65.2265 16.9902C64.8624 16.9902 64.5362 16.9139 64.2456 16.7652C63.9551 16.6166 63.7245 16.3937 63.5553 16.1003C63.3843 15.8069 63.3005 15.4412 63.3005 15.0031H64.42C64.4217 15.1948 64.4593 15.361 64.531 15.4999C64.6027 15.6387 64.7018 15.7443 64.8283 15.8186C64.9564 15.893 65.1035 15.9301 65.2691 15.9301C65.4487 15.9301 65.6024 15.8871 65.7271 15.7991C65.8518 15.713 65.9476 15.584 66.0143 15.4118C66.0792 15.2417 66.1134 15.0305 66.1151 14.7802V9.7793Z"
          fill={color}
        />
        <path
          d="M71.831 11.7352C71.8038 11.432 71.6841 11.1954 71.4756 11.0272C71.2653 10.857 70.9937 10.7729 70.6604 10.7729C70.4264 10.7729 70.2248 10.814 70.0573 10.8942C69.8898 10.9763 69.7599 11.0859 69.671 11.2247C69.5823 11.3636 69.5378 11.522 69.5343 11.7C69.5343 11.8486 69.565 11.9777 69.6249 12.0853C69.6847 12.1948 69.765 12.2867 69.8693 12.361C69.9717 12.4373 70.0862 12.4999 70.2111 12.5507C70.3375 12.6016 70.464 12.6446 70.5904 12.6798L71.1731 12.846C71.4073 12.9086 71.6346 12.9927 71.8516 13.1003C72.0685 13.2059 72.2651 13.3409 72.4376 13.5032C72.6103 13.6655 72.747 13.8611 72.8478 14.0899C72.9486 14.3187 72.9999 14.5867 72.9999 14.8957C72.9999 15.3122 72.9077 15.678 72.7213 15.9948C72.5351 16.3097 72.2668 16.5561 71.9147 16.7341C71.5644 16.9101 71.1407 17 70.6417 17C70.1598 17 69.7394 16.914 69.3857 16.7419C69.0303 16.5718 68.7533 16.3214 68.5534 15.9928C68.3535 15.6643 68.2458 15.2633 68.2305 14.792H69.3379C69.3533 15.0384 69.4216 15.2438 69.5378 15.41C69.6556 15.5743 69.8094 15.6956 69.9975 15.7777C70.1872 15.8579 70.399 15.899 70.6332 15.899C70.8776 15.899 71.0928 15.8559 71.2791 15.7718C71.4636 15.6877 71.6088 15.5704 71.7132 15.4179C71.8191 15.2673 71.8721 15.0893 71.8738 14.8859C71.8721 14.7001 71.8241 14.5456 71.7319 14.4243C71.6379 14.3031 71.5081 14.2014 71.3422 14.1192C71.1749 14.0371 70.98 13.9628 70.7579 13.8982L70.0505 13.6909C69.5395 13.5403 69.1344 13.3115 68.8387 13.0045C68.5416 12.6974 68.3944 12.2906 68.3944 11.7802C68.3944 11.3616 68.4936 10.994 68.6937 10.6791C68.8917 10.3642 69.1635 10.1197 69.507 9.94567C69.8522 9.76967 70.2419 9.68359 70.6758 9.68359C71.1167 9.68359 71.5029 9.76967 71.8362 9.94567C72.1693 10.1197 72.4309 10.3623 72.6205 10.6713C72.8102 10.9803 72.9093 11.3343 72.9145 11.7352H71.831Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_490_1035">
          <rect width="73" height="17" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default NextJS;
