import {
  AppBar,
  Box,
  Container,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { handleGoogleLogin, handleLogout } from './services/auth';
import DefaultButton from './components/DefaultButton';
import TagButton from './components/TagButton';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const login = () => {
    handleGoogleLogin();
    setIsLogin(true);
  };

  const logout = () => {
    handleLogout();
    setIsLogin(false);
  };

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
        maxWidth="md"
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
                justifyContent: 'end',
              }}
            >
              <Stack direction="row" spacing={2}>
                {isLogin && <DefaultButton name="글쓰기" />}
                <DefaultButton
                  onclick={isLogin ? logout : login}
                  name={isLogin ? '로그아웃' : '로그인'}
                />
              </Stack>
            </Box>
          </Toolbar>
        </AppBar>
        <Typography
          variant="h5"
          sx={{
            paddingTop: 2,
            paddingBottom: 4,
            textAlign: 'center',
            color: 'primary.contrastText',
          }}
        >
          이 문장, 내가 기억할게!
        </Typography>
        <Container>
          <Box
            sx={{
              paddingBottom: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
            }}
          >
            <Box
              sx={{
                paddingBottom: 2,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <TagButton name="한국어" color="#959EA2" />
              <TagButton name="영어" color="#002664" />
              <TagButton name="일본어" color="#bc002d" />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <TagButton name="가사" color="#694ED1" />
              <TagButton name="명언" color="#2EB7CE" />
            </Box>
          </Box>

          <Box
            sx={{
              paddingX: 4,
              paddingY: 2,
              backgroundColor: 'primary.contrastText',
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: 'primary.dark' }}
            >
              한국어 명언
            </Typography>
            <Typography variant="subtitle1" sx={{ color: 'primary.light' }}>
              - 명언 남긴 사람 -
            </Typography>
          </Box>
        </Container>
      </Container>
    </Container>
  );
}

export default App;
