import React, {FC} from "react";
import {RangeSlider, Track, Wrapper} from "./styles";

interface SliderProps {
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
  value: number;
}

const Slider: FC<SliderProps> = (props) => {
  const trackPosition = ((props.value - props.min) / (props.max - props.min)) * 100
  return (
    <Wrapper>
      <Track style={{ width: `${trackPosition}%` }}/>
      <RangeSlider
        min={props.min}
        max={props.max}
        value={props.value}
        step={props.step}
        onChange={(e) => props.onChange(Number(e.target.value))}
      />
    </Wrapper>
  );
}

export default Slider