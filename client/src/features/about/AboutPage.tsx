import {
  Alert,
  AlertTitle,
  Button,
  ButtonGroup,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import agent from '../../app/api/agent';
import { useState } from 'react';

export default function AboutPage() {
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  function getValidationError() {
    agent.TestErrors.getValidationError()
      .then()
      .catch((error) => setValidationErrors(error));
  }

  return (
    <Container>
      <Typography gutterBottom variant="h2">
        Errors for testing purposes
      </Typography>
      <ButtonGroup>
        <Button
          variant="contained"
          onClick={() => agent.TestErrors.get400Error().catch(console.log)}
        >
          Test 400 error
        </Button>
        <Button
          variant="contained"
          onClick={() => agent.TestErrors.get401Error().catch(console.log)}
        >
          Test 401 error
        </Button>
        <Button
          variant="contained"
          onClick={() => agent.TestErrors.get404Error().catch(console.log)}
        >
          Test 404 error
        </Button>
        <Button
          variant="contained"
          onClick={() => agent.TestErrors.get500Error().catch(console.log)}
        >
          Test 500 error
        </Button>
        <Button variant="contained" onClick={getValidationError}>
          Test Validation error
        </Button>
      </ButtonGroup>
      {validationErrors.length > 0 && (
        <Alert severity="error">
          <AlertTitle>Validation Errors</AlertTitle>
          <List>
            {validationErrors.map((error) => (
              <ListItem key={error}>
                <ListItemText>{error}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Alert>
      )}
    </Container>
  );
}
