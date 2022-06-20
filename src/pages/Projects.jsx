import { Container, Grid, Link, Typography } from "@mui/material"
import { useEffect } from "react"
import { useState } from "react"


const Projects = ({ userName }) => {
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`https://api.github.com/users/${userName}/repos`)
      const result = await data.json()
      if (result) {
        setProjects(result)
        setLoading(false)
      }
    }
    fetchData()
  }, [userName])

  return (
    <Container fixed>
      <Typography variant='h2'>Projects</Typography>
      {loading ? (
        <Typography variant="body1">Loading...</Typography>
      ) : (
        <Grid container spacing={2}>
          {projects.map((project) => (
            <>
              <Grid item xs={6}>
                {project.name}
              </Grid>
              <Grid item xs={6}>
                <Link href={project.html_url} rel='noopener' target='_blank'>
                  {project.html_url}
                </Link>
              </Grid>
            </>
          ))}
        </Grid>
      )}
    </Container>
  )
}

export default Projects