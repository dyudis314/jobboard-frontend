import Header from '../components/Header';
import Stack from '@mui/material/Stack';

export default function Contact() {
  return (
    <main>
      <Stack className="header-box" spacing={2}>
      <Header
          headerText={"Contact below"}
          headerSubText={"With Any Questions"}
        />
      </Stack>
    </main>
  );
}