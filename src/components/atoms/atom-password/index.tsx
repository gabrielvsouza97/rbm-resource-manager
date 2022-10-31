import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import ParticleText from "components/particles/particle-text";
import * as Styled from "./atom-password-style";
import { useEffect, useState } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import ParticleInput from "components/particles/particle-input";

export default function AtomPassword(props: { children: React.ReactNode }) {
  const [eyeType, setEyeType] = useState<IconProp>(faEyeSlash);
  const [passwordType, setPasswordType] = useState<"password" | "text">(
    "password"
  );

  function changeEyeType() {
    if (eyeType === faEyeSlash) {
      setEyeType(faEye);
      return;
    }
    setEyeType(faEyeSlash);
    return;
  }

  useEffect(() => {
    if (eyeType === faEye) {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
    return;
  }, [eyeType]);
  return (
    <>
      <ParticleText tagType="label" for="password">
        {props.children}
      </ParticleText>
      <Styled.StyledContainerPassword>
        <FontAwesomeIcon icon={eyeType} onClick={changeEyeType} />
        <ParticleInput type={passwordType} id="password" />
      </Styled.StyledContainerPassword>
    </>
  );
}
