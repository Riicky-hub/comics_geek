import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';

export default function InputSubscription() {
  const [data, setData] = React.useState({
    email: '',
    status: 'initial',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setData((current) => ({ ...current, status: 'loading' }));
    try {
      // Replace timeout with real backend operation
      setTimeout(() => {
        setData({ email: '', status: 'sent' });
      }, 1500);
    } catch (error) {
      setData((current) => ({ ...current, status: 'failure' }));
    }
  };

  return (
    <form onSubmit={handleSubmit} id='demo'>
      <FormControl>
        <FormLabel
          sx={(theme) => ({
            '--FormLabel-color': theme.vars.palette.primary.plainColor,
          })}
        ></FormLabel>
        <Input
          variant='plain'
          color='danger'
          sx={{ '--Input-decorator-childHeight': '45px' }}
          placeholder='Newsletter...'
          type='email'
          required
          value={data.email}
          onChange={(event) => setData({ email: event.target.value, status: 'initial' })}
          error={data.status === 'failure'}
          endDecorator={
            <Button
              variant='solid'
              color='danger'
              loading={data.status === 'loading'}
              type='submit'
              sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
            >
              Assinar
            </Button>
          }
        />
        {data.status === 'failure' && (
          <FormHelperText sx={(theme) => ({ color: theme.vars.palette.danger[400] })}>
            Oops! Algo deu errado, tente novamente mais tarde.
          </FormHelperText>
        )}

        {data.status === 'sent' && (
          <FormHelperText sx={(theme) => ({ color: theme.vars.palette.success[400] })}>
            Você se inscreveu com sucesso!
          </FormHelperText>
        )}
      </FormControl>
    </form>
  );
}
