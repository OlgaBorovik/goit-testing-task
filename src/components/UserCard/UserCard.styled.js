import styled from 'styled-components';

export const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardBox = styled.div`
  box-sizing: border-box;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  padding: 28px 36px 36px 36px;
  position: relative;
`;

export const PictureBox = styled.div`
  width: 306px;
  height: 168px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 18px;
`;

export const Logo = styled.img`
  position: absolute;
  top: 20;
  left: 20;
`;

export const Picture = styled.img`
  margin-left: auto;
  margin-right: auto;
`;

export const Divider = styled.div`
  width: 380px;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
  position: absolute;
  z-index: 1;
  left: 0;
`;

export const Avatar = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const InfoBox = styled.div`
  margin-top: 88px;
  margin-left: auto;
  margin-right: auto;
`;

export const Text = styled.p`
  margin: 0;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;
  text-align: center;
  &:first-child {
    margin-bottom: 16px;
  }
`;

export const Button = styled.button`
  display: block;
  margin-top: 26px;
  margin-left: auto;
  margin-right: auto;
  width: 196px;
  height: 50px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;

  &.following {
    background: #5cd3a8;
  }
`;
