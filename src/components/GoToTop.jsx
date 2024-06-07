import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";
import { debounce } from "lodash";

const SCROLL_THRESHOLD = 20;

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = debounce(() => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    setIsVisible(winScroll > SCROLL_THRESHOLD);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => {
      window.removeEventListener("scroll", listenToScroll);
      listenToScroll.cancel();
    };
  }, []);

  return (
    <Wrapper>
      {isVisible && (
        <div className="top-btn" onClick={goToBtn}>
          <FaArrowUp className="top-btn--icon" />
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .top-btn {
    font-size: 2.4rem;
    width: 6rem;
    height: 6rem;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.btn};
    box-shadow: ${({ theme }) => theme.colors.shadow};
    border-radius: 50%;
    position: fixed;
    bottom: 5rem;
    right: 5rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &--icon {
      animation: gototop 1.2s linear infinite alternate-reverse;
    }

    @keyframes gototop {
      0% {
        transform: translateY(-0.5rem);
      }
      100% {
        transform: translateY(1rem);
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .top-btn {
      right: 10%;
      left: auto;
      bottom: 2rem;
    }
  }
`;

export default GoToTop;
