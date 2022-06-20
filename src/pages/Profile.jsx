import { Avatar, Box, Link, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"


const Profile = ({ userName }) => {
  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState({})
  useEffect(() => {
    const fetchData = async () => {
      const profile = await fetch(`https://api.github.com/users/${userName}`)
      const result = await profile.json()
      if (result) {
        setProfile(result)
        setLoading(false)
      }
    }
    fetchData()
  }, [userName])

  return (
    <div>
      <h2>About me</h2>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <Box sx={{ width: "100%" }}>
          <Stack
            spacing={2}
            justifyContent="center"
          >
            <Box sx={{ m: '0 auto 0' }}>
              <Avatar alt={profile.name} src={profile.avatar_url} />
            </Box>
            <Typography>
              avatar_url:
              <Link href={profile.avatar_url} >
                {profile.avatar_url}
              </Link>
            </Typography>
            <Typography>
              html_url:
              <Link href={profile.html_url} >
                {profile.html_url}
              </Link>
            </Typography>
            <Typography>
              repos_url:
              <Link href={profile.repos_url} >
                {profile.repos_url}
              </Link>
            </Typography>
          </Stack>
        </Box>
      )}
    </div>
  );
}

export default Profile