import React from 'react';
import '../styles/style.css';
import { ListItem, List, Typography, Card, Box, CardActionArea, CardMedia, CardContent, Divider, CardActions, Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

function MainPage() {
    const content = [
        { ContentID: '1', JobTitle: "Software Engineer", Company: "Apple", Pay: "310K", Location: "New York, USA", InterviewTime: "2022/12/01 6:00pm", Duration: "60mins" },
        { ContentID: '2', JobTitle: "Software Engineer", Company: "Amazon", Pay: "250K", Location: "Vancouver, CA", InterviewTime: "2022/12/09 3:00pm", Duration: "60mins" },
        { ContentID: '3', JobTitle: "Software Engineer", Company: "Netflix", Pay: "280K", Location: "Sunnyvale, USA", InterviewTime: "2022/11/28 1:00pm", Duration: "60mins" }

    ]
    return (
        <div>
            <section class="bg-white dark:bg-white-900">
                <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div class="mr-auto place-self-center lg:col-span-7">
                        <h1 class="hero-header max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-black">Welcome Back Sandip!</h1>

                    </div>

                    <div class="hero-image lg:mt-0 lg:col-span-5 lg:flex">
                        {/* <img src={require('../assets/phone-mockup.png')} /> */}

                        <svg class="absolute -left-40 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>

                    </div>
                </div>
            </section>

            {/* <div>
                <a href="#" class="learn-more-hero ml-40 mb-10 pl-25 items-center justify-center px-5 py-3 text-2xl font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-black dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            Get Started
                </a> 
                </div> */}
            <div>

                <a href="#" class="learn-more-hero ml-40 mt-10 pl-25 items-center justify-center px-5 py-3 text-2xl font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-black dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    Interview Requests
                </a>
            </div>
            <Divider sx={{ marginBottom: "20px", marginTop: "50px" }}></Divider>
            <Box sx={{ marginLeft: "35px", paddingLeft: "70px" }}>

                <List>

                    {content.map((text, index) => (

                        <ListItem key={text.ContentID} sx={{ maxWidth: "1000px", width: "1000px", marginLeft: "50px" }}>




                            <Card sx={{ maxWidth: "1000px", width: "1000px", padding: "10px", marginBottom: "10px" }}>

                                <CardActionArea>

                                    <CardContent>
                                        {/* <Box sx={{ display: '-ms-inline-flexbox' }}> */}

                                            <Box sx={{ marginLeft: "12%",  }}>

                                            {text.ContentID=='1'&&<img display="inline-block" width="25" height="25" src='https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg'></img>}
                                            {text.ContentID=='2'&&<img display="inline-block" width="45" height="45" src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'></img>}
                                            {text.ContentID=='3'&&<img display="inline-block" width="45" height="45" src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'></img>}
  
                                            </Box>
                                            <Box sx={{ marginLeft: "91%", }}>

                                                <Badge color="secondary" badgeContent={1} max={999}>
                                                    <MailIcon />
                                                </Badge>
                                            </Box>
                                        {/* </Box> */}
                                        <Box sx={{ typography: 'body1', display: "-ms-inline-flexbox", marginTop: "-52px" }}>
                                            <Box sx={{ fontFamily: "calibri", paddingBottom: "8px" }}>
                                                <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: "bold", fontSize: "1.5rem" }}>{text.Company}</Typography>                                            
                                            </Box>
                                        </Box>




                                        <Divider sx={{ marginTop: "15px"}}/>

                                        <Typography variant="body1" color="text.secondary">
                                            {text.JobTitle}
                                        </Typography>

                                        <Typography variant="body1" color="text.secondary">
                                            {text.Location}
                                        </Typography>


                                        <Typography variant="body2" color="text.secondary">
                                            Pay: {text.Pay}
                                        </Typography>

                                        <Typography variant="body2" color="text.secondary">
                                            Time: {text.InterviewTime}
                                        </Typography>

                                        <Typography variant="body2" color="text.secondary">
                                            Duration: {text.Duration}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        See Details
                                    </Button>
                                    <Button size="small" color="primary">
                                        Share
                                    </Button>
                                </CardActions>
                            </Card>
                        </ListItem>
                    ))}
                </List>
            </Box>


            {/* <div class="w-48 text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <button type="button" class="inline-flex relative items-center py-2 px-4 w-full text-sm font-medium rounded-t-lg border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                        <svg aria-hidden="true" class="mr-2 w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                        Profile
                    </button>
                    <button type="button" class="inline-flex relative items-center py-2 px-4 w-full text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                        <svg aria-hidden="true" class="mr-2 w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>
                        Settings
                    </button>
                    <button type="button" class="inline-flex relative items-center py-2 px-4 w-full text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                        <svg aria-hidden="true" class="mr-2 w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clip-rule="evenodd"></path></svg>
                        Messages
                    </button>
                    <button type="button" class="inline-flex relative items-center py-2 px-4 w-full text-sm font-medium rounded-b-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                        <svg aria-hidden="true" class="mr-2 w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clip-rule="evenodd"></path></svg>
                        Download
                    </button>
                </div> */}

        </div>
    );
}

export default MainPage;
