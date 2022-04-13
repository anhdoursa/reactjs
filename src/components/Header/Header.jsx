import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import React, { useState } from 'react';
import Cart from './Cart/Cart';
import Logo from './Logo/Logo';
import Navbar from './Navbar/Navbar';
function Header(props) {
  // Register Dialog
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // End Register Dialog

  return (
    <div className="header">
      <div className="container">
        <div className="row flex-items-center">
          <div className="col col-3">
            <Logo />
          </div>
          <div className="col col-6">
            <Navbar />
          </div>
          <div className="col col-3">
            <button onClick={handleClickOpen}>Register</button>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Subscribe</DialogTitle>
              <DialogContent>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Email Address"
                  type="email"
                  fullWidth
                  variant="standard"
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
              </DialogActions>
            </Dialog>
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
