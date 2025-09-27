"use client";

import { useState } from "react";
import Modal from "./Modal";

export default function ModalProvider() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Modal
      title="Hello World"
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      onSubmit={() => console.log("Submitted")}
      actionLabel="Continue"
    />
  );
}
