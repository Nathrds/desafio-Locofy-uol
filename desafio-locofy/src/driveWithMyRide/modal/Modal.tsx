import { Box, Button, Modal as ModalMui, Typography } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#282828",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  p: 4,
};

interface ModalErrorProps {
  open: boolean;
  onClose: () => void;
  errorMessage: string;
}

const Modal: React.FC<ModalErrorProps> = ({ open, onClose, errorMessage }) => {
  function handleClose() {
    onClose();
  }

  return (
    <Box>
      <ModalMui
        open={open}
        onClose={handleClose}
        aria-labelledby="server-modal-title"
      >
        <Box sx={style}>
          <Box>
            <Typography
              variant="h3"
              fontSize="26px"
              color="#FBA403"
              padding="15px 0"
            >
              <ErrorIcon style={{ fontSize: "40px", color: "red" }} />
              Oops! Something went wrong
            </Typography>
          </Box>
          <Box>
            <Typography variant="h4" fontSize="16px" margin=" 15px 0">
              {errorMessage}
            </Typography>

            <Box display="flex" justifyContent="center">
              <Button
                variant="contained"
                disableElevation
                aria-label="Ok"
                onClick={handleClose}
                sx={{
                  backgroundColor: "#FBA403 !important",
                  width: "200px",
                  height: "56px",
                  marginTop: "24px",
                }}
              >
                Ok
              </Button>
            </Box>
          </Box>
        </Box>
      </ModalMui>
    </Box>
  );
};

export default Modal;
