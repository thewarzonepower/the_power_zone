import React, { useState } from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import Stack from "@mui/joy/Stack";
import Add from "@mui/icons-material/Add";
import { Grid, ModalClose, Textarea, Typography } from "@mui/joy";
import { styled } from "@mui/joy";
const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;
interface Props {
  open: any;
  setOpen: any;
}
const CreateNewPharmacist: React.FC<Props> = ({ open, setOpen }) => {
  const [firstName, setFirstName] = useState<any>("");
  const [lastName, setLastName] = useState<any>("");

  const handleSubmitForm = () => {
    const body={
        firstName,
        lastName
    }
  }
  return (
    <React.Fragment>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog>
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            Add New Pharmacist
          </Typography>
          <form
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              setOpen(false);
            }}
            style={{ overflow: "scroll" }}
          >
            <Grid container spacing={2} flexDirection="row">
              <Grid xs={12} sm={12} md={6} xl={6} lg={6}>
                <FormControl>
                  <FormLabel>First Name*</FormLabel>
                  <Input
                    autoFocus
                    required
                    value={firstName}
                    onChange={(e: any) => setFirstName(e.target.value)}
                  />
                </FormControl>
              </Grid>
              <Grid xs={12} sm={12} md={6} xl={6} lg={6}>
                <FormControl>
                  <FormLabel>Last Name*</FormLabel>
                  <Input autoFocus required />
                </FormControl>
              </Grid>
              <Grid xs={12} sm={12} md={6} xl={6} lg={6}>
                <FormControl>
                  <FormLabel>Sex*</FormLabel>
                  <Input autoFocus required />
                </FormControl>
              </Grid>
              <Grid xs={12} sm={12} md={6} xl={6} lg={6}>
                <FormControl>
                  <FormLabel>Age*</FormLabel>
                  <Input autoFocus required />
                </FormControl>
              </Grid>
              <Grid xs={12} sm={12} md={6} xl={6} lg={6}>
                <FormControl>
                  <FormLabel>Birth Date*</FormLabel>
                  <Input autoFocus required />
                </FormControl>
              </Grid>
              <Grid xs={12} sm={12} md={6} xl={6} lg={6}>
                <FormControl>
                  <FormLabel>Blood Group*</FormLabel>
                  <Input autoFocus required />
                </FormControl>
              </Grid>
              <Grid xs={12} sm={12} md={6} xl={6} lg={6}>
                <FormControl>
                  <FormLabel>Mobile*</FormLabel>
                  <Input autoFocus required />
                </FormControl>
              </Grid>
              <Grid xs={12} sm={12} md={6} xl={6} lg={6}>
                <FormControl>
                  <FormLabel>Email*</FormLabel>
                  <Input autoFocus required />
                </FormControl>
              </Grid>
              <Grid xs={12} sm={12} md={12} xl={12} lg={12}>
                <FormControl>
                  <FormLabel>Address*</FormLabel>
                  <Input autoFocus required />
                </FormControl>
              </Grid>
              <Grid xs={6} sm={6} md={4} xl={4} lg={4}>
                <FormControl>
                  <FormLabel>City*</FormLabel>
                  <Input autoFocus required />
                </FormControl>
              </Grid>
              <Grid xs={6} sm={6} md={4} xl={4} lg={4}>
                <FormControl>
                  <FormLabel>State*</FormLabel>
                  <Input autoFocus required />
                </FormControl>
              </Grid>
              <Grid xs={6} sm={6} md={4} xl={4} lg={4}>
                <FormControl>
                  <FormLabel>Zip*</FormLabel>
                  <Input autoFocus required />
                </FormControl>
              </Grid>
              <Grid xs={12} sm={12} md={12} xl={12} lg={12}>
                <FormControl>
                  <FormLabel>Remarks*</FormLabel>
                  <Textarea minRows={3} />
                </FormControl>
              </Grid>
              <Grid xs={12} sm={12} md={12} xl={12} lg={12}>
                <Stack spacing={2} direction="row">
                  <Button
                    component="label"
                    role={undefined}
                    tabIndex={-1}
                    variant="outlined"
                    color="neutral"
                  >
                    Upload a file
                    <VisuallyHiddenInput type="file" />
                  </Button>
                  <Button
                    component="label"
                    role={undefined}
                    tabIndex={-1}
                    variant="outlined"
                    color="neutral"
                  >
                    Remove
                  </Button>
                </Stack>
              </Grid>
              <Grid xs={12} sm={12} md={12} xl={12} lg={12}>
                <img src="" alt="" width={150} height={100} />
              </Grid>

              <Grid
                xs={12}
                sm={12}
                md={12}
                xl={12}
                lg={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Button type="submit">Submit</Button>
              </Grid>
            </Grid>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
};
export default CreateNewPharmacist;
