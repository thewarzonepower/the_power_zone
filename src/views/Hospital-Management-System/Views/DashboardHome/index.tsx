import React from "react";
import { AspectRatio, Box, Breadcrumbs, Button, Card, CardContent, CardOverflow, Grid, Link, Typography } from "@mui/joy";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import { Hotel, Person2, Attribution, Woman2, Vaccines, Science, Badge, HelpCenter } from '@mui/icons-material';

import { TotalCount } from '../../../../utils/data'

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

const DashboardHome: React.FC<Props> = ({ }) => {
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
                    Dashboard
                </Typography>
                {/* <Button
                    color="primary"
                    startDecorator={<DownloadRoundedIcon />}
                    size="sm"
                >
                    Download PDF
                </Button> */}
            </Box>
            <Grid container spacing={2} direction="row">
                {TotalCount.map((data: any, index: any) => {
                    return (
                        <Grid xs={12} sm={6} md={3} xl={3} lg={3}>
                            <Card orientation="horizontal" variant="outlined" sx={{ width: "100%" }}>
                                <CardContent>
                                    <Typography fontWeight="md" textColor="success.plainColor">
                                        {data?.count}
                                    </Typography>
                                    <Typography level="body-sm">{data?.title}</Typography>
                                </CardContent>
                                <CardOverflow>
                                    <AspectRatio ratio="1" sx={{ width: 90 }}>
                                        {IconList[index]}
                                    </AspectRatio>
                                </CardOverflow>
                            </Card>
                        </Grid>
                    )
                })}


            </Grid>
        </Box>
    )
}

export default DashboardHome