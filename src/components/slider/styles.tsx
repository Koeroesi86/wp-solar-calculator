import styled from "styled-components";

export const RangeSlider = styled.input
  .attrs(() => ({type: 'range'}))`
  height: 38px;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
  background-color: transparent;
  border: 0 !important;
    
  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 10px;
    cursor: pointer;
    animate: 0.2s;
    //box-shadow: 1px 1px 1px #000000;
    background: #fff;
    border-radius: 5px;
    border: 0 solid #000000;
  }
  &:focus::-webkit-slider-runnable-track {
    background: #fff;
  }
  &::-webkit-slider-thumb {
    //box-shadow: 1px 1px 1px #000000;
    border: 0 solid #000000;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background: #046a38;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -11px;
  }
  &::-moz-range-track {
    width: 100%;
    height: 10px;
    cursor: pointer;
    animate: 0.2s;
    //box-shadow: 1px 1px 1px #000000;
    background: #fff;
    border-radius: 5px;
    border: 0 solid #000000;
  }
  &::-moz-range-thumb {
    //box-shadow: 1px 1px 1px #000000;
    border: 0 solid #000000;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background: #046a38;
    cursor: pointer;
  }
  &::-ms-track {
    width: 100%;
    height: 10px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  &::-ms-fill-lower {
    background: #fff;
    border-radius: 5px;
    border: 0 solid #000000;
    //box-shadow: 1px 1px 1px #000000;
  }
  &::-ms-fill-upper {
    background: #fff;
    border-radius: 5px;
    border: 0 solid #000000;
    //box-shadow: 1px 1px 1px #000000;
  }
  &::-ms-thumb {
    margin-top: 1px;
    //box-shadow: 1px 1px 1px #000000;
    border: 0 solid #000000;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background: #046a38;
    cursor: pointer;
  }
  &:focus::-ms-fill-lower {
    //background: #046a38;
  }
  &:focus::-ms-fill-upper {
    //background: #046a38;
  }
`;

export const Track = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  height: 10px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  transform: translateY(-50%);
  background: #046a38;
`;

export const Wrapper = styled.div`
  position: relative;

  @-moz-document url-prefix() {
    ${Track} {
      //margin-top: -2px;
    }
  }
`;
