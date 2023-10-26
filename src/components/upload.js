import React, { useState } from 'react';
import { Button, Typography, Paper, Grid, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

function Upload() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentFile, setCurrentFile] = useState(null);

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };

  const handleOpenDialog = (file) => {
    setCurrentFile(file);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setCurrentFile(null);
    setOpenDialog(false);
  };

  return (
    <div>
      <input
        accept=".txt, .pdf, .doc, .docx"
        style={{ display: 'none' }}
        id="file-input"
        type="file"
        multiple
        onChange={handleFileSelect}
      />
      <label htmlFor="file-input">
        <Button variant="outlined" component="span">
          Upload Files
        </Button>
      </label>
      <div>
        <Typography variant="h6">Selected Files:</Typography>
        <Grid container spacing={2}>
          {selectedFiles.map((file, index) => (
            <Grid item key={index}>
              <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
                <Typography>{file.name}</Typography>
                <Button variant="contained" color="primary" onClick={() => handleOpenDialog(file)}>
                  View
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
      <Dialog open={openDialog} onClose={handleCloseDialog} style={{ width: "900px", height: "750px" }}>
        <DialogTitle>File Contents</DialogTitle>
        <DialogContent>
          {currentFile && (
            <iframe
              title="File Content"
              src={URL.createObjectURL(currentFile)}
              width="100%"
              height="500px"
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Upload;
