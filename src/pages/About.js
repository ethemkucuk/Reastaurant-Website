import { Box, Typography } from '@mui/material'
import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <>
      <Layout>
        <Box sx={{
          my:12,
          textAlign: "center",
          p:2,
          "& h4":{
            fontWeight: "bold",
            my: 4,
            fontSize: "2.2rem",
            backgroundColor: "black",
            color: "white",
            p:2
          },
          "& p":{
            textAlign: "justify",
            fontWeight: "600"
          },
          "@media(max-width:600px)":{
            mt:0,
            "& h4":{
              fontSize:"1.5rem"
            }
          }
        }}>
          <Typography variant='h4'>Welcome to My Restaurant</Typography>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, officiis incidunt. Ut reiciendis sequi nisi recusandae, aliquam dolorum provident harum libero optio deserunt itaque eum aut iure amet, similique neque. Tempora, veniam sint ab accusamus alias ipsa numquam ea dignissimos suscipit, soluta dolore explicabo fugiat quaerat ratione minus modi iste enim nisi ipsum, consectetur facilis sed harum laborum necessitatibus. Rem vel voluptates asperiores iusto, error sapiente deleniti necessitatibus fuga iure et dolorum, officiis similique? Ea error enim ab repudiandae vel facilis eius sapiente nostrum iste, debitis animi qui est officia possimus reiciendis vero, facere nemo obcaecati veniam? Alias, voluptatem consequuntur.</p>
          <br/>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eum aliquam culpa rem magnam, eveniet maxime ea provident, at dolorum esse perspiciatis veritatis ipsum expedita et harum iusto! Cumque repudiandae aliquam, est quae nesciunt inventore perspiciatis sunt, libero impedit assumenda, dignissimos modi cum! Voluptates libero voluptate beatae accusantium, nostrum laborum placeat corporis deleniti qui voluptas aperiam et pariatur commodi atque incidunt iste itaque quas, quisquam reprehenderit. Mollitia corporis inventore neque velit iusto deserunt totam optio esse. Atque reiciendis voluptatibus consequatur saepe nam explicabo aperiam ducimus iusto, repellendus, architecto aliquam, molestiae eaque delectus quod? Aut magnam officiis est reprehenderit hic quis.</p>
        </Box>
      </Layout>
    </>
  )
}

export default About
