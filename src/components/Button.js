import styled, { css } from "styled-components";
import ArrowIcon from "../assets/svg/arrow.svg";

const Button = ({ bg, color, direction = "right" }) => {
  return (
    <Container bg={bg} color={color} direction={direction}>
      <svg
        width="18"
        height="15"
        viewBox="0 0 25 15"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.3588 7.5C13.3588 11.036 10.3683 13.9024 6.67939 13.9024C2.99046 13.9024 -2.2912e-08 11.036 -1.55709e-08 7.5C-8.22979e-09 3.96403 2.99046 1.09756 6.67939 1.09756C10.3683 1.09756 13.3588 3.96403 13.3588 7.5Z"
          fill={color}
        />
        <path
          d="M11.6412 15L11.6412 2.41685e-08L25 7.5L11.6412 15Z"
          fill={color}
        />
      </svg>
    </Container>
  );
};

const Container = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  background-color: ${({ bg }) => bg || "#007BFF"};
  color: ${({ color }) => color || "#FFFFFF"};
  position: relative;

  svg {
    width: 16px;
    height: 16px;
    transition: transform 0.3s ease;

    ${({ direction }) =>
      direction === "up" &&
      css`
        transform: rotate(-90deg);
      `}

    ${({ direction }) =>
      direction === "down" &&
      css`
        transform: rotate(90deg);
      `}

  ${({ direction }) =>
      direction === "left" &&
      css`
        transform: rotate(180deg);
      `}

  ${({ direction }) =>
      direction === "right" &&
      css`
        transform: rotate(0deg);
      `}
  }
`;

export default Button;
