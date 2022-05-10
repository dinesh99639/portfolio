import { darkTheme, lightTheme } from "../Theme";
import projects from "../data/projects.json";

import {
  Grid,
  Box,
  Typography,
  Paper,
  Tooltip,
  IconButton,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArticleIcon from "@mui/icons-material/Article";

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

const skills = [
  { label: "HTML", img: require("../assets/skills/html5.svg").default },
  { label: "CSS", img: require("../assets/skills/css3.svg").default },
  { label: "JavaScript", img: require("../assets/skills/javascript.svg").default },
  { label: "jQuery", img: require("../assets/skills/jquery.svg").default },
  { label: "BootStrap", img: require("../assets/skills/bootstrap.svg").default },
  { label: "php", img: require("../assets/skills/php.svg").default },
  { label: "MySQL", img: require("../assets/skills/mysql.svg").default },
  { label: "NodeJS", img: require("../assets/skills/nodejs.svg").default },
  { label: "React", img: require("../assets/skills/react.svg").default },
  { label: "ExpressJS", img: require("../assets/skills/expressjs.svg").default },
  { label: "MongoDB", img: require("../assets/skills/mongodb.svg").default },
  { label: "Java", img: require("../assets/skills/java.svg").default },
  { label: "Python", img: require("../assets/skills/python.svg").default },
  { label: "Git", img: require("../assets/skills/git.svg").default },
];

const Intro = ({ theme }) => {
  return (
    <>
      <Grid container sx={{ position: "relative" }}>
        <Grid item xs={6}>
          <Box
            sx={{
              padding: "60px 60px",
            }}
          >
            <Typography
              sx={{
                fontSize: "25px",
              }}
            >
              Dinesh Somaraju
            </Typography>
            <Typography
              sx={{
                fontSize: "13px",
                opacity: 0.76,
              }}
            >
              Digital Specialist Engineer, Infosys
            </Typography>
            <Typography
              sx={{
                fontSize: "13px",
                margin: "10px 0",
                textAlign: "justify",
              }}
            >
              Hi, I'm Dinesh Somaraju, a Full Stack Developer from India. I'm
              currently working at Infosys. I love development.
            </Typography>

            <Box sx={{ marginLeft: "-8px" }}>
              <Tooltip title="Github" arrow>
                <IconButton
                  href="https://github.com/dinesh99639/GSecureLock"
                  target="_blank"
                >
                  <GitHubIcon
                    sx={{
                      color:
                        theme === "dark" ? "rgba(255, 255, 255, 0.76)" : "",
                    }}
                  />
                </IconButton>
              </Tooltip>
              <Tooltip title="Linkedin" arrow>
                <IconButton
                  href="https://www.linkedin.com/in/dinesh-somaraju/"
                  target="_blank"
                >
                  <LinkedInIcon
                    sx={{
                      color:
                        theme === "dark" ? "rgba(255, 255, 255, 0.76)" : "",
                    }}
                  />
                </IconButton>
              </Tooltip>
              <Tooltip title="Resume" arrow>
                <IconButton href="#" target="_blank">
                  <ArticleIcon
                    sx={{
                      color:
                        theme === "dark" ? "rgba(255, 255, 255, 0.76)" : "",
                    }}
                  />
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
              padding: "20px",
            }}
          >
            <Paper
              elevation={3}
              sx={{
                backgroundColor:
                  theme === "dark"
                    ? darkTheme.backgroundColor
                    : lightTheme.backgroundColor,
                color: "inherit",
                height: "250px",
                width: "430px",
                borderRadius: "5px",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  height: "22px",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    backgroundColor:
                      theme === "dark"
                        ? "rgba(255, 255, 255, 0.05)"
                        : "rgba(0, 0, 0, 0.05)",
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    zIndex: -1,
                  }}
                ></Box>

                <Box
                  sx={{
                    borderRadius: "50%",
                    height: "10px",
                    width: "10px",
                    backgroundColor: "red",
                    margin: "auto 5px",
                  }}
                ></Box>
                <Box
                  sx={{
                    borderRadius: "50%",
                    height: "10px",
                    width: "10px",
                    backgroundColor: "#ffc400",
                    margin: "auto 5px",
                  }}
                ></Box>
                <Box
                  sx={{
                    borderRadius: "50%",
                    height: "10px",
                    width: "10px",
                    backgroundColor: "#00fe00",
                    margin: "auto 5px",
                  }}
                ></Box>
              </Box>
              <Box sx={{ height: "93%" }}>
                <Typography
                  component="pre"
                  sx={{
                    margin: "0 20px",
                    fontSize: "14px",
                    counterIncrement: "line",
                  }}
                >
                  {terminalDefaultValue}
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

const Skills = ({ theme }) => {
  return (
    <>
      <Typography
        sx={{ textAlign: "center", fontSize: "18px", margin: "15px 0 0 0" }}
      >
        Skills
      </Typography>
      <Grid
        container
        sx={{
          padding: "0",
          margin: "0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {skills.map((skill, index) => {
          return (
            <img
              key={"skill" + index}
              alt={skill.label}
              src={skill.img}
              style={{
                width: "15%",
                maxWidth: "60px",
                margin: "10px 30px",
                filter:
                  theme === "dark"
                    ? "brightness(0%) invert(100%)"
                    : "grayscale(100%)",
                opacity: "0.76",
              }}
            />
          );
        })}
      </Grid>
    </>
  );
};

const Projects = ({ theme }) => {
  return (
    <>
      <Typography
        sx={{ textAlign: "center", fontSize: "18px", margin: "15px 0 0 0" }}
      >
        Projects
      </Typography>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-around",
          padding: "20px",
        }}
      >
        {projects.map((project, index) => {
          return (
            <Box key={"project" + index}>
              <Paper
                elevation={3}
                sx={{
                  height: "350px",
                  width: "300px",
                  backgroundColor:
                    theme === "dark" ? "#404040" : lightTheme.backgroundColor,
                  color: "inherit",
                  margin: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={require("../assets/DefaultProject.svg").default}
                    alt={"Default"}
                    style={{
                      width: "40%",
                      filter:
                        theme === "dark"
                          ? "brightness(0%) invert(100%)"
                          : "grayscale(100%)",
                      opacity: "0.76",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    textAlign: "center",
                    padding: "7px 10px"
                  }}
                >
                  <Typography sx={{ margin: "8px 0", fontWeight: "bold" }}>{project.name}</Typography>
                  <Typography sx={{ fontSize: "13px" }}>{project.desc}</Typography>
                </Box>
              </Paper>
            </Box>
          );
        })}
      </Grid>
    </>
  );
};

function Home(props) {
  const isDesktop = true || window.innerWidth > 760;
  const { theme } = props;

  return (
    <>
      {isDesktop ? (
        <>
          <Box sx={{ height: "40vw" }}>
            <Intro theme={theme} />
            <Skills theme={theme} />
            <Projects theme={theme} />

            <Box sx={{ padding: "20px 0" }}></Box>
          </Box>
        </>
      ) : (
        <>Mobile version of the app will be launched soon</>
      )}
    </>
  );
}

export default Home;
