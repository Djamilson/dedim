import styled from 'styled-components';

export const Container = styled.div`
  .cursor-pointer {
    cursor: pointer;
  }

  .scroll-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
  }
  .scroll-container .indicator {
    height: 100%;
    background: #8b0000;
  }

  .scroll-to-top {
    position: fixed;
    bottom: 12px;
    left: 50%;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background: #8b0000;
    color: #fff;
    z-index: 1;
  }
  .scroll-to-top .icon {
    margin-top: 10px;
    animation: scrollTop 0.5s alternate ease infinite;
  }
  @keyframes scrollTop {
    from {
      transform: translateY(2px);
    }
    to {
      transform: translateY(-1px);
    }
  }
`;