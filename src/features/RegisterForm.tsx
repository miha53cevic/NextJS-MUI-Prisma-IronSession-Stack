import * as React from 'react';
import { Paper, Stack } from '@mui/material';
import { ControlledOutlineTextfield } from '../components/ControlledTextfield';
import { useForm } from 'react-hook-form';

export interface IRegisterForm {
    email: string,
    name: string,
    password: string,
};

const RegisterForm: React.FC = () => {

    const { control, handleSubmit } = useForm<IRegisterForm>();

    const onSubmit = async (data: IRegisterForm) => {
        console.log(data);
    };

    return (
        <Paper sx={{ padding: '2rem' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack direction='column' alignItems='center' spacing='1rem'>
                    <ControlledOutlineTextfield name='email' control={control} defaultVal='' variant={'outlined'} />
                    <ControlledOutlineTextfield name='name' control={control} defaultVal='' variant={'outlined'} />
                    <ControlledOutlineTextfield name='password' type='password' control={control} defaultVal='' variant={'outlined'} />
                </Stack>
            </form>
        </Paper>
    );
};

export default RegisterForm;