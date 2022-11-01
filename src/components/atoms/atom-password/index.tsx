import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import ParticleText from "components/particles/particle-text";
import * as Styled from "./atom-password-style";
import { ChangeEvent, useEffect, useState } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import ParticleInput from "components/particles/particle-input";

const ICONS = [faEyeSlash, faEye];
const PASSWORDFIELD = ["password", "text"] as ["password", "text"];

function returnNumber(Bool: boolean): number {
  if (!Bool) {
    return 0;
  }
  return 1;
}

type AtomPasswordProps = {
  children: React.ReactNode;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export default function AtomPassword(props: AtomPasswordProps) {
  const [eyeType, setEyeType] = useState<boolean>(false);

  return (
    <>
      <ParticleText tagType="label" htmlFor="password">
        {props.children}
      </ParticleText>
      <Styled.StyledContainerPassword>
        <FontAwesomeIcon
          icon={ICONS[returnNumber(eyeType)]}
          onClick={() => setEyeType(!eyeType)}
        />
        <ParticleInput
          type={PASSWORDFIELD[returnNumber(eyeType)]}
          id="password"
          placeholder="Digite a sua Senha"
          onChange={props.onChange}
          value={props.value}
        />
      </Styled.StyledContainerPassword>
    </>
  );
}
