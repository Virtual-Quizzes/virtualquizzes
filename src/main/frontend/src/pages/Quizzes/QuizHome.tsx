/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import Pagination, { PaginationProps } from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Box, Button, Grid } from '@mui/material';
import usePagination from '@/hooks/usePagination';
import ImgMediaCard from '@/components/Card/Card';
import SearchInput from '@/components/Search/Search';
import { JSX } from 'react/jsx-runtime';

const data = [
  {
    id: '231',
    title: 'Test 1',
  },
  {
    id: '232',
    title: 'Test 2',
  },
  {
    id: '233',
    title: 'Test 3',
  },
  {
    id: '234',
    title: 'Test 1',
  },
  {
    id: '235',
    title: 'Test 2',
  },
  {
    id: '236',
    title: 'Test 3',
  },
  {
    id: '237',
    title: 'Test 1',
  },
  {
    id: '238',
    title: 'Test 2',
  },
  {
    id: '239',
    title: 'Test 3',
  },
  {
    id: '241',
    title: 'Test 1',
  },
  {
    id: '242',
    title: 'Test 2',
  },
  {
    id: '243',
    title: 'Test 3',
  },
  {
    id: '244',
    title: 'Test 1',
  },
  {
    id: '245',
    title: 'Test 2',
  },
];

export default function PaginationOutlined(props: JSX.IntrinsicAttributes & PaginationProps) {
  return (
    <Stack spacing={2}>
      <Pagination count={10} variant="outlined" color="secondary" {...props} />
    </Stack>
  );
}
export const QuizHome = () => {
  const [page, setPage] = useState(1);
  const PER_PAGE = 3;

  const count = Math.ceil(data.length / PER_PAGE);
  const _DATA = usePagination(data, PER_PAGE);

  const handleChange = (e: any, p: number) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <Box
      sx={{
        bgcolor: 'white',
        borderRadius: '10px',
        boxShadow: 'rgb(220,220,220,.5) 5px 5px 10px',
        padding: '12px 24px',
        my: 5,
        py: 5,
      }}
    >
      <Box minHeight={`calc(100vh - 250px)`} display={'flex'} flexDirection={'column'}>
        <Grid container spacing={2} alignItems={'center'} paddingBottom={'32px'} paddingX={6}>
          <Grid item xs>
            <SearchInput />
          </Grid>
          <Grid item>
            <Button onClick={() => {}} variant={'contained'} color={'primary'}>
              Añadir Texto
            </Button>
          </Grid>
        </Grid>
        <Box display={'flex'} justifyContent={'center'} flex={1} sx={{ gap: 3, mb: 3, flexWrap: 'wrap' }}>
          {_DATA.currentData().map((ele: { id: React.Key }, index: number) => {
            return <ImgMediaCard key={ele.id} index={index} />;
          })}
        </Box>
        <Box display={'flex'} justifyContent={'center'}>
          <PaginationOutlined
            count={count}
            //  size="large"
            page={page}
            //  variant="outlined"
            //  shape="rounded"
            onChange={handleChange}
          />
        </Box>
      </Box>
    </Box>
  );
};
