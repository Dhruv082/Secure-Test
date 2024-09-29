import React from 'react';
import { Grid } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import BlankCard from '../../../components/shared/BlankCard';
import Resulttable from './Resulttable'; // Assuming you have the ResultTable component defined
import { useGetResultsQuery } from 'src/slices/examApiSlice';

const Result = () => {
  // Fetch results data from the backend using useGetResultsQuery
  const { data: results, isLoading, isError } = useGetResultsQuery();

  if (isLoading) {
    return <div>Loading...</div>; // You can replace this with a loading spinner component
  }

  if (isError) {
    return <div>Error fetching results.</div>; // You can handle errors more gracefully
  }

  return (
    <PageContainer title="Results" description="List of results">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <BlankCard>
            <Resulttable results={results} />
          </BlankCard>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Result;
