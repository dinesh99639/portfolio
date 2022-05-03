import { darkTheme, lightTheme } from '../Theme';

import { Grid, Box, Typography, Paper, Tooltip, IconButton } from "@mui/material";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';

const terminalDefaultValue = `
1   const props = {
2           name: "Dinesh Somaraju",
3           hobbies: [
4                   "Competitve Programming",
5                   "Listening Songs",
6                   "Development"
7           ]
8   }
`;

function Feature(props) {
  const { theme, title, description, Icon } = props
  return (<Grid item xs={3} sx={{ padding: "10px", display: "flex", justifyContent: "center" }} >
    <Paper
      elevation={2}
      sx={{
        width: "100%",
        maxWidth: "280px",
        height: "250px",
        borderRadius: "5px",
        backgroundColor: (theme === "dark") ? darkTheme.backgroundColor : lightTheme.backgroundColor,
        color: "inherit",
        padding: "10px 5px"
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100px"
        }}
      >
        <Box
          sx={{
            backgroundColor: "#1c88f4c9",
            borderRadius: "50%",
            padding: "25px"
          }}
        >
          <Icon style={{ fontSize: "40px", color: "white" }} />
        </Box>
      </Box>
      <Typography
        sx={{
          textAlign: "center",
          marginTop: "10px",
          fontWeight: "bold"
        }}
      >{title}</Typography>
      <Typography sx={{ padding: "5px 10px", fontSize: "14px", textAlign: "center" }} >{description}</Typography>
    </Paper>
  </Grid>);
}

function Home(props) {
  const isDesktop = window.innerWidth > 760;
  const { theme } = props;

  return (<>
    {(isDesktop) ? <>
      <Box sx={{ height: "40vw" }} >
        <Grid container sx={{ position: "relative" }} >
          <Grid item xs={6}>
            <Box
              sx={{
                padding: "60px 60px"
              }}
            >
              <Typography
                sx={{
                  fontSize: "25px"
                }}
              >Dinesh Somaraju</Typography>
              <Typography
                sx={{
                  fontSize: "13px",
                  opacity: 0.76
                }}
              >Digital Specialist Engineer, Infosys</Typography>
              <Typography
                sx={{
                  fontSize: "13px",
                  margin: "10px 0",
                  textAlign: "justify"
                }}
              >
                Hi, I'm Dinesh Somaraju, a Full Stack Developer from India. I'm currently working at Infosys. I love development.
              </Typography>

              <Box sx={{ marginLeft: "-8px" }} >
                <Tooltip title="Github" arrow>
                  <IconButton href="https://github.com/dinesh99639/GSecureLock" target="_blank">
                    <GitHubIcon sx={{ color: (theme === "dark") ? "rgba(255, 255, 255, 0.76)" : "" }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Linkedin" arrow>
                  <IconButton href="https://www.linkedin.com/in/dinesh-somaraju/" target="_blank">
                    <LinkedInIcon sx={{ color: (theme === "dark") ? "rgba(255, 255, 255, 0.76)" : "" }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Resume" arrow>
                  <IconButton href="#" target="_blank">
                    <ArticleIcon sx={{ color: (theme === "dark") ? "rgba(255, 255, 255, 0.76)" : "" }} />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px"
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  backgroundColor: (theme === "dark") ? darkTheme.backgroundColor : lightTheme.backgroundColor,
                  color: "inherit",
                  height: "250px",
                  width: "430px",
                  borderRadius: "5px"
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    height: "22px",
                    width: "100%",
                    display: "flex",
                    alignItems: "center"
                  }}
                >
                  <Box sx={{
                    backgroundColor: (theme === "dark") ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)",
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    zIndex: -1
                  }} ></Box>

                  <Box sx={{ borderRadius: "50%", height: "10px", width: "10px", backgroundColor: "red", margin: "auto 5px" }} ></Box>
                  <Box sx={{ borderRadius: "50%", height: "10px", width: "10px", backgroundColor: "#ffc400", margin: "auto 5px" }} ></Box>
                  <Box sx={{ borderRadius: "50%", height: "10px", width: "10px", backgroundColor: "#00fe00", margin: "auto 5px" }} ></Box>
                </Box>
                <Box sx={{ height: "93%" }}>
                  <Typography
                    component='pre'
                    sx={{
                      margin: "0 20px",
                      fontSize: "14px",
                      counterIncrement: 'line'
                    }}
                  >{terminalDefaultValue}</Typography>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ padding: "20px 0" }} ></Box>
      </Box>
    </> : <>
      Mobile version of the app will be launched soon
    </>}
  </>);
}

export default Home;