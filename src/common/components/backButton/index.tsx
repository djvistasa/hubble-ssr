"use client";
import { useRouter } from "next/navigation";
import "./styles.scss";

function BackButton() {
  const { back } = useRouter();
  return (
    <a className="back-button" onClick={() => back()}>
      Back
    </a>
  );
}

export default BackButton;
