import { DarkMode } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';

function App() {
  return (
    <Container
      maxWidth={false}
      sx={{
        width: '1',
        height: '1',
        backgroundColor: 'primary.dark',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          width: '1',
          height: '1',
        }}
      >
        <AppBar
          position="static"
          component="nav"
          sx={{
            paddingY: 2,
            backgroundColor: 'primary.dark',
            boxShadow: 0,
          }}
        >
          <Toolbar sx={{ padding: 0 }}>
            <Box
              sx={{
                width: '1',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Button sx={{ color: 'primary.contrastText' }}>
                <DarkMode />
              </Button>
              <Stack direction="row" spacing={2}>
                <Button variant="contained" sx={{ color: 'primary.dark' }}>
                  글쓰기
                </Button>
                <Button variant="contained" sx={{ color: 'primary.dark' }}>
                  로그아웃
                </Button>
              </Stack>
            </Box>
          </Toolbar>
        </AppBar>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            paddingY: 2,
            textAlign: 'center',
            color: 'primary.contrastText',
          }}
        >
          이 문장, 내가 기억할게!
        </Typography>
        <Box sx={{ paddingBottom: 4 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'primary.contrastText',
              color: 'primary.dark',
            }}
          >
            한국어
          </Button>
        </Box>
        <Container
          sx={{
            width: '90%',
            paddingX: 4,
            paddingY: 2,
            backgroundColor: 'primary.contrastText',
          }}
        >
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{ color: 'primary.dark' }}
          >
            한국어 명언
          </Typography>
          <Typography variant="subtitle2" sx={{ color: 'primary.light' }}>
            - 명언 남긴 사람 -
          </Typography>
        </Container>
      </Container>
    </Container>
  );
}

export default App;
