import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';

import Sidebar from './components/Sidebar';
import OrderTable from './components/OrderTable';
import OrderList from './components/OrderList';
import Header from './components/Header';
import HospitalMangementDash from './container/Hospita-Management-Admin-Agent';

export default function JoyOrderDashboardTemplate() {
  return (
    <HospitalMangementDash>
      
    </HospitalMangementDash>
  );
}