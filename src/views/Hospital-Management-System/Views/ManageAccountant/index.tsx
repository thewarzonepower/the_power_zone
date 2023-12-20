import React from "react";
import { AspectRatio, Avatar, Box, Breadcrumbs, Button, Card, CardContent, CardOverflow, FormControl, FormLabel, Grid, Input, Link, Select, Typography } from "@mui/joy";
import Option from '@mui/joy/Option';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import SearchIcon from '@mui/icons-material/Search';
import { Hotel, Person2, Attribution, Woman2, Vaccines, Science, Badge, HelpCenter } from '@mui/icons-material';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import { patientList } from "../../../../utils/data";

const IconList = [
    <Person2 />,
    <Hotel />,
    <Attribution />,
    <Woman2 />,
    <Vaccines />,
    <Science />,
    <Badge />,
    <HelpCenter />,
]
interface Props {

}

const LaboratoristDash: React.FC<Props> = ({ }) => {
    const renderFilters = () => (
        <React.Fragment>
          <FormControl size="sm">
            <FormLabel>Status</FormLabel>
            <Select
              size="sm"
              placeholder="Filter by status"
              slotProps={{ button: { sx: { whiteSpace: 'nowrap' } } }}
            >
              <Option value="paid">Paid</Option>
              <Option value="pending">Pending</Option>
              <Option value="refunded">Refunded</Option>
              <Option value="cancelled">Cancelled</Option>
            </Select>
          </FormControl>
          <FormControl size="sm">
            <FormLabel>Category</FormLabel>
            <Select size="sm" placeholder="All">
              <Option value="all">All</Option>
              <Option value="refund">Refund</Option>
              <Option value="purchase">Purchase</Option>
              <Option value="debit">Debit</Option>
            </Select>
          </FormControl>
       
        </React.Fragment>
      );
    return (
        <Box
            component="main"
            className="MainContent"
            sx={{
                px: { xs: 2, md: 6 },
                pt: {
                    xs: 'calc(12px + var(--Header-height))',
                    sm: 'calc(12px + var(--Header-height))',
                    md: 3,
                },
                pb: { xs: 2, sm: 2, md: 3 },
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                minWidth: 0,
                height: '100dvh',
                gap: 1,
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Breadcrumbs
                    size="sm"
                    aria-label="breadcrumbs"
                    separator={<ChevronRightRoundedIcon />}
                    sx={{ pl: 0 }}
                >
                   <Link
                        underline="none"
                        color="neutral"
                        href="/"
                        aria-label="Home"
                    >
                        <HomeRoundedIcon />
                    </Link>
                    <Link
                        underline="hover"
                        color="neutral"
                        href="/"
                        fontSize={12}
                        fontWeight={500}
                    >
                        Dashboard
                    </Link>
                    <Typography color="primary" fontWeight={500} fontSize={12}>
                    Accountant
                    </Typography>
                </Breadcrumbs>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    mb: 1,
                    gap: 1,
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: { xs: 'start', sm: 'center' },
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                }}
            >
                <Typography level="h2" component="h1">
                    Manage Accountant
                </Typography>
                <Button
                    color="primary"
                    startDecorator={<DownloadRoundedIcon />}
                    size="sm"
                >
                    Add Accountant
                </Button>
            </Box>
            <Box
                className="SearchAndFilters-tabletUp"
                sx={{
                    borderRadius: 'sm',
                    py: 2,
                    display: { xs: 'flex', sm: 'flex' },
                    flexWrap: 'wrap',
                    gap: 1.5,
                    '& > *': {
                        minWidth: { xs: '120px', md: '160px' },
                    },
                }}
            >
                <FormControl sx={{ flex: 1 }} size="sm">
                    <FormLabel>Search laboratorist by name</FormLabel>
                    <Input size="sm" placeholder="Search" startDecorator={<SearchIcon />} />
                </FormControl>
                {renderFilters()}
            </Box>
            <Sheet
                className="OrderTableContainer"
                variant="outlined"
                sx={{
                    display: { xs: 'initial', sm: 'initial' },
                    width: '100%',
                    borderRadius: 'sm',
                    flexShrink: 1,
                    overflow: 'auto',
                    minHeight: 0,
                }}
            >

                <Table
                    aria-labelledby="tableTitle"
                    stickyHeader
                    hoverRow
                    sx={{
                        '--TableCell-headBackground': 'var(--joy-palette-background-level1)',
                        '--Table-headerUnderlineThickness': '1px',
                        '--TableRow-hoverBackground': 'var(--joy-palette-background-level1)',
                        '--TableCell-paddingY': '4px',
                        '--TableCell-paddingX': '8px',
                    }}
                >
                    <thead>
                        <tr>
                            <th style={{ width: 48, textAlign: 'center', padding: '12px 6px' }}>#</th>
                            <th style={{ width: 90, padding: '12px 6px' }}>Profile</th>
                            <th style={{ width: 90, padding: '12px 6px' }}>Name</th>
                            <th style={{ width: 90, padding: '12px 6px' }}>Gender</th>
                            <th style={{ width: 90, padding: '12px 6px' }}>Age</th>
                            <th style={{ width: 90, padding: '12px 6px' }}>Bload Group</th>
                            <th style={{ width: 90, padding: '12px 6px' }}>Mobile</th>
                            <th style={{ width: 90, padding: '12px 6px' }}>City</th>
                            <th style={{ width: 90, padding: '12px 6px' }}>Date</th>
                            <th style={{ width: 90, padding: '12px 6px' }}>Time</th>
                            <th style={{ width: 90, padding: '12px 6px' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patientList.map((row: any) => (
                            <tr key={row.id}>
                                <td>
                                    <Typography level="body-xs">
                                        {row.id}
                                    </Typography>
                                </td>
                                <td>
                                    <Typography level="body-xs">
                                        <Avatar src="/static/images/avatar/1.jpg" />
                                    </Typography>
                                </td>
                                <td>
                                    <Typography level="body-xs">
                                        {row.name}
                                    </Typography>
                                </td>
                                <td>
                                    <Typography level="body-xs">
                                        {row.gender}
                                    </Typography>
                                </td>
                                <td>
                                    <Typography level="body-xs">
                                        {row.age}
                                    </Typography>
                                </td>
                                <td>
                                    <Typography level="body-xs">
                                        {row.bloadGroup}
                                    </Typography>
                                </td>
                                <td>
                                    <Typography level="body-xs">
                                        {row.mobile}
                                    </Typography>
                                </td>
                                <td>
                                    <Typography level="body-xs">
                                        {row.city}
                                    </Typography>
                                </td>
                                <td>
                                    <Typography level="body-xs">
                                        {row.dateOfEntry}
                                    </Typography>
                                </td>
                                <td>
                                    <Typography level="body-xs">
                                        {row.time}
                                    </Typography>
                                </td>
                                <td>
                                    <Box sx={{ display: 'flex', gap: 1 }}>
                                        <Button size="sm" variant="solid" color="success">
                                            <EditNoteIcon />
                                        </Button>
                                        <Button size="sm" variant="solid" color="danger">
                                            <DeleteIcon/>
                                        </Button>
                                    </Box>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Sheet>
        </Box>
    )
}

export default LaboratoristDash