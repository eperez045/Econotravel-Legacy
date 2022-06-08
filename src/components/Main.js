import React from "react";
import { Box, Button, Typography } from "@mui/material";
import hero1 from "../images/hero-image1.png";
import travel from "../images/travel.png";
import hero2 from "../images/hero-image2.png";

export default function Main() {
  return (
    <main>
      {/* -------------- Sección 1 Hero Image ------------- */}
      <section className="Hero">
        <Box
          style={{
            backgroundImage: `url(${hero1})`,
            height: "650px",
            width: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgrondSize: "cover",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            style={{
              backgroundColor: "#2e5137",
              width: "15rem",
              height: "3rem",
              borderRadius: "50px",
<<<<<<< HEAD
              color: "white"
=======
              color: "#FBF1E3",
              textTransform: "capitalize",
              fontSize: "1.5rem",
              fontWeight: "200",
>>>>>>> a4554408bd5af9cd70ec5a161c6ec29ce6c9dde3
            }}
          >
            Reserva ahora
          </Button>
        </Box>
      </section>

      {/* -------------- Sección 2 Muestra de experiencias ------------- */}

      <section
        className="Experiencias"
        style={{
          backgroundColor: "#FBF1E3",
          height: "30rem",
          textAlign: "center",
          paddingTop: "10rem",
        }}
      >
        <Typography variant="h1" color="#2e5137">
          Experiencias en el área de Barcelona
        </Typography>
        <Typography variant="h5" color="#2e5137">
          Ubicación - Transporte - Duración
        </Typography>
      </section>

      {/* -------------- Sección 3 Texto Travel + Botón de contacto ------------- */}

      <section
        className="Travel"
        style={{ backgroundColor: "#498057", padding: "3rem", display: "flex" }}
      >
        <Box>
          <img src={travel} alt="" />
        </Box>
        <Box style={{ padding: "5rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around"}}>
          <Typography variant="h2" color="#FBF1E3">
            Travel any corner of Barcelona with Us
          </Typography>
          <Typography
            variant="body1"
            color="#FBF1E3"
            style={{ width: "30rem", fontSize: "1.3rem", fontWeight: "300" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            id rutrum sapien. Donec cursus scelerisque diam, vel luctus neque
            tempor sed. Aliquam venenatis euismod efficitur. Vivamus congue,
            urna quis vulputate tincidunt, velit urna suscipit ex, et ornare
            nisi turpis et ligula. Vestibulum iaculis dolor condimentum tellus
            fringilla bibendum in at justo. Morbi nulla mauris, sagittis ut
            convallis et, scelerisque sit amet ipsum. Morbi ac vestibulum quam,
            in viverra quam etiam eget posuere enim, at blandit enim. Integer
            egestas nec risus ut viverra.
          </Typography>
          <Button
            style={{
              border: "2.5px solid #FBF1E3",
              color: "#FBF1E3",
              marginTop: "2rem",
              textTransform: "capitalize",
              width: "12rem",
              padding: "0.3rem",
              borderRadius: "50px",
              fontSize: "1.3rem",
              fontWeight: "200",
            }}
          >
            Contáctanos
          </Button>
        </Box>
      </section>

      {/* -------------- Sección 4 Hero con botón de registro ------------- */}

      <section
        className="Hero2"
        style={{ backgroundColor: "#FBF1E3", height: "40rem", padding: "5rem" }}
      >
        <Box
          style={{
            backgroundImage: `url(${hero2})`,
            height: "650px",
            width: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgrondSize: "cover",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h3"
            color="#FBF1E3"
            style={{ width: "40rem", textAlign: "center" }}
          >
            No te lo pierdas, regístrate hoy y recibe un 25% de descuento en tu
            próxima experiencia
          </Typography>
          <Button
            style={{
              backgroundColor: "#2e5137",
              width: "20rem",
              height: "3rem",
              borderRadius: "50px",
<<<<<<< HEAD
              marginTop: "2rem",color:"white"}}>Registrate ahora</Button>
=======
              marginTop: "2rem",
              color: "#FBF1E3",
              textTransform: "capitalize",
              fontSize: "1.5rem",
              fontWeight: "200",
            }}
          >
            Registrate ahora
          </Button>
>>>>>>> a4554408bd5af9cd70ec5a161c6ec29ce6c9dde3
        </Box>
      </section>
    </main>
  );
}
