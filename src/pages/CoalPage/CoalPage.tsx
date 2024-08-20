import { CoalBenefits } from "../../components/CoalBenefits/CoalBenefits.tsx";
import { CoalProducts } from "../../components/CoalProducts/CoalProducts.tsx";
import { Box, Modal } from "@mui/material";
import { useState } from "react";
import { ContactForm } from "../../components/ContactForm/ContactForm.tsx";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
};

export const CoalPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <CoalProducts handleModal={handleModal} />
      <CoalBenefits />
      <Modal open={isModalOpen} onClose={handleModal}>
        <Box sx={{ ...style, maxWidth: 400, minWidth: 320 }}>
          <ContactForm />
        </Box>
      </Modal>
    </>
  );
};
