import React, { useState } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

function Extract() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [extractedData, setExtractedData] = useState(null);

  const handleExtract = async () => {
    // Implement your API call to the .NET 6 C# API here
    // Example: Replace with your API endpoint and request logic
    try {
      const response = await fetch('https://localhost:7273/api/UploadFiles/NewDocumentProcessing');
      const data = await response.json();
      setExtractedData(data);
    } catch (error) {
      console.error('API call error', error);
    }
  };

  return (
    <div>
      <Typography variant="h6">Selected Files:</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>File Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {selectedFiles.map((file, index) => (
              <TableRow key={index}>
                <TableCell>{file.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Button
        variant="contained"
        color="primary"
        onClick={handleExtract}
      >
        Extract
      </Button>

      {extractedData && (
        <div>
          <Typography variant="h6">Extracted Data:</Typography>
          <Paper variant="outlined">
            <pre>{JSON.stringify(extractedData, null, 2)}</pre>
          </Paper>
        </div>
      )}
    </div>
  );
}

export default Extract;