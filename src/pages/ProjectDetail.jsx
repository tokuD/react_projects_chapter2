import { Container, Typography, Grid, Link } from "@mui/material"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"

const ProjectDetail = ({ userName }) => {
  const [loading, setLoading] = useState(true)
  const [project, setProject] = useState({})
  const { name } = useParams()
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`https://api.github.com/repos/${userName}/${name}`)
      const result = await data.json()
      if (result) {
        setProject(result)
        setLoading(false)
      }
    }
    if (userName && name) fetchData()
  }, [userName, name])

  return (
    <Container>
      <h2>Project: {project.name}</h2>
      {loading ? (
        <Typography variant='body1'>Loading...</Typography>
      ) : (
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
      )}
    </Container>
  )
}

export default ProjectDetail