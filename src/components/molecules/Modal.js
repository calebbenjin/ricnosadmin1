import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

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
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button
            isLoading={loadingIndicator}
            onClick={callback}
            colorScheme="green"
          >
            {btnText}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalCard;
