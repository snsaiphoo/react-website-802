import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for hyperlinking

export default function MultiActionAreaCard({ imageUrl, altText, title, description, link }) {
  return (
    <Card
            sx={{ 
            maxWidth: 345,
            transition: 'transform 0.3s',
            '&:hover': {
                transform: 'scale(1.05)'
            }
            }}
        >
      <CardActionArea > {/* Use Link from react-router-dom and pass the link prop */}
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt={altText}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{ fontFamily: 'Trebuchet MS' }}> {/* Change font family here */}
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{ fontFamily: 'Trebuchet MS' }}> {/* Change font family here */}
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button component={Link} to={link} size="small" color="primary">
          LEARN MORE
        </Button>
      </CardActions>
    </Card>
  );
}
