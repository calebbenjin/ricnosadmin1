import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Flex,
} from "@chakra-ui/react";
import Button from "../atoms/Button";

const ModalCard = ({
  isOpen,
  onClose,
  title,
  callback,
  loadingIndicator,
  btnText,
  children,
}) => {
  return (
    <Modal size={"2xl"} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        {/* <ModalHeader>{title}</ModalHeader> */}
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Flex w={"full"} justifyContent={"center"} alignItems="center">
            <Button loading={loadingIndicator} onClick={callback}>
              Save
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalCard;
