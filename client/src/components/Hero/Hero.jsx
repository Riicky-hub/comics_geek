import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function limitText(text, length) {
  if (!text || !length || text.length <= length) {
    return text;
  }
  const limitted = text.slice(0, length).trim();
  return `${limitted}...`;
}

const Hero = ({ data }) => {
  let goto = useNavigate();
  // console.log(data);
  return (
    <>
      {data ? (
        data.map((hero) => {
          return (
            <Card
              key={hero.id}
              sx={{ maxWidth: 345 }}
              style={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'column' }}
            >
              <CardActionArea>
                <CardMedia
                  component='img'
                  height='140'
                  image={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                  alt='green iguana'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    {hero.name}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {limitText(hero.description.length ? hero.description : 'N/A', 100)}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='primary' onClick={() => goto(`/heroes/${hero.id}`)}>
                  Selecionar
                </Button>
              </CardActions>
            </Card>
          );
        })
      ) : (
        <></>
      )}
    </>
  );
};

export default Hero;
