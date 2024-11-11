import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import { useProduct } from "../../store/useProduct";
import Product from "../../components/product";
import { Sorch } from "../sorch/sorch";

export default function Home() {
  const { data } = useProduct((state) => state);
  console.log(data);

  const categories = [
    "Discover",
    "Animation",
    "Branding",
    "Illustration",
    "Mobile",
    "Print",
    "Product Design",
    "Typography",
    "Web Design",
  ];

  return (
    <>
      <Stack
        sx={{
          backgroundImage: `url(https://s3-alpha-sig.figma.com/img/e01b/fd2b/30c6cd4eaf3d9046fb20affbd4dd7e4e?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KLN8YPj-j7LIY7JhBz0T3sRqBH5HgUQAX7bYIx6jTD1-x4xxxkFFYf-rxuiWcfJGoIcfn~7wWMJ6piXBzzwDi3y0vEFlCpwcksKlEIE2B3RnqDd8S4g~1yj61V4fHFNCHRddtpw-0u2X3db6fq9A~9aSU4QPBkG7Wnq15LDj3UmmmLrMDmTxh3W6LoLZJXH4PDqgl6UeKrimthGyuCnz6Ep6rJyPVAtkEtVN0yZLdJ~hbh6nghYVJnWE0KQikXHGjWH4mo2DER0QOw2NVCLhuNVq5-wwzDO5dx-utKzuTjBc1cFIUy9wxBUpncFFJ-mZ8iz8~wYTlYE-qtwDYukfyw__)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container maxWidth="xl">
          <Stack
            sx={{
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
            width={"80%"}
            my={5}
            direction={{ xs: "column", sm: "row" }}
          >
            {categories.map((label) => (
              <Stack
                key={label}
                sx={{
                  color: "white",
                  backgroundColor: "black",
                  padding: "18px 20px",
                  borderRadius: "50px",
                  textAlign: "center",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#333",
                  },
                }}
              >
                {label}
              </Stack>
            ))}
          </Stack>
        </Container>
      </Stack>
      <Sorch/>
      <Stack py={5}>
        <Container maxWidth="xl">
          <Stack
            direction="row"
            flexWrap="wrap"
            gap={3}
            justifyContent="center"
            sx={{
              alignItems: "stretch",
              rowGap: 4,
            }}
          >
            {data?.map((item) => (
              <Product key={item.id} {...item} />
            ))}
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
