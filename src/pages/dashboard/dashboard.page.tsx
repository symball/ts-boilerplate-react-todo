import {
  Avatar,
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { AsyncWrapper, DashboardLayout, RequireAuth, RouterLink } from '@components';
import { postsListSelector } from '@store';
import { useRecoilValue } from 'recoil';
import { Clear, Done } from '@mui/icons-material';

const PostsTable = () => {
  const postsList = useRecoilValue(postsListSelector);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="Posts">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Published</TableCell>
            <TableCell>Summary</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {postsList.map((post) => (
            <TableRow key={post.id}>
              <TableCell component="th" scope="row">
                {post.title}
              </TableCell>
              <TableCell>{post.published ? <Done /> : <Clear />}</TableCell>
              <TableCell>{post.summary}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

// Error page for use with react-router
export const Dashboard = () => {
  const { t } = useTranslation();
  return (
    <RequireAuth>
      <DashboardLayout>
        <Container component="main" maxWidth="sm">
          <AsyncWrapper>
            <PostsTable />
          </AsyncWrapper>
        </Container>
      </DashboardLayout>
    </RequireAuth>
  );
};
