import { Box } from '@mui/material';

interface DefaultButtonProps {
  name?: string;
  onclick?: () => void;
}

const DefaultButton = ({ name, onclick }: DefaultButtonProps) => {
  return (
    <Box
      onClick={onclick}
      sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
    >
      <Box
        sx={{
          width: 16,
          height: '1',
          backgroundColor: 'primary.contrastText',
          color: 'primary.contrastText',
          borderTopLeftRadius: '50%',
          borderBottomLeftRadius: '50%',
        }}
      >
        Color
      </Box>
      <Box
        sx={{
          paddingX: 1.6,
          paddingY: 0.8,
          backgroundColor: 'primary.main',
          color: 'primary.dark',
        }}
      >
        {name}
      </Box>
    </Box>
  );
};

export default DefaultButton;
