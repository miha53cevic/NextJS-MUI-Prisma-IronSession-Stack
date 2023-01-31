import * as React from 'react';
import { Paper, Stack, Container, Typography } from '@mui/material';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';

export default function Home() {
    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh'
        }}>
            <Paper sx={{ padding: '2rem' }}>
                <Stack direction='column' alignItems='center' spacing='1rem'>
                    <Typography variant="h4">
                        MUI v5 + Next.js + Prisma + Iron-Session with TypeScript example
                    </Typography>
                    <AccessibleForwardIcon fontSize='large' />
                </Stack>
            </Paper>
        </Container>
    );
}
