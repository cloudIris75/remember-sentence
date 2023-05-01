import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './services/firebase';

const languages = [
  { value: 'Korean', label: '한국어' },
  { value: 'English', label: '영어' },
  { value: 'Japanese', label: '일본어' },
  { value: 'Chinese', label: '중국어' },
  { value: 'etc', label: '기타' },
];

const categories = [
  { value: 'lyrics', label: '가사' },
  { value: 'famousSaying', label: '명언' },
  { value: 'conversation', label: '회화' },
  { value: 'etc', label: '기타' },
];

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(() => {
      setIsLogin(true);
    });
  };

  const handleLogout = () => {
    auth.signOut().then(() => {
      setIsLogin(false);
    });
  };

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        width: '1',
        height: '1',
        backgroundColor: 'primary.dark',
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
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'end',
          }}
        >
          <Stack direction="row" spacing={2}>
            {isLogin && (
              <Button onClick={handleClickOpen} variant="outlined">
                글쓰기
              </Button>
            )}
            <Button
              onClick={isLogin ? handleLogout : handleGoogleLogin}
              variant="outlined"
            >
              {isLogin ? '로그아웃' : '로그인'}
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Dialog open={isOpen} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>글쓰기</DialogTitle>
        <DialogContent>
          <TextField
            id="outlined-select-language"
            select
            margin="normal"
            label="언어"
            defaultValue="Korean"
            helperText="언어를 선택하세요."
            sx={{ marginRight: 2 }}
          >
            {languages.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-category"
            select
            margin="normal"
            label="분류"
            defaultValue="lyrics"
            helperText="분류를 선택하세요."
          >
            {categories.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            required
            autoFocus
            multiline
            fullWidth
            margin="normal"
            id="sentence"
            label="문장"
            variant="standard"
          />
          <TextField
            multiline
            fullWidth
            margin="normal"
            id="memo"
            label="메모"
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: 'primary.dark' }}>
            취소
          </Button>
          <Button onClick={handleClose} sx={{ color: 'primary.dark' }}>
            저장
          </Button>
        </DialogActions>
      </Dialog>
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
      <Box
        sx={{
          paddingBottom: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
        }}
      >
        <ButtonGroup
          variant="outlined"
          aria-label="outlined primary button group"
          sx={{ paddingBottom: 2 }}
        >
          <Button>한국어</Button>
          <Button>영어</Button>
          <Button>일본어</Button>
        </ButtonGroup>
        <ButtonGroup
          variant="outlined"
          aria-label="outlined primary button group"
        >
          <Button>가사</Button>
          <Button>명언</Button>
          <Button>회화</Button>
          <Button>기타</Button>
        </ButtonGroup>
      </Box>
      <Box
        sx={{
          paddingX: 4,
          paddingY: 2,
          backgroundColor: 'primary.contrastText',
        }}
      >
        <Typography variant="h6" gutterBottom sx={{ color: 'primary.dark' }}>
          한국어 명언
        </Typography>
        <Typography variant="subtitle1" sx={{ color: 'primary.light' }}>
          - 명언 남긴 사람 -
        </Typography>
      </Box>
    </Container>
  );
}

export default App;
