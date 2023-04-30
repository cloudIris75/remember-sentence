import { Box, Typography } from '@mui/material';

interface TagButtonProps {
  name?: string;
  color?: string;
}

const TagButton = ({ name, color }: TagButtonProps) => {
  return (
    <Box
      sx={{
        marginRight: 2,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: 12,
          height: '1',
          backgroundColor: color,
          color: color,
        }}
      >
        Color
      </Box>
      <Typography
        sx={{
          width: 44,
          paddingX: 1,
          textAlign: 'center',
          backgroundColor: 'primary.contrastText',
          color: 'primary.dark',
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};

export default TagButton;
